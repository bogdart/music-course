---
id: w51-l2-final-song-arranging
title: "Final Project 2: Structure and Arrangement"
week: 51
order: 2
phase: p5
duration_min: 50
goals:
  - Expand the 16-bar core into the full 3+ minute structure with drums and bass (checkpoint 4)
  - Plan an energy curve and arrange layers and transitions to match it (checkpoint 5)
  - Make every repeated section different from the last by at least one layer
prerequisites: [w51-l1-final-song-writing]
tags: [songwriting, final-project, arrangement, layers, daw]
---

# Final Project 2: Structure and Arrangement

You have a core. Today you turn 16 bars into a whole song. This is where most home-made songs lose steam: the core gets copy-pasted until the timeline is long enough, and the result is three minutes of the same thing. Your transcription work gives you the antidote — you've now mapped the layers of a dozen songs and seen how they keep repeats alive.

## Checkpoint 4 — full structure

Copy the core into your form map from last lesson. Then program **drums and bass for the whole song first**, section by section. Rules you've heard in every reference:

- Intro: a subset of the chorus (drums only, or keys only).
- Verse 2 is not verse 1: add one layer or change the drum pattern.
- Fill into every new section; crash on its downbeat.
- The bridge contrasts: new chord order, or drop the drums, or a half-time feel.

## Checkpoint 5 — the energy curve

Draw your [[energy curve]] on paper *before* adding layers: a line over the form, low for the intro, rising through the verses, peaking in the last chorus, falling for the outro. Then arrange to the drawing. Every section must sit at a different height from its neighbours — if two adjacent sections are at the same level, change one.

Hear the same 4-bar chorus core at two heights:

```example
{
  "title": "Chorus at energy level 2 — keys, bass, melody",
  "bpm": 100, "timeSig": "4/4", "key": "G",
  "tracks": [
    { "instrument": "bass", "seq": "C2:q. C2:8 C2:h | D2:q. D2:8 D2:h | E2:q. E2:8 E2:h | G1:q. G1:8 G1:h" },
    { "instrument": "piano", "seq": "[G3 C4 E4]:h [G3 C4 E4]:h | [A3 D4 F#4]:h [A3 D4 F#4]:h | [G3 B3 E4]:h [G3 B3 E4]:h | [G3 B3 D4]:h [G3 B3 D4]:h" },
    { "instrument": "lead", "seq": "E5:q. D5:8 C5:q G4:q | F#5:q. E5:8 D5:h | E5:q. D5:8 B4:q G4:q | G4:h. r:q" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

```example
{
  "title": "Same chorus at energy level 5 — plus drums, strings, pluck",
  "bpm": 100, "timeSig": "4/4", "key": "G",
  "tracks": [
    { "instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 tom:16 tom:16 tom:16 tom:16 snare:16 snare:16 snare:16 snare:16" },
    { "instrument": "bass", "seq": "C2:q. C2:8 C2:h | D2:q. D2:8 D2:h | E2:q. E2:8 E2:h | G1:q. G1:8 G1:h" },
    { "instrument": "piano", "seq": "[G3 C4 E4]:h [G3 C4 E4]:h | [A3 D4 F#4]:h [A3 D4 F#4]:h | [G3 B3 E4]:h [G3 B3 E4]:h | [G3 B3 D4]:h [G3 B3 D4]:h" },
    { "instrument": "strings", "seq": "[C4 E4 G4]:w | [D4 F#4 A4]:w | [E4 G4 B4]:w | [D4 G4 B4]:w" },
    { "instrument": "pluck", "seq": "G5:8 E5:8 C5:8 E5:8 G5:8 E5:8 C5:8 E5:8 | A5:8 F#5:8 D5:8 F#5:8 A5:8 F#5:8 D5:8 F#5:8 | G5:8 E5:8 B4:8 E5:8 G5:8 E5:8 B4:8 E5:8 | G5:8 D5:8 B4:8 D5:8 G5:8 D5:8 B4:8 D5:8" },
    { "instrument": "lead", "seq": "E5:q. D5:8 C5:q G4:q | F#5:q. E5:8 D5:h | E5:q. D5:8 B4:q G4:q | G4:h. r:q" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

Nothing about the song changed — chords, bass and melody are identical. The height came from layers, register (the pluck sits above the melody) and rhythm density.

```exercise
{
  "id": "w51l2-listen",
  "type": "listen",
  "title": "What lifted the energy?",
  "spec": {
    "example": {
      "title": "Level 5 chorus",
      "bpm": 100, "timeSig": "4/4", "key": "G",
      "tracks": [
        { "instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 tom:16 tom:16 tom:16 tom:16 snare:16 snare:16 snare:16 snare:16" }, { "instrument": "bass", "seq": "C2:q. C2:8 C2:h | D2:q. D2:8 D2:h | E2:q. E2:8 E2:h | G1:q. G1:8 G1:h" }, { "instrument": "piano", "seq": "[G3 C4 E4]:h [G3 C4 E4]:h | [A3 D4 F#4]:h [A3 D4 F#4]:h | [G3 B3 E4]:h [G3 B3 E4]:h | [G3 B3 D4]:h [G3 B3 D4]:h" },
        { "instrument": "strings", "seq": "[C4 E4 G4]:w | [D4 F#4 A4]:w | [E4 G4 B4]:w | [D4 G4 B4]:w" }, { "instrument": "pluck", "seq": "G5:8 E5:8 C5:8 E5:8 G5:8 E5:8 C5:8 E5:8 | A5:8 F#5:8 D5:8 F#5:8 A5:8 F#5:8 D5:8 F#5:8 | G5:8 E5:8 B4:8 E5:8 G5:8 E5:8 B4:8 E5:8 | G5:8 D5:8 B4:8 D5:8 G5:8 D5:8 B4:8 D5:8" }, { "instrument": "lead", "seq": "E5:q. D5:8 C5:q G4:q | F#5:q. E5:8 D5:h | E5:q. D5:8 B4:q G4:q | G4:h. r:q" }
      ],
      "loop": true
    },
    "questions": [
      { "q": "Which new layer sits highest in register?", "choices": ["Strings", "Pluck arpeggio", "Bass", "Piano"], "answer": 1 },
      { "q": "Which new layer is sustained?", "choices": ["Strings", "Pluck", "Drums", "Lead"], "answer": 0 },
      { "q": "What happens in the last bar of the drums?", "choices": ["A tom-and-snare fill into the next section", "Silence", "A tempo change", "A key change"], "answer": 0 }
    ]
  }
}
```

```exercise
{
  "id": "w51l2-qual",
  "type": "ear-chord",
  "title": "Warm-up: all qualities",
  "count": 10,
  "passScore": 0.8,
  "spec": { "qualities": ["maj", "min", "maj7", "min7", "dom7", "sus4"], "inversions": [0], "voicing": "mixed", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "w51l2-fill",
  "type": "rhythm-tap",
  "title": "Tap a section fill",
  "spec": { "bpm": 90, "timeSig": "4/4", "seq": "x:q x:q x:q x:q | x:q x:q x:16 x:16 x:16 x:16 x:16 x:16 x:16 x:16", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "w51l2-cp4",
  "type": "daw-task",
  "title": "Checkpoint 4: full structure with drums and bass",
  "spec": {
    "template": { "bpm": 100, "key": "C", "tracks": [
      { "instrument": "piano", "seq": "" }, { "instrument": "bass", "seq": "" }, { "instrument": "lead", "seq": "" }, { "instrument": "drums", "seq": "" } ] },
    "task": "In your final-project project: lay out the whole form (bars ≥ BPM × 0.75; at 100 BPM that's 76+), copy the core into every section, and program drums and bass for the full length — fills into each section, verse 2 different from verse 1, a contrasting bridge.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "bass", "lead", "drums"] },
      { "kind": "bars", "min": 76 },
      { "kind": "drum-pattern", "requires": ["kick", "snare"], "track": 3 },
      { "kind": "note-count", "min": 76, "track": 1 },
      { "kind": "custom", "id": "w51-cp4-length", "note": "Self-check: bars ≥ BPM × 0.75 for your actual tempo." }
    ],
    "minBars": 76
  }
}
```

```exercise
{
  "id": "w51l2-cp5",
  "type": "daw-task",
  "title": "Checkpoint 5: layers to the energy curve",
  "spec": {
    "template": { "bpm": 100, "key": "C", "tracks": [
      { "instrument": "piano", "seq": "" }, { "instrument": "bass", "seq": "" }, { "instrument": "lead", "seq": "" }, { "instrument": "drums", "seq": "" },
      { "instrument": "strings", "seq": "" }, { "instrument": "pluck", "seq": "" } ] },
    "task": "Add at least two more layers (e.g. strings or pad for sustain, pluck or epiano for rhythm/high register, a counter-melody) following your energy curve. Every section must differ from the section before it by at least one layer or pattern. The last chorus is the fullest section in the song.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "bass", "lead", "drums", "strings", "pluck"] },
      { "kind": "bars", "min": 76 },
      { "kind": "custom", "id": "w51-cp5-curve", "note": "Self-check: play each section boundary; the energy change matches your drawn curve." }
    ],
    "minBars": 76
  }
}
```

```exercise
{
  "id": "w51l2-curve",
  "type": "reflect",
  "title": "Your energy curve in words",
  "spec": { "prompt": "Describe your energy curve section by section (1–5 scale) and name the layer or pattern change that creates each step.", "minWords": 40 }
}
```
