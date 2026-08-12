import { LocalizedPart } from '../index';

/** Spanish translation, pending owner review. Original translation of the English source. */
export const selfOfferingPart_es: LocalizedPart = {
  id: 'self-offering',
  title: 'Ofrenda de Sí Mismo ante el Santísimo Sacramento',
  sections: [
    {
      reviewed: false,
      section: {
        id: 'self-offering',
        title: 'Ofrenda de Sí Mismo ante el Santísimo Sacramento',
        blocks: [
          { type: 'rubric', text: 'Todos de rodillas, por favor', posture: 'kneel' },
          {
            type: 'prayer',
            speaker: 'A',
            phrases: [
              'Dios mío, Padre, Hijo y Espíritu Santo, os ofrezco todas mis oraciones, acciones y sufrimientos de este día,',
              'en unión con los méritos de Jesucristo, para vuestra mayor gloria y en cumplimiento de vuestra santísima voluntad.',
              'Los ofrezco también en honor de la Madre María santísima,',
              '(Besa tu escapulario.)',
              'en honor de San José, de mi ángel de la guarda y de todos mis santos patronos.',
              'Los ofrezco por la remisión y expiación de mis pecados;',
              'por la conversión de los pecadores y de los moribundos; por la perseverancia de los justos,',
              'según las intenciones del Sumo Pontífice,',
              'y para ganar indulgencias que ayuden a las almas del Purgatorio.',
              'Los ofrezco por mi propio provecho espiritual y el de mis hermanos,',
              'y de todos aquellos por quienes estoy obligado a orar;',
              'y finalmente, los ofrezco en acción de gracias por todas las gracias que he recibido y he de recibir todavía',
              'por los méritos de Jesucristo, vuestro Hijo.',
            ],
          },
          { type: 'intention' },
          {
            type: 'dialogue',
            lines: [
              { speaker: 'L', text: 'Inmaculado Corazón de María, auxilio poderoso de los cristianos,' },
              { speaker: 'R', text: 'Alcánzame una sincera devoción al Corazón de Jesús.' },
              { speaker: 'L', text: 'Preciosísima Sangre de Jesús,' },
              { speaker: 'R', text: 'Sálvanos.' },
              { speaker: 'L', text: 'Sacratísimo Corazón de Jesús,' },
              { speaker: 'R', text: 'Ten piedad de nosotros.' },
              { speaker: 'L', text: 'Inmaculado Corazón de María,' },
              { speaker: 'R', text: 'Ruega por nosotros.' },
            ],
          },
        ],
      },
    },
  ],
};
