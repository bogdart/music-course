---
id: w41-l1-the-transcription-workflow
title: The Transcription Workflow
week: 41
order: 1
phase: p5
duration_min: 40
goals:
  - Learn the seven-pass transcription workflow and why its order matters
  - Run the first three passes (key, form, bass roots) on a short mystery song
  - Hear a vi–IV–I–V loop and name the home chord even when the song starts elsewhere
prerequisites: [w40-l3-self-critique-and-ear-assessment]
tags: [transcription, ear, workflow, bass, progression]
---

# The Transcription Workflow

Welcome to the last phase. Everything you have built for forty weeks — scale degrees, chord roots, qualities, grooves, arrangement — now points at one skill: hearing a finished song and writing down how it is made. That skill is called [[transcription]], and the difference between people who can do it and people who can't is rarely talent. It is **method**.

## Seven passes, one question each

Beginners try to hear everything at once and drown. Professionals listen many times, each time with *one* question. We call each of those a [[listening pass]]:

1. **Key & tempo** — Where is home? How fast is the beat?
2. **Form** — Where do sections start and end? How many bars each?
3. **Bass roots** — What note does the bass land on at each chord change?
4. **Chord qualities** — Major, minor, 7th, sus? Now the roots become chords.
5. **Melody** — Hook first, then the rest, in scale degrees.
6. **Groove** — Kick, snare, hats: where do they fall?
7. **Layers** — Which instruments play in which section?

The order is deliberate. Key gives you a map for everything after it. Form tells you how much you actually need to transcribe (choruses repeat!). Bass roots are the easiest harmonic information to hear, and once you know roots, qualities are mostly predictable from the key. Melody and groove come later because they are easier to place on top of a known grid.

Write your answers on a [[form map]] — a simple sheet with one row per section: name, bars, chords, notes on melody, groove and layers.

## Your first mystery song

This week's practice material is a [[mystery song]]: an original track the app plays, which you decompose exactly as you would a song on the radio. Loop it and do only pass 1 first: hum the note that feels like "home". Then pass 3: follow the bass.

```example
{
  "title": "Mystery Song #0 (loop it)",
  "bpm": 96, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 ohat:8" },
    { "instrument": "bass", "seq": "A2:q. A2:8 r:q A2:q | F2:q. F2:8 r:q F2:q | C2:q. C2:8 r:q C2:q | G2:q. G2:8 r:q G2:q" },
    { "instrument": "piano", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w" },
    { "instrument": "lead", "seq": "E5:q E5:8 D5:8 C5:q A4:q | C5:q. C5:8 D5:q C5:q | E5:q G5:q E5:8 D5:8 C5:q | D5:h. r:q" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

Notice the trap: the loop *starts* on an A minor chord, but the melody and bass keep leaning towards C. Home is where the music comes to rest, not where it begins.

```exercise
{
  "id": "w41l1-order",
  "type": "quiz",
  "title": "The seven passes",
  "spec": { "questions": [
    { "q": "Which pass comes first?", "choices": ["Melody", "Key & tempo", "Groove", "Layers"], "answer": 1, "explain": "The key is the map that every later pass is written on." },
    { "q": "Why do bass roots come before chord qualities?", "choices": ["The bass is always loudest", "Roots are the easiest harmonic facts to hear, and the key then predicts most qualities", "Chord qualities don't matter", "Bass players decide the chords"], "answer": 1 },
    { "q": "Why do we map the form early?", "choices": ["Repeated sections only need transcribing once", "Form decides the key", "It makes the tempo faster", "It is the hardest pass"], "answer": 0 },
    { "q": "Mystery Song #0 starts on A minor. What is its key?", "choices": ["A minor", "C major", "F major", "G major"], "answer": 1, "explain": "Chords A–F–C–G all sit in C major, and the phrase leans towards C: it is vi–IV–I–V." }
  ] }
}
```

```exercise
{
  "id": "w41l1-home",
  "type": "ear-note",
  "title": "Pass 1: where is home?",
  "instructions": "Hear the cadence, then a note. Name its degree. Degree 1 is 'home'.",
  "count": 10,
  "passScore": 0.8,
  "spec": { "key": "C", "mode": "major", "degrees": [1, 2, 3, 4, 5, 6, 7], "reference": "cadence", "octaves": [3, 4], "instrument": "piano" }
}
```

```exercise
{
  "id": "w41l1-bass",
  "type": "ear-bass",
  "title": "Pass 3: bass roots",
  "instructions": "Play the bass root of each chord you hear. Hum it first, then find it on the keyboard.",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "C", "chords": ["I", "IV", "V", "vi"], "answer": "play" }
}
```

```exercise
{
  "id": "w41l1-prog",
  "type": "ear-progression",
  "title": "Roots become a progression",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "C", "mode": "major", "length": 4, "chords": ["I", "IV", "V", "vi"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "w41l1-play",
  "type": "play-chord",
  "title": "Play the mystery loop",
  "instructions": "Play the four chords of Mystery Song #0 with the voicings from the example.",
  "count": 6,
  "spec": { "chords": ["Am", "F", "C", "G"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

```exercise
{
  "id": "w41l1-reflect",
  "type": "reflect",
  "title": "Start your form map",
  "spec": { "prompt": "Write the first lines of a form map for Mystery Song #0: key, approximate tempo, number of bars in the loop, the bass roots in order, and one sentence about what the melody does at the end of the loop.", "minWords": 30 }
}
```
