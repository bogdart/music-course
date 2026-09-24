# Architecture

## Monorepo layout (npm workspaces)

```
music_course/
├── package.json                 # workspaces, root scripts
├── tsconfig.base.json
├── apps/
│   ├── web/                     # Vite + React 18 + TypeScript
│   │   └── src/
│   │       ├── audio/           # AudioEngine (Tone.js), instruments, metronome, scheduler
│   │       ├── input/           # MIDI (Web MIDI API), computer keyboard map, unified NoteInput bus
│   │       ├── components/
│   │       │   ├── Keyboard/    # on-screen piano (touch + mouse), highlights, labels
│   │       │   ├── Staff/       # VexFlow notation renderer
│   │       │   ├── PianoRoll/   # DAW grid editor
│   │       │   └── ...
│   │       ├── lesson/          # Markdown renderer, block plugins (example/exercise/keyboard/staff), lesson runner
│   │       ├── exercises/       # one React component per exercise type; uses packages/core evaluators
│   │       ├── daw/             # DAW state (zustand), transport, tracks, mixer, project io, MIDI export
│   │       ├── progress/        # API client, SRS queue UI, dashboard
│   │       └── pages/           # Home/Dashboard, Curriculum, Lesson, Practice (SRS), DAW, Settings
│   └── server/                  # Node 26 + Hono
│       └── src/
│           ├── index.ts         # serves API + built web app on 0.0.0.0:8080
│           ├── db.ts            # node:sqlite, migrations
│           ├── routes/          # /api/content, /api/progress, /api/srs, /api/projects
│           └── content.ts       # loads + validates content/ at startup, watches in dev
├── packages/
│   ├── core/                    # pure TS, no DOM: theory, notation model, generators, evaluators, SRS algorithm
│   └── content-schema/          # Zod schemas for lessons/exercises + `validate` CLI
├── content/                     # curriculum (see CONTENT_SCHEMA.md)
└── docs/
```

## Runtime

* **Dev:** `npm run dev` → Vite on :5173 (host 0.0.0.0) proxying `/api` to
  the server on :3001. Content directory watched; lessons hot-reload.
* **Prod:** `npm run build && npm start` → single Node process on
  `0.0.0.0:8080` serving `apps/web/dist` + API. SQLite file at `data/app.db`.
* No auth (trusted LAN). Single learner profile; schema allows more later.

## Core domain model (`packages/core`)

```ts
// Pitch
type Midi = number;                 // 0..127
type NoteName = string;             // "C4", "F#3", "Bb5"
// Time
type Bars = number; type Beats = number; type Ticks = number; // PPQ = 480
interface TimeSig { num: number; den: number }
// Events
interface NoteEvent { midi: Midi; startTick: number; durationTicks: number; velocity: number /*0..1*/ }
interface Clip { id: string; name: string; startTick: number; lengthTicks: number; notes: NoteEvent[] }
interface Track { id: string; name: string; instrument: InstrumentId; clips: Clip[]; volume: number; pan: number; mute: boolean; solo: boolean }
interface Project { id: string; name: string; bpm: number; timeSig: TimeSig; key?: string; tracks: Track[]; loop?: {startTick:number; endTick:number} }
```

Instruments (`InstrumentId`): `piano`, `epiano`, `bass`, `pad`, `lead`,
`pluck`, `strings`, `drums` (drum map: `kick`=36, `snare`=38, `hihat`=42,
`ohat`=46, `clap`=39, `tom`=45, `ride`=51, `crash`=49). Tone.js synth
patches; a sampled piano is loaded instead of `piano` if `apps/web/public/samples/piano/` exists.

## Music snippet mini-language (used everywhere in content)

Sequence string, whitespace-separated tokens:

```
C4:q D4:q E4:h            note:duration
[C4 E4 G4]:w              chord
r:q                       rest
C4:q.  C4:8  C4:8t  C4:16 durations: w h q 8 16 32, "." dotted, "t" triplet
C4:q~ C4:q                tie into next
kick:q snare:q hh:8 hh:8  drum names on drum tracks
| C4:q D4:q | E4:h |      bar lines are optional and ignored (readability)
```

Envelope (JSON) around a snippet: `{ "bpm": 90, "timeSig": "4/4", "key": "C", "tracks": [{ "instrument": "piano", "seq": "..." }] }`.
`packages/core` exposes `parseSeq(seq): NoteEvent[]` and `toSeq(events)`.

## Audio engine (`apps/web/src/audio`)

* `AudioEngine` singleton: `start()` (user-gesture unlock), `getInstrument(id)`,
  `playNote(instr, midi, velocity, duration?)`, `noteOn/noteOff` (for live
  keyboard), `schedule(project|snippet, {loop, onBeat, onNote})`,
  `stop()`, `setBpm()`, `metronome.on/off`.
* All time via Tone.Transport with PPQ 480 to match the domain model.
* Latency: `Tone.context.lookAhead = 0.01` for live play; `interactive` latency hint.

## Input (`apps/web/src/input`)

* `NoteInputBus`: emits `{type:'on'|'off', midi, velocity, source:'midi'|'screen'|'qwerty', time}`.
* Web MIDI: enumerate inputs, hot-plug, choose device in Settings; default: all.
* QWERTY map (two rows: `z x c v b n m ,` = white keys C..C, `s d g h j` = blacks; `q..` upper octave), octave shift `-`/`=`.
* On-screen keyboard: configurable range, shows note names / scale degrees / highlights, touch multi-key.

## Exercise engine

Each exercise type has, in `packages/core/src/exercises/<type>.ts`:

* `generate(spec, rng): Instance` — deterministic given a seed.
* `evaluate(instance, answer): Result { correct: boolean; score: 0..1; feedback: string; details? }`.

And in `apps/web/src/exercises/<Type>.tsx` a component taking `Instance`,
rendering prompt + input UI, calling `evaluate`, reporting `Attempt` to the
progress API. Common shell handles: replay button, attempts counter, hints,
"reveal", next, keyboard/MIDI focus.

### Spaced repetition (SRS)

Ear-training and recall items (`srs: true` in an exercise spec, or any
`ear-*` type) create SRS cards keyed by `(type, spec-hash)`. Algorithm:
SM-2 variant with intervals in *sessions* rather than days (1, 2, 4, 8…
sessions), because the learner practises several times per week. Practice
page pulls due cards, mixes in new ones, and adapts difficulty (e.g. widen
interval set, add octaves) based on rolling accuracy.

## DAW (`apps/web/src/daw`)

* State: zustand store of `Project` + UI state (selection, zoom, tool).
* Views: arrangement (tracks × bars), piano roll (per clip), mixer strip,
  transport bar (play/stop/record/loop/metronome/bpm/time-sig/count-in).
* Recording: NoteInputBus → new clip on armed track, optional quantize
  (1/4, 1/8, 1/16, triplets, strength %).
* Editing: draw/select/move/resize/delete notes, velocity lane, duplicate,
  transpose, scale-snap (highlight non-scale notes), chord stamp tool.
* IO: save/load via `/api/projects`, export Standard MIDI File (type 1),
  import `.mid` (stretch), render to WAV via OfflineAudioContext (stretch).
* Embedding: `<DawEmbed project=... constraints=... />` used by `daw-task`
  exercises; the checker runs `packages/core` predicates on the project.

## Server API (Hono)

```
GET  /api/content/curriculum            → weeks, lessons, status
GET  /api/content/lessons/:id           → parsed lesson (markdown AST + blocks)
GET  /api/progress                      → summary
POST /api/progress/attempts             → {lessonId, exerciseId, type, correct, score, answer, durationMs}
POST /api/progress/lessons/:id/complete
GET  /api/srs/due?limit=20              → cards
POST /api/srs/review                    → {cardId, grade 0..5}
GET/POST/PUT/DELETE /api/projects[/:id] → DAW projects (JSON blobs)
GET  /api/settings, PUT /api/settings   → midi device, keyboard range, volume…
```

## Testing

* `packages/core`: vitest unit tests for theory helpers, `parseSeq`,
  every `generate`/`evaluate`, SRS scheduler.
* `packages/content-schema`: validator run over `content/` in CI (`npm run validate:content`).
* `apps/web`: component tests for Keyboard and exercise shells (vitest + testing-library); Playwright smoke (stretch).
