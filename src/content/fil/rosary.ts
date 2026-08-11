import { LocalizedPart } from '../index';

/**
 * Filipino (Tagalog) translation, pending owner review. Universal fixed
 * prayers (Sumasampalataya, Ama Namin, Aba Ginoong Maria, Luwalhati, Aba Po
 * Santa Mariang Reyna) use the traditional, customary Filipino wording long
 * used in Philippine Catholic devotion, not a newly invented rendering.
 * Commentary/instructional text is an original translation of the English
 * source.
 */
export const rosaryPart_fil: LocalizedPart = {
  id: 'rosary',
  sections: [
    {
      reviewed: false,
      section: {
        id: 'holy-rosary-intro',
        title: 'Banal na Rosaryo',
        blocks: [
          {
            type: 'prayer',
            phrases: [
              '“Ipagdasal ninyo ang Rosaryo araw-araw... Manalangin, manalangin nang marami at maghandog ng sakripisyo para sa mga makasalanan... Ako ang Mahal na Birhen ng Rosaryo. Ako lamang ang makakatulong sa inyo. ...Sa wakas, mananaig ang aking Kalinis-linisang Puso.”',
              '— Ang Mahal na Birhen sa Fatima',
            ],
          },
          {
            type: 'paragraph',
            text: 'Ang salitang Rosaryo ay nangangahulugang “Korona ng mga Rosas”. Ipinahayag ng Mahal na Birhen sa ilang tao na sa tuwing binabanggit nila ang isang Aba Ginoong Maria, nagkakaloob sila sa kanya ng isang magandang rosas, at sa bawat kumpletong Rosaryo ay nagiging korona ito ng mga rosas para sa kanya. Ang rosas ang reyna ng mga bulaklak, kaya’t ang Rosaryo ang rosas ng lahat ng debosyon, at siya ngang pinakamahalaga sa lahat.',
          },
          {
            type: 'paragraph',
            text: 'Ang Banal na Rosaryo ay itinuturing na isang ganap na dasal sapagkat taglay nito ang kamangha-manghang kasaysayan ng ating kaligtasan. Sa pamamagitan ng Rosaryo, binubulay-bulay natin ang mga hiwaga ng kagalakan, kalungkutan, kaluwalhatian, at liwanag ni Hesus at ni Maria. Ito ay isang simpleng dasal, mapagpakumbaba tulad ni Maria. Isa itong dasal na maaari nating idalangin nang sama-sama kasama Niya, ang Ina ng Diyos.',
          },
          {
            type: 'paragraph',
            text: 'Sa pamamagitan ng Aba Ginoong Maria, inaanyayahan natin Siyang ipanalangin tayo. Lagi namang ipinagkakaloob ng Mahal na Birhen ang ating kahilingan. Isinasama Niya ang Kanyang dasal sa atin. Kaya’t ito’y lalong nagiging mabisa, sapagkat anumang hingin ni Maria, laging ipinagkakaloob sa kanya; hindi kailanman masasabihan ni Hesus ng “hindi” ang anumang hilingin ng Kanyang Ina.',
          },
          {
            type: 'paragraph',
            text: 'Sa bawat pagpapakita, inanyayahan tayo ng Inang makalangit na ipagdasal ang Rosaryo bilang isang makapangyarihang sandata laban sa kasamaan, upang tayo’y madala sa tunay na kapayapaan. Sa iyong panalangin na kasama ang iyong Inang makalangit, makakamtan mo ang dakilang kaloob ng pagbabago ng puso at pagbabalik-loob.',
          },
          {
            type: 'paragraph',
            text: 'Sa bawat araw, sa pamamagitan ng panalangin, mapalalayo mo sa iyong sarili at sa iyong bayan ang maraming panganib at kasamaan. Maaaring mukhang paulit-ulit ang dasal na ito, ngunit ito’y katulad ng dalawang magkasintahan na paulit-ulit na binabanggit sa isa’t isa ang mga salitang: “Mahal kita”...',
          },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'mysteries-of-the-rosary',
        title: 'Mga Hiwaga ng Rosaryo',
        blocks: [
          {
            type: 'note',
            text: 'Idinagdag ni Papa San Juan Pablo II ang mga Hiwagang Liwanag sa Liham Apostoliko na Rosarium Virginis Mariae, noong Oktubre 16, 2002.',
          },
          { type: 'label', text: 'Ang mga Hiwagang Tuwa (Lunes at Sabado)' },
          {
            type: 'list',
            ordered: true,
            items: [
              'Ang Pagbati ng Anghel (Anunsiyasyon)',
              'Ang Pagdalaw ng Mahal na Birhen sa kanyang pinsang si Elisabet',
              'Ang Kapanganakan ng Panginoong Hesukristo',
              'Ang Paghahandog sa Batang Hesus sa Templo',
              'Ang Pagkatagpo sa Batang Hesus sa Templo',
            ],
          },
          {
            type: 'paragraph',
            text: 'Sa mga hiwagang ito, lumalakad tayong kasama ni Maria sa mga natatagong simula ng ating kaligtasan: ang bati ng Anghel, ang pagdalaw kay Elisabet, ang kapanganakan sa Betlehem, ang paghahandog sa Templo, at ang pagkatagpo sa Batang Hesus. Dito, ang kagalakan ay tahimik at kadalasa’y nakatago — natatagpuan sa maliliit at tapat na “oo” kaysa sa malalaking kilos. Hayaan mong ipaalala nito sa iyo na kadalasa’y unang gumagawa ang Diyos sa katahimikan, bago Siya gumawa sa kaluwalhatian.',
          },
          { type: 'label', text: 'Ang mga Hiwagang Dalamhati (Martes at Biyernes)' },
          {
            type: 'list',
            ordered: true,
            items: [
              'Ang Pagdurusa sa Halamanan',
              'Ang Paghahagupit kay Hesus',
              'Ang Pagpuputong ng Tinik',
              'Ang Pagpapasan ng Krus',
              'Ang Pagkapako at Pagkamatay ni Hesukristo',
            ],
          },
          {
            type: 'paragraph',
            text: 'Sa mga hiwagang ito, sinasamahan natin si Hesus sa Kanyang Pagpapakasakit: ang pagdurusa sa halamanan, ang paghahagupit, ang pagpuputong ng tinik, ang pagpapasan ng Krus, at ang Kanyang kamatayan sa Kalbaryo. Dito binubulay-bulay natin ang bigat ng kasalanan at ang lalim ng pag-ibig na hindi tumalikod sa pagdurusa. Hayaan mong idulot nito sa iyo ang pasasalamat, at ang pagbabayad-puri para sa mga kasalanang hanggang ngayon ay sumusugat pa rin sa Kanyang Puso.',
          },
          { type: 'label', text: 'Ang mga Hiwagang Luwalhati (Miyerkules at Linggo)' },
          {
            type: 'list',
            ordered: true,
            items: [
              'Ang Muling Pagkabuhay ng Panginoon',
              'Ang Pag-akyat ng Panginoong Hesukristo sa Langit',
              'Ang Pagbaba ng Espiritu Santo sa Mahal na Birheng Maria at sa mga Apostol',
              'Ang Pag-akyat ng Mahal na Birheng Maria sa Langit (Asunsyon)',
              'Ang Pagpuputong sa Mahal na Birheng Maria bilang Reyna ng Langit at Lupa',
            ],
          },
          {
            type: 'paragraph',
            text: 'Sa mga hiwagang ito, sinasaksihan natin ang tagumpay na sumusunod sa Krus: ang Muling Pagkabuhay, ang Pag-akyat sa Langit, ang pagbaba ng Espiritu Santo, at ang Asunsyon at Pagpuputong kay Maria. Dito, ang lungkot ay nagbibigay-daan sa pag-asa, at ang kamatayan ay hindi na ang huling salita. Hayaan mong bagong-buhayin nito ang iyong tiwala na anumang dinadala mo sa buong bantayang ito ay hindi mawawalan ng sagot.',
          },
          { type: 'label', text: 'Ang mga Hiwagang Liwanag (Huwebes)' },
          {
            type: 'list',
            ordered: true,
            items: [
              'Ang Binyag sa Panginoon',
              'Ang Kasalan sa Cana',
              'Ang Paghahayag ng Kaharian ng Diyos',
              'Ang Pagbabagong-Anyo',
              'Ang Pagtatatag ng Eukaristiya',
            ],
          },
          {
            type: 'paragraph',
            text: 'Sa mga hiwagang ito, sinusundan natin si Hesus sa Kanyang buhay-pamayanan: ang Kanyang Binyag, ang kasalan sa Cana, ang Kanyang pagpapahayag ng Kaharian, ang Kanyang Pagbabagong-Anyo, at ang Kanyang kaloob na Eukaristiya. Dito nakikita natin ang liwanag ni Kristo na pumapasok sa karaniwang daigdig, tinatawag tayo sa pagbabalik-loob at sa komunyon. Hayaan mong ipaalala nito sa iyo na ang Kristong ito ring naririto sa Eukaristiya ang siya mong binabantayan ngayong gabi.',
          },
        ],
      },
    },
    {
      reviewed: false,
      section: {
        id: 'the-holy-rosary',
        title: 'Ang Banal na Rosaryo',
        blocks: [
          { type: 'label', text: 'Tanda ng Krus' },
          {
            type: 'dialogue',
            lines: [
              {
                speaker: 'A',
                text: 'Sa ngalan ng (†) Ama, at ng Anak, at ng Espiritu Santo. Amen. (Limang beses)',
              },
            ],
          },
          { type: 'label', text: 'Ang Sumasampalataya (Credo)' },
          {
            type: 'prayer',
            speaker: 'A',
            phrases: [
              'Sumasampalataya ako sa Diyos Amang makapangyarihan sa lahat, na may gawa ng langit at lupa,',
              'sumasampalataya naman ako kay Hesukristo, iisang Anak ng Diyos, Panginoon nating lahat,',
              'nagkatawang-tao Siya lalang ng Espiritu Santo, ipinanganak ni Santa Mariang Birhen,',
              'pinagpakasakit ni Poncio Pilato, ipinako sa krus, namatay, inilibing;',
              'nanaog sa kinaroroonan ng mga yumao; nang may ikatlong araw, nabuhay na mag-uli;',
              'umakyat sa langit, naluklok sa kanan ng Diyos Amang makapangyarihan sa lahat;',
              'doon magmumulang paririto at huhukom sa nangabubuhay at nangamatay na tao.',
              'Sumasampalataya naman ako sa Diwang Banal, sa Banal na Simbahang Katolika, sa kasamahan ng mga banal,',
              'sa kapatawaran ng mga kasalanan, sa pagkabuhay na mag-uli ng nangamatay na tao, at sa buhay na walang hanggan. Amen.',
            ],
          },
          { type: 'label', text: 'Ang Ama Namin' },
          {
            type: 'dialogue',
            lines: [
              {
                speaker: 'L',
                text: 'Ama namin, sumasalangit Ka, sambahin ang ngalan Mo. Mapasaamin ang kaharian Mo. Sundin ang loob Mo, dito sa lupa para nang sa langit.',
              },
              {
                speaker: 'R',
                text: 'Bigyan Mo kami ngayon ng aming kakanin sa araw-araw. At patawarin Mo kami sa aming mga sala, para nang pagpapatawad namin sa nagkakasala sa amin. At huwag Mo kaming ipahintulot sa tukso, at iadya Mo kami sa lahat ng masama. Amen.',
              },
            ],
          },
          { type: 'label', text: 'Ang Aba Ginoong Maria' },
          {
            type: 'dialogue',
            lines: [
              {
                speaker: 'L',
                text: 'Aba Ginoong Maria, napupuno ka ng grasya, ang Panginoong Diyos ay sumasaiyo. Bukod kang pinagpala sa babaeng lahat, at pinagpala naman ang iyong Anak na si Hesus.',
              },
              {
                speaker: 'R',
                text: 'Santa Maria, Ina ng Diyos, ipanalangin mo kaming makasalanan, ngayon at kung kami ay mamamatay. Amen.',
              },
            ],
          },
          { type: 'label', text: 'Ang Luwalhati' },
          {
            type: 'dialogue',
            lines: [
              { speaker: 'L', text: 'Luwalhati sa Ama, at sa Anak, at sa Espiritu Santo.' },
              { speaker: 'R', text: 'Kapara noong sa unang-una, ngayon at magpakailanman, at magpasawalang-hanggan. Amen.' },
            ],
          },
          { type: 'label', text: 'Ang Dasal ng Fatima' },
          {
            type: 'prayer',
            speaker: 'A',
            phrases: [
              'O Diyos ko, patawarin Mo kami sa aming mga kasalanan, iligtas Mo kami sa apoy ng impiyerno, dalhin Mo sa langit ang lahat ng kaluluwa, lalo na yaong mga nangangailangan ng Iyong awa.',
            ],
          },
          { type: 'note', text: 'Sa dulo ng bawat dekada, idinaragdag ang mga sumusunod na panalangin:' },
          {
            type: 'dialogue',
            lines: [
              { speaker: 'L', text: 'Hesus, maamo at mapagpakumbabang-puso,' },
              { speaker: 'R', text: 'Gawin mong katulad ng iyong puso ang aming puso.' },
              { speaker: 'L', text: 'Malinis na puso ni San Jose,' },
              { speaker: 'R', text: 'Ipanalangin mo kami.' },
              { speaker: 'L', text: 'Halina, Espiritu Santo,' },
              {
                speaker: 'R',
                text: 'Halina sa pamamagitan ng makapangyarihang pamamagitan ng Kalinis-linisang Puso ni Maria, ang iyong minamahal na kabiyak.',
              },
            ],
          },
          { type: 'label', text: 'Aba Po Santa Mariang Reyna' },
          {
            type: 'prayer',
            speaker: 'A',
            phrases: [
              'Aba po, Santa Mariang Reyna, Ina ng awa: ikaw ang kabuhayan, at katamisan, at pag-asa namin, aba!',
              'Ikaw nga ang tinatawagan namin, na sa lupang ito’y mga tapon na anak ni Eva.',
              'Ikaw rin ang pinagbubuntunghininga namin, na nagsisihibik at nagsisitangis dini sa lupang bayang kahapis-hapis.',
              'Ay aba, pintakasi namin, ilingon mo sa amin ang mga mata mong maawain.',
              'At saka kung matapos yaring pagkatapon namin, ipakita mo sa amin si Hesus na iyong Anak na pinagpala.',
              'O maawain, o mapagmahal, o matamis na laging Birhen Mariang mahal.',
            ],
          },
          {
            type: 'dialogue',
            lines: [
              { speaker: 'L', text: 'Ipanalangin mo kami, Santa Ina ng Diyos,' },
              { speaker: 'R', text: 'Nang kami’y maging dapat makinabang sa mga ipinangako ni Kristo.' },
            ],
          },
          { type: 'label', text: 'Panghuling Dasal' },
          {
            type: 'dialogue',
            lines: [{ speaker: 'L', text: 'Manalangin tayo.' }],
          },
          {
            type: 'prayer',
            speaker: 'A',
            phrases: [
              'O Diyos, na sa pamamagitan ng buhay, kamatayan, at muling pagkabuhay ng iyong Bugtong na Anak,',
              'ay nagkamit para sa amin ng gantimpala ng buhay na walang hanggan;',
              'ipagkaloob Mo, aming isinasamo, na sa pagninilay sa mga hiwagang ito ng kabanal-banalang Rosaryo ng Mahal na Birheng Maria,',
              'matularan namin ang laman nito, at makamtan ang ipinangako nito, sa pamamagitan din ni Kristo, aming Panginoon. Amen.',
            ],
          },
          {
            type: 'dialogue',
            lines: [
              { speaker: 'L', text: 'Bigyan mo po ng kapahingahang walang hanggan, Panginoon,' },
              { speaker: 'R', text: 'At sila’y liwanagan ng liwanag na walang hanggan.' },
              { speaker: 'L', text: 'Sila nawa’y magpahinga sa kapayapaan.' },
              { speaker: 'R', text: 'Amen.' },
              { speaker: 'L', text: 'Maria, Kalinga ng mga Kristiyano,' },
              { speaker: 'R', text: 'Ipanalangin mo kami.' },
            ],
          },
        ],
      },
    },
  ],
};
