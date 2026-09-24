---
id: w35-l3-three-genre-sketches-daw
title: Three Genre Sketches — Pop, Rock, Folk
week: 35
order: 3
phase: p4
duration_min: 50
goals:
  - Write three 60-second sketches, each clearly in its genre
  - Pick idioms deliberately from a checklist rather than by accident
  - Compare how the same skills (hook, loop, groove) change across genres
prerequisites: [w35-l2-rock-and-folk-idioms]
tags: [songwriting, genre, daw, sketch]
---

# Three Genre Sketches — Pop, Rock, Folk

A **sketch** is not a finished song: it's 60 seconds that prove an idea works. Today you write three, fast. Speed matters — don't polish. You can return to one of them in the portfolio weeks.

At 100 bpm in 4/4, 60 seconds is 25 bars; we'll use 24 (three 8-bar sections). In 6/8 at 60 (dotted-quarter) it's 30 bars; 24 is fine.

## Idiom checklists

Tick at least **three** boxes per sketch.

**Pop (verse 8 · pre 8 · chorus 8, ~100 bpm):** four-chord loop · hook repeated in the chorus · chorus higher than verse · pre-chorus build · drop-out before the chorus · pad or piano + bass + drums.

**Rock (riff 8 · verse 8 · chorus 8, ~120 bpm):** power-chord riff · bVII chord · straight 8th hats + backbeat · bass doubles the riff · chorus opens up to sustained chords.

**Folk (A 8 · A 8 · B 8, 6/8 or 3/4):** fingerpicked arpeggios · I–IV–V (+vi) · drone or pedal note · simple stepwise melody · no drums or very light percussion.

## A folk melody idea

A starting point if you're stuck — an original stepwise 6/8 tune shape over I–IV–I–V in D:

```example
{
  "title": "Folk tune seed in 6/8 (original)",
  "bpm": 60,
  "timeSig": "6/8",
  "key": "D",
  "tracks": [
    {
      "instrument": "pluck",
      "seq": "F#4:q A4:8 D5:q. | B4:q A4:8 G4:q. | F#4:q E4:8 D4:q A4:8 | E4:q. r:q. |"
    },
    {
      "instrument": "strings",
      "seq": "[D3 A3]:q. [D3 A3]:q. | [G2 D3]:q. [G2 D3]:q. | [D3 A3]:q. [D3 A3]:q. | [A2 E3]:q. [A2 E3]:q. |"
    }
  ],
  "show": [
    "staff"
  ]
}
```

## Timebox it

Give each sketch about 12 minutes: 3 minutes choosing idioms and chords, 6 minutes writing the core (hook, riff or tune plus its accompaniment), 3 minutes adding the remaining tracks and copying sections. When the timer ends, save and move on. You will be surprised how much a strict limit helps you commit to decisions instead of endlessly auditioning options.

## Drills

```exercise
{
  "id": "e1-ear-genre-prog",
  "type": "ear-progression",
  "title": "Warm-up: genre progressions",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "key": "D",
    "mode": "major",
    "length": 4,
    "chords": [
      "I",
      "IV",
      "V",
      "vi",
      "bVII"
    ],
    "style": "arpeggio"
  }
}
```

```exercise
{
  "id": "e2-play-folk-seed",
  "type": "play-melody",
  "title": "Play the folk seed",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "bpm": 55,
    "timeSig": "6/8",
    "key": "D",
    "seq": "F#4:q A4:8 D5:q. | B4:q A4:8 G4:q. | F#4:q E4:8 D4:q A4:8 | E4:q. r:q. |",
    "showStaff": true,
    "showKeyboard": true,
    "countIn": 1
  }
}
```

```exercise
{
  "id": "e3-daw-pop",
  "type": "daw-task",
  "title": "Sketch 1: pop",
  "instructions": "24 bars: verse, pre-chorus, chorus. Tick 3+ pop boxes.",
  "spec": {
    "template": {
      "bpm": 100,
      "key": "G",
      "timeSig": "4/4",
      "tracks": [
        {
          "instrument": "lead",
          "seq": ""
        },
        {
          "instrument": "piano",
          "seq": ""
        },
        {
          "instrument": "bass",
          "seq": ""
        },
        {
          "instrument": "drums",
          "seq": ""
        }
      ]
    },
    "task": "60-second pop sketch.",
    "checks": [
      {
        "kind": "has-tracks",
        "instruments": [
          "lead",
          "piano",
          "bass",
          "drums"
        ]
      },
      {
        "kind": "bars",
        "min": 24,
        "max": 26
      },
      {
        "kind": "in-key",
        "key": "G",
        "scale": "major",
        "allowPassing": true,
        "track": 0
      },
      {
        "kind": "repetition",
        "motifBars": 1,
        "minRepeats": 3,
        "allowTransposed": true,
        "track": 0
      },
      {
        "kind": "drum-pattern",
        "requires": [
          "kick",
          "snare"
        ],
        "snareOnBeats": [
          2,
          4
        ],
        "track": 3
      },
      {
        "kind": "custom",
        "id": "pop-boxes",
        "note": "Self-check: three or more pop idioms ticked."
      }
    ],
    "minBars": 24,
    "maxBars": 26
  }
}
```

```exercise
{
  "id": "e4-daw-rock",
  "type": "daw-task",
  "title": "Sketch 2: rock",
  "instructions": "24 bars: riff, verse, chorus. Tick 3+ rock boxes.",
  "spec": {
    "template": {
      "bpm": 120,
      "key": "D",
      "timeSig": "4/4",
      "tracks": [
        {
          "instrument": "bass",
          "seq": ""
        },
        {
          "instrument": "lead",
          "seq": ""
        },
        {
          "instrument": "strings",
          "seq": ""
        },
        {
          "instrument": "drums",
          "seq": ""
        }
      ]
    },
    "task": "60-second rock sketch.",
    "checks": [
      {
        "kind": "has-tracks",
        "instruments": [
          "bass",
          "drums"
        ]
      },
      {
        "kind": "bars",
        "min": 24,
        "max": 32
      },
      {
        "kind": "in-key",
        "key": "D",
        "scale": "mixolydian",
        "allowPassing": true,
        "track": 0
      },
      {
        "kind": "repetition",
        "motifBars": 2,
        "minRepeats": 2,
        "allowTransposed": true,
        "track": 0
      },
      {
        "kind": "drum-pattern",
        "requires": [
          "kick",
          "snare",
          "hihat"
        ],
        "snareOnBeats": [
          2,
          4
        ],
        "track": 3
      },
      {
        "kind": "custom",
        "id": "rock-boxes",
        "note": "Self-check: three or more rock idioms ticked."
      }
    ],
    "minBars": 24,
    "maxBars": 32
  }
}
```

```exercise
{
  "id": "e5-daw-folk",
  "type": "daw-task",
  "title": "Sketch 3: folk",
  "instructions": "24 bars in 6/8: A, A, B. Tick 3+ folk boxes. Use the seed above or your own tune.",
  "spec": {
    "template": {
      "bpm": 60,
      "key": "D",
      "timeSig": "6/8",
      "tracks": [
        {
          "instrument": "pluck",
          "seq": ""
        },
        {
          "instrument": "piano",
          "seq": ""
        },
        {
          "instrument": "strings",
          "seq": ""
        }
      ]
    },
    "task": "60-second folk sketch.",
    "checks": [
      {
        "kind": "has-tracks",
        "instruments": [
          "pluck",
          "piano"
        ]
      },
      {
        "kind": "bars",
        "min": 24,
        "max": 32
      },
      {
        "kind": "in-key",
        "key": "D",
        "scale": "major",
        "allowPassing": false,
        "track": 0
      },
      {
        "kind": "max-leap",
        "semitones": 7,
        "track": 0
      },
      {
        "kind": "ends-on",
        "degree": 1,
        "track": 0
      },
      {
        "kind": "custom",
        "id": "folk-boxes",
        "note": "Self-check: three or more folk idioms ticked."
      }
    ],
    "minBars": 24,
    "maxBars": 32
  }
}
```

```exercise
{
  "id": "e6-reflect",
  "type": "reflect",
  "title": "Genre fingerprints",
  "spec": {
    "prompt": "Play the three sketches in a row. What single element most makes each one sound like its genre? Which sketch would you most like to finish, and why?",
    "minWords": 30
  }
}
```
