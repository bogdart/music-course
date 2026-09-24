---
id: w36-l2-house-and-lo-fi
title: House and Lo-Fi
week: 36
order: 2
phase: p4
duration_min: 45
goals:
  - "Build a house groove: four-on-the-floor, off-beat hats and bass, chord stabs"
  - "Build a lo-fi groove: slow swung drums and jazzy extended chords"
  - Hear how the same chord knowledge serves two opposite moods
prerequisites: [w36-l1-hip-hop-and-trap, w33-l2-arps-and-gating]
tags: [songwriting, house, lo-fi, production, genre]
songs:
  - { title: "One More Time", artist: "Daft Punk", public_domain: false }
  - { title: "Donuts (album)", artist: "J Dilla", public_domain: false }
---

# House and Lo-Fi

Two electronic styles at opposite ends of the energy scale — and both built on harmony you already know.

## House (~120–126 bpm)

House is a dance machine. The kick hits **every beat** (four-on-the-floor), the open hi-hat and bass sit on the **off-beats** between kicks, and a clap marks 2 and 4. On top, short [[chord stab]]s — often minor 7th or major 7th chords — punch on off-beats. Daft Punk's "One More Time" (by reference) loops a filtered horn-and-chord figure for minutes and never gets boring because the groove is so solid.

```example
{
  "title": "House: kick, off-beat hats/bass, clap, stabs",
  "bpm": 124,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "drums",
      "seq": "kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 |"
    },
    {
      "instrument": "piano",
      "seq": "r:8 [G3 C4 E4]:8 r:q r:8 [G3 C4 E4]:8 r:q | r:8 [A3 C4 E4]:8 r:q r:8 [A3 C4 E4]:8 r:q | r:8 [G3 C4 E4]:8 r:q r:8 [G3 C4 E4]:8 r:q | r:8 [A3 C4 E4]:8 r:q r:8 [A3 C4 E4]:8 r:q |"
    },
    {
      "instrument": "bass",
      "seq": "r:8 A1:8 r:8 A1:8 r:8 A1:8 r:8 A1:8 | r:8 F1:8 r:8 F1:8 r:8 F1:8 r:8 F1:8 | r:8 A1:8 r:8 A1:8 r:8 A1:8 r:8 A1:8 | r:8 F1:8 r:8 F1:8 r:8 F1:8 r:8 F1:8 |"
    }
  ],
  "show": [
    "pianoroll"
  ],
  "loop": true
}
```

The stabs are a C triad over A in the bass, then an A-minor triad over F — that makes **Am7** and **Fmaj7** without ever playing a four-note chord. Chords built from a triad over a different bass note are a producer's shortcut to rich harmony.

## Lo-fi (~70–85 bpm)

Lo-fi hip-hop is house's opposite: slow, soft, nostalgic. Its bundle:

- **Jazz harmony** — ii–V–I with 9ths and 13ths, often a VI7 turnaround. Your rootless voicings from week 28 are exactly the sound.
- **Lazy, swung drums** — hits placed on triplets, some beats left empty.
- **Imperfection** — in real productions, vinyl crackle and detuning. We fake it with space and soft instruments (epiano, pad).

J Dilla's album *Donuts* (by reference) is the touchstone for the loose, behind-the-beat drum feel.

```example
{
  "title": "Lo-fi: Dm9 – G13 – Cmaj9 – A7 with swung drums",
  "bpm": 75,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "epiano",
      "seq": "[F3 A3 C4 E4]:h. r:q | [F3 A3 B3 E4]:h. r:q | [E3 G3 B3 D4]:h. r:q | [C#3 F#3 G3 B3]:h. r:q |"
    },
    {
      "instrument": "bass",
      "seq": "D2:h. A1:q | G1:h. D2:q | C2:h. G1:q | A1:h. E2:q |"
    },
    {
      "instrument": "drums",
      "seq": "[kick hihat]:8t r:8t hihat:8t [snare hihat]:8t r:8t hihat:8t r:8t r:8t [kick hihat]:8t [snare hihat]:8t r:8t hihat:8t | [kick hihat]:8t r:8t hihat:8t [snare hihat]:8t r:8t hihat:8t r:8t r:8t [kick hihat]:8t [snare hihat]:8t r:8t hihat:8t | [kick hihat]:8t r:8t hihat:8t [snare hihat]:8t r:8t hihat:8t r:8t r:8t [kick hihat]:8t [snare hihat]:8t r:8t hihat:8t | [kick hihat]:8t r:8t hihat:8t [snare hihat]:8t r:8t hihat:8t r:8t r:8t [kick hihat]:8t [snare hihat]:8t r:8t hihat:8t |"
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
  "id": "e1-play-lofi",
  "type": "play-melody",
  "title": "Play the lo-fi voicings",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "bpm": 65,
    "timeSig": "4/4",
    "key": "C",
    "seq": "[F3 A3 C4 E4]:h. r:q | [F3 A3 B3 E4]:h. r:q | [E3 G3 B3 D4]:h. r:q | [C#3 F#3 G3 B3]:h. r:q |",
    "showStaff": false,
    "showKeyboard": true,
    "countIn": 1,
    "backing": {
      "instrument": "bass",
      "seq": "D2:h. A1:q | G1:h. D2:q | C2:h. G1:q | A1:h. E2:q |"
    }
  }
}
```

```exercise
{
  "id": "e2-build-stabs",
  "type": "build-chord",
  "title": "Stab chords",
  "count": 6,
  "passScore": 0.8,
  "spec": {
    "chords": [
      "Am7",
      "Fmaj7",
      "Dm7",
      "Cmaj7",
      "Em7",
      "Gm7"
    ],
    "root": "given",
    "prompt": "symbol",
    "key": "C"
  }
}
```

```exercise
{
  "id": "e3-ear-lofi-colours",
  "type": "ear-chord",
  "title": "Lo-fi colours",
  "count": 12,
  "passScore": 0.75,
  "spec": {
    "qualities": [
      "maj7",
      "min7",
      "dom7",
      "m7b5"
    ],
    "inversions": [
      0
    ],
    "voicing": "open",
    "range": [
      "C3",
      "C5"
    ]
  }
}
```

```exercise
{
  "id": "e4-ear-house-rhythm",
  "type": "ear-rhythm",
  "title": "Off-beat or on-beat?",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "timeSig": "4/4",
    "bars": 1,
    "subdivision": "8",
    "rests": true,
    "answer": "tap"
  }
}
```

```exercise
{
  "id": "e5-ear-swing",
  "type": "ear-rhythm",
  "title": "Swung triplet feels",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "timeSig": "4/4",
    "bars": 1,
    "subdivision": "8t",
    "rests": true,
    "answer": "choose"
  }
}
```

```exercise
{
  "id": "e6-daw-house",
  "type": "daw-task",
  "title": "8-bar house groove",
  "instructions": "Four-on-the-floor kick, clap on 2 and 4, off-beat open hats, off-beat bass on roots, and off-beat chord stabs. Choose any two chords in A minor.",
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
        }
      ]
    },
    "task": "8-bar house loop.",
    "checks": [
      {
        "kind": "has-tracks",
        "instruments": [
          "drums",
          "bass",
          "piano"
        ]
      },
      {
        "kind": "bars",
        "min": 8,
        "max": 8
      },
      {
        "kind": "drum-pattern",
        "requires": [
          "kick",
          "clap",
          "ohat"
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
        "kind": "in-key",
        "key": "A",
        "scale": "natural-minor",
        "allowPassing": false,
        "track": 2
      },
      {
        "kind": "uses-rhythm",
        "values": [
          "8"
        ],
        "minDistinct": 1,
        "track": 1
      }
    ],
    "minBars": 8,
    "maxBars": 8
  }
}
```
