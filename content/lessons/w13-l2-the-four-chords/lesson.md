---
id: w13-l2-the-four-chords
title: The Four Chords and Their Cousins
week: 13
order: 2
phase: p2
duration_min: 45
goals:
  - Play I–V–vi–IV, vi–IV–I–V, I–vi–IV–V and I–IV–V in C and G
  - Explain why rotating the same four chords changes the mood
  - Hear ii join the four chords, and tell triads from dominant 7ths
prerequisites: [w13-l1-functions-and-cadences]
tags: [harmony, progressions, pop, ear]
songs:
  - { title: "Canon in D", composer: "Johann Pachelbel", public_domain: true }
  - { title: "La Bamba", composer: "Traditional (Mexican son jarocho)", public_domain: true }
  - { title: "Don't Stop Believin'", composer: "Journey (1981)", public_domain: false }
---

# The Four Chords and Their Cousins

A huge number of pop songs use just four chords: **I, V, vi and IV**. That isn't laziness. Between them they cover all three jobs: home (I, vi), away (IV) and tension (V). They also share notes with each other, so they connect smoothly. The trick is **which one you start on**: the same loop feels different depending on where it begins.

## One loop, four rotations

| name | in C | how it's often described |
|---|---|---|
| **I – V – vi – IV** | C G Am F | bright, anthemic |
| **vi – IV – I – V** | Am F C G | wistful, almost minor |
| **I – vi – IV – V** | C Am F G | '50s doo-wop, sweet |
| **IV – I – V – vi** | F C G Am | yearning, never quite home |

The first two use the same chords in the same cycle, just a different starting point. Starting on vi puts a minor chord on the strongest bar, so the whole loop leans sad. (In week 9 you heard vi – IV – I – V in C as i – VI – III – VII in A minor.) Listen and judge the moods for yourself:

```example
{
  "title": "I – V – vi – IV, then vi – IV – I – V (the same four chords)",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[E3 G3 C4]:w | [D3 G3 B3]:w | [E3 A3 C4]:w | [F3 A3 C4]:w | [E3 A3 C4]:w | [F3 A3 C4]:w | [E3 G3 C4]:w | [D3 G3 B3]:w" },
    { "instrument": "bass", "seq": "C2:h C2:h | G1:h G1:h | A1:h A1:h | F1:h F1:h | A1:h A1:h | F1:h F1:h | C2:h C2:h | G1:h G1:h" }
  ],
  "show": ["pianoroll"]
}
```

These chords have a long history. Pachelbel's *Canon*, which you played in C in week 10, runs **I – V – vi – iii – IV – I – IV – V**: its first half is an ancestor of today's loop. Many songs, Journey's *Don't Stop Believin'* (1981) among them, are built on I – V – vi – IV.

### Try it: where the loop starts

1. Play C – G – Am – F twice, slowly, with each root low in the left hand. Notice where it feels like the loop "begins again": on C, bright.
2. Now play Am – F – C – G twice. Same chords. The restart lands on Am, and the whole loop tilts darker.
3. Play only the left-hand roots of each: C G A F and A F C G. The first bar's bass note is what you'll use to tell rotations apart.

**If you can't hear the mood change:** don't worry about mood words. Ask one concrete question: is the *first* chord of the loop bright (major) or dark (minor)? Play C and Am yourself right after the loop starts and pick the match.

```exercise
{
  "id": "e1", "type": "play-chord", "title": "Two rotations in C",
  "instructions": "I–V–vi–IV, then vi–IV–I–V. Use smooth voicings from week 11: hold common tones.",
  "count": 8, "passScore": 0.7,
  "spec": { "chords": ["C", "G", "Am", "F", "Am", "F", "C", "G"], "inversion": "any", "sequence": true, "bpm": 72, "key": "C" }
}
```

```exercise
{
  "id": "e2", "type": "play-chord", "title": "I – vi – IV – V in G",
  "instructions": "G, Em, C, D. The D chord has F♯ from G major.",
  "count": 4, "passScore": 0.7,
  "spec": { "chords": ["G", "Em", "C", "D"], "inversion": "any", "sequence": true, "bpm": 72, "key": "G" }
}
```

## The three-chord cousin: I – IV – V

Before the four chords there were three. **I – IV – V** is the backbone of blues, early rock'n'roll and folk. The Mexican folk song *La Bamba* just loops I – IV – V over and over. No minor chord at all: it feels bright and driving.

```example
{
  "title": "I – IV – V – IV loop in C, rock'n'roll style",
  "bpm": 130, "timeSig": "4/4", "key": "C", "loop": true,
  "tracks": [
    { "instrument": "piano", "seq": "[C4 E4 G4]:8 [C4 E4 G4]:8 r:q [C4 E4 G4]:8 [C4 E4 G4]:8 r:q | [C4 F4 A4]:8 [C4 F4 A4]:8 r:q [C4 F4 A4]:8 [C4 F4 A4]:8 r:q | [B3 D4 G4]:8 [B3 D4 G4]:8 r:q [B3 D4 G4]:8 [B3 D4 G4]:8 r:q | [C4 F4 A4]:8 [C4 F4 A4]:8 r:q [C4 F4 A4]:8 [C4 F4 A4]:8 r:q" },
    { "instrument": "bass", "seq": "C2:q E2:q G2:q E2:q | F2:q A2:q C3:q A2:q | G2:q B2:q D3:q B2:q | F2:q A2:q C3:q A2:q" }
  ],
  "show": ["pianoroll"]
}
```

## Adding ii

The favourite fifth chord is **ii** (Dm in C). It's minor like vi, but its job is different: it's an *away* chord, a predominant that leads naturally into V. Classic places: **I – vi – ii – V** (a doo-wop variant, where ii replaces IV) and ii – V – I. Clues: ii is minor, and its bass is degree 2, one step above home.

```example
{
  "title": "I – vi – IV – V, then I – vi – ii – V (IV swapped for ii)",
  "bpm": 84, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[E3 G3 C4]:w | [E3 A3 C4]:w | [F3 A3 C4]:w | [D3 G3 B3]:w | [E3 G3 C4]:w | [E3 A3 C4]:w | [F3 A3 D4]:w | [D3 G3 B3]:w" },
    { "instrument": "bass", "seq": "C2:w | A1:w | F1:w | G1:w | C2:w | A1:w | D2:w | G1:w" }
  ],
  "show": ["pianoroll"]
}
```

### Try it: ii or IV?

1. Play F (F A C) with F low, then Dm (F A D) with D low. The upper notes barely change; the bass drops from F to D and the colour turns minor.
2. Play C – Am – F – G, then C – Am – Dm – G. Same story, but the Dm version has a softer, darker step before the pull of G.
3. Play the roots only: C A F G, then C A D G. The bass note on degree 2 (D) is ii's fingerprint.

Check: two hidden loops. Answer, then read the explanation.

```exercise
{
  "id": "e4", "type": "listen", "title": "Check: rotation, and ii or IV",
  "instructions": "Loop each one. Use the bass of the first bar and of the third bar.",
  "spec": {
    "examples": [
      { "title": "Loop 1", "bpm": 84, "timeSig": "4/4", "key": "C", "hidden": true,
        "tracks": [ { "instrument": "piano", "seq": "[E3 A3 C4]:w | [F3 A3 C4]:w | [E3 G3 C4]:w | [D3 G3 B3]:w" }, { "instrument": "bass", "seq": "A1:w | F1:w | C2:w | G1:w" } ] },
      { "title": "Loop 2", "bpm": 84, "timeSig": "4/4", "key": "C", "hidden": true,
        "tracks": [ { "instrument": "piano", "seq": "[E3 G3 C4]:w | [E3 A3 C4]:w | [F3 A3 D4]:w | [D3 G3 B3]:w" }, { "instrument": "bass", "seq": "C2:w | A1:w | D2:w | G1:w" } ] }
    ],
    "questions": [
      { "q": "Loop 1 starts on…", "choices": ["a bright chord (I)", "a dark chord (vi)"], "answer": 1, "explain": "vi – IV – I – V: Am, F, C, G. The bass starts on A." },
      { "q": "Loop 2, bar 3 is…", "choices": ["IV (F)", "ii (Dm)"], "answer": 1, "explain": "I – vi – ii – V: the bass in bar 3 is D, one step above home, and the chord is minor." }
    ]
  }
}
```

**If you can't hear it yet:** find the bass note of the chord in question on your keyboard (search low keys, higher or lower, until it blends). F = IV, D = ii. Then play both chords yourself over that bass and compare the colour: F bright, Dm dark.

This lesson opens the progressions rung where ii joins the four chords, in any key.

**Before the drill, rehearse the method** (it's in the *How to do it* box above the drill, for the rung you're on): find home from the cadence; then for each chord ask its job — rest, lift, pull or sad — and if a minor chord feels like a gentle step *away* heading into the pull, suspect ii; check its bass is on degree 2. The drill runs at your current progressions rung, so you'll meet ii once the four chords in any key are solid.

```ladder
{ "skill": "progressions", "unlocks": 7, "intro": "Opens \"Adding ii\" (I, ii, IV, V, vi in any key); the drill runs at your current rung." }
```

## Ear corner: triad or dominant 7?

Songs mix triads and sevenths freely, V7 above all.

### Try it

1. Play G (G B D), then G7 (G B D F). The added F makes the chord lean forward, a little bluesy.
2. Play Gm (G B♭ D). Dark, but still at rest.
3. Play one of the three with eyes closed, then say: dark (minor), bright and resting (major), or bright and pulling (dom 7).

**If you can't hear it yet:** play the chord, then play C major right after it. If C sounds like a relief, the chord was pulling (dom 7). Or add the F on top yourself: if the sound doesn't change, the F was already there.

**Before the drill, rehearse the method** (in the *How to do it* box above the drill): dark = minor; bright and at rest = major; bright and pulling = dominant 7. This lesson opens the rung that mixes all three; the drill runs at your current chords rung, so you'll meet it once the three sevenths are solid.

```ladder
{ "skill": "chords", "unlocks": 7, "intro": "Opens \"Triads and dominant 7\" (major, minor or dominant 7); the drill runs at your current rung." }
```

```exercise
{
  "id": "e3", "type": "roman-analysis", "title": "Analyse in G major",
  "passScore": 0.7,
  "spec": { "key": "G", "chords": ["G", "D", "Em", "C", "Em", "C", "G", "D"], "prompt": "symbols" }
}
```

## Between lessons

- **3 minutes:** C – G – Am – F and Am – F – C – G with roots in the left hand; listen for where the loop restarts.
- **2 minutes:** C – Am – F – G, then C – Am – Dm – G; play only the roots after each.
- **2 minutes:** G, Gm, G7 in random order, eyes closed, naming each before you look.
- One progressions or chords session on the Practice page.
