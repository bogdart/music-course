---
id: w16-l2-relative-parallel-and-borrowed
title: Parallel Keys and Borrowed Chords
week: 16
order: 2
phase: p2
duration_min: 45
goals:
  - Tell relative keys (C major / A minor) from parallel keys (C major / C minor)
  - Play and hear the borrowed chords iv and bVII in a major key
  - Spot borrowed chords in roman-numeral analysis
prerequisites: [w16-l1-circle-of-fifths]
tags: [keys, borrowed-chords, harmony, ear]
songs:
  - { title: "Creep", composer: "Radiohead (1992)", public_domain: false }
  - { title: "Hey Jude", composer: "The Beatles (1968)", public_domain: false }
---

# Parallel Keys and Borrowed Chords

You know **relative** keys from week 9: C major and A minor share all their notes but have different homes. Today's pair is the opposite. **C major and C minor** share the same home, C, but different notes. They are [[parallel keys]].

```example
{
  "title": "C major, then C natural minor — same tonic, three notes lowered (E, A, B → Eb, Ab, Bb)",
  "bpm": 96, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 A4:8 B4:8 C5:8 | C5:w | C4:8 D4:8 Eb4:8 F4:8 G4:8 Ab4:8 Bb4:8 C5:8 | C5:w" } ],
  "show": ["keyboard", "staff"]
}
```

```exercise
{
  "id": "e1", "type": "ear-scale", "title": "Same tonic: major or minor?",
  "count": 8, "passScore": 0.8,
  "spec": { "scales": ["major", "natural-minor"], "play": "asc-desc" }
}
```

## Borrowing from the parallel minor

Because C major and C minor share a home, songwriters freely **borrow** chords from C minor while staying in C major. That's a [[borrowed chord]] (also called modal mixture). The chord still "points to" C as home, but brings a shadow of minor with it. The two most popular:

- **iv** — F minor (F Ab C) instead of F major. Bittersweet, nostalgic. Classic move: **IV → iv → I**, where A falls to Ab, then to G.
- **bVII** — Bb major (Bb D F). Bold, rock-ish, "anthem" sound. Classic move: **I → bVII → IV → I**.

```example
{
  "title": "I – IV – iv – I, then I – bVII – IV – I (in C)",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[E3 G3 C4]:w | [F3 A3 C4]:w | [F3 Ab3 C4]:w | [E3 G3 C4]:w | [E3 G3 C4]:w | [D3 F3 Bb3]:w | [C3 F3 A3]:w | [C3 E3 G3]:w" },
    { "instrument": "bass", "seq": "C2:w | F1:w | F1:w | C2:w | C2:w | Bb1:w | F1:w | C2:w" }
  ],
  "show": ["keyboard", "pianoroll"]
}
```

Two famous examples. Radiohead's *Creep* (1992, G major, about 92 BPM) loops **G – B – C – Cm**. The last chord is the borrowed iv; listen for the sinking feeling as C major turns minor under the vocal (the B major chord is a different kind of surprise — Phase 3 covers it). The long coda of the Beatles' *Hey Jude* (1968, F major) repeats **F – Eb – Bb – F**: I – bVII – IV – I, the anthem move, over and over.

```exercise
{
  "id": "e2", "type": "play-chord", "title": "IV → iv → I",
  "instructions": "Keep F and C held; only A moves down to Ab. Then resolve to C.",
  "count": 6, "passScore": 0.8,
  "spec": { "chords": ["C", "F", "Fm", "C"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

```exercise
{
  "id": "e3", "type": "play-chord", "title": "I → bVII → IV → I in C and G",
  "count": 8, "passScore": 0.8,
  "spec": { "chords": ["C", "Bb", "F", "C", "G", "F", "C", "G"], "inversion": "any", "sequence": true, "bpm": 66 }
}
```

```exercise
{
  "id": "e4", "type": "ear-progression", "title": "Major IV or borrowed iv?",
  "instructions": "The iv sounds like a cloud passing over. Listen for the one note that drops.",
  "count": 8, "passScore": 0.7,
  "spec": { "key": "C", "mode": "major", "length": 3, "chords": ["I", "IV", "iv", "V"], "style": "block" }
}
```

```exercise
{
  "id": "e5", "type": "ear-progression", "title": "Find the bVII",
  "instructions": "bVII is a major chord a whole step below home — strong and open, not tense like V.",
  "count": 8, "passScore": 0.7,
  "spec": { "key": "C", "mode": "major", "length": 4, "chords": ["I", "IV", "V", "bVII"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "e6", "type": "quiz", "title": "Relative, parallel, borrowed",
  "spec": { "questions": [
    { "q": "The parallel minor of G major is…", "choices": ["E minor", "G minor", "D minor", "B minor"], "answer": 1 },
    { "q": "The relative minor of G major is…", "choices": ["E minor", "G minor", "D minor", "B minor"], "answer": 0 },
    { "q": "In C major, the borrowed iv chord is…", "choices": ["F", "Fm", "Dm", "Ab"], "answer": 1 },
    { "q": "In G major, bVII is…", "choices": ["F#", "F", "Fm", "Em"], "answer": 1 },
    { "q": "Borrowed chords come from…", "choices": ["the relative minor", "the parallel minor", "the key a fifth up"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "e7", "type": "roman-analysis", "title": "Analyse with borrowed chords",
  "instructions": "Key: C major. Borrowed chords get their minor-key numeral: iv, bVII.",
  "count": 8, "passScore": 0.75,
  "spec": { "key": "C", "chords": ["C", "Bb", "F", "C", "F", "Fm", "C", "G"], "prompt": "symbols" }
}
```
