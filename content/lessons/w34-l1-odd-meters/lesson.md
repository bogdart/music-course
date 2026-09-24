---
id: w34-l1-odd-meters
title: Odd Meters — 5/4 and 7/8
week: 34
order: 1
phase: p4
duration_min: 40
goals:
  - Count 5/4 and 7/8 as groups of 2s and 3s
  - Tap and play grooves in 5/4 (3+2) and 7/8 (2+2+3)
  - Identify the meter of a short loop by ear
prerequisites: [w33-l3-build-and-drop-daw, w04-l2-time-signatures-and-counting]
tags: [rhythm, meter, odd-meters, ear]
songs:
  - { title: "Take Five", composer: "Paul Desmond", public_domain: false }
  - { title: "Money", artist: "Pink Floyd", public_domain: false }
  - { title: "Mission: Impossible Theme", composer: "Lalo Schifrin", public_domain: false }
  - { title: "Mars, the Bringer of War (The Planets)", composer: "Gustav Holst", public_domain: true }
---

# Odd Meters — 5/4 and 7/8

Almost everything you've written is in 4/4 or 3/4. Step outside and music suddenly limps, dances or lurches in a way that grabs attention. The secret to [[odd meter]]s: **nobody counts to seven.** Every odd meter is a chain of 2s and 3s.

## 5/4 = 3 + 2 (or 2 + 3)

"Take Five" (Desmond, recorded by the Dave Brubeck Quartet, 1959) is the famous 5/4: its piano vamp feels like **ONE**-two-three-**FOUR**-five. Holst's "Mars" (1914, public domain) pounds a relentless 5/4 ostinato; the "Mission: Impossible" theme is in 5/4 too. Count it as "1-2-3-1-2".

```example
{
  "title": "5/4 vamp, grouped 3+2 (original, Dm7 – Am7)",
  "bpm": 150,
  "timeSig": "5/4",
  "key": "F",
  "tracks": [
    {
      "instrument": "piano",
      "seq": "[D3 F3 A3 C4]:q r:8 [D3 F3 A3 C4]:8 r:q [A2 G3 C4]:q [A2 G3 C4]:q | [D3 F3 A3 C4]:q r:8 [D3 F3 A3 C4]:8 r:q [A2 G3 C4]:q [A2 G3 C4]:q | [D3 F3 A3 C4]:q r:8 [D3 F3 A3 C4]:8 r:q [A2 G3 C4]:q [A2 G3 C4]:q | [D3 F3 A3 C4]:q r:8 [D3 F3 A3 C4]:8 r:q [A2 G3 C4]:q [A2 G3 C4]:q |"
    },
    {
      "instrument": "drums",
      "seq": "[kick hihat]:q hihat:q [snare hihat]:q [kick hihat]:q [snare hihat]:q | [kick hihat]:q hihat:q [snare hihat]:q [kick hihat]:q [snare hihat]:q | [kick hihat]:q hihat:q [snare hihat]:q [kick hihat]:q [snare hihat]:q | [kick hihat]:q hihat:q [snare hihat]:q [kick hihat]:q [snare hihat]:q |"
    }
  ],
  "show": [
    "pianoroll"
  ],
  "loop": true
}
```

## 7/8 = 2 + 2 + 3

In 7/8 the pulse is the 8th note, grouped unevenly. The most common grouping is **2+2+3**: "1-2, 1-2, 1-2-3" — or say it with words, "**ap**-ple **ap**-ple **pine**-ap-ple". The long group at the end gives it a lopsided, rolling feel. Pink Floyd's "Money" is in 7/4 — the same idea at a slower pulse.

```example
{
  "title": "7/8 groove, grouped 2+2+3",
  "bpm": 100,
  "timeSig": "7/8",
  "key": "G",
  "tracks": [
    {
      "instrument": "drums",
      "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 |"
    },
    {
      "instrument": "bass",
      "seq": "E2:8 E2:8 G2:8 E2:8 A2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 G2:8 D2:8 |"
    }
  ],
  "show": [
    "pianoroll"
  ],
  "loop": true
}
```

Listen for the kick and snare: they mark the start of each group (1, 3, 5), so your body can find the pattern without counting to seven.

## Drills

```exercise
{
  "id": "e1-tap-five",
  "type": "rhythm-tap",
  "title": "Tap 5/4 group starts",
  "instructions": "Tap beats 1 and 4 only — the start of each group.",
  "count": 6,
  "passScore": 0.8,
  "spec": {
    "bpm": 120,
    "timeSig": "5/4",
    "seq": "x:q r:q r:q x:q r:q | x:q r:q r:q x:q r:q |",
    "showNotation": true,
    "countIn": 1,
    "loops": 4
  }
}
```

```exercise
{
  "id": "e2-tap-seven",
  "type": "rhythm-tap",
  "title": "Tap 7/8 as 2+2+3",
  "count": 6,
  "passScore": 0.8,
  "spec": {
    "bpm": 100,
    "timeSig": "7/8",
    "seq": "x:q x:q x:q. | x:q x:q x:q. |",
    "showNotation": true,
    "countIn": 1,
    "loops": 4
  }
}
```

```exercise
{
  "id": "e3-play-vamp",
  "type": "play-melody",
  "title": "Play the 5/4 vamp",
  "instructions": "Left hand. Say '1-2-3-1-2' out loud.",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "bpm": 110,
    "timeSig": "5/4",
    "key": "F",
    "seq": "[D3 F3 A3 C4]:q r:8 [D3 F3 A3 C4]:8 r:q [A2 G3 C4]:q [A2 G3 C4]:q | [D3 F3 A3 C4]:q r:8 [D3 F3 A3 C4]:8 r:q [A2 G3 C4]:q [A2 G3 C4]:q |",
    "showStaff": true,
    "showKeyboard": true,
    "countIn": 1,
    "backing": {
      "instrument": "drums",
      "seq": "[kick hihat]:q hihat:q [snare hihat]:q [kick hihat]:q [snare hihat]:q | [kick hihat]:q hihat:q [snare hihat]:q [kick hihat]:q [snare hihat]:q |"
    }
  }
}
```

```exercise
{
  "id": "e4-ear-rhythm-five",
  "type": "ear-rhythm",
  "title": "Rhythms in 5/4",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "timeSig": "5/4",
    "bars": 1,
    "subdivision": "8",
    "rests": true,
    "answer": "choose"
  }
}
```

```exercise
{
  "id": "e5-listen-meter",
  "type": "listen",
  "title": "What's the meter?",
  "passScore": 0.75,
  "spec": {
    "example": {
      "bpm": 110,
      "timeSig": "7/8",
      "tracks": [
        {
          "instrument": "drums",
          "seq": "[kick hihat]:8 hihat:8 hihat:8 [snare hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 hihat:8 [snare hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 hihat:8 [snare hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 hihat:8 [snare hihat]:8 hihat:8 [snare hihat]:8 hihat:8 |"
        }
      ]
    },
    "questions": [
      {
        "q": "How many 8th notes before the pattern repeats?",
        "choices": [
          "5",
          "6",
          "7",
          "8"
        ],
        "answer": 2
      },
      {
        "q": "How is it grouped?",
        "choices": [
          "2+2+3",
          "3+2+2",
          "4+3",
          "2+3+2"
        ],
        "answer": 1
      }
    ]
  }
}
```

```exercise
{
  "id": "e6-meter-quiz",
  "type": "quiz",
  "title": "Grouping",
  "passScore": 0.75,
  "spec": {
    "questions": [
      {
        "q": "'Ap-ple, ap-ple, pine-ap-ple' describes…",
        "choices": [
          "5/4 as 3+2",
          "7/8 as 2+2+3",
          "6/8",
          "7/8 as 3+2+2"
        ],
        "answer": 1
      },
      {
        "q": "5/4 can be felt as…",
        "choices": [
          "3+2 or 2+3",
          "4+1 only",
          "5 equal beats, no groups",
          "2+2+2"
        ],
        "answer": 0
      },
      {
        "q": "In 7/8, which note value gets the pulse?",
        "choices": [
          "whole",
          "quarter",
          "8th",
          "16th"
        ],
        "answer": 2
      }
    ]
  }
}
```

```exercise
{
  "id": "e7-ear-modes-odd",
  "type": "ear-scale",
  "title": "Mode check (odd-meter tunes love dorian)",
  "count": 8,
  "passScore": 0.75,
  "spec": {
    "scales": [
      "dorian",
      "natural-minor",
      "phrygian",
      "mixolydian"
    ],
    "play": "melody"
  }
}
```
