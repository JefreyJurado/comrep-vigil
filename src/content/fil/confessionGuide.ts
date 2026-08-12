import { LocalizedPart } from '../index';
import { ContentBlock } from '../../types/content';
import { examinationOfConscience_fil } from './examinationOfConscience';

/** Filipino (Tagalog) translation, pending owner review. Original translation of the English source. */
const examinationBlocks: ContentBlock[] = examinationOfConscience_fil.flatMap(
  (section): ContentBlock[] => [
    { type: 'label', text: section.title },
    { type: 'list', items: section.questions },
  ]
);

export const confessionGuidePart_fil: LocalizedPart = {
  id: 'confession-guide',
  title: 'Isang Gabay para sa Kumpisal',
  sections: [
    {
      reviewed: false,
      section: {
        id: 'before-confession',
        title: 'Bago ang Kumpisal',
        blocks: [
          {
            type: 'paragraph',
            text: 'Magkaroon ng tunay na pagsisisi sa iyong mga kasalanan. Ang mahalagang gawa ng Penitensiya, sa bahagi ng nagsisisi, ay ang kontrisyon, isang malinaw at matibay na pagtanggi sa kasalanang nagawa, kasama ang pasya na hindi na ito muling gagawin, dahil sa pag-ibig sa Diyos na muling isinisilang kasama ng pagsisisi.',
          },
          {
            type: 'paragraph',
            text: 'Ang pasyang iwasan ang paggawa ng mga kasalanang ito sa hinaharap (pagbabago) ay tiyak na palatandaan na ang iyong pagsisisi ay tunay at wagas. Hindi ito nangangahulugang kailangan ang pangakong hindi na muling babagsak sa kasalanan. Sapat na, para sa tunay na pagsisisi, ang pasyang pagsikapang iwasan ang malapit na okasyon ng kasalanan.',
          },
          {
            type: 'paragraph',
            text: 'Ang biyaya ng Diyos, kasabay ng layuning itama ang iyong buhay, ay magbibigay sa iyo ng lakas upang labanan at daigin ang tukso sa hinaharap.',
          },
          { type: 'label', text: 'Pagsusuri ng Budhi' },
          {
            type: 'paragraph',
            text: 'Bago pumunta sa Kumpisal, dapat kang magsuri ng mga kasalanang mortal at venyal mula sa iyong huling sakramental na kumpisal, at dapat mong ipahayag ang pagsisisi sa mga kasalanan, pagkamuhi sa kasalanan, at matibay na pasyang hindi na muling magkasala.',
          },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'examination-of-conscience',
        title: 'Pagsusuri ng Budhi',
        blocks: [
          {
            type: 'paragraph',
            text: 'Maglaan ng tahimik na sandali upang pagnilayan ang bawat tanong sa ibaba, na isinasaalang-alang ang iyong mga kaisipan, salita, at gawa mula sa iyong huling kumpisal.',
          },
          ...examinationBlocks,
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'during-confession',
        title: 'Habang Nangungumpisal',
        blocks: [
          {
            type: 'paragraph',
            text: 'Matapos suriin ang iyong budhi at sabihin sa Diyos ang iyong pagsisisi, pumasok ka sa kumpisalan. Maaari kang lumuhod sa harap ng rehas o umupo upang makipag-usap nang mukhaan sa pari.',
          },
          {
            type: 'note',
            text: 'Simulan ang iyong kumpisal ng Tanda ng Krus: “Sa ngalan ng Ama, at ng Anak, at ng Espiritu Santo. Ang huli kong kumpisal ay ___ linggo (buwan, taon) na ang nakalipas.”',
          },
          {
            type: 'paragraph',
            text: 'Sabihin ang mga kasalanang iyong naaalala. Magsimula sa pinakamahirap sabihin. Upang makagawa ng mabuting kumpisal, dapat ipagtapat ng mananampalataya ang lahat ng mortal na kasalanan, ayon sa uri at bilang.',
          },
          {
            type: 'paragraph',
            text: 'Matapos ipagtapat ang lahat ng kasalanang iyong naaalala mula sa iyong huling mabuting kumpisal, maaari mong tapusin sa pagsasabing, “Nagsisisi ako sa mga ito at sa lahat ng kasalanan ng aking nakaraang buhay.”',
          },
          {
            type: 'paragraph',
            text: 'Pakinggan ang mga salita ng pari. Bibigyan ka niya ng ilang penitensiya. Ang paggawa ng penitensiya ay magpapababa sa parusang pansamantala na dulot ng mga kasalanang napatawad na. Kapag inanyayahan, bigkasin ang isang panalangin ng pagsisisi o Aktong Pagsisisi gaya ng nasa ibaba.',
          },
          { type: 'label', text: 'Isang Akto ng Pagsisisi' },
          {
            type: 'prayer',
            phrases: [
              'Diyos ko, taos-puso akong nagsisisi sa aking pagkakasala sa Iyo, at kinasusuklaman ko ang lahat ng aking kasalanan,',
              'sapagkat kinatatakutan ko ang pagkawala ng langit at ang mga pahirap ng impiyerno.',
              'Ngunit higit sa lahat, sapagkat nagkasala ako laban sa Iyo, aking Diyos, na lubos na mabuti at karapat-dapat sa aking buong pagmamahal.',
              'Matibay kong ipinasya, sa tulong ng Iyong biyaya, na ipagtapat ang aking mga kasalanan, gawin ang penitensiya, at ituwid ang aking buhay. Amen.',
            ],
          },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'end-and-after-confession',
        title: 'Sa Katapusan ng, at Pagkatapos ng, Kumpisal',
        blocks: [
          {
            type: 'paragraph',
            text: 'Pakinggan ang mga salita ng absolusyon, ang sakramental na kapatawaran ng Simbahan sa pamamagitan ng ordenadong pari. Habang pinakikinggan mo ang mga salita ng kapatawaran, maaari kang gumawa ng Tanda ng Krus kasama ng pari. Kung tatapusin niya sa pagsasabing, “Magpasalamat kayo sa Panginoon sapagkat Siya’y mabuti,” sagutin, “Sapagkat ang Kanyang habag ay walang hanggan.”',
          },
          {
            type: 'paragraph',
            text: 'Magpasalamat sa Diyos dahil pinatawad ka Niya muli. Kung maalala mo ang isang malubhang kasalanang nalimutan mong sabihin, manatiling tiwasay na napatawad na ito kasama ng iba, ngunit siguraduhing ipagtapat ito sa iyong susunod na Kumpisal. Gawin ang Penitensiyang itinalaga sa iyo.',
          },
          {
            type: 'paragraph',
            text: 'Magpasya na bumalik nang madalas sa Sakramento ng Pakikipagkasundo. Kaming mga Katoliko ay mapalad na taglay ang Sakramento ng Pakikipagkasundo. Ito ang karaniwang paraan upang mapatawad ang aming mga kasalanan. Ang sakramentong ito ay makapangyarihang tulong upang malayo tayo sa aming mga kahinaan, lumago sa kabanalan, at mamuhay nang balanse at may kabutihan.',
          },
        ],
      },
    },
  ],
};
