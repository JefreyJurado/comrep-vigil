function monthKeyFromIso(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function previousMonthKey(key: string): string {
  const [year, month] = key.split('-').map(Number);
  const d = new Date(year, month - 2, 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

/**
 * Number of consecutive calendar months, ending at the most recently
 * completed month, with at least one vigil completion. A gap of one or
 * more months breaks the streak — only the unbroken run counts.
 */
export function computeStreak(completionDates: string[]): number {
  const monthKeys = Array.from(new Set(completionDates.map(monthKeyFromIso))).sort().reverse();
  if (monthKeys.length === 0) return 0;

  let streak = 1;
  for (let i = 1; i < monthKeys.length; i++) {
    if (monthKeys[i] === previousMonthKey(monthKeys[i - 1])) streak++;
    else break;
  }
  return streak;
}
