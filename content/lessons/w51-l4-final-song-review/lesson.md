---
id: w51-l4-final-song-review
title: "Final Project 4: Review, Balance and Sign-off"
week: 51
order: 4
phase: p5
duration_min: 50
goals:
  - Transcribe your own song by ear as a clarity test
  - Separate parts that clash in register, and balance levels and pan by role
  - Reach checkpoint 6 and sign off a finished 3-minute song
prerequisites: [w51-l3-final-song-layers]
tags: [songwriting, final-project, mixing, review, transcription, daw]
---

# Final Project 4: Review, Balance and Sign-off

Your song exists; now make sure a listener can *hear* it. You have exactly the right tool: the listening passes.

## Transcribe yourself

Play your song without looking at the screen and do three passes, as if it were someone else's mystery song:

1. **Bass** — can you follow it all the way through?
2. **Melody** — can you hum the chorus hook after one listen?
3. **Layers** — can you name every instrument in the last chorus?

Anything you *can't* hear is an arrangement or mix problem, not a listener problem. The usual culprit: two parts in the
same register fighting. Try it on a hidden example first.

```exercise
{
  "id": "w51l4-clash",
  "type": "listen",
  "title": "Diagnose the problem",
  "spec": {
    "example": {
      "title": "Problem version",
      "bpm": 100,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "bass", "seq": "C2:q. C2:8 C2:h | D2:q. D2:8 D2:h | E2:q. E2:8 E2:h | G1:q. G1:8 G1:h"},
        {"instrument": "epiano", "seq": "[C5 E5 G5]:q [C5 E5 G5]:q [C5 E5 G5]:q [C5 E5 G5]:q | [D5 F#5 A5]:q [D5 F#5 A5]:q [D5 F#5 A5]:q [D5 F#5 A5]:q | [E5 G5 B5]:q [E5 G5 B5]:q [E5 G5 B5]:q [E5 G5 B5]:q | [D5 G5 B5]:q [D5 G5 B5]:q [D5 G5 B5]:q [D5 G5 B5]:q"},
        {"instrument": "lead", "seq": "E5:q. D5:8 C5:q G4:q | F#5:q. E5:8 D5:h | E5:q. D5:8 B4:q G4:q | G4:h. r:q"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Why is the melody hard to follow here?", "choices": ["The chords sit in the same register as the melody", "The tempo is too fast", "The bass is too low", "The key is wrong"], "answer": 0, "explain": "The electric-piano chords sit right on top of the melody (octave 5)."},
      {"q": "Fastest fix?", "choices": ["Move the chords down and spread them out", "Change the key", "Delete the bass", "Add reverb"], "answer": 0}
    ]
  }
}
```

```example
{
  "title": "Fixed: chords moved below the melody, spread out",
  "bpm": 100,
  "timeSig": "4/4",
  "key": "G",
  "tracks": [
    {"instrument": "bass", "seq": "C2:q. C2:8 C2:h | D2:q. D2:8 D2:h | E2:q. E2:8 E2:h | G1:q. G1:8 G1:h"},
    {"instrument": "epiano", "seq": "[C3 G3 E4]:q [C3 G3 E4]:q [C3 G3 E4]:q [C3 G3 E4]:q | [D3 A3 F#4]:q [D3 A3 F#4]:q [D3 A3 F#4]:q [D3 A3 F#4]:q | [E3 B3 G4]:q [E3 B3 G4]:q [E3 B3 G4]:q [E3 B3 G4]:q | [G3 D4 B4]:q [G3 D4 B4]:q [G3 D4 B4]:q [G3 D4 B4]:q"},
    {"instrument": "lead", "seq": "E5:q. D5:8 C5:q G4:q | F#5:q. E5:8 D5:h | E5:q. D5:8 B4:q G4:q | G4:h. r:q"}
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

Same notes, same instruments — now the melody has its own space.

## Balance by role

- **Centre, loudest**: lead melody, kick, snare, bass.
- **A little lower**: chords and pads — they support.
- **Panned out** left/right: pluck, strings, counter-melody, hats slightly off-centre.
- **Check quietly.** At low volume only the important parts survive: make sure it's the melody and the groove.

## Self-critique checklist

Does the intro get to the point within 8 bars? Is the chorus hook the most memorable thing in the song? Is every section
different from the one before? Does the ending sound like an ending? Would you play it for a friend?

```exercise
{
  "id": "w51l4-voicing",
  "type": "play-chord",
  "title": "Spread voicings below the melody",
  "instructions": "Root low in the left hand, the rest of the chord below C5.",
  "spec": {"chords": ["C", "D", "Em", "G"], "inversion": "any", "sequence": true, "bpm": 70}
}
```

```exercise
{
  "id": "w51l4-self",
  "type": "reflect",
  "title": "Your self-transcription",
  "spec": {
    "prompt": "Write the form map of your own song from listening only (no screen). List every place where you couldn't hear the bass, the melody or a layer clearly, and what you changed to fix it.",
    "minWords": 50
  }
}
```

```exercise
{
  "id": "w51l4-signoff",
  "type": "daw-task",
  "title": "Checkpoint 6: the finished song",
  "spec": {
    "template": {
      "bpm": 100,
      "key": "C",
      "tracks": [
        {"instrument": "piano", "seq": ""},
        {"instrument": "bass", "seq": ""},
        {"instrument": "lead", "seq": ""},
        {"instrument": "drums", "seq": ""},
        {"instrument": "pad", "seq": ""},
        {"instrument": "pluck", "seq": ""}
      ]
    },
    "task": "Finish your final project: fix what the self-transcription revealed, balance levels and pan by role, check at low volume, and end with a clear cadence on home. Then listen once, start to finish, without touching anything.",
    "checks": [
      {"kind": "has-tracks", "instruments": ["bass", "lead", "drums"]},
      {"kind": "duration-seconds", "min": 180},
      {"kind": "ends-on", "degree": 1, "key": "project", "track": 1},
      {"kind": "ends-on", "degree": 1, "key": "project", "track": 2},
      {
        "kind": "custom",
        "id": "w51-cp6-checklist",
        "note": "Self-check: every item on the self-critique checklist answered 'yes'."
      }
    ],
    "projectRef": "final-song"
  }
}
```

```exercise
{
  "id": "w51l4-liner",
  "type": "reflect",
  "title": "Liner notes",
  "spec": {
    "prompt": "Write the liner notes for your song: title, key, tempo, form, the reference track and what you borrowed from it, and one sentence about the moment you're proudest of.",
    "minWords": 50
  }
}
```

```ladder
{"skill": "roots", "unlocks": 15, "intro": "Bass hearing at your own rung."}
```
