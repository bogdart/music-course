---
id: w17-l3-blocking-out-a-form-daw
title: Blocking Out a Form in the DAW
week: 17
order: 3
phase: p3
duration_min: 50
goals:
  - Plan a song as a list of sections with bar counts and estimate its length
  - Block out a full verse-chorus skeleton with chord sketches and simple drums
  - Write an AABA melody where the A returns unchanged
prerequisites: [w17-l2-analysing-forms-of-pop-songs]
tags: [form, daw, songwriting]
songs: []
---

# Blocking Out a Form in the DAW

Professional writers rarely write a song from bar 1 to the end. They **block it out** first: a skeleton of every section with placeholder chords and a basic beat, so they can hear the whole journey in two minutes. Then they fill in details where the skeleton feels weak.

## The block-out recipe

1. **Write the plan as text**: `I2 V4 PC2 C4 V4 PC2 C4 O2` (section + bars).
2. **One chord track** with whole-note block chords per section.
3. **One bass track** with plain roots.
4. **One drum track** where each section gets a *different density*: nothing in the intro, quarter hats in the verse, eighth hats in the chorus.
5. **Name each clip** after its section (Intro, Verse 1...). The app has no marker lane, so clip names are your markers.

Here is a 12-bar block-out of the first half of that plan. Listen to how much "song" you already hear without any melody.

```example
{
  "title": "Block-out: Intro 2 - Verse 4 - Pre-chorus 2 - Chorus 4",
  "bpm": 96, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "pad", "seq": "[C4 E4 G4]:w | [B3 D4 G4]:w | [A3 C4 E4]:w | [F3 A3 C4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w | [F3 A3 C4]:w | [G3 B3 D4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w | [A3 C4 E4]:w | [A3 C4 F4]:w" },
    { "instrument": "bass", "seq": "C3:w | G2:w | A2:h A2:h | F2:h F2:h | C3:h C3:h | G2:h G2:h | F2:q F2:q F2:q F2:q | G2:q G2:q G2:q G2:q | C3:8 C3:8 C3:8 C3:8 C3:8 C3:8 C3:8 C3:8 | G2:8 G2:8 G2:8 G2:8 G2:8 G2:8 G2:8 G2:8 | A2:8 A2:8 A2:8 A2:8 A2:8 A2:8 A2:8 A2:8 | F2:8 F2:8 F2:8 F2:8 F2:8 F2:8 F2:8 F2:8" },
    { "instrument": "drums", "seq": "r:w | r:w | kick:q hihat:q snare:q hihat:q | kick:q hihat:q snare:q hihat:q | kick:q hihat:q snare:q hihat:q | kick:q hihat:q snare:q hihat:q | kick:q snare:q kick:q snare:q | kick:8 kick:8 snare:8 snare:8 snare:16 snare:16 snare:16 snare:16 tom:8 tom:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" }
  ],
  "show": ["pianoroll"],
  "loop": false
}
```

Three details make the sections audible: the bass gets busier (whole → half → quarter → eighth notes), the pre-chorus ends on V with a drum build, and a crash marks bar 1 of the chorus.

## Plan before you play

```exercise
{
  "id": "plan-math",
  "type": "quiz-input",
  "title": "Song maths",
  "spec": { "questions": [
    { "q": "How many bars in the plan I2 V4 PC2 C4 V4 PC2 C4 O2?", "answer": ["24"], "kind": "number" },
    { "q": "A full-size plan: I4 V8 PC4 C8 V8 PC4 C8 B8 C8 O4. How many bars?", "answer": ["64"], "kind": "number" },
    { "q": "At 96 BPM in 4/4, one bar lasts 2.5 seconds. How many seconds do 64 bars last?", "answer": ["160"], "kind": "number" },
    { "q": "Which chord should a pre-chorus usually end on? (roman numeral)", "answer": ["V", "V7"], "kind": "text" }
  ] }
}
```

```exercise
{
  "id": "daw-block-out-vc",
  "type": "daw-task",
  "title": "Block out a verse-chorus skeleton",
  "spec": {
    "template": { "bpm": 96, "key": "C", "tracks": [
      { "instrument": "pad", "seq": "" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "drums", "seq": "" }
    ] },
    "task": "Block out I2 V4 PC2 C4 V4 PC2 C4 O2 (24 bars). Use your own progressions or: verse vi-IV-I-V, pre-chorus IV-V, chorus I-V-vi-IV, intro/outro I-V. Whole-note pads, root bass getting busier per section, drums silent in the intro and denser in the chorus. Name every clip after its section.",
    "checks": [
      { "kind": "bars", "min": 24, "max": 24 },
      { "kind": "has-tracks", "instruments": ["pad", "bass", "drums"] },
      { "kind": "in-key", "key": "C", "scale": "major", "track": 0 },
      { "kind": "in-key", "key": "C", "scale": "major", "track": 1 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "snareOnBeats": [2, 4], "track": 2 },
      { "kind": "custom", "id": "clip-names-are-sections", "note": "Self-check: every clip is named Intro, Verse, Pre-chorus, Chorus or Outro." }
    ],
    "minBars": 24, "maxBars": 24
  }
}
```

## An AABA skeleton with a melody

In AABA the A melody must come back *exactly*, so the listener recognises home. Write one 4-bar A tune and copy it.

```exercise
{
  "id": "daw-aaba-melody",
  "type": "daw-task",
  "title": "Write an AABA tune",
  "spec": {
    "template": { "bpm": 84, "key": "F", "tracks": [
      { "instrument": "piano", "seq": "[F3 A3 C4]:w | [D3 F3 Bb3]:w | [E3 G3 C4]:w | [F3 A3 C4]:w | [F3 A3 C4]:w | [D3 F3 Bb3]:w | [E3 G3 C4]:w | [F3 A3 C4]:w | [D3 F3 A3]:w | [D3 F3 Bb3]:w | [D3 G3 Bb3]:w | [C3 E3 G3 Bb3]:w | [F3 A3 C4]:w | [D3 F3 Bb3]:w | [E3 G3 C4]:w | [F3 A3 C4]:w" },
      { "instrument": "bass", "seq": "F2:w | Bb2:w | C3:w | F2:w | F2:w | Bb2:w | C3:w | F2:w | D2:w | Bb2:w | G2:w | C3:w | F2:w | Bb2:w | C3:w | F2:w" },
      { "instrument": "lead", "seq": "" }
    ] },
    "task": "On the lead track write a 4-bar A melody over I-IV-V-I that ends on F, copy it to bars 5-8 and 13-16, and write a different B melody for bars 9-12 (vi-IV-ii-V) that ends on a note of C7 (C, E, G or Bb).",
    "checks": [
      { "kind": "bars", "min": 16, "max": 16 },
      { "kind": "in-key", "key": "F", "scale": "major", "track": 2 },
      { "kind": "repetition", "motifBars": 4, "minRepeats": 3, "allowTransposed": false, "track": 2 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "IV", "V", "I", "I", "IV", "V", "I", "vi", "IV", "ii", "V", "I", "IV", "V", "I"], "barsPerChord": 1, "minRatio": 0.75, "track": 2 },
      { "kind": "ends-on", "degree": 1, "track": 2 }
    ],
    "minBars": 16, "maxBars": 16
  }
}
```

```exercise
{
  "id": "play-lantern-a",
  "type": "play-melody",
  "title": "Play the Lantern A phrase",
  "passScore": 0.75,
  "spec": { "bpm": 72, "timeSig": "4/4", "key": "F", "seq": "A4:q C5:q A4:q F4:q | D4:q F4:8 A4:8 A4:h | Bb4:q A4:q G4:q E4:q | F4:h. r:q", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "pad", "seq": "[F3 A3 C4]:w | [D3 F3 A3]:w | [D3 F3 Bb3]:h [E3 G3 C4]:h | [F3 A3 C4]:w" } }
}
```

## Ear

```exercise
{
  "id": "ear-section-rhythms",
  "type": "ear-rhythm",
  "title": "Hi-hat and bass rhythms",
  "count": 8,
  "passScore": 0.75,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "8", "rests": true, "answer": "choose" }
}
```

```exercise
{
  "id": "ear-prog-with-ii",
  "type": "ear-progression",
  "title": "Progressions with ii",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "C", "mode": "major", "length": 4, "chords": ["I", "ii", "IV", "V", "vi"], "style": "block" }
}
```

```exercise
{
  "id": "reflect-block-out",
  "type": "reflect",
  "spec": { "prompt": "Play your 24-bar skeleton top to bottom. Which section change felt strongest, and which felt weak? Name one thing you could change (bass rhythm, drums, chord order, register) to make the weak change clearer.", "minWords": 25 }
}
```
