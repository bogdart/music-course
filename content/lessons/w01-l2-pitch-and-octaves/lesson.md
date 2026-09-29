---
id: w01-l2-pitch-and-octaves
title: Pitch and Octaves
week: 1
order: 2
phase: p1
duration_min: 40
goals:
  - Understand what an octave is and why two notes an octave apart share a name
  - Hear an octave as one melted sound when two notes are played together
  - Pick the octave out of two candidates, then tell same-or-different one note after the other
  - Play C in three octaves, up and down, in time
prerequisites: [w01-l1-welcome-and-setup]
tags: [pitch, octave, ear, keyboard]
---

# Pitch and octaves

Last time you played three Cs. They sounded very different — one deep, one middle, one bright — yet they have the same name. Right now that probably feels arbitrary, and here is the honest truth: **it will keep feeling that way for a while.** That's normal, not a lack of talent.

## Two things you can hear in a note

Every note has two properties, and your ear notices them in this order:

1. **Height** — low or high. Everyone hears this from day one, and it is *loud*. C3 and C5 really are very different in height; nobody hears them as "the same sound".
2. **Name** (C, D, E…) — a quieter quality that repeats every [[octave]]. Musicians call it the note's *colour*. It's the thing that stays when the height changes.

Learning to hear octaves isn't learning that C3 and C5 "sound the same". They don't. It's learning to notice the *second* property through the loud first one — like recognising a friend's face in a photo that's much bigger or much smaller than life.

## Why octaves are special (the physics, short)

{{note:A4}} vibrates 440 times per second; the A one octave higher vibrates exactly **880** — twice as fast. Every wave of the low note lines up with every second wave of the high one. The result you can actually hear:

- played **together**, an octave *melts into one sound* — richer and brighter, but one note, not two;
- played **one after the other**, the second note sounds like the first one **repeated higher** — not like a new note. A man and a child singing "Happy Birthday" together are an octave apart and nobody thinks they're singing different tunes.

On the keyboard, an octave is the distance from one C to the next C: 12 keys, counting black ones.

```keyboard
{ "range": ["C3", "C5"], "highlight": ["C3", "C4", "C5"], "labels": "names", "colors": { "C3": "root", "C4": "root", "C5": "root" } }
```

## Step 1: hear it together (the easiest clue)

Start where the difference is biggest: both notes at once. An octave melts; C and F♯ clash — you can hear two notes fighting, a "wobbly", rough sound:

```example
{
  "title": "C3 + C4 (melts), then C3 + F♯3 (clashes), then C3 + C4 again",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C3 C4]:w | [C3 F#3]:w | [C3 C4]:w" } ],
  "show": ["keyboard"]
}
```

Do it yourself: hold C3 and add C4. Then hold C3 and add F♯3 (the black key in the group of three, left one). Then B3, one key below C4. Only the octave sounds like *one* note.

## Step 2: one after the other

Now the same notes one at a time. Listen for "the same note again, higher" versus "a new note":

```example
{
  "title": "C4 → C5 (same, higher), then C4 → B4 (new note, just below), then C4 → C5",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h C5:h | C4:h B4:h | C4:h C5:h" } ],
  "show": ["keyboard"]
}
```

B4 is *almost* as high as C5 — so height can't tell you which one is the octave. The octave sounds settled, like an echo of the first note; the B4 sounds like it's pulling somewhere, "not quite". That "not quite" feeling is the clue you're training.

## How the drills work

- They go from easy to harder: **together → which of two → one after the other**. Don't skip ahead.
- The "different" notes are never far from the octave position, so *how far apart* the notes are never gives away the answer — only the colour does.
- After every answer, use the **Listen again** buttons: *Both together*, *The real octave*, *Octave vs this note*. This is where the learning happens — a wrong answer followed by hearing the real octave next to your mistake teaches more than a lucky right answer.
- Expect about 60% at first. The goal this week is to get the *together* drill reliable; the others will follow over the next weeks.

## Drills

```exercise
{
  "id": "e1",
  "type": "quiz",
  "title": "Octave facts",
  "spec": { "questions": [
    { "q": "A4 vibrates 440 times per second. The A one octave higher vibrates…", "choices": ["220", "660", "880"], "answer": 2, "explain": "One octave up = double the frequency." },
    { "q": "How many keys (white + black) from one C to the next C?", "choices": ["8", "12", "7"], "answer": 1 },
    { "q": "C3 and C5 have the same…", "choices": ["height", "note name", "loudness"], "answer": 1, "explain": "Very different height, same name (colour)." },
    { "q": "Played together, which pair melts into one sound?", "choices": ["C4 + C5", "C4 + B4", "C4 + F♯4"], "answer": 0 },
    { "q": "The number in C4 tells you…", "choices": ["how long the note is", "which octave it's in", "how loud it is"], "answer": 1 },
    { "q": "You answered wrong in an octave drill. The most useful next step is…", "choices": ["move on quickly", "press 'The real octave' and compare", "guess the other button"], "answer": 1 }
  ] },
  "passScore": 0.8
}
```

```exercise
{
  "id": "e2",
  "type": "ear-octave",
  "title": "Which C? (three choices)",
  "instructions": "You'll hear one C: low (3), middle (4) or high (5)?",
  "count": 9,
  "passScore": 0.7,
  "spec": { "notes": ["C"], "octaves": [3, 4, 5], "mode": "which-octave" }
}
```

```exercise
{
  "id": "e7",
  "type": "ear-octave",
  "title": "Together: one note or two?",
  "instructions": "Two notes played at the same time. Do they melt into one sound (an octave), or can you hear two notes rubbing against each other?",
  "count": 12,
  "passScore": 0.75,
  "spec": { "notes": ["C", "D", "E", "F", "G", "A", "B"], "octaves": [3, 4], "mode": "together", "gap": [1], "foils": [1, 6, 11] },
  "hints": ["A rough, wobbly, 'beating' sound means two different notes.", "Unsure? After answering, press 'One after the other' and compare."]
}
```

```exercise
{
  "id": "e8",
  "type": "ear-octave",
  "title": "Which one is the octave?",
  "instructions": "A note, then two candidates, A and B, both about an octave higher. One is the same note again; the other is a different note. Which one echoes the first note?",
  "count": 10,
  "passScore": 0.7,
  "spec": { "notes": ["C", "D", "E", "F", "G", "A", "B"], "octaves": [3, 4], "mode": "match", "gap": [1], "foils": [6] },
  "hints": ["The octave sounds settled, like an echo. The other one sounds 'off' or pulling away.", "Use 'together' buttons after answering: the octave melts, the other clashes."]
}
```

```exercise
{
  "id": "e9",
  "type": "ear-octave",
  "title": "One after the other: same or different?",
  "instructions": "Two notes, one after the other, always about an octave apart. The same note repeated higher/lower, or a different note?",
  "count": 12,
  "passScore": 0.7,
  "spec": { "notes": ["C", "D", "E", "F", "G", "A", "B"], "octaves": [3, 4, 5], "mode": "same-or-different", "gap": [1], "foils": [6] },
  "hints": ["Ignore the height jump — it's always about the same. Does the second note feel like an echo of the first?"]
}
```

```exercise
{
  "id": "e5",
  "type": "play-notes",
  "title": "Cs going down",
  "instructions": "Play C5, C4, C3 — right to left.",
  "count": 6,
  "spec": { "prompt": "names", "notes": ["C5", "C4", "C3"], "ordered": true, "key": "C" }
}
```

```exercise
{
  "id": "e6",
  "type": "play-melody",
  "title": "Octave jumps in time",
  "instructions": "Play along with the click. Each note lasts two beats.",
  "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "C4:h C5:h | C4:h C3:h | C4:h C5:h | C4:w", "showStaff": false, "showKeyboard": true, "countIn": 1 }
}
```
