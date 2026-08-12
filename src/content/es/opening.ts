import { LocalizedPart } from '../index';

/**
 * Spanish translation, pending owner review. The Latin hymn text is
 * unchanged; only the vernacular column and the surrounding prayer text are
 * translated, using the traditional Spanish rendering of "O Salutaris
 * Hostia" used across the Spanish-speaking Catholic world.
 */
export const openingPart_es: LocalizedPart = {
  id: 'opening',
  title: 'Apertura',
  sections: [
    {
      reviewed: false,
      section: {
        id: 'exposition',
        title: 'Exposición',
        blocks: [
          { type: 'rubric', text: 'Todos de rodillas, por favor', posture: 'kneel' },
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
              '¡Oh Salvadora Hostia,',
              'que abres la puerta del cielo!',
              'Nos oprimen guerras hostiles;',
              'danos fortaleza, préstanos auxilio.',
              '',
              'Al Señor Uno y Trino',
              'sea dada gloria sempiterna;',
              'que Él nos conceda la vida sin fin',
              'en nuestra verdadera patria.',
              'Amén.',
            ],
          },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'salutation',
        title: 'Salutación',
        blocks: [
          {
            type: 'dialogue',
            lines: [
              { speaker: 'L', text: 'En el nombre del (†) Padre, y del Hijo, y del Espíritu Santo.' },
              { speaker: 'R', text: 'Amén.' },
            ],
          },
          {
            type: 'prayer',
            speaker: 'A',
            phrases: [
              'Oh Santísima Trinidad: Padre, Hijo y Espíritu Santo, os adoro profundamente.',
              'Os ofrezco el Cuerpo, Sangre, Alma y Divinidad preciosísimos de nuestro Señor Jesucristo,',
              'verdaderamente presente en todos los sagrarios del mundo entero,',
              'en reparación por todos los ultrajes, sacrilegios e indiferencias con que Él es ofendido.',
              'Por los infinitos méritos del Sagrado Corazón de Jesús y del Inmaculado Corazón de María,',
              'os suplico la conversión de los pobres pecadores.',
              'Amén.',
            ],
          },
        ],
      },
    },
  ],
};
