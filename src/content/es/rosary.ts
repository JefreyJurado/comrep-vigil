import { LocalizedPart } from '../index';

/**
 * Spanish translation, pending owner review. Universal fixed prayers (Creed,
 * Our Father, Hail Mary, Glory Be, Hail Holy Queen, Fatima Prayer) use the
 * traditional, customary Spanish wording used across the Spanish-speaking
 * Catholic world, not a newly invented rendering. Commentary/instructional
 * text is an original translation of the English source.
 */
export const rosaryPart_es: LocalizedPart = {
  id: 'rosary',
  sections: [
    {
      reviewed: false,
      section: {
        id: 'holy-rosary-intro',
        title: 'Santo Rosario',
        blocks: [
          {
            type: 'prayer',
            phrases: [
              '“Recen el Rosario todos los días... Recen, recen mucho y hagan sacrificios por los pecadores... Soy Nuestra Señora del Rosario. Solo yo podré ayudarles. ...Al final, mi Inmaculado Corazón triunfará.”',
              '— Nuestra Señora en Fátima',
            ],
          },
          {
            type: 'paragraph',
            text: 'La palabra Rosario significa “Corona de Rosas”. Nuestra Señora ha revelado a varias personas que cada vez que rezan un Avemaría le están regalando una hermosa rosa, y que cada Rosario completo le forma una corona de rosas. La rosa es la reina de las flores, y por eso el Rosario es la rosa de todas las devociones, siendo por tanto la más importante de todas.',
          },
          {
            type: 'paragraph',
            text: 'El Santo Rosario se considera una oración perfecta porque en él se encuentra la maravillosa historia de nuestra salvación. Con el Rosario, en efecto, meditamos los misterios gozosos, dolorosos, gloriosos y luminosos de Jesús y María. Es una oración sencilla, humilde como María. Es una oración que todos podemos rezar juntos con Ella, la Madre de Dios.',
          },
          {
            type: 'paragraph',
            text: 'Con el Avemaría La invitamos a rezar por nosotros. Nuestra Señora siempre concede nuestra petición. Ella une Su oración a la nuestra. Por eso se vuelve cada vez más eficaz, porque lo que María pide, siempre lo recibe; Jesús nunca puede decir que no a lo que Su Madre le pide.',
          },
          {
            type: 'paragraph',
            text: 'En cada aparición, la Madre celestial nos ha invitado a rezar el Rosario como un arma poderosa contra el mal, para llevarnos a la verdadera paz. Con tu oración hecha junto a tu Madre celestial, puedes obtener el gran don de un cambio de corazones y de conversión.',
          },
          {
            type: 'paragraph',
            text: 'Cada día, a través de la oración puedes alejar de ti y de tu patria muchos peligros y muchos males. Puede parecer una oración repetitiva, pero en realidad es como dos enamorados que muchas veces se dicen el uno al otro las palabras: “Te amo”...',
          },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'mysteries-of-the-rosary',
        title: 'Misterios del Rosario',
        blocks: [
          {
            type: 'note',
            text: 'El Papa San Juan Pablo II añadió los Misterios Luminosos en la Carta Apostólica Rosarium Virginis Mariae, el 16 de octubre de 2002.',
          },
          { type: 'label', text: 'Los Misterios Gozosos (Lunes y Sábado)' },
          {
            type: 'list',
            ordered: true,
            items: [
              'La Anunciación',
              'La Visitación de la Virgen María a su prima Isabel',
              'El Nacimiento de Nuestro Señor Jesucristo',
              'La Presentación del Niño Jesús en el Templo',
              'El Hallazgo del Niño Jesús en el Templo',
            ],
          },
          {
            type: 'paragraph',
            text: 'En estos misterios caminamos con María por los comienzos escondidos de nuestra salvación: el saludo del Ángel, la visita a Isabel, el nacimiento en Belén, la presentación en el Templo, y el hallazgo del Niño Jesús. Aquí, la alegría es callada y a menudo oculta — se encuentra en pequeños y fieles “síes” más que en grandes gestos. Que te recuerden que Dios a menudo obra primero en silencio, antes de obrar en gloria.',
          },
          { type: 'label', text: 'Los Misterios Dolorosos (Martes y Viernes)' },
          {
            type: 'list',
            ordered: true,
            items: [
              'La Agonía en el Huerto',
              'La Flagelación en la Columna',
              'La Coronación de Espinas',
              'Jesús con la Cruz a Cuestas',
              'La Crucifixión y Muerte de Jesucristo',
            ],
          },
          {
            type: 'paragraph',
            text: 'En estos misterios acompañamos a Jesús en Su Pasión: la agonía en el huerto, la flagelación, la coronación de espinas, el camino de la Cruz, y Su muerte en el Calvario. Aquí meditamos el peso del pecado y la profundidad de un amor que no se apartó del sufrimiento. Que te lleven a la gratitud, y a la reparación por los pecados que todavía hieren Su Corazón hoy.',
          },
          { type: 'label', text: 'Los Misterios Gloriosos (Miércoles y Domingo)' },
          {
            type: 'list',
            ordered: true,
            items: [
              'La Resurrección del Señor',
              'La Ascensión del Señor Jesucristo al Cielo',
              'La Venida del Espíritu Santo sobre la Santísima Virgen María y los Apóstoles',
              'La Asunción de la Santísima Virgen María',
              'La Coronación de la Santísima Virgen María como Reina del Cielo y de la Tierra',
            ],
          },
          {
            type: 'paragraph',
            text: 'En estos misterios somos testigos del triunfo que sigue a la Cruz: la Resurrección, la Ascensión, la venida del Espíritu Santo, y la Asunción y Coronación de María. Aquí, el dolor da paso a la esperanza, y la muerte no es la última palabra. Que renueven tu confianza en que todo lo que llevas a través de esta vigilia no quedará sin respuesta.',
          },
          { type: 'label', text: 'Los Misterios Luminosos (Jueves)' },
          {
            type: 'list',
            ordered: true,
            items: [
              'El Bautismo del Señor',
              'Las Bodas de Caná',
              'El Anuncio del Reino de Dios',
              'La Transfiguración',
              'La Institución de la Eucaristía',
            ],
          },
          {
            type: 'paragraph',
            text: 'En estos misterios seguimos a Jesús a lo largo de Su vida pública: Su Bautismo, las bodas de Caná, Su anuncio del Reino, Su Transfiguración, y Su don de la Eucaristía. Aquí vemos la luz de Cristo irrumpir en el mundo ordinario, llamándonos a la conversión y a la comunión. Que te recuerden que este mismo Cristo, presente en la Eucaristía, es Aquel ante quien velas esta noche.',
          },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'the-holy-rosary',
        title: 'El Santo Rosario',
        blocks: [
          { type: 'label', text: 'Señal de la Cruz' },
          {
            type: 'dialogue',
            lines: [
              {
                speaker: 'A',
                text: 'En el nombre del (†) Padre, y del Hijo, y del Espíritu Santo. Amén. (Cinco veces)',
              },
            ],
          },
          { type: 'label', text: 'El Credo de los Apóstoles' },
          {
            type: 'prayer',
            speaker: 'A',
            phrases: [
              'Creo en Dios, Padre Todopoderoso, Creador del cielo y de la tierra,',
              'y en Jesucristo, su único Hijo, nuestro Señor,',
              'que fue concebido por obra y gracia del Espíritu Santo, nació de Santa María Virgen,',
              'padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado;',
              'descendió a los infiernos; al tercer día resucitó de entre los muertos;',
              'subió a los cielos y está sentado a la derecha de Dios, Padre todopoderoso;',
              'desde allí ha de venir a juzgar a los vivos y a los muertos.',
              'Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos,',
              'el perdón de los pecados, la resurrección de la carne, y la vida eterna. Amén.',
            ],
          },
          { type: 'label', text: 'El Padre Nuestro' },
          {
            type: 'dialogue',
            lines: [
              {
                speaker: 'L',
                text: 'Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo.',
              },
              {
                speaker: 'R',
                text: 'Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. Amén.',
              },
            ],
          },
          { type: 'label', text: 'El Avemaría (Salutación Angélica)' },
          {
            type: 'dialogue',
            lines: [
              {
                speaker: 'L',
                text: 'Dios te salve, María, llena eres de gracia, el Señor es contigo; bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús.',
              },
              {
                speaker: 'R',
                text: 'Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.',
              },
            ],
          },
          { type: 'label', text: 'El Gloria (Doxología)' },
          {
            type: 'dialogue',
            lines: [
              { speaker: 'L', text: 'Gloria al Padre, y al Hijo, y al Espíritu Santo.' },
              { speaker: 'R', text: 'Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.' },
            ],
          },
          { type: 'label', text: 'La Oración de Fátima' },
          {
            type: 'prayer',
            speaker: 'A',
            phrases: [
              'Oh Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las almas, especialmente a las más necesitadas de tu misericordia.',
            ],
          },
          { type: 'note', text: 'Al final de cada decena, se añaden las siguientes oraciones:' },
          {
            type: 'dialogue',
            lines: [
              { speaker: 'L', text: 'Jesús manso y humilde de corazón,' },
              { speaker: 'R', text: 'Haz nuestro corazón semejante al tuyo.' },
              { speaker: 'L', text: 'Casto corazón de San José,' },
              { speaker: 'R', text: 'Ruega por nosotros.' },
              { speaker: 'L', text: 'Ven, Espíritu Santo,' },
              {
                speaker: 'R',
                text: 'Ven por medio de la poderosa intercesión del Inmaculado Corazón de María, tu amadísima esposa.',
              },
            ],
          },
          { type: 'label', text: 'Dios te Salve, Reina y Madre' },
          {
            type: 'prayer',
            speaker: 'A',
            phrases: [
              'Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve.',
              'A ti llamamos los desterrados hijos de Eva.',
              'A ti suspiramos, gimiendo y llorando en este valle de lágrimas.',
              'Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos;',
              'y después de este destierro, muéstranos a Jesús, fruto bendito de tu vientre.',
              '¡Oh clementísima, oh piadosa, oh dulce siempre Virgen María!',
            ],
          },
          {
            type: 'dialogue',
            lines: [
              { speaker: 'L', text: 'Ruega por nosotros, Santa Madre de Dios.' },
              { speaker: 'R', text: 'Para que seamos dignos de alcanzar las promesas de Cristo.' },
            ],
          },
          { type: 'label', text: 'Oración Final' },
          {
            type: 'dialogue',
            lines: [{ speaker: 'L', text: 'Oremos.' }],
          },
          {
            type: 'prayer',
            speaker: 'A',
            phrases: [
              'Oh Dios, cuyo Hijo Unigénito, por su vida, muerte y resurrección,',
              'nos ha alcanzado los premios de la vida eterna;',
              'concédenos, te suplicamos, que meditando estos misterios del santísimo Rosario de la Bienaventurada Virgen María,',
              'imitemos lo que contienen y obtengamos lo que prometen, por el mismo Cristo, nuestro Señor. Amén.',
            ],
          },
          {
            type: 'dialogue',
            lines: [
              { speaker: 'L', text: 'Dales, Señor, el descanso eterno,' },
              { speaker: 'R', text: 'Y brille para ellos la luz perpetua.' },
              { speaker: 'L', text: 'Descansen en paz.' },
              { speaker: 'R', text: 'Amén.' },
              { speaker: 'L', text: 'María, Auxilio de los Cristianos,' },
              { speaker: 'R', text: 'Ruega por nosotros.' },
            ],
          },
        ],
      },
    },
  ],
};
