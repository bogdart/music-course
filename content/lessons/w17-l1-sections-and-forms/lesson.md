---
id: w17-l1-sections-and-forms
title: Sections and Song Forms
week: 17
order: 1
phase: p3
duration_min: 40
goals:
  - Name the job of each section - intro, verse, pre-chorus, chorus, bridge, outro
  - Recognise the forms AABA and verse-chorus (V-C-V-C-B-C)
  - Hear the contrast between a verse and a chorus in register, rhythm and texture
prerequisites: [w16-l3-phase-2-review-and-sixteen-bar-song]
tags: [form, songwriting, ear]
songs: []
---

# Sections and Song Forms

Welcome to Phase 3. Until now you have learned the *parts* of music — scales, chords, progressions, grooves. From here on you will build **songs**. The first tool is the map: [[song form]].

## Why sections exist

A listener can only follow a new song if it repeats. But pure repetition is boring. Songs solve this with [[section]]s: blocks that repeat as units and contrast with each other.

- **[[Intro]]** — sets the mood, often the chorus chords with fewer instruments.
- **[[Verse]]** — tells the story. Same music each time, lower and calmer.
- **[[Pre-chorus]]** — 2–4 bars that lift the tension, often ending on V.
- **[[Chorus]]** — the payoff. Highest notes, fullest band, the [[hook]].
- **[[Bridge]]** — heard once, something *different* so the last chorus feels new.
- **[[Outro]]** — lands the plane: fade or a final cadence.

Contrast between verse and chorus comes from four levers you already control: **register** (chorus melody higher), **rhythm** (chorus notes longer or more punchy), **harmony** (e.g. verse starts on vi, chorus on I) and **texture** (more instruments in the chorus).

## Listen: one verse, one chorus

Here is an original 8-bar sketch, "Paper Boats". Bars 1–4 are the verse, bars 5–8 the chorus. Watch the piano roll: the melody jumps up at bar 5, the drums switch from quarter-note hats to eighths.

```example
{
  "title": "Paper Boats - verse (bars 1-4) and chorus (bars 5-8)",
  "bpm": 96, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "E4:q E4:8 D4:8 C4:q E4:q | F4:q E4:8 D4:8 C4:h | E4:q G4:8 E4:8 D4:q C4:q | D4:h. r:q | G4:q C5:q C5:q. B4:8 | B4:q D5:q B4:h | A4:q C5:q E5:q. D5:8 | C5:h. r:q" },
    { "instrument": "piano", "seq": "[A3 C4 E4]:w | [F3 A3 C4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w | [A3 C4 E4]:w | [A3 C4 F4]:w" },
    { "instrument": "bass", "seq": "A2:h A2:h | F2:h F2:h | C3:h C3:h | G2:h G2:h | C3:q C3:q C3:q C3:q | G2:q G2:q G2:q G2:q | A2:q A2:q A2:q A2:q | F2:q F2:q F2:q F2:q" },
    { "instrument": "drums", "seq": "kick:q hihat:q snare:q hihat:q | kick:q hihat:q snare:q hihat:q | kick:q hihat:q snare:q hihat:q | kick:q hihat:q snare:q hihat:q | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" }
  ],
  "show": ["pianoroll"],
  "loop": false
}
```

The verse runs vi–IV–I–V; the chorus flips it to I–V–vi–IV.

```chords
{ "key": "C", "bars": ["Am", "F", "C", "G", "C", "G", "Am", "F"], "roman": true, "play": true, "bpm": 96 }
```

## Two forms to know

**[[AABA]]** — four 8-bar sections: main tune, main tune, bridge, main tune. The title usually sits at the start or end of each A. Common before the 1960s and in jazz standards.

**Verse-chorus** — V-C-V-C-B-C, often with intro, pre-choruses and outro: I-V-PC-C-V-PC-C-B-C-C-O. This is the default shape of modern pop.

```exercise
{
  "id": "form-quiz",
  "type": "quiz",
  "title": "What does each section do?",
  "passScore": 0.8,
  "spec": { "questions": [
    { "q": "Which section usually has the highest melody and fullest arrangement?", "choices": ["Verse", "Chorus", "Intro", "Bridge"], "answer": 1, "explain": "The chorus is the payoff: highest notes, most instruments, the hook." },
    { "q": "Which section is normally heard only once?", "choices": ["Verse", "Chorus", "Bridge", "Pre-chorus"], "answer": 2, "explain": "The bridge is a one-time contrast before the last chorus." },
    { "q": "A pre-chorus most often ends on which chord?", "choices": ["I", "vi", "V", "iii"], "answer": 2, "explain": "Ending on V creates tension that the chorus (often starting on I) releases." },
    { "q": "In AABA, how many different musical sections are there?", "choices": ["1", "2", "3", "4"], "answer": 1, "explain": "Just two: A (heard three times) and B (the bridge)." },
    { "q": "Verses usually share the same music but change...", "choices": ["the key", "the tempo", "the lyrics", "the time signature"], "answer": 2 },
    { "q": "Which lever does NOT normally create verse/chorus contrast?", "choices": ["Register", "Texture", "Changing the tempo", "Harmony"], "answer": 2, "explain": "Tempo stays constant in almost all pop songs; register, texture, rhythm and harmony change." }
  ] }
}
```

```exercise
{
  "id": "form-letters",
  "type": "quiz-input",
  "title": "Write the form",
  "spec": { "questions": [
    { "q": "Verse, chorus, verse, chorus, bridge, chorus - write it with letters V, C, B and no spaces or dashes.", "answer": ["VCVCBC"], "kind": "text" },
    { "q": "A 32-bar song: main tune, main tune, contrast, main tune. Write its letters.", "answer": ["AABA"], "kind": "text" },
    { "q": "How many bars long is each section of a standard 32-bar AABA song?", "answer": ["8"], "kind": "number" },
    { "q": "In the sketch above, which bar does the chorus start on?", "answer": ["5"], "kind": "number" }
  ] }
}
```

## Ear: verse and chorus progressions

Verses and choruses often use the same four chords in a different order. Train your ear to catch the order.

```exercise
{
  "id": "ear-verse-chorus-prog",
  "type": "ear-progression",
  "title": "Which order?",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "random", "mode": "major", "length": 4, "chords": ["I", "IV", "V", "vi"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "ear-hook-degrees",
  "type": "ear-melody",
  "title": "Play back a short hook",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "random", "degrees": [1, 2, 3, 4, 5], "length": 4, "rhythm": "quarters", "answer": "play" }
}
```

## Hands on

```exercise
{
  "id": "play-verse-chorus",
  "type": "play-chord",
  "title": "Play the verse, then the chorus",
  "instructions": "Use smooth inversions - keep your hand around C4.",
  "count": 8,
  "spec": { "chords": ["Am", "F", "C", "G", "C", "G", "Am", "F"], "inversion": "any", "sequence": true, "bpm": 70 }
}
```

```exercise
{
  "id": "daw-lift-the-chorus",
  "type": "daw-task",
  "title": "Make the chorus lift",
  "spec": {
    "template": { "bpm": 96, "key": "C", "tracks": [
      { "instrument": "piano", "seq": "[A3 C4 E4]:w | [F3 A3 C4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w | [A3 C4 E4]:w | [A3 C4 F4]:w" },
      { "instrument": "drums", "seq": "kick:q hihat:q snare:q hihat:q | kick:q hihat:q snare:q hihat:q | kick:q hihat:q snare:q hihat:q | kick:q hihat:q snare:q hihat:q | kick:q hihat:q snare:q hihat:q | kick:q hihat:q snare:q hihat:q | kick:q hihat:q snare:q hihat:q | kick:q hihat:q snare:q hihat:q" },
      { "instrument": "bass", "seq": "" }
    ] },
    "task": "The drums are the same in verse and chorus. Add a bass track that plays half-note roots in bars 1-4 and busier quarter-note roots in bars 5-8, and make bars 5-8 of the drums busier (eighth-note hi-hats). Play it back: does the chorus lift?",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "drums", "bass"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "C", "scale": "major", "track": 2 },
      { "kind": "note-count", "min": 16, "max": 48, "track": 2 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "snareOnBeats": [2, 4], "track": 1 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "reflect-favourite-form",
  "type": "reflect",
  "spec": { "prompt": "Pick a song you know well. Write its sections in order as you remember them (e.g. intro, verse, chorus...). Where does the energy jump most? What changes at that moment - the melody, the drums, the number of instruments?", "minWords": 30 }
}
```
