---
id: w38-l2-rock-and-folk-idioms
title: Rock and Folk Idioms
week: 38
order: 2
phase: p4
duration_min: 45
goals:
  - Recall the power chord from week 35, hear it next to major and minor, and play a power-chord riff
  - Use the rock loop I–♭VII–IV
  - Fingerpick a folk accompaniment in 6/8
prerequisites: [w38-l1-pop-idioms, w25-l3-riff-and-solo-daw]
tags: [songwriting, rock, folk, genre]
songs:
  - { title: "Sweet Child o' Mine", artist: "Guns N' Roses", public_domain: false }
  - { title: "Gloria", artist: "Them", public_domain: false }
  - { title: "The House of the Rising Sun", composer: "Traditional", public_domain: true }
  - { title: "Blowin' in the Wind", artist: "Bob Dylan", public_domain: false }
---

# Rock and Folk Idioms

Two more bundles today, and a closer look at a chord shape you met in week 35.

## Reminder: the power chord

In week 35 you met the [[power chord]] as the place where parallel fifths are the point. A reminder: it is just two notes, a **root and the 5th above it** (often with the root doubled an octave up). It has **no 3rd** — and the 3rd is the note that makes a chord major or minor (week 6). So a power chord is neither: it is "open", plain and strong. Written **D5** (the "5" means root + 5th only, not a 5th chord degree).

Why rock loves it: with a distorted guitar, a full triad turns into mush, but root + 5th stays clear and huge. Hear D major, D minor, then D5 — on piano, then on the overdriven guitar:

```example
{
  "title": "D major – D minor – D5 (piano), then the same three on guitar",
  "bpm": 70, "timeSig": "4/4", "key": "D",
  "tracks": [
    { "instrument": "piano", "seq": "[D3 F#3 A3]:w | [D3 F3 A3]:w | [D3 A3 D4]:w | r:w | r:w | r:w |" },
    { "instrument": "guitar", "seq": "r:w | r:w | r:w | [D3 F#3 A3]:w | [D3 F3 A3]:w | [D3 A3 D4]:w |" }
  ],
  "show": ["keyboard"]
}
```

Honestly: on piano D5 may just sound like "a thinner D". On the guitar the difference is clearer — the triads sound rough, the power chord sounds solid. Check it yourself: play D–F♯–A, then D–F–A, then just D–A. The third one should sound neither bright nor dark — just plain. On the keyboard it is one hand shape: thumb and little finger (or thumb and ring finger) a 5th apart, 7 keys, moved as a block.

## The rock bundle

**Harmony:** power chords, and the **♭VII** — the major chord a whole step below home, borrowed from minor (week 19) and the note that gives Mixolydian its colour (week 26). **I–♭VII–IV** is a classic rock loop: the verse of "Sweet Child o' Mine" circles D–C–G; "Gloria" pounds E–D–A (both by reference).

**Melody:** the **riff** — a repeated 1–2 bar figure, often low — is frequently the real hook.

**Rhythm:** straight 8th hi-hats, a hard backbeat on 2 and 4, a kick that locks with the riff.

```example
{
  "title": "Power-chord riff D5 – C5 – G5 (I–♭VII–IV, original)",
  "bpm": 120, "timeSig": "4/4", "key": "D",
  "tracks": [
    { "instrument": "guitar", "seq": "[D3 A3]:8 [D3 A3]:8 r:8 [D3 A3]:8 [C3 G3]:q [G2 D3]:q | [D3 A3]:8 [D3 A3]:8 r:8 [D3 A3]:8 [C3 G3]:q [G2 D3]:q | [D3 A3]:8 [D3 A3]:8 r:8 [D3 A3]:8 [C3 G3]:q [G2 D3]:q | [D3 A3]:8 [D3 A3]:8 r:8 [D3 A3]:8 [C3 G3]:q [G2 D3]:q |" },
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 |" }
  ],
  "show": ["pianoroll"], "loop": true
}
```

```exercise
{
  "id": "e1-play-riff",
  "type": "play-melody",
  "title": "Play the riff",
  "instructions": "Left hand, one locked power-chord shape (fingers 5 and 1) moved as a block.",
  "passScore": 0.7,
  "spec": {
    "bpm": 100, "timeSig": "4/4", "key": "D",
    "seq": "[D3 A3]:8 [D3 A3]:8 r:8 [D3 A3]:8 [C3 G3]:q [G2 D3]:q | [D3 A3]:8 [D3 A3]:8 r:8 [D3 A3]:8 [C3 G3]:q [G2 D3]:q |",
    "showStaff": false, "showKeyboard": true, "countIn": 1,
    "backing": { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 |" }
  }
}
```

```exercise
{
  "id": "e2-power-quiz",
  "type": "quiz",
  "title": "Power chords and ♭VII",
  "passScore": 0.7,
  "spec": {
    "questions": [
      { "q": "Which notes make E5?", "choices": ["E G B", "E G♯ B", "E B", "E A"], "answer": 2, "explain": "Root + 5th only: E and B." },
      { "q": "Why is a power chord neither major nor minor?", "choices": ["It has no root", "It has no 3rd", "It has a 7th", "It is played low"], "answer": 1 },
      { "q": "In D major, ♭VII is…", "choices": ["C♯ diminished", "C major", "C minor", "B♭ major"], "answer": 1 }
    ]
  }
}
```

Method for the progression drill: find the bass note first (search low keys with higher/lower), then ask what the chord does — rest, lift, pull or relaxed step down (♭VII sits a whole step below home and doesn't demand to go anywhere). The *How to do it* box under the drill shows the exact method for your current rung.

```ladder
{ "skill": "progressions", "unlocks": 20, "intro": "Rock's ♭VII lives on this ladder (rung 12 and up); the drill runs at your current rung." }
```

## The folk bundle

**Harmony:** simple and diatonic — I, IV, V, vi — often with a ringing drone. "Blowin' in the Wind" lives on I–IV–V (by reference).

**Texture:** **fingerpicked** arpeggios instead of block chords: a bass note on the beat, upper notes in between.

**Meter:** 3/4 and **6/8** are common. 6/8 is the compound meter from week 17: six 8ths felt as two big beats of three (ONE-two-three FOUR-five-six). "The House of the Rising Sun" (traditional, public domain) runs, in A minor, Am–C–D–F–Am–C–E–E, one chord per bar in 6/8:

```example
{
  "title": "'House of the Rising Sun' chords, fingerpicked in 6/8",
  "bpm": 70, "timeSig": "6/8", "key": "Am",
  "tracks": [
    { "instrument": "piano", "seq": "A2:8 E4:8 C4:8 A2:8 E4:8 C4:8 | C3:8 E4:8 C4:8 C3:8 E4:8 C4:8 | D3:8 F#4:8 D4:8 D3:8 F#4:8 D4:8 | F2:8 F4:8 C4:8 F2:8 F4:8 C4:8 | A2:8 E4:8 C4:8 A2:8 E4:8 C4:8 | C3:8 E4:8 C4:8 C3:8 E4:8 C4:8 | E2:8 E4:8 B3:8 E2:8 E4:8 B3:8 | E2:8 G#4:8 B3:8 E2:8 G#4:8 B3:8 |" }
  ],
  "show": ["pianoroll"]
}
```

Listen once tapping your foot only on the low bass notes: two taps per bar — that's the two big beats of 6/8. Two chords are not from plain A natural minor: **D major** (the F♯ is Dorian's raised 6th, week 26) and **E major** (the G♯ is harmonic minor's raised 7th, week 14). Folk is simple, but not plain.

```exercise
{
  "id": "e3-play-folk",
  "type": "play-melody",
  "title": "Fingerpick the first four chords",
  "instructions": "Left hand plays the low bass on each big beat; right hand the upper notes in between.",
  "passScore": 0.7,
  "spec": {
    "bpm": 60, "timeSig": "6/8", "key": "Am",
    "seq": "A2:8 E4:8 C4:8 A2:8 E4:8 C4:8 | C3:8 E4:8 C4:8 C3:8 E4:8 C4:8 | D3:8 F#4:8 D4:8 D3:8 F#4:8 D4:8 | F2:8 F4:8 C4:8 F2:8 F4:8 C4:8 |",
    "showStaff": false, "showKeyboard": true, "countIn": 1
  }
}
```

Method for the rhythm drill: tap your foot on the beat first, find the strong ONE, and count until it comes back; then count the notes inside each beat. The *How to do it* box under the drill shows the exact method for your current rung.

```ladder
{ "skill": "rhythm", "unlocks": 16, "intro": "Meters and grooves — 6/8 is on this ladder (rung 10); the drill runs at your current rung." }
```

## Make it

1. Start from the riff above: keep its rhythm (hit, hit, rest, hit, then two longer chords) and change only the roots. Try D–C–G first, then swap in A or E and keep what sounds strongest.
2. Enter each chord as two notes, root and the note 7 keys up. Copy the 2 bars to fill 8.
3. Drums: kick on 1 and 3, snare on 2 and 4, hi-hat on every 8th.
4. **Judge by ear:** play it loud. If the riff sounds muddy, move it up so the lowest note is around D3–G2, not lower. If it sounds aimless, end bar 2 on a chord that leads back to D (C or A).
5. **Stuck?** Use the example riff unchanged and change only its rhythm.

```exercise
{
  "id": "e4-daw-riff",
  "type": "daw-task",
  "title": "Your own rock riff",
  "instructions": "On the guitar track, write a 2-bar power-chord riff in D using roots from D Mixolydian (D, C, G, A, E…) — each chord is root + 5th. Repeat it to fill 8 bars. Add a rock beat: kick on 1 and 3, snare on 2 and 4, 8th hi-hats.",
  "spec": {
    "template": {
      "bpm": 120, "key": "D", "timeSig": "4/4",
      "tracks": [
        { "instrument": "guitar", "seq": "" },
        { "instrument": "drums", "seq": "" }
      ]
    },
    "task": "8 bars: a repeated power-chord riff + rock beat.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["guitar", "drums"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "D", "scale": "mixolydian", "allowPassing": true, "track": 0 },
      { "kind": "repetition", "motifBars": 2, "minRepeats": 3, "allowTransposed": false, "track": 0 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "kickOnBeats": [1, 3], "snareOnBeats": [2, 4], "hatOn": "8", "track": 1 },
      { "kind": "custom", "id": "power-shapes", "note": "Self-check: every chord in the riff is root + 5th (no 3rd)." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

## Between lessons

Play the riff and the four fingerpicked chords once a day, counting "ONE-two-three FOUR-five-six" out loud for the 6/8.
