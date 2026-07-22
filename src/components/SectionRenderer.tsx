import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import { ContentBlock, DialogueLine, VigilSection } from '../types/content';
import { colors, fonts, radii, spacing } from '../theme/theme';

// Missal convention: the congregation's response is set in bold so it's easy
// to pick out at a glance. Leader/reader prompts (L, Presider, Lector) stay
// regular weight; Side 1 / Side 2 alternate the same responsive role in the
// psalms, so they're bolded too.
const BOLD_TEXT_SPEAKERS = new Set(['R', 'Side 1', 'Side 2']);

interface QuoteSegment {
  text: string;
  quoted: boolean;
}

/**
 * Splits each phrase into quoted/unquoted segments, carrying quote state
 * *across* phrases — needed because scripture readings often break a single
 * quoted sentence (e.g. Jesus speaking) across several phrase lines, each
 * rendered as its own paragraph. A per-phrase-only split would miss those.
 *
 * Curly “ ” are unambiguous open/close. Straight " is ambiguous, so it
 * toggles open/closed based on current state — except a straight " at the
 * very start of a phrase while already inside a quote, which is treated as
 * a *continuation* mark rather than a close: standard English typography
 * re-opens a quotation with " at the start of each new paragraph but closes
 * it only once, at the very end. Single curly quotes (‘ ’), used for a
 * quote nested inside a quote, are left as plain characters so they don't
 * prematurely close the outer quoted span.
 */
function segmentQuotesAcrossPhrases(phrases: string[]): QuoteSegment[][] {
  let inQuote = false;
  return phrases.map((phrase) => {
    const segments: QuoteSegment[] = [];
    let current = '';
    for (let idx = 0; idx < phrase.length; idx++) {
      const ch = phrase[idx];
      const isContinuation = ch === '"' && inQuote && idx === 0;
      const isOpening = !isContinuation && ((ch === '"' && !inQuote) || ch === '“');
      const isClosing = !isContinuation && ((ch === '"' && inQuote) || ch === '”');

      if (isContinuation) {
        current += ch;
      } else if (isOpening) {
        if (current) segments.push({ text: current, quoted: false });
        current = ch;
        inQuote = true;
      } else if (isClosing) {
        current += ch;
        segments.push({ text: current, quoted: true });
        current = '';
        inQuote = false;
      } else {
        current += ch;
      }
    }
    if (current) segments.push({ text: current, quoted: inQuote });
    return segments;
  });
}

function renderSegments(segments: QuoteSegment[], quoteStyle: StyleProp<TextStyle> = styles.inlineQuote) {
  if (segments.length <= 1 && !segments[0]?.quoted) {
    return segments[0]?.text ?? '';
  }
  return segments.map((seg, i) =>
    seg.quoted ? (
      <Text key={i} style={quoteStyle}>
        {seg.text}
      </Text>
    ) : (
      seg.text
    )
  );
}

/** Renders a single string with any quoted spans automatically italicized. */
function QuoteAwareText({
  text,
  style,
  quoteStyle,
}: {
  text: string;
  style: StyleProp<TextStyle>;
  quoteStyle?: StyleProp<TextStyle>;
}) {
  const [segments] = segmentQuotesAcrossPhrases([text]);
  return <Text style={style}>{renderSegments(segments, quoteStyle)}</Text>;
}

/** Renders an array of phrases as separate paragraphs, tracking quote state across them. */
function QuoteAwarePhrases({
  phrases,
  style,
  quoteStyle,
}: {
  phrases: string[];
  style: StyleProp<TextStyle>;
  quoteStyle?: StyleProp<TextStyle>;
}) {
  const segmented = segmentQuotesAcrossPhrases(phrases);
  return (
    <>
      {segmented.map((segments, i) => (
        <Text key={i} style={style}>
          {renderSegments(segments, quoteStyle)}
        </Text>
      ))}
    </>
  );
}

function DialogueLineText({ line, keyId }: { line: DialogueLine; keyId: string | number }) {
  const boldText = BOLD_TEXT_SPEAKERS.has(line.speaker);
  const lineStyle = boldText ? styles.dialogueLineBold : styles.dialogueLine;
  const [segments] = segmentQuotesAcrossPhrases([line.text]);
  return (
    <Text key={keyId} style={lineStyle}>
      <Text style={styles.dialogueSpeaker}>{line.speaker}: </Text>
      {renderSegments(segments)}
    </Text>
  );
}

function CreditText({ text, linkText }: { text: string; linkText?: string }) {
  if (linkText && text.includes(linkText)) {
    const idx = text.indexOf(linkText);
    const before = text.slice(0, idx);
    const after = text.slice(idx + linkText.length);
    return (
      <Text style={styles.creditText}>
        {before}
        <Text style={styles.creditLink}>{linkText}</Text>
        {after}
      </Text>
    );
  }
  return <Text style={styles.creditText}>{text}</Text>;
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'label':
      return (
        <Text style={styles.label} accessibilityRole="header">
          {block.text.toUpperCase()}
        </Text>
      );

    case 'rubric':
      // Missal convention: rubrics are plain italic (traditionally red)
      // instructional text, centered, no icon or bounding box.
      return <Text style={styles.rubric}>{block.text}</Text>;

    case 'paragraph':
      return <QuoteAwareText text={block.text} style={styles.paragraph} />;

    case 'hymnCue':
      return (
        <View style={styles.hymnCue}>
          <Text style={styles.hymnCueText}>♪ Hymn</Text>
        </View>
      );

    case 'bilingual':
      return (
        <View style={styles.bilingualWrap}>
          <View style={styles.bilingualCol}>
            {block.latin.map((line, i) => (
              <Text key={i} style={[styles.bilingualLine, styles.latin]}>
                {line || ' '}
              </Text>
            ))}
          </View>
          <View style={styles.bilingualCol}>
            {block.english.map((line, i) => (
              <Text key={i} style={styles.bilingualLine}>
                {line || ' '}
              </Text>
            ))}
          </View>
        </View>
      );

    case 'dialogue':
      return (
        <View style={styles.dialogueBlock}>
          {block.lines.map((line, i) => (
            <DialogueLineText key={i} keyId={i} line={line} />
          ))}
        </View>
      );

    case 'prayer':
      return (
        <View style={styles.prayerBlock}>
          {block.speaker ? <Text style={styles.dialogueSpeaker}>{block.speaker}:</Text> : null}
          {block.phrases.map((phrase, i) => {
            // Parenthetical action cues, e.g. "(Kiss your scapular.)", are
            // rendered like a rubric — italic, centered — instead of blending
            // into the surrounding prayer text.
            const isActionCue = /^\(.*\)$/.test(phrase.trim());
            return isActionCue ? (
              <Text key={i} style={styles.prayerActionCue}>
                {phrase}
              </Text>
            ) : (
              <QuoteAwareText key={i} text={phrase} style={styles.prayerPhrase} />
            );
          })}
        </View>
      );

    case 'reading':
      return (
        <View style={styles.readingBlock}>
          <Text style={styles.readingCitation}>{block.citation}</Text>
          <Text style={styles.readingIntro}>{block.introduction}</Text>
          <QuoteAwarePhrases phrases={block.phrases} style={styles.paragraph} />
          {block.closing ? (
            <View style={styles.dialogueBlock}>
              <DialogueLineText keyId="leader" line={{ speaker: 'L', text: block.closing.leader }} />
              <DialogueLineText keyId="response" line={{ speaker: 'R', text: block.closing.response }} />
            </View>
          ) : null}
        </View>
      );

    case 'list':
      return (
        <View style={styles.listBlock}>
          {block.items.map((item, i) => (
            <View key={i} style={styles.listItemRow}>
              <Text style={styles.listBullet}>{block.ordered ? `${i + 1}.` : '•'}</Text>
              <QuoteAwareText text={item} style={styles.listItemText} />
            </View>
          ))}
        </View>
      );

    case 'note':
      return (
        <View style={styles.noteBlock}>
          <Text style={styles.noteText}>{block.text}</Text>
        </View>
      );

    case 'credit':
      return <CreditText text={block.text} linkText={block.linkText} />;

    default:
      return null;
  }
}

export function SectionRenderer({ section }: { section: VigilSection }) {
  return (
    <View>
      {section.kicker ? <Text style={styles.kicker}>{section.kicker.toUpperCase()}</Text> : null}
      <Text style={section.smallTitle ? styles.titleSmall : styles.title}>{section.title}</Text>
      {section.epigraph ? (
        <View style={styles.epigraphBlock}>
          <Text style={styles.epigraphText}>“{section.epigraph.text}”</Text>
          <Text style={styles.epigraphCitation}>({section.epigraph.citation})</Text>
        </View>
      ) : null}
      <View style={styles.blocks}>
        {section.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  kicker: {
    fontFamily: fonts.displaySemiBold,
    fontSize: 14,
    letterSpacing: 2,
    color: colors.gold,
    marginBottom: spacing.xs,
  },
  title: {
    // The section's own name (e.g. "Worshipper") — the largest heading on
    // the screen, clearly bigger than the sub-labels beneath it.
    fontFamily: fonts.display,
    fontSize: 33,
    color: colors.accent,
    marginBottom: spacing.sm,
  },
  titleSmall: {
    // For reference-style pages (Acknowledgements) that don't need a full
    // devotional-heading treatment.
    fontFamily: fonts.displaySemiBold,
    fontSize: 20,
    color: colors.accent,
    marginBottom: spacing.sm,
  },
  epigraphBlock: {
    borderLeftWidth: 3,
    borderLeftColor: colors.gold,
    paddingLeft: spacing.md,
    marginBottom: spacing.lg,
  },
  epigraphText: {
    fontFamily: fonts.italicMedium,
    fontSize: 20,
    color: colors.text,
    lineHeight: 28,
  },
  epigraphCitation: {
    fontFamily: fonts.italic,
    fontSize: 14,
    color: colors.textMuted,
    marginTop: spacing.xs,
  },
  blocks: {
    gap: spacing.md,
  },
  label: {
    // Sub-headings like "SPIRITUAL DISPOSITION" / "READING" — bigger than
    // the body copy they introduce, but clearly smaller than the section
    // title above, and gold (not maroon) so the two tiers can't be confused.
    fontFamily: fonts.display,
    fontSize: 22,
    letterSpacing: 0.8,
    color: colors.gold,
    marginTop: spacing.md,
  },
  rubric: {
    fontFamily: fonts.italic,
    fontSize: 19,
    color: colors.rubric,
    textAlign: 'center',
  },
  paragraph: {
    fontFamily: fonts.body,
    fontSize: 21,
    lineHeight: 31,
    color: colors.text,
  },
  inlineQuote: {
    fontFamily: fonts.italic,
  },
  hymnCue: {
    alignSelf: 'flex-start',
    backgroundColor: colors.border,
    borderRadius: radii.sm,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
  },
  hymnCueText: {
    fontFamily: fonts.italic,
    fontSize: 16,
    color: colors.textMuted,
  },
  bilingualWrap: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  bilingualCol: {
    flex: 1,
  },
  bilingualLine: {
    fontFamily: fonts.body,
    fontSize: 17,
    lineHeight: 24,
    color: colors.text,
  },
  latin: {
    fontFamily: fonts.italic,
    color: colors.textMuted,
  },
  dialogueBlock: {
    // Enough room for consecutive Side 1 / Side 2 (or L / R) entries to read
    // as separate turns rather than running together.
    gap: spacing.md,
  },
  dialogueLine: {
    fontFamily: fonts.body,
    fontSize: 21,
    lineHeight: 30,
    color: colors.text,
  },
  dialogueLineBold: {
    fontFamily: fonts.bodyBold,
    fontSize: 21,
    lineHeight: 30,
    color: colors.text,
  },
  dialogueSpeaker: {
    fontFamily: fonts.bodyBold,
    fontSize: 21,
    color: colors.accent,
  },
  prayerBlock: {
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    gap: spacing.sm,
  },
  prayerPhrase: {
    fontFamily: fonts.body,
    fontSize: 21,
    lineHeight: 31,
    color: colors.text,
  },
  prayerActionCue: {
    fontFamily: fonts.italic,
    fontSize: 19,
    lineHeight: 27,
    color: colors.rubric,
    textAlign: 'center',
  },
  readingBlock: {
    gap: spacing.sm,
  },
  readingCitation: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 16,
    color: colors.gold,
  },
  readingIntro: {
    fontFamily: fonts.italicMedium,
    fontSize: 19,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  listBlock: {
    gap: spacing.sm,
  },
  listItemRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  listBullet: {
    fontFamily: fonts.bodyBold,
    fontSize: 21,
    lineHeight: 30,
    color: colors.gold,
    width: 34,
  },
  listItemText: {
    flex: 1,
    fontFamily: fonts.body,
    fontSize: 21,
    lineHeight: 30,
    color: colors.text,
  },
  noteBlock: {
    backgroundColor: '#F3ECE1',
    borderRadius: radii.sm,
    padding: spacing.sm,
  },
  noteText: {
    fontFamily: fonts.italic,
    fontSize: 16,
    color: colors.textMuted,
    lineHeight: 22,
  },
  creditText: {
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 20,
    color: colors.textMuted,
  },
  creditLink: {
    fontFamily: fonts.italic,
    fontSize: 14,
    lineHeight: 20,
    color: '#2255CC',
  },
});
