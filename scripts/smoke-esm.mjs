// ESM smoke test.
//
// Loads the built ESM bundle under Node's NATIVE ESM loader (plain `node`, no
// bundler) — the scenario that previously failed with ERR_MODULE_NOT_FOUND
// because tsc emitted extension-less relative specifiers. Guards the
// fix-esm-extensions.mjs post-processing step against regressions.
//
// Run after `pnpm build`.
import assert from "node:assert";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

// Native ESM requires Node >= 20: Node 18's CommonJS-interop (cjs-module-lexer)
// can't detect some named exports re-exported from CommonJS deps (e.g.
// @interchainjs/encoding). Node 18 is EOL (April 2025); use the CJS entry
// (require) on Node 18 — see smoke:cjs.
const nodeMajor = Number(process.versions.node.split(".")[0]);
if (nodeMajor < 20) {
  console.log(`ESM smoke skipped on Node ${process.versions.node}: native ESM requires Node >= 20 (CJS works on Node >= 18).`);
  process.exit(0);
}

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const entry = pathToFileURL(join(root, "dist", "esm", "index.js")).href;

const sdk = await import(entry);

const expected = ["RaptorQProxy", "createLumeraClient", "CascadeUploader", "SNApiClient"];
for (const name of expected) {
  assert.strictEqual(typeof sdk[name], "function", `expected export "${name}" to be a function`);
}

console.log(`ESM smoke test passed: import() loaded ${Object.keys(sdk).length} exports`);
