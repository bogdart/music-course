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
  the server on :3001 (`tsx watch`). Content directory watched; lessons hot-reload.
  No build of `packages/*` is needed in dev: workspace packages export a `"source"`
  condition (→ `src/*.ts`) used by tsx (`--conditions=source`), Vite/Vitest (aliases)
  and `tsc` typechecking (`customConditions`). `npm run build` compiles `packages/*`
  to `dist/` (the default export condition) which the prod server uses.
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
`packages/core` exposes `parseSeq(seq, {ppq?, timeSig?, velocity?, offset?}): NoteEvent[]` (ties merged),
`parseSeqDetailed(seq)` → `{items, events, totalTicks, bars}` (items keep rests/durations/ties for notation),
`checkSeq(seq)` → error string | null, `toSeq(events, {flats?, drums?, rhythm?, timeSig?})`,
`snippetFromEnvelope(env)` → `Snippet` (`{bpm, timeSig, key?, tracks:[{instrument, events}]}`, what
`AudioEngine.schedule()` plays).

Implementation details: if `:duration` is omitted the previous token's duration is reused (initially `q`);
`h..`-style double dots are accepted; `hihat` is an alias of `hh`; `x` (generic hit) is MIDI 76; note names
without an octave in a seq default to octave 4; `toSeq` handles monophonic lines and block chords (true
polyphony with different durations is not representable and is emitted with the shortest duration).

## Audio engine (`apps/web/src/audio`)

* `AudioEngine` singleton: `start()` (user-gesture unlock), `getInstrument(id)`,
  `playNote(instr, midi, velocity, duration?)`, `noteOn/noteOff` (for live
  keyboard), `schedule(project|snippet, {loop, onBeat, onNote})`,
  `stop()`, `setBpm()`, `metronome.on/off`.
* All time via Tone.Transport with PPQ 480 to match the domain model.
* Latency: `Tone.context.lookAhead = 0.01` for live play; `interactive` latency hint.

### Web implementation notes (M1)

* **Audio facade.** Components import from `audio/engine.ts` (`preloadAudio`, `startAudio`, `play`,
  `playSequence`, `stopPlayback`, `playNote`, `liveNoteOn/Off`, `configureEngine`, `audioNow`), not the
  `AudioEngine` class, so Tone.js stays out of the main bundle and tests can use `test/fakeEngine.ts`.
  `AudioEngine.get()` offers `start`, `playNote(instr, midi, vel?, durSec?)`, `noteOn/noteOff(midi, vel?, instr?)`,
  `allNotesOff`, `schedule(snippet|project, {loop, onBeat(beat, bar), onNote(ev, trackIdx, idx), onEnd, countIn,
  metronome, bpm}) → {stop, done, startTime}`, `playSequence(parts, {gapSec, onEnd})`, `stop`, `setBpm`,
  `setVolume`, `setLiveInstrument`, `metronome.{on,off,enabled,setVolume}`, `getInstrument(id)`;
  `projectToSnippet()` honours mute/solo/volume. Live play and playback use separate instrument instances.
  The sampled piano is used when `/samples/piano/C4.mp3` exists (checked by content type).
* **Input.** `noteInputBus.subscribe(fn) → unsubscribe`, `emit/noteOn/noteOff/held/releaseAll`,
  hook `useNoteInput(handler, enabled)`. MIDI handles hot-plug, `settings.midiInput`, sustain (CC64).
* **Exercise components** (`apps/web/src/exercises/registry.ts`): one component per type receiving
  `ExerciseComponentProps<T> { item, block, onAnswer(answer), result, attempts, revealed, disabled }`; add a
  type by writing one file and one line in `exerciseComponents`. Types missing there or not implemented in
  core render a "coming soon" card. `ExerciseShell {block, lessonId, mode?: 'lesson'|'practice', record?, count?,
  seed?, autoplay?, onComplete?}` generates/evaluates, handles replay (reference then audio), hints, reveal,
  retries (only the first attempt per item is scored and posted) and posts the set result to
  `/api/progress/exercises/complete`. `play-notes` evaluates once as many notes as targets were played.
* **Stores (zustand).** `useSettingsStore {settings, loaded, load, update(patch)}` (optimistic PUT,
  localStorage fallback offline), `useProgressStore {summary, curriculum, glossary, loading, error, refresh,
  loadGlossary}`, `useInputStore` (MIDI devices, held notes, qwerty octave), `useAudioStore` (started,
  sampledPiano, server status).
* **Routes.** `/`, `/curriculum`, `/lesson/:id`, `/practice`, `/settings`, `/daw` (placeholder), `/dev/demo`
  (renders `src/lesson/__fixtures__/demo-lesson.md` without the server — covers every block type).
  Lesson links `../wNN-lM-slug/` map to `/lesson/:id`; `assets/x` to `/api/content/lessons/:id/assets/x`.

## Input (`apps/web/src/input`)

* `NoteInputBus`: emits `{type:'on'|'off', midi, velocity, source:'midi'|'screen'|'qwerty', time}`.
* Web MIDI: enumerate inputs, hot-plug, choose device in Settings; default: all.
* QWERTY map (two rows: `z x c v b n m ,` = white keys C..C, `s d g h j` = blacks; `q..` upper octave), octave shift `-`/`=`.
* On-screen keyboard: configurable range, shows note names / scale degrees / highlights, touch multi-key.

## Exercise engine

Each exercise type has, in `packages/core/src/exercises/<type>.ts`, an `ExerciseDefinition<T>`
registered in `exercises/registry.ts` (types in `exercises/types.ts`):

* `generate(block, rng, {index, count}): Item<T>` — ONE question of the set, deterministic given the
  RNG state (`createRng(seed)`, mulberry32). `index` lets list-based types (quiz, quiz-input,
  play-notes with several note sets) walk their list.
* `evaluate(item, answer): EvalResult { correct; score 0..1; feedback; expected?; details? }`.
* optional `naturalCount(block)` (e.g. number of quiz questions).

Registry helpers: `generate`, `evaluate`, `generateSet(block, seed?) → {seed, items}`,
`itemCount(block)` (`count` → natural count → 10), `passScoreOf(block)` (default 0.7),
`isSrsEligible(block)`, `srsKey(block)` (`type:hash(spec)`), `summarise(results, passScore)`,
`isImplemented(type)`, `registerExercise(def)`. Unimplemented types are registered as
`notImplemented(type)` stubs whose generate/evaluate throw `NotImplementedError`; the web renders a
"coming soon" card for them. Every item has `type, prompt, solution` and optionally `audio`, `reference`
(e.g. cadence), `choices: {value,label}[]`, `solutionAudio` (all audio as `Snippet`s). Answer payloads
per type are in `AnswerMap` (e.g. `play-notes`: MIDI numbers played in order; `ear-chord`: `"maj"` or
`"maj:1"`; `quiz`: choice index or indices).

Implemented in M1: `ear-note`, `ear-octave`, `ear-interval`, `ear-chord`, `play-notes`, `quiz`,
`quiz-input`, `read-note`. The content validator also runs `generateSet` for every implemented exercise
in `content/` so broken specs fail validation.

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

Implementation (`packages/core/src/srs`): `review(state, grade 0..5, session)` — grade < 3 resets to
interval 1 (lapse); otherwise reps 1 → 1 session, 2 → 2, then `round(interval × ease × 0.8)` (so 1, 2, 4,
8, 16 at the default ease 2.5); ease updated per SM-2, min 1.3. A *session* starts after ≥ 2 h of
inactivity (server `Sessions.touch()` on any activity). A card is created (due next session) when an
eligible exercise set is completed (`POST /api/progress/exercises/complete`); the card stores the
exercise block so Practice regenerates fresh items from it. Map set scores to grades with
`gradeFromScore(score)`. Adaptive difficulty is not implemented yet.

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
GET  /api/health                        → {ok, contentVersion}
GET  /api/content/curriculum            → CurriculumDTO (weeks, lessons incl. exists=false for unwritten, status)
GET  /api/content/lessons/:id           → ParsedLessonDTO {id, frontmatter, body (markdown), blocks, exercises, sections, problems, prev, next}
GET  /api/content/lessons/:id/assets/*  → files from the lesson's assets/ folder
GET  /api/content/glossary              → {terms: GlossaryTerm[]} (glossary.md + glossary/*.md merged)
GET  /api/content/problems              → validation problems of the loaded content
GET  /api/progress                      → ProgressSummaryDTO
POST /api/progress/attempts             → AttemptInput {lessonId, exerciseId, type, correct, score, answer, durationMs, itemIndex?, source?}
POST /api/progress/exercises/complete   → ExerciseCompleteInput {lessonId, exerciseId, type, score, passed, correct, total}; creates SRS card if eligible
POST /api/progress/lessons/:id/complete
GET  /api/srs/due?limit=20              → SrsDueDTO {session, cards}
GET  /api/srs/cards                     → all cards
POST /api/srs/review                    → {cardId, grade 0..5} → {card}
GET/POST/PUT/DELETE /api/projects[/:id] → DAW projects (JSON blobs; GET list → ProjectSummaryDTO[])
GET  /api/settings, PUT /api/settings   → Settings (partial PUT, validated): midiInput, keyboardRange, volume, liveInstrument, keyLabels, metronomeVolume, qwertyOctave
```

All request/response shapes are TypeScript types in `packages/core/src/api.ts`, shared by server and
web. Errors are `{error: string}` with a 4xx/5xx status. SQLite schema lives in
`apps/server/src/db.ts` as ordered migrations (`schema_migrations` table): `attempts`,
`exercise_progress`, `lesson_progress`, `srs_cards`, `srs_reviews`, `projects`, `settings`, `meta`
(session counter). The server builds the Hono app with `createApp({db, content, sessions?, webDist?})`
(testable via `app.request()`).

## Testing

* `packages/core`: vitest unit tests for theory helpers, `parseSeq`,
  every `generate`/`evaluate`, SRS scheduler.
* `packages/content-schema`: schema/parser unit tests; validator run over `content/` (`npm run validate:content`).
  `parseLesson(markdown, {id?})` (browser-safe) returns the lesson DTO plus mdast, warnings and inline refs;
  `loadContent(dir)` (`@music/content-schema/node`) adds cross-file checks (curriculum membership, week/phase,
  prerequisites, lesson links, glossary terms, authoring rules, exercise generation). Objects are *loose*:
  unknown fields are accepted with a warning; known fields, ids, notes, keys, chords, numerals, seqs are strict.
* `apps/server`: API tests with an in-memory DB and a temporary content fixture.
* `apps/web`: component tests for Keyboard and exercise shells (vitest + testing-library); Playwright smoke (stretch).
