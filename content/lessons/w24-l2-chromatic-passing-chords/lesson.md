---
id: w24-l2-chromatic-passing-chords
title: Chromatic Passing Chords
week: 24
order: 2
phase: p3
duration_min: 45
goals:
  - Connect diatonic chords with passing diminished 7th chords (C - C#dim7 - Dm)
  - Write a line cliche - one chord with a chromatic line moving inside it
  - Keep hearing bass roots and chord qualities, now including diminished sounds
prerequisites: [w24-l1-secondary-dominants]
tags: [harmony, chromaticism, diminished, voice-leading, ear]
songs:
  - { title: "Something", composer: "George Harrison (The Beatles)", public_domain: false }
  - { title: "Stairway to Heaven", composer: "Jimmy Page, Robert Plant (Led Zeppelin)", public_domain: false }
---

# Chromatic Passing Chords

Secondary dominants add notes from outside the key to point at a chord. Today's tools add chromatic notes to **connect** chords smoothly — the harmonic version of a passing note.

## 1. Passing diminished chords

When two chords have roots a whole step apart (C → Dm, Dm → Em, F → G), you can slide the bass up by half step through a **diminished 7th chord** built on the note in between: C – **C#dim7** – Dm. This is a [[chromatic passing chord]].

Why it works: C#dim7 (C# E G Bb) is almost A7 without its root — it behaves like V/ii, so it pulls into Dm. The bass climbs chromatically C → C# → D, which the ear loves.

Common spots in C major:

- I – **#i°7** – ii (C – C#dim7 – Dm)
- ii – **#ii°7** – iii (Dm – D#dim7 – Em)
- IV – **#iv°7** – I/5 (F – F#dim7 – C/G)

```example
{
  "title": "C - C#dim7 - Dm7 - D#dim7 - Em7 - A7 - Dm7 - G7",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "epiano", "seq": "[C3 E3 G3 C4]:h [C#3 E3 G3 Bb3]:h | [D3 F3 A3 C4]:h [D#3 F#3 A3 C4]:h | [E3 G3 B3 D4]:h [C#3 E3 G3 A3]:h | [D3 F3 A3 C4]:h [D3 F3 G3 B3]:h" },
    { "instrument": "bass", "seq": "C2:h C#2:h | D2:h D#2:h | E2:h A1:h | D2:h G1:h" },
    { "instrument": "lead", "seq": "E4:h G4:h | F4:h F#4:h | G4:h E4:h | F4:h D4:h" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

Watch the bass: C C# D D# E — a chromatic staircase. The top voice climbs too: F → F# → G.

## 2. The line cliche

Sometimes the chord stays the same and **one voice moves chromatically inside it**. This is called a line cliche. The classic: over A minor, a line falls A → G# → G → F#, giving Am, Am(maj7), Am7, Am6. It creates motion and drama without changing the harmony.

```example
{
  "title": "Line cliche in A minor: bass falls A - G# - G - F#",
  "bpm": 72, "timeSig": "4/4", "key": "Am",
  "tracks": [
    { "instrument": "pad", "seq": "[A3 C4 E4]:w | [A3 C4 E4]:w | [A3 C4 E4]:w | [A3 C4 E4]:w" },
    { "instrument": "bass", "seq": "A1:w | G#1:w | G1:w | F#1:w" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

**By reference:** "Something" (George Harrison) opens C → Cmaj7 → C7: an inner voice falls C → B → Bb, then lands on F. "Stairway to Heaven" (Led Zeppelin) begins with a descending chromatic line under A minor.

```exercise
{
  "id": "passing-quiz",
  "type": "quiz",
  "passScore": 0.8,
  "spec": { "questions": [
    { "q": "Which passing chord connects Dm to Em in C major?", "choices": ["D#dim7", "Ebmaj7", "E7", "Dm7"], "answer": 0 },
    { "q": "A passing diminished chord's bass usually moves by...", "choices": ["Perfect fifth", "Half step", "Octave", "Tritone leap"], "answer": 1 },
    { "q": "C#dim7 behaves most like which chord?", "choices": ["A7 without its root (V/ii)", "C major", "G7", "F major"], "answer": 0 },
    { "q": "In a line cliche, what stays the same?", "choices": ["The moving voice", "The basic chord", "The key signature changes every bar", "Nothing"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "build-dim7",
  "type": "build-chord",
  "title": "Build diminished 7th chords",
  "count": 6,
  "passScore": 0.8,
  "spec": { "chords": ["C#dim7", "D#dim7", "F#dim7", "G#dim7", "Bdim7", "Ebdim7"], "root": "given", "prompt": "symbol", "key": "C" }
}
```

```exercise
{
  "id": "play-chromatic-staircase",
  "type": "play-chord",
  "title": "Play the staircase",
  "count": 8,
  "passScore": 0.8,
  "spec": { "chords": ["C", "C#dim7", "Dm7", "D#dim7", "Em7", "A7", "Dm7", "G7"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

```exercise
{
  "id": "ear-dim-sounds",
  "type": "ear-chord",
  "title": "Diminished or not?",
  "count": 10,
  "passScore": 0.75,
  "spec": { "qualities": ["maj", "min", "dim", "dom7", "m7b5"], "inversions": [0], "voicing": "close", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "ear-bass-c-all",
  "type": "ear-bass",
  "title": "Bass roots, all diatonic chords",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "random", "chords": ["I", "ii", "iii", "IV", "V", "vi"], "answer": "play" }
}
```

```exercise
{
  "id": "daw-passing-dims",
  "type": "daw-task",
  "title": "Insert passing chords in F",
  "spec": {
    "template": { "bpm": 80, "key": "F", "tracks": [
      { "instrument": "epiano", "seq": "[F3 A3 C4]:w | [D3 F3 G3 Bb3]:w | [E3 G3 A3 C4]:w | [F3 A3 Bb3 D4]:w" },
      { "instrument": "bass", "seq": "F2:w | G2:w | A2:w | Bb2:w" }
    ] },
    "task": "F - Gm7 - Am7 - Bbmaj7: every root is a step from the next. Split bars 1 and 2 into two half notes and add F#dim7 before Gm7 and G#dim7 before Am7. Make the bass climb chromatically F F# G G# A.",
    "checks": [
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "has-tracks", "instruments": ["epiano", "bass"] },
      { "kind": "note-count", "min": 6, "max": 8, "track": 1 },
      { "kind": "contour", "shape": "ascending", "track": 1 },
      { "kind": "in-key", "key": "F", "scale": "major", "allowPassing": true, "track": 1 },
      { "kind": "custom", "id": "dim7-inserted", "note": "Self-check: F#dim7 (F# A C Eb) and G#dim7 (G# B D F) appear on beats 3-4 of bars 1 and 2." }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

```exercise
{
  "id": "daw-line-cliche",
  "type": "daw-task",
  "title": "Write a line cliche in D minor",
  "spec": {
    "template": { "bpm": 72, "key": "Dm", "tracks": [
      { "instrument": "pad", "seq": "" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "lead", "seq": "" }
    ] },
    "task": "Hold a D minor chord (D F A) on the pad for 4 bars. In the bass, fall one half step per bar: D C# C B. Then write a slow melody on top using D minor notes (you may use B natural in bar 4).",
    "checks": [
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "note-count", "min": 4, "max": 8, "track": 1 },
      { "kind": "contour", "shape": "descending", "track": 1 },
      { "kind": "range", "low": "E1", "high": "E3", "track": 1 },
      { "kind": "in-key", "key": "D", "scale": "natural-minor", "allowPassing": true, "track": 2 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```
