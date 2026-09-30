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
  - Know how octave numbers work (they change at C)
prerequisites: [w01-l3-first-melody-by-ear]
tags: [note-names, keyboard, octave, ear]
---

# White keys and landmarks

Music uses only **seven letters**: A B C D E F G. After G, the alphabet starts again at A — one [[octave]] higher. That's the naming system from last week: same letter, different height. (Remember: to your ear, same-letter notes one after the other will still sound like different notes for a while. The name is a fact first and a sound later.)

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

## Octave numbers change at C

The number after a letter says which octave it's in, and it goes up by one at every **C**: the B just below C4 is **B3**, and the D just above it is **D4**. Middle C, C4, is a handy reference point for everything.

Listen to all seven white keys climbing from C4 to C5. The last note has the same name as the first — you've gone round the alphabet once:

```example
{
  "title": "C4 to C5 on the white keys",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q F4:q | G4:q A4:q B4:q C5:q" } ],
  "show": ["keyboard"]
}
```

## Echo: four notes

This lesson opens the next melody rung: echoes **four** notes long, still only C, D and E. The drill below runs at your current rung — if three-note echoes aren't solid yet, you'll stay with those first. Same method either way: listen twice, follow the directions.

```ladder
{ "skill": "melody", "unlocks": 2, "intro": "Opens 4-note echoes (C, D and E only); the drill runs at your current rung." }
```

## Octaves: near-misses

This lesson also opens the next octave rung: the *which one is the octave?* drill with a harder wrong candidate, the key **right next to** the octave — like C4, then C5 or B4. Height can't help you there; only how well the note fits the first one can. You'll meet it once the earlier octave rungs are solid.

```example
{
  "title": "C4 → C5 vs C4 → B4, then each pair together (melts vs rubs)",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h C5:h | C4:h B4:h | [C4 C5]:w | [C4 B4]:w" } ],
  "show": ["keyboard"]
}
```

Two things help:

- **Together first.** After answering, press the *together* buttons: an octave melts, a near-miss rubs and wobbles. You already practise that difference.
- **Distance is not the clue.** Two notes close in height (C4 and D4) are *different*; two notes far apart (C3 and C4) can have the *same name*.

```ladder
{ "skill": "octave", "unlocks": 4, "intro": "Opens \"Which one is the octave?\" with near-misses; the drill runs at your current rung." }
```

## Hands

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
  "passScore": 0.75,
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
  "passScore": 0.75
}
```

```exercise
{
  "id": "e9",
  "type": "quiz-input",
  "title": "Octave numbers",
  "spec": { "questions": [
    { "q": "The white key just below C4 is B…", "answer": ["3"], "kind": "number" },
    { "q": "The white key just above C4 is D…", "answer": ["4"], "kind": "number" },
    { "q": "The C one octave above C4 is C…", "answer": ["5"], "kind": "number" },
    { "q": "Is A3 higher or lower than C4?", "answer": ["lower"], "kind": "text" },
    { "q": "Is E4 higher or lower than B3?", "answer": ["higher"], "kind": "text" }
  ] }
}
```
