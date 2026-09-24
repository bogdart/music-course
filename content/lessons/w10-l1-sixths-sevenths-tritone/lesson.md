---
id: w10-l1-sixths-sevenths-tritone
title: Sixths, Sevenths and the Tritone
week: 10
order: 1
phase: p2
duration_min: 40
goals:
  - Build and hear m6, M6, m7, M7 and the tritone from any note
  - Use interval inversion (3rd ↔ 6th, 2nd ↔ 7th) to find wide intervals fast
  - Recognise common intervals when they go down, not only up
prerequisites: [w09-l3-greensleeves-and-minor-daw]
tags: [intervals, ear]
songs:
  - { title: "My Bonnie Lies Over the Ocean", composer: "Traditional (Scottish)", public_domain: true }
---

# Sixths, Sevenths and the Tritone

In Phase 1 you learned every interval up to the octave, going up. The wide ones — sixths and sevenths — are usually the shakiest, and the [[tritone]] is the odd one out. Today we make them solid, then flip direction.

## A shortcut: flip the interval

Take C up to A: a major sixth, 9 half steps. Now flip it — A up to C — and you get a minor third. That is [[interval inversion]]: the two intervals add up to an octave (12 half steps), and their numbers add up to 9.

| interval | half steps | flips to |
|---|---|---|
| m6 | 8 | M3 |
| M6 | 9 | m3 |
| m7 | 10 | M2 |
| M7 | 11 | m2 |
| TT | 6 | TT |

So a sixth is "a third, upside down", and a seventh is "one step short of an octave". Hear it that way: a **M7** sounds like an octave that missed by a half step — sharp and tense. A **m7** is softer, bluesy, and wants to fall.

```example
{
  "title": "From C4: m6, M6, m7, M7, tritone (each melodic, then together)",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q Ab4:q [C4 Ab4]:h | C4:q A4:q [C4 A4]:h | C4:q Bb4:q [C4 Bb4]:h | C4:q B4:q [C4 B4]:h | C4:q F#4:q [C4 F#4]:h" } ],
  "show": ["keyboard", "staff"]
}
```

A folk anchor for the major sixth: the first two notes of *My Bonnie Lies Over the Ocean*.

```example
{
  "title": "My Bonnie (traditional) — the opening leap is a major sixth",
  "bpm": 100, "timeSig": "3/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "r:h G4:q | E5:q. D5:8 C5:q | D5:q C5:q A4:q | G4:q E4:h |" } ],
  "show": ["staff"]
}
```

```exercise
{
  "id": "e1", "type": "ear-interval", "title": "Minor or major sixth?",
  "instructions": "M6 is bright and open (My Bonnie). m6 is darker and bittersweet.",
  "count": 10, "passScore": 0.75,
  "spec": { "intervals": ["m6", "M6"], "direction": "asc", "root": "random", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e2", "type": "build-interval", "title": "Build the wide intervals",
  "instructions": "Use the flip trick: for a M6, go down a m3 and up an octave.",
  "count": 10, "passScore": 0.8,
  "spec": { "intervals": ["m6", "M6", "m7", "M7", "TT"], "direction": "asc", "root": "random" }
}
```

```exercise
{
  "id": "e3", "type": "ear-interval", "title": "Sevenths and the octave",
  "instructions": "Octave = same note, fused. M7 = almost-octave, grinding. m7 = wide but relaxed.",
  "count": 10, "passScore": 0.75,
  "spec": { "intervals": ["m7", "M7", "P8"], "direction": "asc", "root": "random", "range": ["C3", "C5"] }
}
```

## The tritone

Six half steps — exactly half an octave. It is the only interval that flips to itself, and it sounds restless because it has no clear home. Inside a V7 chord, the tritone B–F squeezes inward to C–E. That little resolution powers most of Western harmony; we'll use it in week 12.

```example
{
  "title": "Tritone B–F resolving inward to C–E",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[B3 F4]:h [C4 E4]:h | [B3 F4]:h [C4 E4]:h" } ],
  "show": ["keyboard"]
}
```

```exercise
{
  "id": "e4", "type": "ear-interval", "title": "Fourth, tritone or fifth?",
  "count": 10, "passScore": 0.75,
  "spec": { "intervals": ["P4", "TT", "P5"], "direction": "asc", "root": "random", "range": ["C3", "C5"] }
}
```

## Going down

Melodies fall as often as they rise, and a falling interval can sound new even if you know it going up. Trick: sing the lower note back *up* to the top one in your head.

```exercise
{
  "id": "e5", "type": "ear-interval", "title": "Descending intervals",
  "instructions": "The second note is lower. Name the distance.",
  "count": 12, "passScore": 0.7,
  "spec": { "intervals": ["M2", "m3", "M3", "P4", "P5", "M6", "P8"], "direction": "desc", "root": "random", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e6", "type": "quiz", "title": "Inversion check",
  "spec": { "questions": [
    { "q": "A major sixth flips to a…", "choices": ["major third", "minor third", "perfect fourth", "minor sixth"], "answer": 1, "explain": "9 + 3 = 12 half steps; quality flips major ↔ minor." },
    { "q": "How many half steps in a minor seventh?", "choices": ["9", "10", "11", "12"], "answer": 1, "explain": "An octave (12) minus a major second (2)." },
    { "q": "Which interval flips to itself?", "choices": ["P4", "P5", "Tritone", "M6"], "answer": 2, "explain": "6 + 6 = 12." },
    { "q": "C up to B is a…", "choices": ["m7", "M7", "M6", "P8"], "answer": 1, "explain": "One half step short of the octave." }
  ] }
}
```
