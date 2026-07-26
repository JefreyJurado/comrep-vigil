import { VigilPart } from '../types/content';

export const selfOfferingPart: VigilPart = {
  id: 'self-offering',
  title: 'Self-Offering before the Blessed Sacrament',
  sections: [
    {
      id: 'self-offering',
      title: 'Self-Offering before the Blessed Sacrament',
      blocks: [
        { type: 'rubric', text: 'Please all kneel', posture: 'kneel' },
        {
          type: 'prayer',
          speaker: 'A',
          phrases: [
            'My God, Father, Son, and Holy Spirit, I offer You all my prayers, actions, and sufferings of this day,',
            'in union with the merits of Jesus Christ, for Your greater glory and in fulfillment of Your most holy will.',
            'I offer them also in honor of Mother Mary most holy,',
            '(Kiss your scapular.)',
            'in honor of St. Joseph, of my guardian angel, and all of my patron saints.',
            'I offer them for the remission and atonement of my sins;',
            'for the conversion of sinners and the dying; for the perseverance of the just,',
            'according to the intentions of the Sovereign Pontiff,',
            'and to gain indulgences to help the poor souls in Purgatory.',
            'I offer them for my own spiritual advantage and that of my brethren,',
            'and of all those for whom I am bound to pray;',
            'and finally, I offer them in thanksgiving for all the graces which I have received and shall yet receive',
            'through the merits of Jesus Christ, Your Son.',
          ],
        },
        { type: 'intention' },
        {
          type: 'dialogue',
          lines: [
            { speaker: 'L', text: 'Immaculate Heart of Mary, powerful help of Christians,' },
            { speaker: 'R', text: 'Obtain for me a sincere devotion to the Heart of Jesus.' },
            { speaker: 'L', text: 'Most Precious Blood of Jesus,' },
            { speaker: 'R', text: 'Save us.' },
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
