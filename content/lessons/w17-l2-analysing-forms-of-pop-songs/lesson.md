---
id: w17-l2-analysing-forms-of-pop-songs
title: Analysing the Forms of Pop Songs
week: 17
order: 2
phase: p3
duration_min: 45
goals:
  - Map the form of a song by listening - count bars, letter every change
  - Describe how three well-known songs create contrast between sections, answering before reading the facts
  - Play I–iii–vi–IV and hear the bass move through ii and iii
prerequisites: [w17-l1-sections-and-forms]
tags: [form, analysis, listening, ear]
songs:
  - { title: "Yesterday", composer: "Lennon-McCartney (The Beatles)", public_domain: false }
  - { title: "Let It Be", composer: "Lennon-McCartney (The Beatles)", public_domain: false }
  - { title: "Someone Like You", composer: "Adele Adkins, Dan Wilson", public_domain: false }
---

# Analysing the Forms of Pop Songs

Mapping the form is the first step of every song you will take apart this year. The method is always the same:

1. Tap the beat (as in the last lesson) and count bars — groups of four beats.
2. Every time something *changes* — melody, chords, drums, number of instruments — start a new letter.
3. When a block comes back, reuse its letter. At the end, name the letters: verse, pre-chorus, chorus, bridge.

Honest expectation: counting bars in a real song is hard at first. You will lose count; that's normal. Count
section by section, and replay a section as often as you need.

## Practice on a miniature

"Lantern" is an original 16-bar tune with 4-bar sections. The notation is hidden: listen as often as you like, answer,
and only then reveal it.

**If you lose count:** replay and only answer one question per play — play 1: "does bar 5 sound like bar 1 again?",
play 2: "does something new start at bar 9?", play 3: "which version ends more finished?". Counting four beats per
bar on your fingers helps more than it sounds.

```exercise
{
  "id": "lantern-form",
  "type": "listen",
  "title": "Map the form of Lantern",
  "spec": {
    "example": {
      "title": "Lantern (16 bars)",
      "bpm": 84, "timeSig": "4/4", "key": "F",
      "tracks": [
        { "instrument": "lead", "seq": "A4:q C5:q A4:q F4:q | D4:q F4:8 A4:8 A4:h | Bb4:q A4:q G4:q C5:q | A4:h. r:q | A4:q C5:q A4:q F4:q | D4:q F4:8 A4:8 A4:h | Bb4:q A4:q G4:q C5:q | A4:h. r:q | D5:h. C5:q | Bb4:q A4:q G4:h | G4:q A4:q Bb4:q D5:q | C5:w | A4:q C5:q A4:q F4:q | D4:q F4:8 A4:8 A4:h | Bb4:q A4:q G4:q E4:q | F4:h. r:q" },
        { "instrument": "piano", "seq": "[F3 A3 C4]:w | [D3 F3 A3]:w | [D3 F3 Bb3]:h [E3 G3 C4]:h | [F3 A3 C4]:w | [F3 A3 C4]:w | [D3 F3 A3]:w | [D3 F3 Bb3]:h [E3 G3 C4]:h | [F3 A3 C4]:w | [D3 F3 Bb3]:w | [D3 F3 Bb3]:w | [D3 G3 Bb3]:w | [C3 E3 G3 Bb3]:w | [F3 A3 C4]:w | [D3 F3 A3]:w | [D3 F3 Bb3]:h [E3 G3 C4]:h | [F3 A3 C4]:w" },
        { "instrument": "bass", "seq": "F2:h F2:h | D2:h D2:h | Bb2:h C3:h | F2:h F2:h | F2:h F2:h | D2:h D2:h | Bb2:h C3:h | F2:h F2:h | Bb2:h Bb2:h | Bb2:h Bb2:h | G2:h G2:h | C3:h C3:h | F2:h F2:h | D2:h D2:h | Bb2:h C3:h | F2:h F2:h" }
      ],
      "show": ["staff"],
      "hidden": true,
      "loop": false
    },
    "questions": [
      { "q": "Which letters describe Lantern's four 4-bar sections?", "choices": ["A A A A", "A A B A", "A B A B", "A B C A"], "answer": 1, "explain": "Bars 1-4 and 5-8 are the same tune (A, A); bars 9-12 are new (B, the bridge); bars 13-16 bring A back. AABA in miniature." },
      { "q": "Compare the last section with the first one. What is different?", "choices": ["Nothing, it is an exact repeat", "Its last notes: it comes down to rest instead of stopping in the air", "It is faster", "It is in a new key"], "answer": 1, "explain": "The first A stops on A (degree 3 of F), which sounds open; the last A steps down to F (degree 1), home - that is what makes it an ending." },
      { "q": "At the end of the B section (bar 12), does the music sound finished or does it lean onward?", "choices": ["Finished", "Leans onward"], "answer": 1, "explain": "B ends on C7, the V7 chord of F - a half cadence. It pulls you back into the returning A." }
    ]
  }
}
```

## A new chord in the bass: iii

One song below uses **iii**, the minor chord on degree 3 (week 13): in C it is E minor, E–G–B. Hear I–iii–vi–IV —
the bass walks C, E, A, F.

### Try it

1. Play the chart below once, listening only for the **lowest** note of each chord.
2. On your keyboard, play C3 – E3 – A3 – F3 (left hand) along with the replay. Does your line match the bottom of
   the chords?
3. Now play C3 – G3 – A3 – F3 instead (the familiar I–V–vi–IV bass). Which one matches the chart?

**Check:** C–E–A–F matches; with G in place of E, bar 2 sounds wrong under the chord — your G clashes against E minor.

**If you can't hear it yet:** hold E3 down during bar 2 of the replay, then G3. The note that melts into the chord is
the bass; the other one rubs.

```chords
{ "key": "C", "bars": ["C", "Em", "Am", "F"], "roman": true, "play": true, "bpm": 72 }
```

```exercise
{
  "id": "play-i-iii-vi-iv",
  "type": "play-chord",
  "title": "I – iii – vi – IV in C",
  "instructions": "C Em Am F. Keep your hand still: C and Em share E and G; Em and Am share E; Am and F share A and C.",
  "spec": { "chords": ["C", "Em", "Am", "F"], "inversion": "any", "sequence": true, "bpm": 66 }
}
```

**Before the drill** (method also in the *How to do it* box): find home first, then take each bass note by
stepping from the one before — next door, or a jump? — and try it on the keyboard. If the drill shows an earlier
roots rung, its own box covers that rung.

```ladder
{ "skill": "roots", "unlocks": 10, "intro": "Opens: bass lines that may use ii and iii too. The drill runs at your current roots rung." }
```

## Three songs, verdict first

Listen to each song on your own player with this lesson open. Tap the tempo, count sections, then answer. The facts
appear only after you answer; a wrong guess is part of the learning.

```exercise
{
  "id": "songs-verdict-first",
  "type": "quiz",
  "title": "Yesterday, Let It Be, Someone Like You",
  "spec": { "questions": [
    { "q": "\"Yesterday\" (The Beatles): about how fast is it?", "choices": ["About 65 BPM", "About 97 BPM", "About 130 BPM"], "answer": 1, "explain": "About 97 BPM, in F major. If you tapped about 48, you tapped every other beat." },
    { "q": "\"Yesterday\": what is its form?", "choices": ["Verse-chorus with a pre-chorus", "A A B A B A (+ a short tag)", "One section repeated", "A B A B C"], "answer": 1, "explain": "A A B A B A with a short hummed tag. The A section is only 7 bars long - unusual, and still natural because the melody feels complete." },
    { "q": "\"Yesterday\": the second A adds something the first A did not have. What?", "choices": ["Drums", "A string quartet", "A second singer", "Nothing"], "answer": 1, "explain": "Strings join on the second A: a change of texture without a new section." },
    { "q": "\"Let It Be\": do the drums play from the very start?", "choices": ["Yes, from bar 1", "No, they come in later and the song grows"], "answer": 1, "explain": "Piano and voice start alone; drums arrive later. Energy builds across the whole song, not only inside each section. About 72 BPM, C major." },
    { "q": "\"Let It Be\": the chorus (\"Let it be, let it be...\") starts on a chord that sounds - (a guess is fine)", "choices": ["bright, like home (major)", "darker (minor)"], "answer": 1, "explain": "It starts on Am, the vi chord: vi-V-IV-I (Am G F C). The verse is I-V-vi-IV | I-V-IV-I (C G Am F | C G F C)." },
    { "q": "\"Someone Like You\" (Adele): which instruments do you hear?", "choices": ["Full band", "Piano and voice only", "Guitar and drums", "Strings and voice"], "answer": 1, "explain": "Piano and voice only, no drums. About 67 BPM, A major. Form: V - PC - C - V - PC - C - B - C." },
    { "q": "\"Someone Like You\": with no drums and no new instruments, what makes the chorus lift?", "choices": ["A key change", "A faster tempo", "The melody jumps to a higher register", "A new time signature"], "answer": 2, "explain": "Register. The verse sits low; the pre-chorus climbs; the chorus melody leaps up. Verse chords I-iii-vi-IV (A C#m F#m D) - the iii you just played; chorus I-V-vi-IV (A E F#m D)." }
  ] }
}
```

Now play the "Someone Like You" chorus progression you just read about, in A major:

```exercise
{
  "id": "play-a-major-four",
  "type": "play-chord",
  "title": "I – V – vi – IV in A",
  "instructions": "A - E - F#m - D. Find inversions that keep your hand still.",
  "spec": { "chords": ["A", "E", "F#m", "D"], "inversion": "any", "sequence": true, "bpm": 68 }
}
```

```exercise
{
  "id": "reflect-own-analysis",
  "type": "reflect",
  "spec": { "prompt": "Analyse one more song of your choice with the 3-step method. Write: title, tempo (tapped), the form as letters with bar counts if you managed (e.g. I4 V8 PC4 C8 ...), and one sentence on what changes at the first chorus.", "minWords": 40 }
}
```

## Between lessons

Map one more song with the 3-step method (sections only, no bar counts needed), and play C–Em–Am–F slowly while
listening for the bass walk.
