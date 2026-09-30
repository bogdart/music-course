---
id: w07-l2-transposing-melodies
title: Transposing Melodies
week: 7
order: 2
phase: p1
duration_min: 45
goals:
  - Understand transposition as "same degrees, new home"
  - Play "Mary Had a Little Lamb" in G and "Ode to Joy" in F
  - Echo short melodies with degree 6 by ear, in C and then G major
prerequisites: [w07-l1-g-and-f-major]
tags: [transposition, keys, melody, ear, keyboard]
songs:
  - { title: "Mary Had a Little Lamb", composer: "Traditional", public_domain: true }
  - { title: "Ode to Joy", composer: "Ludwig van Beethoven", public_domain: true }
---

# Transposing melodies

To [[transpose]] a melody is to move all of it up or down by the same distance, into a new key. Every interval stays the same, so the tune is still recognisable — just higher or lower. You'll do this constantly: to fit a singer's range, to fit your hands on a small keyboard, or to lift a final chorus.

## Method 1: think in degrees (recommended)

You already know melodies as degrees. "Mary Had a Little Lamb" is:

**3 2 1 2 | 3 3 3 | 2 2 2 | 3 5 5 | 3 2 1 2 | 3 3 3 3 | 2 2 3 2 | 1**

To play it in G major, look up those degrees in G: 1 = G, 2 = A, 3 = B, 5 = D. No calculation per note, and the key signature takes care of any sharps.

```example
{
  "title": "Mary (first half) in C, then in G",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "E4:q D4:q C4:q D4:q | E4:q E4:q E4:h | D4:q D4:q D4:h | E4:q G4:q G4:h | B3:q A3:q G3:q A3:q | B3:q B3:q B3:h | A3:q A3:q A3:h | B3:q D4:q D4:h" } ],
  "show": ["staff", "keyboard"]
}
```

Hand position for G: thumb on **G3**, fingers over A3, B3, C4, D4.

## Method 2: move by an interval

Alternatively, shift every note by the same interval. C major → F major = up a perfect 4th. E becomes A, D becomes G, C becomes F. This works, but it's slower in your head and easy to slip on — use it to *check* Method 1.

## The one trap

In F major, degree 4 is **B♭**, not B. In G major, degree 7 is **F♯**. If a transposed melody has a note that sounds odd, the forgotten sharp or flat is the usual suspect. Sometimes your ear catches it, sometimes it won't yet — so check the key signature as well.

```example
{
  "title": "Ode to Joy, first two lines in F major (listen for B♭)",
  "bpm": 100, "timeSig": "4/4", "key": "F",
  "tracks": [ { "instrument": "piano", "seq": "A3:q A3:q Bb3:q C4:q | C4:q Bb3:q A3:q G3:q | F3:q F3:q G3:q A3:q | A3:q. G3:8 G3:h | A3:q A3:q Bb3:q C4:q | C4:q Bb3:q A3:q G3:q | F3:q F3:q G3:q A3:q | G3:q. F3:8 F3:h" } ],
  "show": ["staff"]
}
```

For F major, thumb on **F3**; finger 4 sits on B♭3.

## Echoes with 6, then in G

This lesson opens two melody rungs. First, echoes that may use degree 6 — four notes from C up to A, after the cadence (the la you met in week 6). Then the same in G major: four notes from G up to E, after the G cadence. Same method as always — listen twice, start from the note you hear, follow the directions. In G, your thumb on G makes degree thinking easy: the fingers are still 1 2 3 4 5, and 6 is one key past the little finger.

```ladder
{ "skill": "melody", "unlocks": 8, "intro": "Opens \"Echo with 6\" (C major), then the same in G major once you reach that rung." }
```

## Drills

```exercise
{
  "id": "e1",
  "type": "quiz-input",
  "title": "Degrees in new keys",
  "spec": { "questions": [
    { "q": "Degree 3 in G major?", "answer": ["B"], "kind": "note" },
    { "q": "Degree 4 in F major?", "answer": ["Bb"], "kind": "note" },
    { "q": "'Mary' starts on degree 3. In F major, the first note is…", "answer": ["A"], "kind": "note" },
    { "q": "Ode to Joy's first line reaches up to degree 5. In G major that's…", "answer": ["D"], "kind": "note" },
    { "q": "Transpose E up a perfect 4th:", "answer": ["A"], "kind": "note" },
    { "q": "Degree 7 in G major?", "answer": ["F#"], "kind": "note" }
  ] },
  "passScore": 0.75
}
```

```exercise
{
  "id": "e2",
  "type": "play-notes",
  "title": "Play by degree in F major",
  "instructions": "Thumb on F3 = degree 1.",
  "count": 10,
  "passScore": 0.75,
  "spec": { "prompt": "degrees", "notes": ["F3", "A3", "C4", "Bb3", "G3", "D4", "E4", "F4"], "ordered": true, "key": "F" }
}
```

```exercise
{
  "id": "e3",
  "type": "play-melody",
  "title": "Mary in G major",
  "passScore": 0.75,
  "spec": { "bpm": 90, "timeSig": "4/4", "key": "G", "seq": "B3:q. A3:8 G3:q A3:q | B3:q B3:q B3:h | A3:q A3:q A3:h | B3:q D4:q D4:h | B3:q. A3:8 G3:q A3:q | B3:q B3:q B3:q B3:q | A3:q A3:q B3:q A3:q | G3:w", "showStaff": true, "showKeyboard": false, "countIn": 1 }
}
```

```exercise
{
  "id": "e4",
  "type": "play-melody",
  "title": "Ode to Joy in F major (lines 1–2)",
  "passScore": 0.75,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "F", "seq": "A3:q A3:q Bb3:q C4:q | C4:q Bb3:q A3:q G3:q | F3:q F3:q G3:q A3:q | A3:q. G3:8 G3:h | A3:q A3:q Bb3:q C4:q | C4:q Bb3:q A3:q G3:q | F3:q F3:q G3:q A3:q | G3:q. F3:8 F3:h", "showStaff": true, "showKeyboard": false, "countIn": 1 }
}
```
