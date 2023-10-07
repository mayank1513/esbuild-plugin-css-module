# esbuild-plugin-css-module [![test](https://github.com/mayank1513/esbuild-plugin-css-module/actions/workflows/test.yml/badge.svg)](https://github.com/mayank1513/esbuild-plugin-css-module/actions/workflows/test.yml) [![codecov](https://codecov.io/gh/mayank1513/esbuild-plugin-css-module/graph/badge.svg)](https://codecov.io/gh/mayank1513/esbuild-plugin-css-module) [![Version](https://img.shields.io/npm/v/esbuild-plugin-css-module.svg?colorB=green)](https://www.npmjs.com/package/esbuild-plugin-css-module) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/dt/esbuild-plugin-css-module.svg)](https://www.npmjs.com/package/esbuild-plugin-css-module) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/esbuild-plugin-css-module)

✅ Fully Treeshakable (`import from esbuild-plugin-css-module/client/component`)\
✅ Full TypeScript Support\
✅ Unleash the full power of React18 Server components\
✅ Works with all build systems/tools/frameworks for React18\

## Install

```bash
$ pnpm add esbuild-plugin-css-module
```

or

```
$ npm install esbuild-plugin-css-module
```

or

```
$ yarn add esbuild-plugin-css-module
```

```



## What's different from scaffolding turbo-repo by `create-turbo`

The default scafold from `create-turbo` just gives some stubs for sharing packages across projects/apps within current monorepo.

This template is targeted for sharing packages across organizations/repos publically or privately.

Following features make it really cool and useful

- Unit tests with `vitest`
- Build setup with `tsup` and `esbuild-react18-useclient` Supports React Server components out of the box
- **Automatic file generation**
  - just run `yarn turbo gen` and follow the propts to auto generate your new component with test file and dependency linking
  - follow best practices automatically
- github actions/workflows to auto publish your package when version changes

## Checklist


- [ ] Set up `CodeCov`
  - [ ] Visit codecov and setup your repo
  - [ ] Create repository secrets for `CODECOV_TOKEN`
- [ ] Add `NPM_AUTH_TOKEN` to repository secrets to automate publishing package
  - [ ] login to your `npm` account and create automation token
  - [ ] Create a new repository secrets `NPM_AUTH_TOKEN`
- [ ] Update description in `packages/esbuild-plugin-css-module/package.json`
- [ ] Update Repo Stats by visiting and setting up [repobeats](https://repobeats.axiom.co/)
- [ ] Create your library and update examples
- [ ] Update README
- [ ] Push your changes/Create PR and see your library being automatically tested and published
- [ ] Optionally deploy your example(s) to Vercel.
- [ ] You are most welcome to star this template, contribute, and/or sponsor the `terbo-repo-template` project or my other open-source work

## What's inside?

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Apps and Packages

This Turborepo includes the following packages/examples:

- `nextjs`: a [Next.js](https://nextjs.org/) app
- `vite`: a [Vite.js](https://vitest.dev) app
- `fork-me`: a React component library shared by both `nextjs` and `vite` examples
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/example is 100% [TypeScript](https://www.typescriptlang.org/).

### Build

To build all apps and packages, run the following command:

```
cd esbuild-plugin-css-module
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd esbuild-plugin-css-module
pnpm dev
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

### 🤩 Don't forger to start this repo!

Want handson course for getting started with Turborepo? Check out [React and Next.js with TypeScript](https://www.udemy.com/course/react-and-next-js-with-typescript/?referralCode=7202184A1E57C3DCA8B2) and [The Game of Chess with Next.js, React and TypeScrypt](https://www.udemy.com/course/game-of-chess-with-nextjs-react-and-typescrypt/?referralCode=851A28F10B254A8523FE)

![Repo Stats](https://repobeats.axiom.co/api/embed/2ef1a24385037998386148afe5a98ded6006f410.svg "Repobeats analytics image")

## License

Licensed as MIT open source.

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
