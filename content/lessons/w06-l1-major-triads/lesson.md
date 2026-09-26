---
id: w06-l1-major-triads
title: Major Triads
week: 6
order: 1
phase: p1
duration_min: 45
goals:
  - Understand a triad as root + 3rd + 5th, and a major triad as M3 + m3
  - Build and play major triads on any white-key root
  - Hear the notes of the tonic chord (degrees 1, 3, 5) inside the key
prerequisites: [w05-l3-intervals-on-staff-and-drone-daw]
tags: [chords, triads, major, ear, keyboard]
---

# Major triads

Until now you've played one note at a time. A [[chord]] is several notes sounding together, and the basic chord of Western music — nearly every pop song is built from them — is the [[triad]]: three notes stacked in 3rds.

## Root, third, fifth

Pick any note: that's the [[root]], the note the chord is named after. Skip a letter and add the 3rd above it; skip another letter and add the 5th above the root.

- C triad: **C** (root) – **E** (3rd) – **G** (5th)
- F triad: **F** – **A** – **C**
- G triad: **G** – **B** – **D**

On the keyboard: play a key, skip one white key, play, skip one, play. On the staff: three notes stacked line-line-line or space-space-space, like a snowman.

```keyboard
{ "range": ["C3", "C5"], "highlight": ["C4", "E4", "G4"], "labels": "names", "colors": { "C4": "root", "E4": "third", "G4": "fifth" } }
```

## What makes it *major*

The quality depends on the sizes of the two stacked 3rds. A [[major triad]] is:

- a **major 3rd** (4 half steps) from root to 3rd, then
- a **minor 3rd** (3 half steps) from 3rd to 5th,
- adding up to a **perfect 5th** (7 half steps) from root to 5th.

C, F and G are major using only white keys. D, E and A need a black key to be major: D–**F♯**–A, E–**G♯**–B, A–**C♯**–E. Count the half steps and you'll see why.

```example
{
  "title": "C major: broken, then together; then F and G",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q E4:q G4:q r:q | [C4 E4 G4]:w | F4:q A4:q C5:q r:q | [F4 A4 C5]:w | G3:q B3:q D4:q r:q | [G3 B3 D4]:w" } ],
  "show": ["staff", "keyboard"]
}
```

Notes played one after another like the start of that example are called an [[arpeggio]] — a "broken chord".

## Why 1, 3 and 5 sound stable

In C major, the C triad is made of degrees **1, 3 and 5** — exactly the notes you've been hearing as "stable". That's not a coincidence: the tonic chord *defines* home. Next time you hear a note after the cadence, ask first: "is it one of the chord notes (1, 3, 5), or one of the in-between notes?"

```example
{
  "title": "Cadence, then the tonic chord arpeggiated: 1 3 5 3 1",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:h [C4 F4 A4]:h | [B3 D4 G4]:h [C4 E4 G4]:h | C4:q E4:q G4:q E4:q | C4:w" } ]
}
```

**Fingering:** right hand 1–3–5 (thumb, middle, little). Keep your hand shape and slide it along to change chords.

## Drills

```exercise
{
  "id": "e1",
  "type": "quiz",
  "title": "Triad anatomy",
  "spec": { "questions": [
    { "q": "A triad is built by stacking…", "choices": ["2nds", "3rds", "5ths"], "answer": 1 },
    { "q": "A major triad is…", "choices": ["M3 then m3", "m3 then M3", "M3 then M3"], "answer": 0 },
    { "q": "The notes of G major are…", "choices": ["G B D", "G B♭ D", "G A B"], "answer": 0 },
    { "q": "D major needs which black key?", "choices": ["F♯", "C♯", "B♭"], "answer": 0 },
    { "q": "Root to 5th in any major triad is a…", "choices": ["perfect 4th", "perfect 5th", "major 3rd"], "answer": 1 },
    { "q": "In C major, the C chord uses degrees…", "choices": ["1 2 3", "1 3 5", "1 4 5"], "answer": 1 }
  ] },
  "passScore": 0.8
}
```

```exercise
{
  "id": "e2",
  "type": "build-chord",
  "title": "Build the major triad",
  "instructions": "Select root, major 3rd and perfect 5th.",
  "count": 8,
  "passScore": 0.8,
  "spec": { "chords": ["C", "F", "G", "D", "A", "E"], "root": "given", "prompt": "symbol", "key": "C" }
}
```

```exercise
{
  "id": "e3",
  "type": "play-chord",
  "title": "C – F – G – C",
  "instructions": "Hold all three notes together, fingers 1–3–5. Move the whole hand shape.",
  "passScore": 0.75,
  "spec": { "chords": ["C", "F", "G", "C"], "inversion": "root", "sequence": true, "bpm": 50 }
}
```

```exercise
{
  "id": "e4",
  "type": "ear-interval",
  "title": "Building blocks: m3 or M3?",
  "count": 10,
  "passScore": 0.75,
  "spec": { "intervals": ["m3", "M3"], "direction": "asc", "root": "random", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e5",
  "type": "ear-note",
  "title": "Which chord tone: 1, 3 or 5?",
  "instructions": "After the cadence, one note from the tonic chord.",
  "count": 10,
  "passScore": 0.75,
  "spec": { "key": "random", "mode": "major", "degrees": [1, 3, 5], "reference": "cadence", "octaves": [3, 4], "instrument": "piano" }
}
```

```exercise
{
  "id": "e6",
  "type": "ear-melody",
  "title": "Echo the arpeggio",
  "instructions": "Four notes from C, E and G. Play them back.",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "C", "degrees": [1, 3, 5], "length": 4, "rhythm": "quarters", "answer": "play" }
}
```
