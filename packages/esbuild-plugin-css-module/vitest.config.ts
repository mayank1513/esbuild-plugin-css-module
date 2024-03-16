import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    exclude: ["node_modules", "test-build", "test-build1"],
    coverage: {
      include: ["src/**"],
      reporter: ["text", "json", "clover", "html"],
    },
  },
});
