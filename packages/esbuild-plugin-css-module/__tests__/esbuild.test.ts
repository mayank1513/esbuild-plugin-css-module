import fs from "node:fs";
import path from "node:path";
import { describe, test, beforeAll } from "vitest";
import esbuild from "esbuild";
import cssModulePlugin from "../src";
import glob from "tiny-glob";

describe.concurrent.todo("Test plugin with esbuild", async () => {
	const exampleBuildDir = path.resolve(process.cwd(), "test-build");

	beforeAll(async () => {
		await esbuild.build({
			format: "cjs",
			target: "es2019",
			sourcemap: false,
			bundle: true,
			minify: true,
			plugins: [cssModulePlugin()],
			entryPoints: await glob("../esbuild-plugin-css-module-example/src/**/*.*"),
			publicPath: "https://my.domain/static/",
			external: ["react", "react-dom"],
			outdir: "./test-build",
		});
	});

	test(`Test CSS Class Hash`, ({ expect }) => {
		const text = fs.readFileSync(path.resolve(exampleBuildDir, "server", "index.js"), "utf-8");
		expect(/i={fork:"_fork/.test(text)).toBe(true);
	});
});
