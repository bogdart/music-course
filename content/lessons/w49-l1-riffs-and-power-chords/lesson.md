---
id: w49-l1-riffs-and-power-chords
title: "Transcribe 4: Rock — Riffs and Power Chords"
week: 49
order: 1
phase: p5
duration_min: 45
goals:
  - "Hear power chords as root + 5th and take their numeral's case from the key"
  - Dictate a one-bar pentatonic riff and hear its chromatic variation
  - Transcribe the riff and chorus of a hidden rock track
prerequisites: [w48-l3-rnb-reference-analysis]
tags: [transcription, rock, riffs, power-chords, ear]
---

# Transcribe 4: Rock — Riffs and Power Chords

Rock and indie make two passes easier and one harder. Chords are simpler (often two notes) and riffs repeat constantly,
but distorted guitars smear pitch, and the chord *quality* is often missing entirely.

## Power chords: no 3rd, so ask the key

A [[power chord]] is a root and a 5th (often with the octave on top), written **E5**, **C5**. With no 3rd it is neither
major nor minor — that's why it sounds huge under distortion without getting muddy. So in pass 4 you can't hear a
quality that isn't there: write the power chord as it is (E5), and take the numeral's case from the key and the melody.
In A minor, A5 – G5 – D5 works as i – VII – iv; in C major, C5 – F5 – A5 works as I – IV – vi.

Our app has no distortion pedal, so a plucked synth plays the guitar parts. Listen for the *shape*: two notes a 5th apart,
the octave on top, hammered in eighths.

## Riffs: rhythm, first note, scale

A riff is a short repeating figure — often the song's identity. Dictate it like a mini-melody:

1. **Rhythm first** — tap it. Most riffs are one or two bars of eighths.
2. **First note** — often home, but not always: check with the hum test.
3. **Scale** — rock riffs come mostly from the **minor pentatonic** (in A: A C D E G), sometimes with the blue note ♭5
   (in A: E♭) squeezed in as a chromatic passing note (week 23). Listen for any note that doesn't fit the five.

Mystery track *Static Summer*, riff section and chorus, hidden:

```example
{
  "title": "Static Summer — riff section",
  "bpm": 128,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 snare:8 snare:8 tom:8 tom:8"},
    {"instrument": "bass", "seq": "E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 Bb2:8 B2:8 D3:8"},
    {"instrument": "pluck", "seq": "E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 Bb2:8 B2:8 D3:8"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```example
{
  "title": "Static Summer — chorus",
  "bpm": 128,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "drums", "seq": "[kick crash]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 [kick ride]:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 [kick ride]:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 [kick ride]:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 [kick ride]:8 [snare ride]:8 ride:8"},
    {"instrument": "bass", "seq": "E2:8 E2:8 E2:8 E2:8 E2:8 E2:8 E2:8 E2:8 | C2:8 C2:8 C2:8 C2:8 C2:8 C2:8 C2:8 C2:8 | G1:8 G1:8 G1:8 G1:8 G1:8 G1:8 G1:8 G1:8 | D2:8 D2:8 D2:8 D2:8 D2:8 D2:8 D2:8 D2:8"},
    {"instrument": "pluck", "seq": "[E3 B3 E4]:8 [E3 B3 E4]:8 [E3 B3 E4]:8 [E3 B3 E4]:8 [E3 B3 E4]:8 [E3 B3 E4]:8 [E3 B3 E4]:8 [E3 B3 E4]:8 | [C3 G3 C4]:8 [C3 G3 C4]:8 [C3 G3 C4]:8 [C3 G3 C4]:8 [C3 G3 C4]:8 [C3 G3 C4]:8 [C3 G3 C4]:8 [C3 G3 C4]:8 | [G2 D3 G3]:8 [G2 D3 G3]:8 [G2 D3 G3]:8 [G2 D3 G3]:8 [G2 D3 G3]:8 [G2 D3 G3]:8 [G2 D3 G3]:8 [G2 D3 G3]:8 | [D3 A3 D4]:8 [D3 A3 D4]:8 [D3 A3 D4]:8 [D3 A3 D4]:8 [D3 A3 D4]:8 [D3 A3 D4]:8 [D3 A3 D4]:8 [D3 A3 D4]:8"},
    {"instrument": "lead", "seq": "B4:q. B4:8 A4:q G4:q | G4:q E4:q E4:h | D5:q. D5:8 B4:q G4:q | A4:h. r:q"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```exercise
{
  "id": "w49l1-listen",
  "type": "listen",
  "title": "The riff",
  "spec": {
    "example": {
      "title": "Riff, slowed",
      "bpm": 90,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "pluck", "seq": "E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 Bb2:8 B2:8 D3:8"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Hum test: which note is home (and the riff's first note)?", "choices": ["G", "E", "A", "D"], "answer": 1},
      {"q": "Which scale do bars 1–3 use?", "choices": ["E minor pentatonic", "E major", "E harmonic minor", "Whole tone"], "answer": 0, "explain": "E minor pentatonic: only E, G, A and D (with B later)."},
      {"q": "What changes in bar 4?", "choices": ["A chromatic climb before the jump up", "The key", "Triplets", "It stops"], "answer": 0, "explain": "A – B♭ – B, then up to D: the blue note B♭ as a chromatic passing note."}
    ]
  }
}
```

```exercise
{
  "id": "w49l1-riff",
  "type": "ear-melody",
  "title": "Transcribe one bar of the riff",
  "instructions": "Eight notes in a low register — hum them up an octave if that helps, then play them back.",
  "srs": false,
  "spec": {
    "key": "Em",
    "degrees": [1, 2, 3, 4, 5, 6, 7],
    "answer": "play",
    "example": {
      "title": "Riff bar 1",
      "bpm": 90,
      "timeSig": "4/4",
      "tracks": [{"instrument": "pluck", "seq": "E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8"}]
    }
  }
}
```

```exercise
{
  "id": "w49l1-chorus",
  "type": "ear-progression",
  "title": "Pass 4: the chorus power chords",
  "instructions": "Key of E minor. Power chords have no 3rd: take each numeral's case from the key.",
  "srs": false,
  "spec": {
    "key": "Em",
    "chords": ["i", "iv", "v", "III", "VI", "VII"],
    "example": {
      "title": "Chorus",
      "bpm": 128,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick crash]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 [kick ride]:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 [kick ride]:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 [kick ride]:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 [kick ride]:8 [snare ride]:8 ride:8"},
        {"instrument": "bass", "seq": "E2:8 E2:8 E2:8 E2:8 E2:8 E2:8 E2:8 E2:8 | C2:8 C2:8 C2:8 C2:8 C2:8 C2:8 C2:8 C2:8 | G1:8 G1:8 G1:8 G1:8 G1:8 G1:8 G1:8 G1:8 | D2:8 D2:8 D2:8 D2:8 D2:8 D2:8 D2:8 D2:8"},
        {"instrument": "pluck", "seq": "[E3 B3 E4]:8 [E3 B3 E4]:8 [E3 B3 E4]:8 [E3 B3 E4]:8 [E3 B3 E4]:8 [E3 B3 E4]:8 [E3 B3 E4]:8 [E3 B3 E4]:8 | [C3 G3 C4]:8 [C3 G3 C4]:8 [C3 G3 C4]:8 [C3 G3 C4]:8 [C3 G3 C4]:8 [C3 G3 C4]:8 [C3 G3 C4]:8 [C3 G3 C4]:8 | [G2 D3 G3]:8 [G2 D3 G3]:8 [G2 D3 G3]:8 [G2 D3 G3]:8 [G2 D3 G3]:8 [G2 D3 G3]:8 [G2 D3 G3]:8 [G2 D3 G3]:8 | [D3 A3 D4]:8 [D3 A3 D4]:8 [D3 A3 D4]:8 [D3 A3 D4]:8 [D3 A3 D4]:8 [D3 A3 D4]:8 [D3 A3 D4]:8 [D3 A3 D4]:8"},
        {"instrument": "lead", "seq": "B4:q. B4:8 A4:q G4:q | G4:q E4:q E4:h | D5:q. D5:8 B4:q G4:q | A4:h. r:q"}
      ]
    },
    "progression": ["i", "VI", "III", "VII"]
  }
}
```

```ladder
{
  "skill": "intervals",
  "unlocks": 21,
  "intro": "Hearing both notes together (rungs 17–20) is the power-chord skill; you drill at your own current rung."
}
```

```exercise
{
  "id": "w49l1-play",
  "type": "play-melody",
  "title": "Play the riff",
  "instructions": "After revealing: play the whole four-bar riff.",
  "spec": {
    "bpm": 100,
    "timeSig": "4/4",
    "key": "Em",
    "seq": "E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 G2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 Bb2:8 B2:8 D3:8",
    "showStaff": true,
    "showKeyboard": true,
    "countIn": 1
  }
}
```

```exercise
{
  "id": "w49l1-power",
  "type": "play-notes",
  "title": "Power-chord shapes",
  "instructions": "Play each chorus power chord: root, 5th, octave.",
  "spec": {
    "prompt": "names",
    "notes": [["E3", "B3", "E4"], ["C3", "G3", "C4"], ["G2", "D3", "G3"], ["D3", "A3", "D4"]],
    "ordered": false
  }
}
```
