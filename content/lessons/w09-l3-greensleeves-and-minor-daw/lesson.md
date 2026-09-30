---
id: w09-l3-greensleeves-and-minor-daw
title: Greensleeves and Your First Minor Song
week: 9
order: 3
phase: p2
duration_min: 50
goals:
  - Name the chords of A minor, including the upper-case III, VI and VII
  - Play the first half of "Greensleeves" and analyse its chords
  - Write an 8-bar minor piece on i – VI – III – VII with chords, bass and melody in the DAW
prerequisites: [w09-l2-harmonic-and-melodic-minor]
tags: [minor, song, progression, daw]
songs:
  - { title: "Greensleeves", composer: "Traditional (English)", public_domain: true }
---

# Greensleeves and Your First Minor Song

Today you make music in minor: a 400-year-old song first, then your own 8 bars.

## The chords of A minor

Build a triad on every note of A natural minor, using only white keys, and you get seven chords. The case rule is the same as always: **upper case = major triad, lower case = minor**, ° = diminished.

| degree | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|
| chord | Am | B° | C | Dm | Em | F | G |
| numeral | i | ii° | III | iv | v | VI | VII |

So **III, VI and VII** are upper case because C, F and G are major chords. These are the same chords you know from C major (C major's I, IV and V), now counted from A. Add the **V** from last lesson (E major, with G♯) and you have everything a minor song usually needs.

```example
{
  "title": "The major chords of A minor: III (C), VI (F), VII (G), then home to i (Am)",
  "bpm": 72, "timeSig": "4/4", "key": "Am",
  "tracks": [
    { "instrument": "piano", "seq": "[C4 E4 G4]:h [C4 F4 A4]:h | [B3 D4 G4]:h [C4 E4 A4]:h" },
    { "instrument": "piano", "seq": "C3:h F2:h | G2:h A2:h" }
  ],
  "show": ["keyboard"]
}
```

## Greensleeves

*Greensleeves* is in A minor and in 3/4. It uses both fifth chords from last lesson: Em (v) in the middle of the phrase, and E major (V) near the phrase ends, where the melody has its G♯. Near the very end you'll hear an F♯ too: melodic minor, climbing smoothly back home.

```example
{
  "title": "Greensleeves (traditional): melody and chords",
  "bpm": 100, "timeSig": "3/4", "key": "Am",
  "tracks": [
    { "instrument": "piano", "seq": "r:h A4:q | C5:h D5:q | E5:q. F5:8 E5:q | D5:h B4:q | G4:q. A4:8 B4:q | C5:h A4:q | A4:q. G#4:8 A4:q | B4:h G#4:q | E4:h A4:q | C5:h D5:q | E5:q. F5:8 E5:q | D5:h B4:q | G4:q. A4:8 B4:q | C5:q. B4:8 A4:q | G#4:q. F#4:8 G#4:q | A4:h. |" },
    { "instrument": "pad", "seq": "r:h. | [A2 C3 E3]:h. | [G2 C3 E3]:h. | [G2 B2 D3]:h. | [G2 B2 E3]:h. | [A2 C3 E3]:h. | [G#2 B2 E3]:h. | [G#2 B2 E3]:h. | [G#2 B2 E3]:h. | [A2 C3 E3]:h. | [G2 C3 E3]:h. | [G2 B2 D3]:h. | [G2 B2 E3]:h. | [A2 C3 E3]:h. | [G#2 B2 E3]:h. | [A2 C3 E3]:h. |" }
  ],
  "show": ["staff", "pianoroll"]
}
```

```exercise
{
  "id": "e1", "type": "roman-analysis", "title": "Name Greensleeves' chords",
  "instructions": "Key: A minor. Lower case for minor chords, upper case for major. Watch the difference between Em and E.",
  "passScore": 0.7,
  "spec": { "key": "Am", "chords": ["Am", "C", "G", "Em", "Am", "E"], "prompt": "symbols" }
}
```

```exercise
{
  "id": "e2", "type": "play-melody", "title": "Greensleeves, first half",
  "instructions": "Right hand, with the chords as backing. Shift up an octave if your keyboard ends at C5. The dotted rhythm (long, short, long) is the song's lilt.",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 80, "timeSig": "3/4", "key": "Am", "seq": "r:h A4:q | C5:h D5:q | E5:q. F5:8 E5:q | D5:h B4:q | G4:q. A4:8 B4:q | C5:h A4:q | A4:q. G#4:8 A4:q | B4:h G#4:q | E4:h. |", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "pad", "seq": "r:h. | [A2 C3 E3]:h. | [G2 C3 E3]:h. | [G2 B2 D3]:h. | [G2 B2 E3]:h. | [A2 C3 E3]:h. | [G#2 B2 E3]:h. | [G#2 B2 E3]:h. | [G#2 B2 E3]:h. |" } }
}
```

## Ear: short tunes in A minor

This lesson opens a melody rung in minor: after the minor cadence you hear five notes from A natural minor and play them back.

### Try it: echo a minor tune

1. Put your thumb on **A3**. Your five fingers now cover A B C D E.
2. Play **A C B A**, then **E D C B A**, then **C D E D C**. Say the directions aloud as you play ("up, down, down").
3. Play the example below, then echo it without looking at the notes: first note, then up/down, step/skip.

```exercise
{
  "id": "e5", "type": "ear-melody", "title": "Check: echo one minor tune",
  "instructions": "Listen, then play it back on the keyboard in any octave. Home is A.",
  "passScore": 0.7,
  "spec": { "key": "Am", "mode": "minor", "degrees": [1, 2, 3, 4, 5], "length": 5, "rhythm": "quarters", "answer": "play", "reference": "cadence",
    "example": { "title": "Mystery tune in A minor", "bpm": 80, "timeSig": "4/4", "key": "Am", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "A4:q C5:q B4:q D5:q | C5:q B4:q A4:h" } ] } }
}
```

**If you can't hear it yet:** find the first note alone. Replay, stop after note one, and search from A: is it A, or higher? Once the first note is right, get notes 1–3, replay, then add the rest. A wrong key is information: too high means one key down.

**Before the drill, rehearse the method** (also in the *How to do it* box above the drill, for the rung you're on): thumb on A; minor tunes often fall back to A; find the first note, then follow the up/down path; break five notes into 3 + 2. The drill runs at your current melody rung, so you'll meet minor tunes once the five-note echoes in C are solid.

```ladder
{ "skill": "melody", "unlocks": 11, "intro": "Opens \"Minor tunes in A\"; the drill runs at your current rung." }
```

## Ear corner: two octaves apart, one pair

This lesson also opens the next octave rung: a single pair, and the second note may be one **or two** octaves away — same note, or a different one? It's the same note name, just much further up.

### Try it: walk two octaves

1. Play **C3, C4, C5** one after another, slowly. Then C3 and C5 alone: the middle step is gone, and it's much harder to hear them as "the same".
2. Play C3, then C5, then **B4**, then **D5**. Which of the high notes feels like an echo of C3? Walk C3 – C4 – C5 again to check.
3. Repeat from A2 (A2 – A3 – A4) and from F3 (F3 – F4 – F5).

**If you can't hear it yet:** walk it on the keyboard: play the first note, jump 12 keys up, then 12 more, and compare the last key with the question's second note. Same key = same note.

**Before the drill, rehearse the method** (in the *How to do it* box): first note, imagine its octave, then the octave above that; does the second note sit on that last step? After answering, use "Walk up the octaves". You'll meet this rung once "which one?" with two octaves is solid.

```ladder
{ "skill": "octave", "unlocks": 10, "intro": "Opens \"Two octaves apart: same or different\"; the drill runs at your current octave rung." }
```

## The minor loop: i – VI – III – VII

Many modern songs in minor loop **Am – F – C – G**: **i – VI – III – VII**. There's no V with a G♯ in it, only natural-minor chords, so it sounds open and a bit "epic" rather than classical, and it never quite comes to rest.

These are C major's **vi – IV – I – V**, the same four chords. Which chord feels like home depends on where the loop starts and where the melody settles. Honestly, in a loop that never stops, home can feel vague; that's part of its sound.

### Try it: move home with your hands

1. Play Am – F – C – G, then end on **Am**, holding it. Then play the same four and end on **C** instead.
2. Which ending sounded more like "the end"? Most people hear Am as the end after starting on Am. There's no wrong answer here: this is about noticing.
3. Play the loop with the root alone in your left hand (A, F, C, G) and chords in the right.

```example
{
  "title": "i – VI – III – VII in A minor, with the roots on the bass",
  "bpm": 84, "timeSig": "4/4", "key": "Am", "loop": true,
  "tracks": [
    { "instrument": "piano", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w" },
    { "instrument": "bass", "seq": "A1:h A1:h | F1:h F1:h | C2:h C2:h | G1:h G1:h" }
  ],
  "show": ["keyboard", "pianoroll"]
}
```

```exercise
{
  "id": "e3", "type": "play-chord", "title": "Play the loop",
  "instructions": "Am – F – C – G. Keep common notes where they are: A and C stay from Am to F, C stays from F to C, G stays from C to G.",
  "count": 4, "passScore": 0.7,
  "spec": { "chords": ["Am", "F", "C", "G"], "inversion": "any", "sequence": true, "bpm": 70, "key": "Am" }
}
```

## Make it: an 8-bar minor piece

Use the loop twice. The piano chords are ready. Put the root of each chord on the bass, and a melody on the lead. Make the melody note on beat 1 of each bar a chord tone, and end on A.

```exercise
{
  "id": "e4", "type": "daw-task", "title": "8 bars in A minor",
  "spec": {
    "template": { "bpm": 84, "key": "Am", "timeSig": "4/4", "tracks": [
      { "instrument": "piano", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w | [A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "lead", "seq": "" } ] },
    "task": "Chords are ready (i – VI – III – VII twice). 1) On the bass track, play the root of each chord (A, F, C, G) in the low octave, at least on beats 1 and 3. 2) On the lead track, write an 8-bar melody using A natural minor (white keys). Put a chord tone on beat 1 of every bar, use at least two note values, and end on A.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "bass", "lead"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "range", "low": "E1", "high": "C3", "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1, 3], "progression": ["i", "VI", "III", "VII"], "barsPerChord": 1, "minRatio": 0.9, "track": 1 },
      { "kind": "in-key", "key": "A", "scale": "natural-minor", "allowPassing": false, "track": 2 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["i", "VI", "III", "VII"], "barsPerChord": 1, "minRatio": 0.75, "track": 2 },
      { "kind": "uses-rhythm", "values": ["h", "q", "8"], "minDistinct": 2, "track": 2 },
      { "kind": "ends-on", "degree": 1, "track": 2 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

**If you're stuck on the melody:** on beat 1 of each bar, play the top note of the chord (E, F, E, D — or any note of the chord), then fill the other beats with steps to the next bar's note. Play it with the chords and change anything that sounds sour.

## Between lessons

- **3 minutes, daily:** thumb on A, invent 5-note tunes in A B C D E and end on A; then play one with eyes closed and echo it.
- **2 minutes:** Greensleeves' first half, slowly, with the dotted lilt.
- **2 minutes:** walk octaves C3 – C4 – C5 and A2 – A3 – A4, then jump straight from the bottom to the top.
- Listen to your 8-bar piece once more and change one note you don't like.
