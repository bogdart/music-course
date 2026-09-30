---
id: w13-l3-analysing-three-pop-songs
title: Analysing Three Pop Songs
week: 13
order: 3
phase: p2
duration_min: 50
goals:
  - Listen to a song with focused questions and commit to answers before seeing the facts
  - Describe a song by key, tempo, form, progression (roman numerals) and cadences
  - Transcribe a four-chord loop by ear and write an original 8-bar sketch on it
prerequisites: [w13-l2-the-four-chords]
tags: [analysis, pop, progressions, daw]
songs:
  - { title: "Let It Be", composer: "The Beatles (1970)", public_domain: false }
  - { title: "Zombie", composer: "The Cranberries (1994)", public_domain: false }
  - { title: "Stand By Me", composer: "Ben E. King (1961)", public_domain: false }
---

# Analysing Three Pop Songs

This is the first real step toward one of your big goals: taking apart a song you hear. Put each song on through your own music service (the app can't play recordings). The rule for today: **verdict first**. Listen, answer the questions, and only then read the facts, which appear after you answer. Getting some wrong is fine: comparing is where the learning happens.

For every song you'll end up with the same card: **key · tempo · form · progression · cadences · what to listen for**. That card is the backbone of every analysis you'll do this year. Each song's card appears in the explanation of its last question — after you've committed to your answers.

## 1. "Let It Be", The Beatles (1970)

Listen to the first verse and chorus. Focus on the moment each chorus line lands ("…let it be").

```exercise
{
  "id": "e1", "type": "quiz", "title": "Let It Be: your verdict",
  "spec": { "questions": [
    { "q": "How many different chords do you hear in the verse?", "choices": ["2", "about 4", "7 or more"], "answer": 1, "explain": "Four: C, G, Am and F, in C major — I, V, vi and IV." },
    { "q": "When a chorus line lands, does it feel like a strong click (V → I) or a soft 'amen' (IV → I)?", "choices": ["Strong click", "Soft amen"], "answer": 1, "explain": "The phrases end F → C: a plagal cadence. The verse runs C – G – Am – F | C – G – F – C (I – V – vi – IV | I – V – IV – I). Almost no V → I in the whole song, which is why it feels like a hymn." },
    { "q": "Does the chorus bring in a completely new set of chords?", "choices": ["Yes", "No, mostly the same chords"], "answer": 1, "explain": "The chorus is Am – G – F – C | C – G – F – C (vi – V – IV – I | I – V – IV – I): the same four chords in a new order, with the bass stepping down A – G – F. Card: key C major · about 72 BPM · piano intro, verse, chorus, verse, chorus, solo, chorus, verse, chorus, ending · verse I – V – vi – IV | I – V – IV – I · cadences mostly plagal (IV → I). Play the verse on your keyboard to check: C G Am F | C G F C." }
  ] }
}
```

## 2. "Zombie", The Cranberries (1994)

Listen to a verse and the following chorus.

```exercise
{
  "id": "e3", "type": "quiz", "title": "Zombie: your verdict",
  "spec": { "questions": [
    { "q": "Is the first chord of the repeating loop major or minor?", "choices": ["Major", "Minor"], "answer": 1, "explain": "Minor: E minor. The loop is Em – C – G – D." },
    { "q": "Does the chorus use different chords from the verse?", "choices": ["Yes, new chords", "No, the same loop"], "answer": 1, "explain": "The same four chords run under the whole song." },
    { "q": "So what makes the chorus hit harder?", "choices": ["A key change", "Arrangement and loudness", "A faster tempo"], "answer": 1, "explain": "A quiet, clean verse; then distorted guitars and heavy drums. Same chords, different arrangement. Card: key E minor (the relative of G major) · about 84 BPM · verse, chorus, verse, chorus, guitar break, chorus, outro · Em – C – G – D all the way: i – VI – III – VII in E minor. Most listeners hear E minor as home, because every cycle starts there and the melody settles there." }
  ] }
}
```

## 3. "Stand By Me", Ben E. King (1961)

Listen to the intro and the first verse, with your attention on the bass.

```exercise
{
  "id": "e4", "type": "quiz", "title": "Stand By Me: your verdict",
  "spec": { "questions": [
    { "q": "Does the bass riff repeat the same shape, moved to each new chord?", "choices": ["Yes", "No, it's different every time"], "answer": 0, "explain": "One figure that outlines each chord, moved up or down with the harmony. Follow the bass and you follow the chords." },
    { "q": "Does every chord last the same length?", "choices": ["Yes, one bar each", "No, some last two bars"], "answer": 1, "explain": "The first chords last two bars each; the last two change faster, pushing into the cadence." },
    { "q": "How many different chords are in the verse?", "choices": ["2", "4", "6"], "answer": 1, "explain": "Four: A – F♯m – D – E, then home to A, in A major. That's I – vi – IV – V, the doo-wop rotation from last lesson, with a slow harmonic rhythm. Card: key A major · about 118 BPM · bass-riff intro, verse, chorus, verse, chorus, strings, chorus · I – vi – IV – V – I. A major isn't one of your keys yet (week 16 builds it); in C the same progression is C C | Am Am | F G | C C — play it to compare." }
  ] }
}
```

## Your turn: transcribe a loop

Here's a four-chord loop made by the app, in C. The notation is hidden. Name the chords, then compare.

```exercise
{
  "id": "e5", "type": "ear-progression", "title": "Mystery loop in C",
  "instructions": "Loop it as often as you like. Find the bass first, then decide major or minor.",
  "passScore": 0.7,
  "spec": {
    "key": "C", "mode": "major", "chords": ["I", "IV", "V", "vi"],
    "progression": ["I", "IV", "vi", "V"],
    "example": {
      "bpm": 96, "timeSig": "4/4", "key": "C", "hidden": true,
      "tracks": [
        { "instrument": "piano", "seq": "[E3 G3 C4]:h [E3 G3 C4]:h | [F3 A3 C4]:h [F3 A3 C4]:h | [E3 A3 C4]:h [E3 A3 C4]:h | [D3 G3 B3]:h [D3 G3 B3]:h" },
        { "instrument": "bass", "seq": "C2:h C2:h | F1:h F1:h | A1:h A1:h | G1:h G1:h" }
      ]
    }
  }
}
```

## Ear: iii joins

In lesson 1 you heard **iii** (Em in C): soft, in-between, sharing notes with both I and V. This lesson opens the progressions rung that includes it, so all six major and minor chords of the key are in play. The drill runs at your current progressions rung, so you'll meet iii once the earlier rungs (including ii) are solid. Clues: iii is minor, and its bass is degree 3.

```ladder
{ "skill": "progressions", "unlocks": 8, "intro": "Opens \"Adding iii\" (I, ii, iii, IV, V, vi); the drill runs at your current rung." }
```

## Make it: a sketch in the same spirit

```exercise
{
  "id": "e6", "type": "daw-task", "title": "8 bars on I – vi – IV – V",
  "spec": {
    "template": { "bpm": 110, "key": "C", "timeSig": "4/4", "tracks": [
      { "instrument": "piano", "seq": "" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "drums", "seq": "" },
      { "instrument": "lead", "seq": "" } ] },
    "task": "Write your own 8 bars on I – vi – IV – V in C (C, Am, F, G, one bar each, twice). Piano: chords. Bass: roots; then try a figure that outlines each chord (root, 3rd, 5th), your own, not Stand By Me's. Drums: kick on 1 and 3, snare on 2 and 4. Lead: an original melody, chord tones on beat 1, ending on C. Then write a card for your own sketch: key, tempo, progression, cadence.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "bass", "drums", "lead"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "chord-tones-on-beats", "beats": [1, 3], "progression": ["I", "IV", "vi", "V"], "barsPerChord": 1, "minRatio": 0.9, "track": 1 },
      { "kind": "drum-pattern", "requires": ["kick", "snare"], "kickOnBeats": [1, 3], "snareOnBeats": [2, 4], "track": 2 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": true, "track": 3 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "IV", "vi", "V"], "barsPerChord": 1, "minRatio": 0.75, "track": 3 },
      { "kind": "ends-on", "degree": 1, "track": 3 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```
