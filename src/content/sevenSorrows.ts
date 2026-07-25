import { ContentBlock, VigilPart } from '../types/content';

const refrain = 'Mary, full of mercy, remind our hearts of the suffering of Jesus during His passion.';

interface SorrowSpec {
  number: number;
  title: string;
  text: string;
}

const sorrows: SorrowSpec[] = [
  {
    number: 1,
    title: 'The Prophecy of Simeon',
    text: 'I compassionate thee, O Sorrowful Mother Mary, on account of the grief suffered by thy tender heart at the prophecy of the aged Holy Simeon. O dearest Mother, through this thy afflicted heart implore for me the virtue of Humility and the gift of Fear of God.',
  },
  {
    number: 2,
    title: 'The Flight into Egypt',
    text: 'I compassionate thee, O Sorrowful Mother Mary, on account of those distressing fears which thy affectionate heart endured on the flight to Egypt and during thy sojourn there. O dearest Mother, through this, thy anxious heart, implore for me the virtue of Generosity, particularly for the poor, and the gift of Piety.',
  },
  {
    number: 3,
    title: 'The Loss of the Child Jesus',
    text: 'I compassionate thee, O Sorrowful Mother Mary, on account of that anxiety which thy worried heart endured in the loss of thy beloved Child Jesus. O dearest Mother, through this thy exceedingly troubled heart, implore for me the virtue of Chastity and the gift of Knowledge.',
  },
  {
    number: 4,
    title: 'The Meeting of Jesus and Mary on the Way to Calvary',
    text: 'I compassionate thee, O Sorrowful Mother Mary, on account of that horror with which thy mother’s heart was stricken when meeting Jesus, bearing the cross. O dearest Mother, through this thy exceedingly oppressed heart, implore for me the virtue of Patience and the gift of Fortitude.',
  },
  {
    number: 5,
    title: 'The Crucifixion',
    text: 'I compassionate thee, O Sorrowful Mother Mary, on account of that martyrdom which tortured thy magnanimous heart at the death and agony of Jesus. O dearest Mother, through this thy martyred heart, implore for me the virtue of Temperance and the gift of Counsel.',
  },
  {
    number: 6,
    title: 'The Side of Jesus Is Pierced by the Lance',
    text: 'I compassionate thee, O Sorrowful Mother Mary, on account of the anguish inflicted upon thy tender heart by the thrust of the lance that opened the side of Jesus and pierced His most adorable Heart. O dearest Mother, through this vicarious transfixion of thy own heart, implore for me the virtue of brotherly love and the gift of Understanding.',
  },
  {
    number: 7,
    title: 'The Burial of Jesus',
    text: 'I compassionate thee, O sorrowful Mother Mary, on account of that agony of soul which racked thy most loving heart at the burial of Jesus. O dearest Mother, through this extreme torment that filled thy burdened heart, implore for me the virtue of Zeal and the gift of Wisdom.',
  },
];

export const sevenSorrowsPart: VigilPart = {
  id: 'seven-sorrows',
  title: 'The Seven Sorrows of Mary',
  sections: [
    {
      id: 'seven-sorrows-opening',
      title: 'The Seven Sorrows of Mary',
      blocks: [
        { type: 'label', text: 'Opening Prayer' },
        {
          type: 'prayer',
          phrases: [
            'My God, I offer to You these little beads of sorrow for Your greater glory in honor of Your Holy Mother.',
            'I will meditate and share in Your sufferings.',
            'I beg for the tears that You shed in those moments to grant me and all sinners repentance for our sins.',
          ],
        },
      ],
    },
    ...sorrows.map((s): { id: string; kicker: string; title: string; blocks: ContentBlock[] } => ({
      id: `sorrow-${s.number}`,
      kicker: `${s.number}${s.number === 1 ? 'st' : s.number === 2 ? 'nd' : s.number === 3 ? 'rd' : 'th'} Sorrow`,
      title: s.title,
      blocks: [
        { type: 'prayer', phrases: [s.text] },
        { type: 'dialogue', lines: [{ speaker: 'A', text: refrain }] },
      ],
    })),
    {
      id: 'seven-sorrows-closing',
      title: 'Closing',
      blocks: [
        {
          type: 'note',
          text: 'At the end of the Seven Sorrows, pray: Our Father... Seven Hail Marys... Glory to the Father...',
        },
        { type: 'label', text: 'A Prayer of Thanksgiving' },
        {
          type: 'prayer',
          speaker: 'A',
          phrases: [
            'We thank You, Lord Jesus, for the grace of this hour kept in watching, in reparation, and in love before Your Eucharistic Heart.',
            'We thank you, Immaculate Heart of Mary, for your motherly presence beside us through this night of prayer.',
            'May the fire lit here not go out, but remain quietly burning in our hearts until we keep watch with You again.',
          ],
        },
        {
          type: 'dialogue',
          lines: [
            { speaker: 'L', text: 'Most Sacred Heart of Jesus,' },
            { speaker: 'R', text: 'Have mercy on us.' },
            { speaker: 'L', text: 'Immaculate Heart of Mary,' },
            { speaker: 'R', text: 'Pray for us.' },
          ],
        },
      ],
    },
  ],
};
