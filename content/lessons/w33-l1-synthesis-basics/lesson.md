---
id: w33-l1-synthesis-basics
title: Synthesis Basics
week: 33
order: 1
phase: p4
duration_min: 40
goals:
  - Explain a synth sound as oscillator → filter → envelope
  - Choose between the app's pad, pluck, lead, bass and strings by attack and sustain
  - Voice an EDM-style vi–IV–I–V for pads and plucks
prerequisites: [w32-l3-counter-melody-daw, w21-l1-frequency-roles-and-doubling]
tags: [production, synthesis, electronic, sound-design]
---

# Synthesis Basics

Every synth sound — from a warm pad to a razor lead — is built from three stages. Knowing them lets you pick and arrange sounds on purpose.

1. **Oscillator** — makes the raw tone. A *sine* is pure and round; a *sawtooth* is bright and buzzy (full of harmonics); a *square* is hollow, like a clarinet.
2. **Filter** — removes some of those harmonics. A low-pass filter with a low cutoff makes a sound darker and softer; opening it makes it brighter.
3. **Envelope** — shapes loudness over time with [[ADSR]]: Attack (how fast it starts), Decay (how fast it falls), Sustain (level while held), Release (how long it rings after you let go).

## The app's synths as presets

The app's instruments are fixed presets — you can't turn knobs yet — but each one is a clear recipe:

| Instrument | Attack | Sustain | Best role |
|------------|--------|---------|-----------|
| pad | slow | long, soft release | harmony bed, atmosphere |
| pluck | instant | none — decays fast | arps, rhythmic chords |
| lead | fast | full | melodies, hooks |
| bass | fast | full, filtered dark | low end |
| strings | medium | full | swells, counter-lines |

Because you can't change the envelope, **note length is your envelope control**. A pad chord held for a whole bar blooms; the same chord as a 16th is barely there. A pluck ignores length almost entirely — it's always short.

```example
{
  "title": "Same Am chord: pad, pluck, strings, epiano",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "pad", "seq": "[A3 C4 E4]:w | r:w | r:w | r:w |" },
    { "instrument": "pluck", "seq": "r:w | [A3 C4 E4]:w | r:w | r:w |" },
    { "instrument": "strings", "seq": "r:w | r:w | [A3 C4 E4]:w | r:w |" },
    { "instrument": "epiano", "seq": "r:w | r:w | r:w | [A3 C4 E4]:w |" }
  ],
  "show": ["pianoroll"]
}
```

## The EDM loop

Countless dance tracks use vi–IV–I–V, in A minor thought of as Am–F–C–G. Voice it with close, sus-flavoured shapes and let the pad hold while the pluck repeats.

```example
{
  "title": "Am – F – C – G: pad bed + pluck chords",
  "bpm": 124, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "pad", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w |" },
    { "instrument": "pluck", "seq": "r:8 [A4 C5 E5]:8 r:8 [A4 C5 E5]:8 r:8 [A4 C5 E5]:8 r:8 [A4 C5 E5]:8 | r:8 [A4 C5 F5]:8 r:8 [A4 C5 F5]:8 r:8 [A4 C5 F5]:8 r:8 [A4 C5 F5]:8 | r:8 [G4 C5 E5]:8 r:8 [G4 C5 E5]:8 r:8 [G4 C5 E5]:8 r:8 [G4 C5 E5]:8 | r:8 [G4 B4 D5]:8 r:8 [G4 B4 D5]:8 r:8 [G4 B4 D5]:8 r:8 [G4 B4 D5]:8 |" },
    { "instrument": "bass", "seq": "A1:w | F1:w | C2:w | G1:w |" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

## Drills

```exercise
{
  "id": "e1-synth-quiz",
  "type": "quiz",
  "title": "Oscillator, filter, envelope",
  "passScore": 0.75,
  "spec": { "questions": [
    { "q": "Which stage makes a sound darker by removing high harmonics?", "choices": ["oscillator", "low-pass filter", "attack", "release"], "answer": 1 },
    { "q": "A pad fades in slowly because of its…", "choices": ["long attack", "short decay", "square wave", "low cutoff"], "answer": 0 },
    { "q": "The brightest raw waveform of these is…", "choices": ["sine", "sawtooth", "triangle"], "answer": 1 },
    { "q": "You want a short, bouncy chord stab. Best app instrument?", "choices": ["pad", "strings", "pluck", "bass"], "answer": 2 }
  ] }
}
```

```exercise
{
  "id": "e2-listen-roles",
  "type": "listen",
  "title": "Which synth is which?",
  "passScore": 0.7,
  "spec": {
    "example": { "bpm": 100, "timeSig": "4/4", "tracks": [ { "instrument": "pluck", "seq": "[A3 C4 E4]:w | r:w |" }, { "instrument": "pad", "seq": "r:w | [A3 C4 E4]:w |" } ] },
    "questions": [
      { "q": "Bar 1 sound: attack and sustain?", "choices": ["instant attack, no sustain", "slow attack, long sustain"], "answer": 0 },
      { "q": "Bar 2 sound is best used for…", "choices": ["arpeggios", "a harmony bed", "a kick drum", "a bass line"], "answer": 1 }
    ]
  }
}
```

```exercise
{
  "id": "e3-play-loop",
  "type": "play-chord",
  "title": "Play the EDM loop voicings",
  "count": 8, "passScore": 0.8,
  "spec": { "chords": ["Am", "F", "C", "G"], "inversion": "any", "sequence": true, "bpm": 70 }
}
```

```exercise
{
  "id": "e4-play-minor",
  "type": "play-scale",
  "title": "A natural minor",
  "count": 6, "passScore": 0.8,
  "spec": { "root": "A", "scale": "natural-minor", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 100, "metronome": true }
}
```

```exercise
{
  "id": "e5-ear-sus",
  "type": "ear-chord",
  "title": "Sus and 7th colours (EDM loves sus)",
  "count": 10, "passScore": 0.75,
  "spec": { "qualities": ["sus2", "sus4", "min7", "maj7", "min"], "inversions": [0], "voicing": "close", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e6-daw-sound-roles",
  "type": "daw-task",
  "title": "One loop, three roles",
  "instructions": "Write Am–F–C–G (one bar each, twice = 8 bars) three ways at once: pad holds whole-note chords, pluck plays the chords in an off-beat 8th pattern, bass plays roots. Then try swapping pad and pluck parts and listen to how wrong it sounds.",
  "spec": {
    "template": { "bpm": 124, "key": "C", "timeSig": "4/4", "tracks": [ { "instrument": "pad", "seq": "" }, { "instrument": "pluck", "seq": "" }, { "instrument": "bass", "seq": "" } ] },
    "task": "8 bars: pad bed, pluck off-beats and bass roots on vi–IV–I–V.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["pad", "pluck", "bass"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "A", "scale": "natural-minor", "allowPassing": false },
      { "kind": "uses-rhythm", "values": ["w"], "minDistinct": 1, "track": 0 },
      { "kind": "uses-rhythm", "values": ["8"], "minDistinct": 1, "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["vi", "IV", "I", "V"], "barsPerChord": 1, "minRatio": 0.9, "track": 2 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```
