# QA Report — Playwright end-to-end suite

Date: 2026-09-25 · Build: `master` after `3281b17` (all 29 exercise types, Practice + warm-up, focused note input, micro-DAW + daw-task,
fixes for BUG-01…07 + A11Y-01) · Browser: Chromium 151 (system `/usr/bin/chromium`), headless · 4 workers

## How to run

```bash
npm install
npm run test:e2e                      # builds (npm run build), starts the prod server, runs everything
E2E_SKIP_BUILD=1 npm run test:e2e     # reuse an existing build
npm run test:e2e -- e2e/daw.spec.ts   # one file;  -g "<title>" to filter
npm run test:e2e:ui                   # Playwright UI mode
npm run typecheck:e2e                 # tsc over e2e/ + playwright.config.ts
```

Env: `PW_CHROMIUM_PATH` (browser binary; default `/usr/bin/chromium` if present, else Playwright's own — `npx playwright install chromium`),
`E2E_WORKERS` (default 4), `E2E_PORT` (shared server port; random by default).
Output: `e2e/artifacts/` (HTML report `html-report/`, `results.json`, traces/screenshots of failures in `test-results/`,
per-type render stats `render-stats.json`, axe results `a11y/*.json`). Only `e2e/artifacts/screenshots/` is committed.

## Result (3 consecutive full runs, 4 workers)

| run | passed | skipped | expected failures (`test.fail`) | unexpected / flaky | wall time |
|---|---:|---:|---:|---:|---:|
| 1 (`npm run test:e2e`, incl. build) | 573 | 20 | 0 | 0 / 0 | 8.1 min |
| 2 (`E2E_SKIP_BUILD=1`) | 573 | 20 | 0 | 0 / 0 | 8.0 min |
| 3 (`E2E_SKIP_BUILD=1`) | 573 | 20 | 0 | 0 / 0 | 8.0 min |

**Open bugs pinned by `test.fail()`: none** (all known bugs are fixed; see below). The 20 skips are not missing coverage: 17 are
"replay/autoplay" checks for types whose items have no audio (keyboard / reading / quiz / DAW / reflect types — the test first asserts that
no audio row is shown), 2 are the "wrong answer" checks of `reflect` (it cannot be answered wrongly — Save is disabled below `minWords`,
which has its own test) and 1 is `listen` without questions (no such block in content; covered on /dev/demo).

Previous run of the old suite against this build: 323 passed, 95 skipped, 84 unexpected. What those 84 were:

| group | count | verdict | action |
|---|---:|---|---|
| `test.fail()` markers for fixed bugs "unexpectedly passing" | 10 | bugs really fixed (each re-verified) | markers removed; tests kept as regression tests (BUG-01…07, A11Y-01) |
| console error `GET /api/projects/task-<lesson>-<ex>` 404 on every lesson with a daw-task | ~30 | **app bug** (BUG-08) | fixed in the app (see below), no console filtering |
| lessons.spec `example-block` count one too high | 39 | **test** was wrong | `listen` exercises render their examples as `ExampleBlock`s inside the exercise card; the spec now counts top-level examples only and separately checks each `listen` card shows `example`/`examples.length` players |
| DAW specs written against the placeholder | 3+2 | test | `e2e/daw.spec.ts` rewritten against the real DAW (13 tests) |
| `/api/health` has `pianoSamples` | 1 | test (BUG-01 fix) | asserted, and must match whether `dist/samples/piano/C4.mp3` exists |
| exercises/complete for an unknown exercise: `srsCardId` `undefined` vs `null` | 1 | test (BUG-05 fix: now 404) | asserts 404 and nothing stored |
| settings: live-instrument options | 1 | test | `guitar` was added to the instruments |
| smoke: `/daw` has no `<h1>` | 2 | **app** (BUG-11) | visually hidden `<h1>DAW</h1>` |
| smoke: /dev/demo "8 real + 1 coming soon" | 1 | test | data-driven from the fixture: 31 exercise blocks, 0 coming soon |
| play-chord: `getByLabel('progress')` also matched `aria-label="Progression"` | 1 | test | `exact: true` |
| ear-note answered by MIDI / quiz-input filled from a key | 1 | test (BUG-02 fix) | note input goes to the *focused* exercise; the tests focus it first |
| "failing the set (all wrong)" read `passed` (sticky best) | 1 | test (order-dependent) | asserts this completion's `lastScore` |
| Practice showed a card right after passing an ear exercise | 1 | test | by design Practice mixes due reviews with up to 5 *new* cards (docs/CONTENT_SCHEMA.md) |

## Infrastructure

* `playwright.config.ts` — `webServer` runs `npm run build && node apps/server/dist/index.js` (`NODE_ENV=production`, `HOST=0.0.0.0`,
  random `PORT`, `DB_FILE` in a fresh temp dir). Chromium flags `--autoplay-policy=no-user-gesture-required --use-fake-ui-for-media-stream`.
* `e2e/fixtures.ts`
  * `test.use({ isolated: true })` → the spec **file** gets its own server process + fresh SQLite DB; `server.handle.restart({ freshDb })`
    for per-test isolation (practice.spec) or persistence tests.
  * **new** `test.use({ contentFixture: true })` → that server gets `CONTENT_DIR` = a temp copy of `content/` plus the fixture lessons in
    `e2e/fixture-content/` (listed in week 1 of the copied curriculum). Used for daw-task `projectRef` / `timerMin`, which no lesson uses yet.
  * every page gets the fake Web MIDI + test hooks; console errors / page errors fail any test. `KNOWN_CONSOLE_NOISE` is now **empty**.
* `helpers/browser-shims.ts` — fake `navigator.requestMIDIAccess` (`window.__fakeMidi.addInput/removeInput/noteOn/noteOff/cc/send`).
* `helpers/exercises.ts` — `currentItem`, `answer(page, id, correct)`, `completeSet`, `revealAll`, `claimFocus`, `perform` and
  **`ANSWERERS` for all 29 types** (see coverage table). Timed types: `perform()` presses Start, reads the count-in clock from the e2e hook
  (`perf.t0` = `performance.now()` of tick 0) and schedules fake-MIDI note-ons **inside the page** with `setTimeout` at the target times
  (no Playwright round-trip jitter); options `shiftBeats` (late/early), `transpose` (wrong pitches), `only` (missed notes), `waitForEnd`.
  `lateShiftBeats(spec)` mirrors core's tolerance formula to pick a lateness outside the tolerance but still nearest its own target.
* `helpers/daw.ts` — DAW store snapshot (`daw(page, key)`), `dawDo` (run a store action), piano-roll geometry (`rollPoint` / `clickRoll` /
  `dragRoll`, scrolling the roll only when needed), `transportClock` + `playMidiAt` for recording in time.
* `helpers/smf.ts` — an **independent** Standard MIDI File reader (not the app's importer) to verify exported `.mid` downloads.
* `helpers/content.ts` — reads `content/` (block counts, exercises, inline refs) + the /dev/demo fixture (`demoLesson()`).

### App source touched for testability (inert unless `window.__MC_E2E__` is defined before load)

| file | hook |
|---|---|
| `apps/web/src/testHooks.ts` | types for the new hook fields |
| `apps/web/src/daw/store.ts` | `__MC_E2E__.daw[storeKey]` = the DAW zustand store ("main", "task:<lesson>:<exercise>") |
| `apps/web/src/exercises/perf/usePerformance.ts` | `__MC_E2E__.perf = { t0, phase, bpm }` — the count-in clock of the running take |
| `apps/web/src/daw/transport.ts` | `__MC_E2E__.transport = { startPerf, bpm, fromTick, recording }` — clock of DAW playback/recording |

(Existing: audio log in `AudioEngine`, `items[exerciseId]` in `ExerciseShell`.) Known hook limitation: `items` is keyed by exercise id,
so a warm-up card and a lesson exercise with the same id overwrite each other — the warm-up tests pick lessons without id clashes.

## Coverage summary

| # | area | spec | what is checked |
|---|---|---|---|
| 1 | Smoke | `smoke.spec.ts` | 7 pages render with no console errors; nav; SPA 404; unknown lesson; audio gate (click + key); `/api/health`; hashed assets; `/dev/demo` renders all 31 fixture exercise blocks as real components and posts nothing; no 404 for the optional sampled piano (BUG-01) |
| 2 | Curriculum | `curriculum.spec.ts` | 5 phases, 52 weeks, 154 lessons; every lesson opened from the page (now also free of daw-task 404s); Next/Previous walk; anchors |
| 3 | All lessons | `lessons.spec.ts` | 154 data-driven tests: title, goals, top-level block counts = lesson.md, `listen` cards show their examples, staff SVG drawn, no raw markdown/JSON, glossary, chips sound, first example plays; per-type render stats (**0 coming soon, 0 broken**) |
| 4 | Exercises | `exercises.spec.ts` | per type (29): render / Skip / Reveal / Next, reveal-all → 0 % not passed, correct answer (attempt scored 1), wrong answer (scored < 1) + retry (first attempt counts), full correct set → summary "100 % Passed ✓" + passed + rail + SRS card iff eligible, all-wrong set → "Need …", replay / reference / autoplay audio. Every **answer mode** used by content gets correct / wrong / full-set checks too. **Timing**: for rhythm-tap, play-melody, read-rhythm, timed play-scale, ear-rhythm tap: in time → 100 %, late (outside tolerance) → < 85 % and "bad"; missed taps and wrong pitches score lower. Shell details: summary + Practice again (BUG-03), other exercises keep their state (BUG-03), hints, ear-note by MIDI, enharmonic quiz-input, quiz-input from a key, play-notes marks, **unlocking audio autoplays nothing; Next autoplays only the engaged exercise** (BUG-07), reflect min-words + journal, play-chord arpeggiated, build-chord toggle/Clear/octaves. **/dev/demo**: all 31 blocks answered right and (fresh page) wrong, incl. `ear-tempo`, `ear-meter`, `ear-rhythm` grid |
| 5 | Input | `input.spec.ts` | mouse / touch / QWERTY / MIDI input as before; **focus**: exactly one exercise has input focus, clicking or tabbing into another moves it, MIDI and QWERTY reach only the focused exercise, nothing recorded for the others (BUG-02) |
| 6 | Progress / SRS | `progress.spec.ts` | persistence across reload + server restart, Dashboard Continue (incl. BUG-04), SRS card due next session, Practice review, lapse |
| 7 | **Practice + warm-up** | `practice.spec.ts` (new) | cards earned by finishing ear exercises in lessons (UI); Practice: new tags, level tag, lesson title link, 5 items per card, per-type session summary, reps / due sessions, "Practice more" → nothing due; **adaptive**: correct streak → "harder +1" next session with one more interval to choose from, misses → back to standard → "easier -1", lapses recorded; **warm-up**: hidden without cards, offered with a card, Skip, Start (3 items, timer, card n/m), done once per lesson, hidden when nothing is due; warm-up owns note input (MIDI answers it, not the lesson's play-notes) and hands focus back |
| 8 | **micro-DAW** | `daw.spec.ts` (rewritten) | transport (play schedules notes, playhead moves, stop, loop region + looping audio, metronome, BPM, time signature); tracks (add with instrument, rename, change instrument, **mute/solo decide which instruments sound**, volume, delete, last track undeletable); piano roll (draw, move, resize, right-click delete, Del, chord stamp); **drum lanes** (named lanes, drawing writes kick/snare/hihat, plays); undo/redo (buttons, Ctrl+Z/Y/Shift+Z, redo cleared by an edit, track add); **record** from fake MIDI with a 1-bar count-in (count-in note ignored, 4 notes within ±60 ticks, lengths, one undo removes the take); input quantize 1/4 snaps a sloppy take; Quantize command; **autosave** to `/api/projects` + reload via `?project=`, flush on leave, Open… list, unknown project message; **export .mid** (download event → independent SMF parse: format 1, 3 tracks, tempo, time sig, notes, drums on channel 10); **import .mid** (roundtrip + broken file error); **shortcuts** (arrows, Shift+arrows, Ctrl+D, Ctrl+A, Del, Esc, Space, Enter; not while typing); live notes through the armed track's instrument; **phone 390×844**: no page overflow, tap targets inside the screen, tap play/stop, tap-tap opens a clip, tap draws a note |
| 9 | **daw-task** | `daw-task.spec.ts` (new) | in-lesson embed: project created under `task-<lesson>-<ex>` without console 404, Check lists every predicate ✓/✗ with "n/N checks passed", partial Submit → scored share of checks, melody **drawn in the embedded piano roll** → all ✓ → Submit "All N checks passed", first attempt's score stands, autosave, summary after Finish, reload keeps the work, Start over (+ undo); **projectRef**: project continued across two lessons (both ways), bass track added in the embed, self-check counts in the score; **timerMin**: `page.clock` countdown 2:00 → 1:30 → "soon" → "Time's up", Submit still allowed, restart, kept across reload; 6 curriculum daw-tasks render + Check |
| 10 | API | `api.spec.ts` | every route; BUG-05 404s; malformed body 400 before the unknown-id 404; `GET /api/projects/:id?ifExists=1` → 200 null / the project |
| 11 | Accessibility | `a11y.spec.ts` | **in both the dark and the light theme** (color-contrast asserted to run): axe WCAG 2.0/2.1 A+AA on 8 pages + **/daw while editing** (roll open, 2 tracks, loop), **/practice with a card**, **lesson with a daw-task embed**; Tab reachability; role=status; keyboard names |
| 11b | **Theme** | `theme.spec.ts` | Settings → Appearance switches `data-theme` and `--bg` immediately, persists across reload (explicit choice beats the OS); `'system'` follows emulated `prefers-color-scheme` live; no flash (`data-theme` set when `<body>` is parsed and with the app bundle blocked); VexFlow ink and DAW grid colours change without reload; screenshots `e2e/artifacts/screenshots/theme-{light,dark}-{dashboard,lesson,settings,daw,phone-lesson}.png` |
| 12 | Responsive / LAN / Settings | `responsive.spec.ts`, `lan.spec.ts`, `settings.spec.ts` | as before (BUG-06 regression now a plain test); settings list all 9 instruments |

## Exercise rendering across the curriculum

**980 exercise blocks in 154 lessons: 980 real components · 0 coming soon · 0 broken** (all 29 types implemented; regenerated every run in
`e2e/artifacts/render-stats.json`).

## Per-exercise-type coverage

"Generic" = the 7 per-type checks of item 4 on the first lesson using the type; "modes" = extra answer modes (3 checks each: correct, wrong + retry,
full set). Answer method = how the e2e answerer drives the real UI.

| type | content blocks | primary use | modes covered in lessons | /dev/demo blocks | answer method | timing checks |
|---|---:|---|---|---:|---|---|
| `ear-note` | 31 | w03-l2#e3 | degree (+ answered by MIDI) | 1 | choice button; MIDI note (focused) | – |
| `ear-octave` | 10 | w01-l1#e4 | which-octave, same-or-different | 1 | choice | – |
| `ear-interval` | 27 | w02-l2#e5 | – | 1 | choice | – |
| `ear-chord` | 44 | w06-l2#e4 | – | 1 | choice | – |
| `ear-chord-root` | 8 | w11-l1#e6 | play, name | 1 | MIDI root (any octave) / choice | – |
| `ear-scale` | 30 | w09-l1#e1 | – | 1 | choice | – |
| `ear-progression` | 79 | w08-l1#e2 | generated | 1 | palette → slots → Check (wrong = every slot wrong) | – |
| `ear-melody` | 53 | w01-l3#e4 | play, degrees | 1 | MIDI play-back (octave-free) / palette slots | – |
| `ear-rhythm` | 40 | w04-l1#e4 | choose, tap | 3 (choose, tap, grid) | notation choice / timed taps / drum-grid cells | in time 100 % vs late |
| `ear-bass` | 29 | w10-l3#e4 | play | 1 | MIDI play-back / palette slots (demo) | – |
| `ear-tempo` | 0 | – (demo only) | – | 1 | BPM field (wrong = beyond 3× tolerance) | – |
| `ear-meter` | 0 | – (demo only) | – | 1 | choice | – |
| `play-notes` | 15 | w01-l1#e2 | – | 1 | on-screen keys / MIDI | – |
| `play-scale` | 18 | w03-l1#e3 (timed) | timed (untimed on demo) | 1 | timed MIDI performance / notes in order | in time vs late |
| `play-chord` | 57 | w06-l1#e3 | sequence, full | 1 | MIDI chord held (settle), also arpeggiated | – |
| `play-melody` | 106 | w01-l2#e6 | solo, backing | 1 | timed MIDI performance | in time vs late; wrong pitches < 50 % |
| `rhythm-tap` | 35 | w02-l3#e1 | notation, dictation | 1 | timed taps (MIDI → tap) | in time vs late; half the taps missing |
| `build-chord` | 22 | w06-l1#e2 | symbol, roman | 1 | MIDI toggles pitch classes → Check | – |
| `build-scale` | 7 | w03-l1#e2 | – | 1 | MIDI toggles → Check | – |
| `build-interval` | 9 | w02-l2#e4 | – | 1 | MIDI target note | – |
| `read-note` | 8 | w04-l3#e1 | name, play | 2 (+ interval) | choice / keys / interval choice | – |
| `read-rhythm` | 3 | w04-l2#e3 | – | 1 | timed taps | in time vs late |
| `quiz` | 69 | w01-l1#e1 | – | 1 | choice / multi + Check | – |
| `quiz-input` | 24 | w02-l1#e3 | – | 1 | text field (+ enharmonic, + from a key) | – |
| `key-signature` | 3 | w07-l1#e2 | staff/name, name/count | 1 | choice | – |
| `roman-analysis` | 22 | w06-l3#e2 | – | 1 | palette slots | – |
| `daw-task` | 145 | w02-l3#e7 | + fixture: projectRef, timerMin, custom self-check | 0 | project via the DAW store (generic) / **drawn in the embedded piano roll** (daw-task.spec) → Submit | timer via `page.clock` |
| `listen` | 39 | w03-l1#e5 | questions | 1 | choice (demo: "I've listened") | – |
| `reflect` | 47 | w01-l1#e6 | – | 1 | textarea → Save (no wrong answer) | – |

## Bugs found and fixed in this round

| id | severity | bug | before → after | files |
|---|---|---|---|---|
| BUG-08 | Medium | Every lesson with a `daw-task` looked up its not-yet-created project with `GET /api/projects/task-…`, which 404s → a console error on ~100 lessons (and on `/daw?project=<unknown>`) | `openProject` → `GET /api/projects/:id?ifExists=1` returns **200 `null`** when missing; the embed then creates it from the template (PUT) — no failed request | `apps/server/src/routes/projects.ts`, `apps/web/src/api/client.ts`, `apps/web/src/daw/persistence.ts`, unit test in `apps/server/test/app.test.ts`, `docs/ARCHITECTURE.md` |
| BUG-09 | Medium | Pressing Start on a timed exercise (tap it back, play the melody…) within ~250 ms of the item appearing: the pending **autoplay** of the question started afterwards, replaced the take's count-in/backing and ended the take with **no notes → first attempt scored 0 %** | any pointer/focus interaction inside the exercise cancels a pending autoplay; found by the ear-rhythm tap full-set test (item 2 always 0/6 hits) | `apps/web/src/exercises/ExerciseShell.tsx` |
| BUG-10 | Low | `/daw?project=<missing>`: the "Project … was not found — started a new one." message was wiped immediately, because the follow-up URL update re-ran the load and reset the status | the re-run for the project that is already open keeps the message | `apps/web/src/pages/Daw.tsx` |
| BUG-11 | Low | `/daw` had no `<h1>` (every other page has one; screen-reader heading navigation) | visually hidden `<h1>DAW</h1>` (+ `.sr-only` utility) | `apps/web/src/pages/Daw.tsx`, `apps/web/src/styles/global.css` |
| A11Y-02 | Serious (axe) | Piano-roll scroller (`.daw-roll-scroll`) was a scrollable region without keyboard access, on /daw and in every daw-task embed | `tabIndex=0`, `role="region"`, `aria-label="Piano roll: <clip>"` | `apps/web/src/daw/PianoRoll.tsx` |
| BUG-12 | Low | DAW project name: clearing the field snapped back to "Untitled" at once, so a name could not be cleared and retyped | the field may be empty while typing; empty → "Untitled" on blur, and saves always send a name | `apps/web/src/daw/ProjectBar.tsx`, `apps/web/src/daw/persistence.ts` |
| BUG-13 | Low | Since the BUG-05 fix, a malformed progress body with an unknown lesson id got **404** instead of **400** (existence checked before the body) | body validated first, then existence | `apps/server/src/routes/progress.ts`, unit test |

### Previously reported, re-verified fixed (tests now plain regression tests)

BUG-01 (sampled-piano 404) · BUG-02 (note input to every exercise → focused exercise only) · BUG-03 (lesson remount on finish) ·
BUG-04 (Dashboard Continue) · BUG-05 (unknown lesson/exercise ids) · BUG-06 (Settings overflow on phones) · BUG-07 (autoplay on unlock;
the test is now stricter: **0** sequences on unlock, and Next autoplays only the engaged exercise) · A11Y-01 (overflowing staff).

## Open issues / observations (no failing test)

* **Low — warm-up / Practice offer brand-new cards in the same session.** A card created by passing an ear exercise is due "next session",
  but the warm-up (`srsDue(6, 1)`: up to 1 new card) and Practice (up to 5 new cards) show it immediately. CONTENT_SCHEMA says the warm-up
  uses "due SRS cards … hidden when nothing is due". The suite pins the implemented behaviour (offered as `new`; hidden once nothing is due
  or new). Decide whether a card learned minutes ago should be reviewed right away; if not, restrict new cards to `due_session <= session`.
* **Risk (untested by content)** — two `daw-task`s sharing a `projectRef` **on the same page** would each autosave their own store to the
  same project id (last writer wins). No lesson does this today; the fixture puts them in different lessons.
* Other notes from the last report are resolved: lesson bodies no longer add a second `<h1>` (the renderer demotes `# Title`), Practice
  links show lesson titles (asserted in progress/practice specs).

## Not verifiable in headless Chromium — please check on real devices

* **Real audio output / latency**: audio is verified through the engine's log (notes triggered on Tone instruments), not by listening. Check
  that the metronome, count-in and backing are audible and in sync on the target devices, and the sampled piano when installed.
* **Timing against a real MIDI keyboard**: timed tests inject MIDI at exact `performance.now()` times; real USB-MIDI latency, Bluetooth
  MIDI and audio output latency (`audioTimeToPerf` compensation) should be spot-checked (play along a metronome, check the timeline is
  centred, not systematically late).
* **Hardware Web MIDI**: device enumeration, hot-plug and multiple devices are verified against the shim only; the insecure-context message on
  a LAN IP is verified with the real API.
* **Multi-touch on phones/tablets**: two-finger chords and DAW touch gestures (drag notes / resize with a finger, pinch not supported) —
  touch *taps* are tested at phone size, drags only with a mouse. `isMobile: true` emulation mis-targets second touches (see previous report).
* **iOS Safari audio unlock** (AudioContext resumed inside the gesture) and Safari's lack of Web MIDI.
* **Downloads on mobile browsers** (`.mid` export uses a blob link; verified via Playwright's download event on desktop Chromium only).

## For the developers landing new work

* **New exercise type**: add an entry to `ANSWERERS` in `e2e/helpers/exercises.ts` (the generic tests fail with "ANSWERERS has an entry for
  <type>" otherwise) and, if it has answer modes, a line in `VARIANT` in `exercises.spec.ts`. Keep `data-testid="exercise-<id>"` +
  `data-type`, `.feedback.ok/.bad`, `.choice-grid button`, Reveal/Next, `aria-label="progress"`, `perf-start`/`perf-stop`/`tap-pad`,
  and the `input-active` class on the focused exercise.
* **DAW**: helpers in `e2e/helpers/daw.ts`; selectors are the accessible names (Transport toolbar, "Piano roll grid", Mute/Solo/Arm titles).
* **Fixture content**: add lessons under `e2e/fixture-content/<id>/lesson.md` for features the curriculum does not use yet.
