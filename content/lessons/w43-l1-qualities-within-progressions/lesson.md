---
id: w43-l1-qualities-within-progressions
title: Chord Qualities Within Progressions
week: 43
order: 1
phase: p5
duration_min: 45
goals:
  - Predict each chord's quality from its root and the key, then verify by ear
  - Spot "surprise" qualities — a major II or III, a minor iv — inside a progression
  - Label progressions with correct upper/lower-case roman numerals
prerequisites: [w42-l3-bass-lines-of-named-songs]
tags: [transcription, chord-quality, ear, harmony]
---

# Chord Qualities Within Progressions

Pass 4 turns bass roots into chords. You already know the good news: once the key and the root are known, the quality is *predictable* most of the time. That's what [[diatonic default]] means for a transcriber.

In a major key: I, IV and V are major; ii, iii and vi are minor; vii° is diminished. So if you're in D major and the bass lands on E, your first guess is E minor (ii). You don't need to hear the quality from scratch — you need to *confirm or reject a prediction*. That's a far easier task.

## Predict, then check

For each chord, do this:

1. Write the root's roman numeral with its default case (E in D major → ii).
2. Loop that bar and play the predicted chord along with the recording.
3. If it blends, move on. If the 3rd clashes, flip the quality.

The flips are where songs get their colour. The most common surprises in pop:

- **Major II** (E major in D) — a secondary dominant pulling to V. Sounds bright, optimistic, "lifting".
- **Major III** (F# major in D) — pulls to vi. Sounds dramatic, a bit gospel.
- **Minor iv** (G minor in D) — borrowed from the parallel minor. Sounds wistful, bittersweet.

Compare the default and the surprise versions:

```example
{
  "title": "Default: D – Em – G – A (I–ii–IV–V)",
  "bpm": 92, "timeSig": "4/4", "key": "D",
  "tracks": [
    { "instrument": "bass", "seq": "D2:h D2:q D2:q | E2:h E2:q E2:q | G2:h G2:q G2:q | A2:h A2:q A2:q" },
    { "instrument": "piano", "seq": "[F#3 A3 D4]:q [F#3 A3 D4]:q [F#3 A3 D4]:q [F#3 A3 D4]:q | [G3 B3 E4]:q [G3 B3 E4]:q [G3 B3 E4]:q [G3 B3 E4]:q | [G3 B3 D4]:q [G3 B3 D4]:q [G3 B3 D4]:q [G3 B3 D4]:q | [A3 C#4 E4]:q [A3 C#4 E4]:q [A3 C#4 E4]:q [A3 C#4 E4]:q" }
  ],
  "show": ["keyboard"],
  "loop": true
}
```

```example
{
  "title": "Surprises: D – E – G – Gm (I–II–IV–iv)",
  "bpm": 92, "timeSig": "4/4", "key": "D",
  "tracks": [
    { "instrument": "bass", "seq": "D2:h D2:q D2:q | E2:h E2:q E2:q | G2:h G2:q G2:q | G2:h G2:q G2:q" },
    { "instrument": "piano", "seq": "[F#3 A3 D4]:q [F#3 A3 D4]:q [F#3 A3 D4]:q [F#3 A3 D4]:q | [G#3 B3 E4]:q [G#3 B3 E4]:q [G#3 B3 E4]:q [G#3 B3 E4]:q | [G3 B3 D4]:q [G3 B3 D4]:q [G3 B3 D4]:q [G3 B3 D4]:q | [G3 Bb3 D4]:q [G3 Bb3 D4]:q [G3 Bb3 D4]:q [G3 Bb3 D4]:q" }
  ],
  "show": ["keyboard"],
  "loop": true
}
```

Listen to bar 2 in both: the only change is G to G#, and the whole mood shifts. In bar 4 of the second loop the bass stays on G while B drops to Bb — same root, different quality. That's exactly the case where bass-only transcription fails and pass 4 earns its place.

```exercise
{
  "id": "w43l1-quality",
  "type": "ear-chord",
  "title": "Quality check",
  "count": 10,
  "passScore": 0.8,
  "spec": { "qualities": ["maj", "min", "dim"], "inversions": [0], "voicing": "mixed", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "w43l1-prog-d",
  "type": "ear-progression",
  "title": "Diatonic progressions in D",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "D", "mode": "major", "length": 4, "chords": ["I", "ii", "iii", "IV", "V", "vi"], "style": "block" }
}
```

```exercise
{
  "id": "w43l1-prog-c",
  "type": "ear-progression",
  "title": "Spot the surprise (C major)",
  "instructions": "Most chords are diatonic; listen for the one whose quality flips.",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "C", "mode": "major", "length": 4, "chords": ["I", "ii", "IV", "V", "vi", "II", "III", "iv"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "w43l1-analysis",
  "type": "roman-analysis",
  "title": "Label with the right case",
  "spec": { "key": "D", "chords": ["D", "E", "G", "Gm", "D", "F#", "Bm", "A"], "prompt": "symbols" }
}
```

```exercise
{
  "id": "w43l1-build",
  "type": "build-chord",
  "title": "Build from roman numerals in D",
  "count": 8,
  "spec": { "chords": ["Em", "E", "F#m", "F#", "G", "Gm", "Bm", "A"], "root": "given", "prompt": "roman", "key": "D" }
}
```

```exercise
{
  "id": "w43l1-play",
  "type": "play-chord",
  "title": "Play the surprise loop",
  "spec": { "chords": ["D", "E", "G", "Gm"], "inversion": "any", "sequence": true, "bpm": 70 }
}
```
