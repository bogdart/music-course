---
id: w16-l3-phase-2-review-and-sixteen-bar-song
title: Phase 2 Review and a 16-Bar Song
week: 16
order: 3
phase: p2
duration_min: 50
goals:
  - Check your Phase 2 ear skills (scales, intervals, chord qualities, roots, progressions, rhythm)
  - Read bass clef at the keyboard
  - Write a 16-bar song with a verse and a chorus, using a borrowed chord or a second key
prerequisites: [w16-l2-relative-parallel-and-borrowed]
tags: [review, assessment, ear, daw, song]
---

# Phase 2 Review and a 16-Bar Song

Eight weeks ago you knew major scales and triads. Since then you've added minor keys, every interval, inversions, seventh chords, functions and cadences, the four-chord family, three grooves, harmonisation and the whole circle of fifths. And — the big one — you've started hearing roots.

This lesson has two halves. First, an **ear check**: one drill for each Phase 2 skill. Treat it as a map, not an exam. A weak score just tells you which cards the review deck should show you more often; nothing is locked. Second, you'll write the most complete song of the course so far.

## Part 1 — Ear check

Do these in one sitting, without hints, and note your scores.

```example
{
  "title": "Warm-up: everything at once — Am – F – C/E – G7 – C (roots A, F, C, G, C)",
  "bpm": 76, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "epiano", "seq": "[C4 E4 A4]:w | [C4 F4 A4]:w | [C4 E4 G4]:w | [B3 D4 F4 G4]:w | [C4 E4 G4]:w" },
    { "instrument": "bass", "seq": "A1:w | F1:w | E2:w | G1:w | C2:w" }
  ],
  "show": ["pianoroll"]
}
```

```exercise
{
  "id": "e1", "type": "ear-scale", "title": "Check 1 — major and minor scales",
  "count": 9, "passScore": 0.75,
  "spec": { "scales": ["major", "natural-minor", "harmonic-minor", "melodic-minor"], "play": "asc" }
}
```

```exercise
{
  "id": "e2", "type": "ear-interval", "title": "Check 2 — intervals, up, down and together",
  "count": 12, "passScore": 0.7,
  "spec": { "intervals": ["m3", "M3", "P4", "TT", "P5", "m6", "M6", "m7", "M7", "P8"], "direction": "mixed", "root": "random", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e3", "type": "ear-chord", "title": "Check 3 — chord qualities, some inverted",
  "count": 12, "passScore": 0.7,
  "spec": { "qualities": ["maj", "min", "maj7", "dom7", "min7"], "inversions": [0, 1], "voicing": "close", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e4", "type": "ear-chord-root", "title": "Check 4 — play the root",
  "count": 10, "passScore": 0.7,
  "spec": { "qualities": ["maj", "min", "dom7"], "answer": "play", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e5", "type": "ear-progression", "title": "Check 5 — four-chord progressions, incl. borrowed chords",
  "count": 10, "passScore": 0.7,
  "spec": { "key": "random", "mode": "major", "length": 4, "chords": ["I", "ii", "IV", "V", "vi", "iv", "bVII"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "e6", "type": "ear-rhythm", "title": "Check 6 — rhythm dictation",
  "count": 8, "passScore": 0.7,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "16", "rests": true, "answer": "tap" }
}
```

```exercise
{
  "id": "e7", "type": "read-note", "title": "Check 7 — bass clef at the keyboard",
  "count": 12, "passScore": 0.8,
  "spec": { "clef": "bass", "range": ["C2", "C4"], "accidentals": true, "answer": "play", "timed": 0 }
}
```

## Part 2 — A 16-bar song

Now put it all together: 8 bars of **verse** and 8 bars of **chorus**. The chorus must feel like a lift. Choose **one** of these ways to make it different:

- **Borrowed chord:** verse in C major on I – vi – IV – V; chorus on IV – iv – I – V or I – bVII – IV – I.
- **Relative key:** verse in A minor (i – VI – III – VII), chorus in C major (I – V – vi – IV) — same notes, brighter home.

Everything else you know goes in: bass on roots (or smooth inversions), a groove from week 14, a melody with chord tones on strong beats, a clear climax in the chorus and a proper cadence at the end. Save it — in Phase 3 you'll arrange it.

```exercise
{
  "id": "e8", "type": "daw-task", "title": "16-bar verse + chorus",
  "spec": {
    "template": { "bpm": 100, "key": "C", "timeSig": "4/4", "tracks": [
      { "instrument": "drums", "seq": "" }, { "instrument": "bass", "seq": "" }, { "instrument": "piano", "seq": "" }, { "instrument": "lead", "seq": "" } ] },
    "task": "Bars 1–8: verse. Bars 9–16: chorus with a borrowed chord (iv or bVII) or in the relative key. Drums: a backbeat groove, busier in the chorus. Bass: roots, locked with the kick. Piano: chords, voiced smoothly. Lead: verse melody lower and calmer; chorus melody higher, with a 2-bar hook that repeats, and the song's highest note. End the chorus with V → I in C. Self-check: sing the chorus hook after one listen — does it stick?",
    "checks": [
      { "kind": "has-tracks", "instruments": ["drums", "bass", "piano", "lead"] },
      { "kind": "bars", "min": 16, "max": 16 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "snareOnBeats": [2, 4], "track": 0 },
      { "kind": "range", "low": "C1", "high": "C3", "track": 1 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": true, "track": 3 },
      { "kind": "repetition", "motifBars": 2, "minRepeats": 2, "allowTransposed": true, "track": 3 },
      { "kind": "uses-rhythm", "values": ["h", "q", "8"], "minDistinct": 2, "track": 3 },
      { "kind": "max-leap", "semitones": 9, "track": 3 },
      { "kind": "ends-on", "degree": 1, "track": 3 },
      { "kind": "custom", "id": "verse-chorus-contrast", "note": "Self-check: the chorus uses a borrowed chord (iv or bVII) or the relative key, and its melody sits higher than the verse." }
    ],
    "minBars": 16, "maxBars": 16
  }
}
```
