---
id: w46-l2-ballad-bass-and-melody
title: "Transcribe 1: Ballad — Bass and Melody"
week: 46
order: 2
phase: p5
duration_min: 45
goals:
  - Write the implied bass of a piano ballad as its own line
  - Dictate the verse and chorus melodies, including phrases that start after the beat
  - Enter bass and melody in the DAW and check them against the original
prerequisites: [w46-l1-ballad-form-and-chords]
tags: [transcription, ballad, melody, bass, daw]
---

# Transcribe 1: Ballad — Bass and Melody

Last lesson you mapped the harmony of *Paper Lanterns*. Today: the bass part and the melody in detail.

## The implied bass

Many ballads have no bass guitar in the verse. The piano's left hand does the job: the **first and lowest note of each
arpeggio** is the bass. In *Paper Lanterns* the bass track only doubles it. Write the implied bass as its own line anyway —
it is the clearest summary of the harmony, and you'll want it when you arrange your own version. Listen for whether the bass
rhythm changes between the sections: it is one of the cheapest ways an arranger adds momentum.

## Ballad melodies breathe

Two habits to listen for:

- **A rest on the downbeat.** Singers breathe, so phrases often start just *after* beat 1. Assume "the tune starts on
  beat 1" and your whole rhythm shifts by an eighth.
- **Long final notes on chord tones.** Each 2-bar phrase ends on a held note, almost always the root or 3rd of its chord.
  Use those long notes as your skeleton.

```exercise
{
  "id": "w46l2-listen",
  "type": "listen",
  "title": "Chorus: breath and skeleton",
  "spec": {
    "example": {
      "title": "Chorus — melody and bass, slowed",
      "bpm": 56,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "bass", "seq": "Ab1:h. Ab1:q | Bb1:h. Bb1:q | G1:h. G1:q | Eb2:h. Eb2:q"},
        {"instrument": "lead", "seq": "r:8 Eb5:8 Eb5:8 D5:8 C5:q Bb4:q | D5:q. C5:8 Bb4:h | r:8 Bb4:8 Bb4:8 C5:8 D5:q F5:q | Eb5:h. r:q"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Where does the first chorus phrase begin?", "choices": ["On beat 1", "Just after beat 1, following a short rest", "On beat 3", "In the previous bar"], "answer": 1, "explain": "On the 'and' of 1, after an eighth-note rest."},
      {"q": "The long note at the end of bar 2 — which job does it do over the chord?", "choices": ["Root", "3rd", "5th", "Tension"], "answer": 0, "explain": "Root: B♭ over the B♭ chord."},
      {"q": "Which degree is the final long note of the chorus?", "choices": ["1", "3", "5", "6"], "answer": 0, "explain": "1: E♭, home — the root of the E♭maj7 chord that closes the chorus."},
      {"q": "What does the chorus bass do on beat 4?", "choices": ["Rests", "Strikes the same note again", "Walks to the next note", "Plays the 5th"], "answer": 1, "explain": "It strikes the same note again — a small push that adds momentum as the drums come in; the verse bass holds one long note per bar."}
    ]
  }
}
```

```exercise
{
  "id": "w46l2-verse",
  "type": "ear-melody",
  "title": "Verse melody as degrees",
  "instructions": "Fourteen notes over the verse bass. Answer as degrees of E♭ major.",
  "srs": false,
  "spec": {
    "key": "Eb",
    "degrees": [1, 2, 3, 4, 5, 6, 7],
    "answer": "degrees",
    "example": {
      "title": "Verse melody with bass",
      "bpm": 56,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "bass", "seq": "Eb2:w | D2:w | C2:w | Ab1:w"},
        {"instrument": "lead", "seq": "G4:q G4:8 F4:8 Eb4:q Bb3:q | D4:q. Eb4:8 F4:h | G4:q G4:8 Ab4:8 G4:q Eb4:q | C4:h. r:q"}
      ]
    },
    "track": 1
  }
}
```

```exercise
{
  "id": "w46l2-chorus",
  "type": "ear-melody",
  "title": "Chorus melody played back",
  "instructions": "Fourteen notes; the rests at the start of bars 1 and 3 are part of the rhythm but not played.",
  "srs": false,
  "spec": {
    "key": "Eb",
    "degrees": [1, 2, 3, 4, 5, 6, 7],
    "answer": "play",
    "example": {
      "title": "Chorus melody with bass",
      "bpm": 56,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "bass", "seq": "Ab1:h. Ab1:q | Bb1:h. Bb1:q | G1:h. G1:q | Eb2:h. Eb2:q"},
        {"instrument": "lead", "seq": "r:8 Eb5:8 Eb5:8 D5:8 C5:q Bb4:q | D5:q. C5:8 Bb4:h | r:8 Bb4:8 Bb4:8 C5:8 D5:q F5:q | Eb5:h. r:q"}
      ]
    },
    "track": 1
  }
}
```

```exercise
{
  "id": "w46l2-daw",
  "type": "daw-task",
  "title": "Bass and melody",
  "spec": {
    "template": {
      "bpm": 68,
      "key": "Eb",
      "tracks": [
        {"instrument": "piano", "seq": "Eb3:8 Bb3:8 Eb4:8 G4:8 Bb4:8 G4:8 Eb4:8 Bb3:8 | D3:8 Bb3:8 D4:8 F4:8 Bb4:8 F4:8 D4:8 Bb3:8 | C3:8 G3:8 C4:8 Eb4:8 G4:8 Eb4:8 C4:8 G3:8 | Ab2:8 Eb3:8 Ab3:8 C4:8 Eb4:8 C4:8 Ab3:8 Eb3:8 | Ab2:8 Eb3:8 G3:8 C4:8 Eb4:8 C4:8 G3:8 Eb3:8 | Bb2:8 F3:8 Bb3:8 D4:8 F4:8 D4:8 Bb3:8 F3:8 | G2:8 D3:8 F3:8 Bb3:8 D4:8 Bb3:8 F3:8 D3:8 | Eb3:8 Bb3:8 D4:8 G4:8 Bb4:8 G4:8 D4:8 Bb3:8"},
        {"instrument": "bass", "seq": ""},
        {"instrument": "lead", "seq": ""}
      ]
    },
    "task": "The template holds one verse and one chorus of piano (8 bars). Enter the bass of both sections on the bass track and the verse and chorus melody on the lead track, with their rhythm. The checks compare both with the original; then reveal and A/B.",
    "checks": [
      {"kind": "bars", "min": 8, "max": 8},
      {
        "kind": "matches-reference",
        "reference": {
          "bpm": 68,
          "tracks": [
            {"instrument": "bass", "seq": "Eb2:w | D2:w | C2:w | Ab1:w | Ab1:h. Ab1:q | Bb1:h. Bb1:q | G1:h. G1:q | Eb2:h. Eb2:q"}
          ]
        },
        "track": 1,
        "refTrack": 0,
        "minSimilarity": 0.75,
        "octave": "any"
      },
      {
        "kind": "matches-reference",
        "reference": {
          "bpm": 68,
          "tracks": [
            {"instrument": "lead", "seq": "G4:q G4:8 F4:8 Eb4:q Bb3:q | D4:q. Eb4:8 F4:h | G4:q G4:8 Ab4:8 G4:q Eb4:q | C4:h. r:q | r:8 Eb5:8 Eb5:8 D5:8 C5:q Bb4:q | D5:q. C5:8 Bb4:h | r:8 Bb4:8 Bb4:8 C5:8 D5:q F5:q | Eb5:h. r:q"}
          ]
        },
        "track": 2,
        "refTrack": 0,
        "minSimilarity": 0.7,
        "octave": "any"
      }
    ],
    "minBars": 8,
    "maxBars": 8
  }
}
```

```ladder
{"skill": "melody", "unlocks": 19, "intro": "Melody at your own rung."}
```

```exercise
{
  "id": "w46l2-play",
  "type": "play-melody",
  "title": "Play the chorus melody (answer)",
  "instructions": "Only after the DAW task: play the correct line over the piano.",
  "spec": {
    "bpm": 60,
    "timeSig": "4/4",
    "key": "Eb",
    "seq": "r:8 Eb5:8 Eb5:8 D5:8 C5:q Bb4:q | D5:q. C5:8 Bb4:h | r:8 Bb4:8 Bb4:8 C5:8 D5:q F5:q | Eb5:h. r:q",
    "showStaff": true,
    "showKeyboard": false,
    "countIn": 1,
    "backing": {"instrument": "piano", "seq": "Ab2:8 Eb3:8 G3:8 C4:8 Eb4:8 C4:8 G3:8 Eb3:8 | Bb2:8 F3:8 Bb3:8 D4:8 F4:8 D4:8 Bb3:8 F3:8 | G2:8 D3:8 F3:8 Bb3:8 D4:8 Bb3:8 F3:8 D3:8 | Eb3:8 Bb3:8 D4:8 G4:8 Bb4:8 G4:8 D4:8 Bb3:8"}
  }
}
```
