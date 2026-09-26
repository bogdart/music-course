---
id: w15-l1-chord-tones-and-non-chord-tones
title: Chord Tones and Non-Chord Tones
week: 15
order: 1
phase: p2
duration_min: 45
goals:
  - Tell chord tones from non-chord tones in a melody over a given chord
  - Recognise passing tones, neighbour tones and suspensions
  - Play and hear a 4–3 suspension resolving
prerequisites: [w14-l3-three-genre-grooves-daw]
tags: [melody, harmony, ear, keyboard]
songs:
  - { title: "Ode to Joy", composer: "Ludwig van Beethoven", public_domain: true }
---

# Chord Tones and Non-Chord Tones

This week joins your two big skills: melody and harmony. Every melody note either belongs to the chord underneath it or it doesn't. A [[chord tone]] is stable — it agrees with the harmony. A [[non-chord tone]] creates a little friction that makes melody move. Good melodies use both: chord tones as stepping stones, non-chord tones as the paths between them.

## Rule of thumb: strong beats, chord tones

Look at the first two bars of *Ode to Joy* over C and G:

- Bar 1 (C chord: C E G): **E** E **F** G. E and G are chord tones; F is not — it just walks between E and G.
- Bar 2 (G chord: G B D): **G** F E **D**. G and D are chord tones; F and E fill the gap.

Strong beats (1 and 3) mostly land on chord tones; weak beats carry the in-between notes.

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

## Three kinds of non-chord tone

1. **Passing tone** — steps *between* two different chord tones: E – **F** – G.
2. **Neighbour tone** — steps away from a chord tone and *back*: E – **F** – E, or E – **D** – E.
3. **[[Suspension]]** — a note from the previous chord is *held* while the harmony changes, clashes, then resolves down by step. The classic is the **4–3 suspension**: over C, hold F (the 4th), then fall to E (the 3rd). It's the ache-and-release you hear at the end of hymns and in countless ballads ("sus4" chords).

```example
{
  "title": "Passing tone, neighbour tone, then a 4–3 suspension (F held over C, falls to E)",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "E4:q F4:q G4:h | E4:q F4:q E4:h | F4:w~ | F4:h E4:h" },
    { "instrument": "pad", "seq": "[C3 G3]:w | [C3 G3]:w | [F2 C3 A3]:w | [C3 G3]:w" }
  ],
  "show": ["staff", "keyboard"]
}
```

```exercise
{
  "id": "e1", "type": "quiz", "title": "Name the non-chord tone",
  "spec": { "questions": [
    { "q": "Over C major, the melody goes C – D – E. D is a…", "choices": ["chord tone", "passing tone", "neighbour tone", "suspension"], "answer": 1 },
    { "q": "Over G major, the melody goes B – C – B. C is a…", "choices": ["chord tone", "passing tone", "neighbour tone", "suspension"], "answer": 2 },
    { "q": "The chord changes from F to C, but the melody holds F, then falls to E. F is a…", "choices": ["chord tone", "passing tone", "neighbour tone", "suspension"], "answer": 3 },
    { "q": "Over Am, which of these is a chord tone?", "choices": ["B", "D", "E", "F"], "answer": 2 },
    { "q": "Non-chord tones usually fall on…", "choices": ["strong beats", "weak beats"], "answer": 1, "explain": "Except suspensions — they deliberately put the clash on the strong beat." }
  ] }
}
```

```exercise
{
  "id": "e2", "type": "play-melody", "title": "Suspensions under your fingers",
  "instructions": "Right hand. Hold the top finger while the other two stay put — feel the rub — then drop it one step: F to E over C, C to B over G.",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "[G3 C4 F4]:h [G3 C4 E4]:h | [G3 C4 F4]:h [G3 C4 E4]:h | [G3 C4 D4]:h [G3 B3 D4]:h | [G3 C4 E4]:w", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "bass", "seq": "C2:w | C2:w | G1:w | C2:w" } }
}
```

```exercise
{
  "id": "e3", "type": "ear-chord", "title": "Suspended or resolved?",
  "instructions": "sus4 = the 3rd is replaced by the 4th: open, unfinished. Major = resolved.",
  "count": 10, "passScore": 0.75,
  "spec": { "qualities": ["sus4", "maj", "sus2"], "inversions": [0], "voicing": "close", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e4", "type": "ear-note", "title": "Chord tone or not?",
  "instructions": "After the cadence, one note plays. Name the degree — then say 'stable' (a note of the I chord: 1, 3, 5) or 'moving' (2, 4, 6).",
  "count": 10, "passScore": 0.7,
  "spec": { "key": "random", "mode": "major", "degrees": [1, 2, 3, 4, 5, 6], "reference": "cadence", "octaves": [4], "instrument": "piano" }
}
```

```exercise
{
  "id": "e5", "type": "play-melody", "title": "Passing and neighbour tones over I – IV – V – I",
  "instructions": "Chord tones on beats 1 and 3, non-chord tones in between. Name each one as you play it slowly.",
  "count": 6, "passScore": 0.7,
  "spec": { "bpm": 72, "timeSig": "4/4", "key": "C", "seq": "E4:q D4:q C4:q D4:q | C4:q B3:q A3:q B3:q | B3:q C4:q D4:q C4:q | C4:w", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "pad", "seq": "[C3 G3]:w | [F2 C3]:w | [G2 D3]:w | [C3 G3]:w" } }
}
```

```exercise
{
  "id": "e6", "type": "ear-melody", "title": "Stepwise lines, play them back",
  "count": 8, "passScore": 0.7,
  "spec": { "key": "random", "degrees": [1, 2, 3, 4, 5], "length": 4, "rhythm": "quarters", "answer": "play" }
}
```
