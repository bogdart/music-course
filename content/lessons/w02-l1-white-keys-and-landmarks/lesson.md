---
id: w02-l1-white-keys-and-landmarks
title: White Keys and Landmarks
week: 2
order: 1
phase: p1
duration_min: 40
goals:
  - Name every white key using the musical alphabet A–G
  - Find any white key fast from two landmarks, C and F
  - Recognise the same note name across octaves with more notes in play
prerequisites: [w01-l3-first-melody-by-ear]
tags: [note-names, keyboard, octave, ear]
---

# White keys and landmarks

Music uses only **seven letters**: A B C D E F G. After G, the alphabet starts again at A — one [[octave]] higher. That's the naming system you already heard last week: same letter, same "colour", different height.

On a keyboard we usually start counting from C, because the most common scale (next week!) starts there:

```keyboard
{ "range": ["C3", "C5"], "highlight": [], "labels": "names" }
```

## Two landmarks: C and F

Don't memorise fifteen keys. Memorise two, and count from them:

- **C** — just left of the group of **two** black keys.
- **F** — just left of the group of **three** black keys.

Everything else is a neighbour: D and E follow C; G, A and B follow F. B is just before the next C. With two landmarks, no key is more than two steps away from one you know.

```keyboard
{ "range": ["C3", "C5"], "highlight": ["C3", "F3", "C4", "F4", "C5"], "labels": "names", "colors": { "C3": "root", "C4": "root", "C5": "root", "F3": "other", "F4": "other" } }
```

Octave numbers change at **C**: the B just below C4 is B3, and the D just above it is D4. That's why C4 is the "home" reference.

Listen to all seven white keys climbing from C4 to C5. The last note has the same name as the first — you've gone round the alphabet once:

```example
{
  "title": "C4 to C5 on the white keys",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q F4:q | G4:q A4:q B4:q C5:q" } ],
  "show": ["keyboard"]
}
```

## Octaves, round two

Last week the "different" note was usually far from the first one in colour (like C and F♯). Today it can be the **key right next to the octave** — C4 then B4, or C4 then D5. These are the hardest "different" notes, because they're almost exactly as high as the real octave. Height can't help you; only the colour can.

Two things still help:

- **Together first.** If you're unsure, press *Both together* after answering: an octave melts, a near-miss rubs and wobbles.
- **Close-but-different vs far-but-same.** Two notes close in height (C4 and D4) are **different**; two notes further apart (C3 and C4) can be the **same name**. Distance is not the clue.

```example
{
  "title": "Close but different (C4, D4), far but same (C3, C4), octave vs near-miss (C4 → C5, C4 → B4)",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h D4:h | [C4 D4]:w | C3:h C4:h | [C3 C4]:w | C4:h C5:h | C4:h B4:h | [C4 C5]:w | [C4 B4]:w" } ],
  "show": ["keyboard"]
}
```

## Drills

```exercise
{
  "id": "e1",
  "type": "play-notes",
  "title": "Landmarks",
  "instructions": "Play every C and F you can find, lowest to highest.",
  "count": 6,
  "spec": { "prompt": "names", "notes": ["C3", "F3", "C4", "F4", "C5"], "ordered": true, "key": "C" }
}
```

```exercise
{
  "id": "e2",
  "type": "play-notes",
  "title": "Scattered white keys",
  "instructions": "Find each named key. Use C or F as your starting point and count.",
  "count": 10,
  "passScore": 0.8,
  "spec": { "prompt": "names", "notes": ["A3", "E4", "B3", "G4", "D4", "F3", "A4", "B4"], "ordered": true, "key": "C" },
  "hints": ["A: two keys right of F.", "B: the key just before C."]
}
```

```exercise
{
  "id": "e3",
  "type": "quiz-input",
  "title": "Alphabet neighbours",
  "spec": { "questions": [
    { "q": "Which white key comes right after E?", "answer": ["F"], "kind": "note" },
    { "q": "Which white key comes right after G?", "answer": ["A"], "kind": "note" },
    { "q": "Which white key comes just before C?", "answer": ["B"], "kind": "note" },
    { "q": "Which white key sits just left of the group of three black keys?", "answer": ["F"], "kind": "note" },
    { "q": "Two white keys above F is…", "answer": ["A"], "kind": "note" },
    { "q": "How many different letter names are there?", "answer": ["7"], "kind": "number" }
  ] },
  "passScore": 0.8
}
```

```exercise
{
  "id": "e4",
  "type": "ear-octave",
  "title": "Which octave? (C, E or G)",
  "instructions": "You'll hear one note. Which octave is it in: 3, 4 or 5?",
  "count": 9,
  "passScore": 0.7,
  "spec": { "notes": ["C", "E", "G"], "octaves": [3, 4, 5], "mode": "which-octave" }
}
```

```exercise
{
  "id": "e7",
  "type": "ear-octave",
  "title": "Octave or near-miss? (together)",
  "instructions": "Two notes at once: an octave, or a note right next to the octave?",
  "count": 10,
  "passScore": 0.75,
  "spec": { "notes": ["C", "D", "E", "F", "G", "A", "B"], "octaves": [3, 4], "mode": "together", "gap": [1], "foils": [1, 11] },
  "hints": ["Near-misses rub and wobble; the octave is smooth."]
}
```

```exercise
{
  "id": "e8",
  "type": "ear-octave",
  "title": "Octave or near-miss? (one after the other)",
  "instructions": "Same note an octave away, or the key right next to it? Ignore the height jump — it's the same size either way.",
  "count": 12,
  "passScore": 0.7,
  "spec": { "notes": ["C", "D", "E", "F", "G", "A", "B"], "octaves": [3, 4, 5], "mode": "same-or-different", "gap": [1], "foils": [1, 6, 11] },
  "hints": ["Does the second note feel like an echo of the first (same), or like it's pulling away (different)?"]
}
```

```exercise
{
  "id": "e6",
  "type": "ear-melody",
  "title": "Echo: C to G",
  "instructions": "Three-note tunes, now using C, D, E, F and G. Start on C with your thumb.",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "C", "degrees": [1, 2, 3, 4, 5], "length": 3, "rhythm": "quarters", "answer": "play", "reference": "tonic" }
}
```
