---
id: w05-l1-seconds-and-thirds
title: Intervals I — Seconds and Thirds
week: 5
order: 1
phase: p1
duration_min: 45
goals:
  - Understand what an interval is and how its number is counted
  - Build and play major and minor 2nds and 3rds
  - Hear a step vs a skip (M2 vs M3), then a minor vs a major 3rd
prerequisites: [w04-l3-reading-rhythm-and-treble-clef]
tags: [intervals, ear, keyboard]
songs:
  - { title: "When the Saints Go Marching In", composer: "Traditional", public_domain: true }
  - { title: "Frère Jacques", composer: "Traditional", public_domain: true }
---

# Intervals: the distance between two notes

An [[interval]] is the distance between two notes. Melodies are chains of intervals, and chords (week 6) are stacks of them. You already know two: the half step and the whole step. Today they get their proper names, and we add the next size up.

## Counting the number

An interval's **number** counts **letter names**, including both ends:

- C → D: C, D = **2** letters → a **2nd**
- C → E: C, D, E = **3** letters → a **3rd**
- E → G: E, F, G → also a **3rd**

That's why 2nds are steps and 3rds skip one letter.

```example
{
  "title": "A step (C–D, a 2nd), then a skip (C–E, a 3rd), twice",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h D4:h | r:w | C4:h E4:h | r:w | C4:h D4:h | r:w | C4:h E4:h" } ],
  "show": ["keyboard"]
}
```

A 2nd sounds like the melody **moves on** to the next note; a 3rd sounds like it **skips over** one. Anchor them to tunes you've played:

- **M2** — "Frère Jacques" (*Frè-re*): degrees 1 → 2.
- **M3** — "When the Saints Go Marching In" (*Oh when*): degrees 1 → 3.

```example
{
  "title": "When the Saints (opening) — the first leap, C–E, is a 3rd",
  "bpm": 110, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "r:q C4:q E4:q F4:q | G4:w | r:q C4:q E4:q F4:q | G4:w | r:q C4:q E4:q F4:q | G4:h E4:h | C4:h E4:h | D4:w" } ],
  "show": ["staff"]
}
```

## Major or minor: the size

Two 3rds can have the same number but a different number of half steps. That's the **quality**:

| Interval | App label | Half steps | Example |
|---|---|---|---|
| minor 2nd | m2 | 1 | E–F |
| major 2nd | M2 | 2 | C–D |
| minor 3rd | m3 | 3 | E–G |
| major 3rd | M3 | 4 | C–E |

So your "half step" is a minor 2nd, your "whole step" a major 2nd. A minor 3rd is one half step narrower than a major 3rd. Many people hear the major 3rd as **brighter** and the minor 3rd as **darker, softer** — listen from the same note:

```example
{
  "title": "Major 3rd vs minor 3rd: C–E, C–E♭, then E–G♯, E–G",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h E4:h | C4:h Eb4:h | r:w | E4:h G#4:h | E4:h G4:h" } ],
  "show": ["keyboard"]
}
```

**Size first, then quality.** Decide step or skip first; only then bright or dark. This lesson opens two interval rungs in that order — M2 vs M3, then m3 vs M3 — and the drill below runs at your current rung (half vs whole step until that is solid).

```ladder
{ "skill": "intervals", "unlocks": 3, "intro": "Opens \"Whole step or major 3rd\" and \"Minor or major 3rd\"; the drill runs at your current rung." }
```

## Degree 5 in the degree drill

Last week you met sol (5) in melodies. This lesson opens the single-note rung with 5 in it: after the home run, which degree, 1 to 5? You'll meet it once 1–4 is solid; until then the drill stays at your current rung. Remember the home run turns round on 5 — it's the highest note of the run.

```example
{
  "title": "Home run, then 5 and 3 — two notes that often get mixed up",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | G4:w | r:w | E4:w" } ],
  "show": ["keyboard"]
}
```

```ladder
{ "skill": "degrees", "unlocks": 5, "intro": "Opens degrees 1 to 5 after the home run; the drill runs at your current rung." }
```

## Drills

```exercise
{
  "id": "e1",
  "type": "quiz-input",
  "title": "Count the interval",
  "spec": { "questions": [
    { "q": "How many half steps in a major 3rd?", "answer": ["4"], "kind": "number" },
    { "q": "How many half steps in a minor 3rd?", "answer": ["3"], "kind": "number" },
    { "q": "A major 3rd above C is…", "answer": ["E"], "kind": "note" },
    { "q": "A minor 3rd above A is…", "answer": ["C"], "kind": "note" },
    { "q": "A major 2nd above F is…", "answer": ["G"], "kind": "note" },
    { "q": "A major 3rd above F is…", "answer": ["A"], "kind": "note" },
    { "q": "A minor 3rd above D is…", "answer": ["F"], "kind": "note" }
  ] },
  "passScore": 0.75
}
```

```exercise
{
  "id": "e2",
  "type": "build-interval",
  "title": "Play a M2 or M3 up",
  "count": 10,
  "passScore": 0.75,
  "spec": { "intervals": ["M2", "M3"], "direction": "asc", "root": "random" },
  "hints": ["M2 = 2 half steps, M3 = 4 half steps. Count every key."]
}
```

```exercise
{
  "id": "e4",
  "type": "build-interval",
  "title": "Play a m3 or M3 up",
  "count": 10,
  "passScore": 0.75,
  "spec": { "intervals": ["m3", "M3"], "direction": "asc", "root": "random" }
}
```

```exercise
{
  "id": "e6",
  "type": "play-melody",
  "title": "When the Saints",
  "passScore": 0.75,
  "spec": { "bpm": 100, "timeSig": "4/4", "key": "C", "seq": "r:q C4:q E4:q F4:q | G4:w | r:q C4:q E4:q F4:q | G4:w | r:q C4:q E4:q F4:q | G4:h E4:h | C4:h E4:h | D4:w", "showStaff": true, "showKeyboard": false, "countIn": 1 }
}
```
