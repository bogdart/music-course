---
id: w05-l3-intervals-on-staff-and-drone-daw
title: Intervals on the Staff and a Melody over a Drone
week: 5
order: 3
phase: p1
duration_min: 50
goals:
  - Recognise 2nds, 3rds, 4ths, 5ths and octaves on the staff at a glance
  - Hear how each interval sounds against a sustained drone
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
- **Octave** — line to space far apart; the letter repeats.

Odd numbers (3rd, 5th, 7th) keep the same "type": both on lines or both in spaces. Even numbers (2nd, 4th, 6th, octave) switch.

```staff
{ "clef": "treble", "key": "C", "timeSig": "4/4", "seq": "[E4 F4]:h [E4 G4]:h | [E4 A4]:h [E4 B4]:h | [E4 E5]:w" }
```

Above: a 2nd, 3rd, 4th, 5th and octave, all built up from E4 (bottom line). Notes that touch = 2nd; both-on-lines-with-one-gap = 3rd; and so on.

## The drone: hearing intervals against home

A [[drone]] is one or two notes held for a long time underneath a melody — like bagpipes, or the low hum in much Indian classical music. It's the oldest accompaniment in the world, and a superb ear trainer: the drone is always "home", so every melody note becomes an audible interval against it.

Listen to a melody over a C–G drone. Notice how each note has a different *tension* against the drone: C and G melt in, E sounds sweet, D and F rub gently, then everything resolves back into C.

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

Why C *and* G in the drone? The perfect 5th blends so well that it strengthens "home" without adding colour — it's the backbone of the C major sound.

**Tip for today's piece:** a melody over a drone works best when it moves by steps and skips, rests on 1, 3 and 5 on the strong beats, and uses one or two bigger leaps (a 4th, 5th or octave) as highlights.

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
  "passScore": 0.8
}
```

```exercise
{
  "id": "e2",
  "type": "read-note",
  "title": "Reading warm-up: see it, play it",
  "count": 10,
  "passScore": 0.8,
  "spec": { "clef": "treble", "range": ["C4", "C5"], "accidentals": false, "answer": "play", "timed": 0 }
}
```

```exercise
{
  "id": "e3",
  "type": "build-interval",
  "title": "Build any interval up to the octave",
  "count": 12,
  "passScore": 0.8,
  "spec": { "intervals": ["m2", "M2", "m3", "M3", "P4", "P5", "P8"], "direction": "asc", "root": "random" }
}
```

```exercise
{
  "id": "e4",
  "type": "ear-interval",
  "title": "Five-way interval ID",
  "instructions": "M2, M3, P4, P5 or P8. Sing, then match to your anchor songs.",
  "count": 12,
  "passScore": 0.7,
  "spec": { "intervals": ["M2", "M3", "P4", "P5", "P8"], "direction": "asc", "root": "random", "range": ["C3", "C5"] }
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
  "id": "e6",
  "type": "ear-note",
  "title": "Degrees 1–5 (review)",
  "count": 10,
  "passScore": 0.75,
  "spec": { "key": "C", "mode": "major", "degrees": [1, 2, 3, 4, 5], "reference": "cadence", "octaves": [3, 4], "instrument": "piano" }
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
