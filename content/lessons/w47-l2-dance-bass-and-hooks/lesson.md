---
id: w47-l2-dance-bass-and-hooks
title: "Transcribe 2: Dance Pop — Bass and Hooks"
week: 47
order: 2
phase: p5
duration_min: 45
goals:
  - Identify the three standard dance bass patterns — offbeat, octave, sustained
  - Dictate a short, repetitive pentatonic synth hook
  - Program a complete 4-bar drop with four-on-the-floor, offbeat bass and hook
prerequisites: [w47-l1-dance-form-and-chords]
tags: [transcription, dance-pop, bass, hook, daw]
---

# Transcribe 2: Dance Pop — Bass and Hooks

In dance pop the bass and the hook are the song's personality. The chords were easy last lesson; today you'll hear how the bass *moves* and dictate the synth hook of *Neon Hours*.

## Three dance bass patterns

Once you know the roots (pass 3), dance bass is mostly a question of *rhythm*. Three patterns cover a huge share of the genre:

1. **Offbeat bass** — root on every "and", never on the beat. The kick owns the beat; the bass fills the gap. That see-saw is the pumping house/disco feel.
2. **Octave bass** — steady eighths jumping between the root and its octave. Disco, synth-pop, 80s-revival.
3. **Sustained/sub bass** — long notes under the verse or build, leaving space.

Listen to the rhythm relative to the kick: *on* the kick, *between* the kicks, or *both*?

```example
{
  "title": "Octave bass under the Neon Hours loop",
  "bpm": 122, "timeSig": "4/4", "key": "Gm",
  "tracks": [
    { "instrument": "drums", "seq": "[kick crash]:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8" },
    { "instrument": "bass", "seq": "G1:8 G2:8 G1:8 G2:8 G1:8 G2:8 G1:8 G2:8 | Eb1:8 Eb2:8 Eb1:8 Eb2:8 Eb1:8 Eb2:8 Eb1:8 Eb2:8 | Bb1:8 Bb2:8 Bb1:8 Bb2:8 Bb1:8 Bb2:8 Bb1:8 Bb2:8 | F1:8 F2:8 F1:8 F2:8 F1:8 F2:8 F1:8 F2:8" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

Compare with the drop from lesson 1, where the bass sits only on the offbeats.

## Hooks are small

A dance hook is short (one or two bars), built from a handful of notes (often a pentatonic scale), repeated with a tiny change at the end. That makes it easy to dictate — *if* you exploit the repetition. Transcribe bar 1, then listen only for what's different in bars 2, 3 and 4.

The *Neon Hours* hook uses the G minor pentatonic: G, Bb, C, D, F. (Those are also degrees 6, 1, 2, 3, 5 of Bb major — the relative major.)

```example
{
  "title": "\"Neon Hours\" hook, slowed, with pad",
  "bpm": 90, "timeSig": "4/4", "key": "Gm",
  "tracks": [
    { "instrument": "pad", "seq": "[G3 Bb3 D4]:w | [G3 Bb3 Eb4]:w | [F3 Bb3 D4]:w | [F3 A3 C4]:w" },
    { "instrument": "lead", "seq": "D5:8 D5:8 r:8 Bb4:8 r:8 C5:8 D5:q | F5:8 D5:8 r:8 C5:8 r:8 Bb4:8 G4:q | D5:8 D5:8 r:8 Bb4:8 r:8 C5:8 D5:q | F5:8 G5:8 r:8 F5:8 r:8 D5:8 C5:q" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

```exercise
{
  "id": "w47l2-listen",
  "type": "listen",
  "title": "Hook anatomy",
  "spec": {
    "example": {
      "title": "Hook",
      "bpm": 100, "timeSig": "4/4", "key": "Gm",
      "tracks": [ { "instrument": "lead", "seq": "D5:8 D5:8 r:8 Bb4:8 r:8 C5:8 D5:q | F5:8 D5:8 r:8 C5:8 r:8 Bb4:8 G4:q | D5:8 D5:8 r:8 Bb4:8 r:8 C5:8 D5:q | F5:8 G5:8 r:8 F5:8 r:8 D5:8 C5:q" } ],
      "loop": true
    },
    "questions": [
      { "q": "Which bars are identical?", "choices": ["1 and 2", "1 and 3", "2 and 4", "None"], "answer": 1 },
      { "q": "What does bar 4 change?", "choices": ["It climbs up to G at the top before falling to C", "It goes silent", "It changes key", "It uses triplets"], "answer": 0 },
      { "q": "Which rhythm feature repeats in every bar?", "choices": ["Rests on the 'and' of 2 and the 'and' of 3", "Only quarter notes", "Triplets", "A whole note"], "answer": 0 }
    ]
  }
}
```

```exercise
{
  "id": "w47l2-penta",
  "type": "ear-melody",
  "title": "Pentatonic hooks",
  "instructions": "Answer in the relative major (Bb): the pentatonic notes are degrees 1, 2, 3, 5, 6.",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "Bb", "degrees": [1, 2, 3, 5, 6], "length": 5, "rhythm": "simple", "answer": "play" }
}
```

```exercise
{
  "id": "w47l2-scale",
  "type": "ear-scale",
  "title": "Which scale is the hook from?",
  "count": 8,
  "passScore": 0.75,
  "spec": { "scales": ["minor-pentatonic", "major-pentatonic", "natural-minor", "blues"], "play": "melody" }
}
```

```exercise
{
  "id": "w47l2-offbeat",
  "type": "rhythm-tap",
  "title": "Tap the offbeat bass",
  "instructions": "Tap only on the 'and's. The metronome clicks the beats — stay between them.",
  "spec": { "bpm": 110, "timeSig": "4/4", "seq": "r:8 x:8 r:8 x:8 r:8 x:8 r:8 x:8 | r:8 x:8 r:8 x:8 r:8 x:8 r:8 x:8", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "w47l2-hook",
  "type": "play-melody",
  "title": "Play the hook",
  "spec": { "bpm": 100, "timeSig": "4/4", "key": "Gm", "seq": "D5:8 D5:8 r:8 Bb4:8 r:8 C5:8 D5:q | F5:8 D5:8 r:8 C5:8 r:8 Bb4:8 G4:q | D5:8 D5:8 r:8 Bb4:8 r:8 C5:8 D5:q | F5:8 G5:8 r:8 F5:8 r:8 D5:8 C5:q", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "pad", "seq": "[G3 Bb3 D4]:w | [G3 Bb3 Eb4]:w | [F3 Bb3 D4]:w | [F3 A3 C4]:w" } }
}
```

```exercise
{
  "id": "w47l2-daw",
  "type": "daw-task",
  "title": "Program the drop",
  "spec": {
    "template": { "bpm": 122, "key": "Gm", "tracks": [
      { "instrument": "drums", "seq": "" }, { "instrument": "bass", "seq": "" },
      { "instrument": "pad", "seq": "" }, { "instrument": "lead", "seq": "" } ] },
    "task": "Rebuild the Neon Hours drop from your transcription: four-on-the-floor kick with claps on 2 and 4 and offbeat open hats; offbeat bass on Gm–Eb–Bb–F; pumping offbeat pad; the hook. Then make a second 4 bars with an octave bass and a hook variation of your own.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["drums", "bass", "pad", "lead"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "drum-pattern", "requires": ["kick", "clap", "ohat"], "kickOnBeats": [1, 2, 3, 4], "track": 0 },
      { "kind": "in-key", "key": "G", "scale": "natural-minor", "allowPassing": false, "track": 1 },
      { "kind": "in-key", "key": "G", "scale": "natural-minor", "allowPassing": false, "track": 2 },
      { "kind": "in-key", "key": "G", "scale": "minor-pentatonic", "allowPassing": false, "track": 3 },
      { "kind": "repetition", "motifBars": 1, "minRepeats": 2, "allowTransposed": false, "track": 3 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```
