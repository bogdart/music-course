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
  - Hear the difference between a 2nd and a 3rd (M2 vs M3), then add minor versions
prerequisites: [w04-l3-reading-rhythm-and-treble-clef]
tags: [intervals, ear, keyboard]
songs:
  - { title: "When the Saints Go Marching In", composer: "Traditional", public_domain: true }
  - { title: "Wiegenlied (Lullaby), Op. 49 No. 4", composer: "Johannes Brahms", public_domain: true }
---

# Intervals: the distance between two notes

An [[interval]] is the distance between two notes. It's the most useful unit in all of music: melodies are chains of intervals, chords are stacks of them, and "hearing music" largely means recognising them. You already know two: the half step and the whole step. Today they get their proper names, and we add the next size up.

## Counting the number

An interval's **number** counts **letter names**, including both ends:

- C → D: C, D = **2** letters → a **2nd**
- C → E: C, D, E = **3** letters → a **3rd**
- E → G: E, F, G → also a **3rd**

That's why 2nds are steps and 3rds skip one letter: on the staff, a 3rd goes line-to-line or space-to-space.

## Major or minor: the size

Two 3rds can have the same number but a different number of half steps. That's the **quality**:

| Interval | App label | Half steps | Example |
|---|---|---|---|
| minor 2nd | m2 | 1 | E–F |
| major 2nd | M2 | 2 | C–D |
| minor 3rd | m3 | 3 | E–G |
| major 3rd | M3 | 4 | C–E |

So your "half step" is a minor 2nd, your "whole step" a major 2nd.

## Hearing them: anchor songs

Tie each interval to the opening of a song you know. When you hear an interval, sing it and ask "which song starts like this?"

- **M2** — "Frère Jacques" (*Frè-re*): degrees 1 → 2.
- **M3** — "When the Saints Go Marching In" (*Oh when*): degrees 1 → 3. Bright, sunny.
- **m3** — Brahms' "Lullaby" (*Lul-la-by*). Softer, a little sad.
- **m2** — the tight squeeze you know from week 2.

```example
{
  "title": "M2 (C–D) then M3 (C–E), each twice",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h D4:h | r:w | C4:h E4:h | r:w | C4:h D4:h | r:w | C4:h E4:h" } ],
  "show": ["keyboard"]
}
```

```example
{
  "title": "When the Saints (opening) — listen for the major 3rd",
  "bpm": 110, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "r:q C4:q E4:q F4:q | G4:w | r:q C4:q E4:q F4:q | G4:w | r:q C4:q E4:q F4:q | G4:h E4:h | C4:h E4:h | D4:w" } ],
  "show": ["staff"]
}
```

```example
{
  "title": "Major 3rd vs minor 3rd from the same note",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h E4:h | C4:h Eb4:h | E4:h G#4:h | E4:h G4:h" } ],
  "show": ["keyboard"]
}
```

**Size first, then quality.** A 2nd is a step — your voice barely moves. A 3rd is a skip. Decide that first; only then decide major (brighter, wider) vs minor (darker, narrower).

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
  "passScore": 0.8
}
```

```exercise
{
  "id": "e2",
  "type": "build-interval",
  "title": "Play a M2 or M3 up",
  "count": 10,
  "passScore": 0.8,
  "spec": { "intervals": ["M2", "M3"], "direction": "asc", "root": "random" },
  "hints": ["M2 = 2 half steps, M3 = 4 half steps. Count every key."]
}
```

```exercise
{
  "id": "e3",
  "type": "ear-interval",
  "title": "Step or skip? (M2 vs M3)",
  "instructions": "Frère Jacques (M2) or When the Saints (M3)?",
  "count": 10,
  "passScore": 0.8,
  "spec": { "intervals": ["M2", "M3"], "direction": "asc", "root": "random", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e4",
  "type": "build-interval",
  "title": "Play a m3 or M3 up",
  "count": 10,
  "passScore": 0.8,
  "spec": { "intervals": ["m3", "M3"], "direction": "asc", "root": "random" }
}
```

```exercise
{
  "id": "e5",
  "type": "ear-interval",
  "title": "All four: m2, M2, m3, M3",
  "instructions": "Decide step or skip first, then narrow or wide.",
  "count": 12,
  "passScore": 0.7,
  "spec": { "intervals": ["m2", "M2", "m3", "M3"], "direction": "asc", "root": "random", "range": ["C3", "C5"] }
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

```exercise
{
  "id": "e7",
  "type": "ear-note",
  "title": "Degrees 1–5 (review)",
  "count": 10,
  "passScore": 0.75,
  "spec": { "key": "C", "mode": "major", "degrees": [1, 2, 3, 4, 5], "reference": "cadence", "octaves": [3, 4], "instrument": "piano" }
}
```
