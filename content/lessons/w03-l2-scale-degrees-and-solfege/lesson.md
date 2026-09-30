---
id: w03-l2-scale-degrees-and-solfege
title: Scale Degrees and Solfège
week: 3
order: 2
phase: p1
duration_min: 45
goals:
  - Name the notes of a key by number (1–7) and by solfège (do re mi fa sol la ti)
  - Feel which note is "home" and use the home run (1 2 3 4 5 4 3 2 1) to set it before a question
  - Hear degrees 1, 2 and 3 in C major, first over a held low C
prerequisites: [w03-l1-major-scale-pattern]
tags: [scale-degrees, solfege, ear, tonic]
songs:
  - { title: "Frère Jacques", composer: "Traditional", public_domain: true }
  - { title: "Twinkle, Twinkle, Little Star", composer: "Traditional", public_domain: true }
---

# Scale degrees and solfège

Letter names tell you *which key* to press. But in a tune your ear doesn't hear letters. It hears **roles**: "this note is home", "this note wants to go home". Those roles are the same in every major key, which is why we name notes by their position in the scale — their [[scale degree]].

| Degree | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|
| Solfège | do | re | mi | fa | sol | la | ti |
| In C major | C | D | E | F | G | A | B |

[[Solfège]] syllables are just speakable names for the numbers. Use whichever sticks; the app answers in numbers.

Degree 1 is the [[tonic]] — **home**. In C major, C is 1. For the next few weeks we stay in **C major only**: one key, one home, until the roles feel familiar.

## What "home" means — hear it first

"Home" isn't a theory word; it's a feeling you already have. Listen to a tune you know, first ending where it should, then stopping one note early:

```example
{
  "title": "Twinkle Twinkle (first line): ends on C = home, finished",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q C4:q G4:q G4:q | A4:q A4:q G4:h | F4:q F4:q E4:q E4:q | D4:q D4:q C4:h" } ],
  "show": ["keyboard"]
}
```

```example
{
  "title": "Same tune, stopping on D = not home, left hanging",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q C4:q G4:q G4:q | A4:q A4:q G4:h | F4:q F4:q E4:q E4:q | D4:q D4:q D4:h" } ],
  "show": ["keyboard"]
}
```

Most people hear the second version as unfinished — you almost want to press C yourself. That pull towards C is what "C is home" means.

## The home run

A single note on its own has no role — it's just a pitch. So before each degree question the app plays the [[home run]] you met last lesson: up from home to 5 and back down, **do re mi fa sol fa mi re do**, ending on a long C. It always ends in the **same octave** as the question note.

```example
{
  "title": "The home run in C: 1 2 3 4 5 4 3 2 1",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h" } ],
  "show": ["keyboard"]
}
```

## 1, 2 and 3

- **1 (do)** — finished, resting. It's the note the home run just ended on.
- **2 (re)** — unfinished. It sounds like it wants to step down to 1.
- **3 (mi)** — fairly settled, but not quite "the end".

To make the start easier, the first rungs hold a low C underneath the question — a [[drone]]. With home sounding the whole time, 1 blends into it, while 2 and 3 sit against it.

```example
{
  "title": "Home run, then 1, 2 and 3 — each over a held low C (drone)",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | C4:w | r:w | D4:w | r:w | E4:w" },
    { "instrument": "pad", "seq": "r:w | r:w | C3:w | r:w | C3:w | r:w | C3:w", "volume": 0.6 }
  ],
  "show": ["keyboard"]
}
```

**Two tools that work without singing:**

- **Play it.** Find the note on the keyboard (C, D or E) — the key tells you the degree.
- **Listen to the walk home.** After each answer, the app walks the note back to 1 (3 → 2 → 1). Press *Question, then walk home* and count the steps.

```ladder
{ "skill": "degrees", "unlocks": 2, "intro": "After the home run, one note over a low C: which degree is it?" }
```

## Old tunes, new names

"Hot Cross Buns" is **3 2 1**. "Frère Jacques" starts **1 2 3 1**:

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
  "passScore": 0.75
}
```

```exercise
{
  "id": "e2",
  "type": "play-notes",
  "title": "Play by degree",
  "instructions": "Degrees in C major. Play the matching note around middle C.",
  "count": 10,
  "passScore": 0.75,
  "spec": { "prompt": "degrees", "notes": ["C4", "E4", "D4", "G4", "F4", "A4", "B4", "C5"], "ordered": true, "key": "C" }
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
