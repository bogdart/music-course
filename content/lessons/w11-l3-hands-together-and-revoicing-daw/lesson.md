---
id: w11-l3-hands-together-and-revoicing-daw
title: Smooth Voice Leading and Hands Together
week: 11
order: 3
phase: p2
duration_min: 50
goals:
  - Voice I – V – vi – IV smoothly using common tones and small steps
  - Play left-hand chords under a right-hand melody
  - Name I, IV, V and vi by ear in C
  - Re-voice a jumpy chord part in the DAW and add a root bass line
prerequisites: [w11-l2-hearing-the-root]
tags: [voice-leading, inversions, keyboard, daw, ear]
songs:
  - { title: "Someone Like You", composer: "Adele (2011)", public_domain: false }
---

# Smooth Voice Leading and Hands Together

Today you put inversions to work on the most famous four chords in pop, **I – V – vi – IV** (in C: C, G, Am, F), and play them under a melody.

## Re-voicing I – V – vi – IV

Same two rules as in lesson 1: keep common tones, move the other notes by step. C major (C E G) and G major (G B D) share G. Keep G, move C down to B and E down to D: that gives G/B. From G/B to Am (A C E): B→C, D→E, G→A, all small steps. From Am to F: keep A and C, move E up to F. Your hand barely moves:

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

## Ear: the four chords by name

This lesson opens the progression rung with all four: **I, IV, V and vi** in C (you'll meet it once I, IV and V are solid). You know I (home), IV (lifting away) and V (tension, leaning home) from week 8. The newcomer is **vi**, Am. Clues:

- It's the only **minor** chord of the four, so it sounds darker.
- It shares two notes (C and E) with I, so it can feel like a sad or soft version of home.
- Its bass is **A**, not C: if the chord sounds "like home but darker", check the bass.

```example
{
  "title": "I then vi (C, Am), twice; then V then vi (G, Am)",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[E3 G3 C4]:h [E3 A3 C4]:h | [E3 G3 C4]:h [E3 A3 C4]:h | [D3 G3 B3]:h [E3 A3 C4]:h" },
    { "instrument": "bass", "seq": "C2:h A1:h | C2:h A1:h | G1:h A1:h" }
  ],
  "show": ["keyboard"]
}
```

### Try it: tell I from vi with your hands

1. Right hand: play C as E G C, then Am as E A C. Two notes stay; only G moves up to A. Say "home", then "darker home".
2. Add the left hand: C2 under C, then A1 under Am. Now play Am's chord again with **C2** under it: it sounds almost like home. With A1 under it, it turns sad. The bass decides.
3. Play the four chords slowly in any order, naming each by its role: C "rest", F "lift", G "pull", Am "sad".

Check: two chords, the first is always I (C).

```exercise
{
  "id": "e6", "type": "listen", "title": "Check: which chord follows home?",
  "instructions": "Each clip plays I, then one other chord. Find its bass on your keyboard, then answer.",
  "spec": {
    "examples": [
      { "title": "Clip 1", "bpm": 72, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [
        { "instrument": "piano", "seq": "[E3 G3 C4]:h [E3 A3 C4]:h" }, { "instrument": "bass", "seq": "C2:h A1:h" } ] },
      { "title": "Clip 2", "bpm": 72, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [
        { "instrument": "piano", "seq": "[E3 G3 C4]:h [F3 A3 C4]:h" }, { "instrument": "bass", "seq": "C2:h F1:h" } ] }
    ],
    "questions": [
      { "q": "Clip 1: the second chord is…", "choices": ["IV (F)", "vi (Am)"], "answer": 1, "explain": "vi: darker, and the bass drops to A. It kept C and E from the home chord, which is why it felt like 'home, but sad'." },
      { "q": "Clip 2: the second chord is…", "choices": ["IV (F)", "vi (Am)"], "answer": 0, "explain": "IV: brighter, lifting away; the bass drops to F. Both chords keep C, so colour and bass are the clues, not the top." }
    ]
  }
}
```

**If you can't hear it yet:** go to the bass. Replay, search low keys with "higher or lower?" until you match the bass note: C = I, F = IV, G = V, A = vi. Then, as a colour check, play that chord yourself right after the replay and ask whether it matches. The bass answers the question even while the colours still sound alike.

**Before the drill, rehearse the method** (it's in the *How to do it* box above the drill, for the rung you're on): sort each chord by role, rest (I), lift (IV), pull (V), sad (vi), and use the bass to check: C, F, G, A. The drill runs at your current progressions rung.

```ladder
{ "skill": "progressions", "unlocks": 3, "intro": "Opens \"I, IV, V, vi\" in C; the drill runs at your current progressions rung." }
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
- **2 minutes:** play two chords from C, F, G, Am in random order, eyes closed, and name the second one by its role before you look.
- One progressions session on the Practice page.
