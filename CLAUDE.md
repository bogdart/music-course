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

* About a year of content, 55 weeks × 2–4 lessons (~170 lessons), in 5 phases (re-sequenced Sept 2026 so the ear
  stages in `docs/EAR_SKILL_MAP.md` get their own weeks):
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

## Who this is for (owner's words, September 2026)

> The target is to learn me music, there are no other customers. We can even introduce new kinds of tasks,
> change more.

The app has exactly one learner, the owner, so nothing is sacred: restructure the curriculum, change the pace,
add exercise types or app mechanics whenever that teaches better. Prefer a whole-curriculum fix over local
patches. Where the learner actually is: theory known on paper, but the ear started near zero (octave
same/different was at chance after week 1), and chords were completely new. Rules that follow from it:

* Never use a concept in a drill (chords, cadence, "home", key changes, inversions…) before a lesson has
  explained it and let the learner hear it; an unexplained reference sound is noise.
* Be honest about perception: describe what the learner will actually hear, not an idealised claim.
* Ramp one dimension at a time, from the easiest perceptual cue; keep one key for weeks before varying it.
* A drill near chance level is a design failure to fix, not a reason to push on. Judge by the live learner
  data on the home server (see `DEPLOYMENT.md`), not by assumption.

## Docs (read these before working)

* `docs/PLAN.md` — milestones, principles, risks.
* `docs/ARCHITECTURE.md` — monorepo layout, domain model, audio/input/DAW/API design.
* `docs/CONTENT_SCHEMA.md` — **the contract** between lesson content and code
  (lesson.md format, fenced block types, exercise catalogue, daw-task predicates).
* `docs/CURRICULUM.md` — week-by-week outline for all 55 weeks.
* `docs/EAR_SKILL_MAP.md` — the ear stages, the research behind their pacing, and the binding per-lesson unlock table.

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
