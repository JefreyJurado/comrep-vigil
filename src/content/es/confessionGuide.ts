import { LocalizedPart } from '../index';
import { ContentBlock } from '../../types/content';
import { examinationOfConscience_es } from './examinationOfConscience';

/** Spanish translation, pending owner review. Original translation of the English source. */
const examinationBlocks: ContentBlock[] = examinationOfConscience_es.flatMap(
  (section): ContentBlock[] => [
    { type: 'label', text: section.title },
    { type: 'list', items: section.questions },
  ]
);

export const confessionGuidePart_es: LocalizedPart = {
  id: 'confession-guide',
  title: 'Guía para la Confesión',
  sections: [
    {
      reviewed: false,
      section: {
        id: 'before-confession',
        title: 'Antes de la Confesión',
        blocks: [
          {
            type: 'paragraph',
            text: 'Ten verdadero pesar por tus pecados. El acto esencial de la Penitencia, por parte del penitente, es la contrición, un rechazo claro y decidido del pecado cometido, junto con la resolución de no volver a cometerlo, por el amor que se tiene a Dios y que renace con el arrepentimiento.',
          },
          {
            type: 'paragraph',
            text: 'La resolución de evitar cometer estos pecados en el futuro (enmienda) es señal segura de que tu dolor es genuino y auténtico. Esto no significa que sea necesaria la promesa de nunca volver a caer en pecado. Basta, para el verdadero arrepentimiento, la resolución de procurar evitar las ocasiones próximas de pecado.',
          },
          {
            type: 'paragraph',
            text: 'La gracia de Dios, en cooperación con la intención de rectificar tu vida, te dará la fuerza para resistir y vencer la tentación en el futuro.',
          },
          { type: 'label', text: 'Examen de Conciencia' },
          {
            type: 'paragraph',
            text: 'Antes de acudir a la Confesión, debes hacer un repaso de los pecados mortales y veniales desde tu última confesión sacramental, y debes expresar dolor por los pecados, aborrecimiento del pecado y firme propósito de no volver a pecar.',
          },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'examination-of-conscience',
        title: 'Examen de Conciencia',
        blocks: [
          {
            type: 'paragraph',
            text: 'Tómate un momento de silencio para reflexionar sobre cada una de las siguientes preguntas, considerando tus pensamientos, palabras y acciones desde tu última confesión.',
          },
          ...examinationBlocks,
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'during-confession',
        title: 'Durante la Confesión',
        blocks: [
          {
            type: 'paragraph',
            text: 'Después de examinar tu conciencia y de decirle a Dios tu dolor, entra al confesionario. Puedes arrodillarte ante la rejilla o sentarte para hablar cara a cara con el sacerdote.',
          },
          {
            type: 'note',
            text: 'Comienza tu confesión con la señal de la cruz: “En el nombre del Padre, y del Hijo, y del Espíritu Santo. Mi última confesión fue hace ___ semanas (meses, años).”',
          },
          {
            type: 'paragraph',
            text: 'Di los pecados que recuerdes. Comienza con el o los que te resulten más difíciles de decir. Para hacer una buena confesión, el fiel debe confesar todos los pecados mortales, según su clase y número.',
          },
          {
            type: 'paragraph',
            text: 'Después de confesar todos los pecados que recuerdes desde tu última buena confesión, puedes concluir diciendo: “Me arrepiento de estos y de todos los pecados de mi vida pasada.”',
          },
          {
            type: 'paragraph',
            text: 'Escucha las palabras del sacerdote. Él te asignará una penitencia. Cumplir la penitencia disminuirá la pena temporal debida a los pecados ya perdonados. Cuando se te invite, expresa alguna oración de arrepentimiento o Acto de Contrición como el que sigue.',
          },
          { type: 'label', text: 'Un Acto de Contrición' },
          {
            type: 'prayer',
            phrases: [
              'Dios mío, me arrepiento de todo corazón de haberte ofendido, y detesto todos mis pecados,',
              'porque temo la pérdida del cielo y las penas del infierno.',
              'Pero, sobre todo, porque te he ofendido a ti, Dios mío, que eres todo bondad y digno de todo mi amor.',
              'Firmemente resuelvo, con la ayuda de tu gracia, confesar mis pecados, cumplir la penitencia y enmendar mi vida. Amén.',
            ],
          },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'end-and-after-confession',
        title: 'Al Final de la Confesión, y Después',
        blocks: [
          {
            type: 'paragraph',
            text: 'Escucha las palabras de la absolución, el perdón sacramental de la Iglesia por medio del sacerdote ordenado. Mientras escuchas las palabras del perdón, puedes hacer la señal de la cruz junto con el sacerdote. Si él concluye diciendo: “Den gracias al Señor porque es bueno”, responde: “Porque es eterna Su misericordia.”',
          },
          {
            type: 'paragraph',
            text: 'Da gracias a Dios por haberte perdonado una vez más. Si recuerdas algún pecado grave que olvidaste mencionar, ten la seguridad de que ha sido perdonado junto con los demás, pero asegúrate de confesarlo en tu próxima Confesión. Cumple la Penitencia que se te asignó.',
          },
          {
            type: 'paragraph',
            text: 'Resuelve regresar con frecuencia al Sacramento de la Reconciliación. Nosotros los católicos somos afortunados de tener el Sacramento de la Reconciliación. Es la manera ordinaria de que nuestros pecados sean perdonados. Este sacramento es una ayuda poderosa para librarnos de nuestras debilidades, crecer en santidad y llevar una vida equilibrada y virtuosa.',
          },
        ],
      },
    },
  ],
};
