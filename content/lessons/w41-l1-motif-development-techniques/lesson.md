---
id: w41-l1-motif-development-techniques
title: Motif Development Techniques
week: 41
order: 1
phase: p4
duration_min: 45
goals:
  - Turn a motif upside down (inversion)
  - Stretch or squeeze its rhythm (augmentation, diminution) and cut it into fragments
  - Recognise the technique by its sound — the shape and the speed
prerequisites: [w40-l3-sixty-second-cue-daw, w21-l1-motif-repetition-variation]
tags: [composition, motif, development, form]
songs:
  - { title: "Symphony No. 5 in C minor, 1st movement", composer: "Ludwig van Beethoven", public_domain: true }
---

# Motif Development Techniques

In week 21 you grew phrases from a [[motif]] with repetition, changed endings and [[melodic sequence]] (the same shape from another note). Composers like Beethoven went much further: they built whole movements from a few notes by **developing** them. The opening of his Fifth Symphony (1808, public domain) is four notes — short-short-short-long — and the whole first movement grows from that cell. He sequences it straight away: G G G E♭, then F F F D.

```example
{
  "title": "Beethoven — Symphony No. 5, opening motif (public domain)",
  "bpm": 108, "timeSig": "2/4", "key": "Cm",
  "tracks": [ { "instrument": "strings", "seq": "r:8 G4:8 G4:8 G4:8 | Eb4:h | r:8 F4:8 F4:8 F4:8 | D4:h~ | D4:h |" } ],
  "show": ["staff"]
}
```

Today: three new ways to change a motif while keeping it recognisable.

## 1. Inversion — turn it upside down

Our motif: C–D–E–G (up a step, up a step, up a 3rd), rhythm 8-8-q-h. [[Melodic inversion]] flips every direction: up a step becomes down a step. Starting on C5: C–B–A–F. In a key we keep to the scale's notes, so the steps may be half or whole — the *shape* is what matters. What you will hear: the same rhythm, the line going the other way.

(Related word: [[retrograde]] = the motif played backwards, G–E–D–C. Composers use it, but honestly, listeners almost never recognise a motif backwards — treat it as a hidden trick, not a signal.)

```example
{
  "title": "Motif → sequence (up a step) → inversion → retrograde",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:q G4:h | D4:8 E4:8 F4:q A4:h | C5:8 B4:8 A4:q F4:h | G4:h E4:q D4:8 C4:8 |" } ],
  "show": ["staff"]
}
```

## 2. Augmentation and diminution — stretch or squeeze

- [[Augmentation]] — every note value doubled: grand and slow, often in the bass.
- [[Diminution]] — every value halved: urgent and busy.

Same notes, same shape — only the speed changes, which is the easiest of all changes to hear.

## 3. Fragmentation — keep a piece

[[Fragmentation]] keeps only part of the motif (say, its first three notes) and works that fragment hard, often in sequence. It is the classic way to build tension toward a climax: the phrases get shorter and come faster.

```example
{
  "title": "Augmentation (bars 1–2) → diminution (bar 3) → fragment C–D–E in rising sequence (bars 4–5)",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:h | G4:w | C4:16 D4:16 E4:8 G4:q C4:16 D4:16 E4:8 G4:q | C4:8 D4:8 E4:q D4:8 E4:8 F4:q | E4:8 F4:8 G4:q G4:h |" } ],
  "show": ["staff"]
}
```

Tip: change **one dimension at a time** — pitch *or* rhythm — so the link to the original stays audible.

## Play and work it out

```exercise
{
  "id": "e1-play-transforms",
  "type": "play-melody",
  "title": "Play the motif, its sequence, inversion and retrograde",
  "passScore": 0.7,
  "spec": {
    "bpm": 80, "timeSig": "4/4", "key": "C",
    "seq": "C4:8 D4:8 E4:q G4:h | D4:8 E4:8 F4:q A4:h | C5:8 B4:8 A4:q F4:h | G4:h E4:q D4:8 C4:8 |",
    "showStaff": true, "showKeyboard": true, "countIn": 1
  }
}
```

```exercise
{
  "id": "e2-invert",
  "type": "quiz-input",
  "title": "Invert it yourself (C major notes only)",
  "passScore": 0.7,
  "spec": {
    "questions": [
      { "q": "Motif E–F–G (step up, step up). Inversion starting on E: second note?", "answer": ["D"], "kind": "note" },
      { "q": "…and the third note?", "answer": ["C"], "kind": "note" },
      { "q": "Motif G–C (up a 4th). Inversion starting on G: second note?", "answer": ["D"], "kind": "note" },
      { "q": "Retrograde of C–E–G–A: first note?", "answer": ["A"], "kind": "note" }
    ]
  }
}
```

```exercise
{
  "id": "e3-listen-technique",
  "type": "listen",
  "title": "Which technique?",
  "instructions": "Each example plays the motif C–D–E–G first, then one transformation. Listen for two things only: does the line go the other way, and is it slower, faster or shorter?",
  "passScore": 0.7,
  "spec": {
    "examples": [
      { "title": "Example A", "bpm": 90, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:q G4:h | C4:q D4:q E4:h | G4:w |" } ] },
      { "title": "Example B", "bpm": 90, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:q G4:h | C5:8 B4:8 A4:q F4:h |" } ] },
      { "title": "Example C", "bpm": 90, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:q G4:h | C4:8 D4:8 E4:q D4:8 E4:8 F4:q | E4:8 F4:8 G4:q r:h |" } ] }
    ],
    "questions": [
      { "q": "Example A: after the motif, it is…", "choices": ["inverted", "augmented (slower)", "diminished (faster)", "fragmented"], "answer": 1 },
      { "q": "Example B: after the motif, it is…", "choices": ["inverted", "augmented (slower)", "diminished (faster)", "fragmented"], "answer": 0 },
      { "q": "Example C: after the motif, it is…", "choices": ["inverted", "augmented (slower)", "diminished (faster)", "fragmented"], "answer": 3 }
    ]
  }
}
```

## Ear

Intervals: sort by size first (step, skip, leap), then colour or anchor tune, then count keys on the keyboard to check. Melody play-back: before touching keys, replay and say the directions ("up, up, down"), find the first note by searching, then follow the path. The *How to do it* box under each drill shows the exact method for your current rung.

```ladder
{ "skill": "intervals", "unlocks": 21, "intro": "An inversion keeps each move's rough size (a step stays a step, a leap stays a leap) but flips its direction — interval practice at your current rung." }
```

```ladder
{ "skill": "melody", "unlocks": 23, "intro": "Remembering a motif is melody memory — play-back at your current rung." }
```

## Make it

1. Play bar 1 of the exercise above (C–D–E–G) until it is in your fingers; or write your own 1-bar motif with one leap in it — leaps survive transformation more audibly than steps.
2. Bar 2: the sequence (same shape, start one note higher). Bar 3: the inversion (flip each direction). Bars 4–5: augmentation (copy bar 1, double every length). Bars 6–8: fragmentation (the first 2–3 notes, repeated climbing, then a long last note).
3. **Check by ear:** play bar 1, then each other bar. Can you still hear bar 1 in it? If a bar sounds like a new tune, you changed two things at once — undo one (keep the rhythm *or* the shape).
4. Stuck on the inversion? Play the motif on the keyboard, then play the same number of keys going the other way.

```exercise
{
  "id": "e4-daw-develop",
  "type": "daw-task",
  "title": "Four transformations",
  "instructions": "Write your own 1-bar motif in bar 1. Then in bars 2–8 use at least: one sequence, one inversion, one augmentation and one fragmentation. Say to yourself which one each bar is.",
  "spec": {
    "template": { "bpm": 90, "key": "C", "timeSig": "4/4", "tracks": [ { "instrument": "piano", "seq": "" } ] },
    "task": "8 bars developing a 1-bar motif with four techniques.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": true },
      { "kind": "repetition", "motifBars": 1, "minRepeats": 2, "allowTransposed": true },
      { "kind": "uses-rhythm", "values": ["16", "8", "q", "h", "w"], "minDistinct": 3 },
      { "kind": "custom", "id": "four-techniques", "note": "Self-check: sequence, inversion, augmentation and fragmentation each appear." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

## Between lessons

Pick any tune you know (a jingle, a folk song) and play its first four notes inverted and augmented on the keyboard. Two minutes of the ladder drills on the Practice page.
