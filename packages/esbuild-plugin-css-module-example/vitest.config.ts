import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: [],
		coverage: {
			reporter: ["text", "json", "html", "clover"],
			exclude: ["__mocks__", "**/index.ts"],
			include: ["src/**/*.{ts,tsx}"],
		},
	},
});
