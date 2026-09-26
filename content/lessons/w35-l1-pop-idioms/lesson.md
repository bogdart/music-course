---
id: w35-l1-pop-idioms
title: Pop Idioms
week: 35
order: 1
phase: p4
duration_min: 40
goals:
  - Name the harmonic, melodic and arrangement habits that make a song sound "pop"
  - Build a pre-chorus that lifts into a chorus
  - Write a repeated 2-bar hook over a 4-chord loop
prerequisites: [w34-l3-seven-eight-groove-daw, w18-l3-chorus-hook-daw]
tags: [songwriting, pop, genre, arrangement]
songs:
  - { title: "Let It Be", artist: "The Beatles", public_domain: false }
  - { title: "Someone Like You", artist: "Adele", public_domain: false }
  - { title: "Don't Stop Believin'", artist: "Journey", public_domain: false }
  - { title: "Shape of You", artist: "Ed Sheeran", public_domain: false }
---

# Pop Idioms

A [[genre idiom]] is a habit so common in a style that listeners recognise the style from it alone. Genres aren't rules — they are bundles of idioms. This week and next you'll collect those bundles and write short sketches in each style.

## The pop bundle

**Harmony:** short loops, usually four chords, often the same loop for verse and chorus. I–V–vi–IV is the champion: "Let It Be" (C–G–Am–F), "Someone Like You" (A–E–F#m–D), "Don't Stop Believin'" (E–B–C#m–A). Minor-flavoured pop loves i–iv–VI–VII: "Shape of You" loops C#m–F#m–A–B. All of these by reference.

**Melody:** a [[hook]] that repeats — often the same 1–2 bar idea four times, with the last one varied. Choruses sit **higher** than verses.

**Form & arrangement:** verse – pre-chorus – chorus, with the **pre-chorus** building tension (rising melody, chords that avoid the tonic, drums thinning or building) so the chorus lands like a release. Just before the chorus, many songs pull everything out for a beat — the "drop-out" — so the downbeat hits harder.

```example
{
  "title": "Pre-chorus (IV–V–vi–V) lifting into a I–V–vi–IV chorus hook (original)",
  "bpm": 100,
  "timeSig": "4/4",
  "key": "G",
  "tracks": [
    {
      "instrument": "lead",
      "seq": "D5:q D5:q E5:q D5:q | D5:q E5:q F#5:q G5:q | E5:q E5:q F#5:q G5:q | A5:h. r:q | B5:q. A5:8 G5:q D5:q | B5:q. A5:8 G5:q D5:q | B5:q. A5:8 G5:q E5:q | D5:w |"
    },
    {
      "instrument": "piano",
      "seq": "[C4 E4 G4]:w | [D4 F#4 A4]:w | [E4 G4 B4]:w | [D4 F#4 A4]:h. r:q | [D4 G4 B4]:w | [D4 F#4 A4]:w | [E4 G4 B4]:w | [C4 E4 G4]:w |"
    },
    {
      "instrument": "bass",
      "seq": "C2:w | D2:w | E2:w | D2:h. r:q | G1:w | D2:w | E2:w | C2:w |"
    },
    {
      "instrument": "drums",
      "seq": "kick:q kick:q kick:q kick:q | kick:q kick:q kick:q kick:q | kick:8 kick:8 kick:8 kick:8 kick:8 kick:8 kick:8 kick:8 | snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 r:q | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 |"
    }
  ],
  "show": [
    "pianoroll"
  ]
}
```

Hear the three lift tricks: the melody climbs to A5, the kick doubles its speed, and beat 4 of bar 4 is silent. Then the hook states itself three times and varies the fourth, landing on a long note — the classic "three the same, one different" pop phrase.

## Drills

```exercise
{
  "id": "e1-ear-pop-loops",
  "type": "ear-progression",
  "title": "Pop loops by ear",
  "count": 8,
  "passScore": 0.75,
  "spec": {
    "key": "random",
    "mode": "major",
    "length": 4,
    "chords": [
      "I",
      "ii",
      "IV",
      "V",
      "vi"
    ],
    "style": "pad-bass"
  }
}
```

```exercise
{
  "id": "e2-ear-minor-pop",
  "type": "ear-progression",
  "title": "Minor pop loops",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "key": "random",
    "mode": "minor",
    "length": 4,
    "chords": [
      "i",
      "iv",
      "bVI",
      "bVII",
      "v"
    ],
    "style": "pad-bass"
  }
}
```

```exercise
{
  "id": "e3-play-loop",
  "type": "play-chord",
  "title": "Play I–V–vi–IV in G, then i–iv–VI–VII in C#m",
  "count": 8,
  "passScore": 0.75,
  "spec": {
    "chords": [
      "G",
      "D",
      "Em",
      "C",
      "C#m",
      "F#m",
      "A",
      "B"
    ],
    "inversion": "any",
    "sequence": true,
    "bpm": 66
  }
}
```

```exercise
{
  "id": "e4-play-hook",
  "type": "play-melody",
  "title": "Play the chorus hook",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "bpm": 90,
    "timeSig": "4/4",
    "key": "G",
    "seq": "B4:q. A4:8 G4:q D4:q | B4:q. A4:8 G4:q D4:q | B4:q. A4:8 G4:q E4:q | D4:w |",
    "showStaff": true,
    "showKeyboard": true,
    "countIn": 1,
    "backing": {
      "instrument": "piano",
      "seq": "[G3 B3 D4]:w | [F#3 A3 D4]:w | [G3 B3 E4]:w | [G3 C4 E4]:w |"
    }
  }
}
```

```exercise
{
  "id": "e5-pop-quiz",
  "type": "quiz",
  "title": "Pop conventions",
  "passScore": 0.75,
  "spec": {
    "questions": [
      {
        "q": "What is the pre-chorus mostly for?",
        "choices": [
          "Introducing a new key",
          "Building tension so the chorus feels like a release",
          "Showing off a solo",
          "Ending the song"
        ],
        "answer": 1
      },
      {
        "q": "Relative to the verse, a pop chorus melody usually sits…",
        "choices": [
          "lower",
          "higher",
          "the same",
          "an octave lower"
        ],
        "answer": 1
      },
      {
        "q": "'Let It Be' and 'Don't Stop Believin'' share which loop?",
        "choices": [
          "I–IV–V",
          "I–V–vi–IV",
          "ii–V–I",
          "i–bVII–bVI"
        ],
        "answer": 1
      }
    ]
  }
}
```

```exercise
{
  "id": "e6-daw-hook",
  "type": "daw-task",
  "title": "A 4-bar pop hook",
  "instructions": "Over the given I–V–vi–IV loop in G, write a hook that states a 1-bar idea, repeats it (exactly or slightly changed), and resolves in bar 4 on G.",
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
          "seq": "[G3 B3 D4]:w | [F#3 A3 D4]:w | [G3 B3 E4]:w | [G3 C4 E4]:w |"
        }
      ]
    },
    "task": "4-bar repeated-motif pop hook, ending on the tonic.",
    "checks": [
      {
        "kind": "bars",
        "min": 4,
        "max": 4
      },
      {
        "kind": "in-key",
        "key": "G",
        "scale": "major",
        "allowPassing": false,
        "track": 0
      },
      {
        "kind": "repetition",
        "motifBars": 1,
        "minRepeats": 2,
        "allowTransposed": true,
        "track": 0
      },
      {
        "kind": "ends-on",
        "degree": 1,
        "track": 0
      },
      {
        "kind": "range",
        "low": "D4",
        "high": "D6",
        "track": 0
      }
    ],
    "minBars": 4,
    "maxBars": 4
  }
}
```
