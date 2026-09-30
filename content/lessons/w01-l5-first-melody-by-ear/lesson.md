---
id: w01-l5-first-melody-by-ear
title: Your First Melody by Ear
week: 1
order: 5
phase: p1
duration_min: 45
goals:
  - Hear a short tune as a chain of moves — up, down, or the same note again
  - Play back 3-note tunes on C, D and E by finding the first note and following the moves
  - Play "Hot Cross Buns" and "Mary Had a Little Lamb"
prerequisites: [w01-l4-pitch-and-octaves]
tags: [melody, pitch, ear, keyboard, songs]
songs:
  - { title: "Hot Cross Buns", composer: "Traditional", public_domain: true }
  - { title: "Mary Had a Little Lamb", composer: "Traditional (melody attributed to Lowell Mason)", public_domain: true }
---

# Your first melody by ear

A [[melody]] is a chain of the three moves you already know: **up**, **down**, or **the same note again**. If you
can follow the moves and find the first note, you can play a tune by ear. Today: three keys, C, D and E.

## C, D, E under your fingers

C is left of the two black keys; D sits between them; E is next. Right hand: thumb on C4, index on D4, middle
finger on E4. Leave them there — now "up" means the next finger, "down" the previous one.

```keyboard
{ "range": ["C4", "C5"], "highlight": ["C4", "D4", "E4", "G4"], "labels": "names" }
```

## Hot Cross Buns: the moves first

```example
{
  "title": "Hot Cross Buns",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "E4:q D4:q C4:h | E4:q D4:q C4:h | C4:8 C4:8 C4:8 C4:8 D4:8 D4:8 D4:8 D4:8 | E4:q D4:q C4:h" } ],
  "show": ["keyboard", "staff"]
}
```

**Try it:**

1. Play the tune and move your hand with it. Say the moves of the first three notes: *down, down*.
2. Bar 3: *same, same, same, up, same, same, same*. Repeated notes are the "one knock twice" from lesson 2.
3. Now play bar 1 yourself: middle finger (E), index (D), thumb (C). Did your fingers move the way your hand did?

## Same note, or a close neighbour?

In tunes, the tricky pair is a repeated note versus a step to the key next door. **Try it:** play E4 E4, then E4
F4, then E4 D4. Then press E4 and F4 **together**: two neighbours rub. You can't press one key twice at once — the
same note is always one clean sound. When a pair is unclear, that's your check: find both notes and press them
together.

```ladder
{ "skill": "pitch", "unlocks": 7, "intro": "Pitch at your current rung — including 'the same note, or a close neighbour?'." }
```

## Playing a tune back

In the echo drill, the app plays **C** first as a starting point, then a short tune from C, D and E.

1. **Listen twice** before touching the keys.
2. **Say the moves**: "down, down", "up, same"…
3. **Find the first note**: compare it with the C you heard first — the same note, or higher? In the first echo
   rungs the tune starts on C; when it doesn't, search up from C (D, then E).
4. **Follow the moves** with your fingers. A wrong note is information: too high → one key left.

### Check it

```exercise
{
  "id": "e10",
  "type": "listen",
  "title": "Moves first",
  "instructions": "Listen, say the moves, then check your answer by playing the tune on your keyboard.",
  "spec": {
    "examples": [
      { "title": "Tune 1", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:h r:h | C4:q D4:q E4:h" } ] },
      { "title": "Tune 2", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:h r:h | E4:q E4:q D4:h" } ] },
      { "title": "Tune 3", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:h r:h | D4:q C4:q D4:h" } ] }
    ],
    "questions": [
      { "q": "Tune 1 (after the starting C): the moves are…", "choices": ["up, up", "down, down", "same, down"], "answer": 0, "explain": "C D E: up, up." },
      { "q": "Tune 2: the moves are…", "choices": ["up, up", "same, down", "down, up"], "answer": 1, "explain": "E E D: same, down. It starts on E — two keys above the starting C." },
      { "q": "Tune 3: the moves are…", "choices": ["down, up", "up, up", "same, same"], "answer": 0, "explain": "D C D: down, up." }
    ]
  }
}
```

**If you can't hear it yet:** take one note at a time. Replay, stop after two notes, and find them with the search.
Then add the third. Slow is fine — it's the same skill either way.

The echo drill opens two rungs: three notes, then **four** (still C, D, E). For four, say the moves in a rhythm
("down, same, up") so they stick, and play the first three before adding the last.

```ladder
{ "skill": "melody", "unlocks": 2, "intro": "Tunes from C, D and E: three notes, then four. Play them back." }
```

## Mary Had a Little Lamb

Same three notes plus **G** (your little finger, the fifth white key from C). Say the moves of bar 1 before you play:
*down, down, up*.

```example
{
  "title": "Mary Had a Little Lamb",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "E4:q D4:q C4:q D4:q | E4:q E4:q E4:h | D4:q D4:q D4:h | E4:q G4:q G4:h | E4:q D4:q C4:q D4:q | E4:q E4:q E4:q E4:q | D4:q D4:q E4:q D4:q | C4:w" } ],
  "show": ["keyboard", "staff"]
}
```

## Hands

```exercise
{
  "id": "e1",
  "type": "play-notes",
  "title": "C, D, E",
  "instructions": "Play C4, D4, E4 and back down, one finger per key. Say the moves: up, up, down, down.",
  "spec": { "prompt": "names", "notes": ["C4", "D4", "E4", "D4", "C4"], "ordered": true, "key": "C" }
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
  "id": "e9",
  "type": "quiz",
  "title": "Playing by ear",
  "spec": { "questions": [
    { "q": "'Mary' bar 2 (E E E) is…", "choices": ["going up", "going down", "the same note again"], "answer": 2 },
    { "q": "Before you play a tune back, you…", "choices": ["listen twice and say the moves", "press keys until something fits"], "answer": 0 },
    { "q": "You can't find the first note. You…", "choices": ["compare it with the starting C and search up from there", "give up on the item"], "answer": 0 },
    { "q": "You played a note that sounded too high. Next try…", "choices": ["one key to the left", "one key to the right"], "answer": 0 }
  ] }
}
```

## Between lessons (and the end of week 1)

- Two or three **Practice** sessions of about 10 minutes. Practice mixes pitch, octave and melody at your level.
- Placement works for melodies too: Dashboard → Placement test → **Melodies**. If the C-D-E echoes are easy, it
  skips you ahead in one sitting.
- Play Hot Cross Buns and Mary once a day, saying the moves out loud.
- Ready for week 2 when the dashboard doesn't say **practise first** and the pitch bar has reached at least the
  *Find it* rungs. If week 1 took two calendar weeks, that's the pace working as intended.
