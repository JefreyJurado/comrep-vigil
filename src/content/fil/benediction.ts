import { LocalizedPart } from '../index';

/**
 * Filipino (Tagalog) translation, pending owner review. Latin text is left
 * unchanged (as in the English source). The collect ("Deus, qui nobis...")
 * is an original Filipino rendering of the Latin, not the official Filipino
 * Roman Missal translation, which is separately copyrighted — same
 * discipline as the English source. The Divine Praises use the customary
 * "Purihin ang Diyos" wording familiar from Filipino Eucharistic adoration.
 */
export const benedictionPart_fil: LocalizedPart = {
  id: 'benediction',
  sections: [
    {
      reviewed: false,
      section: {
        id: 'benediction',
        title: 'Pagpapala sa Banal na Sakramento',
        blocks: [
          { type: 'rubric', text: 'Manikluhod po ang lahat', posture: 'kneel' },
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
              'Sa pagpapatirapa’y sambahin',
              'ang dakilang Sakramentong ito;',
              'at ang dating kaugalian',
              'ay bigyang-daan sa bagong ritwal;',
              'punan ng pananampalataya',
              'ang kakulangan ng ating mga pandama.',
              '',
              'Sa Ama at sa Anak',
              'ay ialay ang papuri at kagalakan,',
              'kaligtasan, karangalan, at kapangyarihan,',
              'gayundin ang pagpapala;',
              'at sa nagmumula sa Kanilang dalawa',
              'ay ialay ang gayunding papuri.',
              'Amen.',
            ],
          },
          {
            type: 'note',
            text: 'Nananatiling nakaluhod ang lahat habang tumatayo ang namumuno at aawit o magsasabi ng:',
          },
          {
            type: 'dialogue',
            lines: [
              {
                speaker: 'Presider',
                latin: 'Panem de cælo præstitísti eis (Allelúia).',
                text: 'Binigyan Mo sila ng Tinapay mula sa langit (Aleluya).',
              },
              {
                speaker: 'R',
                latin: 'Omne delectaméntum in se habéntem (Allelúia).',
                text: 'Na taglay ang lahat ng katamisan (Aleluya).',
              },
            ],
          },
          {
            type: 'dialogue',
            lines: [{ speaker: 'Presider', latin: 'Orémus.', text: 'Manalangin tayo.' }],
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
              'O Diyos, na sa kahanga-hangang Sakramentong ito ay iniwan Mo sa amin ang walang hanggang alaala ng Iyong Paghihirap,',
              'ipagkaloob Mo, aming isinasamo, na igalang namin nang lubos ang banal na hiwaga ng Iyong Katawan at Dugo,',
              'upang mataglay naming lagi sa amin ang bunga ng Iyong pagtubos.',
              'Ikaw na nabubuhay at naghahari kasama ng Ama at ng Espiritu Santo, iisang Diyos, magpasawalang-hanggan.',
            ],
          },
          { type: 'dialogue', lines: [{ speaker: 'R', text: 'Amen.' }] },
          {
            type: 'note',
            text: 'Inilalagay ng tumutulong na ministro ang belong pang-balikat sa balikat ng namumuno, na kukuha ng monstransya at magbabasbas sa lahat ng naroroon gamit ang Banal na Sakramento habang ang iba pang ministro ay nagsusunog ng insenso rito. Pagkatapos ay babalik ang namumuno sa harap ng altar at luluhod, pamumunuan ang lahat sa mga Banal na Papuri.',
          },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'divine-praises',
        title: 'Ang mga Banal na Papuri',
        blocks: [
          {
            type: 'list',
            items: [
              'Purihin ang Diyos.',
              'Purihin ang Kanyang Banal na Pangalan.',
              'Purihin si Hesukristo, tunay na Diyos at tunay na tao.',
              'Purihin ang Pangalan ni Hesus.',
              'Purihin ang Kanyang Kabanal-banalang Puso.',
              'Purihin ang Kanyang Kamahal-mahalang Dugo.',
              'Purihin si Hesus sa Kabanal-banalang Sakramento ng Altar.',
              'Purihin ang dakilang Ina ng Diyos, si Mariang Kabanal-banalan.',
              'Purihin ang kanyang Banal at Kalinis-linisang Paglilihi.',
              'Purihin ang kanyang maluwalhating Pag-akyat sa Langit.',
              'Purihin ang pangalan ni Maria, Birhen at Ina.',
              'Purihin si San Jose, ang kanyang pinakadalisay na kabiyak.',
              'Purihin ang Diyos sa Kanyang mga anghel at mga banal.',
            ],
          },
          { type: 'label', text: 'Muling Paglalagay ng Banal na Sakramento' },
          {
            type: 'note',
            text: 'Ibinabalik ng namumuno ang Banal na Sakramento sa tabernakulo at yumuyukod habang inaawit ang “O Sakramentong Kabanal-banalan” o iba pang angkop na awit Eukaristiko. Pagkatapos ay lalabas ang lahat ng ministro sa santuwaryo.',
          },
          { type: 'label', text: 'O Sakramentong Kabanal-banalan' },
          {
            type: 'paragraph',
            text: 'O Sakramentong Kabanal-banalan, O Sakramentong Banal, ang lahat ng papuri at pasasalamat ay sa Iyo sa bawat sandali.',
          },
        ],
      },
    },
  ],
};
