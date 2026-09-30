---
id: w47-l3-dance-reference-analysis
title: "Transcribe 2: Dance Pop — Reference Analysis"
week: 47
order: 3
phase: p5
duration_min: 50
goals:
  - Listen to three up-tempo hits and commit to tempo, home, loop and groove before reading the facts
  - "Tell a minor iv from a major IV inside a minor loop"
  - Write an 8-bar build and drop in D Dorian
prerequisites: [w47-l2-dance-bass-and-hooks]
tags: [transcription, dance-pop, reference-songs, dorian, daw]
songs:
  - { title: "Blinding Lights", artist: "The Weeknd", year: 2019, public_domain: false }
  - { title: "Uptown Funk", artist: "Mark Ronson feat. Bruno Mars", year: 2014, public_domain: false }
  - { title: "Get Lucky", artist: "Daft Punk feat. Pharrell Williams and Nile Rodgers", year: 2013, public_domain: false }
---

# Transcribe 2: Dance Pop — Reference Analysis

Three up-tempo records, three grooves. As always: your own copies, listen first, **answer before
reading the explanations**.

## A colour to listen for: iv or IV in a minor key

In natural minor the chord on degree 4 is minor (iv). Many danceable "minor but not sad" songs use a **major IV**
instead: its 3rd is the raised 6th degree — the Dorian note from week 22. Hear it (shown — this is the explanation):

```example
{
  "title": "Original: Dorian vamp — Em7 to A7",
  "bpm": 100,
  "timeSig": "4/4",
  "key": "Em",
  "tracks": [
    {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [kick clap hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick clap hihat]:8 ohat:8 | [kick hihat]:8 hihat:8 [kick clap hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick clap hihat]:8 ohat:8 | [kick hihat]:8 hihat:8 [kick clap hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick clap hihat]:8 ohat:8 | [kick hihat]:8 hihat:8 [kick clap hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick clap hihat]:8 ohat:8"},
    {"instrument": "bass", "seq": "E2:q. E2:8 r:h | A1:q. A1:8 r:h | E2:q. E2:8 r:h | A1:q. A1:8 r:h"},
    {"instrument": "epiano", "seq": "[G3 B3 D4]:h [G3 B3 D4]:h | [G3 C#4 E4]:h [G3 C#4 E4]:h | [G3 B3 D4]:h [G3 B3 D4]:h | [G3 C#4 E4]:h [G3 C#4 E4]:h"}
  ],
  "show": ["keyboard"],
  "loop": true
}
```

The C♯ in the A7 is the Dorian note (the raised 6th of E minor); swap it for C and the groove turns darker. Now a hidden vamp in another key:
two chords, and the second is either the minor iv7 or the Dorian IV7.

```exercise
{
  "id": "w47l3-vamp",
  "type": "ear-progression",
  "title": "Hidden vamp: iv7 or IV7?",
  "srs": false,
  "spec": {
    "key": "Am",
    "chords": ["i7", "iv7", "IV7"],
    "example": {
      "title": "Hidden vamp",
      "bpm": 112,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8"},
        {"instrument": "bass", "seq": "A1:h. r:q | D2:h. r:q | A1:h. r:q | D2:h. r:q"},
        {"instrument": "epiano", "seq": "[G3 A3 C4 E4]:q. [G3 A3 C4 E4]:8 r:h | [F#3 A3 C4 D4]:q. [F#3 A3 C4 D4]:8 r:h | [G3 A3 C4 E4]:q. [G3 A3 C4 E4]:8 r:h | [F#3 A3 C4 D4]:q. [F#3 A3 C4 D4]:8 r:h"}
      ]
    },
    "progression": ["i7", "IV7", "i7", "IV7"]
  }
}
```

```ladder
{
  "skill": "scales",
  "unlocks": 13,
  "intro": "Rung 6 of the scales ladder is minor vs Dorian; you practise at your own rung."
}
```

```exercise
{
  "id": "w47l3-blinding",
  "type": "quiz",
  "title": "\"Blinding Lights\" — The Weeknd (2019)",
  "spec": {
    "questions": [
      {"q": "Tap along to the drums, then read your BPM. Which is closest?", "choices": ["About 86", "About 120", "About 171"], "answer": 2, "explain": "About 171. If you got ~86 you tapped the half-time feel; the drums and synth bass run at the fast count."},
      {"q": "Pass 1: home note and quality?", "choices": ["F minor", "A♭ major", "C minor", "E♭ major"], "answer": 0},
      {"q": "The four-chord loop ends on a chord that sounds…", "choices": ["Minor", "Major"], "answer": 1, "explain": "Major: the loop is commonly charted Fm – Cm – E♭ – B♭ (i – v – VII – IV). The major IV (B♭, with the raised 6th D natural) is the Dorian colour from the vamp above."}
    ]
  }
}
```

```exercise
{
  "id": "w47l3-uptown",
  "type": "quiz",
  "title": "\"Uptown Funk\" — Mark Ronson feat. Bruno Mars (2014)",
  "spec": {
    "questions": [
      {"q": "How many chords does the verse vamp use?", "choices": ["One", "Two", "Four"], "answer": 1, "explain": "Two: Dm7 – G7 (i7 – IV7) in D minor, about 115 BPM: the same i7 – IV7 Dorian move as the vamp above, a step lower."},
      {"q": "Is the kick four-on-the-floor?", "choices": ["Yes, every beat", "No — a syncopated funk pattern"], "answer": 1, "explain": "No: it's funk. Listen to kick and snare separately; the guitar and bass are choppy and syncopated."},
      {"q": "Pass 7: what punctuates the ends of phrases?", "choices": ["Horn stabs", "A string pad", "A choir"], "answer": 0}
    ]
  }
}
```

```exercise
{
  "id": "w47l3-lucky",
  "type": "quiz",
  "title": "\"Get Lucky\" — Daft Punk feat. Pharrell Williams & Nile Rodgers (2013)",
  "spec": {
    "questions": [
      {"q": "How many chords before the loop repeats?", "choices": ["Two", "Four", "Eight"], "answer": 1, "explain": "Four: Bm7 – D – F#m7 – E, about 116 BPM."},
      {"q": "Does the loop change anywhere in the song?", "choices": ["Yes, the chorus has new chords", "No — it repeats the whole way through"], "answer": 1, "explain": "It never changes. The form is built entirely by adding and removing layers."},
      {"q": "The loop contains E major. If you hear B as home, E major is…", "choices": ["IV", "V", "♭VII"], "answer": 0, "explain": "IV in B Dorian (i – III – v – IV). Others hear F# minor as home; both views are defended by musicians — what matters is the evidence you give."}
    ]
  }
}
```

```exercise
{
  "id": "w47l3-play",
  "type": "play-chord",
  "title": "Dorian vamps under your fingers",
  "spec": {"chords": ["Dm7", "G7", "Am7", "D7", "Bm7", "D", "F#m7", "E"], "inversion": "any", "sequence": true, "bpm": 80}
}
```

```exercise
{
  "id": "w47l3-daw",
  "type": "daw-task",
  "title": "Build and drop in D Dorian",
  "spec": {
    "template": {
      "bpm": 118,
      "key": "Dm",
      "tracks": [
        {"instrument": "drums", "seq": ""},
        {"instrument": "bass", "seq": ""},
        {"instrument": "epiano", "seq": ""},
        {"instrument": "lead", "seq": ""}
      ]
    },
    "task": "Write 8 bars in D Dorian: a 4-bar build (no kick, a snare roll that speeds up) and a 4-bar drop (kick on every beat, offbeat or octave bass, a 1-bar hook repeated with a small change). Use the major IV chord (G) at least once.",
    "checks": [
      {"kind": "has-tracks", "instruments": ["drums", "bass", "epiano", "lead"]},
      {"kind": "bars", "min": 8, "max": 8},
      {"kind": "in-key", "key": "D", "scale": "dorian", "allowPassing": false, "track": 2},
      {"kind": "in-key", "key": "D", "scale": "dorian", "allowPassing": true, "track": 3},
      {"kind": "uses-chord", "chord": "G", "roman": "IV", "min": 1},
      {"kind": "drum-pattern", "requires": ["kick", "snare"], "kickOnBeats": [1, 2, 3, 4], "bars": [5, 8], "track": 0}
    ],
    "minBars": 8,
    "maxBars": 8
  }
}
```
