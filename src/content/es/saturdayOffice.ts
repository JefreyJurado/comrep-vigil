import { LocalizedPart } from '../index';

/**
 * Spanish translation, pending owner review. The opening versicle and the
 * "Gloria al Padre" doxology use the fixed, traditional Spanish wording
 * common to every hour of the Liturgy of the Hours, not a specific
 * translator's copyrightable expression. The psalm text is an original
 * translation of the English source (not a copy of any official,
 * copyrighted Spanish psalter) for the same reason noted in the
 * Acknowledgements about the Revised Grail Psalms.
 */
export const saturdayOfficePart_es: LocalizedPart = {
  id: 'saturday-office',
  title: 'Oficio de Lectura del Sábado',
  shortTitle: 'Oficio de Lectura',
  sections: [
    {
      reviewed: false,
      section: {
        id: 'saturday-office-opening',
        title: 'Oficio de Lectura del Sábado',
        blocks: [
          {
            type: 'note',
            text: 'Memoria de la Bienaventurada Virgen María — adaptado del Oficio de Lectura de la Fiesta del Inmaculado Corazón de María.',
          },
          { type: 'rubric', text: 'Todos de pie, por favor, y hagan la Señal de la Cruz mientras el sacerdote ora', posture: 'stand' },
          {
            type: 'dialogue',
            lines: [
              { speaker: 'L', text: '(†) Dios mío, ven en mi auxilio.' },
              { speaker: 'R', text: 'Señor, date prisa en socorrerme.' },
              { speaker: 'L', text: 'Gloria al Padre, y al Hijo, y al Espíritu Santo.' },
              { speaker: 'R', text: 'Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.' },
            ],
          },
          { type: 'hymnCue' },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'psalm-24',
        title: 'Salmo 24 — La Entrada del Señor en Su Templo',
        blocks: [
          {
            type: 'dialogue',
            lines: [
              { speaker: 'L', text: 'María recibió la bendición del Señor y la misericordia de Dios su Salvador.' },
              { speaker: 'R', text: 'María recibió la bendición del Señor y la misericordia de Dios su Salvador.' },
            ],
          },
          {
            type: 'dialogue',
            lines: [
              { speaker: 'Side 1', text: 'Del Señor es la tierra y cuanto la llena, el mundo y todos sus habitantes.' },
              { speaker: 'Side 1', text: 'Él la fundó sobre los mares, la afirmó sobre las corrientes de las aguas.' },
              {
                speaker: 'Side 2',
                text: '¿Quién puede subir al monte del Señor? ¿Quién puede estar en su recinto sagrado? El hombre de manos inocentes y puro corazón, que no desea lo vano, ni jura en falso contra su prójimo.',
              },
              {
                speaker: 'Side 1',
                text: 'Este recibirá la bendición del Señor, la recompensa de Dios su salvador. Este es el grupo que busca al Señor, que busca tu rostro, Dios de Jacob.',
              },
              { speaker: 'Side 2', text: '¡Portones, alzad los dinteles, alzaos, puertas antiguas, y entrará el Rey de la gloria!' },
              { speaker: 'Side 1', text: '¿Quién es ese Rey de la gloria? El Señor, fuerte y valeroso, el Señor, valeroso en la batalla.' },
              { speaker: 'Side 2', text: '¡Portones, alzad los dinteles, alzaos, puertas antiguas, y entrará el Rey de la gloria!' },
              { speaker: 'Side 1', text: '¿Quién es Él, el Rey de la gloria? El Señor de los ejércitos, Él es el Rey de la gloria.' },
            ],
          },
          {
            type: 'dialogue',
            lines: [
              {
                speaker: 'A',
                text: 'Gloria al Padre, y al Hijo, y al Espíritu Santo, como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.',
              },
              { speaker: 'A', text: 'María recibió la bendición del Señor y la misericordia de Dios su Salvador.' },
            ],
          },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'psalm-46',
        title: 'Salmo 46 — Dios Está de Nuestro Lado',
        blocks: [
          {
            type: 'dialogue',
            lines: [
              { speaker: 'L', text: 'El Altísimo ha hecho de Su morada un templo santo.' },
              { speaker: 'R', text: 'El Altísimo ha hecho de Su morada un templo santo.' },
            ],
          },
          {
            type: 'dialogue',
            lines: [
              {
                speaker: 'Side 1',
                text: 'Dios es para nosotros refugio y fortaleza, ayuda siempre cercana en momentos de angustia: por eso no tememos aunque tiemble la tierra, aunque los montes caigan al fondo del mar, aunque bramen y hiervan sus aguas, y tiemblen los montes con su furia.',
              },
              { speaker: 'Side 2', text: 'El Señor de los ejércitos está con nosotros, nuestro baluarte es el Dios de Jacob.' },
              {
                speaker: 'Side 1',
                text: 'Un río y sus canales alegran la ciudad de Dios, la santa morada del Altísimo. Dios está en medio de ella: no vacilará; Dios la protegerá al despuntar el día. Las naciones se agitan, los reinos se tambalean; Él alza Su voz, y la tierra se derrite.',
              },
              { speaker: 'Side 2', text: 'El Señor de los ejércitos está con nosotros, nuestro baluarte es el Dios de Jacob.' },
              {
                speaker: 'Side 1',
                text: 'Venid a contemplar las obras del Señor, las maravillas que ha hecho en la tierra. Él pone fin a las guerras hasta el confín de la tierra, quiebra el arco, rompe la lanza, y quema los escudos en el fuego. “Deteneos y reconoced que Yo soy Dios, exaltado entre las naciones, exaltado en la tierra.”',
              },
              { speaker: 'Side 2', text: 'El Señor de los ejércitos está con nosotros, nuestro baluarte es el Dios de Jacob.' },
            ],
          },
          {
            type: 'dialogue',
            lines: [
              {
                speaker: 'A',
                text: 'Gloria al Padre, y al Hijo, y al Espíritu Santo, como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.',
              },
              { speaker: 'A', text: 'El Altísimo ha hecho de Su morada un templo santo.' },
            ],
          },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'psalm-87',
        title: 'Salmo 87 — Jerusalén es Madre de Todos Nosotros',
        blocks: [
          {
            type: 'dialogue',
            lines: [
              { speaker: 'L', text: 'Cosas gloriosas se dicen de ti, oh Virgen María.' },
              { speaker: 'R', text: 'Cosas gloriosas se dicen de ti, oh Virgen María.' },
            ],
          },
          {
            type: 'dialogue',
            lines: [
              {
                speaker: 'Side 1',
                text: 'Sobre el monte santo está su ciudad, amada del Señor. El Señor prefiere las puertas de Sión a todas las moradas de Jacob. ¡De ti se dicen cosas gloriosas, oh ciudad de Dios!',
              },
              {
                speaker: 'Side 2',
                text: 'A Babilonia y a Egipto los contaré entre los que me conocen; Filistea, Tiro, Etiopía, estos serán sus hijos, y de Sión se dirá: “Madre”, pues todos serán sus hijos.',
              },
              {
                speaker: 'Side 1',
                text: 'Es Él, el Señor Altísimo, quien da a cada uno su lugar. En su registro de los pueblos escribe: “Estos son sus hijos”, y mientras danzan cantarán: “En ti todos tienen su morada.”',
              },
            ],
          },
          {
            type: 'dialogue',
            lines: [
              {
                speaker: 'A',
                text: 'Gloria al Padre, y al Hijo, y al Espíritu Santo, como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.',
              },
              { speaker: 'A', text: 'Cosas gloriosas se dicen de ti, oh Virgen María.' },
            ],
          },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'saturday-readings',
        title: 'Lecturas',
        blocks: [
          {
            type: 'note',
            text: 'La Primera Lectura y el Responsorio están tomados del Oficio de Lectura del día. La Segunda Lectura es de un sermón de San Lorenzo Justiniano, Obispo.',
          },
          { type: 'rubric', text: 'Por favor, hagan una breve pausa de reflexión silenciosa después de la lectura.' },
          { type: 'label', text: 'Responsorio' },
          {
            type: 'dialogue',
            lines: [
              { speaker: 'Lector', text: 'Oh Virgen purísima y santa, ¿qué palabras podrían jamás captar tu belleza?' },
              { speaker: 'A', text: 'Los cielos, en toda su inmensidad, no pudieron contener al Dios que llevaste dentro de ti.' },
              { speaker: 'Lector', text: 'Bendita eres entre las mujeres, y bendito el fruto que llevaste.' },
              { speaker: 'A', text: 'Los cielos, en toda su inmensidad, no pudieron contener al Dios que llevaste dentro de ti.' },
            ],
          },
          { type: 'rubric', text: 'Todos de pie, por favor', posture: 'stand' },
          { type: 'label', text: 'Oración Final' },
          {
            type: 'prayer',
            speaker: 'L',
            phrases: [
              'Padre, hiciste del corazón de la Virgen María una morada digna de Tu Espíritu Santo.',
              'Por su intercesión, forma nuestros propios corazones en un templo más digno de Su gloria.',
              'Te lo pedimos por Jesucristo, Tu Hijo, que vive y reina contigo y el Espíritu Santo, un solo Dios, por los siglos de los siglos.',
            ],
          },
          {
            type: 'dialogue',
            lines: [
              { speaker: 'A', text: 'Amén.' },
              { speaker: 'L', text: 'Bendigamos al Señor.' },
              { speaker: 'R', text: 'Demos gracias a Dios.' },
            ],
          },
        ],
      },
    },
  ],
};
