---
id: w46-l3-ballad-reference-analysis
title: "Transcribe 1: Ballad — Reference Analysis"
week: 46
order: 3
phase: p5
duration_min: 50
goals:
  - Apply the seven passes to three real ballads using your own copies and a listening guide
  - Compare the conventions of real records with the mystery ballad you transcribed
  - Write a 16-bar ballad sketch that uses the techniques you heard
prerequisites: [w46-l2-ballad-bass-and-melody]
tags: [transcription, ballad, reference-songs, daw]
songs:
  - { title: "Someone Like You", artist: "Adele", year: 2011, public_domain: false }
  - { title: "All of Me", artist: "John Legend", year: 2013, public_domain: false }
  - { title: "Perfect", artist: "Ed Sheeran", year: 2017, public_domain: false }
---

# Transcribe 1: Ballad — Reference Analysis

Now the real thing. Open your own copy of each song below (streaming is fine), play it through once without doing anything, then follow the guide pass by pass. The facts given here are for *checking* your ears, not replacing them — cover them with your hand first and try each pass yourself. Tempo figures are approximate; different tools report different numbers, especially for slow songs.

## "Someone Like You" — Adele (2011)

**A major, about 67 BPM, piano and voice.**

- *Pass 1:* hum home in the first chorus — it's A. The song is built entirely on a repeating piano arpeggio.
- *Pass 3:* in the verse, track the lowest piano note: A, then G#, then F#, then D. That G# is the bass of a **C#m/G#** — the same stepwise-descent trick as *Paper Lanterns* (I – iii/5 – vi – IV).
- *Pass 4:* the chorus switches to the classic **I–V–vi–IV** (A – E – F#m – D).
- *Pass 7:* count the instruments. There are only two. The chorus feels bigger through register and dynamics alone — a lesson for your own arrangements.

## "All of Me" — John Legend (2013)

**Ab major, about 63 BPM, piano and voice.**

- *Pass 2:* verse, pre-chorus, chorus. Notice how long the chorus is compared with the verse.
- *Pass 4:* the verse runs **vi–IV–I–V** (Fm – Db – Ab – Eb); the chorus rotates the same four chords to start on home: **I–vi–IV–V** (Ab – Fm – Db – Eb). Same chords, different starting point, completely different feeling — "searching" versus "arrived".
- *Pass 5:* listen for where the long chorus notes land: mostly on chord tones, just as you practised this week.

## "Perfect" — Ed Sheeran (2017)

**Ab major, slow compound meter (a 6/8 sway, around 63 dotted-quarter beats; some tools report ~95).**

- *Pass 1:* tap along — you'll feel groups of three. This is the first real song in the course not in simple 4/4; write "6/8" in your map.
- *Pass 4:* the verse uses **I–vi–IV–V** (Ab – Fm – Db – Eb), the same four chords as "All of Me" — in the same key.
- *Pass 7:* the arrangement adds layers gradually as the song goes on. Mark on your layer map the section where each new layer enters.

Hear the "rotation" idea for yourself with the same four chords (an original voicing, not the record):

```example
{
  "title": "Rotation: vi–IV–I–V, then I–vi–IV–V in Ab",
  "bpm": 63, "timeSig": "4/4", "key": "Ab",
  "tracks": [
    { "instrument": "bass", "seq": "F2:w | Db2:w | Ab1:w | Eb2:w | Ab1:w | F2:w | Db2:w | Eb2:w" },
    { "instrument": "piano", "seq": "[Ab3 C4 F4]:h [Ab3 C4 F4]:h | [Ab3 Db4 F4]:h [Ab3 Db4 F4]:h | [Ab3 C4 Eb4]:h [Ab3 C4 Eb4]:h | [G3 Bb3 Eb4]:h [G3 Bb3 Eb4]:h | [Ab3 C4 Eb4]:h [Ab3 C4 Eb4]:h | [Ab3 C4 F4]:h [Ab3 C4 F4]:h | [Ab3 Db4 F4]:h [Ab3 Db4 F4]:h | [G3 Bb3 Eb4]:h [G3 Bb3 Eb4]:h" }
  ],
  "show": ["keyboard"],
  "loop": true
}
```

## What real ballads confirm

Three different artists, and the same toolkit: slow tempo, four diatonic chords, arpeggiated keys or guitar, a stepwise or rotated progression for variety, and growth by layers and register. Your mystery ballad wasn't a simplification; it was the style.

```exercise
{
  "id": "w46l3-refs",
  "type": "quiz",
  "title": "Reference check",
  "spec": { "questions": [
    { "q": "\"Someone Like You\": the verse bass descends A – G# – F# – D. The second chord is…", "choices": ["G#dim", "C#m/G#", "E/G#", "G#m"], "answer": 1 },
    { "q": "\"Someone Like You\": chorus progression?", "choices": ["I–V–vi–IV", "vi–IV–I–V", "I–IV–V–IV", "ii–V–I–vi"], "answer": 0 },
    { "q": "\"All of Me\": how do verse and chorus progressions relate?", "choices": ["Completely different chords", "Same four chords, rotated to start on I in the chorus", "The chorus modulates", "The chorus uses borrowed chords"], "answer": 1 },
    { "q": "\"Perfect\": what meter feel?", "choices": ["Straight 4/4", "Compound (6/8) sway in groups of three", "5/4", "Half-time 4/4 with snare on 3"], "answer": 1 },
    { "q": "What do all three ballads share?", "choices": ["Borrowed chords in every bar", "Diatonic four-chord harmony and growth by layers/register", "Fast tempos", "No chorus"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "w46l3-prog-ab",
  "type": "ear-progression",
  "title": "Rotations of four chords in Ab",
  "count": 8,
  "passScore": 0.8,
  "spec": { "key": "Ab", "mode": "major", "length": 4, "chords": ["I", "IV", "V", "vi"], "style": "arpeggio" }
}
```

```exercise
{
  "id": "w46l3-inv",
  "type": "ear-chord",
  "title": "Root position or inversion?",
  "count": 10,
  "passScore": 0.75,
  "spec": { "qualities": ["maj", "min"], "inversions": [0, 1, 2], "voicing": "open", "range": ["C2", "C5"] }
}
```

```exercise
{
  "id": "w46l3-analysis",
  "type": "roman-analysis",
  "title": "Analyse the verse and chorus of \"Someone Like You\" (triads)",
  "spec": { "key": "A", "chords": ["A", "C#m", "F#m", "D", "A", "E", "F#m", "D"], "prompt": "symbols" }
}
```

```exercise
{
  "id": "w46l3-play",
  "type": "play-chord",
  "title": "The Ab ballad chords",
  "instructions": "Play Ab – Fm – Db – Eb as smooth, close voicings, then start the loop on Fm to hear the rotation.",
  "spec": { "chords": ["Ab", "Fm", "Db", "Eb", "Fm", "Db", "Ab", "Eb"], "inversion": "any", "sequence": true, "bpm": 63 }
}
```

```exercise
{
  "id": "w46l3-daw",
  "type": "daw-task",
  "title": "Your 16-bar ballad sketch",
  "spec": {
    "template": { "bpm": 68, "key": "Ab", "tracks": [
      { "instrument": "piano", "seq": "" }, { "instrument": "bass", "seq": "" },
      { "instrument": "strings", "seq": "" }, { "instrument": "lead", "seq": "" } ] },
    "task": "Write an original 16-bar ballad in Ab: an 8-bar verse with a stepwise slash-chord bass, then an 8-bar chorus using at least two 7th chords. Piano arpeggios throughout; strings enter only in the chorus; melody ends on Ab.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "bass", "strings", "lead"] },
      { "kind": "bars", "min": 16, "max": 16 },
      { "kind": "in-key", "key": "Ab", "scale": "major", "allowPassing": true, "track": 3 },
      { "kind": "ends-on", "degree": 1, "track": 3 },
      { "kind": "uses-rhythm", "values": ["8"], "minDistinct": 1, "track": 0 },
      { "kind": "max-leap", "semitones": 5, "track": 1 }
    ],
    "minBars": 16, "maxBars": 16
  }
}
```

```exercise
{
  "id": "w46l3-reflect",
  "type": "reflect",
  "title": "Ballad lessons",
  "spec": { "prompt": "Which of the three ballads was hardest to transcribe, and at which pass did you get stuck? Name one technique from these records you will steal for your final project.", "minWords": 40 }
}
```
