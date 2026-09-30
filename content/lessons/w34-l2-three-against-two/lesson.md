---
id: w34-l2-three-against-two
title: Three Against Two
week: 34
order: 2
phase: p4
duration_min: 45
goals:
  - Feel and tap the 3:2 composite rhythm
  - Play 3 against 2 with two hands
  - Hear 3:2 hiding inside 6/8 and 3/4 (and, optionally, a metric modulation)
prerequisites: [w34-l1-odd-meters, w14-l2-triplets-swing-and-six-eight]
tags: [rhythm, polyrhythm]
songs:
  - { title: "America (West Side Story)", composer: "Leonard Bernstein", public_domain: false }
---

# Three Against Two

## 3 against 2

A [[polyrhythm]] is two different even pulses at the same time. The most important one is **3:2**: three evenly spaced notes in the time of two. You hear it in West African drumming, Afro-Cuban music, film scores and a lot of 6/8 grooves.

Nobody counts two pulses separately. The trick is to learn the **composite rhythm**: the single pattern both parts make together. For 3:2 it is "ONE, two-and, three", or the phrase "**nice** cup of **tea**": both parts together on "nice", then the notes of the two parts alternate.

```example
{
  "title": "3:2: high pluck plays 3, low bass plays 2 (in 3/4)",
  "bpm": 72, "timeSig": "3/4", "key": "C",
  "tracks": [
    { "instrument": "pluck", "seq": "C5:q C5:q C5:q | C5:q C5:q C5:q | C5:q C5:q C5:q | C5:q C5:q C5:q |" },
    { "instrument": "bass", "seq": "C3:q. C3:q. | C3:q. C3:q. | C3:q. C3:q. | C3:q. C3:q. |" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

**What you will probably hear.** At first, most people hear only one of the two layers as "the beat" and the other as a slightly odd rhythm on top. That is fine. Tap the composite first; the feeling of two pulses at once comes later, with repetition.

### Try it

1. Loop the example. Tap only the high part with your right hand on the table: three taps a bar.
2. Now tap only the low part with your left hand: two taps a bar.
3. Say "**nice** cup of **tea**" slowly: *nice* = both hands, *cup* = right, *of* = left, *tea* = right. Repeat four times, then try it with the loop.

**Check:** your hands should never collide except on "nice", and "tea" should arrive just before the next "nice".

**If you can't hear it yet:** do step 3 without the sound, very slowly, just saying the words — the pattern lives in your hands first. Then set the loop playing and tap along only on "nice" until that feels settled, and add the other syllables one at a time.

## 3:2 inside 6/8 and 3/4

In week 14 you met 6/8: six 8ths felt as **two** beats of three (ONE-two-three FOUR-five-six). A bar of 3/4 has the same six 8ths grouped as **three** beats of two. Play both groupings at once and you have 3:2. Composers love to switch between them: Bernstein's "America" (by reference) alternates a bar felt in two with a bar felt in three, and that alternation is the whole character of the song.

```example
{
  "title": "Six 8ths: felt in two (6/8), then in three (3/4), then both at once",
  "bpm": 90, "timeSig": "6/8", "key": "C",
  "tracks": [
    { "instrument": "pluck", "seq": "C5:8 C5:8 C5:8 C5:8 C5:8 C5:8 | C5:8 C5:8 C5:8 C5:8 C5:8 C5:8 | C5:8 C5:8 C5:8 C5:8 C5:8 C5:8 | C5:8 C5:8 C5:8 C5:8 C5:8 C5:8 |" },
    { "instrument": "drums", "seq": "kick:q. snare:q. | kick:q snare:q snare:q | kick:q. snare:q. | kick:q snare:q snare:q |" },
    { "instrument": "bass", "seq": "r:q. r:q. | r:q. r:q. | C2:q. C2:q. | C2:q. C2:q. |" },
    { "instrument": "piano", "seq": "r:q. r:q. | r:q. r:q. | [C4 E4]:q [C4 E4]:q [C4 E4]:q | [C4 E4]:q [C4 E4]:q [C4 E4]:q |" }
  ],
  "show": ["pianoroll"]
}
```

## Drills

```exercise
{
  "id": "e1-tap-composite",
  "type": "rhythm-tap",
  "title": "Tap the 3:2 composite",
  "instructions": "'Nice cup of tea': hits on 1, 2, the 'and' of 2, and 3.",
  "passScore": 0.7,
  "spec": { "bpm": 70, "timeSig": "3/4", "seq": "x:q x:8 x:8 x:q | x:q x:8 x:8 x:q |", "showNotation": true, "countIn": 1, "loops": 4 }
}
```

```exercise
{
  "id": "e2-play-three-two",
  "type": "play-melody",
  "title": "3:2 hands together",
  "instructions": "Right hand C4 plays 3 even notes, left hand C3 plays 2. Together on beat 1.",
  "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "3/4", "key": "C", "seq": "[C3 C4]:q C4:8 C3:8 C4:q | [C3 C4]:q C4:8 C3:8 C4:q | [C3 C4]:q C4:8 C3:8 C4:q | [C3 C4]:q C4:8 C3:8 C4:q |", "showStaff": false, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e3-listen-poly",
  "type": "listen",
  "title": "Count the layers",
  "instructions": "Listen to each part on its own: first the high one, then the low one.",
  "spec": {
    "example": { "bpm": 72, "timeSig": "3/4", "key": "C", "hidden": true, "tracks": [
      { "instrument": "pluck", "seq": "C5:q C5:q C5:q | C5:q C5:q C5:q |" },
      { "instrument": "bass", "seq": "C3:q. C3:q. | C3:q. C3:q. |" } ] },
    "questions": [
      { "q": "How many notes per bar does the high part play?", "choices": ["2", "3"], "answer": 1 },
      { "q": "How many notes per bar does the low part play?", "choices": ["2", "3"], "answer": 0 }
    ]
  }
}
```

## Make it

1. **Drums first:** a kick on the two dotted quarters of each bar, hi-hat on every 8th. Loop it: that's the "2".
2. **Bass:** two dotted quarters per bar on the roots, A F C G — lined up with the kicks.
3. **Pluck:** three quarter notes per bar, a chord tone of each bar's chord (the "3").

**Judge it by ear:** loop and tap "nice cup of tea". If your "cup" and "of" don't match the pluck and bass, one of them is off the grid. **If you're stuck:** mute the pluck until drums + bass feel steady, then add it back.

```exercise
{
  "id": "e4-daw-poly",
  "type": "daw-task",
  "title": "A 3:2 texture in 6/8",
  "instructions": "In 6/8, write 4 bars on Am | F | C | G. Pluck: three quarter notes per bar (the '3'). Bass: two dotted quarters per bar, on the roots (the '2'). Drums: a kick on each dotted quarter and a hi-hat on every 8th. About 15 minutes.",
  "spec": {
    "template": { "bpm": 80, "key": "Am", "timeSig": "6/8", "tracks": [ { "instrument": "pluck", "seq": "" }, { "instrument": "bass", "seq": "" }, { "instrument": "drums", "seq": "" } ] },
    "task": "4 bars of 3:2 in 6/8.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["pluck", "bass", "drums"] },
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "note-count", "min": 12, "track": 0 },
      { "kind": "uses-rhythm", "values": ["q"], "minDistinct": 1, "track": 0 },
      { "kind": "uses-rhythm", "values": ["q."], "minDistinct": 1, "track": 1 },
      { "kind": "plays-progression", "progression": ["i", "VI", "III", "VII"], "barsPerChord": 1, "mode": "roots", "track": 1 },
      { "kind": "drum-pattern", "requires": ["kick", "hihat"], "track": 2 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

## Optional: hear a metric modulation

A [[metric modulation]] changes tempo by giving a small note value a new job. In the example below, bars 1–2 run at ♩ = 80 with triplet 8ths: 3 × 80 = 240 small notes per minute. At bar 3 those same small notes become plain 8ths (2 per beat), so the beat jumps to 240 ÷ 2 = **♩ = 120**. The stream of small notes never changes speed; the beat under it suddenly does. Listen for the drums: the kick and snare speed up, the pluck does not.

This is optional. Nothing later in the course depends on it; enjoy the trick.

```exercise
{
  "id": "e5-listen-metric-modulation",
  "type": "listen",
  "title": "A metric modulation you can hear",
  "spec": {
    "example": { "bpm": 80, "timeSig": "4/4", "key": "C", "tempoChanges": [ { "bar": 3, "bpm": 120 } ], "tracks": [
      { "instrument": "pluck", "seq": "C5:8t E5:8t G5:8t C5:8t E5:8t G5:8t C5:8t E5:8t G5:8t C5:8t E5:8t G5:8t | C5:8t E5:8t G5:8t C5:8t E5:8t G5:8t C5:8t E5:8t G5:8t C5:8t E5:8t G5:8t | C5:8 E5:8 G5:8 C5:8 E5:8 G5:8 C5:8 E5:8 | G5:8 C5:8 E5:8 G5:8 C5:8 E5:8 G5:8 C5:8 | G5:8 C5:8 E5:8 G5:8 C5:8 E5:8 G5:8 C5:8 |" },
      { "instrument": "drums", "seq": "kick:q hihat:q snare:q hihat:q | kick:q hihat:q snare:q hihat:q | kick:q hihat:q snare:q hihat:q | kick:q hihat:q snare:q hihat:q | kick:q hihat:q snare:q hihat:q |" } ] }
  }
}
```

## Ear review

**Method** (see the *How to do it* box): whatever your rung, find beat ONE first and count to the next ONE; for drum grids, one voice per pass.

```ladder
{ "skill": "rhythm", "unlocks": 15, "intro": "Rhythm at your current rung (the 4/4-or-5/4 rung opened last lesson is on this ladder)." }
```

## Between lessons

Tap "nice cup of tea" with both hands on your knees for a minute a day, then try keeping it going while a 3/4 or 6/8 song plays.
