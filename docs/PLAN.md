# Music Course App — Implementation Plan

## Vision (from the owner)

A self-hosted app on the local network that teaches music theory and music
composition from absolute zero to "implement a musical idea as a finished song"
and "decompose any current pop song by ear" within one year. It includes a
micro-DAW with several instruments, supports a hardware MIDI keyboard and an
on-screen keyboard, and delivers 2–3 fully interactive lessons per week with
lots of practice: notes, scales, tempo, layering, classic and contemporary
songs, solfeggio and note recognition in different scales, then composition
and advanced topics such as jazz.

## Product principles

1. **Practice first.** Every lesson is ≥60% interactive exercises. Text is short
   and always followed by doing.
2. **Ears before eyes.** The learner currently cannot hear chord roots or
   octave equivalence. Ear training starts on day one, is present in every
   lesson, and is driven by spaced repetition across the whole year.
3. **Keyboard as the instrument.** The MIDI keyboard (or on-screen keyboard) is
   the primary input. Theory is always played, not only read.
4. **Make real music early.** From week 3 the learner produces something in
   the DAW every week. Composition is not deferred to "later".
5. **Offline / LAN only.** No cloud dependencies at runtime. Everything runs
   from one Node process on the LAN; any browser on the network can open it.
6. **Content is data.** Lessons are Markdown + JSON in `content/`, validated
   against a schema, and rendered by a generic lesson runner. Adding a lesson
   never requires touching app code.

## Architecture (summary — see ARCHITECTURE.md)

```
apps/web      Vite + React + TypeScript SPA (audio engine, DAW, lesson runner)
apps/server   Node 26 + Hono + node:sqlite (progress, SRS, projects, content API)
packages/core Pure TS music theory + exercise generators/evaluators (shared)
packages/content-schema  Zod schemas + validator CLI for lessons
content/      Curriculum: weeks → lessons (Markdown with fenced JSON blocks)
docs/         This plan, architecture, schema, curriculum outline
```

Key libraries: **Tone.js** (audio/scheduling), **tonal** (theory primitives),
**VexFlow** (notation), **Web MIDI API** (hardware keyboard), **Zod**
(schemas), **vitest** (tests).

## Milestones

| # | Milestone | Deliverable | Owner |
|---|-----------|-------------|-------|
| M0 | Docs & schema | PLAN, ARCHITECTURE, CONTENT_SCHEMA, CURRICULUM, CLAUDE.md | lead |
| M1 | Foundation | Monorepo scaffold, `packages/core` theory lib, audio engine + 6 instruments, MIDI + on-screen keyboard, notation component, sample lesson renders | dev-foundation |
| M2 | Exercise engine + lesson runner | All exercise types in CONTENT_SCHEMA implemented with generators/evaluators, SRS scheduling, progress persistence, lesson navigation UI | dev-exercises |
| M3 | Micro-DAW | Tracks, piano roll, transport, metronome, MIDI record, quantize, mixer, project save/load, MIDI export, DAW-task checker integration | dev-daw |
| M4 | Content: Foundations (weeks 1–8) | ~24 lessons | content-1 |
| M5 | Content: Harmony & Songs (weeks 9–16) | ~24 lessons | content-2 |
| M6 | Content: Songwriting & Arrangement (weeks 17–26) | ~30 lessons | content-3 |
| M7 | Content: Composition Studio & Jazz (weeks 27–40) | ~40 lessons | content-4 |
| M8 | Content: Transcription & Mastery (weeks 41–52) | ~35 lessons | content-5 |
| M9 | Integration & QA | Content validator green, end-to-end run of each lesson, LAN deploy script | lead + verifier |
| M10 | Stretch | Microphone pitch detection (singing solfège), sampled piano, audio export (WAV), song library imports (MIDI files) | later |

## Parallelisation

* M0 blocks everything (shared contract).
* M1 runs in parallel with M4–M8 (content only depends on the schema).
* M2 and M3 start after M1, in parallel, in separate folders.
* M9 after M2, M3 and at least M4.

## Definition of done (v1)

* `npm run dev` serves the app on `0.0.0.0`; a phone or laptop on the LAN can
  open it, plug in a MIDI keyboard (or use on-screen keys) and do lesson 1.
* `npm run validate:content` passes for all lessons.
* Every exercise type in the schema has a working implementation and a unit
  test for its evaluator.
* Progress and SRS state survive restarts (SQLite).
* A DAW project can be created, recorded into from MIDI, edited in the piano
  roll, saved, reloaded, and exported as a `.mid` file.

## Risks & decisions

* **Copyright.** Public-domain classical pieces are included as full MIDI
  transcriptions. Contemporary pop songs are referenced by name with chord
  progression, structure and analysis; the learner listens to the original on
  their own. Melodic material for practice is original, "in the style of".
* **Samples.** Ship synthesised instruments (no large assets in repo). Optional
  script downloads Salamander piano samples for a better piano.
* **Singing.** Traditional solfeggio includes singing. Microphone pitch
  detection is a stretch goal; v1 uses keyboard-based solfège (sing along,
  then check by playing).
* **Node built-ins.** Use `node:sqlite` (stable in Node 26) to avoid native
  module builds.
