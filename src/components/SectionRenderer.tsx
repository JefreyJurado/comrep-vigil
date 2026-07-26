import { useMemo } from 'react';
import { Pressable, StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ContentBlock, DialogueLine, VigilSection } from '../types/content';
import type { RootStackParamList } from '../navigation/types';
import { fonts, radii, spacing, ThemeColors } from '../theme/theme';
import { useTheme } from '../theme/ThemeContext';

// Missal convention: the congregation's response is set in bold so it's easy
// to pick out at a glance. Everyone else — leader/reader prompts (L,
// Presider, Lector) and alternating psalm-verse speakers (Side 1 / Side 2,
// which read plain verses, not a response) — stays regular weight.
const BOLD_TEXT_SPEAKERS = new Set(['R']);

type Styles = ReturnType<typeof createStyles>;

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

function renderSegments(segments: QuoteSegment[], quoteStyle: StyleProp<TextStyle>) {
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
  quoteStyle: StyleProp<TextStyle>;
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
  quoteStyle: StyleProp<TextStyle>;
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

function DialogueLineText({ line, keyId, styles }: { line: DialogueLine; keyId: string | number; styles: Styles }) {
  const boldText = BOLD_TEXT_SPEAKERS.has(line.speaker);
  const lineStyle = boldText ? styles.dialogueLineBold : styles.dialogueLine;
  const [segments] = segmentQuotesAcrossPhrases([line.text]);
  return (
    <View key={keyId}>
      {line.latin ? <Text style={styles.dialogueLatinLine}>{line.latin}</Text> : null}
      <Text style={lineStyle}>
        <Text style={styles.dialogueSpeaker}>{line.speaker}: </Text>
        {renderSegments(segments, styles.inlineQuote)}
      </Text>
    </View>
  );
}

function CreditText({
  text,
  linkText,
  bold,
  styles,
}: {
  text: string;
  linkText?: string;
  bold?: boolean;
  styles: Styles;
}) {
  const textStyle = bold ? styles.creditTextBold : styles.creditText;
  if (linkText && text.includes(linkText)) {
    const idx = text.indexOf(linkText);
    const before = text.slice(0, idx);
    const after = text.slice(idx + linkText.length);
    return (
      <Text style={textStyle}>
        {before}
        <Text style={styles.creditLink}>{linkText}</Text>
        {after}
      </Text>
    );
  }
  return <Text style={textStyle}>{text}</Text>;
}

function HymnCueBlock({ styles, colors }: { styles: Styles; colors: ThemeColors }) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.hymnCueWrap}>
      <Pressable
        style={styles.hymnCue}
        onPress={() => navigation.navigate('Hymn')}
        hitSlop={8}
        accessibilityRole="button"
        accessibilityLabel="Hymn. Tap to view lyrics."
      >
        <Ionicons name="musical-notes-outline" size={15} color={colors.textMuted} />
        <Text style={styles.hymnCueText}>Hymn</Text>
      </Pressable>
      <Text style={styles.hymnCueHint}>Tap “Hymn” to view the lyrics.</Text>
    </View>
  );
}

function Block({
  block,
  styles,
  colors,
  intention,
}: {
  block: ContentBlock;
  styles: Styles;
  colors: ThemeColors;
  intention: string | null;
}) {
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
      return <QuoteAwareText text={block.text} style={styles.paragraph} quoteStyle={styles.inlineQuote} />;

    case 'hymnCue':
      return <HymnCueBlock styles={styles} colors={colors} />;

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
            <DialogueLineText key={i} keyId={i} line={line} styles={styles} />
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
            const latinPhrase = block.latinPhrases?.[i];
            return (
              <View key={i}>
                {latinPhrase ? <Text style={styles.prayerLatinPhrase}>{latinPhrase}</Text> : null}
                {isActionCue ? (
                  <Text style={styles.prayerActionCue}>{phrase}</Text>
                ) : (
                  <QuoteAwareText text={phrase} style={styles.prayerPhrase} quoteStyle={styles.inlineQuote} />
                )}
              </View>
            );
          })}
        </View>
      );

    case 'reading':
      return (
        <View style={styles.readingBlock}>
          <Text style={styles.readingCitation}>{block.citation}</Text>
          <Text style={styles.readingIntro}>{block.introduction}</Text>
          <QuoteAwarePhrases phrases={block.phrases} style={styles.paragraph} quoteStyle={styles.inlineQuote} />
          {block.closing ? (
            <View style={styles.dialogueBlock}>
              <DialogueLineText keyId="leader" line={{ speaker: 'L', text: block.closing.leader }} styles={styles} />
              <DialogueLineText keyId="response" line={{ speaker: 'R', text: block.closing.response }} styles={styles} />
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
              <QuoteAwareText text={item} style={styles.listItemText} quoteStyle={styles.inlineQuote} />
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
      return <CreditText text={block.text} linkText={block.linkText} bold={block.bold} styles={styles} />;

    case 'intention':
      if (!intention) return null;
      return (
        <View style={styles.intentionBlock}>
          <Text style={styles.intentionLabel}>MY INTENTION TONIGHT</Text>
          <Text style={styles.intentionText}>{intention}</Text>
        </View>
      );

    default:
      return null;
  }
}

export function SectionRenderer({
  section,
  scale = 1,
  intention = null,
}: {
  section: VigilSection;
  scale?: number;
  /** The worshipper's own saved intention for tonight, rendered wherever the
   * section has an `intention` content block. Null when none is saved. */
  intention?: string | null;
}) {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(scale, colors), [scale, colors]);

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
          <Block key={i} block={block} styles={styles} colors={colors} intention={intention} />
        ))}
      </View>
    </View>
  );
}

/** Scales font size/line height only — spacing, colors, and borders stay fixed regardless of text-size preference. */
function f(px: number, scale: number): number {
  return Math.round(px * scale);
}

function createStyles(scale: number, colors: ThemeColors) {
  return StyleSheet.create({
    kicker: {
      fontFamily: fonts.displaySemiBold,
      fontSize: f(14, scale),
      letterSpacing: 2,
      color: colors.gold,
      marginBottom: spacing.xs,
    },
    title: {
      // The section's own name (e.g. "Worshipper") — the largest heading on
      // the screen, clearly bigger than the sub-labels beneath it.
      fontFamily: fonts.display,
      fontSize: f(33, scale),
      color: colors.accent,
      marginBottom: spacing.sm,
    },
    titleSmall: {
      // For reference-style pages (Acknowledgements) that don't need a full
      // devotional-heading treatment — but still bigger than the `label`
      // sub-headings (22px) beneath it, so the hierarchy reads correctly.
      fontFamily: fonts.displaySemiBold,
      fontSize: f(26, scale),
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
      fontSize: f(20, scale),
      color: colors.text,
      lineHeight: f(28, scale),
    },
    epigraphCitation: {
      fontFamily: fonts.italic,
      fontSize: f(14, scale),
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
      fontSize: f(22, scale),
      letterSpacing: 0.8,
      color: colors.gold,
      marginTop: spacing.md,
    },
    rubric: {
      fontFamily: fonts.italic,
      fontSize: f(19, scale),
      color: colors.rubric,
      textAlign: 'center',
    },
    paragraph: {
      fontFamily: fonts.body,
      fontSize: f(21, scale),
      lineHeight: f(31, scale),
      color: colors.text,
    },
    inlineQuote: {
      fontFamily: fonts.italic,
    },
    hymnCueWrap: {
      alignSelf: 'flex-start',
      gap: spacing.xs,
    },
    hymnCue: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.xs,
      alignSelf: 'flex-start',
      backgroundColor: colors.border,
      borderRadius: radii.sm,
      paddingVertical: spacing.xs,
      paddingHorizontal: spacing.sm,
    },
    hymnCueText: {
      fontFamily: fonts.italic,
      fontSize: f(16, scale),
      color: colors.textMuted,
    },
    hymnCueHint: {
      fontFamily: fonts.italic,
      fontSize: f(13, scale),
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
      // Kept smaller than the app's usual body copy so long English lines are
      // less likely to wrap and drift out of row-alignment with their shorter
      // Latin counterpart in the column beside them.
      fontFamily: fonts.body,
      fontSize: f(15, scale),
      lineHeight: f(21, scale),
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
      fontSize: f(21, scale),
      lineHeight: f(30, scale),
      color: colors.text,
    },
    dialogueLineBold: {
      fontFamily: fonts.bodyBold,
      fontSize: f(21, scale),
      lineHeight: f(30, scale),
      color: colors.text,
    },
    dialogueSpeaker: {
      fontFamily: fonts.bodyBold,
      fontSize: f(21, scale),
      color: colors.accent,
    },
    dialogueLatinLine: {
      fontFamily: fonts.italic,
      fontSize: f(19, scale),
      lineHeight: f(27, scale),
      color: colors.textMuted,
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
      fontSize: f(21, scale),
      lineHeight: f(31, scale),
      color: colors.text,
    },
    prayerActionCue: {
      fontFamily: fonts.italic,
      fontSize: f(19, scale),
      lineHeight: f(27, scale),
      color: colors.rubric,
      textAlign: 'center',
    },
    prayerLatinPhrase: {
      fontFamily: fonts.italic,
      fontSize: f(19, scale),
      lineHeight: f(28, scale),
      color: colors.textMuted,
    },
    readingBlock: {
      gap: spacing.sm,
    },
    readingCitation: {
      fontFamily: fonts.bodySemiBold,
      fontSize: f(16, scale),
      color: colors.gold,
    },
    readingIntro: {
      fontFamily: fonts.italicMedium,
      fontSize: f(19, scale),
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
      fontSize: f(21, scale),
      lineHeight: f(30, scale),
      color: colors.gold,
      width: 34,
    },
    listItemText: {
      flex: 1,
      fontFamily: fonts.body,
      fontSize: f(21, scale),
      lineHeight: f(30, scale),
      color: colors.text,
    },
    noteBlock: {
      backgroundColor: colors.noteBackground,
      borderRadius: radii.sm,
      padding: spacing.sm,
    },
    noteText: {
      fontFamily: fonts.italic,
      fontSize: f(16, scale),
      color: colors.textMuted,
      lineHeight: f(22, scale),
    },
    intentionBlock: {
      borderWidth: 1,
      borderColor: colors.gold,
      borderRadius: radii.md,
      padding: spacing.md,
      gap: spacing.xs,
      alignItems: 'center',
    },
    intentionLabel: {
      fontFamily: fonts.displaySemiBold,
      fontSize: f(13, scale),
      letterSpacing: 1.4,
      color: colors.gold,
    },
    intentionText: {
      fontFamily: fonts.italicMedium,
      fontSize: f(18, scale),
      lineHeight: f(25, scale),
      color: colors.text,
      textAlign: 'center',
    },
    creditText: {
      fontFamily: fonts.body,
      fontSize: f(14, scale),
      lineHeight: f(20, scale),
      color: colors.textMuted,
    },
    creditTextBold: {
      fontFamily: fonts.bodyBold,
      fontSize: f(14, scale),
      lineHeight: f(20, scale),
      color: colors.textMuted,
    },
    creditLink: {
      fontFamily: fonts.italic,
      fontSize: f(14, scale),
      lineHeight: f(20, scale),
      color: colors.creditLink,
    },
  });
}
