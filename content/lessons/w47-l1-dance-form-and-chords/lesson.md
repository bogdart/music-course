---
id: w47-l1-dance-form-and-chords
title: "Transcribe 2: Dance Pop — Form and Chords"
week: 47
order: 1
phase: p5
duration_min: 45
goals:
  - Map a dance-pop form in 4- and 8-bar blocks — verse, build, drop — and draw its energy curve
  - Tell a minor key from its relative major in a looping four-chord progression
  - Transcribe the i–VI–III–VII loop of an up-tempo mystery track
prerequisites: [w46-l3-ballad-reference-analysis]
tags: [transcription, dance-pop, form, minor, ear]
---

# Transcribe 2: Dance Pop — Form and Chords

Dance pop flips the ballad's priorities. The harmony is often a single four-chord loop that never changes, so pass 4 is quick. The *form* and the *arrangement* carry the song: sections are defined by what drops in and out over the same chords.

## Dance form: blocks and energy

Dance tracks are built in blocks of 4, 8 or 16 bars — count them, they almost never break the pattern. The typical sections:

- **Verse** — kick and hats, sparse bass, maybe a plucky arpeggio.
- **Build** — the kick drops out, a snare roll speeds up (quarters → eighths → sixteenths), tension rises.
- **[[drop]]** — everything lands at once: four-on-the-floor kick, claps, offbeat bass, the synth hook.

Sketch an [[energy curve]] as you listen: a line that rises and falls with the density of the arrangement. The drop is the peak; the moment of silence right before it is the deepest dip. Once you can draw the curve, you have the form.

## Minor or relative major?

A loop like Gm – Eb – Bb – F contains the same notes as Bb major. Which is home? Use the pass-1 tests: where does the hook come to rest, and what does the bass land on at the start of each 4-bar block? Here, both answers are G — so the key is G minor, and the loop is **i–VI–III–VII**. (Started from Bb, the same chords would be I–V–vi–IV rotated.)

```example
{
  "title": "Mystery Track \"Neon Hours\" — verse",
  "bpm": 122, "timeSig": "4/4", "key": "Gm",
  "tracks": [
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick hihat]:8 hihat:8" },
    { "instrument": "bass", "seq": "G2:q r:q r:8 G2:8 r:q | Eb2:q r:q r:8 Eb2:8 r:q | Bb1:q r:q r:8 Bb1:8 r:q | F2:q r:q r:8 F2:8 r:q" },
    { "instrument": "pluck", "seq": "G4:8 Bb4:8 D5:8 Bb4:8 G4:8 Bb4:8 D5:8 Bb4:8 | G4:8 Bb4:8 Eb5:8 Bb4:8 G4:8 Bb4:8 Eb5:8 Bb4:8 | F4:8 Bb4:8 D5:8 Bb4:8 F4:8 Bb4:8 D5:8 Bb4:8 | F4:8 A4:8 C5:8 A4:8 F4:8 A4:8 C5:8 A4:8" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

```example
{
  "title": "\"Neon Hours\" — build",
  "bpm": 122, "timeSig": "4/4", "key": "Gm",
  "tracks": [
    { "instrument": "drums", "seq": "snare:q snare:q snare:q snare:q | snare:8 snare:8 snare:8 snare:8 snare:8 snare:8 snare:8 snare:8 | snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 | snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 r:h" },
    { "instrument": "bass", "seq": "G1:w | Eb1:w | Bb1:w | F1:w" },
    { "instrument": "pad", "seq": "[G3 Bb3 D4]:w | [G3 Bb3 Eb4]:w | [F3 Bb3 D4]:w | [F3 A3 C4]:w" },
    { "instrument": "pluck", "seq": "G4:8 Bb4:8 D5:8 Bb4:8 G4:8 Bb4:8 D5:8 Bb4:8 | G4:8 Bb4:8 Eb5:8 Bb4:8 G4:8 Bb4:8 Eb5:8 Bb4:8 | F4:8 Bb4:8 D5:8 Bb4:8 F4:8 Bb4:8 D5:8 Bb4:8 | F4:8 A4:8 C5:8 A4:8 F4:8 A4:8 C5:8 A4:8" }
  ],
  "show": ["pianoroll"],
  "loop": false
}
```

```example
{
  "title": "\"Neon Hours\" — drop",
  "bpm": 122, "timeSig": "4/4", "key": "Gm",
  "tracks": [
    { "instrument": "drums", "seq": "[kick crash]:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8" },
    { "instrument": "bass", "seq": "r:8 G2:8 r:8 G2:8 r:8 G2:8 r:8 G2:8 | r:8 Eb2:8 r:8 Eb2:8 r:8 Eb2:8 r:8 Eb2:8 | r:8 Bb1:8 r:8 Bb1:8 r:8 Bb1:8 r:8 Bb1:8 | r:8 F2:8 r:8 F2:8 r:8 F2:8 r:8 F2:8" },
    { "instrument": "pad", "seq": "r:8 [G3 Bb3 D4]:8 r:8 [G3 Bb3 D4]:8 r:8 [G3 Bb3 D4]:8 r:8 [G3 Bb3 D4]:8 | r:8 [G3 Bb3 Eb4]:8 r:8 [G3 Bb3 Eb4]:8 r:8 [G3 Bb3 Eb4]:8 r:8 [G3 Bb3 Eb4]:8 | r:8 [F3 Bb3 D4]:8 r:8 [F3 Bb3 D4]:8 r:8 [F3 Bb3 D4]:8 r:8 [F3 Bb3 D4]:8 | r:8 [F3 A3 C4]:8 r:8 [F3 A3 C4]:8 r:8 [F3 A3 C4]:8 r:8 [F3 A3 C4]:8" },
    { "instrument": "lead", "seq": "D5:8 D5:8 r:8 Bb4:8 r:8 C5:8 D5:q | F5:8 D5:8 r:8 C5:8 r:8 Bb4:8 G4:q | D5:8 D5:8 r:8 Bb4:8 r:8 C5:8 D5:q | F5:8 G5:8 r:8 F5:8 r:8 D5:8 C5:q" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

```exercise
{
  "id": "w47l1-listen",
  "type": "listen",
  "title": "Drop: key, tempo, loop",
  "spec": {
    "example": {
      "title": "Drop",
      "bpm": 122, "timeSig": "4/4", "key": "Gm",
      "tracks": [ { "instrument": "drums", "seq": "[kick crash]:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8" }, { "instrument": "bass", "seq": "r:8 G2:8 r:8 G2:8 r:8 G2:8 r:8 G2:8 | r:8 Eb2:8 r:8 Eb2:8 r:8 Eb2:8 r:8 Eb2:8 | r:8 Bb1:8 r:8 Bb1:8 r:8 Bb1:8 r:8 Bb1:8 | r:8 F2:8 r:8 F2:8 r:8 F2:8 r:8 F2:8" }, { "instrument": "pad", "seq": "r:8 [G3 Bb3 D4]:8 r:8 [G3 Bb3 D4]:8 r:8 [G3 Bb3 D4]:8 r:8 [G3 Bb3 D4]:8 | r:8 [G3 Bb3 Eb4]:8 r:8 [G3 Bb3 Eb4]:8 r:8 [G3 Bb3 Eb4]:8 r:8 [G3 Bb3 Eb4]:8 | r:8 [F3 Bb3 D4]:8 r:8 [F3 Bb3 D4]:8 r:8 [F3 Bb3 D4]:8 r:8 [F3 Bb3 D4]:8 | r:8 [F3 A3 C4]:8 r:8 [F3 A3 C4]:8 r:8 [F3 A3 C4]:8 r:8 [F3 A3 C4]:8" }, { "instrument": "lead", "seq": "D5:8 D5:8 r:8 Bb4:8 r:8 C5:8 D5:q | F5:8 D5:8 r:8 C5:8 r:8 Bb4:8 G4:q | D5:8 D5:8 r:8 Bb4:8 r:8 C5:8 D5:q | F5:8 G5:8 r:8 F5:8 r:8 D5:8 C5:q" } ],
      "loop": true
    },
    "questions": [
      { "q": "Tempo?", "choices": ["About 90", "About 105", "About 122", "About 140"], "answer": 2 },
      { "q": "Key?", "choices": ["Bb major", "G minor", "Eb major", "D minor"], "answer": 1 },
      { "q": "Numerals of the loop?", "choices": ["i–VI–III–VII", "i–iv–v–i", "I–V–vi–IV", "i–VII–VI–V"], "answer": 0 },
      { "q": "Where does the kick play?", "choices": ["1 and 3", "Every quarter note (four-on-the-floor)", "Offbeats", "Only beat 1"], "answer": 1 }
    ]
  }
}
```

```exercise
{
  "id": "w47l1-form",
  "type": "quiz",
  "title": "Form and energy",
  "spec": { "questions": [
    { "q": "In the build, what drives the rising tension?", "choices": ["A key change", "A snare roll getting faster while the kick is absent", "A slower tempo", "New chords"], "answer": 1 },
    { "q": "Where is the lowest point of the energy curve around a drop?", "choices": ["The first bar of the verse", "The silence just before the drop", "The middle of the drop", "The outro"], "answer": 1 },
    { "q": "Dance sections are usually built in blocks of…", "choices": ["3 or 5 bars", "4, 8 or 16 bars", "7 bars", "Random lengths"], "answer": 1 },
    { "q": "Verse and drop use the same chords. What makes the drop the peak?", "choices": ["Density: full kick, clap, offbeat bass, pumping pad and hook", "It's in a different key", "It's slower", "It has more chords"], "answer": 0 }
  ] }
}
```

```exercise
{
  "id": "w47l1-prog-g",
  "type": "ear-progression",
  "title": "Minor loops in G",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "G", "mode": "minor", "length": 4, "chords": ["i", "iv", "v", "III", "VI", "VII"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "w47l1-prog-d",
  "type": "ear-progression",
  "title": "Minor loops in D",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "D", "mode": "minor", "length": 4, "chords": ["i", "iv", "III", "VI", "VII"], "style": "block" }
}
```

```exercise
{
  "id": "w47l1-home",
  "type": "ear-note",
  "title": "Hum test in G minor",
  "count": 10,
  "passScore": 0.8,
  "spec": { "key": "G", "mode": "minor", "degrees": [1, 3, 4, 5, 7], "reference": "cadence", "octaves": [3, 4], "instrument": "piano" }
}
```

```exercise
{
  "id": "w47l1-play",
  "type": "play-chord",
  "title": "Play the loop, pumping",
  "instructions": "Play each chord on the offbeats (the 'and's), like the drop's pad.",
  "spec": { "chords": ["Gm", "Eb", "Bb", "F"], "inversion": "any", "sequence": true, "bpm": 100 }
}
```
