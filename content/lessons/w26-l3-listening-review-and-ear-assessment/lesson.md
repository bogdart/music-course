---
id: w26-l3-listening-review-and-ear-assessment
title: Listening Review and Phase 3 Ear Assessment
week: 26
order: 3
phase: p3
duration_min: 50
goals:
  - Review your two capstone songs critically with a structured listening method
  - Pass the Phase 3 ear assessment - melody, bass, modes, progressions with secondary dominants, 16th rhythms
  - Transcribe a short "mystery song" (form, bass, chords, groove) into the DAW
prerequisites: [w26-l2-capstone-song-two]
tags: [assessment, review, ear, transcription, daw]
songs: []
---

# Listening Review and Phase 3 Ear Assessment

Ten weeks ago you had never written a chorus. Now you have two finished songs. This last lesson of Phase 3 has two halves: **listen to your own work like a producer**, then **prove your ears**.

## Part 1 — The listening review (15 min)

Listen to each capstone song three times, each time with a different job:

1. **As a fan** — eyes closed, no stopping. Where did your attention drift? Where did you smile?
2. **As an arranger** — with the arrangement map in front of you. Does every section change something? Is the last chorus the biggest?
3. **As a mixer** — at low volume, then on different speakers or headphones. Is the lead always clear? Do kick and bass merge?

Then write **three stars and a wish** for each song: three specific things that work, and one thing you would change. Be concrete — "the pre-chorus bass climb works" is useful; "it's nice" is not.

## Part 2 — Ear assessment (25 min)

The assessment covers everything this phase added to your ear-training deck: melodic dictation, bass lines, modes and pentatonic scales, progressions with secondary dominants, and 16th-note rhythms. The pass mark is 80% per exercise. If you miss one, don't repeat it now — the spaced-repetition review will bring those cards back in your next sessions. Retake the assessment after a week.

The final item is a small transcription — your first "decompose a song" task. Listen to this 8-bar mystery song on loop. **Don't open the piano roll.**

```example
{
  "title": "Mystery song (listen only)",
  "bpm": 96, "timeSig": "4/4", "key": "D",
  "tracks": [
    { "instrument": "lead", "seq": "F#4:q A4:q D5:q. C#5:8 | C#5:q B4:8 A4:8 E4:h | D4:q F#4:q B4:q. A4:8 | G4:h. r:q | F#4:q A4:q D5:q. E5:8 | D#5:h. B4:q | E5:q D5:8 B4:8 G4:q E4:q | E4:h. r:q" },
    { "instrument": "pad", "seq": "[F#3 A3 D4]:w | [E3 A3 C#4]:w | [F#3 B3 D4]:w | [G3 B3 D4]:w | [F#3 A3 D4]:w | [F#3 A3 B3 D#4]:w | [G3 B3 E4]:w | [E3 A3 C#4]:w" },
    { "instrument": "bass", "seq": "D2:h D2:8 D2:8 r:q | A1:h A1:8 A1:8 r:q | B1:h B1:8 B1:8 r:q | G1:h G1:8 G1:8 r:q | D2:h D2:8 D2:8 r:q | B1:h B1:8 B1:8 r:q | E2:h E2:8 E2:8 r:q | A1:h A1:8 A1:8 r:q" },
    { "instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" }
  ],
  "loop": true
}
```

Use the transcription order you'll refine all of Phase 5: **key and tempo → form → groove → bass roots → chord qualities → melody**. Hint: one chord is not in the key — listen for the note that pulls upward in bar 6.

## Part 3 — What's next

Phase 4 opens the composer's studio: extended chords, jazz voicings, reharmonisation, counterpoint, film cues and genre writing. Everything rests on what you did here — form, hooks, bass, grooves, layers. Keep both capstone projects; you will revisit them.

```exercise
{
  "id": "assess-melody",
  "type": "ear-melody",
  "title": "Assessment 1: melodic dictation (one octave)",
  "count": 10,
  "passScore": 0.8,
  "spec": { "key": "A", "degrees": [1, 2, 3, 4, 5, 6, 7], "length": 8, "rhythm": "free", "answer": "play" }
}
```

```exercise
{
  "id": "assess-bass",
  "type": "ear-bass",
  "title": "Assessment 2: bass lines",
  "count": 10,
  "passScore": 0.8,
  "spec": { "key": "E", "chords": ["I", "ii", "iii", "IV", "V", "vi"], "answer": "play" }
}
```

```exercise
{
  "id": "assess-modes",
  "type": "ear-scale",
  "title": "Assessment 3: modes and pentatonics",
  "count": 12,
  "passScore": 0.8,
  "spec": { "scales": ["major", "natural-minor", "dorian", "mixolydian", "lydian", "phrygian", "major-pentatonic", "minor-pentatonic", "blues"], "play": "melody" }
}
```

```exercise
{
  "id": "assess-progressions",
  "type": "ear-progression",
  "title": "Assessment 4: progressions with secondary dominants",
  "count": 10,
  "passScore": 0.8,
  "spec": { "key": "C", "mode": "major", "length": 4, "chords": ["I", "ii", "IV", "V", "vi", "V/V", "V/vi", "bVII"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "assess-rhythm",
  "type": "ear-rhythm",
  "title": "Assessment 5: 16th-note rhythms",
  "count": 10,
  "passScore": 0.8,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "16", "rests": true, "answer": "tap" }
}
```

```exercise
{
  "id": "assess-play-chain",
  "type": "play-chord",
  "title": "Assessment 6: play a secondary-dominant chain",
  "count": 8,
  "passScore": 0.8,
  "spec": { "chords": ["C", "A7", "Dm", "D7", "G7", "E7", "Am", "F"], "inversion": "any", "sequence": true, "bpm": 66 }
}
```

```exercise
{
  "id": "daw-transcribe-mystery",
  "type": "daw-task",
  "title": "Assessment 7: transcribe the mystery song",
  "spec": {
    "template": { "bpm": 96, "key": "D", "tracks": [
      { "instrument": "drums", "seq": "" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "pad", "seq": "" }
    ] },
    "task": "From listening only: program the drum groove, the bass line (roots and rhythm) and whole-note chords for all 8 bars of the mystery song. Write your roman-numeral analysis in the next exercise. Only then open the example's piano roll to check.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "has-tracks", "instruments": ["drums", "bass", "pad"] },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "kickOnBeats": [1, 3], "snareOnBeats": [2, 4], "track": 0 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "V", "vi", "IV", "I", "V/ii", "ii", "V"], "barsPerChord": 1, "minRatio": 1.0, "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "V", "vi", "IV", "I", "V/ii", "ii", "V"], "barsPerChord": 1, "minRatio": 0.85, "track": 2 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "reflect-review",
  "type": "reflect",
  "spec": { "prompt": "Write 'three stars and a wish' for each capstone song. Then write the mystery song's analysis: key, tempo feel, roman numerals for all 8 bars, and which chord was the secondary dominant. What did you get wrong at first, and what finally made you hear it?", "minWords": 80 }
}
```
