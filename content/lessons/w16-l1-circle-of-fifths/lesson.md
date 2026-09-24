---
id: w16-l1-circle-of-fifths
title: The Full Circle of Fifths
week: 16
order: 1
phase: p2
duration_min: 45
goals:
  - Recite the circle of fifths and the order of sharps and flats
  - Name any major key from its key signature and vice versa
  - Play and hear scale degrees in keys beyond C, G and F
prerequisites: [w15-l3-harmonising-melodies-daw]
tags: [keys, circle-of-fifths, key-signatures, ear]
---

# The Full Circle of Fifths

In week 7 you met G major (one sharp) and F major (one flat) and a first glimpse of the circle of fifths. Now we complete it — all twelve major keys, and a map that tells you which keys are neighbours.

## Going round

Start on C and keep going **up a fifth**: C → G → D → A → E → B → F#. Each step adds one sharp. Going **down a fifth** from C: C → F → Bb → Eb → Ab → Db → Gb. Each step adds one flat. At the bottom, F# and Gb are the same keys spelled two ways, and the circle closes.

| sharps | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| key | C | G | D | A | E | B | F# |

| flats | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| key | F | Bb | Eb | Ab | Db | Gb |

The sharps always appear in the same order: **F C G D A E B** ("Father Charles Goes Down And Ends Battle"). The flats are the same list backwards: **B E A D G C F**. Two shortcuts:

- **Sharp keys:** the last sharp is degree 7, so the key is a half step above it. (Last sharp C# → key of D.)
- **Flat keys:** the second-to-last flat *is* the key. (Flats Bb, Eb, Ab → key of Eb.) F major is the one to memorise.

## Why neighbours matter

Keys next to each other on the circle differ by just **one note** (C and G differ only by F vs F#). They share most of their chords, so moving between them sounds smooth — we call them [[closely related keys]]. Keys across the circle (C and F#) share almost nothing and sound worlds apart.

```example
{
  "title": "C major, then G major — only one note changes (F becomes F#)",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 A4:8 B4:8 C5:8 | G3:8 A3:8 B3:8 C4:8 D4:8 E4:8 F#4:8 G4:8 | [C3 E3 G3]:h [B2 D3 G3]:h | [D3 F#3 A3]:h [B2 D3 G3]:h" } ],
  "show": ["keyboard", "staff"]
}
```

The circle also runs *inside* your music: roots falling by fifths (like ii → V → I) are walking counter-clockwise round it. That's why that motion sounds so natural.

```example
{
  "title": "Roots falling by fifths: Am – Dm – G – C – F (a trip round the circle)",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[E3 A3 C4]:w | [F3 A3 D4]:w | [F3 G3 B3]:w | [E3 G3 C4]:w | [F3 A3 C4]:w" },
    { "instrument": "bass", "seq": "A1:w | D2:w | G1:w | C2:w | F1:w" }
  ],
  "show": ["pianoroll"]
}
```

```exercise
{
  "id": "e1", "type": "key-signature", "title": "Name the key from the signature",
  "count": 12, "passScore": 0.75,
  "spec": { "keys": ["C", "G", "D", "A", "E", "B", "F", "Bb", "Eb", "Ab", "Db", "F#"], "prompt": "staff", "answer": "name" }
}
```

```exercise
{
  "id": "e2", "type": "key-signature", "title": "How many sharps or flats?",
  "count": 10, "passScore": 0.75,
  "spec": { "keys": ["D", "A", "E", "Bb", "Eb", "Ab", "B", "Db"], "prompt": "name", "answer": "count" }
}
```

```exercise
{
  "id": "e3", "type": "build-scale", "title": "Build new major scales",
  "instructions": "Use the key signature: add its sharps or flats to the white-key scale.",
  "count": 8, "passScore": 0.8,
  "spec": { "roots": ["D", "A", "E", "Bb", "Eb", "Ab"], "scale": "major", "prompt": "name" }
}
```

```exercise
{
  "id": "e4", "type": "play-scale", "title": "Major scales in new keys",
  "instructions": "The app picks a key. Think of its key signature before you start.",
  "count": 6, "passScore": 0.8,
  "spec": { "root": "random", "scale": "major", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 60, "metronome": true }
}
```

```exercise
{
  "id": "e5", "type": "ear-note", "title": "Degrees in D major",
  "instructions": "Degree-hearing doesn't care about the key — 5 still sounds like 5.",
  "count": 10, "passScore": 0.7,
  "spec": { "key": "D", "mode": "major", "degrees": [1, 2, 3, 4, 5, 6, 7], "reference": "cadence", "octaves": [3, 4], "instrument": "piano" }
}
```

```exercise
{
  "id": "e6", "type": "ear-progression", "title": "Four chords in any key",
  "count": 8, "passScore": 0.7,
  "spec": { "key": "random", "mode": "major", "length": 4, "chords": ["I", "ii", "IV", "V", "vi"], "style": "pad-bass" }
}
```
