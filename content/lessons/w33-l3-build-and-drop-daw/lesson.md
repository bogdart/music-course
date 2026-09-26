---
id: w33-l3-build-and-drop-daw
title: Build and Drop — a 32-Bar EDM Track
week: 33
order: 3
phase: p4
duration_min: 50
goals:
  - "Plan a 32-bar dance form: intro, breakdown, build, drop"
  - Create tension with a snare roll, a rising line and a moment of silence
  - Finish a full EDM arrangement with 5 tracks
prerequisites: [w33-l2-arps-and-gating, w21-l2-textural-build]
tags: [production, electronic, form, daw]
---

# Build and Drop — a 32-Bar EDM Track

Dance music is architecture of **energy**. Instead of verse and chorus, think in 8-bar blocks that add or remove energy. Today's form:

| Bars | Section | What's playing |
|------|---------|----------------|
| 1–8 | Intro | kick, hats, bass, gated pad |
| 9–16 | Breakdown | kick out! pad + arp, maybe the hook teased softly |
| 17–24 | [[build-up]] | snare roll accelerating, rising lead, everything thinning out |
| 25–32 | [[drop]] | full beat, bass, hook on lead, arp, pad — everything at once |

The drop only hits hard because of what comes before: the breakdown removes the kick so the listener misses it, and the build stretches the tension until it has to break.

## Tension tools

- **Accelerating snare roll:** quarters → 8ths → 16ths → 32nds, doubling speed every bar (or every two bars).
- **Rising line:** a lead or pad that steps upward, bar by bar.
- **The gap:** half a bar — or a whole beat — of near silence just before the drop. The silence is the loudest moment.

```example
{
  "title": "Last 4 bars of the build (roll + rising lead + gap)",
  "bpm": 124,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "drums",
      "seq": "snare:q snare:q snare:q snare:q | snare:8 snare:8 snare:8 snare:8 snare:8 snare:8 snare:8 snare:8 | snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 | snare:32 snare:32 snare:32 snare:32 snare:32 snare:32 snare:32 snare:32 snare:32 snare:32 snare:32 snare:32 snare:32 snare:32 snare:32 snare:32 r:h |"
    },
    {
      "instrument": "lead",
      "seq": "A4:w | C5:w | D5:w | E5:h. r:q |"
    },
    {
      "instrument": "pad",
      "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:h. r:q |"
    }
  ],
  "show": [
    "pianoroll"
  ]
}
```

## The drop

Here is the first 4 bars of a drop: a punchy, repeated hook (original) on lead, full house beat, bass on roots. Short notes and rests make the hook bounce.

```example
{
  "title": "Drop: hook, beat, bass",
  "bpm": 124,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "lead",
      "seq": "E5:8 E5:8 r:8 D5:8 C5:8 r:8 A4:q | C5:8 C5:8 r:8 A4:8 G4:q. r:8 | E5:8 E5:8 r:8 D5:8 C5:8 r:8 G5:q | E5:h. r:q |"
    },
    {
      "instrument": "drums",
      "seq": "kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 |"
    },
    {
      "instrument": "bass",
      "seq": "r:8 A1:8 r:8 A1:8 r:8 A1:8 r:8 A1:8 | r:8 F1:8 r:8 F1:8 r:8 F1:8 r:8 F1:8 | r:8 C2:8 r:8 C2:8 r:8 C2:8 r:8 C2:8 | r:8 G1:8 r:8 G1:8 r:8 G1:8 r:8 G1:8 |"
    }
  ],
  "show": [
    "pianoroll"
  ],
  "loop": true
}
```

That off-beat bass (rest on the beat, note on the "and") is a dance-music classic: it never collides with the kick.

## Drills

```exercise
{
  "id": "e1-tap-roll",
  "type": "rhythm-tap",
  "title": "Tap an accelerating roll",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "bpm": 90,
    "timeSig": "4/4",
    "seq": "x:q x:q x:q x:q | x:8 x:8 x:8 x:8 x:8 x:8 x:8 x:8 | x:16 x:16 x:16 x:16 x:16 x:16 x:16 x:16 x:16 x:16 x:16 x:16 x:16 x:16 x:16 x:16 |",
    "showNotation": true,
    "countIn": 1,
    "loops": 1
  }
}
```

```exercise
{
  "id": "e2-play-hook",
  "type": "play-melody",
  "title": "Play the drop hook",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "bpm": 100,
    "timeSig": "4/4",
    "key": "C",
    "seq": "E5:8 E5:8 r:8 D5:8 C5:8 r:8 A4:q | C5:8 C5:8 r:8 A4:8 G4:q. r:8 | E5:8 E5:8 r:8 D5:8 C5:8 r:8 G5:q | E5:h. r:q |",
    "showStaff": true,
    "showKeyboard": true,
    "countIn": 1,
    "backing": {
      "instrument": "drums",
      "seq": "kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 |"
    }
  }
}
```

```exercise
{
  "id": "e3-form-quiz",
  "type": "quiz",
  "title": "Energy map",
  "passScore": 0.75,
  "spec": {
    "questions": [
      {
        "q": "Why remove the kick in the breakdown?",
        "choices": [
          "To save CPU",
          "So the drop feels bigger when it returns",
          "Because breakdowns are in 3/4",
          "To change key"
        ],
        "answer": 1
      },
      {
        "q": "A snare roll that goes q \u2192 8 \u2192 16 \u2192 32 creates\u2026",
        "choices": [
          "relaxation",
          "accelerating tension",
          "a key change",
          "a slower tempo"
        ],
        "answer": 1
      },
      {
        "q": "An off-beat bass line avoids clashing with\u2026",
        "choices": [
          "the pad",
          "the kick",
          "the hook",
          "the clap"
        ],
        "answer": 1
      }
    ]
  }
}
```

```exercise
{
  "id": "e4-ear-melody",
  "type": "ear-melody",
  "title": "Hook dictation",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "key": "random",
    "degrees": [
      1,
      2,
      3,
      5,
      6
    ],
    "length": 5,
    "rhythm": "simple",
    "answer": "play"
  }
}
```

```exercise
{
  "id": "e5-ear-chords",
  "type": "ear-chord",
  "title": "Pad colours",
  "count": 8,
  "passScore": 0.75,
  "spec": {
    "qualities": [
      "min",
      "maj",
      "sus2",
      "sus4",
      "min7"
    ],
    "inversions": [
      0,
      1
    ],
    "voicing": "mixed",
    "range": [
      "C3",
      "C5"
    ]
  }
}
```

```exercise
{
  "id": "e6-daw-edm",
  "type": "daw-task",
  "title": "Your 32-bar build and drop",
  "instructions": "Use Am\u2013F\u2013C\u2013G (or your own minor loop) throughout. Follow the energy map: intro 8, breakdown 8 (no kick), build 8 (roll + rising line + a gap before bar 25), drop 8 (everything, with a short repeated hook). Reuse your loop from last lesson for the intro if you like.",
  "spec": {
    "template": {
      "bpm": 124,
      "key": "C",
      "timeSig": "4/4",
      "tracks": [
        {
          "instrument": "drums",
          "seq": ""
        },
        {
          "instrument": "bass",
          "seq": ""
        },
        {
          "instrument": "pad",
          "seq": ""
        },
        {
          "instrument": "pluck",
          "seq": ""
        },
        {
          "instrument": "lead",
          "seq": ""
        }
      ]
    },
    "task": "A 32-bar EDM arrangement: intro, breakdown, build, drop.",
    "checks": [
      {
        "kind": "has-tracks",
        "instruments": [
          "drums",
          "bass",
          "pad",
          "pluck",
          "lead"
        ]
      },
      {
        "kind": "bars",
        "min": 32,
        "max": 32
      },
      {
        "kind": "drum-pattern",
        "requires": [
          "kick",
          "snare",
          "clap"
        ],
        "track": 0
      },
      {
        "kind": "in-key",
        "key": "A",
        "scale": "natural-minor",
        "allowPassing": true,
        "track": 4
      },
      {
        "kind": "repetition",
        "motifBars": 1,
        "minRepeats": 2,
        "allowTransposed": true,
        "track": 4
      },
      {
        "kind": "custom",
        "id": "energy-map",
        "note": "Self-check: no kick in bars 9\u201316; snare roll in bars 17\u201324; a gap just before bar 25; all five tracks play in bars 25\u201332."
      }
    ],
    "minBars": 32,
    "maxBars": 32
  }
}
```
