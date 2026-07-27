import { groupBookmarks } from '../bookmarkGroups';
import { findStepIndex } from '../../content';

describe('groupBookmarks', () => {
  it('returns an empty array for no bookmarks', () => {
    expect(groupBookmarks([])).toEqual([]);
  });

  it('groups multiple bookmarks in the same section together', () => {
    const groups = groupBookmarks([
      { sectionId: 'office-2', blockIndex: 3 },
      { sectionId: 'office-2', blockIndex: 1 },
    ]);
    expect(groups).toHaveLength(1);
    expect(groups[0].sectionId).toBe('office-2');
    expect(groups[0].title).toBe('Lover');
  });

  it('sorts a section’s block indices ascending regardless of input order', () => {
    const groups = groupBookmarks([
      { sectionId: 'office-2', blockIndex: 5 },
      { sectionId: 'office-2', blockIndex: 0 },
      { sectionId: 'office-2', blockIndex: 2 },
    ]);
    expect(groups[0].blockIndices).toEqual([0, 2, 5]);
  });

  it('orders groups the way sections appear in the vigil, not input order', () => {
    // office-2 (Lover) comes after office-1 (Worshipper) in the vigil.
    const groups = groupBookmarks([
      { sectionId: 'office-2', blockIndex: 0 },
      { sectionId: 'office-1', blockIndex: 0 },
    ]);
    expect(groups.map((g) => g.sectionId)).toEqual(['office-1', 'office-2']);
    expect(groups[0].stepIndex).toBeLessThan(groups[1].stepIndex);
    expect(groups[0].stepIndex).toBe(findStepIndex('office-1'));
  });

  it('carries the section’s kicker and title through to the group', () => {
    const groups = groupBookmarks([{ sectionId: 'office-1', blockIndex: 0 }]);
    expect(groups[0].kicker).toBe('First Office');
    expect(groups[0].title).toBe('Worshipper');
  });

  it('silently drops a bookmark whose section id no longer resolves', () => {
    const groups = groupBookmarks([{ sectionId: 'no-such-section', blockIndex: 0 }]);
    expect(groups).toEqual([]);
  });
});
