---
id: w52-l1-final-assessments
title: "Graduation 1: Ear and Theory Review"
week: 52
order: 1
phase: p5
duration_min: 50
goals:
  - See where you stand on eight of the nine ear ladders (the ninth, octaves, closes the course in lesson 3)
  - Review the theory of this phase in one analysis and a short quiz
  - Pick your strongest and weakest skills for practice after the course
prerequisites: [w51-l4-final-song-review]
tags: [assessment, ear, theory, graduation]
---

# Graduation 1: Ear and Theory Review

A year ago, two notes an octave apart sounded like different notes to you, and a chord was a new word. Today is a check-up
— **diagnostic**, not an exam. Everything here was drilled during the year; nothing is new. The ear sections are ladder
blocks, so each runs at *your* current rung: the result tells you where you stand on each skill, which is exactly what
you need to plan the practice that follows the course. Eight ladders are here; the ninth — octaves, the first skill of the
course — gets its own moment in lesson 3.

Timetable: warm-up 5 minutes · eight short ladder drills about 25 · theory 15 · reflection 5.

## How to take it

- One sitting, in order, without "searching" on the keyboard in the ear sections unless the drill asks you to play.
- A miss is information, not failure. Note which skills sit lowest.

## Warm-up: one hidden loop

Name what you can, answer, then reveal.

```exercise
{
  "id": "w52l1-warmup",
  "type": "listen",
  "title": "Warm-up loop",
  "spec": {
    "example": {
      "title": "Warm-up loop",
      "bpm": 90,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q"},
        {"instrument": "drums", "seq": "r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q"},
        {"instrument": "bass", "seq": "C2:h. r:q | B1:h. r:q | A1:h. r:q | F1:h G1:h"},
        {"instrument": "epiano", "seq": "[E3 G3 B3]:w | [D3 G3 B3]:w | [E3 G3 C4]:w | [Ab3 C4 F4]:h [F3 C4 D4]:q [F3 B3 D4]:q"},
        {"instrument": "lead", "seq": "G4:q E4:8 G4:8 B4:h | D5:q. C5:8 B4:h | C5:8 B4:8 A4:8 G4:8 E4:h | Ab4:h G4:h"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Bar 2: which chord symbol (the key is C)?", "choices": ["Bdim", "G/B", "Em", "G"], "answer": 1, "explain": "G/B — V6: a G major triad over its third, B; the bass stepped down C → B. The loop so far: Cmaj7 – G/B – Am7."},
      {"q": "Bar 4, first half: which chord?", "choices": ["IV (F)", "iv (Fm)", "♭VI (A♭)", "ii (Dm)"], "answer": 1, "explain": "iv, Fm — borrowed from C minor; the melody's A♭ is its minor 3rd."},
      {"q": "Bar 4, second half: what happens in the keys?", "choices": ["A sus4 resolves", "The chord turns minor", "Nothing changes"], "answer": 0, "explain": "G7sus4 → G7: the C slides down to B."}
    ]
  }
}
```

## Section A — Ear (at your own rung on each ladder)

```ladder
{"skill": "degrees", "unlocks": 22, "intro": "Scale degrees."}
```

```ladder
{"skill": "intervals", "unlocks": 21, "intro": "Intervals."}
```

```ladder
{"skill": "chords", "unlocks": 16, "intro": "Chord colours."}
```

```ladder
{"skill": "roots", "unlocks": 15, "intro": "Roots and bass."}
```

```ladder
{"skill": "progressions", "unlocks": 20, "intro": "Progressions."}
```

```ladder
{"skill": "melody", "unlocks": 19, "intro": "Melodies."}
```

```ladder
{"skill": "rhythm", "unlocks": 16, "intro": "Rhythm."}
```

```ladder
{"skill": "scales", "unlocks": 13, "intro": "Scales and modes."}
```

The Dashboard's ladder bars now show your year in one picture. The lowest bars are your practice plan.

## Section B — Theory

```exercise
{
  "id": "w52l1-analysis",
  "type": "roman-analysis",
  "title": "B1. Analyse a progression in E",
  "spec": {
    "key": "E",
    "chords": ["Emaj7", "C#m7", "F#m7", "B7", "Amaj7", "Am", "G#m7", "C#7", "F#m7", "B7sus4", "D", "E"],
    "prompt": "symbols",
    "palette": "chromatic"
  }
}
```

```exercise
{
  "id": "w52l1-theory",
  "type": "quiz",
  "title": "B2. Theory and transcription",
  "spec": {
    "questions": [
      {"q": "In A major, the bass lands on F natural under a major chord. Numeral?", "choices": ["vi", "♭VI", "IV", "#V"], "answer": 1},
      {"q": "D – C – G – D with D as home is…", "choices": ["I – ♭VII – IV – I (Mixolydian)", "V – IV – I – V in G", "I – VII – IV – I in D major", "i – ♭VII – ♭IV – i"], "answer": 0},
      {"q": "A minor loop with a MAJOR IV chord (Dm – G in D minor) points to which mode?", "choices": ["Phrygian", "Dorian", "Locrian", "Harmonic minor"], "answer": 1},
      {"q": "A C major triad with G in the bass is written…", "choices": ["G/C", "C/G", "Csus/G", "G(add4)"], "answer": 1},
      {"q": "In G major, D/F# as a numeral is…", "choices": ["V6", "V/V", "vii°", "iii"], "answer": 0, "explain": "V6 — first inversion. V/V would be the dominant of V (A7)."},
      {"q": "In F major, a D7 chord most likely works as…", "choices": ["V/ii (pointing to Gm)", "The tonic", "A borrowed iv", "V/IV"], "answer": 0},
      {"q": "You tap 64 BPM, but the hats and bass run twice as fast and the snare hits only on beat 3. Written tempo?", "choices": ["32", "64", "128", "96"], "answer": 2},
      {"q": "E5 means…", "choices": ["E major, 5th inversion", "Root and 5th only (power chord)", "E with the 5th in the bass", "E augmented"], "answer": 1},
      {"q": "How many bars give at least 3 minutes at 120 BPM in 4/4?", "choices": ["60", "72", "90", "120"], "answer": 2},
      {"q": "The melody arrives on the 'and' of 4, tied into the next bar. This is…", "choices": ["A suspension", "An anticipation", "A pedal point", "A pickup bar"], "answer": 1},
      {"q": "A transcribed chord sounds wrong on playback. First thing to re-check?", "choices": ["The bass note (pass 3), before the quality", "The key signature of the next song", "The melody", "Whether it's a 13th"], "answer": 0}
    ]
  }
}
```

```exercise
{
  "id": "w52l1-play",
  "type": "play-chord",
  "title": "Play the warm-up loop",
  "instructions": "After revealing the warm-up: play its chords, with B as the lowest note of G/B.",
  "spec": {"chords": ["Cmaj7", "G/B", "Am7", "Fm", "G7sus4", "G7"], "inversion": "any", "sequence": true, "bpm": 60}
}
```

```exercise
{
  "id": "w52l1-reflect",
  "type": "reflect",
  "title": "Your ear map",
  "spec": {
    "prompt": "List your ladders from strongest to weakest (use the Dashboard bars). For the two weakest, write one sentence on what you actually hear when you get them wrong.",
    "minWords": 30
  }
}
```
