---
id: w23-l3-riff-and-solo-daw
title: Write a Riff, Record a Solo
week: 23
order: 3
phase: p3
duration_min: 50
goals:
  - Write a 1-bar riff and move it through the 12-bar blues
  - Record an improvised blues solo in real time over your own backing
  - Keep pentatonic dictation and riff-rhythm hearing sharp
prerequisites: [w23-l2-twelve-bar-blues]
tags: [riff, blues, improvisation, daw, ear]
songs:
  - { title: "Sunshine of Your Love", composer: "Jack Bruce, Pete Brown, Eric Clapton (Cream)", public_domain: false }
  - { title: "Seven Nation Army", composer: "Jack White (The White Stripes)", public_domain: false }
---

# Write a Riff, Record a Solo

## Riffs

A [[riff]] is a short phrase — usually one bar — that repeats and carries the song. Good riffs:

1. **Live low** — bass or guitar register (E2–E4), often doubled by bass an octave down.
2. **Have a strong rhythm** with at least one rest or repeated note.
3. **Start on the root** so they can be moved: play the same shape from the root of IV and V.
4. **Use one "spicy" note** — the blue b5 or b3 — for character.

By reference: "Sunshine of Your Love" (Cream) moves a single D blues-scale riff through the chords; "Seven Nation Army" (The White Stripes) builds a whole song on one riff and just moves it to new roots.

Here is an original riff in E — E E G E A E Bb A, with the Bb as the blue note — moved to A and B through a 12-bar blues:

```example
{
  "title": "E blues riff moved through the 12-bar form",
  "bpm": 120, "timeSig": "4/4", "key": "E",
  "tracks": [
    { "instrument": "pluck", "seq": "E3:8 E3:8 G3:8 E3:8 A3:8 E3:8 Bb3:8 A3:8 | E3:8 E3:8 G3:8 E3:8 A3:8 E3:8 Bb3:8 A3:8 | E3:8 E3:8 G3:8 E3:8 A3:8 E3:8 Bb3:8 A3:8 | E3:8 E3:8 G3:8 E3:8 A3:8 E3:8 Bb3:8 A3:8 | A3:8 A3:8 C4:8 A3:8 D4:8 A3:8 Eb4:8 D4:8 | A3:8 A3:8 C4:8 A3:8 D4:8 A3:8 Eb4:8 D4:8 | E3:8 E3:8 G3:8 E3:8 A3:8 E3:8 Bb3:8 A3:8 | E3:8 E3:8 G3:8 E3:8 A3:8 E3:8 Bb3:8 A3:8 | B3:8 B3:8 D4:8 B3:8 E4:8 B3:8 F4:8 E4:8 | A3:8 A3:8 C4:8 A3:8 D4:8 A3:8 Eb4:8 D4:8 | E3:8 E3:8 G3:8 E3:8 A3:8 E3:8 Bb3:8 A3:8 | B3:8 B3:8 D4:8 B3:8 E4:8 B3:8 F4:8 E4:8" },
    { "instrument": "bass", "seq": "E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 Bb2:8 A2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 Bb2:8 A2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 Bb2:8 A2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 Bb2:8 A2:8 | A1:8 A1:8 C2:8 A1:8 D2:8 A1:8 Eb2:8 D2:8 | A1:8 A1:8 C2:8 A1:8 D2:8 A1:8 Eb2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 Bb2:8 A2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 Bb2:8 A2:8 | B1:8 B1:8 D2:8 B1:8 E2:8 B1:8 F2:8 E2:8 | A1:8 A1:8 C2:8 A1:8 D2:8 A1:8 Eb2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 Bb2:8 A2:8 | B1:8 B1:8 D2:8 B1:8 E2:8 B1:8 F2:8 E2:8" },
    { "instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

## Soloing: a starter kit

Improvising is composing in real time — the same motif skills, faster. Start small:

- **Three notes are enough.** Use E, G and A for the first chorus.
- **Repeat a lick**, then vary it (week 18!).
- **Leave space.** Play 2 bars, rest 2 bars — call and response with yourself.
- **Land on chord tones at the changes:** E over E7, A over A7, B over B7.
- **End on the root.**

Record in real time with the metronome and count-in, even if it's messy. Quantise afterwards only lightly (50%) so it still breathes. Then record two more takes: the third is usually the best.

```exercise
{
  "id": "riff-quiz",
  "type": "quiz",
  "passScore": 0.8,
  "spec": { "questions": [
    { "q": "Why should a riff start on the root?", "choices": ["So it can be moved to IV and V easily", "Because riffs must be in C", "To avoid rests", "It's required by the DAW"], "answer": 0 },
    { "q": "In the E riff above, which note is the blue b5?", "choices": ["G", "A", "Bb", "E"], "answer": 2 },
    { "q": "Which note should a solo target when the band moves to A7?", "choices": ["A", "Bb", "F", "Eb"], "answer": 0 },
    { "q": "What is the best way to get a good solo take?", "choices": ["Draw every note with the mouse", "Record several takes and keep the best", "Quantise 100%", "Play as many notes as possible"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "play-riff",
  "type": "play-melody",
  "title": "Play the riff on E, A and B",
  "passScore": 0.75,
  "spec": { "bpm": 90, "timeSig": "4/4", "key": "E", "seq": "E3:8 E3:8 G3:8 E3:8 A3:8 E3:8 Bb3:8 A3:8 | E3:8 E3:8 G3:8 E3:8 A3:8 E3:8 Bb3:8 A3:8 | A3:8 A3:8 C4:8 A3:8 D4:8 A3:8 Eb4:8 D4:8 | B3:8 B3:8 D4:8 B3:8 E4:8 B3:8 F4:8 E4:8", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" } }
}
```

```exercise
{
  "id": "ear-riff-rhythms",
  "type": "ear-rhythm",
  "title": "Riff rhythms",
  "count": 8,
  "passScore": 0.7,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "16", "rests": true, "answer": "tap" }
}
```

```exercise
{
  "id": "ear-minor-penta-dictation",
  "type": "ear-melody",
  "title": "E minor pentatonic dictation (heard in G)",
  "instructions": "E minor pentatonic has the same notes as G major pentatonic, so the degrees are given in G: 6 = E, 1 = G, 2 = A, 3 = B, 5 = D.",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "G", "degrees": [1, 2, 3, 5, 6], "length": 7, "rhythm": "simple", "answer": "degrees" }
}
```

```exercise
{
  "id": "daw-own-riff",
  "type": "daw-task",
  "title": "Your riff through a blues in A",
  "spec": {
    "template": { "bpm": 116, "key": "A", "tracks": [
      { "instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" },
      { "instrument": "pluck", "seq": "" },
      { "instrument": "bass", "seq": "" }
    ] },
    "task": "Write a 1-bar riff in A using the A blues scale (A C D Eb E G), starting on A. Move it to D for IV bars and E for V bars following the 12-bar form. Double it on bass an octave lower.",
    "checks": [
      { "kind": "bars", "min": 12, "max": 12 },
      { "kind": "repetition", "motifBars": 1, "minRepeats": 8, "allowTransposed": true, "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "I", "I", "I", "IV", "IV", "I", "I", "V", "IV", "I", "V"], "barsPerChord": 1, "minRatio": 1.0, "track": 1 },
      { "kind": "range", "low": "E2", "high": "E4", "track": 1 },
      { "kind": "range", "low": "E1", "high": "E3", "track": 2 },
      { "kind": "has-tracks", "instruments": ["drums", "pluck", "bass"] }
    ],
    "minBars": 12, "maxBars": 12
  }
}
```

```exercise
{
  "id": "daw-record-solo",
  "type": "daw-task",
  "title": "Record a 12-bar solo",
  "spec": {
    "template": { "bpm": 110, "key": "E", "tracks": [
      { "instrument": "pluck", "seq": "E3:8 E3:8 G3:8 E3:8 A3:8 E3:8 Bb3:8 A3:8 | E3:8 E3:8 G3:8 E3:8 A3:8 E3:8 Bb3:8 A3:8 | E3:8 E3:8 G3:8 E3:8 A3:8 E3:8 Bb3:8 A3:8 | E3:8 E3:8 G3:8 E3:8 A3:8 E3:8 Bb3:8 A3:8 | A3:8 A3:8 C4:8 A3:8 D4:8 A3:8 Eb4:8 D4:8 | A3:8 A3:8 C4:8 A3:8 D4:8 A3:8 Eb4:8 D4:8 | E3:8 E3:8 G3:8 E3:8 A3:8 E3:8 Bb3:8 A3:8 | E3:8 E3:8 G3:8 E3:8 A3:8 E3:8 Bb3:8 A3:8 | B3:8 B3:8 D4:8 B3:8 E4:8 B3:8 F4:8 E4:8 | A3:8 A3:8 C4:8 A3:8 D4:8 A3:8 Eb4:8 D4:8 | E3:8 E3:8 G3:8 E3:8 A3:8 E3:8 Bb3:8 A3:8 | B3:8 B3:8 D4:8 B3:8 E4:8 B3:8 F4:8 E4:8" },
      { "instrument": "bass", "seq": "E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 Bb2:8 A2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 Bb2:8 A2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 Bb2:8 A2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 Bb2:8 A2:8 | A1:8 A1:8 C2:8 A1:8 D2:8 A1:8 Eb2:8 D2:8 | A1:8 A1:8 C2:8 A1:8 D2:8 A1:8 Eb2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 Bb2:8 A2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 Bb2:8 A2:8 | B1:8 B1:8 D2:8 B1:8 E2:8 B1:8 F2:8 E2:8 | A1:8 A1:8 C2:8 A1:8 D2:8 A1:8 Eb2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 Bb2:8 A2:8 | B1:8 B1:8 D2:8 B1:8 E2:8 B1:8 F2:8 E2:8" },
      { "instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" },
      { "instrument": "lead", "seq": "" }
    ] },
    "task": "Arm the lead track and record a live solo over the E blues (use count-in). Use E minor pentatonic or E blues (E G A Bb B D). Leave space, land on chord roots at bars 5, 9 and 11, end on E. Record at least three takes; keep one.",
    "checks": [
      { "kind": "bars", "min": 12, "max": 12 },
      { "kind": "in-key", "key": "E", "scale": "blues", "allowPassing": true, "track": 3 },
      { "kind": "note-count", "min": 20, "max": 120, "track": 3 },
      { "kind": "ends-on", "degree": 1, "track": 3 },
      { "kind": "range", "low": "E3", "high": "E6", "track": 3 },
      { "kind": "custom", "id": "recorded-live", "note": "Self-check: recorded in real time from the keyboard, not drawn, and quantised no more than 50%." }
    ],
    "minBars": 12, "maxBars": 12
  }
}
```

```exercise
{
  "id": "reflect-solo",
  "type": "reflect",
  "spec": { "prompt": "Listen to your three solo takes. What did the best one do that the others didn't (space, repetition, a strong ending)? Which lick would you steal from yourself for a future song?", "minWords": 25 }
}
```
