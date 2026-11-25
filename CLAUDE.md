# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

"Sto" — browser game, Angular 22 (standalone components, zoneless, signals) + Angular Material 22 (M3 theme). UI text is in **Polish**. Online multiplayer: each player on their own phone; the Spring Boot backend (`../sto-backend`) runs the game, localStorage keeps only sessions and preferences.

Sibling project `../../spy-project/spy` (Angular 14 party game) is the reference for conventions and patterns.

## Requirements

Node **24** (`.nvmrc`; Angular 22 needs `^22.22.3 || ^24.15`). Machine uses nvm-windows — `nvm use 24` (spy needs `nvm use 16.20.2`).

## Commands

- `npm start` — dev server, http://localhost:4200
- `npm run build` — production build to `dist/sto`
- `npm test` — Vitest unit tests (`ng test`); single run: `npx ng test --watch=false`
- `npm run build:pages` — GitHub Pages build into `docs/` (see below)

## Deployment (GitHub Pages)

The committed `docs/` folder is the deployed site (repo Settings → Pages → branch `main`, folder `/docs`), served at `https://kacperkk2.github.io/sto/`. `npm run build:pages` builds with the `production,pages` configuration (`angular.json`: output straight to `docs/`, `baseHref` `/sto/`) and copies `index.html` to `404.html`, so deep links like `/sto/room/3` work. The build wipes `docs/` first — keep nothing else there (game rules live in the root `GAME_DESIGN.md`). Rebuild and commit `docs/` to redeploy. Prod `apiUrl` (`src/environments/environment.ts`) is still a TODO until the backend has a public HTTPS URL.

## Structure

- `src/app/app.properties.ts` — `CONFIG`: constants, localStorage key prefix, game content.
- `src/app/services/storage/storage.ts` — `Storage`: typed JSON access to localStorage, keys prefixed with `CONFIG.STORAGE_PREFIX`, never throws (returns `null` when unavailable/corrupted).
- Game rules: `GAME_DESIGN.md`. Backend is `../sto-backend` (Spring Boot, in-memory rooms), API contract in `../sto-backend/docs/API.md`.
- `src/app/services/api/` — `RoomApi` (REST, errors mapped to `ApiError`), `RoomEvents` (SSE), `playerTokenInterceptor` (adds `X-Player-Token` from the room session).
- `src/app/services/sessions/sessions.ts` — room sessions (playerId + token), last nick, host's game settings and the ids of questions played as host, per question scenario (sent as `excludedQuestionIds` on game start, reset in lobby settings) in localStorage. Scenarios (question sets) come from `GET /questions/scenarios`; one backend file in `resources/questions/` = one scenario.
- `src/app/services/room-store/room-store.ts` — `RoomStore`, provided by the `Room` component: room state as signals (SSE `state` + `/me`), versioning, server clock offset, player actions. Child views (`lobby`, `round`, `finished`, …) inject it.
- `src/environments/` — `apiUrl` for the backend (`environment.development.ts` used by `ng serve`, swapped via `fileReplacements`). `HttpClient` is already provided in `app.config.ts`.
- `src/styles.scss` — Material theme (dark, orange primary, Lato). Use `--mat-sys-*` CSS variables for colors/typography in component styles.
- Icons: `<mat-icon>` uses Material Symbols Outlined (default font set set in `app.config.ts`).
- Components go in `src/app/components/<name>/`, services in `src/app/services/<name>/` (`ng generate` uses the new file naming: `home.ts`, not `home.component.ts`).
