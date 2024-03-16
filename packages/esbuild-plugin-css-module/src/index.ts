import { Plugin } from "esbuild";
import fs from "node:fs";
import path from "node:path";
import postcss from "postcss";
import postcssModules from "postcss-modules";
import autoPrefixer from "autoprefixer";

const cssModulePlugin: () => Plugin = () => ({
	name: "esbuild-plugin-css-module-" + uuid(),
	setup(build): void {
		build.onResolve({ filter: /\.module\.css$/, namespace: "file" }, args => ({
			path: `${args.path}#css-module`,
			namespace: "css-module",
			pluginData: {
				pathDir: path.join(args.resolveDir, args.path),
			},
		}));
		build.onLoad({ filter: /#css-module$/, namespace: "css-module" }, async args => {
			const { pluginData } = args as {
				pluginData: { pathDir: string };
			};

			const source = fs.readFileSync(pluginData.pathDir, "utf8");

			let cssModule = {};
			const result = await postcss([
				postcssModules({
					getJSON(_, json) {
						cssModule = json;
					},
					generateScopedName: "[name]__[local]",
				}),
				autoPrefixer,
			]).process(source, { from: pluginData.pathDir });

			return {
				pluginData: { css: result.css },
				contents: `import "${pluginData.pathDir}"; export default ${JSON.stringify(cssModule)}`,
			};
		});

		/** apply auto-prefixer to css */

		build.onLoad({ filter: /\.css$/, namespace: "file" }, async args => {
			const source = fs.readFileSync(args.path, "utf8");
			const result = await postcss([autoPrefixer]).process(source, { from: args.path });
			console.log("CSS ------------------------------------ ", result.css);
			return { contents: result.css, loader: "css" };
		});

		build.onResolve({ filter: /\.module\.css$/, namespace: "css-module" }, args => ({
			path: path.join(args.resolveDir, args.path, "#css-module-data"),
			namespace: "css-module",
			pluginData: args.pluginData as { css: string },
		}));

		build.onLoad({ filter: /#css-module-data$/, namespace: "css-module" }, args => ({
			contents: (args.pluginData as { css: string }).css,
			loader: "css",
		}));
	},
});

const uuid = () => (Date.now() * Math.random()).toString(36).slice(0, 8);

export = cssModulePlugin;
