---
id: w21-l1-frequency-roles-and-doubling
title: Frequency Roles and Doubling
week: 21
order: 1
phase: p3
duration_min: 45
goals:
  - Give each layer its own register so the arrangement sounds clear, not muddy
  - Use spread chord voicings that leave room for bass and melody
  - Strengthen a melody by doubling it in octaves or on a second instrument
prerequisites: [w20-l3-drum-arrangement-with-fills-daw]
tags: [arrangement, layering, voicing, daw, ear]
songs: []
---

# Frequency Roles and Doubling

Your songs now have four or five tracks. When they all play in the same register, they blur into mud — you can't hear the melody, the bass loses punch, the chords go grey. The fix is not mixing, it is **arranging**: give each layer its own space. These are its [[frequency roles]]:

| Register | Roughly | Who lives there |
|---|---|---|
| **Low** | E1–C3 | Bass, kick |
| **Low-mid** | C3–E4 | Chords, pads (spread voicings) |
| **Mid-high** | E4–C6 | Lead melody, counter-melodies |
| **Top** | above C6 | Hi-hats, cymbals, shimmer |

Two rules follow. **Keep chords below the melody** — the top chord note should sit under the melody's lowest note. **Keep chords above the bass** — close triads below C3 turn muddy, so spread them: root low, third and fifth higher.

Listen to the same four bars twice. First everything is squeezed around C3–E4:

```example
{
  "title": "Crowded: bass, pad, piano and lead all in the same register",
  "bpm": 92, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "E4:q. D4:8 C4:q G3:q | B3:q. C4:8 D4:h | C4:q. B3:8 A3:q C4:q | A3:w" },
    { "instrument": "pad", "seq": "[C3 E3 G3]:w | [B2 D3 G3]:w | [A2 C3 E3]:w | [A2 C3 F3]:w" },
    { "instrument": "piano", "seq": "[C3 E3 G3]:w | [B2 D3 G3]:w | [A2 C3 E3]:w | [A2 C3 F3]:w" },
    { "instrument": "bass", "seq": "C3:h C3:h | G2:h G2:h | A2:h A2:h | F2:h F2:h" }
  ],
  "show": ["pianoroll"],
  "loop": false
}
```

Now each layer has its own floor of the building:

```example
{
  "title": "Arranged: bass low, spread pad in the middle, lead on top, hats above",
  "bpm": 92, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "E5:q. D5:8 C5:q G4:q | B4:q. C5:8 D5:h | C5:q. B4:8 A4:q C5:q | A4:w" },
    { "instrument": "pad", "seq": "[C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w" },
    { "instrument": "bass", "seq": "C2:h C2:h | G1:h G1:h | A1:h A1:h | F1:h F1:h" },
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" }
  ],
  "show": ["pianoroll"],
  "loop": false
}
```

## Doubling

[[Doubling]] means two instruments play the same line. In **unison** it thickens the sound; **in octaves** it makes the line bigger and more present without adding new notes. Chorus melodies are often doubled an octave lower by strings or a synth — the verse then sounds smaller by comparison, which is exactly the contrast you want.

```example
{
  "title": "Lead doubled an octave lower by strings",
  "bpm": 92, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "E5:q. D5:8 C5:q G4:q | B4:q. C5:8 D5:h | C5:q. B4:8 A4:q C5:q | A4:w" },
    { "instrument": "strings", "seq": "E4:q. D4:8 C4:q G3:q | B3:q. C4:8 D4:h | C4:q. B3:8 A3:q C4:q | A3:w" },
    { "instrument": "bass", "seq": "C2:h C2:h | G1:h G1:h | A1:h A1:h | F1:h F1:h" },
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" }
  ],
  "show": ["pianoroll"],
  "loop": false
}
```

```exercise
{
  "id": "register-quiz",
  "type": "quiz",
  "passScore": 0.8,
  "spec": { "questions": [
    { "q": "Where should the top note of your chord voicing sit?", "choices": ["Above the melody", "Below the melody's lowest note", "In the bass register", "It doesn't matter"], "answer": 1 },
    { "q": "Close triads below C3 tend to sound...", "choices": ["Bright", "Muddy", "Thin", "Out of tune"], "answer": 1 },
    { "q": "Doubling a melody an octave lower mainly makes it...", "choices": ["Harmonically richer", "Bigger and more present", "Quieter", "Faster"], "answer": 1 },
    { "q": "Which pair shares the low register?", "choices": ["Bass and kick", "Lead and hi-hat", "Pad and crash", "Snare and lead"], "answer": 0 }
  ] }
}
```

```exercise
{
  "id": "play-spread-voicings",
  "type": "play-notes",
  "title": "Play spread voicings",
  "instructions": "Play each voicing as one chord: C3 G3 E4 (C), then B2 G3 D4 (G), C3 A3 E4 (Am), C3 A3 F4 (F). Here: the C voicing.",
  "count": 6,
  "spec": { "prompt": "names", "notes": ["C3", "G3", "E4"], "ordered": false, "key": "C" }
}
```

```exercise
{
  "id": "ear-open-voicings",
  "type": "ear-chord",
  "title": "Chord quality in open voicing",
  "count": 10,
  "passScore": 0.75,
  "spec": { "qualities": ["maj", "min", "maj7", "min7", "dom7"], "inversions": [0], "voicing": "open", "range": ["C2", "C5"] }
}
```

```exercise
{
  "id": "daw-demud",
  "type": "daw-task",
  "title": "Un-muddy the arrangement",
  "spec": {
    "template": { "bpm": 92, "key": "C", "tracks": [
      { "instrument": "lead", "seq": "E4:q. D4:8 C4:q G3:q | B3:q. C4:8 D4:h | C4:q. B3:8 A3:q C4:q | A3:w" },
      { "instrument": "pad", "seq": "[C3 E3 G3]:w | [B2 D3 G3]:w | [A2 C3 E3]:w | [A2 C3 F3]:w" },
      { "instrument": "bass", "seq": "C3:h C3:h | G2:h G2:h | A2:h A2:h | F2:h F2:h" }
    ] },
    "task": "This is the crowded version. Move every part to its own register: lead up an octave, pad into spread voicings with the top note below the melody, bass down an octave. Don't change any pitch classes - only octaves and voicings.",
    "checks": [
      { "kind": "range", "low": "E4", "high": "C6", "track": 0 },
      { "kind": "range", "low": "B2", "high": "G4", "track": 1 },
      { "kind": "range", "low": "E1", "high": "C3", "track": 2 },
      { "kind": "in-key", "key": "C", "scale": "major", "track": 1 },
      { "kind": "bars", "min": 4, "max": 4 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

```exercise
{
  "id": "daw-double-lead",
  "type": "daw-task",
  "title": "Double your chorus",
  "spec": {
    "template": { "bpm": 92, "key": "C", "tracks": [
      { "instrument": "lead", "seq": "E5:q. D5:8 C5:q G4:q | B4:q. C5:8 D5:h | C5:q. B4:8 A4:q C5:q | A4:w" },
      { "instrument": "pad", "seq": "[C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w" },
      { "instrument": "bass", "seq": "C2:h C2:h | G1:h G1:h | A1:h A1:h | F1:h F1:h" },
      { "instrument": "strings", "seq": "" }
    ] },
    "task": "Double the lead an octave lower on the strings track. Then try a second version: strings double only bars 3-4. Keep the version you prefer and note why in the next exercise.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["lead", "pad", "bass", "strings"] },
      { "kind": "range", "low": "G3", "high": "E5", "track": 3 },
      { "kind": "in-key", "key": "C", "scale": "major", "track": 3 },
      { "kind": "note-count", "min": 4, "track": 3 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

```exercise
{
  "id": "ear-melody-f-layers",
  "type": "ear-melody",
  "title": "Dictation in F",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "F", "degrees": [1, 2, 3, 4, 5, 6, 7], "length": 6, "rhythm": "simple", "answer": "play" }
}
```
