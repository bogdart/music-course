---
id: w27-l1-ninths-elevenths-thirteenths
title: Ninths, Elevenths and Thirteenths
week: 27
order: 1
phase: p4
duration_min: 40
goals:
  - Build 9th, 11th and 13th chords by stacking thirds above a 7th chord
  - Know which notes to leave out so a big chord fits under two hands
  - Hear maj7, min7 and dom7 quickly as the base colours under every extension
prerequisites: [w26-l3-listening-review-and-ear-assessment, w12-l1-maj7-dom7-min7]
tags: [harmony, extended-chords, jazz, ear]
---

# Ninths, Elevenths and Thirteenths

Welcome to Phase 4. You already know that a seventh chord is a triad with one more third on top. Keep stacking thirds and you get the [[extension]]s: the **9th**, **11th** and **13th**. They are the same pitch classes as the 2nd, 4th and 6th of the scale — just placed an octave higher, *above* the chord instead of inside the melody.

Why bother? Because extensions are where the colour lives in jazz, soul, R&B, film and a lot of modern pop. A plain {{chord:Cmaj7}} sounds settled; {{chord:Cmaj9}} sounds settled *and* open, like light through a window.

## Stacking thirds

Start on C and keep going in thirds inside C major: C–E–G–B–D–F–A. That is 1–3–5–7–9–11–13. Everything past the 7th is an extension. The chord symbol names the highest extension and implies the ones below, so {{chord:G13}} "contains" a 9th and (in theory) an 11th too.

```example
{
  "title": "From Cmaj7 to Cmaj9: one more third",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C3:q E3:q G3:q B3:q | D4:h [C3 E3 G3 B3 D4]:h |" } ],
  "show": ["staff", "keyboard"]
}
```

## What to leave out

Seven notes do not fit under ten fingers — and they would sound muddy anyway. Three rules cover most situations:

1. **Keep the 3rd and 7th.** They tell the ear the chord quality.
2. **Drop the 5th first.** It adds almost nothing.
3. **Watch the 11th.** On major and dominant chords the natural 11 sits a half step above the 3rd and clashes — it is an [[avoid note]]. Leave it out (or raise it to #11). On *minor* chords the 11th is beautiful.

Here is a classic ii–V–I in C with the 5ths dropped. Listen for how little the hands move: F stays, C slips to B, E stays, then F slips to E.

```example
{
  "title": "Dm9 – G13 – Cmaj9, fifths removed",
  "bpm": 66, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[D3 F3 C4 E4]:w | [G2 F3 B3 E4]:w | [C3 E3 B3 D4]:w |" } ],
  "show": ["keyboard", "staff"]
}
```

```keyboard
{ "range": ["C2", "C5"], "highlight": ["G2", "F3", "B3", "E4"], "labels": "names", "colors": { "G2": "root", "F3": "seventh", "B3": "third", "E4": "other" } }
```

That G13 voicing — root, 7th, 3rd, 13th — is one you will use for the rest of the year.

## Drills

```exercise
{
  "id": "e1-build-ninths",
  "type": "build-chord",
  "title": "Build ninth chords",
  "instructions": "Select all five pitch classes: root, 3rd, 5th, 7th, 9th.",
  "count": 6, "passScore": 0.8,
  "spec": { "chords": ["Cmaj9", "Dm9", "G9", "Fmaj9", "Am9", "Em7"], "root": "given", "prompt": "symbol", "key": "C" }
}
```

```exercise
{
  "id": "e2-play-ninths",
  "type": "play-chord",
  "title": "Play full ninth chords",
  "instructions": "Hold all five notes. Any order is fine — spread across both hands if you need to.",
  "count": 6, "passScore": 0.75,
  "spec": { "chords": ["Dm9", "G9", "Cmaj9", "Am9"], "inversion": "any", "sequence": true, "bpm": 50 }
}
```

```exercise
{
  "id": "e3-g13-voicing",
  "type": "play-notes",
  "title": "The root–7–3–13 voicing",
  "instructions": "Play G2, F3, B3, E4 together. Then find the same shape on C (C3 Bb3 E4 A4) on your own.",
  "count": 6, "passScore": 0.8,
  "spec": { "prompt": "names", "notes": ["G2", "F3", "B3", "E4"], "ordered": false }
}
```

```exercise
{
  "id": "e4-ear-sevenths",
  "type": "ear-chord",
  "title": "Base colours: maj7, min7, dom7",
  "instructions": "Every extended chord sits on one of these three. Name the family.",
  "count": 10, "passScore": 0.8,
  "spec": { "qualities": ["maj7", "min7", "dom7"], "inversions": [0], "voicing": "close", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e5-extension-quiz",
  "type": "quiz",
  "title": "Extension logic",
  "passScore": 0.75,
  "spec": { "questions": [
    { "q": "What is the 11th of a D minor chord?", "choices": ["F", "G", "A", "B"], "answer": 1, "explain": "D E F G — the 4th is G; up an octave it is called the 11th." },
    { "q": "Which note is usually dropped first from a big chord?", "choices": ["the 3rd", "the 5th", "the 7th", "the root, always"], "answer": 1, "explain": "The 5th carries the least information about chord quality." },
    { "q": "Why avoid a natural 11 (F) on Cmaj7?", "choices": ["It is not in C major", "It clashes a half step above the 3rd, E", "It doubles the root", "It makes the chord minor"], "answer": 1, "explain": "F against E is a minor 9th rub. Use #11 (F#) or leave it out." },
    { "q": "In G13, which note is the 13th?", "choices": ["C", "D", "E", "F"], "answer": 2, "explain": "G A B C D E — the 6th is E; placed above the chord it is the 13th." }
  ] }
}
```

```exercise
{
  "id": "e6-ear-prog",
  "type": "ear-progression",
  "title": "Progressions with V7",
  "count": 6, "passScore": 0.75,
  "spec": { "key": "C", "mode": "major", "length": 4, "chords": ["I", "ii", "IV", "V7", "vi"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "e7-dorian",
  "type": "play-scale",
  "title": "D dorian — the scale under Dm9 and Dm11",
  "instructions": "Notice E (9), G (11) and B (13): the extensions of a minor chord live here.",
  "count": 6, "passScore": 0.75,
  "spec": { "root": "D", "scale": "dorian", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 72, "metronome": true }
}
```
