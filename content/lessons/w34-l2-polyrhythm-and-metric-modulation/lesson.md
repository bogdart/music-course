---
id: w34-l2-polyrhythm-and-metric-modulation
title: Polyrhythm and Metric Modulation
week: 34
order: 2
phase: p4
duration_min: 40
goals:
  - Feel and tap 3 against 2
  - Play 3:2 with two hands
  - Calculate a metric modulation from a shared subdivision
prerequisites: [w34-l1-odd-meters]
tags: [rhythm, polyrhythm, metric-modulation]
songs:
  - { title: "Kashmir", artist: "Led Zeppelin", public_domain: false }
---

# Polyrhythm and Metric Modulation

## 3 against 2

A [[polyrhythm]] is two different even pulses at the same time. The most important is **3:2** — three evenly spaced notes in the time of two. It's everywhere: West African drumming, Afro-Cuban music, film scores, and every 6/8 groove where you can feel both "1-2-3 4-5-6" and "ONE two".

The trick to feeling it: learn the **composite** rhythm, the pattern both hands make together. For 3:2 it's "ONE, two-and, three" — or the phrase "**nice** cup of **tea**": hit together on "nice", then the three-part alternates with the two-part.

```example
{
  "title": "3:2 — high pluck plays 3, low bass plays 2 (3/4)",
  "bpm": 72,
  "timeSig": "3/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "pluck",
      "seq": "C5:q C5:q C5:q | C5:q C5:q C5:q | C5:q C5:q C5:q | C5:q C5:q C5:q |"
    },
    {
      "instrument": "bass",
      "seq": "C3:q. C3:q. | C3:q. C3:q. | C3:q. C3:q. | C3:q. C3:q. |"
    }
  ],
  "show": [
    "pianoroll"
  ],
  "loop": true
}
```

A cousin is **polymeter**: two patterns of different *lengths* cycling against each other. By reference, Led Zeppelin's "Kashmir" lays a riff that feels like 3/4 over drums in 4/4 — they realign every 12 beats.

## Metric modulation

A [[metric modulation]] changes tempo by reinterpreting a subdivision. Say the music is at ♩ = 80 with 8th-note triplets. Triplet 8ths run at 3 × 80 = 240 per minute. Now declare "that triplet 8th is the new plain 8th". Plain 8ths are 2 per beat, so the new tempo is 240 ÷ 2 = **♩ = 120**. The pulse of small notes never changes; the beat suddenly jumps. It sounds like a gear change that is somehow perfectly smooth.

Our examples can't change tempo mid-snippet, so listen to these two back to back — the note speed is identical.

```example
{
  "title": "Before: ♩ = 80, triplet 8ths",
  "bpm": 80,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "pluck",
      "seq": "C5:8t E5:8t G5:8t C5:8t E5:8t G5:8t C5:8t E5:8t G5:8t C5:8t E5:8t G5:8t | C5:8t E5:8t G5:8t C5:8t E5:8t G5:8t C5:8t E5:8t G5:8t C5:8t E5:8t G5:8t |"
    },
    {
      "instrument": "drums",
      "seq": "kick:q hihat:q snare:q hihat:q | kick:q hihat:q snare:q hihat:q |"
    }
  ]
}
```

```example
{
  "title": "After: ♩ = 120, plain 8ths (same note speed, new beat)",
  "bpm": 120,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "pluck",
      "seq": "C5:8 E5:8 G5:8 C5:8 E5:8 G5:8 C5:8 E5:8 | G5:8 C5:8 E5:8 G5:8 C5:8 E5:8 G5:8 C5:8 | G5:8 C5:8 E5:8 G5:8 C5:8 E5:8 G5:8 C5:8 |"
    },
    {
      "instrument": "drums",
      "seq": "kick:q hihat:q snare:q hihat:q | kick:q hihat:q snare:q hihat:q | kick:q hihat:q snare:q hihat:q |"
    }
  ]
}
```

## Drills

```exercise
{
  "id": "e1-tap-composite",
  "type": "rhythm-tap",
  "title": "Tap the 3:2 composite",
  "instructions": "'Nice cup of tea': hits on 1, 2, the 'and' of 2, and 3.",
  "count": 6,
  "passScore": 0.8,
  "spec": {
    "bpm": 70,
    "timeSig": "3/4",
    "seq": "x:q x:8 x:8 x:q | x:q x:8 x:8 x:q |",
    "showNotation": true,
    "countIn": 1,
    "loops": 4
  }
}
```

```exercise
{
  "id": "e2-play-three-two",
  "type": "play-melody",
  "title": "3:2 hands together",
  "instructions": "Right hand C4 plays 3 even notes; left hand C3 plays 2. Together on beat 1.",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "bpm": 60,
    "timeSig": "3/4",
    "key": "C",
    "seq": "[C3 C4]:q C4:8 C3:8 C4:q | [C3 C4]:q C4:8 C3:8 C4:q | [C3 C4]:q C4:8 C3:8 C4:q | [C3 C4]:q C4:8 C3:8 C4:q |",
    "showStaff": false,
    "showKeyboard": true,
    "countIn": 1
  }
}
```

```exercise
{
  "id": "e3-ear-triplets",
  "type": "ear-rhythm",
  "title": "Triplets or 8ths?",
  "count": 8,
  "passScore": 0.7,
  "spec": {
    "timeSig": "4/4",
    "bars": 1,
    "subdivision": "8t",
    "rests": false,
    "answer": "choose"
  }
}
```

```exercise
{
  "id": "e4-listen-poly",
  "type": "listen",
  "title": "Count the layers",
  "passScore": 0.75,
  "spec": {
    "example": {
      "bpm": 72,
      "timeSig": "3/4",
      "tracks": [
        {
          "instrument": "pluck",
          "seq": "C5:q C5:q C5:q | C5:q C5:q C5:q |"
        },
        {
          "instrument": "bass",
          "seq": "C3:q. C3:q. | C3:q. C3:q. |"
        }
      ]
    },
    "questions": [
      {
        "q": "How many notes per bar does the high part play?",
        "choices": [
          "2",
          "3",
          "4",
          "6"
        ],
        "answer": 1
      },
      {
        "q": "How many notes per bar does the low part play?",
        "choices": [
          "2",
          "3",
          "4",
          "6"
        ],
        "answer": 0
      }
    ]
  }
}
```

```exercise
{
  "id": "e5-mod-quiz",
  "type": "quiz-input",
  "title": "Metric modulation maths",
  "passScore": 0.7,
  "spec": {
    "questions": [
      {
        "q": "♩ = 90. Triplet 8th becomes the new plain 8th. New ♩ = ?",
        "answer": [
          "135"
        ],
        "kind": "number"
      },
      {
        "q": "♩ = 120. Plain 8th becomes the new triplet 8th. New ♩ = ?",
        "answer": [
          "80"
        ],
        "kind": "number"
      },
      {
        "q": "♩ = 100. Dotted quarter becomes the new quarter. New ♩ = ?",
        "answer": [
          "66.67",
          "66.7",
          "67"
        ],
        "kind": "number"
      }
    ]
  }
}
```

```exercise
{
  "id": "e6-daw-poly",
  "type": "daw-task",
  "title": "A 3:2 texture",
  "instructions": "In 6/8, write 4 bars where the pluck plays three quarter notes per bar (the '3') and the bass plays two dotted quarters (the '2'), on Am | F | C | G. Add a drum part that plays kick on each dotted quarter and a hi-hat on every 8th.",
  "spec": {
    "template": {
      "bpm": 80,
      "key": "C",
      "timeSig": "6/8",
      "tracks": [
        {
          "instrument": "pluck",
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
    "task": "4 bars of 3:2 polyrhythm in 6/8.",
    "checks": [
      {
        "kind": "has-tracks",
        "instruments": [
          "pluck",
          "bass",
          "drums"
        ]
      },
      {
        "kind": "bars",
        "min": 4,
        "max": 4
      },
      {
        "kind": "note-count",
        "min": 12,
        "track": 0
      },
      {
        "kind": "uses-rhythm",
        "values": [
          "q"
        ],
        "minDistinct": 1,
        "track": 0
      },
      {
        "kind": "uses-rhythm",
        "values": [
          "q."
        ],
        "minDistinct": 1,
        "track": 1
      },
      {
        "kind": "drum-pattern",
        "requires": [
          "kick",
          "hihat"
        ],
        "track": 2
      }
    ],
    "minBars": 4,
    "maxBars": 4
  }
}
```
