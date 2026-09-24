---
id: w49-l2-mixolydian-and-flat-seven-by-ear
title: "Transcribe 4: Rock — Mixolydian and bVII by Ear"
week: 49
order: 2
phase: p5
duration_min: 45
goals:
  - Recognise the I–bVII–IV progression and avoid mistaking its key for the IV chord's key
  - Hear the lowered 7th (b7) in rock melodies over a major tonic
  - Write an 8-bar Mixolydian rock section in the DAW
prerequisites: [w49-l1-riffs-and-power-chords]
tags: [transcription, rock, mixolydian, borrowed-chords, ear, daw]
---

# Transcribe 4: Rock — Mixolydian and bVII by Ear

If one chord defines classic and indie rock, it's **bVII**: the major chord a whole step below the tonic. D – C – G – D. A – G – D – A. It sounds open, confident, road-trip-ready — and it trips up transcribers in a specific way.

## The key trap

Look at D – C – G. Those three chords all belong to **G major**. A transcriber who just collects chord names concludes "key of G" — and gets every numeral wrong. Your pass-1 tests prevent this: where do phrases *end*? Where does the bass *rest*? In a Mixolydian rock song the answer is D, and the chords are **I – bVII – IV**. The C major chord is the b7 note of D Mixolydian made into a chord, just like the borrowed bVII from week 43.

Rule of thumb: if the progression sounds like **V – IV – I of some key but keeps coming home to the V**, you're in Mixolydian on that V.

## The b7 in the melody

Mixolydian melodies use degree b7 (C natural in D) freely, even over the tonic chord. In a major-key song that note would be a "blue" surprise; in rock it's just the scale. When your degree map says "7, but it sounds low", write b7 and look for a bVII chord nearby.

```example
{
  "title": "Mystery Track \"Highway Hum\"",
  "bpm": 100, "timeSig": "4/4", "key": "D",
  "tracks": [
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" },
    { "instrument": "bass", "seq": "D2:q. D2:8 D2:q A2:q | C2:q. C2:8 C2:q G2:q | G1:q. G1:8 G1:q D2:q | D2:q. D2:8 D2:q C2:q" },
    { "instrument": "pluck", "seq": "[D3 F#3 A3 D4]:q [D3 F#3 A3 D4]:8 [D3 F#3 A3 D4]:8 r:8 [D3 F#3 A3 D4]:8 [D3 F#3 A3 D4]:q | [C3 E3 G3 C4]:q [C3 E3 G3 C4]:8 [C3 E3 G3 C4]:8 r:8 [C3 E3 G3 C4]:8 [C3 E3 G3 C4]:q | [G2 B2 D3 G3]:q [G2 B2 D3 G3]:8 [G2 B2 D3 G3]:8 r:8 [G2 B2 D3 G3]:8 [G2 B2 D3 G3]:q | [D3 F#3 A3 D4]:q [D3 F#3 A3 D4]:8 [D3 F#3 A3 D4]:8 r:8 [D3 F#3 A3 D4]:8 [D3 F#3 A3 D4]:q" },
    { "instrument": "lead", "seq": "F#4:8 A4:8 A4:8 B4:8 A4:q F#4:q | E4:8 G4:8 G4:8 A4:8 G4:q C5:q | B4:q. A4:8 G4:q D4:q | C5:8 B4:8 A4:8 F#4:8 D4:h" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

Bar 2 is the C chord (bVII), with the melody resting on C. Bar 4 starts on C over the D chord — the b7 in the melody over the tonic — then falls home.

```exercise
{
  "id": "w49l2-listen",
  "type": "listen",
  "title": "Which key? Which numerals?",
  "spec": {
    "example": {
      "title": "Highway Hum",
      "bpm": 100, "timeSig": "4/4", "key": "D",
      "tracks": [ { "instrument": "bass", "seq": "D2:q. D2:8 D2:q A2:q | C2:q. C2:8 C2:q G2:q | G1:q. G1:8 G1:q D2:q | D2:q. D2:8 D2:q C2:q" }, { "instrument": "pluck", "seq": "[D3 F#3 A3 D4]:q [D3 F#3 A3 D4]:8 [D3 F#3 A3 D4]:8 r:8 [D3 F#3 A3 D4]:8 [D3 F#3 A3 D4]:q | [C3 E3 G3 C4]:q [C3 E3 G3 C4]:8 [C3 E3 G3 C4]:8 r:8 [C3 E3 G3 C4]:8 [C3 E3 G3 C4]:q | [G2 B2 D3 G3]:q [G2 B2 D3 G3]:8 [G2 B2 D3 G3]:8 r:8 [G2 B2 D3 G3]:8 [G2 B2 D3 G3]:q | [D3 F#3 A3 D4]:q [D3 F#3 A3 D4]:8 [D3 F#3 A3 D4]:8 r:8 [D3 F#3 A3 D4]:8 [D3 F#3 A3 D4]:q" }, { "instrument": "lead", "seq": "F#4:8 A4:8 A4:8 B4:8 A4:q F#4:q | E4:8 G4:8 G4:8 A4:8 G4:q C5:q | B4:q. A4:8 G4:q D4:q | C5:8 B4:8 A4:8 F#4:8 D4:h" } ],
      "loop": true
    },
    "questions": [
      { "q": "Where is home?", "choices": ["G", "D", "C", "A"], "answer": 1 },
      { "q": "The progression in numerals?", "choices": ["I–bVII–IV–I", "V–IV–I–V", "I–VII–IV–I", "IV–bIII–bVII–IV"], "answer": 0 },
      { "q": "The first note of bar 4 (C over D) is degree…", "choices": ["7", "b7", "b6", "#4"], "answer": 1 },
      { "q": "The mode is…", "choices": ["D Mixolydian", "D major (Ionian)", "D Dorian", "G major"], "answer": 0 }
    ]
  }
}
```

```exercise
{
  "id": "w49l2-prog-d",
  "type": "ear-progression",
  "title": "Rock progressions in D",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "D", "mode": "major", "length": 4, "chords": ["I", "bVII", "IV", "V", "vi", "bVI"], "style": "block" }
}
```

```exercise
{
  "id": "w49l2-prog-a",
  "type": "ear-progression",
  "title": "Rock progressions in A",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "A", "mode": "major", "length": 4, "chords": ["I", "bVII", "IV", "bIII", "V"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "w49l2-mode",
  "type": "ear-scale",
  "title": "Mixolydian among its neighbours",
  "count": 10,
  "passScore": 0.8,
  "spec": { "scales": ["major", "mixolydian", "dorian", "lydian"], "play": "melody" }
}
```

```exercise
{
  "id": "w49l2-b7",
  "type": "ear-note",
  "title": "Spot the b7",
  "count": 12,
  "passScore": 0.75,
  "spec": { "key": "D", "mode": "major", "degrees": [1, 3, 4, 5, 6, 7], "chromatic": true, "reference": "cadence", "octaves": [4], "instrument": "piano" }
}
```

```exercise
{
  "id": "w49l2-analysis",
  "type": "roman-analysis",
  "title": "Analyse in A (not D!)",
  "spec": { "key": "A", "chords": ["A", "G", "D", "A", "A", "G", "D", "E"], "prompt": "symbols" }
}
```

```exercise
{
  "id": "w49l2-daw",
  "type": "daw-task",
  "title": "8 bars of Mixolydian rock",
  "spec": {
    "template": { "bpm": 104, "key": "A", "tracks": [
      { "instrument": "drums", "seq": "" }, { "instrument": "bass", "seq": "" },
      { "instrument": "pluck", "seq": "" }, { "instrument": "lead", "seq": "" } ] },
    "task": "Write 8 bars in A Mixolydian: a rock beat, eighth-note bass roots, strummed or power-chord guitar (pluck) using A, G and D, and a melody that uses G natural (b7) at least twice and ends on A.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["drums", "bass", "pluck", "lead"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "A", "scale": "mixolydian", "allowPassing": false, "track": 3 },
      { "kind": "in-key", "key": "A", "scale": "mixolydian", "allowPassing": false, "track": 1 },
      { "kind": "ends-on", "degree": 1, "track": 3 },
      { "kind": "drum-pattern", "requires": ["kick", "snare"], "snareOnBeats": [2, 4], "track": 0 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "w49l2-play",
  "type": "play-chord",
  "title": "Play I–bVII–IV in three keys",
  "spec": { "chords": ["D", "C", "G", "D", "A", "G", "D", "A", "E", "D", "A", "E"], "inversion": "any", "sequence": true, "bpm": 80 }
}
```
