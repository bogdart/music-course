---
id: w39-l1-stress-range-prosody
title: Stress, Range and Prosody
week: 39
order: 1
phase: p4
duration_min: 40
goals:
  - Place stressed syllables on strong beats, longer notes or higher pitches
  - Keep a vocal melody inside a comfortable singing range with breath points
  - Hear the difference between natural and awkward word-setting
prerequisites: [w38-l3-develop-a-motif-daw, w15-l2-contour-and-phrasing]
tags: [songwriting, prosody, melody, voice]
---

# Stress, Range and Prosody

You don't need to sing to write for singers — but you do need to respect how words and voices work. [[prosody]] is the fit between the natural rhythm of words and the music they're set to. Good prosody is invisible: the line just *sounds right*. Bad prosody makes listeners hear "walk-**ING**" instead of "**WALK**-ing".

## Stress: say it first

Speak the line out loud and exaggerate. Mark the stressed syllables in capitals:

> **WALK**-ing **HOME** be-**NEATH** the **CI**-ty **LIGHTS**

Now give those syllables at least one of three musical "weights": a **strong beat** (1 or 3), a **longer note**, or a **higher pitch**. Unstressed syllables ("-ing", "be-", "the", "-ty") go on weak beats, short and lower.

```example
{
  "title": "Natural setting — stresses on strong beats and higher notes (9 syllables)",
  "bpm": 84,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "lead",
      "seq": "E4:q D4:q G4:q. E4:8 | A4:q G4:8 C5:q. A4:q | G4:w |"
    },
    {
      "instrument": "pad",
      "seq": "[C3 G3]:w | [F3 C4]:w | [C3 G3]:w |"
    }
  ],
  "show": [
    "staff"
  ]
}
```

Syllable map: WALK (E, beat 1) · ing (D) · HOME (G, beat 3, long) · be (E, short) · NEATH (A, beat 1) · the (G, short) · CI (C5, highest, pushed early) · ty (A) · LIGHTS (G, whole bar).

```example
{
  "title": "Awkward setting — same pitches, stresses in the wrong places",
  "bpm": 84,
  "timeSig": "4/4",
  "key": "C",
  "tracks": [
    {
      "instrument": "lead",
      "seq": "E4:8 G4:q. D4:q A4:q | G4:8 C5:q. A4:8 D4:8 G4:q | r:w |"
    },
    {
      "instrument": "pad",
      "seq": "[C3 G3]:w | [F3 C4]:w | [C3 G3]:w |"
    }
  ],
  "show": [
    "staff"
  ]
}
```

Sing or speak along: "walk-**IIING** home **BE**-neath **THE**…" It's almost comic.

## Range and breath

Untrained voices are comfortable across roughly **an octave to a 10th**. For a general-purpose melody, stay about C4–E5 (or an octave lower for low voices), keep leaps rare and mostly under a 6th, and put the highest note on an important word — often in the chorus. Give singers a **breath** every one or two bars: a rest or a long note they can release.

## Drills

```exercise
{
  "id": "e1-tap-speech",
  "type": "rhythm-tap",
  "title": "Tap the line's natural rhythm",
  "instructions": "Say 'WALK-ing HOME be-NEATH the CI-ty LIGHTS' as you tap.",
  "count": 6,
  "passScore": 0.75,
  "spec": {
    "bpm": 84,
    "timeSig": "4/4",
    "seq": "x:q x:q x:q. x:8 | x:q x:8 x:q. x:q | x:w |",
    "showNotation": true,
    "countIn": 1,
    "loops": 2
  }
}
```

```exercise
{
  "id": "e2-play-good",
  "type": "play-melody",
  "title": "Play the natural setting",
  "count": 6,
  "passScore": 0.8,
  "spec": {
    "bpm": 80,
    "timeSig": "4/4",
    "key": "C",
    "seq": "E4:q D4:q G4:q. E4:8 | A4:q G4:8 C5:q. A4:q | G4:w |",
    "showStaff": true,
    "showKeyboard": true,
    "countIn": 1,
    "backing": {
      "instrument": "pad",
      "seq": "[C3 G3]:w | [F3 C4]:w | [C3 G3]:w |"
    }
  }
}
```

```exercise
{
  "id": "e3-prosody-quiz",
  "type": "quiz",
  "title": "Good fit or bad fit?",
  "passScore": 0.75,
  "spec": {
    "questions": [
      {
        "q": "Where should the stressed syllable of 'to-NIGHT' go?",
        "choices": [
          "'to' on beat 1, 'night' on the 'and'",
          "'to' as a pickup, 'night' on beat 1",
          "both on off-beats",
          "it doesn't matter"
        ],
        "answer": 1
      },
      {
        "q": "A comfortable range for an untrained singer is about…",
        "choices": [
          "a 4th",
          "an octave to a 10th",
          "two octaves",
          "three octaves"
        ],
        "answer": 1
      },
      {
        "q": "Which is NOT a way to give a syllable weight?",
        "choices": [
          "strong beat",
          "longer note",
          "higher pitch",
          "placing it on a 16th after the beat"
        ],
        "answer": 3
      },
      {
        "q": "Why leave rests in a vocal line?",
        "choices": [
          "to breathe",
          "to make it shorter",
          "because singers can't hold notes",
          "rests are optional decoration"
        ],
        "answer": 0
      }
    ]
  }
}
```

```exercise
{
  "id": "e4-ear-melody",
  "type": "ear-melody",
  "title": "Singable phrases by ear",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "key": "random",
    "degrees": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "length": 5,
    "rhythm": "simple",
    "answer": "play"
  }
}
```

```exercise
{
  "id": "e5-ear-rhythm",
  "type": "ear-rhythm",
  "title": "Speech-like rhythms",
  "count": 6,
  "passScore": 0.7,
  "spec": {
    "timeSig": "4/4",
    "bars": 1,
    "subdivision": "8",
    "rests": true,
    "answer": "choose"
  }
}
```

```exercise
{
  "id": "e6-daw-set-line",
  "type": "daw-task",
  "title": "Set a lyric line",
  "instructions": "Set this line (10 syllables) to a melody in C major: 'I CAN'T for-GET the SOUND of YOUR goodBYE' → I · CAN'T · for · GET · the · SOUND · of · YOUR · good · BYE. One note per syllable, stressed syllables on beats 1 or 3 or on longer/higher notes, highest note on SOUND or BYE, end on a long note.",
  "spec": {
    "template": {
      "bpm": 84,
      "key": "C",
      "timeSig": "4/4",
      "tracks": [
        {
          "instrument": "lead",
          "seq": ""
        },
        {
          "instrument": "pad",
          "seq": "[C3 G3]:w | [A2 E3]:w | [F2 C3]:w | [G2 D3]:w |"
        }
      ]
    },
    "task": "Set a 10-syllable lyric line with good prosody.",
    "checks": [
      {
        "kind": "note-count",
        "min": 10,
        "max": 10,
        "track": 0
      },
      {
        "kind": "bars",
        "min": 3,
        "max": 4
      },
      {
        "kind": "range",
        "low": "C4",
        "high": "E5",
        "track": 0
      },
      {
        "kind": "max-leap",
        "semitones": 9,
        "track": 0
      },
      {
        "kind": "in-key",
        "key": "C",
        "scale": "major",
        "allowPassing": false,
        "track": 0
      },
      {
        "kind": "custom",
        "id": "stress-fit",
        "note": "Self-check: speak the line along with the melody — every stressed syllable lands with weight."
      }
    ],
    "minBars": 3,
    "maxBars": 4
  }
}
```
