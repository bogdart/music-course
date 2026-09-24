---
id: w44-l3-eight-bar-dictation
title: Eight-Bar Melody Dictation
week: 44
order: 3
phase: p5
duration_min: 50
goals:
  - Dictate a full 8-bar pop melody using the skeleton-first method
  - Use the chords to predict and check downbeat notes
  - Enter the finished transcription in the DAW and verify it against the original
prerequisites: [w44-l2-melody-over-harmony]
tags: [transcription, melody, dictation, daw]
---

# Eight-Bar Melody Dictation

Eight bars is a real melodic unit — a whole verse or chorus in many songs. It's also far too much to hold in your head at once. The trick is to never try.

## Skeleton first

Use the [[skeleton-first]] method:

1. **Chunk.** Split the melody into 2-bar phrases. You will only ever work on one chunk at a time, looping it.
2. **Downbeats.** In each bar, find only the note on beat 1 (or the first note of the bar). Use the chords: it's almost always root, 3rd or 5th. Write those eight notes down. That's the skeleton.
3. **Rhythm.** Tap the chunk's rhythm and write it as eighths and quarters, ignoring pitch.
4. **Fill in.** Now fill the gaps between skeleton notes. Most fills move by step; a leap will land on a chord tone.
5. **Play it back** with the track. Fix only what sounds wrong.

The skeleton gives you a scaffold — even if a fill note is wrong, you never lose your place, because the next downbeat is already known.

## Mystery Song #3

Key and chords first (you know how), then the melody. The chords are D – A – Bm – G | D – G – A – D.

A realistic target for this stage: skeleton in under five minutes, the complete melody in fifteen to twenty. Don't chase perfection on the first pass — a transcription with one or two wrong passing notes that you then *hear* and correct is exactly how professionals work. Notice also how bars 5–8 reuse the opening of bars 1–4 and then rise higher; spotting repetition saves you half the work.

```example
{
  "title": "Mystery Song #3 — full mix",
  "bpm": 90, "timeSig": "4/4", "key": "D",
  "tracks": [
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 snare:8 snare:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" },
    { "instrument": "bass", "seq": "D2:q. D2:8 D2:h | A1:q. A1:8 A1:h | B1:q. B1:8 B1:h | G1:q. G1:8 G1:h | D2:q. D2:8 D2:h | G1:q. G1:8 G1:h | A1:q. A1:8 A1:h | D2:q. D2:8 D2:h" },
    { "instrument": "piano", "seq": "[F#3 A3 D4]:w | [E3 A3 C#4]:w | [F#3 B3 D4]:w | [G3 B3 D4]:w | [F#3 A3 D4]:w | [G3 B3 D4]:w | [E3 A3 C#4]:w | [F#3 A3 D4]:w" },
    { "instrument": "lead", "seq": "F#4:q A4:q A4:8 B4:8 A4:q | E4:q. F#4:8 E4:h | D4:q F#4:q B4:q. A4:8 | G4:h. r:q | F#4:q A4:q D5:q. C#5:8 | B4:q A4:8 G4:8 B4:h | C#5:q A4:8 B4:8 C#5:q E5:q | D5:h. r:q" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

```example
{
  "title": "Mystery Song #3 — melody and chords at 60 BPM",
  "bpm": 60, "timeSig": "4/4", "key": "D",
  "tracks": [
    { "instrument": "piano", "seq": "[F#3 A3 D4]:w | [E3 A3 C#4]:w | [F#3 B3 D4]:w | [G3 B3 D4]:w | [F#3 A3 D4]:w | [G3 B3 D4]:w | [E3 A3 C#4]:w | [F#3 A3 D4]:w" },
    { "instrument": "lead", "seq": "F#4:q A4:q A4:8 B4:8 A4:q | E4:q. F#4:8 E4:h | D4:q F#4:q B4:q. A4:8 | G4:h. r:q | F#4:q A4:q D5:q. C#5:8 | B4:q A4:8 G4:8 B4:h | C#5:q A4:8 B4:8 C#5:q E5:q | D5:h. r:q" }
  ],
  "loop": true
}
```

```exercise
{
  "id": "w44l3-skeleton",
  "type": "listen",
  "title": "Step 2: the skeleton",
  "spec": {
    "example": {
      "title": "Mystery Song #3 — melody and chords",
      "bpm": 72, "timeSig": "4/4", "key": "D",
      "tracks": [ { "instrument": "piano", "seq": "[F#3 A3 D4]:w | [E3 A3 C#4]:w | [F#3 B3 D4]:w | [G3 B3 D4]:w | [F#3 A3 D4]:w | [G3 B3 D4]:w | [E3 A3 C#4]:w | [F#3 A3 D4]:w" }, { "instrument": "lead", "seq": "F#4:q A4:q A4:8 B4:8 A4:q | E4:q. F#4:8 E4:h | D4:q F#4:q B4:q. A4:8 | G4:h. r:q | F#4:q A4:q D5:q. C#5:8 | B4:q A4:8 G4:8 B4:h | C#5:q A4:8 B4:8 C#5:q E5:q | D5:h. r:q" } ],
      "loop": true
    },
    "questions": [
      { "q": "Bar 1 (D chord): the first melody note is the chord's…", "choices": ["Root (D)", "3rd (F#)", "5th (A)"], "answer": 1 },
      { "q": "Bar 4 (G chord): the long note is…", "choices": ["G", "B", "D"], "answer": 0 },
      { "q": "Bar 5: compared to bar 1, the phrase starts the same, then…", "choices": ["Goes lower", "Leaps up higher to D", "Repeats exactly", "Stops"], "answer": 1 },
      { "q": "The last note (bar 8) is degree…", "choices": ["1", "3", "5", "7"], "answer": 0 }
    ]
  }
}
```

```exercise
{
  "id": "w44l3-rhythm",
  "type": "ear-rhythm",
  "title": "Step 3: two-bar rhythms",
  "count": 8,
  "passScore": 0.75,
  "spec": { "timeSig": "4/4", "bars": 2, "subdivision": "8", "rests": true, "answer": "tap" }
}
```

```exercise
{
  "id": "w44l3-long-d",
  "type": "ear-melody",
  "title": "Long phrases in D",
  "count": 6,
  "passScore": 0.7,
  "spec": { "key": "D", "degrees": [1, 2, 3, 4, 5, 6, 7], "length": 8, "rhythm": "simple", "answer": "play" }
}
```

```exercise
{
  "id": "w44l3-long-bb",
  "type": "ear-melody",
  "title": "Long phrases in Bb",
  "count": 6,
  "passScore": 0.7,
  "spec": { "key": "Bb", "degrees": [1, 2, 3, 4, 5, 6, 7], "length": 8, "rhythm": "simple", "answer": "degrees" }
}
```

```exercise
{
  "id": "w44l3-daw",
  "type": "daw-task",
  "title": "Transcribe Mystery Song #3's melody",
  "spec": {
    "template": { "bpm": 90, "key": "D", "tracks": [
      { "instrument": "piano", "seq": "[F#3 A3 D4]:w | [E3 A3 C#4]:w | [F#3 B3 D4]:w | [G3 B3 D4]:w | [F#3 A3 D4]:w | [G3 B3 D4]:w | [E3 A3 C#4]:w | [F#3 A3 D4]:w" },
      { "instrument": "lead", "seq": "" } ] },
    "task": "Enter the full 8-bar melody of Mystery Song #3 on the lead track, skeleton first. Loop the slowed example as often as you like. When the checks pass, A/B your track against the original.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "D", "scale": "major", "allowPassing": false, "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "V", "vi", "IV", "I", "IV", "V", "I"], "barsPerChord": 1, "minRatio": 1, "track": 1 },
      { "kind": "starts-on", "degrees": [3], "track": 1 },
      { "kind": "ends-on", "degree": 1, "track": 1 },
      { "kind": "note-count", "min": 25, "max": 30, "track": 1 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "w44l3-play",
  "type": "play-melody",
  "title": "Play the answer",
  "instructions": "Only after the DAW task: play the correct melody from notation and compare it with your transcription.",
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "D", "seq": "F#4:q A4:q A4:8 B4:8 A4:q | E4:q. F#4:8 E4:h | D4:q F#4:q B4:q. A4:8 | G4:h. r:q | F#4:q A4:q D5:q. C#5:8 | B4:q A4:8 G4:8 B4:h | C#5:q A4:8 B4:8 C#5:q E5:q | D5:h. r:q", "showStaff": true, "showKeyboard": false, "countIn": 1, "backing": { "instrument": "piano", "seq": "[F#3 A3 D4]:w | [E3 A3 C#4]:w | [F#3 B3 D4]:w | [G3 B3 D4]:w | [F#3 A3 D4]:w | [G3 B3 D4]:w | [E3 A3 C#4]:w | [F#3 A3 D4]:w" } }
}
```
