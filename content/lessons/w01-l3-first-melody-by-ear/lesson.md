---
id: w01-l3-first-melody-by-ear
title: Your First Melody by Ear
week: 1
order: 3
phase: p1
duration_min: 40
goals:
  - Find C, D and E on the keyboard
  - Hear whether a melody moves up, down or stays
  - Play "Hot Cross Buns" and "Mary Had a Little Lamb" and echo short 3-note tunes by ear
prerequisites: [w01-l2-pitch-and-octaves]
tags: [melody, ear, keyboard, songs]
songs:
  - { title: "Hot Cross Buns", composer: "Traditional", public_domain: true }
  - { title: "Mary Had a Little Lamb", composer: "Traditional (melody attributed to Lowell Mason)", public_domain: true }
---

# Your first melody by ear

A [[melody]] is just a line of single notes, one after another, that moves **up**, **down** or **stays put**. If you can hear which of those three things is happening, you can already start playing tunes by ear. Today we use only three keys.

## C, D, E

You know C: the white key left of the two black keys. The next two white keys to the right are **D** (between the two black keys) and **E**. Put your right-hand thumb on C4, index finger on D4, middle finger on E4, and leave them there.

```keyboard
{ "range": ["C3", "C5"], "highlight": ["C4", "D4", "E4"], "labels": "names" }
```

## Hot Cross Buns

This tune walks **down** from E to C, twice, then chatters on C and D, then walks down again. Listen and watch the keys:

```example
{
  "title": "Hot Cross Buns",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "E4:q D4:q C4:h | E4:q D4:q C4:h | C4:8 C4:8 C4:8 C4:8 D4:8 D4:8 D4:8 D4:8 | E4:q D4:q C4:h" } ],
  "show": ["keyboard", "staff"]
}
```

Sing or hum it before you play it. If you can hum it, your fingers only need to follow your voice: "going down" means move left, "going up" means move right.

## Mary Had a Little Lamb

Same three notes, plus one more: **G**, the fifth white key counting from C. Your little finger can reach it without moving your hand.

```example
{
  "title": "Mary Had a Little Lamb",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "E4:q D4:q C4:q D4:q | E4:q E4:q E4:h | D4:q D4:q D4:h | E4:q G4:q G4:h | E4:q D4:q C4:q D4:q | E4:q E4:q E4:q E4:q | D4:q D4:q E4:q D4:q | C4:w" } ],
  "show": ["keyboard", "staff"]
}
```

## Playing by ear, step by step

When you hear a short tune:

1. **Hum it back** first. If you can't hum it, replay it — don't guess with your fingers yet.
2. Decide the **direction** of each move: up, down, same.
3. Start on C and let your fingers follow the directions.

Wrong notes are information, not failure: if it sounded too high, go down one key and try again. This loop — listen, guess, correct — is exactly how professionals transcribe songs. You're doing the real thing, just with three notes.

## Drills

```exercise
{
  "id": "e1",
  "type": "play-notes",
  "title": "C, D, E",
  "instructions": "Play C4, D4, E4 and back down, one finger per key.",
  "count": 6,
  "spec": { "prompt": "names", "notes": ["C4", "D4", "E4", "D4", "C4"], "ordered": true, "key": "C" }
}
```

```exercise
{
  "id": "e2",
  "type": "quiz",
  "title": "Up, down or same?",
  "spec": { "questions": [
    { "q": "Hot Cross Buns starts by moving…", "choices": ["up", "down", "staying the same"], "answer": 1 },
    { "q": "On the keyboard, 'going up' means moving…", "choices": ["left", "right"], "answer": 1 },
    { "q": "'Mary' bar 2 (E E E) is…", "choices": ["going up", "going down", "staying on one note"], "answer": 2 },
    { "q": "What should you do before trying to play a tune by ear?", "choices": ["Hum it back", "Press random keys", "Look up the notes"], "answer": 0 },
    { "q": "Which white key sits between the two black keys?", "choices": ["C", "D", "E"], "answer": 1 },
    { "q": "You played a note that sounded too high. Next try…", "choices": ["one key to the left", "one key to the right"], "answer": 0 }
  ] },
  "passScore": 0.8
}
```

```exercise
{
  "id": "e3",
  "type": "play-melody",
  "title": "Play Hot Cross Buns",
  "instructions": "Thumb on C4. Play along with the click.",
  "passScore": 0.7,
  "spec": { "bpm": 70, "timeSig": "4/4", "key": "C", "seq": "E4:q D4:q C4:h | E4:q D4:q C4:h | C4:8 C4:8 C4:8 C4:8 D4:8 D4:8 D4:8 D4:8 | E4:q D4:q C4:h", "showStaff": false, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e4",
  "type": "ear-melody",
  "title": "Echo: three notes",
  "instructions": "Listen to a 3-note tune using only C, D and E. Play it back, starting from what you hear.",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "C", "degrees": [1, 2, 3], "length": 3, "rhythm": "quarters", "answer": "play", "reference": "tonic" },
  "hints": ["Hum it first.", "Is the first move up, down or the same?"]
}
```

```exercise
{
  "id": "e5",
  "type": "play-melody",
  "title": "Play Mary Had a Little Lamb",
  "instructions": "Thumb on C4, little finger on G4.",
  "passScore": 0.7,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "E4:q D4:q C4:q D4:q | E4:q E4:q E4:h | D4:q D4:q D4:h | E4:q G4:q G4:h | E4:q D4:q C4:q D4:q | E4:q E4:q E4:q E4:q | D4:q D4:q E4:q D4:q | C4:w", "showStaff": false, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e6",
  "type": "ear-melody",
  "title": "Echo: four notes",
  "instructions": "Now four notes, still only C, D and E.",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "C", "degrees": [1, 2, 3], "length": 4, "rhythm": "quarters", "answer": "play", "reference": "tonic" }
}
```

```exercise
{
  "id": "e8",
  "type": "ear-octave",
  "title": "Octave check-in: which one is the octave?",
  "instructions": "A note, then A and B. Which one is the same note an octave higher? After each answer, use 'Listen again' to compare.",
  "count": 10,
  "passScore": 0.7,
  "spec": { "notes": ["C", "D", "E", "F", "G", "A", "B"], "octaves": [3, 4], "mode": "match", "gap": [1], "foils": [1, 6, 11] }
}
```
