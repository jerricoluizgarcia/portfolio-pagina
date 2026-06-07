export const projects = [
  {
    id: 'who-knows-best',
    title: 'Who Knows Best?',
    subtitle: 'Dark Tech Semester Project',
    tags: ['React', 'Tailwind', 'Dark Tech', 'UX Research'],
    year: '2026',
    featured: true,
    shortDesc: 'Een gesimuleerd besturingssysteem dat verborgen machtsstructuren rondom apparaten voelbaar maakt.',
    problem: 'Moderne apparaten worden steeds vaker ontworpen op een manier die reparatie bemoeilijkt. Fabrikanten, repair cafés en gebruikers hebben elk andere belangen – maar wie bepaalt wat er met een apparaat mag gebeuren? Die spanning is onzichtbaar, totdat je hem voelt.',
    role: 'Scenario-designer & Researcher',
    team: 'Daan de Jong, Niels Oerlemans, Toby Oldenburg, Jerrico Garcia, Koen Bergman',
    client: 'Prof. Gabriele Ferri – TU Eindhoven',
    approach: 'Ik heb Research Through Design toegepast: niet eerst een plan, maar bouwen en testen. Ik heb bronnen onderzocht over laadtijden, dark patterns en freemium-pricing, en die inzichten direct vertaald naar scenario-ontwerp.',

    pitch: {
      label: 'Sprint 1 – Pitch',
      title: 'RepairBalanceBoard',
      desc: 'In Sprint 1 pitchte ik mijn eigen idee: een weegschaal-app waarbij keuzes over reparatie invloed hebben op vier "pillars" (fabrikant, repair café, gebruiker, systeem). Dit concept lag aan de basis van het uiteindelijke project.',
      file: 'RepairBalanceBoard_Pitch.pptx',
    },

    boardgame: {
      label: 'Sprint 2 – Bordspel Prototype',
      video: 'Bordspel(1).mp4',
      desc: 'Het eerste digitale prototype: een bordspel waarbij spelers een rol kiezen (Consument, Producent, Repair Café of Apparaat) en scenario-keuzes maken. Getest op de Kennisparade. Feedback: te abstract, te tam voor Dark Tech.',
    },

    scenarios: [
      {
        number: '04',
        title: 'PowerPoint: Nieuw vs. Oud',
        desc: 'Keuze A: nieuwe versie, 1 minuut wachttijd, volledige functies maar duurder en datahongerig. Keuze B: oude versie, direct open maar constante pop-ups en compatibiliteitsproblemen. Geen van beide is goed.',
        videoA: 'A-final.mp4',
        videoB: 'Scenario-B.mp4',
        labelA: 'Keuze A – Nieuwe versie (laadtijd)',
        labelB: 'Keuze B – Oude versie (pop-ups)',
      },
    ],

    process: [
      { sprint: 'Sprint 1', title: 'Pitch – RepairBalanceBoard', desc: 'Eigen idee gepitcht: weegschaal-app met 4 pillars. Scenario\'s bedacht over printers, iPhones en verouderde laptops.', tag: 'Concept', tagColor: '#a78bfa' },
      { sprint: 'Sprint 2', title: 'Bordspel – Kennisparade', desc: 'Digitaal bordspel getest met gebruikers. Spelers kozen een rol en maakten keuzes over reparatie. Feedback: te abstract, te tam.', tag: 'Te tam', tagColor: '#f59e0b' },
      { sprint: 'Sprint 3', title: 'Voelbaar Ontwerp', desc: 'Radicale shift naar "voelbaar design" op basis van bronnenonderzoek. 1 minuut wachttijd, pop-ups die niet weggaan. Privacy en duurzaamheid meegewogen.', tag: 'Doorbraak', tagColor: '#c8f060' },
      { sprint: 'Sprint 4', title: 'Guerilla Testing', desc: '6 mensen getest. Drie acceptatiecriteria gehaald. AI-assistenten eigen kleur gegeven op basis van feedback.', tag: '100% irritatie', tagColor: '#c8f060' },
    ],

    testing: [
      { person: 'Dolinde', role: 'Docent', quote: 'Ik heb geen goede optie gekozen – maar dat voelde ook onmogelijk. Dat is toch wel slim bedacht.' },
      { person: 'Christopher Garcia', age: 53, quote: 'Die pop-ups zijn te veel… wacht, is dat de bedoeling? Dit is echt irritant.' },
      { person: 'Judith Garcia', age: 51, quote: 'Een minuut wachten voelt belachelijk lang. Maar de andere optie klinkt ook niet goed. Oh – dat is het punt.' },
      { person: 'Aidan van Breemen', age: 22, quote: 'Er is echt geen goede keuze. Dat is best confronterend – ik doe dit in het echt ook altijd gedachteloos.' },
      { person: 'Duuk van den Bosch', age: 20, quote: 'Dit voelt echt zoals mijn laptop zich soms gedraagt. Is dit expres zo gemaakt?' },
      { person: 'Jesse Wilfert', age: 19, quote: 'Ik snap nu pas hoe software controle kan overnemen zonder dat je het doorhebt.' },
    ],

    insight: 'Gebruikers begrijpen de spanning rondom reparatie en controle pas echt wanneer ze die spanning zelf voelen. Een statische uitleg werkt niet – een ervaring wel.',

    advice: {
      summary: 'Het adviesrapport onderbouwt waarom er geen neutrale keuze bestaat tussen fabrikant, Repair Café en gebruiker. Elk scenario is gebaseerd op een concreet conflict tussen deze pilaren. Het rapport bevat bronnenonderzoek naar dark patterns, laadtijden en freemium-pricing, een marktanalyse (700+ Repair Cafés in Nederland, 2,5 miljoen jongeren als doelgroep), en een businessplan met subsidiemodel. Het kernadvies: maak verborgen machtsstructuren rondom apparaten voelbaar en bespreekbaar – niet door uit te leggen, maar door te laten ervaren.',
      quote: 'Maak de verborgen machtsstructuren rondom apparaten zichtbaar en bespreekbaar, zodat gebruikers, reparateurs en beleidsmakers bewuster kunnen omgaan met technologische afhankelijkheid.',
    },

    impact: [
      {
        label: 'Right to Repair',
        desc: 'EU-wetgeving verplicht fabrikanten reparatie mogelijk te maken, maar software kan dit ondermijnen.',
        link: 'https://www.europarl.europa.eu/topics/en/article/20230505STO93804/right-to-repair-making-it-easier-to-fix-products',
        linkLabel: 'EU Right to Repair →',
      },
      {
        label: 'Planned Obsolescence',
        desc: 'Software dwingt gebruikers naar upgrades, ook als de oude versie nog werkt.',
        link: 'https://www.ifixit.com/Right-to-Repair/Manifesto',
        linkLabel: 'iFixit Manifesto →',
      },
      {
        label: 'Digital Autonomy',
        desc: 'Wie bepaalt het risico-niveau van je eigen apparaat – jij of de fabrikant?',
        link: 'https://edri.org/our-work/digital-autonomy/',
        linkLabel: 'EDRi over Digital Autonomy →',
      },
    ],

    docs: [
      { label: 'Adviesrapport', file: 'Advies-rapport.docx', meta: 'Who Knows Best? – Advies, analyse en onderbouwing · Juni 2026' },
      { label: 'Onderzoeksrapport', file: 'Onderzoeksrapport-WKB.docx', meta: 'Dark patterns, laadtijden, freemium-pricing' },
      { label: 'Sprint 1 Pitch', file: 'RepairBalanceBoard_Pitch.pptx', meta: 'Concept presentatie – RepairBalanceBoard' },
    ],
  },
  {
    id: 'dokkie',
    title: 'Dokkie',
    subtitle: 'Expense Splitter',
    tags: ['HTML', 'CSS', 'JavaScript'],
    year: '2022',
    featured: false,
    shortDesc: 'Een basisapplicatie vergelijkbaar met WieBetaaltWat voor het bijhouden van gedeelde kosten.',
    problem: 'Groepskosten bijhouden is gedoe. Dokkie maakt het simpel.',
    role: 'Full-stack developer',
    approach: 'Verantwoordelijk voor zowel frontend als backend. Gebouwd met vanilla HTML, CSS en JavaScript.',
  },
  {
    id: 'lucastars',
    title: 'LucasStars',
    subtitle: 'Text-Based Game',
    tags: ['TypeScript', 'OOP', 'Docker'],
    year: '2024',
    featured: false,
    shortDesc: 'Een text-based game in OOP TypeScript met een originele verhaallijn. Live gezet via Docker.',
    problem: 'Een game bouwen die laat zien hoe OOP-principes werken in een echte applicatie.',
    role: 'Full-stack developer',
    approach: 'Bijgedragen aan zowel frontend als backend. Deployment via Docker (containerized).',
  },
  {
    id: 'stemstatistieken',
    title: 'Stemstatistieken',
    subtitle: 'Verkiezingswebsite',
    tags: ['Java', 'ORM', 'Data'],
    year: '2024',
    featured: false,
    url: 'https://stemstatistieken.me/',
    video: 'Stemstatestieken-demo.mp4',
    shortDesc: 'Een verkiezingswebsite in Java met data van de afgelopen drie verkiezingen en algoritmes voor filtering.',
    problem: 'Verkiezingsdata is voor veel mensen moeilijk te begrijpen. Stemstatistieken maakt de uitslag van de afgelopen drie verkiezingen inzichtelijk en doorzoekbaar voor een breed publiek.',
    role: 'Full-stack developer',
    approach: 'Gebouwd in Java met ORM voor dataverwerking. Algoritmes voor filteren en vergelijken van verkiezingsdata per partij en regio. Verantwoordelijk voor zowel frontend als backend.',
  },
]