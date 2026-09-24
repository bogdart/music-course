---
id: w11-l1-triad-inversions
title: Triad Inversions
week: 11
order: 1
phase: p2
duration_min: 40
goals:
  - Play any major or minor triad in root position, 1st and 2nd inversion
  - Find the root of a triad whatever order its notes are in
  - Read slash-chord symbols like C/E and G/B
prerequisites: [w10-l3-bass-clef-and-left-hand]
tags: [chords, inversions, ear, keyboard]
---

# Triad Inversions

This week tackles something you told us is hard: hearing the root of a chord. Before we train the ear, let's be completely clear with the hands and eyes about what a root *is* — because it is not always the lowest note.

## Same chord, three shapes

A C major triad is the notes C, E and G. The **root** is C: the note the chord is named after, the one you'd stack thirds on (C → E → G). You can play those three notes in any order and it's still C major. What changes is which note is at the bottom — the bass.

- **Root position**: root in the bass — C E G.
- **1st inversion**: the 3rd in the bass — E G C.
- **2nd inversion**: the 5th in the bass — G C E.

Each of these is an [[inversion]]. Listen: the colour shifts, but it's clearly the same chord.

```example
{
  "title": "C major: root position, 1st inversion, 2nd inversion, root position",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:h [E4 G4 C5]:h | [G3 C4 E4]:h [C4 E4 G4]:h" } ],
  "show": ["keyboard", "staff"]
}
```

```keyboard
{ "range": ["C3", "C5"], "highlight": ["E3", "G3", "C4"], "labels": "names", "colors": { "C4": "root", "E3": "third", "G3": "fifth" } }
```

Root position sounds most stable and "finished". 1st inversion is lighter, less grounded. 2nd inversion sounds floating — as if it's waiting for something.

```exercise
{
  "id": "e1", "type": "play-melody", "title": "Walk C major through its inversions",
  "instructions": "Right hand. C major: root position → 1st → 2nd → root position. Then A minor: root position → 1st → 2nd → root position. Say 'root, first, second' as you go.",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "[C4 E4 G4]:h [E4 G4 C5]:h | [G3 C4 E4]:h [C4 E4 G4]:h | [A3 C4 E4]:h [C4 E4 A4]:h | [E3 A3 C4]:h [A3 C4 E4]:h", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

## Finding the root on paper

Given any three notes, rearrange them into stacked thirds; the bottom of the stack is the root. A shortcut for close shapes on the keyboard: look for the gap of a **4th** between neighbouring notes. The **upper** note of that 4th is the root. No 4th anywhere? It's root position, so the bottom note is the root.

- E G C → gap G–C is a 4th → root **C**.
- G C E → gap G–C is a 4th → root **C**.

```exercise
{
  "id": "e2", "type": "quiz-input", "title": "Where's the root?",
  "instructions": "Notes are listed from the bottom up. Name the root.",
  "spec": { "questions": [
    { "q": "E – G – C", "answer": ["C"], "kind": "note" },
    { "q": "A – D – F", "answer": ["D"], "kind": "note" },
    { "q": "B – D – G", "answer": ["G"], "kind": "note" },
    { "q": "C – F – A", "answer": ["F"], "kind": "note" },
    { "q": "C – E – A", "answer": ["A"], "kind": "note" },
    { "q": "D – G – B", "answer": ["G"], "kind": "note" }
  ] }
}
```

## Slash chords

Chord charts show inversions with a slash: [[slash chord]] **C/E** means "C major with E in the bass". **G/B** is G major over B. Left of the slash: the chord (and its root). Right: the bass note.

```exercise
{
  "id": "e3", "type": "play-chord", "title": "Chords in any shape",
  "instructions": "Play each chord in whatever inversion is nearest to your hand. Try not to jump back to root position every time.",
  "count": 8, "passScore": 0.8,
  "spec": { "chords": ["C", "F", "G", "Am", "Dm", "Em"], "inversion": "any", "sequence": false, "bpm": 60 }
}
```

## Hearing inversions

Now the ear. Don't try to name the root yet — just ask: does the chord sound grounded (root position), light (1st) or floating (2nd)?

```exercise
{
  "id": "e4", "type": "ear-chord", "title": "Which inversion? (major only)",
  "count": 9, "passScore": 0.7,
  "hints": ["Root position: the bass and the chord agree — solid.", "2nd inversion: the bass is a 4th below the root — unstable, 'waiting'."],
  "spec": { "qualities": ["maj"], "inversions": [0, 1, 2], "voicing": "close", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e5", "type": "ear-chord", "title": "Major or minor, root position or 1st inversion",
  "count": 8, "passScore": 0.7,
  "spec": { "qualities": ["maj", "min"], "inversions": [0, 1], "voicing": "close", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e6", "type": "ear-chord-root", "title": "Play the root (root-position warm-up)",
  "instructions": "You hear a chord. Hum its lowest note, then play that note. Tomorrow's lesson builds on this.",
  "count": 8, "passScore": 0.7,
  "spec": { "qualities": ["maj"], "answer": "play", "range": ["C3", "C4"] }
}
```
