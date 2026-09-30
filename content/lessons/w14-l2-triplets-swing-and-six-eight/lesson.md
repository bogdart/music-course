---
id: w14-l2-triplets-swing-and-six-eight
title: Triplets, Swing and 6/8
week: 14
order: 2
phase: p2
duration_min: 45
goals:
  - Count and tap eighth-note triplets ("1-trip-let")
  - Explain swing as long–short eighths built from triplets, and tap a swung beat
  - Explain compound meter (6/8) and hear it next to 3/4 and 4/4
prerequisites: [w14-l1-eighths-sixteenths-syncopation]
tags: [rhythm, triplets, swing, meter, ear]
songs:
  - { title: "Row, Row, Row Your Boat", composer: "Traditional", public_domain: true }
---

# Triplets, Swing and 6/8

So far every beat was divided into **two** (eighths) or **four** (sixteenths). Today: dividing it into **three**, and two big things that grow from that: swing and 6/8.

## Triplets

A [[triplet]] squeezes three equal notes into the time normally taken by two. The most common kind is the **eighth-note triplet**: three notes per beat instead of two. In notation it's three eighths with a small **3** over the beam; in the app's note language it's written `8t`. Count it **"1-trip-let, 2-trip-let"**.

```example
{
  "title": "Kick on every beat: straight eighths (1 bar), triplets (1 bar), sixteenths (1 bar)",
  "bpm": 72, "timeSig": "4/4",
  "tracks": [
    { "instrument": "drums", "seq": "hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8t hihat:8t hihat:8t hihat:8t hihat:8t hihat:8t hihat:8t hihat:8t hihat:8t hihat:8t hihat:8t hihat:8t | hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16" },
    { "instrument": "drums", "seq": "kick:q kick:q kick:q kick:q | kick:q kick:q kick:q kick:q | kick:q kick:q kick:q kick:q" }
  ],
  "show": ["staff"]
}
```

Triplets sound rolling, round, like "strawberry, strawberry" instead of the even "apple, apple" of straight eighths.

### Try it: two, three, four per beat

1. Foot on every beat. Say "ap-ple, ap-ple" (two per tap), then "straw-ber-ry, straw-ber-ry" (three per tap), then "wa-ter-mel-on" (four per tap). Keep the foot steady; only the words change.
2. Play the example again and say the matching word with each bar.
3. Tap a finger on every syllable of "straw-ber-ry" for four beats.

**If the three blurs into two or four:** slow down until you can say "straw-ber-ry" evenly, with no syllable longer than the others. Then tap *only* on "straw" (the beat) while still saying all three: the other two must fit exactly before the next foot tap.

```exercise
{
  "id": "e1", "type": "rhythm-tap", "title": "Tap triplets",
  "instructions": "Say '1-trip-let 2-trip-let' out loud, then tap: two beats of triplets, two quarters.",
  "passScore": 0.7,
  "spec": { "bpm": 66, "timeSig": "4/4", "seq": "x:8t x:8t x:8t x:8t x:8t x:8t x:q x:q", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

## Swing: long–short from triplets

In jazz, blues, shuffle rock and a lot of hip-hop, pairs of eighths are played **long–short** instead of evenly. That lilt is [[swing]]: think skipping instead of marching.

Where does the long–short come from? From triplets. Take the three triplet notes of a beat and **join the first two**: you get a long note (two thirds of the beat) and a short one (one third). Two triplet eighths joined make a *quarter-note triplet*, written `qt`, so one swung beat is `qt 8t`. Musicians rarely write it that way: they write ordinary eighths and add "swing" at the top of the music.

```example
{
  "title": "Straight eighths (2 bars), then swung eighths (2 bars): same notes, long–short",
  "bpm": 100, "timeSig": "4/4",
  "tracks": [
    { "instrument": "drums", "seq": "hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:qt hihat:8t hihat:qt hihat:8t hihat:qt hihat:8t hihat:qt hihat:8t | hihat:qt hihat:8t hihat:qt hihat:8t hihat:qt hihat:8t hihat:qt hihat:8t" },
    { "instrument": "drums", "seq": "kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q" }
  ],
  "show": ["pianoroll"]
}
```

Swing isn't just for the drums: once the hi-hat swings, bass, chords and melody should swing too, or the parts will fight.

### Try it

1. Say "straw-ber-ry" on each beat, then drop the middle syllable: "straw — ry, straw — ry". That's swing: long–short.
2. Say "doo-ba doo-ba" in the same long–short, then tap it with a finger.
3. Play C D E F G F E D on the keyboard as straight eighths, then again long–short. Same notes, different walk.

**If you can't hear the difference:** in the example, listen only to the note *after* each kick or snare. In the straight bars it comes exactly halfway; in the swung bars it comes late, just before the next beat.

```exercise
{
  "id": "e2", "type": "rhythm-tap", "title": "Tap a swung hi-hat",
  "instructions": "Long–short, long–short. Say 'doo-ba doo-ba'.",
  "passScore": 0.7,
  "spec": { "bpm": 90, "timeSig": "4/4", "seq": "x:qt x:8t x:qt x:8t x:qt x:8t x:qt x:8t", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

## 6/8: two big beats, each in three

In 3/4 and 4/4, each beat divides into two eighths: that's **simple meter**. In [[compound meter]] each beat divides into **three**. The common one is **6/8**: six eighth notes per bar, grouped 3 + 3, so there are **two** big beats (on eighths 1 and 4), each a dotted quarter long. Count "**1** 2 3 **4** 5 6", or feel it as "**one**-and-a **two**-and-a".

3/4 also has six eighths per bar, but grouped 2 + 2 + 2: three beats. Same number of eighths, a completely different swing of the body. Listen, the accents show the grouping:

```example
{
  "title": "Six eighths per bar: 3/4 (accents 1, 3, 5) for 2 bars, then 6/8 (accents 1, 4) for 2 bars",
  "bpm": 80, "timeSig": "3/4",
  "tracks": [
    { "instrument": "drums", "seq": ">kick:8 hihat:8 >snare:8 hihat:8 >snare:8 hihat:8 | >kick:8 hihat:8 >snare:8 hihat:8 >snare:8 hihat:8 | >kick:8 hihat:8 hihat:8 >snare:8 hihat:8 hihat:8 | >kick:8 hihat:8 hihat:8 >snare:8 hihat:8 hihat:8" }
  ],
  "show": ["pianoroll"]
}
```

A tune you know in 6/8: *Row, Row, Row Your Boat*. The "long–short" of "row, row, row your boat" is a quarter plus an eighth filling one big beat, and "merrily, merrily" is three eighths per big beat.

```example
{
  "title": "Row, Row, Row Your Boat (traditional), in 6/8",
  "bpm": 60, "timeSig": "6/8", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:q. C4:q. | C4:q D4:8 E4:q. | E4:q D4:8 E4:q F4:8 | G4:h. | C5:8 C5:8 C5:8 G4:8 G4:8 G4:8 | E4:8 E4:8 E4:8 C4:8 C4:8 C4:8 | G4:q F4:8 E4:q D4:8 | C4:h. |" } ],
  "show": ["staff"]
}
```

```exercise
{
  "id": "e3", "type": "play-melody", "title": "Row, Row, Row Your Boat in 6/8",
  "instructions": "Right hand. Feel two big beats per bar, not six small ones.",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 50, "timeSig": "6/8", "key": "C", "seq": "C4:q. C4:q. | C4:q D4:8 E4:q. | E4:q D4:8 E4:q F4:8 | G4:h. | C5:8 C5:8 C5:8 G4:8 G4:8 G4:8 | E4:8 E4:8 E4:8 C4:8 C4:8 C4:8 | G4:q F4:8 E4:q D4:8 | C4:h. |", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

### Try it: sway, don't count

1. Play the 3/4-then-6/8 example. During the 3/4 bars, nod on the accents: 1, 3, 5 — three nods per bar, like a waltz.
2. During the 6/8 bars, sway your body left, right: two sways per bar, each covering three eighths.
3. Play *Row, Row* again and sway: two sways per bar, "ROW, ROW" on the sways.

**If 3/4 and 6/8 sound the same:** find the kick (the loud ONE) and count eighths until the next accent. Accent after 2 eighths = 3/4; after 3 = 6/8. Clap along, counting aloud "1 2 3 4 5 6", and clap loudly only on the accents.

Check: answer, then read the explanation.

```exercise
{
  "id": "e5", "type": "listen", "title": "Check: twos or threes?",
  "instructions": "Foot on the kick. Count what happens between two kicks.",
  "spec": {
    "examples": [
      { "title": "Groove 1", "bpm": 72, "timeSig": "4/4", "hidden": true, "tracks": [ { "instrument": "drums", "seq": "[kick hh]:8t hh:8t hh:8t [kick hh]:8t hh:8t hh:8t [kick hh]:8t hh:8t hh:8t [kick hh]:8t hh:8t hh:8t" } ] },
      { "title": "Groove 2", "bpm": 80, "timeSig": "6/8", "hidden": true, "tracks": [ { "instrument": "drums", "seq": ">kick:8 hihat:8 hihat:8 >snare:8 hihat:8 hihat:8 | >kick:8 hihat:8 hihat:8 >snare:8 hihat:8 hihat:8" } ] },
      { "title": "Groove 3", "bpm": 80, "timeSig": "3/4", "hidden": true, "tracks": [ { "instrument": "drums", "seq": ">kick:8 hihat:8 >snare:8 hihat:8 >snare:8 hihat:8 | >kick:8 hihat:8 >snare:8 hihat:8 >snare:8 hihat:8" } ] }
    ],
    "questions": [
      { "q": "Groove 1: hi-hat notes per kick?", "choices": ["2", "3", "4"], "answer": 1, "explain": "Three: triplets, 'straw-ber-ry' on every beat." },
      { "q": "Groove 2 is…", "choices": ["3/4", "6/8"], "answer": 1, "explain": "6/8: accents on eighths 1 and 4, two big beats each split in three." },
      { "q": "Groove 3 is…", "choices": ["3/4", "6/8"], "answer": 0, "explain": "3/4: accents on eighths 1, 3 and 5, three beats each split in two." }
    ]
  }
}
```

This lesson opens two rhythm rungs: choosing rhythms with triplets, then naming the meter, with 6/8 joining 3/4 and 4/4.

**Before the drill, rehearse the method** (in the *How to do it* box above the drill, for the rung you're on): for triplets, keep your foot on the beat and ask whether each beat splits in two ("ap-ple"), three ("straw-ber-ry") or four; for the meter, don't count single notes — sway, and ask how many big steps per bar and whether each splits in two or three. The drill runs at your current rhythm rung.

```ladder
{ "skill": "rhythm", "unlocks": 10, "intro": "Opens: triplets; then which meter — 3/4, 4/4 or 6/8? The drill runs at your current rhythm rung." }
```

```exercise
{
  "id": "e4", "type": "quiz", "title": "Threes check",
  "spec": { "questions": [
    { "q": "An eighth-note triplet puts how many notes in one beat?", "choices": ["2", "3", "4", "6"], "answer": 1 },
    { "q": "Swung eighths are played…", "choices": ["exactly even", "long–short", "short–long", "as sixteenths"], "answer": 1, "explain": "The first two notes of a triplet joined, then the third: two thirds + one third of the beat." },
    { "q": "How many big beats are in a bar of 6/8?", "choices": ["2", "3", "6"], "answer": 0, "explain": "Six eighths grouped 3 + 3: two dotted-quarter beats." },
    { "q": "3/4 and 6/8 both have six eighths per bar. The difference is…", "choices": ["the tempo", "how the eighths are grouped", "nothing"], "answer": 1, "explain": "3/4 groups them 2+2+2 (three beats), 6/8 groups them 3+3 (two beats)." }
  ] }
}
```

## Between lessons

- **2 minutes:** foot on the beat, "ap-ple / straw-ber-ry / wa-ter-mel-on", switching every four beats.
- **2 minutes:** C D E F G F E D straight, then swung, on the keyboard.
- **2 minutes:** play *Row, Row, Row Your Boat* and sway two per bar.
- **Listening:** pick any song and ask: does the beat split in two or three? Swing and shuffle songs split in three.
