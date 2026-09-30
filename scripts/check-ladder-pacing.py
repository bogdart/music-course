#!/usr/bin/env python3
"""Check ladder pacing across the course: per skill, unlock values never decrease and no lesson opens more than 2 new
rungs; report the rungs each lesson opens (compare with docs/EAR_SKILL_MAP.md's unlock table)."""
import json, re, sys
cur = json.load(open('content/curriculum.json'))
top, bad, opens = {}, [], {}
for w in cur['weeks']:
    for lid in w['lessons']:
        s = open(f'content/lessons/{lid}/lesson.md').read()
        for m in re.finditer(r'```ladder\n(.*?)\n```', s, re.S):
            d = json.loads(m.group(1)); sk, u = d['skill'], d['unlocks']; t = top.get(sk, 0)
            if u < t: bad.append(f'{lid}: {sk} {u} is below {t} already open')
            if u - t > 2: bad.append(f'{lid}: {sk} opens {u - t} new rungs ({t}→{u})')
            if u > t: opens.setdefault(lid[:6], []).append(f'{sk} {u}')
            top[sk] = max(t, u)
if '--table' in sys.argv:
    for k, v in opens.items(): print(k, ', '.join(v))
print('\n'.join(bad) if bad else 'pacing ok')
sys.exit(1 if bad else 0)
