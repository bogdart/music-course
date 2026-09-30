---
id: w13-l1-natural-minor-and-relative-keys
title: Natural Minor and Relative Keys
week: 13
order: 1
phase: p2
duration_min: 50
goals:
  - Build the natural minor scale (W-H-W-W-H-W-W) and read its degrees as 1 2 ♭3 4 5 ♭6 ♭7
  - Find the relative minor of C, G and F major (A, E and D minor)
  - Hear the minor cadence i – iv – V – i and name degrees in A minor after it
prerequisites: [w12-l4-tritone-and-descending-intervals]
tags: [minor, scales, keys, ear]
---

# Natural Minor and Relative Keys

Everything so far was built on one scale, the major scale, in more and more keys. Now its darker twin. As always, one new thing at a time: minor starts in **one key, A minor**, in one octave, before it moves anywhere else.

## Same notes, different home

Play the white keys from C to C: C major. Now play the *same* white keys from A to A. No note changed, only the starting note, which is now home. Most people hear the second run as darker or sadder. That is the [[natural minor]] scale, and its step pattern is **W-H-W-W-H-W-W**.

```example
{
  "title": "C major, then A natural minor: same white keys, different home",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q F4:q | G4:q A4:q B4:q C5:q | r:w | A3:q B3:q C4:q D4:q | E4:q F4:q G4:q A4:h" } ],
  "show": ["staff", "keyboard"]
}
```

```exercise
{
  "id": "e1", "type": "play-scale", "title": "A natural minor, right hand",
  "instructions": "White keys only, from A up to A and back. Let the last A sound: that's home.",
  "count": 1, "passScore": 0.7,
  "spec": { "root": "A", "scale": "natural-minor", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 60, "metronome": true }
}
```

### Try it: major or minor, from the same note

1. Play **C D E F G** slowly, then **C D E♭ F G**. Only the third note differs. Play just the third note of each twice: E, then E♭. The first sounds bright and open, the second shaded, a little heavy.
2. Play a tiny tune both ways: **C D E D C**, then **C D E♭ D C**. Say "bright" or "shaded" after each.
3. Close your eyes, play one of the two tunes at random, and name it before you look at the keys.

Check: two runs below, both starting on C. Name each, then read the explanation.

```exercise
{
  "id": "e4", "type": "listen", "title": "Check: bright or shaded?",
  "instructions": "Play each run, listen for the third note, then answer.",
  "spec": {
    "examples": [
      { "title": "Run 1", "bpm": 90, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q Eb4:q F4:q | G4:h r:h" } ] },
      { "title": "Run 2", "bpm": 90, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q F4:q | G4:h r:h" } ] }
    ],
    "questions": [
      { "q": "Run 1 is…", "choices": ["major (bright third)", "minor (shaded third)"], "answer": 1, "explain": "Minor: C D E♭ F G. Play E and E♭ after the run: its third note was the E♭." },
      { "q": "Run 2 is…", "choices": ["major (bright third)", "minor (shaded third)"], "answer": 0, "explain": "Major: C D E F G. If you mixed them up, replay both and stop listening after note 3." }
    ]
  }
}
```

**If you can't hear it yet:** don't judge the whole run. Replay the question and, straight after it, play **C D E** and **C D E♭** yourself. Which one did the question sound like? Your fingers make the comparison your ear can't yet make from memory. "Darker" is a vague word at first; "matches my C D E♭" is not.

## Naming the minor degrees: ♭3, ♭6, ♭7

To name the notes of a minor scale we compare it with the **major scale on the same starting note**. Listen to C major and then C minor. Three notes drop by a half step: E becomes E♭, A becomes A♭, B becomes B♭.

```example
{
  "title": "C major, then C natural minor: degrees 3, 6 and 7 drop a half step",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q D4:q E4:q F4:q | G4:q A4:q B4:q C5:q | r:w | C4:q D4:q Eb4:q F4:q | G4:q Ab4:q Bb4:q C5:q" } ],
  "show": ["keyboard"]
}
```

So every minor scale is **1 2 ♭3 4 5 ♭6 ♭7**. Here the ♭ means "a half step lower than in major", *not* "a black key". In A minor, ♭3 is C, a white key: A major would have C♯ there. The ♭3 is the note you hear most: it's the minor 3rd from the minor triad of week 6 (and from last week's intervals: do up to ♭3 is a minor 3rd, do up to 3 a major 3rd), and it gives minor its shade.

Your new *scales* ladder starts here. This lesson opens its first two rungs: major or minor as a scale, then as a short tune. Everything starts on C, so only the pattern differs.

**Before the drill, rehearse the method** (it's also in the *How to do it* box above the drill, for the rung you're on): replay, listen only up to the third note, then play C D E and C D E♭ yourself and pick the one that matches. For the tunes: where does the tune come to rest, and does that last stretch match C D E or C D E♭? The drill runs at your current rung, so the tunes come once the scales are solid.

```ladder
{ "skill": "scales", "unlocks": 2, "intro": "Opens \"Major or minor scale\", then \"Major or minor tune\"; the drill runs at your current rung." }
```

## Relative keys

A major key and the minor key that uses exactly the same notes (and the same key signature) are [[relative keys]]. The [[relative minor]] starts on degree 6 of the major scale, three half steps below the major tonic.

- C major → **A minor** (no sharps or flats)
- G major → **E minor** (one sharp, F♯)
- F major → **D minor** (one flat, B♭)

```keyboard
{ "range": ["C3", "C5"], "highlight": ["E3", "F#3", "G3", "A3", "B3", "C4", "D4", "E4"], "labels": "names", "colors": { "E3": "root", "E4": "root" } }
```

```exercise
{
  "id": "e2", "type": "build-scale", "title": "Build the relative minors",
  "instructions": "Select the seven notes. They are the notes of the relative major, starting from a different home.",
  "count": 3, "passScore": 0.7,
  "spec": { "roots": ["A", "E", "D"], "scale": "natural-minor", "prompt": "name" }
}
```

```exercise
{
  "id": "e3", "type": "quiz-input", "title": "Find the relative",
  "spec": { "questions": [
    { "q": "Relative minor of C major?", "answer": ["A"], "kind": "note" },
    { "q": "Relative minor of G major?", "answer": ["E"], "kind": "note" },
    { "q": "Relative minor of F major?", "answer": ["D"], "kind": "note" },
    { "q": "Relative major of E minor?", "answer": ["G"], "kind": "note" },
    { "q": "In A minor, which note is ♭3?", "answer": ["C"], "kind": "note" },
    { "q": "In A minor, which note is ♭7?", "answer": ["G"], "kind": "note" }
  ] }
}
```

## Minor chords, lower-case numerals, and the minor cadence

In week 6 you wrote the chords of C major as I ii iii IV V vi vii°: **upper case = major triad, lower case = minor triad**. Minor keys use the same rule, counted from the minor tonic. The home chord of A minor is Am, a minor chord, so it's written **i**. The chord on 4 (Dm) is **iv**.

Your degree drills set home with a cadence (I – IV – V – I) since week 6. In minor the cadence is **i – iv – V – i**: Am – Dm – E – Am. Look at the third chord: it's **E major**, with a **G♯**, a note that isn't in A natural minor. That's deliberate. G♯ sits a half step below A and pulls into it, exactly like B → C in C major, so the cadence lands firmly on A. Since E major is a major chord, its numeral is upper case: **V**. Next lesson, in *Greensleeves*, you'll hear it next to the scale's own E minor chord.

```example
{
  "title": "The minor cadence in A: i – iv – V – i (Am – Dm – E – Am; the G♯ is in the third chord)",
  "bpm": 72, "timeSig": "4/4", "key": "Am",
  "tracks": [
    { "instrument": "piano", "seq": "[A3 C4 E4]:q [A3 D4 F4]:q [G#3 B3 E4]:q [A3 C4 E4]:h" },
    { "instrument": "piano", "seq": "A2:q D2:q E2:q A2:h" }
  ],
  "show": ["keyboard"]
}
```

After this cadence, A is home. Degree 1 is A, ♭3 is C, 5 is E.

### Try it: the minor cadence under your hands

1. Play Am (A C E), Dm (A D F), E (G♯ B E), Am (A C E), slowly, holding each chord. Your thumb barely moves; the G♯ in the third chord is the only black key.
2. Play the E chord and stop. It sounds unfinished, as if waiting. Now play Am: the waiting ends.
3. Play the E chord again, then **A alone**, low. That single A is "home" in this key; the degree questions below start from it.

```exercise
{
  "id": "e5", "type": "play-chord", "title": "Play the minor cadence",
  "instructions": "Am – Dm – E – Am, any hand position. The G♯ belongs to the E chord.",
  "passScore": 0.7,
  "spec": { "chords": ["Am", "Dm", "E", "Am"], "sequence": true, "bpm": 60, "key": "Am" }
}
```

**If the cadence doesn't feel like it lands:** stop on the E chord and hold it, then try playing C, then A under it. One of them ends the waiting; it will be A. That's the feeling you'll use for "home" in minor.

## Degrees in A minor

Now your degree ladder turns to minor, in A only, one octave, set up by this minor cadence. First degrees 1 to 5: 1 is A, ♭3 is C, 5 is E. In minor, 3 is always the ♭3, so the drill's buttons just say 3. Then all seven. One thing to know for that one: the drill asks about the notes of **natural** minor, so degree 7 is **G**, a whole step below A. The cadence still uses G♯ to set home, so the question's G will sound lower and less pushy than the G♯ in the cadence. Degree 6 is F, a half step above 5. After each answer, 6 and 7 walk up to the high A, the others walk down to A.

### Try it: walking home in A minor

1. Play the cadence Am – Dm – E – Am, then play **A** alone. That's 1.
2. Play C, then walk down to A: C – B – A. Two steps = 3. Play E and walk down: E D C B A = 5.
3. Play G, then A: 7 steps up into home. Play F, then G, then A: that's how 6 walks home in the drill. Then play F, then E: notice F also likes to sink onto 5.
4. Play any white key between A3 and A4, and name its degree by counting white keys up from A (A = 1).

**If you can't hear it yet:** find the question note on the keyboard first (search with higher/lower from A), then count keys up from A: A B C D E F G = 1 2 3 4 5 6 7. The keyboard answer is always allowed; the feeling of each degree grows from doing this many times.

**Before the drill, rehearse the method** (also in the *How to do it* box above the drill, for the rung you're on): hold the cadence's home note (A) in your head, walk from the question note down to it and count the steps; 3 is the dark third. If unsure, find the key and count from A. The change of home will feel strange at first, just as G did in week 9: a new home takes a few sessions to settle. The drill runs at your current degree rung.

```ladder
{ "skill": "degrees", "unlocks": 21, "intro": "Opens \"Minor: 1 to 5 in A\", then \"Minor: all seven in A\" (natural minor, 7 = G); the drill runs at your current rung." }
```

## Between lessons

- **3 minutes, daily:** play C D E F G / C D E♭ F G with your eyes closed, then random ones, naming each before you look.
- **2 minutes:** A natural minor up and down (white keys A to A), letting the last A ring.
- **1 minute:** the minor cadence Am – Dm – E – Am, then stop on E and feel the wait.
- **2 minutes:** the cadence Am – Dm – E – Am, then any white key; walk it home to A and name its degree.
- One Practice-page session: scales and degrees at your rung.

Next lesson: a real song in A minor, and your first minor piece in the DAW. Next week: why minor keys borrow that G♯, and minor in other keys.
