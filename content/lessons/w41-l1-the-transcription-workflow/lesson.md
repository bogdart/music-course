---
id: w41-l1-the-transcription-workflow
title: The Transcription Workflow
week: 41
order: 1
phase: p5
duration_min: 40
goals:
  - Learn the seven listening passes and why their order matters
  - Find home in a loop by where its tune comes to rest
  - "Run passes 3 and 4 on a hidden mystery loop: bass notes, then numerals"
prerequisites: [w40-l3-self-critique-and-ear-assessment]
tags: [transcription, ear, workflow, bass, progression]
---

# The Transcription Workflow

The last phase points everything you have built at one skill: hearing a finished song and writing down how it is made —
[[transcription]]. People who can do it rarely have a magic ear. They have a **method**, and they know exactly which
question they are asking at each moment.

## Seven passes, one question each

Trying to hear everything at once drowns you. So you listen many times, each time with *one* question. Each of those
listens is a [[listening pass]]:

1. **Key & tempo** — where is home, how fast is the beat?
2. **Form** — where do sections start and end, how many bars?
3. **Bass** — which note does the bass land on at each chord change?
4. **Chords** — turn those bass notes into numerals (I, IV, vi…).
5. **Melody** — hook first, in scale degrees.
6. **Groove** — kick, snare, hats.
7. **Layers** — which instruments play in which section?

The order is deliberate. The key is the map every later answer is written on. The form tells you how little you really
have to transcribe (choruses repeat). The bass is the easiest harmonic fact to catch, and once you know the bass note
and the key, the chord is usually a short guess away. Write the answers on a [[form map]]: one row per section with bars,
chords, and notes on melody, groove and layers.

## How this phase works

Every song you transcribe here is a [[mystery song]]: an original track the app plays with its notation **hidden**.
You answer first; only then press *Reveal notation* and compare. If you reveal before answering you have only read the
answer — the practice is the guessing, the checking and the being wrong.

Be realistic about your ear. The drills in the ladder blocks run at *your* current rung; the mystery songs don't — they
are real music. Missing notes in them is normal and useful. When a fixed exercise feels impossible, loop the example
more, answer anyway, then reveal and listen again *while looking*: that is how the ear learns to connect sound and name.

## Mystery Song #0

Loop it and ask only question 1: which note feels most *finished*, like the place the loop wants to stop? Hum it. Decide
by where the tune comes to rest at the ends of its phrases, not by which chord happens to come first.

```example
{
  "title": "Mystery Song #0 — loop it",
  "bpm": 96,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 ohat:8"},
    {"instrument": "bass", "seq": "A2:h. r:q | F2:h. r:q | C2:h. r:q | G2:h. r:q"},
    {"instrument": "piano", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w"},
    {"instrument": "lead", "seq": "E5:q E5:8 D5:8 C5:q A4:q | C5:q. C5:8 D5:q C5:q | E5:q G5:q E5:8 D5:8 C5:q | D5:h. r:q"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```exercise
{
  "id": "w41l1-home",
  "type": "listen",
  "title": "Pass 1: where is home?",
  "spec": {
    "example": {
      "title": "Mystery Song #0",
      "bpm": 96,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 ohat:8"},
        {"instrument": "bass", "seq": "A2:h. r:q | F2:h. r:q | C2:h. r:q | G2:h. r:q"},
        {"instrument": "piano", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w"},
        {"instrument": "lead", "seq": "E5:q E5:8 D5:8 C5:q A4:q | C5:q. C5:8 D5:q C5:q | E5:q G5:q E5:8 D5:8 C5:q | D5:h. r:q"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Hum the note that feels most finished, then find it on the keyboard. Which is it?", "choices": ["A", "C", "F", "G"], "answer": 1, "explain": "C. The tune's phrases come to rest on C (the ends of bars 2 and 3), and the last bar hangs on D, leaning back towards C. If you picked another note, loop it again and hum the last note of each phrase."}
    ]
  }
}
```

## Passes 3 and 4

Now follow only the bass. Four chords, one bass note each. Hum each one, then find it on the keyboard. If the full mix is
too crowded, loop the bass-alone version first — it is a crutch you will learn to drop in week 42.

```example
{
  "title": "Mystery Song #0 — bass alone (practice only)",
  "bpm": 96,
  "timeSig": "4/4",
  "tracks": [{"instrument": "bass", "seq": "A2:h. r:q | F2:h. r:q | C2:h. r:q | G2:h. r:q"}],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```exercise
{
  "id": "w41l1-bass",
  "type": "ear-bass",
  "title": "Pass 3: the four bass notes",
  "instructions": "The full mix plays. Play the four bass notes in order, any octave.",
  "srs": false,
  "spec": {
    "key": "C",
    "chords": ["I", "IV", "V", "vi"],
    "answer": "play",
    "example": {
      "title": "Mystery Song #0",
      "bpm": 96,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 ohat:8"},
        {"instrument": "bass", "seq": "A2:h. r:q | F2:h. r:q | C2:h. r:q | G2:h. r:q"},
        {"instrument": "piano", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w"},
        {"instrument": "lead", "seq": "E5:q E5:8 D5:8 C5:q A4:q | C5:q. C5:8 D5:q C5:q | E5:q G5:q E5:8 D5:8 C5:q | D5:h. r:q"}
      ]
    },
    "track": 1
  }
}
```

```exercise
{
  "id": "w41l1-prog",
  "type": "ear-progression",
  "title": "Pass 4: the numerals",
  "instructions": "You found the bass notes; now name the four chords in C major.",
  "srs": false,
  "spec": {
    "key": "C",
    "mode": "major",
    "chords": ["I", "IV", "V", "vi"],
    "example": {
      "title": "Mystery Song #0",
      "bpm": 96,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 ohat:8"},
        {"instrument": "bass", "seq": "A2:h. r:q | F2:h. r:q | C2:h. r:q | G2:h. r:q"},
        {"instrument": "piano", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w"},
        {"instrument": "lead", "seq": "E5:q E5:8 D5:8 C5:q A4:q | C5:q. C5:8 D5:q C5:q | E5:q G5:q E5:8 D5:8 C5:q | D5:h. r:q"}
      ]
    },
    "progression": ["vi", "IV", "I", "V"]
  }
}
```

```exercise
{
  "id": "w41l1-first",
  "type": "quiz",
  "title": "Home and the first chord",
  "spec": {
    "questions": [
      {"q": "Now compare your answers from passes 1 and 4. Is the first chord of the loop the home chord?", "choices": ["Yes", "No"], "answer": 1, "explain": "No. The loop is vi–IV–I–V in C major: it starts on vi (A minor). The same four chords could also be heard as A minor (i–VI–III–VII); what tips this loop to C is the tune, whose phrases end on C. Home is where the music rests, not where it begins."}
    ]
  }
}
```

## Your own level

Two ladders reach their last rungs today: *bass in a band* (roots) and *progressions in a band, borrowed chords too*.
Opening a rung is not the same as hearing it: the drills below start at the lowest rung you haven't mastered, which may be
several steps lower. That is the right place to practise.

```ladder
{
  "skill": "roots",
  "unlocks": 15,
  "intro": "Today opens the full-band bass rungs; the drill starts wherever you are on this ladder."
}
```

```ladder
{
  "skill": "progressions",
  "unlocks": 20,
  "intro": "The last rung: full mix with borrowed chords. You practise at your current rung."
}
```

```exercise
{
  "id": "w41l1-order",
  "type": "quiz",
  "title": "The seven passes",
  "spec": {
    "questions": [
      {"q": "Which pass comes first?", "choices": ["Melody", "Key & tempo", "Groove", "Layers"], "answer": 1, "explain": "The key is the map every later answer is written on."},
      {"q": "Why does the bass come before the chords?", "choices": ["The bass is always loudest", "The bass note plus the key usually predicts the chord", "Chords don't matter", "Bass players decide the chords"], "answer": 1},
      {"q": "Why map the form early?", "choices": ["Repeated sections only need transcribing once", "Form decides the key", "It makes the tempo faster", "It is the hardest pass"], "answer": 0}
    ]
  }
}
```

```exercise
{
  "id": "w41l1-play",
  "type": "play-chord",
  "title": "Play the loop you transcribed",
  "instructions": "Now that you have answered and revealed: play the four chords of Mystery Song #0 along with it.",
  "spec": {"chords": ["Am", "F", "C", "G"], "inversion": "any", "sequence": true, "bpm": 60}
}
```

```exercise
{
  "id": "w41l1-reflect",
  "type": "reflect",
  "title": "Start your form map",
  "spec": {
    "prompt": "Write the first lines of a form map for Mystery Song #0: home note, number of bars in the loop, the bass notes and numerals, and one sentence on which pass felt hardest and why.",
    "minWords": 30
  }
}
```
