---
id: w05-l2-fourths-and-fifths
title: Intervals I — Fourths and Fifths
week: 5
order: 2
phase: p1
duration_min: 45
goals:
  - Build and play perfect 4ths and perfect 5ths
  - Tell P4 and P5 apart by ear using anchor tunes
  - Play the opening of "Here Comes the Bride"
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

Your hand already knows the 5th: thumb to little finger in five-finger position.

```example
{
  "title": "P4 (C–F), then P5 (C–G), twice",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h F4:h | r:w | C4:h G4:h | r:w | C4:h F4:h | r:w | C4:h G4:h" } ],
  "show": ["keyboard"]
}
```

## Anchor tunes

- **P5** — "Twinkle, Twinkle" (*Twin-kle, twin-kle*): C … G. You've played it.
- **P4** — "Here Comes the Bride" (*Here comes*): G … C. You'll play it below.

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

## Telling them apart

P4 and P5 are the most confused pair for beginners: both are open and plain. Two differences help:

1. **Size.** The 5th is two half steps wider. Play both from the same note and notice how much further the 5th reaches.
2. **Where it lands.** In these anchors, the 4th going up often sounds like *arriving* — "Here comes the **bride**" lands on home. The 5th going up sounds like *lifting off*, from home up to sol.

Don't expect this to be easy right away; P4 vs P5 is a classic that takes weeks. This lesson opens exactly this pair as a rung of its own, and then one more: **3rd, 4th or 5th** — the major 3rd from last lesson against both leaps. Size helps most there: a 3rd is a skip (C to E), the 4th and 5th are real leaps (C to F, C to G). The drill below runs at your current interval rung; you'll meet these once the 2nds and 3rds are solid.

```ladder
{ "skill": "intervals", "unlocks": 5, "intro": "Opens \"4th or 5th\" and \"3rd, 4th or 5th\"; the drill runs at your current rung." }
```

A side note for later, no drill: a 4th up plus a 5th up from the same note add up to an octave (C–F–C, or C–G–C). And when a 5th is played *together*, it blends smoothly enough to be confused with an octave. Week 10 is about exactly that.

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
