---
id: w51-l3-final-song-review
title: "Final Project 3: Review, Balance and Sign-off"
week: 51
order: 3
phase: p5
duration_min: 50
goals:
  - Transcribe your own song by ear as a clarity test and fix whatever you can't hear
  - Balance levels and pan by role, and separate parts that clash in register
  - Reach checkpoint 6 and sign off a finished 3+ minute song
prerequisites: [w51-l2-final-song-arranging]
tags: [songwriting, final-project, mixing, review, transcription, daw]
---

# Final Project 3: Review, Balance and Sign-off

Last step. Your song exists; now make sure a listener can *hear* it. You have exactly the right tool for that: the seven-pass method.

## Transcribe yourself

Play your song without looking at the screen, and do three quick passes, as if it were someone else's mystery song:

1. **Bass roots** — can you follow them all the way through?
2. **Melody** — can you hum the chorus hook after one listen?
3. **Layers** — can you name every instrument in the last chorus?

Anything you *can't* hear is a mix or arrangement problem, not a listener problem. The usual culprit: two parts in the same register fighting each other.

```example
{
  "title": "Clash: chords in the same register as the melody",
  "bpm": 100, "timeSig": "4/4", "key": "G",
  "tracks": [ { "instrument": "bass", "seq": "C2:q. C2:8 C2:h | D2:q. D2:8 D2:h | E2:q. E2:8 E2:h | G1:q. G1:8 G1:h" }, { "instrument": "epiano", "seq": "[C5 E5 G5]:q [C5 E5 G5]:q [C5 E5 G5]:q [C5 E5 G5]:q | [D5 F#5 A5]:q [D5 F#5 A5]:q [D5 F#5 A5]:q [D5 F#5 A5]:q | [E5 G5 B5]:q [E5 G5 B5]:q [E5 G5 B5]:q [E5 G5 B5]:q | [D5 G5 B5]:q [D5 G5 B5]:q [D5 G5 B5]:q [D5 G5 B5]:q" }, { "instrument": "lead", "seq": "E5:q. D5:8 C5:q G4:q | F#5:q. E5:8 D5:h | E5:q. D5:8 B4:q G4:q | G4:h. r:q" } ],
  "show": ["pianoroll"],
  "loop": true
}
```

```example
{
  "title": "Clear: chords moved below the melody, spread out",
  "bpm": 100, "timeSig": "4/4", "key": "G",
  "tracks": [ { "instrument": "bass", "seq": "C2:q. C2:8 C2:h | D2:q. D2:8 D2:h | E2:q. E2:8 E2:h | G1:q. G1:8 G1:h" }, { "instrument": "epiano", "seq": "[C3 G3 E4]:q [C3 G3 E4]:q [C3 G3 E4]:q [C3 G3 E4]:q | [D3 A3 F#4]:q [D3 A3 F#4]:q [D3 A3 F#4]:q [D3 A3 F#4]:q | [E3 B3 G4]:q [E3 B3 G4]:q [E3 B3 G4]:q [E3 B3 G4]:q | [G3 D4 B4]:q [G3 D4 B4]:q [G3 D4 B4]:q [G3 D4 B4]:q" }, { "instrument": "lead", "seq": "E5:q. D5:8 C5:q G4:q | F#5:q. E5:8 D5:h | E5:q. D5:8 B4:q G4:q | G4:h. r:q" } ],
  "show": ["pianoroll"],
  "loop": true
}
```

Same notes, same instruments. In the second version the melody has its own space, and you can transcribe it on the first listen.

## Balance by role

Use each track's volume and pan:

- **Centre, loudest**: lead melody, kick, snare, bass.
- **Slightly lower**: chords and pads — they support, they don't lead.
- **Pan out** (left/right) the doubles and decorations: pluck, strings, counter-melody, hats a touch off-centre.
- **Check quietly.** At low volume, only the important parts survive — make sure it's the melody and the groove.

## Self-critique checklist

Before you sign off, answer honestly: Does the intro get to the point within 8 bars? Is the chorus hook the most memorable thing in the song? Is every section different from the one before it? Does the ending feel like an ending? Would you play it for a friend?

```exercise
{
  "id": "w51l3-listen",
  "type": "listen",
  "title": "Diagnose the clash",
  "spec": {
    "example": {
      "title": "Clash version",
      "bpm": 100, "timeSig": "4/4", "key": "G",
      "tracks": [ { "instrument": "bass", "seq": "C2:q. C2:8 C2:h | D2:q. D2:8 D2:h | E2:q. E2:8 E2:h | G1:q. G1:8 G1:h" }, { "instrument": "epiano", "seq": "[C5 E5 G5]:q [C5 E5 G5]:q [C5 E5 G5]:q [C5 E5 G5]:q | [D5 F#5 A5]:q [D5 F#5 A5]:q [D5 F#5 A5]:q [D5 F#5 A5]:q | [E5 G5 B5]:q [E5 G5 B5]:q [E5 G5 B5]:q [E5 G5 B5]:q | [D5 G5 B5]:q [D5 G5 B5]:q [D5 G5 B5]:q [D5 G5 B5]:q" }, { "instrument": "lead", "seq": "E5:q. D5:8 C5:q G4:q | F#5:q. E5:8 D5:h | E5:q. D5:8 B4:q G4:q | G4:h. r:q" } ],
      "loop": true
    },
    "questions": [
      { "q": "Why is the melody hard to follow here?", "choices": ["The chords occupy the same register as the melody", "The tempo is too fast", "The bass is too low", "The key is wrong"], "answer": 0 },
      { "q": "Fastest fix?", "choices": ["Move the chords down an octave and spread them", "Change the key", "Delete the bass", "Add reverb"], "answer": 0 }
    ]
  }
}
```

```exercise
{
  "id": "w51l3-bass",
  "type": "ear-bass",
  "title": "Bass-root check in Eb",
  "count": 8,
  "passScore": 0.8,
  "spec": { "key": "Eb", "chords": ["I", "ii", "IV", "V", "vi", "bVII"], "answer": "play" }
}
```

```exercise
{
  "id": "w51l3-voicing",
  "type": "play-chord",
  "title": "Spread voicings below the melody",
  "instructions": "Play each chord with the root low in the left hand and the 3rd on top below C5.",
  "spec": { "chords": ["C", "D", "Em", "G"], "inversion": "any", "sequence": true, "bpm": 70 }
}
```

```exercise
{
  "id": "w51l3-self",
  "type": "reflect",
  "title": "Your self-transcription",
  "spec": { "prompt": "Write the form map of your own song from listening only (no screen). Then list every place where you couldn't hear the bass, melody or a layer clearly, and what you changed to fix it.", "minWords": 50 }
}
```

```exercise
{
  "id": "w51l3-signoff",
  "type": "daw-task",
  "title": "Checkpoint 6: the finished song",
  "spec": {
    "template": { "bpm": 100, "key": "C", "tracks": [
      { "instrument": "piano", "seq": "" }, { "instrument": "bass", "seq": "" }, { "instrument": "lead", "seq": "" }, { "instrument": "drums", "seq": "" },
      { "instrument": "strings", "seq": "" }, { "instrument": "pluck", "seq": "" } ] },
    "task": "Finish your final project: fix what the self-transcription revealed, balance levels and pan by role, check at low volume, and make sure the song ends with a clear final cadence on the tonic. Then export it and listen once, start to finish, without touching anything.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["bass", "lead", "drums"] },
      { "kind": "bars", "min": 76 },
      { "kind": "ends-on", "degree": 1, "track": 1 },
      { "kind": "ends-on", "degree": 1, "track": 2 },
      { "kind": "custom", "id": "w51-cp6-checklist", "note": "Self-check: every item on the self-critique checklist answered 'yes'." }
    ],
    "minBars": 76
  }
}
```

```exercise
{
  "id": "w51l3-liner",
  "type": "reflect",
  "title": "Liner notes",
  "spec": { "prompt": "Write the liner notes for your song: title, key, tempo, form, the reference track and what you borrowed from it, and one sentence about the moment in the song you're proudest of.", "minWords": 50 }
}
```
