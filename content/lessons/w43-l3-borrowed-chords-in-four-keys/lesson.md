---
id: w43-l3-borrowed-chords-in-four-keys
title: Borrowed Chords in Four Keys
week: 43
order: 3
phase: p5
duration_min: 50
goals:
  - Flag a borrowed chord from a bass root that falls outside the major scale
  - Identify iv, bVI, bVII and bIII by ear in C, G, Eb and A major
  - Write an 8-bar progression with two borrowed chords in the DAW
prerequisites: [w43-l2-sevenths-and-sus-in-context]
tags: [transcription, borrowed-chords, modal-interchange, ear, daw]
---

# Borrowed Chords in Four Keys

You studied modal interchange in week 30 as a writer. Now flip it round: how do you *catch* a borrowed chord when it flies past in a song?

## The bass gives it away

The four borrowed chords pop uses most — **iv, bVI, bVII, bIII** — all come from the parallel minor. Three of them have a root that is *not in the major scale*. In C major:

| Chord | Root | Root in C major scale? | Sound |
|------|------|------|------|
| iv (Fm) | F | yes — quality flips | bittersweet, nostalgic |
| bVI (Ab) | Ab | **no** | epic, cinematic |
| bVII (Bb) | Bb | **no** | rock, anthemic, "Mixolydian" |
| bIII (Eb) | Eb | **no** | bold, bluesy |

So in pass 3, the moment your hummed bass note is a black key that doesn't belong to the key, write a flat in front of the numeral. Pass 4 then only has to confirm that it's major (it nearly always is). The iv is the sneaky one: root in the scale, only the 3rd changes — which is exactly the case you practised in lesson 1.

```example
{
  "title": "C – Ab – Bb – C, then C – F – Fm – C",
  "bpm": 96, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 tom:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" },
    { "instrument": "bass", "seq": "C2:q. C2:8 C2:h | Ab1:q. Ab1:8 Ab1:h | Bb1:q. Bb1:8 Bb1:h | C2:q. C2:8 C2:h | C2:q. C2:8 C2:h | F2:q. F2:8 F2:h | F2:q. F2:8 F2:h | C2:q. C2:8 C2:h" },
    { "instrument": "piano", "seq": "[G3 C4 E4]:w | [Ab3 C4 Eb4]:w | [Bb3 D4 F4]:w | [G3 C4 E4]:w | [G3 C4 E4]:w | [A3 C4 F4]:w | [Ab3 C4 F4]:w | [G3 C4 E4]:w" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

Bars 2–3: the bass drops to black keys — flag them. Bar 7: the bass stays on F but A slides to Ab — that's iv.

## Four keys

Keys change what your hands do, but not what your ear listens for. Work through the four keys below. In each, first hum the tonic, then listen to the bass for "outside" roots.

```exercise
{
  "id": "w43l3-c",
  "type": "ear-progression",
  "title": "Borrowed chords in C",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "C", "mode": "major", "length": 4, "chords": ["I", "IV", "V", "vi", "iv", "bVI", "bVII"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "w43l3-g",
  "type": "ear-progression",
  "title": "Borrowed chords in G",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "G", "mode": "major", "length": 4, "chords": ["I", "IV", "V", "vi", "iv", "bVI", "bVII"], "style": "block" }
}
```

```exercise
{
  "id": "w43l3-eb",
  "type": "ear-progression",
  "title": "Borrowed chords in Eb (with bIII)",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "Eb", "mode": "major", "length": 4, "chords": ["I", "IV", "V", "iv", "bIII", "bVI", "bVII"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "w43l3-a",
  "type": "ear-progression",
  "title": "Borrowed chords and sevenths in A",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "A", "mode": "major", "length": 4, "chords": ["Imaj7", "IVmaj7", "vi7", "V7", "iv", "bVI", "bVII"], "style": "arpeggio" }
}
```

```exercise
{
  "id": "w43l3-analysis",
  "type": "roman-analysis",
  "title": "Analyse in G",
  "spec": { "key": "G", "chords": ["G", "Eb", "F", "G", "C", "Cm", "G", "D"], "prompt": "symbols" }
}
```

```exercise
{
  "id": "w43l3-play",
  "type": "play-chord",
  "title": "Borrowed chords in Eb",
  "spec": { "chords": ["Eb", "Cb", "Db", "Eb", "Ab", "Abm", "Eb"], "inversion": "any", "sequence": true, "bpm": 66 }
}
```

```exercise
{
  "id": "w43l3-daw",
  "type": "daw-task",
  "title": "Borrow two chords",
  "spec": {
    "template": { "bpm": 96, "key": "G", "tracks": [
      { "instrument": "drums", "seq": "" }, { "instrument": "bass", "seq": "" }, { "instrument": "piano", "seq": "" } ] },
    "task": "Write 8 bars in G: G – Eb – F – G | G – C – Cm – G (I–bVI–bVII–I | I–IV–iv–I). Add a pop groove and bass roots. Then play it to someone (or record a voice memo) and describe what each borrowed chord does to the mood.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["drums", "bass", "piano"] },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "bVI", "bVII", "I", "I", "IV", "iv", "I"], "barsPerChord": 1, "minRatio": 1, "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1, 3], "progression": ["I", "bVI", "bVII", "I", "I", "IV", "iv", "I"], "barsPerChord": 1, "minRatio": 0.9, "track": 2 },
      { "kind": "drum-pattern", "requires": ["kick", "snare"], "snareOnBeats": [2, 4], "track": 0 },
      { "kind": "bars", "min": 8, "max": 8 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```
