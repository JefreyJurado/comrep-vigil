import { LocalizedPart } from '../index';

/** Spanish translation, pending owner review. Original translation of the English source. */
const refrain = 'María, llena de misericordia, recuerda a nuestros corazones el sufrimiento de Jesús durante Su pasión.';

export const sevenSorrowsPart_es: LocalizedPart = {
  id: 'seven-sorrows',
  title: 'Los Siete Dolores de María',
  sections: [
    {
      reviewed: false,
      section: {
        id: 'seven-sorrows-opening',
        title: 'Los Siete Dolores de María',
        blocks: [
          { type: 'label', text: 'Oración Inicial' },
          {
            type: 'prayer',
            phrases: [
              'Dios mío, te ofrezco estas pequeñas cuentas de dolor para tu mayor gloria, en honor de tu Santa Madre.',
              'Meditaré y participaré en tus sufrimientos.',
              'Suplico que las lágrimas que derramaste en aquellos momentos me concedan, a mí y a todos los pecadores, el arrepentimiento por nuestros pecados.',
            ],
          },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'sorrow-1',
        kicker: 'Primer Dolor',
        title: 'La Profecía de Simeón',
        blocks: [
          {
            type: 'prayer',
            phrases: [
              'Me compadezco de ti, oh Dolorosa Madre María, por el dolor que sufrió tu tierno corazón ante la profecía del anciano y santo Simeón. Oh queridísima Madre, por este tu afligido corazón, implora para mí la virtud de la Humildad y el don del Temor de Dios.',
            ],
          },
          { type: 'dialogue', lines: [{ speaker: 'A', text: refrain }] },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'sorrow-2',
        kicker: 'Segundo Dolor',
        title: 'La Huida a Egipto',
        blocks: [
          {
            type: 'prayer',
            phrases: [
              'Me compadezco de ti, oh Dolorosa Madre María, por aquellos angustiosos temores que soportó tu amoroso corazón en la huida a Egipto y durante tu estadía allí. Oh queridísima Madre, por este tu ansioso corazón, implora para mí la virtud de la Generosidad, especialmente hacia los pobres, y el don de la Piedad.',
            ],
          },
          { type: 'dialogue', lines: [{ speaker: 'A', text: refrain }] },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'sorrow-3',
        kicker: 'Tercer Dolor',
        title: 'La Pérdida del Niño Jesús',
        blocks: [
          {
            type: 'prayer',
            phrases: [
              'Me compadezco de ti, oh Dolorosa Madre María, por aquella angustia que soportó tu preocupado corazón al perder a tu amado Niño Jesús. Oh queridísima Madre, por este tu sumamente turbado corazón, implora para mí la virtud de la Castidad y el don de la Ciencia.',
            ],
          },
          { type: 'dialogue', lines: [{ speaker: 'A', text: refrain }] },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'sorrow-4',
        kicker: 'Cuarto Dolor',
        title: 'El Encuentro de Jesús y María en el Camino al Calvario',
        blocks: [
          {
            type: 'prayer',
            phrases: [
              'Me compadezco de ti, oh Dolorosa Madre María, por aquel horror que traspasó tu corazón de madre al encontrarte con Jesús, cargando la cruz. Oh queridísima Madre, por este tu sumamente oprimido corazón, implora para mí la virtud de la Paciencia y el don de la Fortaleza.',
            ],
          },
          { type: 'dialogue', lines: [{ speaker: 'A', text: refrain }] },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'sorrow-5',
        kicker: 'Quinto Dolor',
        title: 'La Crucifixión',
        blocks: [
          {
            type: 'prayer',
            phrases: [
              'Me compadezco de ti, oh Dolorosa Madre María, por aquel martirio que atormentó tu magnánimo corazón ante la muerte y la agonía de Jesús. Oh queridísima Madre, por este tu martirizado corazón, implora para mí la virtud de la Templanza y el don del Consejo.',
            ],
          },
          { type: 'dialogue', lines: [{ speaker: 'A', text: refrain }] },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'sorrow-6',
        kicker: 'Sexto Dolor',
        title: 'El Costado de Jesús es Traspasado por la Lanza',
        blocks: [
          {
            type: 'prayer',
            phrases: [
              'Me compadezco de ti, oh Dolorosa Madre María, por la angustia infligida a tu tierno corazón por el golpe de la lanza que abrió el costado de Jesús y traspasó Su adorabilísimo Corazón. Oh queridísima Madre, por esta transfixión que tu propio corazón sufrió en unión con el Suyo, implora para mí la virtud del amor fraterno y el don del Entendimiento.',
            ],
          },
          { type: 'dialogue', lines: [{ speaker: 'A', text: refrain }] },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'sorrow-7',
        kicker: 'Séptimo Dolor',
        title: 'La Sepultura de Jesús',
        blocks: [
          {
            type: 'prayer',
            phrases: [
              'Me compadezco de ti, oh Dolorosa Madre María, por aquella agonía del alma que atormentó tu amantísimo corazón en la sepultura de Jesús. Oh queridísima Madre, por este extremo tormento que llenó tu apesadumbrado corazón, implora para mí la virtud del Celo y el don de la Sabiduría.',
            ],
          },
          { type: 'dialogue', lines: [{ speaker: 'A', text: refrain }] },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'seven-sorrows-closing',
        title: 'Cierre',
        blocks: [
          {
            type: 'note',
            text: 'Al final de los Siete Dolores, recen: Padre Nuestro... Siete Avemarías... Gloria al Padre...',
          },
          { type: 'label', text: 'Una Oración de Acción de Gracias' },
          {
            type: 'prayer',
            speaker: 'A',
            phrases: [
              'Te damos gracias, Señor Jesús, por la gracia de esta hora vivida en vigilia, en reparación y en amor ante Tu Corazón Eucarístico.',
              'Te damos gracias, Inmaculado Corazón de María, por tu presencia maternal a nuestro lado durante esta noche de oración.',
              'Que el fuego encendido aquí no se apague, sino que permanezca ardiendo silenciosamente en nuestros corazones hasta que volvamos a velar contigo de nuevo.',
            ],
          },
          {
            type: 'dialogue',
            lines: [
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
