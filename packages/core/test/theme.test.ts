import { describe, expect, it } from 'vitest';
import { DEFAULT_SETTINGS, isThemePref, resolveTheme, THEME_PREFS } from '../src/index.js';

describe('theme', () => {
  it('defaults to following the system', () => {
    expect(DEFAULT_SETTINGS.theme).toBe('system');
    expect(THEME_PREFS).toEqual(['system', 'light', 'dark']);
  });
  it('explicit light/dark win over the OS preference', () => {
    expect(resolveTheme('light', true)).toBe('light');
    expect(resolveTheme('light', false)).toBe('light');
    expect(resolveTheme('dark', false)).toBe('dark');
    expect(resolveTheme('dark', true)).toBe('dark');
  });
  it("'system' follows prefers-color-scheme", () => {
    expect(resolveTheme('system', true)).toBe('dark');
    expect(resolveTheme('system', false)).toBe('light');
  });
  it('unknown / missing values fall back to the system preference', () => {
    expect(resolveTheme(undefined, true)).toBe('dark');
    expect(resolveTheme('sepia', false)).toBe('light');
    expect(resolveTheme(null, false)).toBe('light');
  });
  it('validates preferences', () => {
    for (const p of THEME_PREFS) expect(isThemePref(p)).toBe(true);
    expect(isThemePref('auto')).toBe(false);
    expect(isThemePref(1)).toBe(false);
  });
});
