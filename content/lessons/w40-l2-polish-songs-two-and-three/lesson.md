---
id: w40-l2-polish-songs-two-and-three
title: Portfolio — Polish Songs Two and Three
week: 40
order: 2
phase: p4
duration_min: 50
goals:
  - Improve section changes with fills, pickups, drop-outs, risers and harmonic setups
  - Choose and write a deliberate ending (cadence, button or strip-down)
  - Finish portfolio pieces two and three (one session each)
prerequisites: [w40-l1-polish-song-one]
tags: [portfolio, arrangement, transitions, endings, daw]
---

# Portfolio — Polish Songs Two and Three

The same two passes as last lesson, plus two finishing skills that separate a sketch from a track: **transitions** and **endings**. **This lesson spans two sessions:** read and practise, then polish song two in the first; song three in the second.

## Transitions

A [[transition]] tells the listener "something new is coming". Five tools, from subtle to obvious:

- [[Pickup]]: the melody (or bass) starts a beat early, leading into the new section.
- [[Drop-out]]: everything, or everything but one part, stops for a beat before the downbeat.
- **Drum fill:** the last half-bar or bar of a section breaks the pattern — toms, snare 16ths.
- [[Riser]]: a rising line, a snare roll or a pad climbing across the last bars.
- **Harmonic setup:** a V7 (or a borrowed ♭VII) at the end of the section, leaning into the next.

```example
{
  "title": "A 1-bar fill with a bass pickup into a new section",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | kick:8 kick:8 snare:8 snare:8 tom:16 tom:16 tom:16 tom:16 snare:16 snare:16 snare:16 snare:16 | [kick crash]:q hihat:q [snare hihat]:q hihat:q |" },
    { "instrument": "bass", "seq": "C2:w | G1:h. A1:8 B1:8 | C2:w |" }
  ],
  "show": ["pianoroll"]
}
```

```exercise
{
  "id": "e1-tap-fill",
  "type": "rhythm-tap",
  "title": "Tap the fill",
  "passScore": 0.7,
  "spec": { "bpm": 90, "timeSig": "4/4", "seq": "x:8 x:8 x:8 x:8 x:16 x:16 x:16 x:16 x:16 x:16 x:16 x:16 | x:q r:q r:h |", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```ladder
{ "skill": "rhythm", "unlocks": 16, "intro": "Review: rhythm at your current rung — fills and grooves are built from these." }
```

## Endings

Three reliable endings:

1. **Cadence:** V–I, or IV–iv–I, on the tonic, held. Warm and final — ballads, folk, jazz (try a 6/9 chord on top).
2. **Button:** the band stops dead on one short hit, often after a fill. Punchy — pop, funk, rock.
3. **Strip-down:** remove layers bar by bar until one element is left — dance, lo-fi, film.

Whatever you choose, **decide it**. A song that just stops when the loop runs out sounds unfinished.

```example
{
  "title": "Three endings in C: cadence IV–iv–I6/9, button (V7 then a short C), strip-down",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[F2 A3 C4]:w | [F2 Ab3 C4]:w | [C3 E3 A3 D4 G4]:w | r:w | [G2 F3 B3]:h. [C3 E3 G3]:8 r:8 | r:w | [C3 G3 E4]:w | [C3 G3]:w | C3:w |" }
  ],
  "show": ["pianoroll"]
}
```

```exercise
{
  "id": "e2-play-ending",
  "type": "play-melody",
  "title": "Play the IV–iv–I 6/9 ending",
  "passScore": 0.7,
  "spec": { "bpm": 70, "timeSig": "4/4", "key": "C", "seq": "[F2 A3 C4]:w | [F2 Ab3 C4]:w | [C3 E3 A3 D4 G4]:w |", "showStaff": false, "showKeyboard": true, "countIn": 1 }
}
```

## Session 1: song two

```exercise
{
  "id": "e3-daw-polish-two",
  "type": "daw-task",
  "title": "Song two: final version",
  "instructions": "Apply the arrangement and mix passes, use at least two different transition tools, and give the piece a deliberate ending. Rebuild or paste the final version here.",
  "spec": {
    "template": {
      "bpm": 100, "key": "C", "timeSig": "4/4",
      "tracks": [
        { "instrument": "lead", "seq": "" },
        { "instrument": "piano", "seq": "" },
        { "instrument": "bass", "seq": "" },
        { "instrument": "drums", "seq": "" },
        { "instrument": "pad", "seq": "" }
      ]
    },
    "projectRef": "w40-portfolio-2",
    "task": "Finished portfolio piece two.",
    "checks": [
      { "kind": "bars", "min": 24, "max": 128 },
      { "kind": "note-count", "min": 24, "track": 0 },
      { "kind": "custom", "id": "transitions", "note": "Self-check: two or more different transition tools used." },
      { "kind": "custom", "id": "ending", "note": "Self-check: a deliberate cadence, button or strip-down ending." }
    ],
    "minBars": 24, "maxBars": 128
  }
}
```

## Session 2: song three

```exercise
{
  "id": "e4-daw-polish-three",
  "type": "daw-task",
  "title": "Song three: final version",
  "instructions": "Same process. If this is your film cue or developed motif, the drums track may stay empty — focus on the arc and the ending.",
  "spec": {
    "template": {
      "bpm": 90, "key": "C", "timeSig": "4/4",
      "tracks": [
        { "instrument": "lead", "seq": "" },
        { "instrument": "piano", "seq": "" },
        { "instrument": "bass", "seq": "" },
        { "instrument": "drums", "seq": "" },
        { "instrument": "pad", "seq": "" }
      ]
    },
    "projectRef": "w40-portfolio-3",
    "task": "Finished portfolio piece three.",
    "checks": [
      { "kind": "bars", "min": 24, "max": 128 },
      { "kind": "note-count", "min": 24, "track": 0 },
      { "kind": "custom", "id": "arc", "note": "Self-check: a clear climax and release." },
      { "kind": "custom", "id": "transitions", "note": "Self-check: every section change is announced." },
      { "kind": "custom", "id": "ending", "note": "Self-check: a deliberate ending." }
    ],
    "minBars": 24, "maxBars": 128
  }
}
```

```exercise
{
  "id": "e5-reflect",
  "type": "reflect",
  "title": "Transition audit",
  "spec": {
    "prompt": "For each of songs two and three, name every section change and the tool you used there. Which transition works best, and why?",
    "minWords": 30
  }
}
```
