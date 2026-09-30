---
id: w15-l1-chord-tones-and-non-chord-tones
title: Chord Tones and Non-Chord Tones
week: 15
order: 1
phase: p2
duration_min: 50
goals:
  - Tell chord tones from non-chord tones in a melody over a given chord
  - Recognise passing tones, neighbour tones and the 4–3 suspension
prerequisites: [w14-l3-two-genre-grooves-daw]
tags: [melody, harmony, ear, keyboard]
songs:
  - { title: "Ode to Joy", composer: "Ludwig van Beethoven", public_domain: true }
---

# Chord Tones and Non-Chord Tones

This week joins melody and harmony. Every melody note either belongs to the chord underneath it or it doesn't. A [[chord tone]] agrees with the harmony: it sounds stable. A [[non-chord tone]] creates a little friction that keeps the melody moving. Good melodies use both: chord tones as stepping stones, non-chord tones as the paths between them.

## Strong beats, chord tones

Look at the start of *Ode to Joy* over C and G:

- Bar 1 (C chord: C E G): **E** E **F** G. E and G are chord tones; F isn't, it just walks between E and G.
- Bar 2 (G chord: G B D): **G** F E **D**. G and D are chord tones; F and E fill the gap.

The rule of thumb: strong beats (1 and 3) mostly land on chord tones, and the in-between notes sit on the weak beats.

```example
{
  "title": "Ode to Joy, bars 1–4, with chords",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | E4:q. D4:8 D4:h |" },
    { "instrument": "pad", "seq": "[C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [C3 E3 G3]:h [B2 D3 G3]:h |" }
  ],
  "show": ["staff", "pianoroll"]
}
```

## Passing and neighbour tones

1. A [[passing tone]] steps *between* two different chord tones: E – **F** – G over C.
2. A [[neighbour tone]] steps away from a chord tone and comes *back*: E – **F** – E, or E – **D** – E.

```example
{
  "title": "Over a C chord: passing tone (E–F–G), then neighbour tones (E–F–E, E–D–E)",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "E4:q F4:q G4:h | E4:q F4:q E4:h | E4:q D4:q E4:h" },
    { "instrument": "pad", "seq": "[C3 G3]:w | [C3 G3]:w | [C3 G3]:w" }
  ],
  "show": ["staff", "keyboard"]
}
```

```exercise
{
  "id": "e1", "type": "play-melody", "title": "Passing and neighbour tones over I – IV – V – I",
  "instructions": "Chord tones on beats 1 and 3, non-chord tones in between. Play slowly and name each in-between note: passing or neighbour?",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 72, "timeSig": "4/4", "key": "C", "seq": "E4:q D4:q C4:q D4:q | C4:q B3:q A3:q B3:q | B3:q C4:q D4:q C4:q | C4:w", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "pad", "seq": "[C3 G3]:w | [F2 C3]:w | [G2 D3]:w | [C3 G3]:w" } }
}
```

## Suspensions

A [[suspension]] is a note *held over* from the previous chord while the harmony changes. It clashes for a moment, then falls one step to a chord tone. The classic is the **4–3 suspension**: the chord changes to C, but the melody is still holding F (the 4th above C); then F falls to E (the 3rd). Ache, then release: you hear it at the end of hymns and in countless ballads.

```example
{
  "title": "4–3 suspension: F held from the F chord into C, then falling to E",
  "bpm": 66, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "F4:w~ | F4:h E4:h | F4:w~ | F4:h E4:h" },
    { "instrument": "pad", "seq": "[F2 C3 A3]:w | [C3 G3]:w | [F2 C3 A3]:w | [C3 G3]:w" }
  ],
  "show": ["staff", "keyboard"]
}
```

```exercise
{
  "id": "e2", "type": "play-melody", "title": "Suspensions under your fingers",
  "instructions": "Right hand. Hold the top note while the chord changes underneath, feel the rub, then drop it one step: F to E over C, then C to B over G.",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "[G3 C4 F4]:h [G3 C4 E4]:h | [G3 C4 F4]:h [G3 C4 E4]:h | [G3 C4 D4]:h [G3 B3 D4]:h | [G3 C4 E4]:w", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "bass", "seq": "C2:w | C2:w | G1:w | C2:w" } }
}
```

```exercise
{
  "id": "e4", "type": "quiz", "title": "Name the non-chord tone",
  "spec": { "questions": [
    { "q": "Over C major, the melody goes C – D – E. D is a…", "choices": ["chord tone", "passing tone", "neighbour tone", "suspension"], "answer": 1 },
    { "q": "Over G major, the melody goes B – C – B. C is a…", "choices": ["chord tone", "passing tone", "neighbour tone", "suspension"], "answer": 2 },
    { "q": "The chord changes from F to C, but the melody holds F, then falls to E. F is a…", "choices": ["chord tone", "passing tone", "neighbour tone", "suspension"], "answer": 3 },
    { "q": "Over Am, which of these is a chord tone?", "choices": ["B", "D", "E", "F"], "answer": 2 }
  ] }
}
```

## Ear corner: melodies in any key

This lesson opens the next melody rung: short tunes (degrees 1–5) in a new key each time, the "any key" step your degree drill took in week 11. The drill below runs at your current melody rung, so it may still be an earlier one. When the any-key tunes arrive: listen to the cadence, find home on the keyboard first, then play the tune from there.

```ladder
{ "skill": "melody", "unlocks": 12, "intro": "Opens: four-note tunes (degrees 1–5) in a new key each time. The drill runs at your current melody rung." }
```

In lesson 3 this week, the suspension becomes a chord of its own: the sus chord.
