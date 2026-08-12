import { LocalizedPart } from '../index';
import { LocalizedSection } from '../index';
import { VigilSection } from '../../types/content';

/**
 * Spanish translation, pending owner review. Scripture readings are an
 * original translation of the English source (which itself draws on the New
 * American Bible Revised Edition) rather than a copy of any official,
 * copyrighted Spanish Bible edition. Original translation throughout.
 */

const office1: VigilSection = {
  id: 'office-1',
  kicker: 'Primer Oficio',
  title: 'Adorador',
  epigraph: {
    text: 'Dios es espíritu, y los que lo adoran deben adorar en espíritu y verdad.',
    citation: 'Juan 4:24',
  },
  blocks: [
    { type: 'rubric', text: 'Todos de pie, por favor', posture: 'stand' },
    { type: 'hymnCue' },
    { type: 'label', text: 'Disposición Espiritual' },
    {
      type: 'paragraph',
      text: 'Es nuestro cuidado como Adoradores unir nuestras oraciones a las que el Sagrado Corazón de Jesús ofrece por nosotros en el Santísimo Sacramento. Unimos nuestro tributo de alabanza para honrar al Padre Eterno.',
    },
    {
      type: 'paragraph',
      text: 'Pongámonos todos en la presencia de Dios, esforzándonos por sentirnos como nada ante el Todopoderoso. Esforcémonos también por adquirir un profundo sentimiento de pequeñez ante la Divina Majestad de Dios. En este momento, unamos nuestra adoración a la del Purísimo Corazón de María y al Coro de las Dominaciones.',
    },
    { type: 'rubric', text: 'Todos siéntense, por favor', posture: 'sit' },
    { type: 'label', text: 'Lectura' },
    {
      type: 'reading',
      citation: 'Juan 6:24-58',
      introduction: 'Lectura del Santo Evangelio según San Juan.',
      phrases: [
        'Cuando la multitud vio que ni Jesús ni sus discípulos estaban allí, subieron ellos mismos a las barcas y fueron a Cafarnaún en busca de Jesús.',
        'Y al encontrarlo al otro lado del mar, le dijeron: “Rabí, ¿cuándo llegaste aquí?”',
        'Jesús les respondió: “En verdad, en verdad os digo, me buscáis no porque visteis señales, sino porque comisteis los panes y os saciasteis.',
        'No trabajéis por el alimento que perece, sino por el alimento que permanece para la vida eterna, el cual os dará el Hijo del Hombre; porque a él lo ha marcado con su sello Dios Padre.”',
        'Entonces le dijeron: “¿Qué debemos hacer para realizar las obras de Dios?”',
        'Jesús les respondió: “Esta es la obra de Dios: que creáis en aquel a quien Él ha enviado.”',
        'Le dijeron entonces: “¿Qué señal haces tú, para que la veamos y creamos en ti? ¿Qué obra realizas? Nuestros padres comieron el maná en el desierto, como está escrito: Les dio a comer pan del cielo.”',
        'Jesús les dijo: “En verdad, en verdad os digo, no fue Moisés quien os dio el pan del cielo; es mi Padre quien os da el verdadero pan del cielo. Porque el pan de Dios es el que baja del cielo y da vida al mundo.”',
        'Le dijeron entonces: “Señor, danos siempre ese pan.”',
        'Jesús les dijo: “Yo soy el pan de vida; el que viene a mí no tendrá hambre jamás, y el que cree en mí no tendrá sed jamás.',
        'Pero ya os he dicho que, aunque me habéis visto, no creéis.',
        'Todo lo que el Padre me da vendrá a mí, y al que viene a mí no lo rechazaré, porque he bajado del cielo no para hacer mi voluntad, sino la voluntad de aquel que me envió.',
        'Y esta es la voluntad de aquel que me envió: que no pierda nada de lo que me ha dado, sino que lo resucite en el último día.',
        'Porque esta es la voluntad de mi Padre: que todo el que ve al Hijo y cree en él tenga vida eterna, y yo lo resucitaré en el último día.”',
        'Los judíos murmuraban de él porque había dicho: “Yo soy el pan que bajó del cielo”, y decían: “¿No es este Jesús, el hijo de José? ¿No conocemos a su padre y a su madre? ¿Cómo, pues, dice: ‘He bajado del cielo’?”',
        'Jesús les respondió: “No murmuréis entre vosotros. Nadie puede venir a mí si el Padre que me envió no lo atrae; y yo lo resucitaré en el último día.',
        'Está escrito en los profetas: Todos serán enseñados por Dios. Todo el que ha escuchado al Padre y ha aprendido de él, viene a mí.',
        'No es que alguien haya visto al Padre, sino aquel que viene de Dios; ese ha visto al Padre. En verdad, en verdad os digo, el que cree tiene vida eterna.',
        'Yo soy el pan de vida. Vuestros padres comieron el maná en el desierto, y murieron; este es el pan que baja del cielo, para que quien lo coma no muera.',
        'Yo soy el pan vivo que bajó del cielo; el que coma de este pan vivirá para siempre; y el pan que yo daré es mi carne para la vida del mundo.”',
        'Los judíos discutían entre sí, diciendo: “¿Cómo puede este darnos a comer su carne?”',
        'Jesús les dijo: “En verdad, en verdad os digo, si no coméis la carne del Hijo del Hombre y no bebéis su sangre, no tenéis vida en vosotros.',
        'El que come mi carne y bebe mi sangre tiene vida eterna, y yo lo resucitaré en el último día. Porque mi carne es verdadera comida, y mi sangre es verdadera bebida.',
        'El que come mi carne y bebe mi sangre permanece en mí, y yo en él. Así como el Padre que vive me envió y yo vivo por el Padre, así también el que me coma vivirá por mí.',
        'Este es el pan que bajó del cielo. No como el de vuestros padres, que lo comieron y murieron; el que coma este pan vivirá para siempre.”',
      ],
      closing: { leader: 'Palabra de Dios.', response: 'Te alabamos, Señor.' },
    },
    { type: 'label', text: 'Motivación' },
    {
      type: 'paragraph',
      text: 'Como Adoradores, consideremos la Divinidad verdaderamente presente en el Sacratísimo Corazón. En la cruz debemos ver la fe; en la llaga, la esperanza; en las llamas, la caridad.',
    },
    {
      type: 'paragraph',
      text: 'Debemos también saber escuchar la dulce queja de Jesús, quien se lamenta de que le es más difícil soportar la ingratitud de los hombres que el dolor de Su Pasión. Debemos sentir el mismo dolor de corazón que sintió Nuestro Señor Jesús, quien se aflige amargamente porque las personas consagradas a Su servicio son tan frías ante esta devoción. “Anhelo ser honrado en el Santísimo Sacramento, pero no encuentro a nadie que satisfaga Mis más ardientes deseos.”',
    },
    { type: 'label', text: 'Testimonio / Reflexión' },
    {
      type: 'note',
      text: 'Practica la escucha profunda, estando plenamente presente y atento a quien comparte. Deja de lado las distracciones y concéntrate verdaderamente en lo que está compartiendo.',
    },
    { type: 'rubric', text: 'Todos de rodillas, por favor', posture: 'kneel' },
    { type: 'label', text: 'Adoración ante el Santísimo Sacramento' },
    {
      type: 'prayer',
      speaker: 'A',
      phrases: [
        'Oh Jesús en el Santísimo Sacramento, concédeme a mí y a mis compañeros adoradores e hijos de Tu Divino Corazón, y a todos los sacerdotes, religiosos y almas consagradas, el espíritu de fervor y santo celo, para que cumplamos las obligaciones de nuestro estado de vida.',
        'Concede también a todas las personas consagradas a Tu servicio la gracia de una santidad siempre creciente, para que traigan honor a nuestra Madre la Iglesia, y rindan homenaje a Dios en espíritu y verdad.',
        'Oh Divino Corazón, ten piedad de mí.',
        'Oh excelso Coro de las celestiales Dominaciones, elevo junto con vosotros al Augusto Corazón de Jesús todo el bien realizado en el mundo católico, y lo consagro para Su mayor gloria.',
        'Jesús mío, uno toda mi alma a los actos de adoración que Tú ofreces al Padre Eterno.',
        'Me complazco en ofrecerte los amorosos sentimientos con que has inspirado a María Santísima y a Tus santos, para adorarte y glorificarte como mereces por toda la eternidad. Amén.',
      ],
    },
    { type: 'rubric', text: 'Todos siéntense, por favor', posture: 'sit' },
    { type: 'label', text: 'Práctica' },
    {
      type: 'paragraph',
      text: 'Es nuestro cuidado como Adoradores mostrar profunda reverencia y recogimiento durante la Santa Misa. Debemos hacer que la Eucaristía siga viva en nuestros corazones mientras adoramos al Padre Divino. Como Adoradores, cultivemos la conciencia de la Presencia de Dios, que es el medio para alcanzar un alto grado de perfección.',
    },
  ],
};

const office2: VigilSection = {
  id: 'office-2',
  kicker: 'Segundo Oficio',
  title: 'Amante',
  epigraph: { text: 'Amemos, pues, porque Él nos amó primero.', citation: '1 Juan 4:19' },
  blocks: [
    { type: 'rubric', text: 'Todos de pie, por favor', posture: 'stand' },
    { type: 'hymnCue' },
    { type: 'label', text: 'Disposición Espiritual' },
    {
      type: 'paragraph',
      text: 'Es nuestra tarea como Amantes adorar a Cristo en la Sagrada Eucaristía. Debemos hacernos dignos del amor del Sagrado Corazón conservando nuestra inocencia y pureza.',
    },
    {
      type: 'paragraph',
      text: 'Debemos entregarnos por completo a Jesús, si deseamos que Él se entregue enteramente a nosotros. Para que nuestro amor sea más agradable, debemos unirnos al Purísimo Corazón de María y al Coro de los Serafines.',
    },
    { type: 'rubric', text: 'Todos siéntense, por favor', posture: 'sit' },
    { type: 'label', text: 'Lectura' },
    {
      type: 'reading',
      citation: '1 Juan 4:7-16',
      introduction: 'Lectura de la primera Carta de San Juan.',
      phrases: [
        'Queridos, amémonos unos a otros, porque el amor es de Dios; todo el que ama ha nacido de Dios y conoce a Dios.',
        'El que no ama no conoce a Dios, porque Dios es amor.',
        'Así se manifestó entre nosotros el amor de Dios: en que Dios envió al mundo a su Hijo único, para que vivamos por medio de él.',
        'En esto consiste el amor: no en que nosotros hayamos amado a Dios, sino en que él nos amó y envió a su Hijo como propiciación por nuestros pecados.',
        'Queridos, si Dios nos amó así, también nosotros debemos amarnos unos a otros.',
        'A Dios nadie lo ha visto jamás. Pero si nos amamos unos a otros, Dios permanece en nosotros, y su amor llega en nosotros a su plenitud.',
        'En esto conocemos que permanecemos en él y él en nosotros: en que nos ha dado de su Espíritu.',
        'Y nosotros hemos visto y damos testimonio de que el Padre envió a su Hijo como salvador del mundo.',
        'Al que reconoce que Jesús es el Hijo de Dios, Dios permanece en él y él en Dios.',
        'Nosotros hemos llegado a conocer y a creer en el amor que Dios nos tiene.',
        'Dios es amor, y el que permanece en el amor permanece en Dios y Dios en él.',
      ],
      closing: { leader: 'Palabra de Dios.', response: 'Te alabamos, Señor.' },
    },
    { type: 'label', text: 'Motivación' },
    {
      type: 'paragraph',
      text: 'Como Amantes del Sagrado Corazón, reflexionemos sobre las llamas con que arde el Sagrado Corazón de Jesús, y cómo Su Corazón, radiante como el sol, está rodeado por el Coro de los Serafines, que cantan: “El amor del Sagrado Corazón triunfa, exalta y consuela.” Meditemos las palabras de Jesús: “He venido a traer fuego a la tierra, ¡y cuánto desearía que ya estuviera ardiendo!” (Lc 12:49)',
    },
    {
      type: 'paragraph',
      text: 'El amor que Nuestro Señor Jesucristo nos tiene es infinito y total. El amor exige amor, pero, sin darnos cuenta, nuestro amor hacia Él es mínimo.',
    },
    { type: 'label', text: 'Testimonio / Reflexión' },
    {
      type: 'note',
      text: 'Practica la escucha profunda, estando plenamente presente y atento a quien comparte. Deja de lado las distracciones y concéntrate verdaderamente en lo que está compartiendo.',
    },
    { type: 'rubric', text: 'Todos de rodillas, por favor', posture: 'kneel' },
    { type: 'label', text: 'Adoración ante el Santísimo Sacramento' },
    {
      type: 'prayer',
      speaker: 'A',
      phrases: [
        'Oh adorable Corazón de Jesús en el Santísimo Sacramento, te consagro cada momento de mi vida.',
        'Dejo mi corazón junto a Ti en este Santo Sagrario, para que, junto con el Coro de los Serafines, pueda amarte ahora y para siempre.',
        'Te amo, oh amabilísimo Corazón de Jesús, pero mi amor es tan frío.',
        'Haz que mi corazón y el de todas las criaturas ardan con el fuego de Tu amor.',
        'Oh Corazón de Jesús, te imploro que me concedas la gracia de amarte cada vez más.',
        'María, Madre de mi Señor y también Madre mía, haz que ame Su Corazón Divino.',
        'Oh Sacratísimo Corazón de Jesús, divino horno del fuego de ese amor que tanto anhelas encender en la tierra, y que deseas que arda en todos los corazones, concede que nuestros corazones se consuman en esas santas llamas.',
        'Oh Serafines de la corte celestial, os suplico y conjuro que digáis al Autor de mi vida mi ardiente deseo de arder y languidecer de amor por Él. Amén.',
      ],
    },
    { type: 'rubric', text: 'Todos siéntense, por favor', posture: 'sit' },
    { type: 'label', text: 'Práctica' },
    {
      type: 'paragraph',
      text: 'Nuestro homenaje como Amantes consiste en el fervor del afecto puro y en la exactitud del amor, no del temor. Oremos especialmente para que las almas de los justos avancen en la virtud.',
    },
  ],
};

const office3: VigilSection = {
  id: 'office-3',
  kicker: 'Tercer Oficio',
  title: 'Víctima',
  epigraph: {
    text: 'Ahora me alegro en mis padecimientos por vosotros, y completo en mi carne lo que falta de las tribulaciones de Cristo, por su cuerpo, que es la Iglesia.',
    citation: 'Colosenses 1:24',
  },
  blocks: [
    { type: 'rubric', text: 'Todos de pie, por favor', posture: 'stand' },
    { type: 'hymnCue' },
    { type: 'label', text: 'Disposición Espiritual' },
    {
      type: 'paragraph',
      text: 'Nuestro Señor pone ante nosotros Su vida de sacrificio en la Sagrada Eucaristía, en la cual Él mismo se hizo víctima de propiciación para la salvación del hombre. Así, como Víctimas, ofrezcámonos al Sagrado Corazón. Estemos dispuestos a ofrecer sacrificios en unión con Nuestro Señor.',
    },
    {
      type: 'paragraph',
      text: '¡Oh, qué duro es vivir sin el amor de Dios! ¿Puede alguien amar al Señor crucificado sin amar la cruz y sin estar dispuesto a morir por ella? Para hacer este sacrificio más agradable al Sagrado Corazón, unámonos al Purísimo e Inmaculado Corazón de María y al Coro de las Virtudes.',
    },
    { type: 'rubric', text: 'Todos siéntense, por favor', posture: 'sit' },
    { type: 'label', text: 'Lectura' },
    {
      type: 'reading',
      citation: 'Colosenses 1:21-29',
      introduction: 'Lectura de la Carta de San Pablo a los Colosenses.',
      phrases: [
        'Hermanos y hermanas: Vosotros, que en otro tiempo estabais alejados y erais enemigos por vuestros malos pensamientos y malas obras,',
        'Dios os ha reconciliado ahora en el cuerpo de carne de Cristo, por medio de su muerte, para presentaros santos, sin mancha e irreprochables delante de él,',
        'con tal de que permanezcáis firmes y constantes en la fe, sin apartaros de la esperanza del Evangelio que oísteis, el cual ha sido proclamado a toda criatura bajo el cielo, y del cual yo, Pablo, he sido hecho ministro.',
        'Me alegro ahora en mis padecimientos por vosotros, y completo en mi carne lo que falta a las tribulaciones de Cristo, en favor de su cuerpo, que es la Iglesia,',
        'de la cual fui hecho ministro según la administración que Dios me dio para con vosotros, para anunciar cumplidamente la palabra de Dios, el misterio escondido desde los siglos y edades, pero manifestado ahora a sus santos.',
        'A ellos quiso Dios dar a conocer las riquezas de la gloria de este misterio entre los gentiles, que es Cristo en vosotros, la esperanza de gloria.',
        'A él anunciamos, amonestando a todo hombre y enseñando a todo hombre en toda sabiduría, para presentar perfecto en Cristo a todo hombre.',
        'Para esto también trabajo, luchando según su poder, que actúa poderosamente en mí.',
      ],
      closing: { leader: 'Palabra de Dios.', response: 'Te alabamos, Señor.' },
    },
    { type: 'label', text: 'Motivación' },
    {
      type: 'paragraph',
      text: 'Como Víctimas, reflexionemos sobre el significado de la cruz en la que Jesucristo fue crucificado. Meditemos lo que Cristo parece decirnos: “Busco un alma víctima que consuele Mi Corazón herido.”',
    },
    {
      type: 'paragraph',
      text: 'El amor mismo de Jesucristo es la mayor motivación para el victimado. La manifestación de los secretos del Sagrado Corazón fue el último esfuerzo de nuestro Salvador por invitarnos a responder a Su gran amor.',
    },
    { type: 'label', text: 'Testimonio / Reflexión' },
    {
      type: 'note',
      text: 'Practica la escucha profunda, estando plenamente presente y atento a quien comparte. Deja de lado las distracciones y concéntrate verdaderamente en lo que está compartiendo.',
    },
    { type: 'rubric', text: 'Todos de rodillas, por favor', posture: 'kneel' },
    { type: 'label', text: 'Adoración ante el Santísimo Sacramento' },
    {
      type: 'prayer',
      speaker: 'A',
      phrases: [
        'Te adoro, oh Santísima Trinidad, en unión con el Santo Coro Angélico de las Virtudes.',
        'Oh Dios de justicia, me uno al Sagrado Corazón de Jesucristo, quien murió como Víctima de amor por nuestra salvación.',
        'Te ofrezco, Padre Eterno, en unión con el Divino Corazón, mi ser, mi alma, mi cuerpo y mis acciones, tanto del presente como del futuro.',
        'Ten piedad de mí y de todos los pobres pecadores.',
        'Oh Corazón de Jesús, imploro la gracia de amarte cada vez más.',
        'María, Madre de mi Señor y también Madre mía, haz que ame Su Corazón Divino.',
        'Oh Sagrado Corazón, Tú continúas ofreciéndote en nuestros altares como Víctima para nuestra salvación.',
        '¿Qué más deseas? ¿Qué más pides? ¿Qué más nos pides para unirnos a Ti como covíctimas de Tu sacrificio?',
        'Estoy dispuesto, Señor, toma posesión de mí, para que sea una víctima consagrada y consumida en las llamas de Tu amor, para mayor gloria de Tu Padre Eterno, que me ha elegido para este oficio.',
        'Acéptame benignamente, humilde siervo Tuyo, por amor de Tu Hijo Unigénito, que murió por amor a mí. Amén.',
      ],
    },
    { type: 'rubric', text: 'Todos siéntense, por favor', posture: 'sit' },
    { type: 'label', text: 'Práctica' },
    {
      type: 'paragraph',
      text: 'Nuestro deber como Víctimas consiste en el dominio de la voluntad, la mortificación del corazón y la disciplina de los sentidos. Sin el espíritu de mortificación, podemos hacer poco. Contengamos continuamente nuestros arrebatos emocionales cuando somos heridos u ofendidos, y resolvámonos a ofrecer estas heridas por la conversión de todos los pecadores o por algunas personas en particular por quienes oramos constantemente.',
    },
  ],
};

const office4: VigilSection = {
  id: 'office-4',
  kicker: 'Cuarto Oficio',
  title: 'Discípulo',
  epigraph: {
    text: 'Tomad mi yugo sobre vosotros y aprended de mí, que soy manso y humilde de corazón, y hallaréis descanso para vuestras almas.',
    citation: 'Mateo 11:29',
  },
  blocks: [
    { type: 'rubric', text: 'Todos de pie, por favor', posture: 'stand' },
    { type: 'hymnCue' },
    { type: 'label', text: 'Disposición Espiritual' },
    {
      type: 'paragraph',
      text: 'Como Discípulos, acudamos al Corazón de Jesucristo para aprender la ciencia de los santos. Es en esta escuela donde se enseña el verdadero amor. Es en esta escuela donde se imparte la verdadera sabiduría, madre del amor puro. Es la sabiduría del Cielo, que supera enteramente toda sabiduría terrena.',
    },
    {
      type: 'paragraph',
      text: 'Debemos escuchar atentamente la voz de nuestro Maestro, quien dijo: “Aprended de Mí, que soy manso y humilde de Corazón.” Para obtener esta sabiduría, invoquemos la ayuda del Purísimo Corazón de María y del coro angélico de los Querubines.',
    },
    { type: 'rubric', text: 'Todos siéntense, por favor', posture: 'sit' },
    { type: 'label', text: 'Lectura' },
    {
      type: 'reading',
      citation: 'Lucas 9:22-26',
      introduction: 'Lectura del Santo Evangelio según San Lucas.',
      phrases: [
        'Jesús dijo a sus discípulos: “Es necesario que el Hijo del Hombre padezca mucho, y sea rechazado por los ancianos, los sumos sacerdotes y los escribas, y sea muerto, y resucite al tercer día.”',
        'Y decía a todos: “Si alguno quiere venir en pos de mí, niéguese a sí mismo, tome su cruz cada día y sígame.',
        'Porque el que quiera salvar su vida, la perderá; y el que pierda su vida por mí, la salvará.',
        '¿De qué le sirve al hombre ganar el mundo entero, si se pierde o se destruye a sí mismo?',
        'Porque el que se avergüence de mí y de mis palabras, de este se avergonzará el Hijo del Hombre cuando venga en su gloria, y en la del Padre y de los santos ángeles.”',
      ],
      closing: { leader: 'Palabra de Dios.', response: 'Te alabamos, Señor.' },
    },
    { type: 'label', text: 'Motivación' },
    {
      type: 'paragraph',
      text: 'Como Discípulos, meditemos las palabras de Cristo: “Aprended de Mí, que soy manso y humilde de corazón.” Desde nuestros corazones, clamemos a Jesús diciendo: “Habla, Señor, que tu siervo escucha. Enséñame a hacer Tu voluntad.”',
    },
    {
      type: 'paragraph',
      text: 'Jesucristo vino a la tierra a enseñarnos la humildad más profunda y la mansedumbre. Él es nuestro modelo y maestro en humildad y ardiente caridad.',
    },
    { type: 'label', text: 'Testimonio / Reflexión' },
    {
      type: 'note',
      text: 'Practica la escucha profunda, estando plenamente presente y atento a quien comparte. Deja de lado las distracciones y concéntrate verdaderamente en lo que está compartiendo.',
    },
    { type: 'rubric', text: 'Todos de rodillas, por favor', posture: 'kneel' },
    { type: 'label', text: 'Adoración ante el Santísimo Sacramento' },
    {
      type: 'prayer',
      speaker: 'A',
      phrases: [
        'Oh Dios, que iluminas a todo hombre que viene a este mundo y que diriges toda voluntad, difunde sobre Tus seguidores la luz celestial de Tu sabiduría increada, y hazlos recibir con docilidad las sublimes verdades de Tu Evangelio.',
        '¡Oh, cuántas lecciones de perfección nos llegan de Tu Divino Corazón!',
        'Concede que, bien recibidas y apreciadas por nosotros, produzcan abundantes frutos de virtudes cristianas.',
        'Y vosotros, oh querubines, admitidme en vuestra compañía, para que tenga parte en el esplendor que procede del Sagrado Corazón de Jesús.',
        'Oh Corazón de Jesús, te imploro que me concedas la gracia de amarte cada vez más.',
        'María, Madre de mi Señor y también Madre mía, haz que ame Su Corazón Divino.',
        '¡Oh, cuán pronto aprende el discípulo enseñado por Ti, Señor! Instrúyeme, Señor, para ser Tu discípulo.',
        'Abre, por favor, la puerta de mi corazón y hazlo dócil a Tus divinas palabras. Ayúdanos a convertir a todos los que resisten la verdad. Amén.',
      ],
    },
    { type: 'rubric', text: 'Todos siéntense, por favor', posture: 'sit' },
    { type: 'label', text: 'Práctica' },
    {
      type: 'paragraph',
      text: 'Como Discípulos, debemos esforzarnos por permanecer siempre recogidos y silenciosos, para poder escuchar bien la voz y las enseñanzas de nuestro Divino Maestro. Respondamos plenamente a la inspiración de la gracia que procede del Sagrado Corazón de Jesús.',
    },
  ],
};

const office5: VigilSection = {
  id: 'office-5',
  kicker: 'Quinto Oficio',
  title: 'Siervo Fiel',
  epigraph: { text: 'Se humilló a sí mismo, haciéndose obediente hasta la muerte, y muerte de cruz.', citation: 'Filipenses 2:8' },
  blocks: [
    { type: 'rubric', text: 'Todos de pie, por favor', posture: 'stand' },
    { type: 'hymnCue' },
    { type: 'label', text: 'Disposición Espiritual' },
    {
      type: 'paragraph',
      text: 'Según Santa Margarita María, nuestro deber como Siervos Fieles es hacer nuestra la obediencia que Jesús muestra sin cesar a Sus sacerdotes. Debemos, como Nuestro Señor, practicar la obediencia en todo.',
    },
    {
      type: 'paragraph',
      text: 'Debemos aprender a renunciar a nuestra propia voluntad, a nuestras pasiones e inclinaciones, incluso a nuestros gustos y aversiones. Para obtener este espíritu de obediencia, el Siervo Fiel debe invocar la ayuda del Purísimo Corazón de María y del Coro de los Arcángeles.',
    },
    { type: 'rubric', text: 'Todos siéntense, por favor', posture: 'sit' },
    { type: 'label', text: 'Lectura' },
    {
      type: 'reading',
      citation: 'Filipenses 2:1-13',
      introduction: 'Lectura de la Carta de San Pablo a los Filipenses.',
      phrases: [
        'Hermanos y hermanas: Si hay algún consuelo en Cristo, algún alivio en el amor, alguna comunión en el Espíritu, algún entrañable afecto y compasión,',
        'completad mi gozo teniendo un mismo sentir, un mismo amor, unidos de corazón, pensando en una misma cosa.',
        'No hagáis nada por rivalidad ni por vanagloria; antes bien, con humildad, considerad a los demás como superiores a vosotros mismos, mirando cada uno no solo por lo suyo, sino también por lo de los otros.',
        'Tened entre vosotros el mismo sentir que hubo también en Cristo Jesús, quien, siendo de condición divina, no consideró el ser igual a Dios como algo a qué aferrarse,',
        'sino que se despojó de sí mismo, tomando la condición de siervo, hecho semejante a los hombres; y hallándose en la condición de hombre, se humilló a sí mismo, haciéndose obediente hasta la muerte, y muerte de cruz.',
        'Por eso Dios lo exaltó sobremanera y le otorgó el nombre que está sobre todo nombre, para que al nombre de Jesús toda rodilla se doble, en el cielo, en la tierra y bajo la tierra, y toda lengua confiese que Jesucristo es el Señor, para gloria de Dios Padre.',
        'Así pues, amados míos, como siempre habéis obedecido, no solo en mi presencia, sino mucho más ahora en mi ausencia, ocupaos en vuestra salvación con temor y temblor.',
        'Porque Dios es quien obra en vosotros tanto el querer como el obrar, por su buena voluntad.',
      ],
      closing: { leader: 'Palabra de Dios.', response: 'Te alabamos, Señor.' },
    },
    { type: 'label', text: 'Motivación' },
    {
      type: 'paragraph',
      text: 'Como Siervos Fieles, meditemos cómo Jesús se humilló y se hizo siervo, diciendo: “No he venido para ser servido, sino para servir. Si yo, el Señor y el Maestro, os he lavado los pies, también vosotros debéis lavaros los pies unos a otros. Os he dado ejemplo, para que hagáis como yo he hecho con vosotros.”',
    },
    {
      type: 'paragraph',
      text: 'Nuestro primer y principal motivo debe ser servir a Nuestro Señor, quien nos ha dado ejemplo de cómo servir con prontitud, alegría y amor.',
    },
    { type: 'label', text: 'Testimonio / Reflexión' },
    {
      type: 'note',
      text: 'Practica la escucha profunda, estando plenamente presente y atento a quien comparte. Deja de lado las distracciones y concéntrate verdaderamente en lo que está compartiendo.',
    },
    { type: 'rubric', text: 'Todos de rodillas, por favor', posture: 'kneel' },
    { type: 'label', text: 'Adoración ante el Santísimo Sacramento' },
    {
      type: 'prayer',
      speaker: 'A',
      phrases: [
        'Acepta, oh Jesucristo, mi corazón revestido con Tu traje de bodas, que Tu indignísimo siervo Te ofrece ahora.',
        'Que seas visitado más frecuentemente y con mayor reverencia en este adorable Sacramento.',
        'A cambio, que hagas brotar en todos los corazones los frutos de gracia y salvación, de los cuales Tú eres la fuente inagotable.',
        '¡Oh amor Todopoderoso de mi Dios! Tú has roto las cadenas que me tenían cautivo y me mantenían lejos de Ti.',
        'Ayúdame a atraer hacia Ti a más almas que, como yo, se han extraviado, y hazles gustar al pie de Tu altar las mismas delicias de Tu servicio que ahora experimento, un servicio que hace felices a todos los que lo abrazan.',
        'Oh misterio de la sujeción de Jesús en el Sacramento de Tu amor, me entrego para honrarte, y me esfuerzo, o al menos deseo, atraer todos los corazones hacia Ti, oh Jesús. Amén.',
      ],
    },
    { type: 'rubric', text: 'Todos siéntense, por favor', posture: 'sit' },
    { type: 'label', text: 'Práctica' },
    {
      type: 'paragraph',
      text: 'Es nuestro deber como Siervos Fieles obedecer con prontitud las divinas inspiraciones. Imitemos la obediencia del Sagrado Corazón, recordando que las obras más brillantes hechas sin obediencia no son aceptables a Dios. Tengamos siempre la prontitud y el celo para servir al Señor.',
    },
  ],
};

const office6: VigilSection = {
  id: 'office-6',
  kicker: 'Sexto Oficio',
  title: 'Suplicante',
  epigraph: {
    text: 'Por eso puede también salvar perpetuamente a los que por él se acercan a Dios, viviendo siempre para interceder por ellos.',
    citation: 'Hebreos 7:25',
  },
  blocks: [
    { type: 'rubric', text: 'Todos de pie, por favor', posture: 'stand' },
    { type: 'hymnCue' },
    { type: 'label', text: 'Disposición Espiritual' },
    {
      type: 'paragraph',
      text: 'Santa Margarita María solía decir: “El adorable Sacramento es el trono de la Gracia y la Misericordia.” Uno de los fines por los que Cristo permanece presente con nosotros en este misterio es mover a los pecadores a venir a implorar Su misericordia.',
    },
    {
      type: 'paragraph',
      text: 'Reconociendo que debemos la vida a la misericordia de Dios, unamos nuestras peticiones a las del Sagrado Corazón, para que las muchas almas que pudieran estar muertas para Dios comiencen de nuevo a vivir la vida de la gracia. Para que esta súplica sea más eficaz, unamos nuestras oraciones a las del Purísimo Corazón de María y al Coro de los Ángeles.',
    },
    { type: 'rubric', text: 'Todos siéntense, por favor', posture: 'sit' },
    { type: 'label', text: 'Lectura' },
    {
      type: 'reading',
      citation: 'Hebreos 7:1-3, 15-17, 23-28',
      introduction: 'Lectura de la Carta a los Hebreos.',
      phrases: [
        'Melquisedec, rey de Salem y sacerdote del Dios Altísimo, salió al encuentro de Abraham cuando este regresaba de derrotar a los reyes, y lo bendijo.',
        'Y Abraham le dio la décima parte de todo. Su nombre significa, primero, rey de justicia, y también era “rey de Salem”, es decir, rey de paz.',
        'Sin padre, sin madre, sin genealogía, sin principio de días ni fin de vida, hecho semejante al Hijo de Dios, permanece sacerdote para siempre.',
        'Esto se hace aún más evidente si, a semejanza de Melquisedec, surge otro sacerdote, constituido no según la ley de un mandato humano, sino según el poder de una vida indestructible.',
        'Pues de él se da testimonio: Tú eres sacerdote para siempre, según el orden de Melquisedec.',
        'Hermanos y hermanas: Los sacerdotes levíticos llegaron a ser muchos, porque la muerte les impedía permanecer en su cargo; pero Jesús, porque permanece para siempre, tiene un sacerdocio que no pasa.',
        'Por eso puede también salvar perpetuamente a los que por él se acercan a Dios, viviendo siempre para interceder por ellos.',
        'Nos convenía tener un sumo sacerdote así: santo, inocente, sin mancha, apartado de los pecadores y más excelso que los cielos.',
        'Él no tiene necesidad, como los demás sumos sacerdotes, de ofrecer sacrificios día tras día, primero por sus propios pecados y después por los del pueblo; esto lo hizo de una vez para siempre, ofreciéndose a sí mismo.',
        'Porque la ley constituye sumos sacerdotes a hombres débiles, pero la palabra del juramento, posterior a la ley, constituye al Hijo, hecho perfecto para siempre.',
      ],
      closing: { leader: 'Palabra de Dios.', response: 'Te alabamos, Señor.' },
    },
    { type: 'label', text: 'Motivación' },
    {
      type: 'paragraph',
      text: 'Como Suplicantes, meditemos la corona de espinas con que está coronado el Corazón de Jesús; a través de ella llegaremos a saber que fue causada por el gran amor de Dios hacia el hombre. Motivémonos con la promesa del Sagrado Corazón: “Prometo derramar abundantes bendiciones sobre todas las empresas de quienes honren Mi Corazón.”',
    },
    { type: 'label', text: 'Testimonio / Reflexión' },
    {
      type: 'note',
      text: 'Practica la escucha profunda, estando plenamente presente y atento a quien comparte. Deja de lado las distracciones y concéntrate verdaderamente en lo que está compartiendo.',
    },
    { type: 'rubric', text: 'Todos de rodillas, por favor', posture: 'kneel' },
    { type: 'label', text: 'Adoración ante el Santísimo Sacramento' },
    {
      type: 'prayer',
      speaker: 'A',
      phrases: [
        'Oh admirable Coro de los Ángeles, y tú en particular, mi querido Ángel de la Guarda, acompáñame en esta visita a mi Señor en la Eucaristía, y junto con el Sagrado Corazón de Jesús, ayúdame a ofrecer al Padre Eterno todas las acciones y sufrimientos de este día, para Su mayor gloria y para el alivio de las santas almas del Purgatorio.',
        'Oh Corazón de Jesús, te imploro que me concedas la gracia de amarte cada vez más.',
        'María, Madre de mi Señor y también Madre mía, haz que ame Su Corazón Divino.',
        'Escucha, oh Divino Corazón, las voces de los necesitados, y sé su consuelo en la tribulación;',
        'pues siempre ha sido Tu deleite, oh Corazón Misericordiosísimo, conceder el perdón y hacer el bien a todos. Amén.',
      ],
    },
    { type: 'rubric', text: 'Todos siéntense, por favor', posture: 'sit' },
    { type: 'label', text: 'Práctica' },
    {
      type: 'paragraph',
      text: 'Nuestra principal práctica como Suplicantes consiste en realizar actos de caridad hacia nuestro prójimo. Debemos esforzarnos por imitar el espíritu de oración del Sagrado Corazón, teniendo presente que, sin oración, es imposible permanecer en estado de gracia, y mucho menos avanzar en la virtud.',
    },
  ],
};

const office7: VigilSection = {
  id: 'office-7',
  kicker: 'Séptimo Oficio',
  title: 'Promotor',
  epigraph: {
    text: 'Id, pues, y haced discípulos a todas las naciones, bautizándolas en el nombre del Padre, y del Hijo, y del Espíritu Santo.',
    citation: 'Mateo 28:19',
  },
  blocks: [
    { type: 'rubric', text: 'Todos de pie, por favor', posture: 'stand' },
    { type: 'hymnCue' },
    { type: 'label', text: 'Disposición Espiritual' },
    {
      type: 'paragraph',
      text: 'Nuestro deber como Promotores del Sagrado Corazón es darlo a conocer a toda la humanidad. Pedimos al Padre y al Espíritu Santo que muevan nuestros corazones a amar el Divino Corazón de Jesús.',
    },
    {
      type: 'paragraph',
      text: 'Pedimos a la Santísima Virgen que emplee Su intercesión todopoderosa, para que todos los que a ella acudan en busca de ayuda encuentren en ella consuelo y fortaleza. El cumplimiento de esta tarea requiere a menudo la ayuda del Purísimo Corazón de María y del Coro de los Tronos.',
    },
    { type: 'rubric', text: 'Todos siéntense, por favor', posture: 'sit' },
    { type: 'label', text: 'Lectura' },
    {
      type: 'reading',
      citation: 'Mateo 28:16-20',
      introduction: 'Lectura del Santo Evangelio según San Mateo.',
      phrases: [
        'Los once discípulos fueron a Galilea, al monte que Jesús les había indicado.',
        'Y al verlo, lo adoraron, aunque algunos dudaban.',
        'Entonces Jesús se acercó y les dijo: “Se me ha dado todo poder en el cielo y en la tierra.',
        'Id, pues, y haced discípulos a todas las naciones, bautizándolas en el nombre del Padre, y del Hijo, y del Espíritu Santo, enseñándoles a guardar todo lo que os he mandado.',
        'Y he aquí que yo estoy con vosotros todos los días, hasta el fin del mundo.”',
      ],
      closing: { leader: 'Palabra de Dios.', response: 'Te alabamos, Señor.' },
    },
    { type: 'label', text: 'Motivación' },
    {
      type: 'paragraph',
      text: 'Como Promotores, debemos estar motivados por el pensamiento de que es el deseo más ardiente del Sagrado Corazón de Jesús que esta devoción se difunda tan ampliamente como sea posible.',
    },
    { type: 'label', text: 'Testimonio / Reflexión' },
    {
      type: 'note',
      text: 'Practica la escucha profunda, estando plenamente presente y atento a quien comparte. Deja de lado las distracciones y concéntrate verdaderamente en lo que está compartiendo.',
    },
    { type: 'rubric', text: 'Todos de rodillas, por favor', posture: 'kneel' },
    { type: 'label', text: 'Adoración ante el Santísimo Sacramento' },
    {
      type: 'prayer',
      speaker: 'A',
      phrases: [
        'Oh Corazón de Jesús, te imploro que me concedas la gracia de amarte cada vez más.',
        'María, Madre de mi Señor y también Madre mía, haz que ame Su Corazón Divino.',
        'Te adoro, oh Jesús, en el Santísimo Sacramento; adoro Tu Corazón inflamado de amor por mí.',
        'Tú eres el dulce refugio de mi reposo, el amado objeto de mi amor.',
        'Jesús mío, deseo que en este momento vengas a mi alma y la consumas con Tu amor.',
        'A vosotros me uno, oh augusto Coro de los Tronos, para honrar al Divino Corazón de Jesús. Amén.',
      ],
    },
    { type: 'rubric', text: 'Todos siéntense, por favor', posture: 'sit' },
    { type: 'label', text: 'Práctica' },
    {
      type: 'paragraph',
      text: 'Como Promotores, debemos tener el celo de difundir la devoción al Sagrado Corazón de Jesús con nuestro propio ejemplo, moldeando nuestros propios corazones a imitación del humilde Corazón de Jesús mediante la dulzura y mansedumbre de nuestro trato. Dar ejemplo es siempre mucho más conmovedor que predicar. ¡Que todo lo que hagamos, pensemos y digamos, incluso nuestro silencio, hable de nuestro amor al Sagrado Corazón de Nuestro Señor!',
    },
  ],
};

const office8: VigilSection = {
  id: 'office-8',
  kicker: 'Octavo Oficio',
  title: 'Amigo Celoso',
  epigraph: { text: 'He venido a traer fuego a la tierra, ¡y cuánto desearía que ya estuviera ardiendo!', citation: 'Lucas 12:49' },
  blocks: [
    { type: 'rubric', text: 'Todos de pie, por favor', posture: 'stand' },
    { type: 'hymnCue' },
    { type: 'label', text: 'Disposición Espiritual' },
    {
      type: 'paragraph',
      text: 'Como Amigos Celosos del Sagrado Corazón, considerémonos encargados de promover los intereses del Sagrado Corazón de Jesús entre nuestros semejantes. Lamentamos no poder dar a conocer al mundo entero los ricos tesoros de gracia acumulados en Su Corazón; tesoros que Nuestro Señor está más que dispuesto a derramar sobre Sus fieles amigos.',
    },
    {
      type: 'paragraph',
      text: 'Empleemos, pues, todos los medios a nuestro alcance para infundir esta dulcísima devoción en la mente de los demás, ya que es un camino corto hacia la perfección y un medio seguro de salvación. Al cumplir nuestro deber, debemos actuar en unión con el Purísimo Corazón de María y el Coro de los Principados, e implorar su ayuda.',
    },
    { type: 'rubric', text: 'Todos siéntense, por favor', posture: 'sit' },
    { type: 'label', text: 'Lectura' },
    {
      type: 'reading',
      citation: 'Romanos 8:31b-39',
      introduction: 'Lectura de la Carta de San Pablo a los Romanos.',
      phrases: [
        'Hermanos y hermanas: Si Dios está por nosotros, ¿quién estará contra nosotros?',
        'El que no perdonó a su propio Hijo, sino que lo entregó por todos nosotros, ¿cómo no nos dará también con él todas las cosas?',
        '¿Quién acusará a los elegidos de Dios? Dios es quien justifica. ¿Quién condenará?',
        'Cristo Jesús es quien murió, más aún, quien resucitó, quien además está a la diestra de Dios, quien también intercede por nosotros.',
        '¿Quién nos separará del amor de Cristo? ¿La tribulación, o la angustia, o la persecución, o el hambre, o la desnudez, o el peligro, o la espada?',
        'Como está escrito: Por causa tuya somos muertos todo el tiempo; somos contados como ovejas de matadero.',
        'Antes, en todas estas cosas somos más que vencedores por medio de aquel que nos amó.',
        'Porque estoy convencido de que ni la muerte, ni la vida, ni ángeles, ni principados, ni lo presente, ni lo por venir, ni potestades, ni lo alto, ni lo profundo, ni ninguna otra cosa creada nos podrá separar del amor de Dios que es en Cristo Jesús Señor nuestro.',
      ],
      closing: { leader: 'Palabra de Dios.', response: 'Te alabamos, Señor.' },
    },
    { type: 'label', text: 'Motivación' },
    {
      type: 'paragraph',
      text: 'Como Amigos Celosos del Sagrado Corazón, consideremos la dulce mirada que Nuestro Señor dirige a los justos, diciendo: “Mirad este Corazón que tanto ha amado a los hombres y que tan poco es amado por ellos a cambio”, y resolvamos usar todos los medios para hacerlo amar.',
    },
    {
      type: 'paragraph',
      text: 'Nuestro espíritu motivador debe ser el mismo celo que consumía al Sagrado Corazón de Jesús, manifestado en nuestros hechos, nuestras palabras y nuestros sentimientos.',
    },
    { type: 'label', text: 'Testimonio / Reflexión' },
    {
      type: 'note',
      text: 'Practica la escucha profunda, estando plenamente presente y atento a quien comparte. Deja de lado las distracciones y concéntrate verdaderamente en lo que está compartiendo.',
    },
    { type: 'rubric', text: 'Todos de rodillas, por favor', posture: 'kneel' },
    { type: 'label', text: 'Adoración ante el Santísimo Sacramento' },
    {
      type: 'prayer',
      speaker: 'A',
      phrases: [
        'Te adoro, oh Jesús, en el Santísimo Sacramento. Adoro Tu Corazón inflamado de amor por mí.',
        'Oh Jesús, ven en este momento a mi corazón y consúmelo con Tu amor.',
        'Oh Corazón de Jesús, te imploro que me concedas la gracia de amarte cada vez más.',
        'María, Madre de mi Señor y también Madre mía, haz que ame Su Corazón Divino.',
        'Oh Corazón de Jesús, que tanto nos amas, ¡qué digno de amor eres! ¿Cuándo te veré amado por todos?',
        '¡Si tan solo pudiera proclamar las maravillas de Tu amor, y hacer que todos los corazones te correspondan fielmente! Amén.',
      ],
    },
    { type: 'rubric', text: 'Todos siéntense, por favor', posture: 'sit' },
    { type: 'label', text: 'Práctica' },
    {
      type: 'paragraph',
      text: 'Como Amigos Celosos del Sagrado Corazón, esforcémonos con santo celo y discreción por poner fin a todo ultraje contra Nuestro Señor, a quien debemos ganar amor con la palabra y el ejemplo. Animemos y exhortemos a todos los que podamos, en particular a nuestros amigos y conocidos, a dar alguna muestra de amor al Sagrado Corazón, sobre todo mediante la Confesión frecuente, la Sagrada Comunión y las Horas Santas de Adoración.',
    },
  ],
};

const office9: VigilSection = {
  id: 'office-9',
  kicker: 'Noveno Oficio',
  title: 'Reparador',
  epigraph: {
    text: 'El oprobio ha quebrantado mi corazón, y estoy acongojado. Esperé quien tuviera compasión, y no lo hubo; y consoladores, y ninguno hallé.',
    citation: 'Salmo 69:20',
  },
  blocks: [
    { type: 'rubric', text: 'Todos de pie, por favor', posture: 'stand' },
    { type: 'hymnCue' },
    { type: 'label', text: 'Disposición Espiritual' },
    {
      type: 'paragraph',
      text: 'Nuestro deber principal como Reparadores, según Santa Margarita María, consiste en implorar humildemente el perdón de Dios por todos los ultrajes con que el Sagrado Corazón de Jesús es continuamente ofendido en el Santísimo Sacramento. El fiel cumplimiento de este deber nos dará la fundada esperanza de que el perdón se extienda también a nuestros propios pecados.',
    },
    {
      type: 'paragraph',
      text: 'Recordemos lo que Nuestro Señor dijo una vez a Su fiel sierva: “¿No habrá nadie que se compadezca de Mi dolor y venga en Mi ayuda, ultrajado como estoy ahora por los pecadores?” Para que nuestros actos de reparación sean aceptables al Divino Corazón, unámonos al Purísimo Corazón de María y al Coro de las Potestades.',
    },
    { type: 'rubric', text: 'Todos siéntense, por favor', posture: 'sit' },
    { type: 'label', text: 'Lectura' },
    {
      type: 'reading',
      citation: 'Mateo 23:33-39',
      introduction: 'Lectura del Santo Evangelio según San Mateo.',
      phrases: [
        '“¡Serpientes, raza de víboras! ¿Cómo escaparéis de la condenación del infierno?',
        'Por eso, mirad, yo os envío profetas, sabios y escribas; a unos los mataréis y crucificaréis, y a otros los azotaréis en vuestras sinagogas y los perseguiréis de ciudad en ciudad,',
        'para que caiga sobre vosotros toda la sangre justa derramada sobre la tierra, desde la sangre del justo Abel hasta la sangre de Zacarías, hijo de Baraquías, a quien matasteis entre el santuario y el altar.',
        'En verdad os digo que todo esto vendrá sobre esta generación.',
        '“¡Jerusalén, Jerusalén, que matas a los profetas y apedreas a los que te son enviados!',
        '¡Cuántas veces quise juntar a tus hijos, como la gallina junta a sus polluelos bajo las alas, y no quisisteis!',
        'He aquí que vuestra casa os es dejada desierta.',
        'Porque os digo que ya no me veréis, hasta que digáis: ‘Bendito el que viene en el nombre del Señor.’”',
      ],
      closing: { leader: 'Palabra de Dios.', response: 'Te alabamos, Señor.' },
    },
    { type: 'label', text: 'Motivación' },
    {
      type: 'paragraph',
      text: 'Como Reparadores, meditemos a Jesús mostrando Su Corazón y dirigiéndonos una mirada de afecto. Con Su mano derecha señala Su propio Corazón, y con la izquierda pide el nuestro, diciendo: “Hija mía, entrégame tu corazón.”',
    },
    {
      type: 'paragraph',
      text: 'Dejémonos motivar por el mismo fin que tuvo Nuestro Señor al instituir esta querida devoción: encender en todos los corazones un mayor amor a Dios.',
    },
    { type: 'label', text: 'Testimonio / Reflexión' },
    {
      type: 'note',
      text: 'Practica la escucha profunda, estando plenamente presente y atento a quien comparte. Deja de lado las distracciones y concéntrate verdaderamente en lo que está compartiendo.',
    },
    { type: 'rubric', text: 'Todos de rodillas, por favor', posture: 'kneel' },
    { type: 'label', text: 'Adoración ante el Santísimo Sacramento' },
    {
      type: 'prayer',
      speaker: 'A',
      phrases: [
        'Oh clementísimo Corazón de Jesús, Divino Propiciador, por quien el Padre Eterno ha prometido escuchar nuestras oraciones, diciendo a Tu amada esposa Margarita María: “Ora a Mí por medio de Mi Sagrado Corazón. Por este Corazón escucharé tus oraciones, y obtendrás cuanto desees.”',
        '¡Ojalá pudiera, oh Divino Redentor, borrar con mis lágrimas y lavar con mi sangre toda la ingratitud que he mostrado a cambio del exceso de Tu amor!',
        'Al débil dolor que siento por mis pecados, añado el punzante dolor que Tú sentiste durante la oración y la agonía del sudor en el Huerto de Getsemaní, ante la vista de mis pecados y los de todos los hombres, y los presento a Tu Padre Eterno junto con Tu propio Sagrado Corazón.',
        'Suple y compensa con Tu amor mi ingratitud, mi indiferencia y mi olvido de tan incomparable beneficio,',
        'y concédeme en adelante reverencia en Tu presencia, para que así pueda reparar el pasado y, con mi ejemplo, atraer muchas almas a Tu amor, al cual me consagro y entrego desde este momento, escogiendo Tu Sacratísimo Corazón como mi morada perpetua.',
        'Oh Jesús mío, usaré todos los medios para reparar tantas ofensas que la humanidad y yo hemos cometido.',
        'Te consagraré todos los días de mi vida por amor a Tu Sacratísimo Corazón, y te daré el último aliento de mi vida. Amén.',
      ],
    },
    { type: 'rubric', text: 'Todos siéntense, por favor', posture: 'sit' },
    { type: 'label', text: 'Práctica' },
    {
      type: 'paragraph',
      text: 'Como Reparadores, debemos observar todos los deberes de nuestro estado de vida, superando para ello todo obstáculo humano. Con sincera humildad de espíritu, con humilde reconocimiento de nuestros pecados y con gran confianza en los méritos de Jesucristo, hacemos esta reparación a Su Sagrado Corazón por todas las ofensas que Él recibe.',
    },
  ],
};

export const nineOfficesPart_es: LocalizedPart = {
  id: 'nine-offices',
  title: 'Nueve Oficios del Sagrado Corazón',
  shortTitle: 'Nueve Oficios',
  sections: [
    {
      reviewed: false,
      section: {
        id: 'nine-offices-intro',
        title: 'Nueve Oficios del Sagrado Corazón',
        blocks: [
          {
            type: 'paragraph',
            text: 'Los Nueve Oficios del Sagrado Corazón son un ejercicio conocido de devoción al Corazón de Jesús. Podemos rastrear su origen hasta la misma Santa Margarita María. Dos de los oficios (Suplicante y Reparador) fueron recomendados a la santa por Nuestro Señor.',
          },
          {
            type: 'paragraph',
            text: 'Ella añadió luego otros oficios hasta llegar a nueve, en unión con los nueve coros de ángeles, pues en una visión había visto a Cristo rodeado de los coros angélicos, quienes la invitaron a unirse a ellos en la adoración del Sagrado Corazón.',
          },
          {
            type: 'paragraph',
            text: 'Según la santa, el Sagrado Corazón desea “una unión y devoción especial a los santos ángeles, escogidos para amar, honrar y alabar al Sagrado Corazón en el divino sacramento del amor, para que ellos, que están en Su divina presencia, Lo amen por nosotros y por todos aquellos que no Lo aman, y reparen también las irreverencias que cometemos en Su santa presencia.”',
          },
          {
            type: 'paragraph',
            text: 'La palabra “oficios” se usa aquí en su sentido original de deber o servicio prestado a otro.',
          },
          {
            type: 'paragraph',
            text: 'Existen varios métodos en uso entre los fieles. El método sugerido por Santa Margarita María consiste en tomar un oficio por mes, durante nueve meses consecutivos, ya sea asignado o elegido individualmente. Otros prefieren tomar un oficio distinto cada día o cada semana.',
          },
          {
            type: 'paragraph',
            text: 'La práctica de esta devoción también puede variar. Aunque es bueno recitar cada día la oración sugerida en unión con un coro de ángeles, el énfasis debe estar más bien en orientar todas las acciones del día según el espíritu del propio oficio.',
          },
          {
            type: 'paragraph',
            text: 'Algunos quizás deseen profundizar en su significado durante la meditación matutina, o incorporar su espíritu en el examen particular de un mes. Donde los oficios son compartidos por otros, esta comunidad de devoción al Sagrado Corazón ayuda a fomentar la conciencia de la oración cooperativa dentro del cuerpo místico de Cristo.',
          },
          {
            type: 'paragraph',
            text: 'La práctica de los Nueve Oficios es una alianza de ángeles y hombres con Jesús y María. En esta forma de culto, nueve personas o nueve grupos de devotos hacen una alianza con los nueve coros de ángeles, asumiendo cada persona o grupo alguno de estos oficios particulares.',
          },
        ],
      },
    },
    { reviewed: false, section: office1 },
    { reviewed: false, section: office2 },
    { reviewed: false, section: office3 },
    { reviewed: false, section: office4 },
    { reviewed: false, section: office5 },
    { reviewed: false, section: office6 },
    { reviewed: false, section: office7 },
    { reviewed: false, section: office8 },
    { reviewed: false, section: office9 },
  ] satisfies LocalizedSection[],
};

/**
 * Office and choir names, translated. Applied unconditionally wherever the
 * language is selected — short labels, not gated by section review, same as
 * part titles in index.ts.
 */
export const officeChoirs_es = [
  { number: 1, name: 'Adorador', choir: 'Dominaciones' },
  { number: 2, name: 'Amante', choir: 'Serafines' },
  { number: 3, name: 'Víctima', choir: 'Virtudes' },
  { number: 4, name: 'Discípulo', choir: 'Querubines' },
  { number: 5, name: 'Siervo Fiel', choir: 'Arcángeles' },
  { number: 6, name: 'Suplicante', choir: 'Ángeles' },
  { number: 7, name: 'Promotor', choir: 'Tronos' },
  { number: 8, name: 'Amigo Celoso', choir: 'Principados' },
  { number: 9, name: 'Reparador', choir: 'Potestades' },
];
