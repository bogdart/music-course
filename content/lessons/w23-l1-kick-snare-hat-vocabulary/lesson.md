---
id: w23-l1-kick-snare-hat-vocabulary
title: "Kick, Snare, Hat: The Drum Vocabulary"
week: 23
order: 1
phase: p3
duration_min: 45
goals:
  - Know the job of each drum-kit piece, including open hat, crash, ride and toms
  - Use velocity for accents and ghost notes, so a programmed beat stops sounding like a machine
  - Write down kick and snare you hear on a step grid, and find a low bass note on the keyboard
prerequisites: [w22-l3-three-bass-styles-daw]
tags: [drums, groove, rhythm, velocity, ear]
songs: []
---

# Kick, Snare, Hat: The Drum Vocabulary

In week 4 you programmed your first beat, and in week 17 your first rock and hip-hop grooves, all with kick, snare and closed hi-hat. This week you learn to *design* drum parts. First, the rest of the kit — each piece has one job:

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

### Try it

1. Play the example and tap the table with the example: only on the low **thud** (kick) in bars 1–2.
2. Replay. In bars 3–4 tap only on the **crack** (snare). Say "2" and "4" out loud as it hits.
3. Replay once more and listen to bars 5–6 only for the fast, quiet **tick** above everything (closed hats).

**Check:** the crack lands on "2" and "4" — never together with the thud. The ticks come twice per beat.

**If you can't hear it yet:** open the DAW, put only a kick on beat 1 and a snare on beat 2, and loop it. Play one, then the other, until "boom" and "crack" feel like two different words. The crack is higher and sharper; the thud you feel more than hear.

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

This lesson opens a rhythm rung that looks like the DAW: one row per drum, eight boxes per bar (one per eighth note, counted "1 & 2 & 3 & 4 &"). You hear a one-bar beat and tick the boxes where each drum hits.

### Try it: one drum per pass

Here is a practice bar — notation hidden. Draw eight boxes on paper and count "1 & 2 & 3 & 4 &" along.

```example
{
  "title": "Practice bar: kick and snare",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "drums", "seq": "kick:8 r:8 snare:8 kick:8 kick:8 r:8 snare:8 r:8" } ],
  "show": ["pianoroll"],
  "loop": true,
  "hidden": true
}
```

1. First pass: listen **only for the crack**. Mark the snare boxes (they are almost always 2 and 4).
2. Second pass: listen **only for the thud**. Beat 1 first, then ask of every "&": is there a thud here?
3. Reveal and compare.

**Check:** snare on 2 and 4; kicks on 1, the "&" of 2 and 3. The "&" kick is the one people miss — it sits right after the snare.

**If you can't hear it yet:** rebuild your guess in the DAW (one drum track, same boxes) and play it right after the example. Where they differ you'll hear a gap or an extra hit; fix one box at a time.

**Before the drill** — the method (also in the *How to do it* box next to the drill): one drum per pass, replay for each; snare first because its crack is easiest to place, then the kick, and (on later rungs) the hats last. If the drill is still on an earlier rhythm rung, its own box has the method for that one.

```ladder
{ "skill": "rhythm", "unlocks": 13, "intro": "Opens \"Drums: kick and snare\": two drum voices on a grid — fill in the kick and the snare you hear. The drill runs at your current rung." }
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

### Try it

1. Play the example and ignore kick and snare: follow only the hats.
2. In bars 1–2 every tick is the same; in bars 3–4 ask: does "1, 2, 3, 4" now tick louder than the "&"s?

**Check:** bars 3–4 sound like "TICK tick TICK tick" — a faint lean forward, not a big change.

**If you can't hear it yet:** exaggerate. In the DAW, set the off-beat hats to 20% and play: now the difference is obvious. Raise them step by step to 50% and stop when you still just hear the lean. That is the point where an accent works without sounding fake.

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

## The low end: find the bass note

The kick's thud and the bass's hum share the bottom of the mix, and last week you locked them together. The octave
strand now goes down there too: a very low bass note (octaves 1–2) plays, and you find it on your keyboard in any
octave. Honest expectation: notes this low sound more like a thump than a pitch, and your first guesses will often be a
fifth off.

**Try it:** play E1 (or the lowest E you have), then E2, then E3. **Check:** the higher ones make the note's
colour clearer; the lowest is mostly a thump. **If you can't hear it yet:** hold a key two octaves up while the low
note rings — the right one melts into it.

**Before the drill** (method also in the *How to do it* box): find the region with low keys, then match the colour an
octave or two higher, where it is clearer.

```ladder
{ "skill": "octave", "unlocks": 13, "intro": "Opens \"Find the bass note\": very low notes on a bass sound — find them on your keyboard, any octave. The drill runs at your current rung." }
```

## Between lessons

Pick any song you like and, for 30 seconds, tap only its snare; then play it again and tap only its kick. One drum per pass, as in the drill.
