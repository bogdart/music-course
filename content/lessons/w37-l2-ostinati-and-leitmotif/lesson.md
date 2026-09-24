---
id: w37-l2-ostinati-and-leitmotif
title: Ostinati and Leitmotif
week: 37
order: 2
phase: p4
duration_min: 45
goals:
  - Write an ostinato that creates momentum or dread under a scene
  - Create a short leitmotif and transform it for different dramatic situations
  - Hear a motif survive changes of mode, tempo and instrument
prerequisites: [w37-l1-mood-mode-tempo-orchestration]
tags: [film, game, ostinato, leitmotif, composition]
songs:
  - { title: "In the Hall of the Mountain King (Peer Gynt)", composer: "Edvard Grieg", public_domain: true }
  - { title: "The Imperial March", composer: "John Williams", public_domain: false }
---

# Ostinati and Leitmotif

Two tools that film and game composers use every day.

## Ostinato: the engine

An [[ostinato]] is a short figure repeated over and over. It creates momentum (chase scenes), tension (a ticking bomb) or hypnosis (a desert crossing). The trick is to keep the ostinato fixed while *other* things change around it — harmony, orchestration, volume, tempo.

Grieg's "In the Hall of the Mountain King" (1875, public domain) is the textbook example: one 4-bar phrase, repeated and repeated, getting faster and louder until it explodes. Here are its first four bars:

```example
{
  "title": "Grieg — In the Hall of the Mountain King, opening (public domain)",
  "bpm": 100,
  "timeSig": "4/4",
  "key": "D",
  "tracks": [
    {
      "instrument": "pluck",
      "seq": "B3:8 C#4:8 D4:8 E4:8 F#4:8 D4:8 F#4:q | F4:8 C#4:8 F4:q E4:8 C4:8 E4:q | B3:8 C#4:8 D4:8 E4:8 F#4:8 D4:8 F#4:8 B4:8 | A4:8 F#4:8 D4:8 F#4:8 A4:h |"
    }
  ],
  "show": [
    "staff"
  ]
}
```

A modern action ostinato is often just a pulsing low note with a moving upper neighbour:

```example
{
  "title": "Action ostinato in A minor (original)",
  "bpm": 130,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "bass",
      "seq": "A2:8 A2:8 E3:8 A2:8 A2:8 F3:8 A2:8 E3:8 | A2:8 A2:8 E3:8 A2:8 A2:8 F3:8 A2:8 E3:8 | A2:8 A2:8 E3:8 A2:8 A2:8 F3:8 A2:8 E3:8 | A2:8 A2:8 E3:8 A2:8 A2:8 F3:8 A2:8 E3:8 |"
    },
    {
      "instrument": "strings",
      "seq": "[A3 E4]:w | [A3 F4]:w | [A3 E4]:w | [G3 D4]:w |"
    },
    {
      "instrument": "drums",
      "seq": "kick:8 r:8 tom:8 tom:8 kick:8 r:8 tom:8 snare:8 | kick:8 r:8 tom:8 tom:8 kick:8 r:8 tom:8 snare:8 | kick:8 r:8 tom:8 tom:8 kick:8 r:8 tom:8 snare:8 | kick:8 r:8 tom:8 tom:8 kick:8 r:8 tom:8 snare:8 |"
    }
  ],
  "show": [
    "pianoroll"
  ],
  "loop": true
}
```

## Leitmotif: the character's signature

A [[leitmotif]] is a short theme tied to a character, place or idea. Wagner built operas on them; John Williams's "Imperial March" (by reference) tells you Darth Vader is near before you see him. The power is in **transformation**: the same motif in minor for defeat, slow and high for memory, fast with drums for battle. The audience recognises it every time — and feels the story move.

```example
{
  "title": "Hero leitmotif (original): triumphant, then defeated (minor, slow, low strings)",
  "bpm": 90,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "lead",
      "seq": "G4:q C5:q. D5:8 E5:q | G5:h. E5:q | F5:q. E5:8 D5:q B4:q | C5:w | r:w | r:w | r:w | r:w |"
    },
    {
      "instrument": "strings",
      "seq": "r:w | r:w | r:w | r:w | G3:q C4:q. D4:8 Eb4:q | G4:h. Eb4:q | F4:q. Eb4:8 D4:q B3:q | C4:w |"
    }
  ],
  "show": [
    "staff"
  ]
}
```

## Making a motif that survives

A good leitmotif is **short** (2–4 bars), has a **memorable rhythm** and a **distinctive interval** — the rising fourth that opens our hero motif, for example. Rhythm and contour are what listeners recognise; the exact notes can change. Test yours by playing it in minor, slowly, then fast on a different instrument: if you still recognise it every time, it works.

## Drills

```exercise
{
  "id": "e1-play-grieg",
  "type": "play-melody",
  "title": "Play the Grieg ostinato",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "bpm": 90,
    "timeSig": "4/4",
    "key": "D",
    "seq": "B3:8 C#4:8 D4:8 E4:8 F#4:8 D4:8 F#4:q | F4:8 C#4:8 F4:q E4:8 C4:8 E4:q | B3:8 C#4:8 D4:8 E4:8 F#4:8 D4:8 F#4:8 B4:8 | A4:8 F#4:8 D4:8 F#4:8 A4:h |",
    "showStaff": true,
    "showKeyboard": true,
    "countIn": 1
  }
}
```

```exercise
{
  "id": "e2-play-hero",
  "type": "play-melody",
  "title": "Play the hero motif — major, then minor",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "bpm": 80,
    "timeSig": "4/4",
    "key": "C",
    "seq": "G4:q C5:q. D5:8 E5:q | G5:h. E5:q | F5:q. E5:8 D5:q B4:q | C5:w | G4:q C5:q. D5:8 Eb5:q | G5:h. Eb5:q | F5:q. Eb5:8 D5:q B4:q | C5:w |",
    "showStaff": true,
    "showKeyboard": true,
    "countIn": 1
  }
}
```

```exercise
{
  "id": "e3-ear-major-minor",
  "type": "ear-scale",
  "title": "Major or minor versions",
  "count": 8,
  "passScore": 0.8,
  "spec": {
    "scales": [
      "major",
      "natural-minor",
      "harmonic-minor",
      "dorian"
    ],
    "play": "melody"
  }
}
```

```exercise
{
  "id": "e4-ear-motif",
  "type": "ear-melody",
  "title": "Remember the motif",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "key": "C",
    "degrees": [
      1,
      2,
      3,
      5,
      6
    ],
    "length": 4,
    "rhythm": "simple",
    "answer": "play"
  }
}
```

```exercise
{
  "id": "e5-leit-quiz",
  "type": "quiz",
  "title": "Tools for the story",
  "passScore": 0.75,
  "spec": {
    "questions": [
      {
        "q": "The hero has just lost a friend. Best transformation of the hero motif?",
        "choices": [
          "same, but faster with drums",
          "minor mode, slower, softer, lower",
          "up a semitone, brass-like lead",
          "unchanged"
        ],
        "answer": 1
      },
      {
        "q": "An ostinato works best when…",
        "choices": [
          "it changes every bar",
          "it stays fixed while other elements change",
          "it is played only once",
          "it is in 7/8"
        ],
        "answer": 1
      },
      {
        "q": "Grieg builds excitement in 'Mountain King' mainly by…",
        "choices": [
          "changing key every bar",
          "repeating the phrase faster and louder",
          "adding lyrics",
          "silence"
        ],
        "answer": 1
      }
    ]
  }
}
```

```exercise
{
  "id": "e6-daw-leitmotif",
  "type": "daw-task",
  "title": "A leitmotif in two versions",
  "instructions": "Write a 2- to 4-bar leitmotif for a character of your choice on lead (bars 1–4). In bars 5–8, restate it transformed for a darker moment: change mode (minor/phrygian), instrument (strings or piano) and register. Add an ostinato under bars 5–8.",
  "spec": {
    "template": {
      "bpm": 90,
      "key": "C",
      "timeSig": "4/4",
      "tracks": [
        {
          "instrument": "lead",
          "seq": ""
        },
        {
          "instrument": "strings",
          "seq": ""
        },
        {
          "instrument": "bass",
          "seq": ""
        }
      ]
    },
    "task": "Leitmotif + transformed restatement over an ostinato.",
    "checks": [
      {
        "kind": "bars",
        "min": 8,
        "max": 8
      },
      {
        "kind": "has-tracks",
        "instruments": [
          "lead",
          "strings",
          "bass"
        ]
      },
      {
        "kind": "note-count",
        "min": 6,
        "track": 0
      },
      {
        "kind": "repetition",
        "motifBars": 1,
        "minRepeats": 4,
        "allowTransposed": true,
        "track": 2
      },
      {
        "kind": "custom",
        "id": "recognisable",
        "note": "Self-check: the transformed motif keeps the original rhythm and contour so it is still recognisable."
      }
    ],
    "minBars": 8,
    "maxBars": 8
  }
}
```
