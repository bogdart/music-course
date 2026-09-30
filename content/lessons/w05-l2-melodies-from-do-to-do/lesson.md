---
id: w05-l2-melodies-from-do-to-do
title: "Melodies from Do to Do"
week: 5
order: 2
phase: p1
duration_min: 45
goals:
  - Find the first note of a tune from home, before anything else
  - Hear and play back tunes in chunks (3 + 2), inside do–do'
  - Echo and write five-note tunes, and play two public-domain tunes that stay inside the octave
prerequisites: [w05-l1-la-ti-and-the-whole-octave]
tags: [melody, scale-degrees, ear, keyboard, songs]
songs:
  - { title: "Joy to the World (tune 'Antioch')", composer: "arr. Lowell Mason, 1839", public_domain: true }
  - { title: "Frère Jacques", composer: "Traditional", public_domain: true }
---

# Melodies from do to do

All seven notes are open, and every tune this week stays inside **do to do'** (C4 to C5). Today isn't about new
notes: it's about two habits that turn "I can find notes" into "I can play a tune by ear". Both are what music-school
ear training drills for months at exactly this stage.

## Habit 1: find the first note from home

Everything after the first note is moves (up/down, step/skip). So the first note is the one to get right — and you
don't search for it from nowhere: **home is the last thing you heard** before the tune.

1. After the reference, keep do in your ear (or press C4 — it's always allowed).
2. Ask: is the first note **home**, **near home** (re, mi), **in the middle** (fa, sol), or **near the top** (la,
   ti, do')?
3. Search from the nearer end: from C4 walking up for low notes, from C5 walking down for high ones.

```example
{
  "title": "Home run, then a tune that starts near the top: A G F E D C (la sol fa mi re do)",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | A4:q G4:q F4:q E4:q | D4:q D4:q C4:h" } ],
  "show": ["keyboard"]
}
```

### Check it

```exercise
{
  "id": "e1",
  "type": "listen",
  "title": "Only the first note",
  "instructions": "Each clip: the home run, then a short tune. Name only the FIRST note of the tune. Check it on the keyboard: from C4 up, or from C5 down.",
  "spec": {
    "examples": [
      { "title": "Clip 1", "bpm": 90, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | G4:q A4:q B4:q C5:q" } ] },
      { "title": "Clip 2", "bpm": 90, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | E4:q D4:q E4:q C4:q" } ] },
      { "title": "Clip 3", "bpm": 90, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | B4:q C5:q A4:q G4:q" } ] }
    ],
    "questions": [
      { "q": "Clip 1 starts on…", "choices": ["do (1)", "mi (3)", "sol (5)", "ti (7)"], "answer": 2, "explain": "G = sol, then la ti do' — the climb home." },
      { "q": "Clip 2 starts on…", "choices": ["do (1)", "mi (3)", "sol (5)", "ti (7)"], "answer": 1, "explain": "E = mi, near home: two steps up from C." },
      { "q": "Clip 3 starts on…", "choices": ["do (1)", "mi (3)", "sol (5)", "ti (7)"], "answer": 3, "explain": "B = ti, right under C5 — and it goes straight up into do'." }
    ]
  }
}
```

**If you can't hear it yet:** replay and stop after the first note. Play C4, then the note again: far or near? Then
walk (C, D, E… or C5, B, A…) replaying the note before each key, until one merges.

## Habit 2: hear in chunks

Five notes are too many to hold one by one. Nobody does: musicians hear **chunks** — a run of steps, a skip, a turn
round a note. Split a tune **3 + 2**: get the first three, play them, replay, then add the last two.

Chunks you'll meet again and again inside the octave:

| Chunk | Degrees | Sounds like |
|---|---|---|
| fall home | 3 2 1 | Hot Cross Buns |
| climb home | 5 6 7 1' | the scale's last four notes |
| step down from the top | 1' 7 6 5 | Joy to the World's start |
| skip down home | 5 3 1 | a bugle call |
| turn round sol | 5 6 5 | Frère Jacques, line 3 |

**Try it:** play each chunk from the table twice, saying the degrees. Then play *5 6 5 4 3 1* and point to its two
chunks (*5 6 5* + *4 3 1*).

## Two tunes that stay inside the octave

"Joy to the World" opens with the whole scale, top to bottom: **do' ti la sol fa mi re do**. (Rhythm simplified.)

```example
{
  "title": "Joy to the World, opening (C major, do' down to do)",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C5:q. B4:8 A4:q. G4:8 | F4:h. E4:q | D4:h C4:h" } ],
  "show": ["staff", "keyboard"]
}
```

A mystery tune — one line of a song from this week, hidden. Echo it on the keyboard: first note from home, then
3 + 2 (+ 1).

```exercise
{
  "id": "e2",
  "type": "ear-melody",
  "title": "Echo the mystery line",
  "instructions": "The home run plays first. Play the tune back (6 notes). First note from home, then chunks.",
  "passScore": 0.7,
  "spec": { "key": "C", "degrees": [1, 2, 3, 4, 5, 6, 7], "rhythm": "simple", "answer": "play", "reference": "scale",
    "example": { "title": "Mystery line", "bpm": 80, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "G4:8 A4:8 G4:8 F4:8 E4:q C4:q" } ] } }
}
```

```exercise
{
  "id": "e3",
  "type": "ear-melody",
  "title": "Write it as degrees",
  "instructions": "The home run plays first. Write the degrees of the 8 notes (high do counts as 1). Play it back first if that helps — chunk it 4 + 4 — then translate.",
  "passScore": 0.7,
  "spec": { "key": "C", "degrees": [1, 2, 3, 4, 5, 6, 7], "rhythm": "simple", "answer": "degrees", "reference": "scale",
    "example": { "title": "Mystery tune 2", "bpm": 80, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "G4:q A4:q B4:q C5:q | A4:q G4:q E4:q C4:q" } ] } }
}
```

## The five-note drill

The next melody rung plays **five** notes from the whole octave, after the same home run you know. Use both habits:
first note from home, then 3 + 2.

**Try it:** play the home run (C D E F G F E D C), then *5 6 5 4 3* — say "sol la sol fa mi" as you play, and hear
it as *5 6 5* + *4 3*. Then *1 3 5 6 5*: *1 3 5* + *6 5*.

**If five notes are too many yet:** replay and play back only the first three; replay again and add the last two.

```ladder
{ "skill": "melody", "unlocks": 8, "intro": "Echoes at your current rung — up to five notes inside do–do'." }
```

## Hands

```exercise
{
  "id": "e4",
  "type": "play-melody",
  "title": "Joy to the World, opening",
  "instructions": "Start with your little finger on C5 and walk down the scale; thumb crosses at the end, or shift your hand at F.",
  "passScore": 0.7,
  "spec": { "bpm": 72, "timeSig": "4/4", "key": "C", "seq": "C5:q. B4:8 A4:q. G4:8 | F4:h. E4:q | D4:h C4:h", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e5",
  "type": "play-notes",
  "title": "Chunks by degree",
  "instructions": "Play each chunk between C4 and B4. Say the solfège as you play.",
  "passScore": 0.75,
  "spec": { "prompt": "degrees", "notes": [["E4", "D4", "C4"], ["G4", "E4", "C4"], ["G4", "A4", "G4"], ["B4", "A4", "G4"], ["F4", "E4", "D4", "C4"], ["G4", "A4", "B4"]], "ordered": true, "key": "C" }
}
```

```exercise
{
  "id": "e6",
  "type": "quiz",
  "title": "Tunes by ear",
  "spec": { "questions": [
    { "q": "The first thing to find in a tune you hear is…", "choices": ["its first note, compared with home", "its highest note", "its last note"], "answer": 0 },
    { "q": "A tune starts right under C5 and steps up into it. It starts on…", "choices": ["ti (7)", "sol (5)", "re (2)"], "answer": 0 },
    { "q": "Five notes are too many to hold. You…", "choices": ["play them all at once and hope", "split them 3 + 2 and add the chunk"], "answer": 1 },
    { "q": "Before the five-note drill the app plays the home run. Home is…", "choices": ["its first and last note, do (C4)", "its highest note, sol"], "answer": 0 }
  ] }
}
```

## Between lessons

- Two or three **Practice** sessions of about 10 minutes. On every melody item: first note from home, then 3 + 2.
- Once a day: Joy to the World's opening and Frère Jacques line 3, saying the degrees.
- Ready for the next lesson when the dashboard doesn't say **practise first**. The next lesson makes something:
  your own do-to-do' melody over a drone.
