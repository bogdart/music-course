---
id: w33-l2-arps-and-gating
title: Arpeggiators and Gating
week: 33
order: 2
phase: p4
duration_min: 45
goals:
  - Turn chords into 16th-note arpeggio patterns (up, down, up-down, broken)
  - Fake a sidechain "pump" by gating pad chords around the kick
  - Build an 8-bar arp + gated pad + four-on-the-floor loop
prerequisites: [w33-l1-synthesis-basics]
tags: [production, electronic, arpeggio, groove]
---

# Arpeggiators and Gating

Electronic music turns static chords into *motion*. Two tricks do most of the work: arpeggios and gating.

## Arpeggios

An [[arpeggiator]] plays the notes of a held chord one at a time in a repeating pattern. Our DAW has no arp button, so we write the pattern by hand — which is better practice anyway, because you choose every note.

Common patterns over a 3-note chord plus its octave: **up** (1-3-5-8), **down** (8-5-3-1), **up-down** (1-3-5-8-5-3), **broken** (1-5-3-8). In 16th notes at 124 bpm they shimmer; on a pluck they sparkle.

```example
{
  "title": "Up-pattern arp in 16ths on pluck: Am \u2013 F \u2013 C \u2013 G",
  "bpm": 124,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "pluck",
      "seq": "A3:16 C4:16 E4:16 A4:16 A3:16 C4:16 E4:16 A4:16 A3:16 C4:16 E4:16 A4:16 A3:16 C4:16 E4:16 A4:16 | F3:16 A3:16 C4:16 F4:16 F3:16 A3:16 C4:16 F4:16 F3:16 A3:16 C4:16 F4:16 F3:16 A3:16 C4:16 F4:16 | G3:16 C4:16 E4:16 G4:16 G3:16 C4:16 E4:16 G4:16 G3:16 C4:16 E4:16 G4:16 G3:16 C4:16 E4:16 G4:16 | G3:16 B3:16 D4:16 G4:16 G3:16 B3:16 D4:16 G4:16 G3:16 B3:16 D4:16 G4:16 G3:16 B3:16 D4:16 G4:16 |"
    },
    {
      "instrument": "bass",
      "seq": "A1:w | F1:w | C2:w | G1:w |"
    }
  ],
  "show": [
    "pianoroll"
  ],
  "loop": true
}
```

## Gating and the sidechain "pump"

In dance music the kick drum is king. Producers use *sidechain compression* so that every time the kick hits, the pad ducks out of the way and swells back — the famous pumping sound. We can’t compress yet, but we can *gate* the pad ([[gating]]): leave a tiny rest exactly where the kick lands and let the chord come in just after.

Pattern per beat: a 16th rest (the kick's spot), then a dotted-8th chord. Four times a bar.

```example
{
  "title": "Gated pad pumping against a four-on-the-floor kick",
  "bpm": 124,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "pad",
      "seq": "r:16 [A3 C4 E4]:8. r:16 [A3 C4 E4]:8. r:16 [A3 C4 E4]:8. r:16 [A3 C4 E4]:8. | r:16 [A3 C4 F4]:8. r:16 [A3 C4 F4]:8. r:16 [A3 C4 F4]:8. r:16 [A3 C4 F4]:8. | r:16 [G3 C4 E4]:8. r:16 [G3 C4 E4]:8. r:16 [G3 C4 E4]:8. r:16 [G3 C4 E4]:8. | r:16 [G3 B3 D4]:8. r:16 [G3 B3 D4]:8. r:16 [G3 B3 D4]:8. r:16 [G3 B3 D4]:8. |"
    },
    {
      "instrument": "drums",
      "seq": "kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 |"
    }
  ],
  "show": [
    "pianoroll"
  ],
  "loop": true
}
```

Hear how the pad and kick interlock instead of fighting? That rhythmic space is also why the mix sounds louder and clearer. (Note: our note format has no velocity marks, so "ducking" is all-or-nothing here — a rest, not a dip.)

## Drills

```exercise
{
  "id": "e1-play-arp",
  "type": "play-melody",
  "title": "Play the up-arp (Am and F)",
  "instructions": "Right hand. Keep your hand in one position per chord; the pinky takes the octave.",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "bpm": 80,
    "timeSig": "4/4",
    "key": "C",
    "seq": "A3:16 C4:16 E4:16 A4:16 A3:16 C4:16 E4:16 A4:16 A3:16 C4:16 E4:16 A4:16 A3:16 C4:16 E4:16 A4:16 | F3:16 A3:16 C4:16 F4:16 F3:16 A3:16 C4:16 F4:16 F3:16 A3:16 C4:16 F4:16 F3:16 A3:16 C4:16 F4:16 |",
    "showStaff": false,
    "showKeyboard": true,
    "countIn": 1,
    "backing": {
      "instrument": "pad",
      "seq": "[A2 E3]:w | [F2 C3]:w |"
    }
  }
}
```

```exercise
{
  "id": "e2-build-arp-chords",
  "type": "build-chord",
  "title": "Chords you will arpeggiate",
  "count": 6,
  "passScore": 0.8,
  "spec": {
    "chords": [
      "Am",
      "F",
      "C",
      "G",
      "Asus2",
      "Fmaj7"
    ],
    "root": "given",
    "prompt": "symbol",
    "key": "C"
  }
}
```

```exercise
{
  "id": "e3-tap-gate",
  "type": "rhythm-tap",
  "title": "Tap the gate pattern",
  "instructions": "Tap only the chord hits \u2014 the off-16ths after each beat.",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "bpm": 100,
    "timeSig": "4/4",
    "seq": "r:16 x:8. r:16 x:8. r:16 x:8. r:16 x:8. |",
    "showNotation": true,
    "countIn": 1,
    "loops": 4
  }
}
```

```exercise
{
  "id": "e4-ear-rhythm-16",
  "type": "ear-rhythm",
  "title": "16th-note patterns",
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
  "id": "e5-ear-prog-minor",
  "type": "ear-progression",
  "title": "Dance-loop progressions",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "key": "A",
    "mode": "minor",
    "length": 4,
    "chords": [
      "i",
      "iv",
      "v",
      "bVI",
      "bIII",
      "bVII"
    ],
    "style": "arpeggio"
  }
}
```

```exercise
{
  "id": "e6-daw-arp-gate",
  "type": "daw-task",
  "title": "Arp + gated pad + kick",
  "instructions": "8 bars on Am\u2013F\u2013C\u2013G (each chord one bar, twice). Pluck: your own 16th-note arp pattern (try up-down or broken). Pad: gated chords with a 16th rest on every beat. Drums: kick on every beat, clap on 2 and 4, open hat on the off-beats.",
  "spec": {
    "template": {
      "bpm": 124,
      "key": "C",
      "timeSig": "4/4",
      "tracks": [
        {
          "instrument": "pluck",
          "seq": ""
        },
        {
          "instrument": "pad",
          "seq": ""
        },
        {
          "instrument": "drums",
          "seq": ""
        },
        {
          "instrument": "bass",
          "seq": "A1:w | F1:w | C2:w | G1:w | A1:w | F1:w | C2:w | G1:w |"
        }
      ]
    },
    "task": "8-bar loop with a hand-written arp, a gated pad and a four-on-the-floor beat.",
    "checks": [
      {
        "kind": "has-tracks",
        "instruments": [
          "pluck",
          "pad",
          "drums",
          "bass"
        ]
      },
      {
        "kind": "bars",
        "min": 8,
        "max": 8
      },
      {
        "kind": "uses-rhythm",
        "values": [
          "16"
        ],
        "minDistinct": 1,
        "track": 0
      },
      {
        "kind": "note-count",
        "min": 96,
        "track": 0
      },
      {
        "kind": "in-key",
        "key": "A",
        "scale": "natural-minor",
        "allowPassing": false,
        "track": 0
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
        "track": 2
      },
      {
        "kind": "custom",
        "id": "gated-pad",
        "note": "Self-check: the pad has a short rest on each beat where the kick hits."
      }
    ],
    "minBars": 8,
    "maxBars": 8
  }
}
```
