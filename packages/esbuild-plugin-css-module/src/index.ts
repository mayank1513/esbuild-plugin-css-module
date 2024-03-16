import { Plugin, PluginBuild } from "esbuild";
import fs from "node:fs";
import path from "node:path";
import postcss from "postcss";
import postcssModules from "postcss-modules";
import autoPrefixer from "autoprefixer";
import { compile } from "sass";

const uuid = () => (Date.now() * Math.random()).toString(36).slice(0, 8);

interface CSSModulePluginOptions {
	/** by default name is generated without hash so that it is easier and reliable for library users to override some CSS */
	generateScopedName?: string | ((className: string, filename: string, css: string) => string);
	/** set skipAutoPrefixer to true to disable autoprefixer */
	skipAutoPrefixer?: boolean;
	/** global CSS class prefix. @defaultValue "" */
	globalPrefix?: string;
	/** If you want to keep .module.css files */
	keepModules?: boolean;
}

function applyAutoPrefixer(build: PluginBuild, options: CSSModulePluginOptions, write?: boolean) {
	build.onEnd(async result => {
		if (!options.skipAutoPrefixer) {
			for (const f of result.outputFiles?.filter(f => f.path.match(/\.css$/)) || []) {
				const { css } = await postcss([autoPrefixer]).process(f.text, { from: f.path });
				f.contents = new TextEncoder().encode(css);
			}
		}

		if (!options.keepModules) {
			result.outputFiles = result.outputFiles?.filter(
				file => !file.path.match(/\.module\.(css|js)$/),
			);
		}

		/** assume true if undefined */
		if (write === undefined || write) {
			result.outputFiles?.forEach(file => {
				fs.mkdirSync(path.dirname(file.path), { recursive: true });
				fs.writeFileSync(file.path, file.contents);
			});
		}
	});
}

function handleScss(build: PluginBuild) {
	build.onLoad({ filter: /\.s(c|a)ss$/, namespace: "file" }, args => ({
		contents: compile(args.path).css,
		loader: "css",
	}));
}

function handleModules(build: PluginBuild, { generateScopedName }: CSSModulePluginOptions) {
	const namespace = "scss-module";
	const filter = /\.module\.(sc|sa|c)ss/;
	build.onResolve({ filter, namespace: "file" }, args => ({
		path: `${args.path}#${namespace}`,
		namespace,
		pluginData: {
			pathDir: path.join(args.resolveDir, args.path),
		},
	}));

	build.onLoad({ filter: new RegExp(`#${namespace}$`), namespace }, async args => {
		const { pluginData } = args as {
			pluginData: { pathDir: string };
		};

		const source = compile(pluginData.pathDir).css;

		let cssModule = {};
		const result = await postcss([
			postcssModules({
				getJSON(_, json) {
					cssModule = json;
				},
				generateScopedName,
			}),
		]).process(source, { from: pluginData.pathDir });

		return {
			pluginData: { css: result.css },
			contents: `import "${pluginData.pathDir}"; export default ${JSON.stringify(cssModule)}`,
		};
	});

	build.onResolve({ filter, namespace }, args => ({
		path: path.join(args.resolveDir, args.path, `#${namespace}-data`),
		namespace,
		pluginData: args.pluginData as { css: string },
	}));

	build.onLoad({ filter: new RegExp(`#${namespace}-data$`), namespace }, args => ({
		contents: (args.pluginData as { css: string }).css,
		loader: "css",
	}));
}

function resolveScopedName(options: CSSModulePluginOptions) {
	const globalPrefix = options.globalPrefix ?? "";
	options.generateScopedName = (name, filename) =>
		(globalPrefix ? `${globalPrefix}__` : "") + `${path.basename(filename).split(".")[0]}__${name}`;
}

const cssModulePlugin: (options?: CSSModulePluginOptions) => Plugin = (options = {}) => ({
	name: "esbuild-plugin-react18-css-" + uuid(),
	setup(build): void {
		const write = build.initialOptions.write;
		build.initialOptions.write = false;
		if (!options.generateScopedName) resolveScopedName(options);
		handleModules(build, options);
		handleScss(build);
		applyAutoPrefixer(build, options, write);
	},
});

export = cssModulePlugin;
