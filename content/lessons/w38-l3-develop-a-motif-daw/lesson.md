---
id: w38-l3-develop-a-motif-daw
title: Develop a Motif for 32 Bars
week: 38
order: 3
phase: p4
duration_min: 50
goals:
  - Build 32 bars of music from one motif
  - Use at least five development techniques and one change of key or mode
  - Orchestrate the arc so texture grows toward the climax
prerequisites: [w38-l2-through-composed-forms]
tags: [composition, motif, development, daw, form]
---

# Develop a Motif for 32 Bars

This is the longest single-idea piece you've written. The goal: **everything grows from one motif**. Melody, bass line, even accompaniment figures should be traceable back to it.

## The plan

| Bars | Stage | Techniques | Texture |
|------|-------|------------|---------|
| 1–8 | Statement | motif, answer, sequence | 1–2 instruments |
| 9–16 | Development 1 | inversion, fragmentation; move to the relative minor or a new mode | add a bass line made from the motif in augmentation |
| 17–24 | Development 2 → climax | diminution, sequence climbing; climax around bar 22 | full: melody, counter-line, bass, pad, drums or pulse |
| 25–32 | Return + coda | original motif transformed (reharmonised, augmented or in a new register); fade texture | thin back out, end on the tonic |

## Tips

- **Pick a motif with character**: a distinctive interval (a leap of a 4th or 6th) and a distinctive rhythm (a dotted figure or syncopation). Bland motifs develop blandly.
- **Put the motif in more than one layer.** The bass can play it in augmentation while the melody plays it in diminution — a classic trick for climaxes.
- **Change key once.** C major → A minor → back to C is enough to freshen the middle.
- Make a quick **arc sketch** first: write the highest note of each 4-bar block. They should rise to bar 22 and fall after.

```example
{
  "title": "Motif in the melody, augmented in the bass (original)",
  "bpm": 96,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "lead",
      "seq": "G4:8. A4:16 C5:q E5:h | D5:8. C5:16 A4:q G4:h | G4:8. A4:16 C5:q E5:h | F5:8. E5:16 D5:q C5:h |"
    },
    {
      "instrument": "bass",
      "seq": "C2:q. D2:8 F2:h | A2:w | G2:q. A2:8 C3:h | E2:w |"
    }
  ],
  "show": [
    "staff"
  ]
}
```

## Drills

```exercise
{
  "id": "e1-play-motif",
  "type": "play-melody",
  "title": "Warm-up: the dotted motif",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "bpm": 84,
    "timeSig": "4/4",
    "key": "C",
    "seq": "G4:8. A4:16 C5:q E5:h | D5:8. C5:16 A4:q G4:h | G4:8. A4:16 C5:q E5:h | F5:8. E5:16 D5:q C5:h |",
    "showStaff": true,
    "showKeyboard": true,
    "countIn": 1
  }
}
```

```exercise
{
  "id": "e2-tap-dotted",
  "type": "rhythm-tap",
  "title": "Tap the dotted rhythm",
  "count": 6,
  "passScore": 0.8,
  "spec": {
    "bpm": 84,
    "timeSig": "4/4",
    "seq": "x:8. x:16 x:q x:h |",
    "showNotation": true,
    "countIn": 1,
    "loops": 4
  }
}
```

```exercise
{
  "id": "e3-ear-rhythm",
  "type": "ear-rhythm",
  "title": "Dotted and 16th rhythms",
  "count": 8,
  "passScore": 0.7,
  "spec": {
    "timeSig": "4/4",
    "bars": 1,
    "subdivision": "16",
    "rests": true,
    "answer": "choose"
  }
}
```

```exercise
{
  "id": "e4-ear-chords",
  "type": "ear-chord",
  "title": "Chord qualities for reharmonising the return",
  "count": 10,
  "passScore": 0.75,
  "spec": {
    "qualities": [
      "maj7",
      "min7",
      "dom7",
      "m7b5",
      "sus4"
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
  "id": "e5-daw-32",
  "type": "daw-task",
  "title": "32 bars from one motif",
  "instructions": "Follow the plan table. Check each stage against the techniques list before moving on.",
  "spec": {
    "template": {
      "bpm": 96,
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
          "instrument": "strings",
          "seq": ""
        },
        {
          "instrument": "pad",
          "seq": ""
        },
        {
          "instrument": "drums",
          "seq": ""
        }
      ]
    },
    "task": "32-bar developmental piece from a single motif.",
    "checks": [
      {
        "kind": "bars",
        "min": 32,
        "max": 32
      },
      {
        "kind": "has-tracks",
        "instruments": [
          "lead",
          "bass",
          "strings",
          "pad"
        ]
      },
      {
        "kind": "repetition",
        "motifBars": 1,
        "minRepeats": 4,
        "allowTransposed": true,
        "track": 0
      },
      {
        "kind": "contour",
        "shape": "arch",
        "track": 0
      },
      {
        "kind": "ends-on",
        "degree": 1,
        "track": 1
      },
      {
        "kind": "custom",
        "id": "five-techniques",
        "note": "Self-check: at least five of sequence, inversion, retrograde, augmentation, diminution, fragmentation; one key/mode change."
      }
    ],
    "minBars": 32,
    "maxBars": 32
  }
}
```

```exercise
{
  "id": "e6-reflect",
  "type": "reflect",
  "title": "Trace the family tree",
  "spec": {
    "prompt": "List four places in your piece where the motif appears and what was done to it each time. Which transformation surprised you most when you heard it?",
    "minWords": 30
  }
}
```
