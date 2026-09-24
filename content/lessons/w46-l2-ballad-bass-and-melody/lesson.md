---
id: w46-l2-ballad-bass-and-melody
title: "Transcribe 1: Ballad — Bass and Melody"
week: 46
order: 2
phase: p5
duration_min: 45
goals:
  - Find the implied bass in a piano arpeggio and write it as a bass part
  - Dictate a ballad verse and chorus melody, including off-beat phrase starts
  - Enter bass and melody for Paper Lanterns in the DAW
prerequisites: [w46-l1-ballad-form-and-chords]
tags: [transcription, ballad, melody, bass, daw]
---

# Transcribe 1: Ballad — Bass and Melody

Last lesson you mapped the harmony of *Paper Lanterns*. Today: passes 3 and 5 in detail — the actual bass part and the melody.

## The implied bass

Many ballads have no bass guitar in the verse. The piano's left hand does the job: the **first and lowest note of each arpeggio** is the bass. In *Paper Lanterns* the separate bass track only doubles that note. When you transcribe a piano ballad, write the implied bass as its own line anyway — it's the clearest summary of the harmony, and when you arrange your own version you'll want it.

Listen for the difference between verse and chorus bass: the verse holds whole notes under a stepwise descent; the chorus re-strikes on beat 4, a small push that adds momentum as the drums come in.

## Ballad melodies breathe

Ballad phrases start in odd places and end on long notes. Two habits to listen for:

- **Rest on the downbeat.** The chorus phrases start on the "and" of beat 1 — an eighth-note rest, then the melody. Singers do this to breathe; transcribers who assume "melody starts on beat 1" get the whole rhythm shifted.
- **Long final notes on chord tones.** Each 2-bar phrase ends on a held note — almost always the 3rd or root of the chord. Use this as your skeleton.

```example
{
  "title": "Paper Lanterns — verse melody with bass, 56 BPM",
  "bpm": 56, "timeSig": "4/4", "key": "Eb",
  "tracks": [ { "instrument": "bass", "seq": "Eb2:w | D2:w | C2:w | Ab1:w" }, { "instrument": "lead", "seq": "G4:q G4:8 F4:8 Eb4:q Bb3:q | D4:q. Eb4:8 F4:h | G4:q G4:8 Ab4:8 G4:q Eb4:q | C4:h. r:q" } ],
  "show": ["staff"],
  "loop": true
}
```

```example
{
  "title": "Paper Lanterns — chorus melody with bass, 56 BPM",
  "bpm": 56, "timeSig": "4/4", "key": "Eb",
  "tracks": [ { "instrument": "bass", "seq": "Ab1:h. Ab1:q | Bb1:h. Bb1:q | G1:h. G1:q | C2:h. C2:q" }, { "instrument": "lead", "seq": "r:8 Eb5:8 Eb5:8 D5:8 C5:q Bb4:q | D5:q. C5:8 Bb4:h | r:8 Bb4:8 Bb4:8 C5:8 D5:q F5:q | Eb5:h. r:q" } ],
  "loop": true
}
```

The chorus melody is deliberately hidden from the staff: dictate it before you look anywhere else.

```exercise
{
  "id": "w46l2-listen",
  "type": "listen",
  "title": "Chorus skeleton",
  "spec": {
    "example": {
      "title": "Chorus melody with bass",
      "bpm": 56, "timeSig": "4/4", "key": "Eb",
      "tracks": [ { "instrument": "bass", "seq": "Ab1:h. Ab1:q | Bb1:h. Bb1:q | G1:h. G1:q | C2:h. C2:q" }, { "instrument": "lead", "seq": "r:8 Eb5:8 Eb5:8 D5:8 C5:q Bb4:q | D5:q. C5:8 Bb4:h | r:8 Bb4:8 Bb4:8 C5:8 D5:q F5:q | Eb5:h. r:q" } ],
      "loop": true
    },
    "questions": [
      { "q": "Where does the first chorus phrase begin?", "choices": ["On beat 1", "On the 'and' of 1 after a short rest", "On beat 3", "In the previous bar"], "answer": 1 },
      { "q": "The long note at the end of bar 2 (over Bb) is…", "choices": ["Bb — the root", "D — the 3rd", "F — the 5th", "Eb — a suspension"], "answer": 0 },
      { "q": "The final long note (over Cm7) is Eb. Which degree of Eb major?", "choices": ["1", "3", "5", "6"], "answer": 0 },
      { "q": "What does the chorus bass do on beat 4?", "choices": ["Rests", "Re-strikes the root", "Walks to the next root", "Plays the 5th"], "answer": 1 }
    ]
  }
}
```

```exercise
{
  "id": "w46l2-melody",
  "type": "ear-melody",
  "title": "Ballad phrases in Eb",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "Eb", "degrees": [1, 2, 3, 4, 5, 6], "length": 6, "rhythm": "free", "answer": "play" }
}
```

```exercise
{
  "id": "w46l2-degrees",
  "type": "ear-note",
  "title": "Held notes: which degree?",
  "count": 10,
  "passScore": 0.8,
  "spec": { "key": "Eb", "mode": "major", "degrees": [1, 2, 3, 4, 5, 6, 7], "reference": "cadence", "octaves": [4, 5], "instrument": "piano" }
}
```

```exercise
{
  "id": "w46l2-verse",
  "type": "play-melody",
  "title": "Play the verse melody",
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "Eb", "seq": "G4:q G4:8 F4:8 Eb4:q Bb3:q | D4:q. Eb4:8 F4:h | G4:q G4:8 Ab4:8 G4:q Eb4:q | C4:h. r:q", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "piano", "seq": "Eb3:8 Bb3:8 Eb4:8 G4:8 Bb4:8 G4:8 Eb4:8 Bb3:8 | D3:8 Bb3:8 D4:8 F4:8 Bb4:8 F4:8 D4:8 Bb3:8 | C3:8 G3:8 C4:8 Eb4:8 G4:8 Eb4:8 C4:8 G3:8 | Ab2:8 Eb3:8 Ab3:8 C4:8 Eb4:8 C4:8 Ab3:8 Eb3:8" } }
}
```

```exercise
{
  "id": "w46l2-daw",
  "type": "daw-task",
  "title": "Bass and chorus melody",
  "spec": {
    "template": { "bpm": 68, "key": "Eb", "tracks": [
      { "instrument": "piano", "seq": "Eb3:8 Bb3:8 Eb4:8 G4:8 Bb4:8 G4:8 Eb4:8 Bb3:8 | D3:8 Bb3:8 D4:8 F4:8 Bb4:8 F4:8 D4:8 Bb3:8 | C3:8 G3:8 C4:8 Eb4:8 G4:8 Eb4:8 C4:8 G3:8 | Ab2:8 Eb3:8 Ab3:8 C4:8 Eb4:8 C4:8 Ab3:8 Eb3:8 | Ab2:8 Eb3:8 G3:8 C4:8 Eb4:8 C4:8 G3:8 Eb3:8 | Bb2:8 F3:8 Bb3:8 D4:8 F4:8 D4:8 Bb3:8 F3:8 | G2:8 D3:8 F3:8 Bb3:8 D4:8 Bb3:8 F3:8 D3:8 | C3:8 G3:8 Bb3:8 Eb4:8 G4:8 Eb4:8 Bb3:8 G3:8" },
      { "instrument": "bass", "seq": "" }, { "instrument": "lead", "seq": "" } ] },
    "task": "The template holds one verse and one chorus of piano (8 bars). Transcribe the bass (both sections) onto the bass track and the verse + chorus melody onto the lead track. A/B with the examples when the checks pass.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "V", "vi", "IV", "IV", "V", "iii", "vi"], "barsPerChord": 1, "minRatio": 1, "track": 1 },
      { "kind": "range", "low": "Ab1", "high": "Eb3", "track": 1 },
      { "kind": "in-key", "key": "Eb", "scale": "major", "allowPassing": false, "track": 2 },
      { "kind": "ends-on", "degree": 1, "track": 2 },
      { "kind": "note-count", "min": 26, "max": 32, "track": 2 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "w46l2-chorus",
  "type": "play-melody",
  "title": "Play the chorus melody (answer)",
  "instructions": "Only after the DAW task — check your transcription by playing the correct line.",
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "Eb", "seq": "r:8 Eb5:8 Eb5:8 D5:8 C5:q Bb4:q | D5:q. C5:8 Bb4:h | r:8 Bb4:8 Bb4:8 C5:8 D5:q F5:q | Eb5:h. r:q", "showStaff": true, "showKeyboard": false, "countIn": 1, "backing": { "instrument": "piano", "seq": "Ab2:8 Eb3:8 G3:8 C4:8 Eb4:8 C4:8 G3:8 Eb3:8 | Bb2:8 F3:8 Bb3:8 D4:8 F4:8 D4:8 Bb3:8 F3:8 | G2:8 D3:8 F3:8 Bb3:8 D4:8 Bb3:8 F3:8 D3:8 | C3:8 G3:8 Bb3:8 Eb4:8 G4:8 Eb4:8 Bb3:8 G3:8" } }
}
```
