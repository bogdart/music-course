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
│           ├── index.ts         # serves API + built web app on 0.0.0.0:24800
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
  `0.0.0.0:24800` serving `apps/web/dist` + API. SQLite file at `data/app.db`.
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
interface Project { id: string; name: string; bpm: number; timeSig: TimeSig; key?: string; tracks: Track[]; loop?: {startTick:number; endTick:number}; markers?: {bar:number; name:string}[] }
```

Instruments (`InstrumentId`): `piano`, `epiano`, `bass`, `pad`, `lead`,
`pluck`, `strings`, `guitar` (overdriven), `drums` (drum map: `kick`=36, `snare`=38, `hihat`=42,
`ohat`=46, `clap`=39, `tom`=45, `ride`=51, `crash`=49). Tone.js synth
patches. What `piano` sounds like is the `pianoSound` setting: `warm` (default; near-pure analog-style
analog-style synth à la Jon Hopkins' *Immunity* / MS-20: per-voice key-tracked resonant low-pass that opens on the attack, per-note pitch drift, light room) or `grand`
(sampled Salamander piano if `apps/web/public/samples/piano/` exists, else an FM synth piano).

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
Optional: `"swing": 0..1`, `"tempoChanges": [{bar, bpm}]`, per track `"volume"`, `"pan"`; `snippetFromEnvelope` turns
them into `Snippet.tempoChanges` (ticks) / `SnippetTrack.pan` and swung events.
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
* Latency: `interactive` latency hint. Live notes are triggered at `Tone.immediate()` (no lookAhead). Transport
  playback uses `lookAhead = 0.1` plus a 0.12 s start lead: with 0.01 most notes reached Web Audio after their start
  time whenever the main thread was busy (React redraws during playback, phones) and were clipped or silent. Clocks
  that compare "now" with a playback start (`audioNow()`, DAW recording) use `Tone.immediate()`, never `Tone.now()`
  (which includes the lookAhead).
* Instruments stay light on the audio thread: one shared room reverb (`sharedRoom()`, send per instrument) instead of
  a convolver per instance, and the warm synth builds voices on demand (6 up front, max 24).

### Web implementation notes (M1)

* **Audio facade.** Components import from `audio/engine.ts` (`preloadAudio`, `startAudio`, `play`,
  `playSequence`, `stopPlayback`, `playNote`, `liveNoteOn/Off`, `configureEngine`, `audioNow`), not the
  `AudioEngine` class, so Tone.js stays out of the main bundle and tests can use `test/fakeEngine.ts`.
  `AudioEngine.get()` offers `start`, `playNote(instr, midi, vel?, durSec?)`, `noteOn/noteOff(midi, vel?, instr?)`,
  `allNotesOff`, `schedule(snippet|project, {loop, onBeat(beat, bar), onNote(ev, trackIdx, idx), onEnd, countIn,
  metronome, bpm}) → {stop, done, startTime}`, `playSequence(parts, {gapSec, onEnd})`, `stop`, `setBpm`,
  `setVolume`, `setLiveInstrument`, `metronome.{on,off,enabled,setVolume}`, `getInstrument(id)`,
  `audioTimeToPerf(t)` (AudioContext time → the `performance.now()` ms at which it is *heard*, via
  `getOutputTimestamp`; facade `audioTimeToPerf`); `projectToSnippet()` honours mute/solo/volume. Live play and
  playback use separate instrument instances. `schedule` also plays `snippet.tempoChanges` (unless `bpm` is
  overridden), routes tracks with `pan` through a temporary instrument + panner, and honours `lengthTicks`.
  With `pianoSound: 'grand'`, the sampled piano (fetched once with `npm run fetch:samples`) is loaded lazily (only once 'grand' is chosen) when `/samples/piano/C4.mp3` exists. Settings has one Instrument menu (Piano — warm synth, Piano — grand, then the rest): it sets what the learner's keys play, and a piano pick also sets `pianoSound`.
* **Input.** `noteInputBus.subscribe(fn) → unsubscribe`, `emit/noteOn/noteOff/held/releaseAll`,
  hook `useNoteInput(handler, enabled)`. MIDI handles hot-plug, `settings.midiInput`, sustain (CC64).
* **Exercise components** (`apps/web/src/exercises/registry.ts`): one component per type receiving
  `ExerciseComponentProps<T> { item, block, onAnswer(answer), result, attempts, revealed, disabled }`; add a
  type by writing one file and one line in `exerciseComponents`. Types missing there or not implemented in
  core render a "coming soon" card. `ExerciseShell {block, lessonId, mode?: 'lesson'|'practice', record?, count?,
  seed?, autoplay?, onComplete?, onItemResult?}` generates/evaluates, handles replay (reference then audio), hints, reveal,
  retries (only the first attempt per item is scored and posted) and posts the set result to
  `/api/progress/exercises/complete`. `play-notes` evaluates once as many notes as targets were played. Lesson sets
  survive a page refresh: seed, position, results and summary are kept per exercise in localStorage
  (`exercises/persist.ts`, dropped when the spec changes); an exercise finished earlier on another device shows its
  best server score with "Practice again". Items may carry `compare` listening aids, offered after the first answer.
  **Input focus:** only one exercise on a page reacts to played notes — the first mounted one, then whichever the
  learner last clicked/focused (`exercises/focus.ts`: `useExerciseFocus` store, `ExerciseIdContext`; components
  use `useExerciseNoteInput(handler, enabled)`, which checks focus when the event arrives). The focused exercise
  gets the `input-active` class. Components embedded in exercises (e.g. the DAW embed) should use the same hook.
* **Stores (zustand).** `useSettingsStore {settings, loaded, load, update(patch)}` (optimistic PUT,
  localStorage fallback offline), `useProgressStore {summary, curriculum, glossary, loading, error, refresh,
  loadGlossary}`, `useInputStore` (MIDI devices, held notes, qwerty octave), `useAudioStore` (started,
  sampledPiano, server status).
* **Theme (light / dark).** `settings.theme: 'system' | 'light' | 'dark'` (default `'system'`; core
  `resolveTheme(pref, systemPrefersDark)`). `apps/web/src/theme.ts` `applyTheme(pref)` (called by `App` whenever the
  setting changes) sets `data-theme="light|dark"` (+ `data-theme-pref`) on `<html>`, updates `<meta theme-color>`,
  follows `prefers-color-scheme` live for `'system'`, and mirrors the preference to `localStorage['music-course.theme']`.
  An inline script in `apps/web/index.html` reads that key and sets `data-theme` before the app bundle runs (no flash).
  **Every colour is a semantic CSS variable** defined for both themes at the top of `styles/global.css`
  (surfaces/text, `--key-*` piano, `--staff-*` notation, `--perf-*` performance strip, `--roll-*` lesson piano roll,
  `--grid-*`/`--note-*`/`--clip-*`/`--playhead` DAW, …); never hard-code a colour in CSS or TSX. SVG drawn in React
  uses `style={{ fill: 'var(--x)' }}` (attributes don't accept `var()`), so it follows the theme without a redraw.
  VexFlow draws with resolved colours: `renderStaff` reads `--staff-ink/-line/-ledger/-highlight` (and `var(--x)`
  per-note colours) via `getComputedStyle` (`cssVar()` in theme.ts) and `Staff` redraws on `useTheme()` changes.
* **Routes.** `/`, `/curriculum`, `/lesson/:id`, `/practice`, `/settings`, `/daw` (micro-DAW; `?project=<id>`, `?snippet=1`), `/dev/demo`
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

All catalogue types are implemented (M1: `ear-note ear-octave ear-interval ear-chord play-notes quiz quiz-input
read-note`; M2: the rest except `daw-task`, which the DAW milestone implements). The content validator runs
`generateSet` for every exercise in `content/` so broken specs fail validation. Module map
(`packages/core/src/exercises/`): `ear-chord-root`, `ear-scale`, `ear-progression`, `ear-melody`, `ear-rhythm`,
`ear-bass`, `ear-tempo`, `ear-meter`, `perform.ts` (play-scale, play-melody, rhythm-tap, read-rhythm),
`play-chord`, `build.ts` (build-chord/-scale/-interval), `theory-types.ts` (key-signature, roman-analysis, listen,
reflect); helpers `harmony.ts` (progression picking + voice-leading), `rhythm-gen.ts` (random rhythms from beat
cells, rhythm targets/snippets), `example-mix.ts` (attached mixes), `perf-util.ts`.

**Performance scoring** (`packages/core/src/performance.ts`): items of timing types carry a `PerformanceSpec
{timed, bpm, timeSig, countIn, metronome, targets: {midi|null, startTick, durationTicks, voice?}[], lengthTicks,
pitchMode: exact|pitch-class|none, input: notes|taps, tolerance}`; the answer is `{notes: {midi, time}[]}` with
times in seconds from the first music tick. `scorePerformance(targets, played, {bpm, tolerance, pitchMode})` does a
global greedy match (cost = |Δt|/tol + pitch penalty, window 3·tol), tol = 25% of a beat capped at 45% of the
shortest onset gap (≥ 40 ms) → per target `ok|early|late|octave|wrong|missed`, extras, mean offset, score
(timing 1 / 0.5 / 0.2; pitch × (0.5 + 0.5·timing); extras count ½). `scoreSequence` (LCS alignment) scores
untimed sequences (ear "play" answers, play-scale without tempo). `applySwing` (seq) shifts off-beat 8ths.

**Web.** `apps/web/src/exercises/perf/usePerformance.ts` is the shared capture hook: plays the backing (or an empty
snippet of `lengthTicks`) with count-in + metronome through `play()`, maps `handle.startTime` to
performance time with `audioTimeToPerf`, records NoteInputBus note-ons (taps: any computer key incl. space, the
TAP pad, MIDI/on-screen keys; QWERTY bus events are ignored in tap mode to avoid doubles) and ends with the
playback. `perf/Perform.tsx` renders notation (notes coloured by status after scoring), controls, tap pad,
`PerformanceStrip` (timeline of targets vs played) and keyboard marks. Other components: `SlotAnswer` (numerals /
degrees slots with palette, answer by button or by playing), `PlayBack` (octave-free note sequence), `PlayChord`
(held-set capture), `BuildNotes`, `EarRhythm` (notation choices / tap / drum grid), `EarTempo`, `KeySignature`,
`Listen` (reuses `ExampleBlock`), `Reflect` (journal via `GET /api/progress/attempts`).

### Spaced repetition (SRS)

Ear-training and recall items (`srs: true` in an exercise spec, or any
`ear-*` type) create SRS cards keyed by `(type, spec-hash)`. The card always plays the *current* content version of
its exercise (same lesson, id and type — an edited spec updates the card's key and stored block when the exercise is
next completed); cards whose exercise was removed are left out of `/api/srs/due`. Algorithm:
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
`gradeFromScore(score)`.

**Practice & warm-up (M2).** `GET /api/srs/due?limit&newLimit` interleaves due reviews with up to `newLimit` new
(never reviewed) cards, one new after every two reviews. Adaptive difficulty (`packages/core/src/adaptive.ts`):
`adaptBlock(block, level)` applies signed steps per type (widen option sets from ladders, add octaves, inversions,
direction "mixed", length/bars, finer subdivision, tighter tempo tolerance; negative levels narrow), `nextLevel(level,
recentScores)` moves ±1 when the rolling accuracy of the last 10 items is > 85% / < 60% (≥ 5 items). The web keeps
`{level, recent}` per card key in localStorage (`apps/web/src/practice/srsSession.ts`). `/practice` runs the session
(5 items per card) and shows a summary (accuracy per type, level changes, lapses). `lesson/Warmup.tsx` inserts a
skippable 2-minute warm-up (up to 6 due cards + 1 new, 3 items each) above every lesson; hidden when nothing is due.

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

### DAW implementation notes (M3)

* **Core (`packages/core/src/daw`)** — pure, unit-tested: `project.ts` (`createProject/Track/Clip`,
  `normalizeProject` (tolerant loader), `projectFromEnvelope(env, {minBars})` (envelope/template → project, one
  clip per track), `trackNotes(track)` (absolute ticks, clip-trimmed), `projectBars`, `quantizeNotes(notes, grid,
  strength)`, `transposeNotes`, `chordStampMidis(symbol|numeral, key, rootOctaveMidi)`, `GRID_OPTIONS`,
  `DRUM_LANES`), `checks.ts` (`runChecks(project, checks, {defaultKey, selfChecks})` → `{results, passed, total,
  score, allPassed}`, `runCheck`, `taskChecks(spec)`, `CHECK_KINDS`), `midi.ts` (`exportMidi(project)` SMF type 1,
  `parseMidi(bytes)`, `importMidi(bytes)`; GM program map per instrument, drums on channel 10, markers as MIDI
  markers). `exercises/daw-task.ts` registers the `daw-task` definition (item = template project + effective
  checks + `timerMin`/`projectRef`; answer `{project, selfChecks}`; score = passed/total; correct = all passed).
* **Domain model addition:** `Project.markers?: {bar, name}[]` (section markers, 1-based bars).
* **Store (`daw/store.ts`)**: one vanilla zustand store per workspace key (`getDawStore("main")` for `/daw`,
  `task:<lessonId>:<exerciseId>` for embeds), kept for the browser session. Edits go through
  `mutate(fn, {history})` (clone + undo snapshot, 100 steps); drags call `beginGesture()` once then mutate
  without history. UI state: selected track/clip/notes (indices into the open clip), open clip, tool
  (draw/select/chord), grid + snap, new-note length, chord text, zooms, playhead, loop on/off, metronome,
  count-in, input quantize + strength, master volume, armed track, save state.
* **Transport (`daw/transport.ts`)**: builds a Snippet from the project (mute/solo, track volume × master,
  from the playhead or the loop region) and plays it via `audio/engine.play()`; the playhead is derived from
  `audioNow()` − `handle.startTime` in a rAF loop. `ScheduleOptions.lengthTicks` (added to the engine) gives
  exact loop lengths/recording length. Recording counts in (0–2 bars), plays the other material, captures
  `noteInputBus` on/off events into the clip under the start position on the armed track (overdub) or a new
  clip, extends the clip by bars, and applies input quantize; one undo step per take. While a DAW is mounted
  the live instrument follows the armed/selected track (live monitoring), restored on unmount.
* **Persistence (`daw/persistence.ts`)**: debounced (1 s) autosave `PUT /api/projects/:id`, flush on unmount /
  `beforeunload` (keepalive). `/daw` opens `?project=<id>`, else the most recently updated non-lesson project,
  else a new one; `?snippet=1` creates a project from an envelope stored by `openSnippetInDaw(env, navigate)`
  (`daw/io.ts`, for "open in DAW" buttons). Lesson projects use ids `task-<lesson>-<exercise>` or
  `ref-<projectRef>` and are listed separately in Open….
* **Views**: `TransportBar`, `Arrangement` (sticky track headers: name, instrument (9 ids incl. guitar),
  M/S/arm, volume, pan; clips: drag to move, right edge to resize, tap-again/double-click to edit, double-click
  lane to add; ruler click = playhead, drag = loop region; "+ marker" section markers), `PianoRoll` (SVG grid;
  draw/select/chord tools, move/resize with snap, rubber-band select, right-click delete, velocity lane,
  out-of-key rows/notes highlighted from the project key, drum tracks show drum-name lanes), `DawWorkspace`
  (all of the above + on-screen keyboard), `ProjectBar` (name, undo/redo, New/Open/Load snippet/Import
  .mid/Export .mid/Save/Delete), `DawEmbed` (compact workspace + Check / self-checks / Submit, optional
  timer, "Start over"). `exercises/DawTask.tsx` wires `DawEmbed` into `ExerciseShell` (lazy-loaded).
* **Shortcuts** (active workspace = last one touched): Space play/stop, R record (the QWERTY-piano "r" is
  swallowed inside the DAW), Del/Backspace delete notes or clip, Ctrl/⌘+Z undo, Ctrl+Y or Ctrl+Shift+Z redo,
  Ctrl+D duplicate, Ctrl+A select all notes, ↑/↓ transpose (Shift = octave), ←/→ move by grid, Enter return
  to start, Esc deselect.
* **Known limits**: pan is stored and exported to MIDI but not rendered by the audio engine (instruments are
  shared per id); mute/solo changes apply on the next play; no audio (WAV) render; notes can't be moved between
  clips; notes held across a loop boundary while loop-recording are cut at the boundary.

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
GET  /api/progress/attempts?lessonId&exerciseId&limit → JournalEntryDTO[] (newest first; `reflect` journal)
POST /api/progress/exercises/complete   → ExerciseCompleteInput {lessonId, exerciseId, type, score, passed, correct, total}; creates SRS card if eligible
POST /api/progress/lessons/:id/complete
GET  /api/srs/due?limit=20[&newLimit=5]  → SrsDueDTO {session, cards} (newLimit: mix in never-reviewed cards)
GET  /api/srs/cards                     → all cards
POST /api/srs/review                    → {cardId, grade 0..5} → {card}
GET/POST/PUT/DELETE /api/projects[/:id] → DAW projects (JSON blobs; GET list → ProjectSummaryDTO[];
                                           GET /:id?ifExists=1 → 200 null instead of 404 for "open or create")
GET  /api/settings, PUT /api/settings   → Settings (partial PUT, validated): midiInput, keyboardRange, volume, liveInstrument, keyLabels, metronomeVolume, qwertyOctave, theme
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
