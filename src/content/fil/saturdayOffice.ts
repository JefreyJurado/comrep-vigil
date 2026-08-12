import { LocalizedPart } from '../index';

/**
 * Filipino (Tagalog) translation, pending owner review. The opening versicle
 * and the "Luwalhati sa Ama" doxology use the fixed, traditional Filipino
 * wording common to every hour of the Liturgy of the Hours, not a specific
 * translator's copyrightable expression. The psalm text is an original
 * translation of the English source (not a copy of any official,
 * copyrighted Filipino psalter) for the same reason noted in the
 * Acknowledgements about the Revised Grail Psalms.
 */
export const saturdayOfficePart_fil: LocalizedPart = {
  id: 'saturday-office',
  title: 'Oras ng Pagbasa Tuwing Sabado',
  shortTitle: 'Oras ng Pagbasa',
  sections: [
    {
      reviewed: false,
      section: {
        id: 'saturday-office-opening',
        title: 'Oras ng Pagbasa Tuwing Sabado',
        blocks: [
          {
            type: 'note',
            text: 'Paggunita sa Mapalad na Birheng Maria — hinango mula sa Oras ng Pagbasa para sa Kapistahan ng Kalinis-linisang Puso ni Maria.',
          },
          { type: 'rubric', text: 'Tumayo po tayong lahat at gumawa ng Tanda ng Krus habang nananalangin ang pari', posture: 'stand' },
          {
            type: 'dialogue',
            lines: [
              { speaker: 'L', text: '(†) O Diyos, halina at saklolohan mo ako.' },
              { speaker: 'R', text: 'Panginoon, magmadali kang saklolohan ako.' },
              { speaker: 'L', text: 'Luwalhati sa Ama, at sa Anak, at sa Espiritu Santo.' },
              { speaker: 'R', text: 'Kapara noong sa unang-una, ngayon at magpakailanman, at magpasawalang-hanggan. Amen.' },
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
        title: 'Awit 24 — Ang Pagpasok ng Panginoon sa Kanyang Templo',
        blocks: [
          {
            type: 'dialogue',
            lines: [
              { speaker: 'L', text: 'Tumanggap si Maria ng pagpapala mula sa Panginoon at habag mula sa Diyos na kanyang Tagapagligtas.' },
              { speaker: 'R', text: 'Tumanggap si Maria ng pagpapala mula sa Panginoon at habag mula sa Diyos na kanyang Tagapagligtas.' },
            ],
          },
          {
            type: 'dialogue',
            lines: [
              { speaker: 'Side 1', text: 'Sa Panginoon ang lupa at ang kabuuan nito, ang daigdig at ang lahat ng naninirahan dito.' },
              { speaker: 'Side 1', text: 'Siya ang nagtatag nito sa ibabaw ng mga dagat, sa ibabaw ng mga tubig ay itinatag Niya ito.' },
              {
                speaker: 'Side 2',
                text: 'Sino ang makaaakyat sa bundok ng Panginoon? Sino ang makatatayo sa Kanyang banal na dako? Ang taong may malinis na kamay at dalisay na puso, na hindi humahangad ng walang-kabuluhan, na hindi sumumpa upang manlinlang sa kanyang kapwa.',
              },
              {
                speaker: 'Side 1',
                text: 'Siya’y tatanggap ng pagpapala mula sa Panginoon, at gantimpala mula sa Diyos na kanyang Tagapagligtas. Sila ang mga taong humahanap sa Kanya, na humahanap sa mukha ng Diyos ni Jacob.',
              },
              { speaker: 'Side 2', text: 'O mga tarangkahan, itaas ninyo ang inyong mga ulo, tumaas kayo, sinaunang mga pinto. Papasukin ninyo siya, ang hari ng kaluwalhatian!' },
              { speaker: 'Side 1', text: 'Sino ang hari ng kaluwalhatian? Ang Panginoon, ang makapangyarihan, ang matapang, ang Panginoon, ang matapang sa digmaan.' },
              { speaker: 'Side 2', text: 'O mga tarangkahan, itaas ninyo ang inyong mga ulo, tumaas kayo, sinaunang mga pinto. Papasukin ninyo siya, ang hari ng kaluwalhatian!' },
              { speaker: 'Side 1', text: 'Sino Siya, ang hari ng kaluwalhatian? Ang Panginoon ng mga hukbo, Siya ang hari ng kaluwalhatian.' },
            ],
          },
          {
            type: 'dialogue',
            lines: [
              {
                speaker: 'A',
                text: 'Luwalhati sa Ama, at sa Anak, at sa Espiritu Santo, kapara noong sa unang-una, ngayon at magpakailanman, at magpasawalang-hanggan. Amen.',
              },
              { speaker: 'A', text: 'Tumanggap si Maria ng pagpapala mula sa Panginoon at habag mula sa Diyos na kanyang Tagapagligtas.' },
            ],
          },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'psalm-46',
        title: 'Awit 46 — Ang Diyos ay Kasama Natin',
        blocks: [
          {
            type: 'dialogue',
            lines: [
              { speaker: 'L', text: 'Ginawa ng Kataas-taasan ang Kanyang tahanan na isang banal na templo.' },
              { speaker: 'R', text: 'Ginawa ng Kataas-taasan ang Kanyang tahanan na isang banal na templo.' },
            ],
          },
          {
            type: 'dialogue',
            lines: [
              {
                speaker: 'Side 1',
                text: 'Ang Diyos ay kublihan at lakas para sa atin, kasangga na laging malapit sa panahon ng kagipitan: kaya’t hindi tayo matatakot kahit mayanig ang lupa, kahit mahulog ang mga bundok sa kailaliman ng dagat, kahit umugong at bumula ang mga tubig nito, kahit mayanig ang mga bundok sa alon nito.',
              },
              { speaker: 'Side 2', text: 'Ang Panginoon ng mga hukbo ay kasama natin, ang Diyos ni Jacob ang ating kanlungan.' },
              {
                speaker: 'Side 1',
                text: 'Ang mga tubig ng ilog ay nagbibigay-kagalakan sa lungsod ng Diyos, ang banal na dakong tinatahanan ng Kataas-taasan. Naririto ang Diyos sa loob nito, hindi ito mayayanig; sasaklolohan ito ng Diyos sa pagsikat ng araw. Nagngangalit ang mga bansa, nayayanig ang mga kaharian; itinataas Niya ang Kanyang tinig, at natutunaw ang lupa.',
              },
              { speaker: 'Side 2', text: 'Ang Panginoon ng mga hukbo ay kasama natin, ang Diyos ni Jacob ang ating kanlungan.' },
              {
                speaker: 'Side 1',
                text: 'Halina kayo, masdan ninyo ang mga gawa ng Panginoon, ang kamangha-manghang mga gawa na Kanyang ginawa sa lupa. Winawakasan Niya ang mga digmaan hanggang sa dulo ng lupa; binabali Niya ang busog, pinuputol Niya ang sibat. Sinusunog Niya ang mga kalasag sa apoy. “Tumigil kayo at kilalanin ninyong Ako ang Diyos, dakila sa gitna ng mga bansa, dakila sa buong lupa!”',
              },
              { speaker: 'Side 2', text: 'Ang Panginoon ng mga hukbo ay kasama natin, ang Diyos ni Jacob ang ating kanlungan.' },
            ],
          },
          {
            type: 'dialogue',
            lines: [
              {
                speaker: 'A',
                text: 'Luwalhati sa Ama, at sa Anak, at sa Espiritu Santo, kapara noong sa unang-una, ngayon at magpakailanman, at magpasawalang-hanggan. Amen.',
              },
              { speaker: 'A', text: 'Ginawa ng Kataas-taasan ang Kanyang tahanan na isang banal na templo.' },
            ],
          },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'psalm-87',
        title: 'Awit 87 — Ang Jerusalem ay Ina Nating Lahat',
        blocks: [
          {
            type: 'dialogue',
            lines: [
              { speaker: 'L', text: 'Mga kadakilaang bagay ang sinasabi tungkol sa iyo, O Birheng Maria.' },
              { speaker: 'R', text: 'Mga kadakilaang bagay ang sinasabi tungkol sa iyo, O Birheng Maria.' },
            ],
          },
          {
            type: 'dialogue',
            lines: [
              {
                speaker: 'Side 1',
                text: 'Nasa banal na bundok ang Kanyang lungsod, na minamahal ng Panginoon. Higit na iniibig ng Panginoon ang mga pintuan ng Sion kaysa sa lahat ng tahanan ni Jacob. Mga kadakilaang bagay ang sinasabi tungkol sa iyo, O lungsod ng Diyos!',
              },
              {
                speaker: 'Side 2',
                text: 'Ibibilang ko ang Babilonia at ang Ehipto sa mga kumikilala sa akin; ang Filistia, Tiro, Etiopia, ito ang magiging kanyang mga anak, at ang Sion ay tatawaging “Ina” sapagkat lahat sila’y magiging kanyang mga anak.',
              },
              {
                speaker: 'Side 1',
                text: 'Siya, ang Panginoong Kataas-taasan, ang nagbibigay sa bawat isa ng kanyang lugar. Sa Kanyang talaan ng mga bayan ay isinusulat Niya: “Ito ang kanyang mga anak,” at habang sumasayaw sila’y aawit: “Sa iyo natatagpuan ng lahat ang kanilang tahanan.”',
              },
            ],
          },
          {
            type: 'dialogue',
            lines: [
              {
                speaker: 'A',
                text: 'Luwalhati sa Ama, at sa Anak, at sa Espiritu Santo, kapara noong sa unang-una, ngayon at magpakailanman, at magpasawalang-hanggan. Amen.',
              },
              { speaker: 'A', text: 'Mga kadakilaang bagay ang sinasabi tungkol sa iyo, O Birheng Maria.' },
            ],
          },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'saturday-readings',
        title: 'Mga Pagbasa',
        blocks: [
          {
            type: 'note',
            text: 'Ang Unang Pagbasa at ang Tugon ay hango sa Oras ng Pagbasa para sa araw na ito. Ang Ikalawang Pagbasa ay mula sa isang sermon ni San Lorenzo Justiniano, Obispo.',
          },
          { type: 'rubric', text: 'Pakiusap, tumigil nang sandali para sa maikling tahimik na pagninilay pagkatapos ng pagbasa.' },
          { type: 'label', text: 'Tugon' },
          {
            type: 'dialogue',
            lines: [
              { speaker: 'Lector', text: 'O Birhen na lubos na dalisay at banal, anong mga salita ang makahuhuli sa iyong kagandahan?' },
              { speaker: 'A', text: 'Ang mga langit, sa kanilang buong kalawakan, ay hindi makakayang saklawin ang Diyos na iyong dinala sa iyong sinapupunan.' },
              { speaker: 'Lector', text: 'Pinagpala ka sa mga babae, at pinagpala ang sanggol na iyong isinilang.' },
              { speaker: 'A', text: 'Ang mga langit, sa kanilang buong kalawakan, ay hindi makakayang saklawin ang Diyos na iyong dinala sa iyong sinapupunan.' },
            ],
          },
          { type: 'rubric', text: 'Tumayo po tayong lahat', posture: 'stand' },
          { type: 'label', text: 'Pangwakas na Panalangin' },
          {
            type: 'prayer',
            speaker: 'L',
            phrases: [
              'Ama, ginawa Mong karapat-dapat na tahanan ng Iyong Espiritu Santo ang puso ng Birheng Maria.',
              'Sa pamamagitan ng kanyang mga panalangin, hubugin Mo ang aming sariling mga puso upang maging templong higit na karapat-dapat sa Kanyang kaluwalhatian.',
              'Hinihiling namin ito sa pamamagitan ni Hesukristo na Iyong Anak, na nabubuhay at naghahari kasama Mo at ng Espiritu Santo, iisang Diyos, magpasawalang-hanggan.',
            ],
          },
          {
            type: 'dialogue',
            lines: [
              { speaker: 'A', text: 'Amen.' },
              { speaker: 'L', text: 'Purihin natin ang Panginoon.' },
              { speaker: 'R', text: 'At pasalamatan Siya.' },
            ],
          },
        ],
      },
    },
  ],
};
