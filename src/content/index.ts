import { VigilPart, VigilSection } from '../types/content';
import { Language } from '../i18n/languages';
import { introPart } from './intro';
import { openingPart } from './opening';
import { rosaryPart } from './rosary';
import { praiseAndWorshipPart } from './praiseAndWorship';
import { selfOfferingPart } from './selfOffering';
import { nineOfficesPart } from './nineOffices';
import { benedictionPart } from './benediction';
import { saturdayOfficePart } from './saturdayOffice';
import { consecrationPart } from './consecration';
import { confessionGuidePart } from './confessionGuide';
import { devotionalListsPart } from './devotionalLists';
import { sevenSorrowsPart } from './sevenSorrows';
import { rosaryPart_es } from './es/rosary';
import { benedictionPart_es } from './es/benediction';
import { rosaryPart_fil } from './fil/rosary';
import { benedictionPart_fil } from './fil/benediction';

/** Full guided vigil, in the order the booklet is prayed. */
export const vigilParts: VigilPart[] = [
  introPart,
  openingPart,
  rosaryPart,
  praiseAndWorshipPart,
  selfOfferingPart,
  nineOfficesPart,
  benedictionPart,
  saturdayOfficePart,
  consecrationPart,
  confessionGuidePart,
  devotionalListsPart,
  sevenSorrowsPart,
];

/** One translated section, gated by owner review before it can appear in the app. */
export interface LocalizedSection {
  reviewed: boolean;
  section: VigilSection;
}

/** A locale's translated sections for one vigil part, matched to the English original by id. */
export interface LocalizedPart {
  id: string;
  /** Translated part heading. Applied unconditionally (not gated by section
   * review) since it's a short label, not liturgical content. */
  title?: string;
  shortTitle?: string;
  sections: LocalizedSection[];
}

// Populated incrementally, part-by-part, as translations are drafted and
// reviewed (see src/content/es/*.ts, src/content/fil/*.ts). Each entry's
// sections are only used once their `reviewed` flag is true — until then
// getVigilParts falls back to English, same as if no translation existed.
const localePartsByLanguage: Record<Exclude<Language, 'en'>, LocalizedPart[]> = {
  es: [rosaryPart_es, benedictionPart_es],
  fil: [rosaryPart_fil, benedictionPart_fil],
};

/**
 * Returns vigilParts with any reviewed translations for `language` swapped
 * in. English (`vigilParts`) is always the structural source of truth for
 * ordering and ids — a section only ever renders fully in one language or
 * fully in English, never a mix within a single section.
 */
export function getVigilParts(language: Language): VigilPart[] {
  if (language === 'en') return vigilParts;
  const localeParts = localePartsByLanguage[language];
  return vigilParts.map((basePart) => {
    const localePart = localeParts.find((p) => p.id === basePart.id);
    if (!localePart) return basePart;
    return {
      ...basePart,
      title: localePart.title ?? basePart.title,
      shortTitle: localePart.shortTitle ?? basePart.shortTitle,
      sections: basePart.sections.map((baseSection) => {
        const entry = localePart.sections.find((s) => s.section.id === baseSection.id);
        return entry?.reviewed ? entry.section : baseSection;
      }),
    };
  });
}

export interface FlatStep {
  /** index within the flattened walkthrough */
  index: number;
  partId: string;
  partTitle: string;
  section: VigilSection;
}

function buildFlatSteps(parts: VigilPart[]): FlatStep[] {
  const steps = parts.flatMap((part) =>
    part.sections.map((section) => ({
      index: 0, // filled below
      partId: part.id,
      partTitle: part.shortTitle ?? part.title,
      section,
    }))
  );
  steps.forEach((step, i) => {
    step.index = i;
  });
  return steps;
}

export const flatSteps: FlatStep[] = buildFlatSteps(vigilParts);

// Section order, count, and ids are identical across languages (getVigilParts
// only ever swaps section content, never reorders or adds/removes sections),
// so an index found via the English flatSteps is always valid for any
// language's flatSteps too.
const flatStepsCache = new Map<Language, FlatStep[]>([['en', flatSteps]]);

export function getFlatSteps(language: Language): FlatStep[] {
  const cached = flatStepsCache.get(language);
  if (cached) return cached;
  const steps = buildFlatSteps(getVigilParts(language));
  flatStepsCache.set(language, steps);
  return steps;
}

export function findStepIndex(sectionId: string): number {
  return flatSteps.findIndex((s) => s.section.id === sectionId);
}
