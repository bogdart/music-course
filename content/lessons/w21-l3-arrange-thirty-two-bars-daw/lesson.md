---
id: w21-l3-arrange-thirty-two-bars-daw
title: Counter-Melody and a 32-Bar Arrangement
week: 21
order: 3
phase: p3
duration_min: 50
goals:
  - Write a counter-melody that moves when the main melody rests or holds
  - Arrange a 32-bar song (verse, chorus, verse, chorus) with a clear dynamic curve
  - Use layers, register and velocity to make the second chorus the peak
prerequisites: [w21-l2-textural-build]
tags: [arrangement, counter-melody, dynamics, daw, ear]
songs: []
---

# Counter-Melody and a 32-Bar Arrangement

## Counter-melody

A [[counter-melody]] is a second tune that talks *with* the main melody instead of over it. Three rules keep it from getting in the way:

1. **Move when the melody holds.** When the lead sits on a long note or rests, the counter-melody moves; when the lead is busy, it holds.
2. **Different register.** Usually below the lead (strings, a soft synth) — sometimes a high answer above.
3. **Mostly contrary or oblique motion.** If the lead goes up, go down or stay. Avoid parallel fifths and octaves with the lead: they make the two lines melt into one.

Listen to the chorus of "Night Bus", an original song. The strings hold under the busy bars and move in bars 2, 4 and 8, where the lead holds.

```example
{
  "title": "Night Bus chorus with a string counter-melody",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "r:8 G4:8 C5:8 C5:8 C5:q B4:q | B4:q. A4:8 G4:h | r:8 A4:8 C5:8 C5:8 E5:q D5:q | C5:w | r:8 G4:8 C5:8 C5:8 C5:q B4:q | B4:q. C5:8 D5:h | E5:q. D5:8 C5:q A4:q | C5:h. r:q" },
    { "instrument": "strings", "seq": "E4:w | D4:h B3:8 C4:8 D4:q | C4:w | A3:q C4:q D4:q E4:q | E4:w | D4:h B3:h | C4:h E4:h | F4:q E4:q C4:h" },
    { "instrument": "epiano", "seq": "[C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w | [C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w" },
    { "instrument": "bass", "seq": "C2:h C2:h | G1:h G1:h | A1:h A1:h | F1:h F1:h | C2:h C2:h | G1:h G1:h | A1:h A1:h | F1:h F1:h" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

## Dynamics across the form

A 32-bar song (V8 C8 V8 C8) needs an energy **curve**, not a flat line. A reliable plan:

- **Verse 1** — thin: epiano + bass, drums light or absent. Velocity ~70%.
- **Chorus 1** — add drums, pad and the counter-melody. Velocity ~85%.
- **Verse 2** — *don't drop all the way back*: keep drums (hats + kick) so the song feels like it's moving forward.
- **Chorus 2** — everything: full drums with crash, pad, counter-melody, lead doubled an octave lower. Velocity ~100%.

Use the tools from this week: layers (texture), register (doubling), rhythm (pad vs comp) and velocity. In the DAW you can also lower a whole track's volume in the mixer for verse sections by splitting clips.

```exercise
{
  "id": "counter-quiz",
  "type": "quiz",
  "passScore": 0.8,
  "spec": { "questions": [
    { "q": "When should a counter-melody move?", "choices": ["Exactly with the lead", "When the lead holds or rests", "Only in the intro", "Never - it only holds"], "answer": 1 },
    { "q": "Which motion keeps two lines independent?", "choices": ["Parallel octaves", "Parallel fifths", "Contrary motion", "Unison"], "answer": 2 },
    { "q": "Which section should usually be the peak of a V-C-V-C song?", "choices": ["Verse 1", "Chorus 1", "Verse 2", "Chorus 2"], "answer": 3 },
    { "q": "Why keep some drums in verse 2?", "choices": ["So the song feels like it moves forward", "Because verses must be loud", "To change key", "To avoid a counter-melody"], "answer": 0 }
  ] }
}
```

```exercise
{
  "id": "play-counter-melody",
  "type": "play-melody",
  "title": "Play the counter-melody",
  "passScore": 0.75,
  "spec": { "bpm": 84, "timeSig": "4/4", "key": "C", "seq": "E4:w | D4:h B3:8 C4:8 D4:q | C4:w | A3:q C4:q D4:q E4:q | E4:w | D4:h B3:h | C4:h E4:h | F4:q E4:q C4:h", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "lead", "seq": "r:8 G4:8 C5:8 C5:8 C5:q B4:q | B4:q. A4:8 G4:h | r:8 A4:8 C5:8 C5:8 E5:q D5:q | C5:w | r:8 G4:8 C5:8 C5:8 C5:q B4:q | B4:q. C5:8 D5:h | E5:q. D5:8 C5:q A4:q | C5:h. r:q" } }
}
```

```exercise
{
  "id": "daw-counter-melody",
  "type": "daw-task",
  "title": "Write a counter-melody",
  "spec": {
    "template": { "bpm": 100, "key": "C", "tracks": [
      { "instrument": "lead", "seq": "r:8 G4:8 C5:8 C5:8 C5:q B4:q | B4:q. A4:8 G4:h | r:8 A4:8 C5:8 C5:8 E5:q D5:q | C5:w | r:8 G4:8 C5:8 C5:8 C5:q B4:q | B4:q. C5:8 D5:h | E5:q. D5:8 C5:q A4:q | C5:h. r:q" },
      { "instrument": "epiano", "seq": "[C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w | [C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w" },
      { "instrument": "strings", "seq": "" }
    ] },
    "task": "Write your own string counter-melody for the Night Bus chorus (not the one above). Stay between G3 and G4 (below the lead), hold during busy lead bars, move in bars 2, 4, 6 and 8. Chord tones on beat 1.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "C", "scale": "major", "track": 2 },
      { "kind": "range", "low": "G3", "high": "G4", "track": 2 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "V", "vi", "IV", "I", "V", "vi", "IV"], "barsPerChord": 1, "minRatio": 0.85, "track": 2 },
      { "kind": "no-parallel-fifths", "tracks": [0, 2] },
      { "kind": "note-count", "min": 10, "max": 32, "track": 2 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "daw-arrange-32",
  "type": "daw-task",
  "title": "Arrange Night Bus: 32 bars with a dynamic curve",
  "spec": {
    "template": { "bpm": 100, "key": "C", "tracks": [
      { "instrument": "lead", "seq": "E4:q. E4:8 D4:q C4:q | C4:q D4:8 C4:8 A3:h | E4:q. E4:8 G4:q E4:q | D4:w | E4:q. E4:8 D4:q C4:q | C4:q D4:8 C4:8 A3:h | G4:q. G4:8 E4:q C4:q | D4:h. r:q | r:8 G4:8 C5:8 C5:8 C5:q B4:q | B4:q. A4:8 G4:h | r:8 A4:8 C5:8 C5:8 E5:q D5:q | C5:w | r:8 G4:8 C5:8 C5:8 C5:q B4:q | B4:q. C5:8 D5:h | E5:q. D5:8 C5:q A4:q | C5:h. r:q | E4:q. E4:8 D4:q C4:q | C4:q D4:8 C4:8 A3:h | E4:q. E4:8 G4:q E4:q | D4:w | E4:q. E4:8 D4:q C4:q | C4:q D4:8 C4:8 A3:h | G4:q. G4:8 E4:q C4:q | D4:h. r:q | r:8 G4:8 C5:8 C5:8 C5:q B4:q | B4:q. A4:8 G4:h | r:8 A4:8 C5:8 C5:8 E5:q D5:q | C5:w | r:8 G4:8 C5:8 C5:8 C5:q B4:q | B4:q. C5:8 D5:h | E5:q. D5:8 C5:q A4:q | C5:h. r:q" },
      { "instrument": "epiano", "seq": "[A2 E3 C4]:w | [F2 C3 A3]:w | [C3 G3 E4]:w | [G2 D3 B3]:w | [A2 E3 C4]:w | [F2 C3 A3]:w | [C3 G3 E4]:w | [G2 D3 B3]:w | [C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w | [C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w | [A2 E3 C4]:w | [F2 C3 A3]:w | [C3 G3 E4]:w | [G2 D3 B3]:w | [A2 E3 C4]:w | [F2 C3 A3]:w | [C3 G3 E4]:w | [G2 D3 B3]:w | [C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w | [C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "drums", "seq": "" },
      { "instrument": "pad", "seq": "" },
      { "instrument": "strings", "seq": "" }
    ] },
    "task": "Melody and chords are given: Verse (vi-IV-I-V) 8 bars, Chorus (I-V-vi-IV) 8 bars, twice. Arrange it: bass and drums following the dynamics plan, pad in the choruses, your counter-melody in chorus 1 and 2, lead doubling (strings an octave lower) in chorus 2 only, a fill before each chorus. Set velocities so the curve rises: verse 1 < chorus 1 < verse 2 < chorus 2.",
    "checks": [
      { "kind": "bars", "min": 32, "max": 32 },
      { "kind": "has-tracks", "instruments": ["lead", "epiano", "bass", "drums", "pad", "strings"] },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": true, "track": 2 },
      { "kind": "range", "low": "E1", "high": "C3", "track": 2 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat", "crash", "tom"], "snareOnBeats": [2, 4], "track": 3 },
      { "kind": "in-key", "key": "C", "scale": "major", "track": 4 },
      { "kind": "custom", "id": "dynamic-curve", "note": "Self-check: listen through - each section is a step bigger than the one before; chorus 2 is the peak." }
    ],
    "minBars": 32, "maxBars": 32
  }
}
```

```exercise
{
  "id": "ear-dictation-bb",
  "type": "ear-melody",
  "title": "Dictation in Bb (degrees)",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "Bb", "degrees": [1, 2, 3, 4, 5, 6, 7], "length": 6, "rhythm": "simple", "answer": "degrees" }
}
```

```exercise
{
  "id": "reflect-32",
  "type": "reflect",
  "spec": { "prompt": "Listen to your 32-bar arrangement with eyes closed. Draw the energy curve you actually hear (e.g. low-mid-mid-high). Does it match your plan? Which single change made the biggest difference?", "minWords": 30 }
}
```
