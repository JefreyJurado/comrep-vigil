import { LocalizedPart } from '../index';

/**
 * Spanish translation, pending owner review. Book/publication titles, org
 * names, and URLs in the credit lines are kept in their original English
 * form since they are proper citations, not prose to translate; the
 * surrounding descriptive text is translated.
 */
export const introPart_es: LocalizedPart = {
  id: 'intro',
  title: 'Acerca de esta Vigilia',
  sections: [
    {
      reviewed: false,
      section: {
        id: 'acknowledgements',
        title: 'Agradecimientos',
        smallTitle: true,
        blocks: [
          {
            type: 'note',
            text: 'Una nota sobre el lenguaje de esta aplicación: algunas oraciones aquí se leen un poco diferente del folleto impreso. Las traducciones litúrgicas oficiales — como el Misal Romano y la Liturgia de las Horas — están protegidas por derechos de autor de sus editoriales y requieren permiso escrito para reproducirse. Donde aún no se ha obtenido el permiso, esta aplicación utiliza una versión original que conserva el mismo significado e intención en lugar del texto oficial. Los salmos del Oficio de Lecturas del sábado utilizan la traducción Revised Grail Psalms (© 2010 Conception Abbey/The Grail, admin. GIA Publications, Inc.); se ha solicitado el permiso para este uso, pero aún no se ha concedido. Las traducciones al español y al filipino que aparecen en toda la aplicación son igualmente versiones originales, preparadas para este proyecto y no tomadas de ninguna edición oficial publicada, y aún no han sido revisadas para verificar su exactitud.',
          },
          {
            type: 'credit',
            text: 'Imagen del Sagrado Corazón de Jesús y el Inmaculado Corazón de María © 2018 Edilberto B. Dionio. Usada con agradecimiento al artista.',
          },
          {
            type: 'credit',
            text: 'Ícono de Gan Khoon Lay de www.flaticon.com',
            linkText: 'www.flaticon.com',
          },
          {
            type: 'credit',
            text: 'Extractos de Acts of Piety: Radiant Heart Prayer, Secular Male Institute of the Two Hearts, © 2017.',
          },
          {
            type: 'credit',
            text: 'Extractos de Alliance of the Two Hearts Communion of Reparation All-Night Vigil Prayer Guide, Two Hearts Media Organization, © 1997.',
          },
          {
            type: 'credit',
            text: 'Extractos de New American Bible Revised Edition, Catholic Biblical Association, © 2011.',
          },
          {
            type: 'credit',
            text: 'Introducción sobre el Santo Rosario extraída del artículo “The Holy Rosary,” disponible en https://www.theholyrosary.org/',
            linkText: 'https://www.theholyrosary.org/',
          },
          {
            type: 'credit',
            text: 'Introducción sobre las Nueve Horas del Sagrado Corazón extraída de los Archivos del Padre John A. Hardon, S.J. disponibles en https://www.therealpresence.org/archives/Prayer/Prayer_041.htm',
            linkText: 'https://www.therealpresence.org/archives/Prayer/Prayer_041.htm',
          },
          {
            type: 'credit',
            text: 'Introducción sobre el Sacramento de la Confesión extraída del artículo “A Guide for Confession” disponible en https://www.catholic.org/prayers/confession.php',
            linkText: 'https://www.catholic.org/prayers/confession.php',
          },
          {
            type: 'credit',
            text: 'Extractos de The Twelve Promises of the Sacred Heart, EWTN, © 1996.',
          },
          {
            type: 'credit',
            text: 'Extractos de The Five First Saturdays Devotion, America Needs Fatima, disponible en https://americaneedsfatima.org',
            linkText: 'https://americaneedsfatima.org',
          },
          {
            type: 'credit',
            text: 'Descargo de responsabilidad: los editores de este libro han procurado dar el crédito debido a todas las fuentes utilizadas en el texto y las ilustraciones. Cualquier error u omisión en los créditos es involuntario y será corregido en la próxima edición.',
          },
          {
            type: 'credit',
            text: 'Communion of Reparation — All Night Vigil Prayer Guide, Primera Edición Revisada\nCopyright © MMXXIV, Secular Male Institute of the Two Hearts. 45 Brgy. Imok, 4012 Calauan, Laguna, Filipinas. Impreso en Filipinas.',
          },
          {
            type: 'credit',
            bold: true,
            text: 'Esta aplicación se ofrece gratuitamente para uso devocional personal y comunitario, y no está destinada a la venta ni distribución comercial. Todos los materiales citados siguen siendo propiedad de sus respectivos titulares de derechos de autor, según se acredita anteriormente.',
          },
          { type: 'label', text: 'Agradecimiento Especial' },
          {
            type: 'credit',
            text: 'Br. Sherwin John Malubay, SMITH — Superior General · Consultor\nBr. Giancarlo Miranda, SMITH — Consejero para los Miembros · Consultor\nBr. Angelo Lorenzo “Albert Ma.” Salvacion, OATH — Consultor\nJefrey T. Jurado — Desarrollador',
          },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'foreword',
        title: 'Prólogo',
        blocks: [
          {
            type: 'note',
            text: 'Una nota sobre la naturaleza de esta vigilia: se trata de un ejercicio devocional privado en honor al Sagrado Corazón de Jesús y al Inmaculado Corazón de María, no una liturgia de la Iglesia. No sustituye a la Santa Misa, los Sacramentos, ni los libros litúrgicos oficiales de la Iglesia. Se recomienda rezarla en grupo, con un sacerdote presente para el Sacramento de la Confesión.',
          },
          {
            type: 'paragraph',
            text: 'Nos complace presentar esta edición actualizada del libro de oraciones que usamos en nuestra apreciada devoción de la Vigilia de Comunión de Reparación del Primer Viernes - Primer Sábado.',
          },
          {
            type: 'paragraph',
            text: 'En esta edición, procuramos que las almas piadosas puedan beneficiarse del uso de esta guía de vigilia explicando su trasfondo histórico y su resonancia con el Magisterio de la Santa Madre Iglesia. Nos aseguramos de que los pasajes bíblicos dentro de esta guía de vigilia utilicen la traducción católica oficial en inglés de la Biblia, la New American Bible Revised Edition.',
          },
          {
            type: 'paragraph',
            text: 'La actualización de esta guía devocional no pretende diluir nuestra práctica inmemorial de dedicar el Primer Viernes y Sábado a consolar los Corazones de Jesús y María; más bien busca, aunque de forma indigna, un renovado entusiasmo y celo para comprometerse con el honor y la alabanza de los Corazones de Jesús y María y por la salvación de las almas.',
          },
          {
            type: 'paragraph',
            text: 'Esperamos que esta guía de oración, preparada con amor y oración, sea de gran utilidad no solo para los miembros de los Institutos de los Dos Corazones, sino también para toda la Iglesia.',
          },
          {
            type: 'paragraph',
            text: '¡Bendito sea por siempre el Sacratísimo Corazón de Jesús y el Doloroso e Inmaculado Corazón de María!',
          },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'why-we-pray',
        title: '¿Por Qué Necesitamos Orar y Hacer Reparación?',
        blocks: [
          {
            type: 'paragraph',
            text: 'En 1675, Jesús pidió a Santa Margarita María Alacoque hacer “reparación” durante nueve Primeros Viernes a Su Sacratísimo Corazón, ultrajado por tanto pecado. El Ángel de la Paz que se apareció a los tres niños de Fátima en 1916 confirmó esto cuando, en la oración que les enseñó, dijo: “por los ultrajes, sacrilegios e indiferencias con que Él es ofendido...”',
          },
          {
            type: 'paragraph',
            text: 'Luego, en 1917, Nuestra Señora de Fátima pidió que también se hiciera reparación a Su Inmaculado Corazón durante cinco Primeros Sábados consecutivos, a causa de las blasfemias contra (1) su Inmaculada Concepción; (2) su virginidad; (3) su maternidad divina, así como su maternidad espiritual de los hombres; (4) los pecados de quienes enseñan indiferencia y odio hacia ella en los corazones de los niños; y (5) los sacrilegios de quienes la ultrajan en sus imágenes sagradas.',
          },
          {
            type: 'paragraph',
            text: 'El 10 de diciembre de 1925, Nuestro Señor dijo a la Hna. Lucía, la vidente de Fátima: “Ten compasión del Corazón de tu Santísima Madre, cubierto de espinas con que los hombres ingratos lo traspasan a cada momento, sin que haya quien haga un acto de reparación para arrancárselas...” Nuestra Señora entonces prometió: “Si mis peticiones son escuchadas, mi Inmaculado Corazón triunfará... y una era de paz será concedida a la humanidad.”',
          },
          {
            type: 'paragraph',
            text: 'En una carta al P. José Bernardo Gonçalves, del 18 de mayo de 1936, la Hna. Lucía también reveló el deseo de Jesús de que la devoción al Inmaculado Corazón de Su Madre se colocara junto a la devoción a Su Sacratísimo Corazón.',
          },
          {
            type: 'paragraph',
            text: 'Hoy, mientras la “cultura de la muerte” se convierte en el estilo de vida de muchos, la petición de Nuestro Señor de oración y reparación se vuelve más urgente que nunca. El Adversario busca destruir la familia porque es el corazón de la Iglesia y de la sociedad. Una familia santa forma una Iglesia santa y crea una sociedad santa.',
          },
          {
            type: 'paragraph',
            text: 'No es de extrañar entonces que la batalla espiritual más feroz se libre precisamente dentro del hogar: padres contra hijos, hijos contra padres, cónyuges entre sí. Lamentablemente, muchos pierden en la guerra espiritual porque no saben que existe o simplemente no creen en ella.',
          },
          {
            type: 'paragraph',
            text: 'Pero lo que hoy vemos — jóvenes delincuentes, cónyuges separados, libertinaje, rebeldía — son fuertes indicios de que la guerra espiritual es, en efecto, real. Ningún esfuerzo humano puede jamás vencer en la guerra espiritual.',
          },
          {
            type: 'paragraph',
            text: 'Puesto que el Enemigo es espiritual, las armas para combatirlo también deben serlo. La oración y la reparación son las armas que el Sagrado Corazón de Jesús y el Inmaculado Corazón de María nos dan hoy para vencer en esta batalla espiritual.',
          },
          {
            type: 'paragraph',
            text: 'Se pide a los padres que oren y hagan reparación por sus hijos inmersos en la “cultura de la muerte”. También se pide a los hijos que oren y hagan reparación por la santidad de vida en su hogar. A todos se les pide orar y hacer sacrificios, especialmente en estos tiempos difíciles, para reparar los ultrajes y sacrilegios cometidos contra Dios y la Santísima Madre, y por la paz y unidad en la familia.',
          },
          {
            type: 'paragraph',
            text: 'La urgente petición de hacer “reparación” a los Corazones de Jesús y María AHORA (pronunciada con lágrimas y sangre por Nuestra Señora a lo largo de los siglos y a innumerables hombres y mujeres santos como Santa Margarita María Alacoque, San Juan Eudes, Santa Faustina Kowalska, Santa Catalina Labouré, San Pedro Julián Eymard, Santa Bernadette, entre otros) es de lo que trata HOY la “Alianza de los Dos Corazones, Comunión de Reparación”.',
          },
        ],
      },
    },
  ],
};
