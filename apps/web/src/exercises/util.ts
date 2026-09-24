/** Keyboard range covering `midis` in whole octaves, at least [minLo, minHi]. */
export function rangeAround(midis: number[], minLo = 60, minHi = 71): [number, number] {
  if (!midis.length) return [minLo, minHi];
  const lo = Math.min(...midis);
  const hi = Math.max(...midis);
  return [Math.min(lo - (((lo % 12) + 12) % 12), minLo), Math.max(hi + (11 - (((hi % 12) + 12) % 12)), minHi)];
}
