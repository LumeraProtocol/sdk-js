import { defineConfig } from "vitest/config";
import path from "node:path";

// Config for the post-build bundler smoke test (tests-dist). It loads the BUILT
// output (dist/esm) through Vite to verify the published bundle is consumable by
// a bundler. The compat subpath self-imports are resolved to the built node
// variants — the same aliasing approach the main vitest.config.ts uses for src.
export default defineConfig({
  resolve: {
    alias: {
      "@lumera-protocol/sdk-js/compat/blake3": path.resolve(__dirname, "dist/esm/compat/blake3.node.js"),
      "@lumera-protocol/sdk-js/compat/zstd": path.resolve(__dirname, "dist/esm/compat/zstd.node.js"),
    },
  },
  test: {
    environment: "node",
    include: ["tests-dist/**/*.ts"],
  },
});
