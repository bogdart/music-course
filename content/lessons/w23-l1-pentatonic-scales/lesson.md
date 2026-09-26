---
id: w23-l1-pentatonic-scales
title: The Pentatonic Scales
week: 23
order: 1
phase: p3
duration_min: 45
goals:
  - Build major pentatonic (1 2 3 5 6) and minor pentatonic (1 b3 4 5 b7) from any root
  - Understand why pentatonic melodies fit almost any chord in the key
  - Take down pentatonic melodies by ear
prerequisites: [w22-l3-modal-sketches-daw]
tags: [pentatonic, scales, melody, ear]
songs:
  - { title: "Amazing Grace", composer: "John Newton (words), traditional tune", public_domain: true }
---

# The Pentatonic Scales

The [[pentatonic scale]] has five notes per octave and **no half steps**. It is the oldest scale family in the world — Scottish folk, West African music, Chinese and Japanese traditional music, blues, rock, gospel and pop all use it.

## Two pentatonics, one shape

- **Major pentatonic** = major scale **minus 4 and 7**: 1 2 3 5 6. In G: G A B D E.
- **Minor pentatonic** = natural minor **minus 2 and 6**: 1 b3 4 5 b7. In E: E G A B D.

They share notes the same way relative keys do: **G major pentatonic and E minor pentatonic are the same five notes** with a different home.

```keyboard
{ "range": ["C4", "C5"], "highlight": ["G4", "A4", "B4", "D4", "E4"], "labels": "names", "colors": { "G4": "root" } }
```

## Why it's "impossible to play wrong"

Degrees 4 and 7 are the notes that clash most with chords: 4 rubs against the 3 of the I chord, and 7 rubs against the root. Pentatonic simply leaves them out. What remains fits I, IV, V and vi well enough that you can improvise over a whole progression without thinking. That makes it the perfect tool for hooks, riffs and your first solos.

The first phrase of "Amazing Grace" uses only G major pentatonic — every note is G, A, B, D or E:

```example
{
  "title": "Amazing Grace, first phrase (traditional) - G major pentatonic",
  "bpm": 80, "timeSig": "3/4", "key": "G",
  "tracks": [
    { "instrument": "lead", "seq": "r:h D4:q | G4:h B4:8 G4:8 | B4:h A4:q | G4:h E4:q | D4:h D4:q | G4:h B4:8 G4:8 | B4:h A4:q | D5:h. | D5:h. | r:h." },
    { "instrument": "piano", "seq": "r:h. | [G3 B3 D4]:h. | [G3 B3 D4]:h. | [G3 C4 E4]:h. | [G3 B3 D4]:h. | [G3 B3 D4]:h. | [G3 B3 E4]:h. | [F#3 A3 D4]:h. | [F#3 A3 D4]:h. | [G3 B3 D4]:h." }
  ],
  "show": ["staff"],
  "loop": false
}
```

And here is an original A minor pentatonic melody (A C D E G) over Am – F – C – G. Notice how it sits comfortably over every chord:

```example
{
  "title": "A minor pentatonic melody over Am - F - C - G",
  "bpm": 96, "timeSig": "4/4", "key": "Am",
  "tracks": [
    { "instrument": "lead", "seq": "E5:q. D5:8 C5:q A4:q | C5:q. A4:8 G4:h | E4:q G4:q A4:q C5:q | D5:q C5:8 A4:8 A4:h" },
    { "instrument": "pad", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w" },
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

```exercise
{
  "id": "build-major-penta",
  "type": "build-scale",
  "title": "Build major pentatonic",
  "count": 6,
  "passScore": 0.8,
  "spec": { "roots": ["C", "G", "D", "F", "A", "E"], "scale": "major-pentatonic", "prompt": "name" }
}
```

```exercise
{
  "id": "play-a-minor-penta",
  "type": "play-scale",
  "title": "Play A minor pentatonic, two octaves",
  "passScore": 0.8,
  "spec": { "root": "A", "scale": "minor-pentatonic", "octaves": 2, "direction": "asc-desc", "hands": "right", "tempo": 72, "metronome": true }
}
```

```exercise
{
  "id": "play-amazing-grace",
  "type": "play-melody",
  "title": "Play the first phrase of Amazing Grace",
  "passScore": 0.75,
  "spec": { "bpm": 72, "timeSig": "3/4", "key": "G", "seq": "r:h D4:q | G4:h B4:8 G4:8 | B4:h A4:q | G4:h E4:q | D4:h D4:q | G4:h B4:8 G4:8 | B4:h A4:q | D5:h. | D5:h. | r:h.", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "pad", "seq": "r:h. | [G3 B3 D4]:h. | [G3 B3 D4]:h. | [G3 C4 E4]:h. | [G3 B3 D4]:h. | [G3 B3 D4]:h. | [G3 B3 E4]:h. | [F#3 A3 D4]:h. | [F#3 A3 D4]:h. | [G3 B3 D4]:h." } }
}
```

```exercise
{
  "id": "ear-penta-scales",
  "type": "ear-scale",
  "title": "Five notes or seven?",
  "count": 10,
  "passScore": 0.75,
  "spec": { "scales": ["major", "major-pentatonic", "natural-minor", "minor-pentatonic"], "play": "asc-desc" }
}
```

```exercise
{
  "id": "ear-penta-dictation",
  "type": "ear-melody",
  "title": "Pentatonic melodic dictation",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "random", "degrees": [1, 2, 3, 5, 6], "length": 6, "rhythm": "simple", "answer": "play" }
}
```

```exercise
{
  "id": "daw-penta-improv",
  "type": "daw-task",
  "title": "Record a pentatonic melody",
  "spec": {
    "template": { "bpm": 96, "key": "Am", "tracks": [
      { "instrument": "pad", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w | [A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w" },
      { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" },
      { "instrument": "lead", "seq": "" }
    ] },
    "task": "Loop the 8 bars and improvise with A minor pentatonic only (A C D E G). Record several takes, keep the best one, then quantise lightly. It should end on A.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "A", "scale": "minor-pentatonic", "track": 2 },
      { "kind": "note-count", "min": 16, "max": 64, "track": 2 },
      { "kind": "ends-on", "degree": 1, "track": 2 },
      { "kind": "range", "low": "A3", "high": "A5", "track": 2 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```
