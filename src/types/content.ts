// Content model for the Communion of Reparation All Night Vigil Prayer Guide.
// The booklet is represented as an ordered list of Parts, each containing
// Sections, each containing Blocks. The guided walkthrough steps through
// Sections one screen at a time; a Section's Blocks render together.

export type Posture = 'stand' | 'kneel' | 'sit';

export type Speaker = 'L' | 'R' | 'A' | 'Presider' | 'Side 1' | 'Side 2' | 'Lector';

export interface DialogueLine {
  speaker: Speaker;
  text: string;
  /** Parallel Latin text for this line, shown above the (English) text. */
  latin?: string;
}

export type ContentBlock =
  /** Bold all-caps sub-label within a section, e.g. "SPIRITUAL DISPOSITION" */
  | { type: 'label'; text: string }
  /** Italic stage direction, e.g. "Please all kneel" */
  | { type: 'rubric'; text: string; posture?: Posture }
  /** Plain prose paragraph */
  | { type: 'paragraph'; text: string }
  /** Placeholder indicating a hymn is sung here (no fixed lyrics in the guide) */
  | { type: 'hymnCue' }
  /** A hymn/prayer with parallel Latin and English text */
  | { type: 'bilingual'; latin: string[]; english: string[] }
  /** Leader/response or multi-speaker dialogue prayer */
  | { type: 'dialogue'; lines: DialogueLine[] }
  /** A longer spoken prayer, broken into phrases for pacing. If latinPhrases
   * is given, it must be the same length as phrases — each Latin phrase is
   * shown above its English counterpart. */
  | { type: 'prayer'; speaker?: Speaker; phrases: string[]; latinPhrases?: string[] }
  /** Scripture reading */
  | {
      type: 'reading';
      citation: string;
      introduction: string;
      phrases: string[];
      closing?: { leader: string; response: string };
    }
  /** Simple bullet or numbered list */
  | { type: 'list'; items: string[]; ordered?: boolean }
  /** Editorial / practical note, rendered distinctly from rubrics */
  | { type: 'note'; text: string }
  /** Renders the worshipper's own saved intention for tonight, if they set
   * one on the Home screen. Renders nothing when no intention is saved. */
  | { type: 'intention' }
  /** Small-print acknowledgement/citation line. If linkText is a substring of
   * text, that substring renders italic + blue (matching the source PDF's
   * hyperlink styling), the rest renders as plain small print. `bold` is for
   * a standalone statement (e.g. usage rights) that needs to stand out from
   * the surrounding citations. */
  | { type: 'credit'; text: string; linkText?: string; bold?: boolean };

export interface VigilSection {
  id: string;
  /** Small overline label, e.g. "First Office" */
  kicker?: string;
  title: string;
  /** Render the title at a smaller size — for reference-style pages
   * (e.g. Acknowledgements) that don't need a full devotional heading. */
  smallTitle?: boolean;
  /** Epigraph scripture quote shown under the title */
  epigraph?: { text: string; citation: string };
  /** Vertically centers this section's content in the viewport instead of
   * starting at the top — for short, standalone intro screens where reading
   * flow from the top doesn't matter (not for long scrollable content). */
  centerContent?: boolean;
  /** MaterialCommunityIcons glyph name, rendered as a circular badge above
   * the title — for short standalone intro screens that benefit from a
   * visual anchor. */
  icon?: string;
  blocks: ContentBlock[];
}

export interface VigilPart {
  id: string;
  title: string;
  /** Shown in the table of contents / progress indicator */
  shortTitle?: string;
  sections: VigilSection[];
}
