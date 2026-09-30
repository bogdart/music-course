---
id: w18-l1-chord-tones-and-non-chord-tones
title: Chord Tones and Non-Chord Tones
week: 18
order: 1
phase: p2
duration_min: 50
goals:
  - Tell chord tones from non-chord tones in a melody over a given chord
  - Recognise passing tones, neighbour tones and the 4–3 suspension
  - Hear sus4 and sus2 chords next to a plain major chord
prerequisites: [w17-l3-two-genre-grooves-daw]
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

### Try it: blend or rub

1. Left hand: hold **C and G** low (C3 G3). Right hand: play **E**, then **G**, then **C**. Each one melts into the left hand: chord tones.
2. Keep holding. Play **F**, then **D**. Each one sticks out a little and seems to want to move one key. That slight rub is a non-chord tone.
3. Now play E – F – G over the held C–G, then E – F – E. The F rubs for a moment and the next note settles it. That's all a passing or neighbour tone is: a rub that is settled by a step.

Check: a C chord with one note on top. Blend or rub?

```exercise
{
  "id": "e5", "type": "listen", "title": "Check: blend or rub?",
  "instructions": "Play each pair. Does the top note melt into the chord, or stick out and want to move?",
  "spec": {
    "examples": [
      { "title": "Pair 1", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "pad", "seq": "[C3 E3 G3]:w" }, { "instrument": "piano", "seq": "D5:w" } ] },
      { "title": "Pair 2", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "pad", "seq": "[C3 E3 G3]:w" }, { "instrument": "piano", "seq": "G4:w" } ] }
    ],
    "questions": [
      { "q": "Pair 1: the top note…", "choices": ["blends (chord tone)", "rubs (non-chord tone)"], "answer": 1, "explain": "D over C E G: not in the chord. Play it and let it fall to C or rise to E; the rub goes away." },
      { "q": "Pair 2: the top note…", "choices": ["blends (chord tone)", "rubs (non-chord tone)"], "answer": 0, "explain": "G over C E G: the chord's own 5th. The rub on D is subtle; compare the two pairs back to back." }
    ]
  }
}
```

**If you can't hear it yet:** the rub on a white-key non-chord tone is mild, so don't wait for a clash. Play the chord yourself and add the note: then step it up or down one key. If a neighbour sounds *more* at rest than your note, your note was the non-chord tone. And your eyes can always check: is it one of the chord's three keys?

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

### Try it: make a suspension

1. Play **F A C** (right hand) with **F** low in the left hand. Keep the right hand's top note, change nothing else yet.
2. Move the chord under it to C: left hand **C**, right hand **G C F**, the F still held on top. Hear the ache: F is not in C major.
3. Drop the F one key to **E**. The ache resolves. Try it three times; the moment of release is what you're listening for.

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

## Sus chords: a suspension that stays

Hold the 4–3 suspension's first chord and never resolve it: C G F with C in the bass. That's a chord of its own, **Csus4** (C F G): the 3rd is replaced by the 4th. Replace the 3rd by the 2nd instead and you get **Csus2** (C D G). With no 3rd, a sus chord is neither major nor minor: open, floating, a little unresolved. Pop and rock use them as colour, often resolving to the plain chord.

```example
{
  "title": "C, Csus4, C, then C, Csus2, C",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C3 E3 G3]:h [C3 F3 G3]:h | [C3 E3 G3]:w | [C3 E3 G3]:h [C3 D3 G3]:h | [C3 E3 G3]:w" } ],
  "show": ["keyboard"]
}
```

### Try it: move the middle finger

1. Hold C E G. Move E up to F (sus4) and back. Then E down to D (sus2) and back.
2. Sus4 leans: the F wants to fall to E, just like the suspension. Sus2 floats: it's calm, spacious, and doesn't need to go anywhere.
3. Eyes closed: play C, Csus4 or Csus2, name it before you look.

**If you can't hear it yet:** after the chord, play its root and then E-then-F-then-D over it yourself (on C; on another root, its 3rd, 4th and 2nd). The one that sounds already *inside* the chord shows which it was. A sus4 usually "wants" to resolve down; if your ear wants to fall by a step, suspect sus4.

**Before the drill, rehearse the method** (in the *How to do it* box above the drill): first "major, or no clear colour?" If it's neither bright nor dark, it's sus; then lean (sus4) or float (sus2). The drill runs at your current chord rung.

```ladder
{ "skill": "chords", "unlocks": 10, "intro": "Opens \"Major or sus4\" and \"Major, sus2 or sus4\"; the drill runs at your current rung." }
```

## Ear corner: the sevenths

Last week's boom-bap loop used Am7 and Fmaj7. Their outer notes are the two sevenths from week 12: A up to G (minor 7th, one whole step short of the octave) and F up to E (major 7th, a half step short). Today's interval rung is **m7, M7 or octave?**

1. Play A3 → G4, A3 → G♯4, A3 → A4. Then from F3: E♭4, E4, F4.
2. Method: from the first note, find its octave; is the question's second note the octave itself, a hair short (M7, it almost arrives) or clearly short (m7, a bluesy open gap)?

**If you can't hear it yet:** after the question, play its first note and its octave yourself, then the two sevenths below that octave, and pick the one that matches the replay.

```ladder
{ "skill": "intervals", "unlocks": 11, "intro": "Opens \"7ths and the octave\"; the drill runs at your current interval rung." }
```

## Between lessons

- **3 minutes:** hold C–G in the left hand, play random white keys in the right; say "blend" or "rub" before you check whether the key is C, E or G.
- **2 minutes:** the 4–3 suspension (F held from F major into C, falling to E), then the same in G: C held over G, falling to B.
- **2 minutes:** on C, F and G: major → sus4 → major → sus2 → major, eyes closed the second time.
- **1 minute:** m7, M7 and octave from three random notes.
- One chords session and one intervals session on the Practice page.

In lesson 3 this week, sus chords become harmony for your own melody.
