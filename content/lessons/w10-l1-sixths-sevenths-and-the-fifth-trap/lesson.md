---
id: w10-l1-sixths-sevenths-and-the-fifth-trap
title: Sixths, Sevenths and the Fifth Trap
week: 10
order: 1
phase: p2
duration_min: 45
goals:
  - Tell an octave from a fifth, together and one after the other
  - Build and hear the minor and major sixth (m6, M6)
  - Build the minor and major seventh (m7, M7) using the interval flip
prerequisites: [w09-l3-greensleeves-and-minor-daw]
tags: [intervals, octaves, ear]
songs:
  - { title: "My Bonnie Lies Over the Ocean", composer: "Traditional (Scottish)", public_domain: true }
---

# Sixths, Sevenths and the Fifth Trap

In Phase 1 you learned intervals from a half step up to a fifth. This week fills in the wide ones, up to the octave. We start with the most common mix-up of all.

## The fifth trap

Play C4 and G4 together, then C4 and C5 together. Both sound clean and open, with no rub at all. That's why so many learners hear a fifth as "the same note, higher": after the octave, the fifth is the most blended, hollow interval there is. Here's how to tell them apart:

- **Together:** an octave melts into *one* sound, a single richer note. A fifth stays *two* notes, open and hollow, like a horn call or an empty guitar chord.
- **One after the other:** the octave comes back to the same name. The fifth lands on a different note, and it's a smaller jump than the octave.

```example
{
  "title": "Together: fifth C–G, octave C–C (twice). Then one after the other: C→G, C→C",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 G4]:h [C4 C5]:h | [C4 G4]:h [C4 C5]:h | r:w | C4:q G4:q r:h | C4:q C5:q r:h" } ],
  "show": ["keyboard"]
}
```

This lesson opens two octave rungs with the fifth as the wrong note: first with both notes together, then one after the other. The drill runs at your current octave rung, so you'll meet the fifth trap once the earlier rungs are solid. When you do and you're unsure, use the "Listen again" buttons and compare with the real octave. Expect it to take a while: it's a genuinely hard pair.

```ladder
{ "skill": "octave", "unlocks": 12, "intro": "Opens \"Octave or fifth?\" together, then one after the other; the drill runs at your current rung." }
```

## Sixths: a third, flipped

C up to A is a **major sixth (M6)**: 9 half steps. Now flip it: A up to C is a minor third (3 half steps). Flipping an interval (moving the bottom note up an octave) is called [[interval inversion]]. The two sizes always add up to 12 half steps, and major flips to minor:

| interval | half steps | flips to |
|---|---|---|
| m6 | 8 | M3 |
| M6 | 9 | m3 |
| m7 | 10 | M2 |
| M7 | 11 | m2 |

This makes wide intervals easy to *find*: for a M6 above C, go a minor third *down* from C (to A) and take that A an octave up. It doesn't tell you what they *sound* like, so here are both sixths.

```example
{
  "title": "From C4: minor 6th (C–A♭), then major 6th (C–A), each up then together",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q Ab4:q [C4 Ab4]:h | C4:q A4:q [C4 A4]:h" } ],
  "show": ["keyboard", "staff"]
}
```

The major sixth is bright and open: it's the first leap of *My Bonnie Lies Over the Ocean* ("My Bon-"). The minor sixth is a half step narrower and sounds darker, a little bittersweet. It's the step just past a fifth: C to G, then one more half step to A♭.

```example
{
  "title": "My Bonnie (traditional): the first leap, G up to E, is a major sixth",
  "bpm": 100, "timeSig": "3/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "r:h G4:q | E5:q. D5:8 C5:q | D5:q C5:q A4:q | G4:q E4:h |" } ],
  "show": ["staff"]
}
```

```exercise
{
  "id": "e1", "type": "play-melody", "title": "My Bonnie, first phrase",
  "instructions": "Right hand. Feel how wide the first leap is: your hand has to stretch or move.",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 90, "timeSig": "3/4", "key": "C", "seq": "r:h G4:q | E5:q. D5:8 C5:q | D5:q C5:q A4:q | G4:q E4:h |", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

This lesson opens two interval rungs: fifth vs octave (the trap again, this time as intervals), then minor vs major sixth. The drill runs at your current interval rung.

```ladder
{ "skill": "intervals", "unlocks": 9, "intro": "Opens \"5th or octave\" and \"Minor or major 6th\"; the drill runs at your current rung." }
```

## Sevenths: one step short of the octave

A seventh is easiest to find from the top: go to the octave, then step back down.

- **Major seventh (M7)**, 11 half steps: a half step below the octave (C–B). It sounds like an octave that just missed: sharp and tense.
- **Minor seventh (m7)**, 10 half steps: a whole step below the octave (C–B♭). Wide, but softer; you'll meet it again inside seventh chords in week 12.

```example
{
  "title": "From C4: minor 7th (C–B♭), major 7th (C–B), octave (C–C)",
  "bpm": 70, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q Bb4:q [C4 Bb4]:h | C4:q B4:q [C4 B4]:h | C4:q C5:q [C4 C5]:h" } ],
  "show": ["keyboard"]
}
```

Next lesson opens sevenths in the ear drill. Today your hands learn them.

```exercise
{
  "id": "e2", "type": "build-interval", "title": "Build the wide intervals",
  "instructions": "Use the tricks: a sixth is a flipped third; a seventh is one or two half steps below the octave.",
  "count": 10, "passScore": 0.7,
  "spec": { "intervals": ["P5", "m6", "M6", "m7", "M7", "P8"], "direction": "asc", "root": "random" }
}
```

```exercise
{
  "id": "e3", "type": "quiz", "title": "Flip check",
  "spec": { "questions": [
    { "q": "A major sixth flips to a…", "choices": ["major third", "minor third", "perfect fourth", "minor sixth"], "answer": 1, "explain": "9 + 3 = 12 half steps; major flips to minor." },
    { "q": "How many half steps in a minor seventh?", "choices": ["9", "10", "11", "12"], "answer": 1, "explain": "An octave (12) minus a whole step (2)." },
    { "q": "C up to B is a…", "choices": ["m7", "M7", "M6", "P8"], "answer": 1, "explain": "One half step short of the octave." },
    { "q": "Played together, which one melts into a single sound?", "choices": ["The fifth", "The octave"], "answer": 1, "explain": "The fifth stays two notes, open and hollow. That's the tell." }
  ] }
}
```
