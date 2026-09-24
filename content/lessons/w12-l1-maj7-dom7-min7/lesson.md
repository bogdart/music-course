---
id: w12-l1-maj7-dom7-min7
title: "Seventh Chords: maj7, 7 and m7"
week: 12
order: 1
phase: p2
duration_min: 45
goals:
  - Build maj7, dominant 7 and minor 7 chords on any root
  - Hear the difference between maj7, dom7 and min7
  - Name the seventh chords that live in C major
prerequisites: [w11-l3-hands-together-and-revoicing-daw]
tags: [chords, sevenths, ear, keyboard]
---

# Seventh Chords: maj7, 7 and m7

Triads are three notes stacked in thirds. Stack one more third on top and you get a [[seventh chord]] — four notes: root, 3rd, 5th and 7th. That extra note adds colour (jazz, soul, R&B, lush ballads) and, in one special case, a strong urge to move.

## Three flavours you'll hear everywhere

Build all three on C and compare. The only differences are the 3rd and the 7th.

| name | symbol | recipe | notes on C | sound |
|---|---|---|---|---|
| major seventh | Cmaj7 | major triad + M7 | C E G B | dreamy, soft, "evening" |
| dominant seventh | C7 | major triad + m7 | C E G Bb | bluesy, restless, wants to move |
| minor seventh | Cm7 | minor triad + m7 | C Eb G Bb | mellow, smooth, relaxed |

Tip for building: the 7th is easiest to find *down* from the octave. M7 = one half step below the root's octave; m7 = one whole step below.

```example
{
  "title": "Cmaj7, C7, Cm7 — block, then broken",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "epiano", "seq": "[C3 E3 G3 B3]:w | C3:q E3:q G3:q B3:q | [C3 E3 G3 Bb3]:w | C3:q E3:q G3:q Bb3:q | [C3 Eb3 G3 Bb3]:w | C3:q Eb3:q G3:q Bb3:q" } ],
  "show": ["keyboard", "staff"]
}
```

```exercise
{
  "id": "e1", "type": "build-chord", "title": "Build seventh chords",
  "instructions": "Root first, then the triad, then add the 7th down from the octave.",
  "count": 9, "passScore": 0.8,
  "spec": { "chords": ["Cmaj7", "C7", "Cm7", "Fmaj7", "G7", "Dm7", "Am7", "D7", "Gmaj7"], "root": "given", "prompt": "symbol", "key": "C" }
}
```

```exercise
{
  "id": "e2", "type": "ear-chord", "title": "maj7 or dom7?",
  "instructions": "Both have a major triad. The maj7's top note rubs gently against the root (a half step below it); the dom7 sounds like it's asking a question.",
  "count": 10, "passScore": 0.75,
  "spec": { "qualities": ["maj7", "dom7"], "inversions": [0], "voicing": "close", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e3", "type": "ear-chord", "title": "All three",
  "instructions": "First decide: major or minor underneath? Minor → m7. Major → then decide dreamy (maj7) or restless (7).",
  "count": 12, "passScore": 0.7,
  "spec": { "qualities": ["maj7", "dom7", "min7"], "inversions": [0], "voicing": "close", "range": ["C3", "C5"] }
}
```

## Seventh chords in C major

Stack four notes of the C major scale on each degree and you get the key's own sevenths: **Cmaj7 – Dm7 – Em7 – Fmaj7 – G7 – Am7 – Bm7b5**. Only one chord is a dominant 7: the one on degree 5, **G7**. That's why we call the chord type "dominant" — it belongs to the V chord. (Bm7b5 is a rarer colour we'll meet later.)

```example
{
  "title": "Diatonic sevenths in C, degrees 1 to 6",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "epiano", "seq": "[C3 E3 G3 B3]:h [D3 F3 A3 C4]:h | [E3 G3 B3 D4]:h [F3 A3 C4 E4]:h | [G3 B3 D4 F4]:h [A3 C4 E4 G4]:h | [C4 E4 G4 B4]:w" } ],
  "show": ["keyboard"]
}
```

```exercise
{
  "id": "e4", "type": "play-chord", "title": "Play the diatonic sevenths",
  "count": 6, "passScore": 0.8,
  "spec": { "chords": ["Cmaj7", "Dm7", "Em7", "Fmaj7", "G7", "Am7"], "inversion": "root", "sequence": true, "bpm": 60 }
}
```

```exercise
{
  "id": "e5", "type": "ear-chord-root", "title": "Root of a seventh chord",
  "instructions": "The 7th adds a high note that can distract you. Hum low, find the floor, play it.",
  "count": 8, "passScore": 0.7,
  "spec": { "qualities": ["maj7", "min7", "dom7"], "answer": "play", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e6", "type": "quiz", "title": "Seventh-chord check",
  "spec": { "questions": [
    { "q": "Which notes make G7?", "choices": ["G B D F#", "G B D F", "G Bb D F", "G B D E"], "answer": 1, "explain": "Major triad G B D + minor 7th F." },
    { "q": "Which degree of a major key carries the dominant 7 chord?", "choices": ["I", "ii", "IV", "V"], "answer": 3 },
    { "q": "Am7 is…", "choices": ["A C E G", "A C# E G", "A C E G#", "A C# E G#"], "answer": 0 },
    { "q": "Fmaj7 in C major contains which 7th?", "choices": ["Eb", "E", "F#", "D"], "answer": 1, "explain": "E is a half step below F: a major 7th." }
  ] }
}
```
