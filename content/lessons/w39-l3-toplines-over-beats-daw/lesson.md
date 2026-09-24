---
id: w39-l3-toplines-over-beats-daw
title: Toplines Over Three Beats
week: 39
order: 3
phase: p4
duration_min: 50
goals:
  - Write three 8-bar toplines over provided tracks in different styles
  - Adapt pocket, register and rhythm to each groove
  - Keep every topline singable and well stressed
prerequisites: [w39-l2-topline-writing]
tags: [songwriting, topline, daw, voice]
---

# Toplines Over Three Beats

Professional topliners often write over several tracks in one session. Each track suggests a different kind of melody; your job is to **listen first** and let the groove tell you what it wants.

## The three tracks

1. **Ballad** (76 bpm, G major, I–vi–IV–V on piano). Space and long notes; big intervals are fine here, the tempo gives time to sing them.
2. **Dance** (124 bpm, A minor, off-beat stabs Am7–Fmaj7–Dm–Em7). Short, rhythmic, repetitive phrases; chant-like hooks; leave the off-beats to the stabs.
3. **Lo-fi R&B** (80 bpm, Dm9–Cmaj7-ish–Am7–G13 on epiano, swung). Laid-back, syncopated, fewer notes; land on colour tones (9ths, 7ths) for that smooth sound.

## The routine for each

1. Loop the track and **mumble** three different rhythms. Keep the best.
2. Choose pitches: start on a chord tone, use steps, save your highest note for the hook.
3. Speak an imaginary lyric over it (even nonsense with real stresses). If the stresses fight the beat, move notes.
4. Check range (about a 10th) and breaths (a rest at least every two bars).

```example
{
  "title": "Preview: the three tracks, one bar each",
  "bpm": 90,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "piano",
      "seq": "[G3 B3 D4]:w | r:w | r:w |"
    },
    {
      "instrument": "epiano",
      "seq": "r:w | r:8 [G3 C4 E4]:8 r:q r:8 [G3 C4 E4]:8 r:q | [F3 A3 C4 E4]:w |"
    },
    {
      "instrument": "bass",
      "seq": "G1:w | r:8 A1:8 r:8 A1:8 r:8 A1:8 r:8 A1:8 | D2:w |"
    }
  ],
  "show": [
    "pianoroll"
  ]
}
```

Work fast: about ten minutes per topline. If one track isn't giving you anything after three mumbled attempts, move to the next and come back later — fresh ears usually find the melody in seconds.

## Drills

```exercise
{
  "id": "e1-ear-chords",
  "type": "ear-chord",
  "title": "Chord colours of the three tracks",
  "count": 10,
  "passScore": 0.75,
  "spec": {
    "qualities": [
      "maj",
      "min",
      "maj7",
      "min7",
      "dom7"
    ],
    "inversions": [
      0
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
  "id": "e2-play-lofi-chords",
  "type": "play-chord",
  "title": "Play the lo-fi track chords",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "chords": [
      "Dm9",
      "Cmaj7",
      "Am7",
      "G13"
    ],
    "inversion": "any",
    "sequence": true,
    "bpm": 55
  }
}
```

```exercise
{
  "id": "e3-daw-ballad",
  "type": "daw-task",
  "title": "Topline 1: ballad",
  "instructions": "8 bars. Long notes, a climax in bar 6 or 7, end on G.",
  "spec": {
    "template": {
      "bpm": 76,
      "key": "G",
      "timeSig": "4/4",
      "tracks": [
        {
          "instrument": "lead",
          "seq": ""
        },
        {
          "instrument": "piano",
          "seq": "[G3 B3 D4]:w | [E3 G3 B3]:w | [C3 E3 G3]:w | [D3 F#3 A3]:w | [G3 B3 D4]:w | [E3 G3 B3]:w | [C3 E3 G3]:w | [D3 F#3 A3]:w |"
        },
        {
          "instrument": "bass",
          "seq": "G1:w | E2:w | C2:w | D2:w | G1:w | E2:w | C2:w | D2:w |"
        },
        {
          "instrument": "drums",
          "seq": "kick:q hihat:8 hihat:8 [snare hihat]:q hihat:8 hihat:8 | kick:q hihat:8 hihat:8 [snare hihat]:q hihat:8 hihat:8 | kick:q hihat:8 hihat:8 [snare hihat]:q hihat:8 hihat:8 | kick:q hihat:8 hihat:8 [snare hihat]:q hihat:8 hihat:8 | kick:q hihat:8 hihat:8 [snare hihat]:q hihat:8 hihat:8 | kick:q hihat:8 hihat:8 [snare hihat]:q hihat:8 hihat:8 | kick:q hihat:8 hihat:8 [snare hihat]:q hihat:8 hihat:8 | kick:q hihat:8 hihat:8 [snare hihat]:q hihat:8 hihat:8 |"
        }
      ]
    },
    "task": "Ballad topline.",
    "checks": [
      {
        "kind": "bars",
        "min": 8,
        "max": 8
      },
      {
        "kind": "in-key",
        "key": "G",
        "scale": "major",
        "allowPassing": true,
        "track": 0
      },
      {
        "kind": "range",
        "low": "B3",
        "high": "E5",
        "track": 0
      },
      {
        "kind": "uses-rhythm",
        "values": [
          "h",
          "q",
          "w",
          "h."
        ],
        "minDistinct": 2,
        "track": 0
      },
      {
        "kind": "ends-on",
        "degree": 1,
        "track": 0
      },
      {
        "kind": "contour",
        "shape": "arch",
        "track": 0
      }
    ],
    "minBars": 8,
    "maxBars": 8
  }
}
```

```exercise
{
  "id": "e4-daw-dance",
  "type": "daw-task",
  "title": "Topline 2: dance",
  "instructions": "8 bars. A 1-bar chant-like hook repeated at least three times; mostly 8ths and quarters; avoid long notes on the off-beats where the stabs are.",
  "spec": {
    "template": {
      "bpm": 124,
      "key": "C",
      "timeSig": "4/4",
      "tracks": [
        {
          "instrument": "lead",
          "seq": ""
        },
        {
          "instrument": "piano",
          "seq": "r:8 [G3 C4 E4]:8 r:q r:8 [G3 C4 E4]:8 r:q | r:8 [A3 C4 E4]:8 r:q r:8 [A3 C4 E4]:8 r:q | r:8 [A3 D4 F4]:8 r:q r:8 [A3 D4 F4]:8 r:q | r:8 [G3 B3 E4]:8 r:q r:8 [G3 B3 E4]:8 r:q | r:8 [G3 C4 E4]:8 r:q r:8 [G3 C4 E4]:8 r:q | r:8 [A3 C4 E4]:8 r:q r:8 [A3 C4 E4]:8 r:q | r:8 [A3 D4 F4]:8 r:q r:8 [A3 D4 F4]:8 r:q | r:8 [G3 B3 E4]:8 r:q r:8 [G3 B3 E4]:8 r:q |"
        },
        {
          "instrument": "bass",
          "seq": "r:8 A1:8 r:8 A1:8 r:8 A1:8 r:8 A1:8 | r:8 F1:8 r:8 F1:8 r:8 F1:8 r:8 F1:8 | r:8 D2:8 r:8 D2:8 r:8 D2:8 r:8 D2:8 | r:8 E2:8 r:8 E2:8 r:8 E2:8 r:8 E2:8 | r:8 A1:8 r:8 A1:8 r:8 A1:8 r:8 A1:8 | r:8 F1:8 r:8 F1:8 r:8 F1:8 r:8 F1:8 | r:8 D2:8 r:8 D2:8 r:8 D2:8 r:8 D2:8 | r:8 E2:8 r:8 E2:8 r:8 E2:8 r:8 E2:8 |"
        },
        {
          "instrument": "drums",
          "seq": "kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 |"
        }
      ]
    },
    "task": "Dance topline.",
    "checks": [
      {
        "kind": "bars",
        "min": 8,
        "max": 8
      },
      {
        "kind": "in-key",
        "key": "A",
        "scale": "natural-minor",
        "allowPassing": false,
        "track": 0
      },
      {
        "kind": "range",
        "low": "C4",
        "high": "E5",
        "track": 0
      },
      {
        "kind": "repetition",
        "motifBars": 1,
        "minRepeats": 3,
        "allowTransposed": false,
        "track": 0
      },
      {
        "kind": "max-leap",
        "semitones": 7,
        "track": 0
      }
    ],
    "minBars": 8,
    "maxBars": 8
  }
}
```

```exercise
{
  "id": "e5-daw-lofi",
  "type": "daw-task",
  "title": "Topline 3: lo-fi R&B",
  "instructions": "8 bars. Syncopated and sparse — at least two bars mostly rest. Land on a 9th or 7th of the chord at least four times.",
  "spec": {
    "template": {
      "bpm": 80,
      "key": "C",
      "timeSig": "4/4",
      "tracks": [
        {
          "instrument": "lead",
          "seq": ""
        },
        {
          "instrument": "epiano",
          "seq": "[F3 A3 C4 E4]:w | [E3 G3 B3 D4]:w | [E3 G3 A3 C4]:w | [F3 A3 B3 E4]:w | [F3 A3 C4 E4]:w | [E3 G3 B3 D4]:w | [E3 G3 A3 C4]:w | [F3 A3 B3 E4]:w |"
        },
        {
          "instrument": "bass",
          "seq": "D2:h. A1:q | C2:h. G1:q | A1:h. E2:q | G1:h. D2:q | D2:h. A1:q | C2:h. G1:q | A1:h. E2:q | G1:h. D2:q |"
        },
        {
          "instrument": "drums",
          "seq": "[kick hihat]:8t r:8t hihat:8t [snare hihat]:8t r:8t hihat:8t r:8t r:8t [kick hihat]:8t [snare hihat]:8t r:8t hihat:8t | [kick hihat]:8t r:8t hihat:8t [snare hihat]:8t r:8t hihat:8t r:8t r:8t [kick hihat]:8t [snare hihat]:8t r:8t hihat:8t | [kick hihat]:8t r:8t hihat:8t [snare hihat]:8t r:8t hihat:8t r:8t r:8t [kick hihat]:8t [snare hihat]:8t r:8t hihat:8t | [kick hihat]:8t r:8t hihat:8t [snare hihat]:8t r:8t hihat:8t r:8t r:8t [kick hihat]:8t [snare hihat]:8t r:8t hihat:8t | [kick hihat]:8t r:8t hihat:8t [snare hihat]:8t r:8t hihat:8t r:8t r:8t [kick hihat]:8t [snare hihat]:8t r:8t hihat:8t | [kick hihat]:8t r:8t hihat:8t [snare hihat]:8t r:8t hihat:8t r:8t r:8t [kick hihat]:8t [snare hihat]:8t r:8t hihat:8t | [kick hihat]:8t r:8t hihat:8t [snare hihat]:8t r:8t hihat:8t r:8t r:8t [kick hihat]:8t [snare hihat]:8t r:8t hihat:8t | [kick hihat]:8t r:8t hihat:8t [snare hihat]:8t r:8t hihat:8t r:8t r:8t [kick hihat]:8t [snare hihat]:8t r:8t hihat:8t |"
        }
      ]
    },
    "task": "Lo-fi R&B topline.",
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
        "allowPassing": true,
        "track": 0
      },
      {
        "kind": "range",
        "low": "C4",
        "high": "E5",
        "track": 0
      },
      {
        "kind": "note-count",
        "min": 12,
        "max": 40,
        "track": 0
      },
      {
        "kind": "custom",
        "id": "colour-landings",
        "note": "Self-check: four or more long notes land on a 7th or 9th of the chord."
      }
    ],
    "minBars": 8,
    "maxBars": 8
  }
}
```

```exercise
{
  "id": "e6-reflect",
  "type": "reflect",
  "title": "Which groove wrote the best melody?",
  "spec": {
    "prompt": "Which of your three toplines is strongest, and what did the track contribute to it? Describe one change you made after speaking an imaginary lyric over it.",
    "minWords": 30
  }
}
```
