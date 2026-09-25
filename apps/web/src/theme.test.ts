import { afterEach, describe, expect, it, vi } from 'vitest';

type Listener = (e: { matches: boolean }) => void;

function mockSystem(dark: boolean) {
  const listeners = new Set<Listener>();
  const mql = {
    matches: dark,
    addEventListener: (_: string, l: Listener) => listeners.add(l),
    removeEventListener: (_: string, l: Listener) => listeners.delete(l),
  };
  vi.stubGlobal('matchMedia', () => mql);
  return {
    set(d: boolean) {
      mql.matches = d;
      listeners.forEach((l) => l({ matches: d }));
    },
  };
}

describe('applyTheme', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.resetModules();
    delete document.documentElement.dataset.theme;
    localStorage.clear();
  });

  it('sets data-theme, mirrors the preference to localStorage and follows live OS changes for "system"', async () => {
    const sys = mockSystem(true);
    const { applyTheme, THEME_LS_KEY } = await import('./theme');
    applyTheme('system');
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(localStorage.getItem(THEME_LS_KEY)).toBe('system');
    sys.set(false);
    expect(document.documentElement.dataset.theme).toBe('light');

    applyTheme('dark');
    expect(document.documentElement.dataset.theme).toBe('dark');
    sys.set(true);
    sys.set(false);
    expect(document.documentElement.dataset.theme).toBe('dark'); // explicit choice ignores the OS
    applyTheme('light');
    expect(document.documentElement.dataset.theme).toBe('light');
    expect(localStorage.getItem(THEME_LS_KEY)).toBe('light');
  });

  it('cssVar resolves custom properties and var() references', async () => {
    mockSystem(false);
    const { cssVar } = await import('./theme');
    document.documentElement.style.setProperty('--x-test', ' #123456 ');
    expect(cssVar('--x-test')).toBe('#123456');
    expect(cssVar('var(--x-test)')).toBe('#123456');
    expect(cssVar('--missing', document.documentElement, 'red')).toBe('red');
    expect(cssVar('#abc')).toBe('#abc');
  });
});
