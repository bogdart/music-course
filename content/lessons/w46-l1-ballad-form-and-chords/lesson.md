---
id: w46-l1-ballad-form-and-chords
title: "Transcribe 1: Ballad — Key, Form and Chords"
week: 46
order: 1
phase: p5
duration_min: 45
goals:
  - Run passes 1–4 on a piano ballad in Eb major at a slow tempo
  - Hear a slash-chord bass line and seventh-chord colours in a ballad chorus
  - Write the harmony section of a ballad form map with full chord symbols
prerequisites: [w45-l3-recreate-a-mix-daw]
tags: [transcription, ballad, harmony, form]
---

# Transcribe 1: Ballad — Key, Form and Chords

For the next four weeks you'll decompose one full song per week, each in a different style, and finish each week with a real song analysed by reference. First up: the **pop ballad**.

## What to expect from a ballad

Ballads are the friendliest style to transcribe, and a few conventions help you predict what's coming:

- **Tempo** is slow, typically 60–80 BPM. Watch for [[half-time]] feel tricks — a ballad at 136 BPM with snare on 3 is really a 68 BPM feel.
- **Piano or guitar arpeggios** carry the harmony. The lowest note of each arpeggio is your bass even if there's no bass guitar.
- **Arrangement grows**: verse is sparse (often just piano and voice), drums and strings enter at the chorus.
- **Harmony** leans on I–V–vi–IV relatives, with a stepwise bass (slash chords!) in the verse and maj7/m7 colour in the chorus.

## Mystery Ballad: "Paper Lanterns"

An original in the ballad style. Each section is a 4-bar pattern; the form is Verse – Verse – Chorus – Chorus.

```example
{
  "title": "Paper Lanterns — verse",
  "bpm": 68, "timeSig": "4/4", "key": "Eb",
  "tracks": [
    { "instrument": "bass", "seq": "Eb2:w | D2:w | C2:w | Ab1:w" },
    { "instrument": "piano", "seq": "Eb3:8 Bb3:8 Eb4:8 G4:8 Bb4:8 G4:8 Eb4:8 Bb3:8 | D3:8 Bb3:8 D4:8 F4:8 Bb4:8 F4:8 D4:8 Bb3:8 | C3:8 G3:8 C4:8 Eb4:8 G4:8 Eb4:8 C4:8 G3:8 | Ab2:8 Eb3:8 Ab3:8 C4:8 Eb4:8 C4:8 Ab3:8 Eb3:8" },
    { "instrument": "lead", "seq": "G4:q G4:8 F4:8 Eb4:q Bb3:q | D4:q. Eb4:8 F4:h | G4:q G4:8 Ab4:8 G4:q Eb4:q | C4:h. r:q" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

```example
{
  "title": "Paper Lanterns — chorus",
  "bpm": 68, "timeSig": "4/4", "key": "Eb",
  "tracks": [
    { "instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 snare:16 snare:16 snare:16 snare:16" },
    { "instrument": "bass", "seq": "Ab1:h. Ab1:q | Bb1:h. Bb1:q | G1:h. G1:q | C2:h. C2:q" },
    { "instrument": "piano", "seq": "Ab2:8 Eb3:8 G3:8 C4:8 Eb4:8 C4:8 G3:8 Eb3:8 | Bb2:8 F3:8 Bb3:8 D4:8 F4:8 D4:8 Bb3:8 F3:8 | G2:8 D3:8 F3:8 Bb3:8 D4:8 Bb3:8 F3:8 D3:8 | C3:8 G3:8 Bb3:8 Eb4:8 G4:8 Eb4:8 Bb3:8 G3:8" },
    { "instrument": "strings", "seq": "[Eb4 G4 C5]:w | [D4 F4 Bb4]:w | [D4 F4 Bb4]:w | [Eb4 G4 Bb4]:w" },
    { "instrument": "lead", "seq": "r:8 Eb5:8 Eb5:8 D5:8 C5:q Bb4:q | D5:q. C5:8 Bb4:h | r:8 Bb4:8 Bb4:8 C5:8 D5:q F5:q | Eb5:h. r:q" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

## The passes, briefly

Pass 1: hum home — you'll land on Eb. Pass 2: the verse is quiet and short-phrased, the chorus arrives with drums and strings. Pass 3: in the verse, follow the *lowest* note of the piano — Eb, D, C, then a jump to Ab. That D should make you suspicious: the chord above it sounds like Bb, so it's **Bb/D**. Pass 4: in the chorus, listen for 7ths. The IV chord has a dreamy major 7th (Abmaj7), and the minor chords are soft m7s.

```exercise
{
  "id": "w46l1-verse",
  "type": "listen",
  "title": "Verse: key, tempo, bass",
  "spec": {
    "example": {
      "title": "Verse",
      "bpm": 68, "timeSig": "4/4", "key": "Eb",
      "tracks": [ { "instrument": "bass", "seq": "Eb2:w | D2:w | C2:w | Ab1:w" }, { "instrument": "piano", "seq": "Eb3:8 Bb3:8 Eb4:8 G4:8 Bb4:8 G4:8 Eb4:8 Bb3:8 | D3:8 Bb3:8 D4:8 F4:8 Bb4:8 F4:8 D4:8 Bb3:8 | C3:8 G3:8 C4:8 Eb4:8 G4:8 Eb4:8 C4:8 G3:8 | Ab2:8 Eb3:8 Ab3:8 C4:8 Eb4:8 C4:8 Ab3:8 Eb3:8" } ],
      "loop": true
    },
    "questions": [
      { "q": "Key?", "choices": ["Bb major", "Eb major", "C minor", "Ab major"], "answer": 1 },
      { "q": "Tempo?", "choices": ["About 68", "About 90", "About 112", "About 136"], "answer": 0 },
      { "q": "Bar 2 has D in the bass under a Bb major chord. Symbol?", "choices": ["Dm", "Bb/D", "D7", "Gm/D"], "answer": 1 },
      { "q": "Verse numerals?", "choices": ["I–V6–vi–IV (I–V/3–vi–IV)", "I–iii–vi–IV", "I–V–IV–I", "vi–V–IV–I"], "answer": 0 }
    ]
  }
}
```

```exercise
{
  "id": "w46l1-chorus-analysis",
  "type": "roman-analysis",
  "title": "Chorus harmony",
  "spec": { "key": "Eb", "chords": ["Abmaj7", "Bb", "Gm7", "Cm7"], "prompt": "play" }
}
```

```exercise
{
  "id": "w46l1-bass",
  "type": "ear-bass",
  "title": "Bass roots in Eb",
  "count": 8,
  "passScore": 0.8,
  "spec": { "key": "Eb", "chords": ["I", "ii", "iii", "IV", "V", "vi"], "answer": "play" }
}
```

```exercise
{
  "id": "w46l1-prog",
  "type": "ear-progression",
  "title": "Ballad progressions in Eb",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "Eb", "mode": "major", "length": 4, "chords": ["I", "IVmaj7", "V", "iii7", "vi7", "ii7"], "style": "arpeggio" }
}
```

```exercise
{
  "id": "w46l1-play",
  "type": "play-chord",
  "title": "Play verse and chorus",
  "instructions": "Play Bb/D with D as the lowest note.",
  "spec": { "chords": ["Eb", "Bb/D", "Cm", "Ab", "Abmaj7", "Bb", "Gm7", "Cm7"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

```exercise
{
  "id": "w46l1-map",
  "type": "reflect",
  "title": "Ballad form map, part 1",
  "spec": { "prompt": "Start the form map for Paper Lanterns: key, tempo, sections with bars, and the full chord symbols and numerals for verse and chorus. Add one line about how the arrangement changes at the chorus.", "minWords": 40 }
}
```
