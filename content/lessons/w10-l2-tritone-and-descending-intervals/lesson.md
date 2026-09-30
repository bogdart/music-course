---
id: w10-l2-tritone-and-descending-intervals
title: The Tritone and Intervals Going Down
week: 10
order: 2
phase: p2
duration_min: 45
goals:
  - Build and hear the tritone between the fourth and the fifth
  - Hear sevenths against the octave
  - Build and play intervals going down, and hear why they feel different from going up
prerequisites: [w10-l1-sixths-sevenths-and-the-fifth-trap]
tags: [intervals, ear, keyboard]
songs:
  - { title: "Joy to the World", composer: "Lowell Mason (1839), after Handel", public_domain: true }
---

# The Tritone and Intervals Going Down

Two things today: the one interval we haven't met yet, and turning intervals upside down in time, so the second note is *lower*.

## Sevenths in your ears

Last lesson you built sevenths by hand. This lesson opens them in the interval drill. Quick reminder of the sound: the **major 7th** is an octave that missed by a half step (tense, almost a clash), the **minor 7th** is a whole step short of the octave (wide but softer), and the **octave** comes back to the same name.

```example
{
  "title": "From D4: minor 7th, major 7th, octave",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "D4:q C5:q r:h | D4:q C#5:q r:h | D4:q D5:q r:h" } ],
  "show": ["keyboard"]
}
```

## The tritone

Between the perfect fourth (5 half steps) and the perfect fifth (7) sits one more interval: the [[tritone]], 6 half steps, exactly half an octave. Above C it's F♯; above B it's F. It's the only interval that flips into itself (6 + 6 = 12).

What it sounds like: neither the settled fourth nor the open fifth. It hangs in the air, unresolved, as if it's waiting for something. Compare the three:

```example
{
  "title": "From C4: fourth (C–F), tritone (C–F♯), fifth (C–G)",
  "bpm": 66, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q F4:q [C4 F4]:h | C4:q F#4:q [C4 F#4]:h | C4:q G4:q [C4 G4]:h" } ],
  "show": ["keyboard", "staff"]
}
```

The tritone matters far beyond this drill. In C major there's exactly one: **B and F**. Played together, they want to squeeze inward, B up to C and F down to E. That little move is the engine inside the V7 chord you'll build in week 12.

```example
{
  "title": "The tritone B–F squeezing inward to C–E, twice",
  "bpm": 66, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[B3 F4]:h [C4 E4]:h | [B3 F4]:h [C4 E4]:h" } ],
  "show": ["keyboard"]
}
```

This lesson opens two interval rungs: sevenths against the octave, then fourth, tritone or fifth. The drill runs at your current interval rung, so you'll meet them once the fifth-vs-octave and sixth rungs are solid. (Mixing all the big intervals together comes in week 12.)

```ladder
{ "skill": "intervals", "unlocks": 11, "intro": "Opens \"7ths and the octave\", then \"The tritone\" (4th, tritone or 5th); the drill runs at your current rung." }
```

## Going down

Melodies fall as often as they rise. A falling interval covers the same distance as a rising one, but it often *feels* different at first: you hear the high note first, and the lower note arrives like a landing. Listen to each pair up, then down:

```example
{
  "title": "Up, then down: major 3rd (C–E, E–C), fifth (C–G, G–C), octave (C–C, C–C)",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q E4:q E4:q C4:q | C4:q G4:q G4:q C4:q | C4:q C5:q C5:q C4:q" } ],
  "show": ["keyboard"]
}
```

A practical trick for later: when you hear a falling interval and aren't sure, play the two notes on the keyboard the other way round, low then high, and compare with the rising intervals you know.

*Joy to the World* opens with the most common falling line of all: the major scale, straight down from 8 to 1. Every step is a falling second (whole or half step).

```example
{
  "title": "Joy to the World (Lowell Mason, public domain), opening, simplified rhythm",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C5:q. B4:8 A4:q. G4:8 | F4:q. E4:8 D4:q C4:q |" } ],
  "show": ["staff", "keyboard"]
}
```

```exercise
{
  "id": "e1", "type": "play-melody", "title": "Joy to the World, opening",
  "instructions": "Right hand, from C5 down to C4. Two of the steps are half steps, C–B and F–E: feel how close those keys are.",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "C5:q. B4:8 A4:q. G4:8 | F4:q. E4:8 D4:q C4:q |", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

Falling intervals join your ear drills in week 15. Today your hands learn to find them: the target note is *below* the given one.

```exercise
{
  "id": "e2", "type": "build-interval", "title": "Build intervals going down",
  "instructions": "Play the note that is the given interval BELOW the shown note.",
  "count": 10, "passScore": 0.7,
  "spec": { "intervals": ["M2", "M3", "P4", "P5", "P8"], "direction": "desc", "root": "random" }
}
```

```exercise
{
  "id": "e3", "type": "build-interval", "title": "Tritones and sevenths, going up",
  "count": 8, "passScore": 0.7,
  "spec": { "intervals": ["P4", "TT", "P5", "m7", "M7"], "direction": "asc", "root": "random" }
}
```

```exercise
{
  "id": "e4", "type": "quiz", "title": "Tritone and direction check",
  "spec": { "questions": [
    { "q": "How many half steps in a tritone?", "choices": ["5", "6", "7", "8"], "answer": 1 },
    { "q": "In C major, the tritone is between…", "choices": ["C and G", "B and F", "E and A", "D and G"], "answer": 1, "explain": "B up to F is 6 half steps. Together they squeeze inward to C and E." },
    { "q": "G down to C is a…", "choices": ["fourth", "fifth", "sixth", "octave"], "answer": 1, "explain": "Count the letters down: G F E D C = 5. Same distance as C up to G." },
    { "q": "Joy to the World opens with…", "choices": ["a falling scale", "a rising scale", "a leap of an octave"], "answer": 0 }
  ] }
}
```
