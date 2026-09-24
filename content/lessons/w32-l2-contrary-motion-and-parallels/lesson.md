---
id: w32-l2-contrary-motion-and-parallels
title: Contrary Motion and Parallels
week: 32
order: 2
phase: p4
duration_min: 40
goals:
  - Name the four kinds of motion between two voices
  - Find and fix parallel fifths and octaves
  - Write passing tones in a two-against-one line
prerequisites: [w32-l1-two-voice-writing]
tags: [counterpoint, voice-leading, composition]
---

# Contrary Motion and Parallels

Two voices can move in four ways relative to each other:

- **Parallel** — same direction, same interval (3rd → 3rd).
- **Similar** — same direction, different intervals.
- **Oblique** — one voice holds, the other moves.
- **Contrary** — opposite directions.

[[contrary motion]] is the most independent: the voices clearly sound like two people. Parallel motion in 3rds and 6ths is sweet and common (think of any vocal harmony). But parallel **fifths and octaves** are the one thing counterpoint forbids.

## Why parallel fifths are avoided

A perfect 5th is so blended that two voices moving in [[parallel fifths]] stop sounding like two voices — they merge into one thick line, like an organ stop. In pop and rock that's exactly what a power chord does, and it's great. But when your goal is *independent* lines — a counter-melody, a bass against a melody, string parts — parallels make the texture collapse. The same goes for parallel octaves and unisons.

```example
{
  "title": "Parallel fifths (bars 1–4), then the same top line with contrary motion (bars 5–8)",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "strings", "seq": "G4:w | A4:w | B4:w | C5:w | G4:w | A4:w | B4:w | C5:w |" },
    { "instrument": "piano", "seq": "C4:w | D4:w | E4:w | F4:w | E4:w | D4:w | G3:w | A3:w |" }
  ],
  "show": ["staff"]
}
```

In bars 5–8 the lower voice goes E–D–G–A under the rising G–A–B–C. Check the intervals: G/E is a 3rd, A/D a 5th, B/G a 3rd, C/A a 3rd. The fifth appears once, approached by contrary motion — perfectly fine.

## Two notes against one

Second species puts two half notes against each whole note. Beat 1 must be consonant; beat 3 may be a **passing tone** — a dissonance, as long as it moves by step between two consonances. This is how melodies get to move more freely.

```example
{
  "title": "Second species with passing tones",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "strings", "seq": "G3:h A3:h | B3:h C4:h | D4:h B3:h | C4:w |" },
    { "instrument": "piano", "seq": "C3:w | G2:w | G2:w | C3:w |" }
  ],
  "show": ["staff"]
}
```

## Drills

```exercise
{
  "id": "e1-listen-motion",
  "type": "listen",
  "title": "Which motion?",
  "passScore": 0.75,
  "spec": {
    "example": { "bpm": 72, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "strings", "seq": "E4:w | F4:w | G4:w | G4:w |" }, { "instrument": "piano", "seq": "C4:w | D4:w | E4:w | C4:w |" } ] },
    "questions": [
      { "q": "Bars 1–3: how do the voices move?", "choices": ["contrary", "parallel 3rds", "oblique", "parallel 5ths"], "answer": 1 },
      { "q": "Bar 3 → 4: upper holds G, lower drops E → C. This is…", "choices": ["contrary", "similar", "oblique", "parallel"], "answer": 2 }
    ]
  }
}
```

```exercise
{
  "id": "e2-parallel-quiz",
  "type": "quiz",
  "title": "Spot the problem",
  "passScore": 0.75,
  "spec": { "questions": [
    { "q": "Lower C→D, upper G→A. Problem?", "choices": ["none", "parallel 5ths", "parallel octaves", "voice crossing"], "answer": 1 },
    { "q": "Lower C→D, upper E→F. Problem?", "choices": ["none — parallel 3rds are fine", "parallel 5ths", "parallel octaves", "dissonance"], "answer": 0 },
    { "q": "Lower G→C, upper D→C (upper lands an octave above). Motion?", "choices": ["parallel", "contrary", "oblique", "similar"], "answer": 1 },
    { "q": "Why do power-chord riffs use parallel 5ths happily?", "choices": ["They are not meant to be independent lines — the fused sound is the point", "Rock ignores theory", "Guitars cannot play 3rds", "They are actually 4ths"], "answer": 0 }
  ] }
}
```

```exercise
{
  "id": "e3-play-contrary",
  "type": "play-melody",
  "title": "Hands in contrary motion",
  "instructions": "Both hands start on C (an octave apart) and move away from each other by step, then back.",
  "count": 6, "passScore": 0.8,
  "spec": { "bpm": 72, "timeSig": "4/4", "key": "C", "seq": "[C3 C4]:q [B2 D4]:q [A2 E4]:q [G2 F4]:q | [F2 G4]:q [G2 F4]:q [A2 E4]:q [B2 D4]:q | [C3 C4]:w |", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e4-play-second-species",
  "type": "play-melody",
  "title": "Play the second-species example",
  "count": 6, "passScore": 0.8,
  "spec": { "bpm": 72, "timeSig": "4/4", "key": "C", "seq": "G3:h A3:h | B3:h C4:h | D4:h B3:h | C4:w |", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "piano", "seq": "C3:w | G2:w | G2:w | C3:w |" } }
}
```

```exercise
{
  "id": "e5-ear-fifth-octave",
  "type": "ear-interval",
  "title": "Perfect intervals by ear",
  "count": 10, "passScore": 0.8,
  "spec": { "intervals": ["P4", "P5", "P8", "M6", "M3"], "direction": "harmonic", "root": "random", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e6-daw-fix-parallels",
  "type": "daw-task",
  "title": "Fix the parallels",
  "instructions": "Track 1 has a line full of parallel 5ths and octaves against the bass (track 2). Rewrite track 1 only: keep the rhythm (half notes), keep it in C major, and use contrary or oblique motion so no parallel 5ths or octaves remain.",
  "spec": {
    "template": { "bpm": 80, "key": "C", "timeSig": "4/4", "tracks": [ { "instrument": "strings", "seq": "G4:h A4:h | B4:h C5:h | G4:h F4:h | E4:h D4:h | C4:w |" }, { "instrument": "piano", "seq": "C3:h D3:h | E3:h F3:h | C3:h B2:h | A2:h G2:h | C3:w |" } ] },
    "task": "Remove all parallel 5ths/octaves from the upper line.",
    "checks": [
      { "kind": "no-parallel-fifths", "tracks": [0, 1] },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 0 },
      { "kind": "note-count", "min": 9, "max": 9, "track": 0 },
      { "kind": "ends-on", "degree": 1, "track": 0 }
    ],
    "minBars": 5, "maxBars": 5
  }
}
```
