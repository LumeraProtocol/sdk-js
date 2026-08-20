/**
 * ADR-036 arbitrary-message signing for programmatic (non-browser) wallets.
 *
 * The Cascade uploader needs `signArbitrary` (ADR-036) to sign the LEP-1 layout,
 * index file, and upload auth payload. Until now that method was only provided by
 * the Keplr and Leap browser adapters, so any Node.js / server-side / CI caller
 * using CosmJS `DirectSecp256k1HdWallet` failed with:
 *
 *     TypeError: this.signer.signArbitrary is not a function
 *
 * `createProgrammaticSigner` wraps a CosmJS mnemonic-derived wallet and adds an
 * ADR-036 `signArbitrary`, producing a `UniversalSigner` usable anywhere the
 * Keplr/Leap signers are accepted.
 *
 * @module wallets/programmatic
 */

import { Secp256k1HdWallet, makeSignDoc as makeAminoSignDoc } from "@cosmjs/amino";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import type { AccountData } from "@cosmjs/proto-signing";
import type { ArbitrarySignResponse, UniversalSigner } from "./signer";

/** Options for {@link createProgrammaticSigner}. */
export interface ProgrammaticSignerOptions {
  /** Bech32 prefix for derived addresses. Defaults to `"lumera"`. */
  prefix?: string;
  /** BIP-39 passphrase, if the mnemonic uses one. */
  bip39Password?: string;
}

/**
 * Build a {@link UniversalSigner} from a BIP-39 mnemonic.
 *
 * Combines CosmJS direct (protobuf) transaction signing with ADR-036 arbitrary
 * message signing, matching the interface the Keplr/Leap adapters expose.
 *
 * @example
 * ```typescript
 * const signer = await createProgrammaticSigner(process.env.MNEMONIC!);
 * const [account] = await signer.getAccounts();
 * const client = await createLumeraClient({
 *   preset: "testnet",
 *   signer,
 *   address: account.address,
 * });
 * ```
 */
export async function createProgrammaticSigner(
  mnemonic: string,
  options: ProgrammaticSignerOptions = {}
): Promise<UniversalSigner> {
  const prefix = options.prefix ?? "lumera";
  const opts: any = { prefix };
  if (options.bip39Password !== undefined) {
    opts.bip39Password = options.bip39Password;
  }

  const direct = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, opts);
  const amino = await Secp256k1HdWallet.fromMnemonic(mnemonic, opts);

  const signArbitrary = async (
    _chainId: string,
    signerAddress: string,
    data: string | Uint8Array
  ): Promise<ArbitrarySignResponse> => {
    // Match Keplr/Leap ADR-036 semantics exactly: the `data` field in the
    // MsgSignData envelope is base64(UTF-8 input) for strings, or base64(raw)
    // for byte input. In particular, callers sometimes pass a string that is
    // itself base64; it must still be encoded again rather than treated as an
    // already-encoded ADR-036 data field.
    const dataB64 = Buffer.from(
      typeof data === "string" ? new TextEncoder().encode(data) : data
    ).toString("base64");

    const msg = {
      type: "sign/MsgSignData",
      value: { signer: signerAddress, data: dataB64 },
    };
    // ADR-036 fixes chain_id="", account_number=0, sequence=0, zero fee.
    const signDoc = makeAminoSignDoc([msg], { gas: "0", amount: [] }, "", "", 0, 0);
    const { signature } = await amino.signAmino(signerAddress, signDoc);

    return {
      signed: typeof data === "string" ? data : dataB64,
      signature: signature.signature,
      pub_key: signature.pub_key as ArbitrarySignResponse["pub_key"],
    };
  };

  const signer: UniversalSigner = {
    getAccounts: (): Promise<readonly AccountData[]> => direct.getAccounts(),
    signDirect: (signerAddress, signDoc) => direct.signDirect(signerAddress, signDoc),
    signAmino: (signerAddress, signDoc) => amino.signAmino(signerAddress, signDoc),
    signArbitrary,
  } as UniversalSigner;

  return signer;
}
