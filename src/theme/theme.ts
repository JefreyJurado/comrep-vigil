export const lightColors = {
  background: '#FBF7F1',
  surface: '#FFFFFF',
  text: '#000000',
  textMuted: '#4A3F35',
  accent: '#8C1D24',
  accentMuted: '#B5484F',
  gold: '#A9832B',
  border: '#E7DDD0',
  rubric: '#8C1D24',
  divider: '#E7DDD0',
  // Text/icon color for content sitting on top of an accent-filled surface
  // (e.g. a primary button's label). Deliberately per-palette rather than a
  // fixed white: whichever of white/near-black contrasts best against that
  // palette's own accent value (see nightColors.onAccent for why night's
  // differs).
  onAccent: '#FFFFFF',
  // Switch thumb color for the "off" state — always light, regardless of
  // theme, matching how native iOS/Android switches don't invert their
  // thumb in dark mode. Distinct from onAccent, which does invert per-theme.
  switchThumbOff: '#FFFFFF',
  noteBackground: '#F3ECE1',
  creditLink: '#2255CC',
};

// A dim palette for praying in a dark chapel or bedroom — kept in the same
// warm red/gold family as the light theme rather than a neutral gray, so it
// still reads as the same Missal-inspired design, just night-lit.
export const nightColors = {
  background: '#16110E',
  surface: '#221B16',
  text: '#EAE0D2',
  textMuted: '#AB9C8A',
  // Brightened from an earlier #C1555C, which only hit 4.2:1 against the
  // background — under the 4.5:1 WCAG AA threshold for normal-size text
  // (titles, rubrics, speaker labels all use this as a text color, not just
  // a button fill). This value clears 4.5:1 against both background and
  // surface; verified with a contrast-ratio script, not eyeballed.
  accent: '#DB5768',
  accentMuted: '#8C4448',
  gold: '#C9A657',
  border: '#3A322A',
  rubric: '#DB5768',
  divider: '#3A322A',
  // Near-black instead of white: against this lighter, more pastel accent,
  // dark text clears 4.98:1 while white only clears 3.77:1 (checked with a
  // contrast-ratio script) — the reverse of which one wins in light mode,
  // where the accent is a dark red instead of a light rose.
  onAccent: '#16110E',
  switchThumbOff: '#FFFFFF',
  noteBackground: '#2A231D',
  creditLink: '#8FB4FF',
};

export type ThemeColors = typeof lightColors;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radii = {
  sm: 8,
  md: 14,
  lg: 22,
};

// Caps how wide reading content (vigil text, settings, contents list) can
// stretch on tablets/landscape/desktop web, where orientation is no longer
// locked to portrait — without this, paragraph lines run edge-to-edge and
// become uncomfortable to read at those widths.
export const contentMaxWidth = 700;

// Liturgical type system, in the spirit of a Roman Missal: Cinzel (an
// inscriptional Roman-capitals face) for titles, Linux Libertine — a book
// text face with a larger x-height and steadier stroke weight than
// Cormorant Garamond — for running text and rubrics, so long passages stay
// legible at phone-screen sizes instead of reading thin/delicate.
export const fonts = {
  display: 'Cinzel-Bold',
  displaySemiBold: 'Cinzel-SemiBold',
  displayRegular: 'Cinzel-Regular',
  body: 'LinuxLibertine-Regular',
  bodySemiBold: 'LinuxLibertine-Semibold',
  bodyBold: 'LinuxLibertine-Bold',
  italic: 'LinuxLibertine-Italic',
  italicMedium: 'LinuxLibertine-SemiboldItalic',
};
