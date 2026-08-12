import { LocalizedPart } from '../index';

/**
 * Spanish translation, pending owner review. Latin text is left unchanged
 * (as in the English source). The collect ("Deus, qui nobis...") is an
 * original Spanish rendering of the Latin, not the official Spanish Roman
 * Missal translation, which is separately copyrighted — same discipline as
 * the English source. The Divine Praises use the traditional, customary
 * Spanish wording ("Alabanzas Divinas").
 */
export const benedictionPart_es: LocalizedPart = {
  id: 'benediction',
  sections: [
    {
      reviewed: false,
      section: {
        id: 'benediction',
        title: 'Bendición con el Santísimo Sacramento',
        blocks: [
          { type: 'rubric', text: 'Todos de rodillas, por favor', posture: 'kneel' },
          { type: 'label', text: 'Tantum Ergo' },
          {
            type: 'bilingual',
            latin: [
              'Tantum ergo Sacraméntum',
              'venerémur cérnui;',
              'et antíquum documéntum',
              'novo cedat rítui',
              'praestet fides supplémentum',
              'sénsuum deféctui.',
              '',
              'Genitóri, genitóque',
              'laus et iubilátio',
              'salus, honor, virtus quoque',
              'sit et benedíctio;',
              'procedénti ab utróque',
              'compar sit laudátio.',
              'Amen.',
            ],
            english: [
              'Adoremos postrados',
              'tan gran Sacramento;',
              'que la antigua alianza',
              'ceda su lugar al rito nuevo;',
              'supla la fe',
              'la carencia de los sentidos.',
              '',
              'Al Padre y al Hijo',
              'sea dada alabanza y júbilo,',
              'salud, honor, poder,',
              'y también bendición;',
              'y al que de Ambos procede',
              'sea dada igual alabanza.',
              'Amén.',
            ],
          },
          {
            type: 'note',
            text: 'Todos permanecen de rodillas mientras el presidente se pone de pie y canta o dice:',
          },
          {
            type: 'dialogue',
            lines: [
              {
                speaker: 'Presider',
                latin: 'Panem de cælo præstitísti eis (Allelúia).',
                text: 'Les has dado el Pan del cielo (Aleluya).',
              },
              {
                speaker: 'R',
                latin: 'Omne delectaméntum in se habéntem (Allelúia).',
                text: 'Que contiene en sí toda dulzura (Aleluya).',
              },
            ],
          },
          {
            type: 'dialogue',
            lines: [{ speaker: 'Presider', latin: 'Orémus.', text: 'Oremos.' }],
          },
          {
            type: 'prayer',
            speaker: 'Presider',
            latinPhrases: [
              'Deus, qui nobis sub sacraménto mirábili passiónis tuæ memóriam reliquísti,',
              'tríbue, quæsumus, ita nos Córporis et Sánguinis tui sacra mystéria venerári,',
              'ut redemptiónis tuæ fructum in nobis iúgiter sentiámus.',
              'Qui vivis et regnas cum Deo Patre in unitáte Spíritus Sancti, Deus, per ómnia sæcula sæculórum.',
            ],
            phrases: [
              'Oh Dios, que en este maravilloso Sacramento nos has dejado un memorial perpetuo de tu Pasión,',
              'concédenos, te pedimos, venerar de tal modo los sagrados misterios de tu Cuerpo y de tu Sangre,',
              'que sintamos siempre en nosotros el fruto de tu redención.',
              'Tú que vives y reinas con el Padre y el Espíritu Santo, un solo Dios, por los siglos de los siglos.',
            ],
          },
          { type: 'dialogue', lines: [{ speaker: 'R', text: 'Amén.' }] },
          {
            type: 'note',
            text: 'El ministro asistente coloca un velo humeral sobre los hombros del presidente, quien toma la custodia y bendice a todos los presentes con el Santísimo Sacramento mientras el otro ministro u otros ministros lo inciensan. El presidente regresa luego ante el altar y se arrodilla, guiando a todos en las Alabanzas Divinas.',
          },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'divine-praises',
        title: 'Las Alabanzas Divinas',
        blocks: [
          {
            type: 'list',
            items: [
              'Bendito sea Dios.',
              'Bendito sea su Santo Nombre.',
              'Bendito sea Jesucristo, verdadero Dios y verdadero hombre.',
              'Bendito sea el Nombre de Jesús.',
              'Bendito sea su Sacratísimo Corazón.',
              'Bendita sea su Preciosísima Sangre.',
              'Bendito sea Jesús en el Santísimo Sacramento del Altar.',
              'Bendita sea la gran Madre de Dios, María Santísima.',
              'Bendita sea su Santa e Inmaculada Concepción.',
              'Bendita sea su gloriosa Asunción.',
              'Bendito sea el nombre de María, Virgen y Madre.',
              'Bendito sea San José, su castísimo esposo.',
              'Bendito sea Dios en sus ángeles y en sus santos.',
            ],
          },
          { type: 'label', text: 'Reposición del Santísimo Sacramento' },
          {
            type: 'note',
            text: 'El presidente coloca de nuevo el Santísimo Sacramento en el sagrario y hace una genuflexión mientras se canta “Oh Sacramento Santísimo” u otro himno eucarístico apropiado. Luego todos los ministros salen del santuario.',
          },
          { type: 'label', text: 'Oh Sacramento Santísimo' },
          {
            type: 'paragraph',
            text: 'Oh Sacramento Santísimo, oh Sacramento Divino, toda alabanza y toda acción de gracias sean tuyas en cada momento.',
          },
        ],
      },
    },
  ],
};
