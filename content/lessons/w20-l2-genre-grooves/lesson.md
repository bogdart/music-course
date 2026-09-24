---
id: w20-l2-genre-grooves
title: Genre Grooves
week: 20
order: 2
phase: p3
duration_min: 50
goals:
  - Recognise pop, rock, funk, house, trap and bossa nova grooves by their recipe
  - Understand half-time feel and why trap sounds slow at a fast tempo
  - Program a house and a trap groove from the recipe
prerequisites: [w20-l1-kick-snare-hat-vocabulary]
tags: [drums, groove, genre, rhythm, ear]
songs: []
---

# Genre Grooves

A genre's drum sound is a **recipe with four ingredients**: tempo, hat subdivision, where the kick goes, and where the snare goes. Change one and the genre changes. Listen to each loop, then read its recipe.

## Six recipes

**Rock** — 110–140 BPM. Eighth hats, kick on 1 and 3 (plus "3-and"), snare on 2 and 4. Straight and heavy.

```example
{ "title": "Rock, 120 BPM", "bpm": 120, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" } ], "show": ["pianoroll"], "loop": true }
```

**Pop** — 90–120 BPM. Like rock but the kick syncopates ("2-and") and a clap doubles the snare.

```example
{ "title": "Pop, 100 BPM", "bpm": 100, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare clap hihat]:8 [kick hihat]:8 hihat:8 hihat:8 [snare clap hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare clap hihat]:8 [kick hihat]:8 hihat:8 hihat:8 [snare clap hihat]:8 hihat:8" } ], "show": ["pianoroll"], "loop": true }
```

**Funk** — 90–110 BPM. 16th hats, kick on off-beat 16ths, snare 2 and 4 with ghost notes (set in the velocity lane).

```example
{ "title": "Funk, 100 BPM", "bpm": 100, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "drums", "seq": "[kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 | [kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16" } ], "show": ["pianoroll"], "loop": true }
```

**House / EDM** — 120–128 BPM. [[Four-on-the-floor]] kick, clap on 2 and 4, open hat on every off-beat "and".

```example
{ "title": "House, 124 BPM", "bpm": 124, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "drums", "seq": "kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8" } ], "show": ["pianoroll"], "loop": true }
```

**Trap** — 130–150 BPM in [[half-time]]: snare and clap only on beat 3, so it *feels* like 70 BPM. Fast 16th hats with 32nd-note rolls, sparse syncopated kicks (in a real track, a long 808 bass follows the kick).

```example
{ "title": "Trap, 140 BPM half-time", "bpm": 140, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "drums", "seq": "[kick hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 [clap snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 hihat:16 hihat:16 hihat:32 hihat:32 hihat:32 hihat:32 | [kick hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 [clap snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 hihat:16 hihat:16 hihat:32 hihat:32 hihat:32 hihat:32" } ], "show": ["pianoroll"], "loop": true }
```

**Bossa nova** — 120–140 BPM, felt in 2. Kick on 1, "2-and", 3, "4-and" (a heartbeat); eighth hats; a 2-bar cross-stick pattern played here on the snare.

```example
{ "title": "Bossa nova, 130 BPM", "bpm": 130, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "drums", "seq": "[kick hihat snare]:8 hihat:8 hihat:8 [kick hihat snare]:8 [kick hihat]:8 hihat:8 [hihat snare]:8 [kick hihat]:8 | [kick hihat]:8 hihat:8 [hihat snare]:8 [kick hihat]:8 [kick hihat]:8 [hihat snare]:8 hihat:8 [kick hihat]:8" } ], "show": ["pianoroll"], "loop": true }
```

## Half-time

Tempo is the speed of the beat, but *feel* comes from the snare. When the snare moves from 2-and-4 to only beat 3, the music seems to halve its speed while the hats keep running fast. Pop choruses use this for a "big, heavy" moment; trap uses it all the time.

```exercise
{
  "id": "genre-listen",
  "type": "listen",
  "title": "Name the recipe",
  "spec": {
    "example": { "bpm": 124, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "drums", "seq": "kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8" } ] },
    "questions": [
      { "q": "Where is the kick?", "choices": ["1 and 3", "Every beat", "Only beat 1", "Off-beats"], "answer": 1 },
      { "q": "Which genre recipe is this?", "choices": ["Rock", "Trap", "House", "Bossa nova"], "answer": 2 },
      { "q": "What plays on every off-beat 'and'?", "choices": ["Open hi-hat", "Snare", "Crash", "Nothing"], "answer": 0 }
    ]
  }
}
```

```exercise
{
  "id": "genre-quiz",
  "type": "quiz",
  "passScore": 0.8,
  "spec": { "questions": [
    { "q": "The snare only hits beat 3, hats run in 16ths, tempo 140. What is it?", "choices": ["House", "Trap (half-time)", "Rock", "Bossa nova"], "answer": 1 },
    { "q": "Which groove uses 16th hats and ghost notes around a 2-and-4 snare?", "choices": ["Funk", "House", "Trap", "Bossa nova"], "answer": 0 },
    { "q": "What makes half-time feel slower?", "choices": ["Lower BPM", "The snare moves to beat 3", "Fewer hi-hats", "A different key"], "answer": 1 },
    { "q": "Typical house tempo?", "choices": ["70-80", "90-100", "120-128", "160-180"], "answer": 2 }
  ] }
}
```

```exercise
{
  "id": "tap-bossa-kick",
  "type": "rhythm-tap",
  "title": "Tap the bossa kick (1, 2-and, 3, 4-and)",
  "passScore": 0.75,
  "spec": { "bpm": 110, "timeSig": "4/4", "seq": "x:q. x:8 x:q. x:8 | x:q. x:8 x:q. x:8", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "ear-rhythm-16-tap",
  "type": "ear-rhythm",
  "title": "Tap back 16th rhythms",
  "count": 8,
  "passScore": 0.7,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "16", "rests": true, "answer": "tap" }
}
```

```exercise
{
  "id": "daw-house",
  "type": "daw-task",
  "title": "Program a house groove with a bass",
  "spec": {
    "template": { "bpm": 124, "key": "Am", "tracks": [ { "instrument": "drums", "seq": "" }, { "instrument": "bass", "seq": "" } ] },
    "task": "4 bars of house: kick on every beat, clap plus snare on 2 and 4, open hat on every off-beat, closed 16th hats if you like. Add an off-beat bass (notes on the 'ands', between the kicks) on A for bars 1-2 and F for bars 3-4.",
    "checks": [
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "clap", "ohat"], "kickOnBeats": [1, 2, 3, 4], "snareOnBeats": [2, 4], "track": 0 },
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
  "id": "daw-trap",
  "type": "daw-task",
  "title": "Program a trap groove",
  "spec": {
    "template": { "bpm": 140, "key": "C", "tracks": [ { "instrument": "drums", "seq": "" } ] },
    "task": "4 bars of trap: snare+clap only on beat 3, 16th closed hats with at least two 32nd-note rolls, 2-3 syncopated kicks per bar, and no snare on 2 or 4.",
    "checks": [
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "kickOnBeats": [1], "snareOnBeats": [3], "track": 0 },
      { "kind": "uses-rhythm", "values": ["16", "32"], "minDistinct": 2, "track": 0 },
      { "kind": "note-count", "min": 70, "track": 0 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```
