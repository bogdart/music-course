---
id: w09-l1-natural-minor-and-relative-keys
title: Natural Minor and Relative Keys
week: 9
order: 1
phase: p2
duration_min: 45
goals:
  - Build the natural minor scale (W-H-W-W-H-W-W) and read its degrees as 1 2 ♭3 4 5 ♭6 ♭7
  - Find the relative minor of C, G and F major (A, E and D minor)
  - Know why minor chords get lower-case numerals, and hear the minor cadence i – iv – V – i
prerequisites: [w08-l3-first-eight-bar-song-daw]
tags: [minor, scales, keys, ear]
---

# Natural Minor and Relative Keys

Welcome to Phase 2. Everything so far was built on one scale, the major scale. Today we meet its darker twin, and three bits of notation that come with it.

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

So every minor scale is **1 2 ♭3 4 5 ♭6 ♭7**. Here the ♭ means "a half step lower than in major", *not* "a black key". In A minor, ♭3 is C, a white key: A major would have C♯ there. The ♭3 is the note you hear most: it's the minor third from the minor triad of week 6, and it gives minor its shade.

Your new *scales* ladder starts here. This lesson opens its first two rungs: major or minor as a scale, then as a short tune. In both, everything starts on C, so there's no difference in key to go by, only the pattern. Listen for the third note: bright (3) or shaded (♭3)? The drill runs at your current rung, so the tunes come once the scales are solid.

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

Your degree drills set home with a cadence (I – IV – V – I) once you reach the cadence rungs. In minor the cadence is **i – iv – V – i**: Am – Dm – E – Am. Look at the third chord: it's **E major**, with a **G♯**, a note that isn't in A natural minor. That's deliberate. G♯ sits a half step below A and pulls into it, exactly like B → C in C major, so the cadence lands firmly on A. Since E major is a major chord, its numeral is upper case: **V**. Next lesson you'll hear it next to the scale's own E minor chord.

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

After this cadence, A is home. Degree 1 is A, ♭3 is C, 5 is E. Listen to it a few times today — next lesson it becomes the reference for degree questions in minor.

Next lesson: why minor keys borrow that G♯, two more minor scales that use it, and degrees in A minor.
