---
id: w01-l2-pitch-and-octaves
title: The Same Note, the Same Name — Octaves
week: 1
order: 2
phase: p1
duration_min: 40
goals:
  - Judge whether two notes are exactly the same note or two different ones
  - Know that note names repeat every 12 keys — the octave — while the height changes
  - Hear an octave melt into one sound when both notes play together
prerequisites: [w01-l1-welcome-and-setup]
tags: [pitch, octave, ear, keyboard]
---

# The same note, the same name

In lesson 2 you checked whether a note was played twice. Today that becomes a drill, and then we meet a different
kind of "same": notes that share a **name** but not a **height**.

## Same note or different?

**Try it:**

1. Play A4, then A4. Nothing moves — the same note.
2. Play A4, then F4. It moved down: different.
3. Play A4, then C5. It moved up: different.

When the pair sounds like *one knock twice*, it's the same note; any lift or sinking means different. In the drill,
after answering, press **Only the first note, twice** — that's exactly what "the same" would have sounded like —
and compare it with the question.

**If you can't tell:** use the search from last lesson. Find the first note, then the second. Same key = same note.

```ladder
{ "skill": "pitch", "unlocks": 4, "intro": "Up/down, find it, or same note or not — at your current pitch rung." }
```

## The name comes back every 12 keys

Count up from C4, every key, black and white: C♯, D, D♯, E, F, F♯, G, G♯, A, A♯, B — the 12th key is C again,
**C5**. That distance is an [[octave]]. The letter repeats, the number changes.

```keyboard
{ "range": ["C3", "C5"], "highlight": ["C3", "C4", "C5"], "labels": "names", "colors": { "C3": "root", "C4": "root", "C5": "root" } }
```

**Honest truth:** played one after the other, C4 and C5 will most likely sound like two *different* notes to you —
one lower, one higher. They are different in height. They share only a quieter quality, which is why they share a
name. Noticing that quality takes weeks of short practice, for almost everyone — research on adults finds it improves
slowly even with training. So don't try to hear C4 and C5 as "the same" today.

That's why octaves are a **separate strand** in this course: a short octave drill every week or two, for months,
while everything else you are asked to judge by ear stays inside one octave (C4–C5) until week 7. (Some *reference*
sounds you only listen to — a low drone, the bass of a chord cadence — sit an octave lower, around C3; lessons say so
when they appear.) Nothing else depends on octaves yet. There is one place where the octave is easier to hear: when the two notes sound **together**.

## Octaves melt together

The upper note of an octave vibrates exactly twice as fast as the lower one, so the two waves line up. Played
together, an octave tends to sound like **one fuller note**. Other pairs sound like **two notes rubbing** — a rough,
wobbly sound.

**Try it** (hold the first key down, then add the second):

1. Hold C3, add C4. Listen for 3 seconds: one sound, smooth.
2. Hold C3, add F♯3 (the left key of the three black keys). Rough, busy — two notes.
3. Hold C3, add B3 (one key below C4). Listen closely: a slow **wobble**, like the sound is shaking. That's a
   *near-miss*: almost as high as the octave, so height won't help — listen for the wobble.
4. Go back to C3 + C4: still, no wobble.

```example
{
  "title": "C3 + C4 (melts), C3 + F♯3 (clashes), C3 + C4, C3 + B3 (near-miss: wobbles)",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C3 C4]:w | [C3 F#3]:w | [C3 C4]:w | [C3 B3]:w" } ],
  "show": ["keyboard"]
}
```

### Check it

```exercise
{
  "id": "e1",
  "type": "listen",
  "title": "One sound, or two rubbing?",
  "instructions": "Each pair plays both notes at once. Replay as often as you like.",
  "spec": {
    "examples": [
      { "title": "Pair 1", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[D3 G#3]:w" } ] },
      { "title": "Pair 2", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[E3 E4]:w" } ] },
      { "title": "Pair 3", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[G3 G4]:w" } ] },
      { "title": "Pair 4", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[A3 D#4]:w" } ] }
    ],
    "questions": [
      { "q": "Pair 1:", "choices": ["one sound (octave)", "two notes rubbing"], "answer": 1, "explain": "D3 + G♯3: a clash." },
      { "q": "Pair 2:", "choices": ["one sound (octave)", "two notes rubbing"], "answer": 0, "explain": "E3 + E4: an octave." },
      { "q": "Pair 3:", "choices": ["one sound (octave)", "two notes rubbing"], "answer": 0, "explain": "G3 + G4: an octave." },
      { "q": "Pair 4:", "choices": ["one sound (octave)", "two notes rubbing"], "answer": 1, "explain": "A3 + D♯4: a clash." }
    ]
  }
}
```

**If you can't hear it yet:** make the comparison yourself. Find the lower note (search), hold it, and add the key
12 above it — that's the octave sound. Then add a key 6 above instead. Replay the pair: which of your two does it
match? The near-miss wobble is subtle at first for most people; it becomes obvious with repetition.

## Your octave ladder

The drill runs at your current octave rung: *octave or clash*, then *octave or near-miss*, both notes at once. After
every answer, press the **Listen again** buttons (*The real octave*, *One after the other*): hearing the real thing
next to your mistake teaches more than a lucky right answer. 60–70% at first is normal.

```ladder
{ "skill": "octave", "unlocks": 2, "intro": "Two notes at once: one sound (an octave), or two notes rubbing?" }
```

## Hands

```exercise
{
  "id": "e10",
  "type": "quiz",
  "title": "Octave facts",
  "spec": { "questions": [
    { "q": "How many keys (white + black) from one C to the next C?", "choices": ["8", "12", "7"], "answer": 1 },
    { "q": "C3 and C5 have the same…", "choices": ["height", "note name"], "answer": 1, "explain": "Very different height, same name." },
    { "q": "C4 then C4 again is…", "choices": ["the same note", "an octave"], "answer": 0 },
    { "q": "Played together, which pair melts into one sound?", "choices": ["C4 + C5", "C4 + B4", "C4 + F♯4"], "answer": 0 },
    { "q": "In week 1, C4 then C5 one after the other will probably sound…", "choices": ["exactly the same", "like two different notes — that's normal for now"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "e5",
  "type": "play-notes",
  "title": "Build an octave by counting",
  "instructions": "Play E3, then count 12 keys up (black keys too) and play E4. Then do the same from G3 to G4.",
  "spec": { "prompt": "names", "notes": [["E3", "E4"], ["G3", "G4"]], "ordered": true, "key": "C" }
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

## Between lessons

- Two **Practice** sessions of about 10 minutes (now pitch and octave both appear).
- Once a day, one minute at the keyboard: hold a low note, add its octave, then a key next to it. Listen for still
  versus wobbling.
- Ready for lesson 5 when the *together* drill is right more often than not — it doesn't need to be solid; the
  octave strand grows slowly alongside everything else. If the dashboard says **practise first**, do one more
  Practice session before the next lesson.
