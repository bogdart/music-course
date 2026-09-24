---
id: w31-l1-chord-scales-and-guide-tones
title: Chord-Scales and Guide Tones
week: 31
order: 1
phase: p4
duration_min: 45
goals:
  - Match each chord in a ii–V–I to its chord-scale (dorian, mixolydian, ionian)
  - Sing and play guide-tone lines (3rds and 7ths) through changes
  - Write a guide-tone melody that moves by step
prerequisites: [w30-l3-reharmonise-three-ways-daw, w22-l1-dorian-and-mixolydian]
tags: [improvisation, chord-scales, guide-tones, jazz]
---

# Chord-Scales and Guide Tones

Improvising over changes feels impossible until you realise you only need two things: **which notes are safe** over each chord, and **which notes carry the harmony**. Today covers both.

## Chord-scales

A [[chord-scale]] is the scale that fits a chord: its chord tones plus the in-between notes that sound good. For the ii–V–I in C:

| Chord | Chord-scale | Chord tones | Colour | Careful |
|-------|-------------|-------------|--------|---------|
| Dm7 | D dorian | D F A C | E, B (9, 13) | — |
| G7 | G mixolydian | G B D F | A, E (9, 13) | C (sus sound) |
| Cmaj7 | C ionian (or lydian) | C E G B | D, A (9, 13) | F (avoid) |

Notice something? D dorian, G mixolydian and C major are **the same seven notes**. In a diatonic ii–V–I, the scale doesn't change — what changes is *which notes are home*. That's why beginners who "just play C major" sound aimless: they ignore the moving targets.

```example
{
  "title": "D dorian over Dm7 → G mixolydian over G7 → C major over Cmaj7",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "D4:8 E4:8 F4:8 G4:8 A4:8 B4:8 C5:8 D5:8 | G4:8 A4:8 B4:8 C5:8 D5:8 E5:8 F5:8 G5:8 | C5:8 D5:8 E5:8 F5:8 G5:8 A5:8 B5:8 C6:8 | C6:w |" },
    { "instrument": "piano", "seq": "[D3 F3 C4]:w | [G2 F3 B3]:w | [C3 E3 B3]:w | [C3 E3 B3]:w |" }
  ],
  "show": ["keyboard"]
}
```

## Guide tones

The 3rd and 7th of each chord are its [[guide tones]] — the notes that define the quality. In a ii–V–I they form two smooth lines: **C → B → B** (7th → 3rd → 7th) and **F → F → E** (3rd → 7th → 3rd). If your melody lands on these notes at chord changes, the listener *hears the changes* even with no piano playing.

```example
{
  "title": "Two guide-tone lines over the bass alone",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "C5:h F4:h | B4:h F4:h | B4:h E4:h | B4:h E4:h |" },
    { "instrument": "bass", "seq": "D2:w | G1:w | C2:w | C2:w |" }
  ],
  "show": ["staff"]
}
```

## Drills

```exercise
{
  "id": "e1-play-dorian",
  "type": "play-scale",
  "title": "D dorian",
  "count": 6, "passScore": 0.75,
  "spec": { "root": "D", "scale": "dorian", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 90, "metronome": true }
}
```

```exercise
{
  "id": "e2-play-mixolydian",
  "type": "play-scale",
  "title": "Mixolydian in random keys",
  "count": 6, "passScore": 0.75,
  "spec": { "root": "random", "scale": "mixolydian", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 80, "metronome": true }
}
```

```exercise
{
  "id": "e3-play-guide-tones",
  "type": "play-melody",
  "title": "Play the guide-tone line",
  "instructions": "One note per chord: F, B, E, E… then C, B, B, B. Hear the harmony in a single line.",
  "count": 6, "passScore": 0.8,
  "spec": { "bpm": 72, "timeSig": "4/4", "key": "C", "seq": "F4:w | F4:w | E4:w | E4:w | C5:w | B4:w | B4:w | B4:w |", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "piano", "seq": "[D3 A3]:w | [G2 D3]:w | [C3 G3]:w | [C3 G3]:w | [D3 A3]:w | [G2 D3]:w | [C3 G3]:w | [C3 G3]:w |" } }
}
```

```exercise
{
  "id": "e4-ear-modes",
  "type": "ear-scale",
  "title": "Chord-scales by ear",
  "count": 10, "passScore": 0.75,
  "spec": { "scales": ["major", "dorian", "mixolydian", "lydian", "locrian"], "play": "asc" }
}
```

```exercise
{
  "id": "e5-chord-scale-quiz",
  "type": "quiz",
  "title": "Match chord and scale",
  "passScore": 0.75,
  "spec": { "questions": [
    { "q": "Gm7 as ii in F major takes which chord-scale?", "choices": ["G dorian", "G mixolydian", "G aeolian", "G locrian"], "answer": 0 },
    { "q": "Bm7b5 as vii in C major takes…", "choices": ["B dorian", "B locrian", "B phrygian", "B minor pentatonic"], "answer": 1 },
    { "q": "The guide tones of G7 are…", "choices": ["G and D", "B and F", "D and A", "G and B"], "answer": 1 },
    { "q": "Over Cmaj7, which scale tone is the avoid note?", "choices": ["D", "F", "A", "B"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "e6-daw-guide-melody",
  "type": "daw-task",
  "title": "A guide-tone melody",
  "instructions": "Write a slow melody (half notes) over the ii–V–I–I loop. Use a 3rd or 7th of the current chord on beats 1 and 3, and never move more than a whole step. It will sound surprisingly like a real tune.",
  "spec": {
    "template": { "bpm": 80, "key": "C", "timeSig": "4/4", "tracks": [ { "instrument": "lead", "seq": "" }, { "instrument": "piano", "seq": "[D3 F3 C4]:w | [G2 F3 B3]:w | [C3 E3 B3]:w | [C3 E3 B3]:w | [D3 F3 C4]:w | [G2 F3 B3]:w | [C3 E3 B3]:w | [C3 E3 B3]:w |" } ] },
    "task": "8 bars of half notes built from guide tones, moving by step.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "uses-rhythm", "values": ["h"], "minDistinct": 1, "track": 0 },
      { "kind": "max-leap", "semitones": 2, "track": 0 },
      { "kind": "chord-tones-on-beats", "beats": [1, 3], "progression": ["ii7", "V7", "Imaj7", "Imaj7"], "barsPerChord": 1, "minRatio": 0.85, "track": 0 },
      { "kind": "range", "low": "C4", "high": "C6", "track": 0 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```
