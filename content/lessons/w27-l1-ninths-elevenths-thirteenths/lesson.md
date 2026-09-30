---
id: w27-l1-ninths-elevenths-thirteenths
title: Ninths, Elevenths and Thirteenths
week: 27
order: 1
phase: p4
duration_min: 45
goals:
  - Build 9th, 11th and 13th chords by stacking thirds above a seventh chord
  - "Leave notes out with three simple rules: keep the 3rd and 7th, drop the 5th, skip the 11th on major and dominant chords"
  - Practise the four seventh colours that sit under every extended chord
prerequisites: [w26-l3-listening-review-and-ear-assessment, w12-l1-maj7-dom7-min7]
tags: [harmony, extended-chords, jazz, ear]
---

# Ninths, Elevenths and Thirteenths

Welcome to Phase 4. You know that a seventh chord is a triad with one more third on top. Keep stacking thirds and you get the [[extension]]s: the **9th**, **11th** and **13th**. They are the same note names as the 2nd, 4th and 6th of the scale, only placed an octave higher, *above* the chord.

Why bother? Extensions are where the colour of jazz, soul, R&B and a lot of modern pop lives. A plain {{chord:Cmaj7}} sounds settled; {{chord:Cmaj9}} sounds settled and a little more open.

**What you will actually hear.** At first a Cmaj9 will probably sound like "Cmaj7, but softer" rather than like a separate note on top. That is normal. Most of the colour still comes from the seventh chord underneath (maj7, dom7, min7 or m7♭5). Telling those four apart is where the chord ladder is heading. Today's drill opens that four-way choice, but it runs at your current chord rung, which may still be an earlier one. Hearing the extension itself as a separate colour comes on a much later rung.

## Stacking thirds

Start on C and keep going in thirds inside C major: C–E–G–B–D–F–A. That is 1–3–5–7–9–11–13. Everything past the 7th is an extension. Listen to the arpeggio climb to the 9th, then Cmaj7 and Cmaj9 side by side.

```example
{
  "title": "Cmaj7, one more third, then Cmaj7 vs Cmaj9",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C3:q E3:q G3:q B3:q | D4:w | [C3 E3 G3 B3]:h [C3 E3 G3 B3 D4]:h |" } ],
  "show": ["staff", "keyboard"]
}
```

### Try it

1. Play the example again. On the last bar, listen only to the *top* of the two chords.
2. On your keyboard, hold C3 E3 G3 B3 with both hands, then add D4 with a free finger while the chord rings. Lift D4, add it again.
3. Now play Cmaj7 and Cmaj9 one after the other, each held for two slow counts.

**Check:** the added D should feel like the chord getting a little wider or airier, not like a new chord. If that's all you hear, you're hearing it right.

**If you can't hear it yet:** play D4 *alone* right after Cmaj7, then the full Cmaj9. Hearing the lone D first shows your ear where to look; then the difference in the full chord gets easier to catch. It's fine if it stays faint for weeks — no drill today asks you to name the 9th.

On paper a chord symbol names its highest extension and includes the ones below: {{chord:Dm11}} is D F A C E G. In practice nobody plays all of them.

## What to leave out

Seven notes do not fit comfortably under two hands, and they would sound muddy anyway. Three rules cover almost everything:

1. **Keep the 3rd and 7th.** They say which colour the chord is.
2. **Drop the 5th first.** It adds almost nothing you would miss.
3. **Skip the 11th on major and dominant chords.** In C, the 11th is F, a half step above the 3rd, E. The two notes rub. On *minor* chords the 11th sits a whole step above the minor 3rd and sounds lovely, so Dm11 is fine.

Here is a ii–V–I in C using the rules. The G chord is a {{chord:G13}} played as G, F, B, E: root, 7th, 3rd, 13th. No 5th, no 11th, and its 9th left out too. Listen to how little the hands move between chords.

```example
{
  "title": "Dm9 – G13 – Cmaj9, fifths left out",
  "bpm": 66, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[D3 F3 C4 E4]:w | [G2 F3 B3 E4]:w | [C3 E3 B3 D4]:w |" } ],
  "show": ["keyboard", "staff"]
}
```

```keyboard
{ "range": ["C2", "C5"], "highlight": ["G2", "F3", "B3", "E4"], "labels": "names", "colors": { "G2": "root", "F3": "seventh", "B3": "third", "E4": "other" } }
```

## Drills

```exercise
{
  "id": "e1-build-ninths",
  "type": "build-chord",
  "title": "Build ninth chords",
  "instructions": "Select all five pitch classes: root, 3rd, 5th, 7th, 9th.",
  "count": 6, "passScore": 0.7,
  "spec": { "chords": ["Cmaj9", "Dm9", "G9", "Fmaj9", "Am9", "C9"], "root": "given", "prompt": "symbol", "key": "C" }
}
```

```exercise
{
  "id": "e2-extension-quiz",
  "type": "quiz",
  "title": "Extension logic",
  "passScore": 0.7,
  "spec": { "questions": [
    { "q": "What is the 11th of a D minor chord?", "choices": ["F", "G", "A", "B"], "answer": 1, "explain": "D E F G: the 4th is G; an octave up it is called the 11th." },
    { "q": "In G13, which note is the 13th?", "choices": ["C", "D", "E", "F"], "answer": 2, "explain": "G A B C D E: the 6th is E; above the chord it is the 13th." },
    { "q": "Which note is usually dropped first from a big chord?", "choices": ["the 3rd", "the 5th", "the 7th", "the root, always"], "answer": 1, "explain": "The 5th says the least about the chord's colour." },
    { "q": "Why leave the 11th (F) out of Cmaj9?", "choices": ["F is not in C major", "F sits a half step above the 3rd (E) and rubs", "It doubles the root", "It makes the chord minor"], "answer": 1, "explain": "On major and dominant chords the 11th clashes with the 3rd. On minor chords it is a whole step away and sounds fine." }
  ] }
}
```

```exercise
{
  "id": "e3-play-two-five-one",
  "type": "play-notes",
  "title": "Play the ii–V–I voicings",
  "instructions": "Hold each chord together, left hand on the lowest note: Dm9 (D F C E), G13 (G F B E), Cmaj9 (C E B D).",
  "spec": { "prompt": "names", "notes": [["D3", "F3", "C4", "E4"], ["G2", "F3", "B3", "E4"], ["C3", "E3", "B3", "D4"]], "ordered": false }
}
```

```exercise
{
  "id": "e4-play-ninths",
  "type": "play-chord",
  "title": "Play full ninth chords",
  "instructions": "All five notes, spread across both hands in any order.",
  "passScore": 0.7,
  "spec": { "chords": ["Dm9", "G9", "Cmaj9", "Am9"], "inversion": "any", "sequence": true, "bpm": 50 }
}
```

## Ear: the colour underneath

Every extended chord sits on one of four seventh chords. Hear them on one root, slowly, bright pair first, then dark pair:

```example
{
  "title": "On C: maj7, dom7 (bright) · min7, m7♭5 (dark)",
  "bpm": 56, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C3 E3 G3 B3]:h [C3 E3 G3 Bb3]:h | r:w | [C3 Eb3 G3 Bb3]:h [C3 Eb3 Gb3 Bb3]:h |" } ],
  "show": ["keyboard"]
}
```

### Try it

1. Play Cmaj7 and C7 yourself. Bright both; maj7 floats (dreamy), C7 leans and wants to move (bluesy).
2. Play Cm7 and Cm7♭5. Dark both; min7 rests (mellow), m7♭5 feels unstable because its 5th (G♭) is lowered.
3. Close your eyes, play one of the four at random, and sort it in two questions: *bright or dark?* then *which of the pair?*

**Check:** you can sort your own random chord into the right pair most of the time.

**If you can't hear it yet:** strip the chord down. Play the 3rd alone against the root (E vs E♭ answers bright/dark), then the top two notes alone (B vs B♭ answers dreamy/bluesy; G vs G♭ answers mellow/tense).

**The drill's method** (also in its *How to do it* box): two questions, never four at once — first bright or dark, then within the pair. If the drill is on an earlier chord rung, its own box has the method for that rung.

```ladder
{ "skill": "chords", "unlocks": 11, "intro": "Opens the four-way seventh choice (maj7, dom7, min7, m7♭5), the colours under every extended chord; the drill runs at your current chord rung." }
```

## Between lessons

Once a day, play the four sevenths on a new root and sort them with your eyes closed (2 minutes). Voice Dm9–G13–Cmaj9 from memory once.
