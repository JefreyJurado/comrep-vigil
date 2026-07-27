import AsyncStorage from '@react-native-async-storage/async-storage';

export interface MonthlyOfficeState {
  officeNumber: number;
  /** yyyy-mm the office was chosen for */
  monthKey: string;
}

const MONTHLY_OFFICE_KEY = 'comrep-vigil:monthly-office';

export function currentMonthKey(date: Date = new Date()): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

export async function loadMonthlyOffice(): Promise<MonthlyOfficeState | null> {
  try {
    const raw = await AsyncStorage.getItem(MONTHLY_OFFICE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return typeof parsed?.officeNumber === 'number' && typeof parsed?.monthKey === 'string' ? parsed : null;
  } catch {
    return null;
  }
}

/** Chooses an office for the current calendar month, replacing any prior choice for that month. */
export async function saveMonthlyOffice(officeNumber: number): Promise<MonthlyOfficeState> {
  const state: MonthlyOfficeState = { officeNumber, monthKey: currentMonthKey() };
  try {
    await AsyncStorage.setItem(MONTHLY_OFFICE_KEY, JSON.stringify(state));
  } catch {
    // non-fatal
  }
  return state;
}

/** The saved office, but only if it was chosen for the current calendar month. */
export async function loadCurrentMonthOffice(): Promise<MonthlyOfficeState | null> {
  const state = await loadMonthlyOffice();
  return state && state.monthKey === currentMonthKey() ? state : null;
}
