---
id: w01-l8-e2e-daw-start
title: E2E fixture — start a song
week: 1
order: 8
phase: p1
duration_min: 10
goals:
  - Continue one project across two daw-tasks (projectRef)
  - Work against a countdown (timerMin)
tags: [daw, e2e]
---

# E2E fixture — start a song

Only served by the e2e suite (`test.use({ contentFixture: true })`); not part of the curriculum.

```exercise
{
  "id": "t1",
  "type": "daw-task",
  "title": "Start the song",
  "spec": {
    "template": { "bpm": 90, "key": "C", "tracks": [{ "instrument": "piano", "seq": "" }] },
    "task": "Write at least 4 notes in C major on the piano track.",
    "projectRef": "e2e-song",
    "checks": [
      { "kind": "note-count", "min": 4 },
      { "kind": "in-key", "key": "C", "scale": "major" }
    ]
  }
}
```
