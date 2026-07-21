import { VigilPart, VigilSection } from '../types/content';
import { introPart } from './intro';
import { openingPart } from './opening';
import { rosaryPart } from './rosary';
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
  selfOfferingPart,
  nineOfficesPart,
  benedictionPart,
  saturdayOfficePart,
  consecrationPart,
  confessionGuidePart,
  devotionalListsPart,
  sevenSorrowsPart,
];

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
