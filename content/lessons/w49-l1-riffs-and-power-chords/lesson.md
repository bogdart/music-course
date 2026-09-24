---
id: w49-l1-riffs-and-power-chords
title: "Transcribe 4: Rock — Riffs and Power Chords"
week: 49
order: 1
phase: p5
duration_min: 45
goals:
  - Hear power chords as root + 5th and decide their implied quality from the key
  - Dictate a one-bar pentatonic riff, including a chromatic blue-note variation
  - Transcribe the riff and chorus harmony of a rock mystery track
prerequisites: [w48-l3-rnb-reference-analysis]
tags: [transcription, rock, riffs, power-chords, ear]
---

# Transcribe 4: Rock — Riffs and Power Chords

Rock and indie make two passes easier and one harder. Chords are simpler (often just two notes), and riffs repeat constantly. But distorted guitars smear pitch, and the chord *quality* is often missing entirely. Let's handle both.

## Power chords: no 3rd, so ask the key

A [[power chord]] is just a root and a 5th (often with the octave doubled): written **E5**, **C5**. With no 3rd it's neither major nor minor — and that's exactly why rock loves it: it sounds huge under distortion without getting muddy.

For a transcriber that changes pass 4. You can't hear a quality that isn't there, so you **write the power chord as it is** (E5), and for the roman numeral take the quality from the key and the melody. In E minor, E5 – C5 – G5 – D5 functions as i – VI – III – VII. If the singer sings a G# over E5, the song treats it as major.

Our app has no distorted guitar, so in the examples a plucked synth plays the guitar parts. Listen for the *shape*: two notes a 5th apart, the octave on top, hammered in eighth notes.

## Riffs: rhythm, first note, contour

A riff is a short repeating figure, and it's usually the song's identity. Dictate it like a mini-melody:

1. **Rhythm first** — tap it. Most riffs are one or two bars of eighths.
2. **First note** — almost always the tonic. Check with the hum test.
3. **Contour and scale** — rock riffs come mostly from the **minor pentatonic** (in E: E G A B D), plus the "blue" b5 (Bb) as a chromatic passing note.

```example
{
  "title": "Mystery Track \"Static Summer\" — riff section",
  "bpm": 128, "timeSig": "4/4", "key": "Em",
  "tracks": [
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 snare:8 snare:8 tom:8 tom:8" },
    { "instrument": "bass", "seq": "E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 Bb2:8 B2:8 D3:8" },
    { "instrument": "pluck", "seq": "E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 Bb2:8 B2:8 D3:8" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

```example
{
  "title": "\"Static Summer\" — chorus",
  "bpm": 128, "timeSig": "4/4", "key": "Em",
  "tracks": [
    { "instrument": "drums", "seq": "[kick crash]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 [kick ride]:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 [kick ride]:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 [kick ride]:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 [kick ride]:8 [snare ride]:8 ride:8" },
    { "instrument": "bass", "seq": "E2:8 E2:8 E2:8 E2:8 E2:8 E2:8 E2:8 E2:8 | C2:8 C2:8 C2:8 C2:8 C2:8 C2:8 C2:8 C2:8 | G1:8 G1:8 G1:8 G1:8 G1:8 G1:8 G1:8 G1:8 | D2:8 D2:8 D2:8 D2:8 D2:8 D2:8 D2:8 D2:8" },
    { "instrument": "pluck", "seq": "[E3 B3 E4]:8 [E3 B3 E4]:8 [E3 B3 E4]:8 [E3 B3 E4]:8 [E3 B3 E4]:8 [E3 B3 E4]:8 [E3 B3 E4]:8 [E3 B3 E4]:8 | [C3 G3 C4]:8 [C3 G3 C4]:8 [C3 G3 C4]:8 [C3 G3 C4]:8 [C3 G3 C4]:8 [C3 G3 C4]:8 [C3 G3 C4]:8 [C3 G3 C4]:8 | [G2 D3 G3]:8 [G2 D3 G3]:8 [G2 D3 G3]:8 [G2 D3 G3]:8 [G2 D3 G3]:8 [G2 D3 G3]:8 [G2 D3 G3]:8 [G2 D3 G3]:8 | [D3 A3 D4]:8 [D3 A3 D4]:8 [D3 A3 D4]:8 [D3 A3 D4]:8 [D3 A3 D4]:8 [D3 A3 D4]:8 [D3 A3 D4]:8 [D3 A3 D4]:8" },
    { "instrument": "lead", "seq": "B4:q. B4:8 A4:q G4:q | G4:q E4:q E4:h | D5:q. D5:8 B4:q G4:q | A4:h. r:q" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

```exercise
{
  "id": "w49l1-listen",
  "type": "listen",
  "title": "Riff and chorus",
  "spec": {
    "example": {
      "title": "Riff, slowed",
      "bpm": 90, "timeSig": "4/4", "key": "Em",
      "tracks": [ { "instrument": "pluck", "seq": "E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 Bb2:8 B2:8 D3:8" } ],
      "loop": true
    },
    "questions": [
      { "q": "The riff's first note is the tonic. Which?", "choices": ["G", "E", "A", "D"], "answer": 1 },
      { "q": "Scale of the riff (bars 1–3)?", "choices": ["E minor pentatonic", "E major", "E harmonic minor", "E whole tone"], "answer": 0 },
      { "q": "What changes in bar 4?", "choices": ["A chromatic climb A–Bb–B, then up to D", "The key", "Triplets", "It stops"], "answer": 0 },
      { "q": "The chorus power chords E5–C5–G5–D5 function in E minor as…", "choices": ["i–VI–III–VII", "I–IV–V–I", "i–iv–v–i", "vi–IV–I–V"], "answer": 0 }
    ]
  }
}
```

```exercise
{
  "id": "w49l1-fifths",
  "type": "ear-interval",
  "title": "Power-chord shapes: harmonic intervals",
  "count": 10,
  "passScore": 0.8,
  "spec": { "intervals": ["M3", "P4", "P5", "P8"], "direction": "harmonic", "root": "random", "range": ["E2", "E4"] }
}
```

```exercise
{
  "id": "w49l1-riffs",
  "type": "ear-melody",
  "title": "Pentatonic riffs",
  "instructions": "E minor pentatonic = G major pentatonic, so these are in G with degrees 1 2 3 5 6 (E is degree 6).",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "G", "degrees": [1, 2, 3, 5, 6], "length": 6, "rhythm": "simple", "answer": "play" }
}
```

```exercise
{
  "id": "w49l1-scale",
  "type": "ear-scale",
  "title": "Pentatonic or blues?",
  "count": 8,
  "passScore": 0.8,
  "spec": { "scales": ["minor-pentatonic", "blues", "natural-minor"], "play": "melody" }
}
```

```exercise
{
  "id": "w49l1-riffplay",
  "type": "play-melody",
  "title": "Play the riff",
  "spec": { "bpm": 100, "timeSig": "4/4", "key": "Em", "seq": "E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 Bb2:8 B2:8 D3:8", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "w49l1-power",
  "type": "play-notes",
  "title": "Power chord shapes",
  "instructions": "Play the four chorus power chords one after another: root, 5th, octave.",
  "spec": { "prompt": "names", "notes": ["E3", "B3", "E4", "C3", "G3", "C4", "G2", "D3", "G3", "D3", "A3", "D4"], "ordered": true, "key": "G" }
}
```
