---
id: w33-l1-borrowed-chords
title: Borrowed bVI and the bVI–bVII–I Cadence
week: 33
order: 1
phase: p4
duration_min: 35
goals:
  - Add bVI to the borrowed chords you know (iv, bVII) and play the bVI–bVII–I cadence
  - Name borrowed chords with flat numerals, and know why the same chord is plain VI in a minor key
  - "Open the progressions rung with bVI next to iv and bVII"
prerequisites: [w32-l3-comping-a-standard-daw, w19-l2-relative-parallel-and-borrowed]
tags: [harmony, borrowed-chords, modal-interchange, ear]
songs:
  - { title: "In My Life", artist: "The Beatles", public_domain: false }
  - { title: "Creep", artist: "Radiohead", public_domain: false }
---

# Borrowed ♭VI and the ♭VI–♭VII–I Cadence

## One more borrowed chord

In week 19 you met two [[borrowed chord]]s: in C major, **iv** (Fm) and **♭VII** (B♭), both taken from C minor, the parallel key. Borrowing like this is called [[modal interchange]]. Today one more chord joins them:

| Borrowed in C | Chord | The "foreign" note | Feeling |
|---------------|-------|--------------------|---------|
| iv | Fm | A♭ | bittersweet |
| ♭VII | B♭ | B♭ | open, anthem-like |
| **♭VI** | **A♭** (A♭ C E♭) | **A♭, E♭** | wide, cinematic |

**How the numerals are written.** In a major key a borrowed chord gets a flat when its root is lower than the major scale's note: A♭ is a half step below A, so the chord is ♭VI. In a minor key the same chord belongs to the key and is written plain **VI**, as in week 13's i–VI–III–VII. Same chord, two contexts.

**The ♭VI–♭VII–I cadence.** Two borrowed major chords march up by whole steps to the tonic: A♭ → B♭ → C. It sounds triumphant precisely because it skips V: rock anthems and "level complete" fanfares love it. By reference: Radiohead's "Creep" (G) ends its loop on the minor iv you know; the Beatles' "In My Life" (A) slips a minor iv into its verse.

```example
{
  "title": "IV–iv–I, then bVI–bVII–I (C major)",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[F3 A3 C4]:w | [F3 Ab3 C4]:w | [E3 G3 C4]:w | r:w | [Ab3 C4 Eb4]:w | [Bb3 D4 F4]:w | [C4 E4 G4]:w | r:w |" },
    { "instrument": "bass", "seq": "F2:w | F2:w | C2:w | r:w | Ab1:w | Bb1:w | C2:w | r:w |" }
  ],
  "show": ["keyboard", "staff"]
}
```

**What you will hear.** Most people don't notice "a flattened sixth degree" at first. What they notice is a sudden darker, wider light, usually with the bass dropping to a note outside the key (A♭, a major 3rd below C).

### Try it

1. Play C major (C E G) and hold it for a moment: that's home.
2. Now play **A minor** (A C E) — the ordinary vi. Then **A♭ major** (A♭ C E♭) — the borrowed ♭VI. Both share the C; listen to how A♭ sounds bigger and darker, like a cloud crossing the sun, while Am is just sad.
3. Play A♭ → B♭ → C with the bass (A♭1, B♭1, C2) under it. Feel the bass climbing two whole steps to home.

**Check:** after C, you can tell by ear whether someone (or a replay of the example) played Am or A♭ — "sad" vs "cinematic".

**If you can't hear it yet:** judge by the bass. Play C2, then A1 (vi), then A♭1 (♭VI): the ♭VI bass sits one key lower and sounds outside the key's white-key world. Bass first, colour second.

## Drills

```exercise
{
  "id": "e1-build-borrowed",
  "type": "build-chord",
  "title": "Build the borrowed chords from their numerals",
  "count": 6, "passScore": 0.7,
  "spec": { "chords": ["Fm", "Ab", "Bb", "Fm7", "Abmaj7", "Bb7"], "root": "given", "prompt": "roman", "key": "C" }
}
```

```exercise
{
  "id": "e2-play-cadences",
  "type": "play-chord",
  "title": "Play both cadences",
  "instructions": "IV–iv–I, then bVI–bVII–I. Right hand, nearest inversion each time.",
  "passScore": 0.7,
  "spec": { "chords": ["F", "Fm", "C", "Ab", "Bb", "C"], "inversion": "any", "sequence": true, "bpm": 60, "key": "C" }
}
```

```exercise
{
  "id": "e3-borrowed-quiz",
  "type": "quiz",
  "title": "Which note gives it away?",
  "passScore": 0.7,
  "spec": { "questions": [
    { "q": "In C major, which note makes Ab sound borrowed?", "choices": ["C", "Ab", "G", "D"], "answer": 1, "explain": "Ab (and Eb) come from C minor. C is in both keys." },
    { "q": "bVI in G major is…", "choices": ["Eb", "E", "Em", "C"], "answer": 0, "explain": "The 6th of G major is E; a half step lower is Eb, and the chord is Eb major." },
    { "q": "In A minor, F major is written…", "choices": ["bVI", "VI", "vi", "IV"], "answer": 1, "explain": "F belongs to A minor, so it is plain VI. The flat is only for borrowing into a major key." },
    { "q": "The bVI–bVII–I cadence in C is…", "choices": ["Ab – Bb – C", "A – B – C", "Am – G – C", "F – G – C"], "answer": 0, "explain": "Two borrowed major chords a whole step apart, then home: Ab, Bb, C." }
  ] }
}
```

```exercise
{
  "id": "e4-play-cadence-g",
  "type": "play-chord",
  "title": "The same cadence in G",
  "instructions": "bVI–bVII–I in G major (Eb – F – G, as in the quiz). Nearest inversion each time.",
  "passScore": 0.7,
  "spec": { "chords": ["Eb", "F", "G"], "inversion": "any", "sequence": true, "bpm": 60, "key": "G" }
}
```

## Ear: borrowed chords

**Before the drill** — the method (see *How to do it* beside it): expect surprises and go **bass first, colour second**. A darker iv keeps the IV bass; ♭VII's bass is a whole step below home and feels relaxed; ♭VI's bass is a major 3rd below home and the chord sounds bright but "foreign". The drill runs at your current progressions rung, which may be earlier; its box has that rung's method.

```ladder
{ "skill": "progressions", "unlocks": 20, "intro": "Opens the borrowed-chords rung (bVI joins iv and bVII in random keys); the drill runs at your current progressions rung." }
```

## Between lessons

Play ♭VI–♭VII–I in C and G once a day. In one song you like, listen for a chord that suddenly darkens the light — then check the bass on your keyboard.
