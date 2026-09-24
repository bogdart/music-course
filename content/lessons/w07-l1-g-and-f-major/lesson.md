---
id: w07-l1-g-and-f-major
title: G Major, F Major and Key Signatures
week: 7
order: 1
phase: p1
duration_min: 45
goals:
  - Build and play G major (one sharp) and F major (one flat)
  - Read a key signature and name the key (C, G or F)
  - Hear degrees 1–5 in G and F major, and meet the circle of fifths
prerequisites: [w06-l3-diatonic-triads-and-roman-numerals]
tags: [keys, key-signature, scales, circle-of-fifths, ear]
---

# New keys: G and F

In week 3 you saw that the W-W-H-W-W-W-H pattern works from any note. Each starting note gives a different [[key]] — the same "home and family" relationships, moved higher or lower. Why bother? Because songs need to fit voices and instruments, and because changing key is one of the most powerful tools in songwriting. Today: the two keys closest to C.

## G major: one sharp

G →W→ A →W→ B →H→ C →W→ D →W→ E →W→ **F♯** →H→ G

To keep the pattern, F must be raised to F♯. Everything else is white keys.

## F major: one flat

F →W→ G →W→ A →H→ **B♭** →W→ C →W→ D →W→ E →H→ F

Here B must be lowered to B♭ to create the half step after A.

```example
{
  "title": "G major, then F major",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "G3:q A3:q B3:q C4:q | D4:q E4:q F#4:q G4:q | F3:q G3:q A3:q Bb3:q | C4:q D4:q E4:q F4:q" } ],
  "show": ["staff", "keyboard"]
}
```

**Fingering (right hand).** G major: same as C — 1 2 3, thumb under, 1 2 3 4 5. F major is different: **1 2 3 4** (F G A B♭), thumb under onto C, **1 2 3 4** (C D E F). The fourth finger belongs on B♭.

## Key signatures

Writing a ♯ in front of every F would be tiring. So the sharps or flats of the key are written once, at the start of every line — the [[key signature]]. One sharp (on the F line) = G major. One flat (on the B line) = F major. No sharps or flats = C major.

```staff
{ "clef": "treble", "key": "G", "timeSig": "4/4", "seq": "G4:q A4:q B4:q C5:q | D5:q E5:q F#5:q G5:q" }
```

```staff
{ "clef": "treble", "key": "F", "timeSig": "4/4", "seq": "F4:q G4:q A4:q Bb4:q | C5:q D5:q E5:q F5:q" }
```

## The circle of fifths (first look)

Go **up a perfect 5th** from C and you reach G: one sharp. Up another 5th: D major, two sharps. Each step up a 5th adds one sharp. Go **down a 5th** from C and you reach F: one flat; down again, B♭: two flats. Arrange all keys this way and they form a loop, the [[circle of fifths]] — a map of which keys are close relatives. Neighbours on the circle share six of seven notes, which is why moving between them sounds smooth.

## Same degrees, new home

In G major, G is 1, D is 5, F♯ is 7. Your ear training carries over: the *feel* of each degree is identical, only the cadence sets a new home. That's the payoff of learning degrees instead of note names.

## Drills

```exercise
{
  "id": "e1",
  "type": "quiz",
  "title": "Sharps, flats and the circle",
  "spec": { "questions": [
    { "q": "G major has one sharp. Which?", "choices": ["F♯", "C♯", "G♯"], "answer": 0 },
    { "q": "F major has one flat. Which?", "choices": ["E♭", "B♭", "F♭"], "answer": 1 },
    { "q": "A key signature with no sharps or flats means…", "choices": ["C major", "G major", "no key"], "answer": 0 },
    { "q": "Going up a 5th from G on the circle gives…", "choices": ["D major", "C major", "A major"], "answer": 0 },
    { "q": "In G major, degree 5 is…", "choices": ["C", "D", "E"], "answer": 1 },
    { "q": "In F major, degree 4 is…", "choices": ["B", "B♭", "A"], "answer": 1 }
  ] },
  "passScore": 0.8
}
```

```exercise
{
  "id": "e2",
  "type": "key-signature",
  "title": "Name the key",
  "count": 9,
  "passScore": 0.8,
  "spec": { "keys": ["C", "G", "F"], "prompt": "staff", "answer": "name" }
}
```

```exercise
{
  "id": "e3",
  "type": "build-scale",
  "title": "Build G and F major",
  "count": 6,
  "passScore": 0.85,
  "spec": { "roots": ["G", "F", "C"], "scale": "major", "prompt": "name" }
}
```

```exercise
{
  "id": "e4",
  "type": "play-scale",
  "title": "G major, one octave",
  "instructions": "Same fingering as C. Don't forget F♯.",
  "passScore": 0.75,
  "spec": { "root": "G", "scale": "major", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 60, "metronome": true }
}
```

```exercise
{
  "id": "e5",
  "type": "play-scale",
  "title": "F major, one octave",
  "instructions": "Fingers 1 2 3 4, thumb under onto C, 1 2 3 4. Finger 4 on B♭.",
  "passScore": 0.75,
  "spec": { "root": "F", "scale": "major", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 60, "metronome": true }
}
```

```exercise
{
  "id": "e6",
  "type": "ear-note",
  "title": "Degrees 1–5 in G major",
  "instructions": "Listen to the cadence: home is now G.",
  "count": 12,
  "passScore": 0.7,
  "spec": { "key": "G", "mode": "major", "degrees": [1, 2, 3, 4, 5], "reference": "cadence", "octaves": [3, 4], "instrument": "piano" }
}
```

```exercise
{
  "id": "e7",
  "type": "ear-note",
  "title": "Degrees 1–5 in F major",
  "count": 12,
  "passScore": 0.7,
  "spec": { "key": "F", "mode": "major", "degrees": [1, 2, 3, 4, 5], "reference": "cadence", "octaves": [3, 4], "instrument": "piano" }
}
```
