import { LocalizedPart } from '../index';
import { LocalizedSection } from '../index';
import { VigilSection } from '../../types/content';

/**
 * Filipino (Tagalog) translation, pending owner review. Scripture readings
 * are an original translation of the English source (which itself draws on
 * the New American Bible Revised Edition) rather than a copy of any
 * official, copyrighted Filipino Bible edition. Original translation
 * throughout.
 */

const office1: VigilSection = {
  id: 'office-1',
  kicker: 'Unang Oras',
  title: 'Mananamba',
  epigraph: {
    text: 'Ang Diyos ay Espiritu, at ang sumasamba sa Kanya ay dapat sumamba nang nasa espiritu at katotohanan.',
    citation: 'Juan 4:24',
  },
  blocks: [
    { type: 'rubric', text: 'Tumayo po tayong lahat', posture: 'stand' },
    { type: 'hymnCue' },
    { type: 'label', text: 'Disposisyong Espirituwal' },
    {
      type: 'paragraph',
      text: 'Tungkulin nating mga Mananamba na pagsamahin ang ating mga panalangin sa mga panalanging inihahandog ng Banal na Puso ni Hesus para sa atin sa Banal na Sakramento. Isinasama natin ang ating handog ng papuri upang parangalan ang Ama na Walang Hanggan.',
    },
    {
      type: 'paragraph',
      text: 'Ilagay nating lahat ang ating sarili sa harapan ng Diyos, na pinagsisikapang madama ang ating sarili bilang wala sa harap ng Makapangyarihan. Pagsikapan din nating magtamo ng malalim na damdamin ng kababaan sa harap ng Banal na Kamahalan ng Diyos. Sa sandaling ito, isama natin ang ating pagsamba sa pagsamba ng Kalinis-linisang Puso ni Maria at ng Koro ng mga Dominasyon.',
    },
    { type: 'rubric', text: 'Maupo po tayong lahat', posture: 'sit' },
    { type: 'label', text: 'Pagbasa' },
    {
      type: 'reading',
      citation: 'Juan 6:24-58',
      introduction: 'Pagbasa mula sa Banal na Ebanghelyo ayon kay San Juan.',
      phrases: [
        'Nang makita ng mga tao na wala roon si Hesus ni ang kanyang mga alagad, sumakay sila sa mga bangka at nagtungo sa Capernaum upang hanapin si Hesus.',
        'At nang matagpuan nila siya sa kabilang ibayo ng dagat, sinabi nila sa kanya, “Rabbi, kailan ka pa dumating dito?”',
        'Sumagot si Hesus at sinabi, “Tunay ngang sinasabi ko sa inyo, hinahanap ninyo ako hindi dahil sa nakakita kayo ng mga tanda kundi dahil kumain kayo ng tinapay at nabusog.',
        'Huwag kayong magpagal para sa pagkaing napapanis, kundi para sa pagkaing nananatili tungo sa buhay na walang hanggan, na ibibigay sa inyo ng Anak ng Tao. Sapagkat siya ang tinatakan ng Ama, ng Diyos.”',
        'Kaya sinabi nila sa kanya, “Ano ang dapat naming gawin upang maisakatuparan ang mga gawa ng Diyos?”',
        'Sumagot si Hesus at sinabi sa kanila, “Ito ang gawa ng Diyos: na maniwala kayo sa isinugo niya.”',
        'Kaya sinabi nila sa kanya, “Anong tanda ang maipapakita mo, upang makita namin ito at maniwala sa iyo? Ano ang iyong gagawin? Kumain ang aming mga ninuno ng manna sa ilang, gaya ng nasusulat: Binigyan niya sila ng tinapay mula sa langit upang kanin.”',
        'Kaya sinabi ni Hesus sa kanila, “Tunay ngang sinasabi ko sa inyo, hindi si Moises ang nagbigay sa inyo ng tinapay mula sa langit; ang aking Ama ang nagbibigay sa inyo ng tunay na tinapay mula sa langit. Sapagkat ang tinapay ng Diyos ay ang bumababa mula sa langit at nagbibigay-buhay sa sanlibutan.”',
        'Kaya sinabi nila sa kanya, “Ginoo, ibigay mo sa amin ang tinapay na iyan magpakailanman.”',
        'Sinabi ni Hesus sa kanila, “Ako ang tinapay ng buhay; ang lumalapit sa akin ay hindi na magugutom, at ang naniniwala sa akin ay hindi na mauuhaw kailanman.',
        'Ngunit sinabi ko na sa inyo na bagaman nakita ninyo ako, hindi kayo naniniwala.',
        'Lahat ng ibinibigay sa akin ng Ama ay lalapit sa akin, at hindi ko itataboy ang sinumang lumalapit sa akin, sapagkat bumaba ako mula sa langit hindi upang gawin ang aking sariling kalooban kundi ang kalooban ng nagsugo sa akin.',
        'At ito ang kalooban ng nagsugo sa akin: na huwag kong iwala ang anuman sa ibinigay niya sa akin, kundi buhayin ko ito sa huling araw.',
        'Sapagkat ito ang kalooban ng aking Ama: na ang bawat nakakikita sa Anak at naniniwala sa kanya ay magkaroon ng buhay na walang hanggan, at akin siyang bubuhayin sa huling araw.”',
        'Ang mga Judio ay nagbulung-bulungan tungkol kay Hesus sapagkat sinabi niya, “Ako ang tinapay na bumaba mula sa langit,” at sinabi nila, “Hindi ba ito si Hesus, ang anak ni Jose? Hindi ba natin kilala ang kanyang ama at ina? Paano niya masasabing, ‘Bumaba ako mula sa langit’?”',
        'Sumagot si Hesus at sinabi sa kanila, “Tumigil kayo sa pagbulung-bulungan sa inyong sarili. Walang makalalapit sa akin malibang akayin siya ng Amang nagsugo sa akin, at akin siyang bubuhayin sa huling araw.',
        'Nasusulat sa mga propeta: Tuturuan silang lahat ng Diyos. Ang bawat nakikinig sa Ama at natututo sa kanya ay lumalapit sa akin.',
        'Hindi na may nakakita sa Ama, kundi ang galing sa Diyos; nakita niya ang Ama. Tunay ngang sinasabi ko sa inyo, ang naniniwala ay may buhay na walang hanggan.',
        'Ako ang tinapay ng buhay. Kumain ang inyong mga ninuno ng manna sa ilang, ngunit namatay sila; ito ang tinapay na bumababa mula sa langit upang ang kumain nito ay hindi mamatay.',
        'Ako ang buhay na tinapay na bumaba mula sa langit; ang kumain ng tinapay na ito ay mabubuhay magpakailanman; at ang tinapay na ibibigay ko ay ang aking laman para sa buhay ng sanlibutan.”',
        'Nag-alitan ang mga Judio, na sinasabi, “Paano niya kami maibibigyan ng kanyang laman upang kanin?”',
        'Sinabi ni Hesus sa kanila, “Tunay ngang sinasabi ko sa inyo, malibang kanin ninyo ang laman ng Anak ng Tao at inumin ang kanyang dugo, wala kayong buhay sa inyong sarili.',
        'Ang kumakain ng aking laman at umiinom ng aking dugo ay may buhay na walang hanggan, at akin siyang bubuhayin sa huling araw. Sapagkat ang aking laman ay tunay na pagkain, at ang aking dugo ay tunay na inumin.',
        'Ang kumakain ng aking laman at umiinom ng aking dugo ay nananatili sa akin, at ako sa kanya. Kung paanong isinugo ako ng buhay na Ama at ako’y nabubuhay dahil sa Ama, gayundin ang kumakain sa akin ay mabubuhay dahil sa akin.',
        'Ito ang tinapay na bumaba mula sa langit. Hindi tulad ng kinain ng inyong mga ninuno at namatay pa rin; ang kumain ng tinapay na ito ay mabubuhay magpakailanman.”',
      ],
      closing: { leader: 'Ang Salita ng Diyos.', response: 'Salamat sa Diyos.' },
    },
    { type: 'label', text: 'Motibasyon' },
    {
      type: 'paragraph',
      text: 'Bilang mga Mananamba, pagnilayan natin ang Pagka-Diyos na tunay na naririto sa Kabanal-banalang Puso. Sa krus, dapat nating makita ang pananampalataya; sa sugat, ang pag-asa; sa apoy, ang pag-ibig.',
    },
    {
      type: 'paragraph',
      text: 'Dapat din nating marinig ang matamis na daing ni Hesus, na nagdaramdam na mas mahirap pang tiisin ang kawalang-utang-na-loob ng mga tao kaysa sa hapdi ng Kanyang Pasyon. Dapat nating madama ang parehong hapdi ng puso na nadama ng Panginoong Hesus, na labis na naghihinagpis sapagkat napakalamig ng loob sa debosyong ito ng mga taong itinalaga sa Kanyang paglilingkod. “Nananabik akong parangalan sa Kabanal-banalang Sakramento, ngunit walang sinumang nakatugon sa Aking pinakamatinding pananabik.”',
    },
    { type: 'label', text: 'Pagpapatotoo / Pagninilay' },
    {
      type: 'note',
      text: 'Magsagawa ng malalim na pakikinig sa pamamagitan ng lubos na pagiging naririto at matulungin sa nagbabahagi. Iwaksi ang mga abala at tunay na pagtuunan ng pansin ang kanyang ibinabahagi.',
    },
    { type: 'rubric', text: 'Lumuhod po tayong lahat', posture: 'kneel' },
    { type: 'label', text: 'Pagsamba sa Harap ng Banal na Sakramento' },
    {
      type: 'prayer',
      speaker: 'A',
      phrases: [
        'O Hesus sa Banal na Sakramento, ipagkaloob mo sa akin at sa aking mga kapwa mananamba at mga anak ng Iyong Banal na Puso, at sa lahat ng pari, relihiyoso, at mga kaluluwang itinalaga, ang Espiritu ng sigasig at banal na kasipagan, upang matupad namin ang mga tungkulin ng aming kalagayan sa buhay.',
        'Ipagkaloob mo rin sa lahat ng taong itinalaga sa Iyong paglilingkod ang biyaya ng laging lumalaking kabanalan, upang sila’y magdala ng karangalan sa aming Ina, ang Simbahan, at maghandog ng parangal sa Diyos nang nasa espiritu at katotohanan.',
        'O Banal na Puso, maawa Ka sa akin.',
        'O dakilang Koro ng mga makalangit na Dominasyon, itinataas ko kasama ninyo sa Marangal na Puso ni Hesus ang lahat ng kabutihang nagawa sa daigdig na Katoliko at itinatalaga ko ito para sa Kanyang higit na kaluwalhatian.',
        'Hesus ko, isinasanib ko ang buong kaluluwa ko sa mga gawa ng pagsamba na inihahandog Mo sa Ama na Walang Hanggan.',
        'Ninanais kong ihandog sa Iyo ang mga maibiging damdaming ipinuno Mo kay Mariang Kabanal-banalan at sa Iyong mga santo, upang sambahin Ka at luwalhatiin Ka gaya ng nararapat sa Iyo sa buong walang hanggan. Amen.',
      ],
    },
    { type: 'rubric', text: 'Maupo po tayong lahat', posture: 'sit' },
    { type: 'label', text: 'Gawain' },
    {
      type: 'paragraph',
      text: 'Tungkulin nating mga Mananamba na magpakita ng malalim na paggalang at pagkalinga sa Banal na Misa. Dapat nating panatilihing buhay ang Eukaristiya sa aming mga puso habang sinasamba namin ang Banal na Ama. Bilang mga Mananamba, linangin natin ang kamalayan sa Presensya ng Diyos, na siyang paraan upang matamo ang mataas na antas ng kabanalan.',
    },
  ],
};

const office2: VigilSection = {
  id: 'office-2',
  kicker: 'Ikalawang Oras',
  title: 'Umiibig',
  epigraph: { text: 'Mag-ibigan tayo, sapagkat Siya ang unang umibig sa atin.', citation: '1 Juan 4:19' },
  blocks: [
    { type: 'rubric', text: 'Tumayo po tayong lahat', posture: 'stand' },
    { type: 'hymnCue' },
    { type: 'label', text: 'Disposisyong Espirituwal' },
    {
      type: 'paragraph',
      text: 'Tungkulin nating mga Umiibig na sambahin si Kristo sa Banal na Eukaristiya. Dapat nating gawing karapat-dapat ang aming sarili sa pag-ibig ng Banal na Puso sa pamamagitan ng pangangalaga sa aming kalinisang-puri at kadalisayan.',
    },
    {
      type: 'paragraph',
      text: 'Dapat nating ibigay ang aming buong sarili kay Hesus, kung ninanais naming Siya ay lubos na magbigay ng Kanyang sarili sa amin. Upang maging higit na katanggap-tanggap ang aming pag-ibig, dapat kaming makiisa sa Kalinis-linisang Puso ni Maria at sa Koro ng mga Serapin.',
    },
    { type: 'rubric', text: 'Maupo po tayong lahat', posture: 'sit' },
    { type: 'label', text: 'Pagbasa' },
    {
      type: 'reading',
      citation: '1 Juan 4:7-16',
      introduction: 'Pagbasa mula sa unang Sulat ni San Juan.',
      phrases: [
        'Mga minamahal, mag-ibigan tayo sa isa’t isa, sapagkat ang pag-ibig ay mula sa Diyos; ang bawat umiibig ay ipinanganak ng Diyos at nakakakilala sa Diyos.',
        'Ang walang pag-ibig ay hindi nakakakilala sa Diyos, sapagkat ang Diyos ay pag-ibig.',
        'Sa ganitong paraan naipahayag sa atin ang pag-ibig ng Diyos: isinugo ng Diyos ang Kanyang bugtong na Anak sa sanlibutan upang tayo’y mabuhay sa pamamagitan niya.',
        'Narito ang pag-ibig: hindi sa umibig tayo sa Diyos, kundi sa Siya ang umibig sa atin at isinugo ang Kanyang Anak bilang pambayad-sala sa ating mga kasalanan.',
        'Mga minamahal, kung ganito tayo inibig ng Diyos, dapat din nating mahalin ang isa’t isa.',
        'Walang sinumang nakakita sa Diyos kailanman. Ngunit kung mag-ibigan tayo sa isa’t isa, nananatili ang Diyos sa atin, at ang Kanyang pag-ibig ay natutupad sa atin.',
        'Sa ganito natin nalalaman na tayo’y nananatili sa Kanya at Siya sa atin: sa Kanyang pagbibigay sa atin ng Kanyang Espiritu.',
        'At nakita natin at pinatototohanan na isinugo ng Ama ang Kanyang Anak bilang tagapagligtas ng sanlibutan.',
        'Ang kumikilalang si Hesus ay Anak ng Diyos, nananatili sa kanya ang Diyos, at siya naman sa Diyos.',
        'Nalaman na natin at naniniwala tayo sa pag-ibig na taglay ng Diyos para sa atin.',
        'Ang Diyos ay pag-ibig, at ang nananatili sa pag-ibig ay nananatili sa Diyos, at ang Diyos naman ay nananatili sa kanya.',
      ],
      closing: { leader: 'Ang Salita ng Diyos.', response: 'Salamat sa Diyos.' },
    },
    { type: 'label', text: 'Motibasyon' },
    {
      type: 'paragraph',
      text: 'Bilang mga Umiibig sa Banal na Puso, pagnilayan natin ang mga apoy na kinasusunugan ng Banal na Puso ni Hesus, at kung paanong ang Kanyang Puso, nagliliwanag na tulad ng araw, ay napapaligiran ng Koro ng mga Serapin na umaawit: “Ang pag-ibig ng Banal na Puso ay nananaig, nagpaparangal, at umaaliw.” Pagnilayan natin ang mga salita ni Hesus: “Naparito ako upang magdala ng apoy sa lupa, at gaano ko na sanang ibig na ito’y nagliliyab na!” (Lu 12:49)',
    },
    {
      type: 'paragraph',
      text: 'Ang pag-ibig na taglay ng Panginoong Hesukristo para sa atin ay walang hanggan at ganap. Ang pag-ibig ay humihiling ng pag-ibig, ngunit walang malay, napakaliit ng ating pag-ibig sa Kanya.',
    },
    { type: 'label', text: 'Pagpapatotoo / Pagninilay' },
    {
      type: 'note',
      text: 'Magsagawa ng malalim na pakikinig sa pamamagitan ng lubos na pagiging naririto at matulungin sa nagbabahagi. Iwaksi ang mga abala at tunay na pagtuunan ng pansin ang kanyang ibinabahagi.',
    },
    { type: 'rubric', text: 'Lumuhod po tayong lahat', posture: 'kneel' },
    { type: 'label', text: 'Pagsamba sa Harap ng Banal na Sakramento' },
    {
      type: 'prayer',
      speaker: 'A',
      phrases: [
        'O kaibig-ibig na Puso ni Hesus sa Banal na Sakramento, itinatalaga ko sa Iyo ang bawat sandali ng aking buhay.',
        'Iiwan ko ang aking puso kasama Mo sa Banal na Tabernakulong ito, upang kasama ng Koro ng mga Serapin, mahalin Kita ngayon at magpakailanman.',
        'Mahal Kita, O pinakakaibig-ibig na Puso ni Hesus, ngunit napakalamig ng aking pag-ibig.',
        'Nawa’y iyong paalabin ang aking puso at ang puso ng lahat ng nilalang sa apoy ng Iyong pag-ibig.',
        'O Puso ni Hesus, ipinamamanhik ko na ipagkaloob Mo sa akin ang biyaya na mahalin Ka nang higit at higit pa.',
        'Maria, Ina ng aking Panginoon at aking Ina rin, gawin mo akong magmahal sa Kanyang Banal na Puso.',
        'O Kabanal-banalang Puso ni Hesus, banal na hurno ng apoy ng pag-ibig na tapat na Iyong ninanais paalabin sa lupa, at ninanais Mong sumiklab sa lahat ng puso, ipagkaloob Mo na ang aming mga puso ay masupok sa mga banal na apoy na iyan.',
        'O mga Serapin ng makalangit na kapuluan, isinasamo ko at inaanyayahan kayong sabihin sa May-Akda ng aking buhay ang aking maalab na pananabik na masupok at manghina sa pag-ibig sa Kanya. Amen.',
      ],
    },
    { type: 'rubric', text: 'Maupo po tayong lahat', posture: 'sit' },
    { type: 'label', text: 'Gawain' },
    {
      type: 'paragraph',
      text: 'Ang aming pagpupugay bilang mga Umiibig ay binubuo ng sigasig ng dalisay na pagmamahal at ng katumpakan ng pag-ibig, hindi ng takot. Manalangin tayo nang natatangi upang ang mga kaluluwa ng mga matuwid ay lumago sa kabutihan.',
    },
  ],
};

const office3: VigilSection = {
  id: 'office-3',
  kicker: 'Ikatlong Oras',
  title: 'Biktima',
  epigraph: {
    text: 'Ikinatutuwa ko ngayon ang aking pagdurusa alang-alang sa inyo, at pinupunan ko sa aking sariling katawan ang kulang pa sa mga hirap ni Kristo, para sa kanyang katawan, ang Simbahan.',
    citation: 'Colosas 1:24',
  },
  blocks: [
    { type: 'rubric', text: 'Tumayo po tayong lahat', posture: 'stand' },
    { type: 'hymnCue' },
    { type: 'label', text: 'Disposisyong Espirituwal' },
    {
      type: 'paragraph',
      text: 'Inilalagay ng ating Panginoon sa harap natin ang Kanyang buhay ng sakripisyo sa Banal na Eukaristiya, kung saan Siya mismo ay naging biktima ng pagbabayad-sala para sa kaligtasan ng tao. Kaya, bilang mga Biktima, ihandog natin ang ating sarili sa Banal na Puso. Maging handa tayong maghandog ng mga sakripisyo kasama ng ating Panginoon.',
    },
    {
      type: 'paragraph',
      text: 'Kay hirap mabuhay nang walang pag-ibig ng Diyos! May makapagmamahal ba sa ipinakong Panginoon nang hindi minamahal ang krus at hindi handang mamatay para dito? Upang ang sakripisyong ito ay maging higit na katanggap-tanggap sa Banal na Puso, makisanib tayo sa Kalinis-linisang at Purisimang Puso ni Maria at sa Koro ng mga Birtud.',
    },
    { type: 'rubric', text: 'Maupo po tayong lahat', posture: 'sit' },
    { type: 'label', text: 'Pagbasa' },
    {
      type: 'reading',
      citation: 'Colosas 1:21-29',
      introduction: 'Pagbasa mula sa Sulat ni San Pablo sa mga Taga-Colosas.',
      phrases: [
        'Mga kapatid: Kayo noon ay hiwalay at kaaway sa isipan dahil sa masasamang gawa;',
        'ngunit ngayon ay ipinakipagkasundo na kayo ng Diyos sa katawang-lamang ni Kristo sa pamamagitan ng kanyang kamatayan, upang iharap kayo sa kanyang harapan na banal, walang dungis, at walang kapintasan,',
        'kung magpapatuloy kayo sa pananampalataya, matatag at buo, hindi natitinag mula sa pag-asang ipinangako ng Ebanghelyong inyong narinig, na ipinangaral sa bawat nilalang sa ilalim ng langit, at kung saan ako, si Pablo, ay ginawang ministro.',
        'Nagagalak ako sa aking pagdurusa alang-alang sa inyo, at pinupunan ko sa aking laman ang kulang pa sa mga paghihirap ni Kristo, para sa kanyang katawan, ang Simbahan,',
        'na kung saan ako ay ginawang ministro ayon sa pangasiwaang ibinigay sa akin ng Diyos alang-alang sa inyo, upang ipahayag nang buo ang salita ng Diyos, ang misteryong nakatago mula sa mga panahon at salinlahi noon, ngunit ngayon ay ipinahayag na sa kanyang mga banal.',
        'Ninais ng Diyos na ipakilala sa kanila ang mga kayamanan ng kaluwalhatian ng misteryong ito sa mga Hentil, na si Kristo sa inyo, ang pag-asa ng kaluwalhatian.',
        'Siya ang aming ipinangangaral, na pinapayuhan namin ang bawat tao at tinuturuan ang bawat tao sa buong karunungan, upang maiharap namin ang bawat tao na ganap kay Kristo.',
        'Para dito ako nagpapagal at nakikipagpunyagi, ayon sa kapangyarihan niyang kumikilos nang malakas sa akin.',
      ],
      closing: { leader: 'Ang Salita ng Diyos.', response: 'Salamat sa Diyos.' },
    },
    { type: 'label', text: 'Motibasyon' },
    {
      type: 'paragraph',
      text: 'Bilang mga Biktima, pagnilayan natin ang kahulugan ng krus kung saan ipinako si Hesukristo. Pagnilayan natin ang tila sinasabi ni Kristo: “Naghahanap ako ng isang kaluluwang biktima na aaliw sa Aking sugatang Puso.”',
    },
    {
      type: 'paragraph',
      text: 'Ang pag-ibig mismo ni Hesukristo ang pinakadakilang motibasyon para sa pagiging biktima. Ang paghahayag ng mga lihim ng Banal na Puso ang huling pagsisikap ng ating Manunubos upang anyayahan tayong tumugon sa Kanyang dakilang pag-ibig.',
    },
    { type: 'label', text: 'Pagpapatotoo / Pagninilay' },
    {
      type: 'note',
      text: 'Magsagawa ng malalim na pakikinig sa pamamagitan ng lubos na pagiging naririto at matulungin sa nagbabahagi. Iwaksi ang mga abala at tunay na pagtuunan ng pansin ang kanyang ibinabahagi.',
    },
    { type: 'rubric', text: 'Lumuhod po tayong lahat', posture: 'kneel' },
    { type: 'label', text: 'Pagsamba sa Harap ng Banal na Sakramento' },
    {
      type: 'prayer',
      speaker: 'A',
      phrases: [
        'Sinasamba Kita, O Kabanal-banalang Trinidad, kasama ng Banal na Koro Anghelikal ng mga Birtud.',
        'O Diyos ng katarungan, isinasanib ko ang aking sarili sa Banal na Puso ni Hesukristo, na namatay bilang Biktima ng pag-ibig para sa aming kaligtasan.',
        'Inihahandog ko sa Iyo, Ama na Walang Hanggan, kasama ng Banal na Puso, ang aking sarili, kaluluwa, katawan, at mga gawa, kapwa ng kasalukuyan at ng hinaharap.',
        'Maawa Ka sa akin at sa lahat ng kaawa-awang makasalanan.',
        'O Puso ni Hesus, ipinamamanhik ko ang biyaya na mahalin Ka nang higit at higit pa.',
        'Maria, Ina ng aking Panginoon at aking Ina rin, gawin mo akong magmahal sa Kanyang Banal na Puso.',
        'O Banal na Puso, Ikaw ay patuloy na naghahandog ng Iyong sarili sa aming mga altar bilang Biktima para sa aming kaligtasan.',
        'Ano pa ang Iyong ninanais? Ano pa ang Iyong hinihiling? Ano pa ang Iyong hinihingi sa amin upang makasanib sa Iyo bilang mga kasamang biktima ng Iyong sakripisyo?',
        'Handa na ako, Panginoon, angkinin Mo ako, upang maging biktima, itinalaga at masupok sa mga apoy ng Iyong pag-ibig, para sa higit na kaluwalhatian ng Iyong Amang Walang Hanggan, na pumili sa akin para sa tungkuling ito.',
        'Tanggapin Mo nang mapagbigay-loob ako, Iyong abang lingkod, alang-alang sa Iyong Bugtong na Anak na namatay dahil sa pag-ibig sa akin. Amen.',
      ],
    },
    { type: 'rubric', text: 'Maupo po tayong lahat', posture: 'sit' },
    { type: 'label', text: 'Gawain' },
    {
      type: 'paragraph',
      text: 'Ang aming tungkulin bilang mga Biktima ay ang pagpigil sa sariling kalooban, ang pagpapakumbaba ng puso, at ang disiplina ng mga pandama. Kung wala ang diwa ng pagpapakasakit, kaunti lamang ang magagawa natin. Patuloy nating pigilan ang pagsabog ng damdamin kapag nasaktan o naapi, at magpasya tayong ihandog ang mga sugat na ito para sa pagbabalik-loob ng lahat ng makasalanan o para sa ilang partikular na taong lagi nating ipinapanalangin.',
    },
  ],
};

const office4: VigilSection = {
  id: 'office-4',
  kicker: 'Ikaapat na Oras',
  title: 'Alagad',
  epigraph: {
    text: 'Pasanin ninyo ang aking pamatok at matuto kayo sa akin, sapagkat ako’y maamo at mapagpakumbaba ang puso, at makasusumpong kayo ng kapahingahan para sa inyong mga kaluluwa.',
    citation: 'Mateo 11:29',
  },
  blocks: [
    { type: 'rubric', text: 'Tumayo po tayong lahat', posture: 'stand' },
    { type: 'hymnCue' },
    { type: 'label', text: 'Disposisyong Espirituwal' },
    {
      type: 'paragraph',
      text: 'Bilang mga Alagad, pumunta tayo sa Puso ni Hesukristo upang matuto ng karunungan ng mga santo. Sa paaralang ito itinuturo ang tunay na pag-ibig. Sa paaralang ito ipinagkakaloob ang tunay na karunungan, ina ng dalisay na pag-ibig. Ito ang karunungan ng Langit na ganap na lumalampas sa lahat ng karunungan sa lupa.',
    },
    {
      type: 'paragraph',
      text: 'Dapat tayong makinig nang mabuti sa tinig ng ating Guro, na nagsabi: “Matuto kayo sa Akin, sapagkat Ako’y maamo at mapagpakumbaba ang Puso.” Upang matamo ang karunungang ito, tawagin natin ang tulong ng Kalinis-linisang Puso ni Maria at ng koro anghelikal ng mga Kerubin.',
    },
    { type: 'rubric', text: 'Maupo po tayong lahat', posture: 'sit' },
    { type: 'label', text: 'Pagbasa' },
    {
      type: 'reading',
      citation: 'Lucas 9:22-26',
      introduction: 'Pagbasa mula sa Banal na Ebanghelyo ayon kay San Lucas.',
      phrases: [
        'Sinabi ni Hesus sa kanyang mga alagad: “Ang Anak ng Tao ay kinakailangang magdusa nang labis at itakwil ng mga matanda, ng mga punong pari, at ng mga eskriba, at patayin, at sa ikatlong araw ay muling mabuhay.”',
        'At sinabi niya sa lahat, “Kung nais ng sinuman na sumunod sa akin, ipagkait niya ang kanyang sarili at pasanin ang kanyang krus araw-araw at sumunod sa akin.',
        'Sapagkat ang naghahangad magligtas ng kanyang buhay ay mawawalan nito, ngunit ang mawalan ng kanyang buhay alang-alang sa akin ay magliligtas nito.',
        'Ano ang mapapala ng tao kung makamtan niya ang buong sanlibutan ngunit maiwala o masira ang kanyang sarili?',
        'Sapagkat ang sinumang nahihiya sa akin at sa aking mga salita, ikahihiya siya ng Anak ng Tao kapag siya’y dumating na may taglay na kanyang kaluwalhatian at ng kaluwalhatian ng Ama at ng mga banal na anghel.”',
      ],
      closing: { leader: 'Ang Salita ng Diyos.', response: 'Salamat sa Diyos.' },
    },
    { type: 'label', text: 'Motibasyon' },
    {
      type: 'paragraph',
      text: 'Bilang mga Alagad, pagnilayan natin ang mga salita ni Kristo: “Matuto kayo sa Akin, sapagkat Ako’y maamo at mapagpakumbaba ang puso.” Mula sa ating mga puso, dumaing tayo kay Hesus at sabihin: “Magsalita Ka, Panginoon, sapagkat nakikinig ang Iyong lingkod. Turuan Mo akong gawin ang Iyong Kalooban.”',
    },
    {
      type: 'paragraph',
      text: 'Dumating si Hesukristo sa lupa upang turuan tayo ng malalim na kababaan at kaamuan. Siya ang aming huwaran at guro sa kababaan at maalab na pag-ibig.',
    },
    { type: 'label', text: 'Pagpapatotoo / Pagninilay' },
    {
      type: 'note',
      text: 'Magsagawa ng malalim na pakikinig sa pamamagitan ng lubos na pagiging naririto at matulungin sa nagbabahagi. Iwaksi ang mga abala at tunay na pagtuunan ng pansin ang kanyang ibinabahagi.',
    },
    { type: 'rubric', text: 'Lumuhod po tayong lahat', posture: 'kneel' },
    { type: 'label', text: 'Pagsamba sa Harap ng Banal na Sakramento' },
    {
      type: 'prayer',
      speaker: 'A',
      phrases: [
        'O Diyos, na nagbibigay-liwanag sa bawat taong pumaparito sa mundong ito at namamatnubay sa bawat kalooban, ipamahagi Mo sa Iyong mga tagasunod ang makalangit na liwanag ng Iyong walang-hanggang karunungan, at gawin silang tumanggap nang may kababaang-loob ang dakilang mga katotohanan ng Iyong Ebanghelyo.',
        'O, kailan pa mang mga aral ng kabanalan, nagmumula sa Iyong Banal na Puso!',
        'Ipagkaloob Mo na, sa lubos naming pagtanggap at pagpapahalaga, magbunga kami nang sagana ng mga bunga ng mga birtud na Kristiyano.',
        'At kayo, O mga kerubin, tanggapin ninyo ako sa inyong piling, upang magkaroon ako ng bahagi sa kadakilaang nagmumula sa Banal na Puso ni Hesus.',
        'O Puso ni Hesus, ipinamamanhik ko na ipagkaloob Mo sa akin ang biyaya na mahalin Ka nang higit at higit pa.',
        'Maria, Ina ng aking Panginoon at aking Ina rin, gawin mo akong magmahal sa Kanyang Banal na Puso.',
        'O, kay bilis matuto ng alagad na tinuturuan Mo, O Panginoon. Turuan Mo ako, O Panginoon, na maging Iyong alagad.',
        'Pakiusap, buksan Mo ang pintuan ng aking puso at gawin itong masunurin sa Iyong mga banal na salita. Pakiusap, tulungan Mo kaming ibalik-loob ang lahat ng lumalaban sa katotohanan. Amen.',
      ],
    },
    { type: 'rubric', text: 'Maupo po tayong lahat', posture: 'sit' },
    { type: 'label', text: 'Gawain' },
    {
      type: 'paragraph',
      text: 'Bilang mga Alagad, dapat nating pagsikapan na maging laging matimpi at tahimik, upang mabuting makinig sa tinig at mga aral ng ating Banal na Guro. Tumugon tayo nang lubusan sa udyok ng biyayang nagmumula sa Banal na Puso ni Hesus.',
    },
  ],
};

const office5: VigilSection = {
  id: 'office-5',
  kicker: 'Ikalimang Oras',
  title: 'Tapat na Lingkod',
  epigraph: { text: 'Nagpakumbaba pa siya nang lalo, hanggang sa pagtanggap ng kamatayan, kamatayan sa krus.', citation: 'Filipos 2:8' },
  blocks: [
    { type: 'rubric', text: 'Tumayo po tayong lahat', posture: 'stand' },
    { type: 'hymnCue' },
    { type: 'label', text: 'Disposisyong Espirituwal' },
    {
      type: 'paragraph',
      text: 'Ayon kay Santa Margarita Maria, ang aming tungkulin bilang mga Tapat na Lingkod ay isapuso ang pagsunod na walang-humpay na ipinamalas ni Hesus sa Kanyang mga pari. Dapat nating gawin, tulad ng ating Panginoon, ang pagsunod sa lahat ng bagay.',
    },
    {
      type: 'paragraph',
      text: 'Dapat nating matutuhang isuko ang aming sariling kalooban, ang aming mga hilig at pagkiling, maging ang aming mga gusto at ayaw. Upang matamo ang diwang ito ng pagsunod, dapat tawagin ng Tapat na Lingkod ang tulong ng Kalinis-linisang Puso ni Maria at ng Koro ng mga Arkanghel.',
    },
    { type: 'rubric', text: 'Maupo po tayong lahat', posture: 'sit' },
    { type: 'label', text: 'Pagbasa' },
    {
      type: 'reading',
      citation: 'Filipos 2:1-13',
      introduction: 'Pagbasa mula sa Sulat ni San Pablo sa mga Taga-Filipos.',
      phrases: [
        'Mga kapatid: Kung mayroon mang kaaliwan kay Kristo, kung mayroon mang kaginhawahan sa pag-ibig, kung mayroon mang pakikiisa sa Espiritu, kung mayroon mang pagkalinga at habag,',
        'lubusin ninyo ang aking kagalakan sa pamamagitan ng pagkakaisa ng kalooban, ng iisang pag-ibig, ng pagkakaisa ng puso, na iisa ang iniisip.',
        'Huwag kayong gumawa ng anuman dahil sa kasakiman o dahil sa hambog na kaluwalhatian; kundi sa kababaang-loob, ituring ninyo ang iba na higit sa inyong sarili.',
        'Taglayin ninyo sa inyong sarili ang parehong pag-iisip na taglay rin ni Kristo Hesus, na, bagaman siya’y may kalikasang Diyos, hindi niya itinuring ang pagkakapantay sa Diyos bilang isang bagay na dapat panghawakan,',
        'kundi hinubad niya ang kanyang sarili, kinuha ang anyo ng isang alipin, dumating sa wangis ng mga tao; at natagpuang tao ang kanyang anyo, nagpakumbaba siya sa kanyang sarili, naging masunurin hanggang sa kamatayan, maging ang kamatayan sa krus.',
        'Dahil dito lubos siyang itinaas ng Diyos at binigyan siya ng pangalang higit sa lahat ng pangalan, upang sa pangalan ni Hesus ay lumuhod ang bawat tuhod, sa langit man, sa lupa, at sa ilalim ng lupa, at ang bawat dila ay umamin na si Hesukristo ay Panginoon, sa ikaluluwalhati ng Diyos Ama.',
        'Kaya, mga minamahal ko, gaya ng inyong pagsunod sa lahat ng panahon, hindi lamang sa aking pagharap, kundi lalo na ngayong wala ako, gawin ninyo ang inyong kaligtasan nang may takot at panginginig.',
        'Sapagkat ang Diyos ang siyang kumikilos sa inyo, kapwa sa paghahangad at sa paggawa, ayon sa kanyang mabuting kalooban.',
      ],
      closing: { leader: 'Ang Salita ng Diyos.', response: 'Salamat sa Diyos.' },
    },
    { type: 'label', text: 'Motibasyon' },
    {
      type: 'paragraph',
      text: 'Bilang mga Tapat na Lingkod, pagnilayan natin kung paano nagpakumbaba si Hesus at naging isang lingkod, na sinasabi: “Naparito ako hindi upang paglingkuran, kundi upang maglingkod. Kung ako, ang Panginoon at Guro, ay naghugas ng inyong mga paa, dapat din ninyong hugasan ang paa ng isa’t isa. Binigyan ko kayo ng halimbawa, upang gawin ninyo ang ginawa ko sa inyo.”',
    },
    {
      type: 'paragraph',
      text: 'Ang aming una at pangunahing dahilan ay ang maglingkod sa ating Panginoon, na nagbigay sa amin ng halimbawa kung paano maglingkod nang kusang-loob, may kagalakan, at may pag-ibig.',
    },
    { type: 'label', text: 'Pagpapatotoo / Pagninilay' },
    {
      type: 'note',
      text: 'Magsagawa ng malalim na pakikinig sa pamamagitan ng lubos na pagiging naririto at matulungin sa nagbabahagi. Iwaksi ang mga abala at tunay na pagtuunan ng pansin ang kanyang ibinabahagi.',
    },
    { type: 'rubric', text: 'Lumuhod po tayong lahat', posture: 'kneel' },
    { type: 'label', text: 'Pagsamba sa Harap ng Banal na Sakramento' },
    {
      type: 'prayer',
      speaker: 'A',
      phrases: [
        'Tanggapin Mo, O Hesukristo, ang aking pusong may suot ng Iyong kasuotang pangkasal, na iniaalay sa Iyo ngayon ng Iyong lubhang di-karapat-dapat na lingkod.',
        'Nawa’y bisitahin Ka nang mas madalas at may higit na paggalang sa kagalang-galang na Sakramentong ito.',
        'Sa kapalit, nawa’y ibunga Mo sa lahat ng puso ang mga bunga ng biyaya at kaligtasan, na kung saan Ikaw ang di-mauubos na bukal.',
        'O Makapangyarihang pag-ibig ng aking Diyos! Sinira Mo ang mga tanikalang matinding humahawak sa akin at humihiwalay sa akin sa Iyo.',
        'Pakiusap tulungan Mo akong ipalapit sa Iyo ang higit pang mga kaluluwang, tulad ko, ay naligaw ng landas, at gawin silang matikman sa paanan ng Iyong altar ang parehong ligaya ng Iyong paglilingkod na aking nadarama ngayon, isang paglilingkod na nagpapasaya sa lahat ng sumasapi rito.',
        'O misteryo ng pagpapasakop ni Hesus sa Sakramento ng Iyong pag-ibig, ipinagkakaloob ko ang aking sarili upang parangalan Ka, at pagsikapan, o kahit man lamang naisin, na iakay ang lahat ng puso sa Iyo, O Hesus. Amen.',
      ],
    },
    { type: 'rubric', text: 'Maupo po tayong lahat', posture: 'sit' },
    { type: 'label', text: 'Gawain' },
    {
      type: 'paragraph',
      text: 'Tungkulin nating mga Tapat na Lingkod na sundin agad ang mga banal na udyok. Tularan natin ang pagsunod ng Banal na Puso, na naaalala na ang pinakamamarangal na gawa na ginawa nang walang pagsunod ay hindi katanggap-tanggap sa Diyos. Taglayin natin ang lagi nang kahandaan at sigasig upang paglingkuran ang Panginoon.',
    },
  ],
};

const office6: VigilSection = {
  id: 'office-6',
  kicker: 'Ikaanim na Oras',
  title: 'Nagsusumamo',
  epigraph: {
    text: 'Kaya naman lubos niyang maiaadya ang mga lumalapit sa Diyos sa pamamagitan niya, sapagkat siya’y buhay magpakailanman upang mamagitan para sa kanila.',
    citation: 'Hebreo 7:25',
  },
  blocks: [
    { type: 'rubric', text: 'Tumayo po tayong lahat', posture: 'stand' },
    { type: 'hymnCue' },
    { type: 'label', text: 'Disposisyong Espirituwal' },
    {
      type: 'paragraph',
      text: 'Madalas sabihin ni Santa Margarita Maria: “Ang kagalang-galang na Sakramento ay ang trono ng Biyaya at Awa.” Isa sa mga dahilan kung bakit nananatiling kasama natin si Kristo sa misteryong ito ay upang udyukan ang mga makasalanan na lumapit at magsumamo ng Kanyang awa.',
    },
    {
      type: 'paragraph',
      text: 'Kinikilala na ang aming buhay ay utang namin sa awa ng Diyos, isanib natin ang aming mga panalangin sa panalangin ng Banal na Puso, upang ang maraming kaluluwang maaaring patay na sa Diyos ay muling magsimulang mabuhay sa buhay ng biyaya. Upang maging mas mabisa ang pagsusumamong ito, isanib natin ang ating mga panalangin sa panalangin ng Kalinis-linisang Puso ni Maria at ng Koro ng mga Anghel.',
    },
    { type: 'rubric', text: 'Maupo po tayong lahat', posture: 'sit' },
    { type: 'label', text: 'Pagbasa' },
    {
      type: 'reading',
      citation: 'Hebreo 7:1-3, 15-17, 23-28',
      introduction: 'Pagbasa mula sa Sulat sa mga Hebreo.',
      phrases: [
        'Si Melquisedek, hari ng Salem at pari ng Kataas-taasang Diyos, ay sumalubong kay Abraham sa kanyang pagbabalik mula sa pagtalo sa mga hari, at binasbasan siya.',
        'At binigyan siya ni Abraham ng ikapu ng lahat ng bagay. Ang kanyang pangalan ay nangangahulugang matuwid na hari, at siya rin ay “hari ng Salem,” samakatuwid, hari ng kapayapaan.',
        'Walang ama, walang ina, walang lahi, walang simula ng mga araw ni katapusan ng buhay, ginawang katulad ng Anak ng Diyos, siya’y nananatiling pari magpakailanman.',
        'Higit pang maliwanag ito kung may lumilitaw pang isang pari sa wangis ni Melquisedek, na naging gayon hindi sa pamamagitan ng batas ng kautusang ukol sa lahi, kundi sa pamamagitan ng kapangyarihan ng isang buhay na hindi masisira.',
        'Sapagkat ito ang pinatototohanan: Ikaw ay isang pari magpakailanman, ayon sa pagkapari ni Melquisedek.',
        'Mga kapatid: Marami ang mga paring Levita sapagkat pinipigilan sila ng kamatayan na manatili sa kanilang tungkulin, ngunit si Hesus, sapagkat siya’y nananatili magpakailanman, ay may pagkaparing hindi lumilipas.',
        'Kaya naman lubos niyang maiaadya ang mga lumalapit sa Diyos sa pamamagitan niya, sapagkat siya’y buhay magpakailanman upang mamagitan para sa kanila.',
        'Angkop na kami ay magkaroon ng ganitong pinakapunong pari: banal, walang sala, walang dungis, hiwalay sa mga makasalanan, at higit pa sa mga langit.',
        'Wala siyang pangangailangan, tulad ng mga punong pari, na maghandog ng sakripisyo araw-araw, una para sa kanyang sariling mga kasalanan at pagkatapos ay para sa mga kasalanan ng bayan; ginawa niya ito nang minsanan para sa lahat nang inihandog niya ang kanyang sarili.',
        'Sapagkat ang kautusan ay nagtatalaga ng mga taong may kahinaan bilang mga punong pari, ngunit ang salita ng panunumpa, na sumunod sa kautusan, ay nagtatalaga ng isang Anak, na ginawang sakdal magpakailanman.',
      ],
      closing: { leader: 'Ang Salita ng Diyos.', response: 'Salamat sa Diyos.' },
    },
    { type: 'label', text: 'Motibasyon' },
    {
      type: 'paragraph',
      text: 'Bilang mga Nagsusumamo, pagnilayan natin ang koronang tinik na nakapalibot sa Puso ni Hesus; sa pamamagitan nito, malalaman nating ito’y sanhi ng dakilang pag-ibig ng Diyos sa tao. Mabatid nawa nating udyukan ang pangako ng Banal na Puso: “Ipinapangako Kong ibubuhos ang saganang pagpapala sa lahat ng gawaing kinasasangkutan ng mga nagpaparangal sa Aking Puso.”',
    },
    { type: 'label', text: 'Pagpapatotoo / Pagninilay' },
    {
      type: 'note',
      text: 'Magsagawa ng malalim na pakikinig sa pamamagitan ng lubos na pagiging naririto at matulungin sa nagbabahagi. Iwaksi ang mga abala at tunay na pagtuunan ng pansin ang kanyang ibinabahagi.',
    },
    { type: 'rubric', text: 'Lumuhod po tayong lahat', posture: 'kneel' },
    { type: 'label', text: 'Pagsamba sa Harap ng Banal na Sakramento' },
    {
      type: 'prayer',
      speaker: 'A',
      phrases: [
        'O kagila-gilalas na Koro ng mga Anghel, at ikaw lalo na, minamahal kong Anghel de la Guwardya, samahan mo ako sa pagdalaw na ito sa aking Panginoon sa Eukaristiya, at kasama ng Banal na Puso ni Hesus, tulungan mo akong ihandog sa Ama na Walang Hanggan ang lahat ng gawa at pagdurusa ngayong araw para sa Kanyang higit na kaluwalhatian at para sa kaginhawahan ng mga banal na kaluluwa sa Purgatoryo.',
        'O Puso ni Hesus, ipinamamanhik ko na ipagkaloob Mo sa akin ang biyaya na mahalin Ka nang higit at higit pa.',
        'Maria, Ina ng aking Panginoon at aking Ina rin, gawin mo akong magmahal sa Kanyang Banal na Puso.',
        'Dinggin Mo, O Banal na Puso, ang mga tinig ng mga nangangailangan, at maging kaaliwan nila sa kapighatian;',
        'sapagkat lagi na itong Iyong kaligayahan, O Pinakamaawaing Puso, na magkaloob ng kapatawaran at gumawa ng kabutihan sa lahat. Amen.',
      ],
    },
    { type: 'rubric', text: 'Maupo po tayong lahat', posture: 'sit' },
    { type: 'label', text: 'Gawain' },
    {
      type: 'paragraph',
      text: 'Ang aming pangunahing gawain bilang mga Nagsusumamo ay ang paggawa ng mga gawa ng pag-ibig sa aming kapwa. Dapat nating pagsikapan na tularan ang diwa ng panalangin ng Banal na Puso, na naaalala na kung wala ang panalangin, imposibleng manatili sa kalagayan ng biyaya, lalong hindi umunlad sa kabutihan.',
    },
  ],
};

const office7: VigilSection = {
  id: 'office-7',
  kicker: 'Ikapitong Oras',
  title: 'Tagapagtaguyod',
  epigraph: {
    text: 'Kaya’t humayo kayo at gawin ninyong alagad ang lahat ng bansa; bawtismuhan ninyo sila sa ngalan ng Ama, at ng Anak, at ng Espiritu Santo.',
    citation: 'Mateo 28:19',
  },
  blocks: [
    { type: 'rubric', text: 'Tumayo po tayong lahat', posture: 'stand' },
    { type: 'hymnCue' },
    { type: 'label', text: 'Disposisyong Espirituwal' },
    {
      type: 'paragraph',
      text: 'Ang aming tungkulin bilang mga Tagapagtaguyod ng Banal na Puso ay ipakilala Siya sa buong sangkatauhan. Hinihiling namin sa Ama at sa Espiritu Santo na kumilos sa aming mga puso upang mahalin ang Banal na Puso ni Hesus.',
    },
    {
      type: 'paragraph',
      text: 'Hinihiling namin sa Mahal na Birhen na gamitin ang Kanyang lubos na makapangyarihang pamamagitan, upang ang lahat ng lumalapit dito para sa saklolo ay matagpuan ang kanilang kaaliwan at lakas. Ang pagtupad sa tungkuling ito ay kadalasang nangangailangan ng tulong ng Kalinis-linisang Puso ni Maria at ng Koro ng mga Trono.',
    },
    { type: 'rubric', text: 'Maupo po tayong lahat', posture: 'sit' },
    { type: 'label', text: 'Pagbasa' },
    {
      type: 'reading',
      citation: 'Mateo 28:16-20',
      introduction: 'Pagbasa mula sa Banal na Ebanghelyo ayon kay San Mateo.',
      phrases: [
        'Ang labing-isang alagad ay nagtungo sa Galilea, sa bundok na iniutos sa kanila ni Hesus.',
        'At nang makita nila siya, sinamba nila siya, bagaman may nag-alinlangan.',
        'Pagkatapos ay lumapit si Hesus at sinabi sa kanila, “Ibinigay sa akin ang lahat ng kapangyarihan sa langit at sa lupa.',
        'Kaya’t humayo kayo, at gawin ninyong alagad ang lahat ng bansa, na bawtismuhan sila sa ngalan ng Ama, at ng Anak, at ng Espiritu Santo, na tinuturuan silang sundin ang lahat ng iniutos ko sa inyo.',
        'At narito, ako’y kasama ninyo sa lahat ng araw, hanggang sa katapusan ng panahon.”',
      ],
      closing: { leader: 'Ang Salita ng Diyos.', response: 'Salamat sa Diyos.' },
    },
    { type: 'label', text: 'Motibasyon' },
    {
      type: 'paragraph',
      text: 'Bilang mga Tagapagtaguyod, dapat tayong maudyukan ng kaisipang ito ang pinakamataimtim na pananabik ng Banal na Puso ni Hesus na ikalat ang debosyong ito nang lubos hangga’t maaari.',
    },
    { type: 'label', text: 'Pagpapatotoo / Pagninilay' },
    {
      type: 'note',
      text: 'Magsagawa ng malalim na pakikinig sa pamamagitan ng lubos na pagiging naririto at matulungin sa nagbabahagi. Iwaksi ang mga abala at tunay na pagtuunan ng pansin ang kanyang ibinabahagi.',
    },
    { type: 'rubric', text: 'Lumuhod po tayong lahat', posture: 'kneel' },
    { type: 'label', text: 'Pagsamba sa Harap ng Banal na Sakramento' },
    {
      type: 'prayer',
      speaker: 'A',
      phrases: [
        'O Puso ni Hesus, ipinamamanhik ko na ipagkaloob Mo sa akin ang biyaya na mahalin Ka nang higit at higit pa.',
        'Maria, Ina ng aking Panginoon at aking Ina rin, gawin mo akong magmahal sa Kanyang Banal na Puso.',
        'Sinasamba Kita, O Hesus, sa Banal na Sakramento; sinasamba ko ang Iyong Pusong naglalagablab sa pag-ibig sa akin.',
        'Ikaw ang matamis na dako ng aking kapahingahan, ang minamahal na layon ng aking pag-ibig.',
        'Hesus ko, ninanais ko na sa sandaling ito, pumunta Ka sa aking kaluluwa at supukin ito ng Iyong pag-ibig.',
        'Sa inyo ako isinasanib, O marangal na Koro ng mga Trono, sa pagpaparangal sa Banal na Puso ni Hesus. Amen.',
      ],
    },
    { type: 'rubric', text: 'Maupo po tayong lahat', posture: 'sit' },
    { type: 'label', text: 'Gawain' },
    {
      type: 'paragraph',
      text: 'Bilang mga Tagapagtaguyod, dapat tayong magtaglay ng sigasig upang ikalat ang debosyon sa Banal na Puso ni Hesus sa pamamagitan ng aming sariling halimbawa, na inaanyuan ang aming sariling mga puso ayon sa mapagpakumbabang Puso ni Hesus sa pamamagitan ng katamisan at kahinahunan ng aming pag-uugali. Ang pagbibigay ng halimbawa ay lagi nang higit na nakaaantig kaysa sa pangangaral. Nawa’y ang lahat ng gawin natin, isipin, at sabihin, maging ang aming katahimikan, ay magsalita tungkol sa aming pag-ibig sa Banal na Puso ng ating Panginoon!',
    },
  ],
};

const office8: VigilSection = {
  id: 'office-8',
  kicker: 'Ikawalong Oras',
  title: 'Masigasig na Kaibigan',
  epigraph: { text: 'Naparito ako upang magdala ng apoy sa lupa, at gaano ko na sanang ibig na ito’y nagliliyab na!', citation: 'Lucas 12:49' },
  blocks: [
    { type: 'rubric', text: 'Tumayo po tayong lahat', posture: 'stand' },
    { type: 'hymnCue' },
    { type: 'label', text: 'Disposisyong Espirituwal' },
    {
      type: 'paragraph',
      text: 'Bilang mga Masigasig na Kaibigan ng Banal na Puso, ituring nating tayo ay may pananagutan sa pagsulong ng kapakanan ng Banal na Puso ni Hesus sa gitna ng aming mga kapwa-tao. Ikinalulungkot namin na hindi namin maipabatid sa buong sanlibutan ang mayamang kayamanan ng biyayang nakaimbak sa Kanyang Puso; kayamanang handang-handa nang ibuhos ng ating Panginoon sa Kanyang mga tapat na kaibigan.',
    },
    {
      type: 'paragraph',
      text: 'Gamitin nating lahat ng paraang nasa aming kapangyarihan upang isanib ang pinakamatamis na debosyong ito sa isipan ng iba, sapagkat ito’y maikling daan patungo sa kabanalan at tiyak na paraan ng kaligtasan. Sa pagtupad ng aming tungkulin, dapat tayong kumilos nang kaisa at humingi ng tulong sa Kalinis-linisang Puso ni Maria at sa Koro ng mga Prinsipalidad.',
    },
    { type: 'rubric', text: 'Maupo po tayong lahat', posture: 'sit' },
    { type: 'label', text: 'Pagbasa' },
    {
      type: 'reading',
      citation: 'Roma 8:31b-39',
      introduction: 'Pagbasa mula sa Sulat ni San Pablo sa mga Taga-Roma.',
      phrases: [
        'Mga kapatid: Kung ang Diyos ay panig sa atin, sino pa ang laban sa atin?',
        'Hindi niya ipinagkait ang kanyang sariling Anak, kundi ibinigay niya siya para sa ating lahat; paano niya hindi ipagkakaloob sa atin nang walang bayad ang lahat ng bagay kasama niya?',
        'Sino ang magsasakdal laban sa mga hinirang ng Diyos? Ang Diyos ang nagpapawalang-sala. Sino ang hahatol sa atin?',
        'Si Kristo Hesus ang namatay, higit pa rito, ang muling nabuhay, na naroon din sa kanan ng Diyos, na siyang mamamagitan para sa atin.',
        'Ano ang maghihiwalay sa atin sa pag-ibig ni Kristo? Ang kapighatian, o ang kagipitan, o ang pag-uusig, o ang taggutom, o ang kahubaran, o ang panganib, o ang tabak?',
        'Gaya ng nasusulat: Alang-alang sa Iyo kami’y pinapatay buong araw; itinuturing kami na parang mga tupang papatayin.',
        'Hindi, sa lahat ng bagay na ito tayo’y higit pa sa mga mananakop sa pamamagitan niya na umibig sa atin.',
        'Sapagkat natitiyak kong ni kamatayan, ni buhay, ni mga anghel, ni mga pamunuan, ni mga bagay sa kasalukuyan, ni mga bagay na darating, ni mga kapangyarihan, ni kataasan, ni kalaliman, ni anupamang nilalang, ay hindi makapaghihiwalay sa atin mula sa pag-ibig ng Diyos na nasa kay Kristo Hesus na ating Panginoon.',
      ],
      closing: { leader: 'Ang Salita ng Diyos.', response: 'Salamat sa Diyos.' },
    },
    { type: 'label', text: 'Motibasyon' },
    {
      type: 'paragraph',
      text: 'Bilang mga Masigasig na Kaibigan ng Banal na Puso, pagnilayan natin ang matamis na tingin na ibinibigay ng ating Panginoon sa mga matuwid, na nagsasabing: “Masdan ninyo ang Aking Pusong labis na umibig sa mga tao at kaunti lamang ang minamahal Ako nila kapalit,” at magpasya tayong gamitin ang bawat paraan upang Siya ay mahalin.',
    },
    {
      type: 'paragraph',
      text: 'Ang aming diwang nag-uudyok ay dapat maging kaparehong sigasig na sumupok sa Banal na Puso ni Hesus, na ipinamamalas sa pamamagitan ng aming mga gawa, mga salita, at mga damdamin.',
    },
    { type: 'label', text: 'Pagpapatotoo / Pagninilay' },
    {
      type: 'note',
      text: 'Magsagawa ng malalim na pakikinig sa pamamagitan ng lubos na pagiging naririto at matulungin sa nagbabahagi. Iwaksi ang mga abala at tunay na pagtuunan ng pansin ang kanyang ibinabahagi.',
    },
    { type: 'rubric', text: 'Lumuhod po tayong lahat', posture: 'kneel' },
    { type: 'label', text: 'Pagsamba sa Harap ng Banal na Sakramento' },
    {
      type: 'prayer',
      speaker: 'A',
      phrases: [
        'Sinasamba Kita, O Hesus, sa Banal na Sakramento. Sinasamba ko ang Iyong Pusong naglalagablab sa pag-ibig sa akin.',
        'O Hesus, pumunta Ka sa sandaling ito sa aking puso at supukin ito ng Iyong pag-ibig.',
        'O Puso ni Hesus, ipinamamanhik ko na ipagkaloob Mo sa akin ang biyaya na mahalin Ka nang higit at higit pa.',
        'Maria, Ina ng aking Panginoon at aking Ina rin, gawin mo akong magmahal sa Kanyang Banal na Puso.',
        'O Puso ni Hesus na labis na umiibig sa amin, kay tamis Mo! Kailan Kita makikitang minamahal ng lahat?',
        'Kung mabubuksan ko lamang ang mga kababalaghan ng Iyong pag-ibig — at gawin ang lahat ng puso na tapat na tumugon dito! Amen.',
      ],
    },
    { type: 'rubric', text: 'Maupo po tayong lahat', posture: 'sit' },
    { type: 'label', text: 'Gawain' },
    {
      type: 'paragraph',
      text: 'Bilang mga Masigasig na Kaibigan ng Banal na Puso, pagsikapan nating may banal na sigasig at pagpipigil na patigilin ang bawat pang-aalipusta laban sa ating Panginoon, na dapat nating manalo ng pag-ibig sa pamamagitan ng salita at halimbawa. Hikayatin at payuhan natin ang lahat ng aming makakaya, lalo na ang aming mga kaibigan at kakilala, na magbigay ng anumang palatandaan ng pag-ibig sa Banal na Puso, higit sa lahat, sa pamamagitan ng madalas na Kumpisal, Banal na Komunyon, at mga Banal na Oras ng Pagsamba.',
    },
  ],
};

const office9: VigilSection = {
  id: 'office-9',
  kicker: 'Ikasiyam na Oras',
  title: 'Manunumbalik',
  epigraph: {
    text: 'Ang pang-aalipusta ay nagpaluray sa aking puso, at ako’y nanghihina. Naghintay ako ng maaawa, ngunit wala; ng mag-aaliw, ngunit wala akong natagpuan.',
    citation: 'Awit 69:20',
  },
  blocks: [
    { type: 'rubric', text: 'Tumayo po tayong lahat', posture: 'stand' },
    { type: 'hymnCue' },
    { type: 'label', text: 'Disposisyong Espirituwal' },
    {
      type: 'paragraph',
      text: 'Ang aming pangunahing tungkulin bilang mga Manunumbalik, ayon kay Santa Margarita Maria, ay ang mapagpakumbabang paghingi ng kapatawaran ng Diyos para sa lahat ng pang-aalipustang walang-humpay na ginagawa sa Banal na Puso ni Hesus sa Banal na Sakramento. Ang aming tapat na pagganap sa tungkuling ito ay magbibigay-katiyakan sa mabuting pag-asa na ang kapatawaran ay ipagkakaloob din sa aming sariling mga kasalanan.',
    },
    {
      type: 'paragraph',
      text: 'Tandaan natin ang sinabi minsan ng ating Panginoon sa Kanyang tapat na lingkod: “Wala bang maaawa sa Aking dalamhati at lalapit upang saklolohan Ako, na inaalipusta, gaya ko ngayon, ng mga makasalanan?” Upang maging katanggap-tanggap sa Banal na Puso ang aming mga gawa ng panunumbalik, isanib natin ang ating sarili sa Kalinis-linisang Puso ni Maria at sa Koro ng mga Potestad.',
    },
    { type: 'rubric', text: 'Maupo po tayong lahat', posture: 'sit' },
    { type: 'label', text: 'Pagbasa' },
    {
      type: 'reading',
      citation: 'Mateo 23:33-39',
      introduction: 'Pagbasa mula sa Banal na Ebanghelyo ayon kay San Mateo.',
      phrases: [
        '“Kayong mga ahas, kayong lahi ng mga ulupong! Paano kayo makatatakas sa hatol ng impiyerno?',
        'Kaya nga’t magsusugo ako sa inyo ng mga propeta, mga pantas, at mga eskriba, na ang iba sa kanila ay papatayin ninyo at ipapako, at ang iba ay hahagupitin ninyo sa inyong mga sinagoga at hahabulin sa bawat bayan,',
        'upang mapasainyo ang lahat ng dugong matuwid na nabuhos sa lupa, mula sa dugo ng matuwid na si Abel hanggang sa dugo ni Zacarias na anak ni Baraquias, na inyong pinatay sa pagitan ng santuwaryo at ng altar.',
        'Tunay na sinasabi ko sa inyo, mangyayari ang lahat ng ito sa salinlahing ito.',
        '“Jerusalem, Jerusalem, ikaw na pumapatay sa mga propeta at bumabato sa mga isinugo sa iyo!',
        'Ilang beses ko nang ninais na tipunin ang iyong mga anak, gaya ng pagtitipon ng inahing manok sa kanyang mga sisiw sa ilalim ng kanyang mga pakpak, ngunit hindi ninyo ninais!',
        'Masdan ninyo, ang inyong tahanan ay iniiwan sa inyo, na nakatiwangwang.',
        'Sapagkat sinasabi ko sa inyo, hindi na ninyo ako makikita hanggang sabihin ninyo, ‘Pinagpala ang dumarating sa ngalan ng Panginoon.’”',
      ],
      closing: { leader: 'Ang Salita ng Diyos.', response: 'Salamat sa Diyos.' },
    },
    { type: 'label', text: 'Motibasyon' },
    {
      type: 'paragraph',
      text: 'Bilang mga Manunumbalik, pagnilayan natin si Hesus na ipinapakita ang Kanyang Puso at nagbibigay sa atin ng titig na may pagmamahal. Sa Kanyang kanang kamay, itinuturo Niya ang Kanyang sariling Puso, at sa kaliwa ay hinihiling ang atin, na sinasabi: “Anak Ko, ipagkatiwala mo sa Akin ang iyong Puso.”',
    },
    {
      type: 'paragraph',
      text: 'Maudyukan tayo ng parehong layunin na taglay ng ating Panginoon sa pagtatatag ng minamahal na debosyong ito: ang magparingas sa lahat ng puso ng higit na pag-ibig sa Diyos.',
    },
    { type: 'label', text: 'Pagpapatotoo / Pagninilay' },
    {
      type: 'note',
      text: 'Magsagawa ng malalim na pakikinig sa pamamagitan ng lubos na pagiging naririto at matulungin sa nagbabahagi. Iwaksi ang mga abala at tunay na pagtuunan ng pansin ang kanyang ibinabahagi.',
    },
    { type: 'rubric', text: 'Lumuhod po tayong lahat', posture: 'kneel' },
    { type: 'label', text: 'Pagsamba sa Harap ng Banal na Sakramento' },
    {
      type: 'prayer',
      speaker: 'A',
      phrases: [
        'O pinakamaawaing Puso ni Hesus, Banal na Tagapamagitan, sa pamamagitan Mo ipinangako ng Ama na Walang Hanggan na diringgin Niya ang aming mga panalangin, na sinasabi sa Iyong minamahal na kabiyak na si Margarita Maria: “Manalangin ka sa Akin sa pamamagitan ng Aking Banal na Puso. Sa pamamagitan ng Pusong ito, diringgin Ko ang iyong mga panalangin, at makakamtan mo ang anumang iyong ninanais.”',
        'Kung magagawa ko lamang, O Banal na Manunubos, na burahin ng aking mga luha at hugasan ng aking dugo ang lahat ng kawalang-utang-na-loob na aking ipinakita kapalit ng labis na Iyong pag-ibig!',
        'Sa mahinang lungkot na nadarama ko sa aking mga kasalanan, idinaragdag ko ang matalim na dalamhating Iyong nadama sa panalangin at agonya ng pawis sa Halamanan ng Getsemani, sa pagmamasid sa aking mga kasalanan at ng lahat ng tao, at inihahandog ko ang mga ito sa Iyong Amang Walang Hanggan kasama ng Iyong sariling Banal na Puso.',
        'Punuin at bayaran Mo ng Iyong pag-ibig ang aking kawalang-utang-na-loob, kawalang-malasakit, at pagkalimot sa gayong walang-kaparis na biyaya,',
        'at ipagkaloob Mo sa akin mula ngayon ang paggalang sa Iyong presensya, upang sa gayon maitama ko ang nakaraan, at sa aking halimbawa ay maakay ang maraming kaluluwa sa Iyong pag-ibig, na aking inihahandog at itinatalaga sa aking sarili buhat sa sandaling ito, na pinipili ang Iyong Kabanal-banalang Puso bilang aking pananatiling tahanan.',
        'O Hesus ko, gagamit ako ng bawat paraan upang gumawa ng panunumbalik para sa napakaraming kasalanang nagawa ng sangkatauhan at ng aking sarili.',
        'Itatalaga ko sa Iyo ang lahat ng araw ng aking buhay dahil sa pag-ibig sa Iyong Kabanal-banalang Puso, at ibibigay ko sa Iyo ang huling hininga ng aking buhay. Amen.',
      ],
    },
    { type: 'rubric', text: 'Maupo po tayong lahat', posture: 'sit' },
    { type: 'label', text: 'Gawain' },
    {
      type: 'paragraph',
      text: 'Bilang mga Manunumbalik, dapat nating sundin ang lahat ng tungkulin ng aming kalagayan sa buhay, na dinadaig para dito ang bawat balakid ng tao. Sa taos-pusong kababaang-loob, sa mapagpakumbabang pagkilala sa aming mga kasalanan, at may malaking pagtitiwala sa mga kabutihang-loob ni Hesukristo, ginagawa namin ang panunumbalik na ito sa Kanyang Banal na Puso para sa lahat ng pang-aabusong Kanyang tinatanggap.',
    },
  ],
};

export const nineOfficesPart_fil: LocalizedPart = {
  id: 'nine-offices',
  title: 'Siyam na Oras ng Banal na Puso',
  shortTitle: 'Siyam na Oras',
  sections: [
    {
      reviewed: false,
      section: {
        id: 'nine-offices-intro',
        title: 'Siyam na Oras ng Banal na Puso',
        blocks: [
          {
            type: 'paragraph',
            text: 'Ang Siyam na Oras ng Banal na Puso ay isang kilalang gawain ng debosyon sa Puso ni Hesus. Masusundan natin ang pinagmulan nito hanggang mismo kay Santa Margarita Maria. Dalawa sa mga oras (Nagsusumamo at Manunumbalik) ang iminungkahi sa santa ng ating Panginoon.',
          },
          {
            type: 'paragraph',
            text: 'Dinagdagan niya pagkatapos ng ibang mga oras hanggang umabot sa siyam, kasama ang siyam na koro ng mga anghel, sapagkat sa isang pangitain ay nakita niya si Kristo na napapaligiran ng mga koro ng anghel, na naganyaya sa kanya na sumapi sa kanila sa pagsamba sa Banal na Puso.',
          },
          {
            type: 'paragraph',
            text: 'Ayon sa santa, nais ng Banal na Puso ang “natatanging pagsasanib at debosyon sa mga banal na anghel, na pinili upang umibig, magparangal, at magpuri sa Banal na Puso sa banal na sakramento ng pag-ibig, upang sila, na naririto sa Kanyang banal na presensya, ay umibig sa Kanya para sa atin at para sa lahat ng hindi umiibig sa Kanya, at magbawi rin ng mga kawalang-galang na ating ginagawa sa Kanyang banal na presensya.”',
          },
          {
            type: 'paragraph',
            text: 'Ang salitang “oras” ay ginagamit dito sa kahulugan nito bilang tungkulin o paglilingkod na iniaalay sa iba.',
          },
          {
            type: 'paragraph',
            text: 'Mayroong iba’t ibang paraang ginagamit ng mga mananampalataya. Ang paraang iminungkahi ni Santa Margarita Maria ay ang pagkuha ng isang oras sa loob ng isang buwan, sa siyam na magkakasunod na buwan, ito man ay itinakda o pinili nang paisa-isa. Iba naman ang mas gustong kumuha ng ibang oras bawat araw o bawat linggo.',
          },
          {
            type: 'paragraph',
            text: 'Maaari ring mag-iba-iba ang gawi ng debosyong ito. Bagaman mabuting bigkasin ang iminungkahing panalangin bawat araw kasama ng isang koro ng mga anghel, ang diin ay dapat nasa pagtatakda ng lahat ng gawain sa buong araw ayon sa diwa ng sariling oras.',
          },
          {
            type: 'paragraph',
            text: 'May maaaring nagnanais na pag-ukulan ng pansin ang kahulugan nito sa kanilang umagang pagninilay o isanib ang diwa nito sa partikular na pagsusuri sa loob ng isang buwan. Kung saan ibinabahagi ang mga oras ng iba, ang pamayanang ito ng debosyon sa Banal na Puso ay tumutulong sa paglinang ng kamalayan sa pagtutulungan sa panalangin sa loob ng misteryosong katawan ni Kristo.',
          },
          {
            type: 'paragraph',
            text: 'Ang pagsasagawa ng Siyam na Oras ay isang alyansa ng mga anghel at tao kasama sina Hesus at Maria. Sa anyong ito ng pagsamba, siyam na tao o siyam na grupo ng mga deboto ang gumagawa ng alyansa sa siyam na koro ng mga anghel, kung saan kinukuha ng bawat tao o grupo ang alinman sa mga natatanging oras na ito.',
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
export const officeChoirs_fil = [
  { number: 1, name: 'Mananamba', choir: 'Dominasyon' },
  { number: 2, name: 'Umiibig', choir: 'Serapin' },
  { number: 3, name: 'Biktima', choir: 'Birtud' },
  { number: 4, name: 'Alagad', choir: 'Kerubin' },
  { number: 5, name: 'Tapat na Lingkod', choir: 'Arkanghel' },
  { number: 6, name: 'Nagsusumamo', choir: 'Anghel' },
  { number: 7, name: 'Tagapagtaguyod', choir: 'Trono' },
  { number: 8, name: 'Masigasig na Kaibigan', choir: 'Prinsipalidad' },
  { number: 9, name: 'Manunumbalik', choir: 'Potestad' },
];
