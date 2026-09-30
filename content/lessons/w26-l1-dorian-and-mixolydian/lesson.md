---
id: w26-l1-dorian-and-mixolydian
title: "One Changed Note: Mixolydian and Dorian"
week: 26
order: 1
phase: p3
duration_min: 45
goals:
  - Build Mixolydian (major with a flat 7th) and Dorian (natural minor with a raised 6th) on any root
  - Hear the flat 7 as a single scale degree, then a scale against its plain major or minor twin on the same root
  - Play a Mixolydian scale and a Dorian tune (Drunken Sailor)
prerequisites: [w25-l3-riff-and-solo-daw]
tags: [modes, dorian, mixolydian, scales, ear]
songs:
  - { title: "Drunken Sailor", composer: "Traditional", public_domain: true }
  - { title: "Sweet Home Alabama", composer: "Van Zant, King, Rossington (Lynyrd Skynyrd, 1974)", public_domain: false }
  - { title: "Oye Como Va", composer: "Tito Puente (Santana recording, 1970)", public_domain: false }
---

# One Changed Note: Mixolydian and Dorian

Last week the blues gave you your first note from outside the major scale, the ♭3 — and, hidden inside every dominant 7th, a second one: the B♭ of C7. This week that idea grows into four [[mode]]s. Forget the textbook definition for now; for writing songs, a mode is simply **major or natural minor with one note changed**. That changed note is the [[characteristic tone]]. Today: two modes, one changed note each — starting with the blues' B♭.

## Mixolydian = major with a flat 7

Take C major and lower the 7th (B) by a half step to B♭ — the ♭7 of C7 in last week's blues. That's C [[Mixolydian]]: C D E F G A **B♭** C. A 12-bar blues over C7 already *sounds* half Mixolydian. Listen to the twins on the same root:

```example
{
  "title": "C major, then C Mixolydian (only the 7th differs)",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q F4:q | G4:q A4:q B4:q C5:q | r:w | C4:q D4:q E4:q F4:q | G4:q A4:q Bb4:q C5:q" } ],
  "show": ["staff", "keyboard"]
}
```

Be honest with yourself: seven of eight notes are identical, and in a scale run the difference may slip past you. It is much clearer **alone, after a cadence**. The ordinary 7 pulls hard up into home; the flat 7 sits a whole step below home and doesn't pull up — it would rather fall to 6 or 5:

```example
{
  "title": "After the cadence: 7 (pulls up), then b7 (leans down)",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | B4:h C5:h | r:w | [C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | Bb4:h A4:q G4:q" } ],
  "show": ["keyboard"]
}
```

### Try it

1. Play the second example. After each cadence, listen only to the last notes: B→C, then B♭→A→G.
2. On your keyboard play the cadence chords C – F – G – C, then B4 and stop. Then play them again and stop on B♭4.
3. For each stop ask one question: *does my finger want to go up to C?*

**Check:** B pulls up to C so strongly that stopping feels wrong; B♭ feels settled a little lower — bluesy, it doesn't ask for C.

**If you can't hear it yet:** play B4 and C5 together, then B♭4 and C5 together. The half step rubs hard (that's the pull); the whole step is looser. Then go back to step 2.

You already know the chord built on it: ♭VII, the borrowed chord from week 19 (B♭ in C). Mixolydian songs love **I – ♭VII**.

```exercise
{
  "id": "play-c-mixolydian",
  "type": "play-scale",
  "title": "Play C Mixolydian",
  "instructions": "Right hand, up and down. The only black key is B flat.",
  "spec": { "root": "C", "scale": "mixolydian", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 66, "metronome": true }
}
```

**Before the drill** — the method (also in the *How to do it* box next to the drill): after the cadence, name the note by where it wants to go. A note near the top that pulls up into home is 7; one that neither rests nor pulls up, sitting a whole step below home, is ♭7. A dark note in the middle, at the height of 3, is still last week's ♭3. Unsure? Play the candidates on your keyboard after the replay and pick the match. If the drill is still on an earlier degree rung, its own box has the method for that one.

```ladder
{ "skill": "degrees", "unlocks": 27, "intro": "Opens \"The flat 7\": after the cadence, does the note pull up (7) or sit a whole step under home (♭7)? ♭3 may still appear. The drill runs at your current degree rung." }
```

## Dorian = natural minor with a raised 6

Take D natural minor (D E F G A B♭ C) and raise the 6th, B♭, to B. That's D [[Dorian]]: D E F G A **B** C. You met a raised 6 in melodic minor (week 14); Dorian keeps it on the way down too, and keeps the plain ♭7. The raised 6 also turns the IV chord major: G–B–D instead of G–B♭–D.

```example
{
  "title": "D natural minor, then D Dorian (only the 6th differs)",
  "bpm": 80, "timeSig": "4/4", "key": "Dm",
  "tracks": [ { "instrument": "piano", "seq": "D4:q E4:q F4:q G4:q | A4:q Bb4:q C5:q D5:q | r:w | D4:q E4:q F4:q G4:q | A4:q B4:q C5:q D5:q" } ],
  "show": ["staff", "keyboard"]
}
```

**Try it:** hold D in the left hand and play B♭ then B with the right, then the same two over a D minor chord (D–F–A). **Check:** B♭ is dark and heavy (plain minor); B natural is a surprising bright spot inside a minor sound — that's the Dorian colour. **If you can't hear it yet:** play the G chord both ways, G–B♭–D (minor) then G–B–D (major) — the chord difference is much easier to hear than the single note, and it's the same note causing it.

"Drunken Sailor" is in D Dorian. Most of it could be plain D minor — until bar 6, where the tune climbs A–**B**–C–D over a G major chord.

```example
{
  "title": "Drunken Sailor (traditional) - D Dorian",
  "bpm": 112, "timeSig": "4/4", "key": "Dm",
  "tracks": [
    { "instrument": "lead", "seq": "A4:q A4:8 A4:8 A4:q A4:8 A4:8 | A4:q D4:q F4:q A4:q | G4:q G4:8 G4:8 G4:q G4:8 G4:8 | G4:q C4:q E4:q G4:q | A4:q A4:8 A4:8 A4:q A4:8 A4:8 | A4:q B4:q C5:q D5:q | C5:q A4:q G4:q E4:q | D4:h D4:h" },
    { "instrument": "piano", "seq": "[D3 F3 A3]:w | [D3 F3 A3]:w | [C3 E3 G3]:w | [C3 E3 G3]:w | [D3 F3 A3]:w | [D3 G3 B3]:w | [C3 E3 G3]:w | [D3 F3 A3]:w" }
  ],
  "show": ["staff"]
}
```

```exercise
{
  "id": "play-drunken-sailor",
  "type": "play-melody",
  "title": "Play Drunken Sailor",
  "spec": { "bpm": 96, "timeSig": "4/4", "key": "Dm", "seq": "A4:q A4:8 A4:8 A4:q A4:8 A4:8 | A4:q D4:q F4:q A4:q | G4:q G4:8 G4:8 G4:q G4:8 G4:8 | G4:q C4:q E4:q G4:q | A4:q A4:8 A4:8 A4:q A4:8 A4:8 | A4:q B4:q C5:q D5:q | C5:q A4:q G4:q E4:q | D4:h D4:h", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "pad", "seq": "[D3 F3 A3]:w | [D3 F3 A3]:w | [C3 E3 G3]:w | [C3 E3 G3]:w | [D3 F3 A3]:w | [D3 G3 B3]:w | [C3 E3 G3]:w | [D3 F3 A3]:w" } }
}
```

```exercise
{
  "id": "mode-recipes-v2",
  "type": "quiz-input",
  "title": "The recipes",
  "spec": { "questions": [
    { "q": "Which note of G Mixolydian differs from G major?", "answer": ["F"], "kind": "note" },
    { "q": "Which note of A Dorian differs from A natural minor?", "answer": ["F#", "Gb"], "kind": "note" },
    { "q": "The flat-7 chord (bVII) of D Mixolydian has which root?", "answer": ["C"], "kind": "note" },
    { "q": "In E Dorian the IV chord is major. Which root?", "answer": ["A"], "kind": "note" }
  ] }
}
```

```exercise
{
  "id": "build-dorian",
  "type": "build-scale",
  "title": "Build Dorian scales",
  "count": 6,
  "spec": { "roots": ["D", "A", "E", "G", "C", "B"], "scale": "dorian", "prompt": "name" }
}
```

## Scale against scale

This lesson opens two scale rungs that play two scales on the same root: the plain one and its mode. The drill runs at your current scales rung. At first expect to guess some.

**Before the drill** — the method (also in the *How to do it* box next to the drill): ignore most of the run and wait for the one note that can differ. Major vs Mixolydian: the note just before the top home — does it pull up (major) or sit lower, bluesy (Mixolydian)? Minor vs Dorian: the 6th note — dark (minor) or a hopeful bright spot (Dorian)? When unsure, play both versions of that note over the root and replay.

```ladder
{ "skill": "scales", "unlocks": 8, "intro": "Opens \"Major or Mixolydian\" (the 7th), then \"Minor or Dorian\" (the 6th): same root, two scales. The drill runs at your current scales rung." }
```

## In real songs — your verdict first

```exercise
{
  "id": "modes-in-songs-verdict",
  "type": "quiz",
  "title": "Listen, decide, then read",
  "instructions": "Play the first 20 seconds of each recording, answer, then read the explanation.",
  "spec": { "questions": [
    { "q": "\"Sweet Home Alabama\" (Lynyrd Skynyrd) loops three chords, starting on D. Does the second chord go up to a tense chord that pulls back home, or step down from home with little pull?", "choices": ["Up to a tense chord that pulls home", "Steps down, little pull"], "answer": 1, "explain": "D – C – G: heard from D, it is I – bVII – IV in D Mixolydian. C is the chord on the flat 7; it steps down from D and never creates the V → I pull. Honest note: home is debatable here. Many listeners (and many chord charts) hear G as home instead, making the loop V – IV – I in G; both hearings are common. Either way, D → C is a step down with little pull." },
    { "q": "\"Oye Como Va\" (Santana) rocks between two chords. Home is minor. Is the other chord major or minor?", "choices": ["Major", "Minor"], "answer": 0, "explain": "Am7 – D7 in A Dorian: i7 – IV7. The D chord is major because Dorian raises the 6th (F#), exactly the note that makes IV major." }
  ] }
}
```

## Between lessons

Play C Mixolydian and D Dorian once a day, pausing on the changed note. In one song you know, listen for a chord a whole step below home (♭VII).
