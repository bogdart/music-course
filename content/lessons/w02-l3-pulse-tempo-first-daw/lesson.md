---
id: w02-l3-pulse-tempo-first-daw
title: Pulse, Tempo and Your First DAW Recording
week: 2
order: 3
phase: p1
duration_min: 45
goals:
  - Feel a steady beat and tap it with a metronome
  - Understand tempo in beats per minute (BPM)
  - Record four bars of quarter notes in the DAW
prerequisites: [w02-l2-black-keys-and-half-steps]
tags: [rhythm, beat, tempo, daw]
songs:
  - { title: "Billie Jean", artist: "Michael Jackson", public_domain: false }
  - { title: "Let It Be", artist: "The Beatles", public_domain: false }
---

# Pulse, tempo and your first recording

Pitch is *which* note. Rhythm is *when*. Underneath almost all music is a steady [[beat]] (also called the pulse) — the thing you nod your head or tap your foot to. Before any fancy rhythm, you need to be able to lock onto the beat and stay there.

## Tempo: how fast the beat goes

[[Tempo]] is the speed of the beat, measured in **BPM** — beats per minute. 60 BPM is one beat per second, like a clock. 120 BPM is two per second.

For reference (no need to listen now): "Let It Be" by The Beatles sits around **72 BPM** — a calm ballad. "Billie Jean" by Michael Jackson is about **117 BPM** — a walking-fast dance groove. Most pop music lives between 70 and 130 BPM.

```example
{
  "title": "The same beat at 60 BPM, then 120 BPM",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "drums", "seq": "hh:q hh:q hh:q hh:q | hh:q hh:q hh:q hh:q | hh:8 hh:8 hh:8 hh:8 hh:8 hh:8 hh:8 hh:8 | hh:8 hh:8 hh:8 hh:8 hh:8 hh:8 hh:8 hh:8" } ]
}
```

(The second half plays notes twice as close together — that's what doubling the tempo feels like.)

## Bars and quarter notes

Beats are grouped in fours, with a slight lean on the first: **ONE** two three four, **ONE** two three four. Each group is a [[bar]] (or measure). A note that lasts exactly one beat is a [[quarter note]]. Listen to four bars of quarter notes with a kick drum marking each "ONE":

```example
{
  "title": "Four bars of quarter notes",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "C4:q C4:q C4:q C4:q | D4:q D4:q D4:q D4:q | E4:q E4:q E4:q E4:q | C4:q C4:q C4:q C4:q" },
    { "instrument": "drums", "seq": "kick:q hh:q hh:q hh:q | kick:q hh:q hh:q hh:q | kick:q hh:q hh:q hh:q | kick:q hh:q hh:q hh:q" }
  ],
  "show": ["pianoroll"]
}
```

**How to stay on the beat:** count out loud ("one, two, three, four"), and press the key *exactly* with the click — not after it. If you drift, stop, listen for one bar, and rejoin on "one". Being steady matters far more than being fast.

## The DAW

A [[DAW]] (digital audio workstation) is where you'll build every song this year. Today you just record. Press the metronome button, set the tempo, press record, wait for the count-in, and play. The piano roll then shows your notes as bars on a grid: left-to-right is time, bottom-to-top is pitch. If your notes land slightly off the grid lines, use **Quantize → 1/4** to snap them into place.

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
  "id": "e3",
  "type": "quiz",
  "title": "Beat and tempo",
  "spec": { "questions": [
    { "q": "60 BPM means…", "choices": ["one beat per second", "sixty bars per second", "one beat per minute"], "answer": 0 },
    { "q": "Which tempo is faster?", "choices": ["72 BPM", "117 BPM"], "answer": 1 },
    { "q": "In 4/4, a bar contains…", "choices": ["2 beats", "3 beats", "4 beats"], "answer": 2 },
    { "q": "A quarter note lasts…", "choices": ["one beat", "two beats", "four beats"], "answer": 0 },
    { "q": "You drift off the beat. Best move?", "choices": ["Play faster to catch up", "Stop, listen, rejoin on 'one'"], "answer": 1 },
    { "q": "In the piano roll, going up means…", "choices": ["later in time", "higher pitch"], "answer": 1 }
  ] },
  "passScore": 0.8
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
  "id": "e5",
  "type": "ear-melody",
  "title": "Echo: four notes from C to G",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "C", "degrees": [1, 2, 3, 4, 5], "length": 4, "rhythm": "quarters", "answer": "play", "reference": "tonic" }
}
```

```exercise
{
  "id": "e6",
  "type": "ear-interval",
  "title": "Half or whole step? (review)",
  "count": 8,
  "passScore": 0.75,
  "spec": { "intervals": ["m2", "M2"], "direction": "asc", "root": "random", "range": ["C3", "C5"] }
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
