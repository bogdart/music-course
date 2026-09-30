---
id: w11-l4-hands-together-and-revoicing-daw
title: Smooth Voice Leading and Hands Together
week: 11
order: 4
phase: p2
duration_min: 50
goals:
  - Voice I – V – vi – IV smoothly using common tones and small steps
  - Play left-hand chords under a right-hand melody
  - Tell ii from IV by ear (colour and bass), and follow bass lines in G and the near keys
  - Re-voice a jumpy chord part in the DAW and add a root bass line
prerequisites: [w11-l3-hearing-the-root]
tags: [voice-leading, inversions, keyboard, daw, ear]
songs:
  - { title: "Someone Like You", composer: "Adele (2011)", public_domain: false }
---

# Smooth Voice Leading and Hands Together

Today you put inversions to work on the most famous four chords in pop, **I – V – vi – IV** (in C: C, G, Am, F), and play them under a melody.

## Re-voicing I – V – vi – IV

Same two rules as in the inversions lesson this week: keep common tones, move the other notes by step. C major (C E G) and G major (G B D) share G. Keep G, move C down to B and E down to D: that gives G/B. From G/B to Am (A C E): B→C, D→E, G→A, all small steps. From Am to F: keep A and C, move E up to F. Your hand barely moves:

```example
{
  "title": "Blocky (root position), then smooth (C, G/B, Am, F/C)",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C3 E3 G3]:w | [G3 B3 D4]:w | [A3 C4 E4]:w | [F3 A3 C4]:w | r:w | [C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 A3]:w | [C3 F3 A3]:w" } ],
  "show": ["keyboard", "pianoroll"]
}
```

The smooth version puts some chords in inversion, and yet the chords are still C, G, Am and F. Last lesson's idea in action: the root isn't always at the bottom.

```exercise
{
  "id": "e1", "type": "play-melody", "title": "Smooth I – V – vi – IV, left hand",
  "instructions": "Left hand, around C3. Thumb and pinky barely move. Say the chord names aloud.",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 66, "timeSig": "4/4", "key": "C", "seq": "[C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 A3]:w | [C3 F3 A3]:w", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e2", "type": "play-chord", "title": "Find your own smooth path",
  "instructions": "Same four chords, any inversions, but move each finger as little as possible.",
  "count": 4, "passScore": 0.7,
  "spec": { "chords": ["C", "G", "Am", "F"], "inversion": "any", "sequence": true, "bpm": 66, "key": "C" }
}
```

## Inversions make bass lines

Inversions also let the *bass* move smoothly. Play C – G/B – Am – F with the lowest notes as your bass: C, B, A, then F. Instead of jumping C → G, the bass steps down. Adele's *Someone Like You* (2011) uses exactly this trick in its piano part (in A major), which is a big part of why the song feels like one long falling line.

```example
{
  "title": "C – G/B – Am – F: the bass steps down C, B, A, then F",
  "bpm": 66, "timeSig": "4/4", "key": "C", "loop": true,
  "tracks": [
    { "instrument": "piano", "seq": "[E4 G4 C5]:w | [D4 G4 B4]:w | [C4 E4 A4]:w | [C4 F4 A4]:w" },
    { "instrument": "bass", "seq": "C2:w | B1:w | A1:w | F1:w" }
  ],
  "show": ["pianoroll"]
}
```

## Ear: ii joins the chords

You've named **I, IV, V and vi** by ear since week 9, and in any key since week 10. This lesson opens the next chord: **ii**, the chord on degree 2 (Dm in C). Clues:

- It's **minor**, like vi, so it sounds softer and darker than IV and V.
- It shares two notes (F and A) with **IV**, so it can sound like a darker IV. The bass tells them apart: **D** for ii, **F** for IV.
- It likes to go to **V**: ii – V – I is one of the most common endings in all music, a gentle step away before the pull home.

```example
{
  "title": "In C: I – IV – V – I, then I – ii – V – I (the only change: F becomes Dm)",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[E3 G3 C4]:h [F3 A3 C4]:h | [D3 G3 B3]:h [E3 G3 C4]:h | r:w | [E3 G3 C4]:h [F3 A3 D4]:h | [D3 G3 B3]:h [E3 G3 C4]:h" },
    { "instrument": "bass", "seq": "C2:h F1:h | G1:h C2:h | r:w | C2:h D2:h | G1:h C2:h" }
  ],
  "show": ["keyboard"]
}
```

### Try it: IV or ii with your hands

1. Right hand: F A C (IV), then F A D (ii). Two notes stay; only C moves up to D. Say "lift", then "softer lift".
2. Add the left hand: F2 under the first, D2 under the second. Then play F A D with **F2** under it: it sounds almost like IV again. The bass decides.
3. Play I – ii – V – I slowly, left hand C, D, G, C. Then the same in G: G – Am – D – G (bass G, A, D, G). ii is always the minor chord on the step above home.

Check: each clip plays I, then one other chord, in C.

```exercise
{
  "id": "e6", "type": "listen", "title": "Check: IV or ii after home?",
  "instructions": "Each clip plays I, then one other chord. Find its bass on your keyboard, then answer.",
  "spec": {
    "examples": [
      { "title": "Clip 1", "bpm": 72, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [
        { "instrument": "piano", "seq": "[E3 G3 C4]:h [F3 A3 D4]:h" }, { "instrument": "bass", "seq": "C2:h D2:h" } ] },
      { "title": "Clip 2", "bpm": 72, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [
        { "instrument": "piano", "seq": "[E3 G3 C4]:h [F3 A3 C4]:h" }, { "instrument": "bass", "seq": "C2:h F1:h" } ] }
    ],
    "questions": [
      { "q": "Clip 1: the second chord is…", "choices": ["IV (F)", "ii (Dm)"], "answer": 1, "explain": "ii: softer, minor, and the bass steps up one to D. It kept F and A from IV, which is why it sounded like a darker IV." },
      { "q": "Clip 2: the second chord is…", "choices": ["IV (F)", "ii (Dm)"], "answer": 0, "explain": "IV: brighter, and the bass drops to F. Colour and bass are the clues; the top notes are almost the same." }
    ]
  }
}
```

**If you can't hear it yet:** go to the bass. Replay, search low keys with "higher or lower?" until you match it: C = I, D = ii, F = IV, G = V, A = vi. In another key, count from home: the bass on the step above home is ii. Then, as a colour check, play that chord yourself after the replay.

**Before the drill, rehearse the method** (it's in the *How to do it* box above the drill, for the rung you're on): find home from the cadence; name each chord by role, rest (I), soft step away (ii), lift (IV), pull (V), sad (vi), and check with the bass. The drill runs at your current progressions rung.

```ladder
{ "skill": "progressions", "unlocks": 7, "intro": "Opens \"Adding ii\": I, ii, IV, V or vi, in any key; the drill runs at your current progressions rung." }
```

## Ear: bass lines in other keys

Your bass-line drill has stayed in C since week 8. Now it follows the keys you already hear degrees in: first **G**, then the **near keys** C, G, F, D and B♭. The chords are the same four (I, IV, V, vi), so the bass notes are degrees 1, 4, 5 and 6 of the new key: in G that's **G, C, D, E**; in F, **F, B♭, C, D**.

### Try it: one bass line, three keys

1. Left hand, in C: **C3 – A2 – F2 – G2** (I – vi – IV – V). Say the degrees: 1, 6, 4, 5.
2. The same degrees in G: **G2 – E2 – C2 – D2**. Then in F: **F2 – D2 – B♭1 – C2**. Same shape, new home.
3. Now play the G cadence (G, C, D, G), stop on the low G, and play the G bass line from there. Home first, then the path.

**If you can't hear it yet:** home first: find the cadence's lowest note on your keyboard. Then, for each chord, "higher or lower than my key?" and search, as in C. A wrong key is information. Count its degree from home at the end.

**Before the drill, rehearse the method** (in the *How to do it* box): find home from the cadence's lowest note, play the first bass note, then follow the bass up or down and search. The drill runs at your current roots rung, so if inverted chords aren't solid yet, you'll practise those first.

```ladder
{ "skill": "roots", "unlocks": 9, "intro": "Opens \"Bass line in G\", then \"Bass line, near keys\" (C, G, F, D or B♭); the drill runs at your current roots rung." }
```

## Hands together

Start with the simplest version: the left hand plays only the chord root on beat 1 while the right hand plays a melody you know. The hands only have to meet on beat 1.

```exercise
{
  "id": "e5", "type": "play-melody", "title": "Ode to Joy with left-hand roots",
  "instructions": "Left hand: C3 or G2 on the first beat of each bar. Right hand: the melody you know from Phase 1. Practise each hand alone first.",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 66, "timeSig": "4/4", "key": "C", "seq": "[C3 E4]:q E4:q F4:q G4:q | [G2 G4]:q F4:q E4:q D4:q | [C3 C4]:q C4:q D4:q E4:q | [C3 E4]:q. D4:8 [G2 D4]:h |", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

Then the left hand plays smooth chords, right hand a simple melody. Both hands strike together on every half note, which keeps coordination simple.

```exercise
{
  "id": "e3", "type": "play-melody", "title": "Chords + melody",
  "instructions": "Practise each hand alone first, then together at a slow tempo.",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "[C3 E3 G3 G4]:h [C3 E3 G3 E4]:h | [B2 D3 G3 D4]:h [B2 D3 G3 G4]:h | [C3 E3 A3 E4]:h [C3 E3 A3 A4]:h | [C3 F3 A3 A4]:h [C3 F3 A3 F4]:h | [C3 E3 G3 E4]:w", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

## Make it: re-voice the four chords

```exercise
{
  "id": "e4", "type": "daw-task", "title": "Re-voice I – V – vi – IV smoothly",
  "spec": {
    "template": { "bpm": 72, "key": "C", "timeSig": "4/4", "tracks": [
      { "instrument": "epiano", "seq": "[C3 E3 G3]:w | [G3 B3 D4]:w | [A3 C4 E4]:w | [F3 A3 C4]:w | [C3 E3 G3]:w | [G3 B3 D4]:w | [A3 C4 E4]:w | [F3 A3 C4]:w" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "lead", "seq": "" } ] },
    "task": "The e-piano plays the progression the blocky way. 1) Rewrite it with smooth voicings: keep common tones, move other notes by step, stay between G2 and E4. 2) Record roots on the bass track (C, G, A, F) between C2 and C3. Even when your piano chord is inverted, the bass plays the root. 3) Optional: a simple melody on the lead track.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["epiano", "bass"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "range", "low": "G2", "high": "E4", "track": 0 },
      { "kind": "plays-progression", "progression": ["I", "V", "vi", "IV"], "barsPerChord": 1, "mode": "chords", "minRatio": 0.9, "track": 0 },
      { "kind": "voice-leading", "maxMove": 2, "minRatio": 0.8, "track": 0 },
      { "kind": "plays-progression", "progression": ["I", "V", "vi", "IV"], "barsPerChord": 1, "mode": "roots", "minRatio": 0.9, "track": 1 },
      { "kind": "range", "low": "C2", "high": "C3", "track": 1 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

## Between lessons

- **3 minutes:** C – G/B – Am – F/C with the left hand, eyes closed, until the fingers find it without looking.
- **3 minutes:** Ode to Joy with left-hand roots, hands separately first, then together slowly.
- **2 minutes:** play I, then one of ii, IV, V, vi in C or G, eyes closed, and name the second chord by its role before you look.
- One progressions session and one roots session on the Practice page.
