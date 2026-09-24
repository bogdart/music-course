---
id: w44-l2-melody-over-harmony
title: Hearing Melody Over Harmony
week: 44
order: 2
phase: p5
duration_min: 45
goals:
  - Hear each melody note as root, 3rd, 5th or tension of the chord underneath
  - Recognise anticipations — melody notes that arrive an eighth before the chord
  - Play a syncopated pop melody in time over its backing
prerequisites: [w44-l1-leaps-and-chromatic-notes]
tags: [transcription, melody, syncopation, ear]
---

# Hearing Melody Over Harmony

In a real mix the melody never plays alone. That sounds like a problem, but it's actually a gift: the chords you transcribed in pass 4 tell you which notes the melody is *likely* to use. Today we exploit that, and fix the most common rhythm mistake in pop dictation.

## Every melody note has a job

On strong beats, pop melodies sit mostly on chord tones. So instead of asking "what degree is this?", ask "**what is this note doing to the chord?**"

- **Root** — solid, final, sounds like the end of a thought.
- **3rd** — sweet, singing, the most common melody note on a downbeat.
- **5th** — open, neutral, a little hollow.
- **Tension** (2nd/9th, 4th, 6th, 7th) — colour, wants to move, usually by step.

Once you know the chord *and* the job, the note is determined. Over E minor, a "sweet 3rd" can only be G.

## Anticipations

Pop melodies love to arrive **an eighth note early**, tied across the barline, so the lyric lands on the "and" of 4 instead of on beat 1. This [[anticipation]] is the reason beginners' melody transcriptions look right but sound stiff: they quantise the note to the downbeat. Listen for the note starting *before* the chord change — the melody leads, the harmony catches up.

```example
{
  "title": "Pop melody with anticipations over G – Em – C – D",
  "bpm": 96, "timeSig": "4/4", "key": "G",
  "tracks": [
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" },
    { "instrument": "bass", "seq": "G2:h G2:h | E2:h E2:h | C2:h C2:h | D2:h D2:h" },
    { "instrument": "piano", "seq": "[G3 B3 D4]:w | [G3 B3 E4]:w | [G3 C4 E4]:w | [F#3 A3 D4]:w" },
    { "instrument": "lead", "seq": "r:8 B4:8 B4:8 A4:8 G4:q. E5:8~ | E5:h r:8 B4:8 G4:8 E5:8~ | E5:q D5:8 C5:8 C5:q. D5:8~ | D5:h. r:q" }
  ],
  "show": ["staff", "pianoroll"],
  "loop": true
}
```

Notice the last eighth of bars 1, 2 and 3: each is the first note of the *next* chord (E for Em, E for C, D for D), tied over. Write the anticipation as it is played — it's part of the song's feel.

```exercise
{
  "id": "w44l2-listen",
  "type": "listen",
  "title": "Jobs and anticipations",
  "spec": {
    "example": {
      "title": "Melody over chords",
      "bpm": 80, "timeSig": "4/4", "key": "G",
      "tracks": [
        { "instrument": "piano", "seq": "[G3 B3 D4]:w | [G3 B3 E4]:w | [G3 C4 E4]:w | [F#3 A3 D4]:w" },
        { "instrument": "lead", "seq": "r:8 B4:8 B4:8 A4:8 G4:q. E5:8~ | E5:h r:8 B4:8 G4:8 E5:8~ | E5:q D5:8 C5:8 C5:q. D5:8~ | D5:h. r:q" }
      ],
      "loop": true
    },
    "questions": [
      { "q": "Bar 2: the held E over E minor is its…", "choices": ["Root", "3rd", "5th", "Tension"], "answer": 0 },
      { "q": "Bar 3: the held E over C major is its…", "choices": ["Root", "3rd", "5th", "Tension"], "answer": 1 },
      { "q": "When does the E at the end of bar 1 start?", "choices": ["On beat 1 of bar 2", "On the 'and' of 4 in bar 1 — an anticipation", "On beat 3 of bar 1", "On beat 2 of bar 2"], "answer": 1 }
    ]
  }
}
```

```exercise
{
  "id": "w44l2-jobs",
  "type": "quiz",
  "title": "Name the job",
  "spec": { "questions": [
    { "q": "Chord: D major. Melody note: F#. Job?", "choices": ["Root", "3rd", "5th", "Tension"], "answer": 1 },
    { "q": "Chord: C major. Melody note: D. Job?", "choices": ["Root", "3rd", "5th", "Tension (9th)"], "answer": 3 },
    { "q": "Chord: E minor. Melody note: B. Job?", "choices": ["Root", "3rd", "5th", "Tension"], "answer": 2 },
    { "q": "Chord: G major. You hear a sweet-sounding 3rd. Which note?", "choices": ["G", "B", "D", "E"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "w44l2-degrees",
  "type": "ear-note",
  "title": "Melody-register degrees in G",
  "count": 12,
  "passScore": 0.8,
  "spec": { "key": "G", "mode": "major", "degrees": [1, 2, 3, 4, 5, 6, 7], "reference": "cadence", "octaves": [4, 5], "instrument": "piano" }
}
```

```exercise
{
  "id": "w44l2-melody",
  "type": "ear-melody",
  "title": "Syncopated fragments",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "G", "degrees": [1, 2, 3, 5, 6], "length": 6, "rhythm": "free", "answer": "play" }
}
```

```exercise
{
  "id": "w44l2-rhythm",
  "type": "ear-rhythm",
  "title": "Pushed rhythms",
  "count": 8,
  "passScore": 0.75,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "8", "rests": true, "answer": "tap" }
}
```

```exercise
{
  "id": "w44l2-play",
  "type": "play-melody",
  "title": "Play it with the push",
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "G", "seq": "r:8 B4:8 B4:8 A4:8 G4:q. E5:8~ | E5:h r:8 B4:8 G4:8 E5:8~ | E5:q D5:8 C5:8 C5:q. D5:8~ | D5:h. r:q", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "piano", "seq": "[G3 B3 D4]:w | [G3 B3 E4]:w | [G3 C4 E4]:w | [F#3 A3 D4]:w" } }
}
```
