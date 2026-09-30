---
id: w05-l3-intervals-on-staff-and-drone-daw
title: Intervals on the Staff and a Melody over a Drone
week: 5
order: 3
phase: p1
duration_min: 50
goals:
  - Recognise 2nds, 3rds, 4ths, 5ths and octaves on the staff at a glance
  - Sort a heard interval by size (step, skip, leap) and hear how melody notes sit against a drone
  - Compose an 8-bar two-voice piece (drone + melody) in the DAW
prerequisites: [w05-l2-fourths-and-fifths]
tags: [intervals, notation, drone, daw, ear]
---

# Intervals on the staff

Reading intervals by shape is much faster than naming two notes and counting:

- **2nd** — line to the next space (or space to the next line): the notes touch.
- **3rd** — line to the next line, or space to the next space.
- **4th** — line to space, with one line and one space between.
- **5th** — line to line skipping one line, or space to space skipping one space.
- **Octave** — the same letter, far apart.

Shortcut: odd numbers (3rd, 5th) keep the same "type" — both on lines or both in spaces. Even numbers (2nd, 4th, octave) switch.

```staff
{ "clef": "treble", "key": "C", "timeSig": "4/4", "seq": "[E4 F4]:h [E4 G4]:h | [E4 A4]:h [E4 B4]:h | [E4 E5]:w" }
```

**Try it:** for each pair above, put a finger on the staff, say "line–line" or "line–space", name the interval, then play it on the keyboard (all from E4, the bottom line). Then listen:

```example
{
  "title": "From E4: 2nd, 3rd, 4th, 5th",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "E4:q F4:q r:h | E4:q G4:q r:h | E4:q A4:q r:h | E4:q B4:q r:h" } ],
  "show": ["staff"]
}
```

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

## Mixed intervals: sort by size first

This lesson opens two interval rungs that mix what you've learned: first the four small ones together (half step, whole step, minor and major 3rd), then all six from half step to fifth. With six choices, don't try to name the interval in one go. **Sort it first**, then decide inside the group:

| Group | Sounds like | Members | Then decide by |
|---|---|---|---|
| step | moves to the next note | m2, M2 | squeezed or airy |
| skip | jumps over one note | m3, M3 | dark or bright |
| leap | a real jump | P4, P5 | Bride or Twinkle |

**Try it:** from D4, play D–E (step), D–F (skip), D–F♯ (skip), D–G (leap), D–A (leap). Say the group name as each second note sounds. Then do the same from G3 (G–A, G–B♭, G–B, G–C, G–D).

**If you can't hear it yet:** find the second note and count half steps — 1–2 step, 3–4 skip, 5 or 7 leap.

```exercise
{
  "id": "c1",
  "type": "listen",
  "title": "Check: step, skip or leap?",
  "instructions": "Just the group — that's the first half of the method.",
  "spec": {
    "examples": [
      { "title": "Pair 1", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "A3:h D4:h" } ] },
      { "title": "Pair 2", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "E4:h F4:h" } ] },
      { "title": "Pair 3", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "G4:h B4:h" } ] },
      { "title": "Pair 4", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:h G4:h" } ] }
    ],
    "questions": [
      { "q": "Pair 1 is a…", "choices": ["step", "skip", "leap"], "answer": 2, "explain": "A–D: 5 half steps, a perfect 4th." },
      { "q": "Pair 2 is a…", "choices": ["step", "skip", "leap"], "answer": 0, "explain": "E–F: 1 half step, a minor 2nd." },
      { "q": "Pair 3 is a…", "choices": ["step", "skip", "leap"], "answer": 1, "explain": "G–B: 4 half steps, a major 3rd." },
      { "q": "Pair 4 is a…", "choices": ["step", "skip", "leap"], "answer": 2, "explain": "C–G: 7 half steps, a perfect 5th." }
    ]
  }
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

### Before the interval drill

The drill runs at your current interval rung; its **How to do it** box has the method for that rung. For the mixed rungs it is the table above: group first, then the detail, then the keyboard check (play the first note and your guess, replay, compare).

```ladder
{ "skill": "intervals", "unlocks": 7, "intro": "Opens \"Seconds and thirds\" and \"Seconds to fifths\"; the drill runs at your current rung." }
```

## The drone: melody against home

A [[drone]] is one or two notes held underneath a melody — like bagpipes. Today's drone holds **C and G** (a perfect 5th) under a melody in C major, which keeps home sounding the whole time.

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

**Try it:**

1. Left hand: hold C3 and G3 together (sustain pedal if you have one). Right hand: play C4, hold it two seconds; then D4; then E4, F4, G4, A4, B4, C5 — one at a time, each held.
2. For each note ask one question: does it **blend in** with the drone, or does it **want to move**?
3. Let the restless ones move: F → E, B → C, D → C. Listen to the restlessness going away.

Many people hear C, E and G blend, and D, F and B lean. On a piano the effect is gentle, and at first every note may just sound "fine" — that's normal. The pad sound in the DAW holds the drone steadier and usually makes it clearer.

```exercise
{
  "id": "c2",
  "type": "listen",
  "title": "Check: which one blends?",
  "instructions": "Each example plays two notes over the C–G drone. Replay, and play the two notes over your own held C and G if that helps.",
  "spec": {
    "examples": [
      { "title": "Example 1", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "pad", "seq": "[C3 G3]:w | [C3 G3]:w" }, { "instrument": "piano", "seq": "F4:w | E4:w" } ] },
      { "title": "Example 2", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "pad", "seq": "[C3 G3]:w | [C3 G3]:w" }, { "instrument": "piano", "seq": "C5:w | B4:w" } ] }
    ],
    "questions": [
      { "q": "Example 1: which note blends in with the drone?", "choices": ["the first", "the second"], "answer": 1, "explain": "F (first) leans down; E (second) is part of the home chord and blends." },
      { "q": "Example 2: which note blends in with the drone?", "choices": ["the first", "the second"], "answer": 0, "explain": "C (first) is home; B (second) leans up to C." }
    ]
  }
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

**Tips for your piece:** move mostly by steps and skips, rest on C, E or G on the strong beats (beats 1 and 3), and use one or two leaps (a 4th, 5th or octave) as highlights. When a note sounds restless, either keep it short or let it step to a blending neighbour.

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
      { "kind": "min-leap", "semitones": 5, "min": 1, "track": 1 },
      { "kind": "ends-on", "degree": 1, "track": 1 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

## Finding notes: black keys too

This lesson also opens a bigger version of the octave ladder's *find it* drill: any of the twelve notes, from low (octave 2) to high (octave 5). Some notes will be outside your keyboard — play the same letter in an octave you have.

**Try it:** play the mystery notes below and search for each one: (1) is it low, middle or high? (2) try a white key in that area — higher or lower? move; (3) if one white key is too low and the next too high, the answer is the **black key between them**; (4) check by playing your answer an octave up or down: it should feel like the same note, just higher or lower.

**If you can't hear it yet:** at this rung it's normal to need eight or ten tries per note. The tried keys sound but aren't scored — only **Check** counts — so searching is free.

```exercise
{
  "id": "c3",
  "type": "listen",
  "title": "Check: find the mystery note",
  "instructions": "Search on your keyboard, any octave. The answer choices tell you the area; your search decides.",
  "spec": {
    "examples": [
      { "title": "Mystery note 1", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "F#3:w" } ] },
      { "title": "Mystery note 2", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "Bb4:w" } ] }
    ],
    "questions": [
      { "q": "Mystery note 1 is…", "choices": ["F", "F♯ / G♭", "G"], "answer": 1, "explain": "F♯3: F was too low, G too high — the black key between." },
      { "q": "Mystery note 2 is…", "choices": ["A", "A♯ / B♭", "B"], "answer": 1, "explain": "B♭4: between A and B." }
    ]
  }
}
```

### Before the octave drill

The drill runs at your current octave rung — it may be an earlier one. Its **How to do it** box gives the method; for *find it* it's the search you just did: rough height, white keys, the black key between, then an octave jump (12 keys) to check.

```ladder
{ "skill": "octave", "unlocks": 8, "intro": "Opens \"Find it: black keys too\"; the drill runs at your current octave rung." }
```

## Between lessons

- **Finish the drone piece** if it didn't fit today; listen to it once with fresh ears and change one note that leans where you wanted rest.
- **Two Practice sessions of about 10 minutes.** Interval answers: group first, then detail. Octave searches: take your time, the search is the skill.
- **Ready?** Next week brings chords and a new ladder (roots). Your interval and octave bars don't need to be full — the Dashboard's *practise first* note is the only signal to slow down.
