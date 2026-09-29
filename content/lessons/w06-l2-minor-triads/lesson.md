---
id: w06-l2-minor-triads
title: Minor Triads
week: 6
order: 2
phase: p1
duration_min: 45
goals:
  - Build a minor triad (m3 + M3) and turn any major triad into minor by lowering its 3rd
  - Play major/minor pairs with the right hand
  - Tell major and minor triads apart by ear
prerequisites: [w06-l1-major-triads]
tags: [chords, triads, minor, ear, keyboard]
songs:
  - { title: "Frère Jacques (and its minor-key version in Mahler's Symphony No. 1, 3rd movement)", composer: "Traditional / Gustav Mahler", public_domain: true }
---

# Minor triads

Swap the order of the two 3rds and you get the other great colour of music. A [[minor triad]] is:

- a **minor 3rd** (3 half steps) from root to 3rd, then
- a **major 3rd** (4 half steps) from 3rd to 5th,
- still a **perfect 5th** from root to 5th.

The quickest way to build one: take the major triad and **lower the 3rd by one half step**. C–E–G becomes C–**E♭**–G. Only one note moves, by the smallest possible distance — and the whole mood changes.

```keyboard
{ "range": ["C3", "C5"], "highlight": ["C4", "D#4", "G4"], "labels": "names", "colors": { "C4": "root", "D#4": "third", "G4": "fifth" } }
```

The chord symbol adds a small **m**: C minor = **Cm**, A minor = **Am**. In C major's white keys, three triads are naturally minor: **Dm** (D–F–A), **Em** (E–G–B) and **Am** (A–C–E).

## Hearing it

People often describe major as "happy/bright" and minor as "sad/dark". That's a useful starting point, not a law — plenty of dance hits are in minor. A more reliable cue: in minor, the middle note sounds like it's **sagging**, the chord feels heavier, more inward.

```example
{
  "title": "C major vs C minor, broken then together (twice)",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q E4:q G4:h | [C4 E4 G4]:w | C4:q Eb4:q G4:h | [C4 Eb4 G4]:w | [C4 E4 G4]:w | [C4 Eb4 G4]:w" } ],
  "show": ["keyboard"]
}
```

Now the same trick applied to a whole melody. Mahler used exactly this in his First Symphony (1888): "Frère Jacques" with its 3rd lowered becomes a slow, gloomy march.

```example
{
  "title": "Frère Jacques, major then minor",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q C4:q | C4:q D4:q E4:q C4:q | E4:q F4:q G4:h | r:w | C4:q D4:q Eb4:q C4:q | C4:q D4:q Eb4:q C4:q | Eb4:q F4:q G4:h" } ],
  "show": ["staff"]
}
```

**How to practise the ear drill:** after each chord, *sing the three notes upward*, root–3rd–5th. If the first step up feels wide and bright, it's major; if it feels narrow and dark, it's minor. Your voice measures the 3rd for you.

## Drills

```exercise
{
  "id": "e1",
  "type": "quiz",
  "title": "Major or minor on paper",
  "spec": { "questions": [
    { "q": "A minor triad is…", "choices": ["M3 then m3", "m3 then M3", "m3 then m3"], "answer": 1 },
    { "q": "To turn C major into C minor you change…", "choices": ["the root", "the 3rd", "the 5th"], "answer": 1 },
    { "q": "Notes of A minor?", "choices": ["A C E", "A C♯ E", "A B E"], "answer": 0 },
    { "q": "Which of these is minor using only white keys?", "choices": ["F", "G", "D"], "answer": 2, "explain": "D–F is a minor 3rd (3 half steps)." },
    { "q": "The symbol 'Em' means…", "choices": ["E major", "E minor", "E melody"], "answer": 1 },
    { "q": "Root to 5th in a minor triad is…", "choices": ["a perfect 5th", "a minor 5th", "a major 3rd"], "answer": 0 }
  ] },
  "passScore": 0.8
}
```

```exercise
{
  "id": "e2",
  "type": "build-chord",
  "title": "Build the minor triad",
  "count": 8,
  "passScore": 0.8,
  "spec": { "chords": ["Am", "Dm", "Em", "Cm", "Fm", "Gm"], "root": "given", "prompt": "symbol", "key": "C" }
}
```

```exercise
{
  "id": "e3",
  "type": "play-chord",
  "title": "Major, then minor",
  "instructions": "Hold the chord, then move only your middle finger down a half step.",
  "passScore": 0.75,
  "spec": { "chords": ["C", "Cm", "F", "Fm", "G", "Gm"], "inversion": "root", "sequence": true, "bpm": 50 }
}
```

```exercise
{
  "id": "e4",
  "type": "ear-chord",
  "title": "Major or minor?",
  "instructions": "One chord. Bright (maj) or sagging (min)? Sing it upward if unsure.",
  "count": 12,
  "passScore": 0.75,
  "spec": { "qualities": ["maj", "min"], "inversions": [0], "voicing": "close", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e5",
  "type": "listen",
  "title": "Mood check",
  "spec": {
    "example": { "title": "Mystery chords", "bpm": 60, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "piano", "seq": "[A3 C4 E4]:w | [F3 A3 C4]:w | [D4 F4 A4]:w" } ] },
    "questions": [
      { "q": "Chord 1 (A–C–E) is…", "choices": ["major", "minor"], "answer": 1 },
      { "q": "Chord 2 (F–A–C) is…", "choices": ["major", "minor"], "answer": 0 },
      { "q": "Chord 3 (D–F–A) is…", "choices": ["major", "minor"], "answer": 1 }
    ]
  }
}
```

```exercise
{
  "id": "e6",
  "type": "play-chord",
  "title": "The white-key minor chords",
  "passScore": 0.75,
  "spec": { "chords": ["Am", "Dm", "Em", "Am"], "inversion": "root", "sequence": true, "bpm": 50 }
}
```

```exercise
{
  "id": "e7",
  "type": "ear-melody",
  "title": "Degrees by ear (review)",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "C", "degrees": [1, 2, 3, 4, 5], "length": 4, "rhythm": "quarters", "answer": "degrees" }
}
```
