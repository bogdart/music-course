---
id: w30-l4-reharmonise-three-ways-daw
title: Reharmonise a Pop Progression Three Ways
week: 30
order: 4
phase: p4
duration_min: 50
goals:
  - Keep a melody fixed and change the chords under it
  - Apply borrowed chords, a minor ii–V and jazz substitutions to I–V–vi–IV
  - Check every new chord against the melody note it supports
prerequisites: [w30-l3-tritone-substitution-and-passing-diminished, w24-l3-reharmonise-your-song-daw]
tags: [reharmonisation, daw, harmony]
---

# Reharmonise a Pop Progression Three Ways

[[reharmonisation]] means keeping the melody and changing what is underneath. You did it once in week 24; now you have a much bigger toolbox. The same hook can feel innocent, wistful or late-night-jazzy depending on the chords.

The golden rule: **every melody note on a strong beat must fit the new chord**, as a chord tone or a pleasant extension (9th, 13th). Check note by note.

## The original

An original 4-bar melody over the most common pop loop, I–V–vi–IV:

```example
{
  "title": "Original: C | G | Am | F",
  "bpm": 84, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "E4:h G4:q E4:q | D4:h. D4:q | C4:q E4:q A4:q G4:q | F4:h. r:q |" },
    { "instrument": "piano", "seq": "[C3 E3 G3]:w | [B2 D3 G3]:w | [A2 C3 E3]:w | [A2 C3 F3]:w |" }
  ],
  "show": ["staff"]
}
```

## Three reharmonisations

1. **Borrowed:** C | **B♭** | Am | **Fm6**. D is the 3rd of B♭ (♭VII); F is the root of Fm6 (the borrowed iv with a 6th). Instantly more wistful.
2. **A minor ii–V:** Cmaj7 | **Bm7♭5 E7** | Am7 | **Dm7 G7**. Bars 2–3 are the minor ii–V–i into Am from last week; the melody's D is the ♭3 of Bm7♭5 and the 7th of E7.
3. **Jazz subs:** Cmaj7 **C♯dim7** | Dm7 | Am7 | Dm7 **D♭7**. The melody's G and E belong to C♯dim7; the F in bar 4 is the 3rd of D♭7, which slides down to C.

```example
{
  "title": "Three versions back to back",
  "bpm": 84, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "E4:h G4:q E4:q | D4:h. D4:q | C4:q E4:q A4:q G4:q | F4:h. r:q | E4:h G4:q E4:q | D4:h. D4:q | C4:q E4:q A4:q G4:q | F4:h. r:q | E4:h G4:q E4:q | D4:h. D4:q | C4:q E4:q A4:q G4:q | F4:h. r:q |" },
    { "instrument": "epiano", "seq": "[C3 E3 G3]:w | [Bb2 D3 F3]:w | [A2 C3 E3]:w | [F2 D3 Ab3]:w | [C3 E3 B3]:w | [B2 D3 A3]:h [E2 D3 G#3]:h | [A2 C3 G3]:w | [D3 F3 C4]:h [G2 F3 B3]:h | [C3 E3 B3]:h [C#3 E3 Bb3]:h | [D3 F3 C4]:w | [A2 C3 G3]:w | [D3 F3 C4]:h [Db3 F3 B3]:h |" },
    { "instrument": "bass", "seq": "C2:w | Bb1:w | A1:w | F1:w | C2:w | B1:h E2:h | A1:w | D2:h G1:h | C2:h C#2:h | D2:w | A1:w | D2:h Db2:h |" }
  ],
  "show": ["pianoroll"]
}
```

## A method you can reuse

1. **Write down the melody's strong-beat notes** in each bar (here: E, D, C/A, F).
2. **List chords that contain that note**: in the key, borrowed, or dominant. The note D, for example, lives in B♭, Bm7♭5, Dm7, G7, E7 (as its 7th) and D7.
3. **Choose for the bass line.** Prefer candidates that make the bass move by step or by fourth; half-step motion (C–C♯–D, D–D♭–C) sounds the most sophisticated.
4. **Play it and trust your ear.** Theory tells you what *can* work; only listening tells you what *does*.

Don't reharmonise everything at once. One surprising chord per phrase usually beats four.

## Drills

```exercise
{
  "id": "e1-play-v2",
  "type": "play-melody",
  "title": "Play version 2 (left-hand shells)",
  "passScore": 0.7,
  "spec": { "bpm": 66, "timeSig": "4/4", "key": "C", "seq": "[C3 E3 B3]:w | [B2 D3 A3]:h [E2 D3 G#3]:h | [A2 C3 G3]:w | [D3 F3 C4]:h [G2 F3 B3]:h |", "showStaff": false, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "lead", "seq": "E4:h G4:q E4:q | D4:h. D4:q | C4:q E4:q A4:q G4:q | F4:h. r:q |" } }
}
```

```exercise
{
  "id": "e2-play-v3",
  "type": "play-melody",
  "title": "Play version 3",
  "passScore": 0.7,
  "spec": { "bpm": 66, "timeSig": "4/4", "key": "C", "seq": "[C3 E3 B3]:h [C#3 E3 Bb3]:h | [D3 F3 C4]:w | [A2 C3 G3]:w | [D3 F3 C4]:h [Db3 F3 B3]:h |", "showStaff": false, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "lead", "seq": "E4:h G4:q E4:q | D4:h. D4:q | C4:q E4:q A4:q G4:q | F4:h. r:q |" } }
}
```

```exercise
{
  "id": "e3-roman",
  "type": "roman-analysis",
  "title": "Label version 2",
  "instructions": "Key C. Name each chord with its roman numeral (secondary dominants written as V7/x).",
  "passScore": 0.7,
  "spec": { "key": "C", "chords": ["Cmaj7", "Bm7b5", "E7", "Am7", "Dm7", "G7"], "prompt": "symbols", "palette": "chromatic" }
}
```

## Make it

```exercise
{
  "id": "e4-daw-reharm",
  "type": "daw-task",
  "title": "Your three reharmonisations",
  "instructions": "The melody plays three times on the lead track (12 bars). On the epiano track, reharmonise each 4-bar pass differently: start from the three versions above, then change at least one chord per pass to your own idea. Add a bass track with the new roots. This can take two sessions; the project saves, so finish the third pass next time if you need to.",
  "spec": {
    "template": { "bpm": 84, "key": "C", "timeSig": "4/4", "tracks": [
      { "instrument": "lead", "seq": "E4:h G4:q E4:q | D4:h. D4:q | C4:q E4:q A4:q G4:q | F4:h. r:q | E4:h G4:q E4:q | D4:h. D4:q | C4:q E4:q A4:q G4:q | F4:h. r:q | E4:h G4:q E4:q | D4:h. D4:q | C4:q E4:q A4:q G4:q | F4:h. r:q |" },
      { "instrument": "epiano", "seq": "" }, { "instrument": "bass", "seq": "" } ] },
    "task": "Reharmonise the same 4-bar melody three different ways (borrowed / minor ii–V / jazz subs).",
    "checks": [
      { "kind": "has-tracks", "instruments": ["lead", "epiano", "bass"] },
      { "kind": "bars", "min": 12, "max": 12 },
      { "kind": "note-count", "min": 36, "track": 1 },
      { "kind": "note-count", "min": 12, "track": 2 },
      { "kind": "custom", "id": "melody-fits", "note": "Self-check: every melody note on beat 1 is a chord tone or a 9th/13th of your new chord." },
      { "kind": "custom", "id": "three-different", "note": "Self-check: each pass uses at least one chord the other passes don't." }
    ],
    "minBars": 12, "maxBars": 12
  }
}
```

```exercise
{
  "id": "e5-reflect",
  "type": "reflect",
  "title": "Which version would you use?",
  "spec": { "prompt": "Play all three passes. Which reharmonisation best suits a sad verse, a triumphant chorus, and a late-night jazz club? Explain with specific chords.", "minWords": 30 }
}
```

## Ear review

```ladder
{ "skill": "progressions", "unlocks": 19, "intro": "Progressions at your level, borrowed chords included." }
```

```ladder
{ "skill": "roots", "unlocks": 14, "intro": "Bass lines in a band: reharmonising is mostly choosing a new bass line; the drill runs at your current roots rung." }
```
