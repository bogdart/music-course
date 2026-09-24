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
  - Harmonise "Twinkle, Twinkle" and an original 8-bar melody in the DAW
prerequisites: [w15-l2-contour-and-phrasing]
tags: [harmony, melody, harmonisation, daw]
songs:
  - { title: "Twinkle, Twinkle, Little Star", composer: "Traditional (French melody 'Ah! vous dirai-je, maman')", public_domain: true }
---

# Harmonising a Melody

So far you've written melodies *over* chords. Today, the reverse: given a melody, find the chords. This is what arrangers, accompanists and songwriters do constantly — and it's the mirror image of analysing a song by ear.

## The method

1. **Find the strong-beat notes** (beats 1 and 3 in 4/4).
2. **List chords that contain them.** In C major with I, IV, V (and vi, ii as spice):
   C → C, F or Am · D → G or Dm · E → C or Am · F → F or Dm (or G7) · G → C or G · A → F, Am or Dm · B → G.
3. **Pick the one that tells the story**: start on I, head toward V at the half-way point, end V → I.
4. **Choose the [[harmonic rhythm]]** — how often chords change. One per bar is calm; two per bar pushes forward. Speed it up near cadences.

Try it on a tune you know.

```example
{
  "title": "Twinkle, Twinkle, Little Star (traditional) — melody alone",
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
    { "q": "Bar 5, beats 3–4: F F, heading back to E. Best chord?", "choices": ["C", "G7", "Am"], "answer": 1, "explain": "F is the 7th of G7, and it resolves down to E — just like the tritone in week 12." },
    { "q": "Bar 4 ends on C. Best chord?", "choices": ["C", "G", "F"], "answer": 0 }
  ] }
}
```

Here's one good answer — compare it with yours:

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

There is no single right answer. Bar 1 could be C – Am instead of a whole bar of C; bar 5 could use Em under the G. Each choice is a different *reading* of the melody: more major chords sound brighter and simpler, more minor chords sound more tender. What matters is that strong-beat notes belong to the chord, and that the phrase ends are clear — V at the half-way point, V → I at the end. Twinkle is easy because each half bar repeats one note. Most melodies also have passing and neighbour tones on weak beats (lesson 1): don't give those their own chord — harmonise the strong beats and let the rest pass through.

```exercise
{
  "id": "e2", "type": "play-melody", "title": "Twinkle, hands together",
  "instructions": "Left hand plays the chord root (C, F or G) on beats 1 and 3; right hand plays the melody. Say the chord names as the left hand moves.",
  "count": 6, "passScore": 0.7,
  "spec": { "bpm": 72, "timeSig": "4/4", "key": "C", "seq": "[C3 C4]:q C4:q G4:q G4:q | [F3 A4]:q A4:q [C3 G4]:h | [F3 F4]:q F4:q [C3 E4]:q E4:q | [G2 D4]:q D4:q [C3 C4]:h", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e3", "type": "ear-progression", "title": "Hear the harmonisation",
  "instructions": "I, IV or V? Follow the bass.",
  "count": 8, "passScore": 0.75,
  "spec": { "key": "C", "mode": "major", "length": 4, "chords": ["I", "IV", "V"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "e4", "type": "build-chord", "title": "Which chords contain this note?",
  "instructions": "Build the chord named — then check: is the melody note C in it?",
  "count": 6, "passScore": 0.8,
  "spec": { "chords": ["C", "F", "Am", "G", "Dm", "Em"], "root": "given", "prompt": "roman", "key": "C" }
}
```

## Make it

```exercise
{
  "id": "e5", "type": "daw-task", "title": "Harmonise Twinkle",
  "spec": {
    "template": { "bpm": 96, "key": "C", "timeSig": "4/4", "tracks": [
      { "instrument": "lead", "seq": "C4:q C4:q G4:q G4:q | A4:q A4:q G4:h | F4:q F4:q E4:q E4:q | D4:q D4:q C4:h | G4:q G4:q F4:q F4:q | E4:q E4:q D4:h | G4:q G4:q F4:q F4:q | E4:q E4:q D4:h | C4:q C4:q G4:q G4:q | A4:q A4:q G4:h | F4:q F4:q E4:q E4:q | D4:q D4:q C4:h" },
      { "instrument": "piano", "seq": "" },
      { "instrument": "bass", "seq": "" } ] },
    "task": "The melody is on the lead track. Add chords on the piano (one or two per bar, your choice — try at least one IV and one V7), and chord roots on the bass. Rule: on beats 1 and 3, the melody note must be in your chord. Try a vi (Am) somewhere for a surprise colour. Self-check by soloing melody + piano: any sour notes on strong beats?",
    "checks": [
      { "kind": "has-tracks", "instruments": ["lead", "piano", "bass"] },
      { "kind": "bars", "min": 12, "max": 12 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 1 },
      { "kind": "range", "low": "C2", "high": "C3", "track": 2 },
      { "kind": "custom", "id": "melody-in-chord-on-strong-beats", "note": "Self-check: on beats 1 and 3 the melody note belongs to the piano chord." }
    ],
    "minBars": 12, "maxBars": 12
  }
}
```

```exercise
{
  "id": "e6", "type": "daw-task", "title": "Original melody, then harmonise it",
  "spec": {
    "template": { "bpm": 90, "key": "C", "timeSig": "4/4", "tracks": [
      { "instrument": "lead", "seq": "" }, { "instrument": "piano", "seq": "" }, { "instrument": "bass", "seq": "" } ] },
    "task": "Write your own 8-bar melody in C major as a question (bars 1–4, ending on 2 or 5) and an answer (bars 5–8, ending on 1). Give it an arch shape with one clear high point. Use at least one passing tone and one neighbour tone. Then harmonise it with I, IV, V (and vi, ii if you like), bass on roots.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["lead", "piano", "bass"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 0 },
      { "kind": "contour", "shape": "arch", "track": 0 },
      { "kind": "max-leap", "semitones": 7, "track": 0 },
      { "kind": "uses-rhythm", "values": ["h", "q", "8"], "minDistinct": 2, "track": 0 },
      { "kind": "ends-on", "degree": 1, "track": 0 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 1 },
      { "kind": "custom", "id": "question-answer", "note": "Self-check: bar 4 ends on degree 2 or 5; bar 8 ends on 1 over I." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```
