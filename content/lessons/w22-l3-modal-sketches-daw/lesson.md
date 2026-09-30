---
id: w22-l3-modal-sketches-daw
title: Eight Bars in Two Modes
week: 22
order: 3
phase: p3
duration_min: 50
goals:
  - Keep a mode's home clear with a two-chord vamp and a bass that returns to the home note
  - Know why a V7 chord cancels a mode
  - Write 8 bars that switch from A Dorian to A Mixolydian on the same home note
prerequisites: [w22-l2-lydian-and-phrygian]
tags: [modes, daw, songwriting, ear]
songs: []
---

# Eight Bars in Two Modes

Knowing a mode's notes is not enough: the listener has to hear where home is, and has to hear the changed note. In major and minor the V → I cadence tells the ear where home is. Modes need other tools.

## Two tools and one warning

1. **Vamp.** Alternate the home chord with the chord that contains the characteristic tone: i – IV in Dorian, I – ♭VII in Mixolydian (last lesson: I – II in Lydian, i – ♭II in Phrygian). Two chords can carry a whole section.
2. **Home in the bass.** Keep bringing the bass back to the home note, at least every other bar.
3. **Warning: no V7.** In A Dorian an E7 chord contains G♯ — the ordinary 7 of A minor. It pulls straight into A and the tune sounds like plain A minor again. Use Em, or skip V.

**Try it:** play this — the Dorian vamp, ending first through Em, then through E7.

```example
{
  "title": "Am7 - D - Em - Am7, then Am7 - D - E7 - Am7",
  "bpm": 80, "timeSig": "4/4", "key": "Am",
  "tracks": [ { "instrument": "epiano", "seq": "[G3 C4 E4]:h [F#3 A3 D4]:h | [G3 B3 E4]:h [G3 C4 E4]:h | r:w | [G3 C4 E4]:h [F#3 A3 D4]:h | [G#3 B3 D4 E4]:h [G3 C4 E4]:h" }, { "instrument": "bass", "seq": "A2:h D2:h | E2:h A2:h | r:w | A2:h D2:h | E2:h A2:h" } ],
  "show": ["keyboard"]
}
```

**Check:** the Em version drifts back to A gently; the E7 version *snaps* home with a classical, "end of the story" pull — the modal floating is gone. **If you can't hear it yet:** play just G and then G♯ on your keyboard, each followed by A. G♯→A is the strong pull; that single note is what E7 adds.

## Same home, two modes

A Dorian (A B C D E **F♯** G) and A Mixolydian (A B **C♯** D E F♯ G) differ in just one note: the 3rd, C or C♯. That is the difference between minor and major, the first colour your ear learned — the clearest of the modal switches, though with a band playing it may take a few listens. Bars 1–4 are Dorian (Am7 – D), bars 5–8 Mixolydian (A – G).

```example
{
  "title": "A Dorian (bars 1-4), then A Mixolydian (bars 5-8)",
  "bpm": 100, "timeSig": "4/4", "key": "Am",
  "tracks": [
    { "instrument": "lead", "seq": "E5:q. D5:8 C5:q A4:q | F#4:q. A4:8 B4:h | E5:q. D5:8 C5:q A4:q | D5:q C5:8 B4:8 A4:h | E5:q. D5:8 C#5:q A4:q | G4:q. A4:8 B4:h | E5:q. D5:8 C#5:q A4:q | B4:q G4:8 B4:8 A4:h" },
    { "instrument": "epiano", "seq": "[G3 C4 E4]:w | [F#3 A3 D4]:w | [G3 C4 E4]:w | [F#3 A3 D4]:w | [A3 C#4 E4]:w | [G3 B3 D4]:w | [A3 C#4 E4]:w | [G3 B3 D4]:w" },
    { "instrument": "bass", "seq": "A2:h A2:h | D2:h D2:h | A2:h A2:h | D2:h D2:h | A2:h A2:h | G2:h G2:h | A2:h A2:h | G2:h G2:h" },
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

Notice the melody: F♯ lands on beat 1 of bar 2 (over D, the Dorian IV); in the second half C♯ comes on beat 3 and G on beat 1 of bar 6 (over G, the ♭VII).

**Try it:** loop the demo and count bars. At bar 5 ask: did it get darker or brighter? **Check:** brighter — minor turned major. **If you can't hear it yet:** hold A in the left hand and play C, then C♯, with the right; then play the chords Am and A. That's the whole switch. Listen to the demo again and wait for it at bar 5.

```exercise
{
  "id": "modal-rules-v2",
  "type": "quiz",
  "title": "Tools and warning",
  "spec": { "questions": [
    { "q": "Why avoid E7 in an A Dorian song?", "choices": ["It's out of range", "Its G# pulls the music back to plain A minor", "It's too quiet", "It isn't a real chord"], "answer": 1 },
    { "q": "Which two-chord vamp says 'Mixolydian' in A?", "choices": ["A – E7", "A – G", "Am – E", "A – Bm"], "answer": 1, "explain": "G is bVII in A: it holds the flat 7." },
    { "q": "What does a bass that keeps returning to A do?", "choices": ["Keeps home audible", "Changes the key", "Replaces the melody", "Adds swing"], "answer": 0 },
    { "q": "A Dorian and A Mixolydian differ in which note?", "choices": ["The 3rd (C or C#)", "The 6th", "The 7th", "The 2nd"], "answer": 0, "explain": "Dorian has the minor 3rd C, Mixolydian the major 3rd C#. Everything else - A B D E F# G - is shared." }
  ] }
}
```

```exercise
{
  "id": "play-two-mode-vamps",
  "type": "play-chord",
  "title": "Play both vamps",
  "instructions": "Dorian Am7 - D twice, then Mixolydian A - G twice. Keep your hand near middle C.",
  "spec": { "chords": ["Am7", "D", "Am7", "D", "A", "G", "A", "G"], "inversion": "any", "sequence": true, "bpm": 66 }
}
```

## Warm the ear

Methods as in the last two lessons (also in each drill's *How to do it* box): for degrees, does the note near the top pull up into home (7) or sit lower (♭7)? For scales, wait for the one note that can differ and compare it with its twin on your keyboard.

```ladder
{ "skill": "degrees", "unlocks": 19, "intro": "Review: is it the ordinary 7 or the flat 7?" }
```

```ladder
{ "skill": "scales", "unlocks": 8, "intro": "Review: one scale against its twin on the same root." }
```

## Your turn

Two 4-bar halves, one lead track each (a second sound also makes the switch obvious). About 30 minutes; if it runs over, finish next session.

1. Loop bars 1–4 and noodle on the keyboard with only A B C D E F♯ G. Find a short idea that lands F♯ on beat 1 of a D bar.
2. Draw it into the lead track; repeat or vary it for four bars; end on A or E.
3. Loop bars 5–8. Start with the *same* rhythm as your Dorian idea, but use C♯ instead of C and land G on beat 1 of a G bar. End on A.
4. Play all 8 bars.

**Judge it by ear:** does bar 5 feel like the light changed, while home (A) stayed the same? **If you're stuck:** copy the demo melody's rhythm and change only the notes, or make half 2 an exact copy of half 1 with C→C♯ — the smallest change that still shows the switch.

```exercise
{
  "id": "daw-dorian-to-mixolydian",
  "type": "daw-task",
  "title": "A Dorian, then A Mixolydian",
  "spec": {
    "template": { "bpm": 100, "key": "A", "tracks": [
      { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" },
      { "instrument": "epiano", "seq": "[G3 C4 E4]:w | [F#3 A3 D4]:w | [G3 C4 E4]:w | [F#3 A3 D4]:w | [A3 C#4 E4]:w | [G3 B3 D4]:w | [A3 C#4 E4]:w | [G3 B3 D4]:w" },
      { "instrument": "bass", "seq": "A2:h A2:h | D2:h D2:h | A2:h A2:h | D2:h D2:h | A2:h A2:h | G2:h G2:h | A2:h A2:h | G2:h G2:h" },
      { "instrument": "lead", "seq": "" },
      { "instrument": "pluck", "seq": "" }
    ] },
    "task": "The backing is ready: Am7 - D (A Dorian) for bars 1-4, A - G (A Mixolydian) for bars 5-8. On the lead track write a 4-bar A Dorian melody in bars 1-4 (A B C D E F# G) with F# on a strong beat at least once. On the pluck track write a 4-bar A Mixolydian answer in bars 5-8 (A B C# D E F# G) with G on a strong beat at least once, ending on A. Play it back: can you hear the switch at bar 5?",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "A", "scale": "dorian", "track": 3 },
      { "kind": "note-count", "min": 6, "max": 24, "track": 3 },
      { "kind": "in-key", "key": "A", "scale": "mixolydian", "track": 4 },
      { "kind": "note-count", "min": 6, "max": 24, "track": 4 },
      { "kind": "ends-on", "degree": 1, "key": "A", "track": 4 },
      { "kind": "custom", "id": "characteristic-tones-on-strong-beats", "note": "Self-check: F# on beat 1 or 3 in bars 1-4, and G on beat 1 or 3 in bars 5-8." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "reflect-two-modes",
  "type": "reflect",
  "spec": { "prompt": "Play your 8 bars. Which did you actually hear at bar 5 - the change of 3rd, the new chords, the new lead sound? Could you hear the F# and the G as special notes, or not yet? Be honest: this is a note for your future self.", "minWords": 25 }
}
```

## Between lessons

Try one more vamp on your own: F – G (F Lydian) or Em – F (E Phrygian), four bars, with a melody that lands on the changed note.
