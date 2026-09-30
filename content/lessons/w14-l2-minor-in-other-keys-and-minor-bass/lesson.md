---
id: w14-l2-minor-in-other-keys-and-minor-bass
title: "Minor in Other Keys, and Minor Bass Lines"
week: 14
order: 2
phase: p2
duration_min: 50
goals:
  - "Tell from the cadence whether home is major or minor, and where it is"
  - Find the relative and the parallel minor of a major key on the keyboard
  - Hear the raised 7 and raised 6 as degrees in a minor key
  - Find a minor bass line (i – VI – III – VII) by searching low keys, and use it in an 8-bar piece
prerequisites: [w14-l1-harmonic-and-melodic-minor]
tags: [minor, keys, degrees, bass, ear, daw]
---

# Minor in Other Keys, and Minor Bass Lines

Last lesson took minor out of A. Today makes it practical: how to tell a minor home from a major one, two ways a minor key relates to a major key, the raised notes as degrees, and the bass line under the most common minor loop.

## Major or minor home?

A major key and its relative minor use the *same* notes: C major and A minor are both the white keys. So the notes alone can't tell you where home is. The cadence does, in two steps:

1. **Where:** the last chord's lowest note is home.
2. **Which kind:** the last chord is bright (major) or dark (minor).

```example
{
  "title": "Cadence in C major, then cadence in A minor: same white keys (plus G♯), different home",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | r:w | [A3 C4 E4]:q [A3 D4 F4]:q [G#3 B3 E4]:q [A3 C4 E4]:q | r:w" },
    { "instrument": "bass", "seq": "C3:q F2:q G2:q C3:q | r:w | A2:q D2:q E2:q A2:q | r:w" }
  ],
  "show": ["keyboard"]
}
```

### Try it: find home, then its colour

1. Play the C cadence, stop, and play **C** low. Play C major (C E G) after it: it matches, bright.
2. Play the A minor cadence, stop, and play **A** low. Play A minor (A C E) after it: it matches, dark.
3. Now the pair with one flat: F major (F, B♭, C, F) and D minor (Dm, Gm, A, Dm). Find the last low note of each, then test its chord: bright or dark?

Check: two cadences, both using B♭. Find home on your keyboard, then play its chord to test the colour.

```exercise
{
  "id": "e1", "type": "listen", "title": "Check: which home?",
  "instructions": "For each cadence: find the last bass note, then play its major and minor chord and keep the one that matches.",
  "spec": {
    "examples": [
      { "title": "Cadence 1", "bpm": 80, "timeSig": "4/4", "key": "Dm", "hidden": true, "tracks": [
        { "instrument": "piano", "seq": "[D4 F4 A4]:q [D4 G4 Bb4]:q [C#4 E4 A4]:q [D4 F4 A4]:h" },
        { "instrument": "bass", "seq": "D3:q G2:q A2:q D3:h" } ] },
      { "title": "Cadence 2", "bpm": 80, "timeSig": "4/4", "key": "F", "hidden": true, "tracks": [
        { "instrument": "piano", "seq": "[F3 A3 C4]:q [F3 Bb3 D4]:q [E3 G3 C4]:q [F3 A3 C4]:h" },
        { "instrument": "bass", "seq": "F2:q Bb2:q C3:q F2:h" } ] }
    ],
    "questions": [
      { "q": "Cadence 1 ends in…", "choices": ["F major", "D minor"], "answer": 1, "explain": "D minor: the last bass note is D and the last chord is dark (D F A). The C♯ in the third chord is D minor's raised 7." },
      { "q": "Cadence 2 ends in…", "choices": ["F major", "D minor"], "answer": 0, "explain": "F major: the last bass note is F and the last chord is bright (F A C)." }
    ]
  }
}
```

**If you can't hear it yet:** ignore the colour at first. Find the last bass note by searching (higher or lower than my key?), then play both chords on it, major and minor, right after the replay. The one that matches is the key. A raised note just below home in the third chord (C♯ before D) is a minor-key clue too.

## Relative and parallel, on the keyboard

Two different "minor partners" of a major key, and both matter:

- The [[relative minor]] shares the **notes**: home moves 3 half steps down. C major → A minor, G major → E minor.
- The parallel minor (see [[parallel keys]]) shares the **home**: the notes change. C major → C minor: 3, 6 and 7 drop a half step (E♭, A♭, B♭).

```example
{
  "title": "C major; A natural minor (relative: same keys, new home); C natural minor (parallel: same home, 3 6 7 lowered)",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 A4:8 B4:8 C5:8 | r:w | A3:8 B3:8 C4:8 D4:8 E4:8 F4:8 G4:8 A4:8 | r:w | C4:8 D4:8 Eb4:8 F4:8 G4:8 Ab4:8 Bb4:8 C5:8" } ],
  "show": ["keyboard"]
}
```

### Try it: two partners of G major

1. Play G major (one sharp, F♯). Count 3 half steps down from G: G, F♯, F, **E**. Play E minor using the same keys: E F♯ G A B C D. Relative.
2. Now keep G as home and lower 3, 6 and 7: G A **B♭** C D **E♭ F**. That's G minor. Parallel.
3. Play the G major cadence, then the G minor cadence (Gm, Cm, D, Gm): same home, the colour flips. Then the E minor cadence: new home, same keys.

```exercise
{
  "id": "e2", "type": "quiz-input", "title": "Relative or parallel?",
  "spec": { "questions": [
    { "q": "Relative minor of D major?", "answer": ["B"], "kind": "note" },
    { "q": "Relative minor of B♭ major?", "answer": ["G"], "kind": "note" },
    { "q": "Relative major of D minor?", "answer": ["F"], "kind": "note" },
    { "q": "In the parallel minor of D major (D minor), degree 3 becomes which note?", "answer": ["F"], "kind": "note" },
    { "q": "In the parallel minor of G major (G minor), degree 7 becomes which note?", "answer": ["F"], "kind": "note" }
  ] }
}
```

## Hearing the raised notes

Last lesson you heard harmonic and melodic minor as *scales*. Now the raised notes join the degree drill as single notes in a minor key. In D minor: the plain 7 is **C**, a whole step below home, relaxed; the raised 7 (**♯7**) is **C♯**, a half step below home, pulling up hard like ti in major. The plain 6 is **B♭**, heavy, leaning down onto 5; the raised 6 (**♯6**) is **B**, brighter, almost hopeful.

```example
{
  "title": "D minor cadence, then C (7) and C♯ (♯7); cadence again, then B♭ (6) and B (♯6), each walking home",
  "bpm": 80, "timeSig": "4/4", "key": "Dm",
  "tracks": [
    { "instrument": "piano", "seq": "[D4 F4 A4]:q [D4 G4 Bb4]:q [C#4 E4 A4]:q [D4 F4 A4]:q | C4:q D4:q C#4:q D4:q | [D4 F4 A4]:q [D4 G4 Bb4]:q [C#4 E4 A4]:q [D4 F4 A4]:q | Bb3:q A3:q B3:q C#4:q | D4:w" },
    { "instrument": "bass", "seq": "D3:q G2:q A2:q D3:q | r:w | D3:q G2:q A2:q D3:q | r:w | r:w" }
  ],
  "show": ["keyboard"]
}
```

### Try it: lean or pull?

1. Play the D minor cadence. Then **C4 → D4**, then **C♯4 → D4**. The C steps up with air; the C♯ slides in. Say "relaxed" and "pull".
2. Play **B♭3 → A3** (6 sinks onto 5), then **B3 → C♯4 → D4** (♯6 climbs with ♯7, the melodic-minor way up).
3. Do the same in A minor: G and G♯ before A; F and F♯. Same feelings, new home.

**If you can't hear it yet:** find the note on the keyboard (search from home), then look: a black key where the minor scale has a white one, or the key just above the plain 6 or 7, is the raised one. Or play both versions right after the replay and keep the one that matches.

**Before the drill, rehearse the method** (in the *How to do it* box above the drill, for the rung you're on): a note just under home that leans up urgently is ♯7; the plain 7 sits lower and relaxed. ♯6 sounds brighter than 6; compare them by playing both from home. The drill runs at your current degree rung, so any minor key comes first if it isn't solid yet.

```ladder
{ "skill": "degrees", "unlocks": 25, "intro": "Opens \"Minor: the raised 7\", then \"Minor: raised 6 and 7\"; the drill runs at your current rung." }
```

## Minor tunes in any key

The melody drill follows the degrees: five-note tunes in **any minor key**, and a note may dip below home (low sol). Same method as in A minor, with home first.

**Try it:** play the E minor cadence, then put your right thumb on **E4**: your five fingers cover E F♯ G A B. Echo to yourself: E G F♯ E, then drop to **B3** (low sol) with your left hand; then E F♯ G A B. Then move to D minor: right thumb on **D4** (D E F G A), play D F E D, and drop to **A3** with the left hand.

**If you can't hear it yet:** find home from the cadence first, then the first note of the tune relative to home. Replay, get three notes, then add two.

**Before the drill, rehearse the method** (in the *How to do it* box): minor home from the cadence; minor tunes often fall back to home; find the first note, then follow the path. The drill runs at your current melody rung.

```ladder
{ "skill": "melody", "unlocks": 19, "intro": "Opens \"Minor, any key\": five notes in any minor key, some below home; the drill runs at your current rung." }
```

## Minor bass lines: i – VI – III – VII

Last week you played the minor loop Am – F – C – G. Its bass line is the backbone of countless songs: degrees **1 – ♭6 – ♭3 – ♭7** of the minor key. In E minor that's **E – C – G – D**; in D minor, **D – B♭ – F – C**. The bass drops a major 3rd (E → C), drops a 4th (C → G, or climbs a 5th), then climbs a 5th (G → D, or drops a 4th). Your ear drills for minor bass lines come later in the year; today you find them with the search you already know.

```example
{
  "title": "i – VI – III – VII in E minor (Em – C – G – D), bass E – C – G – D",
  "bpm": 84, "timeSig": "4/4", "key": "Em", "loop": true,
  "tracks": [
    { "instrument": "piano", "seq": "[E3 G3 B3]:w | [E3 G3 C4]:w | [D3 G3 B3]:w | [D3 F#3 A3]:w" },
    { "instrument": "bass", "seq": "E2:h E2:h | C2:h C2:h | G1:h G1:h | D2:h D2:h" }
  ],
  "show": ["keyboard", "pianoroll"]
}
```

### Try it: search the low keys

1. Loop the example. Left hand: find the first bass note by searching low keys (higher or lower than my key?) until one blends: **E2**.
2. When the chord changes, ask only "up or down?" and search from E. It goes down, to **C2**. Then G1 (down again), then D2 (up).
3. Play the four notes with the left hand and the chords with the right: Em, C, G, D. Then the same pattern in D minor: D – B♭ – F – C.

Check: a minor loop in another key. Find home and the bass notes on your keyboard.

```exercise
{
  "id": "e3", "type": "listen", "title": "Check: find the minor bass line",
  "instructions": "Loop it. Search for each bass note with your left hand before answering.",
  "spec": {
    "example": {
      "title": "Mystery minor loop", "bpm": 80, "timeSig": "4/4", "key": "Dm", "loop": true, "hidden": true,
      "tracks": [
        { "instrument": "piano", "seq": "[D3 F3 A3]:w | [D3 F3 Bb3]:w | [C3 F3 A3]:w | [C3 E3 G3]:w" },
        { "instrument": "bass", "seq": "D2:h D2:h | Bb1:h Bb1:h | F1:h F1:h | C2:h C2:h" }
      ]
    },
    "questions": [
      { "q": "The first bass note (home) is…", "choices": ["C", "D", "F", "A"], "answer": 1, "explain": "D: the loop starts and settles on D minor." },
      { "q": "The whole bass line is…", "choices": ["D – B♭ – F – C", "D – A – F – C", "D – B♭ – G – C"], "answer": 0, "explain": "D – B♭ – F – C: i – VI – III – VII in D minor, degrees 1 – ♭6 – ♭3 – ♭7." }
    ]
  }
}
```

**If you can't hear it yet:** one chord at a time. Loop, search until your key blends with the bass, write the letter down, then move on. Low notes are blurry: if two neighbours both seem to fit, play your guess an octave higher, where the colour is clearer.

## Make it: 8 bars in E minor

```exercise
{
  "id": "e4", "type": "daw-task", "title": "Minor bass line and melody in E minor",
  "spec": {
    "template": { "bpm": 84, "key": "Em", "timeSig": "4/4", "tracks": [
      { "instrument": "piano", "seq": "[E3 G3 B3]:w | [E3 G3 C4]:w | [D3 G3 B3]:w | [D3 F#3 A3]:w | [E3 G3 B3]:w | [E3 A3 C4]:w | [D#3 F#3 B3]:w | [E3 G3 B3]:w" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "lead", "seq": "" } ] },
    "task": "The piano plays i – VI – III – VII (Em, C, G, D), then the cadence i – iv – V – i (Em, Am, B, Em). 1) Bass track: find each root by searching low keys while the piano plays, then record them between E1 and E3, at least on beats 1 and 3. 2) Lead track: an 8-bar melody in E minor with a chord tone on beat 1 of every bar. In bar 7 (the B chord) use the raised 7, D♯, and let it rise to E in bar 8. End on E.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "bass", "lead"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "range", "low": "E1", "high": "E3", "track": 1 },
      { "kind": "plays-progression", "progression": ["i", "VI", "III", "VII", "i", "iv", "V", "i"], "barsPerChord": 1, "mode": "roots", "minRatio": 0.9, "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["i", "VI", "III", "VII", "i", "iv", "V", "i"], "barsPerChord": 1, "minRatio": 0.75, "track": 2 },
      { "kind": "ends-on", "degree": 1, "track": 2 },
      { "kind": "custom", "id": "raised-7", "note": "The melody uses D♯ over the B chord in bar 7 and rises to E." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

**If you're stuck on the melody:** on beat 1 of each bar, play a note of the chord (the top note of the piano chord works), then fill the other beats with steps to the next bar's note. For bars 7–8: B – D♯ – E is enough.

## Between lessons

- **3 minutes, daily:** play a cadence in a random key, major or minor; find home and test its chord (bright or dark) before anything else.
- **2 minutes:** from any major key, find its relative minor (3 half steps down) and its parallel minor (lower 3, 6, 7), and play both scales.
- **2 minutes:** the minor loop bass (1 – ♭6 – ♭3 – ♭7) in E, D and A minor with the left hand.
- One Practice-page session: degrees and melody at your rung.
