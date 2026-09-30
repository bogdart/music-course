---
id: w01-l1-welcome-and-setup
title: Welcome, Setup and the Shape of the Keyboard
week: 1
order: 1
phase: p1
duration_min: 30
goals:
  - Connect the MIDI keyboard (or use the on-screen / computer keyboard) and hear sound
  - Find your way around the keyboard using the groups of two and three black keys
  - Hear and say whether a note is high or low
prerequisites: []
tags: [setup, keyboard, pitch, ear]
---

# Welcome

This course takes you from zero to writing and decoding real songs in one year. Each week has three short lessons: one for **understanding**, one for **hands and ears**, and one for **making something**. Every session starts with a short warm-up the app picks for you, so what you learn keeps coming back until it sticks.

You don't need talent to start. You need a keyboard, headphones or speakers, and about 30–50 minutes three times a week. You never need to sing: every answer is given on the keyboard or with a click.

## How ear training works here

Hearing is a skill that grows at its own speed, so ear drills don't follow the calendar. Each ear skill is a **ladder** of small steps (rungs). Lessons open new rungs; you climb to the next one only when the current one is solid. So a drill in a lesson is always at *your* level, even if the lesson has moved on. You'll meet the first ladder next lesson.

## Step 1: make a sound

Plug in your MIDI keyboard, open **Settings → MIDI** and pick your device (or leave it on "all devices"). No keyboard at hand? Click the on-screen keys, or use your computer keys: `z x c v b n m ,` play the white keys. Press any key. If you hear a note, you're ready.

## Step 2: the map on your keyboard

A piano keyboard looks like a long row of identical keys, but it has a pattern that repeats: **black keys come in groups of two and three**. That pattern is your map. Everything else on the keyboard is found by looking at it.

```keyboard
{ "range": ["C3", "C5"], "highlight": ["C#3", "D#3", "C#4", "D#4"], "labels": "none" }
```

The highlighted keys are groups of **two** black keys. The white key just to the left of each group of two is called **C**. The C nearest the middle of a full piano is called {{note:C4}}, also known as *middle C*. On your small keyboard, it is probably the C near the middle.

## Step 3: high and low

Moving **right** makes the sound **higher**; moving **left** makes it **lower**. How high or low a sound is called its [[pitch]]. Listen to the same kind of note played low, then in the middle, then high:

```example
{
  "title": "Low C, middle C, high C",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C3:h C4:h C5:h" } ],
  "show": ["keyboard"]
}
```

Low notes feel heavy and dark, like a big drum or a deep voice. High notes feel light and bright, like birdsong. This difference is easy on purpose: we start with what everyone hears and make it subtler step by step.

In the two listening drills below, each question first plays **middle C** as a reference, then one mystery C. Compare it with the reference: is the mystery note the low one or the high one?

## Drills

```exercise
{
  "id": "e1",
  "type": "quiz",
  "title": "Keyboard map",
  "spec": { "questions": [
    { "q": "Black keys are grouped in…", "choices": ["twos and threes", "fours", "random groups"], "answer": 0, "explain": "The 2-3 pattern repeats across the whole keyboard." },
    { "q": "Where is C?", "choices": ["Just left of a group of two black keys", "Just right of a group of three black keys", "Between the two black keys"], "answer": 0 },
    { "q": "Moving to the right, notes get…", "choices": ["lower", "higher", "louder"], "answer": 1 },
    { "q": "How many black keys in each smaller group?", "choices": ["1", "2", "3"], "answer": 1 },
    { "q": "What do we call how high or low a sound is?", "choices": ["volume", "pitch", "tempo"], "answer": 1 },
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
  "id": "e3",
  "type": "play-notes",
  "title": "Every C, low to high",
  "instructions": "Play the three Cs on your keyboard from left to right.",
  "count": 6,
  "spec": { "prompt": "names", "notes": ["C3", "C4", "C5"], "ordered": true, "key": "C" }
}
```

```exercise
{
  "id": "e4",
  "type": "ear-octave",
  "title": "High or low? (big gap)",
  "instructions": "You'll hear one C. Is it the low one (2) or the high one (5)?",
  "count": 8,
  "passScore": 0.75,
  "spec": { "notes": ["C"], "octaves": [2, 5], "mode": "which-octave" }
}
```

```exercise
{
  "id": "e5",
  "type": "ear-octave",
  "title": "High or low? (smaller gap)",
  "instructions": "Same idea, but the notes are closer together now: low (3) or high (5)?",
  "count": 8,
  "passScore": 0.7,
  "spec": { "notes": ["C"], "octaves": [3, 5], "mode": "which-octave" }
}
```

```exercise
{
  "id": "e6",
  "type": "reflect",
  "title": "Your starting point",
  "spec": { "prompt": "Play C3 and then C5 a few times. In your own words, describe how they feel different. Then write one sentence about what you hope to make with music by the end of this year.", "minWords": 20 }
}
```

That's lesson one. Next time: why three Cs that sound so different share one name — and what you can honestly expect to hear of that in the first weeks.
