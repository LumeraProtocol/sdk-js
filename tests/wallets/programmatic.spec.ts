import { describe, expect, it } from "vitest";
import { createProgrammaticSigner } from "src/wallets/programmatic";

// BIP-39 test vector; never use for real funds.
const MNEMONIC =
  "abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about";

describe("createProgrammaticSigner", () => {
  it("provides direct, amino, and ADR-036 arbitrary signing", async () => {
    const signer = await createProgrammaticSigner(MNEMONIC);
    const [account] = await signer.getAccounts();

    expect(account.address).toMatch(/^lumera1/);
    expect(typeof signer.signDirect).toBe("function");
    expect(typeof signer.signAmino).toBe("function");
    expect(typeof signer.signArbitrary).toBe("function");

    const dataB64 = Buffer.from("cascade-index").toString("base64");
    const out = await signer.signArbitrary(
      "lumera-testnet-2",
      account.address,
      dataB64
    );

    // Return shape mirrors Keplr: `signed` is the original input while the
    // ADR-036 envelope internally contains base64(UTF-8 input).
    expect(out.signed).toBe(dataB64);
    expect(Buffer.from(out.signature, "base64")).toHaveLength(64);
    expect(Buffer.from(out.pub_key.value, "base64")).toEqual(Buffer.from(account.pubkey));
  });

  it("base64-encodes byte input before ADR-036 signing", async () => {
    const signer = await createProgrammaticSigner(MNEMONIC);
    const [account] = await signer.getAccounts();
    const bytes = new TextEncoder().encode("binary payload");

    const out = await signer.signArbitrary("ignored-by-adr036", account.address, bytes);

    expect(out.signed).toBe(Buffer.from(bytes).toString("base64"));
  });
});
