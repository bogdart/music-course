---
id: w23-l2-genre-grooves
title: Genre Grooves and Half-Time
week: 23
order: 2
phase: p3
duration_min: 50
goals:
  - Describe a groove by its recipe - tempo, hat grid, kick places, snare places
  - Understand half-time - the snare moves to beat 3, so the music feels slower at the same tempo
  - Program a house groove and a half-time trap groove
prerequisites: [w23-l1-kick-snare-hat-vocabulary]
tags: [drums, groove, genre, rhythm, ear]
songs: []
---

# Genre Grooves and Half-Time

A genre's drum sound is a **recipe with four ingredients**: the tempo, the hat grid (8ths or 16ths), where the kick goes and where the snare goes. Change one ingredient and the style changes. Today: rock again (from week 17), one new recipe — house — and one new idea — half-time.

## Rock again, and a new one: house

**Rock** — 110–140 BPM. Eighth hats, kick on 1 and 3 (plus the "and" of 3), snare on 2 and 4.

```example
{ "title": "Rock, 120 BPM", "bpm": 120, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" } ], "show": ["pianoroll"], "loop": true }
```

**House** (new) — 120–128 BPM, the steady beat of dance music. [[Four-on-the-floor]] kick (every beat), clap on 2 and 4, open hat on every off-beat "and".

```example
{ "title": "House, 124 BPM", "bpm": 124, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "drums", "seq": "kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8" } ], "show": ["pianoroll"], "loop": true }
```

## Half-time

We nod along to the snare more than to anything else. Now move the snare from beats 2 and 4 to **beat 3 only** (it takes the place of the kick there, so the kick stays on beat 1 alone), keeping the tempo and the hats exactly the same. There is now one snare per bar instead of two, so the music feels *half as fast* although nothing got slower. That is [[half-time]].

Listen: bars 1–2 are a normal beat, bars 3–4 the same beat in half-time, same tempo. Honest expectation: at first you may hear bars 3–4 as "emptier" rather than "slower". Nod your head only on the snare — in bars 3–4 you nod half as often. That is the feel.

```example
{ "title": "Normal (bars 1-2), then half-time (bars 3-4), 120 BPM", "bpm": 120, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 hihat:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 hihat:8 | [kick hihat]:8 hihat:8 hihat:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 hihat:8" } ], "show": ["pianoroll"], "loop": false }
```

**Trap** is built on half-time: 130–150 BPM, snare and clap only on beat 3, busy 16th hats, a few syncopated kicks (in a real track a long, deep "808" bass note follows each kick). Fast hats plus a slow snare — that contrast *is* the trap sound. Pop songs borrow half-time for a heavy chorus or bridge.

```example
{ "title": "Trap, 140 BPM, half-time", "bpm": 140, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "drums", "seq": "[kick hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 [clap snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 | [kick hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 [clap snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16" } ], "show": ["pianoroll"], "loop": true }
```

### Try it: read a groove in three questions

Use this on the loops below, and later on any song:

1. **Count the cracks per bar.** Count "1 2 3 4" along and raise a finger on each snare/clap. Two per bar (on 2 and 4) = normal feel; one (on 3) = half-time.
2. **Is there a thud on every beat?** Tap your foot with the kick. If your foot never stops — 1, 2, 3, 4 — it's four-on-the-floor (house).
3. **How fast are the ticks?** Two per beat = 8ths; four per beat, a blur = 16ths.

**Check:** on the trap example you should count one crack per bar, a blur of ticks, and an uneven, stop-start kick.

**If you can't hear it yet:** play the "Normal, then half-time" example and tap the table on every crack. In bars 3–4 your hand waits twice as long between taps — that waiting *is* half-time, even if the loop just sounds "emptier".

```exercise
{
  "id": "genre-listen-hidden",
  "type": "listen",
  "title": "Which recipe?",
  "instructions": "Listen to each loop (the notation stays hidden), answer, then compare with the recipes above.",
  "spec": {
    "examples": [
      { "title": "Loop A", "hidden": true, "bpm": 124, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "drums", "seq": "kick:8 hihat:8 [kick clap]:8 ohat:8 kick:8 hihat:8 [kick clap]:8 ohat:8 | kick:8 hihat:8 [kick clap]:8 ohat:8 kick:8 hihat:8 [kick clap]:8 ohat:8" } ] },
      { "title": "Loop B", "hidden": true, "bpm": 116, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 hihat:8 hihat:8 | [kick hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 hihat:8 hihat:8" } ] },
      { "title": "Loop C", "hidden": true, "bpm": 116, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 hihat:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 hihat:8 hihat:8 [snare hihat]:8 hihat:8" } ] }
    ],
    "questions": [
      { "q": "Loop A: rock or house?", "choices": ["Rock", "House"], "answer": 1, "explain": "A kick on every beat (four-on-the-floor) and a clap on 2 and 4: house." },
      { "q": "Loop B: normal feel or half-time?", "choices": ["Normal", "Half-time"], "answer": 1, "explain": "One snare per bar, on beat 3: half-time." },
      { "q": "Loop C: normal feel or half-time?", "choices": ["Normal", "Half-time"], "answer": 0, "explain": "Snare on 2 and 4 — two per bar. Same tempo as B, but it feels twice as fast." }
    ]
  }
}
```

```exercise
{
  "id": "genre-quiz-v2",
  "type": "quiz",
  "spec": { "questions": [
    { "q": "Name the four ingredients of a groove recipe.", "choices": ["Tempo, hat grid, kick places, snare places", "Key, chords, melody, bass", "Volume, pan, reverb, tempo"], "answer": 0 },
    { "q": "What makes half-time feel slower?", "choices": ["A lower BPM", "The snare moves to beat 3 only", "Fewer hi-hats"], "answer": 1 },
    { "q": "Snare only on beat 3, fast 16th hats, 140 BPM. What is it?", "choices": ["House", "Trap"], "answer": 1 },
    { "q": "Typical house tempo?", "choices": ["70-80", "120-128", "160-180"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "tap-halftime",
  "type": "rhythm-tap",
  "title": "Tap a half-time kick and snare",
  "instructions": "Kick on 1 and on the 'and' of 2, snare on 3 (held).",
  "spec": { "bpm": 80, "timeSig": "4/4", "seq": "kick:q r:8 kick:8 snare:h | kick:q r:8 kick:8 snare:h", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

This lesson opens the grid rung with a third voice: the hi-hat, the high "tss" that ticks through the bar.

**Before the drill** — the method (also in the *How to do it* box next to the drill): three passes, one drum each — snare (crack), then kick (thud), then hats (tick) — and replay for every pass. Hats are usually regular, so after two boxes you can often guess the rest, then check on the next replay. If the drill is still on an earlier rhythm rung, its own box has the method for that one.

```ladder
{ "skill": "rhythm", "unlocks": 14, "intro": "Opens \"Drums: kick, snare, hi-hat\": the hi-hat joins the grid. The drill runs at your current rung." }
```

```exercise
{
  "id": "daw-house-v2",
  "type": "daw-task",
  "title": "Program a house groove with a bass",
  "spec": {
    "template": { "bpm": 124, "key": "Am", "tracks": [ { "instrument": "drums", "seq": "" }, { "instrument": "bass", "seq": "" } ] },
    "task": "4 bars of house: kick on every beat, clap on 2 and 4 (add a snare under it if you like), open hat on every off-beat 'and'. Add a bass that plays only on the 'ands' (between the kicks): A for bars 1-2, F for bars 3-4.",
    "checks": [
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "drum-pattern", "requires": ["kick", "clap", "ohat"], "kickOnBeats": [1, 2, 3, 4], "clapOn": [2, 4], "on": { "ohat": "offbeats" }, "track": 0 },
      { "kind": "in-key", "key": "A", "scale": "natural-minor", "track": 1 },
      { "kind": "note-count", "min": 16, "track": 1 },
      { "kind": "has-tracks", "instruments": ["drums", "bass"] }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

```exercise
{
  "id": "daw-trap-v2",
  "type": "daw-task",
  "title": "Program a half-time trap groove",
  "spec": {
    "template": { "bpm": 140, "key": "C", "tracks": [ { "instrument": "drums", "seq": "" } ] },
    "task": "4 bars of trap: snare and clap on beat 3 only (nothing on 2 or 4), closed hats on every 16th, and 2-3 kicks per bar, one of them on beat 1 and at least one off the beat. Play it and nod on the snare: does it feel like about 70 BPM? If it feels busy instead of heavy, remove kicks until each bar has only 2-3; if it feels fast, check that nothing is left on beats 2 and 4.",
    "checks": [
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "kickOnBeats": [1], "snareOnBeats": [3], "hatOn": "16", "forbid": { "snare": [2, 4] }, "track": 0 },
      { "kind": "note-count", "min": 70, "track": 0 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

## Between lessons

Run the three questions (cracks per bar, thud on every beat, how fast the ticks) on two songs from different genres. Write down each recipe in one line.
