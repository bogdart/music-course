---
id: w01-l9-dev-demo
title: Dev Demo — every block type
week: 1
order: 9
phase: p1
duration_min: 30
goals:
  - Exercise every fenced block type the lesson runner supports
  - Try all implemented exercise types
tags: [dev, demo]
key: C
---

# Dev demo lesson

This fixture is **not course content**. It exercises every block type for the renderer
and tests. Inline helpers: an [[octave]], a playable note {{note:C#4}} and a chord {{chord:Cmaj7}}.
A lesson link: [next lesson](../w01-l2-pitch-and-octaves/).

| Block | Purpose |
|-------|---------|
| example | playable snippet |
| keyboard | static diagram |

## Example

```example
{
  "title": "C major scale with a drum groove",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "C4:q D4:q E4:q F4:q | G4:q A4:q B4:q C5:q | [C4 E4 G4]:h C4:8t D4:8t E4:8t r:q | E4:q.~ E4:8 D4:h" },
    { "instrument": "drums", "seq": "kick:q hh:q snare:q hh:q | kick:q hh:q snare:q hh:q | kick:8 kick:8 snare:q kick:q snare:q | crash:w" }
  ],
  "show": ["staff", "keyboard", "pianoroll"],
  "loop": false
}
```

## Keyboard

```keyboard
{ "range": ["C3", "C5"], "highlight": ["C4", "E4", "G4"], "labels": "names", "colors": { "C4": "root", "E4": "third", "G4": "fifth" } }
```

## Staff

```staff
{ "clef": "treble", "key": "G", "timeSig": "3/4", "seq": "G4:q A4:q B4:q | D5:h. |" }
```

## Chords

```chords
{ "key": "C", "bars": ["C", "Am", "F G7", "C"], "roman": true, "play": true, "bpm": 80 }
```

## Exercises

```exercise
{ "id": "ear-note-1", "type": "ear-note", "title": "Degrees 1–3", "count": 3, "seed": 1,
  "hints": ["Sing the tonic after the cadence.", "3 sounds bright, 2 sounds unfinished."],
  "spec": { "key": "C", "mode": "major", "degrees": [1, 2, 3], "reference": "cadence", "octaves": [4] } }
```

```exercise
{ "id": "ear-octave-1", "type": "ear-octave", "count": 3, "seed": 2,
  "spec": { "notes": ["C", "G"], "octaves": [3, 4, 5], "mode": "same-or-different" } }
```

```exercise
{ "id": "ear-interval-1", "type": "ear-interval", "count": 3, "seed": 3,
  "spec": { "intervals": ["M2", "M3", "P5"], "direction": "asc", "root": "random", "range": ["C3", "C5"] } }
```

```exercise
{ "id": "ear-chord-1", "type": "ear-chord", "count": 3, "seed": 4,
  "spec": { "qualities": ["maj", "min"], "inversions": [0], "voicing": "close", "range": ["C3", "C5"] } }
```

```exercise
{ "id": "play-notes-1", "type": "play-notes", "title": "Play a C major triad",
  "spec": { "prompt": "names", "notes": ["C4", "E4", "G4"], "ordered": true, "key": "C" } }
```

```exercise
{ "id": "quiz-1", "type": "quiz", "title": "Quick quiz",
  "spec": { "questions": [
    { "q": "How many half steps in a perfect fifth?", "choices": ["5", "6", "7", "8"], "answer": 2, "explain": "C to G is 7 half steps." },
    { "q": "Which are white keys?", "choices": ["C", "C#", "E", "Bb"], "answers": [0, 2] }
  ] } }
```

```exercise
{ "id": "quiz-input-1", "type": "quiz-input",
  "spec": { "questions": [
    { "q": "Name the 5th degree of D major", "answer": ["A"], "kind": "note" },
    { "q": "How many sharps in G major?", "answer": [1], "kind": "number" }
  ] } }
```

```exercise
{ "id": "read-note-1", "type": "read-note", "count": 3, "seed": 5,
  "spec": { "clef": "treble", "range": ["C4", "G5"], "accidentals": false, "answer": "name" } }
```

```exercise
{ "id": "ear-scale-1", "type": "ear-scale", "title": "Which scale?",
  "spec": { "scales": ["major", "natural-minor"], "play": "asc" } }
```
