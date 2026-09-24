# Music Course

A self-hosted, LAN-only app for learning music theory, ear training and composition
over one year: lessons with interactive exercises, spaced-repetition ear training,
MIDI + on-screen keyboard, and (from milestone M3) a micro-DAW.

See `CLAUDE.md` and `docs/` (PLAN, ARCHITECTURE, CONTENT_SCHEMA, CURRICULUM).

## Requirements

* Node **26** (uses built-in `node:sqlite`, no native modules) and npm 11.
* A browser with Web Audio (any modern one). Web MIDI works in Chromium-based
  browsers (Chrome/Edge/Brave) — Firefox needs a site permission add-on; Safari has no Web MIDI.

## Setup

```bash
npm install
```

## Run (development)

```bash
npm run dev
```

* Web (Vite, hot reload): `http://localhost:5173` — also bound to `0.0.0.0`, so other devices can open `http://<your-LAN-IP>:5173`.
* API server: `http://localhost:3001` (Vite proxies `/api` to it).
* `content/` is watched: edits to lessons reload automatically.
* Find your LAN IP with `hostname -I` (Linux) or `ipconfig getifaddr en0` (macOS).
* Dev fixture lesson exercising every block type: `http://localhost:5173/dev/demo`.

## Run (production, single process)

```bash
npm run build
npm start          # http://0.0.0.0:8080 — prints the LAN URLs on startup
```

Environment overrides: `PORT`, `HOST`, `CONTENT_DIR`, `DATA_DIR` (SQLite at `data/app.db`), `WEB_DIST`, `WATCH_CONTENT=1`.

Audio in browsers only starts after a user gesture: tap the **"Tap to enable audio"** banner once.
Web MIDI (and Web Audio on some phones) requires a *secure context*: `localhost` is fine; for
other LAN devices use Chrome's `chrome://flags/#unsafely-treat-insecure-origin-as-secure`
with `http://<LAN-IP>:8080`, or put the app behind a local HTTPS proxy.

### Optional: sampled piano

Put Salamander-style piano samples (`A0.mp3`, `C1.mp3`, `Ds1.mp3`, `Fs1.mp3`, … `C8.mp3`) in
`apps/web/public/samples/piano/` (gitignored) before `npm run build`; otherwise a synth piano is used.

## Quality checks

```bash
npm run typecheck          # tsc for all workspaces
npm test                   # vitest: core, content-schema, server, web
npm run validate:content   # validate content/ (curriculum, glossary, lessons, blocks)
```

`validate:content` options: `npm run validate:content -- w03-l2-major-scale --quiet --strict`
(limit to lessons, hide warnings, treat warnings as errors). Exit code 1 on errors.

## Layout

```
apps/web                 Vite + React SPA (audio engine, input, staff, lesson runner, exercises, pages)
apps/server              Hono + node:sqlite API; serves apps/web/dist in production
packages/core            Pure TS: theory (tonal), seq mini-language, exercise engine, SRS, shared API types
packages/content-schema  Zod schemas, parseLesson, glossary parser, validate CLI
content/                 Curriculum, glossary, lessons (Markdown + fenced JSON blocks)
data/                    SQLite database (gitignored)
```
