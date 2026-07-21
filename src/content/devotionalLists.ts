import { VigilPart } from '../types/content';

export const devotionalListsPart: VigilPart = {
  id: 'devotional-lists',
  title: 'Devotional References',
  sections: [
    {
      id: 'twelve-promises',
      title: '12 Promises of the Sacred Heart',
      blocks: [
        { type: 'note', text: 'The Promises of the Sacred Heart of Jesus to St. Margaret Mary' },
        {
          type: 'list',
          ordered: true,
          items: [
            'I will give them all the graces necessary in their state of life.',
            'I will establish peace in their homes.',
            'I will comfort them in all their afflictions.',
            'I will be their secure refuge during life, and above all, in death.',
            'I will bestow abundant blessings upon all their undertakings.',
            'Sinners will find in my Heart the source and infinite ocean of mercy.',
            'Lukewarm souls shall become fervent.',
            'Fervent souls shall quickly mount to high perfection.',
            'I will bless every place in which an image of my Heart is exposed and honored.',
            'I will give to priests the gift of touching the most hardened hearts.',
            'Those who shall promote this devotion shall have their names written in my Heart.',
            'I promise you in the excessive mercy of my Heart that my all-powerful love will grant to all those who receive Holy Communion on the First Fridays in nine consecutive months the grace of final perseverance; they shall not die in my disgrace, nor without receiving their sacraments. My divine Heart shall be their safe refuge in this last moment.',
          ],
        },
      ],
    },
    {
      id: 'nine-thorns',
      title: '9 Thorns in the Sacred Heart',
      blocks: [
        { type: 'note', text: 'There are nine thorns in the Heart of Jesus which require reparation:' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Souls in the state of mortal sin',
            'Tepid souls',
            'Consecrated souls living in sin',
            'Ungrateful souls',
            'Souls in purgatory',
            'Those who refuse to receive Communion',
            'Souls who do not visit the Eucharist in the tabernacle',
            'Souls who make bad Confessions',
            'Souls who receive Communion with mortal sins',
          ],
        },
      ],
    },
    {
      id: 'five-offenses',
      title: '5 Offenses and Blasphemies against the Immaculate Heart of Mary',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Blasphemies against the Immaculate Conception',
            'Blasphemies against her virginity',
            'Blasphemies against her divine maternity, at the same time the refusal to accept her as the Mother of all men',
            'Instilling indifference, scorn and even hatred towards this Immaculate Mother in the hearts of children',
            'Direct insults against Her sacred images',
          ],
        },
      ],
    },
  ],
};
