---
id: w21-l2-textural-build
title: Texture, Comping and the Build
week: 21
order: 2
phase: p3
duration_min: 50
goals:
  - Choose between a sustained pad and rhythmic comping for a section
  - Plan a textural build with an arrangement map (sections x instruments)
  - Hear where layers enter and leave in an arrangement
prerequisites: [w21-l1-frequency-roles-and-doubling]
tags: [arrangement, texture, comping, daw, ear]
songs:
  - { title: "Smells Like Teen Spirit", composer: "Kurt Cobain, Krist Novoselic, Dave Grohl (Nirvana)", public_domain: false }
  - { title: "In the Air Tonight", composer: "Phil Collins", public_domain: false }
  - { title: "Rolling in the Deep", composer: "Adele Adkins, Paul Epworth", public_domain: false }
---

# Texture, Comping and the Build

The biggest energy tool in pop is not a new chord or a louder melody. It is [[texture]]: how many layers are playing, and what they are doing.

## Pad or comping?

The same chord can be played two ways:

- A **[[pad]]** holds it — long notes, soft attack. It fills space and feels calm and wide.
- **[[Comping]]** repeats it rhythmically — short stabs, often off the beat. It adds motion and drives the groove.

Verses often use one of them, sparsely; choruses often use both (comping for drive, pad for width).

```example
{
  "title": "Same chords (Am F C G): pad (bars 1-4), then comping (bars 5-8)",
  "bpm": 96, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "pad", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w | r:w | r:w | r:w | r:w" },
    { "instrument": "epiano", "seq": "r:w | r:w | r:w | r:w | r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 [A3 C4 E4]:8 r:8 | r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 [A3 C4 F4]:8 r:8 | r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 [G3 C4 E4]:8 r:8 | r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 [G3 B3 D4]:8 r:8" }
  ],
  "show": ["pianoroll"],
  "loop": false
}
```

**Try it:** play the example and tap the table whenever a chord *starts*. **Check:** in bars 1–4 you tap once per bar (then just wait); in bars 5–8 your hand is busy, and mostly *between* your foot's beats. **If you can't hear it yet:** hold an A minor chord on your keyboard for four beats, then play it as short stabs on the "ands" — the first sits still, the second moves. That's the whole difference.

```exercise
{
  "id": "play-comping",
  "type": "play-melody",
  "title": "Comp the chords yourself",
  "instructions": "Short chords on the 'ands' (and one on beat 4), rest on the beats. Hold each chord shape with your right hand.",
  "spec": { "bpm": 72, "timeSig": "4/4", "key": "C", "seq": "r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 [A3 C4 E4]:8 r:8 | r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 [A3 C4 F4]:8 r:8", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "drums", "seq": "kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q" } }
}
```

## The build

A song gets bigger by **adding layers** and smaller by **removing** them. Plan it first with an [[arrangement map]]: sections across, instruments down, an X where a part plays.

| | Intro | Verse | Chorus | Verse 2 | Chorus 2 |
|---|---|---|---|---|---|
| Comp (epiano) | X | X | X | X | X |
| Bass | | X | X | X | X |
| Drums | | hats | full | full | full + crash |
| Pad | | | X | | X |

Two rules: **every new section changes at least one row**, and **the second chorus is the biggest moment so far**. Removing is as strong as adding: dropping the drums for two beats before a chorus makes the chorus hit harder.

Here are 8 bars that add one layer every two bars:

```example
{
  "title": "Textural build: comp, + bass, + kick and hats, + full drums and pad",
  "bpm": 96, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "epiano", "seq": "r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 [A3 C4 E4]:8 r:8 | r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 [A3 C4 F4]:8 r:8 | r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 [G3 C4 E4]:8 r:8 | r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 [G3 B3 D4]:8 r:8 | r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 [A3 C4 E4]:8 r:8 | r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 [A3 C4 F4]:8 r:8 | r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 [G3 C4 E4]:8 r:8 | r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 [G3 B3 D4]:8 r:8" },
    { "instrument": "bass", "seq": "r:w | r:w | A1:h A1:h | F1:h F1:h | A1:h A1:h | F1:h F1:h | C2:8 C2:8 C2:8 C2:8 C2:8 C2:8 C2:8 C2:8 | G1:8 G1:8 G1:8 G1:8 G1:8 G1:8 G1:8 G1:8" },
    { "instrument": "drums", "seq": "r:w | r:w | r:w | r:w | kick:8 hihat:8 hihat:8 hihat:8 kick:8 hihat:8 hihat:8 hihat:8 | kick:8 hihat:8 hihat:8 hihat:8 kick:8 hihat:8 hihat:8 hihat:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" },
    { "instrument": "pad", "seq": "r:w | r:w | r:w | r:w | r:w | r:w | [E4 G4 C5]:w | [D4 G4 B4]:w" }
  ],
  "show": ["pianoroll"],
  "loop": false
}
```

### Try it: hearing entrances

1. Play the build above and count bars out loud ("ONE two three four, TWO…").
2. Listen for one thing per pass: first *when does something low join?* (the bass), then *when do the drums start?*, then *when does a wide, soft layer appear on top?* (the pad).
3. Note each answer as a bar number, then check against the piano roll.

**Check:** bass at bar 3, kick and hats at bar 5, full drums and pad at bar 7.

**If you can't hear it yet:** keep your eyes on the piano roll the first time — each track's notes begin where it enters. Then listen again eyes closed and raise a finger at each entrance. Now do the same, without looking, on the hidden build below.

```exercise
{
  "id": "listen-build-hidden",
  "type": "listen",
  "title": "Who enters when?",
  "instructions": "A different build — the notation stays hidden. Count bars as you listen; play it as often as you like.",
  "spec": {
    "example": { "hidden": true, "bpm": 96, "timeSig": "4/4", "key": "C", "tracks": [
      { "instrument": "pad", "seq": "[C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w | [C3 G3 E4]:w | [B2 G3 D4]:w | [C3 A3 E4]:w | [C3 A3 F4]:w" },
      { "instrument": "drums", "seq": "r:w | r:w | kick:8 hihat:8 hihat:8 hihat:8 kick:8 hihat:8 hihat:8 hihat:8 | kick:8 hihat:8 hihat:8 hihat:8 kick:8 hihat:8 hihat:8 hihat:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" },
      { "instrument": "bass", "seq": "r:w | r:w | r:w | r:w | C2:h C2:h | G1:h G1:h | A1:8 A1:8 A1:8 A1:8 A1:8 A1:8 A1:8 A1:8 | F1:8 F1:8 F1:8 F1:8 F1:8 F1:8 F1:8 F1:8" }
    ] },
    "questions": [
      { "q": "What plays alone at the start?", "choices": ["A sustained pad", "Comping stabs"], "answer": 0, "explain": "A pad: long held chords, no rhythm." },
      { "q": "In which bar do the drums enter?", "choices": ["Bar 3", "Bar 5"], "answer": 0, "explain": "Bar 3, with kick and hats only; the snare and a crash join at bar 5." },
      { "q": "In which bar does the bass enter?", "choices": ["Bar 3", "Bar 5"], "answer": 1 },
      { "q": "What changes in the bass at bar 7?", "choices": ["Half notes become driving eighths", "It stops"], "answer": 0 }
    ]
  }
}
```

## Three famous builds — verdict first

Put on each song (any streaming service), listen with the questions in mind, answer, and only then read the explanation.

```exercise
{
  "id": "quiz-famous-builds",
  "type": "quiz",
  "title": "Texture in three songs",
  "spec": { "questions": [
    { "q": "\"Smells Like Teen Spirit\" (Nirvana): how does the verse compare with the chorus?", "choices": ["Verse quiet and sparse, chorus loud and distorted", "Both equally loud", "Verse loud, chorus quiet"], "answer": 0, "explain": "The quiet/loud model: a sparse, clean verse, an explosive distorted chorus on the same four-chord riff. F minor, about 117 BPM." },
    { "q": "\"In the Air Tonight\" (Phil Collins): when does the full live drum kit come crashing in?", "choices": ["In the first bar", "Only after more than three minutes"], "answer": 1, "explain": "Around 3:40 — before that there is only a quiet drum machine. Withholding a layer for minutes makes its entrance one of the biggest texture changes in pop." },
    { "q": "\"Rolling in the Deep\" (Adele): what plays at the very start?", "choices": ["The full band", "One strummed guitar and the voice"], "answer": 1, "explain": "A lone guitar and voice; then a kick drum joins, then the band, then backing vocals — a textbook build. C minor, about 105 BPM." }
  ] }
}
```

## Ear: naming chords through a band

Last lesson the bass drill moved into a small band; this lesson opens the same step for the progression drill: name the chords (I, ii, IV, V, vi) while drums, pad, bass and a melody play. The drill runs at your current progression rung, which may still be an earlier one.

**Before the drill** — the method (also in the *How to do it* box next to the drill): focus on the bass under the band. Find home first; then name each chord by its bass note (which degree?) and its colour (major or minor). ii is the minor chord with the bass on degree 2. If a chord is unclear, replay and play the bass note you think you hear on the keyboard.

```ladder
{ "skill": "progressions", "unlocks": 14, "intro": "Opens: name the chords (I, ii, IV, V, vi) with the whole band playing. The drill runs at your current progression rung." }
```

## Two notes at once: 3rds and 6ths

When a second line (strings, backing vocals) follows the lead, it usually sits a 3rd or a 6th away, so the two always sound together. You met harmonic intervals in week 10: a 3rd or 6th sounds sweet and blended, a 5th or octave more hollow. You'll use this for counter-melodies next lesson.

**Try it:** on your keyboard play C4 + E4 together (a 3rd), then C4 + A4 (a 6th), then C4 + G4 (a 5th), each for two seconds. **Check:** the 3rd is close and warm, the 6th sweet but wider and more open, the 5th hollow. **If you can't hear it yet:** don't judge sweetness — play the pair, then play its two notes one after the other: small step apart = 3rd, clearly wide = 6th. Then play them together again and connect the sound to what you just found.

**Before the drill** — the method (also in the *How to do it* box next to the drill): first ask "one note, hollow pair or sweet pair?" (octave, 5th, 3rd); when the choice is 3rd vs 6th, ask "close and warm, or wide and open?" and then "brighter or darker?" for major vs minor.

```example
{ "title": "A tune alone, then with a second line a 3rd below", "bpm": 80, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "lead", "seq": "E4:q F4:q G4:q E4:q | D4:h C4:h | E4:q F4:q G4:q E4:q | D4:h C4:h" }, { "instrument": "strings", "seq": "r:w | r:w | C4:q D4:q E4:q C4:q | B3:h A3:h" } ], "show": ["staff"], "loop": false }
```

```ladder
{ "skill": "intervals", "unlocks": 18, "intro": "Opens: two notes at once — first 3rd, 5th or octave, then 3rds against 6ths. The drill runs at your current interval rung." }
```

**Making the 16 bars.** Write the map first — five rows, four columns (bars 1–4, 5–8, 9–12, 13–16). Build each part as one 4-bar clip and copy it. **Judge it by ear:** play from bar 1 to the end without stopping; each new block should feel bigger than the last, and bar 13 the biggest. **If you're stuck:** if bar 13 doesn't lift, the drop in bar 12 is probably missing, or the pad sits too low — move it above the comping.

```exercise
{
  "id": "daw-build-16",
  "type": "daw-task",
  "title": "A 16-bar build",
  "spec": {
    "template": { "bpm": 96, "key": "C", "tracks": [
      { "instrument": "epiano", "seq": "r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 [A3 C4 E4]:8 r:8 | r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 [A3 C4 F4]:8 r:8 | r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 [G3 C4 E4]:8 r:8 | r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 [G3 B3 D4]:8 r:8 | r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 [A3 C4 E4]:8 r:8 | r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 [A3 C4 F4]:8 r:8 | r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 [G3 C4 E4]:8 r:8 | r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 [G3 B3 D4]:8 r:8 | r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 [A3 C4 E4]:8 r:8 | r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 [A3 C4 F4]:8 r:8 | r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 [G3 C4 E4]:8 r:8 | r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 [G3 B3 D4]:8 r:8 | r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 [A3 C4 E4]:8 r:8 | r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 [A3 C4 F4]:8 r:8 | r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 [G3 C4 E4]:8 r:8 | r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 [G3 B3 D4]:8 r:8" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "drums", "seq": "" },
      { "instrument": "pad", "seq": "" }
    ] },
    "task": "Write a 5-line arrangement map in your notes first. Then build it (Am - F - C - G repeats every 4 bars): bars 1-4 comping only; the bass enters at bar 5 (half-note roots A, F, C, G); drums at bar 9 (kick and hats only); full drums with a crash and a pad at bar 13. Remove everything except the comping for beats 3-4 of bar 12 — a tiny drop before the peak. Tip: write one 4-bar clip per part, then copy it.",
    "checks": [
      { "kind": "bars", "min": 16, "max": 16 },
      { "kind": "has-tracks", "instruments": ["epiano", "bass", "drums", "pad"] },
      { "kind": "in-key", "key": "C", "scale": "major", "track": 1 },
      { "kind": "range", "low": "E1", "high": "C3", "track": 1 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat", "crash"], "track": 2 },
      { "kind": "custom", "id": "layers-enter-on-schedule", "note": "Self-check: bass from bar 5, drums from bar 9, pad and full drums from bar 13, mini drop in bar 12." }
    ],
    "minBars": 16, "maxBars": 16
  }
}
```

## Between lessons

Pick one song and draw its arrangement map for the first minute: sections across, the instruments you hear down. Count bars; one instrument per pass.
