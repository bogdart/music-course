---
id: w04-l2-time-signatures-and-counting
title: Time Signatures and Counting
week: 4
order: 2
phase: p1
duration_min: 45
goals:
  - Read a time signature and feel the difference between 4/4 and 3/4
  - Count and tap rhythms in both meters
  - Meet degree 5 (sol) and write short tunes from 1–5 as degrees
prerequisites: [w04-l1-note-values-and-rests]
tags: [rhythm, meter, time-signature, ear]
songs:
  - { title: "Amazing Grace", composer: "John Newton (words), traditional melody 'New Britain'", public_domain: true }
---

# Time signatures

Beats don't come in an endless flat line — they group themselves. Some beats feel strong, others weak, and the pattern repeats. That repeating pattern is called [[meter]], and the [[time signature]] at the start of the music tells you which one you're in.

A time signature has two numbers:

- **top** — how many beats in each bar;
- **bottom** — which note value gets one beat (4 = quarter note).

So **4/4** = four quarter-note beats per bar, **3/4** = three.

## 4/4 and 3/4

**4/4:** **ONE** two **three** four. Beat 1 is strongest, beat 3 medium, 2 and 4 weak. Almost every pop, rock, hip-hop and dance track is in 4/4.

**3/4:** **ONE** two three, **ONE** two three. A lilting, swaying, circling feel. Waltzes, hymns and many folk songs use it — "Amazing Grace" is in 3/4.

Listen to the same kick-and-hi-hat sound in both meters. The kick marks beat 1:

```example
{
  "title": "Four bars of 4/4",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "drums", "seq": "kick:q hh:q hh:q hh:q | kick:q hh:q hh:q hh:q | kick:q hh:q hh:q hh:q | kick:q hh:q hh:q hh:q" } ]
}
```

```example
{
  "title": "Four bars of 3/4",
  "bpm": 100, "timeSig": "3/4", "key": "C",
  "tracks": [ { "instrument": "drums", "seq": "kick:q hh:q hh:q | kick:q hh:q hh:q | kick:q hh:q hh:q | kick:q hh:q hh:q" } ]
}
```

**How to hear 3 or 4:** find the heavy beat (the kick), then count the beats until the next heavy one. "1 2 3 | 1" is 3/4; "1 2 3 4 | 1" is 4/4. Counting beats is more reliable than trying to judge the feel.

A melody in 3/4 has no room for a whole note — the longest note filling a bar is a **dotted half** (3 beats):

```example
{
  "title": "A little waltz (3/4)",
  "bpm": 100, "timeSig": "3/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "C4:h E4:q | G4:h E4:q | F4:h D4:q | C4:h. | E4:h G4:q | F4:h D4:q | D4:h E4:q | C4:h." },
    { "instrument": "bass", "seq": "C3:h. | C3:h. | G3:h. | C3:h. | C3:h. | G3:h. | G3:h. | C3:h." }
  ],
  "show": ["staff"]
}
```

## How to count

Say the beat numbers out loud, always restarting at "1" on a new bar: "1 2 3 4 | 1 2 3 4" or "1 2 3 | 1 2 3". Add "&" for eighth notes. Counting aloud feels silly for about a week — and then it's the thing that saves you every time a rhythm gets tricky.

This lesson opens two rhythm rungs (the drill runs at your current one): tapping back eighths and rests, then hearing whether a groove is in **3 or 4**.

```ladder
{ "skill": "rhythm", "unlocks": 5, "intro": "Opens \"Tap it back: eighths and rests\" and \"Meter: 3 or 4?\"; the drill runs at your current rung." }
```

## Degree 5 (sol)

Degree 5 is G in C major — your little finger. It's the top of the home run, the point where the run turns round. Many people hear it as fairly stable, but "up in the air" compared with 1: it doesn't pull as hard as 2 or 4, yet it isn't the end either. Listen: the home run, then 5, then 5 walking home:

```example
{
  "title": "Home run, then sol (5), then 5 4 3 2 1",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | G4:w | G4:q F4:q E4:q D4:q | C4:w" } ],
  "show": ["keyboard"]
}
```

This lesson opens the melody rung that uses it: writing four-note tunes from **1–5** as degrees (you'll meet it once the earlier melody rungs are solid). Finding the notes on the keyboard first (C D E F G = 1 2 3 4 5) is a perfectly good method. Next week opens degree 5 in the single-note degree drill.

```ladder
{ "skill": "melody", "unlocks": 6, "intro": "Opens \"Write 4 notes as degrees\" (1–5); the drill runs at your current melody rung." }
```

## Drills

```exercise
{
  "id": "e1",
  "type": "quiz",
  "title": "Reading time signatures",
  "spec": { "questions": [
    { "q": "In 3/4, each bar has…", "choices": ["3 quarter-note beats", "4 quarter-note beats", "3 half-note beats"], "answer": 0 },
    { "q": "The bottom number 4 means…", "choices": ["4 beats per bar", "the quarter note gets one beat"], "answer": 1 },
    { "q": "Which note fills a whole bar of 3/4?", "choices": ["whole note", "dotted half note", "half note"], "answer": 1 },
    { "q": "The strongest beat in a bar is…", "choices": ["beat 1", "the last beat", "beat 2"], "answer": 0 },
    { "q": "Most pop and dance music is in…", "choices": ["3/4", "4/4"], "answer": 1 },
    { "q": "How many eighth notes fill a bar of 3/4?", "choices": ["4", "6", "8"], "answer": 1 }
  ] },
  "passScore": 0.75
}
```

```exercise
{
  "id": "e2",
  "type": "rhythm-tap",
  "title": "Tap in 3/4",
  "instructions": "Count '1 2 3' out loud.",
  "passScore": 0.75,
  "spec": { "bpm": 90, "timeSig": "3/4", "seq": "x:q x:q x:q | x:h x:q | x:q x:8 x:8 x:q | x:h.", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "e3",
  "type": "read-rhythm",
  "title": "Read and tap (4/4)",
  "instructions": "A new one-bar rhythm each time. Count it in your head first, then tap.",
  "count": 8,
  "passScore": 0.7,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "8" }
}
```

```exercise
{
  "id": "e6",
  "type": "play-melody",
  "title": "Play the little waltz",
  "instructions": "Right hand on C–G. Feel the lean on every beat 1.",
  "passScore": 0.75,
  "spec": { "bpm": 90, "timeSig": "3/4", "key": "C", "seq": "C4:h E4:q | G4:h E4:q | F4:h D4:q | C4:h. | E4:h G4:q | F4:h D4:q | D4:h E4:q | C4:h.", "showStaff": true, "showKeyboard": false, "countIn": 1, "backing": { "instrument": "bass", "seq": "C3:h. | C3:h. | G3:h. | C3:h. | C3:h. | G3:h. | G3:h. | C3:h." } }
}
```
