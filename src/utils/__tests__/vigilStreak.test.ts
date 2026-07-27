import { computeStreak } from '../vigilStreak';

describe('computeStreak', () => {
  it('returns 0 for no completions', () => {
    expect(computeStreak([])).toBe(0);
  });

  it('returns 1 for a single completion', () => {
    expect(computeStreak(['2026-07-15'])).toBe(1);
  });

  it('counts multiple completions in the same month as one month', () => {
    expect(computeStreak(['2026-07-05', '2026-07-06'])).toBe(1);
  });

  it('counts three consecutive months as a streak of 3', () => {
    expect(computeStreak(['2026-05-04', '2026-06-05', '2026-07-03'])).toBe(3);
  });

  it('is unaffected by input order', () => {
    expect(computeStreak(['2026-07-03', '2026-05-04', '2026-06-05'])).toBe(3);
  });

  it('breaks the streak on a skipped month, counting only the run ending at the most recent month', () => {
    // May and July completed, June skipped — streak from July back is just 1.
    expect(computeStreak(['2026-05-04', '2026-07-03'])).toBe(1);
  });

  it('rolls over a year boundary correctly', () => {
    expect(computeStreak(['2025-12-05', '2026-01-03', '2026-02-06'])).toBe(3);
  });
});
