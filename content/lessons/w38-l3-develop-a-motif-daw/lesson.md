---
id: w38-l3-develop-a-motif-daw
title: Develop a Motif for 32 Bars
week: 38
order: 3
phase: p4
duration_min: 50
goals:
  - Build 32 bars of music from one motif (over two sessions)
  - Use at least four development techniques and one change of key or mode
  - Orchestrate the arc so the texture grows toward the climax
prerequisites: [w38-l2-through-composed-forms]
tags: [composition, motif, development, daw, form]
---

# Develop a Motif for 32 Bars

This is the longest single-idea piece you've written: **everything grows from one motif** — melody, bass line, even accompaniment figures. **It spans two sessions:** bars 1–16 in the first, bars 17–32 in the second. Both tasks below open the same project.

## The plan

| Bars | Stage | Techniques | Texture |
|------|-------|------------|---------|
| 1–8 | Statement | motif, answer, sequence | 1–2 instruments |
| 9–16 | Development 1 | inversion, fragmentation; move to the relative minor | add a bass line made from the motif in augmentation |
| 17–24 | Development 2 → climax | diminution, climbing sequence; climax around bar 22 | full: melody, counter-line, bass, pad, maybe drums |
| 25–32 | Return + coda | the motif transformed (augmented, reharmonised or in a new register) | thin back out, end on the tonic |

## Tips

- **Pick a motif with character:** a distinctive interval (a leap of a 4th or 6th) and a distinctive rhythm (a dotted figure or a syncopation). Bland motifs develop blandly.
- **Put the motif in more than one layer.** The bass can play it in augmentation while the melody plays it normally — hear it below.
- **Change key once.** C major → A minor → back to C is enough to freshen the middle.
- **Sketch the arc first:** write down the highest note you plan for each 4-bar block. They should rise to bar 22 and fall after.

```example
{
  "title": "Dotted motif in the melody; the same shape augmented in the bass (original)",
  "bpm": 96, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "G4:8. A4:16 C5:q E5:h | D5:8. C5:16 A4:q G4:h | G4:8. A4:16 C5:q E5:h | F5:8. E5:16 D5:q C5:h |" },
    { "instrument": "bass", "seq": "C2:q. D2:8 F2:h | A2:w | G2:q. A2:8 C3:h | E2:w |" }
  ],
  "show": ["staff"]
}
```

The bass starts on C instead of G but keeps the motif's steps and leap (up, up, up a 3rd), twice as slow.

## Warm-up

```exercise
{
  "id": "e1-play-motif",
  "type": "play-melody",
  "title": "Play the dotted motif",
  "passScore": 0.7,
  "spec": {
    "bpm": 84, "timeSig": "4/4", "key": "C",
    "seq": "G4:8. A4:16 C5:q E5:h | D5:8. C5:16 A4:q G4:h | G4:8. A4:16 C5:q E5:h | F5:8. E5:16 D5:q C5:h |",
    "showStaff": true, "showKeyboard": true, "countIn": 1
  }
}
```

```exercise
{
  "id": "e2-tap-dotted",
  "type": "rhythm-tap",
  "title": "Tap the dotted rhythm",
  "passScore": 0.7,
  "spec": { "bpm": 84, "timeSig": "4/4", "seq": "x:8. x:16 x:q x:h |", "showNotation": true, "countIn": 1, "loops": 4 }
}
```

```ladder
{ "skill": "rhythm", "unlocks": 16, "intro": "Rhythm is half of a motif's character — this drill runs at your current rhythm rung." }
```

```ladder
{ "skill": "chords", "unlocks": 14, "intro": "Reharmonising the return means choosing chord colours — practise them at your current rung." }
```

## Session 1: bars 1–16

```exercise
{
  "id": "e3-daw-first-half",
  "type": "daw-task",
  "title": "Statement and development 1",
  "instructions": "Bars 1–16 of the plan: state the motif, answer and sequence it (1–8); invert and fragment it in A minor with the bass playing the motif in augmentation (9–16).",
  "spec": {
    "template": {
      "bpm": 96, "key": "C", "timeSig": "4/4",
      "tracks": [
        { "instrument": "lead", "seq": "" },
        { "instrument": "bass", "seq": "" },
        { "instrument": "strings", "seq": "" },
        { "instrument": "pad", "seq": "" },
        { "instrument": "drums", "seq": "" }
      ],
      "markers": [{ "bar": 1, "name": "Statement" }, { "bar": 9, "name": "Development 1" }, { "bar": 17, "name": "Development 2" }, { "bar": 25, "name": "Return" }]
    },
    "projectRef": "w38-motif-32",
    "task": "First 16 bars of a 32-bar piece from one motif.",
    "checks": [
      { "kind": "bars", "min": 16, "max": 32 },
      { "kind": "has-tracks", "instruments": ["lead", "bass"] },
      { "kind": "repetition", "motifBars": 1, "minRepeats": 3, "allowTransposed": true, "track": 0 },
      { "kind": "custom", "id": "half-one", "note": "Self-check: sequence, inversion and fragmentation appear; bars 9–16 lean on A minor." }
    ],
    "minBars": 32
  }
}
```

## Session 2: bars 17–32

```exercise
{
  "id": "e4-daw-second-half",
  "type": "daw-task",
  "title": "Climax and return",
  "instructions": "Continue the same project: climb to a climax around bar 22 with diminution and a rising sequence and the fullest texture; then bring the motif back transformed and thin the texture out, ending on C.",
  "spec": {
    "template": {
      "bpm": 96, "key": "C", "timeSig": "4/4",
      "tracks": [
        { "instrument": "lead", "seq": "" },
        { "instrument": "bass", "seq": "" },
        { "instrument": "strings", "seq": "" },
        { "instrument": "pad", "seq": "" },
        { "instrument": "drums", "seq": "" }
      ]
    },
    "projectRef": "w38-motif-32",
    "task": "The complete 32-bar developmental piece.",
    "checks": [
      { "kind": "bars", "min": 32, "max": 32 },
      { "kind": "has-tracks", "instruments": ["lead", "bass", "strings", "pad"] },
      { "kind": "repetition", "motifBars": 1, "minRepeats": 4, "allowTransposed": true, "track": 0 },
      { "kind": "contour", "shape": "arch", "track": 0 },
      { "kind": "ends-on", "degree": 1, "track": 1 },
      { "kind": "custom", "id": "four-techniques", "note": "Self-check: at least four of sequence, inversion, augmentation, diminution, fragmentation; one key or mode change." }
    ],
    "minBars": 32, "maxBars": 32
  }
}
```

```exercise
{
  "id": "e5-reflect",
  "type": "reflect",
  "title": "Trace the family tree",
  "spec": {
    "prompt": "List four places in your piece where the motif appears and what was done to it each time. Which transformation surprised you most when you heard it?",
    "minWords": 30
  }
}
```
