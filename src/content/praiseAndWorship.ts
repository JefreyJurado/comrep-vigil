import { VigilPart } from '../types/content';

export const praiseAndWorshipPart: VigilPart = {
  id: 'praise-and-worship',
  title: 'Praise and Worship (M.A.C.T.S.)',
  shortTitle: 'Praise and Worship',
  sections: [
    {
      id: 'praise-and-worship-intro',
      title: 'Praise and Worship',
      centerContent: true,
      icon: 'hands-pray',
      blocks: [
        {
          type: 'paragraph',
          text: 'We come now to a time of praise and worship before the Blessed Sacrament exposed — five movements of the heart, remembered by the acronym M.A.C.T.S.: Marian, Adoration, Contrition, Thanksgiving, and Supplication. Let each one draw you a little closer into the presence of the Lord.',
        },
        {
          type: 'rubric',
          text: 'One by one, someone from among us comes forward and kneels before the Lord, truly present in the Blessed Sacrament, to voice aloud — in their own words — the prayer of this part for us all.',
          posture: 'kneel',
        },
      ],
    },
    {
      id: 'praise-and-worship-reflections',
      kicker: 'Praise and Worship',
      title: 'M.A.C.T.S.',
      blocks: [
        { type: 'label', text: 'Marian' },
        {
          type: 'paragraph',
          text: 'Consider Mary’s place in your life of faith — how she has led you to her Son, how she watches over you as a Mother, and how her prayers have accompanied you even when you did not ask.',
        },
        { type: 'rubric', text: 'A hymn is sung.' },
        { type: 'label', text: 'Adoration' },
        {
          type: 'paragraph',
          text: 'Consider who is truly present before you in the Blessed Sacrament — not a symbol, but Christ Himself, body, blood, soul, and divinity. He who made the heavens is here, waiting for you.',
        },
        { type: 'rubric', text: 'A hymn is sung.' },
        { type: 'label', text: 'Contrition' },
        {
          type: 'paragraph',
          text: 'Consider the moments, since you last knelt here, when you turned away from God’s love — in thought, word, or deed. Call these to mind not to dwell in guilt, but to recognize His mercy waiting to receive you.',
        },
        { type: 'rubric', text: 'A hymn is sung.' },
        { type: 'label', text: 'Thanksgiving' },
        {
          type: 'paragraph',
          text: 'Consider the blessings of your life — the ones you notice, and the countless ones you don’t. Consider this vigil itself, the gift of gathering before the Lord tonight.',
        },
        { type: 'rubric', text: 'A hymn is sung.' },
        { type: 'label', text: 'Supplication' },
        {
          type: 'paragraph',
          text: 'Consider the needs weighing on your heart — your own, and those of the people around you, your parish, and the world. Consider, too, whatever intention you carry with you tonight.',
        },
        { type: 'rubric', text: 'A hymn is sung.' },
      ],
    },
  ],
};
