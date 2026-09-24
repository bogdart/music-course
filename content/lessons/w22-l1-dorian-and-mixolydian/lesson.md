---
id: w22-l1-dorian-and-mixolydian
title: Dorian and Mixolydian
week: 22
order: 1
phase: p3
duration_min: 45
goals:
  - Build Dorian (minor with a raised 6th) and Mixolydian (major with a flat 7th) from any root
  - Hear their characteristic tones and typical chords (i-IV in Dorian, I-bVII in Mixolydian)
  - Tell major, natural minor, Dorian and Mixolydian apart by ear
prerequisites: [w21-l3-arrange-thirty-two-bars-daw]
tags: [modes, dorian, mixolydian, scales, ear]
songs:
  - { title: "Drunken Sailor", composer: "Traditional", public_domain: true }
  - { title: "Oye Como Va", composer: "Tito Puente", public_domain: false }
  - { title: "Get Lucky", composer: "Daft Punk, Pharrell Williams, Nile Rodgers", public_domain: false }
  - { title: "Norwegian Wood", composer: "Lennon-McCartney (The Beatles)", public_domain: false }
  - { title: "Sweet Home Alabama", composer: "Van Zant, King, Rossington (Lynyrd Skynyrd)", public_domain: false }
---

# Dorian and Mixolydian

A [[mode]] is a scale with a new home note. You could build modes by starting the C major scale on D, E, F... but for writing songs there is a faster way: **take major or minor and change one note**. That changed note is the [[characteristic tone]] — the colour you must feature, or the mode sounds like plain major or minor.

| Mode | Recipe | D example | Colour | Typical chords |
|---|---|---|---|---|
| **[[Dorian]]** | natural minor, **raise the 6th** | D E F G A **B** C | minor but hopeful, cool | i – IV (Dm – G) |
| **[[Mixolydian]]** | major, **lower the 7th** | D E F# G A B **C** | major but bluesy, laid back | I – bVII (D – C) |

The characteristic tone creates the characteristic chord: Dorian's raised 6th makes the **IV chord major** (G B D in D Dorian), and Mixolydian's flat 7th makes the **bVII chord** major (C E G in D Mixolydian).

```keyboard
{ "range": ["C4", "C5"], "highlight": ["D4", "E4", "F4", "G4", "A4", "B4", "C5"], "labels": "names", "colors": { "D4": "root", "B4": "other" } }
```

## Dorian in a sea shanty

"Drunken Sailor" is in D Dorian. Most of it could be D minor — until bar 6, where the melody climbs A–**B**–C–D. That B natural (instead of Bb) is the Dorian sound, harmonised with G major, the Dorian IV.

```example
{
  "title": "Drunken Sailor (traditional) - D Dorian",
  "bpm": 112, "timeSig": "4/4", "key": "Dm",
  "tracks": [
    { "instrument": "lead", "seq": "A4:q A4:8 A4:8 A4:q A4:8 A4:8 | A4:q D4:q F4:q A4:q | G4:q G4:8 G4:8 G4:q G4:8 G4:8 | G4:q C4:q E4:q G4:q | A4:q A4:8 A4:8 A4:q A4:8 A4:8 | A4:q B4:q C5:q D5:q | C5:q A4:q G4:q E4:q | D4:h D4:h" },
    { "instrument": "piano", "seq": "[D3 F3 A3]:w | [D3 F3 A3]:w | [C3 E3 G3]:w | [C3 E3 G3]:w | [D3 F3 A3]:w | [D3 G3 B3]:w | [C3 E3 G3]:w | [D3 F3 A3]:w" }
  ],
  "show": ["staff"],
  "loop": false
}
```

## Mixolydian in an original riff

Here the F natural in G Mixolydian lands on a strong beat (bar 2, beat 3), and bar 4 ends with the Mixolydian cadence **bVII → I** (F → G) instead of V → I.

```example
{
  "title": "G Mixolydian sketch: G - F - C - F G",
  "bpm": 100, "timeSig": "4/4", "key": "G",
  "tracks": [
    { "instrument": "lead", "seq": "D5:q. B4:8 G4:q B4:q | C5:q. A4:8 F4:h | E4:q G4:q C5:q A4:q | F4:q. F4:8 G4:h" },
    { "instrument": "piano", "seq": "[G3 B3 D4]:w | [F3 A3 C4]:w | [G3 C4 E4]:w | [F3 A3 C4]:h [G3 B3 D4]:h" },
    { "instrument": "bass", "seq": "G2:h G2:h | F2:h F2:h | C2:h C2:h | F2:h G2:h" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

**By reference** — Dorian: "Oye Como Va" (Santana, A Dorian, a two-chord Am7–D7 vamp: i7–IV7) and "Get Lucky" (Daft Punk, B Dorian, Bm–D–F#m–E, ~116 BPM; the E major chord is the Dorian IV). Mixolydian: "Norwegian Wood" (The Beatles, E Mixolydian; listen for the flat 7th, D natural, in the melody) and "Sweet Home Alabama" (Lynyrd Skynyrd, D–C–G: I–bVII–IV).

```exercise
{
  "id": "mode-recipes",
  "type": "quiz-input",
  "title": "Mode recipes",
  "passScore": 0.8,
  "spec": { "questions": [
    { "q": "Which note of A Dorian differs from A natural minor?", "answer": ["F#", "Gb"], "kind": "note" },
    { "q": "Which note of A Mixolydian differs from A major?", "answer": ["G"], "kind": "note" },
    { "q": "The IV chord of E Dorian is a major chord on which root?", "answer": ["A"], "kind": "note" },
    { "q": "The bVII chord in D Mixolydian has which root?", "answer": ["C"], "kind": "note" },
    { "q": "The Dorian characteristic tone is which scale degree (number)?", "answer": ["6"], "kind": "number" },
    { "q": "The Mixolydian characteristic tone is which scale degree (number)? (flattened)", "answer": ["7"], "kind": "number" }
  ] }
}
```

```exercise
{
  "id": "build-dorian",
  "type": "build-scale",
  "title": "Build Dorian scales",
  "count": 6,
  "passScore": 0.8,
  "spec": { "roots": ["D", "A", "E", "G", "C", "B"], "scale": "dorian", "prompt": "name" }
}
```

```exercise
{
  "id": "play-g-mixolydian",
  "type": "play-scale",
  "title": "Play G Mixolydian",
  "passScore": 0.8,
  "spec": { "root": "G", "scale": "mixolydian", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 70, "metronome": true }
}
```

```exercise
{
  "id": "play-drunken-sailor",
  "type": "play-melody",
  "title": "Play Drunken Sailor",
  "passScore": 0.75,
  "spec": { "bpm": 96, "timeSig": "4/4", "key": "Dm", "seq": "A4:q A4:8 A4:8 A4:q A4:8 A4:8 | A4:q D4:q F4:q A4:q | G4:q G4:8 G4:8 G4:q G4:8 G4:8 | G4:q C4:q E4:q G4:q | A4:q A4:8 A4:8 A4:q A4:8 A4:8 | A4:q B4:q C5:q D5:q | C5:q A4:q G4:q E4:q | D4:h D4:h", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "pad", "seq": "[D3 F3 A3]:w | [D3 F3 A3]:w | [C3 E3 G3]:w | [C3 E3 G3]:w | [D3 F3 A3]:w | [D3 G3 B3]:w | [C3 E3 G3]:w | [D3 F3 A3]:w" } }
}
```

```exercise
{
  "id": "ear-four-scales",
  "type": "ear-scale",
  "title": "Major, minor, Dorian or Mixolydian?",
  "count": 10,
  "passScore": 0.7,
  "hints": ["Minor-sounding with a bright 6th near the top: Dorian.", "Major-sounding with a flat 7th just below the octave: Mixolydian."],
  "spec": { "scales": ["major", "natural-minor", "dorian", "mixolydian"], "play": "asc-desc" }
}
```

```exercise
{
  "id": "daw-dorian-vamp",
  "type": "daw-task",
  "title": "A Dorian vamp",
  "spec": {
    "template": { "bpm": 100, "key": "Dm", "tracks": [
      { "instrument": "epiano", "seq": "[D3 F3 A3 C4]:w | [D3 G3 B3]:w | [D3 F3 A3 C4]:w | [D3 G3 B3]:w" },
      { "instrument": "lead", "seq": "" }
    ] },
    "task": "Over Dm7 - G (i7 - IV), write a 4-bar D Dorian melody. Put B natural on a strong beat (1 or 3) at least twice, and end on D.",
    "checks": [
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "in-key", "key": "D", "scale": "dorian", "track": 1 },
      { "kind": "ends-on", "degree": 1, "track": 1 },
      { "kind": "note-count", "min": 8, "max": 24, "track": 1 },
      { "kind": "custom", "id": "dorian-6th-strong-beat", "note": "Self-check: B natural falls on beat 1 or 3 at least twice." }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```
