---
id: w41-l2-finding-key-and-tempo
title: Pass 1 — Finding Key and Tempo
week: 41
order: 2
phase: p5
duration_min: 40
goals:
  - Find the tonal centre of a loop by humming home and checking the bass at cadences
  - Decide major or minor (or a mode) from the third and the chord colours
  - Measure tempo by tapping and tell a half-time feel from the real pulse
prerequisites: [w41-l1-the-transcription-workflow]
tags: [transcription, key, tempo, ear, minor]
---

# Pass 1 — Finding Key and Tempo

Pass 1 has two questions: *where is home?* and *how fast is the beat?* Get these right and every later pass becomes a multiple-choice question instead of an open one.

## Finding home

The [[tonal centre]] is the note the music wants to rest on. Three quick tests, in this order:

1. **Hum test.** Loop the song, then stop it mid-phrase and hum the note that feels most finished. Nine times out of ten that's degree 1.
2. **Cadence test.** Listen to the bass on the last chord of a chorus or a phrase. Songs land on home at the ends of sections far more often than at the start.
3. **Colour test.** Hum degree 1, then degree 3 above it. If the song's third sounds like your low version (a minor 3rd), it's minor. Then listen for the flavour notes you learned in Phase 3: a raised 6th means dorian, a lowered 7th over a major tonic means mixolydian.

Once you have a candidate, play the scale along with the loop. Wrong notes will jump out immediately — that's your proof.

## Finding the tempo

Tap along on the kick-and-snare pulse for eight beats and let the app measure it — or count beats for fifteen seconds and multiply by four. This is [[tap tempo]].

The classic trap is [[half-time]] feel: the snare lands only on beat 3, so the song *feels* half as fast as the hats and bass say. Producers usually label the tempo by the faster count. Listen to the same loop both ways:

```example
{
  "title": "Mystery groove — normal feel, 84 BPM",
  "bpm": 84, "timeSig": "4/4", "key": "Em",
  "tracks": [
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" },
    { "instrument": "bass", "seq": "E2:q. E2:8 r:8 E2:8 E2:q | C2:q. C2:8 r:8 C2:8 C2:q | G2:q. G2:8 r:8 G2:8 G2:q | D2:q. D2:8 r:8 D2:8 D2:q" },
    { "instrument": "pad", "seq": "[E3 G3 B3]:w | [E3 G3 C4]:w | [D3 G3 B3]:w | [D3 F#3 A3]:w" },
    { "instrument": "pluck", "seq": "B4:8 G4:8 E4:8 G4:8 B4:q A4:q | G4:8 E4:8 C4:8 E4:8 G4:h | D5:8 B4:8 G4:8 B4:8 D5:q B4:q | A4:q F#4:q A4:q r:q" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

```example
{
  "title": "Same loop — half-time drums",
  "bpm": 84, "timeSig": "4/4", "key": "Em",
  "tracks": [
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 hihat:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 | [kick hihat]:8 hihat:8 hihat:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 | [kick hihat]:8 hihat:8 hihat:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 | [kick hihat]:8 hihat:8 hihat:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8" },
    { "instrument": "bass", "seq": "E2:q. E2:8 r:8 E2:8 E2:q | C2:q. C2:8 r:8 C2:8 C2:q | G2:q. G2:8 r:8 G2:8 G2:q | D2:q. D2:8 r:8 D2:8 D2:q" },
    { "instrument": "pad", "seq": "[E3 G3 B3]:w | [E3 G3 C4]:w | [D3 G3 B3]:w | [D3 F#3 A3]:w" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

The tempo is identical — only the snare moved. If you tapped 42, double it.

```exercise
{
  "id": "w41l2-listen",
  "type": "listen",
  "title": "Pass 1 on the mystery groove",
  "spec": {
    "example": {
      "title": "Mystery groove",
      "bpm": 84, "timeSig": "4/4", "key": "Em",
      "tracks": [
        { "instrument": "bass", "seq": "E2:q. E2:8 r:8 E2:8 E2:q | C2:q. C2:8 r:8 C2:8 C2:q | G2:q. G2:8 r:8 G2:8 G2:q | D2:q. D2:8 r:8 D2:8 D2:q" },
        { "instrument": "pad", "seq": "[E3 G3 B3]:w | [E3 G3 C4]:w | [D3 G3 B3]:w | [D3 F#3 A3]:w" },
        { "instrument": "pluck", "seq": "B4:8 G4:8 E4:8 G4:8 B4:q A4:q | G4:8 E4:8 C4:8 E4:8 G4:h | D5:8 B4:8 G4:8 B4:8 D5:q B4:q | A4:q F#4:q A4:q r:q" }
      ],
      "loop": true
    },
    "questions": [
      { "q": "Which note feels like home?", "choices": ["G", "E", "D", "C"], "answer": 1 },
      { "q": "Major or minor?", "choices": ["Major", "Minor"], "answer": 1, "explain": "The home chord has a minor 3rd (E–G)." },
      { "q": "Roughly how fast is the beat?", "choices": ["About 60", "About 84", "About 120", "About 168"], "answer": 1 }
    ]
  }
}
```

```exercise
{
  "id": "w41l2-tap",
  "type": "rhythm-tap",
  "title": "Tap the pulse",
  "instructions": "Tap steady quarter notes. Feel the snare on 2 and 4, not the hats.",
  "spec": { "bpm": 84, "timeSig": "4/4", "seq": "x:q x:q x:q x:q | x:q x:q x:q x:q", "showNotation": false, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "w41l2-mode",
  "type": "ear-scale",
  "title": "Colour test: which scale?",
  "count": 8,
  "passScore": 0.75,
  "spec": { "scales": ["major", "natural-minor", "dorian", "mixolydian"], "play": "melody" }
}
```

```exercise
{
  "id": "w41l2-degrees",
  "type": "ear-note",
  "title": "Degrees in E minor",
  "count": 10,
  "passScore": 0.8,
  "spec": { "key": "E", "mode": "minor", "degrees": [1, 2, 3, 4, 5, 6, 7], "reference": "cadence", "octaves": [3, 4], "instrument": "piano" }
}
```

```exercise
{
  "id": "w41l2-bpm",
  "type": "quiz-input",
  "title": "Tempo arithmetic",
  "spec": { "questions": [
    { "q": "You count 24 beats in 15 seconds. What is the BPM?", "answer": ["96"], "kind": "number" },
    { "q": "You tapped 58 BPM, but the hi-hats and bass move twice as fast as your taps and the snare hits only once per bar. What tempo would a producer write down?", "answer": ["116"], "kind": "number" },
    { "q": "You count 30 beats in 15 seconds. What is the BPM?", "answer": ["120"], "kind": "number" }
  ] }
}
```

```exercise
{
  "id": "w41l2-scale",
  "type": "play-scale",
  "title": "Prove the key",
  "instructions": "Play E natural minor up and down. Then loop the example and play along to check no note clashes.",
  "spec": { "root": "E", "scale": "natural-minor", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 84, "metronome": true }
}
```
