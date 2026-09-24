---
id: w47-l3-dance-reference-analysis
title: "Transcribe 2: Dance Pop — Reference Analysis"
week: 47
order: 3
phase: p5
duration_min: 50
goals:
  - Decompose three up-tempo hits by reference — tempo, key centre, loop, groove, energy curve
  - Hear the Dorian colour of a major IV chord inside a minor loop
  - Write a 16-bar dance-pop section in the style, with a build and a drop
prerequisites: [w47-l2-dance-bass-and-hooks]
tags: [transcription, dance-pop, reference-songs, dorian, daw]
songs:
  - { title: "Blinding Lights", artist: "The Weeknd", year: 2019, public_domain: false }
  - { title: "Uptown Funk", artist: "Mark Ronson feat. Bruno Mars", year: 2014, public_domain: false }
  - { title: "Get Lucky", artist: "Daft Punk feat. Pharrell Williams and Nile Rodgers", year: 2013, public_domain: false }
---

# Transcribe 2: Dance Pop — Reference Analysis

Three up-tempo records, three different grooves, one surprising common thread. Use your own copies; cover the answers and try each pass before reading the guide.

## A shared sound: the major IV in a minor key

All three songs loop over a minor tonic but include a **major chord on degree 4** — which natural minor doesn't have. That raised 6th degree is the Dorian mode you met in week 22, and it's the secret of a lot of danceable "minor but not sad" music. Hear it in isolation:

```example
{
  "title": "Original: Dorian vamp — Dm7 to G7",
  "bpm": 115, "timeSig": "4/4", "key": "Dm",
  "tracks": [
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [kick clap hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick clap hihat]:8 ohat:8 | [kick hihat]:8 hihat:8 [kick clap hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick clap hihat]:8 ohat:8 | [kick hihat]:8 hihat:8 [kick clap hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick clap hihat]:8 ohat:8 | [kick hihat]:8 hihat:8 [kick clap hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [kick clap hihat]:8 ohat:8" },
    { "instrument": "bass", "seq": "D2:8 r:8 D3:8 r:8 r:8 C3:8 D3:8 r:8 | G1:8 r:8 G2:8 r:8 r:8 F2:8 G2:8 r:8 | D2:8 r:8 D3:8 r:8 r:8 C3:8 D3:8 r:8 | G1:8 r:8 G2:8 r:8 r:8 F2:8 G2:8 r:8" },
    { "instrument": "epiano", "seq": "r:8 [F3 A3 C4]:8 r:q r:8 [F3 A3 C4]:8 r:q | r:8 [F3 B3 D4]:8 r:q r:8 [F3 B3 D4]:8 r:q | r:8 [F3 A3 C4]:8 r:q r:8 [F3 A3 C4]:8 r:q | r:8 [F3 B3 D4]:8 r:q r:8 [F3 B3 D4]:8 r:q" }
  ],
  "show": ["keyboard"],
  "loop": true
}
```

The B natural in the G7 is the Dorian note. Swap it for Bb and the groove instantly sounds darker.

## "Blinding Lights" — The Weeknd (2019)

**Home F minor, about 171 BPM.** Pass 1: tap it — if you get ~86, you're tapping half-time; the drums and synth bass run at the fast count. Pass 4: a four-chord loop commonly charted as **Fm – Cm – Eb – Bb** (i – v – VII – IV); listen for that final major chord — the Dorian IV. Pass 6: a driving 80s-style beat with snare on 2 and 4. Pass 7: sketch the energy curve; the famous synth hook marks the sections.

## "Uptown Funk" — Mark Ronson feat. Bruno Mars (2014)

**Home D minor, about 115 BPM.** Pass 4: the verse is a two-chord vamp, **Dm7 – G7** (i7 – IV7) — exactly the Dorian vamp above. Pass 6: this is funk, not four-on-the-floor; listen to the kick and snare separately and notice the syncopated, choppy guitar and bass. Pass 7: horn stabs punctuate the ends of phrases; mark where they enter.

## "Get Lucky" — Daft Punk feat. Pharrell Williams & Nile Rodgers (2013)

**About 116 BPM; a four-chord loop Bm7 – D – F#m7 – E** that repeats for the entire song. Pass 1 is genuinely debatable here: some hear B Dorian (i – III – v – IV), others F# minor. Do the hum test yourself and defend your answer — that's real transcription. Pass 7: with the harmony fixed, the whole form is built by adding and removing layers; the disco guitar and bass stay almost constant.

```exercise
{
  "id": "w47l3-refs",
  "type": "quiz",
  "title": "Reference check",
  "spec": { "questions": [
    { "q": "\"Blinding Lights\": you tapped 86 BPM. The listed tempo is ~171. Why?", "choices": ["You tapped half-time", "The song speeds up", "The tool is wrong", "It's in 6/8"], "answer": 0 },
    { "q": "\"Uptown Funk\" verse vamp in roman numerals?", "choices": ["i7 – IV7", "i – v", "I – V7", "ii7 – V7"], "answer": 0 },
    { "q": "What colour do all three songs share?", "choices": ["A major IV chord in a minor key (Dorian)", "A key change in every chorus", "12-bar blues form", "Half-time snare"], "answer": 0 },
    { "q": "\"Get Lucky\": how is the form built if the chords never change?", "choices": ["By tempo changes", "By adding and removing layers", "By modulating", "It has no form"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "w47l3-mode",
  "type": "ear-scale",
  "title": "Dorian or natural minor?",
  "count": 10,
  "passScore": 0.8,
  "spec": { "scales": ["dorian", "natural-minor"], "play": "melody" }
}
```

```exercise
{
  "id": "w47l3-loop",
  "type": "ear-progression",
  "title": "Dorian loops in B minor",
  "count": 8,
  "passScore": 0.75,
  "spec": { "key": "B", "mode": "minor", "length": 4, "chords": ["i", "III", "IV", "v", "VI", "VII"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "w47l3-qual",
  "type": "ear-chord",
  "title": "m7 or dom7?",
  "count": 10,
  "passScore": 0.8,
  "spec": { "qualities": ["min7", "dom7", "maj7"], "inversions": [0], "voicing": "mixed", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "w47l3-analysis",
  "type": "roman-analysis",
  "title": "Analyse the loops",
  "spec": { "key": "Fm", "chords": ["Fm", "Cm", "Eb", "Bb"], "prompt": "symbols" }
}
```

```exercise
{
  "id": "w47l3-play",
  "type": "play-chord",
  "title": "Dorian vamps under your fingers",
  "spec": { "chords": ["Dm7", "G7", "Bm7", "D", "F#m7", "E"], "inversion": "any", "sequence": true, "bpm": 80 }
}
```

```exercise
{
  "id": "w47l3-daw",
  "type": "daw-task",
  "title": "Your dance-pop section",
  "spec": {
    "template": { "bpm": 118, "key": "Dm", "tracks": [
      { "instrument": "drums", "seq": "" }, { "instrument": "bass", "seq": "" },
      { "instrument": "epiano", "seq": "" }, { "instrument": "lead", "seq": "" } ] },
    "task": "Write 16 bars in D Dorian: 4-bar verse (kick + hats, sparse bass), 4-bar build (no kick, accelerating snare), 8-bar drop (four-on-the-floor, offbeat or octave bass, a 1-bar hook repeated with a variation). Use a major IV chord (G) at least once per 4-bar loop.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["drums", "bass", "epiano", "lead"] },
      { "kind": "bars", "min": 16, "max": 16 },
      { "kind": "in-key", "key": "D", "scale": "dorian", "allowPassing": false, "track": 2 },
      { "kind": "in-key", "key": "D", "scale": "dorian", "allowPassing": true, "track": 3 },
      { "kind": "repetition", "motifBars": 1, "minRepeats": 2, "allowTransposed": true, "track": 3 },
      { "kind": "drum-pattern", "requires": ["kick", "snare"], "track": 0 }
    ],
    "minBars": 16, "maxBars": 16
  }
}
```
