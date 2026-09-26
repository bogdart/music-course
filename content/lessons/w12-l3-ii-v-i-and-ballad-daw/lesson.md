---
id: w12-l3-ii-v-i-and-ballad-daw
title: ii – V – I and a Pop Ballad with Sevenths
week: 12
order: 3
phase: p2
duration_min: 50
goals:
  - Play ii7 – V7 – Imaj7 with smooth voicings in C, G and F
  - Recognise ii – V – I by ear and in roman-numeral analysis
  - Write an 8-bar ballad with seventh chords, bass and melody in the DAW
prerequisites: [w12-l2-dominant-function-v7-to-i]
tags: [harmony, sevenths, ii-v-i, daw]
---

# ii – V – I and a Pop Ballad with Sevenths

V7 → I is a strong cadence. Put one more chord in front of it and you get the most famous progression in jazz and a staple of soul, R&B and ballads: **ii – V – I**. In C: **Dm7 – G7 – Cmaj7**.

## Why ii?

Dm7 (D F A C) shares two notes with G7 (D and F), and its root falls a fifth to G, just like G falls a fifth to C. So the roots go **D → G → C**: two falls of a fifth in a row, each one a little push toward home. Dm7 is a [[predominant]] chord: it doesn't create the big tension itself, it *prepares* the dominant.

Voice it smoothly and the three chords feel like one gesture. Watch how little the notes move:

```example
{
  "title": "Dm7 – G7 – Cmaj7 in C, smooth voicing with bass",
  "bpm": 70, "timeSig": "4/4", "key": "C", "loop": true,
  "tracks": [
    { "instrument": "epiano", "seq": "[F3 A3 C4 E4]:w | [F3 G3 B3 D4]:w | [E3 G3 B3 D4]:w | [E3 G3 B3 D4]:w" },
    { "instrument": "bass", "seq": "D2:w | G2:w | C2:w | C2:w" }
  ],
  "show": ["keyboard", "pianoroll"]
}
```

(Here the right hand plays the chord tones *above* the root, so Dm7 shows up as F-A-C-E — its 3rd, 5th, 7th and 9th. The bass plays the root. That split between hands is how keyboard players usually voice sevenths.)

```exercise
{
  "id": "e1", "type": "play-melody", "title": "ii – V – I, left hand root + right hand chord",
  "instructions": "LH plays the bass note, RH the upper chord. RH barely moves: F stays, A→G, C→B; then F steps down to E.",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "[D3 F4 A4 C5]:w | [G2 F4 G4 B4]:w | [C3 E4 G4 B4]:w", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e2", "type": "play-chord", "title": "ii – V – I in three keys",
  "instructions": "C: Dm7 G7 Cmaj7. G: Am7 D7 Gmaj7. F: Gm7 C7 Fmaj7.",
  "count": 9, "passScore": 0.8,
  "spec": { "chords": ["Dm7", "G7", "Cmaj7", "Am7", "D7", "Gmaj7", "Gm7", "C7", "Fmaj7"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

```exercise
{
  "id": "e3", "type": "roman-analysis", "title": "Spot the ii – V – I",
  "count": 6, "passScore": 0.8,
  "spec": { "key": "G", "chords": ["Gmaj7", "Em7", "Am7", "D7", "Gmaj7", "Cmaj7"], "prompt": "symbols" }
}
```

```exercise
{
  "id": "e4", "type": "ear-progression", "title": "ii – V – I or IV – V – I?",
  "instructions": "Both lead to V then home. ii is minor and a bit darker; IV is major and brighter.",
  "count": 9, "passScore": 0.7,
  "spec": { "key": "random", "mode": "major", "length": 3, "chords": ["ii", "IV", "V7", "I"], "style": "pad-bass" }
}
```

## The ballad loop

Swap the triads of a pop loop for sevenths and it instantly sounds like a slow soul ballad. Try **Cmaj7 – Am7 – Dm7 – G7** (I – vi – ii – V7). Each root falls or rises by a third or fifth, and G7 at the end pulls you back to the start.

```example
{
  "title": "Ballad loop: Cmaj7 – Am7 – Dm7 – G7",
  "bpm": 66, "timeSig": "4/4", "key": "C", "loop": true,
  "tracks": [
    { "instrument": "epiano", "seq": "[E3 G3 B3]:h [E3 G3 B3]:h | [E3 G3 C4]:h [E3 G3 C4]:h | [F3 A3 C4]:h [F3 A3 C4]:h | [F3 G3 B3]:h [F3 G3 B3]:h" },
    { "instrument": "bass", "seq": "C2:h. C2:q | A1:h. A1:q | D2:h. D2:q | G1:h. G1:q" }
  ],
  "show": ["pianoroll"]
}
```

```exercise
{
  "id": "e5", "type": "ear-chord", "title": "Seventh-chord qualities review",
  "count": 10, "passScore": 0.7,
  "spec": { "qualities": ["maj7", "dom7", "min7"], "inversions": [0], "voicing": "mixed", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e6", "type": "ear-bass", "title": "Bass of the ballad loop",
  "count": 8, "passScore": 0.75,
  "spec": { "key": "random", "chords": ["I", "vi", "ii", "V"], "answer": "play" }
}
```

## Make it: an 8-bar ballad

```exercise
{
  "id": "e7", "type": "daw-task", "title": "Pop ballad with sevenths",
  "spec": {
    "template": { "bpm": 66, "key": "C", "timeSig": "4/4", "tracks": [
      { "instrument": "epiano", "seq": "" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "lead", "seq": "" } ] },
    "task": "Write 8 bars on Cmaj7 – Am7 – Dm7 – G7 (twice). 1) E-piano: seventh chords, voiced smoothly between G2 and G4 (you can leave the root to the bass). 2) Bass: the root on beat 1 of each bar. 3) Lead: a slow melody, mostly half and quarter notes, a chord tone on beat 1 of each bar. Try landing on the 7th of a chord (B over Cmaj7, G over Am7) once — that's the ballad colour. End on C.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["epiano", "bass", "lead"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "range", "low": "G2", "high": "G4", "track": 0 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "vi", "ii", "V7"], "barsPerChord": 1, "minRatio": 1.0, "track": 1 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 2 },
      { "kind": "uses-rhythm", "values": ["h", "q"], "minDistinct": 2, "track": 2 },
      { "kind": "ends-on", "degree": 1, "track": 2 },
      { "kind": "custom", "id": "sevenths-in-chords", "note": "Self-check: every e-piano chord contains its 7th (B, G, C, F)." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```
