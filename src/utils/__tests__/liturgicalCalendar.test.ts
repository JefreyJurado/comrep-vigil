import { getLiturgicalDayLabel } from '../liturgicalCalendar';

// Expected labels below are cross-checked against the real 2026 Roman Rite
// calendar (Ash Wednesday Feb 18, Easter Apr 5, Pentecost May 24, First
// Sunday of Advent Nov 29), not just the implementation's own output.
describe('getLiturgicalDayLabel', () => {
  it('reads Christmas Season before the Baptism of the Lord', () => {
    expect(getLiturgicalDayLabel(new Date(2026, 0, 1))).toBe('Christmas Season');
    expect(getLiturgicalDayLabel(new Date(2026, 0, 4))).toBe('Christmas Season');
    expect(getLiturgicalDayLabel(new Date(2026, 0, 6))).toBe('Christmas Season');
  });

  it('identifies the Baptism of the Lord', () => {
    expect(getLiturgicalDayLabel(new Date(2026, 0, 11))).toBe('The Baptism of the Lord');
  });

  it('counts Ordinary Time forward from the Monday after the Baptism', () => {
    expect(getLiturgicalDayLabel(new Date(2026, 0, 19))).toBe('Monday of the Second Week in Ordinary Time');
  });

  it('identifies Ash Wednesday and the days after it', () => {
    expect(getLiturgicalDayLabel(new Date(2026, 1, 18))).toBe('Ash Wednesday');
    expect(getLiturgicalDayLabel(new Date(2026, 1, 19))).toBe('Thursday after Ash Wednesday');
  });

  it('counts the weeks of Lent', () => {
    expect(getLiturgicalDayLabel(new Date(2026, 1, 22))).toBe('First Sunday of Lent');
    expect(getLiturgicalDayLabel(new Date(2026, 2, 1))).toBe('Second Sunday of Lent');
  });

  it('identifies Holy Week', () => {
    expect(getLiturgicalDayLabel(new Date(2026, 2, 29))).toBe('Palm Sunday of the Passion of the Lord');
    expect(getLiturgicalDayLabel(new Date(2026, 3, 2))).toBe('Holy Thursday');
    expect(getLiturgicalDayLabel(new Date(2026, 3, 3))).toBe('Good Friday');
    expect(getLiturgicalDayLabel(new Date(2026, 3, 4))).toBe('Holy Saturday');
  });

  it('identifies Easter Sunday and counts the Easter season', () => {
    expect(getLiturgicalDayLabel(new Date(2026, 3, 5))).toBe('Easter Sunday');
    expect(getLiturgicalDayLabel(new Date(2026, 3, 12))).toBe('Second Sunday of Easter');
  });

  it('identifies Pentecost and resumes Ordinary Time the next day', () => {
    expect(getLiturgicalDayLabel(new Date(2026, 4, 24))).toBe('Pentecost Sunday');
    expect(getLiturgicalDayLabel(new Date(2026, 4, 25))).toBe('Monday of the Eighth Week in Ordinary Time');
  });

  it('counts Ordinary Time backward so Christ the King is always the 34th Sunday', () => {
    expect(getLiturgicalDayLabel(new Date(2026, 10, 22))).toBe('Thirty-fourth Sunday in Ordinary Time');
  });

  it('identifies Advent and Christmas', () => {
    expect(getLiturgicalDayLabel(new Date(2026, 10, 29))).toBe('First Sunday of Advent');
    expect(getLiturgicalDayLabel(new Date(2026, 11, 24))).toBe('Thursday of the Fourth Week of Advent');
    expect(getLiturgicalDayLabel(new Date(2026, 11, 25))).toBe('The Nativity of the Lord');
    expect(getLiturgicalDayLabel(new Date(2026, 11, 26))).toBe('Christmas Season');
  });
});
