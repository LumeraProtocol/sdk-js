// Post-processes the build output to add explicit file extensions to relative
// import/export specifiers — in both the ESM JS (dist/esm) and the type
// declarations (dist/types).
//
// tsc is configured with `moduleResolution: "Bundler"`, so it emits relative
// specifiers without extensions (e.g. `from "./client"`). Bundlers tolerate
// that, but:
//   - Node's native ESM loader requires the extension on the .js files,
//     otherwise it throws ERR_MODULE_NOT_FOUND; and
//   - TypeScript consumers on `moduleResolution: "node16"/"nodenext"` require
//     the extension in the .d.ts files (TS2834).
// Both want the runtime extension `.js` (TS maps `./x.js` -> `./x.d.ts`), so we
// rewrite `./x` -> `./x.js` (or `./x/index.js` for directories) in both trees.
//
// It runs on the build OUTPUT, so it covers hand-written and generated
// (src/codegen) modules without changing source or the codegen pipeline.
//
// Uses the TypeScript AST (not regex) so only real import/export specifiers are
// touched — never strings or JSDoc examples. Bare specifiers (incl. the
// `@lumera-protocol/sdk-js/compat/*` self-imports), `node:*`, and already-
// extensioned specifiers are left untouched.
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const distDir = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const roots = [join(distDir, "esm"), join(distDir, "types")];

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(p));
    else if (entry.name.endsWith(".js") || entry.name.endsWith(".d.ts")) files.push(p);
  }
  return files;
}

// Returns the rewritten specifier, or null to leave it unchanged. Resolves
// against either a .js (dist/esm) or .d.ts (dist/types) sibling, but always
// writes the runtime `.js` extension.
function rewriteSpecifier(fileDir, spec) {
  if (!spec.startsWith("./") && !spec.startsWith("../")) return null; // bare / self-ref
  if (/\.(js|mjs|cjs|json)$/.test(spec)) return null; // already has an extension
  const target = resolve(fileDir, spec);
  if (existsSync(`${target}.js`) || existsSync(`${target}.d.ts`)) return `${spec}.js`;
  if (
    existsSync(target) &&
    statSync(target).isDirectory() &&
    (existsSync(join(target, "index.js")) || existsSync(join(target, "index.d.ts")))
  ) {
    return `${spec.replace(/\/?$/, "")}/index.js`;
  }
  return null; // unresolved — leave as-is so it surfaces loudly rather than silently
}

function collectSpecifierNodes(sourceFile) {
  const nodes = [];
  const visit = (node) => {
    if (
      (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) &&
      node.moduleSpecifier &&
      ts.isStringLiteral(node.moduleSpecifier)
    ) {
      nodes.push(node.moduleSpecifier);
    } else if (
      ts.isCallExpression(node) &&
      node.expression.kind === ts.SyntaxKind.ImportKeyword &&
      node.arguments.length > 0 &&
      ts.isStringLiteral(node.arguments[0])
    ) {
      nodes.push(node.arguments[0]); // dynamic import("...")
    } else if (
      ts.isImportTypeNode(node) &&
      node.argument &&
      ts.isLiteralTypeNode(node.argument) &&
      ts.isStringLiteral(node.argument.literal)
    ) {
      nodes.push(node.argument.literal); // inline `import("./x").Type` in .d.ts
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);
  return nodes;
}

let filesChanged = 0;
let specifiersRewritten = 0;
let unresolved = 0;

for (const root of roots) {
  if (!existsSync(root)) continue;
  for (const file of walk(root)) {
    const text = readFileSync(file, "utf8");
    const scriptKind = file.endsWith(".d.ts") ? ts.ScriptKind.TS : ts.ScriptKind.JS;
    const sourceFile = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, scriptKind);
    const fileDir = dirname(file);

    const edits = [];
    for (const literal of collectSpecifierNodes(sourceFile)) {
      const spec = literal.text;
      const rewritten = rewriteSpecifier(fileDir, spec);
      if (rewritten === null) {
        if ((spec.startsWith("./") || spec.startsWith("../")) && !/\.(js|mjs|cjs|json)$/.test(spec)) {
          unresolved++;
          console.warn(`  ! could not resolve relative specifier "${spec}" in ${file}`);
        }
        continue;
      }
      edits.push({ start: literal.getStart(sourceFile) + 1, end: literal.getEnd() - 1, value: rewritten });
    }

    if (edits.length > 0) {
      edits.sort((a, b) => b.start - a.start); // apply back-to-front to keep offsets valid
      let out = text;
      for (const e of edits) out = out.slice(0, e.start) + e.value + out.slice(e.end);
      writeFileSync(file, out);
      filesChanged++;
      specifiersRewritten += edits.length;
    }
  }
}

console.log(`fix-esm-extensions: rewrote ${specifiersRewritten} specifiers in ${filesChanged} files`);
if (unresolved > 0) {
  console.error(`fix-esm-extensions: ${unresolved} relative specifier(s) could not be resolved`);
  process.exit(1);
}
