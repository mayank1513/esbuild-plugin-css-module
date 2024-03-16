import fs from "node:fs";
import path from "node:path";
import { describe, test } from "vitest";

/** testing tsup example - make sure it is build before running this test suit */
describe("Test plugin with tsup", () => {
	const exampleBuildDir = path.resolve(
		process.cwd(),
		"..",
		"esbuild-plugin-css-module-example",
		"dist",
	);
	test(`Test CSS Class`, ({ expect }) => {
		const text = fs.readFileSync(path.resolve(exampleBuildDir, "server", "index.js"), "utf-8");
		expect(/{fork:["'][^"']*fork-me__fork[^"']*["']/.test(text)).toBe(true);
	});
});
