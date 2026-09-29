---
id: w02-l2-black-keys-and-half-steps
title: Black Keys, Sharps, Flats and Steps
week: 2
order: 2
phase: p1
duration_min: 45
goals:
  - Name black keys as sharps or flats of their white neighbours
  - Measure distances on the keyboard in half steps and whole steps
  - Hear the difference between a half step and a whole step
prerequisites: [w02-l1-white-keys-and-landmarks]
tags: [sharps, flats, half-step, whole-step, ear, keyboard]
---

# Black keys and steps

The black keys don't get letters of their own. Each one is named after a white neighbour:

- a [[sharp]] (**♯**, typed `#`) means "one key **higher**": the black key right of C is **C♯**.
- a [[flat]] (**♭**, typed `b`) means "one key **lower**": the same black key, seen from D, is **D♭**.

So C♯ and D♭ are two names for one key. Which name we use depends on the musical situation — you'll see why in week 7. For now, both are right.

```keyboard
{ "range": ["C4", "C5"], "highlight": ["C#4", "D#4", "F#4", "G#4", "A#4"], "labels": "names" }
```

## Half steps and whole steps

We measure pitch distance by counting keys — **every** key, black and white.

- A [[half step]] is the smallest move: from one key to the very next key, with nothing in between. C → C♯ is a half step.
- A [[whole step]] is two half steps: skip exactly one key. C → D is a whole step (skipping C♯).

Look closely at the keyboard: between **E and F** and between **B and C** there is **no black key**. Those white neighbours are only a half step apart. Every other pair of white neighbours is a whole step apart. This single fact explains most of the next few weeks, so take a moment with it.

```example
{
  "title": "Half steps: E–F, B–C. Whole steps: C–D, F–G",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "E4:h F4:h | B3:h C4:h | C4:h D4:h | F4:h G4:h" } ],
  "show": ["keyboard"]
}
```

## Hearing the difference

A half step sounds **tight** and tense — like a squeeze, the sound of the shark approaching in a famous film score. A whole step sounds **open**, like the first two notes of "Frère Jacques" or the "do–re" you'll meet next week. Listen, then sing both:

```example
{
  "title": "Half step, whole step, half step, whole step",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h C#4:h | r:w | C4:h D4:h | r:w | G4:h G#4:h | r:w | G4:h A4:h" } ],
  "show": ["keyboard"]
}
```

In the app, a half step is labelled **m2** and a whole step **M2** (minor and major second — you'll learn the reason in week 5).

## Drills

```exercise
{
  "id": "e1",
  "type": "quiz",
  "title": "Steps on the keyboard",
  "spec": { "questions": [
    { "q": "E to F is a…", "choices": ["half step", "whole step"], "answer": 0, "explain": "No black key between E and F." },
    { "q": "C to D is a…", "choices": ["half step", "whole step"], "answer": 1 },
    { "q": "B to C is a…", "choices": ["half step", "whole step"], "answer": 0 },
    { "q": "The black key between F and G is called…", "choices": ["F♯ or G♭", "F♭ or G♯", "only F♯"], "answer": 0 },
    { "q": "How many half steps make a whole step?", "choices": ["1", "2", "3"], "answer": 1 },
    { "q": "A sharp means…", "choices": ["one half step higher", "one half step lower", "louder"], "answer": 0 },
    { "q": "G to A is a…", "choices": ["half step", "whole step"], "answer": 1 }
  ] },
  "passScore": 0.8
}
```

```exercise
{
  "id": "e2",
  "type": "play-notes",
  "title": "Find the black keys",
  "instructions": "Each black key has two names. Find it from either neighbour.",
  "count": 10,
  "passScore": 0.8,
  "spec": { "prompt": "names", "notes": ["C#4", "Eb4", "F#4", "Bb3", "G#4", "Db4", "A#3", "Gb4"], "ordered": true, "key": "C" }
}
```

```exercise
{
  "id": "e3",
  "type": "quiz-input",
  "title": "Step up, step down",
  "spec": { "questions": [
    { "q": "A half step above E is…", "answer": ["F"], "kind": "note" },
    { "q": "A whole step above E is…", "answer": ["F#", "Gb"], "kind": "note" },
    { "q": "A half step below C is…", "answer": ["B"], "kind": "note" },
    { "q": "A whole step above A is…", "answer": ["B"], "kind": "note" },
    { "q": "A whole step above B is…", "answer": ["C#", "Db"], "kind": "note" },
    { "q": "A half step above G is…", "answer": ["G#", "Ab"], "kind": "note" }
  ] },
  "passScore": 0.8
}
```

```exercise
{
  "id": "e4",
  "type": "build-interval",
  "title": "Play a half or whole step up",
  "instructions": "m2 = half step up, M2 = whole step up. Play the second note.",
  "count": 10,
  "passScore": 0.8,
  "spec": { "intervals": ["m2", "M2"], "direction": "asc", "root": "random" }
}
```

```exercise
{
  "id": "e5",
  "type": "ear-interval",
  "title": "Half step or whole step?",
  "instructions": "Two notes going up. Tight squeeze (m2 = half step) or open step (M2 = whole step)?",
  "count": 10,
  "passScore": 0.7,
  "spec": { "intervals": ["m2", "M2"], "direction": "asc", "root": "random", "range": ["C3", "C5"] },
  "hints": ["Sing the two notes. Does the second feel squeezed right against the first?"]
}
```

```exercise
{
  "id": "e7",
  "type": "ear-octave",
  "title": "Octaves vs half-step neighbours",
  "instructions": "Same note name an octave away, or a note one half step off? Now with black keys too.",
  "count": 12,
  "passScore": 0.7,
  "spec": { "notes": ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"], "octaves": [3, 4, 5], "mode": "same-or-different", "gap": [1], "foils": [1, 11] },
  "hints": ["A half step off the octave sounds sour against the first note. Press 'Octave vs this note' after answering."]
}
```
