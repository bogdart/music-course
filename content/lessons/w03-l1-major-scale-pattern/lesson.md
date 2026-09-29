---
id: w03-l1-major-scale-pattern
title: The Major Scale Pattern
week: 3
order: 1
phase: p1
duration_min: 45
goals:
  - Build a major scale from any root using W-W-H-W-W-W-H
  - Play C major, one octave up and down, with correct fingering
  - Notice when one note of the major scale is "wrong"
prerequisites: [w02-l3-pulse-tempo-first-daw]
tags: [scales, major, keyboard, ear]
---

# The major scale

A [[scale]] is a ladder of notes that a piece of music mostly stays on. Most of the songs you know — nursery rhymes, hymns, a huge share of pop — are built on one ladder: the [[major scale]]. It sounds bright, settled, "home-like".

## Why C major is all white keys

Play the white keys from C4 to C5. That's C major. Now look at the steps between them, using last week's rule (no black key between E–F and B–C):

C →**W**→ D →**W**→ E →**H**→ F →**W**→ G →**W**→ A →**W**→ B →**H**→ C

**W W H W W W H.** That pattern *is* the major scale. The letters don't matter; the pattern of steps does. Start on any key, follow W-W-H-W-W-W-H, and you get a major scale — it will just need some black keys.

```example
{
  "title": "C major scale, up and down",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q F4:q | G4:q A4:q B4:q C5:q | C5:q B4:q A4:q G4:q | F4:q E4:q D4:q C4:q" } ],
  "show": ["staff", "keyboard"]
}
```

Try building G major: G →W→ A →W→ B →H→ C →W→ D →W→ E →W→ **F♯** →H→ G. The pattern forces one black key, F♯. You'll build more of these in week 7.

```keyboard
{ "range": ["C3", "C5"], "highlight": ["G3", "A3", "B3", "C4", "D4", "E4", "F#4", "G4"], "labels": "names", "colors": { "G3": "root", "G4": "root" } }
```

## Fingering

Right hand, thumb = 1, little finger = 5. For C major going up: **1 2 3** (C D E), then tuck the **thumb under** onto F, and continue **1 2 3 4 5** (F G A B C). Going down, reverse it: 5 4 3 2 1, then cross finger **3 over** the thumb onto E. Slow and even beats fast and bumpy.

## Why the pattern matters to your ear

Because the half steps sit in fixed places (between the 3rd–4th and 7th–8th notes), every major scale *sounds* the same, only higher or lower. Change one note and the ladder breaks. Listen — one note below is wrong:

```example
{
  "title": "C major with one wrong note",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q F#4:q | G4:q A4:q B4:q C5:q" } ],
  "show": ["keyboard"]
}
```

The fourth note, F♯, sounds like it's leaning somewhere else. That feeling — "this note doesn't belong" — is your ear already knowing the major scale.

## Drills

```exercise
{
  "id": "e1",
  "type": "quiz",
  "title": "The pattern",
  "spec": { "questions": [
    { "q": "The major scale step pattern is…", "choices": ["W W H W W W H", "W H W W H W W", "H W W W H W W"], "answer": 0 },
    { "q": "In C major, where are the half steps?", "choices": ["E–F and B–C", "C–D and G–A", "D–E and A–B"], "answer": 0 },
    { "q": "G major needs one black key. Which?", "choices": ["F♯", "B♭", "C♯"], "answer": 0 },
    { "q": "How many different notes are in a major scale (not counting the top repeat)?", "choices": ["5", "7", "8"], "answer": 1 },
    { "q": "C major going up: after playing E with finger 3, you…", "choices": ["tuck the thumb under onto F", "use finger 4 on F", "jump the hand"], "answer": 0 },
    { "q": "F major needs one black key. Following W-W-H from F: F G A ?", "choices": ["B", "B♭", "C"], "answer": 1, "explain": "A to the next note must be a half step: B♭." }
  ] },
  "passScore": 0.8
}
```

```exercise
{
  "id": "e2",
  "type": "build-scale",
  "title": "Build it with the pattern",
  "instructions": "Select the seven notes of the major scale on the given root. Count W-W-H-W-W-W-H on the keyboard.",
  "count": 6,
  "passScore": 0.8,
  "spec": { "roots": ["C", "G", "F"], "scale": "major", "prompt": "name" }
}
```

```exercise
{
  "id": "e3",
  "type": "play-scale",
  "title": "C major, slowly",
  "instructions": "Right hand, thumb under on F going up, 3 over on E going down.",
  "passScore": 0.75,
  "spec": { "root": "C", "scale": "major", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 60, "metronome": true }
}
```

```exercise
{
  "id": "e4",
  "type": "ear-interval",
  "title": "Steps inside the scale",
  "instructions": "Two neighbouring scale notes: half step (m2) or whole step (M2)?",
  "count": 10,
  "passScore": 0.75,
  "spec": { "intervals": ["m2", "M2"], "direction": "asc", "root": "random", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e5",
  "type": "listen",
  "title": "Spot the wrong note",
  "spec": {
    "example": { "title": "C major… almost", "bpm": 80, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q F4:q | G4:q A4:q Bb4:q C5:q" } ] },
    "questions": [
      { "q": "Which note sounded out of place?", "choices": ["the 3rd", "the 5th", "the 7th"], "answer": 2, "explain": "B♭ replaced B, so the step to C became a whole step." },
      { "q": "What should the 7th note of C major be?", "choices": ["B", "B♭", "A"], "answer": 0 }
    ]
  }
}
```

```exercise
{
  "id": "e6",
  "type": "ear-melody",
  "title": "Echo: scale fragments",
  "instructions": "Four notes from C D E F G. Play them back.",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "C", "degrees": [1, 2, 3, 4, 5], "length": 4, "rhythm": "quarters", "answer": "play", "reference": "scale" }
}
```
