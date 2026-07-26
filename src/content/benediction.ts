import { VigilPart } from '../types/content';

export const benedictionPart: VigilPart = {
  id: 'benediction',
  title: 'Benediction of the Blessed Sacrament',
  sections: [
    {
      id: 'benediction',
      title: 'Benediction of the Blessed Sacrament',
      blocks: [
        { type: 'rubric', text: 'Please all kneel', posture: 'kneel' },
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
            'Down in adoration falling,',
            'Lo, the sacred Host we hail;',
            'Lo, o’er ancient forms departing',
            'Newer rites of grace prevail;',
            'Faith for all defects supplying',
            'Where the feeble senses fail.',
            '',
            'To the everlasting Father,',
            'And the Son who reigns on high,',
            'With the Holy Spirit proceeding',
            'Forth from each eternally',
            'Be salvation, honor, blessing,',
            'Might, and endless majesty.',
            'Amen.',
          ],
        },
        {
          type: 'note',
          text: 'All remain kneeling as the presider stands and sings or says:',
        },
        {
          type: 'dialogue',
          lines: [
            {
              speaker: 'Presider',
              latin: 'Panem de cælo præstitísti eis (Allelúia).',
              text: 'You have given them Bread from heaven (Alleluia).',
            },
            {
              speaker: 'R',
              latin: 'Omne delectaméntum in se habéntem (Allelúia).',
              text: 'Having all sweetness within it (Alleluia).',
            },
          ],
        },
        {
          type: 'dialogue',
          lines: [{ speaker: 'Presider', latin: 'Orémus.', text: 'Let us pray.' }],
        },
        {
          // English is an original rendering of the Latin, not the 2011
          // ICEL Roman Missal translation of this collect, which is
          // separately copyrighted and requires its own permission to
          // reproduce.
          type: 'prayer',
          speaker: 'Presider',
          latinPhrases: [
            'Deus, qui nobis sub sacraménto mirábili passiónis tuæ memóriam reliquísti,',
            'tríbue, quæsumus, ita nos Córporis et Sánguinis tui sacra mystéria venerári,',
            'ut redemptiónis tuæ fructum in nobis iúgiter sentiámus.',
            'Qui vivis et regnas cum Deo Patre in unitáte Spíritus Sancti, Deus, per ómnia sæcula sæculórum.',
          ],
          phrases: [
            'O God, in this wonderful Sacrament You have left us a lasting memorial of Your Passion,',
            'grant that we may so honor the sacred mysteries of Your Body and Blood',
            'that the fruit of Your redeeming work may live in us always.',
            'You live and reign with the Father and the Holy Spirit, one God, for ever and ever.',
          ],
        },
        { type: 'dialogue', lines: [{ speaker: 'R', text: 'Amen.' }] },
        {
          type: 'note',
          text: 'The assisting minister places a humeral veil over the shoulders of the presider, who takes up the monstrance and blesses all present with the Blessed Sacrament while the other minister(s) incense it. The presider then returns before the altar and kneels, leading everyone in the Divine Praises.',
        },
      ],
    },
    {
      id: 'divine-praises',
      title: 'The Divine Praises',
      blocks: [
        {
          type: 'list',
          items: [
            'Blessed be God.',
            'Blessed be His Holy Name.',
            'Blessed be Jesus Christ, true God and true man.',
            'Blessed be the Name of Jesus.',
            'Blessed be His Most Sacred Heart.',
            'Blessed be His Most Precious Blood.',
            'Blessed be Jesus in the Most Holy Sacrament of the Altar.',
            'Blessed be the great Mother of God, Mary most holy.',
            'Blessed be her holy and Immaculate Conception.',
            'Blessed be her glorious Assumption.',
            'Blessed be the name of Mary, Virgin and Mother.',
            'Blessed be St. Joseph, her most chaste spouse.',
            'Blessed be God in His angels and in His saints.',
          ],
        },
        { type: 'label', text: 'Reposition of the Blessed Sacrament' },
        {
          type: 'note',
          text: 'The presider replaces the Blessed Sacrament in the tabernacle and genuflects while singing "O Sacrament Most Holy" or another suitable Eucharistic hymn. All the ministers then exit the sanctuary.',
        },
        { type: 'label', text: 'O Sacrament Most Holy' },
        {
          type: 'paragraph',
          text: 'O Sacrament Most Holy, O Sacrament Divine, all praise and all thanksgiving, be every moment Thine.',
        },
      ],
    },
  ],
};
