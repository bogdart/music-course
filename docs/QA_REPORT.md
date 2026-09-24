# QA Report — Playwright end-to-end suite

Date: 2026-09-25 · Build: branch `worktree-agent-ad33a8e93691ecdb4` (based on `bcc2134`) · Browser: Chromium 151 (system `/usr/bin/chromium`), headless

## How to run

```bash
npm install
npm run test:e2e                      # builds (npm run build), starts the prod server, runs everything
E2E_SKIP_BUILD=1 npm run test:e2e     # reuse an existing build
npm run test:e2e -- e2e/api.spec.ts   # one file;  -g "<title>" to filter
npm run test:e2e:ui                   # Playwright UI mode
npm run typecheck:e2e                 # tsc over e2e/ + playwright.config.ts
```

Env: `PW_CHROMIUM_PATH` (browser binary; default `/usr/bin/chromium` if present, else Playwright's own — `npx playwright install chromium`),
`E2E_WORKERS` (default 4), `E2E_PORT` (shared server port; random by default).
Output: `e2e/artifacts/` (HTML report `html-report/`, `results.json`, traces/screenshots of failures in `test-results/`,
per-type render stats `render-stats.json`, axe results `a11y/*.json`). Only `e2e/artifacts/screenshots/` is committed.

## Result (latest full run)

| | count |
|---|---|
| tests | **502** |
| passed | **349** |
| expected failures (`test.fail`, = confirmed bugs below) | **11** |
| skipped (exercise types still "coming soon" ×7 checks, DAW specs while the placeholder is shown) | **142** |
| unexpected failures / flaky | **0 / 0** (3 consecutive full runs, 4 and 8 workers) |

Runtime ≈ 3 min with 4 workers (plus ~15 s build).

## Infrastructure

* `playwright.config.ts` — `webServer` runs `npm run build && node apps/server/dist/index.js` with `NODE_ENV=production`,
  `HOST=0.0.0.0`, a random `PORT` and `DB_FILE` in a fresh temp dir (the server already supported `PORT/HOST/DB_FILE/DATA_DIR/WATCH_CONTENT`
  — **no change to `apps/server/src/config.ts` was needed**). Chromium flags `--autoplay-policy=no-user-gesture-required
  --use-fake-ui-for-media-stream`.
* `e2e/fixtures.ts`
  * `test.use({ isolated: true })` → the spec **file** gets its own server process + fresh SQLite DB (free port; restarted
    with a new DB whenever a worker moves to another file). `server.handle.restart()` restarts it on the same DB
    (persistence tests). Read-only specs (smoke, lessons, curriculum) use the shared `webServer`.
  * every page gets the fake Web MIDI + test hooks (`helpers/browser-shims.ts`);
  * console errors / uncaught page errors fail any test (allow-list per test with `consoleAllow`; `KNOWN_CONSOLE_NOISE` holds BUG-01).
* `helpers/browser-shims.ts` — fake `navigator.requestMIDIAccess`; drive it with `window.__fakeMidi.addInput/removeInput/noteOn/noteOff/cc/send`
  (wrapped by `helpers/app.ts` `midi.*`). Disconnected ports stay listed with `state: 'disconnected'` like Chromium.
* `helpers/app.ts` — `goto`, `unlockAudio`, audio log (`audioLog`, `expectSound`, `clearAudio`), `clickKey`, `keyLocator`.
* `helpers/exercises.ts` — `currentItem`, `answer(page, id, correct)`, `completeSet`, `revealAll`, and **`ANSWERERS`**: one entry per
  exercise type turning the generated item into a correct or wrong UI interaction. **When a new type is implemented, add an answerer there**;
  until then the generic checks (render/reveal/next/finish) already run for it.
* `helpers/content.ts` — reads `content/` from disk (block counts, exercises, inline refs) so specs are data-driven.
* `global-setup.ts` / `global-teardown.ts` — aggregate the per-lesson render stats and print the per-type table.

### App source touched (test hooks only — no behaviour change)

| file | change |
|---|---|
| `apps/web/src/testHooks.ts` (new) | `e2eHook()`, `e2eAudio()`; inert unless the page defines `window.__MC_E2E__` before load |
| `apps/web/src/audio/AudioEngine.ts` | 7 one-line `e2eAudio({...})` calls: `playNote`, `noteOn`, `noteOff`, `setLiveInstrument`, `setVolume`, `schedule` start, each scheduled note as it sounds |
| `apps/web/src/exercises/ExerciseShell.tsx` | one `useEffect` exposing the current item as `window.__MC_E2E__.items[block.id]` (+ import) |

No `data-testid`s had to be added: existing ones (`exercise-<id>`, `data-type`, `example-block`, `staff-block`, `keyboard-block`,
`chords-block`, `coming-soon`, `block-error`, `exercise-summary`, `key-<midi>`/`data-midi`, `staff`) plus roles/labels were enough.
Root: `package.json` (devDeps `@playwright/test`, `@axe-core/playwright`; scripts `test:e2e`, `test:e2e:ui`, `typecheck:e2e`), `.gitignore`.

## Coverage summary

| # | area | spec | what is checked |
|---|---|---|---|
| 1 | Smoke | `smoke.spec.ts` | 7 pages render with no console errors/unhandled rejections; nav; SPA 404; unknown lesson; audio gate (click + key); `/api/health`; hashed assets; `/dev/demo` renders every block and posts nothing |
| 2 | Curriculum | `curriculum.spec.ts` | 5 phases, 52 weeks, 154 lessons in order with titles; every lesson opened from the page (per phase); Dashboard phase anchors; Next/Previous walk all 154 lessons; scroll-to-top |
| 3 | All lessons | `lessons.spec.ts` | 154 data-driven tests: title, goals count, block counts per type = lesson.md, staff SVG drawn / no "Notation error", no raw ``` / JSON / `{{…}}` / `[[…]]` leaking, rail entries, glossary terms resolve + popover, note/chord chips enabled and sound, first example plays; per-type real vs coming-soon stats |
| 4 | Exercises | `exercises.spec.ts` | for **every catalogue type** (27): render, Skip disabled before answering, Reveal (+ stored as wrong), Next, reveal-all finish (not passed), correct answer (feedback, dots, attempt API), wrong answer + retry (only first attempt scored), full correct set → passed + best score + rail + SRS card iff eligible, all-wrong set → not passed, replay/"question only"/autoplay play the item's notes. Plus hints, ear-note answered by MIDI, enharmonic quiz-input, quiz-input filled from a key, play-notes marks/reset |
| 5 | Input | `input.spec.ts` | mouse press/release, black keys, glissando drag, multi-touch chord, phone tap, full QWERTY map, key-repeat, octave shift persisted + clamped, no notes while typing, MIDI note on/off/velocity, velocity-0, CC123, sustain CC64, MIDI before audio unlock, hot-plug add/remove/re-add, no-device state, device selection persisted + filtering |
| 6 | Progress / SRS | `progress.spec.ts` | fresh Dashboard, Practice empty state, exercise + lesson completion survive reload **and server restart** (lesson page, Curriculum ●/100 %, Dashboard 1/154), Continue after completing, SRS card due next session (session advanced by editing `meta.last_activity`), Practice review → grade/interval, practice attempts not counted as lesson attempts, lapse on failed review |
| 7 | Settings | `settings.spec.ts` | volume (persisted + applied to engine), metronome volume, range presets / custom / invalid / reversed, live instrument (persisted + used by live notes & Test sound), key labels, survives server restart, offline fallback to localStorage + banner |
| 8 | Responsive | `responsive.spec.ts` | phone 390×844 and tablet 820×1180: no horizontal scroll on 8 pages, nav links visible/tappable, key size + tap plays, exercise choices tappable |
| 9 | API | `api.spec.ts` | every route in ARCHITECTURE.md: health, curriculum, all 154 lesson DTOs + prev/next chain, assets 404 + path traversal, glossary, problems, unknown routes; progress/attempts (12 invalid bodies), exercises/complete (best score, SRS card idempotent), lessons complete; srs due/cards/review (+ invalid); projects full CRUD + upsert + duplicate + 7 invalid bodies + >5 MB; settings defaults/partial/12 invalid values/atomicity; malformed JSON → 400 on all 6 write routes |
| 10 | Accessibility | `a11y.spec.ts` | axe (WCAG 2.0/2.1 A+AA) on 8 pages; Tab reachability; `role=status` feedback; keyboard accessible names |
| 11 | LAN | `lan.spec.ts` | default binding logs `0.0.0.0` + LAN URLs; API/SPA reachable on every non-loopback IPv4; `HOST=127.0.0.1` binds only loopback; Web MIDI unavailable (insecure context) on a LAN IP and the app says so |
| – | DAW | `daw.spec.ts` | placeholder jam keyboard (MIDI/QWERTY); `micro-DAW` specs (transport, tracks, piano roll, recording, save/export) skip while the placeholder is shown — **extend these as the DAW lands** |

## Exercise types: rendered component vs "coming soon" (all 154 lessons, 980 exercise blocks)

**228 real · 752 coming soon · 0 broken.** 8 of 27 types implemented.

| type | real | coming soon | broken | lessons using it |
|---|---:|---:|---:|---:|
| `daw-task` | 0 | 145 | 0 | 102 |
| `play-melody` | 0 | 106 | 0 | 84 |
| `ear-progression` | 0 | 79 | 0 | 65 |
| `quiz` | 69 | 0 | 0 | 69 |
| `play-chord` | 0 | 57 | 0 | 53 |
| `ear-melody` | 0 | 53 | 0 | 49 |
| `reflect` | 0 | 47 | 0 | 45 |
| `ear-chord` | 44 | 0 | 0 | 41 |
| `ear-rhythm` | 0 | 40 | 0 | 37 |
| `listen` | 0 | 39 | 0 | 39 |
| `rhythm-tap` | 0 | 35 | 0 | 29 |
| `ear-note` | 31 | 0 | 0 | 28 |
| `ear-scale` | 0 | 30 | 0 | 29 |
| `ear-bass` | 0 | 29 | 0 | 26 |
| `ear-interval` | 27 | 0 | 0 | 19 |
| `quiz-input` | 24 | 0 | 0 | 24 |
| `build-chord` | 0 | 22 | 0 | 22 |
| `roman-analysis` | 0 | 22 | 0 | 21 |
| `play-scale` | 0 | 18 | 0 | 15 |
| `play-notes` | 15 | 0 | 0 | 13 |
| `ear-octave` | 10 | 0 | 0 | 6 |
| `build-interval` | 0 | 9 | 0 | 7 |
| `read-note` | 8 | 0 | 0 | 5 |
| `ear-chord-root` | 0 | 8 | 0 | 7 |
| `build-scale` | 0 | 7 | 0 | 7 |
| `read-rhythm` | 0 | 3 | 0 | 3 |
| `key-signature` | 0 | 3 | 0 | 2 |

(Regenerated on every run: `e2e/artifacts/render-stats.json` and the table printed at the end of `npm run test:e2e`.)

## Bugs

Each is pinned by a `test.fail()` test; when it is fixed that test starts "unexpectedly passing" — remove the `test.fail()` then.

### BUG-02
**High — keyboard input is global: playing into one exercise answers every other keyboard-driven exercise on the page.**
`PlayNotes`, `ReadNote` (play), `ChoiceExercise` for `ear-note` (degree) and `QuizInput` (note) all use `useNoteInput` on the
app-wide `NoteInputBus` with no notion of focus/active exercise. On-screen keys of exercise A, QWERTY and MIDI all feed every mounted exercise.
* Repro: open `/lesson/w01-l1-welcome-and-setup`, play C4 on the keyboard of "Find middle C" (e2) → e3's played count moves and an attempt for e3 is
  posted (`GET /api/progress` shows `exercises[...].e3`). Same for ear-note exercises answered by notes played elsewhere.
* Expected: only the exercise the learner is working on receives notes. Actual: all of them do; wrong attempts are recorded, scores polluted.
* Affected lessons (≥ 2 keyboard-driven exercises): w01-l1, w02-l1, w03-l2, w04-l3, w05-l3, w07-l1, w07-l2, w08-l1, w08-l2; every lesson mixing
  ear-note with play-notes/read-note. Will get worse as play-scale/play-chord/play-melody/build-* land (and the DAW recorder).
* Test: `input.spec.ts` › "notes played for one exercise do not answer another exercise on the same page".
* Fix: an "active exercise" in the shell (focus/last interaction/in-viewport, one at a time) and `useNoteInput(handler, enabled && isActive)`.

### BUG-03
**High — finishing any exercise remounts every block of the lesson: the result summary never shows and all exercises restart.**
`LessonRenderer` builds its react-markdown `components` object (and `div`/`span`/… component functions) inside render, so every re-render of
`LessonView` gives react-markdown new component types → React unmounts/remounts the whole body. `LessonView` re-renders on `onExerciseComplete`
(local state) and on every progress-store `summary` change.
* Repro: `/lesson/w01-l1-welcome-and-setup`, answer all 6 quiz questions, press Finish → the "100 % · Passed ✓ · Practice again" card flashes or
  never appears; the quiz is back at "1 / 6" with a new random set; the in-progress item of every other exercise is reset too.
  Also happens at page load when the progress summary arrives after the lesson (so an early tap can be lost; the suite waits for `networkidle` to avoid this race).
* Server-side progress is still recorded (the POST happens before), and the Practice page is unaffected (it renders `ExerciseShell` directly).
* Tests: `exercises.spec.ts` › "finishing a set shows the score summary…", "finishing one exercise does not reset progress in the other exercises…".
* Fix: hoist `components` out of render (read `lessonId` through context) or `useMemo(() => components, [lessonId])`; memoise the `LessonContext` value.

### BUG-07
**Medium — unlocking audio on a lesson autoplays every ear exercise at once.** Each `ExerciseShell` autoplays its item when `audioStarted`
flips to true, so a lesson with N ear exercises starts N sequences within ~250 ms; each cancels the previous and the learner hears the exercise
furthest down the page (usually off-screen). Repro: `/lesson/w01-l2-pitch-and-octaves`, tap the "Tap to enable audio" banner → 3 schedules in the
audio log. Test: `exercises.spec.ts` › "unlocking audio on a lesson autoplays at most one exercise". Fix: autoplay only on item *change*
(not on unlock), or only for the active/visible exercise.

### BUG-04
**Medium — Dashboard "Continue lesson" ignores the lesson you were working on.** The hero uses `summary.nextLessonId` (first not-completed lesson
in curriculum order) before `lastLessonId`; the label says "Continue lesson" whenever `lastLessonId` exists. Repro: fresh DB, answer an exercise in
week 5 → Dashboard "Continue lesson" links to lesson 1. Expected: resume `lastLessonId` if not completed (or show both "Continue" and "Next up").
Test: `progress.spec.ts` › "Dashboard "Continue" resumes the lesson the learner was last working on". File: `apps/web/src/pages/Dashboard.tsx`.

### BUG-05
**Low/Medium — the progress API accepts unknown lessons/exercises.** `POST /api/progress/lessons/<anything>/complete` returns 200 and increments
`totals.lessonsCompleted` (can exceed the number of real lessons); `POST /api/progress/attempts` for a non-existent lesson is stored and becomes
`lastLessonId`. Expected 404 (or 400). Tests: `api.spec.ts` › "completing an unknown lesson is rejected (404)", "attempts for unknown
lessons/exercises are rejected". Fix: validate `lessonId` (and `exerciseId`) against `ContentStore` in `apps/server/src/routes/progress.ts`
(also count only known lessons in `summary().totals`).

### BUG-06
**Low — Settings page scrolls horizontally on phones.** At 390 px the custom-range row (`Lowest note` / `Highest note` inputs + Apply) does not wrap
(right edge ≈ 611 px) and the floating "Tap to enable audio" button pokes out (≈ 422 px). The top nav also stacks vertically and takes ~280 px of height.
Screenshot: `e2e/artifacts/screenshots/overflow-phone-settings.png`. Test: `responsive.spec.ts` › phone › "/settings: no horizontal page scroll".
Fix: `flex-wrap: wrap` / `min-width: 0` on the `.row` with `.text-input.short`; constrain `.audio-gate` width.

### BUG-01
**Low — console error on every audio unlock when no piano samples are installed (the default).** `AudioEngine.tryLoadSampledPiano` does
`HEAD /samples/piano/C4.mp3`, which 404s; Chromium logs "Failed to load resource: 404". Harmless but noisy (and hides real errors in the console).
Test: `smoke.spec.ts` › "unlocking audio does not log a 404 for the optional sampled piano" (the generic console check ignores it via `KNOWN_CONSOLE_NOISE`).
Fix: have the server expose sample availability (e.g. in `/api/health`) or build-time flag instead of probing.

## Accessibility (axe-core, WCAG 2.0/2.1 A + AA)

| page | serious/critical | other |
|---|---|---|
| `/`, `/curriculum`, `/lesson/w01-l1…`, `/practice`, `/settings`, `/daw` | none | none |
| `/lesson/w08-l2-phase-1-review-and-ear-assessment` | **A11Y-01** (2 nodes) | – |
| `/dev/demo` | **A11Y-01** (3 nodes) | – |

### A11Y-01
**Serious — `scrollable-region-focusable`: staff notation that overflows horizontally is a scroll container that keyboard users cannot reach**
(`[data-testid="staff"]` with overflow; e.g. the `A4:w` read-note staff and wide example staffs). Fix: `tabIndex={0}` + `role="region"` +
`aria-label="Notation"` on the Staff wrapper when it overflows, or wrap instead of scrolling. Tests: `a11y.spec.ts` (2 × `test.fail`).
Details per page: `e2e/artifacts/a11y/*.json`.

Other findings (not axe violations): lesson pages have **two `<h1>`** (header title + the lesson body's `# Title`) — demote the body heading or skip it
in the renderer; Practice shows the raw lesson id as the "from" link text (use the title); on-screen keys are `role="button"` divs that cannot
be focused or activated from the keyboard (acceptable since QWERTY/MIDI cover it, but worth an `aria-hidden`/hint decision).

## Not verifiable / caveats

* **Multi-touch under full phone emulation**: with `isMobile: true` the CDP `Input.dispatchTouchEvent` hit-test targets the wrong element for
  touches after the first (reports `div.page` although `elementFromPoint` returns the key), so the multi-touch chord test runs on a
  1024×768 touch screen instead (passes). Please spot-check two-finger chords on a real phone/tablet.
* Audio is verified through the engine's hook (notes triggered on Tone instruments), not by analysing the output signal.
* Real Web MIDI hardware is replaced by the shim; the insecure-context behaviour on a LAN IP is verified with the real browser API.

## Flaky tests

None observed across three consecutive full runs (4 and 8 workers). Known race avoided by design: BUG-03's late remount at page load — `goto()`
waits for `networkidle` before interacting. If BUG-03 is fixed this wait can stay (cheap) or be dropped.

## Suggested fixes (priority order)

1. BUG-03 — memoise `LessonRenderer` components / context value (one-line class of fix, big UX win).
2. BUG-02 — introduce an active-exercise notion for note input (needed before play-scale/play-chord/play-melody/build-* ship).
3. BUG-07 — don't autoplay on audio unlock; autoplay only the active exercise on item change.
4. BUG-04 — Dashboard: prefer `lastLessonId` when not completed.
5. BUG-05 — validate lesson/exercise ids in progress routes.
6. A11Y-01, BUG-06, BUG-01 — small CSS/markup fixes.

## For the developers landing new work

* **New exercise type**: nothing to do for rendering/reveal/finish coverage — `exercises.spec.ts` picks it up from `content/` and stops skipping it.
  Add an entry to `ANSWERERS` in `e2e/helpers/exercises.ts` to enable the answer/score/pass/SRS tests. Keep `data-testid="exercise-<id>"` + `data-type`
  on the shell and `.feedback.ok/.bad`, `.choice-grid button`, the Reveal/Next buttons and `aria-label="progress"` — the helpers rely on them.
* **Practice page**: `progress.spec.ts` expects "Nothing due right now", "Check again", "Card X of Y", "Session done — N card(s) reviewed…";
  update those strings in one place if the page is redesigned.
* **DAW**: fill the `micro-DAW` describe in `e2e/daw.spec.ts` (it auto-activates when the placeholder text disappears). The audio log records
  `schedule` starts and each `scheduled` note, and `window.__fakeMidi` can drive recording.
