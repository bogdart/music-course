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
  - Hear do, mi and sol (1, 3, 5) in C major over a held low C
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

A single note on its own has no role — it's just a pitch. So before each degree question the app plays the [[home run]] — the run you've been hearing before echo tunes since
week 2: up from home to 5 and back down, **do re mi fa sol fa mi re do**, ending on a long C. It always ends in the **same octave** as the question note.

```example
{
  "title": "The home run in C: 1 2 3 4 5 4 3 2 1",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h" } ],
  "show": ["keyboard"]
}
```

## Do, mi and sol

The ear learns roles fastest from the notes that feel most at rest, so we start with three of them — not 1-2-3 in a
row, but **1, 3 and 5**:

- **1 (do)** — finished, resting. It's the note the home run just ended on.
- **3 (mi)** — settled and bright, sitting on top of home, but not quite "the end".
- **5 (sol)** — the top of the home run, where it turns round: stable but open, "up in the air", like a second home
  above.

To make the start easier, the first rungs hold a low C underneath the question — a [[drone]]. With home sounding the
whole time, 1 blends into it, while 3 and 5 sit on top of it in different ways. (The drone is the one sound below
middle C in these weeks: it isn't a note to name, just home held underneath.)

```example
{
  "title": "Home run, then 1, 3 and 5 — each over a held low C (drone)",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | C4:w | r:w | E4:w | r:w | G4:w" },
    { "instrument": "pad", "seq": "r:w | r:w | C3:w | r:w | C3:w | r:w | C3:w", "volume": 0.6 }
  ],
  "show": ["keyboard"]
}
```

**Try it:**

1. Hold C3 with your left hand (or play it and let it ring) and play C4 with your right: it blends into the low C.
2. Keep the low C and play E4: brighter, sitting *on top* of it.
3. Keep the low C and play G4: higher and more open than E — stable, but you could imagine walking down from it.
4. Walk each one home and count the steps: E D C (two), G F E D C (four). The farther from home, the more open it
   feels.
5. Play the home run (C D E F G F E D C), then one of C4, E4, G4 without looking which. Say what you think it was,
   then look.

### Check it

```exercise
{
  "id": "e11",
  "type": "listen",
  "title": "Do, mi or sol?",
  "instructions": "Each clip: the home run, then one note over a low C.",
  "spec": {
    "examples": [
      { "title": "Clip 1", "bpm": 100, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | E4:w" }, { "instrument": "pad", "seq": "r:w | r:w | C3:w", "volume": 0.6 } ] },
      { "title": "Clip 2", "bpm": 100, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | C4:w" }, { "instrument": "pad", "seq": "r:w | r:w | C3:w", "volume": 0.6 } ] },
      { "title": "Clip 3", "bpm": 100, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | G4:w" }, { "instrument": "pad", "seq": "r:w | r:w | C3:w", "volume": 0.6 } ] }
    ],
    "questions": [
      { "q": "Clip 1: the last note is…", "choices": ["1 (do)", "3 (mi)", "5 (sol)"], "answer": 1, "explain": "E = 3: bright, on top; two steps from home." },
      { "q": "Clip 2: the last note is…", "choices": ["1 (do)", "3 (mi)", "5 (sol)"], "answer": 0, "explain": "C = 1: it blends into the drone." },
      { "q": "Clip 3: the last note is…", "choices": ["1 (do)", "3 (mi)", "5 (sol)"], "answer": 2, "explain": "G = 5: the top of the home run; four steps from home." }
    ]
  }
}
```

**If you can't hear it yet — two tools that work without singing:**

- **Play it.** Find the note on the keyboard with the pitch search (it's C, E or G) — the key tells you the degree:
  C = 1, E = 3, G = 5.
- **Listen to the walk home.** After each drill answer, the app walks the note back to 1 (5 → 4 → 3 → 2 → 1). Count
  the steps: none = 1, two = 3, four = 5.

The drill's **How to do it** box uses the same two tools. The "home" feeling grows slowly for most people; the
keyboard answer is always available meanwhile. The drill opens two rungs: *home or 3?*, then *do, mi or sol*.

**Already name notes in C by ear?** Try **Dashboard → Placement test → Scale degrees**: 10/10 on a rung skips it.

```ladder
{ "skill": "degrees", "unlocks": 2, "intro": "After the home run, one note over a low C: do, mi or sol?" }
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

## Between lessons

- Two **Practice** sessions of about 10 minutes. On degree questions, answer, then always listen to the walk home.
- Once a day: play Hot Cross Buns and the start of Frère Jacques, saying the degrees (3 2 1; 1 2 3 1).
- Ready for the next lesson when the dashboard doesn't say **practise first**.
