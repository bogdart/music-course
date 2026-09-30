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
  - Find a heard note among the seven white keys by searching — jump first, then step
prerequisites: [w01-l5-first-melody-by-ear]
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

D and E follow C; G, A and B follow F; B is just before the next C. No key is more than two steps from a landmark.

```keyboard
{ "range": ["C3", "C5"], "highlight": ["C3", "F3", "C4", "F4", "C5"], "labels": "names", "colors": { "C3": "root", "C4": "root", "C5": "root", "F3": "other", "F4": "other" } }
```

**Try it:** eyes on the black keys, not the letters. Find A4: the three-black-key group, F left of it, then two
steps right (G, A). Find B3: the C4 landmark, one step left. Find E4: C4, two steps right. Say the path out loud
("F, G, A") while you move.

The number after a letter is the octave, and it goes up by one at every **C**: the B just below C4 is **B3**, the D
just above it is **D4**.

## Search seven keys

Your pitch search now gets the whole white-key octave, C4 to B4. Same method as week 1, one change: with seven keys,
**move in bigger jumps first**.

**Try it** — the mystery note below is **A4** (shown on purpose):

```example
{
  "title": "Guided search: the mystery note is A4",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "A4:w" } ],
  "show": ["keyboard"]
}
```

1. Start in the middle: **F4** (the landmark). Mystery, then F4: F is lower — go right.
2. Jump two keys: **A4**. Mystery, then A4: the same note twice. Found in two tries.
3. Replay it pretending you jumped to **B4** instead: B is a step higher — go back one. Still only three tries.

```exercise
{
  "id": "e10",
  "type": "listen",
  "title": "Search: C4 to B4",
  "instructions": "Start on F4 each time, then jump two keys toward the note, then step. Use the keyboard above or your own.",
  "spec": {
    "examples": [
      { "title": "Mystery note 1", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "B4:w" } ] },
      { "title": "Mystery note 2", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "D4:w" } ] }
    ],
    "questions": [
      { "q": "Mystery note 1 is…", "choices": ["C4", "D4", "E4", "F4", "G4", "A4", "B4"], "answer": 6, "explain": "B4: F too low, A still a bit low, B merges." },
      { "q": "Mystery note 2 is…", "choices": ["C4", "D4", "E4", "F4", "G4", "A4", "B4"], "answer": 1, "explain": "D4: F too high, D merges." }
    ]
  }
}
```

**If you're stuck between two keys:** play each one right after the mystery note and ask the lesson-2 question —
"same note twice, or did it move?" Pick the one that doesn't move. Needing four or five tries on seven keys is
normal at first.

```ladder
{ "skill": "pitch", "unlocks": 8, "intro": "Pitch at your current rung — up to finding the note among all seven white keys." }
```

## Echo: four notes

The next melody rung plays back **four** notes, still C, D and E. Same method as last week: listen twice, say the
moves, follow them. With four notes, say the moves in a rhythm ("down, same, up") so they stick.

```ladder
{ "skill": "melody", "unlocks": 2, "intro": "Echoes on C, D and E — up to four notes, at your current rung." }
```

## Octaves: the near-miss candidate

The next octave rung is *which one is the octave?* with a harder wrong candidate: the key **right next to** the
octave (C4, then C5 or B4). Height can't help any more.

**Try it:** play C4 → C5, then C4 → B4. Then press C4 + C5 together (still) and C4 + B4 together (wobbles). After
each drill answer, use the *together* buttons in **Listen again** — the wobble tells you which was the near-miss.

```example
{
  "title": "C4 → C5 vs C4 → B4, then each pair together (melts vs wobbles)",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h C5:h | C4:h B4:h | [C4 C5]:w | [C4 B4]:w" } ],
  "show": ["keyboard"]
}
```

**If you can't hear it yet:** find the first note by search, then count 12 keys up and play it: that's the octave.
Replay the question and compare A and B with the note you just played.

```ladder
{ "skill": "octave", "unlocks": 4, "intro": "Octaves at your current rung — up to 'which one is the octave?' with near-misses." }
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

## Between lessons

- Two **Practice** sessions of about 10 minutes. On *Find it*, count your tries: jump first, then step.
- Once a day: name five random white keys from the landmarks (C and F) without counting from A.
- Ready for the next lesson when the dashboard doesn't say **practise first**.
