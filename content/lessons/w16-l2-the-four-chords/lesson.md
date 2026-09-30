---
id: w16-l2-the-four-chords
title: The Four Chords and Their Cousins
week: 16
order: 2
phase: p2
duration_min: 45
goals:
  - Play I–V–vi–IV, vi–IV–I–V, I–vi–IV–V and I–IV–V in C and G
  - Explain why rotating the same four chords changes the mood
  - Hear ii among the four chords, and tell a minor 6th from a major 6th
prerequisites: [w16-l1-functions-and-cadences]
tags: [harmony, progressions, pop, ear]
songs:
  - { title: "Canon in D", composer: "Johann Pachelbel", public_domain: true }
  - { title: "La Bamba", composer: "Traditional (Mexican son jarocho)", public_domain: true }
  - { title: "Don't Stop Believin'", composer: "Journey (1981)", public_domain: false }
---

# The Four Chords and Their Cousins

A huge number of pop songs use just four chords: **I, V, vi and IV**. That isn't laziness. Between them they cover all three jobs: home (I, vi), away (IV) and tension (V). They also share notes with each other, so they connect smoothly. The trick is **which one you start on**: the same loop feels different depending on where it begins.

## One loop, its rotations, and a cousin

| name | in C | how it's often described |
|---|---|---|
| **I – V – vi – IV** | C G Am F | bright, anthemic |
| **vi – IV – I – V** | Am F C G | wistful, almost minor |
| **I – vi – IV – V** *(cousin)* | C Am F G | '50s doo-wop, sweet |
| **IV – I – V – vi** | F C G Am | yearning, never quite home |

Three of them are rotations: I – V – vi – IV, vi – IV – I – V and IV – I – V – vi are the same cycle, just started at a different point. I – vi – IV – V is a cousin: the same four chords in a different order (vi comes straight after I, V moves to the end). Starting on vi puts a minor chord on the strongest bar, so the whole loop leans sad. (In week 13 you met A minor as C major's relative: vi – IV – I – V in C is i – VI – III – VII in A minor.) Listen and judge the moods for yourself:

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

These chords have a long history. Pachelbel's *Canon*, whose bass you played in C in week 11, runs **I – V – vi – iii – IV – I – IV – V**: its first half is an ancestor of today's loop. Many songs, Journey's *Don't Stop Believin'* (1981) among them, are built on I – V – vi – IV.

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

ii has been in the chord drill since week 11; today's drill is a review at your current rung.

**Before the drill, rehearse the method** (it's in the *How to do it* box above the drill, for the rung you're on): find home from the cadence; then for each chord ask its job — rest, lift, pull or sad — and if a minor chord feels like a gentle step *away* heading into the pull, suspect ii; check its bass is on degree 2.

```ladder
{ "skill": "progressions", "unlocks": 9, "intro": "Review: name the chords at your current rung." }
```

## Ear corner: minor or major 6th

In week 12 you named the two sixths: the major 6th is the "My Bon-" leap (bright, open), the minor 6th a half step narrower (darker, bittersweet). Today they get their own interval rung. They live in these loops too: the melody note E over the bass G, or C over the bass E.

### Try it

1. Play G4 → E5 ("My Bon-"), then G4 → E♭5. Swap several times.
2. From C4: up to A4 (major 6th), up to A♭4 (minor 6th). The minor 6th is the note just past the fifth.
3. Eyes closed: play one from a random note, name it, then check.

**If you can't hear it yet:** play the first note, then its fifth, then both candidates. The minor 6th sounds like "the fifth, nudged up"; the major 6th is a clear step further and brighter. Or hum "My Bonnie" from the first note: if it fits, major.

**Before the drill, rehearse the method** (in the *How to do it* box above the drill): anchor song first, then compare against the fifth. The drill runs at your current interval rung.

```ladder
{ "skill": "intervals", "unlocks": 10, "intro": "Opens \"Minor or major 6th\"; the drill runs at your current rung." }
```

## Ear corner: find it, black keys too

Other keys and minor keys brought black keys into your loops and melodies: the F♯ of G major, the G♯ of A minor, the B♭ of D minor. The octave rung you've had since week 10 asks you to find a note in any octave, white keys only. This lesson opens the next one: **all twelve notes**, from octave 2 up to 5.

**Try it:**

1. Play **G♯2**, low, then search for it around octave 4: try G4, then A4. One is too low, one too high: the answer is the black key between them, G♯4.
2. Do the same with **E♭2** (between D and E) and **F♯5** (between F and G), moving it into your comfortable octave.

**If you can't hear it yet:** search the white keys first. If the note sits between two white keys you've tried (one too low, one too high), it's the black key between them. Check any guess by jumping 12 keys toward the question's height.

**Before the drill, rehearse the method** (in the *How to do it* box): find the rough region by height, search white keys, then the black key in between; check any octave by jumping 12 keys. The drill runs at your current octave rung.

```ladder
{ "skill": "octave", "unlocks": 8, "intro": "Opens \"Find it: black keys too\": all twelve notes, octave 2 to 5; the drill runs at your current octave rung." }
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
- **2 minutes:** major and minor 6ths from random notes, eyes closed, naming each before you look.
- **2 minutes:** play a random black key low with the left hand, then find it around middle C with the right.
- One progressions, one intervals and one octave session on the Practice page.
