import { describe, it, expect } from 'vitest';
import {
  selectChunkSize,
  chunkBytes,
  hashLeaf,
  hashNode,
  buildTree,
  deriveIndices,
  buildCommitment,
  DEFAULT_CHUNK_SIZE,
  MIN_TOTAL_SIZE,
  COMMITMENT_TYPE,
  DEFAULT_SVC_CHALLENGE_COUNT,
  DEFAULT_SVC_MIN_CHUNKS_FOR_CHALLENGE,
} from '../../src/cascade/commitment';
import { HashAlgo } from '../../src/codegen/lumera/action/v1/metadata';

describe('selectChunkSize', () => {
  it('returns DEFAULT_CHUNK_SIZE for large files', () => {
    // 2MB file with 4 min chunks → 256KiB chunks = 8 chunks ≥ 4
    expect(selectChunkSize(2 * 1024 * 1024, 4)).toBe(DEFAULT_CHUNK_SIZE);
  });

  it('halves chunk size for small files', () => {
    // 5KB file: 256KiB → only 1 chunk. Need to halve until ≥ 4 chunks.
    // 5120 / 1024 = 5 → chunkSize = 1024
    const chunkSize = selectChunkSize(5120, 4);
    expect(Math.ceil(5120 / chunkSize)).toBeGreaterThanOrEqual(4);
  });

  it('returns 1 for very small files', () => {
    // 4 bytes, need 4 chunks → chunkSize = 1
    expect(selectChunkSize(4, 4)).toBe(1);
  });
});

describe('chunkBytes', () => {
  it('splits bytes into chunks of specified size', () => {
    const data = new Uint8Array([1, 2, 3, 4, 5, 6, 7]);
    const chunks = chunkBytes(data, 3);
    expect(chunks).toHaveLength(3);
    expect(Array.from(chunks[0])).toEqual([1, 2, 3]);
    expect(Array.from(chunks[1])).toEqual([4, 5, 6]);
    expect(Array.from(chunks[2])).toEqual([7]);
  });

  it('handles exact division', () => {
    const data = new Uint8Array([1, 2, 3, 4]);
    const chunks = chunkBytes(data, 2);
    expect(chunks).toHaveLength(2);
  });
});

describe('hashLeaf', () => {
  it('produces 32-byte hash', async () => {
    const data = new Uint8Array([1, 2, 3]);
    const hash = await hashLeaf(0, data);
    expect(hash).toBeInstanceOf(Uint8Array);
    expect(hash.length).toBe(32);
  });

  it('different indices produce different hashes', async () => {
    const data = new Uint8Array([1, 2, 3]);
    const h0 = await hashLeaf(0, data);
    const h1 = await hashLeaf(1, data);
    expect(h0).not.toEqual(h1);
  });
});

describe('hashNode', () => {
  it('produces 32-byte hash', async () => {
    const left = new Uint8Array(32).fill(1);
    const right = new Uint8Array(32).fill(2);
    const hash = await hashNode(left, right);
    expect(hash).toBeInstanceOf(Uint8Array);
    expect(hash.length).toBe(32);
  });

  it('is order-dependent', async () => {
    const a = new Uint8Array(32).fill(1);
    const b = new Uint8Array(32).fill(2);
    const h1 = await hashNode(a, b);
    const h2 = await hashNode(b, a);
    expect(h1).not.toEqual(h2);
  });
});

describe('buildTree', () => {
  it('builds tree with single leaf', async () => {
    const leaf = new Uint8Array(32).fill(42);
    const tree = await buildTree([leaf]);
    expect(tree).toHaveLength(1);
    expect(tree[0]).toHaveLength(1);
    expect(tree[0][0]).toEqual(leaf);
  });

  it('builds tree with two leaves', async () => {
    const l0 = new Uint8Array(32).fill(1);
    const l1 = new Uint8Array(32).fill(2);
    const tree = await buildTree([l0, l1]);
    expect(tree).toHaveLength(2);
    expect(tree[0]).toHaveLength(2); // leaves
    expect(tree[1]).toHaveLength(1); // root
  });

  it('builds tree with odd number of leaves by duplicating the last node', async () => {
    const l0 = new Uint8Array(32).fill(1);
    const l1 = new Uint8Array(32).fill(2);
    const l2 = new Uint8Array(32).fill(3);
    const tree = await buildTree([l0, l1, l2]);
    // Level 0 is padded with a copy of the last leaf (matches the Go
    // merkle.BuildTree), then 4 → 2 → 1.
    expect(tree).toHaveLength(3);
    expect(tree[0]).toHaveLength(4);
    expect(tree[0][3]).toEqual(l2);
    expect(tree[tree.length - 1]).toHaveLength(1); // root

    // The odd node pairs with itself; promoting it unchanged would yield
    // hashNode(hashNode(l0, l1), l2) instead and diverge from the chain.
    const expectedRoot = await hashNode(
      await hashNode(l0, l1),
      await hashNode(l2, l2),
    );
    expect(tree[tree.length - 1][0]).toEqual(expectedRoot);
  });
});

describe('parity with the Go chain implementation', () => {
  // Gold vectors generated with the production Go code the network verifies
  // against: lumera@v1.20.0-rc2 x/action/v1/merkle.BuildTree and
  // supernode/v2@v2.5.2 pkg/cascadekit.BuildCommitmentFromFile.
  // Inputs are deterministic pattern bytes: data[i] = i % 251.
  const pattern = (n: number): Uint8Array => {
    const b = new Uint8Array(n);
    for (let i = 0; i < n; i++) b[i] = i % 251;
    return b;
  };
  const toHex = (u: Uint8Array): string =>
    Array.from(u).map((b) => b.toString(16).padStart(2, '0')).join('');

  // merkle.BuildTree over n chunks of 100 pattern bytes each.
  const TREE_ROOTS: Record<number, string> = {
    1: '78ca6f707098d9aeaabb9d5c9627e57112d4558f8671c4c85abf84fae6728537',
    2: 'e40e95a6d278b6bfcbfc871cb3e373d66683a969845505cac34d419e6945b85f',
    3: '200a5841eddc94942787639e62dbbc4fd78a0c1547cf3212df641b2d47522291',
    4: 'be7e0ee2db07ed863c7501a2e0f0cb517fd3841826cf9582f7abf3d8f5b0d859',
    5: '657308f3aa846892cc76966185dd30ebc2fb5adc4059f406dc6328c75b49d2b3',
    6: '05ead30eeb3d114896f4dd08a56e0dd1eff3de9ff92c4c5dce75b66b037be88c',
    7: '8dbc55950c0f6b03a2f1977c9827b7017d7fd0601803cd6a23acb07407f7a635',
    8: 'b23ca96cd16dba2d18a492035a08b8e950a0327185471aac3d8e162ffbe4876b',
  };

  for (const [count, expectedRoot] of Object.entries(TREE_ROOTS)) {
    it(`buildTree root matches Go for ${count} chunks`, async () => {
      const n = Number(count);
      const data = pattern(n * 100);
      const leaves: Uint8Array[] = [];
      for (let i = 0; i < n; i++) {
        leaves.push(await hashLeaf(i, data.subarray(i * 100, (i + 1) * 100)));
      }
      const tree = await buildTree(leaves);
      expect(toHex(tree[tree.length - 1][0])).toBe(expectedRoot);
    });
  }

  // cascadekit.BuildCommitmentFromFile with challengeCount=8, minChunks=4.
  const COMMITMENTS = [
    { size: 4, chunkSize: 1, numChunks: 4, root: 'db63e60869903c406e89ee1987ff65a1d6e05f0354140576e49c8d03ea83482b', indices: [2, 0, 1, 3] },
    { size: 300, chunkSize: 64, numChunks: 5, root: '90345c45aa032d1bbb6b8c6835ae0005734ec27d5cf596157eb4819eaa213da2', indices: [3, 0, 2, 4, 1] },
    { size: 1064, chunkSize: 256, numChunks: 5, root: '74d4c43726bb8c67e094af2a4d31789453169b179d5c4bf782e209f6bf8fe887', indices: [4, 0, 3, 1, 2] },
    { size: 2048, chunkSize: 512, numChunks: 4, root: 'aba5eb3fddcf81923b1cd341f510b08a659e23f31e215c14597b8a3a0dd5f8fe', indices: [1, 0, 2, 3] },
  ];

  for (const gold of COMMITMENTS) {
    it(`buildCommitment matches Go for a ${gold.size}-byte file`, async () => {
      const result = await buildCommitment(pattern(gold.size), 8, 4);
      expect(result).toBeDefined();
      const { commitment } = result!;
      expect(commitment.chunkSize).toBe(gold.chunkSize);
      expect(commitment.numChunks).toBe(gold.numChunks);
      expect(toHex(commitment.root)).toBe(gold.root);
      expect(commitment.challengeIndices).toEqual(gold.indices);
    });
  }
});

describe('deriveIndices', () => {
  it('produces correct number of indices', async () => {
    const root = new Uint8Array(32).fill(0xAB);
    const indices = await deriveIndices(root, 100, 8);
    expect(indices).toHaveLength(8);
  });

  it('all indices are unique', async () => {
    const root = new Uint8Array(32).fill(0xCD);
    const indices = await deriveIndices(root, 100, 8);
    const unique = new Set(indices);
    expect(unique.size).toBe(indices.length);
  });

  it('all indices are within range', async () => {
    const root = new Uint8Array(32).fill(0xEF);
    const indices = await deriveIndices(root, 10, 8);
    for (const idx of indices) {
      expect(idx).toBeGreaterThanOrEqual(0);
      expect(idx).toBeLessThan(10);
    }
  });

  it('caps at numChunks if fewer than challengeCount', async () => {
    const root = new Uint8Array(32).fill(0x11);
    const indices = await deriveIndices(root, 3, 8);
    expect(indices).toHaveLength(3); // can't have more than numChunks unique indices
  });

  it('is deterministic', async () => {
    const root = new Uint8Array(32).fill(0x22);
    const i1 = await deriveIndices(root, 50, 8);
    const i2 = await deriveIndices(root, 50, 8);
    expect(i1).toEqual(i2);
  });
});

describe('buildCommitment', () => {
  it('returns undefined for tiny files', async () => {
    const data = new Uint8Array([1, 2, 3]); // 3 bytes < MIN_TOTAL_SIZE
    const result = await buildCommitment(data);
    expect(result).toBeUndefined();
  });

  it('builds commitment for normal file', async () => {
    // 2KB file
    const data = new Uint8Array(2048);
    for (let i = 0; i < data.length; i++) data[i] = i % 256;

    const result = await buildCommitment(data, 8, 4);
    expect(result).toBeDefined();
    const { commitment, tree } = result!;

    expect(commitment.commitmentType).toBe(COMMITMENT_TYPE);
    expect(commitment.hashAlgo).toBe(HashAlgo.HASH_ALGO_BLAKE3);
    expect(commitment.totalSize).toBe(BigInt(2048));
    expect(commitment.root.length).toBe(32);
    expect(commitment.challengeIndices.length).toBeGreaterThan(0);
    expect(commitment.challengeIndices.length).toBeLessThanOrEqual(8);

    // All indices should be unique and in range
    const unique = new Set(commitment.challengeIndices);
    expect(unique.size).toBe(commitment.challengeIndices.length);
    for (const idx of commitment.challengeIndices) {
      expect(idx).toBeGreaterThanOrEqual(0);
      expect(idx).toBeLessThan(commitment.numChunks);
    }

    // Tree root should match commitment root
    expect(tree[tree.length - 1][0]).toEqual(commitment.root);
  });

  it('is deterministic', async () => {
    const data = new Uint8Array(1024);
    for (let i = 0; i < data.length; i++) data[i] = i % 256;

    const r1 = await buildCommitment(data, 4, 4);
    const r2 = await buildCommitment(data, 4, 4);
    expect(r1!.commitment.root).toEqual(r2!.commitment.root);
    expect(r1!.commitment.challengeIndices).toEqual(r2!.commitment.challengeIndices);
  });

  it('handles edge case: exactly MIN_TOTAL_SIZE bytes', async () => {
    const data = new Uint8Array([0xDE, 0xAD, 0xBE, 0xEF]); // exactly 4 bytes
    const result = await buildCommitment(data, 8, 4);
    expect(result).toBeDefined();
    expect(result!.commitment.numChunks).toBe(4); // 4 bytes, chunkSize=1 → 4 chunks
    expect(result!.commitment.chunkSize).toBe(1);
  });
});
