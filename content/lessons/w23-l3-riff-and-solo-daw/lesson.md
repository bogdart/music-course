---
id: w23-l3-riff-and-solo-daw
title: Write a Riff, Build a Solo
week: 23
order: 3
phase: p3
duration_min: 50
goals:
  - Write a 1-bar riff and move it through the 12-bar blues
  - Build a 12-bar solo from a repeated 2-bar call and its answers (call and response)
  - Enter a solo note by note in the piano roll instead of recording it live
prerequisites: [w23-l2-twelve-bar-blues]
tags: [riff, blues, solo, daw]
songs: []
---

# Write a Riff, Build a Solo

## Riffs

A [[riff]] is a short phrase — usually one bar — that repeats and carries the song. Good riffs:

1. **Live low** — bass or guitar register (E2–E4), often doubled by the bass an octave lower.
2. **Have a strong rhythm**, with a rest or a repeated note.
3. **Start on the root**, so the same shape can be moved to the root of IV and V.
4. **Use one blue note** for character.

Here is an original riff in E — E E G E A E B♭ A. The B♭ is the blue ♭5 of the E blues scale (E G A B♭ B D). The riff moves to A for the IV bars and to B for the V bars:

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

```exercise
{
  "id": "play-riff",
  "type": "play-melody",
  "title": "Play the riff on E, A and B",
  "spec": { "bpm": 90, "timeSig": "4/4", "key": "E", "seq": "E3:8 E3:8 G3:8 E3:8 A3:8 E3:8 Bb3:8 A3:8 | E3:8 E3:8 G3:8 E3:8 A3:8 E3:8 Bb3:8 A3:8 | A3:8 A3:8 C4:8 A3:8 D4:8 A3:8 Eb4:8 D4:8 | B3:8 B3:8 D4:8 B3:8 E4:8 B3:8 F4:8 E4:8", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" } }
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
    "task": "Write a 1-bar riff in A using the A blues scale (A C D Eb E G), starting on A2 (the A in the bottom space of the bass clef) and staying within one octave (A2 to A3), so the moved copies fit the pluck range (E2-E4). Fill 12 bars following the form: I I I I | IV IV I I | V IV I V. Fast way: select the bar, Ctrl+D to duplicate, arrow keys to transpose (+5 half steps = D for IV, +7 = E for V). Then copy the whole part to the bass track and move it down an octave (Shift + down arrow).",
    "checks": [
      { "kind": "bars", "min": 12, "max": 12 },
      { "kind": "repetition", "motifBars": 1, "minRepeats": 8, "allowTransposed": true, "track": 1 },
      { "kind": "plays-progression", "progression": ["I", "I", "I", "I", "IV", "IV", "I", "I", "V", "IV", "I", "V"], "barsPerChord": 1, "mode": "roots", "track": 1 },
      { "kind": "range", "low": "E2", "high": "E4", "track": 1 },
      { "kind": "range", "low": "E1", "high": "E3", "track": 2 },
      { "kind": "has-tracks", "instruments": ["drums", "pluck", "bass"] }
    ],
    "minBars": 12, "maxBars": 12
  }
}
```

## A solo, built like a song

A solo is a melody made up over a chord loop. You don't have to improvise it live: you will **build** it, note by note in the piano roll, from the same ideas you used for hooks in week 18.

- **[[Call and response]].** A 2-bar phrase (the call), then 2 bars of space or a different answering phrase. You heard this in last lesson's example.
- **Repeat the call** over the IV chord (bars 5–6): same notes, new chord underneath. Start the call on E: E belongs to both E7 and A7, so the repeated call still lands on a chord tone at bar 5.
- **Few notes.** Three notes — E, G and A — are enough for the first call.
- **Land on the root at the other changes:** E at bar 1 and 11, B at bar 9. End on E.

```exercise
{
  "id": "riff-solo-quiz",
  "type": "quiz",
  "title": "Riffs and solos",
  "spec": { "questions": [
    { "q": "Why should a riff start on the root?", "choices": ["So it can be moved to IV and V easily", "Because riffs must be in C", "To avoid rests", "The DAW requires it"], "answer": 0 },
    { "q": "In the E riff above, which note is the blue b5?", "choices": ["G", "A", "Bb", "E"], "answer": 2 },
    { "q": "Which note is a safe landing when the band moves to A7?", "choices": ["A", "Bb", "F", "Eb"], "answer": 0 },
    { "q": "In call and response, what happens after the 2-bar call?", "choices": ["Space or an answering phrase", "The key changes", "The same call, twice as fast", "The drums stop"], "answer": 0 }
  ] }
}
```

```exercise
{
  "id": "daw-step-solo",
  "type": "daw-task",
  "title": "Build a 12-bar solo",
  "spec": {
    "template": { "bpm": 110, "key": "E", "tracks": [
      { "instrument": "bass", "seq": "E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 Bb2:8 A2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 Bb2:8 A2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 Bb2:8 A2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 Bb2:8 A2:8 | A1:8 A1:8 C2:8 A1:8 D2:8 A1:8 Eb2:8 D2:8 | A1:8 A1:8 C2:8 A1:8 D2:8 A1:8 Eb2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 Bb2:8 A2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 Bb2:8 A2:8 | B1:8 B1:8 D2:8 B1:8 E2:8 B1:8 F2:8 E2:8 | A1:8 A1:8 C2:8 A1:8 D2:8 A1:8 Eb2:8 D2:8 | E2:8 E2:8 G2:8 E2:8 A2:8 E2:8 Bb2:8 A2:8 | B1:8 B1:8 D2:8 B1:8 E2:8 B1:8 F2:8 E2:8" },
      { "instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" },
      { "instrument": "lead", "seq": "" }
    ] },
    "task": "Enter a solo note by note on the lead track (draw it; no live recording needed). Use E minor pentatonic or the E blues scale (E G A Bb B D). Write a 2-bar call in bars 1-2 that starts on E, leave bars 3-4 mostly empty, repeat the call unchanged in bars 5-6, and write a different answer in bars 9-11 that ends on E. Loop and fix any note that sounds wrong to you. If it runs past the lesson, finish next session.",
    "checks": [
      { "kind": "bars", "min": 12, "max": 12 },
      { "kind": "in-key", "key": "E", "scale": "blues", "track": 2 },
      { "kind": "note-count", "min": 12, "max": 60, "track": 2 },
      { "kind": "repetition", "motifBars": 2, "minRepeats": 2, "allowTransposed": false, "track": 2 },
      { "kind": "ends-on", "degree": 1, "key": "E", "track": 2 },
      { "kind": "range", "low": "E3", "high": "E6", "track": 2 }
    ],
    "minBars": 12, "maxBars": 12
  }
}
```

## Keep the ear going

```ladder
{ "skill": "scales", "unlocks": 10, "intro": "Review: minor pentatonic or blues scale?" }
```

```ladder
{ "skill": "melody", "unlocks": 17, "intro": "Review: play back a short melody over chords." }
```

```exercise
{
  "id": "reflect-solo",
  "type": "reflect",
  "spec": { "prompt": "Play your solo against the backing. Where does it sound best - on the call, the answer, the ending? Which 2-bar lick would you steal from yourself for a future song?", "minWords": 25 }
}
```
