---
id: w20-l1-kick-snare-hat-vocabulary
title: "Kick, Snare, Hat: The Drum Vocabulary"
week: 20
order: 1
phase: p3
duration_min: 45
goals:
  - Know the job of each drum-kit piece, including open hat, crash, ride and toms
  - Use velocity for accents and ghost notes, so a programmed beat stops sounding like a machine
  - Write down kick and snare you hear on a step grid
prerequisites: [w19-l3-three-bass-styles-daw]
tags: [drums, groove, rhythm, velocity, ear]
songs: []
---

# Kick, Snare, Hat: The Drum Vocabulary

In week 14 you programmed your first beats with kick, snare and closed hi-hat. This week you learn to *design* drum parts. First, the rest of the kit — each piece has one job:

| Piece | Job | Typical place |
|---|---|---|
| **Kick** | The feet: weight and push | Beat 1, often 3, plus syncopated hits |
| **Snare / clap** | The [[backbeat]] you nod to | Beats 2 and 4 |
| **Closed hi-hat** | The clock: shows the subdivision | Every 8th or 16th |
| **Open hi-hat** | A longer "tsss" — a lift or breath out | An off-beat, often at the end of a bar |
| **Crash** | "A new section starts now!" | Beat 1 of a section |
| **Ride** | A brighter, ringing clock for big sections | Quarters or 8ths instead of the hat |
| **Toms** | Pitched drums, used for [[fill]]s | End of a phrase (lesson 3) |

Listen to a beat assembled piece by piece, two bars per layer: kick alone; + snare; + closed hats; then a syncopated kick, an open hat at the end of each bar and a crash on the first beat. Watch the piano roll: each drum has its own row.

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

```exercise
{
  "id": "drum-roles-quiz-v2",
  "type": "quiz",
  "spec": { "questions": [
    { "q": "Which piece usually marks the first beat of a new section?", "choices": ["Closed hi-hat", "Crash"], "answer": 1, "explain": "The crash is a signpost: 'new section starts here'." },
    { "q": "Where is the backbeat in 4/4?", "choices": ["1 and 3", "2 and 4"], "answer": 1 },
    { "q": "Which piece shows the subdivision (8ths or 16ths)?", "choices": ["Hi-hat", "Kick", "Crash"], "answer": 0 },
    { "q": "The ride is used instead of the closed hat to make a section sound...", "choices": ["Smaller and darker", "Bigger and brighter", "Slower"], "answer": 1 }
  ] }
}
```

## Hearing drums on a grid

This lesson opens a rhythm rung that looks like the DAW (the drill runs at your current rhythm rung, so you may meet it later): one row per drum, eight boxes per bar (one per eighth note, counted "1 & 2 & 3 & 4 &"). You hear a one-bar beat twice and tick the boxes where each drum hits. Tell them apart by sound: the **kick** is a low thud, the **snare** a sharp crack. Start with the snare — its crack is the easiest to place — then fill in the kicks. In the example above, bars 3–4 are exactly this: kick on 1 and 3, snare on 2 and 4.

```ladder
{ "skill": "rhythm", "unlocks": 13, "intro": "Opens: two drum voices on a grid — fill in the kick and the snare you hear. The drill runs at your current rhythm rung." }
```

## Velocity: where the groove lives

A drummer never hits every note equally hard. In the DAW, [[velocity]] is how hard a note is struck; you set it in the **velocity lane** under the piano roll (taller bar = louder). Two uses:

- **[[Accent]]s** — the hats *on* the beat slightly louder than the hats *between* beats. The beat then seems to lean forward.
- **[[Ghost note]]s** — very soft snare hits (velocity about 15–30%) between the backbeats.

Honest expectation: these are small differences. Below, the same bar plays flat and then with accented on-beat hats and snares. The change is subtle — listen only to the hats. Ghost notes are even quieter; at first you may notice them only by muting them and hearing the groove get stiffer. Small random differences on top ([[humanising]]) make programmed drums sound played.

```example
{
  "title": "Flat (bars 1-2), then accented (bars 3-4)",
  "bpm": 92, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | >[kick hihat]:8 hihat:8 >[snare hihat]:8 hihat:8 >[kick hihat]:8 hihat:8 >[snare hihat]:8 hihat:8 | >[kick hihat]:8 hihat:8 >[snare hihat]:8 hihat:8 >[kick hihat]:8 hihat:8 >[snare hihat]:8 hihat:8" }
  ],
  "show": ["pianoroll"],
  "loop": false
}
```

Rule of thumb: backbeat 100%, kick 90%, on-beat hats 70%, off-beat hats 50%, ghost notes 20%.

```exercise
{
  "id": "tap-kick-pattern",
  "type": "rhythm-tap",
  "title": "Tap the syncopated kick",
  "spec": { "bpm": 90, "timeSig": "4/4", "seq": "x:q r:8 x:8 r:8 x:8 x:q | x:q r:8 x:8 r:8 x:8 x:q", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "daw-build-layers-v2",
  "type": "daw-task",
  "title": "Build a beat in layers",
  "spec": {
    "template": { "bpm": 96, "key": "C", "tracks": [ { "instrument": "drums", "seq": "" } ] },
    "task": "Build a 4-bar beat, one layer at a time, listening after each: kick on 1 and 3 plus one syncopated kick per bar; snare on 2 and 4; closed hats on every eighth; an open hat on the last eighth of bar 4; a crash with the kick on beat 1 of bar 1. Then, in the velocity lane, make the on-beat hats taller than the off-beat hats.",
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
  "id": "daw-ghost-notes-v2",
  "type": "daw-task",
  "title": "Make it breathe: ghost notes",
  "spec": {
    "template": { "bpm": 94, "key": "C", "tracks": [ { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 [snare hihat]:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 [snare hihat]:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 [snare hihat]:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 [snare hihat]:8" } ] },
    "task": "Every hit here has the same velocity, so the extra snares on the 'ands' sound like a stumble. Keep the snares on beats 2 and 4 at full velocity and turn the other snares into ghost notes (about 20%). Accent the hats on the beat, soften the rest, and nudge a few velocities so no two are identical. Play before and after: even if the change is subtle, which one sounds more like a person?",
    "checks": [
      { "kind": "bars", "min": 2, "max": 2 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "snareOnBeats": [2, 4], "track": 0 },
      { "kind": "custom", "id": "ghost-velocities", "note": "Self-check: backbeat snares loud, the other snares at roughly 15-30% velocity, hats accented on the beat." }
    ],
    "minBars": 2, "maxBars": 2
  }
}
```
