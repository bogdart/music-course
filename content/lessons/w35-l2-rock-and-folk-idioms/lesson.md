---
id: w35-l2-rock-and-folk-idioms
title: Rock and Folk Idioms
week: 35
order: 2
phase: p4
duration_min: 45
goals:
  - Write a power-chord riff using mixolydian bVII
  - Play a fingerpicked folk accompaniment in 6/8
  - Hear bVII and major-vs-mixolydian colour
prerequisites: [w35-l1-pop-idioms, w23-l3-riff-and-solo-daw]
tags: [songwriting, rock, folk, genre]
songs:
  - { title: "Sweet Child o' Mine", artist: "Guns N' Roses", public_domain: false }
  - { title: "Gloria", artist: "Them", public_domain: false }
  - { title: "The House of the Rising Sun", composer: "Traditional", public_domain: true }
  - { title: "Blowin' in the Wind", artist: "Bob Dylan", public_domain: false }
---

# Rock and Folk Idioms

## The rock bundle

**Harmony:** [[power chord]]s (root + 5th, no 3rd) that sound huge with distortion and can be major or minor. Mixolydian and blues flavours everywhere: the **bVII** chord is rock's signature. I–bVII–IV is a classic loop — the verse of "Sweet Child o' Mine" circles D–C–G; "Gloria" pounds E–D–A. (By reference.)

**Melody:** the **riff** is often the real hook — a repeated 1–2 bar figure in the bass register.

**Rhythm:** straight 8th hi-hats, a hard backbeat on 2 and 4, and a kick that locks with the riff.

```example
{
  "title": "Power-chord riff: D5 – C5 – G5 (I–bVII–IV, original)",
  "bpm": 120,
  "timeSig": "4/4",
  "key": "D",
  "tracks": [
    {
      "instrument": "bass",
      "seq": "[D3 A3]:8 [D3 A3]:8 r:8 [D3 A3]:8 [C3 G3]:q [G2 D3]:q | [D3 A3]:8 [D3 A3]:8 r:8 [D3 A3]:8 [C3 G3]:q [G2 D3]:q | [D3 A3]:8 [D3 A3]:8 r:8 [D3 A3]:8 [C3 G3]:q [G2 D3]:q | [D3 A3]:8 [D3 A3]:8 r:8 [D3 A3]:8 [C3 G3]:q [G2 D3]:q |"
    },
    {
      "instrument": "drums",
      "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 |"
    }
  ],
  "show": [
    "pianoroll"
  ],
  "loop": true
}
```

## The folk bundle

**Harmony:** simple and diatonic — I, IV, V, vi — often with a drone or open strings ringing. "Blowin' in the Wind" lives on I–IV–V (by reference).

**Texture:** acoustic, **fingerpicked** arpeggios instead of block chords: bass note on the beat, upper notes in between.

**Meter:** 3/4 and 6/8 are common. "The House of the Rising Sun" is traditional (public domain): in A minor its chords run Am–C–D–F–Am–C–E–E, one per bar in 6/8. Here it is with an original fingerpicking pattern.

```example
{
  "title": "'House of the Rising Sun' chords, fingerpicked in 6/8",
  "bpm": 70,
  "timeSig": "6/8",
  "key": "C",
  "tracks": [
    {
      "instrument": "piano",
      "seq": "A2:8 E4:8 C4:8 E4:8 A2:8 E4:8 | C3:8 E4:8 C4:8 E4:8 C3:8 E4:8 | D3:8 F#4:8 D4:8 F#4:8 D3:8 F#4:8 | F2:8 F4:8 C4:8 F4:8 F2:8 F4:8 | A2:8 E4:8 C4:8 E4:8 A2:8 E4:8 | C3:8 E4:8 C4:8 E4:8 C3:8 E4:8 | E2:8 E4:8 B3:8 E4:8 E2:8 E4:8 | E2:8 G#4:8 B3:8 G#4:8 E2:8 G#4:8 |"
    }
  ],
  "show": [
    "pianoroll"
  ]
}
```

The D major chord in a minor key (IV instead of iv) is a dorian touch; the E major at the end is harmonic-minor V. Folk is simple — but not plain.

## Drills

```exercise
{
  "id": "e1-play-riff",
  "type": "play-melody",
  "title": "Play the riff",
  "instructions": "Left hand, two fingers (1 and 5) locked in a power-chord shape.",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "bpm": 100,
    "timeSig": "4/4",
    "key": "D",
    "seq": "[D3 A3]:8 [D3 A3]:8 r:8 [D3 A3]:8 [C3 G3]:q [G2 D3]:q | [D3 A3]:8 [D3 A3]:8 r:8 [D3 A3]:8 [C3 G3]:q [G2 D3]:q |",
    "showStaff": false,
    "showKeyboard": true,
    "countIn": 1,
    "backing": {
      "instrument": "drums",
      "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 |"
    }
  }
}
```

```exercise
{
  "id": "e2-play-folk",
  "type": "play-melody",
  "title": "Fingerpick the first four chords",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "bpm": 60,
    "timeSig": "6/8",
    "key": "C",
    "seq": "A2:8 E4:8 C4:8 E4:8 A2:8 E4:8 | C3:8 E4:8 C4:8 E4:8 C3:8 E4:8 | D3:8 F#4:8 D4:8 F#4:8 D3:8 F#4:8 | F2:8 F4:8 C4:8 F4:8 F2:8 F4:8 |",
    "showStaff": false,
    "showKeyboard": true,
    "countIn": 1
  }
}
```

```exercise
{
  "id": "e3-ear-mix",
  "type": "ear-scale",
  "title": "Major, mixolydian or minor pentatonic?",
  "count": 8,
  "passScore": 0.75,
  "spec": {
    "scales": [
      "major",
      "mixolydian",
      "minor-pentatonic",
      "dorian"
    ],
    "play": "melody"
  }
}
```

```exercise
{
  "id": "e4-ear-bvii",
  "type": "ear-progression",
  "title": "Find the bVII",
  "count": 8,
  "passScore": 0.7,
  "spec": {
    "key": "random",
    "mode": "major",
    "length": 4,
    "chords": [
      "I",
      "IV",
      "V",
      "bVII",
      "vi"
    ],
    "style": "block"
  }
}
```

```exercise
{
  "id": "e5-ear-rhythm-68",
  "type": "ear-rhythm",
  "title": "6/8 patterns",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "timeSig": "6/8",
    "bars": 1,
    "subdivision": "8",
    "rests": true,
    "answer": "choose"
  }
}
```

```exercise
{
  "id": "e6-daw-riff",
  "type": "daw-task",
  "title": "Your own rock riff",
  "instructions": "Write a 2-bar power-chord riff in D (roots from D mixolydian: D, C, G, A, E…), repeat it to fill 8 bars, and add a rock beat: kick on 1 and 3, snare on 2 and 4, 8th hi-hats.",
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
          "instrument": "drums",
          "seq": ""
        }
      ]
    },
    "task": "8 bars: repeated power-chord riff + rock beat.",
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
        "min": 8,
        "max": 8
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
        "minRepeats": 3,
        "allowTransposed": false,
        "track": 0
      },
      {
        "kind": "drum-pattern",
        "requires": [
          "kick",
          "snare",
          "hihat"
        ],
        "kickOnBeats": [
          1,
          3
        ],
        "snareOnBeats": [
          2,
          4
        ],
        "track": 1
      }
    ],
    "minBars": 8,
    "maxBars": 8
  }
}
```
