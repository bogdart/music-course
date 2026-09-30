---
id: w11-l2-triad-inversions
title: Triad Inversions and Smooth Voice Leading
week: 11
order: 2
phase: p2
duration_min: 45
goals:
  - Play any major or minor triad in root position, 1st and 2nd inversion
  - Find the root of a triad whatever order its notes are in (on paper, and by ear with the keyboard), and read slash chords like C/E
  - Connect chords with small moves (common tones held, other notes by step)
prerequisites: [w11-l1-bass-clef-and-left-hand]
tags: [chords, inversions, voice-leading, keyboard, ear]
---

# Triad Inversions and Smooth Voice Leading

This week tackles something that is hard for everyone at first: hearing the root of a chord. First let's be completely clear with hands and eyes about what a root *is*, because it isn't always the lowest note. Then your ear gets a hands-on method for it.

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

## Your ear: the root of an inverted chord

Since week 6 your root drills played chords in root position, so the lowest note *was* the root. This lesson opens the rung where major chords may be inverted: the lowest note may be the 3rd or the 5th, and you still play the **root**. Honestly, your ear will follow the lowest note at first; that's what everyone does. So today you answer with your hands, using the rule you just learned on paper. (Next lesson adds a faster "settled test" and minor chords.)

```example
{
  "title": "F major three ways: F/A (1st inversion), F/C (2nd inversion), F (root position)",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[A3 C4 F4]:w | [C4 F4 A4]:w | [F3 A3 C4]:w" } ],
  "show": ["keyboard"]
}
```

### Try it: find the notes, then the 4th

1. Play **A3 C4 F4** (F/A). Play only the lowest note, A. Then only the top, F. Then all three again.
2. Look at your hand: where is the 4th? C–F (5 half steps). The upper note, **F**, is the root. Play F low with your left hand under the chord: it's the chord's name.
3. Now G/B (**B3 D4 G4**) and C/G (**G3 C4 E4**): find the 4th in each (D–G, G–C) and play the root low.

Check: two inverted major chords. Find all three notes on your keyboard, then use the 4th rule.

```exercise
{
  "id": "e6", "type": "listen", "title": "Check: where's the root?",
  "instructions": "Loop each chord. Lowest note first, then the other two, then the 4th rule.",
  "spec": {
    "examples": [
      { "title": "Chord 1", "bpm": 60, "timeSig": "4/4", "key": "C", "loop": true, "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[E3 G3 C4]:w" } ] },
      { "title": "Chord 2", "bpm": 60, "timeSig": "4/4", "key": "C", "loop": true, "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[D3 G3 B3]:w" } ] }
    ],
    "questions": [
      { "q": "Chord 1: its root is…", "choices": ["E", "G", "C"], "answer": 2, "explain": "C: the notes are E G C, and the 4th G–C puts the root C on top. It's C/E." },
      { "q": "Chord 2: its root is…", "choices": ["D", "G", "B"], "answer": 1, "explain": "G: D G B, the 4th D–G puts the root G in the middle. It's G/D, 2nd inversion." }
    ]
  }
}
```

**If you can't hear it yet:** you don't need to hear the root directly. Find the lowest note by searching (higher or lower than my key?). Then add keys above it until your chord matches what you hear: in a major chord the other notes are 4 and 7 half steps above the root, or, from an inverted bass, 3 and 8 (1st inversion) or 5 and 9 (2nd inversion). With the three notes under your hand, the 4th rule gives the root.

**Before the drill, rehearse the method** (it's in the *How to do it* box above the drill, for the rung you're on): the lowest note may not be the root now; find the chord's notes, then test the candidates low under the chord; the one the chord "sits" on is the root. Play the **root**, not simply the lowest note. The drill runs at your current roots rung.

```ladder
{ "skill": "roots", "unlocks": 6, "intro": "Opens \"Root when the chord is inverted\" (major chords); the drill runs at your current roots rung." }
```

## Why inversions exist: smooth voice leading

Play C – F – G – C with every chord in root position and your hand jumps around. Pianists, arrangers and choirs move from chord to chord with as little motion as possible instead, a craft called [[voice leading]]. Two rules of thumb:

1. **Keep common tones.** If the next chord shares a note with this one, hold it.
2. **Move the other notes by step** to the nearest note of the next chord.

C (C E G) and F (F A C) share C. Hold C, move E up to F and G up to A: that's F/C. Then to G: C steps down to B, A steps down to G, and F drops a third to D (G and F share no note, so one voice has to jump; keep that jump small). You get G/B (B D G). Listen:

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

## Between lessons

- **3 minutes:** walk C and Am through their inversions (root, 1st, 2nd), saying the name of the lowest note each time.
- **2 minutes:** the smooth path C – F/C – G/B – C with eyes closed; fingers barely move.
- **3 minutes:** play C/E, F/A, G/B and G/D; for each, find the 4th and play the root low with your left hand. Then one roots-ladder session on the Practice page.
