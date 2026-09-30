---
id: w02-l3-pulse-tempo-first-daw
title: Pulse, Tempo and Your First DAW Recording
week: 2
order: 3
phase: p1
duration_min: 45
goals:
  - Feel a steady beat and tap it with a metronome
  - Understand tempo in beats per minute (BPM), quarter notes and half notes
  - Record four bars of quarter notes in the DAW
prerequisites: [w02-l2-black-keys-and-half-steps]
tags: [rhythm, beat, tempo, daw]
songs:
  - { title: "Billie Jean", artist: "Michael Jackson", public_domain: false }
  - { title: "Let It Be", artist: "The Beatles", public_domain: false }
---

# Pulse, tempo and your first recording

Pitch is *which* note. Rhythm is *when*. Underneath almost all music is a steady [[beat]] (also called the pulse) — the thing you nod your head or tap your foot to. Before any fancy rhythm, you need to lock onto the beat and stay there.

## Tempo: how fast the beat goes

[[Tempo]] is the speed of the beat, measured in **BPM** — beats per minute. 60 BPM is one beat per second, like a clock. 120 BPM is two per second.

For reference (no need to listen now): "Let It Be" by The Beatles sits around **72 BPM** — a calm ballad. "Billie Jean" by Michael Jackson is about **117 BPM** — a walking-fast dance groove. Most pop music lives between 70 and 130 BPM.

```example
{
  "title": "Two bars at 60 BPM, then the same beat twice as fast (120 BPM)",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "drums", "seq": "hh:q hh:q hh:q hh:q | hh:q hh:q hh:q hh:q | hh:8 hh:8 hh:8 hh:8 hh:8 hh:8 hh:8 hh:8 | hh:8 hh:8 hh:8 hh:8 hh:8 hh:8 hh:8 hh:8" } ]
}
```

## Bars, quarter notes and half notes

Beats are grouped in fours, with a slight lean on the first: **ONE** two three four, **ONE** two three four. Each group is a [[bar]] (or measure). A note that lasts exactly one beat is a [[quarter note]]; a note that lasts two beats is a [[half note]]. Here is what they look like — a quarter note has a filled-in head, a half note a hollow one:

```staff
{ "clef": "treble", "key": "C", "timeSig": "4/4", "seq": "C4:q C4:q C4:q C4:q | C4:h C4:h | C4:q C4:q C4:h" }
```

```example
{
  "title": "The same three bars: four quarters, two halves, quarter-quarter-half",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "C4:q C4:q C4:q C4:q | C4:h C4:h | C4:q C4:q C4:h" },
    { "instrument": "drums", "seq": "kick:q hh:q hh:q hh:q | kick:q hh:q hh:q hh:q | kick:q hh:q hh:q hh:q" }
  ],
  "show": ["staff"]
}
```

**Try it** with the example above:

1. Play it and tap your foot with the drum clicks. Count out loud: "1 2 3 4".
2. Replay and watch the piano notes: in bar 1 a note starts on every count; in bar 2 only on "1" and "3" — each
   half note lasts through two counts.
3. Replay once more and clap only when a piano note *starts*. Bar 3: clap, clap, clap — hold.

### Check it

```exercise
{
  "id": "e10",
  "type": "listen",
  "title": "Which bar?",
  "instructions": "Count 1 2 3 4 with the clicks and notice on which counts a note starts.",
  "spec": {
    "examples": [
      { "title": "Bar A", "bpm": 80, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:h C4:q C4:q" }, { "instrument": "drums", "seq": "kick:q hh:q hh:q hh:q" } ] },
      { "title": "Bar B", "bpm": 80, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:q C4:q C4:q C4:q" }, { "instrument": "drums", "seq": "kick:q hh:q hh:q hh:q" } ] }
    ],
    "questions": [
      { "q": "Bar A is…", "choices": ["four quarters", "half, quarter, quarter", "quarter, quarter, half"], "answer": 1, "explain": "Notes start on 1, 3 and 4: a half note, then two quarters." },
      { "q": "Bar B is…", "choices": ["four quarters", "two halves", "quarter, quarter, half"], "answer": 0, "explain": "A note on every count." }
    ]
  }
}
```

**If you can't hear it yet:** count out loud and tap on the table with every note start; then write down on which
counts you tapped (e.g. "1, 3, 4"). A note that lets a count pass without a new tap is a half note. Counting is not
a crutch — musicians do it all the time.

Your rhythm ladder starts with exactly this: one bar, pick which of two notations it was. The **How to do it** box
has the same method: tap the beat, count, match.

```ladder
{ "skill": "rhythm", "unlocks": 1, "intro": "One bar of quarters and halves: which notation did you hear?" }
```

**How to stay on the beat when you play:** count out loud and press the key *exactly* with the click — not after it.
If you drift, stop, listen for one bar, and rejoin on "one". Steady matters far more than fast.

## The DAW

A [[DAW]] (digital audio workstation) is where you'll build every song this year. Today you just record:

1. Press the **metronome** button and set the tempo to 80.
2. Press **record**, let the count-in clicks pass, and start playing on the next "1".
3. Stop, then look at the piano roll: left-to-right is time, bottom-to-top is pitch. Each note is a bar on the grid.
4. Notes slightly off the grid lines? **Quantize → 1/4** snaps them into place. Press play and listen.

## Drills

```exercise
{
  "id": "e1",
  "type": "rhythm-tap",
  "title": "Tap the beat at 70 BPM",
  "instructions": "Tap any key or the space bar with every click. Count out loud.",
  "passScore": 0.75,
  "spec": { "bpm": 70, "timeSig": "4/4", "seq": "x:q x:q x:q x:q | x:q x:q x:q x:q", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "e2",
  "type": "rhythm-tap",
  "title": "Tap the beat at 100 BPM",
  "passScore": 0.75,
  "spec": { "bpm": 100, "timeSig": "4/4", "seq": "x:q x:q x:q x:q | x:q x:q x:q x:q", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "e8",
  "type": "rhythm-tap",
  "title": "Quarters and halves",
  "instructions": "Tap once at the start of each note. On a half note, keep counting '2' silently before the next tap.",
  "passScore": 0.7,
  "spec": { "bpm": 72, "timeSig": "4/4", "seq": "x:q x:q x:h | x:h x:h | x:q x:q x:q x:q | x:h x:q x:q", "showNotation": true, "countIn": 1, "loops": 1 }
}
```

```exercise
{
  "id": "e3",
  "type": "quiz",
  "title": "Beat and tempo",
  "spec": { "questions": [
    { "q": "60 BPM means…", "choices": ["one beat per second", "sixty bars per second", "one beat per minute"], "answer": 0 },
    { "q": "Which tempo is faster?", "choices": ["72 BPM", "117 BPM"], "answer": 1 },
    { "q": "In today's music, beats are grouped in bars of…", "choices": ["2 beats", "3 beats", "4 beats"], "answer": 2, "explain": "ONE two three four — each group of four is one bar. Week 4 shows how the time signature says this on paper." },
    { "q": "A quarter note lasts…", "choices": ["one beat", "two beats", "four beats"], "answer": 0 },
    { "q": "You drift off the beat. Best move?", "choices": ["Play faster to catch up", "Stop, listen, rejoin on 'one'"], "answer": 1 },
    { "q": "In the piano roll, going up means…", "choices": ["later in time", "higher pitch"], "answer": 1 }
  ] },
  "passScore": 0.75
}
```

```exercise
{
  "id": "e4",
  "type": "play-melody",
  "title": "Quarter notes with the click",
  "instructions": "Four Cs, four Ds, four Es, four Cs. One note per click.",
  "passScore": 0.75,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "C4:q C4:q C4:q C4:q | D4:q D4:q D4:q D4:q | E4:q E4:q E4:q E4:q | C4:q C4:q C4:q C4:q", "showStaff": false, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e7",
  "type": "daw-task",
  "title": "Your first recording",
  "spec": {
    "template": { "bpm": 80, "key": "C", "tracks": [ { "instrument": "piano", "seq": "" } ] },
    "task": "Turn on the metronome at 80 BPM and record exactly 4 bars of quarter notes (16 notes) using white keys only. Start and finish on C. Suggestion: four Cs, four Ds, four Es, four Cs — or invent your own. Quantize to 1/4 if needed, then play it back.",
    "checks": [
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "note-count", "min": 16, "max": 16 },
      { "kind": "uses-rhythm", "values": ["q"], "minDistinct": 1 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false },
      { "kind": "range", "low": "C3", "high": "C5" },
      { "kind": "starts-on", "degrees": [1] },
      { "kind": "ends-on", "degree": 1 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

## Between lessons (and the end of week 2)

- Two **Practice** sessions of about 10 minutes (pitch, octave, melody, intervals and rhythm take turns at your
  level).
- Replay your DAW recording once a day and tap along; if you like, record a second take.
- Ready for week 3 when the dashboard doesn't say **practise first**. If it does, spend a lesson slot on Practice
  instead — theory can wait a few days; the ear can't be rushed.
