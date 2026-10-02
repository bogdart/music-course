---
id: w01-l1-welcome-and-setup
title: Welcome, Setup and the Shape of the Keyboard
week: 1
order: 1
phase: p1
duration_min: 30
goals:
  - Connect the MIDI keyboard (or use the on-screen / computer keyboard) and hear sound
  - Find C on the keyboard using the groups of two and three black keys
  - Know where the course starts from, and how the ear ladders pace it
prerequisites: []
tags: [setup, keyboard, pitch, ear]
---

# Welcome

This course is built for one person — you — from what you've told me and what the app has recorded. You never need
to sing: every answer is a key on the keyboard or a click.

## Where you start

You already hear whether a note goes **up or down**, and you can find any white-key note **within one octave of C
major** on the keyboard. The app knows that: those steps of the pitch ladder are marked as yours, so no lesson drills
them again. What's hard — and what the first months are for — is everything beyond that octave and that key: the same
note in another octave, notes below home, other keys, then minor. Each gets its own stage, in the order ear-training
programmes use (one change at a time); the plan is in the course docs, and the ladders pace it by what you actually
hear.

**The search** — the method later lessons call on when you're unsure of a note: play a key in the middle of the
range, compare it with the note you heard (higher, lower, or the same?), move that way, compare again, until the two
merge into *the same note twice*. You already do this; from now on it's also your fallback whenever a drill feels
like guessing.

**One octave, for weeks.** Everything you're asked to judge by ear in weeks 1–6 stays between middle C and the C
above it (C4–C5). Two kinds of sound reach lower, and the lesson says so when they appear: the octave drills (their
own slow strand — lesson 2 starts it, week 7 is about it), and *reference sounds* you only listen to, such as a low
held drone or the bass of a chord cadence (C3).

## How ear training works here

Each ear skill is a **ladder** of small steps (rungs). Lessons *open* rungs; you *climb* by practising, and move up
only when the current rung is solid (about 85% over two sessions). A drill is always at *your* rung, and a rung you
already have shows as done instead of being drilled. Every drill has a **How to do it** box: a concrete method with
your hands and ears.

## Set up

Plug in your MIDI keyboard, open **Settings → MIDI** and pick your device (or use the on-screen keys; `z x c v b n
m ,` on the computer keyboard are white keys). Press any key: if you hear a note, you're ready.

Black keys come in **groups of two and three**; the white key just **left of a group of two** is **C**, and the C
near the middle is {{note:C4}} (*middle C*).

```keyboard
{ "range": ["C3", "C5"], "highlight": ["C3", "C4", "C5"], "labels": "none" }
```

```ladder
{ "skill": "pitch", "unlocks": 2, "intro": "Up or down — a step you already have; it shows as done." }
```

## Hands

```exercise
{
  "id": "e1",
  "type": "quiz",
  "title": "Keyboard map",
  "spec": { "questions": [
    { "q": "Black keys are grouped in…", "choices": ["twos and threes", "fours", "random groups"], "answer": 0, "explain": "The 2-3 pattern repeats across the whole keyboard." },
    { "q": "Where is C?", "choices": ["Just left of a group of two black keys", "Just right of a group of three black keys", "Between the two black keys"], "answer": 0 },
    { "q": "Moving to the right, notes get…", "choices": ["lower", "higher", "louder"], "answer": 1 },
    { "q": "You can't tell if a note went up or down. What works?", "choices": ["Guess", "Find it on the keyboard: right of the first note = higher"], "answer": 1 },
    { "q": "Middle C is also called…", "choices": ["C4", "C1", "C8"], "answer": 0 }
  ] },
  "passScore": 0.75
}
```

```exercise
{
  "id": "e2",
  "type": "play-notes",
  "title": "Find middle C",
  "instructions": "Find the group of two black keys near the middle of your keyboard and play the white key just to its left.",
  "count": 6,
  "spec": { "prompt": "names", "notes": ["C4"], "ordered": true, "key": "C" },
  "hints": ["Look for two black keys side by side.", "C sits immediately to the left of those two black keys."]
}
```

```exercise
{
  "id": "e9",
  "type": "play-notes",
  "title": "Walk up from middle C",
  "instructions": "Play every white key from C4 up to C5, left to right. Lift your hand a little with each one: up, up, up… Then come back down to C4 and drop your hand with each key.",
  "spec": { "prompt": "names", "notes": ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"], "ordered": true, "key": "C" }
}
```

```exercise
{
  "id": "e10",
  "type": "reflect",
  "title": "Your starting point",
  "spec": { "prompt": "Play C4 and then C5 a few times. In your own words, describe how they feel different. Then write one sentence about what you hope to make with music by the end of this year.", "minWords": 20 }
}
```

## Between lessons

- Nothing to drill yet beyond this lesson — go straight on to lesson 2 (octaves), where the real work starts.
