---
id: w04-l1-note-values-and-rests
title: Note Values, Rests, Ties and Dots
week: 4
order: 1
phase: p1
duration_min: 45
goals:
  - Know how long whole, half, quarter and eighth notes (and their rests) last
  - Lengthen notes with ties and dots
  - Hear degree 4 and what it means for a note to resolve
prerequisites: [w03-l3-ode-to-joy-and-daw-melody]
tags: [rhythm, notation, note-values, ear]
---

# Note values and rests

So far you've copied rhythms by ear. This week you learn to *write* and *read* them, which lets you store any rhythm on paper or in the DAW grid. The whole system rests on one idea: **each note value is half the one before**.

| Value | Symbol in the app | Beats in 4/4 | Rest |
|---|---|---|---|
| [[whole note]] | `w` | 4 | whole rest |
| [[half note]] | `h` | 2 | half rest |
| quarter note | `q` | 1 | quarter rest |
| [[eighth note]] | `8` | ½ | eighth rest |

A [[rest]] is a *measured silence*. It's not "nothing" — it's part of the rhythm and lasts exactly as long as the matching note. Count through it.

To count eighth notes, split each beat with "and": **1 & 2 & 3 & 4 &**. The numbers land on the beat, the "&"s halfway between.

```example
{
  "title": "One bar each: whole, halves, quarters, eighths",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "C4:w | C4:h C4:h | C4:q C4:q C4:q C4:q | C4:8 C4:8 C4:8 C4:8 C4:8 C4:8 C4:8 C4:8" },
    { "instrument": "drums", "seq": "hh:q hh:q hh:q hh:q | hh:q hh:q hh:q hh:q | hh:q hh:q hh:q hh:q | hh:q hh:q hh:q hh:q" }
  ],
  "show": ["staff", "pianoroll"]
}
```

**Try it:** tap your foot with the clicks of the example and say "1 & 2 & 3 & 4 &". In bar 4 a note lands on every
syllable; in bar 3 only on the numbers. Then tap on the table with your hand: quarters (numbers only), then eighths
(every syllable), keeping the foot on the beat.

The next rhythm rungs add eighths to the "which notation?" drill, then **tapping** a rhythm back yourself. For
tapping, the **How to do it** box says: listen once while counting, then tap exactly where the notes fell.
**If you can't catch it:** replay and write the counts where notes start ("1, 2, 2&, 3"), then tap from your note.

```exercise
{
  "id": "e10",
  "type": "listen",
  "title": "Numbers only, or every '&'?",
  "spec": {
    "examples": [
      { "title": "Bar A", "bpm": 80, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:q C4:8 C4:8 C4:q C4:q" }, { "instrument": "drums", "seq": "hh:q hh:q hh:q hh:q" } ] },
      { "title": "Bar B", "bpm": 80, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:q C4:q C4:q C4:q" }, { "instrument": "drums", "seq": "hh:q hh:q hh:q hh:q" } ] }
    ],
    "questions": [
      { "q": "Bar A: notes start on…", "choices": ["1 2 3 4", "1 2 & 3 4", "1 & 2 & 3 & 4 &"], "answer": 1, "explain": "Quarter, two eighths, quarter, quarter." },
      { "q": "Bar B: notes start on…", "choices": ["1 2 3 4", "1 2 & 3 4", "1 & 2 & 3 & 4 &"], "answer": 0, "explain": "Four quarters." }
    ]
  }
}
```

```ladder
{ "skill": "rhythm", "unlocks": 3, "intro": "Rhythm at your current rung — up to eighths and tapping back quarters." }
```

## Ties and dots: making notes longer

Sometimes a note needs a length that isn't on the menu — say, three beats. Two tools:

- A [[tie]] joins two notes of the same pitch into one long note: a half tied to a quarter = 3 beats. Written `C4:h~ C4:q`. You play once and hold.
- A [[dotted note]] is the note plus **half of itself**: a dotted half = 2 + 1 = 3 beats (`h.`); a dotted quarter = 1 + ½ = 1½ beats (`q.`).

The dotted quarter + eighth pair is the "long–short" you played at the end of Ode to Joy's lines. Count it "**1 & 2 &** 3": the long note starts on 1 and holds through "& 2"; the short note lands on the "&" after 2; the next note falls on 3.

```example
{
  "title": "Tie vs dotted half (same length), then dotted quarter + eighth",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "E4:h~ E4:q r:q | E4:h. r:q | E4:q. D4:8 C4:q D4:q | E4:q E4:q E4:h" } ],
  "show": ["staff"]
}
```

The last two bars are how "Mary Had a Little Lamb" is really written — with a lilt on the first note.

## A new degree: 4 (fa), and what "resolve" means

Degree 4 sits right above 3, only a **half step** away. After the home run, 4 tends to sound restless, as if it leans down onto 3. When a restless note moves to a more restful neighbour, musicians say it [[resolves]] — the tension is let go. Listen: the home run, then 4 held… and resolving to 3, then all the way home:

```example
{
  "title": "Home run, then fa → mi (4 resolves to 3), then mi re do",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | F4:w | E4:h r:h | E4:q D4:q C4:h" } ],
  "show": ["keyboard"]
}
```

Compare with 4 left hanging — no resolution:

```example
{
  "title": "Home run, then 4 alone",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | F4:w" } ],
  "show": ["keyboard"]
}
```

**Try it:** play the home run, then hold F4 for three seconds. Then play E4. Did it feel like something let go? Now
play the home run, then F4, then G4 instead: most people find F → E more "settled" than F → G. Don't worry if you
don't feel it yet.

**If 4 doesn't feel "leaning" to you yet:** the walk home after each drill answer (4 → 3 → 2 → 1) shows where it
sits — count the steps. The keyboard answer still works: find the key, C D E F = 1 2 3 4.

```exercise
{
  "id": "e11",
  "type": "listen",
  "title": "3 or 4?",
  "instructions": "Answer, then check on the keyboard: find the note and count from C (C D E F = 1 2 3 4).",
  "spec": {
    "examples": [
      { "title": "Clip 1", "bpm": 100, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | F4:w" } ] },
      { "title": "Clip 2", "bpm": 100, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 F4:8 E4:8 D4:8 | C4:h r:h | E4:w" } ] }
    ],
    "questions": [
      { "q": "Clip 1: the last note is…", "choices": ["3", "4"], "answer": 1, "explain": "F = 4." },
      { "q": "Clip 2: the last note is…", "choices": ["3", "4"], "answer": 0, "explain": "E = 3." }
    ]
  }
}
```

```ladder
{ "skill": "degrees", "unlocks": 4, "intro": "Degrees at your current rung — up to 1 to 4 after the home run." }
```

## Octaves: near-misses, one after the other

The next octave rung keeps the single pair (same or different?), but the different note may now sit a half step
from the octave — the near-miss you know from the *together* rungs.

**Try it:** play G3 → G4, then G3 → F♯4, then G3 → G♯4. Only the first is the same letter. Now make an "echo": play
G3, then G4 on purpose, then replay each pair. Does the second note land on your echo, or next to it?

**If you can't hear it yet:** use the echo test in the drill — find the first note, play it and the key 12 above,
then replay the question. A near-miss sounds like your echo "bent" up or down.

```exercise
{
  "id": "e12",
  "type": "listen",
  "title": "Echo or bent?",
  "spec": {
    "examples": [
      { "title": "Pair 1", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "A3:h A4:h" } ] },
      { "title": "Pair 2", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "A3:h G#4:h" } ] }
    ],
    "questions": [
      { "q": "Pair 1:", "choices": ["same letter, an octave up", "a different note"], "answer": 0, "explain": "A3 → A4." },
      { "q": "Pair 2:", "choices": ["same letter, an octave up", "a different note"], "answer": 1, "explain": "A3 → G♯4, one key below the octave." }
    ]
  }
}
```

```ladder
{ "skill": "octave", "unlocks": 7, "intro": "Octaves at your current rung — up to near-misses one after the other." }
```

## Drills

```exercise
{
  "id": "e1",
  "type": "quiz",
  "title": "How long?",
  "spec": { "questions": [
    { "q": "A half note lasts…", "choices": ["1 beat", "2 beats", "4 beats"], "answer": 1 },
    { "q": "How many eighth notes fit in one quarter note?", "choices": ["2", "4", "8"], "answer": 0 },
    { "q": "A dotted half note lasts…", "choices": ["2 beats", "3 beats", "2½ beats"], "answer": 1 },
    { "q": "A dotted quarter lasts…", "choices": ["1½ beats", "2 beats", "¾ beat"], "answer": 0 },
    { "q": "A half note tied to a quarter note is played…", "choices": ["twice", "once, held 3 beats"], "answer": 1 },
    { "q": "A quarter rest lasts…", "choices": ["no time at all", "1 beat of silence", "until the next bar"], "answer": 1 },
    { "q": "How many half notes fill a 4/4 bar?", "choices": ["1", "2", "4"], "answer": 1 }
  ] },
  "passScore": 0.75
}
```

```exercise
{
  "id": "e8",
  "type": "quiz",
  "title": "Resolving",
  "spec": { "questions": [
    { "q": "A note 'resolves' when it…", "choices": ["gets louder", "moves from a restless note to a more restful one", "jumps an octave"], "answer": 1 },
    { "q": "Degree 4 in C major is…", "choices": ["E", "F", "G"], "answer": 1 },
    { "q": "4 usually resolves to…", "choices": ["3, a half step down", "7", "6"], "answer": 0 },
    { "q": "The most restful note of the key is…", "choices": ["degree 1", "degree 4", "degree 2"], "answer": 0 }
  ] }
}
```

```exercise
{
  "id": "e2",
  "type": "rhythm-tap",
  "title": "Wholes, halves, quarters",
  "instructions": "Tap at the start of each note. Keep counting during long notes.",
  "passScore": 0.75,
  "spec": { "bpm": 80, "timeSig": "4/4", "seq": "x:h x:h | x:q x:q x:h | x:q x:q x:q x:q | x:w", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "e3",
  "type": "rhythm-tap",
  "title": "Eighths and rests",
  "instructions": "Count '1 & 2 & 3 & 4 &' out loud. Don't tap on rests.",
  "passScore": 0.75,
  "spec": { "bpm": 72, "timeSig": "4/4", "seq": "x:q x:8 x:8 x:q x:q | x:8 x:8 x:8 x:8 x:h | x:q r:q x:q r:q | x:q. x:8 x:h", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "e6",
  "type": "play-melody",
  "title": "Mary, with the real rhythm",
  "instructions": "Dotted quarter + eighth at the start of lines 1 and 3.",
  "passScore": 0.75,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "E4:q. D4:8 C4:q D4:q | E4:q E4:q E4:h | D4:q D4:q D4:h | E4:q G4:q G4:h | E4:q. D4:8 C4:q D4:q | E4:q E4:q E4:q E4:q | D4:q D4:q E4:q D4:q | C4:w", "showStaff": true, "showKeyboard": false, "countIn": 1 }
}
```

## Between lessons

- Two **Practice** sessions of about 10 minutes.
- Once a day: tap the "Eighths and rests" rhythm while counting out loud.
- Ready for the next lesson when the dashboard doesn't say **practise first**.
