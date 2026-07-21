import { VigilPart } from '../types/content';

export const openingPart: VigilPart = {
  id: 'opening',
  title: 'Opening',
  sections: [
    {
      id: 'exposition',
      title: 'Exposition',
      blocks: [
        { type: 'rubric', text: 'Please all kneel', posture: 'kneel' },
        {
          type: 'bilingual',
          latin: [
            'O Salutaris hostia',
            'Quae caeli pandis ostium',
            'Bella premunt hostilia;',
            'Da robur, fer auxilium.',
            '',
            'Uni trinoque Domino',
            'Sit sempiterna gloria;',
            'Qui vitam sine termino,',
            'Nobis donet in patria.',
            'Amen.',
          ],
          english: [
            'O Saving Victim opening wide,',
            'The gate of heav’n to all below!',
            'Our foes press on from every side;',
            'Your aid supply, Your strength bestow.',
            '',
            'To Your great Name be endless praise.',
            'Immortal Godhead, One in Three;',
            'O grant us endless length of days',
            'In our true native land to be.',
            'Amen.',
          ],
        },
      ],
    },
    {
      id: 'salutation',
      title: 'Salutation',
      blocks: [
        {
          type: 'dialogue',
          lines: [
            { speaker: 'L', text: 'In the name of the (†) Father, and of the Son, and of the Holy Spirit.' },
            { speaker: 'R', text: 'Amen.' },
          ],
        },
        {
          type: 'prayer',
          speaker: 'A',
          phrases: [
            'O Most Holy Trinity: Father, Son, and Holy Spirit, I adore Thee profoundly.',
            'I offer Thee the most precious Body, Blood, Soul, and Divinity of our Lord Jesus Christ,',
            'truly present in all the tabernacles throughout the world,',
            'in reparation for all the outrages, sacrileges, and indifferences by which He is offended.',
            'By the infinite merits of the Sacred Heart of Jesus and the Immaculate Heart of Mary,',
            'I beg for the conversion of poor sinners.',
            'Amen.',
          ],
        },
      ],
    },
  ],
};
