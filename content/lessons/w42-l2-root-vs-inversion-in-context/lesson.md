---
id: w42-l2-root-vs-inversion-in-context
title: Root or Inversion? Bass in Context
week: 42
order: 2
phase: p5
duration_min: 45
goals:
  - Recognise when the bass plays a chord tone other than the root and write it as a slash chord
  - Hear a stepwise descending bass line and a pedal point in a mix
  - Play slash-chord voicings with the bass note in the left hand
prerequisites: [w42-l1-bass-in-full-mixes]
tags: [transcription, bass, inversions, slash-chords, ear]
---

# Root or Inversion? Bass in Context

Yesterday's rule — "the landing note is the root" — works most of the time. Today is about the exceptions, because they're everywhere in pop and they fool beginners constantly.

## Slash chords

When the bass plays the 3rd or 5th of a chord, we write a [[slash chord]]: chord / bass note. **G/B** means a G major chord with B in the bass. Songwriters use them to make the bass line move by step instead of jumping. The giveaway is a bass line that walks smoothly downward (or upward) while the chords above sound like ordinary triads.

How to tell the difference by ear: when the bass plays the root, the chord sounds solid and settled. When it plays the 3rd, the chord sounds lighter and "in motion", as if leaning towards the next chord. Over the 5th, it sounds suspended, unstable — that's why the 5th in the bass mostly appears on the way to a cadence.

```example
{
  "title": "Descending bass: C – G/B – Am – Am/G – F – C/E – Dm – G",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "drums", "seq": "kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:8 kick:8 snare:q" },
    { "instrument": "bass", "seq": "C3:h B2:h | A2:h G2:h | F2:h E2:h | D2:h G2:h" },
    { "instrument": "piano", "seq": "[G3 C4 E4]:h [G3 B3 D4]:h | [A3 C4 E4]:h [A3 C4 E4]:h | [A3 C4 F4]:h [G3 C4 E4]:h | [A3 D4 F4]:h [G3 B3 D4]:h" }
  ],
  "show": ["staff", "pianoroll"],
  "loop": true
}
```

Hum the bass: it's just a scale walking down, C–B–A–G–F–E–D, then a jump to G. If you had written "roots" you'd have G on beat 3 of bar 1 — and it would sound wrong when you played it back.

## Pedal points

The opposite trick: the bass *stays* on one note while the chords change above it. That's a [[pedal point]]. Ballads and EDM builds use it to create tension; your ear hears the chords move but the floor stays put.

```example
{
  "title": "Tonic pedal: C – F/C – G/C – C",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "bass", "seq": "C2:w | C2:w | C2:w | C2:w" },
    { "instrument": "pad", "seq": "[E3 G3 C4]:w | [F3 A3 C4]:w | [D3 G3 B3]:w | [E3 G3 C4]:w" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

When transcribing, write both layers: the chord *and* the bass note. "F/C" tells a player exactly what to do.

```exercise
{
  "id": "w42l2-listen",
  "type": "listen",
  "title": "Which chord, which bass?",
  "spec": {
    "example": {
      "title": "Descending bass",
      "bpm": 80, "timeSig": "4/4", "key": "C",
      "tracks": [
        { "instrument": "bass", "seq": "C3:h B2:h | A2:h G2:h | F2:h E2:h | D2:h G2:h" },
        { "instrument": "piano", "seq": "[G3 C4 E4]:h [G3 B3 D4]:h | [A3 C4 E4]:h [A3 C4 E4]:h | [A3 C4 F4]:h [G3 C4 E4]:h | [A3 D4 F4]:h [G3 B3 D4]:h" }
      ],
      "loop": true
    },
    "questions": [
      { "q": "Bar 1, beat 3: the bass plays B. The chord above is G major. Write it as…", "choices": ["Bdim", "G/B", "Bm", "G"], "answer": 1 },
      { "q": "Bar 3, beat 3: the bass plays E under a C major triad. Which chord tone is in the bass?", "choices": ["Root", "3rd", "5th", "7th"], "answer": 1 },
      { "q": "Why do songwriters use slash chords like these?", "choices": ["To change key", "To make the bass move by step", "To speed up the tempo", "To avoid the tonic"], "answer": 1 }
    ]
  }
}
```

```exercise
{
  "id": "w42l2-inv",
  "type": "ear-chord",
  "title": "Root, first or second inversion?",
  "instructions": "Name quality and inversion: 0 = root in bass, 1 = 3rd in bass, 2 = 5th in bass.",
  "count": 10,
  "passScore": 0.75,
  "spec": { "qualities": ["maj", "min"], "inversions": [0, 1, 2], "voicing": "close", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "w42l2-root",
  "type": "ear-chord-root",
  "title": "Find the root anyway",
  "instructions": "Some of these chords are inverted. Play the root, not the bass note.",
  "count": 10,
  "passScore": 0.75,
  "spec": { "qualities": ["maj", "min"], "answer": "play", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "w42l2-name",
  "type": "quiz-input",
  "title": "Write the slash chord",
  "spec": { "questions": [
    { "q": "A C major triad with E in the bass is written…", "answer": ["C/E"], "kind": "text" },
    { "q": "An F major triad over a C bass is written…", "answer": ["F/C"], "kind": "text" },
    { "q": "An A minor triad with G in the bass is written…", "answer": ["Am/G"], "kind": "text" },
    { "q": "D major with F# in the bass is written…", "answer": ["D/F#"], "kind": "text" }
  ] }
}
```

```exercise
{
  "id": "w42l2-gb",
  "type": "play-notes",
  "title": "Play G/B",
  "instructions": "Left hand B, right hand G major triad above it.",
  "spec": { "prompt": "names", "notes": ["B2", "G3", "B3", "D4"], "ordered": false, "key": "C" }
}
```

```exercise
{
  "id": "w42l2-line",
  "type": "play-melody",
  "title": "Walk the bass down",
  "instructions": "Play the descending bass line against the piano chords.",
  "spec": { "bpm": 70, "timeSig": "4/4", "key": "C", "seq": "C3:h B2:h | A2:h G2:h | F2:h E2:h | D2:h G2:h", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "piano", "seq": "[G3 C4 E4]:h [G3 B3 D4]:h | [A3 C4 E4]:h [A3 C4 E4]:h | [A3 C4 F4]:h [G3 C4 E4]:h | [A3 D4 F4]:h [G3 B3 D4]:h" } }
}
```

```exercise
{
  "id": "w42l2-daw",
  "type": "daw-task",
  "title": "Your own stepwise bass",
  "spec": {
    "template": { "bpm": 80, "key": "G", "tracks": [ { "instrument": "piano", "seq": "" }, { "instrument": "bass", "seq": "" } ] },
    "task": "In G major, write 4 bars of chords (two per bar) whose bass line walks steadily down by step from G, using at least two slash chords (for example G – D/F# – Em – Em/D …).",
    "checks": [
      { "kind": "contour", "shape": "descending", "track": 1 },
      { "kind": "in-key", "key": "G", "scale": "major", "allowPassing": false, "track": 1 },
      { "kind": "max-leap", "semitones": 5, "track": 1 },
      { "kind": "starts-on", "degrees": [1], "track": 1 },
      { "kind": "bars", "min": 4, "max": 4 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```
