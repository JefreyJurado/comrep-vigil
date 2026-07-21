import { ContentBlock, VigilPart } from '../types/content';

function psalmBlock(antiphon: string, verses: { side: 'Side 1' | 'Side 2'; text: string }[]): ContentBlock[] {
  return [
    { type: 'dialogue', lines: [{ speaker: 'L', text: antiphon }, { speaker: 'R', text: antiphon }] },
    { type: 'dialogue', lines: verses.map((v) => ({ speaker: v.side, text: v.text })) },
    {
      type: 'dialogue',
      lines: [
        {
          speaker: 'A',
          text: 'Glory to the Father and to the Son and to the Holy Spirit, as it was in the beginning, is now, and will be forever. Amen.',
        },
        { speaker: 'A', text: antiphon },
      ],
    },
  ];
}

export const saturdayOfficePart: VigilPart = {
  id: 'saturday-office',
  title: 'Saturday Office of Readings',
  shortTitle: 'Office of Readings',
  sections: [
    {
      id: 'saturday-office-opening',
      title: 'Saturday Office of Readings',
      epigraph: undefined,
      blocks: [
        {
          type: 'note',
          text: 'Memorial of the Blessed Virgin Mary — adapted from the Office of Readings for the Feast of the Immaculate Heart of Mary.',
        },
        { type: 'rubric', text: 'Please stand and make the Sign of the Cross as the priest prays', posture: 'stand' },
        {
          type: 'dialogue',
          lines: [
            { speaker: 'L', text: '(†) O God, come to my assistance.' },
            { speaker: 'R', text: 'O Lord, make haste to help me.' },
            { speaker: 'L', text: 'Glory to the Father and to the Son and to the Holy Spirit.' },
            { speaker: 'R', text: 'As it was in the beginning, is now and will be, for ever. Amen.' },
          ],
        },
        { type: 'hymnCue' },
      ],
    },
    {
      id: 'psalm-24',
      title: 'Psalm 24 — The Lord’s Entry into His Temple',
      blocks: psalmBlock('Mary received a blessing from the Lord and loving kindness from God her Savior.', [
        { side: 'Side 1', text: 'The Lord’s is the earth and its fullness, the world and all its peoples.' },
        { side: 'Side 1', text: 'It is He who set it on the seas, on the waters He made it firm.' },
        {
          side: 'Side 2',
          text: 'Who can climb the Lord’s mountain? Who shall stand in His holy place? The man with clean hands and pure heart, who desires not worthless things, who has not sworn so as to deceive his neighbor.',
        },
        {
          side: 'Side 1',
          text: 'He shall receive blessings from the Lord, and reward from the God who saves him. Such are the men who seek Him, seek the face of the God of Jacob.',
        },
        { side: 'Side 2', text: 'O gates, lift high your heads, grow higher, ancient doors. Let him enter, the king of glory!' },
        { side: 'Side 1', text: 'Who is the king of glory? The Lord, the mighty, the valiant, The Lord, the valiant in war.' },
        { side: 'Side 2', text: 'O gates, lift high your heads, grow higher, ancient doors. Let Him enter, the king of glory!' },
        { side: 'Side 1', text: 'Who is He, the king of glory? He, the Lord of armies, He is the king of glory.' },
      ]),
    },
    {
      id: 'psalm-46',
      title: 'Psalm 46 — God is on Our Side',
      blocks: psalmBlock('The Most High has made His dwelling place a holy temple.', [
        {
          side: 'Side 1',
          text: 'God is for us a refuge and strength, a helper close at hand, in time of distress: so we shall not fear though the earth should rock, though the mountains fall into the depths of the sea, even though its waters rage and foam, even though the mountains be shaken by its waves.',
        },
        { side: 'Side 2', text: 'The Lord of hosts is with us, the God of Jacob is our stronghold.' },
        {
          side: 'Side 1',
          text: 'The waters of a river give joy to God’s city, the holy place where the Most High dwells. God is within, it cannot be shaken; God will help it at the dawning of the day, Nations are in tumult, kingdoms are shaken; He lifts His voice; the earth shrinks away.',
        },
        { side: 'Side 2', text: 'The Lord of hosts is with us, the God of Jacob is our stronghold.' },
        {
          side: 'Side 1',
          text: 'Come, consider the works of the Lord, the redoubtable deeds He has done on the earth. He puts an end to wars over all the earth; the bow He breaks, the spear He snaps. He burns the shields with fire. "Be still and know that I am God, supreme among the nations, supreme on the earth!"',
        },
        { side: 'Side 2', text: 'The Lord of hosts is with us, the God of Jacob is our stronghold.' },
      ]),
    },
    {
      id: 'psalm-87',
      title: 'Psalm 87 — Jerusalem Is Mother of Us All',
      blocks: psalmBlock('Glorious things are said of you, O Virgin Mary.', [
        {
          side: 'Side 1',
          text: 'On the holy mountain is His city cherished by the Lord. The Lord prefers the gates of Zion to all Jacob’s dwellings. Of you are told glorious things, O city of God!',
        },
        {
          side: 'Side 2',
          text: 'Babylon and Egypt I will count among those who know me; Philistia, Tyre, Ethiopia, these will be her children and Zion shall be called "Mother" for all shall be her children.',
        },
        {
          side: 'Side 1',
          text: 'It is He, the Lord Most high, who gives each His place. In His register of peoples He writes: "These are her children," and while they dance they will sing: "In you all find their home."',
        },
      ]),
    },
    {
      id: 'saturday-readings',
      title: 'Readings',
      blocks: [
        {
          type: 'note',
          text: 'The First Reading and Responsory are taken from the Office of the Readings for the day. The Second Reading is from a sermon by St. Lawrence Justinian, Bishop.',
        },
        { type: 'rubric', text: 'Please pause for a brief silent reflection after the reading.' },
        { type: 'label', text: 'Responsory' },
        {
          type: 'dialogue',
          lines: [
            { speaker: 'Lector', text: 'O pure and holy Virgin, how can I find words to praise your beauty?' },
            { speaker: 'A', text: 'The highest heavens cannot contain God whom you carried in your womb.' },
            { speaker: 'Lector', text: 'Blessed are you among women, and blessed is the fruit of your womb.' },
            { speaker: 'A', text: 'The highest heavens cannot contain God whom you carried in your womb.' },
          ],
        },
        { type: 'rubric', text: 'Please all stand', posture: 'stand' },
        { type: 'label', text: 'Concluding Prayer' },
        {
          type: 'prayer',
          speaker: 'L',
          phrases: [
            'Father, You prepared the heart of the Virgin Mary a fitting home for Your Holy Spirit.',
            'By her prayers may we become a more worthy temple of His glory.',
            'Grant this through our Lord Jesus Christ, Your Son, who lives and reigns with You and the Holy Spirit, one God, for ever and ever.',
          ],
        },
        {
          type: 'dialogue',
          lines: [
            { speaker: 'A', text: 'Amen.' },
            { speaker: 'L', text: 'Let us praise the Lord.' },
            { speaker: 'R', text: 'And give Him thanks.' },
          ],
        },
      ],
    },
  ],
};
