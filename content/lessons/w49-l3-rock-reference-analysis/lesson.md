---
id: w49-l3-rock-reference-analysis
title: "Transcribe 4: Rock and Indie — Reference Analysis"
week: 49
order: 3
phase: p5
duration_min: 50
goals:
  - Decompose three rock/indie records by reference, including two with a debatable key
  - Hear sus2/sus4 colours and droning common tones in indie guitar parts
  - Write a 16-bar rock section with a riff intro and a power-chord chorus
prerequisites: [w49-l2-mixolydian-and-flat-seven-by-ear]
tags: [transcription, rock, indie, reference-songs, sus, daw]
songs:
  - { title: "Sweet Home Alabama", artist: "Lynyrd Skynyrd", year: 1974, public_domain: false }
  - { title: "Seven Nation Army", artist: "The White Stripes", year: 2003, public_domain: false }
  - { title: "Wonderwall", artist: "Oasis", year: 1995, public_domain: false }
---

# Transcribe 4: Rock and Indie — Reference Analysis

This week's references include two famous arguments. Musicians genuinely disagree about the key of two of these songs — which makes them perfect training. A transcriber's job isn't to find the "official" answer; it's to hear clearly and justify a decision.

## The indie drone

First, one sound you'll hear constantly in indie and Britpop: chords that keep the **same top notes** while the bass moves, producing sus2, add9 and m7 colours almost by accident. Guitarists get it by leaving the top strings ringing.

```example
{
  "title": "Original: drone voicings — Asus2 – E/G# – F#m7 – Dsus2",
  "bpm": 90, "timeSig": "4/4", "key": "A",
  "tracks": [
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" },
    { "instrument": "bass", "seq": "A2:w | G#2:w | F#2:w | D2:w" },
    { "instrument": "pluck", "seq": "[A3 B3 E4]:q [A3 B3 E4]:8 [A3 B3 E4]:8 r:8 [A3 B3 E4]:8 [A3 B3 E4]:q | [G#3 B3 E4]:q [G#3 B3 E4]:8 [G#3 B3 E4]:8 r:8 [G#3 B3 E4]:8 [G#3 B3 E4]:q | [F#3 A3 E4]:q [F#3 A3 E4]:8 [F#3 A3 E4]:8 r:8 [F#3 A3 E4]:8 [F#3 A3 E4]:q | [D3 A3 E4]:q [D3 A3 E4]:8 [D3 A3 E4]:8 r:8 [D3 A3 E4]:8 [D3 A3 E4]:q" }
  ],
  "show": ["keyboard"],
  "loop": true
}
```

The top E never moves. Listen for the colour change underneath — and for the stepwise slash-chord bass from week 42.

## "Sweet Home Alabama" — Lynyrd Skynyrd (1974)

**About 98 BPM. Loop: D – C – G**, repeated almost throughout. The debate: is it D Mixolydian (I – bVII – IV) or G major (V – IV – I)? Pass 1: where does each 3-chord phrase feel resolved? Where does the guitar riff start? Most listeners hear D as home, which makes this the textbook I–bVII–IV. Write your verdict and the reason.

## "Seven Nation Army" — The White Stripes (2003)

**E minor, about 124 BPM.** Pass 3 is a trick question: there's no bass guitar. The famous riff is a guitar pitched down an octave with an effect pedal, doing the bass's job. Pass 4: the harmony is *implied* by the riff's notes rather than played as chords. Pass 7: the song builds almost entirely by dynamics — the same riff gets louder and denser. List each change in intensity.

## "Wonderwall" — Oasis (1995)

**About 87 BPM. Loop commonly charted as F#m7 – A – Esus4 – B7sus4** (guitar capo on the 2nd fret). Pass 1 again: F# minor or A major? Pass 4: listen to the sus chords — neither resolves the way a classical sus4 would; they ring as colours, with droning top strings exactly like the example above.

```exercise
{
  "id": "w49l3-refs",
  "type": "quiz",
  "title": "Reference check",
  "spec": { "questions": [
    { "q": "\"Sweet Home Alabama\": if D is home, the loop D–C–G is…", "choices": ["I–bVII–IV", "V–IV–I", "I–VII–IV", "ii–I–V"], "answer": 0 },
    { "q": "\"Seven Nation Army\": what fills the bass role?", "choices": ["A bass guitar", "A guitar pitched down an octave with a pedal", "A synth", "Nothing — there's no low end"], "answer": 1 },
    { "q": "\"Seven Nation Army\": how does the song build?", "choices": ["New chords each section", "Mostly dynamics and density over the same riff", "Key changes", "Tempo changes"], "answer": 1 },
    { "q": "\"Wonderwall\": the sus chords…", "choices": ["Always resolve to major", "Ring as colours with droning top strings", "Are power chords", "Are diminished"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "w49l3-sus",
  "type": "ear-chord",
  "title": "Sus and triad colours",
  "count": 10,
  "passScore": 0.8,
  "spec": { "qualities": ["maj", "min", "sus2", "sus4", "min7"], "inversions": [0], "voicing": "open", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "w49l3-prog",
  "type": "ear-progression",
  "title": "Rock and indie loops in G",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "G", "mode": "major", "length": 4, "chords": ["I", "bVII", "IV", "vi7", "Vsus4", "ii"], "style": "arpeggio" }
}
```

```exercise
{
  "id": "w49l3-analysis",
  "type": "roman-analysis",
  "title": "Same chords, two keys",
  "instructions": "Analyse these chords in G. Then say out loud what they would be in D.",
  "spec": { "key": "G", "chords": ["D", "C", "G", "D"], "prompt": "symbols" }
}
```

```exercise
{
  "id": "w49l3-play",
  "type": "play-chord",
  "title": "Drone voicings",
  "instructions": "Keep B and E on top of every chord.",
  "spec": { "chords": ["Asus2", "E", "F#m7", "Dsus2"], "inversion": "any", "sequence": true, "bpm": 72 }
}
```

```exercise
{
  "id": "w49l3-daw",
  "type": "daw-task",
  "title": "Your rock section",
  "spec": {
    "template": { "bpm": 126, "key": "Em", "tracks": [
      { "instrument": "drums", "seq": "" }, { "instrument": "bass", "seq": "" },
      { "instrument": "pluck", "seq": "" }, { "instrument": "lead", "seq": "" } ] },
    "task": "Write 16 bars in E minor: 8 bars of a one-bar pentatonic riff (bass and pluck in unison, bar 8 varied, drum fill into bar 9), then an 8-bar chorus of eighth-note power chords with a lead melody and a ride/crash groove.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["drums", "bass", "pluck", "lead"] },
      { "kind": "bars", "min": 16, "max": 16 },
      { "kind": "repetition", "motifBars": 1, "minRepeats": 4, "allowTransposed": false, "track": 1 },
      { "kind": "in-key", "key": "E", "scale": "blues", "allowPassing": true, "track": 1 },
      { "kind": "drum-pattern", "requires": ["kick", "snare"], "snareOnBeats": [2, 4], "track": 0 },
      { "kind": "in-key", "key": "E", "scale": "natural-minor", "allowPassing": true, "track": 3 }
    ],
    "minBars": 16, "maxBars": 16
  }
}
```

```exercise
{
  "id": "w49l3-reflect",
  "type": "reflect",
  "title": "Your verdicts",
  "spec": { "prompt": "Give your key verdict for \"Sweet Home Alabama\" and \"Wonderwall\" with the listening evidence for each (where phrases resolve, where the bass rests, what the melody ends on).", "minWords": 40 }
}
```
