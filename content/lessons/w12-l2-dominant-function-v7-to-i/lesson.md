---
id: w12-l2-dominant-function-v7-to-i
title: V7 to I — Tension and Resolution
week: 12
order: 2
phase: p2
duration_min: 45
goals:
  - Explain why V7 pulls to I (the tritone between its 3rd and 7th)
  - Resolve V7 → I smoothly in C, G and F major and in A minor
  - Hear the difference between V → I and V7 → I, and between V7 and other chords
prerequisites: [w12-l1-maj7-dom7-min7]
tags: [harmony, dominant, sevenths, ear]
---

# V7 to I — Tension and Resolution

Music breathes in and out: tension, then release. The strongest single "breath in" in Western music is the V7 chord. Its job — its [[dominant function]] — is to make you *need* the tonic.

## Why G7 wants C

G7 is G B D F. Look at two notes inside it:

- **B** is degree 7 of C major: the leading tone, a half step below C.
- **F** is degree 4: a half step above E.

B and F are a tritone apart — the restless interval from week 10. When G7 moves to C, the tritone collapses: **B goes up to C, F goes down to E**. Both notes move by a half step to the nearest note of the C chord. That little squeeze is the "click" you hear when music comes home. Plain G (no F) only has the B; G7 has both pulls, so it's stronger.

```example
{
  "title": "G → C, then G7 → C. Watch B→C and F→E.",
  "bpm": 66, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[G3 B3 D4]:h [G3 C4 E4]:h | r:w | [G3 B3 F4]:h [G3 C4 E4]:h | r:w" },
    { "instrument": "bass", "seq": "G2:h C2:h | r:w | G2:h C2:h | r:w" }
  ],
  "show": ["keyboard", "staff"]
}
```

```exercise
{
  "id": "e1", "type": "play-melody", "title": "Resolve the tritone",
  "instructions": "Right hand, three notes: G3–B3–F4 → G3–C4–E4. Feel the B and F squeeze inward to C and E.",
  "count": 6, "passScore": 0.8,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "[G3 B3 F4]:h [G3 C4 E4]:h | [G3 B3 F4]:h [G3 C4 E4]:h | [D4 G4 B4]:h [E4 G4 C5]:h | [F4 G4 B4]:h [E4 G4 C5]:h", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e2", "type": "ear-note", "title": "The tendency tones",
  "instructions": "Degree 7 leans up to 1; degree 4 leans down to 3. After naming, sing where each note wants to go.",
  "count": 10, "passScore": 0.7,
  "spec": { "key": "C", "mode": "major", "degrees": [1, 3, 4, 7], "reference": "cadence", "octaves": [3, 4], "instrument": "piano" }
}
```

## V7 → I in other keys — and in minor

The same shape works in every key: find the V (a fifth above the tonic), add its m7, resolve. In G major that's **D7 → G**; in F major, **C7 → F**. In A minor, use the major V from harmonic minor: **E7 → Am** (G# up to A, D down to C).

```example
{
  "title": "D7 → G, C7 → F, E7 → Am",
  "bpm": 66, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[D3 F#3 A3 C4]:h [D3 G3 B3]:h | [C3 E3 G3 Bb3]:h [C3 F3 A3]:h | [E3 G#3 B3 D4]:h [E3 A3 C4]:h" } ],
  "show": ["keyboard"]
}
```

```exercise
{
  "id": "e3", "type": "play-chord", "title": "V7 → I pairs",
  "instructions": "Play each pair. Move to the nearest notes of the resolution chord; any inversion is fine.",
  "count": 8, "passScore": 0.8,
  "spec": { "chords": ["G7", "C", "D7", "G", "C7", "F", "E7", "Am"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

## Hearing dominant chords

Tension has a sound. Listen for the chord that makes you lean forward. In the next drills, the dom7 is the chord that sounds like a question, and V7 is the chord just before "home".

```exercise
{
  "id": "e4", "type": "ear-chord", "title": "Tense or at rest?",
  "count": 10, "passScore": 0.75,
  "spec": { "qualities": ["maj", "dom7", "min"], "inversions": [0], "voicing": "close", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e5", "type": "ear-progression", "title": "Where's the V7?",
  "instructions": "Three chords starting on I. Is the middle chord IV (gentle lift), V (lean) or V7 (strong lean)?",
  "count": 9, "passScore": 0.7,
  "spec": { "key": "C", "mode": "major", "length": 3, "chords": ["I", "IV", "V", "V7"], "style": "block" }
}
```

```exercise
{
  "id": "e6", "type": "ear-progression", "title": "V7 in minor",
  "count": 8, "passScore": 0.7,
  "spec": { "key": "A", "mode": "minor", "length": 3, "chords": ["i", "iv", "V7"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "e7", "type": "quiz-input", "title": "Find the V7",
  "spec": { "questions": [
    { "q": "V7 in C major (chord symbol)?", "answer": ["G7"], "kind": "text" },
    { "q": "V7 in G major?", "answer": ["D7"], "kind": "text" },
    { "q": "V7 in F major?", "answer": ["C7"], "kind": "text" },
    { "q": "V7 in A minor?", "answer": ["E7"], "kind": "text" },
    { "q": "In D7 → G, which note of D7 rises by a half step to G?", "answer": ["F#"], "kind": "note" },
    { "q": "In D7 → G, which note of D7 falls by a half step to B?", "answer": ["C"], "kind": "note" }
  ] }
}
```
