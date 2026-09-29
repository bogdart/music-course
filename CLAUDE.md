# Music Course — CLAUDE.md

## The idea (owner's description, verbatim)

> I want an app that would work in my local network for teaching me music. I
> want to learn both music theory and music composition. I plan to use DAW, so
> what I was thinking that we might develop microdaw with basic functionality
> and several instruments. I also have a small MIDI keyboard, so it should
> support it as well as on screen keyboard. So the idea that we have 2-3
> lessons per week for a half a year, and during this time we learn all —
> notes, scales, tempo, layering. We learn some classic and contemporary songs.
> We do solfeggio and train to recognize notes in different scales. Then later
> we learn music composition and create a lot of songs from end to finish,
> while studying some advanced stuff like jazz music. Everything should be
> fully interactive with a lot of practice. Currently my level is absolutely
> zero, especially on practical level. Like I don't hear the root of the chord,
> same note of different octaves sound completely different to me. And after a
> year I want to implement a music idea into a song from end to finish, as well
> as to decompose any current song (in popular music) that I hear.

## Additions / interpretation

* One year of content, 52 weeks × 2–3 lessons (~130 lessons), in 5 phases:
  Foundations → Harmony & Songs → Songwriting & Arrangement → Composition
  Studio & Jazz → Transcription & Mastery. See `docs/CURRICULUM.md`.
* Ear training is the spine: every lesson has it, and a spaced-repetition
  deck (in *sessions*, not days) runs across the year. Octave equivalence and
  chord-root hearing are explicitly drilled from week 1 and week 11.
* The learner makes something in the DAW every week from week 2.
* LAN-only, single Node process, no auth, SQLite persistence; any device on
  the network can open it. No cloud calls at runtime.
* Copyright: public-domain pieces are transcribed in full; contemporary songs
  are analysed by reference (form/key/progression) only, never transcribed.

## Docs (read these before working)

* `docs/PLAN.md` — milestones, principles, risks.
* `docs/ARCHITECTURE.md` — monorepo layout, domain model, audio/input/DAW/API design.
* `docs/CONTENT_SCHEMA.md` — **the contract** between lesson content and code
  (lesson.md format, fenced block types, exercise catalogue, daw-task predicates).
* `docs/CURRICULUM.md` — week-by-week outline for all 52 weeks.

## Structure

```
apps/web               Vite + React + TS SPA: audio (Tone.js), input (Web MIDI), keyboard, staff (VexFlow), lesson runner, exercises, DAW
apps/server            Node 26 + Hono + node:sqlite: content API, progress, SRS, DAW projects; serves built web app on 0.0.0.0:24800
packages/core          Pure TS (no DOM): theory helpers (tonal), seq mini-language parser, exercise generate/evaluate, daw-task predicates, SRS
packages/content-schema Zod schemas + `validate` CLI for content/
content/               curriculum.json, glossary.md, lessons/<wNN-lM-slug>/lesson.md
docs/                  plan, architecture, schema, curriculum
data/                  runtime SQLite (gitignored)
```

## Conventions

* TypeScript strict everywhere; ESM; Node 26 (`node:sqlite`, no native deps).
* PPQ = 480; pitches as MIDI numbers internally, note names (`C#4`) at edges.
* The music snippet mini-language (`C4:q [E4 G4]:h r:8 kick:q`) is defined in
  `docs/ARCHITECTURE.md` and parsed only by `packages/core` `parseSeq`.
* Exercise types: implement `generate`/`evaluate` in `packages/core` (pure,
  unit-tested, seedable RNG) and the UI in `apps/web/src/exercises`.
  Never add an exercise type without adding it to `docs/CONTENT_SCHEMA.md`.
* Content authors use only the types/fields in `docs/CONTENT_SCHEMA.md`.
  Run `npm run validate:content` before finishing any content work.
* Tests: vitest. `npm test` at root runs all workspaces.
* Commands: `npm install`, `npm run dev` (web :5173 + server :3001),
  `npm run build`, `npm start` (:24800), `npm test`, `npm run validate:content`.

## Deployment

The owner's live instance runs on a home server; its details are in `DEPLOYMENT.md` (local, gitignored —
the repo is public). Read it before deploying, and never put hosts, IPs or paths from it into tracked files.

## Working agreements for agents

* Stay inside your assigned folder(s); do not edit other workspaces' code
  without saying so in your report.
* Keep `docs/` truthful: if you change an interface, update the doc.
* Prefer small, composable modules over frameworks. No global state outside
  the audio engine singleton and zustand stores.
