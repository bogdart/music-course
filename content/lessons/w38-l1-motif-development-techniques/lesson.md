---
id: w38-l1-motif-development-techniques
title: Motif Development Techniques
week: 38
order: 1
phase: p4
duration_min: 45
goals:
  - Transform a motif by sequence, inversion and retrograde
  - Transform its rhythm by augmentation, diminution and fragmentation
  - Recognise which technique was used by ear
prerequisites: [w37-l3-sixty-second-cue-daw, w18-l1-motif-repetition-variation]
tags: [composition, motif, development, form]
songs:
  - { title: "Symphony No. 5 in C minor, 1st movement", composer: "Ludwig van Beethoven", public_domain: true }
---

# Motif Development Techniques

In Phase 3 you learned repetition and variation. Composers like Beethoven went much further: they built entire movements from a few notes by **developing** them. The opening of his Fifth Symphony (1808, public domain) is four notes — short-short-short-long — and the whole first movement grows from that cell.

```example
{
  "title": "Beethoven — Symphony No. 5, opening motif (public domain)",
  "bpm": 108,
  "timeSig": "2/4",
  "key": "Eb",
  "tracks": [
    {
      "instrument": "strings",
      "seq": "r:8 G4:8 G4:8 G4:8 | Eb4:h | r:8 F4:8 F4:8 F4:8 | D4:h~ | D4:h |"
    }
  ],
  "show": [
    "staff"
  ]
}
```

Notice he immediately *sequences* it: the same shape a step lower (F F F D). That's development already.

## Pitch techniques

Our original motif: C–D–E–G, rhythm 8-8-q-h.

- **Sequence** — the same shape moved to another pitch level (up a step: D–E–F–A).
- **Inversion** — flip the direction of every interval: up a step becomes down a step (C–B–A–F).
- **Retrograde** — play it backwards (G–E–D–C).

```example
{
  "title": "Motif → sequence → inversion → retrograde",
  "bpm": 90,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "piano",
      "seq": "C4:8 D4:8 E4:q G4:h | D4:8 E4:8 F4:q A4:h | C5:8 B4:8 A4:q F4:h | G4:h E4:q D4:8 C4:8 |"
    }
  ],
  "show": [
    "staff"
  ]
}
```

## Rhythm techniques

- **Augmentation** — every value doubled: grand, slow, often in the bass.
- **Diminution** — every value halved: urgent, busy.
- **Fragmentation** — keep only part of the motif (say, the first three notes) and work that fragment hard, often in sequence. Great for building tension toward a climax.

```example
{
  "title": "Augmentation → diminution → fragmentation in sequence",
  "bpm": 90,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "piano",
      "seq": "C4:q D4:q E4:h | G4:w | C4:16 D4:16 E4:8 G4:q C4:16 D4:16 E4:8 G4:q | C4:8 D4:8 E4:q D4:8 E4:8 F4:q | E4:8 F4:8 G4:q G4:h |"
    }
  ],
  "show": [
    "staff"
  ]
}
```

The listener hears the family resemblance each time. That is how a piece can feel both *new* and *unified* for minutes on end.

Practical tip: when you develop, change **one dimension at a time** at first — pitch *or* rhythm — so the link to the original stays audible. Later you can combine them (an inverted fragment in diminution), but only once the listener knows the motif well.

## Drills

```exercise
{
  "id": "e1-play-transforms",
  "type": "play-melody",
  "title": "Play all four pitch versions",
  "count": 6,
  "passScore": 0.8,
  "spec": {
    "bpm": 80,
    "timeSig": "4/4",
    "key": "C",
    "seq": "C4:8 D4:8 E4:q G4:h | D4:8 E4:8 F4:q A4:h | C5:8 B4:8 A4:q F4:h | G4:h E4:q D4:8 C4:8 |",
    "showStaff": true,
    "showKeyboard": true,
    "countIn": 1
  }
}
```

```exercise
{
  "id": "e2-invert",
  "type": "quiz-input",
  "title": "Invert it yourself (diatonic, C major)",
  "passScore": 0.75,
  "spec": {
    "questions": [
      {
        "q": "Motif E–F–G (step up, step up). Inversion starting on E: second note?",
        "answer": [
          "D"
        ],
        "kind": "note"
      },
      {
        "q": "…third note?",
        "answer": [
          "C"
        ],
        "kind": "note"
      },
      {
        "q": "Motif G–C (up a 4th). Inversion starting on G: second note?",
        "answer": [
          "D"
        ],
        "kind": "note"
      },
      {
        "q": "Retrograde of C–E–G–A: first note?",
        "answer": [
          "A"
        ],
        "kind": "note"
      }
    ]
  }
}
```

```exercise
{
  "id": "e3-listen-technique",
  "type": "listen",
  "title": "Which technique?",
  "passScore": 0.75,
  "spec": {
    "example": {
      "bpm": 90,
      "timeSig": "4/4",
      "key": "C",
      "tracks": [
        {
          "instrument": "piano",
          "seq": "C4:8 D4:8 E4:q G4:h | C4:q D4:q E4:h | G4:w |"
        }
      ]
    },
    "questions": [
      {
        "q": "Bars 2–3 are the motif in…",
        "choices": [
          "inversion",
          "retrograde",
          "augmentation",
          "diminution"
        ],
        "answer": 2
      }
    ]
  }
}
```

```exercise
{
  "id": "e4-ear-interval",
  "type": "ear-interval",
  "title": "Intervals keep their size when inverted",
  "count": 10,
  "passScore": 0.75,
  "spec": {
    "intervals": [
      "M2",
      "m3",
      "M3",
      "P4",
      "P5"
    ],
    "direction": "mixed",
    "root": "random",
    "range": [
      "C3",
      "C5"
    ]
  }
}
```

```exercise
{
  "id": "e5-ear-melody",
  "type": "ear-melody",
  "title": "Motif dictation",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "key": "C",
    "degrees": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "length": 4,
    "rhythm": "simple",
    "answer": "play"
  }
}
```

```exercise
{
  "id": "e6-daw-develop",
  "type": "daw-task",
  "title": "Four transformations",
  "instructions": "Write your own 1-bar motif in bar 1. Then bars 2–8: at least one sequence, one inversion, one augmentation and one fragmentation. Label them in your head as you go.",
  "spec": {
    "template": {
      "bpm": 90,
      "key": "C",
      "timeSig": "4/4",
      "tracks": [
        {
          "instrument": "piano",
          "seq": ""
        }
      ]
    },
    "task": "8 bars developing a 1-bar motif with four techniques.",
    "checks": [
      {
        "kind": "bars",
        "min": 8,
        "max": 8
      },
      {
        "kind": "in-key",
        "key": "C",
        "scale": "major",
        "allowPassing": true
      },
      {
        "kind": "repetition",
        "motifBars": 1,
        "minRepeats": 2,
        "allowTransposed": true
      },
      {
        "kind": "uses-rhythm",
        "values": [
          "8",
          "q",
          "h",
          "w",
          "16"
        ],
        "minDistinct": 3
      },
      {
        "kind": "custom",
        "id": "four-techniques",
        "note": "Self-check: sequence, inversion, augmentation and fragmentation each appear."
      }
    ],
    "minBars": 8,
    "maxBars": 8
  }
}
```
