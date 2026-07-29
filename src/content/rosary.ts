import { VigilPart } from '../types/content';

export const rosaryPart: VigilPart = {
  id: 'rosary',
  title: 'Holy Rosary',
  sections: [
    {
      id: 'holy-rosary-intro',
      title: 'Holy Rosary',
      blocks: [
        {
          type: 'prayer',
          phrases: [
            '“Say the Rosary every day... Pray, pray a lot and offer sacrifices for sinners... I’m Our Lady of the Rosary. Only I will be able to help you. ...In the end My Immaculate Heart will triumph.”',
            '— Our Lady at Fatima',
          ],
        },
        {
          type: 'paragraph',
          text: 'The word Rosary means "Crown of Roses". Our Lady has revealed to several people that each time they say a Hail Mary they are giving her a beautiful rose and that each complete Rosary makes her a crown of roses. The rose is the queen of flowers, and so the Rosary is the rose of all devotions and it is therefore the most important one.',
        },
        {
          type: 'paragraph',
          text: 'The Holy Rosary is considered a perfect prayer because within it lies the awesome story of our salvation. With the Rosary in fact we meditate the mysteries of joy, of sorrow, of glory and of light of Jesus and Mary. It’s a simple prayer, humble so much like Mary. It’s a prayer we can all say together with Her, the Mother of God.',
        },
        {
          type: 'paragraph',
          text: 'With the Hail Mary we invite Her to pray for us. Our Lady always grants our request. She joins Her prayer to ours. Therefore, it becomes ever more useful, because what Mary asks, she always receives, Jesus can never say no to whatever His Mother asks for.',
        },
        {
          type: 'paragraph',
          text: 'In every apparition, the heavenly Mother has invited us to say the Rosary as a powerful weapon against evil, to bring us to true peace. With your prayer made together with Your heavenly Mother, you can obtain the great gift of bringing about a change of hearts and conversion.',
        },
        {
          type: 'paragraph',
          text: 'Each day, through prayer you can drive away from yourselves and from your homeland many dangers and many evils. It can seem a repetitive prayer but instead it is like two sweethearts who many times say one another the words: "I love you"...',
        },
      ],
    },
    {
      id: 'mysteries-of-the-rosary',
      title: 'Mysteries of the Rosary',
      blocks: [
        {
          type: 'note',
          text: 'Pope St. John Paul II added the Luminous Mysteries in the Apostolic Letter Rosarium Virginis Mariae, October 16, 2002.',
        },
        {
          type: 'label',
          text: 'The Joyful Mysteries (Monday & Saturday)',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'The Annunciation',
            'The Visitation of the Virgin Mary to Her Cousin Elizabeth',
            'The Birth of Our Lord, Jesus Christ',
            'The Presentation of the Child Jesus in the Temple',
            'The Finding of the Child Jesus in the Temple',
          ],
        },
        {
          type: 'paragraph',
          text: 'In these mysteries we walk with Mary through the hidden beginnings of our salvation: the Angel’s greeting, the visit to Elizabeth, the birth in Bethlehem, the presentation in the Temple, and the finding of the boy Jesus. Here, joy is quiet and often hidden — found in small, faithful yeses rather than grand gestures. Let them remind you that God often works first in silence, before He works in glory.',
        },
        { type: 'label', text: 'The Sorrowful Mysteries (Tuesday & Friday)' },
        {
          type: 'list',
          ordered: true,
          items: [
            'The Agony in the Garden',
            'The Scourging at the Pillar',
            'The Crowning of Thorns',
            'The Carrying of the Cross',
            'The Crucifixion and Death of Jesus Christ',
          ],
        },
        {
          type: 'paragraph',
          text: 'In these mysteries we accompany Jesus through His Passion: the agony in the garden, the scourging, the crowning with thorns, the carrying of the Cross, and His death on Calvary. Here we meditate on the weight of sin and the depth of a love that did not turn away from suffering. Let them draw you into gratitude, and into reparation for the sins that still wound His Heart today.',
        },
        { type: 'label', text: 'The Glorious Mysteries (Wednesday & Sunday)' },
        {
          type: 'list',
          ordered: true,
          items: [
            'The Resurrection of Our Lord',
            'The Ascension of the Lord Jesus Christ into Heaven',
            'The Descent of the Holy Spirit Upon the Blessed Virgin Mary and the Apostles',
            'The Assumption of the Blessed Virgin Mary',
            'The Coronation of the Blessed Virgin Mary as Queen of Heaven and Earth',
          ],
        },
        {
          type: 'paragraph',
          text: 'In these mysteries we witness the triumph that follows the Cross: the Resurrection, the Ascension, the descent of the Holy Spirit, and Mary’s Assumption and Coronation. Here, sorrow gives way to hope, and death is not the final word. Let them renew your trust that whatever you carry through this vigil will not go unanswered.',
        },
        { type: 'label', text: 'The Luminous Mysteries (Thursday)' },
        {
          type: 'list',
          ordered: true,
          items: [
            'The Baptism of Our Lord',
            'The Wedding at Cana',
            'The Proclamation of the Kingdom of God',
            'The Transfiguration',
            'The Institution of the Eucharist',
          ],
        },
        {
          type: 'paragraph',
          text: 'In these mysteries we follow Jesus through His public life: His Baptism, the wedding at Cana, His proclamation of the Kingdom, His Transfiguration, and His gift of the Eucharist. Here we see the light of Christ breaking into the ordinary world, calling us to conversion and communion. Let them remind you that this same Christ, present in the Eucharist, is the one before whom you keep watch tonight.',
        },
      ],
    },
    {
      id: 'the-holy-rosary',
      title: 'The Holy Rosary',
      blocks: [
        { type: 'label', text: 'Sign of the Cross' },
        {
          type: 'dialogue',
          lines: [
            {
              speaker: 'A',
              text: 'In the Name of the (†) Father, and of the Son, and of the Holy Spirit. Amen. (Five times)',
            },
          ],
        },
        { type: 'label', text: "The Apostles' Creed" },
        {
          type: 'prayer',
          speaker: 'A',
          phrases: [
            'I believe in God, the Father Almighty, Creator of heaven and earth,',
            'and in Jesus Christ, His only Son, our Lord,',
            'who was conceived by the Holy Spirit, born of the Virgin Mary,',
            'suffered under Pontius Pilate, was crucified, died and was buried;',
            'He descended into hell; on the third day He rose again from the dead;',
            'He ascended into Heaven, and is seated at the right hand of God the Father almighty;',
            'from there He will come to judge the living and the dead.',
            'I believe in the Holy Spirit, the Holy Catholic Church, the communion of saints,',
            'the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.',
          ],
        },
        { type: 'label', text: "The Lord's Prayer (Our Father)" },
        {
          type: 'dialogue',
          lines: [
            {
              speaker: 'L',
              text: 'Our Father, who art in heaven, hallowed be Thy name; Thy kingdom come; Thy will be done on earth as it is in heaven.',
            },
            {
              speaker: 'R',
              text: 'Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation; but deliver us from evil. Amen.',
            },
          ],
        },
        { type: 'label', text: 'The Angelic Salutation (Hail Mary)' },
        {
          type: 'dialogue',
          lines: [
            {
              speaker: 'L',
              text: 'Hail, Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus.',
            },
            {
              speaker: 'R',
              text: 'Holy Mary, Mother of God, pray for us sinners now and at the hour of our death. Amen.',
            },
          ],
        },
        { type: 'label', text: 'The Doxology (Glory Be)' },
        {
          type: 'dialogue',
          lines: [
            { speaker: 'L', text: 'Glory be to the Father, and to the Son, and to the Holy Spirit.' },
            { speaker: 'R', text: 'As it was in the beginning is now and will be forever. Amen.' },
          ],
        },
        { type: 'label', text: 'The Fatima Prayer' },
        {
          type: 'prayer',
          speaker: 'A',
          phrases: [
            'O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those who are in most need of thy mercy.',
          ],
        },
        { type: 'note', text: 'At the end of each decade, the following prayers are added:' },
        {
          type: 'dialogue',
          lines: [
            { speaker: 'L', text: 'Jesus meek and humble of heart,' },
            { speaker: 'R', text: 'Make our hearts like unto thine.' },
            { speaker: 'L', text: 'Chaste heart of St. Joseph,' },
            { speaker: 'R', text: 'Pray for us.' },
            { speaker: 'L', text: 'Come Holy Spirit,' },
            {
              speaker: 'R',
              text: 'Come by the means of the powerful intercession of the Immaculate Heart of Mary thy well-beloved spouse.',
            },
          ],
        },
        { type: 'label', text: 'Hail, Holy Queen' },
        {
          type: 'prayer',
          speaker: 'A',
          phrases: [
            'Hail, holy Queen, mother of mercy, hail, our life, our sweetness, and our hope.',
            'To thee do we cry, poor, banished children of Eve.',
            'To thee do we send up our sighs, mourning and weeping in this valley of tears.',
            'Turn then, most gracious advocate, thine eyes of mercy toward us;',
            'and after this, our exile, show unto us the blessed fruit of thy womb, Jesus!',
            'O clement, O loving, O sweet Virgin Mary.',
          ],
        },
        {
          type: 'dialogue',
          lines: [
            { speaker: 'L', text: 'Pray for us, O Holy Mother of God.' },
            { speaker: 'R', text: 'That we may be made worthy of the promises of Christ.' },
          ],
        },
        { type: 'label', text: 'Final Prayer' },
        {
          type: 'dialogue',
          lines: [{ speaker: 'L', text: 'Let us pray.' }],
        },
        {
          type: 'prayer',
          speaker: 'A',
          phrases: [
            'O God, whose Only-Begotten Son, by His life, death, and resurrection,',
            'has purchased for us the rewards of eternal life;',
            'grant we beseech Thee that meditating upon these mysteries of the most holy Rosary of the Blessed Virgin Mary,',
            'we may imitate what they contain, and obtain what they promise, through the same Christ, our Lord. Amen.',
          ],
        },
        {
          type: 'dialogue',
          lines: [
            { speaker: 'L', text: 'Eternal rest grant unto them, O Lord,' },
            { speaker: 'R', text: 'And let perpetual light shine upon them.' },
            { speaker: 'L', text: 'May they rest in peace.' },
            { speaker: 'R', text: 'Amen.' },
            { speaker: 'L', text: 'Mary Help of Christians,' },
            { speaker: 'R', text: 'Pray for us.' },
          ],
        },
      ],
    },
  ],
};
