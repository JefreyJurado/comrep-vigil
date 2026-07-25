// Roman Rite (Ordinary Form) liturgical day computed from fixed rules, not a
// feast-day database: season + week number only, no saints or transferred
// solemnities (Ascension, Corpus Christi, Trinity Sunday, Christ the King all
// simply read as their underlying Ordinary Time week).

const WEEKDAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const ONES = ['', 'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth'];
const TEENS = [
  'Tenth',
  'Eleventh',
  'Twelfth',
  'Thirteenth',
  'Fourteenth',
  'Fifteenth',
  'Sixteenth',
  'Seventeenth',
  'Eighteenth',
  'Nineteenth',
];

function ordinalWord(n: number): string {
  if (n < 10) return ONES[n];
  if (n < 20) return TEENS[n - 10];
  const tens = Math.floor(n / 10);
  const ones = n % 10;
  const tensWord = tens === 2 ? 'Twenty' : 'Thirty';
  if (ones === 0) return tens === 2 ? 'Twentieth' : 'Thirtieth';
  const onesWord = ONES[ones];
  return `${tensWord}-${onesWord.charAt(0).toLowerCase()}${onesWord.slice(1)}`;
}

function stripTime(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addDays(date: Date, n: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

/** `a` minus `b`, in whole days. */
function diffDays(a: Date, b: Date): number {
  return Math.round((a.getTime() - b.getTime()) / 86400000);
}

function isSameDay(a: Date, b: Date): boolean {
  return diffDays(a, b) === 0;
}

/** Anonymous Gregorian algorithm (Meeus/Jones/Butcher). */
function computeEasterSunday(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

/** Epiphany, transferred to the Sunday falling between Jan 2-8 (US calendar). */
function getEpiphanySunday(year: number): Date {
  for (let day = 2; day <= 8; day++) {
    const candidate = new Date(year, 0, day);
    if (candidate.getDay() === 0) return candidate;
  }
  throw new Error('unreachable: no Sunday in Jan 2-8');
}

function getBaptismOfTheLord(year: number): Date {
  const epiphany = getEpiphanySunday(year);
  if (epiphany.getDate() === 7 || epiphany.getDate() === 8) {
    return addDays(epiphany, 1);
  }
  return addDays(epiphany, 7);
}

/** The last Sunday before Christmas Day (always the 4th Sunday of Advent). */
function getFourthSundayOfAdvent(year: number): Date {
  const d = new Date(year, 11, 24);
  while (d.getDay() !== 0) d.setDate(d.getDate() - 1);
  return d;
}

function getFirstSundayOfAdvent(year: number): Date {
  return addDays(getFourthSundayOfAdvent(year), -21);
}

function formatWeekLabel(d: Date, week: number, seasonName: string, preposition: 'in' | 'of'): string {
  const ordinal = ordinalWord(week);
  if (d.getDay() === 0) {
    return `${ordinal} Sunday ${preposition} ${seasonName}`;
  }
  return `${WEEKDAY_NAMES[d.getDay()]} of the ${ordinal} Week ${preposition} ${seasonName}`;
}

/** Ordinary Time, part 1: Monday after the Baptism of the Lord through the day before Ash Wednesday. */
function formatOrdinaryTimeForward(d: Date, part1Start: Date): string {
  const daysSinceStart = diffDays(d, part1Start);
  const week = daysSinceStart < 6 ? 1 : 2 + Math.floor((daysSinceStart - 6) / 7);
  return formatWeekLabel(d, week, 'Ordinary Time', 'in');
}

/** Ordinary Time, part 2: Monday after Pentecost through the Saturday before Advent. Counted backward so the last Sunday is always the 34th. */
function formatOrdinaryTimeBackward(d: Date, christKingSunday: Date): string {
  const endOfWeek34 = addDays(christKingSunday, 6);
  const daysBeforeEnd = diffDays(endOfWeek34, d);
  const week = 34 - Math.floor(daysBeforeEnd / 7);
  return formatWeekLabel(d, week, 'Ordinary Time', 'in');
}

function formatLent(d: Date, firstSundayOfLent: Date): string {
  const week = 1 + Math.floor(diffDays(d, firstSundayOfLent) / 7);
  return formatWeekLabel(d, week, 'Lent', 'of');
}

function formatEaster(d: Date, easterSunday: Date): string {
  if (isSameDay(d, easterSunday)) return 'Easter Sunday';
  const week = 1 + Math.floor(diffDays(d, easterSunday) / 7);
  return formatWeekLabel(d, week, 'Easter', 'of');
}

function formatAdvent(d: Date, firstSundayOfAdvent: Date): string {
  const week = 1 + Math.floor(diffDays(d, firstSundayOfAdvent) / 7);
  return formatWeekLabel(d, week, 'Advent', 'of');
}

export function getLiturgicalDayLabel(date: Date = new Date()): string {
  const d = stripTime(date);
  const year = d.getFullYear();

  const baptism = getBaptismOfTheLord(year);
  const easter = computeEasterSunday(year);
  const ashWednesday = addDays(easter, -46);
  const firstSundayOfLent = addDays(ashWednesday, 4);
  const palmSunday = addDays(easter, -7);
  const holyThursday = addDays(easter, -3);
  const goodFriday = addDays(easter, -2);
  const pentecost = addDays(easter, 49);
  const firstSundayOfAdvent = getFirstSundayOfAdvent(year);
  const christKingSunday = addDays(firstSundayOfAdvent, -7);
  const christmasDay = new Date(year, 11, 25);

  if (isSameDay(d, baptism)) return 'The Baptism of the Lord';
  if (d < baptism) return 'Christmas Season';
  if (d < ashWednesday) return formatOrdinaryTimeForward(d, addDays(baptism, 1));
  if (d < firstSundayOfLent) {
    if (isSameDay(d, ashWednesday)) return 'Ash Wednesday';
    return `${WEEKDAY_NAMES[d.getDay()]} after Ash Wednesday`;
  }
  if (d < palmSunday) return formatLent(d, firstSundayOfLent);
  if (d < holyThursday) {
    if (isSameDay(d, palmSunday)) return 'Palm Sunday of the Passion of the Lord';
    return `${WEEKDAY_NAMES[d.getDay()]} of Holy Week`;
  }
  if (d < easter) {
    if (isSameDay(d, holyThursday)) return 'Holy Thursday';
    if (isSameDay(d, goodFriday)) return 'Good Friday';
    return 'Holy Saturday';
  }
  if (d <= pentecost) {
    if (isSameDay(d, pentecost)) return 'Pentecost Sunday';
    return formatEaster(d, easter);
  }
  if (d < firstSundayOfAdvent) return formatOrdinaryTimeBackward(d, christKingSunday);
  if (d < christmasDay) return formatAdvent(d, firstSundayOfAdvent);
  if (isSameDay(d, christmasDay)) return 'The Nativity of the Lord';
  return 'Christmas Season';
}
