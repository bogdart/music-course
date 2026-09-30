---
id: w06-l1-major-triads
title: Major Triads and the Cadence
week: 6
order: 1
phase: p1
duration_min: 45
goals:
  - Understand a chord, a triad and its root, 3rd and 5th
  - Build and play major triads (M3 + m3)
  - Hear the cadence (home → away → tension → home) and use it as the new reference for degree questions
prerequisites: [w05-l3-intervals-on-staff-and-drone-daw]
tags: [chords, triads, major, cadence, ear, keyboard]
---

# Major triads and the cadence

Until now you've played one note at a time. A [[chord]] is several notes sounding together. The basic chord of Western music — nearly every pop song is built from them — is the [[triad]]: three notes stacked in 3rds.

## Root, third, fifth

Pick any note: that's the [[root]], the note the chord is named after. Skip a letter and add the 3rd above it; skip another letter and add the 5th above the root.

- C triad: **C** (root) – **E** (3rd) – **G** (5th)
- F triad: **F** – **A** – **C**
- G triad: **G** – **B** – **D**

On the keyboard: play a key, skip one white key, play, skip one, play. Right hand fingers 1–3–5 (thumb, middle, little).

```keyboard
{ "range": ["C3", "C5"], "highlight": ["C4", "E4", "G4"], "labels": "names", "colors": { "C4": "root", "E4": "third", "G4": "fifth" } }
```

```example
{
  "title": "C major: one note at a time, then together; then F and G",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q E4:q G4:q r:q | [C4 E4 G4]:w | F4:q A4:q C5:q r:q | [F4 A4 C5]:w | G3:q B3:q D4:q r:q | [G3 B3 D4]:w" } ],
  "show": ["staff", "keyboard"]
}
```

Played together, the three notes fuse into one sound with its own colour. Picking out the separate notes inside a chord is a skill of its own — nobody can do it at first.

## Hearing the root

In the chords above the root is the **lowest** note. That makes it the first thing to listen for: the bottom of the chord. Your new *roots* ladder starts here, with this lesson's first rung: you hear a major chord and play its root on the keyboard, any octave. Listen to the chord, then to its lowest note alone:

```example
{
  "title": "Chord, then its root alone: C major → C, F major → F, G major → G",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C3 E3 G3]:h C3:h | [F3 A3 C4]:h F3:h | [G3 B3 D4]:h G3:h" } ],
  "show": ["keyboard"]
}
```

Honest expectation: this is new and it's hard. Many beginners first hear the *top* note of a chord. Replay, then try a key; the app shows the root after each answer.

```ladder
{ "skill": "roots", "unlocks": 1, "intro": "A major chord: play its root (here the lowest note), any octave." }
```

## What makes it *major*

A [[major triad]] is a **major 3rd** (4 half steps) from root to 3rd, then a **minor 3rd** (3 half steps) from 3rd to 5th — adding up to a **perfect 5th** (7 half steps). C, F and G are major using only white keys. D, E and A need a black key: D–**F♯**–A, E–**G♯**–B, A–**C♯**–E. Count the half steps and you'll see why.

## The cadence: home → away → tension → home

In C major, the C chord is built from degrees **1, 3 and 5** — the most restful notes of the key. We call it the **home chord**. The chords on degree 4 (F) and degree 5 (G) lead away from it and back. Four chords in a row, C – F – G – C, tell a little story:

| | chord 1 | chord 2 | chord 3 | chord 4 |
|---|---|---|---|---|
| built on degree | 1 | 4 | 5 | 1 |
| chord | C | F | G | C |
| role | home | away | tension — "almost there" | home again |

Musicians call a chord ending like this a [[cadence]]. The app plays F and G with their notes rearranged (C F A instead of F A C; B D G instead of G B D) so the hand barely moves — same letters, same chords, smoother sound. Week 11 explains how that works.

```example
{
  "title": "The cadence in C: C – F – G – C",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:h [C4 F4 A4]:h | [B3 D4 G4]:h [C4 E4 G4]:h" } ],
  "show": ["keyboard"]
}
```

Listen for the last two chords: most people feel G "leaning" and the final C settling — the same resolving feeling as fa → mi in week 4, now with chords.

## The new reference

Until now, the home run set home before each degree question. This lesson opens the degree rung that uses the **cadence** instead — it's how real songs establish a key. You'll switch to it once degrees 1–5 after the home run are solid; until then the drill stays at your current rung. Nothing about the answers changes: 1 is still C, and the cadence ends on the home chord in the same register as the question note. Compare:

```example
{
  "title": "Home run (old reference), then the cadence (new reference) — both end on C",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:w | [C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | C4:w" } ],
  "show": ["keyboard"]
}
```

If the cadence feels less clear than the home run at first, press **Reference** to hear it again. Expect a small dip in the degree drill when you reach it, while your ear gets used to it.

```ladder
{ "skill": "degrees", "unlocks": 6, "intro": "Opens degrees 1 to 5 after the cadence (C–F–G–C); the drill runs at your current rung." }
```

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
  "passScore": 0.75
}
```

```exercise
{
  "id": "e7",
  "type": "quiz",
  "title": "The cadence",
  "spec": { "questions": [
    { "q": "The cadence the app plays in C is…", "choices": ["C – F – G – C", "C – G – F – C", "C – D – E – C"], "answer": 0 },
    { "q": "Which chord is the tension, 'almost there'?", "choices": ["C", "F", "G"], "answer": 2 },
    { "q": "After the cadence, degree 1 is…", "choices": ["C", "G", "whatever note comes next"], "answer": 0 },
    { "q": "The home chord is built on degree…", "choices": ["1", "4", "5"], "answer": 0 }
  ] }
}
```

```exercise
{
  "id": "e2",
  "type": "build-chord",
  "title": "Build the major triad",
  "instructions": "Select root, major 3rd and perfect 5th.",
  "count": 8,
  "passScore": 0.75,
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
  "id": "e8",
  "type": "play-chord",
  "title": "Play the cadence the smooth way",
  "instructions": "C E G → C F A → B D G → C E G. Your thumb stays near C; only one or two fingers move each time.",
  "passScore": 0.75,
  "spec": { "chords": ["C", "F", "G", "C"], "inversion": "any", "sequence": true, "bpm": 50 }
}
```
