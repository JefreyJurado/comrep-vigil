import type { Bookmark } from './bookmarks';
import { flatSteps, findStepIndex } from '../content';

export interface BookmarkGroup {
  sectionId: string;
  stepIndex: number;
  kicker?: string;
  title: string;
  blockIndices: number[];
}

/** Groups bookmarks by section and orders both the groups and each group's
 * blocks the same way they appear in the vigil, so revisiting favorites
 * reads top-to-bottom the way the vigil itself flows. */
export function groupBookmarks(bookmarks: Bookmark[]): BookmarkGroup[] {
  const bySection = new Map<string, number[]>();
  for (const b of bookmarks) {
    const arr = bySection.get(b.sectionId) ?? [];
    arr.push(b.blockIndex);
    bySection.set(b.sectionId, arr);
  }

  const groups: BookmarkGroup[] = [];
  for (const [sectionId, blockIndices] of bySection) {
    const stepIndex = findStepIndex(sectionId);
    if (stepIndex < 0) continue;
    const { section } = flatSteps[stepIndex];
    groups.push({
      sectionId,
      stepIndex,
      kicker: section.kicker,
      title: section.title,
      blockIndices: [...blockIndices].sort((a, b) => a - b),
    });
  }

  return groups.sort((a, b) => a.stepIndex - b.stepIndex);
}
