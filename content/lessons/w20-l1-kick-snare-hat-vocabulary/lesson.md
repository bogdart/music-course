---
id: w20-l1-kick-snare-hat-vocabulary
title: "Kick, Snare, Hat: The Drum Vocabulary"
week: 20
order: 1
phase: p3
duration_min: 45
goals:
  - Know the job of each drum-kit piece and build a beat layer by layer
  - Use velocity to create accents, ghost notes and a human feel
  - Hear and tap back rhythms with 16th notes
prerequisites: [w19-l3-three-bass-styles-daw]
tags: [drums, groove, rhythm, velocity, ear]
songs: []
---

# Kick, Snare, Hat: The Drum Vocabulary

In week 14 you programmed your first beats. This week you learn to *design* them. Every beat is made from a handful of words, each with one job:

| Piece | Job | Typical place |
|---|---|---|
| **Kick** | The feet: weight and push | Beat 1, often 3, syncopations that lock with bass |
| **Snare / clap** | The [[backbeat]]: the "hit" you nod to | Beats 2 and 4 (beat 3 in [[half-time]]) |
| **Closed hi-hat** | The clock: shows the subdivision | Every 8th or 16th |
| **Open hi-hat** | A lift or accent, like a breath out | Off-beats, end of a bar |
| **Crash** | "New section starts now!" | Beat 1 of a section |
| **Ride** | A brighter clock for big choruses or jazz | Quarters or 8ths |
| **Toms** | Melodic drums for [[fill]]s | End of a phrase |

Listen to a beat assembled word by word — two bars per layer: kick, + snare, + hats, then a syncopated kick, open hat and crash.

```example
{
  "title": "Building a beat, two bars per layer",
  "bpm": 96, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "drums", "seq": "kick:q r:q kick:q r:q | kick:q r:q kick:q r:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 ohat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 ohat:8" }
  ],
  "show": ["pianoroll"],
  "loop": false
}
```

## Velocity: where the groove lives

A drummer never hits every note equally. [[Velocity]] (how hard a note is struck) turns a stiff pattern into a groove:

- **Accents** — hats on the beat slightly louder than hats off the beat.
- **[[Ghost note]]s** — very soft snare hits (velocity 15–30%) between the backbeats. Felt more than heard.
- **[[Humanising]]** — small random differences (±5–10%) so no two hits are identical.

The snippet language has no velocity, so you edit it in the DAW's **velocity lane** under the piano roll. Rule of thumb: backbeat 100%, kick 90%, on-beat hats 70%, off-beat hats 50%, ghost notes 20%.

```exercise
{
  "id": "drum-roles-quiz",
  "type": "quiz",
  "passScore": 0.8,
  "spec": { "questions": [
    { "q": "Which piece usually marks the first beat of a new section?", "choices": ["Closed hi-hat", "Crash", "Ghost snare", "Kick on beat 3"], "answer": 1 },
    { "q": "Where is the backbeat in 4/4?", "choices": ["1 and 3", "2 and 4", "Every eighth", "Only beat 1"], "answer": 1 },
    { "q": "A ghost note should be...", "choices": ["Louder than the backbeat", "Very soft", "Always on the kick", "Played on the crash"], "answer": 1 },
    { "q": "Which piece shows the subdivision (8ths or 16ths)?", "choices": ["Hi-hat", "Crash", "Kick", "Tom"], "answer": 0 },
    { "q": "What does humanising change?", "choices": ["The key", "Small variations of velocity and timing", "The time signature", "The instrument"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "tap-kick-pattern",
  "type": "rhythm-tap",
  "title": "Tap the syncopated kick",
  "passScore": 0.75,
  "spec": { "bpm": 90, "timeSig": "4/4", "seq": "x:q r:8 x:8 r:8 x:8 x:q | x:q r:8 x:8 r:8 x:8 x:q", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "ear-rhythm-16",
  "type": "ear-rhythm",
  "title": "16th-note rhythms",
  "count": 8,
  "passScore": 0.7,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "16", "rests": true, "answer": "choose" }
}
```

```exercise
{
  "id": "daw-build-layers",
  "type": "daw-task",
  "title": "Build a beat in layers",
  "spec": {
    "template": { "bpm": 96, "key": "C", "tracks": [ { "instrument": "drums", "seq": "" } ] },
    "task": "Build a 4-bar beat: kick on 1 and 3 plus one syncopated kick, snare on 2 and 4, eighth closed hats, one open hat at the end of bar 4 and a crash on bar 1. Then set velocities: on-beat hats louder than off-beat hats.",
    "checks": [
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat", "ohat", "crash"], "kickOnBeats": [1, 3], "snareOnBeats": [2, 4], "track": 0 },
      { "kind": "note-count", "min": 50, "max": 80, "track": 0 },
      { "kind": "custom", "id": "hat-accents", "note": "Self-check in the velocity lane: on-beat hats are visibly taller than off-beat hats." }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

```exercise
{
  "id": "daw-ghost-notes",
  "type": "daw-task",
  "title": "Make it breathe: ghost notes and humanising",
  "spec": {
    "template": { "bpm": 94, "key": "C", "tracks": [ { "instrument": "drums", "seq": "[kick hihat]:16 hihat:16 hihat:16 [snare hihat]:16 [snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 hihat:16 [snare hihat]:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 hihat:16 [snare hihat]:16 | [kick hihat]:16 hihat:16 hihat:16 [snare hihat]:16 [snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 hihat:16 [snare hihat]:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 hihat:16 [snare hihat]:16" } ] },
    "task": "This 16th groove sounds like a machine gun because every hit has the same velocity. Keep the snares on 2 and 4 at full velocity and turn all other snare hits into ghost notes (about 20%). Accent the hats on each beat, soften the rest, and nudge every velocity slightly so no two are equal. Compare before and after.",
    "checks": [
      { "kind": "bars", "min": 2, "max": 2 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "snareOnBeats": [2, 4], "track": 0 },
      { "kind": "note-count", "min": 50, "track": 0 },
      { "kind": "custom", "id": "ghost-velocities", "note": "Self-check: backbeat snares loud, the other snares at roughly 15-30% velocity, hats accented on the beat." }
    ],
    "minBars": 2, "maxBars": 2
  }
}
```

```exercise
{
  "id": "ear-melody-d",
  "type": "ear-melody",
  "title": "Melodic dictation in D",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "D", "degrees": [1, 2, 3, 4, 5, 6, 7], "length": 6, "rhythm": "simple", "answer": "degrees" }
}
```
