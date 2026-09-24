---
id: w40-l2-polish-songs-two-and-three
title: Portfolio — Polish Songs Two and Three
week: 40
order: 2
phase: p4
duration_min: 50
goals:
  - Improve section transitions with fills, pickups, drop-outs and risers
  - Choose and write a strong ending (cadence, button or loop-out)
  - Finish portfolio pieces two and three
prerequisites: [w40-l1-polish-song-one]
tags: [portfolio, arrangement, transitions, endings, daw]
---

# Portfolio — Polish Songs Two and Three

Same two passes as last lesson, plus two finishing skills that separate a sketch from a track: **transitions** and **endings**.

## Transitions

A [[transition]] tells the listener "something new is coming". Five tools, from subtle to obvious:

- **Pickup:** the melody starts a beat or two early, leading into the new section.
- **Drop-out:** everything (or everything but one part) stops for a beat before the downbeat.
- **Drum fill:** the last half-bar or bar of a section breaks the pattern — toms, snare 16ths.
- **Riser:** a rising line, snare roll or pad climbing up the octave across the last bars.
- **Harmonic setup:** a V7 (or a borrowed bVII) at the end of the section leaning into the next.

```example
{
  "title": "A 1-bar fill with a bass pickup into a new section",
  "bpm": 100,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "drums",
      "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | kick:8 kick:8 snare:8 snare:8 tom:16 tom:16 tom:16 tom:16 snare:16 snare:16 snare:16 snare:16 | [kick crash]:q hihat:q [snare hihat]:q hihat:q |"
    },
    {
      "instrument": "bass",
      "seq": "C2:w | G1:h. A1:8 B1:8 | C2:w |"
    }
  ],
  "show": [
    "pianoroll"
  ]
}
```

## Endings

Three reliable endings:

1. **Cadence:** V–I or IV–iv–I on the tonic, held. Warm and final — ballads, folk, jazz (try a 6/9 chord).
2. **Button:** the band stops dead on one short hit, often on the "and" of 4 or on beat 1 after a fill. Punchy — pop, funk, rock.
3. **Loop-out / strip-down:** remove layers bar by bar until only one element is left — dance, lo-fi, film.

Whatever you choose, **decide it**. A song that just stops when the loop runs out sounds unfinished.

```example
{
  "title": "Three endings in C: cadence (6/9), button, strip-down",
  "bpm": 100,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "piano",
      "seq": "[F2 A3 C4]:w | [F2 Ab3 C4]:w | [C3 E3 A3 D4 G4]:w | r:w | [G2 F3 B3]:h. [C3 E3 G3]:8 r:8 | r:w | [C3 G3 E4]:w | [C3 G3]:w | C3:w |"
    }
  ],
  "show": [
    "pianoroll"
  ]
}
```

## Drills

```exercise
{
  "id": "e1-tap-fill",
  "type": "rhythm-tap",
  "title": "Tap the fill",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "bpm": 90,
    "timeSig": "4/4",
    "seq": "x:8 x:8 x:8 x:8 x:16 x:16 x:16 x:16 x:16 x:16 x:16 x:16 | x:q r:q r:h |",
    "showNotation": true,
    "countIn": 1,
    "loops": 2
  }
}
```

```exercise
{
  "id": "e2-play-ending",
  "type": "play-melody",
  "title": "Play the IV–iv–I 6/9 ending",
  "count": 6,
  "passScore": 0.8,
  "spec": {
    "bpm": 70,
    "timeSig": "4/4",
    "key": "C",
    "seq": "[F2 A3 C4]:w | [F2 Ab3 C4]:w | [C3 E3 A3 D4 G4]:w |",
    "showStaff": false,
    "showKeyboard": true,
    "countIn": 1
  }
}
```

```exercise
{
  "id": "e3-ear-rhythm",
  "type": "ear-rhythm",
  "title": "Fill rhythms",
  "count": 6,
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
  "id": "e4-daw-polish-two",
  "type": "daw-task",
  "title": "Song two: final version",
  "instructions": "Apply the arrangement and mix passes, add at least two different transition tools, and give it a deliberate ending. Rebuild or paste the final version here.",
  "spec": {
    "template": {
      "bpm": 100,
      "key": "C",
      "timeSig": "4/4",
      "tracks": [
        {
          "instrument": "lead",
          "seq": ""
        },
        {
          "instrument": "piano",
          "seq": ""
        },
        {
          "instrument": "bass",
          "seq": ""
        },
        {
          "instrument": "drums",
          "seq": ""
        },
        {
          "instrument": "pad",
          "seq": ""
        }
      ]
    },
    "task": "Finished portfolio piece two.",
    "checks": [
      {
        "kind": "bars",
        "min": 24,
        "max": 128
      },
      {
        "kind": "drum-pattern",
        "requires": [
          "kick",
          "snare"
        ],
        "track": 3
      },
      {
        "kind": "custom",
        "id": "transitions",
        "note": "Self-check: two or more different transition tools used."
      },
      {
        "kind": "custom",
        "id": "ending",
        "note": "Self-check: a deliberate cadence, button or strip-down ending."
      }
    ],
    "minBars": 24,
    "maxBars": 128
  }
}
```

```exercise
{
  "id": "e5-daw-polish-three",
  "type": "daw-task",
  "title": "Song three: final version",
  "instructions": "Same process. If this is your film cue or developed motif, the 'drums' track may stay empty — focus on the arc and the ending.",
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
          "instrument": "piano",
          "seq": ""
        },
        {
          "instrument": "bass",
          "seq": ""
        },
        {
          "instrument": "drums",
          "seq": ""
        },
        {
          "instrument": "pad",
          "seq": ""
        }
      ]
    },
    "task": "Finished portfolio piece three.",
    "checks": [
      {
        "kind": "bars",
        "min": 24,
        "max": 128
      },
      {
        "kind": "note-count",
        "min": 24,
        "track": 0
      },
      {
        "kind": "custom",
        "id": "arc",
        "note": "Self-check: clear climax and release."
      },
      {
        "kind": "custom",
        "id": "ending",
        "note": "Self-check: a deliberate ending."
      }
    ],
    "minBars": 24,
    "maxBars": 128
  }
}
```

```exercise
{
  "id": "e6-reflect",
  "type": "reflect",
  "title": "Transition audit",
  "spec": {
    "prompt": "For each of songs two and three, name every section change and the tool you used there. Which transition works best, and why?",
    "minWords": 30
  }
}
```
