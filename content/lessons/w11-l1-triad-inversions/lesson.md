---
id: w11-l1-triad-inversions
title: Triad Inversions and Smooth Voice Leading
week: 11
order: 1
phase: p2
duration_min: 45
goals:
  - Play any major or minor triad in root position, 1st and 2nd inversion
  - Find the root of a triad on paper whatever order its notes are in, and read slash chords like C/E
  - Connect chords with small moves (common tones held, other notes by step)
prerequisites: [w10-l3-bass-clef-and-left-hand]
tags: [chords, inversions, voice-leading, keyboard, ear]
---

# Triad Inversions and Smooth Voice Leading

This week tackles something that is hard for everyone at first: hearing the root of a chord. Before training the ear, let's be completely clear with hands and eyes about what a root *is*, because it isn't always the lowest note.

## Same chord, three shapes

C major is the notes C, E and G. Its **root** is C: the note it's named after, the bottom of the stack of thirds C → E → G. You can play those three notes in any order and it's still C major. What changes is which note is lowest, the **bass**.

- **Root position**: the root in the bass, C E G.
- **1st inversion**: the 3rd in the bass, E G C.
- **2nd inversion**: the 5th in the bass, G C E.

Each rearrangement is an [[inversion]]. Listen: the colour shifts a little, but it's the same chord.

```example
{
  "title": "C major: root position, 1st inversion, 2nd inversion, root position",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:h [E4 G4 C5]:h | [G3 C4 E4]:h [C4 E4 G4]:h" } ],
  "show": ["keyboard", "staff"]
}
```

Many people describe root position as the most settled, 1st inversion as lighter and 2nd inversion as floating. If you can't hear those differences yet, that's normal: for now it's enough to hear "same chord".

```exercise
{
  "id": "e1", "type": "play-melody", "title": "Walk C major and A minor through their inversions",
  "instructions": "Right hand. Root position → 1st → 2nd → root position, first C major, then A minor. Say 'root, first, second' as you go.",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "[C4 E4 G4]:h [E4 G4 C5]:h | [G3 C4 E4]:h [C4 E4 G4]:h | [A3 C4 E4]:h [C4 E4 A4]:h | [E3 A3 C4]:h [A3 C4 E4]:h", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

## Finding the root, and slash chords

Given three notes, rearrange them into stacked thirds: the bottom of the stack is the root. For close shapes on the keyboard there's a shortcut: look for a **4th** (5 half steps) between two neighbouring notes. The **upper** note of that 4th is the root. No 4th anywhere? Then it's root position and the bottom note is the root.

- E G C: G–C is a 4th, so the root is **C**.
- G C E: G–C is a 4th, so the root is **C**.

Chord charts show inversions with a slash. **C/E** means "C major with E in the bass"; **G/B** is G major over B. Left of the slash: the chord and its root. Right of it: the bass note. (The glossary calls this a [[slash chord]].)

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
    { "q": "The bass note of G/B?", "answer": ["B"], "kind": "note" }
  ] }
}
```

```exercise
{
  "id": "e3", "type": "play-chord", "title": "Slash chords",
  "instructions": "Put the note after the slash at the bottom, the rest of the chord above it.",
  "count": 4, "passScore": 0.7,
  "spec": { "chords": ["C/E", "G/B", "F/C", "Am/C"], "sequence": false, "bpm": 60, "key": "C" }
}
```

## Your ear: bass lines with vi

This lesson opens one new roots rung: the bass-line drill adds **vi** (Am in C) — four chords, C, F, G and Am, whose bass notes are C, F, G and A. All chords here are in root position, so the bass *is* the root. The drill runs at your current roots rung, so you'll meet vi once I, IV and V bass lines are solid. (Finding the root of an *inverted* chord by ear waits until next lesson has taught a method for it.)

```ladder
{ "skill": "roots", "unlocks": 5, "intro": "Opens \"Bass line: I, IV, V, vi\"; the drill runs at your current roots rung." }
```

## Why inversions exist: smooth voice leading

Play C – F – G – C with every chord in root position and your hand jumps around. Pianists, arrangers and choirs move from chord to chord with as little motion as possible instead, a craft called [[voice leading]]. Two rules of thumb:

1. **Keep common tones.** If the next chord shares a note with this one, hold it.
2. **Move the other notes by step** to the nearest note of the next chord.

C (C E G) and F (F A C) share C. Hold C, move E up to F and G up to A: that's F/C. Then to G: C steps down to B, A steps down to G, F moves down to D, and you get G/B (B D G). Listen:

```example
{
  "title": "C – F – G – C: blocky (all root position), then smooth (C, F/C, G/B, C)",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:w | [F4 A4 C5]:w | [G4 B4 D5]:w | [C4 E4 G4]:w | r:w | [C4 E4 G4]:w | [C4 F4 A4]:w | [B3 D4 G4]:w | [C4 E4 G4]:w" } ],
  "show": ["keyboard", "pianoroll"]
}
```

```exercise
{
  "id": "e4", "type": "play-melody", "title": "Smooth C – F – G – C",
  "instructions": "Right hand around middle C. Your thumb and fingers barely move. Say the chord names aloud: C, F, G, C.",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 66, "timeSig": "4/4", "key": "C", "seq": "[C4 E4 G4]:w | [C4 F4 A4]:w | [B3 D4 G4]:w | [C4 E4 G4]:w", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e5", "type": "play-chord", "title": "Find your own smooth path",
  "instructions": "C, F, G, Am, in any inversions, but move each finger as little as possible.",
  "count": 4, "passScore": 0.7,
  "spec": { "chords": ["C", "F", "G", "Am"], "inversion": "any", "sequence": true, "bpm": 60, "key": "C" }
}
```
