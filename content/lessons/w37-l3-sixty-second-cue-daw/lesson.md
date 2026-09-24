---
id: w37-l3-sixty-second-cue-daw
title: A 60-Second Cue
week: 37
order: 3
phase: p4
duration_min: 50
goals:
  - Score a 60-second scene from a written brief
  - Plan the cue as a timeline of emotional beats (hit points)
  - Write a loopable 16-bar game track
prerequisites: [w37-l2-ostinati-and-leitmotif]
tags: [film, game, composition, daw, cue]
---

# A 60-Second Cue

Film composers get a **brief** and a **timeline**. Each moment where the music must change is a [[hit point]]. You calculate where it falls in bars and write toward it.

## The brief

> *Night. An abandoned space station. Our hero drifts through a dark corridor (0:00–0:21). A faint signal starts beeping; she follows it, faster (0:21–0:42). She opens a hatch: a vast window onto a glowing nebula (0:42–1:04). Wonder.*

At **90 bpm in 4/4**, one bar lasts 4 × (60 ÷ 90) = 2.67 seconds, so 8 bars ≈ 21 seconds. The three scene sections map neatly to **three 8-bar sections — 24 bars**.

| Bars | Time | Emotion | Suggested tools |
|------|------|---------|-----------------|
| 1–8 | 0:00 | isolation, unease | E phrygian, low pad drone, sparse piano, no drums |
| 9–16 | 0:21 | curiosity, urgency | pluck ostinato (the "signal"), strings rising, add a pulse |
| 17–24 | 0:42 | wonder | C or F lydian, strings + lead theme, full pad, slow down the rhythm |

The hit point at bar 17 (the hatch opens) is the key moment. Make it land: silence beat 4 of bar 16, then change mode, register and orchestration all at once.

## Game music: the loop

Game tracks often **loop** for as long as the player stays. A loop must end so that it flows seamlessly back to its start — usually the last bar sets up the first (a V chord, or a pickup into bar 1). Avoid a big final cadence.

```example
{
  "title": "The 'signal' idea: pluck ostinato over a low drone (original)",
  "bpm": 90,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "pluck",
      "seq": "E5:8 r:8 r:8 E5:8 r:8 F5:8 r:q | E5:8 r:8 r:8 E5:8 r:8 F5:8 r:q |"
    },
    {
      "instrument": "pad",
      "seq": "[E2 B2]:w | [E2 B2]:w |"
    }
  ],
  "show": [
    "pianoroll"
  ],
  "loop": true
}
```

## Drills

```exercise
{
  "id": "e1-hit-point-quiz",
  "type": "quiz-input",
  "title": "Timeline maths",
  "passScore": 0.7,
  "spec": {
    "questions": [
      {
        "q": "At 120 bpm in 4/4, how many seconds is one bar?",
        "answer": [
          "2"
        ],
        "kind": "number"
      },
      {
        "q": "At 120 bpm in 4/4, a hit point at 0:32 falls at the start of bar…",
        "answer": [
          "17"
        ],
        "kind": "number"
      },
      {
        "q": "At 90 bpm in 4/4, how many bars (whole) fit in 60 seconds?",
        "answer": [
          "22"
        ],
        "kind": "number"
      }
    ]
  }
}
```

```exercise
{
  "id": "e2-ear-modes",
  "type": "ear-scale",
  "title": "Phrygian vs lydian vs aeolian",
  "count": 8,
  "passScore": 0.8,
  "spec": {
    "scales": [
      "phrygian",
      "lydian",
      "natural-minor",
      "major"
    ],
    "play": "asc-desc"
  }
}
```

```exercise
{
  "id": "e3-play-lydian-f",
  "type": "play-scale",
  "title": "F lydian (all white keys from F)",
  "count": 6,
  "passScore": 0.8,
  "spec": {
    "root": "F",
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
  "id": "e4-daw-film-cue",
  "type": "daw-task",
  "title": "Score the space-station scene",
  "instructions": "24 bars at 90 bpm following the timeline above. The change at bar 17 must be unmistakable.",
  "spec": {
    "template": {
      "bpm": 90,
      "key": "C",
      "timeSig": "4/4",
      "tracks": [
        {
          "instrument": "pad",
          "seq": ""
        },
        {
          "instrument": "piano",
          "seq": ""
        },
        {
          "instrument": "pluck",
          "seq": ""
        },
        {
          "instrument": "strings",
          "seq": ""
        },
        {
          "instrument": "lead",
          "seq": ""
        }
      ]
    },
    "task": "60-second (24-bar) cue with three emotional sections and a hit point at bar 17.",
    "checks": [
      {
        "kind": "bars",
        "min": 24,
        "max": 24
      },
      {
        "kind": "has-tracks",
        "instruments": [
          "pad",
          "pluck",
          "strings",
          "lead"
        ]
      },
      {
        "kind": "note-count",
        "min": 8,
        "track": 2
      },
      {
        "kind": "custom",
        "id": "sections",
        "note": "Self-check: bars 1–8 dark and sparse; 9–16 an ostinato builds; 17–24 lydian, full, wonder."
      },
      {
        "kind": "custom",
        "id": "hit-point",
        "note": "Self-check: beat 4 of bar 16 is silent or nearly so, and bar 17 changes mode, register and instruments."
      }
    ],
    "minBars": 24,
    "maxBars": 24
  }
}
```

```exercise
{
  "id": "e5-daw-game-loop",
  "type": "daw-task",
  "title": "A 16-bar game loop",
  "instructions": "Choose a level: forest (dorian), lava cave (phrygian) or sky kingdom (lydian). Write a 16-bar loop with a melody, a bass and a rhythmic layer. Bar 16 must lead smoothly back into bar 1 — loop it at least three times to check.",
  "spec": {
    "template": {
      "bpm": 120,
      "key": "C",
      "timeSig": "4/4",
      "tracks": [
        {
          "instrument": "lead",
          "seq": ""
        },
        {
          "instrument": "bass",
          "seq": ""
        },
        {
          "instrument": "pluck",
          "seq": ""
        },
        {
          "instrument": "drums",
          "seq": ""
        }
      ]
    },
    "task": "Seamless 16-bar level loop.",
    "checks": [
      {
        "kind": "bars",
        "min": 16,
        "max": 16
      },
      {
        "kind": "has-tracks",
        "instruments": [
          "lead",
          "bass"
        ]
      },
      {
        "kind": "repetition",
        "motifBars": 2,
        "minRepeats": 2,
        "allowTransposed": true,
        "track": 0
      },
      {
        "kind": "custom",
        "id": "seamless",
        "note": "Self-check: no final cadence; bar 16 flows back into bar 1."
      }
    ],
    "minBars": 16,
    "maxBars": 16
  }
}
```

```exercise
{
  "id": "e6-reflect",
  "type": "reflect",
  "title": "Watch it in your head",
  "spec": {
    "prompt": "Close your eyes and play the cue while imagining the scene. Where does the music help the story, and where does it get ahead of or behind the picture?",
    "minWords": 25
  }
}
```
