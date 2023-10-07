import fs from "node:fs";
import path from "node:path";
import { describe, test } from "vitest";

/** testing tsup example - make sure it is build before running this test suit */
describe.concurrent("Test plugin with default options in example build with tsup", () => {
	const exampleBuildDir = path.resolve(
		process.cwd(),
		"..",
		"esbuild-plugin-css-module-example",
		"dist",
	);
	test(`"use client"; directive should be present in client components`, ({ expect }) => {
		const text = fs.readFileSync(path.resolve(exampleBuildDir, "server", "index.js"), "utf-8");
		expect(/i={fork:"_fork/.test(text)).toBe(true);
	});
});
