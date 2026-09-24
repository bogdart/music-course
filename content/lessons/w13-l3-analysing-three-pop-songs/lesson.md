---
id: w13-l3-analysing-three-pop-songs
title: Analysing Three Pop Songs
week: 13
order: 3
phase: p2
duration_min: 50
goals:
  - Describe a song by key, tempo, form, progression (roman numerals) and function
  - Analyse "Let It Be", "Zombie" and "Stand By Me" with a recording and a chord chart
  - Write an original 8-bar sketch on a classic progression
prerequisites: [w13-l2-the-four-chords]
tags: [analysis, pop, progressions, daw]
songs:
  - { title: "Let It Be", composer: "The Beatles (1970)", public_domain: false }
  - { title: "Zombie", composer: "The Cranberries (1994)", public_domain: false }
  - { title: "Stand By Me", composer: "Ben E. King (1961)", public_domain: false }
---

# Analysing Three Pop Songs

This is the first real step toward your big goal: taking apart a song you hear. Today you'll work *with* the recordings. Put each song on through your own music service; the app shows chord charts and plays the progressions, but not the recordings themselves.

For each song, fill in the same card: **key · tempo · form · progression (symbols and roman numerals) · what to listen for.** That card is the backbone of every transcription you'll do this year.

## 1. "Let It Be" — The Beatles (1970)

**Key** C major · **Tempo** about 72 BPM · **Form** (roughly) piano intro → verse → chorus → verse → chorus → instrumental solo → chorus → verse → chorus → ending.

**Verse:** C – G – Am – F | C – G – F – C → **I – V – vi – IV | I – V – IV – I**
**Chorus:** Am – G – F – C | C – G – F – C → **vi – V – IV – I | I – V – IV – I** (the second chord is often written C/G; either way the bass steps down A – G – F).

**Listen for:** the phrase endings F → C — a **plagal cadence**, the "amen" from lesson 1, which gives the song its gospel feel. Notice there's almost no V → I; the song resolves softly.

```chords
{ "key": "C", "bars": ["C", "G", "Am", "F", "C", "G", "F", "C"], "roman": true, "play": true, "bpm": 72 }
```

```example
{
  "title": "The move to listen for: I – V – IV – I (original voicing, not the recording)",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[E3 G3 C4]:w | [D3 G3 B3]:w | [C3 F3 A3]:w | [C3 E3 G3]:w" },
    { "instrument": "bass", "seq": "C2:w | G1:w | F1:w | C2:w" }
  ],
  "show": ["pianoroll"]
}
```

## 2. "Zombie" — The Cranberries (1994)

**Key** E minor (relative of G major) · **Tempo** about 84 BPM · **Form** verse → chorus → verse → chorus → guitar break → chorus → outro.

**Progression, the whole song:** Em – C – G – D (often voiced Em – Cmaj7 – G – D/F#). In G major that's **vi – IV – I – V**; heard from E minor it's **i – VI – III – VII**.

**Listen for:** the same four chords under verse *and* chorus. The contrast comes entirely from arrangement: a quiet, clean verse, then distorted guitars and heavy drums in the chorus. Also ask: where is home — E minor or G? Most listeners feel Em, because every cycle starts and the melody settles there.

```chords
{ "key": "Em", "bars": ["Em", "C", "G", "D"], "roman": true, "play": true, "bpm": 84 }
```

## 3. "Stand By Me" — Ben E. King (1961)

**Key** A major · **Tempo** about 118 BPM · **Form** bass-riff intro → verse → chorus → verse → chorus → string interlude → chorus.

**Progression (8 bars):** A – A – F#m – F#m – D – E – A – A → **I – vi – IV – V – I**, the doo-wop rotation from lesson 2.

**Listen for:** the bass riff. It repeats a figure that outlines each chord, so you can hear the progression just by following the bass — try humming the lowest note on each chord change. The chord rhythm is slow (two bars each) until D – E, which speed up into the cadence.

```chords
{ "key": "A", "bars": ["A", "A", "F#m", "F#m", "D", "E", "A", "A"], "roman": true, "play": true, "bpm": 118 }
```

```exercise
{
  "id": "e1", "type": "roman-analysis", "title": "Let It Be, verse",
  "count": 8, "passScore": 0.8,
  "spec": { "key": "C", "chords": ["C", "G", "Am", "F", "C", "G", "F", "C"], "prompt": "symbols" }
}
```

```exercise
{
  "id": "e2", "type": "roman-analysis", "title": "Zombie, from G major",
  "count": 6, "passScore": 0.8,
  "spec": { "key": "G", "chords": ["Em", "C", "G", "D", "Em", "C"], "prompt": "symbols" }
}
```

```exercise
{
  "id": "e3", "type": "play-chord", "title": "Stand By Me changes in A",
  "instructions": "Play along with the recording if you can: A, F#m, D, E, A.",
  "count": 6, "passScore": 0.8,
  "spec": { "chords": ["A", "F#m", "D", "E", "A"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

```exercise
{
  "id": "e4", "type": "quiz", "title": "Listening card check",
  "spec": { "questions": [
    { "q": "Let It Be's phrases mostly end with…", "choices": ["V → I (authentic)", "IV → I (plagal)", "V → vi (deceptive)", "I → V (half)"], "answer": 1 },
    { "q": "In Zombie, what makes the chorus different from the verse?", "choices": ["New chords", "A key change", "Arrangement and dynamics", "A slower tempo"], "answer": 2 },
    { "q": "Stand By Me's progression in roman numerals is…", "choices": ["I–V–vi–IV", "I–vi–IV–V", "vi–IV–I–V", "I–IV–V"], "answer": 1 },
    { "q": "Em – C – G – D seen from E minor is…", "choices": ["i–VI–III–VII", "i–iv–v–i", "vi–IV–I–V", "i–III–VII–VI"], "answer": 0, "explain": "The same chords as vi–IV–I–V in G — relative keys share chords." }
  ] }
}
```

```exercise
{
  "id": "e5", "type": "ear-progression", "title": "Four-chord loops in minor",
  "count": 8, "passScore": 0.7,
  "spec": { "key": "random", "mode": "minor", "length": 4, "chords": ["i", "iv", "VI", "III", "VII"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "e6", "type": "ear-bass", "title": "Bass roots in A major",
  "count": 8, "passScore": 0.75,
  "spec": { "key": "A", "chords": ["I", "vi", "IV", "V"], "answer": "play" }
}
```

## Make it: a sketch in the same spirit

```exercise
{
  "id": "e7", "type": "daw-task", "title": "8 bars on I – vi – IV – V",
  "spec": {
    "template": { "bpm": 110, "key": "C", "timeSig": "4/4", "tracks": [
      { "instrument": "piano", "seq": "" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "drums", "seq": "" },
      { "instrument": "lead", "seq": "" } ] },
    "task": "Write your own 8 bars on I – vi – IV – V in C (C, Am, F, G, one bar each, twice). Piano: chords. Bass: roots, and try a moving figure that outlines each chord (root–3rd–5th) — your own, not Stand By Me's. Drums: kick on 1 and 3, snare on 2 and 4. Lead: an original melody, chord tones on beat 1, ending on C. Then fill in a listening card for your own sketch.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "bass", "drums", "lead"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "chord-tones-on-beats", "beats": [1, 3], "progression": ["I", "vi", "IV", "V"], "barsPerChord": 1, "minRatio": 0.9, "track": 1 },
      { "kind": "drum-pattern", "requires": ["kick", "snare"], "kickOnBeats": [1, 3], "snareOnBeats": [2, 4], "track": 2 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": true, "track": 3 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "vi", "IV", "V"], "barsPerChord": 1, "minRatio": 0.75, "track": 3 },
      { "kind": "ends-on", "degree": 1, "track": 3 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```
