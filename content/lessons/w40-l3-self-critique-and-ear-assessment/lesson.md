---
id: w40-l3-self-critique-and-ear-assessment
title: Self-Critique and Phase 4 Ear Assessment
week: 40
order: 3
phase: p4
duration_min: 50
goals:
  - Critique your three portfolio pieces with a structured checklist
  - Complete the Phase 4 ear and keyboard assessment
  - Set goals for Phase 5 (transcription and mastery)
prerequisites: [w40-l2-polish-songs-two-and-three]
tags: [portfolio, assessment, ear, review]
---

# Self-Critique and Phase 4 Ear Assessment

Congratulations — Phase 4 is done. You started it with 9th chords and finish with a portfolio of three finished pieces in different styles. Today: an honest review, then a check-up of your ears and hands.

## The self-critique checklist

Listen to each portfolio piece once, start to finish, without stopping. Then score each item 1–3 (1 = needs work, 3 = strong):

| Area | Question |
|------|----------|
| Idea | Is there one clear, memorable idea (hook, motif, groove)? |
| Harmony | Do the chords support the melody? Is there at least one colourful moment (extension, borrowed chord, sub)? |
| Melody | Singable or playable? Good prosody and range? Does it peak somewhere? |
| Rhythm | Does the groove feel steady and intentional? |
| Form | Is there an arc — contrast, climax, release? Are transitions clear? |
| Arrangement | Does every track have a job? Any clutter or register clashes? |
| Ending | Deliberate and satisfying? |

Circle the lowest score for each piece: that's the one thing to fix first if you return to it. Don't fix everything — finished and imperfect beats perfect and abandoned.

## Ear and keyboard assessment

The drills below mix everything from weeks 27–39: 7th-chord qualities, borrowed chords and dominants in progressions, modes, odd meters, melodic dictation and jazz voicings. Aim for 80%. Anything below that becomes a focus in your spaced-repetition reviews during Phase 5, where your ears will be doing the heavy lifting: taking real songs apart.

Before you start, listen to this recap and name each chord colour as it goes by:

```example
{
  "title": "Phase 4 in eight bars: rootless ii–V–I, tritone sub, borrowed iv, 6/9 ending",
  "bpm": 76,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "epiano",
      "seq": "[F3 A3 C4 E4]:w | [F3 A3 B3 E4]:w | [E3 G3 B3 D4]:w | [C3 E3 G3 A3]:w | [F3 A3 C4 E4]:w | [F3 Ab3 B3 Eb4]:w | [F3 Ab3 C4 D4]:w | [C3 E3 A3 D4 G4]:w |"
    },
    {
      "instrument": "bass",
      "seq": "D2:w | G1:w | C2:w | A1:w | D2:w | Db2:w | F2:w | C2:w |"
    }
  ],
  "show": [
    "keyboard"
  ]
}
```

## Assessment

```exercise
{
  "id": "a1-chords",
  "type": "ear-chord",
  "title": "Chord qualities",
  "count": 12,
  "passScore": 0.8,
  "spec": {
    "qualities": [
      "maj7",
      "min7",
      "dom7",
      "m7b5",
      "sus2",
      "sus4",
      "dim",
      "aug"
    ],
    "inversions": [
      0
    ],
    "voicing": "mixed",
    "range": [
      "C2",
      "C5"
    ]
  }
}
```

```exercise
{
  "id": "a2-progressions",
  "type": "ear-progression",
  "title": "Progressions: diatonic, V7 and borrowed",
  "count": 10,
  "passScore": 0.75,
  "spec": {
    "key": "random",
    "mode": "major",
    "length": 4,
    "chords": [
      "I",
      "ii",
      "iii",
      "IV",
      "iv",
      "V7",
      "vi",
      "bVI",
      "bVII"
    ],
    "style": "pad-bass"
  }
}
```

```exercise
{
  "id": "a3-modes",
  "type": "ear-scale",
  "title": "Modes and colours",
  "count": 12,
  "passScore": 0.75,
  "spec": {
    "scales": [
      "major",
      "dorian",
      "phrygian",
      "lydian",
      "mixolydian",
      "natural-minor",
      "locrian",
      "blues"
    ],
    "play": "asc"
  }
}
```

```exercise
{
  "id": "a4-odd-meter",
  "type": "ear-rhythm",
  "title": "Odd-meter rhythms",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "timeSig": "7/8",
    "bars": 1,
    "subdivision": "8",
    "rests": true,
    "answer": "choose"
  }
}
```

```exercise
{
  "id": "a5-melody",
  "type": "ear-melody",
  "title": "Melodic dictation",
  "count": 8,
  "passScore": 0.75,
  "spec": {
    "key": "Bb",
    "degrees": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "length": 6,
    "rhythm": "simple",
    "answer": "play"
  }
}
```

```exercise
{
  "id": "a6-build",
  "type": "build-chord",
  "title": "Build extended and altered chords",
  "count": 10,
  "passScore": 0.8,
  "spec": {
    "chords": [
      "Dm9",
      "G13",
      "Cmaj9",
      "Bm7b5",
      "E7",
      "Am6",
      "Db7",
      "C#dim7",
      "Fadd9",
      "Abmaj7"
    ],
    "root": "given",
    "prompt": "symbol"
  }
}
```

```exercise
{
  "id": "a7-play-rootless",
  "type": "play-melody",
  "title": "Rootless ii–V–I in C and F",
  "count": 6,
  "passScore": 0.8,
  "spec": {
    "bpm": 70,
    "timeSig": "4/4",
    "key": "C",
    "seq": "[F3 A3 C4 E4]:w | [F3 A3 B3 E4]:w | [E3 G3 B3 D4]:w | r:w | [F3 A3 Bb3 D4]:w | [E3 A3 Bb3 D4]:w | [E3 G3 A3 C4]:w | r:w |",
    "showStaff": false,
    "showKeyboard": true,
    "countIn": 1,
    "backing": {
      "instrument": "bass",
      "seq": "D2:w | G1:w | C2:w | r:w | G1:w | C2:w | F2:w | r:w |"
    }
  }
}
```

```exercise
{
  "id": "a8-reflect",
  "type": "reflect",
  "title": "Phase 4 retrospective",
  "spec": {
    "prompt": "Paste your checklist scores for the three pieces. What was your biggest musical breakthrough in Phase 4? Which skill (jazz voicings, reharmonisation, improvisation, production, form, topline) do you most want to keep developing, and what's one goal for Phase 5?",
    "minWords": 50
  }
}
```
