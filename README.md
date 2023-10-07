# esbuild-plugin-css-module [![test](https://github.com/mayank1513/esbuild-plugin-css-module/actions/workflows/test.yml/badge.svg)](https://github.com/mayank1513/esbuild-plugin-css-module/actions/workflows/test.yml) [![Version](https://img.shields.io/npm/v/esbuild-plugin-css-module.svg?colorB=green)](https://www.npmjs.com/package/esbuild-plugin-css-module) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/dt/esbuild-plugin-css-module.svg)](https://www.npmjs.com/package/esbuild-plugin-css-module) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/esbuild-plugin-css-module)

✅ ESBuild plugin to handle CSS modules while building libraries

## Install

```bash
$ pnpm add esbuild-plugin-css-module
```

or

```bash
$ npm install esbuild-plugin-css-module
```

or

```bash
$ yarn add esbuild-plugin-css-module
```

## use with `tsup`

```ts
// tsup.config.ts or tsup.config.js
import { defineConfig } from "tsup";
import cssModulePlugin from "esbuild-plugin-css-module";

export default defineConfig(options => ({
    ...
    esbuildPlugins:[cssModulePlugin()]
}));
```

## use with esbuild

```ts
import cssModulePlugin from "esbuild-plugin-css-module";

esbuild.build({
	...
	plugins: [cssModulePlugin()],
});
```

### 🤩 Don't forger to start [this repo](https://github.com/mayank1513/esbuild-plugin-css-module)!

Want handson course for getting started with Turborepo? Check out [React and Next.js with TypeScript](https://www.udemy.com/course/react-and-next-js-with-typescript/?referralCode=7202184A1E57C3DCA8B2) and [The Game of Chess with Next.js, React and TypeScrypt](https://www.udemy.com/course/game-of-chess-with-nextjs-react-and-typescrypt/?referralCode=851A28F10B254A8523FE)

![Repo Stats](https://repobeats.axiom.co/api/embed/2ef1a24385037998386148afe5a98ded6006f410.svg "Repobeats analytics image")

## License

Licensed as MIT open source.

## Credits

Solution adopte from [this discussion](https://github.com/egoist/tsup/issues/536#issuecomment-1302012400).

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
```
