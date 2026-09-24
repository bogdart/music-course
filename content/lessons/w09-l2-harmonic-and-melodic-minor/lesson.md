---
id: w09-l2-harmonic-and-melodic-minor
title: Harmonic and Melodic Minor — the Major V in a Minor Key
week: 9
order: 2
phase: p2
duration_min: 45
goals:
  - Explain why minor keys raise the 7th degree (the leading tone)
  - Play A harmonic minor and the chords i – iv – V – i in A minor
  - Hear natural, harmonic and melodic minor apart
prerequisites: [w09-l1-natural-minor-and-relative-keys]
tags: [minor, scales, dominant, ear]
songs:
  - { title: "Für Elise (opening)", composer: "Ludwig van Beethoven", public_domain: true }
---

# Harmonic and Melodic Minor

In Phase 1 you learned that V → I is the strongest "we're home" move. The magic ingredient is degree 7, the [[leading tone]]: it sits a half step below the tonic and leans into it. In C major, B pulls up to C.

Natural minor has a problem: its 7th (G in A minor) is a *whole* step below the tonic. The pull is weak, and the v chord (E–G–B) is minor and sleepy.

## Harmonic minor: raise the 7th

The fix composers found 300+ years ago: raise degree 7 by a half step. G becomes **G#**. That scale is the [[harmonic minor]]: **1 2 b3 4 5 b6 7**. Two things happen:

1. G# now leans hard into A.
2. The chord on degree 5 becomes **E major** (E–G#–B) — a major V in a minor key.

Listen to the difference. The first cadence uses minor v, the second uses major V.

```example
{
  "title": "v – i (natural) versus V – i (harmonic) in A minor",
  "bpm": 70, "timeSig": "4/4", "key": "Am",
  "tracks": [ { "instrument": "piano", "seq": "[A3 C4 E4]:h [G3 B3 E4]:h | [A3 C4 E4]:w | r:w | [A3 C4 E4]:h [G#3 B3 E4]:h | [A3 C4 E4]:w" } ],
  "show": ["keyboard"]
}
```

```exercise
{
  "id": "e1", "type": "play-scale", "title": "A harmonic minor",
  "instructions": "Same as natural minor, but play G# instead of G. Notice the wide gap between F and G#.",
  "count": 6, "passScore": 0.8,
  "spec": { "root": "A", "scale": "harmonic-minor", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 60, "metronome": true }
}
```

```exercise
{
  "id": "e2", "type": "play-chord", "title": "i – iv – V – i in A minor",
  "instructions": "Am, Dm, E, Am. Keep your hand in one place: move to the nearest chord notes.",
  "count": 8, "passScore": 0.8,
  "spec": { "chords": ["Am", "Dm", "E", "Am"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

## Melodic minor: smoothing the melody

That F → G# gap (3 half steps) sounds exotic. When a melody climbs to the tonic, composers often raise degree 6 too, giving the [[melodic minor]]: **1 2 b3 4 5 6 7** going up. Traditionally it returns to natural minor coming down.

```example
{
  "title": "A melodic minor: up with F# and G#, down with G and F",
  "bpm": 90, "timeSig": "4/4", "key": "Am",
  "tracks": [ { "instrument": "piano", "seq": "A3:q B3:q C4:q D4:q | E4:q F#4:q G#4:q A4:q | A4:q G4:q F4:q E4:q | D4:q C4:q B3:q A3:q" } ],
  "show": ["staff", "keyboard"]
}
```

```exercise
{
  "id": "e3", "type": "ear-scale", "title": "Which minor?",
  "instructions": "Listen for the top: whole step to the tonic (natural), the wide F–G# gap (harmonic), or a smooth major-sounding climb (melodic).",
  "count": 9, "passScore": 0.7,
  "hints": ["Natural minor has no leading tone: the last step up is a whole step.", "Harmonic minor has the 'snake-charmer' step and a half between 6 and 7."],
  "spec": { "scales": ["natural-minor", "harmonic-minor", "melodic-minor"], "play": "asc" }
}
```

```exercise
{
  "id": "e4", "type": "ear-progression", "title": "Minor v or major V?",
  "instructions": "Three chords in A minor. Is the middle chord the soft v or the pulling V?",
  "count": 8, "passScore": 0.75,
  "spec": { "key": "A", "mode": "minor", "length": 3, "chords": ["i", "v", "V"], "style": "block" }
}
```

## Where you've heard it

Beethoven's *Für Elise* opens in A minor. The famous wobble is E–D# (a chromatic neighbour), and the second phrase climbs through **E – G# – B**: the major V chord, with G# as the leading tone.

```example
{
  "title": "Für Elise, opening (Beethoven, public domain)",
  "bpm": 50, "timeSig": "3/8", "key": "Am",
  "tracks": [
    { "instrument": "piano", "seq": "r:q E5:16 D#5:16 | E5:16 D#5:16 E5:16 B4:16 D5:16 C5:16 | A4:8 r:16 C4:16 E4:16 A4:16 | B4:8 r:16 E4:16 G#4:16 B4:16 | C5:8 r:16 E4:16 E5:16 D#5:16 | E5:16 D#5:16 E5:16 B4:16 D5:16 C5:16 | A4:8 r:16 C4:16 E4:16 A4:16 | B4:8 r:16 E4:16 C5:16 B4:16 | A4:q. |" },
    { "instrument": "piano", "seq": "r:q. | r:q. | A2:16 E3:16 A3:16 r:16 r:8 | E2:16 E3:16 G#3:16 r:16 r:8 | A2:16 E3:16 A3:16 r:16 r:8 | r:q. | A2:16 E3:16 A3:16 r:16 r:8 | E2:16 E3:16 G#3:16 r:16 r:8 | A2:16 E3:16 A3:16 r:16 r:8 |" }
  ],
  "show": ["staff", "pianoroll"]
}
```

```exercise
{
  "id": "e5", "type": "play-melody", "title": "Für Elise motif, slowly",
  "instructions": "Right hand only. Shift your keyboard up an octave if needed. Accuracy first, speed later.",
  "count": 6, "passScore": 0.7,
  "spec": { "bpm": 40, "timeSig": "3/8", "key": "Am", "seq": "r:q E5:16 D#5:16 | E5:16 D#5:16 E5:16 B4:16 D5:16 C5:16 | A4:q. |", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e6", "type": "ear-note", "title": "Degrees in A minor, now with 7",
  "instructions": "The cadence uses the major V. Degree 7 (G#) should feel like it's begging to go up to 1.",
  "count": 10, "passScore": 0.7,
  "spec": { "key": "A", "mode": "minor", "degrees": [1, 3, 5, 7], "reference": "cadence", "octaves": [3, 4], "instrument": "piano" }
}
```
