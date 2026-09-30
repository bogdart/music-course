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
  - Tell whether a second note goes up or down, checking with your hand and the keyboard
  - Use the Placement test to skip the ear rungs you already have
prerequisites: []
tags: [setup, keyboard, pitch, ear]
---

# Welcome

This course takes you from zero to writing and decoding real songs. You never need to sing: every answer is a key on
the keyboard or a click.

**Pace.** Week 1 has five short lessons, because the ear needs solid ground before anything else. The pace follows
your ear, not the calendar: if you already have a skill, you skip it in minutes (next section); if you don't, week 1
may take two calendar weeks, and that's fine too.

## Already hear some of this? Take the Placement test first

Many adults can already tell higher from lower and find a note roughly within one octave. Don't spend a week
proving it. Open **Dashboard → Placement test** (the page `/placement`), pick **Pitch**, and press **Test me**:

- you get **sets of 10** questions, starting at your first rung not yet mastered;
- **10 out of 10** masters that rung and the next set starts one rung higher;
- the first set with a miss stops the test — that rung is your level, and lessons and Practice start there.

Don't guess to get through: a miss is useful information. Afterwards try **Melodies** the same way.

**What it means for week 1:** lessons 2 and 3 (higher/lower/same, and finding the note) cover pitch rungs 1–5. If
placement shows those mastered, **skim them**: read the headings, do the *Check it* questions, and if they are all
right, move on. Each has a short *fast path* at the top. Lessons 4 and 5 (octaves, first melody) are new for almost
everyone — do those fully.

**One octave, for weeks.** Everything you are asked to judge by ear in weeks 1–6 stays between middle C and the C
above it (C4–C5). Two kinds of sound reach lower, and the lesson says so when they appear: the octave drills (their
own strand — lesson 4 starts it, week 7 is about it), and *reference sounds* you only listen to, such as a low held
drone or the bass of a chord cadence (C3). To most beginners a note in another octave sounds like a different note,
and that takes many weeks of short practice to change.

## How ear training works here

Each ear skill is a **ladder** of small steps (rungs). Lessons *open* rungs; you *climb* by practising, and move up
only when the current rung is solid (about 85% over two sessions). So an ear drill is always at *your* level. Every
drill has a **How to do it** box: a concrete method with your hands and ears. Read it before the first question —
the method is the lesson.

## Step 1: make a sound

Plug in your MIDI keyboard, open **Settings → MIDI** and pick your device. No keyboard at hand? Click the on-screen
keys below, or use your computer keys (`z x c v b n m ,` are white keys). Press any key. If you hear a note, you're
ready.

## Step 2: find C

Black keys come in **groups of two and three**. That pattern repeats along the whole keyboard and is your map. The
white key just **left of a group of two** is **C**. The C near the middle is {{note:C4}} (*middle C*).

```keyboard
{ "range": ["C3", "C5"], "highlight": ["C3", "C4", "C5"], "labels": "none" }
```

Every C looks the same on the keyboard (left of two black keys) — that's the map. For listening we stay at middle C
and the C above it for now.

## Step 3: up and down

Moving **right** on the keyboard makes the sound **higher**; moving **left** makes it **lower**. How high or low a
note is, is its [[pitch]].

**Try it** (on the keyboard above or your own):

1. Play C4, then C5. As the second note sounds, **lift your hand** a little. Then C5, then C4: **drop your hand**.
2. Play C4, then G4 — a smaller lift. Then G4, then C4 — drop.
3. Now play C4, then any key further right (up to C5), without looking which: lift your hand. Your hand is saying
   "up".

One honest warning: some beginners mix up *higher* with *louder* or *brighter*. Higher means only one thing here:
further right on the keyboard.

```example
{
  "title": "Up: C4, G4, C5. Then down: C5, G4, C4",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h G4:h | C5:w | C5:h G4:h | C4:w" } ],
  "show": ["keyboard"]
}
```

### Check it

Each pair below is two notes. Play it, move your hand with the notes, then answer: did the second note go up or down?

```exercise
{
  "id": "e8",
  "type": "listen",
  "title": "Up or down?",
  "spec": {
    "examples": [
      { "title": "Pair 1", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:h C5:h" } ] },
      { "title": "Pair 2", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "B4:h C4:h" } ] },
      { "title": "Pair 3", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "D4:h A4:h" } ] }
    ],
    "questions": [
      { "q": "Pair 1: the second note went…", "choices": ["up (higher)", "down (lower)"], "answer": 0, "explain": "C4 then C5: up, the whole width of the octave." },
      { "q": "Pair 2: the second note went…", "choices": ["up (higher)", "down (lower)"], "answer": 1, "explain": "B4 then C4: a long way down." },
      { "q": "Pair 3: the second note went…", "choices": ["up (higher)", "down (lower)"], "answer": 0, "explain": "D4 then A4: up." }
    ]
  }
}
```

**If you can't hear it yet:** play both notes yourself. Start on middle C and try keys to the left and right until
one sounds like the second note; if it's to the right of C, the answer is "up". That always works, and doing it a
few times is how the ear learns.

## Your first ladder: pitch

The drill plays two notes far apart: higher or lower? Open **How to do it** and use it: replay, follow with your
hand, and check on the keyboard whenever you're unsure. Checking is not cheating — it's practice.

```ladder
{ "skill": "pitch", "unlocks": 1, "intro": "Two notes far apart: did the second one go up or down?" }
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

- If you haven't yet: the **Placement test** for Pitch (and Melodies). It takes 5–15 minutes and may save you a
  week.
- Two **Practice** sessions of about 10 minutes (the Practice page picks your current rung). Replay every pair
  and move your hand; check on the keyboard after each wrong answer.
- Ready for lesson 2 when most pairs feel easy — you don't have to wait for rung 1 to show *mastered*; lesson 2
  keeps practising the same skill. If placement mastered pitch rungs 1–5, skim lessons 2–3 via their fast path.
