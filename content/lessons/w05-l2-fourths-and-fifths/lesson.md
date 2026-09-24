---
id: w05-l2-fourths-and-fifths
title: Intervals I — Fourths, Fifths and the Octave
week: 5
order: 2
phase: p1
duration_min: 45
goals:
  - Build and play perfect 4ths, perfect 5ths and octaves
  - Recognise P4, P5 and P8 by ear using anchor songs
  - Tell 3rds, 4ths, 5ths and octaves apart ascending
prerequisites: [w05-l1-seconds-and-thirds]
tags: [intervals, ear, keyboard]
songs:
  - { title: "Twinkle, Twinkle, Little Star", composer: "Traditional", public_domain: true }
  - { title: "Bridal Chorus (Here Comes the Bride), from Lohengrin", composer: "Richard Wagner", public_domain: true }
  - { title: "Take Me Out to the Ball Game", composer: "Albert Von Tilzer (1908)", public_domain: true }
---

# Fourths, fifths and the octave

Last lesson's intervals were small: steps and skips. Today's are **leaps**, and they have a special sound. The 4th, the 5th and the octave are called [[perfect interval]]s — not because they're better, but because they sound so stable and "hollow" that they blend almost like one note. The octave blends completely (week 1!), the 5th nearly as much, the 4th a little less.

| Interval | App label | Half steps | From C | Degrees |
|---|---|---|---|---|
| perfect 4th | P4 | 5 | C–F | 1 → 4, or 5 → 1 above |
| perfect 5th | P5 | 7 | C–G | 1 → 5 |
| octave | P8 | 12 | C–C | 1 → 1 |

Your hand already knows the 5th: thumb to little finger in five-finger position.

## Anchor songs

- **P5** — "Twinkle, Twinkle" (*Twin-kle, twin-kle*): C … G. Wide, open, heroic.
- **P4** — "Here Comes the Bride" (*Here comes*): G … C. Also "Amazing Grace" (*A-ma-*). It sounds like a call, a trumpet announcing something.
- **P8** — "Take Me Out to the Ball Game" (*Take me*): C4 … C5. The two notes melt into one colour.

```example
{
  "title": "P5, P4, P8 from C",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h G4:h | r:w | C4:h F4:h | r:w | C4:h C5:h | r:w" } ],
  "show": ["keyboard"]
}
```

```example
{
  "title": "Here Comes the Bride (opening) — perfect 4th",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "r:h r:q G3:q | C4:q. C4:8 C4:h | r:h r:q G3:q | D4:q. B3:8 C4:h" } ],
  "show": ["staff"]
}
```

```example
{
  "title": "Take Me Out to the Ball Game (opening) — octave",
  "bpm": 120, "timeSig": "3/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h C5:q | A4:q G4:q E4:q | G4:h. | D4:h." } ],
  "show": ["staff"]
}
```

## The 4th vs 5th trap

P4 and P5 are the most confused pair for beginners: both are hollow and open. Two differences help:

1. **Size.** The 5th is wider. Sing both: the 5th makes your voice climb noticeably further.
2. **Feel.** A 4th going up often sounds like *arriving* ("Here comes the **bride**" lands on home). A 5th going up sounds like *lifting off*, leaving home for the balcony.

Also: a 4th up and a 5th up from the same note add up to an octave (C–F–C, or C–G–C). They are two halves of the same octave — which is part of why they sound related.

## Drills

```exercise
{
  "id": "e1",
  "type": "quiz-input",
  "title": "Perfect intervals",
  "spec": { "questions": [
    { "q": "Half steps in a perfect 5th?", "answer": ["7"], "kind": "number" },
    { "q": "Half steps in a perfect 4th?", "answer": ["5"], "kind": "number" },
    { "q": "A perfect 5th above D is…", "answer": ["A"], "kind": "note" },
    { "q": "A perfect 4th above G is…", "answer": ["C"], "kind": "note" },
    { "q": "A perfect 5th above F is…", "answer": ["C"], "kind": "note" },
    { "q": "A perfect 4th above E is…", "answer": ["A"], "kind": "note" },
    { "q": "P4 + P5 = which interval?", "answer": ["octave", "P8", "8"], "kind": "text" }
  ] },
  "passScore": 0.8
}
```

```exercise
{
  "id": "e2",
  "type": "build-interval",
  "title": "Play a P4 or P5 up",
  "count": 10,
  "passScore": 0.8,
  "spec": { "intervals": ["P4", "P5"], "direction": "asc", "root": "random" }
}
```

```exercise
{
  "id": "e3",
  "type": "ear-interval",
  "title": "Bride (P4) or Twinkle (P5)?",
  "count": 10,
  "passScore": 0.75,
  "spec": { "intervals": ["P4", "P5"], "direction": "asc", "root": "random", "range": ["C3", "C5"] },
  "hints": ["Sing it. Does it land (P4) or lift off (P5)?"]
}
```

```exercise
{
  "id": "e4",
  "type": "ear-interval",
  "title": "3rd, 4th, 5th or octave?",
  "count": 12,
  "passScore": 0.7,
  "spec": { "intervals": ["M3", "P4", "P5", "P8"], "direction": "asc", "root": "random", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e5",
  "type": "play-melody",
  "title": "Take Me Out to the Ball Game (opening)",
  "instructions": "The first leap is a full octave: thumb on C4, then jump the hand up to C5.",
  "passScore": 0.7,
  "spec": { "bpm": 100, "timeSig": "3/4", "key": "C", "seq": "C4:h C5:q | A4:q G4:q E4:q | G4:h. | D4:h.", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e6",
  "type": "build-interval",
  "title": "Mixed: M3, P4, P5, P8",
  "count": 10,
  "passScore": 0.8,
  "spec": { "intervals": ["M3", "P4", "P5", "P8"], "direction": "asc", "root": "random" }
}
```

```exercise
{
  "id": "e7",
  "type": "ear-note",
  "title": "Degrees 1–5 (review)",
  "count": 10,
  "passScore": 0.75,
  "spec": { "key": "C", "mode": "major", "degrees": [1, 2, 3, 4, 5], "reference": "cadence", "octaves": [3, 4], "instrument": "piano" }
}
```
