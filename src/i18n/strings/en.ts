// Non-breaking space, built from a char code rather than typed literally so
// it can't silently get swapped back into a regular breakable space by an
// editor/tool pass.
const NBSP = String.fromCharCode(160);

export const en = {
  // Shared across screens
  'common.cancel': 'Cancel',
  'common.save': 'Save',
  'common.add': 'Add',
  'common.settings': 'Settings',

  // Screen titles (App.tsx navigator)
  'screens.contents': 'Contents',
  'screens.vigil': 'Vigil',
  'screens.settings': 'Settings',
  'screens.hymn': 'Hymn',
  'screens.calendar': 'Calendar',
  'screens.confession': 'Confession',
  'screens.intentionHistory': 'Past Intentions',
  'screens.savedIntentions': 'My Intentions',
  'screens.examination': 'Examination of Conscience',
  'screens.vigilJournal': 'Vigil Journal',

  // Home screen
  'home.title': 'Communion of Reparation',
  'home.subtitle': 'All Night Vigil Prayer Guide',
  'home.tagline': `First Friday – First Saturday Devotion in Honor of the Sacred Heart of Jesus and the Immaculate Heart${NBSP}of${NBSP}Mary`,
  'home.twoHeartsAlt': 'The Sacred Heart of Jesus and the Immaculate Heart of Mary',
  'home.iconContents': 'Contents',
  'home.iconCalendar': 'Calendar',
  'home.iconConfessionLog': 'Confession Log',
  'home.tonightIsVigil': 'Tonight is the ComRep Vigil',
  'home.nextVigil': 'Next vigil: {friday} – {saturday}',
  'home.lastConfession': 'Last confession: {date} with {priest}',
  'home.thisMonthsOffice': "This month’s Office: {name} — Choir of {choir}",
  'home.whatShouldWeCallYou': 'What should we call you?',
  'home.namePlaceholder': 'Your name',
  'home.welcomeBack': 'Welcome back, {name}',
  'home.tonightsIntention': "Tonight’s Intention",
  'home.pastIntentions': 'Past Intentions',
  'home.myIntentions': 'My Intentions',
  'home.intentionPlaceholder': 'Who or what are you praying for tonight? (optional)',
  'home.editIntention': 'Edit intention',
  'home.continueVigil': 'Continue Vigil',
  'home.pray': 'Pray',
  'home.vigilSingular': 'vigil',
  'home.vigilPlural': 'vigils',
  'home.vigilsPrayed': '{count} {word} prayed',
  'home.streakSuffix': '{streak}-month streak',
  'home.intentionSaved': 'Intention Saved',
  'home.beforeYouBeginTitle': 'Before You Begin',
  'home.notice1': 'This app is meant to be an instrument of prayer, not a distraction — please use it reverently.',
  'home.notice2': "If your parish or chapel provides a printed vigil booklet, please follow that copy instead — its wording may differ from this app.",
  'home.notice3': 'Please avoid using your phone during the Holy Mass. At other times, keep it silent and the screen dim, out of reverence for those praying beside you.',
  'home.gotIt': 'Got it',

  // Settings screen
  'settings.vigilSection': 'Vigil',
  'settings.keepScreenAwake': 'Keep Screen Awake',
  'settings.keepScreenAwakeHint': 'Prevents the screen from locking while you pray through the vigil.',
  'settings.nightMode': 'Night Mode',
  'settings.nightModeHint': 'A dimmer palette for praying in a dark chapel or bedroom.',
  'settings.language': 'Language',
  'settings.languageHint': 'Choose the language for the app and its prayers.',
  'settings.languageDisclaimer': 'Spanish and Filipino are an early first draft and have not yet been reviewed for accuracy.',
  'settings.languagePendingReview': 'Pending review',
  'settings.textSize': 'Text Size',
  'settings.textSizeHint': 'Adjusts the size of the prayer text while you pray through the vigil.',
  'settings.textSizeSmall': 'Small',
  'settings.textSizeMedium': 'Medium',
  'settings.textSizeLarge': 'Large',
  'settings.textSizeExtraLarge': 'Extra Large',
  'settings.monthlyOffice': 'Monthly Office',
  'settings.monthlyOfficeHint': "St. Margaret Mary’s traditional practice: take one office for {month}, in union with its choir of angels.",
  'settings.vigilReminder': 'Vigil Reminder',
  'settings.vigilReminderHint': 'A reminder the evening before every First Friday, when the vigil begins.',
  'settings.vigilJournalHint': 'Reflections you’ve written after finishing a vigil.',
  'settings.resetProgress': 'Reset Vigil Progress',
  'settings.resetProgressHint': 'Clears your saved place and vigil streak/history.',
  'settings.aboutSection': 'About',
  'settings.acknowledgements': 'Acknowledgements',
  'settings.acknowledgementsHint': 'Sources, credits, and copyright information.',
  'settings.sendFeedback': 'Send Feedback',
  'settings.sendFeedbackHint': 'Found a bug or have a suggestion? Let us know by email.',
  'settings.appName': 'Communion of Reparation',
  'settings.appVersion': 'All Night Vigil Prayer Guide · Version {version}',
  'settings.notificationsDisabledTitle': 'Notifications Disabled',
  'settings.notificationsDisabledMessage': 'ComRep Vigil needs notification permission to remind you before each First Friday vigil. You can enable it in your device settings.',
  'settings.openSettings': 'Open Settings',
  'settings.resetProgressConfirmTitle': 'Reset Vigil Progress?',
  'settings.resetProgressConfirmMessage': 'This clears where you left off and your vigil streak/prayed history. The next time you open the vigil, it will start from the beginning.',
  'settings.reset': 'Reset',
  'settings.progressResetTitle': 'Progress Reset',
  'settings.progressResetMessage': 'Your saved place and vigil history have been cleared.',
  'settings.noEmailAppTitle': 'No Email App Found',
  'settings.noEmailAppMessage': 'Please send your feedback directly to apollojudge0@gmail.com.',
  'settings.feedbackEmailSubject': 'ComRep Vigil Feedback',

  // Calendar screen
  'calendar.nextVigil': 'Next vigil: {friday} – {saturday}',
  'calendar.calendarTab': 'Calendar',
  'calendar.listTab': 'List',
  'calendar.mySchedule': 'My Schedule',
  'calendar.noScheduleEmpty': 'Nothing on your personal schedule yet.',
  'calendar.tapDayToAdd': ' Tap a day above to add one.',
  'calendar.datePlaceholder': 'YYYY-MM-DD',
  'calendar.timePlaceholder': 'Time (optional, e.g. 7:00 PM)',
  'calendar.notePlaceholder': "What's this for?",
  'calendar.addEntry': 'Add an entry',
  'calendar.scheduleUpdated': 'Schedule Updated',
  'calendar.addedToCalendar': 'Added to Calendar',
  'calendar.prevMonth': 'Previous month',
  'calendar.nextMonth': 'Next month',
  'calendar.markDone': 'Mark as done',
  'calendar.markNotDone': 'Mark as not done',
  'calendar.editEntry': 'Edit entry',
  'calendar.removeEntry': 'Remove entry',

  // Confession screen
  'confession.examinationLink': 'Examination of Conscience',
  'confession.log': 'Confession Log',
  'confession.noneLoggedYet': 'No confessions logged yet.',
  'confession.datePlaceholder': 'YYYY-MM-DD',
  'confession.timePlaceholder': 'Time (optional, e.g. 4:00 PM)',
  'confession.priestPlaceholder': "Priest's name",
  'confession.notePlaceholder': 'Note (optional)',
  'confession.addConfession': 'Add a confession',
  'confession.editEntry': 'Edit entry',
  'confession.removeEntry': 'Remove entry',
  'confession.updated': 'Confession Updated',
  'confession.logged': 'Confession Logged',

  // Vigil screen
  'vigil.jumpToSection': 'Jump to a section',
  'vigil.previous': 'Previous',
  'vigil.next': 'Next',
  'vigil.finish': 'Finish',
  'vigil.complete': 'Vigil Complete',
  'vigil.completeMessage': 'Thank you for keeping watch with the Sacred Heart of Jesus and the Immaculate Heart of Mary.',
  'vigil.intentionOffered': 'Your intention — “{intention}” — has been offered.',
  'vigil.vigilNumber': 'Vigil #{count}',
  'vigil.streakSuffix': ' · {streak}-month streak',
  'vigil.milestone': "Milestone reached — {count} vigils prayed.",
  'vigil.reflectionPlaceholder': 'Add a reflection about tonight (optional)',
  'vigil.returnHome': 'Return Home',
  'vigil.continueToDevotions': 'Continue to the additional devotions →',

  // Examination of Conscience screen
  'examination.title': 'Examination of Conscience',
  'examination.intro': "Before going to Confession, take a quiet moment to reflect on each question below. Tap any that apply since your last confession — this is just for your own reflection and isn’t saved.",
  'examination.progress': '{checked} of {total} reflected on',
  'examination.resetChecklist': 'Reset Checklist',

  // Table of Contents screen
  'toc.searchPlaceholder': 'Search prayers and readings',
  'toc.noMatches': 'No matches for “{query}”.',

  // Intention History screen
  'intentionHistory.empty': "No intentions logged yet. Whatever you write in Tonight’s Intention is saved here once you finish a vigil.",

  // Saved Intentions screen
  'savedIntentions.hint': "Keep a running list of people or causes you pray for, and reuse one as tonight's intention.",
  'savedIntentions.addPlaceholder': 'Add an intention to pray for regularly…',
  'savedIntentions.empty': 'No saved intentions yet. Add one above to reuse it across future vigils.',
  'savedIntentions.markAnswered': 'Mark as answered',
  'savedIntentions.answeredOn': 'Answered {date}',
  'savedIntentions.useTonight': "Pray for this tonight",

  // Vigil Journal screen
  'vigilJournal.empty': 'No reflections yet. After you finish a vigil, anything you write there is saved here.',

  // Hymn screen
  'hymn.comingSoon': 'Lyrics for this hymn are coming soon.',

  // SectionRenderer (vigil content chrome, not content data itself)
  'sectionRenderer.hymnLabel': 'Hymn',
  'sectionRenderer.hymnA11y': 'Hymn. Tap to view lyrics.',
  'sectionRenderer.hymnHint': 'Tap “Hymn” to view the lyrics.',
  'sectionRenderer.myIntentionTonight': 'MY INTENTION TONIGHT',
} satisfies Record<string, string>;

export type UIStringKey = keyof typeof en;
