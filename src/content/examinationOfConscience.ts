export interface ExaminationSection {
  title: string;
  questions: string[];
}

/**
 * Original wording, not copied from any published examination of conscience —
 * organized around the traditional Ten Commandments + Precepts of the Church
 * structure, matching the tone of the existing confession guide content.
 */
export const examinationOfConscience: ExaminationSection[] = [
  {
    title: '1st Commandment — Love of God above all things',
    questions: [
      'Have you doubted or denied the existence of God, or put your trust in something other than Him?',
      'Have you engaged in superstition, fortune-telling, horoscopes, or occult practices?',
      'Have you neglected daily prayer, or gone through entire days without a thought of God?',
      'Have you despaired of God’s mercy, or presumed on it by delaying conversion?',
      'Have you put more trust in money, comfort, or success than in God?',
    ],
  },
  {
    title: '2nd Commandment — Reverence for God’s name',
    questions: [
      'Have you used God’s name, or the name of Jesus, carelessly or in anger?',
      'Have you sworn a false oath, or broken a promise made in God’s name?',
      'Have you spoken irreverently about the Church, the saints, or sacred things?',
      'Have you cursed, or wished evil upon another person or yourself?',
    ],
  },
  {
    title: '3rd Commandment — Keeping the Lord’s Day holy',
    questions: [
      'Have you missed Mass on a Sunday without a serious reason?',
      'Have you been distracted, careless, or irreverent during Mass?',
      'Have you treated Sunday as an ordinary workday, without rest or time for God and family?',
      'Have you neglected prayer or spiritual reading during the week?',
    ],
  },
  {
    title: '4th Commandment — Honoring father, mother, and legitimate authority',
    questions: [
      'Have you been disrespectful, disobedient, or unkind to your parents or those who care for you?',
      'Have you neglected the needs of your family — material, emotional, or spiritual?',
      'As a parent or guardian, have you failed to guide, correct, or provide for those in your care?',
      'Have you shown contempt for legitimate civil or Church authority?',
    ],
  },
  {
    title: '5th Commandment — Respect for life',
    questions: [
      'Have you harbored hatred, held a grudge, or wished harm on someone?',
      'Have you been physically or verbally abusive, or provoked others to anger?',
      'Have you neglected your own health through excess, substance abuse, or self-harm?',
      'Have you supported, encouraged, or stayed silent about abortion, euthanasia, or other offenses against life?',
      'Have you driven recklessly or put others at risk through carelessness?',
    ],
  },
  {
    title: '6th and 9th Commandments — Chastity and purity of heart',
    questions: [
      'Have you been unfaithful in thought, word, or action to your spouse or to your vocation?',
      'Have you viewed pornography, or entertained impure thoughts and desires?',
      'Have you engaged in sexual activity outside the bond of marriage?',
      'Have you dressed or acted in a way meant to provoke impure thoughts in others?',
      'Have you used contraception, or closed yourself off from the gift of life within marriage?',
    ],
  },
  {
    title: '7th and 10th Commandments — Justice, honesty, and contentment',
    questions: [
      'Have you taken, damaged, or kept something that did not belong to you?',
      'Have you cheated in your work, studies, or finances, or failed to repay a debt?',
      'Have you envied what belongs to others, or been consumed by the desire for more?',
      'Have you been greedy, wasteful, or careless with what God has given you?',
      'Have you failed to help those in need when you were able to?',
    ],
  },
  {
    title: '8th Commandment — Truthfulness',
    questions: [
      'Have you lied, exaggerated, or deceived others?',
      'Have you gossiped, spoken ill of others, or damaged someone’s reputation?',
      'Have you judged others harshly or without knowing the full truth?',
      'Have you broken a confidence entrusted to you?',
    ],
  },
  {
    title: 'Precepts of the Church',
    questions: [
      'Have you missed Mass on a holy day of obligation, such as Christmas or the Solemnity of Mary, Mother of God?',
      'Has it been more than a year since your last confession?',
      'Have you avoided or delayed confession out of embarrassment or fear, rather than trusting in God’s mercy?',
      'Have you neglected to receive Holy Communion during the Easter season (your “Easter duty”)?',
      'Have you received Communion while aware of unconfessed mortal sin?',
      'Have you failed to observe the Church’s days of fasting and abstinence, such as Ash Wednesday and Good Friday, or eaten meat on Fridays during Lent without a valid reason?',
      'Have you neglected to support your parish or the Church with your time, talent, or treasure, according to your means?',
    ],
  },
];
