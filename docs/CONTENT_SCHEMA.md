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
| `ear-note` | `{ "key": "C", "mode": "major", "degrees": [1,2,3,4,5], "reference": "cadence"\|"tonic"\|"none", "octaves": [3,4], "instrument": "piano" }` | scale degree (1–7, with `b`/`#` when chromatic allowed via `"chromatic": true`) or note name if `"answer": "name"` |
| `ear-octave` | `{ "notes": ["C","G"], "octaves": [2,3,4,5,6], "mode": "same-or-different"\|"which-octave" }` | `same`/`different` or octave number |
| `ear-interval` | `{ "intervals": ["m2","M2","m3","M3","P4","TT","P5","m6","M6","m7","M7","P8"], "direction": "asc"\|"desc"\|"harmonic"\|"mixed", "root": "random"\|"C4", "range": ["C3","C5"] }` | interval id |
| `ear-chord` | `{ "qualities": ["maj","min","dim","aug","maj7","min7","dom7","m7b5","sus2","sus4"], "inversions": [0], "voicing": "close"\|"open"\|"mixed", "range": ["C3","C5"] }` | quality id (and inversion index if `inversions` has >1) |
| `ear-chord-root` | `{ "qualities": ["maj","min"], "answer": "play"\|"name", "range": ["C3","C5"] }` | learner plays/names the root note (pitch class) |
| `ear-scale` | `{ "scales": ["major","natural-minor","harmonic-minor","melodic-minor","dorian","mixolydian","lydian","phrygian","locrian","major-pentatonic","minor-pentatonic","blues","whole-tone","diminished"], "play": "asc"\|"asc-desc"\|"melody" }` | scale id |
| `ear-progression` | `{ "key": "random"\|"C", "mode": "major"\|"minor", "length": 4, "chords": ["I","ii","iii","IV","V","vi","V7","bVII","iv"], "style": "block"\|"arpeggio"\|"pad-bass" }` | array of roman numerals |
| `ear-melody` | `{ "key": "C", "degrees": [1,2,3,5], "length": 4, "rhythm": "quarters"\|"simple"\|"free", "answer": "play"\|"degrees" }` | learner plays melody back on keyboard, or enters degrees |
| `ear-rhythm` | `{ "timeSig": "4/4", "bars": 1, "subdivision": "8"\|"16"\|"8t", "rests": true, "answer": "tap"\|"choose" }` | tap it back (timing scored ±80 ms/beat-proportional) or choose among 4 notations |
| `ear-bass` | `{ "key":"C", "chords":["I","IV","V","vi"], "answer":"play" }` | play the bass root of each chord heard |

#### Keyboard performance

| type | spec | answer |
|------|------|--------|
| `play-notes` | `{ "prompt": "names"\|"staff"\|"degrees", "notes": ["C4","E4","G4"], "ordered": true, "key": "C" }` | play the listed notes; order/octave strictness per flags |
| `play-scale` | `{ "root": "random"\|"C", "scale": "major", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 60, "metronome": true }` | correct pitches in order; timing scored if `tempo` set |
| `play-chord` | `{ "chords": ["C","G","Am","F"], "inversion": "any"\|"root", "sequence": true, "bpm": 60 }` | all chord tones held together |
| `play-melody` | `{ "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "E4:q E4:q F4:q G4:q | ...", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument":"pad", "seq":"[C3 E3 G3]:w" } }` | play with metronome/backing; pitch + timing scored |
| `rhythm-tap` | `{ "bpm": 90, "timeSig": "4/4", "seq": "x:q x:8 x:8 r:q x:q", "showNotation": true, "countIn": 1, "loops": 2 }` | tap (space / any key / pad) in time |
| `build-chord` | `{ "chords": ["Cmaj7","Dm","G7"], "root": "given"\|"any", "prompt": "symbol"\|"roman", "key":"C" }` | select/play the pitch classes |
| `build-scale` | `{ "roots": ["C","G","D","F"], "scale": "major", "prompt":"name" }` | select the 7 pitch classes on keyboard |
| `build-interval` | `{ "intervals": ["M3","P5","m7"], "direction":"asc", "root":"random" }` | play/select the second note |

#### Reading & theory

| type | spec | answer |
|------|------|--------|
| `read-note` | `{ "clef": "treble"\|"bass"\|"both", "range": ["C4","G5"], "accidentals": false, "answer": "play"\|"name", "timed": 0 }` | play or name the shown note |
| `read-rhythm` | `{ "timeSig":"4/4", "bars":1, "subdivision":"8" }` | tap the shown rhythm |
| `quiz` | `{ "questions": [ { "q": "How many half steps in a perfect fifth?", "choices": ["5","6","7","8"], "answer": 2, "explain": "..." } ] }` | choice index (multiple correct via `"answers":[..]`) |
| `quiz-input` | `{ "questions": [ { "q": "Name the 5th degree of D major", "answer": ["A"], "kind": "note"\|"text"\|"number" } ] }` | free text, normalised (enharmonic-aware for notes) |
| `key-signature` | `{ "keys": ["G","D","F","Bb"], "prompt": "staff"\|"name", "answer": "name"\|"count" }` | key name or #/b count |
| `roman-analysis` | `{ "key": "G", "chords": ["G","Em","C","D7"], "prompt": "symbols"\|"play" }` | roman numerals per chord |

#### DAW / composition

| type | spec | answer |
|------|------|--------|
| `daw-task` | `{ "template": { project JSON or `{"bpm":100,"key":"C","tracks":[{"instrument":"piano","seq":""}]}` }, "task": "Write a 4-bar melody using only C-major notes, ending on C.", "checks": [ ...predicates ], "minBars": 4, "maxBars": 4 }` | project state checked by predicates; free-form otherwise |
| `listen` | `{ "example": {...example block...}, "questions": [ quiz questions ] }` | guided listening; optional quiz |
| `reflect` | `{ "prompt": "Describe what you hear ..." , "minWords": 20 }` | free text saved to journal (auto-pass) |

`daw-task.checks` predicates (all optional, ANDed; each `{ "kind": ..., ...args, "track"?: 0 }`):

```
{ "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false }
{ "kind": "note-count", "min": 8, "max": 32 }
{ "kind": "range", "low": "C4", "high": "C6" }
{ "kind": "bars", "min": 4, "max": 8 }
{ "kind": "ends-on", "degree": 1 }
{ "kind": "starts-on", "degrees": [1,3,5] }
{ "kind": "chord-tones-on-beats", "beats": [1,3], "progression": ["I","V","vi","IV"], "barsPerChord": 1, "minRatio": 0.75 }
{ "kind": "uses-rhythm", "values": ["8","q"], "minDistinct": 2 }
{ "kind": "max-leap", "semitones": 7 }
{ "kind": "has-tracks", "instruments": ["drums","bass","piano"] }
{ "kind": "drum-pattern", "requires": ["kick","snare"], "kickOnBeats": [1,3], "snareOnBeats": [2,4] }
{ "kind": "no-parallel-fifths", "tracks": [0,1] }
{ "kind": "repetition", "motifBars": 1, "minRepeats": 2, "allowTransposed": true }
{ "kind": "contour", "shape": "arch"|"ascending"|"descending"|"wave" }
{ "kind": "custom", "id": "...", "note": "explained in task text; evaluated as pass with self-check" }
```

## Authoring rules

1. A lesson is 30–50 minutes: 5–8 exercises, 200–600 words of prose total.
2. Every lesson has ≥1 ear-training exercise and ≥1 keyboard exercise.
3. Start with a 2-minute warm-up (`srs` review is added automatically by the runner; do not author it).
4. Introduce ≤2 new concepts per lesson. Prose explains *why*, then an `example` shows it, then an `exercise` drills it.
5. Exercise `count` 6–12; `passScore` 0.7–0.85; ear exercises in early weeks use small option sets (2–3) and grow.
6. Songs: public-domain pieces may include full `seq`. Contemporary songs: only title/artist, key, tempo, structure, chord progression (roman + symbols), and verbal analysis. Never transcribe copyrighted melodies. Original "in the style of" material is encouraged.
7. Cross-reference: `See [[interval]]` (glossary) and `[Lesson](../w02-l01-slug/)` links.
8. Each week ends with a `daw-task` (from week 2 onward) so the learner makes something.
9. Use degree-based ear training (`reference: "cadence"`) as the default solfège approach; add absolute naming only for note-name reading.
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
  syncopation`. See SCHEMA_GAPS.md for which ones the engine already honours.
* **Chord symbols**: `C Cm Cdim Caug C7 Cmaj7 Cm7 Cm7b5 (Cø7) Cdim7 CmMaj7 Csus2 Csus4 C7sus4 C6 Cm6 C6/9
  Cadd9 Cmadd9 C9 Cmaj9 Cm9 C9sus4 C11 Cm11 C13 Cmaj13 Cm13 C13sus4 C7b9 C7#9 C7#11 C7b13 C7#5 C7b5 C7alt
  Cmaj7#11 Cmaj7#5 C5`, slash bass `C/E`. Quality ids for `ear-chord` etc. are
  `maj min dim aug maj7 min7 dom7 m7b5 sus2 sus4 dim7 minmaj7 maj6 min6 dom9 maj9 min9 add9 dom7sus4 power
  madd9 six9 dom9sus4 dom11 min11 dom13 maj13 min13 dom7b9 dom7s9 dom7s11 dom7b13 dom7s5 dom7b5 alt maj7s11 maj7s5 dom13sus4`.
* **Roman numerals**: case = quality (`ii` minor), `°`/`ø`/`+`, suffixes `7 maj7 9 add9 sus2 sus4`,
  figured-bass inversions `6 64 65 43 42`, secondary chords `V/V V7/ii vii°/V`. Accidentals: `b` is
  relative to the *major* scale of the tonic (`bIII bVI bVII`, also valid in minor); without accidentals,
  minor keys use natural-minor degrees (`III VI VII`), except `vii°`/`vii°7` which use the raised leading
  tone. Answers are compared by the resulting chord, so `VII` ≡ `bVII` in minor.
* **Scale degrees** (`degrees`, `ends-on` …): `1`–`7` or strings with `b`/`#` (`"b3"`, `"#4"`), relative to
  the key's mode.
* **`ear-note`**: `mode` defaults to `major` (a key like `"Am"` also sets minor); `answer`: `"degree"`
  (default) | `"name"`; `chromatic: true` shows all 12 degree buttons.
* **`ear-octave`** `which-octave` plays middle C (C4) as a reference first.
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
* **`chords` block**: a bar may hold several chords separated by spaces (`"C G"`), `%` repeats the previous
  bar, `N.C.` = no chord. Optional `mode`, `timeSig`, `instrument`, `title`.
* **Glossary**: `content/glossary.md` plus any `content/glossary/*.md` fragments are merged. Each term is a
  `## Term` (or `###`) heading followed by its definition; aliases via `## Term (alias, alias)` or an
  `Aliases: a, b` line. One-line entries `- **Term**: definition` also work. `[[term]]` matching is
  case-insensitive and tolerant of plurals; unknown terms are warnings. Duplicate terms across fragments
  are warnings (first definition wins).
