import { ContentBlock, VigilPart, VigilSection } from '../types/content';

interface OfficeSpec {
  number: number;
  name: string;
  epigraph: { text: string; citation: string };
  choir: string;
  disposition: string[];
  reading: { citation: string; phrases: string[] };
  motivation: string[];
  adoration: string[];
  practice: string;
}

const ordinal = (n: number) =>
  ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth'][n - 1];

// Longest/most specific prefixes first so e.g. "1 John" is matched before a
// bare "John" check could exist; each reading's citation is tested with
// startsWith against these in order.
const READING_INTRODUCTIONS: [prefix: string, introduction: string][] = [
  ['Matthew', 'A reading from the Holy Gospel according to Matthew.'],
  ['Mark', 'A reading from the Holy Gospel according to Mark.'],
  ['Luke', 'A reading from the Holy Gospel according to Luke.'],
  ['John', 'A reading from the Holy Gospel according to John.'],
  ['1 John', 'A reading from the first Letter of St. John.'],
  ['2 John', 'A reading from the second Letter of St. John.'],
  ['3 John', 'A reading from the third Letter of St. John.'],
  ['Acts', 'A reading from the Acts of the Apostles.'],
  ['Romans', 'A reading from the Letter of St. Paul to the Romans.'],
  ['1 Corinthians', 'A reading from the first Letter of St. Paul to the Corinthians.'],
  ['2 Corinthians', 'A reading from the second Letter of St. Paul to the Corinthians.'],
  ['Galatians', 'A reading from the Letter of St. Paul to the Galatians.'],
  ['Ephesians', 'A reading from the Letter of St. Paul to the Ephesians.'],
  ['Philippians', 'A reading from the Letter of St. Paul to the Philippians.'],
  ['Colossians', 'A reading from the Letter of St. Paul to the Colossians.'],
  ['1 Thessalonians', 'A reading from the first Letter of St. Paul to the Thessalonians.'],
  ['2 Thessalonians', 'A reading from the second Letter of St. Paul to the Thessalonians.'],
  ['1 Timothy', 'A reading from the first Letter of St. Paul to Timothy.'],
  ['2 Timothy', 'A reading from the second Letter of St. Paul to Timothy.'],
  ['Titus', 'A reading from the Letter of St. Paul to Titus.'],
  ['Philemon', 'A reading from the Letter of St. Paul to Philemon.'],
  ['Hebrews', 'A reading from the Letter to the Hebrews.'],
  ['James', 'A reading from the Letter of St. James.'],
  ['1 Peter', 'A reading from the first Letter of St. Peter.'],
  ['2 Peter', 'A reading from the second Letter of St. Peter.'],
  ['Jude', 'A reading from the Letter of St. Jude.'],
  ['Revelation', 'A reading from the Book of Revelation.'],
];

function readingIntroduction(citation: string): string {
  const found = READING_INTRODUCTIONS.find(([prefix]) => citation.startsWith(prefix));
  if (!found) throw new Error(`No reading introduction configured for citation: ${citation}`);
  return found[1];
}

function buildOfficeSection(spec: OfficeSpec): VigilSection {
  const blocks: ContentBlock[] = [
    { type: 'rubric', text: 'Please all stand', posture: 'stand' },
    { type: 'hymnCue' },
    { type: 'label', text: 'Spiritual Disposition' },
    ...spec.disposition.map((text): ContentBlock => ({ type: 'paragraph', text })),
    { type: 'rubric', text: 'Please all be seated', posture: 'sit' },
    { type: 'label', text: 'Reading' },
    {
      type: 'reading',
      citation: spec.reading.citation,
      introduction: readingIntroduction(spec.reading.citation),
      phrases: spec.reading.phrases,
      closing: { leader: 'The word of the Lord.', response: 'Thanks be to God.' },
    },
    { type: 'label', text: 'Motivation' },
    ...spec.motivation.map((text): ContentBlock => ({ type: 'paragraph', text })),
    { type: 'label', text: 'Witnessing / Reflection' },
    {
      type: 'note',
      text: 'Engage in deep listening by being fully present and attentive to the sharer. Set aside distractions and truly focus on what they are sharing.',
    },
    { type: 'rubric', text: 'Please all kneel', posture: 'kneel' },
    { type: 'label', text: 'Adoration before the Blessed Sacrament' },
    { type: 'prayer', speaker: 'A', phrases: spec.adoration },
    { type: 'rubric', text: 'Please all be seated', posture: 'sit' },
    { type: 'label', text: 'Practice' },
    { type: 'paragraph', text: spec.practice },
  ];

  return {
    id: `office-${spec.number}`,
    kicker: `${ordinal(spec.number)} Office`,
    title: spec.name,
    epigraph: spec.epigraph,
    blocks,
  };
}

const officeSpecs: OfficeSpec[] = [
  {
    number: 1,
    name: 'Worshipper',
    epigraph: { text: 'God is spirit, and those who worship must worship in spirit and truth.', citation: 'John 4:24' },
    choir: 'Dominations',
    disposition: [
      'It is our care as Worshippers to unite our prayers with the prayers which the Sacred Heart of Jesus offers for us in the Blessed Sacrament. We join our tribute of praise to honor the Eternal Father.',
      'Let us all place ourselves in God’s presence, striving to feel as a nobody before the Almighty. Let us also strive to acquire a profound feeling of lowliness before the Divine Majesty of God. At this moment, let us unite our worship with that of the Most Pure Heart of Mary and the Choir of Dominations.',
    ],
    reading: {
      citation: 'John 6:24-58',
      phrases: [
        'When the crowd saw that neither Jesus nor his disciples were there, they themselves got into boats and came to Capernaum looking for Jesus.',
        'And when they found him across the sea they said to him, “Rabbi, when did you get here?”',
        'Jesus answered them and said, “Amen, amen, I say to you, you are looking for me not because you saw signs but because you ate the loaves and were filled.',
        'Do not work for food that perishes but for the food that endures for eternal life, which the Son of Man will give you. For on him the Father, God, has set his seal.”',
        'So they said to him, “What can we do to accomplish the works of God?”',
        'Jesus answered and said to them, “This is the work of God, that you believe in the one he sent.”',
        'So they said to him, “What sign can you do, that we may see and believe in you? What can you do? Our ancestors ate manna in the desert, as it is written: He gave them bread from heaven to eat.”',
        'So Jesus said to them, “Amen, amen, I say to you, it was not Moses who gave the bread from heaven; my Father gives you the true bread from heaven. For the bread of God is that which comes down from heaven and gives life to the world.”',
        'So they said to him, “Sir, give us this bread always.”',
        'Jesus said to them, “I am the bread of life; whoever comes to me will never hunger, and whoever believes in me will never thirst.',
        'But I told you that although you have seen me, you do not believe.',
        'Everything that the Father gives me will come to me, and I will not reject anyone who comes to me, because I came down from heaven not to do my own will but the will of the one who sent me.',
        'And this is the will of the one who sent me, that I should not lose anything of what he gave me, but that I should raise it on the last day.',
        'For this is the will of my Father, that everyone who sees the Son and believes in him may have eternal life, and I shall raise him on the last day.”',
        'The Jews murmured about Jesus because he said, “I am the bread that came down from heaven,” and they said, “Is this not Jesus, the Son of Joseph? Do we not know his father and mother? Then how can he say, ‘I came down from heaven’?”',
        'Jesus answered and said to them, “Stop murmuring among yourselves. No one can come to me unless the Father who sent me draw him, and I will raise him on the last day.',
        'It is written in the prophets: They shall all be taught by God. Everyone who listens to my Father and learns from him comes to me.',
        'Not that anyone has seen the Father except the one who is from God; he has seen the Father. Amen, amen, I say to you, whoever believes has eternal life.',
        'I am the bread of life. Your ancestors ate the manna in the desert, but they died; this is the bread that comes down from heaven so that one may eat it and not die.',
        'I am the living bread that came down from heaven; whoever eats this bread will live forever; and the bread that I will give is my flesh for the life of the world.”',
        'The Jews quarreled among themselves, saying, “How can this man give us his flesh to eat?”',
        'Jesus said to them, “Amen, amen, I say to you, unless you eat the flesh of the Son of Man and drink his blood, you do not have life within you.',
        'Whoever eats my flesh and drinks my blood has eternal life, and I will raise him on the last day. For my flesh is true food, and my blood is true drink.',
        'Whoever eats my flesh and drinks my blood remains in me and I in him. Just as the living Father sent me and I have life because of the Father, so also the one who feeds on me will have life because of me.',
        'This is the bread that came down from heaven. Unlike your ancestors who ate and still died, whoever eats this bread will live forever.”',
      ],
    },
    motivation: [
      'As Worshippers, let us consider the Divinity truly present in the most Sacred Heart. In the cross, we must see faith; in the wound, hope; in the flames, charity.',
      'We must be able to hear also the sweet complaint of Jesus Who laments that it is harder to endure the ingratitude of men than the sorrow of His Passion. We must feel the same sorrow of heart as felt by Our Lord Jesus Who is bitterly grieved because the persons consecrated to His service are so cold to this devotion. "I long to be honored in the Most Holy Sacrament, but I find nobody to satisfy My most ardent desires."',
    ],
    adoration: [
      'O Jesus in the Blessed Sacrament, grant to me and to my fellow worshippers and children of Thy Divine Heart and to all priests, religious, and consecrated souls, the Spirit of fervor and holy zeal, that we may fulfill the obligations of our state of life.',
      'Give also to all persons consecrated to Thy service the grace of ever-increasing sanctity, that they may bring honor to our Mother, the Church, and pay homage to God in spirit and in truth.',
      'O Divine Heart, have pity on me.',
      'O exalted Choir of Heavenly Dominations, I lift up together with me to the August Heart of Jesus all the good done in the Catholic world and consecrate it to His greater glory.',
      'My Jesus, I join my whole soul in the acts of adoration Thou offer to the Eternal Father.',
      'I love to offer Thee the loving sentiments with which Thou hast inspired Mary Most Holy and Thy saints in order to adore and glorify Thee as Thou hast deserved throughout eternity. Amen.',
    ],
    practice:
      'It is our care as Worshippers to exhibit profound reverence and recollection during Holy Mass. We should make the Eucharist continue to live in our hearts as we adore the Divine Father. As Worshippers, let us cultivate an awareness of the Presence of God which is the means of attaining a high degree of perfection.',
  },
  {
    number: 2,
    name: 'Lover',
    epigraph: { text: 'Let us love, then, because He first loved us.', citation: '1 John 4:19' },
    choir: 'Seraphim',
    disposition: [
      'It is our task as Lovers to worship Christ in the Holy Eucharist. We must render ourselves worthy of the love of the Sacred Heart by preserving our innocence and purity.',
      'We must give ourselves fully to Jesus, if we wish Him to give Himself wholly to us. To make our love more acceptable, we must unite ourselves to the Most Pure Heart of Mary and the Choir of Seraphims.',
    ],
    reading: {
      citation: '1 John 4:7-16',
      phrases: [
        'Beloved, let us love one another, because love is of God; everyone who loves is begotten by God and knows God.',
        'Whoever is without love does not know God, for God is love.',
        'In this way the love of God was revealed to us: God sent his only Son into the world so that we might have life through him.',
        'In this is love: not that we have loved God, but that he loved us and sent his Son as expiation for our sins.',
        'Beloved, if God so loved us, we also must love one another.',
        'No one has ever seen God. Yet, if we love one another, God remains in us, and his love is brought to perfection in us.',
        'This is how we know that we remain in him and he in us, that he has given us of his Spirit.',
        'Moreover, we have seen and testify that the Father sent his Son as savior of the world.',
        'Whoever acknowledges that Jesus is the Son of God, God remains in him and he in God.',
        'We have come to know and to believe in the love God has for us.',
        'God is love, and whoever remains in love remains in God and God in him.',
      ],
    },
    motivation: [
      'As Lovers of the Sacred Heart, let us reflect on the flames with which the Sacred Heart of Jesus burns and how His Heart, radiant as the sun, is surrounded by the Choir of Seraphims who sing: "The love of the Sacred Heart triumphs, exalts and consoles." Let us ponder on the words of Jesus: "I have come to bring fire to the earth, and how I wish it were blazing already!" (Lk 12:49)',
      'The love which Our Lord Jesus Christ has for us is infinite and total. Love demands love but unconsciously, our love for Him is minimal.',
    ],
    adoration: [
      'O adorable Heart of Jesus in the Blessed Sacrament, I consecrate to Thee every moment of my life.',
      'My heart I leave behind with Thee in this Holy Tabernacle, so that with the Choir of Seraphim, I may love Thee now and forever.',
      'I love Thee, O most amiable Heart of Jesus, but my love is so cold.',
      'May Thou make my heart and those of all creatures burn with the fire of Thy love.',
      'O Heart of Jesus, I implore Thee to grant me the grace to love Thee more and more.',
      'Mary, Mother of my Lord and my own mother, too, make me love His Heart Divine.',
      'O most Sacred Heart of Jesus, divine furnace of the fire of that love which Thou art so earnest to enkindle on earth, and which Thou wish should burn in all hearts, grant that our hearts may be consumed in those holy flames.',
      'O Seraphim of the heavenly court, I beseech and conjure you to tell the Author of my life of my ardent desire to burn and languish with love of Him. Amen.',
    ],
    practice:
      'Our homage as Lovers consists in the fervor of pure affection and in the exactness in love and not of fear. Let us pray especially that the souls of the just may advance in virtue.',
  },
  {
    number: 3,
    name: 'Victim',
    epigraph: {
      text: 'It makes me happy to be suffering for you now, and in my own body to make up all the hardships that still have to be undergone by Christ for the sake of His body, the Church.',
      citation: 'Colossians 1:24',
    },
    choir: 'Virtues',
    disposition: [
      'Our Lord places before us His life of sacrifice in the Blessed Eucharist, wherein He Himself became a victim of propitiation for man’s salvation. Thus, as Victims, let us offer ourselves to the Sacred Heart. Let us be willing to offer sacrifices in union with Our Lord.',
      'O how hard it is to live without the love of God! Can anyone love the crucified Lord, without loving the cross and without being ready to die for it? To make this sacrifice more pleasing to the Sacred Heart, let us unite ourselves to the Most Pure and Immaculate Heart of Mary and with the Choir of Virtues.',
    ],
    reading: {
      citation: 'Colossians 1:21-29',
      phrases: [
        'Brothers and sisters: You once were alienated and hostile in mind because of evil deeds;',
        'God has now reconciled you in the fleshly Body of Christ through his death, to present you holy, without blemish, and irreproachable before him,',
        'provided that you persevere in the faith, firmly grounded, stable, and not shifting from the hope of the Gospel that you heard, which has been preached to every creature under heaven, of which I, Paul, am a minister.',
        'I rejoice in my sufferings for your sake, and in my flesh I am filling up what is lacking in the afflictions of Christ on behalf of his Body, which is the Church,',
        'of which I am a minister in accordance with God’s stewardship given to me to bring to completion for you the word of God, the mystery hidden from ages and from generations past.',
        'But now it has been manifested to his holy ones, to whom God chose to make known the riches of the glory of this mystery among the Gentiles; it is Christ in you, the hope for glory.',
        'It is him whom we proclaim, admonishing everyone and teaching everyone with all wisdom that we may present everyone perfect in Christ.',
        'For this I labor and struggle, in accord with the exercise of his power working within me.',
      ],
    },
    motivation: [
      'As Victims, let us reflect on the significance of the cross on which Jesus Christ was crucified. Let us ponder on what Christ seems to be saying: "I am looking for a victim soul who will console My wounded Heart."',
      'The very love itself of Jesus Christ is the greatest motivation for victimhood. The manifestation of the secrets of the Sacred Heart was the last effort of our Savior to invite us to respond to His great love.',
    ],
    adoration: [
      'I adore Thee, O Most Holy Trinity, in union with the Holy Angelic Choir of Virtues.',
      'O God of Justice, I unite myself to the Sacred Heart of Jesus Christ who died as a Victim of love for our salvation.',
      'I offer Thee Eternal Father, in union with the Divine Heart, my self, soul, body, actions, both of the present and of the future.',
      'Have pity on me and on all poor sinners.',
      'O Heart of Jesus, I implore the grace to love Thee more and more.',
      'Mary, Mother of my Lord and my own mother, too, make me love His Heart Divine.',
      'O Sacred Heart, Thou continue to offer Thyself upon our altars as a Victim for our salvation.',
      'What more do Thou desire? What more do Thou demand? What more do Thou ask for us to be united with Thee as co-victims of Thy sacrifice?',
      'I am ready, O Lord, take possession of me, that I may be a victim, consecrated and consumed in the flames of Thy love, for the greater glory of Thy Eternal Father, who has chosen me to this office.',
      'Graciously accept me, Thy humble servant, for the sake of Thy Only-Begotten Son who died for love of me. Amen.',
    ],
    practice:
      'Our duty as Victims consists in the control of the will, mortification of the heart, and the discipline of the senses. Without the spirit of mortification, we can do little. Let us continuously check our emotional outbursts when hurt or offended and resolve to offer these hurts for the conversion of all sinners or for some particular people whom we constantly pray.',
  },
  {
    number: 4,
    name: 'Disciple',
    epigraph: {
      text: 'Shoulder My yoke and learn from Me, for I am gentle and humble in heart, and you will find rest for your souls.',
      citation: 'Matthew 11:29',
    },
    choir: 'Cherubim',
    disposition: [
      'As Disciples, let us go to the Heart of Jesus Christ to learn the science of the saints. It is in this school that true love is taught. It is in this school that true wisdom, the mother of fair love, is imparted. It is the wisdom of Heaven that entirely surpasses all earthly wisdom.',
      'We must listen attentively to the voice of our Master, who said: "Learn from Me, for I am meek and humble of Heart." To obtain this wisdom, let us invoke the aid of the Most Pure Heart of Mary and the angelic choir of the Cherubims.',
    ],
    reading: {
      citation: 'Luke 9:22-26',
      phrases: [
        'Jesus said to his disciples: "The Son of Man must suffer greatly and be rejected by the elders, the chief priests, and the scribes, and be killed and on the third day be raised."',
        'Then he said to all, "If anyone wishes to come after me, he must deny himself and take up his cross daily and follow me.',
        'For whoever wishes to save his life will lose it, but whoever loses his life for my sake will save it.',
        'What profit is there for one to gain the whole world yet lose or forfeit himself?',
        'Whoever is ashamed of me and of my words, the Son of Man will be shamed of when he comes in his glory and in the glory of the Father and of the holy angels."',
      ],
    },
    motivation: [
      'As Disciples, let us reflect on the words of Christ: "Learn from Me, for I am meek and humble of heart." From our hearts, let us call out to Jesus and say: "Speak Lord, for Your servant is listening. Teach me to do Your Will."',
      'Jesus Christ came to earth to teach us abject humility and meekness. He is our model and master in humility and ardent charity.',
    ],
    adoration: [
      'O God, who enlightens every man who comes into this world and who directs every will, diffuse over Thy followers the celestial light of Thy uncreated wisdom and make them receive with docility the sublime truths of Thy Gospel.',
      'O, the number of lessons of perfection, coming to us from Thy Divine Heart!',
      'Grant that being well received and cherished by us, we may produce abundant fruits of Christian virtues.',
      'And you, O cherubim, take me into your company, that I may have some share in the splendor which comes from the Sacred Heart of Jesus.',
      'O Heart of Jesus, I implore Thee to grant me the grace to love Thee more and more.',
      'Mary, Mother of my Lord and my own mother too, please make me love His Heart Divine.',
      'O how quick in learning is the disciple taught by Thee, O Lord. Instruct me, O Lord, to be Thy disciple.',
      'Please open the door of my heart and make it docile to Thy divine words. Please help us convert all who resist the truth. Amen.',
    ],
    practice:
      'As Disciples, we must strive to be always recollected and silent, so that we can listen well to the voice and teachings of our Divine Master. Let us respond fully to the inspiration of grace coming from the Sacred Heart of Jesus.',
  },
  {
    number: 5,
    name: 'Faithful Servant',
    epigraph: { text: 'He was humbler yet, even to accepting death, death on a cross.', citation: 'Philippians 2:8' },
    choir: 'Archangels',
    disposition: [
      'According to St. Margaret Mary, our duty as Faithful Servants is to take to heart the obedience which Jesus unceasingly shows to His priests. We must, like Our Lord, practice obedience in all things.',
      'We must learn to give up our self-will, our passions, and inclinations, even our likes and dislikes. To obtain this spirit of obedience, the Faithful Servant should invoke the aid of the Most Pure Heart of Mary and the Choir of Archangels.',
    ],
    reading: {
      citation: 'Philippians 2:1-13',
      phrases: [
        'Brothers and sisters: If there is any encouragement in Christ, any solace in love, any participation in the Spirit, any compassion and mercy,',
        'complete my joy by being of the same mind, with the same love, united in heart, thinking of one thing.',
        'Do nothing out of selfishness or out of vainglory; rather, humbly regard others as more important than yourselves, but also for those of others.',
        'Have among yourselves the same attitude that is also yours in Christ Jesus, Who, though he was in the form of God, did not regard equality with God something to be grasped.',
        'Rather, he emptied himself, taking the form of a slave, coming in human likeness; and found human in appearance, he humbled himself, becoming obedient unto death, even death on a cross.',
        'Because of this, God greatly exalted him and bestowed on him the name that is above every name, that at the name of Jesus every knee should bend, of those in heaven and on earth and under the earth, and every tongue confess that Jesus Christ is Lord, to the glory of God the Father.',
        'So then, my beloved, obedient as you have always been, not only when I am present but all the more now when I am absent, work out your salvation with fear and trembling.',
        'For God is the one who, for his good purpose, works in you both to desire and to work.',
      ],
    },
    motivation: [
      'As Faithful Servants, let us reflect on how Jesus humbled Himself and became a servant, saying: "I came not to be ministered unto, but to minister. If I, then, the Lord and Master, have washed your feet, you must wash each other’s feet. I have given you an example so that you may copy what I have done to you."',
      'Our first and principal motive must be to render service to Our Lord Who has given us an example of how to serve willingly, joyfully, and lovingly.',
    ],
    adoration: [
      'Accept, O Jesus Christ, my heart clothed with Thy wedding garment which Thy most unworthy servant offers Thee now.',
      'May Thou be visited more frequently and with greater reverence in this adorable Sacrament.',
      'In return, may Thou bring forth in all hearts the fruits of grace and salvation, of which Thou art the inexhaustible source.',
      'O Almighty love of my God! Thou hast broken the chains which held me fast captive and kept me far from Thee.',
      'Please help me draw more souls to Thee who, like me, have gone astray and make them taste at the foot of Thy altar the same delights of Thy service which I now experience, a service which makes all its subjects happy.',
      'O mystery of the subjection of Jesus in the Sacrament of Thy love, I give myself up to honor Thee, and to strive, or at least, desire to draw all hearts to Thee, O Jesus. Amen.',
    ],
    practice:
      'It is our duty as Faithful Servants to obey promptly the divine aspirations. Let us imitate the obedience of the Sacred Heart, remembering that the most brilliant deeds done without obedience are not acceptable to God. Let us ever have the readiness and zeal to serve the Lord.',
  },
  {
    number: 6,
    name: 'Suppliant',
    epigraph: {
      text: 'It follows, then, that His power to save those who come to God through Him is absolute, since He lives for ever to intercede for them.',
      citation: 'Hebrews 7:25',
    },
    choir: 'Angels',
    disposition: [
      'St. Margaret Mary would often say: "The adorable Sacrament is the throne of Grace and Mercy." One of the aims why Christ remains present with us in this mystery, is to move sinners to come and implore His mercy.',
      'Acknowledging that we owe life to God’s mercy, let us unite our petitions with that of the Sacred Heart, so that the many souls who might then be dead to God, may begin to live the life of grace once more. To make this supplication more efficacious, let us unite our prayers with that of the Most Pure Heart of Mary and the Choir of Angels.',
    ],
    reading: {
      citation: 'Hebrews 7:1-3, 15-17, 23-28',
      phrases: [
        'Melchizedek, king of Salem and priest of God Most High, met Abraham as he returned from his defeat of the kings and blessed him.',
        'And Abraham apportioned to him a tenth of everything. His name first means righteous king, and he was also "king of Salem," that is, king of peace.',
        'Without father, mother, or ancestry, without beginning of days or end of life, thus made to resemble the Son of God, he remains a priest forever.',
        'It is even more obvious if another priest is raised up after the likeness of Melchizedek, who has become so, not by a law expressed in a commandment concerning physical descent but by the power of a life that cannot be destroyed.',
        'For it is testified: You are a priest forever according to the order of Melchizedek.',
        'Brothers and sisters: The levitical priests were many because they were prevented by death from remaining in office, but Jesus, because he remains forever, has a priesthood that does not pass away.',
        'Therefore, he is always able to save those who approach God through him, since he lives forever to make intercession for them.',
        'It was fitting that we should have such a high priest: holy, innocent, undefiled, separated from sinners, higher than the heavens.',
        'He has no need, as did the high priests, to offer sacrifice day after day, first for his own sins and then for those of the people; he did that once for all when he offered himself.',
        'For the law appoints men subject to weakness to be high priests, but the word of the oath, which was taken after the law, appoints a son, who has been made perfect forever.',
      ],
    },
    motivation: [
      'As Suppliants, let us reflect on the crown of thorns with which the Heart of Jesus is crowned, through this, we will come to know that it was caused by God’s great love for man. We should be motivated by the promise of the Sacred Heart: "I promise to bestow abundant blessings on all the undertakings of those who honor My Heart."',
    ],
    adoration: [
      'O admirable Choir of Angels and you in particular, my dear Guardian Angel, accompany me on this visit to my Lord in the Eucharist and together with the Sacred Heart of Jesus, help me offer to the Eternal Father all the actions and sufferings of this day for His greater glory and for the release of the holy souls in Purgatory.',
      'O, Heart of Jesus, I implore Thee to grant me the grace to love Thee more and more.',
      'Mary, Mother of my Lord and my own Mother, too, make me love His Heart Divine.',
      'Hearken, O Divine Heart, to the voices of those who are in need, and be their comfort in tribulation;',
      'for it has always been Thy delight, O Most Merciful Heart, to grant pardon and to do good to all. Amen.',
    ],
    practice:
      'Our principal practice as Suppliants consists in performing acts of charity toward our neighbors. We must endeavor to imitate the spirit of prayer of the Sacred Heart, bearing in mind that without prayer, it is impossible to remain in the state of grace, let alone advance in virtue.',
  },
  {
    number: 7,
    name: 'Promoter',
    epigraph: {
      text: 'Go, therefore, make disciples of all nations; baptize them in the name of the Father and of the Son and of the Holy Spirit.',
      citation: 'Matthew 28:19',
    },
    choir: 'Thrones',
    disposition: [
      'Our duty as Promoters of the Sacred Heart is to make Him known to all mankind. We ask the Father and the Holy Spirit to move our hearts to love the Divine Heart of Jesus.',
      'We ask the Blessed Virgin to use Her all-powerful intercession, that all who fly to it for aid, may find their consolation and strength therein. The fulfillment of this task often requires the aid of the Most Pure Heart of Mary and the Choir of Thrones.',
    ],
    reading: {
      citation: 'Matthew 28:16-20',
      phrases: [
        'The eleven disciples went to Galilee, to the mountain to which Jesus had ordered them.',
        'When they saw him, they worshipped, but they doubted.',
        'Then Jesus approached and said to them, "All power in heaven and on earth has been given to me.',
        'Go, therefore, and make disciples of all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Spirit, teaching them to observe all that I have commanded you.',
        'And behold, I am with you always, until the end of the age."',
      ],
    },
    motivation: [
      'As Promoters, we ought to be motivated by the thought that it is the most ardent desire of the Sacred Heart of Jesus that this devotion be spread as widely as possible.',
    ],
    adoration: [
      'O Heart of Jesus, I implore Thee to grant me the grace to love Thee more and more.',
      'Mary, Mother of my Lord and my own Mother, too, make me love His Heart Divine.',
      'I adore Thee, O Jesus, in the Blessed Sacrament; I adore Thy Heart inflamed with love for me.',
      'Thou art the sweet recess of my repose, the dear Object of my love.',
      'My Jesus, I desire that at this moment, Thou would come into my soul and consume it with Thy love.',
      'To you I unite myself, O august Choir of Thrones, in honoring the Divine Heart of Jesus. Amen.',
    ],
    practice:
      'As Promoters, we must have the zeal to spread the devotion to the Sacred Heart of Jesus by our own example, molding our own hearts in imitation of the humble Heart of Jesus by the sweetness and gentleness of our manner. Giving an example is always so much more moving than preaching. May everything, we do, think of, and say, even our silence, speak of our love for the Sacred Heart of our Lord!',
  },
  {
    number: 8,
    name: 'Zealous Friend',
    epigraph: { text: 'I have come to bring fire to the earth, and how I wish it were blazing already!', citation: 'Luke 12:49' },
    choir: 'Principalities',
    disposition: [
      'As Zealous Friends of the Sacred Heart, let us consider ourselves charged with the furtherance of the interest of the Sacred Heart of Jesus among our fellowmen. We regret that we cannot make known to the whole world the rich treasures of grace stored up in His Heart; treasures which Our Lord is only too ready to pour out upon His faithful friends.',
      'Let us therefore make use of all the means at our command to instill this most sweet devotion into the minds of others, since it is a short way to perfection and a sure means of salvation. In fulfilling our duty, we ought to act in union with and implore the aid of the Most Pure Heart of Mary and the Choir of Principalities.',
    ],
    reading: {
      citation: 'Romans 8:31b-39',
      phrases: [
        'Brothers and sisters: If God is for us, who can be against us?',
        'He did not spare his own Son but handed him over for us all, how will he not also give us everything else along with him?',
        'Who will bring a charge against God’s chosen ones? It is God who acquits us. Who will condemn?',
        'It is Christ Jesus who died, rather, was raised, who also is at the right hand of God, who indeed intercedes for us.',
        'What will separate us from the love of Christ? Will anguish, or distress, or persecution, or famine, or nakedness, or peril, or the sword?',
        'As it is written: For your sake we are being slain all the day; we are looked upon as sheep to be slaughtered.',
        'No, in all these things we conquer overwhelmingly through him who loved us.',
        'For I am convinced that neither death, nor life, nor angels, nor principalities, nor present things, nor future things, nor powers, nor height, nor depth, nor any other creature will be able to separate us from the love of God in Christ Jesus our Lord.',
      ],
    },
    motivation: [
      'As Zealous Friends of the Sacred Heart, let us consider the sweet look Our Lord casts on the just saying: "Behold My Heart which has loved men so much and is so little loved in return by them," and resolve to use every means of making Him loved.',
      'Our motivating spirit must be the same zeal which consumed the Sacred Heart of Jesus, manifested through our deeds, our words, and our sentiments.',
    ],
    adoration: [
      'I adore Thee, O Jesus in the Blessed Sacrament. I adore Thy Heart inflamed with love for me.',
      'O Jesus, come at this moment into my heart and consume it with Thy love.',
      'O Heart of Jesus, I implore Thee to grant me the grace to love Thee more and more.',
      'Mary, Mother of my Lord and my own Mother, too, make me love His Heart Divine.',
      'O Heart of Jesus who loves us so much, how lovable Thou art! When shall I see Thee loved by all?',
      'If only I could publish the wonders of Thy love — and make all hearts correspond faithfully with it! Amen.',
    ],
    practice:
      'As Zealous Friends of the Sacred Heart, let us strive with holy zeal and discretion to put a stop to every outrage against Our Lord for whom we must win love by word and example. Let us encourage and exhort all those whom we can, particularly our friends and acquaintances, to give some token of love to the Sacred Heart, above all, by frequent Confession, Holy Communion and Holy Hours of Adoration.',
  },
  {
    number: 9,
    name: 'Reparator',
    epigraph: {
      text: 'Insult has broken my heart past cure. I hoped for sympathy, but in vain, for consolers not one to be found.',
      citation: 'Psalm 69:20',
    },
    choir: 'Powers',
    disposition: [
      'Our chief duty as Reparators, according to St. Margaret Mary, consists in humbly craving for God’s pardon for all the insults which the Sacred Heart of Jesus is continually being outraged in the Blessed Sacrament. Our faithful performance of this duty will ensure the well-grounded hope that pardon will be extended to our own sins.',
      'Let us bear in mind what Our Lord once said to His faithful servant: "Will no one take pity on My sorrow and come to aid Me, outraged, as I am now by sinners?" For our acts of reparation to be acceptable to the Divine Heart, let us unite ourselves with the Most Pure Heart of Mary and the Choir of Powers.',
    ],
    reading: {
      citation: 'Matthew 23:33-39',
      phrases: [
        '"You snakes, you brood of vipers! How can you escape being sentenced to hell?',
        'Therefore I send you prophets, sages, and scribes, some of whom you will kill and crucify, and some you will flog in your synagogues and pursue from town to town,',
        'so that upon you may come all the righteous blood shed on earth, from the blood of righteous Abel to the blood of Zechariah son of Barachiah, whom you murdered between the sanctuary and the altar.',
        'Truly I tell you, all this will come upon this generation.',
        '"Jerusalem, Jerusalem, the city that kills the prophets and stones those who are sent to it!',
        'How often have I desired to gather your children together as a hen gathers her brood under her wings, and you were not willing!',
        'See, your house is left to you, desolate.',
        'For I tell you, you will not see me again until you say, ‘Blessed is the one who comes in the name of the Lord.’"',
      ],
    },
    motivation: [
      'As Reparators, let us reflect on Jesus showing His Heart and giving us a look of affection. With His right hand, He points to His own Heart and with His left asks for ours, saying: "My child, entrust to Me your Heart."',
      'Let us be motivated by the same object Our Lord had in instituting this dear devotion to enkindle in all hearts greater love for God.',
    ],
    adoration: [
      'O most clement Heart of Jesus, Divine Propitiator, through Whom the Eternal Father has promised that He would hear our prayers, saying to Thy beloved spouse Margaret Mary: "Pray to Me through My Sacred Heart. Through this Heart will I hearken to your prayers and you will obtain whatever you desire."',
      'Were I able, O Divine Redeemer, to blot out with my tears and wash away with my blood all the ingratitude shown by me in return for the excess of Thy love!',
      'To the weak sorrow I feel for my sins, I add the poignant grief Thou didst feel during the prayer and agony of sweat in the Garden of Gethsemane at the sight of my sins and those of all men, and present them to Thy Eternal Father together with Thy own Sacred Heart.',
      'Supply and make up with Thy love for my ingratitude, indifference, and forgetfulness of such an incomparable benefit,',
      'and grant me henceforth reverence in Thy presence that thus I may repair the past, and by my example draw many souls to Thy love to which I devote and consecrate myself from this moment, choosing Thy Most Sacred Heart as my lasting abode.',
      'O my Jesus, I will make use of every means to do reparation for so many offenses which mankind and I have committed.',
      'I will consecrate to Thee all the days of my life for love of Thy most Sacred Heart and give Thee the last breath of my life. Amen.',
    ],
    practice:
      'As Reparators, we must observe all the duties of our state of life, overcoming for this purpose every human obstacle. In sincere humility of spirit and in humble acknowledgment of our sins and with great confidence in the merits of Jesus Christ, we make this reparation to His Sacred Heart for all the injuries He receives.',
  },
];

export const nineOfficesPart: VigilPart = {
  id: 'nine-offices',
  title: 'Nine Offices of the Sacred Heart',
  shortTitle: 'Nine Offices',
  sections: [
    {
      id: 'nine-offices-intro',
      title: 'Nine Offices of the Sacred Heart',
      blocks: [
        {
          type: 'paragraph',
          text: 'The Nine Offices of the Sacred Heart are a familiar exercise of devotion to the Heart of Jesus. We can trace its origin to St. Margaret Mary herself. Two of the offices (Suppliant and Reparator) were recommended to the saint by our Lord.',
        },
        {
          type: 'paragraph',
          text: 'She then added other offices to bring the total to nine, in union with the nine choirs of angels, for in a vision she had seen Christ surrounded by the angelic choirs, who invited her to join with them in adoring the Sacred Heart.',
        },
        {
          type: 'paragraph',
          text: 'According to the saint, the Sacred Heart desires "a special union and devotion to the holy angels, who are chosen to love, honor, and praise the Sacred Heart in the divine sacrament of love, so that they who are in His divine presence would love Him for us and for all those who do not love Him, and also make up for the irreverences we commit in His holy presence."',
        },
        {
          type: 'paragraph',
          text: 'The word "offices" is used here in the original meaning of duty or service given to another.',
        },
        {
          type: 'paragraph',
          text: 'There are various methods in use among the faithful. The method suggested by St. Margaret Mary is to take one office for a month, for nine successive months, whether assigned or chosen individually. Others prefer to take a different office each day or each week.',
        },
        {
          type: 'paragraph',
          text: 'The practice of this devotion can also vary. Although it is good to say the suggested prayer each day in union with a choir of the angels, the emphasis should rather be in directing all the actions of the day according to the spirit of one’s office.',
        },
        {
          type: 'paragraph',
          text: 'Some may want to dwell on its meaning in their morning meditation or incorporate its spirit into the particular examen for a month. Where the offices are shared by others, this community of devotion to the Sacred Heart helps to foster an awareness of cooperative prayer in the mystical body of Christ.',
        },
        {
          type: 'paragraph',
          text: 'The practice of the Nine Offices is an alliance of angels and men with Jesus and Mary. In this form of worship, nine people or nine groups of devotees make an alliance with the nine choirs of angels, each of the persons or groups taking upon themselves any of these particular offices.',
        },
      ],
    },
    ...officeSpecs.map(buildOfficeSection),
  ],
};

export const officeChoirs = officeSpecs.map((o) => ({ number: o.number, name: o.name, choir: o.choir }));
