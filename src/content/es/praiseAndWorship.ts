import { LocalizedPart } from '../index';

/** Spanish translation, pending owner review. Original translation of the English source. */
export const praiseAndWorshipPart_es: LocalizedPart = {
  id: 'praise-and-worship',
  title: 'Alabanza y Adoración (M.A.C.T.S.)',
  shortTitle: 'Alabanza y Adoración',
  sections: [
    {
      reviewed: false,
      section: {
        id: 'praise-and-worship-intro',
        title: 'Alabanza y Adoración',
        centerContent: true,
        icon: 'hands-pray',
        blocks: [
          {
            type: 'paragraph',
            text: 'Llegamos ahora a un tiempo de alabanza y adoración ante el Santísimo Sacramento expuesto — cinco movimientos del corazón, recordados por el acrónimo M.A.C.T.S.: Mariano, Adoración, Contrición, Acción de gracias y Súplica. Que cada uno te acerque un poco más a la presencia del Señor.',
          },
          {
            type: 'rubric',
            text: 'Uno por uno, alguien de entre nosotros se adelanta y se arrodilla ante el Señor, verdaderamente presente en el Santísimo Sacramento, para expresar en voz alta — con sus propias palabras — la oración de esta parte en nombre de todos.',
            posture: 'kneel',
          },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'praise-and-worship-reflections',
        kicker: 'Alabanza y Adoración',
        title: 'M.A.C.T.S.',
        blocks: [
          { type: 'label', text: 'Mariano' },
          {
            type: 'paragraph',
            text: 'Considera el lugar de María en tu vida de fe — cómo te ha conducido hacia su Hijo, cómo te cuida como Madre, y cómo sus oraciones te han acompañado incluso cuando no se lo pediste.',
          },
          { type: 'rubric', text: 'Se canta un himno.' },
          { type: 'label', text: 'Adoración' },
          {
            type: 'paragraph',
            text: 'Considera quién está verdaderamente presente ante ti en el Santísimo Sacramento — no un símbolo, sino Cristo mismo, cuerpo, sangre, alma y divinidad. Aquel que hizo los cielos está aquí, esperándote.',
          },
          { type: 'rubric', text: 'Se canta un himno.' },
          { type: 'label', text: 'Contrición' },
          {
            type: 'paragraph',
            text: 'Considera los momentos, desde la última vez que te arrodillaste aquí, en que te alejaste del amor de Dios — en pensamiento, palabra u obra. Tráelos a la memoria no para permanecer en la culpa, sino para reconocer Su misericordia que espera acogerte.',
          },
          { type: 'rubric', text: 'Se canta un himno.' },
          { type: 'label', text: 'Acción de gracias' },
          {
            type: 'paragraph',
            text: 'Considera las bendiciones de tu vida — las que notas, y las innumerables que no notas. Considera esta misma vigilia, el don de reunirte esta noche ante el Señor.',
          },
          { type: 'rubric', text: 'Se canta un himno.' },
          { type: 'label', text: 'Súplica' },
          {
            type: 'paragraph',
            text: 'Considera las necesidades que pesan sobre tu corazón — las tuyas, y las de las personas a tu alrededor, tu parroquia y el mundo. Considera también cualquier intención que llevas contigo esta noche.',
          },
          { type: 'rubric', text: 'Se canta un himno.' },
        ],
      },
    },
  ],
};
