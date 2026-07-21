import { VigilPart } from '../types/content';

export const confessionGuidePart: VigilPart = {
  id: 'confession-guide',
  title: 'A Guide for Confession',
  sections: [
    {
      id: 'before-confession',
      title: 'Before Confession',
      blocks: [
        {
          type: 'paragraph',
          text: 'Be truly sorry for your sins. The essential act of Penance, on the part of the penitent, is contrition, a clear and decisive rejection of the sin committed, together with a resolution not to commit it again, out of the love one has for God and which is reborn with repentance.',
        },
        {
          type: 'paragraph',
          text: 'The resolution to avoid committing these sins in the future (amendment) is a sure sign that your sorrow is genuine and authentic. This does not mean that a promise never to fall again into sin is necessary. A resolution to try to avoid the near occasions of sin suffices for true repentance.',
        },
        {
          type: 'paragraph',
          text: 'God’s grace in cooperation with the intention to rectify your life will give you the strength to resist and overcome temptation in the future.',
        },
        { type: 'label', text: 'Examination of Conscience' },
        {
          type: 'paragraph',
          text: 'Before going to Confession you should make a review of mortal and venial sins since your last sacramental confession, and should express sorrow for sins, hatred for sins and a firm resolution not to sin again.',
        },
      ],
    },
    {
      id: 'during-confession',
      title: 'During Confession',
      blocks: [
        {
          type: 'paragraph',
          text: 'After examining your conscience and telling God of your sorrow, go into the confessional. You may kneel at the screen or sit to talk face-to-face with the priest.',
        },
        {
          type: 'note',
          text: 'Begin your confession with the sign of the cross: "In the name of the Father, and of the Son, and of the Holy Spirit. My last confession was ___ weeks (months, years) ago."',
        },
        {
          type: 'paragraph',
          text: 'Say the sins that you remember. Start with the one(s) that is most difficult to say. In order to make a good confession the faithful must confess all mortal sins, according to kind and number.',
        },
        {
          type: 'paragraph',
          text: 'After confessing all the sins you remember since your last good confession, you may conclude by saying, "I am sorry for these and all the sins of my past life."',
        },
        {
          type: 'paragraph',
          text: 'Listen to the words of the priest. He will assign you some penance. Doing the penance will diminish the temporal punishment due to sins already forgiven. When invited, express some prayer of sorrow or Act of Contrition such as the one below.',
        },
        { type: 'label', text: 'An Act of Contrition' },
        {
          type: 'prayer',
          phrases: [
            'O my God, I am heartily sorry for having offended you and I detest all my sins,',
            'because I dread the loss of heaven and the pains of hell.',
            'But most of all because I have offended you, my God, who are all good and deserving of all my love.',
            'I firmly resolve with the help of your grace, to confess my sins, to do penance and to amend my life. Amen.',
          ],
        },
      ],
    },
    {
      id: 'end-and-after-confession',
      title: 'At the End of, and After, Confession',
      blocks: [
        {
          type: 'paragraph',
          text: 'Listen to the words of absolution, the sacramental forgiveness of the Church through the ordained priest. As you listen to the words of forgiveness you may make the sign of the cross with the priest. If he closes by saying, "Give thanks to the Lord for He is good," answer, "For His mercy endures forever."',
        },
        {
          type: 'paragraph',
          text: 'Give thanks to God for forgiving you again. If you recall some serious sin you forgot to tell, rest assured that it has been forgiven with the others, but be sure to confess it in your next Confession. Do your assigned Penance.',
        },
        {
          type: 'paragraph',
          text: 'Resolve to return to the Sacrament of Reconciliation often. We Catholics are fortunate to have the Sacrament of Reconciliation. It is the ordinary way for us to have our sins forgiven. This sacrament is a powerful help to get rid of our weaknesses, grow in holiness, and lead a balanced and virtuous life.',
        },
      ],
    },
  ],
};
