---
id: w20-l3-drum-arrangement-with-fills-daw
title: Drum Arrangement with Fills
week: 20
order: 3
phase: p3
duration_min: 50
goals:
  - Write small and big fills that lead into the next phrase or section
  - Land a fill with kick and crash on the next beat 1
  - Arrange 8 bars of drums with a section change, then add a bass that follows it
prerequisites: [w20-l2-genre-grooves]
tags: [drums, fills, arrangement, daw, ear]
songs: []
---

# Drum Arrangement with Fills

A drum part is not one loop repeated — it is an **arrangement**: a verse groove, a bigger chorus groove, and [[fill]]s that stitch the sections together. A fill is a short break from the groove, usually snare and toms, in the last beat or two before something new.

## Five fill rules

1. **Where:** at the end of a phrase — the last beat of bar 4 (small fill), the last two beats (or the whole bar) of bar 8 before a new section (big fill).
2. **Size matches the change.** A small fill says "the phrase goes on", a big one says "new section".
3. **Land it.** The next bar's beat 1 gets kick + crash. A fill without a landing sounds like a mistake.
4. **Move down.** Snare hits, then tom hits: the tom sits lower than the snare, so the fill feels like falling into the next section. (Real kits have two or three toms and drummers roll from high to low; the app's kit has one tom, so snare → tom is our version.)
5. **Less is more.** If every bar has a fill, none of them mean anything.

Here are 8 bars: a verse groove on closed hats, a one-beat fill in bar 4, a chorus groove on the ride with a crash in bar 5, and a two-beat fill in bar 8 leading back to the top.

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

### Try it

1. Play the example and count bars out loud on every beat 1: "ONE two three four, TWO two three four…".
2. Listen for the moment the groove *stops* being a groove — that's the fill. Say the bar number.
3. Listen to the next beat 1: do you hear the crash splash together with the kick?

**Check:** a short burst at the end of bar 4, a longer one filling bar 8's second half; a crash on beat 1 of bar 5, and the bright ride from there on.

**If you can't hear it yet:** follow the piano roll while it plays — the fill is where the hat row goes empty and the snare and tom rows fill up. Then play it again with your eyes closed and point when it comes.

**Keep a groove library.** Save every groove you like as a named 2-bar clip ("pop verse 100", "chorus ride", "half-time bridge"). From now on, start songs by pulling grooves from the library instead of an empty grid.

```exercise
{
  "id": "fill-quiz-v2",
  "type": "quiz",
  "spec": { "questions": [
    { "q": "Where does a small fill usually go?", "choices": ["Beat 1 of bar 1", "The last beat of bar 4"], "answer": 1 },
    { "q": "What should happen on beat 1 right after a big fill?", "choices": ["Silence", "Kick + crash", "Only hi-hat"], "answer": 1 },
    { "q": "Why switch from closed hat to ride in the chorus?", "choices": ["To make the clock brighter and bigger", "To change the key", "To slow down"], "answer": 0 },
    { "q": "A fill in every bar makes the fills...", "choices": ["More exciting", "Mean nothing"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "listen-where-fill",
  "type": "listen",
  "title": "Where is the big fill?",
  "instructions": "Notation stays hidden. Count the bars (1 2 3 4 on each downbeat) as you listen.",
  "spec": {
    "example": { "hidden": true, "bpm": 96, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 snare:16 snare:16 snare:16 snare:16 tom:16 tom:16 tom:16 tom:16 | [kick crash]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 ride:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 ride:8 [snare ride]:8 ride:8" } ] },
    "questions": [
      { "q": "In which bar is the fill?", "choices": ["Bar 2", "Bar 4"], "answer": 1, "explain": "Bar 4, beats 3-4: four snare hits, then four tom hits, moving down." },
      { "q": "What changes after the fill?", "choices": ["The hats switch to the ride, with a crash on the landing", "Nothing changes"], "answer": 0 }
    ]
  }
}
```

```exercise
{
  "id": "tap-big-fill",
  "type": "rhythm-tap",
  "title": "Tap the big fill (and land on 1)",
  "spec": { "bpm": 90, "timeSig": "4/4", "seq": "x:8 x:8 x:8 x:8 x:16 x:16 x:16 x:16 x:16 x:16 x:16 x:16 | x:w", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

Review drills: the drum grid, then the bass under chords. Method for both (also in each drill's *How to do it* box): one thing per pass. For drums: snare, then kick, then hats. For the bass: ignore the chords, listen to the lowest sound, find its first note on the keyboard by searching up or down, then the next one.

```ladder
{ "skill": "rhythm", "unlocks": 14, "intro": "Review: fill in the drums you hear, at your current rung." }
```

```ladder
{ "skill": "roots", "unlocks": 13, "intro": "Review: play the bass notes of the chords — the part you are about to write." }
```

### Making the 8 bars

1. Pull a verse groove from week 14 or lesson 1 (or program one bar: kick 1 and 3, snare 2 and 4, eighth hats). Copy it to bars 1–4.
2. Copy bar 1 to bar 5, swap hats for ride, add a crash with the kick on beat 1. Copy to bars 5–8.
3. Only now write the fills: bar 4, beat 4 (two snares, two toms); bar 8, beats 3–4 (snares then toms).
4. Play from bar 3 to bar 6 on a loop — that's where the arrangement lives or dies.

**Judge it by ear:** close your eyes; does bar 5 feel like "a new room"? Does the fill make you expect something?

**If you're stuck:** if the fill sounds like a stumble, it's probably too busy — delete every second hit. If the landing is weak, check that beat 1 of the next bar has *both* kick and crash.

```exercise
{
  "id": "daw-drum-arrangement-v2",
  "type": "daw-task",
  "title": "8-bar arrangement with fills",
  "spec": {
    "template": { "bpm": 100, "key": "C", "tracks": [
      { "instrument": "drums", "seq": "" },
      { "instrument": "pad", "seq": "[C4 E4 G4]:w | [B3 D4 G4]:w | [A3 C4 E4]:w | [A3 C4 F4]:w | [C4 E4 G4]:w | [B3 D4 G4]:w | [A3 C4 E4]:w | [A3 C4 F4]:w" }
    ] },
    "task": "Bars 1-4: a verse groove on closed hats (snare on 2 and 4) with a small fill on beat 4 of bar 4. Bars 5-8: a chorus groove on the ride, kick + crash on beat 1 of bar 5, and a big fill (at least 2 beats, snare then toms) in bar 8. Tip: program one bar, copy it, then change only the fill bars. Save both grooves to your groove library.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat", "ride", "crash", "tom"], "snareOnBeats": [2, 4], "track": 0 },
      { "kind": "uses-rhythm", "values": ["8", "16"], "minDistinct": 2, "track": 0 },
      { "kind": "custom", "id": "fills-in-place", "note": "Self-check: fills only in bars 4 and 8, crash on beat 1 of bar 5." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "daw-add-bass-to-drums-v2",
  "type": "daw-task",
  "title": "Add a bass that follows the arrangement",
  "spec": {
    "template": { "bpm": 100, "key": "C", "tracks": [
      { "instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 snare:16 snare:16 tom:16 tom:16 | [kick crash]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 [kick ride]:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 [kick ride]:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 [kick ride]:8 [kick ride]:8 [snare ride]:8 ride:8 | [kick ride]:8 ride:8 [snare ride]:8 ride:8 snare:16 snare:16 snare:16 snare:16 tom:16 tom:16 tom:16 tom:16" },
      { "instrument": "pad", "seq": "[C4 E4 G4]:w | [B3 D4 G4]:w | [A3 C4 E4]:w | [A3 C4 F4]:w | [C4 E4 G4]:w | [B3 D4 G4]:w | [A3 C4 E4]:w | [A3 C4 F4]:w" },
      { "instrument": "bass", "seq": "" }
    ] },
    "task": "Write a bass for C - G - Am - F (twice), roots on beat 1 of every bar: half notes in bars 1-4, eighth notes that hit with the kick in bars 5-8. Rest during the last two beats of bar 8 so the big fill is heard alone.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "V", "vi", "IV"], "barsPerChord": 1, "minRatio": 1.0, "track": 2 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": true, "track": 2 },
      { "kind": "range", "low": "E1", "high": "C3", "track": 2 },
      { "kind": "custom", "id": "bass-rests-for-fill", "note": "Self-check: the bass is silent under the last two beats of bar 8." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

## Between lessons

In one song you like, count bars and mark where the fills fall (usually just before bar 1 of a new section). Save the two grooves you made today in your groove library.
