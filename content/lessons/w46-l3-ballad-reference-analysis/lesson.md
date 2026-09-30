---
id: w46-l3-ballad-reference-analysis
title: "Transcribe 1: Ballad — Reference Analysis"
week: 46
order: 3
phase: p5
duration_min: 50
goals:
  - Listen to three real ballads and commit to answers (key, bass, progression, meter, layers) before reading the facts
  - Compare how the verse and chorus chords of one song relate
  - Write an 8-bar ballad chorus using the techniques you heard
prerequisites: [w46-l2-ballad-bass-and-melody]
tags: [transcription, ballad, reference-songs, daw]
songs:
  - { title: "Someone Like You", artist: "Adele", year: 2011, public_domain: false }
  - { title: "All of Me", artist: "John Legend", year: 2013, public_domain: false }
  - { title: "Perfect", artist: "Ed Sheeran", year: 2017, public_domain: false }
---

# Transcribe 1: Ballad — Reference Analysis

Now the real thing. The app doesn't play these songs: open your own copy of each, listen once just to enjoy it, then
listen again pass by pass and **answer the quiz before you read any explanation**. The facts appear only after you commit.
Tempo figures are approximate — different tools report different numbers, especially for slow songs.

Useful before you start: two notations from week 42. A chord with its 3rd in the bass is a "6" numeral (V6 = V over
its 3rd); with its 5th in the bass a "64" numeral (I64 = I over its 5th).

```exercise
{
  "id": "w46l3-adele",
  "type": "quiz",
  "title": "\"Someone Like You\" — Adele (2011)",
  "spec": {
    "questions": [
      {"q": "Pass 1: hum home in the chorus. Which note?", "choices": ["A", "E", "F#", "D"], "answer": 0, "explain": "A major, about 67 BPM."},
      {"q": "Pass 3: in the verse, follow the lowest piano note. What does it do?", "choices": ["Jumps between roots", "Steps down for three notes, then drops", "Stays on one note", "Climbs by step"], "answer": 1, "explain": "It steps down A – G# – F# – D. The second chord is C#m/G# (iii64): the same stepwise-descent trick as Paper Lanterns."},
      {"q": "Pass 4: the chorus progression?", "choices": ["I – V – vi – IV", "vi – IV – I – V", "I – IV – V – IV", "ii – V – I – vi"], "answer": 0, "explain": "A – E – F#m – D."},
      {"q": "Pass 7: how many instruments?", "choices": ["Two: piano and voice", "A full band", "Piano, voice and strings throughout"], "answer": 0, "explain": "Only two. The chorus feels bigger through register and dynamics alone."}
    ]
  }
}
```

```exercise
{
  "id": "w46l3-legend",
  "type": "quiz",
  "title": "\"All of Me\" — John Legend (2013)",
  "spec": {
    "questions": [
      {"q": "Does the verse start on the home chord?", "choices": ["Yes", "No — it starts away from home"], "answer": 1, "explain": "No: the verse runs vi – IV – I – V (Fm – D♭ – A♭ – E♭) in A♭ major, about 63 BPM."},
      {"q": "How do the chorus chords relate to the verse chords?", "choices": ["Completely different chords", "The same four chords, rotated to start on I", "The chorus changes key", "The chorus adds borrowed chords"], "answer": 1, "explain": "The chorus is I – vi – IV – V (A♭ – Fm – D♭ – E♭): same chords, new starting point — 'searching' versus 'arrived'."},
      {"q": "Pass 5: where do the long chorus notes land?", "choices": ["Mostly on chord tones", "Mostly on tensions", "Randomly"], "answer": 0}
    ]
  }
}
```

```exercise
{
  "id": "w46l3-perfect",
  "type": "quiz",
  "title": "\"Perfect\" — Ed Sheeran (2017)",
  "spec": {
    "questions": [
      {"q": "Tap along. What do you feel?", "choices": ["Straight 4/4", "A sway in groups of three (6/8)", "5/4", "Half-time 4/4"], "answer": 1, "explain": "A compound 6/8 sway, about 63 dotted-quarter beats per minute (some tools report ~95)."},
      {"q": "Hum home. Which chord family does the verse loop use?", "choices": ["The same I – vi – IV – V as 'All of Me'", "i – ♭VII – ♭VI", "ii – V – I", "A 12-bar blues"], "answer": 0, "explain": "I – vi – IV – V (A♭ – Fm – D♭ – E♭), in the same key as 'All of Me'."},
      {"q": "Pass 7: how does the arrangement change over the song?", "choices": ["It stays the same", "Layers are added gradually", "It gets sparser"], "answer": 1}
    ]
  }
}
```

Practise the difference on other grooves: counting in twos versus swaying in threes is worth drilling on its own.

```exercise
{
  "id": "w46l3-meter",
  "type": "ear-meter",
  "title": "Meter practice: 4/4 or 6/8?",
  "count": 8,
  "instructions": "Count along. Groups of two (1-2-3-4) or a sway in threes (1-2-3 4-5-6)?",
  "spec": {"meters": ["4/4", "6/8"], "bpm": 72, "bars": 4, "style": "mixed"}
}
```

## Rotation

Hear the rotation idea for yourself with the same four chords (an original voicing):

```example
{
  "title": "vi–IV–I–V, then I–vi–IV–V in A♭",
  "bpm": 63,
  "timeSig": "4/4",
  "key": "Ab",
  "tracks": [
    {"instrument": "bass", "seq": "F2:w | Db2:w | Ab1:w | Eb2:w | Ab1:w | F2:w | Db2:w | Eb2:w"},
    {"instrument": "piano", "seq": "[Ab3 C4 F4]:h [Ab3 C4 F4]:h | [Ab3 Db4 F4]:h [Ab3 Db4 F4]:h | [Ab3 C4 Eb4]:h [Ab3 C4 Eb4]:h | [G3 Bb3 Eb4]:h [G3 Bb3 Eb4]:h | [Ab3 C4 Eb4]:h [Ab3 C4 Eb4]:h | [Ab3 C4 F4]:h [Ab3 C4 F4]:h | [Ab3 Db4 F4]:h [Ab3 Db4 F4]:h | [G3 Bb3 Eb4]:h [G3 Bb3 Eb4]:h"}
  ],
  "show": ["keyboard"],
  "loop": true
}
```

```ladder
{"skill": "progressions", "unlocks": 20, "intro": "Progressions at your own rung."}
```

```exercise
{
  "id": "w46l3-play",
  "type": "play-chord",
  "title": "The A♭ ballad chords",
  "instructions": "Play A♭ – Fm – D♭ – E♭ as smooth close voicings, then start the loop on Fm to hear the rotation.",
  "spec": {"chords": ["Ab", "Fm", "Db", "Eb", "Fm", "Db", "Ab", "Eb"], "inversion": "any", "sequence": true, "bpm": 63}
}
```

```exercise
{
  "id": "w46l3-daw",
  "type": "daw-task",
  "title": "Your 8-bar ballad chorus",
  "spec": {
    "template": {
      "bpm": 68,
      "key": "Ab",
      "tracks": [
        {"instrument": "piano", "seq": ""},
        {"instrument": "bass", "seq": ""},
        {"instrument": "strings", "seq": ""},
        {"instrument": "lead", "seq": ""}
      ]
    },
    "task": "Write an original 8-bar ballad chorus in A♭: piano arpeggios, a bass line that steps down for at least three notes (use a slash chord), at least one seventh chord, strings holding the harmony, and a melody that ends on A♭.",
    "checks": [
      {"kind": "has-tracks", "instruments": ["piano", "bass", "strings", "lead"]},
      {"kind": "bars", "min": 8, "max": 8},
      {"kind": "in-key", "key": "Ab", "scale": "major", "allowPassing": true, "track": 3},
      {"kind": "ends-on", "degree": 1, "track": 3},
      {"kind": "uses-rhythm", "values": ["8"], "minDistinct": 1, "track": 0},
      {"kind": "chord-has-seventh", "min": 1},
      {"kind": "max-leap", "semitones": 5, "track": 1}
    ],
    "minBars": 8,
    "maxBars": 8
  }
}
```
