---
id: w10-l2-harmonic-intervals
title: Harmonic Intervals — Two Notes at Once
week: 10
order: 2
phase: p2
duration_min: 40
goals:
  - Hear intervals played together and sort them into consonant and dissonant
  - Tell 3rds from 6ths and 5ths from octaves when both notes sound at once
  - Name compound intervals (9th, 10th) as "octave + simple interval"
prerequisites: [w10-l1-sixths-sevenths-tritone]
tags: [intervals, harmony, ear]
---

# Harmonic Intervals — Two Notes at Once

So far you heard intervals one note after the other (melodic). In real music, notes also sound *together*: two hands, a bass under a melody, a guitar chord. A [[harmonic interval]] is two notes played at the same moment. It's harder at first, because your ear has to pull apart one blended sound — exactly the skill you need to hear chord roots next week.

## Smooth or rough?

When two notes blend smoothly, the interval is a [[consonance]]; when they rub or buzz, it is a [[dissonance]]. Neither is "bad" — dissonance creates tension, consonance releases it.

- **Perfect consonances** — octave, fifth (and fourth): hollow, pure, almost one sound.
- **Imperfect consonances** — thirds and sixths: sweet and full. Most harmony is built from them.
- **Dissonances** — seconds, sevenths, tritone: rub, beat, want to move.

```example
{
  "title": "Harmonic intervals above C4: P8, P5, M3, M6 — then M2, M7, TT",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 C5]:h [C4 G4]:h | [C4 E4]:h [C4 A4]:h | [C4 D4]:h [C4 B4]:h | [C4 F#4]:w" } ],
  "show": ["keyboard", "staff"]
}
```

Listening tip: first ask "smooth or rough?" Then, if smooth, "hollow (5th/8ve) or sweet (3rd/6th)?". If you're stuck, sing the lower note, then the upper one — turn it back into a melodic interval.

```exercise
{
  "id": "e1", "type": "ear-interval", "title": "Hollow or sweet",
  "count": 10, "passScore": 0.75,
  "spec": { "intervals": ["M3", "P5", "P8"], "direction": "harmonic", "root": "random", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e2", "type": "ear-interval", "title": "Thirds or sixths",
  "instructions": "Sixths are wider and more open; thirds are compact and warm.",
  "count": 10, "passScore": 0.7,
  "spec": { "intervals": ["m3", "M3", "m6", "M6"], "direction": "harmonic", "root": "random", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e3", "type": "ear-interval", "title": "Which dissonance?",
  "instructions": "M2 = close rub. M7 = wide, piercing rub. TT = restless, neither wide nor close. P5 is in there as the 'smooth' control.",
  "count": 10, "passScore": 0.7,
  "spec": { "intervals": ["M2", "TT", "P5", "M7"], "direction": "harmonic", "root": "random", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e4", "type": "play-melody", "title": "Play two notes at once",
  "instructions": "Right hand: thumb stays on C4, the other finger changes. Say the interval name out loud as you play it.",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "[C4 E4]:h [C4 G4]:h | [C4 A4]:h [C4 C5]:h | [C4 F4]:h [C4 D4]:h | [C4 E4]:w", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

## Beyond the octave: compound intervals

Spread two notes wider than an octave and you get a [[compound interval]]. A 9th is an octave + a 2nd; a 10th is an octave + a 3rd. Because of octave equivalence (remember week 1?), a 10th has the same *colour* as a 3rd — just more spacious. Pianists often play a bass note and a 10th above it: the lush, open sound of ballads.

```example
{
  "title": "M3 (C4–E4), then M10 (C3–E4); M2 (C4–D4), then M9 (C3–D4)",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4]:h [C3 E4]:h | [C4 D4]:h [C3 D4]:h" } ],
  "show": ["keyboard"]
}
```

```exercise
{
  "id": "e5", "type": "quiz", "title": "Compound intervals",
  "spec": { "questions": [
    { "q": "C3 up to E4 is a…", "choices": ["M3", "M9", "M10", "P11"], "answer": 2, "explain": "Octave (8) + third (3) = 10th: count the letter names C–D–E–F–G–A–B–C–D–E." },
    { "q": "A 9th has the colour of a…", "choices": ["2nd", "3rd", "7th", "octave"], "answer": 0, "explain": "9 − 7 = 2. Subtract 7 from the number to get the simple interval." },
    { "q": "Which is a perfect consonance?", "choices": ["M3", "P5", "M6", "m7"], "answer": 1 },
    { "q": "Which is a dissonance?", "choices": ["m6", "P4", "M7", "m3"], "answer": 2 }
  ] }
}
```

```exercise
{
  "id": "e6", "type": "ear-interval", "title": "Mixed review: up, down and together",
  "count": 12, "passScore": 0.7,
  "spec": { "intervals": ["m3", "M3", "P4", "P5", "M6", "m7", "P8"], "direction": "mixed", "root": "random", "range": ["C3", "C5"] }
}
```
