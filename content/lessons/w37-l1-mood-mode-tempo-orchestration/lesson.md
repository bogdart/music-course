---
id: w37-l1-mood-mode-tempo-orchestration
title: Mood — Mode, Tempo, Orchestration
week: 37
order: 1
phase: p4
duration_min: 40
goals:
  - Rank the modes from brightest to darkest and pick one for a mood
  - Change mood with tempo, register and instrument choice
  - Identify modes by their characteristic notes
prerequisites: [w36-l3-three-electronic-sketches-daw, w22-l2-lydian-and-phrygian]
tags: [film, game, composition, modes, orchestration]
songs:
  - { title: "The Simpsons Theme", composer: "Danny Elfman", public_domain: false }
  - { title: "Jaws (main title)", composer: "John Williams", public_domain: false }
---

# Mood — Mode, Tempo, Orchestration

In songs, music serves a melody and a lyric. In film and games, music serves a **picture** — and the picture tells you what to feel. Your job is to steer the audience's emotion with four big levers: mode, tempo, register and orchestration.

## Lever 1: mode

Think of the modes as a [[brightness ladder]], each step darkening one note:

**Lydian** (♯4, magical) → **Ionian** (major) → **Mixolydian** (♭7, heroic-folky) → **Dorian** (♭3 ♭7, adventurous) → **Aeolian** (minor) → **Phrygian** (♭2, menacing) → **Locrian** (♭5, unstable).

Lydian's raised 4th floats — the "Simpsons" theme (by reference) opens on it, and many film scores use lydian for wonder and flight. Phrygian's ♭2 is the sound of threat; the "Jaws" main title (by reference) is built on a two-note half-step pulse.

Hear the same melodic shape in three modes:

```example
{
  "title": "Same shape: C lydian (wonder) → D dorian (adventure) → E phrygian (menace)",
  "bpm": 80,
  "timeSig": "4/4",
  "tracks": [
    {
      "instrument": "strings",
      "seq": "C4:q E4:q F#4:q G4:q | B4:h. A4:q | G4:q F#4:q E4:q D4:q | E4:w | D4:q F4:q G4:q A4:q | C5:h. B4:q | A4:q G4:q F4:q E4:q | D4:w | E4:q G4:q A4:q B4:q | D5:h. C5:q | B4:q A4:q G4:q F4:q | E4:w |"
    },
    {
      "instrument": "pad",
      "seq": "[C3 G3]:w | [C3 G3]:w | [D3 A3]:w | [C3 G3]:w | [D3 A3]:w | [D3 A3]:w | [G2 D3]:w | [D3 A3]:w | [E2 B2]:w | [E2 B2]:w | [F2 C3]:w | [E2 B2]:w |"
    }
  ],
  "show": [
    "staff"
  ]
}
```

## Levers 2–4: tempo, register, orchestration

- **Tempo:** slow = weight, grief, awe; fast = action, panic, comedy.
- **Register:** low = danger, size; high = fragility, air. A melody an octave up can turn from brooding to hopeful.
- **Orchestration:** strings = emotion; pluck = playful or ticking; pad = atmosphere; lead = heroic statement; low piano clusters = dread.

```example
{
  "title": "One motif, two moods: slow low piano vs fast high pluck",
  "bpm": 60,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "piano",
      "seq": "A2:q C3:q B2:q E2:q | A2:w |"
    }
  ],
  "show": [
    "keyboard"
  ]
}
```

```example
{
  "title": "…and the same motif, bright and quick",
  "bpm": 150,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "pluck",
      "seq": "A5:8 C6:8 B5:8 E5:8 A5:8 C6:8 B5:8 E5:8 | A5:w |"
    }
  ],
  "show": [
    "keyboard"
  ]
}
```

## Combine the levers

Real cues pull several levers at once, and the strongest effects come from **contrast**. A scene that turns from fear to relief might move from phrygian to lydian, from low piano to high strings, and from a restless pulse to long held notes — all on the same beat. When you are unsure, change fewer things more decisively rather than many things a little.

## Drills

```exercise
{
  "id": "e1-ear-modes",
  "type": "ear-scale",
  "title": "Seven moods",
  "count": 10,
  "passScore": 0.7,
  "spec": {
    "scales": [
      "lydian",
      "major",
      "mixolydian",
      "dorian",
      "natural-minor",
      "phrygian",
      "locrian"
    ],
    "play": "asc"
  }
}
```

```exercise
{
  "id": "e2-play-lydian",
  "type": "play-scale",
  "title": "C lydian — find the ♯4",
  "count": 6,
  "passScore": 0.8,
  "spec": {
    "root": "C",
    "scale": "lydian",
    "octaves": 1,
    "direction": "asc-desc",
    "hands": "right",
    "tempo": 80,
    "metronome": true
  }
}
```

```exercise
{
  "id": "e3-play-phrygian",
  "type": "play-scale",
  "title": "E phrygian — find the ♭2",
  "count": 6,
  "passScore": 0.8,
  "spec": {
    "root": "E",
    "scale": "phrygian",
    "octaves": 1,
    "direction": "asc-desc",
    "hands": "right",
    "tempo": 80,
    "metronome": true
  }
}
```

```exercise
{
  "id": "e4-mood-quiz",
  "type": "quiz",
  "title": "Scoring choices",
  "passScore": 0.75,
  "spec": {
    "questions": [
      {
        "q": "A child sees a dragon for the first time — awe, not fear. Best mode?",
        "choices": [
          "lydian",
          "phrygian",
          "locrian",
          "aeolian"
        ],
        "answer": 0
      },
      {
        "q": "A slow-creeping threat under water. Best combination?",
        "choices": [
          "high pluck, fast, lydian",
          "low register, slow, half-step ostinato",
          "bright lead, major, 140 bpm",
          "epiano, 6/9 chords"
        ],
        "answer": 1
      },
      {
        "q": "Which mode is one note darker than major?",
        "choices": [
          "dorian",
          "mixolydian",
          "lydian",
          "phrygian"
        ],
        "answer": 1
      },
      {
        "q": "Which instrument best suggests a ticking clock?",
        "choices": [
          "pad",
          "strings",
          "pluck",
          "bass"
        ],
        "answer": 2
      }
    ]
  }
}
```

```exercise
{
  "id": "e5-ear-melody-modal",
  "type": "ear-melody",
  "title": "Modal melody dictation",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "key": "D",
    "degrees": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "length": 5,
    "rhythm": "quarters",
    "answer": "play"
  }
}
```

```exercise
{
  "id": "e6-daw-mood-flip",
  "type": "daw-task",
  "title": "Flip the mood",
  "instructions": "Write a 4-bar phrase in C lydian on strings (wonder). Then, in bars 5–8, rewrite it for menace: E phrygian (or C phrygian), lower register, a different instrument (piano or bass).",
  "spec": {
    "template": {
      "bpm": 80,
      "key": "C",
      "timeSig": "4/4",
      "tracks": [
        {
          "instrument": "strings",
          "seq": ""
        },
        {
          "instrument": "piano",
          "seq": ""
        },
        {
          "instrument": "pad",
          "seq": ""
        }
      ]
    },
    "task": "Same idea, two moods: 4 bars lydian, 4 bars phrygian.",
    "checks": [
      {
        "kind": "bars",
        "min": 8,
        "max": 8
      },
      {
        "kind": "has-tracks",
        "instruments": [
          "strings",
          "piano"
        ]
      },
      {
        "kind": "in-key",
        "key": "C",
        "scale": "lydian",
        "allowPassing": false,
        "track": 0
      },
      {
        "kind": "note-count",
        "min": 8,
        "track": 1
      },
      {
        "kind": "custom",
        "id": "mood-flip",
        "note": "Self-check: bars 5–8 are lower, darker (phrygian) and on a different instrument."
      }
    ],
    "minBars": 8,
    "maxBars": 8
  }
}
```
