import { LocalizedPart } from '../index';

/**
 * Filipino (Tagalog) translation, pending owner review. Book/publication
 * titles, org names, and URLs in the credit lines are kept in their original
 * English form since they are proper citations, not prose to translate; the
 * surrounding descriptive text is translated.
 */
export const introPart_fil: LocalizedPart = {
  id: 'intro',
  title: 'Tungkol sa Bigilyang Ito',
  sections: [
    {
      reviewed: false,
      section: {
        id: 'acknowledgements',
        title: 'Pasasalamat',
        smallTitle: true,
        blocks: [
          {
            type: 'note',
            text: 'Isang paalala tungkol sa mga salita ng app na ito: may mga panalanging dito na bahagyang naiiba sa nakalimbag na booklet. Ang mga opisyal na saling liturhiko — tulad ng Roman Missal at ng Liturgy of the Hours — ay may karapatang-ari (copyright) ng kanilang mga tagapaglathala at nangangailangan ng nakasulat na pahintulot upang muling ilathala. Kung saan hindi pa nakukuha ang pahintulot, gumagamit ang app na ito ng sariling salin na iisa ang kahulugan at layunin, sa halip na ang opisyal na pananalita. Ang mga salmo sa Saturday Office of Readings ay gumagamit ng Revised Grail Psalms na salin (© 2010 Conception Abbey/The Grail, admin. GIA Publications, Inc.); hiniling na ang pahintulot para dito ngunit hindi pa naipagkakaloob. Ang mga saling Espanyol at Filipino sa buong app ay orihinal ding mga bersyon, inihanda para sa proyektong ito at hindi kinuha mula sa anumang opisyal na inilathalang edisyon, at hindi pa nasusuri para sa kawastuhan.',
          },
          {
            type: 'credit',
            text: 'Larawan ng Banal na Puso ni Hesus at ng Kalinis-linisang Puso ni Maria © 2018 Edilberto B. Dionio. Ginamit nang may pasasalamat sa alagad-sining.',
          },
          {
            type: 'credit',
            text: 'Icon mula kay Gan Khoon Lay ng www.flaticon.com',
            linkText: 'www.flaticon.com',
          },
          {
            type: 'credit',
            text: 'Mga sipi mula sa Acts of Piety: Radiant Heart Prayer, Secular Male Institute of the Two Hearts, © 2017.',
          },
          {
            type: 'credit',
            text: 'Mga sipi mula sa Alliance of the Two Hearts Communion of Reparation All-Night Vigil Prayer Guide, Two Hearts Media Organization, © 1997.',
          },
          {
            type: 'credit',
            text: 'Mga sipi mula sa New American Bible Revised Edition, Catholic Biblical Association, © 2011.',
          },
          {
            type: 'credit',
            text: 'Panimula tungkol sa Banal na Rosaryo, sipi mula sa artikulong “The Holy Rosary,” makikita sa https://www.theholyrosary.org/',
            linkText: 'https://www.theholyrosary.org/',
          },
          {
            type: 'credit',
            text: 'Panimula tungkol sa Siyam na Oras ng Banal na Puso, sipi mula sa Father John A. Hardon, S.J. Archives, makikita sa https://www.therealpresence.org/archives/Prayer/Prayer_041.htm',
            linkText: 'https://www.therealpresence.org/archives/Prayer/Prayer_041.htm',
          },
          {
            type: 'credit',
            text: 'Panimula tungkol sa Sakramento ng Kumpisal, sipi mula sa artikulong “A Guide for Confession” makikita sa https://www.catholic.org/prayers/confession.php',
            linkText: 'https://www.catholic.org/prayers/confession.php',
          },
          {
            type: 'credit',
            text: 'Mga sipi mula sa The Twelve Promises of the Sacred Heart, EWTN, © 1996.',
          },
          {
            type: 'credit',
            text: 'Mga sipi mula sa The Five First Saturdays Devotion, America Needs Fatima, makikita sa https://americaneedsfatima.org',
            linkText: 'https://americaneedsfatima.org',
          },
          {
            type: 'credit',
            text: 'Paunawa: sinikap ng mga editor ng aklat na ito na bigyan ng nararapat na pagkilala ang lahat ng pinagkunan na ginamit sa teksto at mga larawan. Ang anumang mali o kulang na pagkilala ay hindi sinasadya at itutuwid sa susunod na edisyon.',
          },
          {
            type: 'credit',
            text: 'Communion of Reparation — All Night Vigil Prayer Guide, Unang Rebisadong Edisyon\nCopyright © MMXXIV, Secular Male Institute of the Two Hearts. 45 Brgy. Imok, 4012 Calauan, Laguna, Pilipinas. Inilimbag sa Pilipinas.',
          },
          {
            type: 'credit',
            bold: true,
            text: 'Ang app na ito ay inaalok nang walang bayad para sa personal at pangkomunidad na debosyon, at hindi ito para sa pagbebenta o pamamahagi nang komersyal. Ang lahat ng sinipi na materyales ay nananatiling ari-arian ng kani-kanilang may-ari ng karapatang-ari, gaya ng nabanggit sa itaas.',
          },
          { type: 'label', text: 'Natatanging Pasasalamat' },
          {
            type: 'credit',
            text: 'Br. Sherwin John Malubay, SMITH — Superior General · Consultant\nBr. Giancarlo Miranda, SMITH — Councilor for Members · Consultant\nBr. Angelo Lorenzo “Albert Ma.” Salvacion, OATH — Consultant\nJefrey T. Jurado — Developer',
          },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'foreword',
        title: 'Paunang Salita',
        blocks: [
          {
            type: 'note',
            text: 'Isang paalala tungkol sa katangian ng bigilyang ito: isa itong pribadong debosyonal na gawain bilang parangal sa Banal na Puso ni Hesus at sa Kalinis-linisang Puso ni Maria, hindi isang liturhiya ng Simbahan. Hindi ito kapalit ng Banal na Misa, ng mga Sakramento, o ng mga opisyal na liturhikong aklat ng Simbahan. Iminumungkahi na ipanalangin ito nang sama-sama, may kasamang paring maghahain ng Sakramento ng Kumpisal.',
          },
          {
            type: 'paragraph',
            text: 'Ikinagagalak naming ihain ang rebisadong edisyon ng aklat-panalanging ginagamit namin sa aming minamahal na debosyon ng First Friday - First Saturday Communion of Reparation Vigil.',
          },
          {
            type: 'paragraph',
            text: 'Sa edisyong ito, sinikap naming makinabang ang mga maka-Diyos na kaluluwa sa paggamit ng gabay ng bigilyang ito sa pamamagitan ng pagpapaliwanag ng kasaysayan nito at ng pagkakaugnay nito sa Magisterium ng Banal na Inang Simbahan. Sinigurado naming ang mga banal na kasulatang ginamit sa gabay na ito ay mula sa opisyal na saling Katoliko sa Ingles ng Bibliya, ang New American Bible Revised Edition.',
          },
          {
            type: 'paragraph',
            text: 'Ang pag-uunlad ng gabay-debosyonal na ito ay hindi layong pahinain ang aming matagal nang kaugaliang italaga ang Unang Biyernes at Sabado sa pag-aliw sa mga Puso ni Hesus at Maria; sa halip, ito’y naghahangad — bagama’t di-karapat-dapat — ng panibagong sigasig at pananabik na italaga ang sarili para sa karangalan at papuri ng mga Puso ni Hesus at Maria at para sa kaligtasan ng mga kaluluwa.',
          },
          {
            type: 'paragraph',
            text: 'Umaasa kami na ang gabay-panalanging ito, na inihanda namin nang may pagmamahal at pananalangin, ay maging lubhang kapaki-pakinabang hindi lamang sa mga kasapi ng Two Hearts Institutes, kundi maging sa buong Simbahan.',
          },
          {
            type: 'paragraph',
            text: 'Purihin nawa magpakailanman ang Kabanal-banalang Puso ni Hesus at ang Mapighati at Kalinis-linisang Puso ni Maria!',
          },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'why-we-pray',
        title: 'Bakit Kailangan Nating Manalangin at Manumbalik?',
        blocks: [
          {
            type: 'paragraph',
            text: 'Noong 1675, hiniling ni Hesus kay Santa Margarita Maria Alacoque na gumawa ng “panunumbalik” sa siyam na Unang Biyernes tungo sa Kanyang Kabanal-banalang Puso na labis na inalipusta ng kasalanan. Kinumpirma ito ng Anghel ng Kapayapaan na nagpakita sa tatlong bata ng Fatima noong 1916 nang sabihin niya sa dasal na itinuro niya sa kanila: “dahil sa mga pang-aalipusta, sakrilehiyo, at kawalang-malasakit na Kanyang tinatanggap...”',
          },
          {
            type: 'paragraph',
            text: 'Pagkatapos, noong 1917, hiniling ng Mahal na Birhen ng Fatima na gawin din ang panunumbalik sa Kanyang Kalinis-linisang Puso sa limang magkakasunod na Unang Sabado, dahil sa mga kalapastanganan laban sa (1) kanyang Kalinis-linisang Paglilihi; (2) kanyang pagkabirhen; (3) kanyang banal na pagka-ina, gayundin ang kanyang espirituwal na pagka-ina sa mga tao; (4) ang mga kasalanan ng mga nagtuturo ng kawalang-malasakit at pagkamuhi laban sa kanya sa mga puso ng mga bata; at (5) ang mga sakrilehiyo ng mga nang-aalipusta sa kanya sa kanyang mga banal na larawan.',
          },
          {
            type: 'paragraph',
            text: 'Noong Disyembre 10, 1925, sinabi ng Panginoon kay Sister Lucia, ang nakakita sa Fatima: “Maawa ka sa puso ng iyong Kabanal-banalang Ina. Ito’y natatakpan ng mga tinik na patuloy na itinutusok ng mga taong walang utang-na-loob, at walang sinumang nag-aalis ng mga ito sa pamamagitan ng isang gawa ng panunumbalik...” Ipinangako noon ng Mahal na Birhen: “Kung diringgin ang aking mga hiling, mananaig ang aking Kalinis-linisang Puso... at ipagkakaloob sa sangkatauhan ang isang Panahon ng Kapayapaan.”',
          },
          {
            type: 'paragraph',
            text: 'Sa pagsulat kay Fr. Jose Bernardo Goncalves noong Mayo 18, 1936, ibinunyag din ni Sister Lucia ang nais ni Hesus na ang debosyon sa Kalinis-linisang Puso ng Kanyang Ina ay iugnay sa debosyon sa Kanyang Kabanal-banalang Puso.',
          },
          {
            type: 'paragraph',
            text: 'Ngayon, habang ang “Kultura ng Kamatayan” ay nagiging paraan ng pamumuhay ng marami, higit na lumalaki ang pangangailangan ng panalangin at panunumbalik na hiniling ng Panginoon. Layunin ng Kaaway na wasakin ang pamilya sapagkat ito ang puso ng Simbahan at ng lipunan. Ang isang banal na pamilya ay bumubuo ng isang banal na Simbahan at lumilikha ng isang banal na lipunan.',
          },
          {
            type: 'paragraph',
            text: 'Hindi kataka-taka kung gayon na ang pinakamatinding labanang espirituwal ay nagaganap mismo sa loob ng tahanan — magulang laban sa anak, anak laban sa magulang, mag-asawa laban sa isa’t isa. Nakalulungkot, marami ang natatalo sa espirituwal na digmaan dahil hindi nila alam na ito’y umiiral o hindi lamang sila naniniwala rito.',
          },
          {
            type: 'paragraph',
            text: 'Ngunit ang ngayo’y ating nasasaksihan — mga kabataang lumihis, naghiwalay na mag-asawa, kalaswaan, paghihimagsik — ay matitibay na palatandaan na tunay ngang totoo ang espirituwal na digmaan. Walang pagsisikap ng tao ang makakapanalo sa espirituwal na digmaan.',
          },
          {
            type: 'paragraph',
            text: 'Yamang ang Kaaway ay espirituwal, kailangan ding espirituwal ang mga sandatang gagamitin laban dito. Ang panalangin at panunumbalik ang mga sandatang ibinibigay sa atin ngayon ng Banal na Puso ni Hesus at ng Kalinis-linisang Puso ni Maria upang manaig sa labanang espirituwal na ito.',
          },
          {
            type: 'paragraph',
            text: 'Hinihiling sa mga magulang na manalangin at gumawa ng panunumbalik para sa kanilang mga anak na nasadlak sa “Kultura ng Kamatayan”. Hinihiling din sa mga anak na manalangin at gumawa ng panunumbalik para sa kabanalan ng buhay sa kanilang tahanan. Hinihiling sa lahat na manalangin at maghandog ng sakripisyo, lalo na sa mga panahong ito ng kaguluhan, upang bayaran ang mga pang-aalipusta at sakrilehiyong ginawa laban sa Diyos at sa Mahal na Ina, at para sa kapayapaan at pagkakaisa ng pamilya.',
          },
          {
            type: 'paragraph',
            text: 'Ang mariing kahilingang gumawa ng “panunumbalik” sa mga Puso ni Hesus at Maria NGAYON (na sinabi nang may luha at dugo ng Mahal na Birhen sa buong kasaysayan at sa di-mabilang na banal na lalaki’t babae tulad ni Santa Margarita Maria Alacoque, San Juan Eudes, Santa Faustina Kowalska, Santa Catalina Labouré, San Pedro Julian Eymard, Santa Bernadette, at iba pa) ang siyang laman NGAYON ng “Alliance of the Two Hearts Communion of Reparation”.',
          },
        ],
      },
    },
  ],
};
