---
id: w50-l2-hook-song-finish
title: "Speed Song A, Session 2: Form, Groove and Finish"
week: 50
order: 2
phase: p5
duration_min: 50
goals:
  - Lay out a 48-bar form from a 16-bar core
  - Add drums, one extra layer for the choruses and a final cadence inside a timebox
  - Finish and bounce a 2-minute song without reopening session-1 decisions
prerequisites: [w50-l1-speed-song-from-a-hook]
tags: [songwriting, speed, form, arrangement, daw]
---

# Speed Song A, Session 2: Form, Groove and Finish

Session 1 gave you 16 bars. Today they become a song. At 96 BPM, 48 bars is exactly two minutes.

| Minutes | Stage | Decision |
|---|---|---|
| 0–4 | Warm-up | A short rhythm drill |
| 4–12 | Form | Intro 4, Verse 8, Chorus 8, Verse 8, Chorus 8, Bridge 4, Chorus 8 = 48 bars |
| 12–24 | Groove | Drums throughout; a fill into each new section |
| 24–32 | Layers | A pad or counter-line in the choruses only |
| 32–38 | Ending | A final cadence on A — bass and melody both land on home |
| 38–48 | Listen once | Note three fixes, and *don't make them today* |

The DAW timer covers minutes 4–38 (34 minutes).

Three rules of thumb for working fast — common pop habits, not laws, and not something every song you transcribed
followed: the intro is a subset of the chorus; verse 2 differs from verse 1 by one layer; the last chorus is the fullest
section. The bridge can simply drop the drums and hold the chords — contrast is enough.

```ladder
{"skill": "rhythm", "unlocks": 16, "intro": "A short rhythm warm-up at your own rung."}
```

```exercise
{
  "id": "w50l2-song",
  "type": "daw-task",
  "title": "Session 2: the finished 2-minute song",
  "spec": {
    "template": {
      "bpm": 96,
      "key": "A",
      "tracks": [
        {"instrument": "lead", "seq": ""},
        {"instrument": "piano", "seq": ""},
        {"instrument": "bass", "seq": ""},
        {"instrument": "drums", "seq": ""},
        {"instrument": "pad", "seq": ""}
      ]
    },
    "task": "Continue your song A project. Follow the timebox: lay out the 48-bar form, program drums with fills, add one layer in the choruses and end with a cadence on A. Stop when the 34-minute timer runs out and bounce what you have.",
    "checks": [
      {"kind": "has-tracks", "instruments": ["lead", "piano", "bass", "drums"]},
      {"kind": "bars", "min": 48, "max": 56},
      {"kind": "in-key", "key": "A", "scale": "major", "allowPassing": true, "track": 0},
      {"kind": "repetition", "motifBars": 2, "minRepeats": 3, "allowTransposed": false, "track": 0},
      {"kind": "ends-on", "degree": 1, "track": 0},
      {"kind": "ends-on", "degree": 1, "track": 2},
      {"kind": "drum-pattern", "requires": ["kick", "snare"], "track": 3},
      {"kind": "custom", "id": "w50-timebox-a2", "note": "Self-check: finished within the timebox."}
    ],
    "minBars": 48,
    "maxBars": 56,
    "projectRef": "w50-song-a",
    "timerMin": 34
  }
}
```

```exercise
{
  "id": "w50l2-retro",
  "type": "reflect",
  "title": "Three fixes, not today",
  "spec": {
    "prompt": "Listen to the whole song once. Write the three fixes you would make, and which of the two sessions produced more of the song you like. What made the difference?",
    "minWords": 40
  }
}
```
