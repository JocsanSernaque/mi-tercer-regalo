## Purpose
Give AI coding agents the minimal, actionable knowledge to work on this Angular (v19) project with Server-Side Rendering (SSR).

## Quick start (what to run)
- Install deps: `npm install`
- Dev server (client-only): `npm start` (runs `ng serve` -> http://localhost:4200/)
- Build production (browser + server artifacts): `npm run build` (outputs to `dist/mi-tercer-regalo`)
- Run built SSR server: after a successful build run `npm run serve:ssr:mi-tercer-regalo` (this executes `node dist/mi-tercer-regalo/server/server.mjs`)
- Run unit tests: `npm run test` (Karma)

Notes: The SSR server entry is implemented in `server.ts` (root). If SSR serving fails, confirm `dist/mi-tercer-regalo/server/server.mjs` and `index.server.html` exist after build.

## Big-picture architecture
- Frontend: Angular 19 application in `src/`. The project uses standalone components (no NgModule). Entry points: `src/main.ts` (browser) and `src/main.server.ts` (server).
- Routing: `src/app/app.routes.ts` contains the app routes. Pages live under `src/app/components/pages/`.
- App-wide providers & SSR hooks: `src/app/app.config.ts` configures router, view transitions and client hydration. `src/app/app.config.server.ts` merges server-only providers (calls `provideServerRendering()`).
- SSR glue: `server.ts` creates an Express server and uses `CommonEngine` from `@angular/ssr/node` to render Angular on the server.
- Build output: `angular.json` places artifacts in `dist/mi-tercer-regalo` and copies `src/assets` and `public/` into the browser output.

## Project-specific conventions & patterns
- Standalone components: components declare an `imports: [...]` array in the `@Component` decorator. Example: `src/app/app.component.ts` and `src/app/components/navbar/navbar.component.ts`.
- File layout: components grouped under `src/app/components/<feature>/`. Pages are under `pages/` subfolders (e.g., `products`, `services`).
- Assets: images and static files live in `src/assets/` and `public/`. `angular.json` copies both into the final `browser` folder.
- SSR-aware config: app-level providers are defined in `app.config.ts` and augmented for server rendering in `app.config.server.ts`. When editing rendering behavior, update both files or the merge in `app.config.server.ts`.
- Express server pattern: `server.ts` serves static files from the browser folder and falls back to the Angular engine for all other routes. See `server.get('**', ...)` handlers.

## Integration points & dependencies
- Server: `express` + `@angular/ssr`/`@angular/platform-server` (check `server.ts` and `src/main.server.ts`).
- Styling pipeline: `tailwindcss` + `postcss` are present in dependencies/config — styling is in `src/styles.css`.
- Testing: `karma` + `jasmine` (see `npm run test`).

## Files to check when making changes
- Routing / navigation: `src/app/app.routes.ts`, `src/app/components/navbar/navbar.component.html`
- App providers / SSR config: `src/app/app.config.ts`, `src/app/app.config.server.ts`, `src/main.server.ts`, `server.ts`
- Build and copy behavior: `angular.json`
- Entrypoints and bootstrapping: `src/main.ts`, `src/main.server.ts`

## Quick debugging tips
- Dev workflow: iterate with `npm start` and verify client-only changes. Use `ng build` + `npm run serve:ssr:mi-tercer-regalo` to reproduce SSR-only issues.
- SSR runtime errors: check Node version (project uses ESM-built server `.mjs`), then run the server script and inspect terminal output. Logs are produced by Express in `server.ts`.
- Missing assets in SSR: ensure `angular.json` asset globs include the target files (this project copies `src/assets` and `public/`).

## Small gotchas observed (follow existing patterns)
- Many components are implemented as standalone components — prefer using `imports: [...]` inside the `@Component` decorator when adding dependencies.
- Some source files reference deep `node_modules` paths; prefer package imports (e.g., `import { RouterOutlet } from '@angular/router'`) to keep paths stable.

## If you're changing routing or SSR
- Update `src/app/app.routes.ts` for navigation. For SSR provider changes, update `src/app/app.config.server.ts` to merge server providers. Rebuild with `npm run build` and test with `npm run serve:ssr:mi-tercer-regalo`.

## Where to commit docs / tests
- Add tests under `src/` alongside components (project already uses Karma/Jasmine). Add developer-facing notes into `README.md` or this file for changes that affect build/serve workflows.

---
If anything here is unclear or you want more detail about a specific area (routing, SSR bootstrapping, or the build pipeline), say which file or workflow and I will expand this file accordingly.
