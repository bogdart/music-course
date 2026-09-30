# Content Schema (contract between content and code)

Content lives in `content/`. This document is the contract. `packages/content-schema`
implements it as Zod schemas and a validator (`npm run validate:content`).
If code and this doc disagree, fix code (or update this doc deliberately, and
tell everyone).

## Layout

```
content/
├── curriculum.json                       # ordered phases → weeks → lesson ids
├── glossary.md                           # terms; lessons link with [[term]]
└── lessons/
    └── w03-l02-major-scale/              # <week>-<lesson>-<slug>
        ├── lesson.md                     # the lesson (front matter + markdown + fenced blocks)
        └── assets/                       # optional: .mid, .svg, .png
```

### curriculum.json

```json
{
  "phases": [
    { "id": "p1", "title": "Foundations", "weeks": [1, 8],
      "goal": "Play, name and hear notes, intervals, major scale, triads; keep time." }
  ],
  "weeks": [
    { "week": 1, "title": "Sound, pitch and the keyboard", "lessons": ["w01-l01-welcome", "w01-l02-pitch-and-octaves", "w01-l03-first-melody"] }
  ]
}
```

### lesson.md front matter

```yaml
---
id: w03-l02-major-scale          # must equal folder name
title: The Major Scale
week: 3
order: 2
phase: p1
duration_min: 40
goals:
  - Build a major scale from any root using W-W-H-W-W-W-H
  - Play C, G and F major with the right hand
  - Hear the difference between major scale and a "wrong" note in it
prerequisites: [w03-l01-half-and-whole-steps]
tags: [scales, major, ear]
songs:                            # optional references (no copyrighted audio/melody)
  - { title: "Ode to Joy", composer: "Beethoven", public_domain: true }
---
```

## Markdown body

Regular Markdown (GFM). Interactive content goes in fenced code blocks whose
language tag is one of: `example`, `exercise`, `keyboard`, `staff`, `chords`.
The body of the block is JSON (comments not allowed). Headings structure the
lesson; the runner shows a progress rail of exercises.

Inline helpers: `[[term]]` links the glossary; `{{note:C#4}}` renders a
clickable note name that plays; `{{chord:Cmaj7}}` likewise.

### `example` — playable snippet with optional notation/keyboard display

```example
{
  "title": "C major scale, ascending",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q F4:q | G4:q A4:q B4:q C5:q" } ],
  "show": ["staff", "keyboard"],      // any of staff | keyboard | pianoroll
  "loop": false
}
```

Drum tracks: `{ "instrument": "drums", "seq": "kick:q snare:q kick:8 kick:8 snare:q" }`.

Optional envelope fields (also valid wherever an envelope/example is embedded, e.g. `listen`, `ear-*.example`):

* `"swing": 0..1` — delays off-beat 8ths (1 = triplet feel); applied to playback and to `play-melody` targets.
* `"tempoChanges": [{ "bar": 9, "bpm": 120 }]` — tempo change at the start of a 1-based bar.
* per track `"volume": 0..1` and `"pan": -1..1`.
* `"hidden": true` — dictation: the example is play-only; notation/keyboard/piano roll (and the BPM, key and instrument list in the header) appear after "Reveal notation". Keep the title of a hidden example neutral ("Mystery song — verse"): it stays visible.
* `"lyrics": "Twin- kle twin- kle lit- tle star"` — one syllable per sounding note of the first track (rests and
  tied continuations are skipped), shown under the staff.

Instruments: `piano epiano bass pad lead pluck strings guitar drums` (`guitar` = overdriven electric).

### `keyboard` — static keyboard diagram

```keyboard
{ "range": ["C3", "C5"], "highlight": ["C4", "E4", "G4"], "labels": "names" }
```
`labels`: `names` | `degrees` (needs `"key"`) | `none`. Optional `"colors": {"C4":"root"}` with roles `root|third|fifth|seventh|other`.

### `staff` — static notation

```staff
{ "clef": "treble", "key": "G", "timeSig": "3/4", "seq": "G4:q A4:q B4:q | D5:h. |" }
```

### `chords` — chord chart

```chords
{ "key": "C", "bars": ["C", "Am", "F", "G"], "roman": true, "play": true, "bpm": 80 }
```

### `reveal` — content shown only when the learner asks

`````markdown
````reveal Show the answers
The loop is **vi–IV–I–V** in C …

```chords
{ "key": "C", "bars": ["Am", "F", "C", "G"], "roman": true }
```
````
`````

A four-backtick fence with language `reveal` and a label. Its content is ordinary lesson markdown (prose, `chords`,
`keyboard`, `staff`, `example` blocks — **no** `exercise` or `ladder`) rendered collapsed behind a "<label> — only after
you've answered" button. Use it for anything that would give away an answer the learner is asked for elsewhere on the
page (facts after a verdict-first quiz, chord charts of a transcribed song, the notes of a mystery tune), because the
whole lesson page is visible at once.

### `ladder` — ear training at the learner's own level

```ladder
{ "skill": "degrees", "unlocks": 5, "intro": "Degree 5 (sol) joins today." }
```

Opens rungs 1…`unlocks` of one of the ten ear-training ladders (`pitch`, `octave`, `degrees`, `intervals`, `chords`, `roots`,
`progressions`, `melody`, `rhythm`, `scales`) when the learner reaches it, then drills the learner's **current rung**
of that skill (lowest open rung not yet mastered) — see `docs/EAR_LADDERS.md` for the rungs, mastery rules and the
unlock schedule. Every graded ear drill in a lesson is a ladder block; `intro` is an optional sentence shown above it.

## `exercise` blocks

Common fields:

```json
{
  "id": "e3",                 // unique within lesson, stable (used for progress)
  "type": "ear-interval",     // see catalogue
  "title": "Optional title",
  "instructions": "Optional extra text shown above the exercise",
  "count": 10,                // number of items in the set (default 10)
  "passScore": 0.8,           // fraction required to mark passed (default 0.7)
  "srs": true,                // add items to spaced repetition deck (default true for ear-* types)
  "seed": 42,                 // optional; otherwise random each session
  "hints": ["..."],           // optional progressive hints
  "spec": { ... }             // type-specific, below
}
```

### Catalogue of exercise types

Every type below MUST be implemented by the exercise engine. Content authors
may only use these types and fields.

#### Ear training

| type | spec | answer |
|------|------|--------|
| `ear-note` | `{ "key": "C", "mode": "major", "degrees": [1,2,3,4,5], "reference": "cadence"\|"scale"\|"tonic"\|"none", "octaves": [3,4], "drone": false, "instrument": "piano" }` | scale degree (1–7, with `b`/`#` when chromatic allowed via `"chromatic": true`) or note name if `"answer": "name"` |
| `ear-octave` | `{ "notes": ["C","D","E"], "octaves": [3,4,5], "mode": "together"\|"match"\|"find"\|"same-or-different"\|"which-octave"\|"higher-or-lower", "gap": [1], "foils": [1,6,11] }` | `same`/`different`, `A`/`B` (match), octave number or `higher`/`lower` |
| `ear-interval` | `{ "intervals": ["m2","M2","m3","M3","P4","TT","P5","m6","M6","m7","M7","P8"], "direction": "asc"\|"desc"\|"harmonic"\|"mixed", "root": "random"\|"C4", "range": ["C3","C5"] }` | interval id |
| `ear-chord` | `{ "qualities": ["maj","min","dim","aug","maj7","min7","dom7","m7b5","sus2","sus4"], "inversions": [0], "voicing": "close"\|"open"\|"mixed", "range": ["C3","C5"] }` | quality id (and inversion index if `inversions` has >1) |
| `ear-chord-root` | `{ "qualities": ["maj","min"], "answer": "play"\|"name", "range": ["C3","C5"], "inversions": [0,1,2] }` | learner plays/names the root note (pitch class, any octave) |
| `ear-scale` | `{ "scales": ["major","natural-minor","harmonic-minor","melodic-minor","dorian","mixolydian","lydian","phrygian","locrian","major-pentatonic","minor-pentatonic","blues","whole-tone","diminished"], "play": "asc"\|"asc-desc"\|"melody" }` | scale id |
| `ear-progression` | `{ "key": "random"\|"C", "mode": "major"\|"minor", "length": 4, "chords": ["I","ii","iii","IV","V","vi","V7","bVII","iv"], "style": "block"\|"arpeggio"\|"pad-bass"\|"band", "inversions": [0,1], "example": {…}, "progression": [...] }` | array of roman numerals |
| `ear-melody` | `{ "key": "C"\|"random", "mode": "major", "degrees": [1,2,3,5], "length": 4, "rhythm": "quarters"\|"simple"\|"free", "answer": "play"\|"degrees", "reference": "cadence"\|"scale"\|"tonic"\|"none", "chromatic": false, "backing": ["I","V"], "maxLeap": 7, "example": {…}, "track": 0 }` | learner plays melody back on keyboard, or enters degrees |
| `ear-rhythm` | `{ "timeSig": "4/4", "bars": 1, "subdivision": "q"\|"8"\|"16"\|"8t", "rests": true, "answer": "tap"\|"choose", "choices": 4, "voices": ["kick","snare","hihat"] }` | tap it back (timing scored ±25% of a beat) or choose among 2–4 notations; with `voices`: fill a drum step grid |
| `ear-bass` | `{ "key":"C", "mode": "major", "chords":["I","IV","V","vi"], "answer":"play"\|"name", "length": 4, "inversions": [0,1], "style": "bass-focus"\|"band", "example": {…}, "track": 1 }` | play (or name as degrees) the bass note of each chord heard |
| `ear-tempo` | `{ "range": [60,160], "tolerance": 4, "style": "click"\|"drums"\|"groove", "timeSig": "4/4", "bars": 2 }` | BPM (± tolerance); tap-tempo helper in the UI |
| `ear-meter` | `{ "meters": ["3/4","4/4","6/8","7/8"], "bpm": 96, "bars": 4, "style": "drums"\|"piano"\|"mixed" }` | the time signature |

#### Keyboard performance

| type | spec | answer |
|------|------|--------|
| `play-notes` | `{ "prompt": "names"\|"staff"\|"degrees", "notes": ["C4","E4","G4"], "ordered": true, "key": "C" }` (or `"sets": [[...],[...]]`) | play the listed notes; order/octave strictness per flags |
| `play-scale` | `{ "root": "random"\|"C", "scale": "major", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 60, "metronome": true }` | correct pitches in order; timing scored if `tempo` set |
| `play-chord` | `{ "chords": ["C","G","Am","F"], "inversion": "any"\|"root"\|0-3, "sequence": true, "bpm": 60, "key": "C", "voicing": "full"\|"shell"\|"rootless"\|"rootless-a"\|"rootless-b", "required": ["3","7"] }` | chord tones held together |
| `play-melody` | `{ "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "E4:q E4:q F4:q G4:q | ...", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument":"pad", "seq":"[C3 E3 G3]:w" }, "tracks": [{ "instrument": "piano", "seq": "C3:w" }], "swing": 0.5 }` | play with metronome/backing; pitch + timing scored |
| `rhythm-tap` | `{ "bpm": 90, "timeSig": "4/4", "seq": "x:q x:8 x:8 r:q x:q", "showNotation": true, "countIn": 1, "loops": 2 }` | tap (space / any key / pad) in time |
| `build-chord` | `{ "chords": ["Cmaj7","Dm","G7"], "root": "given"\|"any", "prompt": "symbol"\|"roman", "key":"C" }` | select/play the pitch classes |
| `build-scale` | `{ "roots": ["C","G","D","F"], "scale": "major", "prompt":"name" }` | select the 7 pitch classes on keyboard |
| `build-interval` | `{ "intervals": ["M3","P5","m7"], "direction":"asc", "root":"random" }` | play/select the second note |

#### Reading & theory

| type | spec | answer |
|------|------|--------|
| `read-note` | `{ "clef": "treble"\|"bass"\|"both", "range": ["C4","G5"], "accidentals": false, "answer": "play"\|"name", "timed": 0, "mode": "note"\|"interval", "intervals": ["M2","M3"], "harmonic": false }` | play or name the shown note (interval mode: name the interval) |
| `read-rhythm` | `{ "timeSig":"4/4", "bars":1, "subdivision":"q"\|"8"\|"16"\|"8t", "rests": true, "bpm": 70, "countIn": 1 }` | tap the shown rhythm |
| `quiz` | `{ "questions": [ { "q": "How many half steps in a perfect fifth?", "choices": ["5","6","7","8"], "answer": 2, "explain": "..." } ] }` | choice index (multiple correct via `"answers":[..]`) |
| `quiz-input` | `{ "questions": [ { "q": "Name the 5th degree of D major", "answer": ["A"], "kind": "note"\|"text"\|"number" } ] }` | free text, normalised (enharmonic-aware for notes) |
| `key-signature` | `{ "keys": ["G","D","F","Bb"], "prompt": "staff"\|"name", "answer": "name"\|"count" }` | key name or #/b count |
| `roman-analysis` | `{ "key": "G", "chords": ["G","Em","C","D7"], "prompt": "symbols"\|"play", "palette": "diatonic"\|"chromatic" }` | roman numerals per chord (`palette`: answer buttons; default adds common chromatic numerals as decoys when any answer is chromatic — set `"chromatic"` from week 24 so their presence never hints) |

#### DAW / composition

| type | spec | answer |
|------|------|--------|
| `daw-task` | `{ "template": { project JSON or `{"bpm":100,"key":"C","timeSig":"4/4","tracks":[{"instrument":"piano","seq":""}]}` }, "task": "Write a 4-bar melody using only C-major notes, ending on C.", "checks": [ ...predicates ], "minBars": 4, "maxBars": 4, "timerMin"?: 20, "projectRef"?: "w45-song" }` | answer `{ project, selfChecks }`; score = passed checks / total |
| `listen` | `{ "example": {...example block...}` or `"examples": [...]`, `"questions": [ quiz questions ] }` | guided listening; optional quiz |
| `reflect` | `{ "prompt": "Describe what you hear ..." , "minWords": 20 }` | free text saved to journal (auto-pass) |

`daw-task` spec fields:

| field | meaning |
|-------|---------|
| `template` | starting project: an envelope `{ "bpm", "timeSig", "key", "tracks": [{ "instrument", "seq", "volume"? }], "markers"?: [{ "bar": 1, "name": "Verse" }] }` (one track + one clip per envelope track, clip ≥ `minBars` long) or a full project JSON (tracks with clips). Default: 100 BPM, C, one empty piano track. |
| `task` | the task text (shown as the prompt) |
| `checks` | predicates below; the score is *passed / total* (self-check `custom` checks count) |
| `minBars`, `maxBars` | an implicit `bars` check is added when `checks` has none; `minBars` also sets the template clip length |
| `timerMin` | optional countdown (minutes) shown above the DAW; informational, never blocks |
| `projectRef` | slug (`"w45-song"`): every task with the same `projectRef` opens and saves the *same* project (server id `ref-<slug>`), so checkpoint tasks continue one song; the first task to open it creates it from its own template. Without it each task saves to `task-<lessonId>-<exerciseId>`. |

`daw-task.checks` predicates (all ANDed; each `{ "kind": ..., ...args, "track"?: 0 }`). `track` (0-based
index into the project's tracks, in template order) is accepted by every predicate. Without `track`:
*line* predicates (`ends-on starts-on max-leap min-leap contour repetition has-rest syncopation voice-leading
uses-rhythm chord-tones-on-beats plays-progression`) use the first non-drum track with notes; *note-set*
predicates (`in-key range chord-has-seventh uses-chord`) use all non-drum tracks together; `note-count` uses
all tracks; `drum-pattern` the first drum track. A `key` argument defaults to the project key, then the
template key, then C; `"key": "project"` means the learner's current project key. Positions tolerate ±1/32
note. Chord-based predicates take roman numerals in the key (or chord symbols).

```
{ "kind": "in-key", "key": "C"|"Am"|"project", "scale": "major", "allowPassing": false }
    every note's pitch class is in the scale (any `ear-scale` id; default: major, or natural-minor for a minor key).
    allowPassing: a note ≤ 1 beat long, approached and left by ≤ 2 semitones from in-scale notes, is tolerated.
{ "kind": "note-count", "min": 8, "max": 32 }
{ "kind": "range", "low": "C4", "high": "C6" }
{ "kind": "bars", "min": 4, "max": 8 }                  length = last note end rounded up to bars (1/32 tolerance)
{ "kind": "ends-on", "degree": 1, "key"?: "G" }         top or bottom note of the last onset
{ "kind": "starts-on", "degrees": [1,3,5] }             top or bottom note of the first onset
{ "kind": "chord-tones-on-beats", "beats": [1,3], "progression": ["I","V","vi","IV"], "barsPerChord": 1, "minRatio": 0.75 }
    notes sounding on those beats of each bar are tones of that bar's chord; the progression LOOPS over the
    whole piece; ratio = chord tones / notes sounding on the beats.
{ "kind": "uses-rhythm", "values": ["8","q","8.","8t"], "minDistinct": 2 }
    at least minDistinct of the values occur as a note duration or as the gap between onsets (±8 %); any
    duration token incl. dotted/triplet. Default minDistinct 1.
{ "kind": "max-leap", "semitones": 7 }                  between consecutive notes of the melody (top line)
{ "kind": "min-leap", "semitones": 5, "min": 1 }        at least `min` leaps of ≥ semitones
{ "kind": "has-tracks", "instruments": ["drums","bass","piano"] }   a track with notes per listed instrument (repeats need several tracks)
{ "kind": "drum-pattern", "requires": ["kick","snare"], "kickOnBeats": [1,3], "snareOnBeats": [2,4],
  "clapOn": [2,4], "hatOn": "8"|"16"|"q"|"offbeats"|[1,2,3,4], "on": { "ride": "q", "ohat": [4.5] },
  "forbid": { "snare": [1,3] }, "mode": "at-least"|"exact", "bars": [1,8], "minRatio": 0.75 }
    requires: each drum is used somewhere. *On lists are 1-based beats (fractions allowed: 2.5 = the "and" of 2);
    a string is a grid (every 8th …). Each expectation must hold in ≥ minRatio of the bars that contain drums
    (within `bars` [from,to], 1-based inclusive). mode "exact": that drum plays ONLY on the listed positions.
    forbid: no hits of that drum on those beats. Drums are distinct: a clap never counts as a snare,
    `hihat`/`hh` = closed hat (42), `ohat` = open hat (46).
{ "kind": "no-parallel-fifths", "tracks": [0,1], "octaves"?: false }  top voice of the first vs bottom voice of the second track
{ "kind": "repetition", "motifBars": 1, "minRepeats": 2, "allowTransposed": true, "minSimilarity"?: 0.8 }
    the piece is cut into motifBars-long chunks; some chunk must match ≥ minRepeats chunks (itself included,
    same onsets ±1/32 and pitches; with allowTransposed any transposition ±12)
{ "kind": "contour", "shape": "arch"|"ascending"|"descending"|"wave"|"valley" }
    arch/valley: highest/lowest note in the middle, ≥ 2 semitones above/below both ends; ascending/descending:
    ends ≥ 3 semitones higher/lower and the overall trend agrees; wave: ≥ 3 changes of direction.
{ "kind": "has-rest", "minDuration": "8", "min": 1 }   gaps inside the track (or to the end of its last bar)
{ "kind": "plays-progression", "progression": ["I","V","vi","IV"], "barsPerChord": 1, "mode": "chords"|"roots", "minRatio": 0.75 }
    chords: each chord span contains the root and ≥ 3 chord tones (all tones for smaller chords);
    roots: its first/lowest note is the root (default for bass tracks). The progression loops; a piece shorter
    than the progression fails the missing chords.
{ "kind": "is-transposition", "of": 0, "track": 1, "semitones"?: 7, "sameTime"?: false, "octave"?: "exact"|"any", "minRatio": 0.9 }
    track is the `of` track moved by a constant interval (≠ 0 unless allowSame); by default it may start
    later (first notes are aligned).
{ "kind": "voice-leading", "maxMove": 2, "minRatio": 1 }  between consecutive chords (≥ 2 notes) every voice moves ≤ maxMove semitones
{ "kind": "chord-has-seventh", "min": 1 }               sounding sets of ≥ 3 pitch classes that form a 7th chord
{ "kind": "uses-chord", "roman": "iv"|["iv","bVI"], "chord"?: "Fm", "min": 1 }  all tones (first 4) sound together, across tracks if no `track`
{ "kind": "tempo", "min": 80, "max": 100 }              project BPM
{ "kind": "syncopation", "minOffbeatRatio": 0.25 }      share of onsets that are not on a beat
{ "kind": "matches-reference", "reference": { envelope like `example` }, "track"?: 0, "refTrack"?: 0,
  "minSimilarity": 0.7, "octave": "any"|"exact", "transpose"?: false, "startBar"?: 1, "tolerance"?: "16" }
    similarity = matched notes / max(reference notes, learner notes); a match is the same pitch class (same MIDI
    note with octave "exact"; drums always exact) with an onset within `tolerance`. Without `track` every
    reference track i is compared with learner track i and the mean is used. `transpose` tries all 12 keys.
{ "kind": "duration-seconds", "min": 150, "max": 240 }  length (bars × tempo) in seconds
{ "kind": "sections", "names"?: ["verse","chorus"], "min"?: 2 }  project section markers (case-insensitive prefix match)
{ "kind": "custom", "id": "...", "note": "explained in task text" }  a self-check checkbox; passes when ticked
```

## Authoring rules

1. A lesson is 30–50 minutes: 5–8 exercises, 200–600 words of prose total.
2. Every lesson has ≥1 ear-training block (normally a ```ladder block) and ≥1 keyboard exercise.
3. Start with a 2-minute warm-up (`srs` review is added automatically by the runner; do not author it).
4. Introduce ≤2–3 new concepts per lesson. Prose explains *why*, then an `example` shows it, then an `exercise` drills
   it. Never use a term, chord, reference sound or skill before a lesson has explained it with sound (see
   `docs/CURRICULUM.md` rules). Describe what the learner will actually hear, not an idealised claim.
5. Exercise `count` 6–12; `passScore` 0.7 (0.75 at most; reviews are diagnostic at 0.7). Graded ear drills are ladder
   blocks, which grow by one dimension per rung; fixed `ear-*` exercises are only for transcribing an attached example
   or listening tied to one specific piece, and hide the answer (`"hidden": true`, no hints in question text).
6. Songs: public-domain pieces may include full `seq`. Contemporary songs: only title/artist, key, tempo, structure, chord progression (roman + symbols), and verbal analysis. Never transcribe copyrighted melodies. Original "in the style of" material is encouraged.
7. Cross-reference: `See [[interval]]` (glossary) and `[Lesson](../w02-l01-slug/)` links.
8. Each week ends with a `daw-task` (from week 2 onward) so the learner makes something.
9. Degree-based ear training (the `degrees` ladder) is the solfège approach; add absolute naming only for note-name
   reading. Real songs are analysed *verdict first*: the learner answers (quiz) before the facts appear (`explain`).
10. Always specify `key` where a spec supports it, except when `"random"` is intentional.

## Implementation notes (validator & engine behaviour)

These clarify how `packages/content-schema` / `packages/core` read the contract above.
Run `npm run validate:content` (add a lesson id to check one lesson).

* **Tolerance.** Unknown fields in front matter, blocks and specs are accepted with a *warning*
  (ignored by the app). Known fields, ids, types, note names, keys, chord symbols, roman numerals,
  interval/scale/quality ids and `seq` strings are validated strictly (*errors*).
* **Front matter YAML.** Quote strings that contain `": "` (e.g. `- "Produce a trio: melody, bass"`),
  otherwise YAML turns them into objects.
* **Lesson ids** match `wNN-lM-slug` (`l2` or `l02`). Folder name = `id`, and the lesson must be listed in
  `curriculum.json` under the same week; `phase` must match the week's phase.
* **seq**: if `:duration` is omitted the previous duration is reused. Notes without an octave default to
  octave 4. `x` is a generic hit (rhythm-only). `hihat` = `hh`. A leading `>` accents a token
  (`>kick:q`, `>[C4 E4]:h`). Drums can be stacked like chords: `[kick hh]:8`.
* **Additions from docs/SCHEMA_GAPS.md** (accepted by the validator): `ear-octave` mode `higher-or-lower`;
  intervals `P1` and compound `m9 M9 m10 M10 P11 P12 m13 M13`; `count` is optional everywhere (default:
  number of quiz questions / note sets, 1 for `play-melody rhythm-tap daw-task listen reflect play-scale`,
  else 10); envelope `swing` 0..1; `play-melody.tracks` (extra voices) and `swing`; `ear-rhythm`
  `subdivision: "q"` and `choices` 2–4; `inversions` on `ear-chord-root`, `ear-bass`, `ear-progression`;
  `play-chord.inversion` may be a number 0–3; `listen.examples: [...]`; extra `daw-task` check kinds
  `has-rest min-leap plays-progression is-transposition voice-leading chord-has-seventh uses-chord tempo
  syncopation matches-reference duration-seconds sections`, `daw-task.timerMin`, `daw-task.projectRef`,
  `in-key` `"key":"project"`, template `markers`. All are implemented (M3).
* **Chord symbols**: `C Cm Cdim Caug C7 Cmaj7 Cm7 Cm7b5 (Cø7) Cdim7 CmMaj7 Csus2 Csus4 C7sus4 C6 Cm6 C6/9
  Cadd9 Cmadd9 C9 Cmaj9 Cm9 C9sus4 C11 Cm11 C13 Cmaj13 Cm13 C13sus4 C7b9 C7#9 C7#11 C7b13 C7#5 C7b5 C7alt
  Cmaj7#11 Cmaj7#5 C5`, slash bass `C/E`. Quality ids for `ear-chord` etc. are
  `maj min dim aug maj7 min7 dom7 m7b5 sus2 sus4 dim7 minmaj7 maj6 min6 dom9 maj9 min9 add9 dom7sus4 power
  madd9 six9 dom9sus4 dom11 min11 dom13 maj13 min13 dom7b9 dom7s9 dom7s11 dom7b13 dom7s5 dom7b5 alt maj7s11 maj7s5 dom13sus4`.
* **Item counts** (when `count` is omitted): quiz / quiz-input / listen = number of questions (listen without
  questions: 1); play-notes = number of note sets; play-chord = number of chords; roman-analysis = 1; ear-bass /
  ear-melody / ear-progression with an attached `example` = 1; play-melody, rhythm-tap, daw-task, reflect,
  play-scale = 1; everything else 10. List-based types (play-chord, build-chord, build-scale, key-signature)
  walk their list in a freshly shuffled order per set (`play-chord` with `sequence: true` walks it in order).
  A set never repeats a **fixed** item (one with nothing random in it — a given melody, rhythm, scale, note set or
  progression): `count` above the number of distinct fixed items does not add copies, so don't use `count` to mean
  "practise it N times" (performance items already keep the best of unlimited retries). Randomised items may repeat
  by chance.
* **Keys** everywhere accept `"C"`, `"Bb"`, `"F#"`, `"Am"`, `"C# minor"`, `"E minor"`; a separate `mode` applies
  only when the key string has no suffix. `ear-progression.key`, `ear-melody.key`, `ear-note.key` and `ear-bass.key` may be `"random"` (a fresh key per
  item; keep `mode` for minor). Which keys the learner hears in graded drills is decided by the ladders (one key
  for weeks, then G/F, random keys only from the rungs opened in week 11); fixed exercises use the key of their piece.
  **Scale ids** everywhere (`ear-scale`, `build-scale`, `play-scale`, `in-key`) accept every `ear-scale` id plus the
  aliases `minor`, `ionian`, `aeolian`.
* **Roman numerals**: case = quality (`ii` minor), `°`/`ø`/`+`, suffixes `7 maj7 maj9 9 11 13 7sus4 add9 sus2 sus4`
  (`Imaj7 ii7 V7 vi7 iii7 IVmaj7 Vsus4 V7sus4 V13 VI7 v7 bVI bVII bII7` …),
  figured-bass inversions `6 64 65 43 42`, secondary chords `V/V V7/ii vii°/V`. Accidentals: `b` is
  relative to the *major* scale of the tonic (`bIII bVI bVII`, also valid in minor); without accidentals,
  minor keys use natural-minor degrees (`III VI VII`), except `vii°`/`vii°7` which use the raised leading
  tone. Answers are compared by the resulting chord, so `VII` ≡ `bVII` in minor.
* **Scale degrees** (`degrees`, `ends-on` …): `1`–`7` or strings with `b`/`#` (`"b3"`, `"#4"`), relative to
  the key's mode.
* **`ear-note`**: `mode` defaults to `major` (a key like `"Am"` also sets minor); `answer`: `"degree"`
  (default) | `"name"`; `chromatic: true` shows all 12 degree buttons.
* **`ear-octave`** `seek`: hear one note (from `notes` × `octaves`) and find the exact key; only the keys of that
  range are shown, every key pressed is a try and answers "go higher / go lower" (or "right name, wrong octave").
  `same-pitch`: two notes in one register — exactly the same note twice, or different by one of `foils` semitones.
  `higher-or-lower`: is the second note higher or lower? (Used by the `pitch` ladder.)
* **`ear-octave`** `which-octave` plays middle C (C4) as a reference first. `find`: one note (from `notes` ×
  `octaves`, may be far outside the keyboard), the learner plays the same note name in any octave (answer by keyboard). Like `ear-chord-root` "play", keys can be tried freely — each sounds, nothing is scored — and **Check** answers with the last key played.
  Comparison modes: `together` (both
  notes at once — an octave melts into one sound; the easiest), `match` (a note, then candidates A and B: which is its
  octave), `same-or-different` (one after the other). `gap`: octave distances (1–2) between the compared notes
  (default any the `octaves` allow). `foils`: semitone distances (1–11) of the "different" note from the first
  (default: another name from `notes`); the different note is placed next to the octave position, so the size of the
  jump never gives the answer away. Pedagogy: start with `together`/`match`, `gap: [1]` and clashing foils `[1, 6, 11]`;
  add `gap: [1, 2]` and the confusable fifth/fourth foils `[5, 7]` only later. Every comparison item offers
  "Listen again" aids (both together, the real octave, walking the octaves) after the first answer.
* **`ear-note`** `drone: true` holds the tonic an octave below under the question note. After every answer the note
  walks home automatically (degrees up to 5 fall to 1, 6 and 7 rise to the upper 1).
* **`ear-bass.style`**: `bass-focus` (default) | `band`; **`ear-progression.style`** also accepts `band`: a full mix
  (soft pad chords, rhythmic bass, rock beat, a lead line on chord tones) to hear bass and harmony through.
* **Key references** (`ear-note.reference`, `ear-melody.reference`): `scale` = melodic home run 1 2 3 4 5 4 3 2 1
  (no chords — use it before chords are taught, weeks 3–5), `cadence` = I–IV–V–I, smoothly voiced (from week 6),
  `tonic` = the tonic alone (weeks 1–2 echo drills), `none`. All references and the question share the same
  tonic register (C4–G4 for C…G, A♭3–B3 for A♭…B; `octaves` shifts it), so degree 1 is always exactly the note the
  reference ends on. `ear-melody` defaults to `cadence`, `ear-note` too.
* **`play-notes`**: `notes` may also be an array of arrays — one note set per item (item count = number of
  sets unless `count` is given). Optional `"octave": "exact" | "any"` (default `exact` when every note has
  an octave, else `any`) and `"clef"` for `prompt: "staff"`. `prompt: "degrees"` requires `key`.
* **`build-chord`**: `chords` are chord symbols (the answer); `prompt: "roman"` displays them as numerals in
  `key` (roman numerals in `chords` are accepted too).
* **`quiz`**: `answer` (index) or `answers` (several correct indices, partial credit). Choice order is kept.
* **`quiz-input`**: `kind` defaults to `text` (case/punctuation-insensitive exact match against any accepted
  answer); `note` is enharmonic-aware (`"C#"` ≡ `"Db"`, "C sharp" accepted) and octave-aware only if the
  accepted answer has an octave; `number` compares numerically.
* **`read-note`**: default ranges treble `C4–G5`, bass `E2–C4`; with `clef: "both"` treble items stay ≥ C4 and
  bass items ≤ C4. Black keys (with `accidentals: true`) are shown as sharps or flats at random.
* **`chords` block**: a bar may hold several chords separated by spaces (`"C G"`, `"C G/B"` — the bar is split
  evenly), slash chords play their bass note, `%` repeats the previous bar, `N.C.` = no chord. Optional `mode`,
  `timeSig`, `instrument`, `title`.

### Exercise engine behaviour (M2)

* **Timing & performance** (`play-melody`, `rhythm-tap`, `read-rhythm`, `ear-rhythm` tap mode, `play-scale` with
  `tempo`): the learner presses Start, hears a count-in (`countIn` bars, default 1; metronome on) and plays/taps.
  Taps come from the space bar, any computer key, the on-screen TAP pad or any MIDI key. Each target note is
  matched to the nearest played note: tolerance ±25% of a beat (capped at 45% of the shortest gap between notes,
  ≥ 40 ms); within ±1 tolerance = in time, within ±2 = early/late (half timing credit), beyond = 20%. A wrong pitch
  scores 0, a right note in the wrong octave half; extra notes count half a note against the total. Correct =
  ≥ 85% with nothing missed or wrong. Results are shown on the staff (coloured notes), keyboard and a timeline.
  `play-melody` checks exact octaves; `play-scale` is octave-lenient; without `tempo` it only checks pitch order.
  `play-scale.hands: "both"` expects both hands an octave apart; one note per beat.
* **`play-melody`**: `tracks` are extra parts the learner plays too (e.g. left hand; all voices are scored,
  drums tracks are treated as backing); `backing` is accompaniment played by the app; `swing` shifts off-beat 8ths
  of targets and playback. A "Listen first" button plays the demo (not offered for `read-rhythm`).
* **`rhythm-tap`**: `seq` is the rhythm (`x`, drum names or notes — pitch is ignored); `loops` repeats it;
  `showNotation: false` makes it a dictation (listen first, then tap).
* **Ear "play" answers** (`ear-melody`, `ear-bass`, `ear-chord-root`): pitch classes in any octave; sequences are
  aligned (longest common subsequence) so one wrong note costs one note. `ear-melody`/`ear-bass` with
  `answer: "degrees"`/`"name"` fill degree slots (answer by button or by playing the note).
* **`ear-chord-root`**: `inversions` put the 3rd/5th/7th in the bass (the answer is still the root).
* **`ear-progression` / `ear-bass`**: a cadence in the key plays first; the progression starts on the tonic when
  the chord list has one; chords are voice-led around middle C with the bass below. `inversions` put the chord's
  3rd/5th in the bass: for `ear-progression` answers are still plain numerals (compared by chord, root-only = half
  credit); for `ear-bass` the answer is the **lowest note heard** (the inversion's bass). Figured-bass numerals
  (`V6`, `I64`) always sound in that inversion. Minor keys: `"key": "Am"` or `"mode": "minor"`.
* **Attached mixes** (`example` on `ear-progression`, `ear-melody`, `ear-bass`): the example envelope is played
  instead of a generated question (1 item). `ear-progression` then needs `progression` (the answer, in order;
  `chords` stays the button palette). `ear-melody` transcribes the top line of track `track` (default: first
  non-drum track); `ear-bass` the lowest line of `track` (default: first `bass` track).
* **`ear-melody`**: melodies start on 1 when it is in `degrees`, move to the nearest octave of each degree, may end
  on 1; `rhythm` shapes durations (`simple`: quarters/halves/eighth pairs; `free`: adds dotted figures);
  `maxLeap` limits leaps (semitones); `chromatic: true` adds chromatic neighbour/passing tones that resolve by half
  step and shows all 12 degree buttons; `backing` numerals are spread evenly under the melody on a pad.
* **`ear-rhythm`**: rhythms are built from beat cells of the requested `subdivision` (`q`, `8`, `16`, `8t`; x/8
  meters are grouped 2+2+3 etc.), always start with a hit and use the subdivision at least once; `rests` allows
  rests. `choose` shows `choices` (default 4) notations that *sound* different. `voices` (kick, snare, clap, hh,
  hihat, ohat, tom, ride, crash; 1–4) switches to a step-grid dictation (steps = subdivision; a pattern played
  twice), scored per cell.
* **`ear-tempo`**: a groove at a random BPM in `range` (default 60–160); correct within ±`tolerance` (default 4);
  half/double-time answers are pointed out; partial credit fades out over 3×tolerance.
* **`ear-meter`**: accented grooves (downbeat kick/bass, x/8 meters grouped 2+2+3…); choose among `meters`.
* **`play-chord`**: the answer is the set of notes held together (submitted when enough notes are held for a
  moment, or on release). Doubled notes are fine. `inversion: "root"` / 0–3 checks the lowest note; slash chords
  (`G/B`) require their bass. `voicing`: `full` (default; the 5th may be omitted in 5+-note chords), `shell`
  (root, 3rd, 7th), `rootless` (3rd, 7th, 9th required, 5th/13th allowed, no root), `rootless-a` (3rd lowest),
  `rootless-b` (7th lowest); `required: ["3","7"]` lists the chord degrees that must sound (others optional).
  Right notes with the wrong bass = half credit. `chords` may be numerals when `key` is set.
* **`build-chord` / `build-scale`**: select pitch classes (click keys or play them), then Check; partial credit =
  overlap. `root: "given"` (default) marks the root. **`build-interval`**: root shown; play the target note
  (exact octave; right note in the wrong octave = half). Default range `C3–C6`.
* **`key-signature`**: `prompt: "staff"` (default) shows the signature, `"name"` names the key; `answer: "name"`
  (default) chooses the key, `"count"` the number of ♯/♭ (`"2#"`, `"3b"`, `"0"`). `prompt: "name"` +
  `answer: "name"` asks for the **relative** major/minor. Keys like `"Em"` drill minor signatures.
* **`roman-analysis`**: one item for the whole progression; the palette holds the key's diatonic triads (and
  7ths if any chord has one) plus the right answers (secondary dominants `V7/V`, borrowed `bVI`…). Compared by
  chord (`II7` ≡ `V7/V`); right root, wrong quality = half. `prompt: "play"` hides the symbols and plays them.
* **`read-note`** `mode: "interval"`: two notes (natural root, correctly spelled second note) melodic or
  `harmonic: true`; choose among `intervals` (default m2…P8).
* **`listen`**: all examples are shown (each with its own play button); each question is one item. Without
  questions the learner confirms "I've listened" (auto-pass).
* **`reflect`**: text is saved as the attempt answer (the journal; the last entry is shown next time) and passes
  once `minWords` is reached.
* **SRS warm-up**: the lesson runner shows a 2-minute warm-up of due SRS cards at the top of each lesson (skippable;
  hidden when nothing is due). Authors never write it.
* **Practice**: `/practice` mixes due reviews with up to 5 new cards and adapts each card's difficulty from its
  rolling accuracy (> 85% → widen option sets / add octaves / inversions / length; < 60% → narrow).
* **Glossary**: `content/glossary.md` plus any `content/glossary/*.md` fragments are merged. Each term is a
  `## Term` (or `###`) heading followed by its definition; aliases via `## Term (alias, alias)` or an
  `Aliases: a, b` line. One-line entries `- **Term**: definition` also work. `[[term]]` matching is
  case-insensitive and tolerant of plurals; unknown terms are warnings. Duplicate terms across fragments
  are warnings (first definition wins).
