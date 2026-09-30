---
id: w39-l3-toplines-over-beats-daw
title: Toplines Over Three Beats
week: 39
order: 3
phase: p4
duration_min: 50
goals:
  - Write three 8-bar toplines over provided tracks in different styles (over two sessions)
  - Adapt pocket, register and rhythm to each groove
  - Hear a major 9th chord next to its major 7th
prerequisites: [w39-l2-topline-writing, w27-l1-ninths-elevenths-thirteenths]
tags: [songwriting, topline, daw, lyrics, chords]
---

# Toplines Over Three Beats

Professional topliners often write over several tracks in a row. Each track suggests a different kind of melody; your job is to **listen first** and let the groove tell you what it wants. **This lesson spans two sessions:** the ballad and the dance topline in the first, the lo-fi one in the second.

## The three tracks

1. **Ballad** (76 BPM, G major, G–Em–C–D = I–vi–IV–V). Space and long notes; bigger leaps are fine here, the slow tempo gives a singer time.
2. **Dance** (124 BPM, A minor, off-beat stabs Am7–Fmaj7–Dm–Em). Short, rhythmic, repetitive phrases; chant-like hooks; leave the off-beats to the stabs.
3. **Lo-fi R&B** (80 BPM, Dm9–Cmaj9–Am7–G13 on epiano, swung). Laid-back, syncopated, fewer notes; long notes on the chords' colour tones (7ths and 9ths) give that smooth sound.

## Ninths, heard next to sevenths

You built 9th chords in week 27: a seventh chord plus the note a whole step above the root, placed an octave up (D–F–A–C + **E** = Dm9). The lo-fi track lives on them. Start with the major ones: hear a major 7th chord, then the same chord with its 9th added on top, on three roots.

```example
{
  "title": "Cmaj7 → Cmaj9, Fmaj7 → Fmaj9, Gmaj7 → Gmaj9",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "epiano", "seq": "[C3 E3 G3 B3]:h [C3 E3 G3 B3 D4]:h | [F3 A3 C4 E4]:h [F3 A3 C4 E4 G4]:h | [G2 B2 D3 F#3]:h [G2 B2 D3 F#3 A3]:h |" }
  ],
  "show": ["keyboard"]
}
```

Honestly, the difference is small: the 9th doesn't change major/minor, it adds a soft extra shimmer on top — "fuller", "dreamier". Most people first hear it as the top note getting a little higher. This lesson opens a chord rung that asks exactly this two-way question: major 7 or major 9? Method for chord colours: bright or dark first, then the finer colour; replay and compare with the chords above. The drill runs at your current chord rung (you reach the new one after mastering the earlier ones), and the *How to do it* box under it shows the exact method for that rung. Ninths on other chords (Dm9, G9) come later.

```ladder
{ "skill": "chords", "unlocks": 15, "intro": "Opens the rung 'Major 7 or major 9'; the drill runs at your current chord rung." }
```

```exercise
{
  "id": "e1-play-lofi-chords",
  "type": "play-chord",
  "title": "Play the lo-fi track chords",
  "passScore": 0.7,
  "spec": { "chords": ["Dm9", "Cmaj9", "Am7", "G13"], "inversion": "any", "sequence": true, "bpm": 55 }
}
```

## The routine for each topline

1. Loop the track and **tap three different rhythms** on one key. Keep the best.
2. Choose pitches: start on a chord tone, move mostly by step, save your highest note for the hook.
3. Read an imaginary lyric along (even nonsense, but with real stresses). If the stresses fight the beat, move notes.
4. Check the range (about a 10th) and breaths (a rest at least every two bars).

5. **Check by ear:** play the whole 8 bars with the track. Does the melody sound like it belongs to *this* groove (long and open for the ballad, chanted for the dance, lazy for lo-fi)? Does a long note sound sour? Move it to a chord tone.

If a track gives you nothing after three tapped attempts, move on and come back later — fresh ears often find the melody quickly. For the lo-fi track, the colour tones are listed in the task: start by holding each for a whole bar and only then add rhythm.

## Session 1: ballad and dance

```exercise
{
  "id": "e2-daw-ballad",
  "type": "daw-task",
  "title": "Topline 1: ballad",
  "instructions": "8 bars. Long notes, a climax in bar 6 or 7, end on G.",
  "spec": {
    "template": {
      "bpm": 76, "key": "G", "timeSig": "4/4",
      "tracks": [
        { "instrument": "lead", "seq": "" },
        { "instrument": "piano", "seq": "[G3 B3 D4]:w | [E3 G3 B3]:w | [C3 E3 G3]:w | [D3 F#3 A3]:w | [G3 B3 D4]:w | [E3 G3 B3]:w | [C3 E3 G3]:w | [D3 F#3 A3]:w |" },
        { "instrument": "bass", "seq": "G1:w | E2:w | C2:w | D2:w | G1:w | E2:w | C2:w | D2:w |" },
        { "instrument": "drums", "seq": "kick:q hihat:8 hihat:8 [snare hihat]:q hihat:8 hihat:8 | kick:q hihat:8 hihat:8 [snare hihat]:q hihat:8 hihat:8 | kick:q hihat:8 hihat:8 [snare hihat]:q hihat:8 hihat:8 | kick:q hihat:8 hihat:8 [snare hihat]:q hihat:8 hihat:8 | kick:q hihat:8 hihat:8 [snare hihat]:q hihat:8 hihat:8 | kick:q hihat:8 hihat:8 [snare hihat]:q hihat:8 hihat:8 | kick:q hihat:8 hihat:8 [snare hihat]:q hihat:8 hihat:8 | kick:q hihat:8 hihat:8 [snare hihat]:q hihat:8 hihat:8 |" }
      ]
    },
    "task": "Ballad topline.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "G", "scale": "major", "allowPassing": true, "track": 0 },
      { "kind": "range", "low": "B3", "high": "E5", "track": 0 },
      { "kind": "uses-rhythm", "values": ["q", "h", "h.", "w"], "minDistinct": 2, "track": 0 },
      { "kind": "ends-on", "degree": 1, "track": 0 },
      { "kind": "contour", "shape": "arch", "track": 0 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "e3-daw-dance",
  "type": "daw-task",
  "title": "Topline 2: dance",
  "instructions": "8 bars. A 1-bar chant-like hook repeated at least three times; mostly 8ths and quarters; avoid long notes on the off-beats where the stabs are.",
  "spec": {
    "template": {
      "bpm": 124, "key": "Am", "timeSig": "4/4",
      "tracks": [
        { "instrument": "lead", "seq": "" },
        { "instrument": "piano", "seq": "r:8 [G3 C4 E4]:8 r:q r:8 [G3 C4 E4]:8 r:q | r:8 [A3 C4 E4]:8 r:q r:8 [A3 C4 E4]:8 r:q | r:8 [A3 D4 F4]:8 r:q r:8 [A3 D4 F4]:8 r:q | r:8 [G3 B3 E4]:8 r:q r:8 [G3 B3 E4]:8 r:q | r:8 [G3 C4 E4]:8 r:q r:8 [G3 C4 E4]:8 r:q | r:8 [A3 C4 E4]:8 r:q r:8 [A3 C4 E4]:8 r:q | r:8 [A3 D4 F4]:8 r:q r:8 [A3 D4 F4]:8 r:q | r:8 [G3 B3 E4]:8 r:q r:8 [G3 B3 E4]:8 r:q |" },
        { "instrument": "bass", "seq": "r:8 A1:8 r:8 A1:8 r:8 A1:8 r:8 A1:8 | r:8 F1:8 r:8 F1:8 r:8 F1:8 r:8 F1:8 | r:8 D2:8 r:8 D2:8 r:8 D2:8 r:8 D2:8 | r:8 E2:8 r:8 E2:8 r:8 E2:8 r:8 E2:8 | r:8 A1:8 r:8 A1:8 r:8 A1:8 r:8 A1:8 | r:8 F1:8 r:8 F1:8 r:8 F1:8 r:8 F1:8 | r:8 D2:8 r:8 D2:8 r:8 D2:8 r:8 D2:8 | r:8 E2:8 r:8 E2:8 r:8 E2:8 r:8 E2:8 |" },
        { "instrument": "drums", "seq": "kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 |" }
      ]
    },
    "task": "Dance topline.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "Am", "scale": "natural-minor", "allowPassing": false, "track": 0 },
      { "kind": "range", "low": "C4", "high": "E5", "track": 0 },
      { "kind": "repetition", "motifBars": 1, "minRepeats": 3, "allowTransposed": false, "track": 0 },
      { "kind": "max-leap", "semitones": 7, "track": 0 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

## Session 2: lo-fi R&B

```exercise
{
  "id": "e4-daw-lofi",
  "type": "daw-task",
  "title": "Topline 3: lo-fi R&B",
  "instructions": "8 bars. Syncopated and sparse — at least two bars mostly rest. Land a long note on a 7th or 9th of the chord at least four times (Dm9: C or E; Cmaj9: B or D; Am7: G; G13: F or A).",
  "spec": {
    "template": {
      "bpm": 80, "key": "C", "timeSig": "4/4",
      "tracks": [
        { "instrument": "lead", "seq": "" },
        { "instrument": "epiano", "seq": "[F3 A3 C4 E4]:w | [E3 G3 B3 D4]:w | [E3 G3 A3 C4]:w | [F3 A3 B3 E4]:w | [F3 A3 C4 E4]:w | [E3 G3 B3 D4]:w | [E3 G3 A3 C4]:w | [F3 A3 B3 E4]:w |" },
        { "instrument": "bass", "seq": "D2:h. A1:q | C2:h. G1:q | A1:h. E2:q | G1:h. D2:q | D2:h. A1:q | C2:h. G1:q | A1:h. E2:q | G1:h. D2:q |" },
        { "instrument": "drums", "seq": "[kick hihat]:8t r:8t hihat:8t [snare hihat]:8t r:8t hihat:8t r:8t r:8t [kick hihat]:8t [snare hihat]:8t r:8t hihat:8t | [kick hihat]:8t r:8t hihat:8t [snare hihat]:8t r:8t hihat:8t r:8t r:8t [kick hihat]:8t [snare hihat]:8t r:8t hihat:8t | [kick hihat]:8t r:8t hihat:8t [snare hihat]:8t r:8t hihat:8t r:8t r:8t [kick hihat]:8t [snare hihat]:8t r:8t hihat:8t | [kick hihat]:8t r:8t hihat:8t [snare hihat]:8t r:8t hihat:8t r:8t r:8t [kick hihat]:8t [snare hihat]:8t r:8t hihat:8t | [kick hihat]:8t r:8t hihat:8t [snare hihat]:8t r:8t hihat:8t r:8t r:8t [kick hihat]:8t [snare hihat]:8t r:8t hihat:8t | [kick hihat]:8t r:8t hihat:8t [snare hihat]:8t r:8t hihat:8t r:8t r:8t [kick hihat]:8t [snare hihat]:8t r:8t hihat:8t | [kick hihat]:8t r:8t hihat:8t [snare hihat]:8t r:8t hihat:8t r:8t r:8t [kick hihat]:8t [snare hihat]:8t r:8t hihat:8t | [kick hihat]:8t r:8t hihat:8t [snare hihat]:8t r:8t hihat:8t r:8t r:8t [kick hihat]:8t [snare hihat]:8t r:8t hihat:8t |" }
      ]
    },
    "task": "Lo-fi R&B topline.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": true, "track": 0 },
      { "kind": "range", "low": "C4", "high": "E5", "track": 0 },
      { "kind": "note-count", "min": 12, "max": 40, "track": 0 },
      { "kind": "syncopation", "minOffbeatRatio": 0.3, "track": 0 },
      { "kind": "custom", "id": "colour-landings", "note": "Self-check: four or more long notes land on a 7th or 9th of the chord." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "e5-reflect",
  "type": "reflect",
  "title": "Which groove wrote the best melody?",
  "spec": {
    "prompt": "Which of your three toplines is strongest, and what did the track contribute to it? Describe one change you made after reading an imaginary lyric along with it.",
    "minWords": 30
  }
}
```

## Between lessons

Replay your three toplines once each with fresh ears; pick the strongest and change just one note to make its hook clearer.
