---
id: w36-l2-house-and-lo-fi
title: House and Lo-Fi
week: 36
order: 2
phase: p4
duration_min: 45
goals:
  - "Build a house groove: four-on-the-floor kick, off-beat hats and bass, chord stabs"
  - Make a seventh chord by putting a triad over a different bass note (slash chords)
  - "Build a lo-fi groove: slow swung drums and jazzy extended chords"
prerequisites: [w36-l1-hip-hop-and-trap, w33-l2-arps-and-gating]
tags: [songwriting, house, lo-fi, production, genre]
songs:
  - { title: "One More Time", artist: "Daft Punk", public_domain: false }
  - { title: "Donuts (album)", artist: "J Dilla", public_domain: false }
---

# House and Lo-Fi

Two electronic styles at opposite ends of the energy scale, both built on harmony you already know — plus one producer's shortcut to rich chords.

## House (about 120–126 BPM)

House is a dance machine. The kick hits **every beat** (four-on-the-floor), the open hi-hat and the bass sit on the **off-beats** between kicks, and a clap marks 2 and 4. On top, short [[chord stab]]s punch on off-beats. Daft Punk's "One More Time" (by reference) loops one filtered chord figure for minutes and never gets boring because the groove is so solid.

```example
{
  "title": "House: kick every beat, off-beat hats and bass, clap on 2 and 4, stabs",
  "bpm": 124, "timeSig": "4/4", "key": "Am",
  "tracks": [
    { "instrument": "drums", "seq": "kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 | kick:8 ohat:8 [kick clap]:8 ohat:8 kick:8 ohat:8 [kick clap]:8 ohat:8 |" },
    { "instrument": "piano", "seq": "r:8 [G3 C4 E4]:8 r:q r:8 [G3 C4 E4]:8 r:q | r:8 [A3 C4 E4]:8 r:q r:8 [A3 C4 E4]:8 r:q | r:8 [G3 C4 E4]:8 r:q r:8 [G3 C4 E4]:8 r:q | r:8 [A3 C4 E4]:8 r:q r:8 [A3 C4 E4]:8 r:q |" },
    { "instrument": "bass", "seq": "r:8 A1:8 r:8 A1:8 r:8 A1:8 r:8 A1:8 | r:8 F1:8 r:8 F1:8 r:8 F1:8 r:8 F1:8 | r:8 A1:8 r:8 A1:8 r:8 A1:8 r:8 A1:8 | r:8 F1:8 r:8 F1:8 r:8 F1:8 r:8 F1:8 |" }
  ],
  "show": ["pianoroll"], "loop": true
}
```

## New: a triad over a different bass note

Look at the stabs in bar 1: the piano plays a plain **C major triad** (C E G). But the bass underneath plays **A**. Put together, the notes are A C E G — that is **Am7**. In bar 2 the piano plays an **A minor triad** (A C E) over **F** in the bass: F A C E = **Fmaj7**.

You met [[slash chord]]s in week 11 as inversions: **C/E** = a C chord with its own 3rd in the bass. The same notation also works when the bass note is **not in the triad**: **C/A** = "C triad, A in the bass" — and the result is a new, richer chord. The bass note decides what the chord *is*: over A, those same three piano keys stop sounding like C and start sounding like a soft A minor chord with an extra note on top.

Hear it built up: the C triad alone, the bass A alone, then both together — and the same for A minor over F.

```example
{
  "title": "C triad – A bass – both (= Am7); A minor triad – F bass – both (= Fmaj7)",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[C4 E4 G4]:w | r:w | [C4 E4 G4]:w | [A3 C4 E4]:w | r:w | [A3 C4 E4]:w |" },
    { "instrument": "bass", "seq": "r:w | A1:w | A1:w | r:w | F1:w | F1:w |" }
  ],
  "show": ["keyboard"]
}
```

Honestly: you may not hear "Am7" as a name — that's fine. Check it with your hands: hold C–E–G with the right hand and let it ring, then add a low A with the left, then lift the A and add a low C instead. The same three keys sound bright over C and softer, darker over A. What matters is that you can hear that colour change when the bass arrives, and that you know the trick: **a triad a 3rd above the bass note makes a seventh chord.** Producers use it because three-note stabs stay punchy.

```exercise
{
  "id": "e1-play-slash",
  "type": "play-chord",
  "title": "Play the triad-over-bass chords",
  "instructions": "Play each as triad over bass — left hand the low bass note, right hand the triad: C/A (= Am7), Am/F (= Fmaj7), Dm/B♭ (= B♭maj7), G/E (= Em7). The app names the full chord; the bass must be the lowest note.",
  "passScore": 0.7,
  "spec": { "chords": ["Am7", "Fmaj7", "Bbmaj7", "Em7"], "inversion": "root", "sequence": true, "bpm": 50 }
}
```

```exercise
{
  "id": "e2-slash-quiz",
  "type": "quiz",
  "title": "What chord is it really?",
  "passScore": 0.7,
  "spec": {
    "questions": [
      { "q": "C/A: which notes sound?", "choices": ["C E G", "A C E G", "A C E", "C E G A B"], "answer": 1 },
      { "q": "…and what chord is that?", "choices": ["C6", "Am7", "Cmaj7", "A7"], "answer": 1, "explain": "A C E G: a minor triad on A plus the minor 7th G." },
      { "q": "Am/F sounds F A C E. Which chord?", "choices": ["Fmaj7", "F7", "Am7", "Fm7"], "answer": 0 },
      { "q": "C/E is different from C/A because…", "choices": ["E is a note of the C triad, so C/E is just an inversion", "E is not in the triad", "C/E is minor"], "answer": 0 }
    ]
  }
}
```

## Lo-fi (about 70–85 BPM)

Lo-fi hip-hop is house's opposite: slow, soft, nostalgic. Its bundle:

- **Jazz harmony** — ii–V–I with 9ths and 13ths, often with an A7 leading back to Dm (A7 is V7/ii: any chord can have its own dominant, week 29). Your rootless voicings from week 28 are exactly this sound.
- **Lazy, swung drums** — hits placed on triplets, some beats left empty.
- **Imperfection** — real productions add vinyl crackle and detuning; we fake it with space and soft instruments (epiano, pad).

J Dilla's album *Donuts* (by reference) is the touchstone for loose, behind-the-beat drums.

```example
{
  "title": "Lo-fi: Dm9 – G13 – Cmaj9 – A7 (with 9 and 13), swung drums",
  "bpm": 75, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "epiano", "seq": "[F3 A3 C4 E4]:h. r:q | [F3 A3 B3 E4]:h. r:q | [E3 G3 B3 D4]:h. r:q | [C#3 F#3 G3 B3]:h. r:q |" },
    { "instrument": "bass", "seq": "D2:h. A1:q | G1:h. D2:q | C2:h. G1:q | A1:h. E2:q |" },
    { "instrument": "drums", "seq": "[kick hihat]:8t r:8t hihat:8t [snare hihat]:8t r:8t hihat:8t r:8t r:8t [kick hihat]:8t [snare hihat]:8t r:8t hihat:8t | [kick hihat]:8t r:8t hihat:8t [snare hihat]:8t r:8t hihat:8t r:8t r:8t [kick hihat]:8t [snare hihat]:8t r:8t hihat:8t | [kick hihat]:8t r:8t hihat:8t [snare hihat]:8t r:8t hihat:8t r:8t r:8t [kick hihat]:8t [snare hihat]:8t r:8t hihat:8t | [kick hihat]:8t r:8t hihat:8t [snare hihat]:8t r:8t hihat:8t r:8t r:8t [kick hihat]:8t [snare hihat]:8t r:8t hihat:8t |" }
  ],
  "show": ["pianoroll"], "loop": true
}
```

```exercise
{
  "id": "e3-play-lofi",
  "type": "play-melody",
  "title": "Play the lo-fi voicings",
  "passScore": 0.7,
  "spec": {
    "bpm": 65, "timeSig": "4/4", "key": "C",
    "seq": "[F3 A3 C4 E4]:h. r:q | [F3 A3 B3 E4]:h. r:q | [E3 G3 B3 D4]:h. r:q | [C#3 F#3 G3 B3]:h. r:q |",
    "showStaff": false, "showKeyboard": true, "countIn": 1,
    "backing": { "instrument": "bass", "seq": "D2:h. A1:q | G1:h. D2:q | C2:h. G1:q | A1:h. E2:q |" }
  }
}
```

Chord method: first sort bright or dark, then tense or at rest. If unsure, play the candidate chords on the same root yourself right after the question and pick the closer match. The *How to do it* box under the drill shows the exact method for your current rung.

```ladder
{ "skill": "chords", "unlocks": 14, "intro": "Chord colours at your current rung (the top open rung is diminished vs augmented, next to major and minor): lo-fi and house colour every chord." }
```

## Make it

1. **Drums:** kick on 1 2 3 4, clap on 2 and 4, open hat on every "and". Loop one bar — it should already make you nod.
2. **Bass:** A on every "and" for bars 1–2, F for bars 3–4 (or your own two roots), then copy.
3. **Stabs:** a short C triad over the A bars, a short A minor triad over the F bars, on off-beats (try the "and" of 1 and the "and" of 3 first).
4. **Judge by ear:** mute the piano, then unmute it. The stabs should add bounce, not blur the kick; if it sounds cluttered, shorten the stabs or remove every second one.
5. **Stuck?** Copy the house example's drums and change only the chords.

```exercise
{
  "id": "e4-daw-house",
  "type": "daw-task",
  "title": "8-bar house groove",
  "instructions": "Kick on every beat, clap on 2 and 4, open hats on the off-beats. Bass: roots on the off-beats. Piano: off-beat stabs — use triads over the bass, e.g. C/A (= Am7) and Am/F (= Fmaj7), or two chords of your own in A minor.",
  "spec": {
    "template": {
      "bpm": 124, "key": "Am", "timeSig": "4/4",
      "tracks": [
        { "instrument": "drums", "seq": "" },
        { "instrument": "bass", "seq": "" },
        { "instrument": "piano", "seq": "" }
      ]
    },
    "task": "8-bar house loop.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["drums", "bass", "piano"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "drum-pattern", "requires": ["kick", "clap", "ohat"], "kickOnBeats": [1, 2, 3, 4], "clapOn": [2, 4], "on": { "ohat": [1.5, 2.5, 3.5, 4.5] }, "track": 0 },
      { "kind": "in-key", "key": "Am", "scale": "natural-minor", "allowPassing": false, "track": 2 },
      { "kind": "syncopation", "minOffbeatRatio": 0.75, "track": 1 },
      { "kind": "syncopation", "minOffbeatRatio": 0.5, "track": 2 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

## Between lessons

Play the four triad-over-bass chords once a day and listen for the colour change when the left hand comes in.
