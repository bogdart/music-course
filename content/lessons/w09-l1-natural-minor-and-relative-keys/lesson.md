---
id: w09-l1-natural-minor-and-relative-keys
title: Natural Minor and Relative Keys
week: 9
order: 1
phase: p2
duration_min: 40
goals:
  - Build the natural minor scale with the pattern W-H-W-W-H-W-W
  - Find the relative minor of C, G and F major (A, E and D minor)
  - Hear the difference between a major and a natural minor scale
prerequisites: [w08-l3-first-eight-bar-song-daw]
tags: [minor, scales, keys, ear]
---

# Natural Minor and Relative Keys

Welcome to Phase 2. You can now play and hear the major scale, name triads and write an 8-bar song. That whole world was built on one scale. Today we meet its darker twin.

## Same notes, different home

Play the white keys from C to C: that's C major. Now play the *same* white keys from A to A. Nothing changed except where you started, yet the mood flips — it sounds sadder, more serious. That is the [[natural minor]] scale.

Why does it feel different? Because the "home" note changed, so every step relative to home changed. In minor the third above the tonic is only 3 half steps (a minor third) instead of 4. You already know that minor third from the minor triad — the minor scale is simply the scale that grows around a minor chord.

The step pattern is **W-H-W-W-H-W-W**. Compared with major, degrees 3, 6 and 7 are a half step lower, written **1 2 b3 4 5 b6 b7**.

```example
{
  "title": "C major, then A natural minor — same white keys, different home",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q F4:q | G4:q A4:q B4:q C5:q | r:w | A3:q B3:q C4:q D4:q | E4:q F4:q G4:q A4:q" } ],
  "show": ["staff", "keyboard"]
}
```

```exercise
{
  "id": "e1", "type": "ear-scale", "title": "Major or minor?",
  "instructions": "Listen to the whole scale. Does the third note feel bright (major) or shaded (minor)?",
  "count": 8, "passScore": 0.75,
  "spec": { "scales": ["major", "natural-minor"], "play": "asc" }
}
```

## Relative keys

A major key and the minor key that shares its notes (and key signature) are [[relative keys]]. The [[relative minor]] always starts on degree 6 of the major scale — or, counting down, 3 half steps below the major tonic.

- C major → **A minor** (no sharps or flats)
- G major → **E minor** (one sharp, F#)
- F major → **D minor** (one flat, Bb)

```keyboard
{ "range": ["C3", "C5"], "highlight": ["A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4"], "labels": "names", "colors": { "A3": "root", "A4": "root" } }
```

```exercise
{
  "id": "e2", "type": "play-scale", "title": "A natural minor, right hand",
  "count": 6, "passScore": 0.8,
  "spec": { "root": "A", "scale": "natural-minor", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 60, "metronome": true }
}
```

```exercise
{
  "id": "e3", "type": "build-scale", "title": "Build the relative minors",
  "instructions": "Select the seven notes. Tip: they are the same notes as the relative major.",
  "count": 6, "passScore": 0.8,
  "spec": { "roots": ["A", "E", "D"], "scale": "natural-minor", "prompt": "name" }
}
```

```exercise
{
  "id": "e4", "type": "quiz-input", "title": "Find the relative",
  "spec": { "questions": [
    { "q": "Relative minor of C major?", "answer": ["A"], "kind": "note" },
    { "q": "Relative minor of G major?", "answer": ["E"], "kind": "note" },
    { "q": "Relative minor of F major?", "answer": ["D"], "kind": "note" },
    { "q": "Relative major of E minor?", "answer": ["G"], "kind": "note" },
    { "q": "Which degree of the major scale is the tonic of its relative minor?", "answer": ["6"], "kind": "number" },
    { "q": "How many half steps below a major tonic is its relative minor tonic?", "answer": ["3"], "kind": "number" }
  ] }
}
```

## Hearing degrees in minor

Your degree ears work in minor too — we just count from the minor tonic. After the cadence, the tonic A should feel like home and C (b3) like the "sad" colour note.

```example
{
  "title": "Minor cadence: i – iv – V – i in A minor",
  "bpm": 72, "timeSig": "4/4", "key": "Am",
  "tracks": [ { "instrument": "piano", "seq": "[A3 C4 E4]:h [A3 D4 F4]:h | [G#3 B3 E4]:h [A3 C4 E4]:h" } ],
  "show": ["keyboard"]
}
```

```exercise
{
  "id": "e5", "type": "ear-note", "title": "Degrees 1, 3 and 5 in A minor",
  "instructions": "After the cadence, name the degree. Sing it back quietly, then check on the keyboard.",
  "count": 10, "passScore": 0.7,
  "spec": { "key": "A", "mode": "minor", "degrees": [1, 3, 5], "reference": "cadence", "octaves": [4], "instrument": "piano" }
}
```

```exercise
{
  "id": "e6", "type": "ear-chord", "title": "Warm-up refresher: major or minor triad",
  "count": 8, "passScore": 0.8,
  "spec": { "qualities": ["maj", "min"], "inversions": [0], "voicing": "close", "range": ["C3", "C5"] }
}
```

Next lesson: why minor-key music so often borrows one "wrong" note — the raised seventh.
