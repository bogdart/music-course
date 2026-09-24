---
id: w20-l3-drum-arrangement-with-fills-daw
title: Drum Arrangement with Fills
week: 20
order: 3
phase: p3
duration_min: 50
goals:
  - Build a personal groove library of verse, chorus and half-time patterns
  - Write small and big fills that lead cleanly into the next section
  - Arrange 8 bars of drums with a section change, then add bass on top
prerequisites: [w20-l2-genre-grooves]
tags: [drums, fills, arrangement, daw, ear]
songs: []
---

# Drum Arrangement with Fills

A drum part is not one loop repeated — it is an **arrangement**: a verse groove, a stronger chorus groove, and [[fill]]s that stitch the sections together.

## Fill rules

1. **Where:** at the end of a phrase — last beat of bar 4 (small fill), last 2 beats or whole bar 8 before a new section (big fill).
2. **Size matches the change.** A small fill says "phrase continues", a big one says "new section".
3. **Land it.** The next bar's beat 1 gets kick + crash. A fill without a landing sounds like a mistake.
4. **Move down.** Snare → high tom → low tom feels like falling into the next section.
5. **Less is more.** If every bar has a fill, none of them mean anything.

Here are 8 bars: verse groove on hi-hats, a one-beat fill in bar 4, chorus groove on the ride with a crash in bar 5, and a two-beat fill in bar 8 leading back to the top.

```example
{
  "title": "8-bar drum arrangement: verse, small fill, chorus, big fill",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 snare:16 snare:16 tom:16 tom:16 | [kick crash]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 [kick ride]:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 [kick ride]:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 [kick ride]:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 snare:16 snare:16 snare:16 snare:16 tom:16 tom:16 tom:16 tom:16" },
    { "instrument": "pad", "seq": "[C4 E4 G4]:w | [B3 D4 G4]:w | [A3 C4 E4]:w | [A3 C4 F4]:w | [C4 E4 G4]:w | [B3 D4 G4]:w | [A3 C4 E4]:w | [A3 C4 F4]:w" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

## A groove library

Professionals keep a folder of grooves they like and start from it. Build yours: save each pattern as its own 2-bar clip with a clear name (e.g. "pop verse 100", "pop chorus ride", "halftime bridge"). From now on, every song starts by pulling grooves from this library instead of an empty grid.

```exercise
{
  "id": "fill-quiz",
  "type": "quiz",
  "passScore": 0.8,
  "spec": { "questions": [
    { "q": "Where does a small fill usually go?", "choices": ["Beat 1 of bar 1", "Last beat of bar 4", "Every bar", "Only in the intro"], "answer": 1 },
    { "q": "What should happen on beat 1 after a big fill?", "choices": ["Silence", "Kick + crash", "Only hi-hat", "A ghost note"], "answer": 1 },
    { "q": "Why switch from hi-hat to ride in the chorus?", "choices": ["To change the key", "To make the clock brighter and bigger", "To slow down", "Because hats are forbidden in choruses"], "answer": 1 },
    { "q": "A fill in every bar makes the fills...", "choices": ["More exciting", "Mean nothing", "Quieter", "Half-time"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "tap-big-fill",
  "type": "rhythm-tap",
  "title": "Tap the big fill (and land on 1)",
  "passScore": 0.75,
  "spec": { "bpm": 90, "timeSig": "4/4", "seq": "x:8 x:8 x:8 x:8 x:16 x:16 x:16 x:16 x:16 x:16 x:16 x:16 | x:w", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "ear-rhythm-fills",
  "type": "ear-rhythm",
  "title": "Which rhythm did you hear?",
  "count": 8,
  "passScore": 0.7,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "16", "rests": false, "answer": "choose" }
}
```

```exercise
{
  "id": "daw-groove-library",
  "type": "daw-task",
  "title": "Start your groove library",
  "spec": {
    "template": { "bpm": 100, "key": "C", "tracks": [ { "instrument": "drums", "seq": "" } ] },
    "task": "Program three 2-bar grooves one after another (6 bars): a verse groove on closed hats, a chorus groove on ride or open hats, and a half-time groove (snare on 3). Name each clip, then save the project as 'Groove library'.",
    "checks": [
      { "kind": "bars", "min": 6, "max": 6 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat", "ride"], "kickOnBeats": [1], "track": 0 },
      { "kind": "note-count", "min": 40, "track": 0 },
      { "kind": "custom", "id": "three-named-grooves", "note": "Self-check: three named 2-bar clips; the third has its snare on beat 3 only." }
    ],
    "minBars": 6, "maxBars": 6
  }
}
```

```exercise
{
  "id": "daw-drum-arrangement",
  "type": "daw-task",
  "title": "8-bar arrangement with fills",
  "spec": {
    "template": { "bpm": 100, "key": "C", "tracks": [
      { "instrument": "drums", "seq": "" },
      { "instrument": "pad", "seq": "[C4 E4 G4]:w | [B3 D4 G4]:w | [A3 C4 E4]:w | [A3 C4 F4]:w | [C4 E4 G4]:w | [B3 D4 G4]:w | [A3 C4 E4]:w | [A3 C4 F4]:w" }
    ] },
    "task": "Using grooves from your library: bars 1-4 verse groove with a small fill on beat 4 of bar 4; bars 5-8 chorus groove with a crash on bar 5 and a big fill (at least 2 beats, snare and toms) in bar 8.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat", "crash", "tom"], "snareOnBeats": [2, 4], "track": 0 },
      { "kind": "uses-rhythm", "values": ["8", "16"], "minDistinct": 2, "track": 0 },
      { "kind": "custom", "id": "fills-in-place", "note": "Self-check: fills only in bars 4 and 8, crash on beat 1 of bar 5." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "daw-add-bass-to-drums",
  "type": "daw-task",
  "title": "Add a bass that follows the arrangement",
  "spec": {
    "template": { "bpm": 100, "key": "C", "tracks": [
      { "instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 snare:16 snare:16 tom:16 tom:16 | [kick crash]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 [kick ride]:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 [kick ride]:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 [kick ride]:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 snare:16 snare:16 snare:16 snare:16 tom:16 tom:16 tom:16 tom:16" },
      { "instrument": "pad", "seq": "[C4 E4 G4]:w | [B3 D4 G4]:w | [A3 C4 E4]:w | [A3 C4 F4]:w | [C4 E4 G4]:w | [B3 D4 G4]:w | [A3 C4 E4]:w | [A3 C4 F4]:w" },
      { "instrument": "bass", "seq": "" }
    ] },
    "task": "Write a bass for C-G-Am-F (twice): half-note roots in bars 1-4, eighth notes locked to the kick in bars 5-8. Rest during the big fill's last two beats so the drums speak.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "V", "vi", "IV", "I", "V", "vi", "IV"], "barsPerChord": 1, "minRatio": 1.0, "track": 2 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": true, "track": 2 },
      { "kind": "range", "low": "E1", "high": "C3", "track": 2 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "ear-bass-d",
  "type": "ear-bass",
  "title": "Bass roots in D",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "D", "chords": ["I", "ii", "IV", "V", "vi"], "answer": "play" }
}
```
