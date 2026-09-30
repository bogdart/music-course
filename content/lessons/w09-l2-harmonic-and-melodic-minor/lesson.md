---
id: w09-l2-harmonic-and-melodic-minor
title: Harmonic and Melodic Minor — the Major V in a Minor Key
week: 9
order: 2
phase: p2
duration_min: 45
goals:
  - Hear minor v and major V side by side and explain the raised 7th (G♯ in A minor)
  - Play A harmonic minor and the chords i – iv – V – i in A minor
  - Tell natural, harmonic and melodic minor apart
prerequisites: [w09-l1-natural-minor-and-relative-keys]
tags: [minor, scales, dominant, ear]
songs:
  - { title: "Für Elise (opening)", composer: "Ludwig van Beethoven", public_domain: true }
---

# Harmonic and Melodic Minor

Last lesson's minor cadence had a stranger in it: a G♯ in A minor. Today you'll hear why it's there, and meet the two minor scales that include it.

## v or V: the weak pull and the strong pull

In C major, the V chord (G B D) contains B, the [[leading tone]]: a half step below C, it leans up into home. That lean is a big part of why V → I sounds finished.

A natural minor has no such note. Its 7th degree is G, a *whole* step below A. Build a triad on degree 5 and you get **E minor** (E G B), written **v** (lower case, minor). Raise the G to **G♯** and the chord becomes **E major** (E G♯ B), written **V**. Listen to both endings:

```example
{
  "title": "v – i (E minor to A minor), then V – i (E major to A minor)",
  "bpm": 66, "timeSig": "4/4", "key": "Am",
  "tracks": [
    { "instrument": "piano", "seq": "[A3 C4 E4]:h [G3 B3 E4]:h | [A3 C4 E4]:w | r:w | [A3 C4 E4]:h [G#3 B3 E4]:h | [A3 C4 E4]:w" },
    { "instrument": "piano", "seq": "A2:h E2:h | A2:w | r:w | A2:h E2:h | A2:w" }
  ],
  "show": ["keyboard"]
}
```

What most people hear: the first ending is soft and a bit vague, the second one *arrives*. The only difference is one note, G or G♯.

### Try it: G or G♯ before home

1. Play **G then A**, then **G♯ then A**. The G♯ almost touches A and slides into it; the G steps up with air in between.
2. Play the E minor chord (E G B), then Am. Then E major (E G♯ B), then Am. Hold the second chord of each pair and ask: did it *arrive*?
3. Play the cadence below with the G♯, then check with your ears in the listening exercise after it.

```exercise
{
  "id": "e1", "type": "play-chord", "title": "i – iv – V – i in A minor",
  "instructions": "Am, Dm, E, Am. Keep your hand in one place: move each finger to the nearest note of the next chord. The G♯ is the black key just below A.",
  "count": 4, "passScore": 0.7,
  "spec": { "chords": ["Am", "Dm", "E", "Am"], "inversion": "any", "sequence": true, "bpm": 60, "key": "Am" }
}
```

```exercise
{
  "id": "e2", "type": "listen", "title": "Which ending has the G♯?",
  "instructions": "Listen to both endings before you answer.",
  "spec": {
    "examples": [
      { "title": "Ending A", "bpm": 66, "timeSig": "4/4", "key": "Am", "hidden": true,
        "tracks": [ { "instrument": "piano", "seq": "[A3 C4 E4]:h [A3 D4 F4]:h | [G#3 B3 E4]:h [A3 C4 E4]:h" } ] },
      { "title": "Ending B", "bpm": 66, "timeSig": "4/4", "key": "Am", "hidden": true,
        "tracks": [ { "instrument": "piano", "seq": "[A3 C4 E4]:h [A3 D4 F4]:h | [G3 B3 E4]:h [A3 C4 E4]:h" } ] }
    ],
    "questions": [
      { "q": "Which ending uses the major V (with G♯)?", "choices": ["Ending A", "Ending B"], "answer": 0, "explain": "Ending A goes Am – Dm – E – Am (G♯ rising to A). Ending B uses E minor (G falling or staying), so it lands more softly." }
    ]
  }
}
```

**If you can't hear it yet:** don't judge the whole ending. Replay it and, right after, play the last two chords yourself both ways: E G B → A C E, then E G♯ B → A C E. Which pair did it match? Or listen only to the top-ish line going into the last chord: a tiny slide (G♯ → A) or a clear step (G → A)?

## Harmonic minor: the scale with the raised 7th

Put the G♯ into the scale itself and you get the [[harmonic minor]]: **1 2 ♭3 4 5 ♭6 7**. The 7 has no flat now: it's the same leading tone as in major. Notice the gap between F and G♯: three half steps, wider than any step in major or natural minor. That gap gives harmonic minor its "exotic" colour.

```example
{
  "title": "A natural minor, then A harmonic minor (listen to the top: G→A, then G♯→A)",
  "bpm": 90, "timeSig": "4/4", "key": "Am",
  "tracks": [ { "instrument": "piano", "seq": "A3:q B3:q C4:q D4:q | E4:q F4:q G4:q A4:q | r:w | A3:q B3:q C4:q D4:q | E4:q F4:q G#4:q A4:q" } ],
  "show": ["staff", "keyboard"]
}
```

```exercise
{
  "id": "e3", "type": "play-scale", "title": "A harmonic minor",
  "instructions": "Same as natural minor, but G♯ instead of G. Feel the wide F – G♯ stretch.",
  "count": 1, "passScore": 0.7,
  "spec": { "root": "A", "scale": "harmonic-minor", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 60, "metronome": true }
}
```

## Melodic minor: smoothing the climb

When a melody climbs up to the tonic, that F – G♯ gap can sound awkward, so composers often raise degree 6 as well (F → F♯). That's the [[melodic minor]]: **1 2 ♭3 4 5 6 7** going up. Coming down, the leading tone isn't needed, so melodies traditionally fall back through natural minor (G, F).

```example
{
  "title": "A melodic minor: up with F♯ and G♯, down with G and F",
  "bpm": 90, "timeSig": "4/4", "key": "Am",
  "tracks": [ { "instrument": "piano", "seq": "A3:q B3:q C4:q D4:q | E4:q F#4:q G#4:q A4:q | A4:q G4:q F4:q E4:q | D4:q C4:q B3:q A3:h" } ],
  "show": ["staff", "keyboard"]
}
```

The three minors differ only in their top notes: A B C D E stays the same in all three.

### Try it: three tops on the same bottom

1. Play **E F G A** (natural), **E F G♯ A** (harmonic), **E F♯ G♯ A** (melodic, going up). Only these four notes matter.
2. Play each top twice and give it a word: natural = plain steps, harmonic = a limp (the wide F – G♯ gap), melodic = smooth, almost like major.
3. Play one at random with your eyes closed and name it before you look.

```exercise
{
  "id": "e5", "type": "listen", "title": "Check: which minor?",
  "instructions": "Each run goes up A minor. Listen to the last four notes, then answer.",
  "spec": {
    "examples": [
      { "title": "Run 1", "bpm": 90, "timeSig": "4/4", "key": "Am", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "A3:q B3:q C4:q D4:q | E4:q F4:q G#4:q A4:q" } ] },
      { "title": "Run 2", "bpm": 90, "timeSig": "4/4", "key": "Am", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "A3:q B3:q C4:q D4:q | E4:q F4:q G4:q A4:q" } ] }
    ],
    "questions": [
      { "q": "Run 1 is…", "choices": ["natural minor", "harmonic minor"], "answer": 1, "explain": "Harmonic: E F G♯ A, with the wide limp from F to G♯." },
      { "q": "Run 2 is…", "choices": ["natural minor", "harmonic minor"], "answer": 0, "explain": "Natural: E F G A, plain steps all the way, the last one a whole step." }
    ]
  }
}
```

**If you can't hear it yet:** after the run, play the three tops yourself (E F G A, E F G♯ A, E F♯ G♯ A) and pick the one that matches. If all three blur, compare only the last step: whole step into A (natural) or a half-step slide (harmonic and melodic)? Then, for those two: was there a limp just before it (harmonic)?

This lesson opens two scale rungs: natural vs harmonic first, then all three.

**Before the drill, rehearse the method** (also in the *How to do it* box above the drill, for the rung you're on): let the run play, ignore the bottom, listen to the top four notes. Exotic jump near the top → harmonic; sounds like major at the top → melodic; plain → natural. When unsure, play the three tops on your keyboard and match. The drill runs at your current scales rung, so these come once major vs minor is solid.

```ladder
{ "skill": "scales", "unlocks": 4, "intro": "Opens \"Natural or harmonic minor\" and \"Three minors\"; the drill runs at your current rung." }
```

## Where you've heard it: Für Elise

Beethoven's *Für Elise* is in A minor. It starts with a famous wobble between E and D♯. D♯ isn't in A minor: it's a quick decoration, a half step below E that bounces straight back up (week 15 names these notes). Then, in bar 4, the melody climbs **E – G♯ – B**: the notes of E major, the V chord, with the G♯ leading back into A. Beethoven wrote it in 3/8 with shorter notes; here it's written in 3/4 with eighth notes, which sounds exactly the same.

```example
{
  "title": "Für Elise, opening (Beethoven, public domain), written in 3/4",
  "bpm": 100, "timeSig": "3/4", "key": "Am",
  "tracks": [
    { "instrument": "piano", "seq": "r:h E5:8 D#5:8 | E5:8 D#5:8 E5:8 B4:8 D5:8 C5:8 | A4:q r:8 C4:8 E4:8 A4:8 | B4:q r:8 E4:8 G#4:8 B4:8 | C5:q r:8 E4:8 E5:8 D#5:8 | E5:8 D#5:8 E5:8 B4:8 D5:8 C5:8 | A4:q r:8 C4:8 E4:8 A4:8 | B4:q r:8 E4:8 C5:8 B4:8 | A4:h. |" },
    { "instrument": "piano", "seq": "r:h. | r:h. | A2:8 E3:8 A3:8 r:8 r:q | E2:8 E3:8 G#3:8 r:8 r:q | A2:8 E3:8 A3:8 r:8 r:q | r:h. | A2:8 E3:8 A3:8 r:8 r:q | E2:8 E3:8 G#3:8 r:8 r:q | A2:h. |" }
  ],
  "show": ["pianoroll"]
}
```

```exercise
{
  "id": "e4", "type": "play-melody", "title": "Für Elise, first phrase, slowly",
  "instructions": "Right hand. Shift your keyboard up an octave if it stops at C5. Accuracy first, speed later.",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 72, "timeSig": "3/4", "key": "Am", "seq": "r:h E5:8 D#5:8 | E5:8 D#5:8 E5:8 B4:8 D5:8 C5:8 | A4:q r:8 C4:8 E4:8 A4:8 | B4:q r:8 E4:8 G#4:8 B4:8 | C5:h. |", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

## Degrees in minor

This lesson opens two degree rungs in A minor, both set up by the minor cadence from last lesson (i – iv – V – i). First degrees 1 to 5: 1 is A, ♭3 is C, 5 is E. In minor, 3 is always the ♭3, so the drill's buttons just say 3. Then all seven. One thing to know for that one: the drill asks about the notes of **natural** minor, so degree 7 is **G**, a whole step below A. The cadence still uses G♯ to set home, so the question's G will sound lower and less pushy than the G♯ you heard above. Degree 6 is F, a half step above 5. After each answer, 6 and 7 walk up to the high A, the others walk down to A.

### Try it: walking home in A minor

1. Play the cadence Am – Dm – E – Am, then play **A** alone. That's 1.
2. Play C, then walk down to A: C – B – A. Two steps = 3. Play E and walk down: E D C B A = 5.
3. Play G, then A: 7 steps up into home. Play F, then G, then A: that's how 6 walks home in the drill. Then play F, then E: notice F also likes to sink onto 5.
4. Play any white key between A3 and A4, and name its degree by counting white keys up from A (A = 1).

**If you can't hear it yet:** find the question note on the keyboard first (search with higher/lower from A), then count keys up from A: A B C D E F G = 1 2 3 4 5 6 7. The keyboard answer is always allowed; the feeling of each degree grows from doing this many times.

**Before the drill, rehearse the method** (also in the *How to do it* box): hold the cadence's last low note (A) in your head, walk from the question note down to it and count the steps; if unsure, find the key and count from A. The drill runs at your current degree rung: you'll meet minor once all seven degrees in C major are solid, and the change of home will feel strange at first, just as G did in week 7.

```ladder
{ "skill": "degrees", "unlocks": 14, "intro": "Opens \"Minor: 1 to 5\" and \"Minor: all seven\" (A minor, natural 7th = G); the drill runs at your current rung." }
```

## Between lessons

- **3 minutes, daily:** the three minor tops (E F G A / E F G♯ A / E F♯ G♯ A), eyes closed, random order, name each.
- **2 minutes:** Am – Dm – E – Am, then Am – Dm – Em – Am: say which one lands.
- **3 minutes:** Für Elise, first phrase, slowly; notice the G♯ on the way back to A.
- One Practice-page session if you have time: scales and degrees at your rung.
