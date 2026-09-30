---
id: w02-l2-black-keys-and-half-steps
title: Black Keys, Sharps, Flats and Steps
week: 2
order: 2
phase: p1
duration_min: 45
goals:
  - Name black keys as sharps or flats of their white neighbours
  - Measure distances on the keyboard in half steps and whole steps
  - Hear the difference between a half step and a whole step, checking by counting keys
  - Meet the next octave rung — which of two notes is the octave?
prerequisites: [w02-l1-white-keys-and-landmarks]
tags: [sharps, flats, half-step, whole-step, octave, ear, keyboard]
---

# Black keys and steps

The black keys don't get letters of their own. Each one is named after a white neighbour:

- a [[sharp]] (**♯**, typed `#`) means "one key **higher**": the black key right of C is **C♯**.
- a [[flat]] (**♭**, typed `b`) means "one key **lower**": the same black key, seen from D, is **D♭**.

So C♯ and D♭ are two names for one key. Which name we use depends on the key you're playing in — week 9 explains the rule, when we meet keys that use sharps and keys that use flats. For now, both are right.

```keyboard
{ "range": ["C4", "C5"], "highlight": ["C#4", "D#4", "F#4", "G#4", "A#4"], "labels": "names" }
```

## Half steps and whole steps

We measure pitch distance by counting keys — **every** key, black and white.

- A [[half step]] is the smallest move: from one key to the very next key, with nothing in between. C → C♯ is a half step.
- A [[whole step]] is two half steps: skip exactly one key. C → D is a whole step (skipping C♯).

Look closely at the keyboard: between **E and F** and between **B and C** there is **no black key**. Those white neighbours are only a half step apart. Every other pair of white neighbours is a whole step apart. This single fact explains most of the next few weeks, so take a moment with it.

```example
{
  "title": "Half steps: E–F, B–C. Whole steps: C–D, F–G",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "E4:h F4:h | B4:h C5:h | C4:h D4:h | F4:h G4:h" } ],
  "show": ["keyboard"]
}
```

## Hearing the difference

A half step tends to sound **squeezed** — the two notes almost touch. A whole step has a little **air** between them.
The difference is small, so always compare them from the same starting note.

**Try it:**

1. Play C4 → C♯4 (half), then C4 → D4 (whole). Twice each.
2. Same from G4: G4 → G♯4, then G4 → A4.
3. Now play E4 → F4. No black key between: which one does it sound like — the squeezed pair or the airy one?
   (Half step: it's the squeezed one.)

```example
{
  "title": "From C: half step, whole step. From G: half step, whole step",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h C#4:h | r:w | C4:h D4:h | r:w | G4:h G#4:h | r:w | G4:h A4:h" } ],
  "show": ["keyboard"]
}
```

### Check it

Listen to three mystery pairs of white keys. For each, **guess** (squeezed or airy?), then press "Reveal
notation" and count keys on the keyboard picture to check. This is practice, not a test — nothing is scored.

```exercise
{
  "id": "e11",
  "type": "listen",
  "title": "Squeezed or airy? (guess, then reveal and count)",
  "spec": {
    "examples": [
      { "title": "Pair 1", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "F4:h G4:h" } ], "show": ["keyboard"] },
      { "title": "Pair 2", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "B4:h C5:h" } ], "show": ["keyboard"] },
      { "title": "Pair 3", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "D4:h E4:h" } ], "show": ["keyboard"] }
    ]
  }
}
```

**If you can't hear it yet:** you can always get the answer by hand. Find both notes with the pitch search, then
count: a key right next door (nothing between) = half step; one key skipped = whole step. Do that after every
unsure answer and the sound starts to attach to the picture. Hearing this pair reliably takes most beginners
several weeks.

You'll use half and whole steps constantly from next week on: the major scale is built from them. Hearing them as
names comes later — in week 12, once you hear notes by their place in the key, distances get their full names (a
half step is also called a *minor 2nd*, **m2**; a whole step a *major 2nd*, **M2**). For now: count keys, and
listen for squeezed or airy.

## Searching with black keys

The pitch search now includes the black keys: twelve keys from C4 to B4. The method barely changes: **search the
white keys first.** If the note is higher than one white key and lower than the next, it's the black key between
them.

**Try it** — the mystery note is **F♯4** (shown on purpose): start on F4 (a bit low → right), G4 (a bit high →
back). Too low on F, too high on G: it's the black key between, F♯4. Play it after the mystery note: same note
twice.

```example
{
  "title": "Guided search: the mystery note is F♯4",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "F#4:w" } ],
  "show": ["keyboard"]
}
```

```ladder
{ "skill": "pitch", "unlocks": 9, "intro": "Pitch at your current rung — up to finding the note among all twelve keys." }
```

## Octaves: pick the octave out of two

This lesson opens the next octave rung. Until now both notes sounded **together**; now they come one after the
other. You hear a note, then two candidates, **A** and **B**: one is the same name an octave higher, the other a
clashing note (about halfway up, so here height helps a bit).

**Try it:** play C4, then C5, then C4 again, then F♯4. Then press C4 + C5 together, and C4 + F♯4 together. The
together test is the one you trust: the octave melts, the other rubs.

```example
{
  "title": "C4, then A = C5 (the octave), B = F♯4 (a clash). Then each pair together",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h r:h | C5:h F#4:h | [C4 C5]:w | [C4 F#4]:w" } ],
  "show": ["keyboard"]
}
```

Honestly: at first both candidates may sound like "new notes" — that's the octave strand being slow, as lesson 4 of
week 1 said. The drill runs at your current octave rung; you'll meet this one once the *together* rungs are solid.
When you do, check each answer with **Listen again → together**.

**If you can't hear it yet:** find the first note by search, count 12 keys up and play it: that's the octave. Replay
the question and compare A and B with the note you just played.

```ladder
{ "skill": "octave", "unlocks": 3, "intro": "Octaves at your current rung — up to 'which one is the octave?'." }
```

## Hands

```exercise
{
  "id": "e1",
  "type": "quiz",
  "title": "Steps on the keyboard",
  "spec": { "questions": [
    { "q": "E to F is a…", "choices": ["half step", "whole step"], "answer": 0, "explain": "No black key between E and F." },
    { "q": "C to D is a…", "choices": ["half step", "whole step"], "answer": 1 },
    { "q": "B to C is a…", "choices": ["half step", "whole step"], "answer": 0 },
    { "q": "The black key between F and G is called…", "choices": ["F♯ or G♭", "F♭ or G♯", "only F♯"], "answer": 0 },
    { "q": "How many half steps make a whole step?", "choices": ["1", "2", "3"], "answer": 1 },
    { "q": "A sharp means…", "choices": ["one half step higher", "one half step lower", "louder"], "answer": 0 },
    { "q": "G to A is a…", "choices": ["half step", "whole step"], "answer": 1 }
  ] },
  "passScore": 0.75
}
```

```exercise
{
  "id": "e6",
  "type": "play-notes",
  "title": "Find the black keys",
  "instructions": "Each black key has two names. Find it from either neighbour.",
  "count": 10,
  "passScore": 0.75,
  "spec": { "prompt": "names", "notes": ["C#4", "Eb4", "F#4", "Bb4", "G#4", "Db4", "A#4", "Gb4"], "ordered": true, "key": "C" }
}
```

```exercise
{
  "id": "e3",
  "type": "quiz-input",
  "title": "Step up, step down",
  "spec": { "questions": [
    { "q": "A half step above E is…", "answer": ["F"], "kind": "note" },
    { "q": "A whole step above E is…", "answer": ["F#", "Gb"], "kind": "note" },
    { "q": "A half step below C is…", "answer": ["B"], "kind": "note" },
    { "q": "A whole step above A is…", "answer": ["B"], "kind": "note" },
    { "q": "A whole step above B is…", "answer": ["C#", "Db"], "kind": "note" },
    { "q": "A half step above G is…", "answer": ["G#", "Ab"], "kind": "note" }
  ] },
  "passScore": 0.75
}
```

```exercise
{
  "id": "e5",
  "type": "build-interval",
  "title": "Play a half or whole step up",
  "instructions": "The app names a half step 'minor 2nd' and a whole step 'major 2nd'. Count keys: half = the very next key, whole = skip one. Play the second note.",
  "count": 10,
  "passScore": 0.75,
  "spec": { "intervals": ["m2", "M2"], "direction": "asc", "root": "random", "range": ["C4", "C5"] }
}
```

## Between lessons

- Two **Practice** sessions of about 10 minutes (pitch, melody and octave at your level).
- Once a day, one minute: play half and whole steps up from random white keys between C4 and C5 and say
  "squeezed" or "airy"; check any doubt by counting keys.
- Ready for the next lesson when the dashboard doesn't say **practise first**.
