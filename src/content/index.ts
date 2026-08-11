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
  sections: LocalizedSection[];
}

// Populated incrementally, part-by-part, as translations are drafted and
// reviewed (see src/content/es/*.ts, src/content/fil/*.ts). Empty until that
// content-translation work lands — until then getVigilParts falls back to
// English for every section, same as if no translation existed yet.
const localePartsByLanguage: Record<Exclude<Language, 'en'>, LocalizedPart[]> = {
  es: [],
  fil: [],
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

export const flatSteps: FlatStep[] = vigilParts.flatMap((part) =>
  part.sections.map((section) => ({
    index: 0, // filled below
    partId: part.id,
    partTitle: part.shortTitle ?? part.title,
    section,
  }))
);
flatSteps.forEach((step, i) => {
  step.index = i;
});

export function findStepIndex(sectionId: string): number {
  return flatSteps.findIndex((s) => s.section.id === sectionId);
}
