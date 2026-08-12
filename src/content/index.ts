import { VigilPart, VigilSection } from '../types/content';
import { Language } from '../i18n/languages';
import { introPart } from './intro';
import { openingPart } from './opening';
import { rosaryPart } from './rosary';
import { praiseAndWorshipPart } from './praiseAndWorship';
import { selfOfferingPart } from './selfOffering';
import { nineOfficesPart, officeChoirs } from './nineOffices';
import { benedictionPart } from './benediction';
import { saturdayOfficePart } from './saturdayOffice';
import { consecrationPart } from './consecration';
import { confessionGuidePart } from './confessionGuide';
import { devotionalListsPart } from './devotionalLists';
import { sevenSorrowsPart } from './sevenSorrows';
import { introPart_es } from './es/intro';
import { openingPart_es } from './es/opening';
import { rosaryPart_es } from './es/rosary';
import { praiseAndWorshipPart_es } from './es/praiseAndWorship';
import { selfOfferingPart_es } from './es/selfOffering';
import { nineOfficesPart_es, officeChoirs_es } from './es/nineOffices';
import { benedictionPart_es } from './es/benediction';
import { saturdayOfficePart_es } from './es/saturdayOffice';
import { consecrationPart_es } from './es/consecration';
import { confessionGuidePart_es } from './es/confessionGuide';
import { devotionalListsPart_es } from './es/devotionalLists';
import { sevenSorrowsPart_es } from './es/sevenSorrows';
import { introPart_fil } from './fil/intro';
import { openingPart_fil } from './fil/opening';
import { rosaryPart_fil } from './fil/rosary';
import { praiseAndWorshipPart_fil } from './fil/praiseAndWorship';
import { selfOfferingPart_fil } from './fil/selfOffering';
import { nineOfficesPart_fil, officeChoirs_fil } from './fil/nineOffices';
import { benedictionPart_fil } from './fil/benediction';
import { saturdayOfficePart_fil } from './fil/saturdayOffice';
import { consecrationPart_fil } from './fil/consecration';
import { confessionGuidePart_fil } from './fil/confessionGuide';
import { devotionalListsPart_fil } from './fil/devotionalLists';
import { sevenSorrowsPart_fil } from './fil/sevenSorrows';

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
  es: [
    introPart_es,
    openingPart_es,
    rosaryPart_es,
    praiseAndWorshipPart_es,
    selfOfferingPart_es,
    nineOfficesPart_es,
    benedictionPart_es,
    saturdayOfficePart_es,
    consecrationPart_es,
    confessionGuidePart_es,
    devotionalListsPart_es,
    sevenSorrowsPart_es,
  ],
  fil: [
    introPart_fil,
    openingPart_fil,
    rosaryPart_fil,
    praiseAndWorshipPart_fil,
    selfOfferingPart_fil,
    nineOfficesPart_fil,
    benedictionPart_fil,
    saturdayOfficePart_fil,
    consecrationPart_fil,
    confessionGuidePart_fil,
    devotionalListsPart_fil,
    sevenSorrowsPart_fil,
  ],
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

const officeChoirsByLanguage: Record<Exclude<Language, 'en'>, typeof officeChoirs> = {
  es: officeChoirs_es,
  fil: officeChoirs_fil,
};

/** Office and choir names (e.g. "Worshipper" / "Choir of Dominations") for
 * the Monthly Office picker — translated unconditionally, same as part
 * titles, since they're short labels rather than liturgical content. */
export function getOfficeChoirs(language: Language): typeof officeChoirs {
  return language === 'en' ? officeChoirs : officeChoirsByLanguage[language];
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
