---
id: w06-l1-major-triads
title: Major Triads and the Cadence
week: 6
order: 1
phase: p1
duration_min: 45
goals:
  - Understand a chord, a triad and its root, 3rd and 5th; build and play major triads (M3 + m3)
  - Find the root of a major chord on the keyboard, by ear or by search
  - Hear the cadence (home → away → tension → home) and use its last chord as home for degree questions
prerequisites: [w05-l3-intervals-on-staff-and-drone-daw]
tags: [chords, triads, major, cadence, ear, keyboard]
---

# Major triads and the cadence

Until now you've played one note at a time. A [[chord]] is several notes sounding together. The basic chord of nearly every pop song is the [[triad]]: three notes stacked in 3rds. Today: **build it**, **find its root**, and **the cadence** — four chords that set home before degree questions from now on.

## Root, third, fifth

Pick any note: that's the [[root]], the note the chord is named after. Skip a letter and add the 3rd; skip another and add the 5th.

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

A [[major triad]] is a **major 3rd** (4 half steps) from root to 3rd, then a **minor 3rd** (3) from 3rd to 5th — a **perfect 5th** (7) from root to 5th. C, F and G are major on white keys only; D, E and A need a black key in the middle: D–**F♯**–A, E–**G♯**–B, A–**C♯**–E. If in doubt, count: 4 up, then 3 up.

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

## Finding the root

Played together, the three notes fuse into one sound. Picking out the separate notes inside a chord is a skill of its own — nobody can do it at first. The first one to aim for is the root, and in today's chords it is the **lowest** note: the floor the chord stands on.

```example
{
  "title": "Chord, then its root alone: C major → C, F major → F, G major → G",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C3 E3 G3]:h C3:h | [F3 A3 C4]:h F3:h | [G3 B3 D4]:h G3:h" } ],
  "show": ["keyboard"]
}
```

**Try it:**

1. Play C E G together, then only C, then the chord again. Then the chord followed by E alone, then by G alone. Which single note sounds most like the chord's *floor*?
2. Many beginners hear the **top** note first — the top of any sound is the easiest part to catch. That's normal. Point your attention down: after the chord, play low keys one at a time and ask "does this key sit *under* the chord?"
3. Same with F A C and G B D.

**If you can't hear it yet:** treat the bottom of the chord like a single mystery note and **search**: play a low key — is the chord's bottom higher or lower? — move, compare again. In the drill, tried keys sound but aren't scored; **Check** answers with the last key you played. Expect several tries per chord at first.

```exercise
{
  "id": "c1",
  "type": "listen",
  "title": "Check: which note is the root?",
  "instructions": "Search for the lowest note on your keyboard before answering.",
  "spec": {
    "examples": [
      { "title": "Chord 1", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[F3 A3 C4]:w" } ] },
      { "title": "Chord 2", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[G3 B3 D4]:w" } ] }
    ],
    "questions": [
      { "q": "Chord 1: its root is…", "choices": ["F", "A", "C"], "answer": 0, "explain": "F–A–C, F major: F is the lowest note." },
      { "q": "Chord 2: its root is…", "choices": ["G", "B", "D"], "answer": 0, "explain": "G–B–D, G major: G is the lowest note." }
    ]
  }
}
```

### Before the roots drill

Your new *roots* ladder starts here. Its **How to do it** box says: try low keys until one fits as the chord's floor, then press Check. The routine: Play → Replay → search the bottom note (higher or lower?) → when a key seems to merge with the bottom of the chord, Check → after the answer, replay the chord and play the root under it.

```ladder
{ "skill": "roots", "unlocks": 1, "intro": "A major chord: play its root (here the lowest note), any octave." }
```

## The cadence: home → away → tension → home

In C major, the C chord is built from degrees **1, 3 and 5** — the most restful notes of the key: the **home chord**. The chords on degree 4 (F) and degree 5 (G) lead away and back. Four chords in a row tell a little story:

| | chord 1 | chord 2 | chord 3 | chord 4 |
|---|---|---|---|---|
| built on degree | 1 | 4 | 5 | 1 |
| chord | C | F | G | C |
| role | home | away | tension — "almost there" | home again |

Musicians call a chord ending like this a [[cadence]]. The app plays F and G rearranged (C F A, B D G) so the hand barely moves — same letters, same chords, smoother sound. Week 11 explains how.

```example
{
  "title": "The cadence in C: C – F – G – C",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:h [C4 F4 A4]:h | [B3 D4 G4]:h [C4 E4 G4]:h" } ],
  "show": ["keyboard"]
}
```

**Try it:**

1. Play it yourself, slowly: C E G → C F A → B D G → C E G. Your thumb stays on or near C (exercise below).
2. Play the first three chords and **stop** on B D G. Hold it. Then play C E G. Does the stop feel unfinished and the last chord like arriving?
3. Play the cadence, then C4 alone. Then the cadence, then B3 alone. Which single note sounds like the natural last word?

Honest expectation: the lean of G and the settling of C may be faint at first, and four chords may just sound like "four chords". That's fine. For the drill you need only one thing from the cadence: **its last chord is home, and its lowest note (C4) is degree 1.** Hold that C in your head — or play it on your keyboard — and do what you did after the home run: walk from the question note down to it.

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

```exercise
{
  "id": "c2",
  "type": "listen",
  "title": "Check: which one ends at home?",
  "instructions": "Two short chord sequences. If unsure, play the last chord of each on your keyboard and then C E G after it.",
  "spec": {
    "examples": [
      { "title": "Sequence 1", "bpm": 72, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:h [C4 F4 A4]:h | [B3 D4 G4]:w" } ] },
      { "title": "Sequence 2", "bpm": 72, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:h [C4 F4 A4]:h | [B3 D4 G4]:h [C4 E4 G4]:h" } ] }
    ],
    "questions": [
      { "q": "Which sequence ends on the home chord?", "choices": ["Sequence 1", "Sequence 2"], "answer": 1, "explain": "Sequence 2 is the full cadence C–F–G–C. Sequence 1 stops on G, the tension chord." }
    ]
  }
}
```

### Before the degree drill

This lesson opens the degree rung that uses the **cadence** instead of the home run. You'll switch to it once 1–5 after the home run is solid; until then the drill stays at your current rung. Both references end on the same C:

```example
{
  "title": "Home run (old reference), then the cadence (new reference) — both end on C",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:w | [C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | C4:w" } ],
  "show": ["keyboard"]
}
```

The **How to do it** box for the cadence rung: remember the last chord's lowest note — that's 1; walk down from the question note to it, or find the key (C D E F G = 1 2 3 4 5). **Reference** replays the cadence; **Question only** replays just the note. Expect a small dip when you first reach this rung.

```ladder
{ "skill": "degrees", "unlocks": 6, "intro": "Opens degrees 1 to 5 after the cadence (C–F–G–C); the drill runs at your current rung." }
```

## Theory check

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

## Between lessons

- **Two Practice sessions of about 10 minutes.** The new roots ladder will likely come up first, since it's the furthest behind.
- **Warm up 2 minutes at the keyboard:** play the cadence the smooth way three times, then a few triads (C, F, G, D) and their roots alone after them.
- **Roots:** search, don't guess. Five tries per chord is fine this week.
- **Ready?** The roots bar on the Dashboard shows its first rung mastered after two sessions of mostly right answers. Next lesson opens minor chords either way.
