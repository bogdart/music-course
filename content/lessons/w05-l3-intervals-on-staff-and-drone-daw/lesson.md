---
id: w05-l3-intervals-on-staff-and-drone-daw
title: Intervals on the Staff and a Melody over a Drone
week: 5
order: 3
phase: p1
duration_min: 50
goals:
  - Recognise 2nds, 3rds, 4ths, 5ths and octaves on the staff at a glance
  - Hear how melody notes sit against a sustained drone
  - Compose an 8-bar two-voice piece (drone + melody) in the DAW
prerequisites: [w05-l2-fourths-and-fifths]
tags: [intervals, notation, drone, daw, ear]
---

# Intervals on the staff

Reading intervals by shape is much faster than naming two notes and counting. On the staff:

- **2nd** — line to the next space (or space to the next line): the notes touch.
- **3rd** — line to the next line, or space to the next space.
- **4th** — line to space, with one line and one space between.
- **5th** — line to line skipping one line, or space to space skipping one space.
- **Octave** — the same letter, far apart: line to space.

Odd numbers (3rd, 5th, 7th) keep the same "type": both on lines or both in spaces. Even numbers (2nd, 4th, 6th, octave) switch.

```staff
{ "clef": "treble", "key": "C", "timeSig": "4/4", "seq": "[E4 F4]:h [E4 G4]:h | [E4 A4]:h [E4 B4]:h | [E4 E5]:w" }
```

Above: a 2nd, 3rd, 4th, 5th and octave, all built up from E4 (bottom line). Now hear them one after the other, from the same E:

```example
{
  "title": "From E4: 2nd, 3rd, 4th, 5th",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "E4:q F4:q r:h | E4:q G4:q r:h | E4:q A4:q r:h | E4:q B4:q r:h" } ],
  "show": ["staff"]
}
```

This lesson opens two interval rungs that mix what you've learned: first the four small ones together (half step, whole step, minor and major 3rd), then all six from half step to fifth. Size first (step, skip, leap), then the details. The drill runs at your current rung, so you'll meet these mixes once the two- and three-way contrasts are solid.

```ladder
{ "skill": "intervals", "unlocks": 7, "intro": "Opens \"Seconds and thirds\" and \"Seconds to fifths\"; the drill runs at your current rung." }
```

## The drone: melody against home

A [[drone]] is one or two notes held for a long time underneath a melody — like bagpipes. You used a single-note drone in the first degree drills. Today's drone holds **C and G** (a perfect 5th) under a melody in C major, which keeps home sounding the whole time.

Listen to a melody over a C–G drone. Each note sits differently against it: C and G blend in, E sounds sweet, D and F rub a little and seem to want to move — and at the end everything resolves to C. How much of that you notice today varies; listening twice helps.

```example
{
  "title": "Melody over a C–G drone",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "pad", "seq": "[C3 G3]:w | [C3 G3]:w | [C3 G3]:w | [C3 G3]:w" },
    { "instrument": "piano", "seq": "C4:q E4:q G4:h | F4:q E4:q D4:h | E4:q G4:q C5:h | G4:q E4:q C4:h" }
  ],
  "show": ["staff", "pianoroll"]
}
```

**Tip for today's piece:** a melody over a drone works best when it moves by steps and skips, rests on 1, 3 and 5 on the strong beats, and uses one or two bigger leaps (a 4th, 5th or octave) as highlights.

## Finding notes: black keys too

This lesson also opens a bigger version of the octave ladder's *find it* drill (you'll meet it once the earlier octave rungs are solid): any of the twelve notes, from low (octave 2) to high (octave 5). Some will be outside your keyboard — play the same letter an octave closer. Find the height first, then check the neighbours; a black key is often the answer now.

```ladder
{ "skill": "octave", "unlocks": 8, "intro": "Opens \"Find it: black keys too\"; the drill runs at your current octave rung." }
```

## Drills

```exercise
{
  "id": "e1",
  "type": "quiz",
  "title": "Intervals by shape",
  "spec": { "questions": [
    { "q": "Both notes on neighbouring lines (one space between). Interval?", "choices": ["2nd", "3rd", "4th"], "answer": 1 },
    { "q": "Notes on a line and the space right next to it?", "choices": ["2nd", "3rd", "5th"], "answer": 0 },
    { "q": "Both notes on lines with one line skipped between them?", "choices": ["4th", "5th", "octave"], "answer": 1 },
    { "q": "E4 (bottom line) up to A4 (second space) is a…", "choices": ["3rd", "4th", "5th"], "answer": 1 },
    { "q": "Odd-numbered intervals (3rd, 5th) have both notes…", "choices": ["both on lines or both in spaces", "one on a line, one in a space"], "answer": 0 },
    { "q": "G4 (second line) up to G5 (above the top line) is a…", "choices": ["5th", "7th", "octave"], "answer": 2 }
  ] },
  "passScore": 0.75
}
```

```exercise
{
  "id": "e2",
  "type": "read-note",
  "title": "Reading warm-up: see it, play it",
  "count": 10,
  "passScore": 0.75,
  "spec": { "clef": "treble", "range": ["C4", "C5"], "accidentals": false, "answer": "play", "timed": 0 }
}
```

```exercise
{
  "id": "e3",
  "type": "build-interval",
  "title": "Build any interval up to the octave",
  "count": 12,
  "passScore": 0.75,
  "spec": { "intervals": ["m2", "M2", "m3", "M3", "P4", "P5", "P8"], "direction": "asc", "root": "random" }
}
```

```exercise
{
  "id": "e5",
  "type": "play-melody",
  "title": "Play over the drone",
  "passScore": 0.75,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "C4:q E4:q G4:h | F4:q E4:q D4:h | E4:q G4:q C5:h | G4:q E4:q C4:h", "showStaff": true, "showKeyboard": false, "countIn": 1, "backing": { "instrument": "pad", "seq": "[C3 G3]:w | [C3 G3]:w | [C3 G3]:w | [C3 G3]:w" } }
}
```

```exercise
{
  "id": "e7",
  "type": "daw-task",
  "title": "Two voices: drone + melody",
  "spec": {
    "template": { "bpm": 80, "key": "C", "tracks": [ { "instrument": "pad", "seq": "" }, { "instrument": "piano", "seq": "" } ] },
    "task": "Track 1 (pad): hold C3 and G3 together as whole notes for all 8 bars. Track 2 (piano): write an 8-bar melody in C major between C4 and C5. Move mostly by steps and 3rds, include at least one leap of a 4th, 5th or octave, and end on C. Solo each track, then play both together and listen to how each melody note sounds against the drone.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["pad", "piano"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "range", "low": "C3", "high": "G3", "track": 0 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 0 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 1 },
      { "kind": "range", "low": "C4", "high": "C5", "track": 1 },
      { "kind": "note-count", "min": 12, "max": 40, "track": 1 },
      { "kind": "max-leap", "semitones": 12, "track": 1 },
      { "kind": "ends-on", "degree": 1, "track": 1 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```
