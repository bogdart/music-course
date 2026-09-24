---
id: w22-l2-lydian-and-phrygian
title: Lydian and Phrygian
week: 22
order: 2
phase: p3
duration_min: 45
goals:
  - Build Lydian (major with a raised 4th) and Phrygian (minor with a flat 2nd)
  - Use their characteristic chords - I-II in Lydian, i-bII in Phrygian
  - Identify four modes by ear
prerequisites: [w22-l1-dorian-and-mixolydian]
tags: [modes, lydian, phrygian, scales, ear]
songs:
  - { title: "The Simpsons Theme", composer: "Danny Elfman", public_domain: false }
  - { title: "Dreams", composer: "Stevie Nicks (Fleetwood Mac)", public_domain: false }
  - { title: "White Rabbit", composer: "Grace Slick (Jefferson Airplane)", public_domain: false }
---

# Lydian and Phrygian

Two more modes, two more "change one note" recipes. These are the extremes: Lydian is the brightest mode, Phrygian one of the darkest.

| Mode | Recipe | Example | Colour | Typical chords |
|---|---|---|---|---|
| **[[Lydian]]** | major, **raise the 4th** | F G A **B** C D E | dreamy, floating, "wonder" | I – II (F – G) |
| **[[Phrygian]]** | natural minor, **lower the 2nd** | E **F** G A B C D | dark, Spanish, metal | i – bII (Em – F) |

Why these chords? Lydian's raised 4th turns the II chord major (G B D in F Lydian). Phrygian's flat 2nd creates a major chord just a half step above the tonic (F over E) — that half-step slide, bII → i, is the Phrygian signature.

## Lydian: float, don't land

The #4 wants to be heard *sustained* over the tonic chord — it sounds like a question that never needs answering. Film and TV use Lydian for magic and wonder.

```example
{
  "title": "F Lydian: Fmaj7 - G, with B natural on strong beats",
  "bpm": 84, "timeSig": "4/4", "key": "F",
  "tracks": [
    { "instrument": "lead", "seq": "A4:q C5:q B4:h | D5:q. C5:8 B4:q G4:q | A4:q C5:q E5:q. D5:8 | B4:w" },
    { "instrument": "pad", "seq": "[F3 A3 C4 E4]:w | [G3 B3 D4]:w | [F3 A3 C4 E4]:w | [G3 B3 D4]:w" },
    { "instrument": "bass", "seq": "F2:w | G2:w | F2:w | G2:w" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

## Phrygian: the half-step grind

Phrygian lives on the rub between 1 and b2. Riffs hammer the tonic and lean on the note a half step above it.

```example
{
  "title": "E Phrygian riff (original), half-time drums",
  "bpm": 100, "timeSig": "4/4", "key": "Em",
  "tracks": [
    { "instrument": "pluck", "seq": "E3:8 E3:8 F3:8 E3:8 r:8 E3:8 G3:8 F3:8 | E3:8 E3:8 F3:8 E3:8 r:8 E3:8 G3:8 F3:8 | F3:8 F3:8 G3:8 F3:8 r:8 E3:8 F3:8 E3:8 | E3:8 E3:8 F3:8 E3:8 r:8 E3:8 G3:8 F3:8" },
    { "instrument": "pad", "seq": "[E3 G3 B3]:w | [E3 G3 B3]:w | [F3 A3 C4]:w | [E3 G3 B3]:w" },
    { "instrument": "bass", "seq": "E2:w | E2:w | F2:w | E2:w" },
    { "instrument": "drums", "seq": "kick:8 kick:8 hihat:8 hihat:8 [snare hihat]:q hihat:8 kick:8 | kick:8 kick:8 hihat:8 hihat:8 [snare hihat]:q hihat:8 kick:8 | kick:8 kick:8 hihat:8 hihat:8 [snare hihat]:q hihat:8 kick:8 | kick:8 kick:8 hihat:8 hihat:8 [snare hihat]:q hihat:8 kick:8" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

**By reference** — Lydian: "The Simpsons Theme" (Danny Elfman) opens on a melody built on the raised 4th; "Dreams" (Fleetwood Mac) floats on two chords, F and G, and is usually heard as F Lydian. Phrygian: "White Rabbit" (Jefferson Airplane) builds a bolero-like crescendo on a Phrygian half-step figure. Flamenco and much heavy metal lean on the same bII–i move.

```exercise
{
  "id": "lyd-phryg-recipes",
  "type": "quiz-input",
  "title": "Recipes",
  "passScore": 0.8,
  "spec": { "questions": [
    { "q": "Which note of C Lydian differs from C major?", "answer": ["F#", "Gb"], "kind": "note" },
    { "q": "Which note of A Phrygian differs from A natural minor?", "answer": ["Bb", "A#"], "kind": "note" },
    { "q": "In C Lydian, the II chord is a major chord on which root?", "answer": ["D"], "kind": "note" },
    { "q": "In A Phrygian, the bII chord has which root?", "answer": ["Bb", "A#"], "kind": "note" },
    { "q": "How many half steps between the Phrygian tonic and its bII root?", "answer": ["1"], "kind": "number" }
  ] }
}
```

```exercise
{
  "id": "play-f-lydian",
  "type": "play-scale",
  "title": "Play F Lydian",
  "passScore": 0.8,
  "spec": { "root": "F", "scale": "lydian", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 70, "metronome": true }
}
```

```exercise
{
  "id": "build-phrygian",
  "type": "build-scale",
  "title": "Build Phrygian scales",
  "count": 6,
  "passScore": 0.8,
  "spec": { "roots": ["E", "A", "B", "D", "F#", "C"], "scale": "phrygian", "prompt": "name" }
}
```

```exercise
{
  "id": "ear-lyd-phryg",
  "type": "ear-scale",
  "title": "Bright or dark?",
  "count": 10,
  "passScore": 0.75,
  "hints": ["Lydian: major with a raised, 'too bright' 4th.", "Phrygian: minor with a dark half step right above the tonic."],
  "spec": { "scales": ["major", "lydian", "natural-minor", "phrygian"], "play": "asc-desc" }
}
```

```exercise
{
  "id": "ear-four-modes",
  "type": "ear-scale",
  "title": "Four modes in melodies",
  "count": 10,
  "passScore": 0.7,
  "spec": { "scales": ["dorian", "mixolydian", "lydian", "phrygian"], "play": "melody" }
}
```

```exercise
{
  "id": "daw-phrygian-riff",
  "type": "daw-task",
  "title": "Write a Phrygian riff",
  "spec": {
    "template": { "bpm": 100, "key": "Em", "tracks": [
      { "instrument": "drums", "seq": "kick:8 kick:8 hihat:8 hihat:8 [snare hihat]:q hihat:8 kick:8 | kick:8 kick:8 hihat:8 hihat:8 [snare hihat]:q hihat:8 kick:8 | kick:8 kick:8 hihat:8 hihat:8 [snare hihat]:q hihat:8 kick:8 | kick:8 kick:8 hihat:8 hihat:8 [snare hihat]:q hihat:8 kick:8" },
      { "instrument": "pluck", "seq": "" }
    ] },
    "task": "Write your own 1-bar E Phrygian riff in the low-mid register (E2-E4) and repeat it: bars 1, 2 and 4 the same, bar 3 moved up a half step (starting on F) or varied. Hit F (the b2) on a strong beat at least once.",
    "checks": [
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "in-key", "key": "E", "scale": "phrygian", "track": 1 },
      { "kind": "range", "low": "E2", "high": "E4", "track": 1 },
      { "kind": "repetition", "motifBars": 1, "minRepeats": 3, "allowTransposed": true, "track": 1 },
      { "kind": "starts-on", "degrees": [1], "track": 1 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

```exercise
{
  "id": "daw-lydian-float",
  "type": "daw-task",
  "title": "A Lydian float",
  "spec": {
    "template": { "bpm": 84, "key": "F", "tracks": [
      { "instrument": "pad", "seq": "[F3 A3 C4 E4]:w | [G3 B3 D4]:w | [F3 A3 C4 E4]:w | [G3 B3 D4]:w" },
      { "instrument": "lead", "seq": "" }
    ] },
    "task": "Write a slow 4-bar F Lydian melody over F - G. Hold B natural for at least a half note over an F chord somewhere. Use mostly longer notes (halves and quarters) to keep it floating.",
    "checks": [
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "in-key", "key": "F", "scale": "lydian", "track": 1 },
      { "kind": "uses-rhythm", "values": ["h", "q", "w"], "minDistinct": 2, "track": 1 },
      { "kind": "note-count", "min": 5, "max": 14, "track": 1 },
      { "kind": "custom", "id": "held-sharp-4", "note": "Self-check: a B natural lasts at least a half note over F." }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```
