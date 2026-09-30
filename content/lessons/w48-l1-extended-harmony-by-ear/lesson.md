---
id: w48-l1-extended-harmony-by-ear
title: "Transcribe 3: R&B — Extended Harmony by Ear"
week: 48
order: 1
phase: p5
duration_min: 45
goals:
  - "Transcribe extended chords family first: bass note, then major / minor / dominant family"
  - Combine the bass with a rootless keyboard voicing to name the chord
  - Label a hidden neo-soul loop by family and root
prerequisites: [w47-l3-dance-reference-analysis]
tags: [transcription, rnb, neo-soul, extended-chords, ear]
---

# Transcribe 3: R&B — Extended Harmony by Ear

In R&B and neo-soul almost nothing is a plain triad: minor 9ths, dominant 13ths, major 9ths. The method doesn't change;
pass 4 just gets one step longer. And an honest limit up front: telling a 9th from a 13th by ear is beyond what this
course drills (the last rung of the chords ladder, *ninths next to their sevenths*, is as far as we go). The target is
**family and root** — which is also what matters most for playing a song back.

## Family first, then colour — on the keyboard

For each chord of the loop:

1. **Root** — pass 3 as always: loop one bar, play a low key, move higher/lower until it merges with the bass's first
   note. *Check:* hold it under the whole bar; it should sit still, not rub.
2. **Family** — on that root, play three seventh chords one after another along with the loop: maj7 (root + 4, 7, 11
   half steps up), dominant 7 (4, 7, 10) and minor 7 (3, 7, 10). Keep the one that melts into the bar.
   *Check:* by feel — major family is bright and restful, minor is soft and darker, dominant is bright but restless.
3. **Colour** — does the record have extra shimmer on top of your seventh chord? In this style assume a 9th unless your
   ear says otherwise.

Stuck between two families? Loop the bar, play the two candidates back to back several times, commit to one, and
check at the reveal. Then use the [[chord-family default]] of the style as a cross-check: in neo-soul, ii and vi are
usually m9, V is 9 or 13, I is maj9.

## Rootless voicings

Keyboard players in this style leave the root to the bass ([[rootless voicing]]s, week 28). The keys alone can mislead:
an Am9 without its A (C–E–G–B) contains exactly the notes of a Cmaj7. So always combine layers: **bass note + keyboard colour =
chord symbol**.

Mystery track *Velvet*, hidden:

```example
{
  "title": "Velvet — full groove",
  "bpm": 84,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "drums", "seq": "kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q"},
    {"instrument": "drums", "seq": "r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q"},
    {"instrument": "drums", "seq": "hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 ohat:16 | hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 ohat:16 | hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 ohat:16 | hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 ohat:16"},
    {"instrument": "bass", "seq": "G2:q. G2:16 r:16 r:8 D3:8 F2:q | C2:q. C2:16 r:16 r:8 G2:8 Bb2:q | F2:q. F2:16 r:16 r:8 C3:8 E2:q | D2:q. D2:16 r:16 r:8 A2:8 F#2:q"},
    {"instrument": "epiano", "seq": "[Bb3 D4 F4 A4]:h. r:8 [Bb3 E4 A4 D5]:8 | [Bb3 E4 A4 D5]:h. r:8 [A3 E4 G4 C5]:8 | [A3 E4 G4 C5]:h. r:8 [C4 E4 F4 A4]:8 | [C4 E4 F4 A4]:h. r:8 [Bb3 D4 F4 A4]:8"},
    {"instrument": "lead", "seq": "r:8 A4:8 Bb4:8 A4:8 F4:q D4:q | E4:8 F4:8 G4:8 A4:8~ A4:h | r:8 G4:8 A4:8 C5:8 E5:q. D5:8 | C5:q A4:8 F4:8 E4:h"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```example
{
  "title": "Velvet — keys and bass only, slowed",
  "bpm": 64,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "bass", "seq": "G2:q. G2:16 r:16 r:8 D3:8 F2:q | C2:q. C2:16 r:16 r:8 G2:8 Bb2:q | F2:q. F2:16 r:16 r:8 C3:8 E2:q | D2:q. D2:16 r:16 r:8 A2:8 F#2:q"},
    {"instrument": "epiano", "seq": "[Bb3 D4 F4 A4]:h. r:8 [Bb3 E4 A4 D5]:8 | [Bb3 E4 A4 D5]:h. r:8 [A3 E4 G4 C5]:8 | [A3 E4 G4 C5]:h. r:8 [C4 E4 F4 A4]:8 | [C4 E4 F4 A4]:h. r:8 [Bb3 D4 F4 A4]:8"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```exercise
{
  "id": "w48l1-listen",
  "type": "listen",
  "title": "Family first",
  "spec": {
    "example": {
      "title": "Velvet — keys and bass",
      "bpm": 64,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "bass", "seq": "G2:q. G2:16 r:16 r:8 D3:8 F2:q | C2:q. C2:16 r:16 r:8 G2:8 Bb2:q | F2:q. F2:16 r:16 r:8 C3:8 E2:q | D2:q. D2:16 r:16 r:8 A2:8 F#2:q"},
        {"instrument": "epiano", "seq": "[Bb3 D4 F4 A4]:h. r:8 [Bb3 E4 A4 D5]:8 | [Bb3 E4 A4 D5]:h. r:8 [A3 E4 G4 C5]:8 | [A3 E4 G4 C5]:h. r:8 [C4 E4 F4 A4]:8 | [C4 E4 F4 A4]:h. r:8 [Bb3 D4 F4 A4]:8"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Bar 1: which family?", "choices": ["Major", "Minor", "Dominant"], "answer": 1, "explain": "Minor: the bass note completes the keyboard's notes into a minor-family chord with a 9th on top."},
      {"q": "Bar 2: which family?", "choices": ["Major", "Minor", "Dominant"], "answer": 2, "explain": "Dominant: bass plus keys make a dominant-family chord with extra colour on top."},
      {"q": "Which bar sounds most like home?", "choices": ["1", "2", "3", "4"], "answer": 2, "explain": "Bar 3: the restful major-family chord. Full symbols come after the next exercise."}
    ]
  }
}
```

```exercise
{
  "id": "w48l1-prog",
  "type": "ear-progression",
  "title": "The loop by family and root",
  "instructions": "Key of F major. Answer each chord with the seventh-chord numeral of its family (a 9th or 13th counts as its family's seventh).",
  "srs": false,
  "spec": {
    "key": "F",
    "mode": "major",
    "chords": ["Imaj7", "ii7", "iii7", "IVmaj7", "V7", "vi7"],
    "example": {
      "title": "Velvet",
      "bpm": 84,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q"},
        {"instrument": "drums", "seq": "r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q | r:q snare:q r:q snare:q"},
        {"instrument": "drums", "seq": "hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 ohat:16 | hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 ohat:16 | hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 ohat:16 | hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 hihat:16 ohat:16"},
        {"instrument": "bass", "seq": "G2:q. G2:16 r:16 r:8 D3:8 F2:q | C2:q. C2:16 r:16 r:8 G2:8 Bb2:q | F2:q. F2:16 r:16 r:8 C3:8 E2:q | D2:q. D2:16 r:16 r:8 A2:8 F#2:q"},
        {"instrument": "epiano", "seq": "[Bb3 D4 F4 A4]:h. r:8 [Bb3 E4 A4 D5]:8 | [Bb3 E4 A4 D5]:h. r:8 [A3 E4 G4 C5]:8 | [A3 E4 G4 C5]:h. r:8 [C4 E4 F4 A4]:8 | [C4 E4 F4 A4]:h. r:8 [Bb3 D4 F4 A4]:8"},
        {"instrument": "lead", "seq": "r:8 A4:8 Bb4:8 A4:8 F4:q D4:q | E4:8 F4:8 G4:8 A4:8~ A4:h | r:8 G4:8 A4:8 C5:8 E5:q. D5:8 | C5:q A4:8 F4:8 E4:h"}
      ]
    },
    "progression": ["ii7", "V7", "Imaj7", "vi7"]
  }
}
```

Now that you've answered, here are the full symbols as a chart. Play it and compare with the plain sevenths in your answer:
the family and root are the song; the 9ths and 13ths are its perfume.

```chords
{"key": "F", "bars": ["Gm9", "C13", "Fmaj9", "Dm9"], "roman": true, "play": true, "bpm": 84}
```

## Seventh or ninth?

The ninth sits a step above the root, an octave up, on top of the seventh chord. In a major 7th it adds shimmer; in a
dominant 7th it softens the edge a little without removing the pull. Compare, on chords that are not in *Velvet*
(shown — this is the explanation):

```example
{
  "title": "Seventh, then ninth: E♭maj7 → E♭maj9, B♭7 → B♭9",
  "bpm": 60,
  "timeSig": "4/4",
  "key": "Eb",
  "tracks": [
    {"instrument": "epiano", "seq": "[Eb3 G3 Bb3 D4]:h [Eb3 G3 Bb3 D4 F4]:h | [Bb2 D3 F3 Ab3]:h [Bb2 D3 F3 Ab3 C4]:h"}
  ],
  "show": ["keyboard"],
  "loop": false
}
```

At first the ninth may just sound like "a fuller chord". Listen for one extra note on top, a step above the root
note's octave; the family (major or dominant) stays the same underneath.

## Ear: chord colours at your level

Routine: sort bright or dark first, then the finer difference; play the candidates on the keyboard right after the
chord if unsure. The *How to do it* box under the drill shows the exact method for your current rung.

```ladder
{"skill": "chords", "unlocks": 16, "intro": "New rung: seventh or ninth, with dominant 7 and dominant 9 joining maj7 and maj9. You drill at your own current rung."}
```

```exercise
{
  "id": "w48l1-build",
  "type": "build-chord",
  "title": "Build the Velvet chords",
  "count": 8,
  "spec": {
    "chords": ["Gm9", "C13", "Fmaj9", "Dm9", "Bbmaj9", "A7", "Em7b5", "C9"],
    "root": "given",
    "prompt": "symbol",
    "key": "F"
  }
}
```

```exercise
{
  "id": "w48l1-play",
  "type": "play-chord",
  "title": "Play the loop, root plus rootless voicing",
  "instructions": "Left hand the root, right hand a rootless voicing — together they make the full chord.",
  "spec": {"chords": ["Gm9", "C13", "Fmaj9", "Dm9"], "inversion": "any", "sequence": true, "bpm": 64}
}
```

## Between lessons

Play the Velvet loop (root in the left hand, rootless voicing in the right) once a day, then put on an R&B song you
like and try the three-seventh-chord test on its first chord.
