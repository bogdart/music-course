---
id: w22-l3-modal-sketches-daw
title: Modal Sketches in the DAW
week: 22
order: 3
phase: p3
duration_min: 50
goals:
  - Write an 8-bar Dorian groove and an 8-bar Mixolydian groove that clearly sound modal
  - Use a tonic vamp or pedal bass so the mode's home stays clear
  - Identify six scales and modes by ear, and hear bVII in progressions
prerequisites: [w22-l2-lydian-and-phrygian]
tags: [modes, daw, songwriting, ear]
songs: []
---

# Modal Sketches in the DAW

Knowing a mode's notes is not enough; the listener has to *hear* where home is. In major and minor, the V7 → I cadence does that job. In modes we need other tools.

## Four rules for modal writing

1. **Vamp.** Alternate the tonic chord with the characteristic chord (i–IV Dorian, I–bVII Mixolydian, I–II Lydian, i–bII Phrygian). Two chords are often enough for a whole section.
2. **Pedal the bass.** Keep returning the bass to the tonic, even under other chords.
3. **Feature the characteristic tone** on strong beats and long notes, in melody or chords.
4. **Avoid the dominant V7.** In A Dorian an E7 chord (with G#) would pull everything back to A minor. Use v minor (Em) or skip V entirely.

Here is an 8-bar A Dorian groove: Am7 and D alternate, the bass lands on A every other bar, and the melody's peak is F#5 — the Dorian 6th — in bar 6.

```example
{
  "title": "A Dorian groove: Am7 - D vamp",
  "bpm": 100, "timeSig": "4/4", "key": "Am",
  "tracks": [
    { "instrument": "lead", "seq": "E5:q. D5:8 C5:q A4:q | F#4:q. A4:8 B4:h | E5:q. D5:8 C5:q A4:q | D5:q C5:8 B4:8 A4:q F#4:q | G4:q A4:q C5:q E5:q | F#5:h. E5:q | D5:q. C5:8 A4:q G4:q | F#4:q G4:q A4:h" },
    { "instrument": "epiano", "seq": "r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 r:q [G3 C4 E4]:q | r:8 [F#3 A3 D4]:8 r:8 [F#3 A3 D4]:8 r:q [F#3 A3 D4]:q | r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 r:q [G3 C4 E4]:q | r:8 [F#3 A3 D4]:8 r:8 [F#3 A3 D4]:8 r:q [F#3 A3 D4]:q | r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 r:q [G3 C4 E4]:q | r:8 [F#3 A3 D4]:8 r:8 [F#3 A3 D4]:8 r:q [F#3 A3 D4]:q | r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 r:q [G3 C4 E4]:q | r:8 [F#3 A3 D4]:8 r:8 [F#3 A3 D4]:8 r:q [F#3 A3 D4]:q" },
    { "instrument": "bass", "seq": "A1:8. A2:16 r:8 A1:8 r:8 A1:8 G1:8 A1:8 | D2:8. D3:16 r:8 D2:8 r:8 D2:8 F#2:8 G2:8 | A1:8. A2:16 r:8 A1:8 r:8 A1:8 G1:8 A1:8 | D2:8. D3:16 r:8 D2:8 r:8 D2:8 F#2:8 G2:8 | A1:8. A2:16 r:8 A1:8 r:8 A1:8 G1:8 A1:8 | D2:8. D3:16 r:8 D2:8 r:8 D2:8 F#2:8 G2:8 | A1:8. A2:16 r:8 A1:8 r:8 A1:8 G1:8 A1:8 | D2:8. D3:16 r:8 D2:8 r:8 D2:8 F#2:8 G2:8" },
    { "instrument": "drums", "seq": "[kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 | [kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 | [kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 | [kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 | [kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 | [kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 | [kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 | [kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

For Mixolydian the classic rock move is **I – bVII – IV – I** (in D: D – C – G – D). The C chord carries the flat 7th; resolving bVII → I at the end replaces the V → I cadence.

```chords
{ "key": "D", "bars": ["D", "C", "G", "D"], "roman": true, "play": true, "bpm": 100 }
```

## Sketch workflow

Use the same loop-first method as your chorus hook in week 18:

1. Pick a groove from your library and set the tempo.
2. Program the two-chord vamp and a pedal-ish bass. Loop it.
3. Improvise over the loop for a few minutes, deliberately leaning on the characteristic tone. Record everything.
4. Keep the best 2 bars, shape them into 8 (A A' A B), and check the ending lands on the tonic.

```exercise
{
  "id": "modal-rules-quiz",
  "type": "quiz",
  "passScore": 0.8,
  "spec": { "questions": [
    { "q": "Why avoid E7 in an A Dorian song?", "choices": ["It's out of range", "Its G# pulls the music back to plain A minor", "It's too quiet", "It isn't a real chord"], "answer": 1 },
    { "q": "Which progression is typical Mixolydian?", "choices": ["I-V-vi-IV", "I-bVII-IV-I", "ii-V-I", "i-bII"], "answer": 1 },
    { "q": "What does a pedal bass do in modal music?", "choices": ["Keeps the tonic audible", "Adds a key change", "Removes the melody", "Doubles the snare"], "answer": 0 },
    { "q": "In the A Dorian groove, the melody's peak F#5 is...", "choices": ["The root", "The characteristic tone (6th)", "A wrong note", "The flat 7th"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "play-modal-vamps",
  "type": "play-chord",
  "title": "Play the vamps",
  "instructions": "Dorian vamp Am7 - D, then Mixolydian D - C - G - D.",
  "count": 8,
  "passScore": 0.8,
  "spec": { "chords": ["Am7", "D", "Am7", "D", "D", "C", "G", "D"], "inversion": "any", "sequence": true, "bpm": 70 }
}
```

```exercise
{
  "id": "ear-bvii-progressions",
  "type": "ear-progression",
  "title": "Spot the bVII",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "D", "mode": "major", "length": 4, "chords": ["I", "IV", "V", "bVII"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "ear-six-scales",
  "type": "ear-scale",
  "title": "Six colours",
  "count": 12,
  "passScore": 0.7,
  "spec": { "scales": ["major", "natural-minor", "dorian", "mixolydian", "lydian", "phrygian"], "play": "melody" }
}
```

```exercise
{
  "id": "daw-dorian-8",
  "type": "daw-task",
  "title": "8 bars of E Dorian",
  "spec": {
    "template": { "bpm": 96, "key": "Em", "tracks": [
      { "instrument": "drums", "seq": "[kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 | [kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 | [kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 | [kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 | [kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 | [kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 | [kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16 | [kick hihat]:16 hihat:16 hihat:16 [kick hihat]:16 [snare hihat]:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 [kick hihat]:16 hihat:16 [snare hihat]:16 hihat:16 [kick hihat]:16 hihat:16" },
      { "instrument": "epiano", "seq": "" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "lead", "seq": "" }
    ] },
    "task": "E Dorian (E F# G A B C# D). Comp an Em7 - A vamp (i7 - IV, one bar each), write a bass that returns to E at least every other bar, and an 8-bar melody that puts C# (the Dorian 6th) on strong beats and ends on E. No B7 chord!",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "has-tracks", "instruments": ["drums", "epiano", "bass", "lead"] },
      { "kind": "in-key", "key": "E", "scale": "dorian", "track": 1 },
      { "kind": "in-key", "key": "E", "scale": "dorian", "allowPassing": true, "track": 2 },
      { "kind": "in-key", "key": "E", "scale": "dorian", "track": 3 },
      { "kind": "ends-on", "degree": 1, "track": 3 },
      { "kind": "custom", "id": "dorian-6th-featured", "note": "Self-check: C# appears on beat 1 or 3, or as a long note, at least twice." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "daw-mixolydian-8",
  "type": "daw-task",
  "title": "8 bars of D Mixolydian rock",
  "spec": {
    "template": { "bpm": 104, "key": "D", "tracks": [
      { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" },
      { "instrument": "piano", "seq": "" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "lead", "seq": "" }
    ] },
    "task": "D Mixolydian (D E F# G A B C). Chords D - C - G - D, two bars each. Eighth-note root bass. A melody that uses C natural on strong beats and ends on D via C -> D (the bVII -> I feel).",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "has-tracks", "instruments": ["drums", "piano", "bass", "lead"] },
      { "kind": "in-key", "key": "D", "scale": "mixolydian", "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "bVII", "IV", "I"], "barsPerChord": 2, "minRatio": 1.0, "track": 2 },
      { "kind": "in-key", "key": "D", "scale": "mixolydian", "track": 3 },
      { "kind": "ends-on", "degree": 1, "track": 3 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "reflect-modes",
  "type": "reflect",
  "spec": { "prompt": "You now know six colours: major, minor, Dorian, Mixolydian, Lydian, Phrygian. For each one, name a mood or a scene (e.g. 'Lydian - flying over a city at night'). Which would you use for your next song, and why?", "minWords": 40 }
}
```
