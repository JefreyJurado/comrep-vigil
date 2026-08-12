import { LocalizedPart } from '../index';

/**
 * Filipino (Tagalog) translation, pending owner review. The Latin hymn text
 * is unchanged; only the vernacular column and the surrounding prayer text
 * are translated.
 */
export const openingPart_fil: LocalizedPart = {
  id: 'opening',
  title: 'Pambungad',
  sections: [
    {
      reviewed: false,
      section: {
        id: 'exposition',
        title: 'Pagpapasilay',
        blocks: [
          { type: 'rubric', text: 'Lumuhod po tayong lahat', posture: 'kneel' },
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
              'O Kaligtasang Hain,',
              'na nagbubukas ng pintuan ng langit!',
              'Kami’y nililigalig ng mga kaaway sa lahat ng dako;',
              'bigyan Mo kami ng lakas, kami’y saklolohan.',
              '',
              'Sa Iisa at Tatlong Panginoon',
              'ay maghari ang walang-hanggang kaluwalhatian;',
              'Siya nawang magkaloob sa amin ng buhay na walang hanggan',
              'sa aming tunay na bayan.',
              'Amen.',
            ],
          },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'salutation',
        title: 'Pagbati',
        blocks: [
          {
            type: 'dialogue',
            lines: [
              { speaker: 'L', text: 'Sa ngalan ng (†) Ama, at ng Anak, at ng Espiritu Santo.' },
              { speaker: 'R', text: 'Amen.' },
            ],
          },
          {
            type: 'prayer',
            speaker: 'A',
            phrases: [
              'O Kabanal-banalang Trinidad: Ama, Anak, at Espiritu Santo, buong-pusong sinasamba Kita.',
              'Inihahandog ko sa Iyo ang lubhang mahalagang Katawan, Dugo, Kaluluwa, at Pagka-Diyos ng ating Panginoong Hesukristo,',
              'na tunay na naririto sa lahat ng tabernakulo sa buong mundo,',
              'bilang panunumbalik sa lahat ng pang-aalipusta, sakrilehiyo, at kawalang-malasakit na Kanyang tinatanggap.',
              'Sa pamamagitan ng walang-hanggang kabutihang-loob ng Banal na Puso ni Hesus at ng Kalinis-linisang Puso ni Maria,',
              'ipinamamanhik ko ang pagbabalik-loob ng mga kaawa-awang makasalanan.',
              'Amen.',
            ],
          },
        ],
      },
    },
  ],
};
