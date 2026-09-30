---
id: w05-l2-fourths-and-fifths
title: Intervals I — Fourths and Fifths
week: 5
order: 2
phase: p1
duration_min: 45
goals:
  - Build and play perfect 4ths and perfect 5ths
  - Tell P4 and P5 apart with anchor tunes — and with the keyboard when the ear can't yet
  - Sort a 3rd, 4th and 5th by size; play the opening of "Here Comes the Bride"
prerequisites: [w05-l1-seconds-and-thirds]
tags: [intervals, ear, keyboard]
songs:
  - { title: "Twinkle, Twinkle, Little Star", composer: "Traditional", public_domain: true }
  - { title: "Bridal Chorus (Here Comes the Bride), from Lohengrin", composer: "Richard Wagner", public_domain: true }
---

# Fourths and fifths

Last lesson's intervals were small: steps and skips. Today's are **leaps**. The 4th and the 5th are called [[perfect interval]]s — not because they're better, but because they sound open and plain, with little of the bright/dark colour a 3rd has.

| Interval | App label | Half steps | From C | Degrees |
|---|---|---|---|---|
| perfect 4th | P4 | 5 | C–F | 1 → 4 |
| perfect 5th | P5 | 7 | C–G | 1 → 5 |

Your hand already knows both: in five-finger position (thumb on C), finger 4 plays the 4th and finger 5 the 5th.

```example
{
  "title": "P4 (C–F), then P5 (C–G), twice",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h F4:h | r:w | C4:h G4:h | r:w | C4:h F4:h | r:w | C4:h G4:h" } ],
  "show": ["keyboard"]
}
```

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
  "passScore": 0.75
}
```

```exercise
{
  "id": "e2",
  "type": "build-interval",
  "title": "Play a P4 or P5 up",
  "count": 10,
  "passScore": 0.75,
  "spec": { "intervals": ["P4", "P5"], "direction": "asc", "root": "random" }
}
```

## Anchor tunes

P4 and P5 are the most confused pair for beginners: both are open and plain. The most reliable tool is an [[anchor tune]] — a tune you know that starts with that interval:

- **P5** — "Twinkle, Twinkle" (*Twin-kle, twin-kle*): C … G.
- **P4** — "Here Comes the Bride" (*Here comes*): G … C.

```example
{
  "title": "Twinkle (opening) — perfect 5th",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q C4:q G4:q G4:q | A4:q A4:q G4:h" } ],
  "show": ["staff"]
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

**Try it** (keyboard, 4 minutes):

1. Play "Twinkle" from C: C C G G A A G. Then play only its first leap, C–G. That's the 5th.
2. Play "Here Comes the Bride": G3 C4 C4 C4. Then only G–C. That's the 4th.
3. From C, play C–F, then C–G. For each, run both tunes in your head starting on the C: does "Here comes" fit, or "Twin-kle, twin-kle"? (Humming helps some people; it's never required.)
4. Move to D (D–G, D–A) and to G (G–C, G–D). Same test with the tunes.
5. Notice where each lands. Going up, the 4th often sounds like *arriving* ("Here comes the **bride**" lands on home); the 5th like *lifting off*.

Be honest with yourself: P4 vs P5 is a classic that takes weeks. If the tunes don't "click" yet, use the keyboard.

**If you can't hear it yet:** play the first note, then **both candidates yourself** — 5 keys up (4th) and 7 keys up (5th) — then replay the question and pick the one that matched. Or find the second note by searching and count half steps: **5 = 4th, 7 = 5th**.

```exercise
{
  "id": "c1",
  "type": "listen",
  "title": "Check: 4th or 5th?",
  "instructions": "Replay freely; try the anchor tunes from the first note, or play both candidates on your keyboard.",
  "spec": {
    "examples": [
      { "title": "Pair 1", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "D4:h G4:h" } ] },
      { "title": "Pair 2", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "E4:h B4:h" } ] },
      { "title": "Pair 3", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "A3:h D4:h" } ] },
      { "title": "Pair 4", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "F4:h C5:h" } ] }
    ],
    "questions": [
      { "q": "Pair 1 is…", "choices": ["a perfect 4th", "a perfect 5th"], "answer": 0, "explain": "D–G: 5 half steps." },
      { "q": "Pair 2 is…", "choices": ["a perfect 4th", "a perfect 5th"], "answer": 1, "explain": "E–B: 7 half steps." },
      { "q": "Pair 3 is…", "choices": ["a perfect 4th", "a perfect 5th"], "answer": 0, "explain": "A–D: 5 half steps." },
      { "q": "Pair 4 is…", "choices": ["a perfect 4th", "a perfect 5th"], "answer": 1, "explain": "F–C: 7 half steps." }
    ]
  }
}
```

## Size first: 3rd, 4th or 5th

The second new rung puts last lesson's major 3rd next to both leaps. Here size helps most.

**Try it:** thumb on C, play C–E (finger 3), C–F (finger 4), C–G (finger 5), then in a mixed order: C–G, C–E, C–F. Feel how far the hand reaches; listen for the 3rd as a *skip* that still has a bright colour, the 4th and 5th as wider, plainer *leaps*. Then decide between the two leaps with the tunes, as above.

**If you can't hear it yet:** count half steps — **4, 5 or 7**.

```exercise
{
  "id": "c2",
  "type": "listen",
  "title": "Check: 3rd, 4th or 5th?",
  "instructions": "Size first: skip or leap? Then, for a leap, the anchor tunes.",
  "spec": {
    "examples": [
      { "title": "Pair 1", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:h E4:h" } ] },
      { "title": "Pair 2", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "G3:h D4:h" } ] },
      { "title": "Pair 3", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "E4:h A4:h" } ] }
    ],
    "questions": [
      { "q": "Pair 1 is…", "choices": ["major 3rd", "perfect 4th", "perfect 5th"], "answer": 0, "explain": "C–E: 4 half steps, a skip." },
      { "q": "Pair 2 is…", "choices": ["major 3rd", "perfect 4th", "perfect 5th"], "answer": 2, "explain": "G–D: 7 half steps (Twinkle)." },
      { "q": "Pair 3 is…", "choices": ["major 3rd", "perfect 4th", "perfect 5th"], "answer": 1, "explain": "E–A: 5 half steps (Here comes…)." }
    ]
  }
}
```

```exercise
{
  "id": "e10",
  "type": "build-interval",
  "title": "Mixed: M3, P4, P5",
  "count": 10,
  "passScore": 0.75,
  "spec": { "intervals": ["M3", "P4", "P5"], "direction": "asc", "root": "random" }
}
```

### Before the interval drill

This lesson opens "4th or 5th" and "3rd, 4th or 5th", but the drill runs at **your current interval rung** — possibly still the 2nds and 3rds from last lesson. Read the **How to do it** box above the drill: every interval rung uses the same routine with a different tool. For the leaps it's:

1. Play, replay once.
2. Size: skip or leap?
3. For a leap: start an anchor tune from the first note in your head — Bride or Twinkle?
4. Still unsure: play the first note and both candidates (5 and 7 keys up), replay, pick the match.

```ladder
{ "skill": "intervals", "unlocks": 5, "intro": "Opens \"4th or 5th\" and \"3rd, 4th or 5th\"; the drill runs at your current rung." }
```

A side note for later, no drill: a 4th plus a 5th from the same note add up to an octave (C–G–C). Played *together*, a 5th blends so smoothly that it can be mistaken for an octave; week 10 deals with that.

## Keyboard

```exercise
{
  "id": "e9",
  "type": "play-melody",
  "title": "Here Comes the Bride (opening)",
  "instructions": "Thumb on G3 for the pick-up note, then up a 4th to C4.",
  "passScore": 0.7,
  "spec": { "bpm": 66, "timeSig": "4/4", "key": "C", "seq": "r:h r:q G3:q | C4:q. C4:8 C4:h | r:h r:q G3:q | D4:q. B3:8 C4:h", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

## Between lessons

- **Two Practice sessions of about 10 minutes.**
- **Warm up 2 minutes at the keyboard:** play the openings of Twinkle and Here Comes the Bride from C, from D and from G. The anchors only work if they're quick to recall.
- **In the drills:** size first, anchor second, keyboard check third. Don't skip the keyboard check on the ones you're unsure about.
- **Ready?** Watch the interval bar on the Dashboard. P4 vs P5 staying unmastered for a week or two is normal — keep going with the lessons.
