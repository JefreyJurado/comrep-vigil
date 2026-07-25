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
          text: 'Memorial of the Blessed Virgin Mary — in the spirit of the Office of Readings for the Feast of the Immaculate Heart of Mary, in original wording. The psalm texts below use the public-domain Douay-Rheims translation.',
        },
        { type: 'rubric', text: 'Please stand and make the Sign of the Cross as the priest prays', posture: 'stand' },
        {
          // This opening versicle and the "Glory to the Father" doxology that
          // follows in psalmBlock() are fixed, centuries-old formulas common
          // to every hour of the Divine Office across every English
          // translation — not a specific translator's copyrightable
          // expression, so left as the traditional wording rather than
          // rephrased.
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
      blocks: psalmBlock('The Lord blessed Mary and filled her with the mercy of God her Savior.', [
        { side: 'Side 1', text: 'The earth is the Lord’s and the fullness thereof: the world, and all they that dwell therein.' },
        { side: 'Side 1', text: 'For He hath founded it upon the seas, and hath prepared it upon the rivers.' },
        {
          side: 'Side 2',
          text: 'Who shall ascend into the mountain of the Lord? Or who shall stand in His holy place? The innocent in hands, and clean of heart, who hath not taken his soul in vain, nor sworn deceitfully to his neighbor.',
        },
        {
          side: 'Side 1',
          text: 'He shall receive a blessing from the Lord, and mercy from God his Savior. This is the generation of them that seek Him, of them that seek the face of the God of Jacob.',
        },
        { side: 'Side 2', text: 'Lift up your gates, O ye princes, and be lifted up, O eternal gates: and the King of Glory shall enter in.' },
        { side: 'Side 1', text: 'Who is this King of Glory? The Lord who is strong and mighty, the Lord mighty in battle.' },
        { side: 'Side 2', text: 'Lift up your gates, O ye princes, and be lifted up, O eternal gates: and the King of Glory shall enter in.' },
        { side: 'Side 1', text: 'Who is this King of Glory? The Lord of hosts, He is the King of Glory.' },
      ]),
    },
    {
      id: 'psalm-46',
      title: 'Psalm 46 — God is on Our Side',
      blocks: psalmBlock('God made Mary a holy dwelling place for Himself.', [
        {
          side: 'Side 1',
          text: 'Our God is our refuge and strength, a helper ready in troubles that beset us. Therefore we will not fear, though the earth be troubled, and the mountains be moved into the heart of the sea.',
        },
        { side: 'Side 2', text: 'The Lord of hosts is with us; the God of Jacob is our protector.' },
        {
          side: 'Side 1',
          text: 'The stream of the river makes glad the city of God; the Most High has sanctified His own dwelling place. God is in the midst of her, she shall not be moved; God will help her at the break of day. Nations were troubled, kingdoms were bowed down; He uttered His voice, the earth trembled.',
        },
        { side: 'Side 2', text: 'The Lord of hosts is with us; the God of Jacob is our protector.' },
        {
          side: 'Side 1',
          text: 'Come and behold the works of the Lord, what wonders He has done upon the earth, making wars to cease even to the end of the earth. He shall break the bow, and shatter the weapons; the shield He shall burn in the fire. "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth."',
        },
        { side: 'Side 2', text: 'The Lord of hosts is with us; the God of Jacob is our protector.' },
      ]),
    },
    {
      id: 'psalm-87',
      title: 'Psalm 87 — Jerusalem Is Mother of Us All',
      blocks: psalmBlock('How glorious are the things spoken of you, O Virgin Mary.', [
        {
          side: 'Side 1',
          text: 'Her foundations are set upon the holy mountains; the Lord loves the gates of Zion above all the dwellings of Jacob. Glorious things are spoken of you, O city of God!',
        },
        {
          side: 'Side 2',
          text: 'I will make mention of Rahab and Babylon among those who know Me; behold Philistia, and Tyre, with Ethiopia — this one was born there.',
        },
        {
          side: 'Side 1',
          text: 'And of Zion it shall be said: this one and that one were born in her, and the Most High Himself has established her. The Lord shall count, when He writes up the peoples, that this one was born there.',
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
            { speaker: 'Lector', text: 'O Virgin most pure and holy, what words could ever capture your beauty?' },
            { speaker: 'A', text: 'The heavens in all their vastness could not hold the God you carried within you.' },
            { speaker: 'Lector', text: 'Blessed are you among women, and blessed is the child you bore.' },
            { speaker: 'A', text: 'The heavens in all their vastness could not hold the God you carried within you.' },
          ],
        },
        { type: 'rubric', text: 'Please all stand', posture: 'stand' },
        { type: 'label', text: 'Concluding Prayer' },
        {
          type: 'prayer',
          speaker: 'L',
          phrases: [
            'Father, You made the heart of the Virgin Mary a worthy dwelling for Your Holy Spirit.',
            'Through her prayers, shape our own hearts into a temple more worthy of His glory.',
            'We ask this through Jesus Christ Your Son, who lives and reigns with You and the Holy Spirit, one God, for ever and ever.',
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
