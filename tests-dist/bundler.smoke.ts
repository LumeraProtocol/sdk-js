// Bundler-path regression test.
//
// Imports the BUILT ESM bundle (dist/esm) through Vite — the resolver/transform
// pipeline used by Vite, Next, and other bundlers — and asserts the module graph
// resolves and the public exports are reachable. This guards the bundler
// consumption path (per reviewer request) and ensures the post-build extension
// rewrite (fix-esm-extensions.mjs) keeps the build bundler-consumable.
//
// Import-only on purpose: it does not invoke RaptorQ, so the lazy browser WASM
// (`?url`) / Node `fs` branches are never triggered. Run after `pnpm build` via
// `pnpm smoke:bundler` (vitest.dist.config.ts).
import { test, expect } from "vitest";

import * as sdk from "../dist/esm/index.js";

test("a bundler (Vite) resolves and loads the built ESM package", () => {
  for (const name of ["createLumeraClient", "RaptorQProxy", "CascadeUploader", "SNApiClient"]) {
    expect(typeof (sdk as Record<string, unknown>)[name], `export "${name}"`).toBe("function");
  }
});
