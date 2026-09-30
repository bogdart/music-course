---
id: w14-l3-two-genre-grooves-daw
title: "Two Grooves: Rock and Hip-Hop"
week: 14
order: 3
phase: p2
duration_min: 50
goals:
  - Know the jobs of kick, snare and hi-hat, and the backbeat
  - Describe a rock beat and a boom-bap hip-hop beat by tempo, kick pattern and hi-hat
  - Build a 4-bar drums + bass + chords loop in each of the two genres
prerequisites: [w14-l2-triplets-swing-and-six-eight]
tags: [rhythm, drums, genres, groove, daw]
songs:
  - { title: "Billie Jean", composer: "Michael Jackson (1982)", public_domain: false }
---

# Two Grooves: Rock and Hip-Hop

## Three drums, three jobs

A drum kit looks complicated, but most pop grooves are built from three sounds:

- **Kick** (bass drum): the low thump. It marks the strong beats and locks with the bass.
- **Snare** (or a clap): the sharp crack on beats **2 and 4**, the [[backbeat]]. It's what a crowd claps along to.
- **Hi-hat**: the ticking cymbal that shows the subdivision, eighths or sixteenths, straight or swung.

A genre's rhythmic fingerprint is mostly three choices: **tempo**, **where the kick goes**, and **what the hi-hat does**. The snare stays on 2 and 4 almost everywhere.

| | tempo | kick | hi-hat | feel |
|---|---|---|---|---|
| **Rock / pop** | 100–140 | 1 and 3 (maybe the "&" of 2) | straight eighths | driving, even |
| **Hip-hop (boom bap)** | 85–95 | syncopated, between the beats | eighths, often swung | laid-back, heavy |

## Rock / pop

```example
{
  "title": "Rock at 120: kick 1, &-of-2 and 3; snare 2 & 4; straight eighth hats; bass with the kick",
  "bpm": 120, "timeSig": "4/4", "loop": true,
  "tracks": [
    { "instrument": "drums", "seq": "hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8" },
    { "instrument": "drums", "seq": "kick:q r:8 kick:8 kick:q r:q" },
    { "instrument": "drums", "seq": "r:q snare:q r:q snare:q" },
    { "instrument": "bass", "seq": "G1:q r:8 G1:8 G1:q r:q" }
  ],
  "show": ["pianoroll"]
}
```

Michael Jackson's *Billie Jean* (1982) opens with a beat of this family: kick on 1 and 3, snare on 2 and 4, steady hats. Put it on and tap the snare along: proof that a simple beat played perfectly is enough.

### Try it: be the drummer

1. Left hand on your thigh = kick, right hand on the table = snare. Count "1 2 3 4" aloud: left on 1 and 3, right on 2 and 4. Loop it until it's boring.
2. Add the rock example's extra kick: left hand also on the "&" of 2 ("1 2-&-3 4"). Say "boom, crack-boom-boom, crack".
3. Loop the example and play along with your hands. Then on the keyboard, play a low G with every kick (left hand) instead of your thigh.

**If you lose the backbeat:** stop tapping and only count aloud with the example, saying "2" and "4" louder. Then add just the right hand on the loud numbers.

```exercise
{
  "id": "e1", "type": "rhythm-tap", "title": "Tap the backbeat",
  "instructions": "Tap only on 2 and 4 while counting 1-2-3-4 aloud. Feels odd at first; that's the point.",
  "passScore": 0.7,
  "spec": { "bpm": 100, "timeSig": "4/4", "seq": "r:q x:q r:q x:q | r:q x:q r:q x:q", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "e2", "type": "play-melody", "title": "Lock the bass to the kick",
  "instructions": "Left hand. Play each bass note exactly with a kick: 1, the '&' of 2, and 3. Bass and kick together are the floor of the groove.",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 96, "timeSig": "4/4", "key": "C", "seq": "C3:q r:8 C3:8 C3:q r:q | A2:q r:8 A2:8 A2:q r:q | F2:q r:8 F2:8 F2:q r:q | G2:q r:8 G2:8 G2:q r:q", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "drums", "seq": "kick:q r:8 kick:8 kick:q r:q | kick:q r:8 kick:8 kick:q r:q | kick:q r:8 kick:8 kick:q r:q | kick:q r:8 kick:8 kick:q r:q" } }
}
```

## Hip-hop: boom bap

Slower, heavier, and the kick moves *off* the beat: here on 1, the "&" of 2 and the "&" of 3. That's the syncopation from lesson 1. The hats are often swung (lesson 2); this example keeps them straight so you can hear the kick clearly.

```example
{
  "title": "Boom bap at 90: kick on 1, the '&' of 2 and the '&' of 3; snare 2 & 4",
  "bpm": 90, "timeSig": "4/4", "loop": true,
  "tracks": [
    { "instrument": "drums", "seq": "hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8" },
    { "instrument": "drums", "seq": "kick:8 r:8 r:8 kick:8 r:8 kick:8 r:q" },
    { "instrument": "drums", "seq": "r:q snare:q r:q snare:q" },
    { "instrument": "bass", "seq": "A1:8 r:8 r:8 A1:8 r:8 A1:8 r:q" }
  ],
  "show": ["pianoroll"]
}
```

### Try it: move the kick

1. Hands again: right hand snare on 2 and 4, left hand kick on 1 only. Count eighths aloud: "1 & 2 & 3 & 4 &".
2. Add left-hand kicks on the "&" of 2 and the "&" of 3: "**1** & 2 **&** 3 **&** 4 &". The kick now lands *between* the snare and the count, which is what makes it feel heavy and late.
3. Play along with the boom-bap example, then with the rock example. Notice that in rock the kick on 3 lands with your count; in boom bap it doesn't.

Check: answer, then read the explanation.

```exercise
{
  "id": "e5", "type": "listen", "title": "Check: where is the kick?",
  "instructions": "Count 1 & 2 & 3 & 4 & aloud. Listen only to the low drum.",
  "spec": {
    "examples": [
      { "title": "Beat 1", "bpm": 90, "timeSig": "4/4", "loop": true, "hidden": true, "tracks": [ { "instrument": "drums", "seq": "[kick hh]:8 hh:8 [snare hh]:8 [kick hh]:8 hh:8 [kick hh]:8 [snare hh]:8 hh:8" } ] },
      { "title": "Beat 2", "bpm": 110, "timeSig": "4/4", "loop": true, "hidden": true, "tracks": [ { "instrument": "drums", "seq": "[kick hh]:8 hh:8 [snare hh]:8 hh:8 [kick hh]:8 hh:8 [snare hh]:8 hh:8" } ] }
    ],
    "questions": [
      { "q": "Beat 1: is there a kick on 3?", "choices": ["Yes, on 3", "No, just after it (on the '&')"], "answer": 1, "explain": "Kicks on 1, the '&' of 2 and the '&' of 3: boom bap. Tap it with your left hand to check." },
      { "q": "Beat 2: the kick plays on…", "choices": ["1 and 3", "between the beats"], "answer": 0, "explain": "1 and 3, with the snare on 2 and 4: the plain rock/pop beat." }
    ]
  }
}
```

**If you can't pick out the kick:** tap your left hand on 1 and 3 while the beat plays. If a kick sounds just after your tap on 3 instead of with it, that kick is on the "&".

**Hearing grooves in real songs.** Put on any song and listen in three passes. 1: tap your foot and feel the tempo (fast, medium, slow). 2: follow only the lowest drum: does the kick sit on 1 and 3, on every beat, or between the beats? 3: listen high: is the hi-hat in eighths or sixteenths, straight or swung? Three answers usually name the genre, and tell you how to rebuild the beat.

This lesson opens one more rhythm rung: two bars with sixteenths.

**Before the drill, rehearse the method** (in the *How to do it* box above the drill, for the rung you're on): chunk it. Replay and get bar 1 right first, counting "1 e & a" aloud; then bar 2; keep counting through both, even through rests. Tap *Mixing values* from lesson 1 once more as a warm-up if you like. The drill runs at your current rhythm rung.

```ladder
{ "skill": "rhythm", "unlocks": 11, "intro": "Opens: tap back two bars with sixteenths. The drill runs at your current rhythm rung." }
```

## Make it: one loop per genre

Each loop is 4 bars. Start with the drums, then the bass, then the chords. If time runs short, do the rock loop today and the hip-hop loop next session.

```exercise
{
  "id": "e3", "type": "daw-task", "title": "Rock loop in G",
  "spec": {
    "template": { "bpm": 120, "key": "G", "timeSig": "4/4", "tracks": [
      { "instrument": "drums", "seq": "" }, { "instrument": "bass", "seq": "" }, { "instrument": "piano", "seq": "" } ] },
    "task": "Rock, 120 BPM, G – C – D – C (I – IV – V – IV), one bar each. Drums: kick on 1 and 3 (add the '&' of 2 if you like), snare on 2 and 4, straight eighth hi-hats. Bass: roots, hitting with the kick. Piano: eighth-note chords.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["drums", "bass", "piano"] },
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "kickOnBeats": [1, 3], "snareOnBeats": [2, 4], "hatOn": "8", "track": 0 },
      { "kind": "chord-tones-on-beats", "beats": [1, 3], "progression": ["I", "IV", "V", "IV"], "barsPerChord": 1, "minRatio": 0.9, "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "IV", "V", "IV"], "barsPerChord": 1, "minRatio": 1.0, "track": 2 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

```exercise
{
  "id": "e4", "type": "daw-task", "title": "Boom-bap loop in A minor",
  "spec": {
    "template": { "bpm": 90, "key": "Am", "timeSig": "4/4", "tracks": [
      { "instrument": "drums", "seq": "" }, { "instrument": "bass", "seq": "" }, { "instrument": "epiano", "seq": "" } ] },
    "task": "Hip-hop, 90 BPM, Am7 – Fmaj7 (i7 – VImaj7), one bar each, twice. Drums: snare on 2 and 4, kick on 1 plus two syncopated kicks (try the '&' of 2 and the '&' of 3), eighth hi-hats. Want swing? Write the hats as qt + 8t pairs. Bass: play with the kicks, roots only (A, then F). E-piano: long seventh chords.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["drums", "bass", "epiano"] },
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "kickOnBeats": [1], "snareOnBeats": [2, 4], "track": 0 },
      { "kind": "in-key", "key": "A", "scale": "natural-minor", "allowPassing": false, "track": 1 },
      { "kind": "syncopation", "minOffbeatRatio": 0.25, "track": 1 },
      { "kind": "chord-has-seventh", "min": 2, "track": 2 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

## Between lessons

- **3 minutes:** hand-drumming: rock (kick 1 & 3, snare 2 & 4), then boom bap (kick 1, &2, &3), counting aloud.
- **Listening, one song a day:** the three passes — tempo, where the kick sits, what the hi-hat does. Write the three answers down.
- Finish whichever DAW loop didn't fit today.
- One rhythm session on the Practice page.
