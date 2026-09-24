---
id: w51-l1-final-song-writing
title: "Final Project 1: Brief, Form and Core"
week: 51
order: 1
phase: p5
duration_min: 50
goals:
  - Write a one-paragraph brief and choose a reference track for your final song
  - Borrow the reference's form map as the skeleton of your own 3+ minute song
  - Reach checkpoint 3 — finished verse and chorus core (chords, bass, melody)
prerequisites: [w50-l3-speed-song-from-chords]
tags: [songwriting, final-project, form, reference, daw]
---

# Final Project 1: Brief, Form and Core

This is it: one song, fully finished, at least three minutes long, with a complete arrangement. You have three lessons. This one gets the song *written*; the next gets it *arranged*; the last one gets it *reviewed and finished*.

You'll work through six checkpoints. Each is a concrete, checkable result, so you always know where you are.

| # | Checkpoint | Lesson |
|---|-----------|--------|
| 1 | Brief + reference track | 1 |
| 2 | Form map (borrowed from the reference) | 1 |
| 3 | Core: verse + chorus chords, bass, melody | 1 |
| 4 | Full-length structure with drums and bass | 2 |
| 5 | Layers and energy curve | 2 |
| 6 | Balance, pan, final listen, sign-off | 3 |

## Checkpoint 1 — the brief

Three sentences: *style* (one of the four you transcribed, or a blend), *mood* in two words, and *starting point* (hook, beat or chords — your fastest from week 50). Then pick a **reference track**: one of the songs you analysed this phase, or any song you love. You won't copy anything from it except decisions — tempo range, form, arrangement density.

## Checkpoint 2 — borrow the form

Here the transcription skills pay off directly. Write the reference's form map (sections and bar counts only — you know how), then adopt it as yours. Professional writers do this all the time; form is not ownable, and a proven form removes a whole category of decisions.

Length rule: bars ≥ BPM × 0.75 gives at least three minutes in 4/4. At 100 BPM that's 76 bars — for instance Intro 4, V 16, C 8, V 16, C 8, Bridge 8, C 8, C 8, Outro 4 = 80.

## Checkpoint 3 — the core

Write only the verse and chorus — chords, bass roots and melody, 8 bars each — at full quality. Use today's timebox: 25 minutes, no drums yet. Everything else in the song will be made from these 16 bars.

Here's what a finished core sounds like (an original example — yours will differ):

```example
{
  "title": "Example core: 4 bars of verse + 4 bars of chorus",
  "bpm": 100, "timeSig": "4/4", "key": "G",
  "tracks": [
    { "instrument": "bass", "seq": "E2:h E2:h | C2:h C2:h | G1:h G1:h | D2:h D2:h | C2:q. C2:8 C2:h | D2:q. D2:8 D2:h | E2:q. E2:8 E2:h | G1:q. G1:8 G1:h" },
    { "instrument": "piano", "seq": "[E3 G3 B3]:w | [E3 G3 C4]:w | [D3 G3 B3]:w | [D3 F#3 A3]:w | [G3 C4 E4]:h [G3 C4 E4]:h | [A3 D4 F#4]:h [A3 D4 F#4]:h | [G3 B3 E4]:h [G3 B3 E4]:h | [G3 B3 D4]:h [G3 B3 D4]:h" },
    { "instrument": "lead", "seq": "B4:q B4:8 A4:8 G4:q E4:q | G4:h. r:q | D4:q G4:8 A4:8 B4:q G4:q | A4:h. r:q | E5:q. D5:8 C5:q G4:q | F#5:q. E5:8 D5:h | E5:q. D5:8 B4:q G4:q | G4:h. r:q" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

The verse sits low and uses vi–IV–I–V; the chorus lifts the melody an octave and re-orders the chords (IV–V–vi–I).

```exercise
{
  "id": "w51l1-warm",
  "type": "ear-progression",
  "title": "Warm-up: progressions in a random key",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "random", "mode": "major", "length": 4, "chords": ["I", "ii", "IV", "V", "vi", "iv", "bVII"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "w51l1-melody",
  "type": "ear-melody",
  "title": "Warm-up: melodic dictation in G",
  "count": 6,
  "passScore": 0.75,
  "spec": { "key": "G", "degrees": [1, 2, 3, 4, 5, 6, 7], "length": 6, "rhythm": "simple", "answer": "play" }
}
```

```exercise
{
  "id": "w51l1-brief",
  "type": "reflect",
  "title": "Checkpoint 1: the brief",
  "spec": { "prompt": "Style, mood (two words), starting point, tempo and key. Name your reference track and say in one sentence what you will borrow from it (not melody or lyrics — decisions such as tempo, form, density).", "minWords": 40 }
}
```

```exercise
{
  "id": "w51l1-form",
  "type": "reflect",
  "title": "Checkpoint 2: the form map",
  "spec": { "prompt": "Write the reference's form map (section names and bar counts, from your own listening), then your song's form map. Show the arithmetic: total bars ≥ BPM × 0.75.", "minWords": 30 }
}
```

```exercise
{
  "id": "w51l1-core-play",
  "type": "play-chord",
  "title": "Play the example core",
  "instructions": "Warm your hands up on the example's chords before writing your own.",
  "spec": { "chords": ["Em", "C", "G", "D", "C", "D", "Em", "G"], "inversion": "any", "sequence": true, "bpm": 80 }
}
```

```exercise
{
  "id": "w51l1-core",
  "type": "daw-task",
  "title": "Checkpoint 3: the core (16 bars)",
  "spec": {
    "template": { "bpm": 100, "key": "C", "tracks": [
      { "instrument": "piano", "seq": "" }, { "instrument": "bass", "seq": "" }, { "instrument": "lead", "seq": "" } ] },
    "task": "Set your own tempo and key from the brief. Write the 8-bar verse followed by the 8-bar chorus: chords, bass roots, melody. The chorus melody must sit higher than the verse's, and its hook must repeat at least twice. Save the project with your song's title — lessons 2 and 3 continue in this project.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "bass", "lead"] },
      { "kind": "bars", "min": 16, "max": 16 },
      { "kind": "repetition", "motifBars": 2, "minRepeats": 2, "allowTransposed": true, "track": 2 },
      { "kind": "max-leap", "semitones": 9, "track": 2 },
      { "kind": "custom", "id": "w51-cp3-key", "note": "Self-check: every melody note fits your chosen key or is a deliberate chromatic note you can name." }
    ],
    "minBars": 16, "maxBars": 16
  }
}
```
