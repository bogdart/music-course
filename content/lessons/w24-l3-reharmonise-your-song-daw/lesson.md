---
id: w24-l3-reharmonise-your-song-daw
title: Reharmonise Your Song
week: 24
order: 3
phase: p3
duration_min: 50
goals:
  - Keep a melody and give it new chords using a five-tool reharmonisation kit
  - Check every new chord against the melody note it supports
  - Reharmonise your own chorus from week 18
prerequisites: [w24-l2-chromatic-passing-chords]
tags: [harmony, reharmonisation, daw, songwriting, ear]
songs: []
---

# Reharmonise Your Song

[[Reharmonisation]] means keeping the melody and changing the chords under it. It is how a plain tune becomes a moving one — and how a second chorus can sound fresh without writing a new melody.

## The reharm kit

Try these one at a time, always listening to the melody note on each beat 1:

1. **Relative swap** — replace a chord with one that shares two notes: I ↔ vi or iii, IV ↔ ii.
2. **Add 7ths** — Am → Am7, F → Fmaj7. Softer, richer.
3. **Secondary dominant** — put V/x before a target chord (E7 → Am).
4. **Passing diminished** — slide the bass by half step between chords a whole step apart.
5. **Borrowed chord** — from the parallel minor (week 16): iv (Fm in C) or bVII (Bb).

**The golden rule:** the melody note must be in the new chord, or be a comfortable colour (a 7th or 9th) — never a half step against a chord tone that's held underneath.

## Before and after

The Glasshouse chorus (week 18) with its original I–V–vi–IV:

```example
{
  "title": "Glasshouse chorus - original chords",
  "bpm": 88, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "G4:q G4:8 A4:8 G4:q E4:q | D4:q D4:8 E4:8 D4:h | E4:q E4:8 G4:8 A4:q C5:q | A4:h. r:q | G4:q G4:8 A4:8 G4:q E4:q | B4:q B4:8 C5:8 D5:h | E5:h. D5:q | C5:w" },
    { "instrument": "piano", "seq": "[C3 E3 G3]:w | [B2 D3 G3]:w | [A2 C3 E3]:w | [A2 C3 F3]:w | [C3 E3 G3]:w | [B2 D3 G3]:w | [A2 C3 E3]:w | [A2 C3 F3]:w" },
    { "instrument": "bass", "seq": "C2:w | G1:w | A1:w | F1:w | C2:w | G1:w | A1:w | F1:w" }
  ],
  "show": ["pianoroll"],
  "loop": false
}
```

The same melody, reharmonised: **C | E7 | Am7 | Dm7 G7 | Em7 | G G#dim7 | Fmaj7/A | Fm C**.

```example
{
  "title": "Glasshouse chorus - reharmonised",
  "bpm": 88, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "G4:q G4:8 A4:8 G4:q E4:q | D4:q D4:8 E4:8 D4:h | E4:q E4:8 G4:8 A4:q C5:q | A4:h. r:q | G4:q G4:8 A4:8 G4:q E4:q | B4:q B4:8 C5:8 D5:h | E5:h. D5:q | C5:w" },
    { "instrument": "piano", "seq": "[C3 E3 G3]:w | [B2 D3 G#3]:w | [A2 C3 E3 G3]:w | [A2 C3 F3]:h [G2 B2 F3]:h | [B2 D3 E3 G3]:w | [B2 D3 G3]:h [B2 D3 F3 G#3]:h | [C3 E3 F3 A3]:w | [Ab2 C3 F3]:h [G2 C3 E3]:h" },
    { "instrument": "bass", "seq": "C2:w | E2:w | A1:w | D2:h G1:h | E2:w | G1:h G#1:h | A1:w | F1:h C2:h" }
  ],
  "show": ["pianoroll"],
  "loop": false
}
```

What happened, bar by bar: E7 replaces G (the melody's D is E7's 7th) and pulls into Am7; bar 4 becomes ii–V; C in bar 5 is swapped for its relative Em7 (the melody's G and E are in it); G#dim7 slides the bass G → G# → A; Am in bar 7 becomes Fmaj7 over that A (IV instead of vi — the melody's E is the maj7); and the last bar borrows Fm before resolving to C, a bittersweet plagal ending.

```exercise
{
  "id": "listen-reharm",
  "type": "listen",
  "title": "Spot the tools",
  "spec": {
    "example": { "bpm": 88, "timeSig": "4/4", "key": "C", "tracks": [
      { "instrument": "lead", "seq": "G4:q G4:8 A4:8 G4:q E4:q | D4:q D4:8 E4:8 D4:h | E4:q E4:8 G4:8 A4:q C5:q | A4:h. r:q | G4:q G4:8 A4:8 G4:q E4:q | B4:q B4:8 C5:8 D5:h | E5:h. D5:q | C5:w" },
      { "instrument": "piano", "seq": "[C3 E3 G3]:w | [B2 D3 G#3]:w | [A2 C3 E3 G3]:w | [A2 C3 F3]:h [G2 B2 F3]:h | [B2 D3 E3 G3]:w | [B2 D3 G3]:h [B2 D3 F3 G#3]:h | [C3 E3 F3 A3]:w | [Ab2 C3 F3]:h [G2 C3 E3]:h" },
      { "instrument": "bass", "seq": "C2:w | E2:w | A1:w | D2:h G1:h | E2:w | G1:h G#1:h | A1:w | F1:h C2:h" }
    ] },
    "questions": [
      { "q": "Which chord in bar 2 is a secondary dominant?", "choices": ["C", "E7", "Am7", "Fm"], "answer": 1 },
      { "q": "Fm in the last bar is...", "choices": ["A secondary dominant", "A borrowed iv from C minor", "A passing diminished chord", "The relative minor"], "answer": 1 },
      { "q": "Em7 in bar 5 replaces C using which tool?", "choices": ["Relative swap", "Passing diminished", "Borrowed chord", "Line cliche"], "answer": 0 }
    ]
  }
}
```

```exercise
{
  "id": "play-reharm",
  "type": "play-chord",
  "title": "Play the reharmonised chorus",
  "count": 12,
  "passScore": 0.8,
  "spec": { "chords": ["C", "E7", "Am7", "Dm7", "G7", "Em7", "G", "G#dim7", "Fmaj7", "Fm", "C", "C"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

```exercise
{
  "id": "ear-colour-progressions",
  "type": "ear-progression",
  "title": "Borrowed and secondary chords",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "C", "mode": "major", "length": 4, "chords": ["I", "IV", "V", "vi", "iv", "V/vi"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "daw-reharm-glasshouse",
  "type": "daw-task",
  "title": "Your own Glasshouse reharm",
  "spec": {
    "template": { "bpm": 88, "key": "C", "tracks": [
      { "instrument": "lead", "seq": "G4:q G4:8 A4:8 G4:q E4:q | D4:q D4:8 E4:8 D4:h | E4:q E4:8 G4:8 A4:q C5:q | A4:h. r:q | G4:q G4:8 A4:8 G4:q E4:q | B4:q B4:8 C5:8 D5:h | E5:h. D5:q | C5:w" },
      { "instrument": "piano", "seq": "" },
      { "instrument": "bass", "seq": "" }
    ] },
    "task": "Write a DIFFERENT reharmonisation of the Glasshouse chorus than the one above. Use at least three tools from the kit (name them in the reflection). Check each beat 1: is the melody note in your chord or a pleasant 7th/9th?",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "has-tracks", "instruments": ["lead", "piano", "bass"] },
      { "kind": "note-count", "min": 24, "track": 1 },
      { "kind": "range", "low": "E1", "high": "C3", "track": 2 },
      { "kind": "custom", "id": "three-tools", "note": "Self-check: at least three kit tools used; no melody note a half step against a held chord tone." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "daw-reharm-own-chorus",
  "type": "daw-task",
  "title": "Reharmonise your week 18 chorus",
  "spec": {
    "template": { "bpm": 98, "key": "F", "tracks": [
      { "instrument": "lead", "seq": "" },
      { "instrument": "piano", "seq": "" },
      { "instrument": "bass", "seq": "" }
    ] },
    "task": "Paste your chorus melody from week 18 (or rewrite it from memory). Keep it as the first 8 bars with the original chords, then copy it to bars 9-16 with a reharmonised second pass: at least one secondary dominant and one borrowed or passing chord.",
    "checks": [
      { "kind": "bars", "min": 16, "max": 16 },
      { "kind": "has-tracks", "instruments": ["lead", "piano", "bass"] },
      { "kind": "repetition", "motifBars": 8, "minRepeats": 2, "allowTransposed": false, "track": 0 },
      { "kind": "in-key", "key": "F", "scale": "major", "track": 0 },
      { "kind": "custom", "id": "second-pass-reharmonised", "note": "Self-check: bars 9-16 use a secondary dominant and a borrowed or passing chord." }
    ],
    "minBars": 16, "maxBars": 16
  }
}
```

```exercise
{
  "id": "reflect-reharm",
  "type": "reflect",
  "spec": { "prompt": "List the tools you used in both reharms, bar by bar. Which single chord change surprised you most? Would you use the reharmonised version as the last chorus of a song? Why?", "minWords": 30 }
}
```
