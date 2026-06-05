// Finalizes the CommonJS build output (dist/cjs).
//
// The package is published ESM-first ("type": "module" in the root package.json),
// so the CommonJS files emitted under dist/cjs need their own package.json marking
// that subtree as CommonJS ({ "type": "commonjs" }).
//
// That nested package.json ALSO re-declares the package name and the compat subpath
// exports. tsc does not rewrite import specifiers, so dist/cjs files still contain the
// internal self-imports `@lumera-protocol/sdk-js/compat/{blake3,zstd}` (see
// src/internal/{hash,zstd}.ts). Declaring `name` + `exports` here makes Node's package
// self-referencing resolve those specifiers to the LOCAL CommonJS compat modules.
//
// Without it, the self-reference escapes to the ESM build (dist/esm/compat/*.node.js),
// which require() cannot load on Node 18 (ERR_REQUIRE_ESM) and which only resolves at
// all on some Node versions / node_modules layouts (npm-flat vs pnpm-symlinked). With
// it, CJS resolution is deterministic and layout-independent.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const cjsDir = join(dirname(fileURLToPath(import.meta.url)), "..", "dist", "cjs");

const pkg = {
  name: "@lumera-protocol/sdk-js",
  type: "commonjs",
  exports: {
    "./compat/blake3": "./compat/blake3.node.js",
    "./compat/zstd": "./compat/zstd.node.js",
  },
};

writeFileSync(join(cjsDir, "package.json"), `${JSON.stringify(pkg, null, 2)}\n`);
console.log("wrote dist/cjs/package.json (CommonJS marker + compat self-reference exports)");
