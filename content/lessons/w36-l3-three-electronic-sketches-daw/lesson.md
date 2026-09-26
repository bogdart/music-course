---
id: w36-l3-three-electronic-sketches-daw
title: Three Electronic Sketches — Hip-Hop, House, Lo-Fi
week: 36
order: 3
phase: p4
duration_min: 50
goals:
  - Write three 60-second sketches in beat-driven genres
  - Build each from the groove up, with a loop that evolves
  - Use arrangement (adding/removing layers) instead of new chords to create form
prerequisites: [w36-l2-house-and-lo-fi]
tags: [songwriting, genre, electronic, daw, sketch]
---

# Three Electronic Sketches — Hip-Hop, House, Lo-Fi

Last week's genres were song-first. These are **groove-first**: you start with drums and a loop, and form comes from **arrangement** — layers entering and leaving — rather than from new chord progressions. A whole house track can live on two chords.

## The loop-evolution method

1. Make a strong 2- or 4-bar loop with every layer.
2. Duplicate it to fill the sketch length.
3. **Mute** layers to create sections: an intro with just drums and one element; a middle without the kick; an ending that strips back again.
4. Add one **change** per 8 bars — a fill, a new counter-line, a filter-like register shift, a dropped beat.

## Sketch targets

| Genre | Tempo | Length | Must have |
|-------|-------|--------|-----------|
| Hip-hop (boom-bap or trap) | 90 or 140 | 16–24 bars | sample-style loop, one motif, a drum change every 8 bars |
| House | 124 | 32 bars | four-on-the-floor, off-beat bass, a breakdown without kick |
| Lo-fi | 75 | 16–20 bars | extended chords, swung drums, one melodic phrase |

A reminder of the mood difference in one example — the same two chords as a lo-fi pad and a house stab:

```example
{
  "title": "Same harmony, two genres: Am7 – Fmaj7",
  "bpm": 100,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "epiano",
      "seq": "[G3 C4 E4]:w | [A3 C4 E4]:w | r:w | r:w |"
    },
    {
      "instrument": "piano",
      "seq": "r:w | r:w | r:8 [G3 C4 E4]:8 r:q r:8 [G3 C4 E4]:8 r:q | r:8 [A3 C4 E4]:8 r:q r:8 [A3 C4 E4]:8 r:q |"
    },
    {
      "instrument": "bass",
      "seq": "A1:w | F1:w | r:8 A1:8 r:8 A1:8 r:8 A1:8 r:8 A1:8 | r:8 F1:8 r:8 F1:8 r:8 F1:8 r:8 F1:8 |"
    }
  ],
  "show": [
    "pianoroll"
  ]
}
```

## Drills

```exercise
{
  "id": "e1-ear-prog-minor",
  "type": "ear-progression",
  "title": "Warm-up: minor loops",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "key": "random",
    "mode": "minor",
    "length": 4,
    "chords": [
      "i",
      "iv",
      "v",
      "bVI",
      "bVII",
      "bIII"
    ],
    "style": "pad-bass"
  }
}
```

```exercise
{
  "id": "e2-play-ninths",
  "type": "play-chord",
  "title": "Warm-up: 9th chords for lo-fi",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "chords": [
      "Dm9",
      "Cmaj9",
      "Am9",
      "Fmaj9"
    ],
    "inversion": "any",
    "sequence": true,
    "bpm": 55
  }
}
```

```exercise
{
  "id": "e3-daw-hiphop",
  "type": "daw-task",
  "title": "Sketch 1: hip-hop",
  "instructions": "Boom-bap (90) or trap (140). Loop-evolution method; change the drums every 8 bars.",
  "spec": {
    "template": {
      "bpm": 90,
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
          "instrument": "epiano",
          "seq": ""
        },
        {
          "instrument": "pluck",
          "seq": ""
        }
      ]
    },
    "task": "16–24 bar hip-hop sketch.",
    "checks": [
      {
        "kind": "has-tracks",
        "instruments": [
          "drums",
          "bass",
          "epiano"
        ]
      },
      {
        "kind": "bars",
        "min": 16,
        "max": 24
      },
      {
        "kind": "drum-pattern",
        "requires": [
          "kick",
          "hihat"
        ],
        "track": 0
      },
      {
        "kind": "repetition",
        "motifBars": 2,
        "minRepeats": 4,
        "allowTransposed": false,
        "track": 2
      },
      {
        "kind": "custom",
        "id": "evolves",
        "note": "Self-check: something changes every 8 bars."
      }
    ],
    "minBars": 16,
    "maxBars": 24
  }
}
```

```exercise
{
  "id": "e4-daw-house",
  "type": "daw-task",
  "title": "Sketch 2: house",
  "instructions": "32 bars at 124: intro (8), groove (8), breakdown without kick (8), full groove (8).",
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
          "instrument": "piano",
          "seq": ""
        },
        {
          "instrument": "pad",
          "seq": ""
        }
      ]
    },
    "task": "32-bar house sketch.",
    "checks": [
      {
        "kind": "has-tracks",
        "instruments": [
          "drums",
          "bass",
          "piano",
          "pad"
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
          "clap"
        ],
        "kickOnBeats": [
          1,
          2,
          3,
          4
        ],
        "track": 0
      },
      {
        "kind": "custom",
        "id": "breakdown",
        "note": "Self-check: bars 17–24 have no kick."
      }
    ],
    "minBars": 32,
    "maxBars": 32
  }
}
```

```exercise
{
  "id": "e5-daw-lofi",
  "type": "daw-task",
  "title": "Sketch 3: lo-fi",
  "instructions": "16–20 bars at 75: extended chords on epiano, swung drums (triplet placements), a soft lead phrase that enters halfway.",
  "spec": {
    "template": {
      "bpm": 75,
      "key": "C",
      "timeSig": "4/4",
      "tracks": [
        {
          "instrument": "epiano",
          "seq": ""
        },
        {
          "instrument": "bass",
          "seq": ""
        },
        {
          "instrument": "drums",
          "seq": ""
        },
        {
          "instrument": "lead",
          "seq": ""
        }
      ]
    },
    "task": "16–20 bar lo-fi sketch.",
    "checks": [
      {
        "kind": "has-tracks",
        "instruments": [
          "epiano",
          "bass",
          "drums",
          "lead"
        ]
      },
      {
        "kind": "bars",
        "min": 16,
        "max": 20
      },
      {
        "kind": "uses-rhythm",
        "values": [
          "8t"
        ],
        "minDistinct": 1,
        "track": 2
      },
      {
        "kind": "note-count",
        "min": 48,
        "track": 0
      },
      {
        "kind": "custom",
        "id": "extended",
        "note": "Self-check: most chords have a 7th and at least half have a 9th or 13th."
      }
    ],
    "minBars": 16,
    "maxBars": 20
  }
}
```

```exercise
{
  "id": "e6-reflect",
  "type": "reflect",
  "title": "Groove-first vs song-first",
  "spec": {
    "prompt": "Compare writing these sketches with last week's pop/rock/folk sketches. Which way of working came more naturally to you? What would a groove-first approach add to your songwriting?",
    "minWords": 30
  }
}
```
