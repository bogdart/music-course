---
id: w30-l3-reharmonise-three-ways-daw
title: Reharmonise a Pop Progression Three Ways
week: 30
order: 3
phase: p4
duration_min: 50
goals:
  - Keep a melody fixed and change the chords under it
  - Apply borrowed chords, secondary dominants and tritone/diminished subs to I–V–vi–IV
  - Check every new chord against the melody note it supports
prerequisites: [w30-l2-tritone-substitution-and-passing-diminished, w24-l3-reharmonise-your-song-daw]
tags: [reharmonisation, daw, harmony]
---

# Reharmonise a Pop Progression Three Ways

[[reharmonisation]] means keeping the melody and changing what's underneath. It is one of the most useful skills a songwriter can have: the same hook can feel innocent, bittersweet or sophisticated depending on the chords.

The golden rule: **every melody note on a strong beat must fit the new chord** (be a chord tone or a pleasing extension). Check note by note.

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

1. **Borrowed:** C | **Bb** | Am | **Fm6**. D is the 3rd of Bb; F is the root of Fm6. Instantly more wistful.
2. **Secondary dominants & ii–V:** Cmaj7 | **Bm7b5 E7** | Am7 | **Dm7 G7**. The E7 is V7 of Am (Phase 3!), and the melody's D is its 7th.
3. **Jazz subs:** Cmaj7 **C#dim7** | Dm7 | Am7 | Dm7 **Db7**. The melody's E and G belong to C#dim7; F is the 3rd of Db7, which slides back to C.

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

1. **Write the melody's strong-beat notes** under each bar (here: E, D, C/A, F).
2. **List every chord that contains that note** — in key, borrowed, or dominant. The note D, for example, lives in Bb, Bm7b5, Dm7, G7, E7 (as its 7th) and D7.
3. **Choose for the bass line.** Pick candidates that make the bass move by step or by fourth; half-step motion (C–C#–D, D–Db–C) sounds most sophisticated.
4. **Play it and trust your ear.** Theory tells you what *can* work; only listening tells you what *does*.

Don't reharmonise everything at once. One surprising chord per phrase usually beats four.

## Drills

```exercise
{
  "id": "e1-play-v2",
  "type": "play-melody",
  "title": "Play version 2 (left-hand shells)",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 66, "timeSig": "4/4", "key": "C", "seq": "[C3 E3 B3]:w | [B2 D3 A3]:h [E2 D3 G#3]:h | [A2 C3 G3]:w | [D3 F3 C4]:h [G2 F3 B3]:h |", "showStaff": false, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "lead", "seq": "E4:h G4:q E4:q | D4:h. D4:q | C4:q E4:q A4:q G4:q | F4:h. r:q |" } }
}
```

```exercise
{
  "id": "e2-play-v3",
  "type": "play-melody",
  "title": "Play version 3",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 66, "timeSig": "4/4", "key": "C", "seq": "[C3 E3 B3]:h [C#3 E3 Bb3]:h | [D3 F3 C4]:w | [A2 C3 G3]:w | [D3 F3 C4]:h [Db3 F3 B3]:h |", "showStaff": false, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "lead", "seq": "E4:h G4:q E4:q | D4:h. D4:q | C4:q E4:q A4:q G4:q | F4:h. r:q |" } }
}
```

```exercise
{
  "id": "e3-roman",
  "type": "roman-analysis",
  "title": "Label version 2",
  "count": 6, "passScore": 0.7,
  "spec": { "key": "C", "chords": ["Cmaj7", "Bm7b5", "E7", "Am7", "Dm7", "G7"], "prompt": "symbols" }
}
```

```exercise
{
  "id": "e4-ear-mixed",
  "type": "ear-progression",
  "title": "Borrowed chords and dominants",
  "count": 8, "passScore": 0.7,
  "spec": { "key": "random", "mode": "major", "length": 4, "chords": ["I", "ii", "IV", "iv", "V7", "vi", "bVI", "bVII"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "e5-daw-reharm",
  "type": "daw-task",
  "title": "Your three reharmonisations",
  "instructions": "The melody is played three times on the lead track (12 bars). On the epiano track, reharmonise each 4-bar pass differently — use the three versions above as a starting point, then change at least one chord per pass to your own idea. Add a bass track with the new roots.",
  "spec": {
    "template": { "bpm": 84, "key": "C", "timeSig": "4/4", "tracks": [
      { "instrument": "lead", "seq": "E4:h G4:q E4:q | D4:h. D4:q | C4:q E4:q A4:q G4:q | F4:h. r:q | E4:h G4:q E4:q | D4:h. D4:q | C4:q E4:q A4:q G4:q | F4:h. r:q | E4:h G4:q E4:q | D4:h. D4:q | C4:q E4:q A4:q G4:q | F4:h. r:q |" },
      { "instrument": "epiano", "seq": "" }, { "instrument": "bass", "seq": "" } ] },
    "task": "Reharmonise the same 4-bar melody three different ways (borrowed / secondary dominants / jazz subs).",
    "checks": [
      { "kind": "has-tracks", "instruments": ["lead", "epiano", "bass"] },
      { "kind": "bars", "min": 12, "max": 12 },
      { "kind": "note-count", "min": 36, "track": 1 },
      { "kind": "note-count", "min": 12, "track": 2 },
      { "kind": "custom", "id": "melody-fits", "note": "Self-check: every melody note on beat 1 is a chord tone or a 9th/13th of your new chord." }
    ],
    "minBars": 12, "maxBars": 12
  }
}
```

```exercise
{
  "id": "e6-reflect",
  "type": "reflect",
  "title": "Which version would you use?",
  "spec": { "prompt": "Play all three passes. Which reharmonisation best suits a sad verse, a triumphant chorus, and a late-night jazz club? Explain in terms of specific chords.", "minWords": 30 }
}
```
