---
id: w43-l1-qualities-within-progressions
title: Chord Qualities Within Progressions
week: 43
order: 1
phase: p5
duration_min: 45
goals:
  - "Predict each chord's quality from its bass note and the key (the diatonic default)"
  - Confirm or reject the prediction by playing along
  - Catch the one chord that breaks the default inside a hidden band loop
prerequisites: [w42-l3-bass-lines-of-named-songs]
tags: [transcription, chord-quality, ear, harmony]
---

# Chord Qualities Within Progressions

Pass 4 turns bass notes into chords. The good news: once you know the key and the bass note, the quality is
*predictable* most of the time. That is the [[diatonic default]]: in a major key I, IV and V are major; ii, iii and vi are
minor; vii° is diminished. In D major, a bass landing on E predicts E minor (ii). You don't have to hear the quality from
nothing — you check a prediction. That's a much easier task.

## Predict, then check

1. Write the bass note's numeral with its default case (E in D major → ii).
2. Loop that bar and play the predicted chord along with it.
3. If it blends, move on. If the middle note of your chord rubs, flip the quality.

The flips give songs their colour. Three you have already met:

- **Minor iv** (G minor in D) — borrowed from the parallel minor (week 16): wistful, bittersweet.
- **Major II** (E major in D) — it is V of V, the secondary dominant from week 24: bright, it pulls to V.
- **Major III** (F# major in D) — V of vi: dramatic, it pulls to vi.

Compare a default loop and a loop with surprises (notation shown — this is the explanation):

```example
{
  "title": "Default: D – Em – G – A (I – ii – IV – V)",
  "bpm": 92,
  "timeSig": "4/4",
  "key": "D",
  "tracks": [
    {"instrument": "bass", "seq": "D2:h D2:q D2:q | E2:h E2:q E2:q | G2:h G2:q G2:q | A2:h A2:q A2:q"},
    {"instrument": "piano", "seq": "[F#3 A3 D4]:q [F#3 A3 D4]:q [F#3 A3 D4]:q [F#3 A3 D4]:q | [G3 B3 E4]:q [G3 B3 E4]:q [G3 B3 E4]:q [G3 B3 E4]:q | [G3 B3 D4]:q [G3 B3 D4]:q [G3 B3 D4]:q [G3 B3 D4]:q | [A3 C#4 E4]:q [A3 C#4 E4]:q [A3 C#4 E4]:q [A3 C#4 E4]:q"}
  ],
  "show": ["keyboard"],
  "loop": true
}
```

```example
{
  "title": "Surprises: D – E – G – Gm (I – II – IV – iv)",
  "bpm": 92,
  "timeSig": "4/4",
  "key": "D",
  "tracks": [
    {"instrument": "bass", "seq": "D2:h D2:q D2:q | E2:h E2:q E2:q | G2:h G2:q G2:q | G2:h G2:q G2:q"},
    {"instrument": "piano", "seq": "[F#3 A3 D4]:q [F#3 A3 D4]:q [F#3 A3 D4]:q [F#3 A3 D4]:q | [G#3 B3 E4]:q [G#3 B3 E4]:q [G#3 B3 E4]:q [G#3 B3 E4]:q | [G3 B3 D4]:q [G3 B3 D4]:q [G3 B3 D4]:q [G3 B3 D4]:q | [G3 Bb3 D4]:q [G3 Bb3 D4]:q [G3 Bb3 D4]:q [G3 Bb3 D4]:q"}
  ],
  "show": ["keyboard"],
  "loop": true
}
```

In bar 2 the only change is G to G#, and the mood lifts. In bar 4 of the second loop the bass stays on G while B drops to
B♭: same bass note, different quality. That is exactly where a bass-only transcription fails and pass 4 earns its place.

```exercise
{
  "id": "w43l1-predict",
  "type": "quiz",
  "title": "Predict the default",
  "spec": {
    "questions": [
      {"q": "D major, the bass lands on E. Predicted chord?", "choices": ["E", "Em", "Edim", "E7"], "answer": 1},
      {"q": "G major, the bass lands on B. Predicted chord?", "choices": ["B", "Bm", "Bdim", "B7"], "answer": 1},
      {"q": "F major, the bass lands on B♭. Predicted chord?", "choices": ["B♭", "B♭m", "Bdim", "B♭7"], "answer": 0},
      {"q": "A major, the bass lands on G#. Predicted chord?", "choices": ["G#", "G#m", "G#dim", "G#7"], "answer": 2, "explain": "vii° — the only diminished triad in a major key."}
    ]
  }
}
```

## Two hidden loops

Both loops are in G major. Each has at most **one** chord that breaks the default. Find the bass notes first (pass 3),
predict, then listen for the chord that doesn't match your prediction.

```exercise
{
  "id": "w43l1-loop1",
  "type": "ear-progression",
  "title": "Hidden loop 1",
  "srs": false,
  "spec": {
    "key": "G",
    "mode": "major",
    "chords": ["I", "ii", "II", "IV", "iv", "V", "vi"],
    "example": {
      "title": "Hidden loop 1",
      "bpm": 92,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8"},
        {"instrument": "bass", "seq": "G2:h. r:q | E2:h. r:q | C2:h. r:q | C2:h. r:q"},
        {"instrument": "piano", "seq": "[G3 B3 D4]:w | [G3 B3 E4]:w | [G3 C4 E4]:w | [G3 C4 Eb4]:w"},
        {"instrument": "lead", "seq": "D5:q B4:q G4:h | B4:q. A4:8 G4:q E4:q | E4:q G4:q C5:q. B4:8 | C5:q G4:q Eb4:h"}
      ]
    },
    "progression": ["I", "vi", "IV", "iv"]
  }
}
```

```exercise
{
  "id": "w43l1-loop2",
  "type": "ear-progression",
  "title": "Hidden loop 2",
  "srs": false,
  "spec": {
    "key": "G",
    "mode": "major",
    "chords": ["I", "ii", "II", "IV", "iv", "V", "vi"],
    "example": {
      "title": "Hidden loop 2",
      "bpm": 92,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8"},
        {"instrument": "bass", "seq": "G2:h. r:q | A2:h. r:q | D2:h. r:q | G2:h. r:q"},
        {"instrument": "piano", "seq": "[G3 B3 D4]:w | [A3 C#4 E4]:w | [F#3 A3 D4]:w | [G3 B3 D4]:w"},
        {"instrument": "lead", "seq": "B4:q D5:q B4:h | C#5:q E5:8 C#5:8 A4:h | A4:q F#4:q A4:q. C5:8 | B4:w"}
      ]
    },
    "progression": ["I", "II", "V", "I"]
  }
}
```

```ladder
{
  "skill": "progressions",
  "unlocks": 20,
  "intro": "Rungs 10 (IV or iv) and 15 (ii or V/V) drill today's surprises at your own level."
}
```

```exercise
{
  "id": "w43l1-analysis",
  "type": "roman-analysis",
  "title": "Label with the right case",
  "spec": {"key": "D", "chords": ["D", "E", "G", "Gm", "D", "F#", "Bm", "A"], "prompt": "symbols", "palette": "chromatic"}
}
```

```exercise
{
  "id": "w43l1-build",
  "type": "build-chord",
  "title": "Build from numerals in D",
  "count": 8,
  "spec": {"chords": ["Em", "E", "F#m", "F#", "G", "Gm", "Bm", "A"], "root": "given", "prompt": "roman", "key": "D"}
}
```

```exercise
{
  "id": "w43l1-play",
  "type": "play-chord",
  "title": "Play the surprise loop",
  "spec": {"chords": ["D", "E", "G", "Gm"], "inversion": "any", "sequence": true, "bpm": 70}
}
```
