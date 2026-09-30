---
id: w47-l1-leaps-and-chromatic-notes
title: Melody Dictation — Leaps and Chromatic Notes
week: 47
order: 1
phase: p5
duration_min: 45
goals:
  - Transcribe a leap by asking which chord tone it lands on
  - "Name a chromatic note by its neighbours: ♭3, ♯4 and ♭7"
  - Dictate a hidden melody in 2-bar chunks
prerequisites: [w46-l3-catching-borrowed-chords]
tags: [transcription, melody, intervals, chromatic, ear]
---

# Melody Dictation — Leaps and Chromatic Notes

Pass 5 is melody, built up in chunks: **2 bars** today, **4** next lesson, **8** in lesson 3. Two things make real
melodies harder than the drills: **leaps** (you lose your place) and **chromatic notes** (a note outside the key). Both
have a fix.

## Leaps land on chord tones

A melody rarely leaps to a random note. It leaps to the **root, 3rd or 5th of the current chord**, the stable notes. So
when you hear a leap, don't measure the interval first. Ask: *which chord are we on (you know that from pass 4), and which
of its three notes did the tune land on?* That's a three-way choice, not a twelve-way one.

What to do with the keyboard when a leap loses you:

1. Loop the bar. Play the chord's three notes one at a time, **while** the leap note sounds.
2. The one that merges into a single sound with it is your note. Check: play your note an octave up and down — one of
   them should match the tune's height exactly.
3. Still lost? Play home, then step up or down from it until you hit the note — slow, but it always works.

For the drill: the interval ladder mixes up, down and together. Sort by size first (step, skip, leap, big leap), then
pick within the group, and count keys to check. The *How to do it* box under the drill shows the exact method for your
current rung.

```ladder
{
  "skill": "intervals",
  "unlocks": 22,
  "intro": "The last interval rung, everything mixed (up, down and together), opens today; you drill at your current rung."
}
```

## Chromatic notes: name them by their neighbours

When a note doesn't fit the major scale, pop melodies mostly use one of three (the degrees ladder has opened them as
♭7, ♭3 and ♯4):

- **♭3** — between 2 and 3: the "blue" note, slides down to 2 or up to 3.
- **♯4** — between 4 and 5: a quick lean up into 5.
- **♭7** — between 6 and 7: relaxed, un-classical (Mixolydian).

"A half step below 5" is ♯4; "a half step above 2" is ♭3. The note it resolves to tells you which it was.

On the keyboard: a chromatic note shows up as "my note sounds bent". Try the white key you guessed, then the black key on
each side of it, back to back with the loop. Check: play the next note too — a chromatic note almost always moves to its
neighbour by a half step. If the black key plus its half-step move sounds like the tune, you have it.

## A hidden 4-bar melody

The chords are given (pass 4 done): **C – Am – F – G**, one per bar, in C major. Answer the questions first, then
transcribe it in two chunks of two bars, with the melody method from week 44:

1. **First note.** Loop the chunk, play keys around the tune's height, go higher/lower until one merges with the first
   note. Check: play it along with the loop's first beat.
2. **Path.** For each next note ask two questions: up or down? step or leap? Play that move. Check: replay the loop and
   play along — a wrong key sticks out.
3. **Chunks of 2–4 notes.** Get the first few right, then add the rest. Stuck on one note? Loop, guess the two likeliest
   keys, compare them back to back against the loop, keep the better one.
4. After answering, reveal and listen while looking at the notation — especially at the notes you missed.

```exercise
{
  "id": "w44l1-listen",
  "type": "listen",
  "title": "Leaps and chromatic notes",
  "spec": {
    "example": {
      "title": "Melody over C – Am – F – G",
      "bpm": 72,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "piano", "seq": "[C3 G3 E4]:w | [A2 E3 C4]:w | [F2 C3 A3]:w | [G2 D3 B3]:w"},
        {"instrument": "lead", "seq": "G4:q C5:q E5:q. D5:8 | C5:q A4:q E5:h | F5:q. E5:8 Eb5:8 D5:8 C5:q | B4:q F#4:8 G4:8 D5:h"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Bar 2 ends with a leap up over the A minor chord. Which chord tone does it land on?", "choices": ["Root (A)", "3rd (C)", "5th (E)"], "answer": 2, "explain": "The 5th, E: the melody leaps A → E, root to 5th of A minor."},
      {"q": "Bar 3 contains one note outside C major. Which is it?", "choices": ["♭3 (between 2 and 3)", "♯4 (between 4 and 5)", "♭7 (between 6 and 7)"], "answer": 0, "explain": "♭3: E – E♭ – D slides chromatically down to 2."},
      {"q": "Bar 4 has another note outside C major. Which?", "choices": ["♭3 (between 2 and 3)", "♯4 (between 4 and 5)", "♭7 (between 6 and 7)"], "answer": 1, "explain": "♯4: F♯ rises by a half step to G, then the tune leaps up to D."}
    ]
  }
}
```

```exercise
{
  "id": "w44l1-chunk1",
  "type": "ear-melody",
  "title": "Chunk 1: bars 1–2",
  "instructions": "Seven notes over C and Am. Play them back, any octave.",
  "srs": false,
  "spec": {
    "key": "C",
    "degrees": [1, 2, 3, 4, 5, 6, 7],
    "answer": "play",
    "example": {
      "title": "Bars 1–2",
      "bpm": 72,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "piano", "seq": "[C3 G3 E4]:w | [A2 E3 C4]:w"},
        {"instrument": "lead", "seq": "G4:q C5:q E5:q. D5:8 | C5:q A4:q E5:h"}
      ]
    },
    "track": 1
  }
}
```

```exercise
{
  "id": "w44l1-chunk2",
  "type": "ear-melody",
  "title": "Chunk 2: bars 3–4",
  "instructions": "Nine notes over F and G, with the two chromatic notes. Play them back.",
  "srs": false,
  "spec": {
    "key": "C",
    "degrees": [1, 2, 3, 4, 5, 6, 7],
    "answer": "play",
    "chromatic": true,
    "example": {
      "title": "Bars 3–4",
      "bpm": 72,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "piano", "seq": "[F2 C3 A3]:w | [G2 D3 B3]:w"},
        {"instrument": "lead", "seq": "F5:q. E5:8 Eb5:8 D5:8 C5:q | B4:q F#4:8 G4:8 D5:h"}
      ]
    },
    "track": 1
  }
}
```

## Your own level: melody

Same method as the chunks above. The *How to do it* box under the drill shows the exact method for your current rung.

```ladder
{
  "skill": "melody",
  "unlocks": 24,
  "intro": "The last melody rung — chromatic neighbour and passing notes — opens today. You drill at your own rung."
}
```

```exercise
{
  "id": "w44l1-play",
  "type": "play-melody",
  "title": "Play the whole melody",
  "instructions": "After revealing: play all four bars over the chords.",
  "spec": {
    "bpm": 72,
    "timeSig": "4/4",
    "key": "C",
    "seq": "G4:q C5:q E5:q. D5:8 | C5:q A4:q E5:h | F5:q. E5:8 Eb5:8 D5:8 C5:q | B4:q F#4:8 G4:8 D5:h",
    "showStaff": true,
    "showKeyboard": true,
    "countIn": 1,
    "backing": {"instrument": "piano", "seq": "[C3 G3 E4]:w | [A2 E3 C4]:w | [F2 C3 A3]:w | [G2 D3 B3]:w"}
  }
}
```

## Between lessons

One Practice session. Then pick any tune you know well, loop its first two bars in your head and find them on the
keyboard: first note by search, then the path.
