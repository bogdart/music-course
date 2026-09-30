---
id: w50-l4-beat-song-finish
title: "Speed Song B, Session 2: Form by Layers"
week: 50
order: 4
phase: p5
duration_min: 50
goals:
  - Build a 2-minute form by muting and adding layers instead of writing new material
  - Add fills, a crash or riser at section changes, and a clean ending
  - Compare hook-first and beat-first writing for your own final project
prerequisites: [w50-l3-speed-song-from-a-beat]
tags: [songwriting, speed, arrangement, layers, daw]
---

# Speed Song B, Session 2: Form by Layers

Today's big idea: [[form by layers]]. The seed never changes; the song moves because layers come and go — exactly what
you heard in *Get Lucky* and *Seven Nation Army*.

| Minutes | Stage | Decision |
|---|---|---|
| 0–14 | Form by layers | Intro (drums only) 4 · Verse (drums + bass + keys) 8 · Chorus (everything + hook) 8 · Verse 8 · Chorus 8 · Breakdown (no drums) 8 · Chorus 8 = 52 bars ≈ 2 minutes |
| 14–26 | Ear candy | A fill at every section change, a crash on the next downbeat |
| 26–34 | Ending | A final hit on E minor — then silence |
| 34–40 | Ladder | Progressions at your rung |
| 40–50 | Listen once | Three fixes noted, not made; hook-first vs beat-first |

The DAW timer covers minutes 0–34.

Mute and unmute; copy and paste. If you catch yourself writing new chords, stop: that's session-1 work.

1. **Lay out 52 bars.** Copy the 2-bar groove across the whole song first, all tracks. Then *delete* per the table:
   intro keeps only drums, verses lose the lead and pad, the breakdown loses the drums. Check: play from bar 1 —
   each section should sound like it adds or removes something. If two neighbours sound the same, mute one more
   track in the quieter one.
2. **Fills.** In the last bar before each chorus, replace beat 4 with four snare 16ths; put a `crash` on the chorus
   downbeat. Check: loop 2 bars across the change; the chorus should land like a door opening. Too much? Keep the
   crash, drop the fill.
3. **Breakdown.** Keep bass, keys and pad; bring the drums back with a fill in its last bar. Check: the final chorus
   should feel bigger than the first one although nothing new was written — that is form by layers.
4. **Ending.** Last bar: one hit of E minor on every track (bass on E) on beat 1, then silence. Check: no track keeps
   playing after it.

**Stuck?** Compare with song A: play its section changes and copy what worked there.

## Ear: progressions

Bass first: find each chord's lowest note on the keyboard, then decide its colour (play major and minor on that root
and compare). The *How to do it* box under the drill shows the exact method for your current rung.

```exercise
{
  "id": "w50l4-song",
  "type": "daw-task",
  "title": "Session 2: the finished beat-first song",
  "spec": {
    "template": {
      "bpm": 104,
      "key": "Em",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:16 hihat:16 hihat:16 kick:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 kick:16 hihat:16 [snare hihat]:16 hihat:16 hihat:16 ohat:16 | [kick hihat]:16 hihat:16 hihat:16 kick:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 kick:16 hihat:16 [snare hihat]:16 hihat:16 hihat:16 ohat:16"},
        {"instrument": "bass", "seq": "E2:8 r:16 E2:16 r:8 E2:8 r:8 G2:8 A2:8 B2:8 | E2:8 r:16 E2:16 r:8 E2:8 r:8 D3:8 B2:8 G2:8"},
        {"instrument": "epiano", "seq": ""},
        {"instrument": "lead", "seq": ""},
        {"instrument": "pad", "seq": ""}
      ]
    },
    "task": "Continue your song B project. Build the 52-bar form by muting and adding layers, add fills and crashes at section changes, and end on E minor. Stop when the 34-minute timer runs out and bounce.",
    "checks": [
      {"kind": "has-tracks", "instruments": ["drums", "bass", "epiano", "lead"]},
      {"kind": "bars", "min": 52, "max": 60},
      {"kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "snareOnBeats": [2, 4], "track": 0},
      {"kind": "in-key", "key": "E", "scale": "natural-minor", "allowPassing": true, "track": 3},
      {"kind": "repetition", "motifBars": 2, "minRepeats": 3, "allowTransposed": false, "track": 3},
      {"kind": "ends-on", "degree": 1, "track": 1},
      {"kind": "custom", "id": "w50-timebox-b2", "note": "Self-check: finished within the timebox."}
    ],
    "minBars": 52,
    "maxBars": 60,
    "projectRef": "w50-song-b",
    "timerMin": 34
  }
}
```

```ladder
{"skill": "progressions", "unlocks": 20, "intro": "Progressions at your own rung."}
```

```exercise
{
  "id": "w50l4-retro",
  "type": "reflect",
  "title": "Hook-first or beat-first?",
  "spec": {
    "prompt": "Compare the two songs: which starting point was faster for you, which stage was hardest, and did building the form by layers feel like cheating or like freedom? Which starting point (hook, beat, or the chords-first method from week 25) will you use for your final project next week, and why?",
    "minWords": 50
  }
}
```

## Between lessons

Play both songs back to back once. Decide your starting point for the final project (hook, beat or chords) and collect three candidate seeds for it.
