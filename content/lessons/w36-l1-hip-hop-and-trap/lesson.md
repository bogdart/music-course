---
id: w36-l1-hip-hop-and-trap
title: Hip-Hop and Trap
week: 36
order: 1
phase: p4
duration_min: 45
goals:
  - Program a boom-bap beat and a half-time trap beat with hi-hat rolls
  - Write an 808-style bass that follows the kick
  - Make a short "sample-style" chord loop with the app's synths
prerequisites: [w35-l3-three-genre-sketches-daw, w20-l2-genre-grooves]
tags: [songwriting, hip-hop, trap, production, genre]
songs:
  - { title: "Still D.R.E.", artist: "Dr. Dre feat. Snoop Dogg", public_domain: false }
  - { title: "Mask Off", artist: "Future", public_domain: false }
---

# Hip-Hop and Trap

Hip-hop production started with **sampling**: looping a bar or two from an old record and rapping over it. The musical lesson inside that history is powerful: **a short loop, repeated, can carry a whole track** if the drums and bass are strong. We can't sample, but we can write *sample-style* loops with our synths.

## Boom-bap

Classic 90s hip-hop (~85–95 bpm): a punchy kick, a fat snare on 2 and 4, 8th-note hats, often with a lazy swing. Over it, a 1–2 bar loop — "Still D.R.E." (by reference) is little more than a short, stabbing piano figure over a hard beat.

```example
{
  "title": "Boom-bap at 90 with a 2-bar sample-style loop (original)",
  "bpm": 90,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "drums",
      "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 |"
    },
    {
      "instrument": "epiano",
      "seq": "[A3 C4 E4 G4]:q. [A3 C4 E4 G4]:8 r:h | [F3 A3 C4 E4]:q. [F3 A3 C4 E4]:8 r:h | [A3 C4 E4 G4]:q. [A3 C4 E4 G4]:8 r:h | [F3 A3 C4 E4]:q. [F3 A3 C4 E4]:8 r:h |"
    },
    {
      "instrument": "bass",
      "seq": "A1:q. A1:8 r:h | F1:q. F1:8 r:h | A1:q. A1:8 r:h | F1:q. F1:8 r:h |"
    }
  ],
  "show": [
    "pianoroll"
  ],
  "loop": true
}
```

## Trap

Trap (~130–150 bpm) feels **half-time**: the clap lands only on beat 3, so the groove feels half as fast as the hi-hats. Signature moves:

- **Hi-hat rolls** — bursts of 32nds (or triplets) between steady 16ths.
- **[[808]] bass** — long, deep bass notes that start with the kick and ring.
- Dark minor or phrygian melodies, often a single repeated motif (think of the looping flute in Future's "Mask Off", by reference).

```example
{
  "title": "Half-time trap at 140: 16th hats, 32nd roll, 808 bass",
  "bpm": 140,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "drums",
      "seq": "[kick hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [clap hihat]:16 hihat:16 [kick hihat]:16 hihat:16 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 | [kick hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [clap hihat]:16 hihat:16 [kick hihat]:16 hihat:16 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 | [kick hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [clap hihat]:16 hihat:16 [kick hihat]:16 hihat:16 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 | [kick hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [clap hihat]:16 hihat:16 [kick hihat]:16 hihat:16 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 hihat:32 |"
    },
    {
      "instrument": "bass",
      "seq": "A1:h. r:8 A1:8 | F1:h. r:8 F1:8 | A1:h. r:8 A1:8 | F1:h. r:8 F1:8 |"
    },
    {
      "instrument": "pluck",
      "seq": "E5:8 r:8 E5:8 F5:8 E5:q r:q | C5:8 r:8 C5:8 B4:8 A4:q r:q | E5:8 r:8 E5:8 F5:8 E5:q r:q | C5:8 r:8 B4:8 C5:8 A4:q r:q |"
    }
  ],
  "show": [
    "pianoroll"
  ],
  "loop": true
}
```

The F in the melody against A minor is the phrygian-flavoured b6/b2 darkness trap loves.

## Drills

```exercise
{
  "id": "e1-tap-boombap",
  "type": "rhythm-tap",
  "title": "Tap the boom-bap kick and snare",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "bpm": 90,
    "timeSig": "4/4",
    "seq": "x:q x:q r:8 x:8 x:q |",
    "showNotation": true,
    "countIn": 1,
    "loops": 4
  }
}
```

```exercise
{
  "id": "e2-ear-rhythm-16",
  "type": "ear-rhythm",
  "title": "Hi-hat patterns",
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
  "id": "e3-play-loop",
  "type": "play-melody",
  "title": "Play the sample-style loop",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "bpm": 85,
    "timeSig": "4/4",
    "key": "C",
    "seq": "[A3 C4 E4 G4]:q. [A3 C4 E4 G4]:8 r:h | [F3 A3 C4 E4]:q. [F3 A3 C4 E4]:8 r:h |",
    "showStaff": false,
    "showKeyboard": true,
    "countIn": 1,
    "backing": {
      "instrument": "drums",
      "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 |"
    }
  }
}
```

```exercise
{
  "id": "e4-play-trap-melody",
  "type": "play-melody",
  "title": "Play the trap motif",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "bpm": 120,
    "timeSig": "4/4",
    "key": "C",
    "seq": "E5:8 r:8 E5:8 F5:8 E5:q r:q | C5:8 r:8 C5:8 B4:8 A4:q r:q |",
    "showStaff": true,
    "showKeyboard": true,
    "countIn": 1,
    "backing": {
      "instrument": "bass",
      "seq": "A1:h. r:8 A1:8 | F1:h. r:8 F1:8 |"
    }
  }
}
```

```exercise
{
  "id": "e5-ear-dark-scales",
  "type": "ear-scale",
  "title": "Dark scales",
  "count": 8,
  "passScore": 0.75,
  "spec": {
    "scales": [
      "natural-minor",
      "phrygian",
      "harmonic-minor",
      "minor-pentatonic"
    ],
    "play": "melody"
  }
}
```

```exercise
{
  "id": "e6-daw-trap",
  "type": "daw-task",
  "title": "A 4-bar trap loop",
  "instructions": "Drums: clap on beat 3 only, 16th hats with at least one 32nd roll, kick pattern of your own. Bass: 808-style long notes starting on kicks. Pluck or lead: a 1-bar motif in A minor, repeated.",
  "spec": {
    "template": {
      "bpm": 140,
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
          "instrument": "pluck",
          "seq": ""
        }
      ]
    },
    "task": "4-bar half-time trap loop.",
    "checks": [
      {
        "kind": "has-tracks",
        "instruments": [
          "drums",
          "bass",
          "pluck"
        ]
      },
      {
        "kind": "bars",
        "min": 4,
        "max": 4
      },
      {
        "kind": "drum-pattern",
        "requires": [
          "kick",
          "clap",
          "hihat"
        ],
        "track": 0
      },
      {
        "kind": "custom",
        "id": "clap-on-three",
        "note": "Self-check: the clap hits beat 3 only (half-time feel)."
      },
      {
        "kind": "uses-rhythm",
        "values": [
          "16",
          "32"
        ],
        "minDistinct": 2,
        "track": 0
      },
      {
        "kind": "in-key",
        "key": "A",
        "scale": "natural-minor",
        "allowPassing": true,
        "track": 2
      },
      {
        "kind": "repetition",
        "motifBars": 1,
        "minRepeats": 2,
        "allowTransposed": true,
        "track": 2
      }
    ],
    "minBars": 4,
    "maxBars": 4
  }
}
```
