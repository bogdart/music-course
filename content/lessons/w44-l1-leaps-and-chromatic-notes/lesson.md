---
id: w44-l1-leaps-and-chromatic-notes
title: Melody Dictation — Leaps and Chromatic Notes
week: 44
order: 1
phase: p5
duration_min: 45
goals:
  - Transcribe melodic leaps by anchoring them to chord tones and the tonic
  - Recognise the three chromatic notes pop melodies use most — b3, #4 and b7
  - Play back a 4-bar melody with leaps and chromatic notes over its chords
prerequisites: [w43-l3-borrowed-chords-in-four-keys]
tags: [transcription, melody, intervals, chromatic, ear]
---

# Melody Dictation — Leaps and Chromatic Notes

Pass 5 is melody. You have dictated stepwise tunes since Phase 3. What still trips people up in real songs are **leaps** (the melody jumps, and you lose your place) and **chromatic notes** (a note outside the key, and your degree map breaks). Both have a simple fix.

## Leaps land on chord tones

A melody rarely leaps to a random note. It leaps to the **root, 3rd or 5th of the current chord** — because those are the stable notes. So when you hear a leap, don't measure the interval first. Ask: *which chord are we on (you know that from pass 4), and which of its three notes did the melody just land on?* That's a three-way choice, not a twelve-way one. Measure the interval only to confirm.

If you get lost entirely, re-anchor: hum the tonic, then hum up or down to the note. Degree 1 is always your safe harbour.

## Three chromatic notes cover most cases

When a note doesn't fit the major scale, it's usually one of these:

- **b3** — the "blue" note. Slides down to 2 or up to 3. Soul, blues, rock.
- **#4** — a leading note to 5, usually quick, from below.
- **b7** — the Mixolydian note. Often over a IV or bVII chord; sounds relaxed, un-classical.

Name the chromatic note by its *neighbour*: "a half step below 5" is #4, "a half step above 2" is b3.

```example
{
  "title": "Leaps and chromatic notes over C – Am – F – G",
  "bpm": 84, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[C3 G3 E4]:w | [A2 E3 C4]:w | [F2 C3 A3]:w | [G2 D3 B3]:w" },
    { "instrument": "lead", "seq": "G4:q C5:q E5:q. D5:8 | C5:q A4:q E5:h | F5:q. E5:8 Eb5:8 D5:8 C5:q | B4:q F#4:8 G4:8 D5:h" }
  ],
  "show": ["staff", "keyboard"],
  "loop": true
}
```

Walk through it: bar 1 leaps up the C chord (5–1–3). Bar 2 leaps a 5th, A to E — root to 5th of A minor. Bar 3 slides chromatically through Eb (b3) to D. Bar 4 dips to F# (#4) and resolves up to G.

```exercise
{
  "id": "w44l1-listen",
  "type": "listen",
  "title": "Find the chromatic notes",
  "spec": {
    "example": {
      "title": "Melody alone",
      "bpm": 72, "timeSig": "4/4", "key": "C",
      "tracks": [ { "instrument": "lead", "seq": "G4:q C5:q E5:q. D5:8 | C5:q A4:q E5:h | F5:q. E5:8 Eb5:8 D5:8 C5:q | B4:q F#4:8 G4:8 D5:h" } ],
      "loop": true
    },
    "questions": [
      { "q": "In bar 2, the melody leaps from A to E. Relative to the A minor chord, E is its…", "choices": ["Root", "3rd", "5th", "7th"], "answer": 2 },
      { "q": "The chromatic note in bar 3 is…", "choices": ["b3 (Eb)", "#4 (F#)", "b7 (Bb)", "b6 (Ab)"], "answer": 0 },
      { "q": "The F# in bar 4 resolves to…", "choices": ["F", "G", "E", "C"], "answer": 1 }
    ]
  }
}
```

```exercise
{
  "id": "w44l1-leaps",
  "type": "ear-interval",
  "title": "Leap sizes",
  "count": 12,
  "passScore": 0.75,
  "spec": { "intervals": ["P4", "P5", "m6", "M6", "m7", "P8"], "direction": "mixed", "root": "random", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "w44l1-chromatic",
  "type": "ear-note",
  "title": "Degrees including chromatic notes",
  "instructions": "Answer with b or # where the note is outside the key.",
  "count": 12,
  "passScore": 0.75,
  "spec": { "key": "random", "mode": "major", "degrees": [1, 2, 3, 4, 5, 6, 7], "chromatic": true, "reference": "cadence", "octaves": [4], "instrument": "piano" }
}
```

```exercise
{
  "id": "w44l1-dictate",
  "type": "ear-melody",
  "title": "Melodies with leaps",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "random", "degrees": [1, 2, 3, 4, 5, 6, 7], "length": 5, "rhythm": "simple", "answer": "play" }
}
```

```exercise
{
  "id": "w44l1-build",
  "type": "build-interval",
  "title": "Find the landing note",
  "count": 10,
  "spec": { "intervals": ["P4", "P5", "M6", "m7", "P8"], "direction": "asc", "root": "random" }
}
```

```exercise
{
  "id": "w44l1-play",
  "type": "play-melody",
  "title": "Play the example melody",
  "spec": { "bpm": 72, "timeSig": "4/4", "key": "C", "seq": "G4:q C5:q E5:q. D5:8 | C5:q A4:q E5:h | F5:q. E5:8 Eb5:8 D5:8 C5:q | B4:q F#4:8 G4:8 D5:h", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "piano", "seq": "[C3 G3 E4]:w | [A2 E3 C4]:w | [F2 C3 A3]:w | [G2 D3 B3]:w" } }
}
```
