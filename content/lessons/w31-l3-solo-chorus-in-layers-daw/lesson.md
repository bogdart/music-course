---
id: w31-l3-solo-chorus-in-layers-daw
title: A Solo Chorus in Layers
week: 31
order: 3
phase: p4
duration_min: 50
goals:
  - Build a 12-bar solo over the F jazz blues in three layers - guide tones, approaches, a motif
  - Leave deliberate space, in call-and-response phrases
  - Step-enter the chorus in the DAW (recording it live is optional)
prerequisites: [w31-l2-approach-notes-and-enclosures, w29-l2-jazz-blues]
tags: [improvisation, jazz-blues, daw, composition]
songs:
  - { title: "Now's the Time", composer: "Charlie Parker", public_domain: false }
---

# A Solo Chorus in Layers

Improvising is composing in real time. Before it can happen in real time, it has to happen slowly. Today you *compose* a solo over the F jazz blues from week 29, one pass through the 12 bars. In jazz, one pass through the whole form is called a chorus (see [[jazz chorus]]), not the pop chorus section.

You will step-enter it in the DAW, layer by layer. Nobody is expected to improvise this fluently two lessons after meeting approach notes. If you feel like it at the end, try playing along live over your finished version: that is how improvising starts.

**This lesson spans two sessions.** Session 1: read through, play the three drills, and do steps 1–2 of the DAW task (guide tones, then approaches). Session 2: steps 3–4 (motif and space), the review and the ear drill. The project saves between sessions.

## Three layers

1. **Guide tones.** One long note per chord: A (3rd of F7), A♭ (7th of B♭7), and so on through the form. It sounds plain. Good: this is the skeleton, and it already outlines every chord change.
2. **Approaches.** Keep the same targets, but shorten the note before some of them and put an approach from a half step below, or an enclosure, in the gap.
3. **A motif.** Pick a short rhythmic idea, 1–2 bars, and use it at least three times, adjusting its notes to fit each chord. Repetition makes a solo sound composed.

Here is layer 1. Play it first (drill 1 below): you are hearing the harmony as a single line.

```staff
{ "clef": "treble", "key": "F", "timeSig": "4/4", "seq": "A4:w | Ab4:w | A4:w | Bb4:h A4:h | Ab4:w | Ab4:w | A4:w | F#4:w | F4:w | E4:w | A4:h F#4:h | F4:h E4:h |" }
```

## Call and response

Blues is a conversation. Play a short phrase (1–2 bars), then **rest** for about as long. Space is not a mistake; it is the other half of the phrase. By reference: in Charlie Parker's "Now's the Time" the phrases breathe even at bebop speed.

Here is a sample chorus built with all three layers. The motif (an 8th rest, an approach note, the target, a leap, a fall back) appears in bars 1, 3, 5 and 6. Bar 3 is F7 again, but this time the motif lands on A♭: not a chord tone of F7 but the blue ♭3 (week 23), a deliberate bluesy rub against the A in the piano. In bars 5 and 6 it is bent to fit B♭7 and Bdim7, landing on their chord tones. Bars 9–10 run down G Dorian and enclose the E of C7.

```example
{
  "title": "A sample chorus: motif, space and approach notes (original)",
  "bpm": 110, "timeSig": "4/4", "key": "F",
  "tracks": [
    { "instrument": "lead", "seq": "r:8 G#4:8 A4:8 C5:8 A4:q r:q | r:w | r:8 G4:8 Ab4:8 C5:8 Ab4:q r:q | r:w | r:8 C#5:8 D5:8 F5:8 D5:q r:q | r:8 D5:8 F5:8 Ab5:8 F5:q r:q | C5:8 A4:8 F4:8 A4:8 C5:q r:q | C5:8 A4:8 F#4:8 A4:8 C5:q r:q | Bb4:8 A4:8 G4:8 F4:8 E4:8 D4:8 F4:8 D#4:8 | E4:h r:h | A4:8 C5:8 Eb5:8 C5:8 A4:q F#4:q | G4:q Bb4:q E4:h |" },
    { "instrument": "piano", "seq": "[F2 Eb3 A3]:w | [Bb2 D3 Ab3]:w | [F2 Eb3 A3]:w | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [Bb2 D3 Ab3]:w | [B2 D3 Ab3]:w | [F2 Eb3 A3]:w | [D3 F#3 C4]:w | [G2 F3 Bb3]:w | [C3 E3 Bb3]:w | [F2 Eb3 A3]:h [D3 F#3 C4]:h | [G2 F3 Bb3]:h [C3 E3 Bb3]:h |" },
    { "instrument": "bass", "seq": "F2:w | Bb1:w | F2:w | C2:h F2:h | Bb1:w | B1:w | F2:w | D2:w | G1:w | C2:w | F2:h D2:h | G1:h C2:h |" }
  ],
  "show": ["staff"]
}
```

### Try it

1. Play the sample chorus and, each time the lead rests, count the silent beats on your fingers. The rests are as long as the phrases.
2. Replay and listen to what fills the space: the piano and bass keep the chords going, so the silence doesn't sound empty — it sounds like the band answering.
3. Replay bars 1 and 3 only: same rhythm, different landing note (A, then the blue A♭). Notice how the repeat makes bar 3 sound planned.

**Check:** you can say where the motif comes back without counting bars.

**If you can't hear it yet:** tap the motif rhythm (drill 2) along with the sample. Where your tapping matches, the motif is back.

## Drills

```exercise
{
  "id": "e1-guide-tone-chorus",
  "type": "play-melody",
  "title": "Layer 1: the guide-tone chorus",
  "passScore": 0.7,
  "spec": { "bpm": 90, "timeSig": "4/4", "key": "F", "seq": "A4:w | Ab4:w | A4:w | Bb4:h A4:h | Ab4:w | Ab4:w | A4:w | F#4:w | F4:w | E4:w | A4:h F#4:h | F4:h E4:h |", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "bass", "seq": "F2:w | Bb1:w | F2:w | C2:h F2:h | Bb1:w | B1:w | F2:w | D2:w | G1:w | C2:w | F2:h D2:h | G1:h C2:h |" } }
}
```

```exercise
{
  "id": "e2-motif-rhythm",
  "type": "rhythm-tap",
  "title": "Tap the motif, then the space",
  "passScore": 0.7,
  "spec": { "bpm": 100, "timeSig": "4/4", "seq": "r:8 x:8 x:8 x:8 x:q r:q | r:w |", "showNotation": true, "countIn": 1, "loops": 4 }
}
```

```exercise
{
  "id": "e3-play-sample-start",
  "type": "play-melody",
  "title": "Play the sample's first four bars",
  "instructions": "The motif, a bar of space, then the motif again over the same F7, now landing on the blue ♭3 (A♭).",
  "passScore": 0.7,
  "spec": { "bpm": 90, "timeSig": "4/4", "key": "F", "seq": "r:8 G#4:8 A4:8 C5:8 A4:q r:q | r:w | r:8 G4:8 Ab4:8 C5:8 Ab4:q r:q | r:w |", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "piano", "seq": "[F2 Eb3 A3]:w | [Bb2 D3 Ab3]:w | [F2 Eb3 A3]:w | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h |" } }
}
```

## Make it

The task text has the four steps. After each step:

**Judge it by ear:** loop the 12 bars and listen with the piano muted. After step 1 you should still hear the chord changes; after step 2 the approaches should sound like they *arrive* (a half step onto a strong beat); after step 3 you should recognise your motif when it returns; after step 4 each phrase should feel answered by the band.

**If you're stuck:** copy the motif from bar 1 of the sample, then change only its last note to the guide tone of each chord. For space, delete every other bar's notes and see which silences you like.

```exercise
{
  "id": "e4-daw-solo-chorus",
  "type": "daw-task",
  "title": "Your solo chorus, layer by layer",
  "instructions": "Piano, bass and a swing ride are ready. On the lead track: 1) step-enter the guide-tone line above (about 5 minutes); 2) turn it into phrases: shorten some notes and add at least three approach notes or enclosures before targets; 3) choose a 1–2 bar motif and use it three times, fitted to the chords; 4) empty out at least two stretches of a half bar or more, so phrases answer each other. Step entry is fine; if you like, record a live take over it afterwards on a new track. About 35 minutes in total: steps 1–2 in session 1, steps 3–4 in session 2.",
  "spec": {
    "template": { "bpm": 100, "key": "F", "timeSig": "4/4", "swing": 0.6, "tracks": [
      { "instrument": "lead", "seq": "" },
      { "instrument": "piano", "seq": "[F2 Eb3 A3]:w | [Bb2 D3 Ab3]:w | [F2 Eb3 A3]:w | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [Bb2 D3 Ab3]:w | [B2 D3 Ab3]:w | [F2 Eb3 A3]:w | [D3 F#3 C4]:w | [G2 F3 Bb3]:w | [C3 E3 Bb3]:w | [F2 Eb3 A3]:h [D3 F#3 C4]:h | [G2 F3 Bb3]:h [C3 E3 Bb3]:h |" },
      { "instrument": "bass", "seq": "F2:w | Bb1:w | F2:w | C2:h F2:h | Bb1:w | B1:w | F2:w | D2:w | G1:w | C2:w | F2:h D2:h | G1:h C2:h |" },
      { "instrument": "drums", "seq": "ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 | ride:q ride:8 ride:8 [ride hh]:q ride:8 ride:8 |" } ] },
    "task": "A 12-bar solo over the F jazz blues: guide tones, approaches, a repeated motif and space.",
    "checks": [
      { "kind": "bars", "min": 12, "max": 12 },
      { "kind": "note-count", "min": 24, "track": 0 },
      { "kind": "range", "low": "C4", "high": "C6", "track": 0 },
      { "kind": "uses-rhythm", "values": ["8", "q", "h"], "minDistinct": 2, "track": 0 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I7", "IV7", "I7", "v7", "IV7", "#iv°7", "I7", "VI7", "ii7", "V7", "I7", "ii7"], "barsPerChord": 1, "minRatio": 0.7, "key": "F", "track": 0 },
      { "kind": "has-rest", "minDuration": "h", "min": 2, "track": 0 },
      { "kind": "custom", "id": "approaches", "note": "Self-check: at least three approach notes or enclosures, each resolving onto a chord tone." },
      { "kind": "custom", "id": "motif", "note": "Self-check: one 1–2 bar motif appears at least three times." }
    ],
    "minBars": 12, "maxBars": 12
  }
}
```

```exercise
{
  "id": "e5-reflect",
  "type": "reflect",
  "title": "Solo review",
  "spec": { "prompt": "Listen back once without judging, then once as a critic. Name one bar you like and why, and one habit to change next time (for example: every phrase starts on beat 1, or there is never a rest).", "minWords": 30 }
}
```

## Ear review

**Before the drill** — the method (see *How to do it* beside it): chunk the phrase — two short pieces rather than one long one — find the first note on the keyboard, then follow up/down and step/leap. Earlier rungs have their own method in the box.

```ladder
{ "skill": "melody", "unlocks": 18, "intro": "Melodies at your level: short phrases, played back." }
```

## Between lessons

Play your finished chorus back once a day and try playing along live for just the first four bars. Keep the motif; everything else may change.
