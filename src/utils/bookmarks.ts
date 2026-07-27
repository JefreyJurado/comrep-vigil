import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Bookmark {
  sectionId: string;
  blockIndex: number;
}

const BOOKMARKS_KEY = 'comrep-vigil:bookmarks';

/** Stable key for a bookmark, used for Set membership checks while rendering. */
export function bookmarkKey(sectionId: string, blockIndex: number): string {
  return `${sectionId}:${blockIndex}`;
}

export async function loadBookmarks(): Promise<Bookmark[]> {
  try {
    const raw = await AsyncStorage.getItem(BOOKMARKS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function saveBookmarks(bookmarks: Bookmark[]): Promise<void> {
  try {
    await AsyncStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  } catch {
    // non-fatal
  }
}

/** Adds the bookmark if absent, removes it if present. Returns the new full list. */
export async function toggleBookmark(sectionId: string, blockIndex: number): Promise<Bookmark[]> {
  const bookmarks = await loadBookmarks();
  const exists = bookmarks.some((b) => b.sectionId === sectionId && b.blockIndex === blockIndex);
  const next = exists
    ? bookmarks.filter((b) => !(b.sectionId === sectionId && b.blockIndex === blockIndex))
    : [...bookmarks, { sectionId, blockIndex }];
  await saveBookmarks(next);
  return next;
}
