---
id: w52-l1-final-assessments
title: "Graduation 1: Ear and Theory Assessments"
week: 52
order: 1
phase: p5
duration_min: 50
goals:
  - Demonstrate year-end ear skills — intervals, chord qualities, progressions, bass, melody, rhythm — at 80%+
  - Demonstrate year-end theory — analysis with sevenths, borrowed and secondary chords, keys, modes, form
  - Identify your strongest and weakest skills for continued practice after the course
prerequisites: [w51-l3-final-song-review]
tags: [assessment, ear, theory, graduation]
---

# Graduation 1: Ear and Theory Assessments

Fifty-one weeks ago you couldn't tell whether two notes an octave apart were "the same". Today you're going to prove how far that's come.

This lesson is the final ear and theory assessment. The pass mark on every section is **80%** — higher than anything earlier in the course, because this is the level at which you can decompose real songs reliably. The next lesson is the practical test: a full transcription.

## How to take it

- Do it in one sitting, in the order given. Warm up with the example below first — listen twice, no exercises.
- Don't use your keyboard to "search" for answers in the ear sections unless the exercise asks you to play. Hear first, then answer.
- If you miss 80% on a section, note it and move on. You can retake any section — but take the whole assessment once first, so you get an honest picture.

## Warm-up

A short loop that touches almost everything you'll be tested on: a slash chord, sevenths, a borrowed chord, a suspension, a syncopated bass and a melody with a chromatic note. Just listen — twice — and name what you can.

```example
{
  "title": "Warm-up loop",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "drums", "seq": "kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q | kick:8. kick:16 r:q kick:8 kick:8 r:q" },
    { "instrument": "drums", "seq": "r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q" },
    { "instrument": "bass", "seq": "C2:q. C2:8 r:8 C2:8 C2:q | B1:q. B1:8 r:8 B1:8 B1:q | A1:q. A1:8 r:8 A1:8 A1:q | F1:q. F1:8 G1:h" },
    { "instrument": "epiano", "seq": "[E3 G3 B3]:w | [D3 G3 B3]:w | [E3 G3 C4]:w | [Ab3 C4 F4]:h [F3 C4 D4]:q [F3 B3 D4]:q" },
    { "instrument": "lead", "seq": "G4:q E4:8 G4:8 B4:h | D5:q. C5:8 B4:h | C5:8 B4:8 A4:8 G4:8 E4:h | Ab4:h. G4:q" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

(Answers: Cmaj7 – G/B – Am7 – Fm, then G7sus4 → G7 over a G bass; the Ab in bar 4 is the borrowed iv's b6. If you heard most of that, you're ready.)

## Section A — Ear

```exercise
{
  "id": "w52l1-intervals",
  "type": "ear-interval",
  "title": "A1. All intervals, all directions",
  "count": 12,
  "passScore": 0.8,
  "srs": false,
  "spec": { "intervals": ["m2", "M2", "m3", "M3", "P4", "TT", "P5", "m6", "M6", "m7", "M7", "P8"], "direction": "mixed", "root": "random", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "w52l1-chords",
  "type": "ear-chord",
  "title": "A2. Chord qualities",
  "count": 12,
  "passScore": 0.8,
  "srs": false,
  "spec": { "qualities": ["maj", "min", "dim", "aug", "maj7", "min7", "dom7", "m7b5", "sus2", "sus4"], "inversions": [0], "voicing": "mixed", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "w52l1-progressions",
  "type": "ear-progression",
  "title": "A3. Progressions with sevenths and borrowed chords, any key",
  "count": 10,
  "passScore": 0.8,
  "srs": false,
  "spec": { "key": "random", "mode": "major", "length": 4, "chords": ["Imaj7", "ii7", "iii7", "IVmaj7", "V7", "vi7", "iv", "bVI", "bVII", "Vsus4"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "w52l1-bass",
  "type": "ear-bass",
  "title": "A4. Bass roots including borrowed chords",
  "count": 12,
  "passScore": 0.8,
  "srs": false,
  "spec": { "key": "D", "chords": ["I", "ii", "iii", "IV", "V", "vi", "bVI", "bVII"], "answer": "play" }
}
```

```exercise
{
  "id": "w52l1-melody",
  "type": "ear-melody",
  "title": "A5. Eight-note melodies",
  "count": 8,
  "passScore": 0.8,
  "srs": false,
  "spec": { "key": "Bb", "degrees": [1, 2, 3, 4, 5, 6, 7], "length": 8, "rhythm": "free", "answer": "play" }
}
```

```exercise
{
  "id": "w52l1-rhythm",
  "type": "ear-rhythm",
  "title": "A6. Two-bar 16th-note rhythms",
  "count": 10,
  "passScore": 0.8,
  "srs": false,
  "spec": { "timeSig": "4/4", "bars": 2, "subdivision": "16", "rests": true, "answer": "tap" }
}
```

## Section B — Theory

```exercise
{
  "id": "w52l1-analysis",
  "type": "roman-analysis",
  "title": "B1. Analyse a full progression in E",
  "passScore": 0.8,
  "spec": { "key": "E", "chords": ["Emaj7", "C#m7", "F#m7", "B7", "Amaj7", "Am", "G#m7", "C#7", "F#m7", "B7sus4", "D", "E"], "prompt": "symbols" }
}
```

```exercise
{
  "id": "w52l1-theory",
  "type": "quiz",
  "title": "B2. Theory and transcription knowledge",
  "passScore": 0.8,
  "spec": { "questions": [
    { "q": "In A major, the bass lands on F natural under a major chord. Numeral?", "choices": ["vi", "bVI", "IV", "#V"], "answer": 1 },
    { "q": "D – C – G – D with D as home is…", "choices": ["I–bVII–IV–I (Mixolydian)", "V–IV–I–V in G", "I–VII–IV–I in D major", "i–bVII–bIV–i"], "answer": 0 },
    { "q": "A minor loop with a MAJOR IV chord (e.g. Dm – G in D minor) suggests which mode?", "choices": ["Phrygian", "Dorian", "Locrian", "Harmonic minor"], "answer": 1 },
    { "q": "C major triad with G in the bass is written…", "choices": ["G/C", "C/G", "Csus/G", "G(add4)"], "answer": 1 },
    { "q": "In F major, a D7 chord most likely functions as…", "choices": ["V/ii (secondary dominant to Gm)", "The tonic", "A borrowed iv", "V/IV"], "answer": 0 },
    { "q": "You tap 64 BPM but the hats and bass run twice as fast and the snare hits only on beat 3. Written tempo?", "choices": ["32", "64", "128", "96"], "answer": 2 },
    { "q": "Which is NOT one of the seven passes?", "choices": ["Key & tempo", "Bass roots", "Lyrics", "Layers"], "answer": 2 },
    { "q": "In neo-soul, the default colour on ii is…", "choices": ["m9 (or m7)", "Diminished", "Major triad", "Power chord"], "answer": 0 },
    { "q": "E5 means…", "choices": ["E major 5th inversion", "Root and 5th only (power chord)", "E with a 5th in the bass", "E augmented"], "answer": 1 },
    { "q": "How many bars give at least 3 minutes at 120 BPM in 4/4?", "choices": ["60", "72", "90", "120"], "answer": 2 },
    { "q": "The melody arrives on the 'and' of 4, tied into the next bar. This is…", "choices": ["A suspension", "An anticipation", "A pedal point", "A pickup bar"], "answer": 1 },
    { "q": "Best first step when a transcribed chord sounds wrong on playback?", "choices": ["Re-check the bass root (pass 3) before the quality", "Change the key", "Delete the melody", "Guess a 9th chord"], "answer": 0 }
  ] }
}
```
