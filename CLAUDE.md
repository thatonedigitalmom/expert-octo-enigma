# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A Node.js/TypeScript CLI (`expert-octo-enigma`). Native ESM (`"type": "module"` in `package.json`), no bundler.

## Commands

```sh
npm install          # install dependencies
npm run dev -- <cmd> [args]   # run the CLI from source via tsx, e.g. npm run dev -- greet Ada
npm run build         # compile src/ -> dist/ with tsc
npm start             # run the compiled CLI (dist/index.js)
npm test              # run the full test suite once (vitest run)
npm run test:watch    # run tests in watch mode
npm run lint          # ESLint (flat config, eslint.config.js)
npm run format        # check formatting with Prettier (no write)
npm run format:write  # apply Prettier formatting
```

Run a single test file or case with vitest directly, e.g.:
```sh
npx vitest run src/cli.test.ts
npx vitest run -t "greets the given name"
```

## Architecture

- `src/index.ts` is the executable entrypoint: it parses `process.argv`, dispatches on the parsed command, and prints output. Keep it a thin shell — no logic beyond argument dispatch and `console.log`/`console.error` calls.
- `src/cli.ts` holds the testable logic (`parseArgs`, command implementations like `greet`). New CLI behavior should be added here as plain functions, then wired into the `switch` in `src/index.ts`.
- Tests live beside the source they cover (`src/cli.test.ts`), not in a separate `test/` tree.
- TypeScript is configured for `NodeNext` module resolution (`tsconfig.json`), so relative imports between source files must use explicit `.js` extensions (e.g. `import { greet } from "./cli.js"`) even though the source files are `.ts`.
