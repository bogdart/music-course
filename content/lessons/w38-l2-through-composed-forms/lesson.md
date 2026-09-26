---
id: w38-l2-through-composed-forms
title: Through-Composed Forms
week: 38
order: 2
phase: p4
duration_min: 45
goals:
  - Distinguish sectional (repeat-based) forms from through-composed forms
  - Plan a piece as a tension arc instead of a sequence of sections
  - Follow one motif through a 16-bar through-composed miniature
prerequisites: [w38-l1-motif-development-techniques]
tags: [composition, form, development]
songs:
  - { title: "Erlkönig", composer: "Franz Schubert", public_domain: true }
  - { title: "Bohemian Rhapsody", artist: "Queen", public_domain: false }
---

# Through-Composed Forms

Pop forms are **sectional**: verse, chorus, verse, chorus — sections return. A [[through-composed]] piece keeps moving forward with little or no literal repetition: A B C D… Unity comes not from repeating sections but from **developing motifs**.

Schubert's song "Erlkönig" (1815, public domain) is the classic: a father rides through the night with his dying son, and the music never goes back — it follows the story, with a galloping piano ostinato holding it together. "Bohemian Rhapsody" (by reference) is a pop example: ballad → guitar solo → operatic section → hard rock → coda, with no chorus at all.

Film cues, game levels and many instrumental pieces are through-composed. You've actually been writing them since last week.

## Planning with an arc

Without choruses to lean on, you need a **tension arc**: where the piece starts, where it peaks, how it settles. A reliable shape:

1. **Statement** — present the motif clearly.
2. **Development** — sequence it, fragment it, move it to new keys or registers. Tension rises.
3. **Climax** — the highest, loudest, most intense point, around 2/3 of the way through.
4. **Resolution** — the motif returns *transformed* (augmented, reharmonised), not repeated literally.

```example
{
  "title": "A 16-bar through-composed miniature (original): statement → development → climax → transformed return",
  "bpm": 84,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "strings",
      "seq": "A4:8 B4:8 C5:q E5:h | D5:8 C5:8 B4:q A4:h | C5:8 D5:8 E5:q G5:h | F5:8 E5:8 D5:q C5:h | E5:8 D5:8 C5:q A4:h | E5:8 D5:8 C5:q A4:h | C5:8 D5:8 E5:8 C5:8 D5:8 E5:8 F5:8 D5:8 | E5:8 F5:8 G5:8 E5:8 F5:8 G5:8 A5:8 B5:8 | C6:w | B5:h G#5:h | A5:q G5:q F5:q E5:q | D5:h. C5:q | A4:q B4:q C5:h | E5:w | D5:8 C5:8 B4:q G#4:h | A4:w |"
    },
    {
      "instrument": "pad",
      "seq": "[A2 E3]:w | [F2 C3]:w | [C3 G3]:w | [D3 A3]:w | [A2 E3]:w | [F2 C3]:w | [C3 G3]:w | [E3 B3]:w | [A2 E3]:w | [E2 B2]:w | [D3 A3]:w | [G2 D3]:w | [A2 E3]:w | [C3 G3]:w | [E2 B2]:w | [A2 E3]:w |"
    }
  ],
  "show": [
    "staff"
  ]
}
```

Follow the motif A–B–C–E: stated (bar 1), sequenced up (bar 3), inverted (bars 5–6), fragmented and climbing (bars 7–8), exploding at C6 (bar 9), then returning in augmentation (bars 13–14) before the cadence.

## Drills

```exercise
{
  "id": "e1-play-return",
  "type": "play-melody",
  "title": "Play the statement and the augmented return",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "bpm": 80,
    "timeSig": "4/4",
    "key": "C",
    "seq": "A4:8 B4:8 C5:q E5:h | D5:8 C5:8 B4:q A4:h | A4:q B4:q C5:h | E5:w | D5:8 C5:8 B4:q G#4:h | A4:w |",
    "showStaff": true,
    "showKeyboard": true,
    "countIn": 1
  }
}
```

```exercise
{
  "id": "e2-listen-arc",
  "type": "listen",
  "title": "Find the climax",
  "passScore": 0.75,
  "spec": {
    "example": {
      "bpm": 84,
      "timeSig": "4/4",
      "key": "C",
      "tracks": [
        {
          "instrument": "strings",
          "seq": "A4:8 B4:8 C5:q E5:h | D5:8 C5:8 B4:q A4:h | C5:8 D5:8 E5:q G5:h | F5:8 E5:8 D5:q C5:h | E5:8 D5:8 C5:q A4:h | E5:8 D5:8 C5:q A4:h | C5:8 D5:8 E5:8 C5:8 D5:8 E5:8 F5:8 D5:8 | E5:8 F5:8 G5:8 E5:8 F5:8 G5:8 A5:8 B5:8 | C6:w | B5:h G#5:h | A5:q G5:q F5:q E5:q | D5:h. C5:q | A4:q B4:q C5:h | E5:w | D5:8 C5:8 B4:q G#4:h | A4:w |"
        },
        {
          "instrument": "pad",
          "seq": "[A2 E3]:w | [F2 C3]:w | [C3 G3]:w | [D3 A3]:w | [A2 E3]:w | [F2 C3]:w | [C3 G3]:w | [E3 B3]:w | [A2 E3]:w | [E2 B2]:w | [D3 A3]:w | [G2 D3]:w | [A2 E3]:w | [C3 G3]:w | [E2 B2]:w | [A2 E3]:w |"
        }
      ]
    },
    "questions": [
      {
        "q": "Where is the climax?",
        "choices": [
          "bar 1",
          "around bar 9",
          "bar 16",
          "there is none"
        ],
        "answer": 1
      },
      {
        "q": "Does any 4-bar section repeat literally?",
        "choices": [
          "yes",
          "no"
        ],
        "answer": 1
      }
    ]
  }
}
```

```exercise
{
  "id": "e3-form-quiz",
  "type": "quiz",
  "title": "Sectional or through-composed?",
  "passScore": 0.75,
  "spec": {
    "questions": [
      {
        "q": "Verse–chorus–verse–chorus–bridge–chorus is…",
        "choices": [
          "sectional",
          "through-composed"
        ],
        "answer": 0
      },
      {
        "q": "A 60-second film cue following a scene from calm to chase to crash is usually…",
        "choices": [
          "sectional",
          "through-composed"
        ],
        "answer": 1
      },
      {
        "q": "Without repeated sections, what gives a through-composed piece unity?",
        "choices": [
          "a constant tempo only",
          "developing motifs",
          "lots of different melodies",
          "loud dynamics"
        ],
        "answer": 1
      },
      {
        "q": "In a typical arc, the climax falls about…",
        "choices": [
          "at the start",
          "halfway",
          "two-thirds of the way through",
          "in the last bar"
        ],
        "answer": 2
      }
    ]
  }
}
```

```exercise
{
  "id": "e4-ear-harmonic-minor",
  "type": "ear-scale",
  "title": "Minor-key colours",
  "count": 8,
  "passScore": 0.75,
  "spec": {
    "scales": [
      "natural-minor",
      "harmonic-minor",
      "melodic-minor",
      "dorian"
    ],
    "play": "asc-desc"
  }
}
```

```exercise
{
  "id": "e5-ear-prog",
  "type": "ear-progression",
  "title": "Minor progressions with V7",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "key": "random",
    "mode": "minor",
    "length": 4,
    "chords": [
      "i",
      "iv",
      "V7",
      "bVI",
      "bIII",
      "bVII"
    ],
    "style": "pad-bass"
  }
}
```

```exercise
{
  "id": "e6-daw-arc",
  "type": "daw-task",
  "title": "Plan and write an arc",
  "instructions": "Write a 12-bar through-composed miniature from a new motif: statement (bars 1–2), development (3–7), climax (around bar 8, your highest note), transformed return (9–12). No 2-bar block may repeat literally.",
  "spec": {
    "template": {
      "bpm": 84,
      "key": "C",
      "timeSig": "4/4",
      "tracks": [
        {
          "instrument": "strings",
          "seq": ""
        },
        {
          "instrument": "pad",
          "seq": ""
        }
      ]
    },
    "task": "12-bar through-composed miniature with a clear arc.",
    "checks": [
      {
        "kind": "bars",
        "min": 12,
        "max": 12
      },
      {
        "kind": "contour",
        "shape": "arch",
        "track": 0
      },
      {
        "kind": "repetition",
        "motifBars": 1,
        "minRepeats": 2,
        "allowTransposed": true,
        "track": 0
      },
      {
        "kind": "note-count",
        "min": 24,
        "track": 0
      },
      {
        "kind": "custom",
        "id": "no-literal-repeat",
        "note": "Self-check: no 2-bar block is copied unchanged."
      }
    ],
    "minBars": 12,
    "maxBars": 12
  }
}
```
