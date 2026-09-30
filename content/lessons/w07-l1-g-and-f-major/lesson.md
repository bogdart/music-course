---
id: w07-l1-g-and-f-major
title: G Major, F Major and Key Signatures
week: 7
order: 1
phase: p1
duration_min: 45
goals:
  - Build and play G major (one sharp), then F major (one flat)
  - Read a key signature and name the key (C, G or F); spell each key with every letter once
  - Meet the circle of fifths; hear degrees with G, and later F, as home
prerequisites: [w06-l3-diatonic-triads-and-roman-numerals]
tags: [keys, key-signature, scales, circle-of-fifths, ear]
---

# New keys: G and F

In week 3 you saw that the W-W-H-W-W-W-H pattern works from any note. Each starting note gives a different [[key]] — the same home-and-family relationships, moved higher or lower. Songs change key to fit a voice or an instrument, or to lift the energy. Today: the two keys closest to C, **one at a time**.

## G major: one sharp

G →W→ A →W→ B →H→ C →W→ D →W→ E →W→ **F♯** →H→ G

To keep the pattern, F must be raised to F♯. Everything else is white keys. Fingering: same as C — 1 2 3, thumb under, 1 2 3 4 5.

```example
{
  "title": "G major, up and down",
  "bpm": 90, "timeSig": "4/4", "key": "G",
  "tracks": [ { "instrument": "piano", "seq": "G3:q A3:q B3:q C4:q | D4:q E4:q F#4:q G4:q | G4:q F#4:q E4:q D4:q | C4:q B3:q A3:q G3:q" } ],
  "show": ["staff", "keyboard"]
}
```

Writing a ♯ before every F would be tiring, so the key's sharps or flats are written once, at the start of every line: the [[key signature]]. One sharp, on the F line = **G major**. No sharps or flats = C major.

```staff
{ "clef": "treble", "key": "G", "timeSig": "4/4", "seq": "G4:q A4:q B4:q C5:q | D5:q E5:q F#5:q G5:q" }
```

## Home in G

In G major, G is 1, D is 5, F♯ is 7, and the cadence is G – C – D – G. Listen to it, then a note:

```example
{
  "title": "Cadence in G (G – C – D – G), then 3 (B) walking home",
  "bpm": 80, "timeSig": "4/4", "key": "G",
  "tracks": [ { "instrument": "piano", "seq": "[G4 B4 D5]:q [G4 C5 E5]:q [F#4 A4 D5]:q [G4 B4 D5]:q | r:w | B4:w | B4:q A4:q G4:h" } ],
  "show": ["keyboard"]
}
```

This lesson opens a degree rung in G (and, after it, one in F). The drill at the end of the lesson runs at your current degree rung, so you'll meet G as home only once degrees 1–6 in C are solid. When you do, be ready for it to feel strange: after weeks in C, your ear may keep hearing C as home for a while, and the whole drill sits a little higher than in C. The cadence before every question is there to reset home — listen to it every time. The ladder stays in **G** until G is solid; F comes after.

## F major: one flat

F →W→ G →W→ A →H→ **B♭** →W→ C →W→ D →W→ E →H→ F

Here B must be lowered to B♭ to make the half step after A. One flat, on the B line = **F major**. Fingering is different: **1 2 3 4** (F G A B♭), thumb under onto C, **1 2 3 4** (C D E F). The fourth finger belongs on B♭.

```example
{
  "title": "F major, up and down",
  "bpm": 90, "timeSig": "4/4", "key": "F",
  "tracks": [ { "instrument": "piano", "seq": "F3:q G3:q A3:q Bb3:q | C4:q D4:q E4:q F4:q | F4:q E4:q D4:q C4:q | Bb3:q A3:q G3:q F3:q" } ],
  "show": ["staff", "keyboard"]
}
```

```staff
{ "clef": "treble", "key": "F", "timeSig": "4/4", "seq": "F4:q G4:q A4:q Bb4:q | C5:q D5:q E5:q F5:q" }
```

## Sharp or flat? How notes are spelled in a key

In week 2 you learned that one black key has two names — F♯ is also G♭, B♭ is also A♯. Now you can see which name a key uses. The rule: **a major scale uses every letter exactly once**, A to G, each letter raised, lowered or natural.

- G major needs a note between F and G. Its letters so far are G A B C D E — the letter still missing is **F**, so the note is **F♯**, not G♭ (G♭ would use G twice and skip F).
- F major needs a note between A and B. Its letters are F G A _ C D E — the missing letter is **B**, so the note is **B♭**, not A♯ (A♯ would use A twice and skip B).

A result you can rely on: **keys with sharps never use flats, and keys with flats never use sharps.** So in G major the black key is always F♯, and in F major it is always B♭ — the other names are the same key on the piano, but wrong spelling in that key.

## The circle of fifths (first look)

Go **up a perfect 5th** from C and you reach G: one sharp. Up another 5th: D major, two sharps. Each step up a 5th adds one sharp. Go **down a 5th** from C and you reach F: one flat; down again, B♭: two flats. Arranged this way, all keys form a loop, the [[circle of fifths]] — a map of which keys are close relatives. Neighbours share six of their seven notes. For now you only need C and its two neighbours, G and F.

```ladder
{ "skill": "degrees", "unlocks": 10, "intro": "Opens degrees 1–6 in G, then in F; the drill runs at your current rung. Listen to the cadence every time." }
```

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
    { "q": "In F major, degree 4 is…", "choices": ["B", "B♭", "A"], "answer": 1 },
    { "q": "In G major, the black key is spelled…", "choices": ["F♯", "G♭"], "answer": 0, "explain": "Each letter once: G A B C D E F♯. G♭ would use G twice and skip F." },
    { "q": "In F major, the black key is spelled…", "choices": ["A♯", "B♭"], "answer": 1, "explain": "Each letter once: F G A B♭ C D E. A♯ would use A twice and skip B." }
  ] },
  "passScore": 0.75
}
```

```exercise
{
  "id": "e2",
  "type": "key-signature",
  "title": "Name the key",
  "count": 9,
  "passScore": 0.75,
  "spec": { "keys": ["C", "G", "F"], "prompt": "staff", "answer": "name" }
}
```

```exercise
{
  "id": "e3",
  "type": "build-scale",
  "title": "Build G and F major",
  "count": 6,
  "passScore": 0.75,
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
