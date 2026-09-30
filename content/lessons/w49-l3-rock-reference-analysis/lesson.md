---
id: w49-l3-rock-reference-analysis
title: "Transcribe 4: Rock and Indie — Reference Analysis"
week: 49
order: 3
phase: p5
duration_min: 50
goals:
  - Listen to three rock/indie records and commit to answers, including two with a debatable key
  - Hear droning top notes that turn ordinary chords into sus and add9 colours
  - Write an 8-bar rock section with a riff and a power-chord chorus
prerequisites: [w49-l2-mixolydian-and-flat-seven-by-ear]
tags: [transcription, rock, indie, reference-songs, sus, daw]
songs:
  - { title: "Sweet Home Alabama", artist: "Lynyrd Skynyrd", year: 1974, public_domain: false }
  - { title: "Seven Nation Army", artist: "The White Stripes", year: 2003, public_domain: false }
  - { title: "Wonderwall", artist: "Oasis", year: 1995, public_domain: false }
---

# Transcribe 4: Rock and Indie — Reference Analysis

This week's references include two famous arguments: musicians disagree about the key of two of these songs. A
transcriber's job isn't to find an "official" answer; it's to hear clearly and justify a decision with evidence.

## The indie drone

A sound you'll hear constantly in indie and Britpop: chords that keep the **same top notes** while the bass moves,
producing sus2, add9 and m7 colours almost by accident — guitarists leave the top strings ringing. Shown, as the
explanation:

```example
{
  "title": "Drone voicings — Asus2 – E/G# – F#m7 – Dsus2",
  "bpm": 90,
  "timeSig": "4/4",
  "key": "A",
  "tracks": [
    {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8"},
    {"instrument": "bass", "seq": "A2:w | G#2:w | F#2:w | D2:w"},
    {"instrument": "pluck", "seq": "[A3 B3 E4]:q [A3 B3 E4]:8 [A3 B3 E4]:8 r:8 [A3 B3 E4]:8 [A3 B3 E4]:q | [G#3 B3 E4]:q [G#3 B3 E4]:8 [G#3 B3 E4]:8 r:8 [G#3 B3 E4]:8 [G#3 B3 E4]:q | [F#3 A3 E4]:q [F#3 A3 E4]:8 [F#3 A3 E4]:8 r:8 [F#3 A3 E4]:8 [F#3 A3 E4]:q | [D3 A3 E4]:q [D3 A3 E4]:8 [D3 A3 E4]:8 r:8 [D3 A3 E4]:8 [D3 A3 E4]:q"}
  ],
  "show": ["keyboard"],
  "loop": true
}
```

The top E never moves; the colour changes underneath, over a stepwise slash-chord bass (week 42). To check a chord like
this by ear: find its bass note, then play the plain major (or minor) triad on it, then the same triad with the droning
top note added. If the plain triad sounds too "closed" against the record, the drone is there.

## Three records, verdict first

Your own copies, answers first. For each record:

1. **Riff or loop** — loop the intro. Find the lowest note of the riff or of each chord (low key, higher/lower until it
   merges) and count chords until the loop repeats. *Check:* play the bass notes in a row along with the record.
2. **Home** — find the note the vocal phrases end on. If two notes compete, hold each one low under the loop for a full
   cycle and note which one rings through everything. Write down *both* candidates and your evidence — two of these
   songs are genuinely debated.
3. **Quality** — on each bass note play root + 5th, major and minor along with the record. Look for ♭VII: a major
   chord two keys below home.
4. **Layers** — one pass just for the bass part (is it even a bass guitar?) and how the song gets bigger.

Stuck? Loop two bars, compare two candidates back to back, answer anyway.

```exercise
{
  "id": "w49l3-alabama",
  "type": "quiz",
  "title": "\"Sweet Home Alabama\" — Lynyrd Skynyrd (1974)",
  "spec": {
    "questions": [
      {"q": "How many chords in the loop that runs through most of the song?", "choices": ["Two", "Three", "Four"], "answer": 1, "explain": "Three: D – C – G, about 98 BPM."},
      {"q": "Which chord of the loop feels most like arriving home?", "choices": ["The first (D)", "The second (C)", "The third (G)"], "answers": [0, 2], "explain": "D or G both count. The riff and the vocal phrases keep coming to rest on D, so most analyses call D home (D Mixolydian). But the loop also reads as V – IV – I in G, and G major has no C♯ to contradict it: a genuinely two-way case. Put your phrase-end evidence in the reflection below."},
      {"q": "With D as home, the loop in numerals is…", "choices": ["I – ♭VII – IV", "V – IV – I", "I – VII – IV", "ii – I – V"], "answer": 0, "explain": "I – ♭VII – IV: C is the major chord a whole step below D, the Mixolydian ♭VII."}
    ]
  }
}
```

```exercise
{
  "id": "w49l3-sevennation",
  "type": "quiz",
  "title": "\"Seven Nation Army\" — The White Stripes (2003)",
  "spec": {
    "questions": [
      {"q": "Pass 3: is there a bass guitar?", "choices": ["Yes", "No — a guitar pitched down an octave with a pedal does the job"], "answer": 1},
      {"q": "Home and quality?", "choices": ["E minor", "G major", "A minor", "B major"], "answer": 0, "explain": "E minor, about 124 BPM."},
      {"q": "Pass 7: how does the song build?", "choices": ["New chords in each section", "Mostly louder, denser playing of the same riff", "Key changes", "Tempo changes"], "answer": 1}
    ]
  }
}
```

```exercise
{
  "id": "w49l3-wonderwall",
  "type": "quiz",
  "title": "\"Wonderwall\" — Oasis (1995)",
  "spec": {
    "questions": [
      {"q": "Do the sus chords resolve to plain major chords the way a classic sus4 does?", "choices": ["Yes, each time", "No — they ring as colours"], "answer": 1, "explain": "No: they ring as colours, with droning top strings like the example above."},
      {"q": "Listen for home. Which statement is fair?", "choices": ["Only F# can be home", "Only A can be home", "F# minor and A major can both be defended; the evidence decides"], "answer": 2, "explain": "The loop is commonly charted F#m7 – A – Esus4 – B7sus4 (about 87 BPM). Many hear F# minor, others A major. Give your own verdict and its evidence in the reflection below."}
    ]
  }
}
```

## Ear: chord colours at your level

Routine: bright or dark first, then the finer difference (settled or leaning, plain or shimmering); when unsure, play
the candidates on the keyboard right after the chord. The *How to do it* box under the drill shows the exact method for
your current rung.

```ladder
{"skill": "chords", "unlocks": 16, "intro": "Sus chords are rungs 8–9 of this ladder; you drill at your own current rung."}
```

```exercise
{
  "id": "w49l3-play",
  "type": "play-chord",
  "title": "Drone voicings",
  "instructions": "Keep E as the top note of every chord, as in the drone example (F#m7 needs its C# as well: F#–A–C#–E).",
  "spec": {"chords": ["Asus2", "E/G#", "F#m7", "Dsus2"], "inversion": "any", "sequence": true, "bpm": 72}
}
```

## Your rock section

1. Riff first, on the bass: one bar from E minor pentatonic (E G A B D), starting on E. Loop it until it sounds like a
   riff you'd remember; then copy it to the pluck in unison.
2. Repeat it 3 times, vary bar 4 (a chromatic step or a new ending), and put a drum fill at the end of bar 4.
3. Chorus: four power chords in eighths (e.g. E5 – C5 – G5 – D5), a lead melody on top.

*Check:* play bars 4–5 on repeat. If the chorus doesn't feel bigger than the riff, add longer notes to the lead or
open the hats.

```exercise
{
  "id": "w49l3-daw",
  "type": "daw-task",
  "title": "Your rock section",
  "spec": {
    "template": {
      "bpm": 126,
      "key": "Em",
      "tracks": [
        {"instrument": "drums", "seq": ""},
        {"instrument": "bass", "seq": ""},
        {"instrument": "pluck", "seq": ""},
        {"instrument": "lead", "seq": ""}
      ]
    },
    "task": "Write 8 bars in E minor: 4 bars of a one-bar pentatonic riff (bass and pluck in unison, bar 4 varied, a drum fill into bar 5), then a 4-bar chorus of eighth-note power chords with a lead melody.",
    "checks": [
      {"kind": "has-tracks", "instruments": ["drums", "bass", "pluck", "lead"]},
      {"kind": "bars", "min": 8, "max": 8},
      {"kind": "repetition", "motifBars": 1, "minRepeats": 3, "allowTransposed": false, "track": 1},
      {"kind": "in-key", "key": "E", "scale": "natural-minor", "allowPassing": true, "track": 1},
      {"kind": "drum-pattern", "requires": ["kick", "snare"], "snareOnBeats": [2, 4], "track": 0},
      {"kind": "in-key", "key": "E", "scale": "natural-minor", "allowPassing": true, "track": 3}
    ],
    "minBars": 8,
    "maxBars": 8
  }
}
```

```exercise
{
  "id": "w49l3-reflect",
  "type": "reflect",
  "title": "Your verdicts",
  "spec": {
    "prompt": "Give your key verdict for \"Sweet Home Alabama\" and \"Wonderwall\" with the listening evidence for each: where phrases resolve, where the bass rests, what the melody ends on.",
    "minWords": 40
  }
}
```

## Between lessons

Take one indie or rock song with a debatable key and write your verdict with two pieces of evidence (phrase ends, held
note under the loop).
