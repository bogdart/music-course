---
id: w04-l2-time-signatures-and-counting
title: Time Signatures and Counting
week: 4
order: 2
phase: p1
duration_min: 50
goals:
  - Read a time signature and feel the difference between 4/4 and 3/4
  - Count and tap rhythms in both meters
  - Write short tunes as degrees (1–5), reading them off your fingers
  - Pick the octave out of two candidates when the wrong one is a near-miss
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

**How to hear 3 or 4 — try it on the two examples above:**

1. Play the 4/4 example. Say "ONE" on each kick, then keep counting until the next kick: "ONE 2 3 4 | ONE".
2. Play the 3/4 example the same way: "ONE 2 3 | ONE".
3. If the kick is hard to pick out, tap your foot on every beat and nod on the loudest one; count taps between nods.

Counting beats is more reliable than judging the feel.

A melody in 3/4 has no room for a whole note — the longest note filling a bar is a **dotted half** (3 beats):

```example
{
  "title": "A little waltz (3/4)",
  "bpm": 100, "timeSig": "3/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "C4:h E4:q | G4:h E4:q | F4:h D4:q | C4:h. | E4:h G4:q | F4:h D4:q | D4:h E4:q | C4:h." },
    { "instrument": "drums", "seq": "kick:q hh:q hh:q | kick:q hh:q hh:q | kick:q hh:q hh:q | kick:q hh:q hh:q | kick:q hh:q hh:q | kick:q hh:q hh:q | kick:q hh:q hh:q | kick:q hh:q hh:q" }
  ],
  "show": ["staff"]
}
```

## How to count

Say the beat numbers out loud, always restarting at "1" on a new bar: "1 2 3 4 | 1 2 3 4" or "1 2 3 | 1 2 3". Add "&" for eighth notes. Counting aloud feels silly for about a week — and then it's the thing that saves you every time a rhythm gets tricky.

### Check it

```exercise
{
  "id": "e10",
  "type": "listen",
  "title": "3 or 4?",
  "instructions": "Count from each heavy beat to the next.",
  "spec": {
    "examples": [
      { "title": "Groove 1", "bpm": 110, "timeSig": "3/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "drums", "seq": "kick:q hh:q hh:q | kick:q hh:q hh:q | kick:q hh:q hh:q | kick:q hh:q hh:q" } ] },
      { "title": "Groove 2", "bpm": 110, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "drums", "seq": "kick:q hh:q hh:q hh:q | kick:q hh:q hh:q hh:q | kick:q hh:q hh:q hh:q" } ] }
    ],
    "questions": [
      { "q": "Groove 1 groups beats in…", "choices": ["3", "4"], "answer": 0, "explain": "Kick every three beats: 3/4." },
      { "q": "Groove 2 groups beats in…", "choices": ["3", "4"], "answer": 1, "explain": "Kick every four beats: 4/4." }
    ]
  }
}
```

**If you can't tell yet:** count out loud for three full groups before answering; say "ONE" only when the kick
comes. Your spoken count gives the answer even when the feel doesn't.

The next rhythm rungs (the drill runs at your current one): tapping back eighths and rests, then hearing whether a
groove is in **3 or 4**.

```ladder
{ "skill": "rhythm", "unlocks": 5, "intro": "Rhythm at your current rung — up to tapping eighths and rests, and 3 or 4." }
```

## Writing tunes as degrees

The next melody rungs ask you to **write** what you hear as numbers instead of playing it back: three notes from 1,
2 and 3, then four notes from 1–5 — now with fa (4), which joined the degree drill last lesson. The practical way is
two steps: play it back on the keyboard first (as in the echo drill, thumb on C), then translate what your fingers
did — thumb to little finger = 1 to 5 (C D E F G).

Fa is the note that most often *moves on*: in a tune it usually steps down to mi (4 → 3), or up to sol on the way
somewhere.

**Try it:** play E D C and say "3 2 1"; play C D C and say "1 2 1"; play C E G E and say "1 3 5 3"; play G F E C and
say "5 4 3 1". Then play the little waltz above and say its degrees for bars 1–4: *1 3 | 5 3 | 4 2 | 1*. Notice bar
3: fa (F) then re (D), both restless, and then bar 4 resolves home.

**If you can't hear it yet:** do it one note at a time — replay, find the first note by searching from C, write it
down, then the next. Your fingers give the number.

```ladder
{ "skill": "melody", "unlocks": 6, "intro": "Writing tunes as degrees at your current melody rung — three notes (1–3), then four (1–5)." }
```

## Octaves: the near-miss candidate

(Past 40 minutes? Stop here and make this section a second short sitting.)

The next octave rung is *which one is the octave?* with a harder wrong candidate: the key **right next to** the
octave (C4, then C5 or B4). Height can't help any more.

**Try it:** play C4 → C5, then C4 → B4. Then press C4 + C5 together (still) and C4 + B4 together (wobbles). After
each drill answer, use the *together* buttons in **Listen again** — the wobble tells you which was the near-miss.

```example
{
  "title": "C4 → C5 vs C4 → B4, then each pair together (melts vs wobbles)",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h C5:h | C4:h B4:h | [C4 C5]:w | [C4 B4]:w" } ],
  "show": ["keyboard"]
}
```

```exercise
{
  "id": "e13",
  "type": "listen",
  "title": "A or B: which is the octave?",
  "instructions": "Each clip: C4, then candidate A, then candidate B. Replay, and press the pairs together on your keyboard if unsure.",
  "spec": {
    "examples": [
      { "title": "Clip 1", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:h r:h | B4:h r:h | C5:h r:h" } ] },
      { "title": "Clip 2", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:h r:h | C5:h r:h | B4:h r:h" } ] }
    ],
    "questions": [
      { "q": "Clip 1: the octave is…", "choices": ["A", "B"], "answer": 1, "explain": "A = B4 (a half step short), B = C5." },
      { "q": "Clip 2: the octave is…", "choices": ["A", "B"], "answer": 0, "explain": "A = C5, B = B4 (a half step short)." }
    ]
  }
}
```

**If you can't hear it yet:** find the first note by search, then count 12 keys up and play it: that's the octave.
Replay the question and compare A and B with the note you just played. This rung may stay open for weeks; that's
the octave strand's normal pace.

```ladder
{ "skill": "octave", "unlocks": 4, "intro": "Octaves at your current rung — up to 'which one is the octave?' with near-misses." }
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
  "id": "e7",
  "type": "play-melody",
  "title": "Play the little waltz",
  "instructions": "Right hand on C–G. Feel the lean on every beat 1.",
  "passScore": 0.75,
  "spec": { "bpm": 90, "timeSig": "3/4", "key": "C", "seq": "C4:h E4:q | G4:h E4:q | F4:h D4:q | C4:h. | E4:h G4:q | F4:h D4:q | D4:h E4:q | C4:h.", "showStaff": true, "showKeyboard": false, "countIn": 1, "backing": { "instrument": "drums", "seq": "kick:q hh:q hh:q | kick:q hh:q hh:q | kick:q hh:q hh:q | kick:q hh:q hh:q | kick:q hh:q hh:q | kick:q hh:q hh:q | kick:q hh:q hh:q | kick:q hh:q hh:q" } }
}
```

## Between lessons

- Two **Practice** sessions of about 10 minutes.
- Once a day: play the little waltz, counting "ONE 2 3" out loud.
- Ready for the next lesson when the dashboard doesn't say **practise first**.
