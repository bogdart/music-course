---
id: w03-l2-scale-degrees-and-solfege
title: Scale Degrees and Solfège
week: 3
order: 2
phase: p1
duration_min: 45
goals:
  - Name the notes of a key by number (1–7) and by solfège (do re mi fa sol la ti)
  - Use a cadence to set "home" before identifying a note
  - Hear degrees 1, 2 and 3 in C major
prerequisites: [w03-l1-major-scale-pattern]
tags: [scale-degrees, solfege, ear, cadence]
songs:
  - { title: "Frère Jacques", composer: "Traditional", public_domain: true }
---

# Scale degrees and solfège

Letter names tell you *which key* to press. But your ear doesn't hear letters. It hears **roles**: "this note is home", "this note wants to go home", "this note is bright and settled". Those roles are the same in every major key, which is why we name notes by position in the scale — their [[scale degree]].

| Degree | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|
| Solfège | do | re | mi | fa | sol | la | ti |
| In C major | C | D | E | F | G | A | B |

[[Solfège]] syllables are just singable names for the numbers. Use whichever sticks; the app answers in numbers.

Degree 1 is the [[tonic]] — home. In C major, C is 1. In G major, G is 1. Same role, different key.

## Setting "home": the cadence

A single note on its own has no role — it's just a pitch. To hear it *as a degree*, your ear needs to know where home is. So before each question the app plays a short chord sequence called a [[cadence]]: it wanders away from home and comes back, which plants the tonic in your ear.

```example
{
  "title": "Cadence in C major (I–IV–V–I)",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:h [C4 F4 A4]:h | [B3 D4 G4]:h [C4 E4 G4]:h" } ]
}
```

After it ends, hum the note you think is home. It should be C.

## The characters of 1, 2 and 3

Listen to each degree right after the cadence, and notice how it *feels*:

- **1 (do)** — finished, stable, resting. Nothing needs to happen.
- **2 (re)** — unfinished, restless. It wants to step down to 1.
- **3 (mi)** — bright and fairly stable, but not quite "the end".

```example
{
  "title": "Cadence, then 1… 2… 3…",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:h [C4 F4 A4]:h | [B3 D4 G4]:h [C4 E4 G4]:h | r:w | C4:w | r:w | D4:w | r:w | E4:w" } ],
  "show": ["keyboard"]
}
```

**The trick that works:** when you hear a note, sing it, then sing *down the scale* to home — "mi re do". Count how many steps you took. If you don't need to move, it's 1. One step down: 2. Two steps down: 3.

Now you can re-read old tunes: "Hot Cross Buns" is **3 2 1**. "Frère Jacques" starts **1 2 3 1**:

```example
{
  "title": "Frère Jacques, first line (degrees 1 2 3 1)",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q C4:q | C4:q D4:q E4:q C4:q | E4:q F4:q G4:h | E4:q F4:q G4:h" } ],
  "show": ["staff"]
}
```

## Drills

```exercise
{
  "id": "e1",
  "type": "quiz-input",
  "title": "Degrees in C",
  "spec": { "questions": [
    { "q": "Degree 3 of C major is…", "answer": ["E"], "kind": "note" },
    { "q": "Degree 5 (sol) of C major is…", "answer": ["G"], "kind": "note" },
    { "q": "Which degree is 'fa'?", "answer": ["4"], "kind": "number" },
    { "q": "Degree 1 of G major is…", "answer": ["G"], "kind": "note" },
    { "q": "In C major, B is degree…", "answer": ["7"], "kind": "number" },
    { "q": "Solfège for degree 2?", "answer": ["re"], "kind": "text" }
  ] },
  "passScore": 0.8
}
```

```exercise
{
  "id": "e2",
  "type": "play-notes",
  "title": "Play by degree",
  "instructions": "Degrees in C major. Play the matching note around middle C.",
  "count": 10,
  "passScore": 0.8,
  "spec": { "prompt": "degrees", "notes": ["C4", "E4", "D4", "G4", "F4", "A4", "B4", "C5"], "ordered": true, "key": "C" }
}
```

```exercise
{
  "id": "e3",
  "type": "ear-note",
  "title": "1 or 3?",
  "instructions": "After the cadence, one note. Home (1) or bright-but-not-home (3)? From now on the key changes every time — the cadence tells you where home is, and 1 still sounds like 1.",
  "count": 10,
  "passScore": 0.75,
  "spec": { "key": "random", "mode": "major", "degrees": [1, 3], "reference": "cadence", "octaves": [4], "instrument": "piano" },
  "hints": ["Sing down to home: did you need two steps?"]
}
```

```exercise
{
  "id": "e4",
  "type": "ear-note",
  "title": "1, 2 or 3?",
  "instructions": "Now 2 (restless, wants to fall) joins in.",
  "count": 12,
  "passScore": 0.7,
  "spec": { "key": "random", "mode": "major", "degrees": [1, 2, 3], "reference": "cadence", "octaves": [4], "instrument": "piano" }
}
```

```exercise
{
  "id": "e5",
  "type": "ear-melody",
  "title": "Name the tune in degrees",
  "instructions": "Three notes using 1, 2 and 3. Enter the degrees you hear.",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "random", "degrees": [1, 2, 3], "length": 3, "rhythm": "quarters", "answer": "degrees" }
}
```

```exercise
{
  "id": "e6",
  "type": "play-melody",
  "title": "Frère Jacques, first line",
  "instructions": "Say the degrees as you play: 1 2 3 1, 1 2 3 1, 3 4 5, 3 4 5.",
  "passScore": 0.75,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "C4:q D4:q E4:q C4:q | C4:q D4:q E4:q C4:q | E4:q F4:q G4:h | E4:q F4:q G4:h", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```
