import { msUntilNextMidnight } from '../dateTiming';

describe('msUntilNextMidnight', () => {
  it('returns 1 minute for 11:59pm', () => {
    expect(msUntilNextMidnight(new Date(2026, 6, 26, 23, 59, 0))).toBe(60_000);
  });

  it('returns ~24 hours for just after midnight', () => {
    expect(msUntilNextMidnight(new Date(2026, 6, 26, 0, 0, 1))).toBe(86_399_000);
  });

  it('returns 12 hours for noon', () => {
    expect(msUntilNextMidnight(new Date(2026, 6, 26, 12, 0, 0))).toBe(43_200_000);
  });

  it('never returns zero or negative, even called exactly at midnight', () => {
    expect(msUntilNextMidnight(new Date(2026, 6, 26, 0, 0, 0))).toBe(86_400_000);
  });

  it('rolls over correctly across a month boundary', () => {
    expect(msUntilNextMidnight(new Date(2026, 6, 31, 23, 0, 0))).toBe(3_600_000);
  });
});
