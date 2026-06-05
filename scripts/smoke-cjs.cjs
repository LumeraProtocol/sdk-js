#!/usr/bin/env node
/**
 * CJS smoke test.
 *
 * Loads the built CommonJS bundle in a real Node `require()` context — the way a
 * CommonJS consumer (`require("@lumera-protocol/sdk-js")`) does. This guards two
 * regressions that the unit tests cannot catch (vitest aliases the compat imports
 * and runs in happy-dom, so it never exercises Node's own module resolution):
 *
 *   1. `main` / `exports.require` must point at an emitted CommonJS file.
 *   2. The internal self-imports `@lumera-protocol/sdk-js/compat/{blake3,zstd}`
 *      must resolve to the LOCAL CommonJS compat modules (see finalize-cjs.mjs),
 *      not escape to the ESM build (which require() cannot load on Node 18).
 *
 * Run after `pnpm build`.
 */
const assert = require("node:assert");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

// Mirrors `require("@lumera-protocol/sdk-js")`: resolves via package.json -> main.
const sdk = require(root);

const expected = ["RaptorQProxy", "createLumeraClient", "CascadeUploader", "SNApiClient"];
for (const name of expected) {
  assert.strictEqual(typeof sdk[name], "function", `expected export "${name}" to be a function`);
}

console.log(`CJS smoke test passed: require() loaded ${Object.keys(sdk).length} exports`);
