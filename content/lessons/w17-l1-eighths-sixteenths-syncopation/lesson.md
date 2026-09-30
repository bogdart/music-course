---
id: w17-l1-eighths-sixteenths-syncopation
title: Sixteenths and Syncopation
week: 17
order: 1
phase: p2
duration_min: 45
goals:
  - Count and tap sixteenth notes with "1 e & a"
  - Feel and tap syncopated rhythms that accent the off-beats
  - Recognise and tap back one-bar rhythms with sixteenths
prerequisites: [w16-l3-analysing-three-pop-songs]
tags: [rhythm, groove, ear]
---

# Sixteenths and Syncopation

Weeks of harmony: time to move. Groove comes from two things: dividing the beat into small pieces, and putting accents where the ear doesn't expect them.

## Sixteenth notes

You count eighths as "1 & 2 & 3 & 4 &". Split each eighth in half again and you get [[sixteenth note]]s: four per beat, counted **"1 e & a, 2 e & a…"** (say "one-ee-and-uh"). At 90 BPM that's six notes a second, the busy hi-hat of funk, disco and a lot of pop. In notation a sixteenth has two flags (or two beams).

Listen: the kick stays on every beat while the hi-hat goes from quarters to eighths to sixteenths. The beat never changes, only how finely it's divided.

```example
{
  "title": "Hi-hat in quarters, then eighths, then sixteenths; kick on every beat",
  "bpm": 80, "timeSig": "4/4",
  "tracks": [
    { "instrument": "drums", "seq": "hihat:q hihat:q hihat:q hihat:q | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16" },
    { "instrument": "drums", "seq": "kick:q kick:q kick:q kick:q | kick:q kick:q kick:q kick:q | kick:q kick:q kick:q kick:q" }
  ],
  "show": ["staff"]
}
```

### Try it: four taps per beat

1. Tap your foot on the kick in the example (one per beat) and keep it going all the time.
2. With the foot going, say "1 & 2 & 3 & 4 &" out loud: two syllables per foot tap.
3. Now say "1 e & a 2 e & a…": four syllables per foot tap. Tap a finger on the table on every syllable. Slow the example down in your head if needed; the foot is the boss.
4. Keep saying all four syllables, but tap only on "1", "&" and "a". That's the "1 & a" figure below.

**If you can't keep up:** halve the speed. Set the metronome in the DAW to 50 BPM and count "1 e & a" out loud to it; speed means nothing until the four syllables are even. Count first, tap second.

The most common sixteenth figures mix an eighth with two sixteenths: "1 & a" (eighth, sixteenth, sixteenth) or "1 e &" (sixteenth, sixteenth, eighth). Count them aloud as you tap.

```exercise
{
  "id": "e1", "type": "rhythm-tap", "title": "Mixing values",
  "instructions": "Count out loud: '1, 2 &, 3 e & a, 4'.",
  "passScore": 0.7,
  "spec": { "bpm": 70, "timeSig": "4/4", "seq": "x:q x:8 x:8 x:16 x:16 x:16 x:16 x:q", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "e2", "type": "read-rhythm", "title": "Read and tap sixteenths",
  "count": 8, "passScore": 0.7,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "16", "bpm": 66 }
}
```

Check: how finely is the beat divided? Answer, then read the explanation.

```exercise
{
  "id": "e5", "type": "listen", "title": "Check: two or four per beat?",
  "instructions": "Tap your foot on the kick and count along before you answer.",
  "spec": {
    "examples": [
      { "title": "Beat 1", "bpm": 72, "timeSig": "4/4", "hidden": true, "tracks": [ { "instrument": "drums", "seq": "[kick hh]:16 hh:16 hh:16 hh:16 [kick hh]:16 hh:16 hh:16 hh:16 [kick hh]:16 hh:16 hh:16 hh:16 [kick hh]:16 hh:16 hh:16 hh:16" } ] },
      { "title": "Beat 2", "bpm": 72, "timeSig": "4/4", "hidden": true, "tracks": [ { "instrument": "drums", "seq": "[kick hh]:8 hh:8 [kick hh]:8 hh:8 [kick hh]:8 hh:8 [kick hh]:8 hh:8" } ] }
    ],
    "questions": [
      { "q": "Beat 1: hi-hat notes per kick?", "choices": ["2 (eighths)", "4 (sixteenths)"], "answer": 1, "explain": "Four: 1 e & a on every beat." },
      { "q": "Beat 2: hi-hat notes per kick?", "choices": ["2 (eighths)", "4 (sixteenths)"], "answer": 0, "explain": "Two: 1 & 2 &. If you heard four, count out loud with the replay: only '1 &' fits." }
    ]
  }
}
```

This lesson opens two rhythm rungs with sixteenths: first choosing which rhythm you heard, then tapping it back.

**Before the drill, rehearse the method** (in the *How to do it* box above the drill, for the rung you're on): keep your foot on the beat and count "1 e & a" out loud; for choosing, count the fast notes in groups of four and match them to the options; for tapping, go slow and tap only where the notes are, keep counting through the gaps. The drill runs at your current rhythm rung, which may still be an earlier one.

```ladder
{ "skill": "rhythm", "unlocks": 8, "intro": "Opens \"Choose: sixteenths\" and \"Tap: sixteenths\"; the drill runs at your current rhythm rung." }
```

## Syncopation

[[Syncopation]] means accenting a note that falls *between* the beats (on an "&", "e" or "a") and often *not* playing on the beat that follows. The ear expects the beat; when the accent comes early, it creates a push, a lean forward. That push is a large part of what makes music feel groovy.

A test: tap your foot on every beat and clap the rhythm. If clap and foot often miss each other, the rhythm is syncopated.

The most famous syncopation in pop is **3 + 3 + 2**: eight eighths grouped as dotted quarter, dotted quarter, quarter. Accents land on 1, the "&" of 2, and 4. You hear it in reggaeton, dancehall, Latin music and countless pop choruses.

```example
{
  "title": "Straight quarters, then 3+3+2 (twice), then a syncopated bar; the kick stays on the beat",
  "bpm": 96, "timeSig": "4/4", "loop": true,
  "tracks": [
    { "instrument": "drums", "seq": "clap:q clap:q clap:q clap:q | clap:q. clap:q. clap:q | clap:q. clap:q. clap:q | clap:8 clap:q clap:8 r:8 clap:8 clap:q" },
    { "instrument": "drums", "seq": "kick:q kick:q kick:q kick:q | kick:q kick:q kick:q kick:q | kick:q kick:q kick:q kick:q | kick:q kick:q kick:q kick:q" }
  ],
  "show": ["staff"]
}
```

### Try it: foot on the beat, hands off it

1. Foot on every beat. Clap on every beat too: foot and hands together. Straight.
2. Keep the foot. Count eight eighths, "ONE two three ONE two three ONE two", and clap only on the capitals. Clap 2 lands *between* two foot taps: that's the push.
3. Loop the example and clap with its second bar. If your clap keeps drifting onto the foot, count louder and slower.

**If you can't feel it yet:** write the eight counts on paper, circle 1, 4 and 7, and tap your finger along the row while counting. Once the pattern is in your fingers the "push" feeling follows.

Check: which one is syncopated? Answer, then read the explanation.

```exercise
{
  "id": "e6", "type": "listen", "title": "Check: on the beat or between?",
  "instructions": "Tap your foot on the kick. Does the clap often miss your foot?",
  "spec": {
    "examples": [
      { "title": "Clap 1", "bpm": 90, "timeSig": "4/4", "hidden": true, "tracks": [ { "instrument": "drums", "seq": "clap:q clap:q clap:h" }, { "instrument": "drums", "seq": "kick:q kick:q kick:q kick:q" } ] },
      { "title": "Clap 2", "bpm": 90, "timeSig": "4/4", "hidden": true, "tracks": [ { "instrument": "drums", "seq": "clap:q. clap:q. clap:q" }, { "instrument": "drums", "seq": "kick:q kick:q kick:q kick:q" } ] }
    ],
    "questions": [
      { "q": "Which clap is syncopated?", "choices": ["Clap 1", "Clap 2"], "answer": 1, "explain": "Clap 2 is 3 + 3 + 2: its second clap falls on the '&' of 2, between two kicks. Clap 1 always lands with the kick." }
    ]
  }
}
```

```exercise
{
  "id": "e3", "type": "rhythm-tap", "title": "Tap 3 + 3 + 2",
  "instructions": "Count all eight eighths in your head: ONE two three ONE two three ONE two.",
  "passScore": 0.7,
  "spec": { "bpm": 90, "timeSig": "4/4", "seq": "x:q. x:q. x:q | x:q. x:q. x:q", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "e4", "type": "play-melody", "title": "A syncopated melody",
  "instructions": "Right hand. Several notes start on an '&' and hold across the beat. Don't rush them.",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "C4:8 E4:q G4:q E4:q C4:8 | D4:8 F4:q A4:q. r:q | G4:q. E4:q. C4:q | D4:8 E4:8 r:8 C4:8 r:h", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "pad", "seq": "[C3 E3 G3]:w | [D3 F3 A3]:w | [C3 E3 G3]:w | [B2 D3 G3]:h [C3 E3 G3]:h" } }
}
```

## Ear corner: octave or fifth

A short break from rhythm. In week 12 you met the fifth trap: a 5th (or 4th) is the most octave-like sound there is. In week 15 the interval drill asked "5th or octave?". Now the octave drill takes the same trap in two steps; this lesson opens both, and the drill runs at your current octave rung, one at a time.

**Together.** Played at once, an octave melts into one sound, and a 5th nearly does too.

1. Hold C3 and C4 together, then C3 and G3, then C3 and F3. The octave sounds like one fuller note; the 5th and 4th are open and hollow, but you can hear two notes if you listen for the top one.
2. Hum the top note of each pair. With the octave, your hum matches the bottom note's name.

**One after the other.** Harder, because nothing melts.

1. Play C3, then C4. Then C3, then G3. Then C3, then F3. Hum the first note while the second sounds: with the octave your hum fits; with the others it rubs.
2. Repeat from D2 and from A2, where low notes make it harder.

**If you can't hear it yet:** play the lower note alone, then the pair. If the pair sounds like the same note made richer, it's the octave. One after the other: play the question's first note, then both candidates (its octave and its 5th), and pick the closer match.

```ladder
{ "skill": "octave", "unlocks": 10, "intro": "Opens \"Octave or fifth? (together)\", then \"Octave or fifth? (one after the other)\"; the drill runs at your current rung." }
```

## Between lessons

- **3 minutes:** foot on the beat, say "1 e & a" out loud at a slow tempo; then tap only "1 & a", then only "1 e &".
- **2 minutes:** clap 3 + 3 + 2 over your foot, counting the eight eighths.
- **Listening:** in any pop or funk song, tap your foot and count how many hi-hat notes fall on each tap: two or four?
- **1 minute:** from low notes, play the octave and the fifth, together and then one after the other, humming the first note.
- One rhythm session and one octave session on the Practice page.
