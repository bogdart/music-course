---
id: w47-l1-dance-form-and-chords
title: "Transcribe 2: Dance Pop — Form and Chords"
week: 47
order: 1
phase: p5
duration_min: 45
goals:
  - Map a dance-pop form in 4-bar blocks — verse, build, drop — and sketch its energy curve
  - Decide between a minor key and its relative major in a looping progression
  - Transcribe the bass and numerals of a hidden up-tempo track
prerequisites: [w46-l3-ballad-reference-analysis]
tags: [transcription, dance-pop, form, minor, ear]
---

# Transcribe 2: Dance Pop — Form and Chords

Dance pop flips the ballad's priorities. The harmony is often a short loop, so pass 4 can be quick; the *form* and the
*arrangement* carry the song, and the question for every section is what enters and what leaves.

## Blocks and energy

Dance tracks are built in blocks of 4, 8 or 16 bars — count them; they almost never break the pattern.

- **Verse** — the groove is established; the arrangement leaves room.
- **Build** — a section whose only job is to raise tension towards what comes next. *How* a producer does that
  varies; that is what you listen for.
- **[[drop]]** — the arrival the build promised: the section the whole track is aiming at.

Sketch an [[energy curve]] while you listen: a line that rises and falls with the density of the arrangement. Mark where
it peaks and where it dips lowest — the dips matter as much as the peaks.

## Minor or its relative major?

A minor loop and its relative major use the same notes, so collecting chord names can't tell them apart. Use the pass-1
tests: where does the hook come to rest, and which bass note starts each 4-bar block? Whichever note wins is home.

Mystery track *Neon Hours*, three sections, all hidden:

```example
{
  "title": "Neon Hours — section A",
  "bpm": 122,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8"},
    {"instrument": "bass", "seq": "G2:q r:q r:8 G2:8 r:q | Eb2:q r:q r:8 Eb2:8 r:q | Bb1:q r:q r:8 Bb1:8 r:q | F2:q r:q r:8 F2:8 r:q"},
    {"instrument": "pluck", "seq": "G4:8 Bb4:8 D5:8 Bb4:8 G4:8 Bb4:8 D5:8 Bb4:8 | G4:8 Bb4:8 Eb5:8 Bb4:8 G4:8 Bb4:8 Eb5:8 Bb4:8 | F4:8 Bb4:8 D5:8 Bb4:8 F4:8 Bb4:8 D5:8 Bb4:8 | F4:8 A4:8 C5:8 A4:8 F4:8 A4:8 C5:8 A4:8"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```example
{
  "title": "Neon Hours — section B",
  "bpm": 122,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "drums", "seq": "snare:q snare:q snare:q snare:q | snare:8 snare:8 snare:8 snare:8 snare:8 snare:8 snare:8 snare:8 | snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 | snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 r:h"},
    {"instrument": "bass", "seq": "G1:w | Eb1:w | Bb1:w | F1:w"},
    {"instrument": "pad", "seq": "[G3 Bb3 D4]:w | [G3 Bb3 Eb4]:w | [F3 Bb3 D4]:w | [F3 A3 C4]:w"},
    {"instrument": "pluck", "seq": "G4:8 Bb4:8 D5:8 Bb4:8 G4:8 Bb4:8 D5:8 Bb4:8 | G4:8 Bb4:8 Eb5:8 Bb4:8 G4:8 Bb4:8 Eb5:8 Bb4:8 | F4:8 Bb4:8 D5:8 Bb4:8 F4:8 Bb4:8 D5:8 Bb4:8 | F4:8 A4:8 C5:8 A4:8 F4:8 A4:8 C5:8 A4:8"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": false
}
```

```example
{
  "title": "Neon Hours — section C",
  "bpm": 122,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "drums", "seq": "[kick crash]:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8"},
    {"instrument": "bass", "seq": "r:8 G2:8 r:8 G2:8 r:8 G2:8 r:8 G2:8 | r:8 Eb2:8 r:8 Eb2:8 r:8 Eb2:8 r:8 Eb2:8 | r:8 Bb1:8 r:8 Bb1:8 r:8 Bb1:8 r:8 Bb1:8 | r:8 F2:8 r:8 F2:8 r:8 F2:8 r:8 F2:8"},
    {"instrument": "pad", "seq": "r:8 [G3 Bb3 D4]:8 r:8 [G3 Bb3 D4]:8 r:8 [G3 Bb3 D4]:8 r:8 [G3 Bb3 D4]:8 | r:8 [G3 Bb3 Eb4]:8 r:8 [G3 Bb3 Eb4]:8 r:8 [G3 Bb3 Eb4]:8 r:8 [G3 Bb3 Eb4]:8 | r:8 [F3 Bb3 D4]:8 r:8 [F3 Bb3 D4]:8 r:8 [F3 Bb3 D4]:8 r:8 [F3 Bb3 D4]:8 | r:8 [F3 A3 C4]:8 r:8 [F3 A3 C4]:8 r:8 [F3 A3 C4]:8 r:8 [F3 A3 C4]:8"},
    {"instrument": "lead", "seq": "D5:8 D5:8 r:8 Bb4:8 r:8 C5:8 D5:q | F5:8 D5:8 r:8 C5:8 r:8 Bb4:8 G4:q | D5:8 D5:8 r:8 Bb4:8 r:8 C5:8 D5:q | F5:8 G5:8 r:8 F5:8 r:8 D5:8 C5:q"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```exercise
{
  "id": "w47l1-form",
  "type": "quiz",
  "title": "Pass 2: form and energy",
  "spec": {
    "questions": [
      {"q": "Which section is the drop?", "choices": ["A", "B", "C"], "answer": 2},
      {"q": "What drives the rising tension in section B?", "choices": ["A key change", "A snare roll getting faster while the kick is gone", "A slower tempo", "New chords"], "answer": 1},
      {"q": "Where is the lowest point of the energy curve around the drop?", "choices": ["The first bar of section A", "The silence at the end of section B", "The middle of section C"], "answer": 1},
      {"q": "Do the chords change between sections?", "choices": ["Yes, every section has new chords", "No — the same loop, different layers"], "answer": 1, "explain": "A: kick and hats, a sparse bass, a plucked arpeggio. B (build): the kick drops out and a snare roll speeds up — quarters, eighths, sixteenths — ending in silence, the deepest dip. C (drop): kick on every beat, claps, offbeat bass, pumping pad and the hook, the peak. The chords are the same four-bar loop throughout; only the layers change."}
    ]
  }
}
```

```exercise
{
  "id": "w47l1-tempo",
  "type": "ear-tempo",
  "title": "Dance tempos",
  "count": 6,
  "instructions": "Dance pop mostly lives between about 115 and 130 BPM. Tap and answer.",
  "spec": {"range": [100, 132], "tolerance": 4, "style": "drums", "bars": 2}
}
```

```exercise
{
  "id": "w47l1-home",
  "type": "listen",
  "title": "Pass 1: G or B♭?",
  "spec": {
    "example": {
      "title": "Neon Hours — section C",
      "bpm": 122,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick crash]:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8"},
        {"instrument": "bass", "seq": "r:8 G2:8 r:8 G2:8 r:8 G2:8 r:8 G2:8 | r:8 Eb2:8 r:8 Eb2:8 r:8 Eb2:8 r:8 Eb2:8 | r:8 Bb1:8 r:8 Bb1:8 r:8 Bb1:8 r:8 Bb1:8 | r:8 F2:8 r:8 F2:8 r:8 F2:8 r:8 F2:8"},
        {"instrument": "pad", "seq": "r:8 [G3 Bb3 D4]:8 r:8 [G3 Bb3 D4]:8 r:8 [G3 Bb3 D4]:8 r:8 [G3 Bb3 D4]:8 | r:8 [G3 Bb3 Eb4]:8 r:8 [G3 Bb3 Eb4]:8 r:8 [G3 Bb3 Eb4]:8 r:8 [G3 Bb3 Eb4]:8 | r:8 [F3 Bb3 D4]:8 r:8 [F3 Bb3 D4]:8 r:8 [F3 Bb3 D4]:8 r:8 [F3 Bb3 D4]:8 | r:8 [F3 A3 C4]:8 r:8 [F3 A3 C4]:8 r:8 [F3 A3 C4]:8 r:8 [F3 A3 C4]:8"},
        {"instrument": "lead", "seq": "D5:8 D5:8 r:8 Bb4:8 r:8 C5:8 D5:q | F5:8 D5:8 r:8 C5:8 r:8 Bb4:8 G4:q | D5:8 D5:8 r:8 Bb4:8 r:8 C5:8 D5:q | F5:8 G5:8 r:8 F5:8 r:8 D5:8 C5:q"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Which note does the hook come to rest on at the end of its first phrase, and which bass note starts the loop?", "choices": ["B♭ and B♭", "G and G", "D and G", "F and B♭"], "answer": 1, "explain": "G both times, so G is home, not B♭."},
      {"q": "Is the chord on G major or minor?", "choices": ["Major", "Minor"], "answer": 1, "explain": "Minor (G – B♭ – D): the key is G minor, the relative minor of B♭ major, with the same notes."}
    ]
  }
}
```

```exercise
{
  "id": "w47l1-bass",
  "type": "ear-bass",
  "title": "Pass 3: section A bass",
  "instructions": "Four bass notes, each struck twice per bar: play all eight.",
  "srs": false,
  "spec": {
    "key": "Gm",
    "chords": ["i", "iv", "v", "III", "VI", "VII"],
    "answer": "play",
    "example": {
      "title": "Section A",
      "bpm": 122,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8"},
        {"instrument": "bass", "seq": "G2:q r:q r:8 G2:8 r:q | Eb2:q r:q r:8 Eb2:8 r:q | Bb1:q r:q r:8 Bb1:8 r:q | F2:q r:q r:8 F2:8 r:q"},
        {"instrument": "pluck", "seq": "G4:8 Bb4:8 D5:8 Bb4:8 G4:8 Bb4:8 D5:8 Bb4:8 | G4:8 Bb4:8 Eb5:8 Bb4:8 G4:8 Bb4:8 Eb5:8 Bb4:8 | F4:8 Bb4:8 D5:8 Bb4:8 F4:8 Bb4:8 D5:8 Bb4:8 | F4:8 A4:8 C5:8 A4:8 F4:8 A4:8 C5:8 A4:8"}
      ]
    },
    "track": 1
  }
}
```

```exercise
{
  "id": "w47l1-prog",
  "type": "ear-progression",
  "title": "Pass 4: the loop in G minor",
  "srs": false,
  "spec": {
    "key": "Gm",
    "chords": ["i", "iv", "v", "III", "VI", "VII"],
    "example": {
      "title": "Section C",
      "bpm": 122,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick crash]:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8"},
        {"instrument": "bass", "seq": "r:8 G2:8 r:8 G2:8 r:8 G2:8 r:8 G2:8 | r:8 Eb2:8 r:8 Eb2:8 r:8 Eb2:8 r:8 Eb2:8 | r:8 Bb1:8 r:8 Bb1:8 r:8 Bb1:8 r:8 Bb1:8 | r:8 F2:8 r:8 F2:8 r:8 F2:8 r:8 F2:8"},
        {"instrument": "pad", "seq": "r:8 [G3 Bb3 D4]:8 r:8 [G3 Bb3 D4]:8 r:8 [G3 Bb3 D4]:8 r:8 [G3 Bb3 D4]:8 | r:8 [G3 Bb3 Eb4]:8 r:8 [G3 Bb3 Eb4]:8 r:8 [G3 Bb3 Eb4]:8 r:8 [G3 Bb3 Eb4]:8 | r:8 [F3 Bb3 D4]:8 r:8 [F3 Bb3 D4]:8 r:8 [F3 Bb3 D4]:8 r:8 [F3 Bb3 D4]:8 | r:8 [F3 A3 C4]:8 r:8 [F3 A3 C4]:8 r:8 [F3 A3 C4]:8 r:8 [F3 A3 C4]:8"},
        {"instrument": "lead", "seq": "D5:8 D5:8 r:8 Bb4:8 r:8 C5:8 D5:q | F5:8 D5:8 r:8 C5:8 r:8 Bb4:8 G4:q | D5:8 D5:8 r:8 Bb4:8 r:8 C5:8 D5:q | F5:8 G5:8 r:8 F5:8 r:8 D5:8 C5:q"}
      ]
    },
    "progression": ["i", "VI", "III", "VII"]
  }
}
```

```ladder
{"skill": "progressions", "unlocks": 20, "intro": "Minor progressions and full mixes at your own rung."}
```

```exercise
{
  "id": "w47l1-play",
  "type": "play-chord",
  "title": "Play the loop, pumping",
  "instructions": "After revealing: play each chord on the offbeats (the 'and's), like the drop's pad.",
  "spec": {"chords": ["Gm", "Eb", "Bb", "F"], "inversion": "any", "sequence": true, "bpm": 100}
}
```
