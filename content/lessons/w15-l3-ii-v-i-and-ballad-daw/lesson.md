---
id: w15-l3-ii-v-i-and-ballad-daw
title: ii – V – I and a Pop Ballad with Sevenths
week: 15
order: 3
phase: p2
duration_min: 50
goals:
  - Explain predominant chords (ii and IV) and play ii7 – V7 – Imaj7 smoothly in C, G and F
  - Hear iii as a chord of the key, and triads mixed with dominant 7s
  - Write an 8-bar ballad with seventh chords, bass and melody in the DAW
prerequisites: [w15-l2-dominant-function-v7-to-i]
tags: [harmony, sevenths, ii-v-i, daw]
---

# ii – V – I and a Pop Ballad with Sevenths

## Home, away, tension, home

The cadence the app plays before degree questions, I – IV – V – I, tells a little story: **home → away → tension → home**. Each step has a job:

- **I** is home.
- **IV** moves *away*, a lift with no tension in it: no leading tone, no tritone.
- **V** (or V7) creates the tension that pulls home.

Chords that do the "away" job, leading into V, are called [[predominant]] chords: they come *before the dominant*. In a major key the two main ones are **IV** and **ii**. Listen to the story told both ways:

```example
{
  "title": "I – IV – V7 – I, then I – ii – V7 – I (in C)",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[E3 G3 C4]:w | [F3 A3 C4]:w | [F3 G3 B3]:w | [E3 G3 C4]:w | r:w | [E3 G3 C4]:w | [F3 A3 D4]:w | [F3 G3 B3]:w | [E3 G3 C4]:w" },
    { "instrument": "bass", "seq": "C2:w | F2:w | G1:w | C2:w | r:w | C2:w | D2:w | G1:w | C2:w" }
  ],
  "show": ["pianoroll"]
}
```

Most people hear ii as a slightly darker, softer "away" than IV (it's a minor chord). Both lead naturally into V.

## One more chord of the key: iii

You have drilled I, ii, IV, V and vi. The key has one more common chord: **iii**, E minor in C (E G B). It shares two notes with I (E and G) and two with V (G and B), so it sounds like a soft, slightly sad shade of home. In pop it usually walks between I and IV or vi: **I – iii – IV** or **I – iii – vi**.

```example
{
  "title": "I – iii – IV – V, then I – vi – IV – V (in C)",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[E3 G3 C4]:w | [E3 G3 B3]:w | [F3 A3 C4]:w | [D3 G3 B3]:w | r:w | [E3 G3 C4]:w | [E3 A3 C4]:w | [F3 A3 C4]:w | [D3 G3 B3]:w" },
    { "instrument": "bass", "seq": "C2:w | E2:w | F2:w | G1:w | r:w | C2:w | A1:w | F2:w | G1:w" }
  ],
  "show": ["pianoroll"]
}
```

### Try it: iii or vi?

1. Play C, then Em (E G B), then C. Then C, Am (A C E), C. Both are minor and both share notes with C.
2. Listen to the bass: iii's bass is E, the 3rd of the home chord (two white keys above C); vi's bass drops below home, to A.
3. Eyes closed: C, then Em or Am at random. Find the bass note first, then name the chord.

**If you can't hear it yet:** as always, the bass decides. Play the bass note you hear, count up from home: 3 = iii, 6 = vi.

**Before the drill, rehearse the method** (in the *How to do it* box above the drill): hear home from the first chord, find each bass note, turn it into a degree, then a numeral. The drill runs at your current progressions rung.

```ladder
{ "skill": "progressions", "unlocks": 8, "intro": "Opens \"Adding iii\"; the drill runs at your current rung." }
```

## ii – V – I

Put the three steps together with seventh chords and you get the most famous progression in jazz, and a staple of soul and ballads: **ii7 – V7 – Imaj7**. In C: **Dm7 – G7 – Cmaj7**.

Why does ii lead so well into V? Dm7 (D F A C) shares D and F with G7 (G B D F). And its root falls a fifth to G, just as G falls a fifth to C: **D → G → C**, two falls of a fifth in a row, each a push toward home.

Voiced smoothly, the three chords feel like one gesture. Below, the bass plays the roots and the right hand plays four chord tones close together. Watch how little they move:

```example
{
  "title": "Dm7 – G7 – Cmaj7: right hand F A C D → F G B D → E G B C, bass D, G, C",
  "bpm": 70, "timeSig": "4/4", "key": "C", "loop": true,
  "tracks": [
    { "instrument": "epiano", "seq": "[F3 A3 C4 D4]:w | [F3 G3 B3 D4]:w | [E3 G3 B3 C4]:w | [E3 G3 B3 C4]:w" },
    { "instrument": "bass", "seq": "D2:w | G1:w | C2:w | C2:w" }
  ],
  "show": ["keyboard", "pianoroll"]
}
```

```exercise
{
  "id": "e1", "type": "play-melody", "title": "ii – V – I, left-hand root + right-hand chord",
  "instructions": "Left hand plays the root, right hand the four upper notes. Right hand: F stays, A→G, C→B, D stays; then F→E, D→C.",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "[D3 F3 A3 C4 D4]:w | [G2 F3 G3 B3 D4]:w | [C3 E3 G3 B3 C4]:w", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e2", "type": "play-chord", "title": "ii – V – I in three keys",
  "instructions": "C: Dm7 G7 Cmaj7. G: Am7 D7 Gmaj7. F: Gm7 C7 Fmaj7.",
  "count": 9, "passScore": 0.7,
  "spec": { "chords": ["Dm7", "G7", "Cmaj7", "Am7", "D7", "Gmaj7", "Gm7", "C7", "Fmaj7"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

```exercise
{
  "id": "e3", "type": "roman-analysis", "title": "Spot the ii – V – I",
  "instructions": "Key: G major. Name each chord, then find the three that form ii – V – I.",
  "passScore": 0.7,
  "spec": { "key": "G", "chords": ["Gmaj7", "Em7", "Am7", "D7", "Gmaj7", "Cmaj7"], "prompt": "symbols" }
}
```

## Triads and sevenths, mixed

Real songs mix plain triads with dominant 7s. Today's chord rung puts them together: **major, minor or dominant 7?** Inside ii – V – I you just heard the pair that matters most: ii7 is a minor 7, V7 a dominant 7. They share root, 5th and 7th; only the 3rd differs, and the dominant's 3rd makes the tritone that leans forward.

### Try it: one note changes the family

1. Hold D F A C (Dm7). Move only the F up to **F♯** (D7), then back. Repeat slowly. The F♯ version is brighter and leans forward; the F version is darker and sits still.
2. Now on C: C E♭ G B♭ (Cm7), C E G B♭ (C7), C E G B (Cmaj7). Name each aloud: "mellow", "bluesy", "dreamy".
3. For the new rung: C, Cm, C7 on the same root. Eyes closed, play one at random, name it before you look: bright and still (major), dark (minor), bright and pulling (dom7).

Check: three chords on D.

```exercise
{
  "id": "e5", "type": "listen", "title": "Check: which seventh?",
  "instructions": "Play each chord, then build your guess on D yourself and compare.",
  "spec": {
    "examples": [
      { "title": "Chord 1", "bpm": 60, "timeSig": "4/4", "key": "D", "hidden": true, "tracks": [ { "instrument": "epiano", "seq": "[D3 F#3 A3 C4]:w" } ] },
      { "title": "Chord 2", "bpm": 60, "timeSig": "4/4", "key": "D", "hidden": true, "tracks": [ { "instrument": "epiano", "seq": "[D3 F3 A3 C4]:w" } ] },
      { "title": "Chord 3", "bpm": 60, "timeSig": "4/4", "key": "D", "hidden": true, "tracks": [ { "instrument": "epiano", "seq": "[D3 F#3 A3 C#4]:w" } ] }
    ],
    "questions": [
      { "q": "Chord 1 is…", "choices": ["Dm7", "D7", "Dmaj7"], "answer": 1, "explain": "D7: D F♯ A C. Bright underneath, restless on top." },
      { "q": "Chord 2 is…", "choices": ["Dm7", "D7", "Dmaj7"], "answer": 0, "explain": "Dm7: D F A C. Dark underneath, calm." },
      { "q": "Chord 3 is…", "choices": ["Dm7", "D7", "Dmaj7"], "answer": 2, "explain": "Dmaj7: D F♯ A C♯. The C♯ rubs gently against the D above: dreamy." }
    ]
  }
}
```

**If you can't hear it yet:** split it into two keyboard checks. First the triad: find the root (lowest note), play the major and the minor triad on it and pick the match; minor means m7. If major, add the two possible 7ths yourself, a whole step below the root's octave (dom7) or a half step below (maj7), and pick the one that sounds like the replay.

**Before the drill, rehearse the method** (it's in the *How to do it* box above the drill, for the rung you're on): first bright or dark? Dark = minor. Bright: does it rest (major triad) or pull (dominant 7)? The drill runs at your current chord rung, so you'll meet this mix once the seventh pairs are solid.

```ladder
{ "skill": "chords", "unlocks": 8, "intro": "Opens \"Triads and dominant 7\"; the drill runs at your current rung." }
```

## The ballad loop

Swap the triads of a pop loop for sevenths and it instantly sounds like a slow soul ballad. Try **Cmaj7 – Am7 – Dm7 – G7** (Imaj7 – vi7 – ii7 – V7). It's a home → away → tension story, and G7 at the end pulls you back to the start.

```example
{
  "title": "Ballad loop: Cmaj7 – Am7 – Dm7 – G7",
  "bpm": 66, "timeSig": "4/4", "key": "C", "loop": true,
  "tracks": [
    { "instrument": "epiano", "seq": "[E3 G3 B3]:h [E3 G3 B3]:h | [E3 G3 C4]:h [E3 G3 C4]:h | [F3 A3 C4]:h [F3 A3 C4]:h | [F3 G3 B3]:h [F3 G3 B3]:h" },
    { "instrument": "bass", "seq": "C2:h. C2:q | A1:h. A1:q | D2:h. D2:q | G1:h. G1:q" }
  ],
  "show": ["pianoroll"]
}
```

(Here the e-piano leaves the root to the bass in the first three chords and plays only their 3rd, 5th and 7th. On G7 it keeps the root and drops the 5th instead — F, G, B are the 7th, root and 3rd — because the 3rd and 7th, the tritone B–F, are what make it a dominant 7. Pianists do this all the time.)

## Make it: an 8-bar ballad

```exercise
{
  "id": "e4", "type": "daw-task", "title": "Pop ballad with sevenths",
  "spec": {
    "template": { "bpm": 66, "key": "C", "timeSig": "4/4", "tracks": [
      { "instrument": "epiano", "seq": "" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "lead", "seq": "" } ] },
    "task": "Write 8 bars on Cmaj7 – Am7 – Dm7 – G7, one bar each, twice. 1) E-piano: seventh chords, voiced smoothly between G2 and G4 (you may leave the root to the bass). 2) Bass: the root on beat 1 of each bar. 3) Lead: a slow melody, mostly half and quarter notes, with a chord tone on beat 1 of each bar. Try landing on a chord's 7th once (B over Cmaj7, or G over Am7): that's the ballad colour. End on G, the root of the last chord, so the loop leans back to the start.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["epiano", "bass", "lead"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "range", "low": "G2", "high": "G4", "track": 0 },
      { "kind": "chord-has-seventh", "min": 4 },
      { "kind": "plays-progression", "progression": ["I", "vi", "ii", "V"], "barsPerChord": 1, "mode": "roots", "minRatio": 0.9, "track": 1 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 2 },
      { "kind": "uses-rhythm", "values": ["h", "q"], "minDistinct": 2, "track": 2 },
      { "kind": "ends-on", "degree": 5, "track": 2 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

## Between lessons

- **3 minutes:** ii – V – I in C with the left-hand root and right-hand chord, then in G and F.
- **2 minutes:** on D, play D, Dm, D7 in random order, eyes closed; name each.
- **1 minute:** in C, play I – iii – IV – V and I – vi – IV – V; listen to the bass.
- **Finish the ballad** if it took longer than one session; play it back once with fresh ears.
- One chords session and one progressions session on the Practice page.
