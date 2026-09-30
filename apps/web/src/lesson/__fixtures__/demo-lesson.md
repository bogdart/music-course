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
{ "id": "ear-octave-together", "type": "ear-octave", "count": 3, "seed": 2,
  "spec": { "notes": ["C", "E"], "octaves": [3, 4], "mode": "together", "gap": [1], "foils": [1, 6, 11] } }
```

```exercise
{ "id": "ear-octave-match", "type": "ear-octave", "count": 3, "seed": 2,
  "spec": { "notes": ["C", "E"], "octaves": [3, 4], "mode": "match", "gap": [1], "foils": [6] } }
```

```exercise
{ "id": "ear-octave-find", "type": "ear-octave", "count": 3, "seed": 2,
  "spec": { "notes": ["C", "E", "A"], "octaves": [2, 5], "mode": "find" } }
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

## Every M2 exercise type

```example
{ "title": "Hidden dictation with lyrics", "bpm": 90, "key": "C", "hidden": true, "lyrics": "Twin- kle twin- kle lit- tle star",
  "tracks": [ { "instrument": "piano", "seq": "C4:q C4:q G4:q G4:q | A4:q A4:q G4:h" }, { "instrument": "guitar", "seq": "[C3 G3]:w | [F3 C4]:h [C3 G3]:h", "pan": -0.4 } ] }
```

```exercise
{ "id": "ear-chord-root-1", "type": "ear-chord-root", "count": 3, "spec": { "qualities": ["maj", "min"], "answer": "play", "inversions": [0, 1] } }
```

```exercise
{ "id": "ear-progression-1", "type": "ear-progression", "count": 3, "spec": { "key": "C", "chords": ["I", "IV", "V", "vi"], "length": 4, "style": "pad-bass" } }
```

```exercise
{ "id": "ear-melody-1", "type": "ear-melody", "count": 3, "spec": { "key": "G", "degrees": [1, 2, 3, 5], "length": 4, "answer": "degrees", "backing": ["I", "V"] } }
```

```exercise
{ "id": "ear-rhythm-1", "type": "ear-rhythm", "count": 3, "spec": { "subdivision": "8", "answer": "choose", "choices": 3 } }
```

```exercise
{ "id": "ear-rhythm-2", "type": "ear-rhythm", "count": 2, "spec": { "voices": ["kick", "snare", "hihat"], "subdivision": "8" } }
```

```exercise
{ "id": "ear-rhythm-3", "type": "ear-rhythm", "count": 2, "spec": { "subdivision": "8", "answer": "tap" } }
```

```exercise
{ "id": "ear-bass-1", "type": "ear-bass", "count": 3, "spec": { "key": "C", "chords": ["I", "IV", "V", "vi"], "answer": "play" } }
```

```exercise
{ "id": "ear-tempo-1", "type": "ear-tempo", "count": 3, "spec": { "range": [70, 140] } }
```

```exercise
{ "id": "ear-meter-1", "type": "ear-meter", "count": 3, "spec": { "meters": ["3/4", "4/4", "6/8"] } }
```

```exercise
{ "id": "play-scale-1", "type": "play-scale", "spec": { "root": "G", "scale": "major", "direction": "asc", "tempo": 72 } }
```

```exercise
{ "id": "play-chord-1", "type": "play-chord", "spec": { "chords": ["C", "Am", "F", "G7"], "sequence": true, "inversion": "any" } }
```

```exercise
{ "id": "play-melody-1", "type": "play-melody", "spec": { "bpm": 80, "key": "C", "seq": "E4:q D4:q C4:q D4:q | E4:q E4:q E4:h", "tracks": [{ "instrument": "piano", "seq": "C3:w | C3:w" }], "backing": { "instrument": "pad", "seq": "[E3 G3]:w | [E3 G3]:w" } } }
```

```exercise
{ "id": "rhythm-tap-1", "type": "rhythm-tap", "spec": { "bpm": 90, "seq": "x:q x:8 x:8 r:q x:q", "loops": 2 } }
```

```exercise
{ "id": "build-chord-1", "type": "build-chord", "count": 3, "spec": { "chords": ["Cmaj7", "Dm7", "G7"], "root": "given" } }
```

```exercise
{ "id": "build-scale-1", "type": "build-scale", "count": 2, "spec": { "roots": ["D", "Bb"], "scale": "major" } }
```

```exercise
{ "id": "build-interval-1", "type": "build-interval", "count": 3, "spec": { "intervals": ["M3", "P5"], "direction": "asc" } }
```

```exercise
{ "id": "read-rhythm-1", "type": "read-rhythm", "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "8" } }
```

```exercise
{ "id": "key-signature-1", "type": "key-signature", "count": 3, "spec": { "keys": ["G", "D", "F", "Bb"], "prompt": "staff", "answer": "name" } }
```

```exercise
{ "id": "roman-analysis-1", "type": "roman-analysis", "spec": { "key": "C", "chords": ["C", "Am", "D7", "G7"] } }
```

```exercise
{ "id": "listen-1", "type": "listen", "spec": { "examples": [ { "title": "Major", "tracks": [{ "instrument": "piano", "seq": "[C4 E4 G4]:w" }] }, { "title": "Minor", "tracks": [{ "instrument": "piano", "seq": "[C4 Eb4 G4]:w" }] } ],
  "questions": [{ "q": "Which sounds darker?", "choices": ["Major", "Minor"], "answer": 1 }] } }
```

```exercise
{ "id": "reflect-1", "type": "reflect", "spec": { "prompt": "How do major and minor feel different to you?", "minWords": 5 } }
```

```exercise
{ "id": "read-note-2", "type": "read-note", "count": 3, "spec": { "clef": "treble", "mode": "interval", "intervals": ["M2", "M3", "P4", "P5"] } }
```
