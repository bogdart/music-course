---
id: w29-l1-aaba-and-rhythm-changes
title: AABA and Rhythm Changes
week: 29
order: 1
phase: p4
duration_min: 45
goals:
  - Map the 32-bar AABA form and find the bridge by ear
  - Explain the ii–V into IV (Fm7–Bb7 → Eb in Bb major)
  - Play the A section of rhythm changes in Bb with shells
prerequisites: [w28-l3-ii-v-i-around-the-cycle, w17-l1-sections-and-forms]
tags: [jazz, form, standards, rhythm-changes]
songs:
  - { title: "I Got Rhythm", composer: "George Gershwin", public_domain: false }
  - { title: "Oleo", composer: "Sonny Rollins", public_domain: false }
  - { title: "Blue Moon", composer: "Richard Rodgers", public_domain: false }
---

# AABA and Rhythm Changes

Most jazz standards come from 1920s–50s songwriting, and the favourite form was the [[32-bar AABA]]: an 8-bar **A** idea, the same A again, a contrasting 8-bar **B** (the *bridge*), then **A** once more. You met AABA in Phase 3; in jazz it is the default map, and soloists play over the whole 32 bars again and again.

## Listening by reference

- **"Blue Moon"** (Rodgers, 1934): AABA, and the A section is almost nothing but I–vi–ii–V. Listen for the moment the bridge moves somewhere new.
- **"I Got Rhythm"** (Gershwin, 1930): AABA in B♭. Its chords became so popular that jazz players wrote hundreds of new melodies over them, such as "Oleo" (Rollins). Those chords are called [[rhythm changes]].

## Find the bridge

Below is a whole 32-bar chorus of rhythm-changes chords, with no melody. Don't count bars; listen for the moment the chords stop repeating their pattern and do something new, and for when the old pattern comes back.

### Try it

1. Press play and listen only to the **bass** (the lowest sound). Tap your foot on each bass note.
2. In the A section the bass moves every two beats and keeps circling back to the same starting note — a busy little loop.
3. Keep tapping. Note the moment your foot is suddenly tapping *less often* or the loop no longer comes back. That's the change of section. Then wait for the busy loop to return.

**Check:** you can say "busy loop… busy loop… something different… busy loop again" out loud as it plays.

**If you can't hear it yet:** play B♭1 G1 C2 F1 (the A-section bass, two beats each) along with the recording, over and over. While your loop fits, you're in an A; when it clashes, you're in the bridge.

```exercise
{
  "id": "e1-find-bridge",
  "type": "listen",
  "title": "Where is the bridge?",
  "spec": {
    "example": { "bpm": 150, "timeSig": "4/4", "key": "Bb", "hidden": true, "tracks": [
      { "instrument": "piano", "seq": "[Bb2 D3 G3]:h [G2 F3 Bb3]:h | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [Bb2 D3 G3]:h [G2 F3 Bb3]:h | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [F2 Eb3 Ab3]:h [Bb2 D3 Ab3]:h | [Eb2 C3 G3]:h [E2 Db3 G3]:h | [F2 D3 G3]:h [G2 F3 Bb3]:h | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [Bb2 D3 G3]:h [G2 F3 Bb3]:h | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [Bb2 D3 G3]:h [G2 F3 Bb3]:h | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [F2 Eb3 Ab3]:h [Bb2 D3 Ab3]:h | [Eb2 C3 G3]:h [E2 Db3 G3]:h | [F2 D3 G3]:h [G2 F3 Bb3]:h | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [D3 F#3 C4]:w | [D3 F#3 C4]:w | [G2 F3 B3]:w | [G2 F3 B3]:w | [C3 E3 Bb3]:w | [C3 E3 Bb3]:w | [F2 Eb3 A3]:w | [F2 Eb3 A3]:w | [Bb2 D3 G3]:h [G2 F3 Bb3]:h | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [Bb2 D3 G3]:h [G2 F3 Bb3]:h | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [F2 Eb3 Ab3]:h [Bb2 D3 Ab3]:h | [Eb2 C3 G3]:h [E2 Db3 G3]:h | [F2 D3 G3]:h [G2 F3 Bb3]:h | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h |" },
      { "instrument": "bass", "seq": "Bb1:h G1:h | C2:h F1:h | Bb1:h G1:h | C2:h F1:h | F1:h Bb1:h | Eb2:h E2:h | F1:h G1:h | C2:h F1:h | Bb1:h G1:h | C2:h F1:h | Bb1:h G1:h | C2:h F1:h | F1:h Bb1:h | Eb2:h E2:h | F1:h G1:h | C2:h F1:h | D2:h A1:h | D2:h F#1:h | G1:h D2:h | G1:h B1:h | C2:h G1:h | C2:h E2:h | F1:h C2:h | F1:h A1:h | Bb1:h G1:h | C2:h F1:h | Bb1:h G1:h | C2:h F1:h | F1:h Bb1:h | Eb2:h E2:h | F1:h G1:h | C2:h F1:h |" },
      { "instrument": "drums", "seq": "ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q | ride:q [ride hh]:q ride:q [ride hh]:q |" } ] },
    "questions": [
      { "q": "The chords change character once and later return. Roughly where does the new part start?", "choices": ["about a quarter of the way in", "about halfway", "about three quarters of the way in"], "answer": 1, "explain": "The bridge starts at bar 17 of 32: exactly halfway." },
      { "q": "How many times do you hear the opening pattern (the A section)?", "choices": ["1", "2", "3", "4"], "answer": 2, "explain": "A A B A: three times." }
    ]
  }
}
```

## Rhythm changes, A section

The A section has two chords per bar, mostly **I–vi–ii–V** over and over: B♭6 Gm7 | Cm7 F7. That little loop is a *turnaround*; it keeps pointing back to the tonic. (B♭6 is the calm tonic from week 27.)

Bars 5–6 do something new: they visit **IV** (E♭). And they don't simply jump there. They put **E♭'s own ii–V in front of it**: Fm7–B♭7 → E♭. Here is why that works:

- In E♭ major, ii is Fm7 and V is B♭7. So Fm7–B♭7–E♭ is a ii–V–I in E♭, the shape you played around the cycle last week.
- Seen from B♭: B♭7 is the tonic chord with a ♭7 added. That ♭7 (A♭) turns the home chord into the V7 of E♭: a secondary dominant, **V7/IV** (week 24).
- Fm7 is written **v7** in B♭ (a minor v, because of that A♭). Its job is simply "the ii of the chord we are heading to".

So for two bars the music borrows E♭ as a short-lived home, then slides back through E dim7 (the passing diminished from week 24) to B♭.

```example
{
  "title": "Rhythm changes A section in Bb (shells + bass)",
  "bpm": 110, "timeSig": "4/4", "key": "Bb",
  "tracks": [
    { "instrument": "piano", "seq": "[Bb2 D3 G3]:h [G2 F3 Bb3]:h | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [Bb2 D3 G3]:h [G2 F3 Bb3]:h | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [F2 Eb3 Ab3]:h [Bb2 D3 Ab3]:h | [Eb2 C3 G3]:h [E2 Db3 G3]:h | [F2 D3 G3]:h [G2 F3 Bb3]:h | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h |" },
    { "instrument": "bass", "seq": "Bb1:h G1:h | C2:h F1:h | Bb1:h G1:h | C2:h F1:h | F1:h Bb1:h | Eb2:h E2:h | F1:h G1:h | C2:h F1:h |" }
  ],
  "show": ["keyboard"]
}
```

```chords
{ "key": "Bb", "bars": ["Bb6 Gm7", "Cm7 F7", "Bb6 Gm7", "Cm7 F7", "Fm7 Bb7", "Eb6 Edim7", "Bb6/F Gm7", "Cm7 F7"], "roman": true, "play": true, "bpm": 110 }
```

## Any chord can have its own V

V7/IV is not a special trick. You met V/V and V/vi in week 24; the same move works on **every major or minor chord of the key**. To make the V7 of a target chord, take the note a fifth above the target's root and build a **dominant 7th** on it (major triad + ♭7), even if the key would normally make that chord minor. It pulls to its target the way G7 pulls to C. The diminished vii° is the one exception, because a tense diminished chord can't act as a temporary home.

In C major: V7/ii = A7 → Dm, V7/iii = B7 → Em, V7/IV = C7 → F, V7/V = D7 → G, V7/vi = E7 → Am. Listen to three of them in turn: each dominant, then the chord it points at.

```chords
{ "key": "C", "bars": ["A7", "Dm", "C7", "F", "B7", "Em", "G7", "C"], "roman": true, "play": true, "bpm": 80 }
```

**What you will actually hear:** each dominant sounds like "a major chord that wants to move", and the arrival sounds like a short stop. At first you will not hear *which* chord it points at; the numerals tell you on paper. Later lessons use the others (A7, the V7/ii, is common in lo-fi and jazz).

## Drills

```exercise
{
  "id": "e2-form-quiz",
  "type": "quiz",
  "title": "Form and the ii–V into IV",
  "passScore": 0.7,
  "spec": { "questions": [
    { "q": "In a 32-bar AABA tune, the bridge begins at bar…", "choices": ["9", "17", "25", "13"], "answer": 1 },
    { "q": "In Bb major, Fm7–Bb7 is the ii–V of which chord?", "choices": ["F", "Eb", "Cm", "Bb"], "answer": 1, "explain": "Fm7 and Bb7 are ii and V in Eb major, so they lead to Eb, the IV of Bb." },
    { "q": "What turns Bb into Bb7, the V7 of Eb?", "choices": ["adding Ab, the b7", "adding A, the major 7th", "raising the 5th", "removing the 3rd"], "answer": 0 },
    { "q": "Why could jazz players write new melodies over the 'I Got Rhythm' chords?", "choices": ["Chord progressions are not protected like melodies, and these changes are fun to play on", "The melody was lost", "It is a blues", "They were required to"], "answer": 0 }
  ] }
}
```

```exercise
{
  "id": "e3-roman-a",
  "type": "roman-analysis",
  "title": "Name the A-section chords",
  "instructions": "Key Bb. Name each chord with its roman numeral in Bb (sevenths included, secondary dominants written as V7/x).",
  "passScore": 0.7,
  "spec": { "key": "Bb", "chords": ["Bb", "Gm7", "Cm7", "F7", "Fm7", "Bb7", "Eb"], "prompt": "symbols", "palette": "chromatic" }
}
```

```exercise
{
  "id": "e4-play-a",
  "type": "play-melody",
  "title": "A section shells over the bass",
  "instructions": "Two chords per bar. Start at 70 bpm and push it up over the week.",
  "passScore": 0.7,
  "spec": { "bpm": 70, "timeSig": "4/4", "key": "Bb", "seq": "[Bb2 D3 G3]:h [G2 F3 Bb3]:h | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [Bb2 D3 G3]:h [G2 F3 Bb3]:h | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [F2 Eb3 Ab3]:h [Bb2 D3 Ab3]:h | [Eb2 C3 G3]:h [E2 Db3 G3]:h | [F2 D3 G3]:h [G2 F3 Bb3]:h | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h |", "showStaff": false, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "bass", "seq": "Bb1:h G1:h | C2:h F1:h | Bb1:h G1:h | C2:h F1:h | F1:h Bb1:h | Eb2:h E2:h | F1:h G1:h | C2:h F1:h |" } }
}
```

## Ear review

**Before the drills** — the method (also in the *How to do it* box beside each drill): for progressions, **bass first**. Follow the lowest note and ask where it is from home — 2 → 5 → 1 is the ii–V–I path — then use colour to confirm (ii7 mellow, V7 bluesy and pulling, Imaj7 dreamy). For the bass drill, ignore drums and top notes, tap along with the thump, then find its notes one by one. If a drill shows an earlier rung, its own box has the method for that rung.

```ladder
{ "skill": "progressions", "unlocks": 18, "intro": "Progressions at your level; ii–V–I in sevenths is the top rung for now." }
```

```ladder
{ "skill": "roots", "unlocks": 14, "intro": "Bass lines inside a band: in jazz the bass carries the changes; the drill runs at your current roots rung." }
```

## Between lessons

Play the A-section shells with the bass backing once a day, a few bpm faster each time. Put on any AABA standard you like and raise a hand when the bridge starts.
