---
id: w15-l3-harmonising-melodies-daw
title: Harmonising a Melody
week: 15
order: 3
phase: p2
duration_min: 50
goals:
  - Choose chords for a melody by matching chord tones on strong beats
  - Decide how often the chord changes (harmonic rhythm)
  - Build sus2 and sus4 chords and hear them against a plain major chord
  - Harmonise "Twinkle, Twinkle" in the DAW with chords and a bass line
prerequisites: [w15-l2-contour-and-phrasing]
tags: [harmony, melody, harmonisation, daw]
songs:
  - { title: "Twinkle, Twinkle, Little Star", composer: "Traditional (French melody 'Ah! vous dirai-je, maman')", public_domain: true }
---

# Harmonising a Melody

So far you've written melodies *over* chords. Today, the reverse: given a melody, find the chords. Accompanists, arrangers and songwriters do this constantly, and it's the mirror image of working out a song's chords by ear.

## The method

1. **Find the strong-beat notes** (beats 1 and 3 in 4/4).
2. **List the chords that contain them.** In C major, with I, IV and V as the main chords and vi and ii as extra colours:
   C → C, F or Am · D → G or Dm · E → C or Am · F → F or Dm (or G7) · G → C or G · A → F, Am or Dm · B → G.
3. **Pick the chord that tells the story**: start on I, head for V at the half-way point, end V → I.
4. **Choose the [[harmonic rhythm]]**, how often the chord changes. One chord per bar is calm; two per bar pushes forward. Speeding up near the cadence is common.

Non-chord tones on weak beats (passing and neighbour tones, lesson 1) don't need their own chord: harmonise the strong beats and let the rest pass through.

Try it on a tune you know:

```example
{
  "title": "Twinkle, Twinkle, Little Star (traditional): melody alone",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q C4:q G4:q G4:q | A4:q A4:q G4:h | F4:q F4:q E4:q E4:q | D4:q D4:q C4:h | G4:q G4:q F4:q F4:q | E4:q E4:q D4:h | G4:q G4:q F4:q F4:q | E4:q E4:q D4:h | C4:q C4:q G4:q G4:q | A4:q A4:q G4:h | F4:q F4:q E4:q E4:q | D4:q D4:q C4:h" } ],
  "show": ["staff"]
}
```

```exercise
{
  "id": "e1", "type": "quiz", "title": "Choose the chord",
  "instructions": "Chords change every half bar (two beats).",
  "spec": { "questions": [
    { "q": "Bar 2, beats 1–2: A A. Best chord?", "choices": ["C", "F", "G"], "answer": 1, "explain": "A is in F (F A C), not in C or G." },
    { "q": "Bar 3, beats 1–2: F F. Best chord?", "choices": ["C", "F", "Am"], "answer": 1 },
    { "q": "Bar 4, beats 1–2: D D. Best chord?", "choices": ["C", "F", "G"], "answer": 2 },
    { "q": "Bar 5, beats 3–4: F F, heading back to E. Best chord?", "choices": ["C", "G7", "Am"], "answer": 1, "explain": "F is the 7th of G7, and it falls to E: the tritone squeeze from week 12." },
    { "q": "Bar 4 ends on C. Best chord?", "choices": ["C", "G", "F"], "answer": 0 }
  ] }
}
```

Here's one good answer. Compare it with yours:

```example
{
  "title": "Twinkle harmonised: two chords per bar where the melody asks for it",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "C4:q C4:q G4:q G4:q | A4:q A4:q G4:h | F4:q F4:q E4:q E4:q | D4:q D4:q C4:h | G4:q G4:q F4:q F4:q | E4:q E4:q D4:h | G4:q G4:q F4:q F4:q | E4:q E4:q D4:h" },
    { "instrument": "pad", "seq": "[C3 E3 G3]:w | [C3 F3 A3]:h [C3 E3 G3]:h | [C3 F3 A3]:h [C3 E3 G3]:h | [B2 D3 G3]:h [C3 E3 G3]:h | [C3 E3 G3]:h [B2 F3 G3]:h | [C3 E3 G3]:h [B2 D3 G3]:h | [C3 E3 G3]:h [B2 F3 G3]:h | [C3 E3 G3]:h [B2 D3 G3]:h" }
  ],
  "show": ["staff", "pianoroll"]
}
```

There's no single right answer. Bar 1 could be C then Am; bar 6 could use Am under the E. Each choice is a different *reading* of the melody: more major chords sound brighter and simpler, more minor chords more tender. What matters is that the strong-beat notes belong to the chord and that the phrase ends are clear.

```exercise
{
  "id": "e2", "type": "play-melody", "title": "Twinkle, hands together",
  "instructions": "Left hand plays the chord root (C, F or G) with beats 1 and 3; right hand plays the melody. Say the chord names as the left hand moves.",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 72, "timeSig": "4/4", "key": "C", "seq": "[C3 C4]:q C4:q [C3 G4]:q G4:q | [F3 A4]:q A4:q [C3 G4]:h | [F3 F4]:q F4:q [C3 E4]:q E4:q | [G2 D4]:q D4:q [C3 C4]:h", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e3", "type": "build-chord", "title": "Chords of C by numeral",
  "instructions": "Build each chord from its numeral in C major. Then ask: does it contain the note C? (I, IV and vi do.)",
  "count": 6, "passScore": 0.7,
  "spec": { "chords": ["C", "F", "Am", "G", "Dm", "Em"], "root": "given", "prompt": "roman", "key": "C" }
}
```

## A new colour: sus chords

In lesson 1 a suspension was a *melody* note held over the chord change, then falling to a chord tone. Pop and rock often use that suspended sound as a chord in its own right: a **sus chord** ([[suspended chord]]) replaces the triad's 3rd with a neighbour.

- **sus4**: the 3rd moves *up* to the 4th. Csus4 = C F G. The 4th sits a half step above the 3rd it replaced, so it leans back down: open, unfinished, waiting.
- **sus2**: the 3rd moves *down* to the 2nd. Csus2 = C D G. Lighter and airier; it often just floats without resolving.

With no 3rd, neither chord is major or minor. For harmonising, a sus4 → major on the last chord of a phrase is a gentle way to stretch a cadence. Listen to each against plain C:

```example
{
  "title": "C, Csus4, C, then C, Csus2, C",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:h [C4 F4 G4]:h | [C4 E4 G4]:w | [C4 E4 G4]:h [C4 D4 G4]:h | [C4 E4 G4]:w" } ],
  "show": ["keyboard"]
}
```

```exercise
{
  "id": "e5", "type": "build-chord", "title": "Build sus chords",
  "instructions": "Start from the major triad and replace its 3rd: up a half step for sus4, down a whole step for sus2.",
  "count": 6, "passScore": 0.7,
  "spec": { "chords": ["Csus4", "Csus2", "Gsus4", "Gsus2", "Fsus2", "Dsus4"], "root": "given", "prompt": "symbol" }
}
```

## Ear: chord colours and a review

This lesson opens two chord-colour rungs, one at a time: first major or sus4, then major, sus2 or sus4. The drill runs at your current chord rung, so it may still be an earlier one. Then a progression review at your level: harmonising and hearing chords are two sides of one skill.

```ladder
{ "skill": "chords", "unlocks": 9, "intro": "Opens: major or sus4; then major, sus2 or sus4." }
```

```ladder
{ "skill": "progressions", "unlocks": 8, "intro": "Name the chords by their role in the key." }
```

## Make it: harmonise Twinkle

This fits one session if you keep the chords simple. Want more? Next session, write your own 8-bar question-and-answer melody and harmonise it the same way.

```exercise
{
  "id": "e4", "type": "daw-task", "title": "Harmonise Twinkle",
  "spec": {
    "template": { "bpm": 96, "key": "C", "timeSig": "4/4", "tracks": [
      { "instrument": "lead", "seq": "C4:q C4:q G4:q G4:q | A4:q A4:q G4:h | F4:q F4:q E4:q E4:q | D4:q D4:q C4:h | G4:q G4:q F4:q F4:q | E4:q E4:q D4:h | G4:q G4:q F4:q F4:q | E4:q E4:q D4:h | C4:q C4:q G4:q G4:q | A4:q A4:q G4:h | F4:q F4:q E4:q E4:q | D4:q D4:q C4:h" },
      { "instrument": "piano", "seq": "" },
      { "instrument": "bass", "seq": "" } ] },
    "task": "The melody is on the lead track. Add chords on the piano (one or two per bar, your choice; use at least one IV and one V7) and chord roots on the bass between C2 and C3. Rule: on beats 1 and 3 the melody note must belong to your chord. Try a vi (Am) somewhere for a surprise colour. Then solo melody + piano: any sour notes on strong beats?",
    "checks": [
      { "kind": "has-tracks", "instruments": ["lead", "piano", "bass"] },
      { "kind": "bars", "min": 12, "max": 12 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 1 },
      { "kind": "chord-has-seventh", "min": 1, "track": 1 },
      { "kind": "range", "low": "C2", "high": "C3", "track": 2 },
      { "kind": "custom", "id": "melody-in-chord-on-strong-beats", "note": "Self-check: on beats 1 and 3 the melody note belongs to the piano chord." }
    ],
    "minBars": 12, "maxBars": 12
  }
}
```
