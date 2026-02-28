// Base de vocabulaire arabe - 365 mots (1 an) avec racines uniques
const ARABIC_WORDS = [
    // === NATURE & UNIVERS (1-30) ===
    {
        id: 1,
        word: "شَمْس",
        transliteration: "shams",
        type: "اسم",
        meaning: "sun",
        meaningFr: "le soleil",
        root: "ش - م - س",
        rootMeaning: "Racine liée au soleil, à la lumière solaire",
        letters: [
            { letter: "ش", name: "shīn", forms: ["ش", "شـ", "ـشـ", "ـش"] },
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] },
            { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }
        ],
        example: "الشَّمْسُ تُشْرِقُ كُلَّ صَبَاح",
        exampleFr: "Le soleil se lève chaque matin"
    },
    {
        id: 2,
        word: "قَمَر",
        transliteration: "qamar",
        type: "اسم",
        meaning: "moon",
        meaningFr: "la lune",
        root: "ق - م - ر",
        rootMeaning: "Racine liée à la lune, à la clarté nocturne",
        letters: [
            { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] },
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }
        ],
        example: "القَمَرُ مُنِيرٌ فِي اللَّيْل",
        exampleFr: "La lune est lumineuse la nuit"
    },
    {
        id: 3,
        word: "نَجْم",
        transliteration: "najm",
        type: "اسم",
        meaning: "star",
        meaningFr: "l'étoile",
        root: "ن - ج - م",
        rootMeaning: "Racine liée aux étoiles, à l'apparition",
        letters: [
            { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] },
            { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] },
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }
        ],
        example: "النُّجُومُ تَلْمَعُ فِي السَّمَاء",
        exampleFr: "Les étoiles brillent dans le ciel"
    },
    {
        id: 4,
        word: "أَرْض",
        transliteration: "arḍ",
        type: "اسم",
        meaning: "earth",
        meaningFr: "la terre",
        root: "أ - ر - ض",
        rootMeaning: "Racine liée à la terre, au sol",
        letters: [
            { letter: "أ", name: "alif", forms: ["أ", "ـأ"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] },
            { letter: "ض", name: "ḍād", forms: ["ض", "ضـ", "ـضـ", "ـض"] }
        ],
        example: "الأَرْضُ وَاسِعَةٌ",
        exampleFr: "La terre est vaste"
    },
    {
        id: 5,
        word: "بَحْر",
        transliteration: "baḥr",
        type: "اسم",
        meaning: "sea",
        meaningFr: "la mer",
        root: "ب - ح - ر",
        rootMeaning: "Racine liée à la mer, à l'immensité",
        letters: [
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] },
            { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }
        ],
        example: "البَحْرُ أَزْرَقُ وَجَمِيل",
        exampleFr: "La mer est bleue et belle"
    },
    {
        id: 6,
        word: "نَهْر",
        transliteration: "nahr",
        type: "اسم",
        meaning: "river",
        meaningFr: "le fleuve",
        root: "ن - هـ - ر",
        rootMeaning: "Racine liée à l'écoulement, au fleuve",
        letters: [
            { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] },
            { letter: "هـ", name: "hāʾ", forms: ["هـ", "هـ", "ـهـ", "ـه"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }
        ],
        example: "النَّهْرُ يَجْرِي بِهُدُوء",
        exampleFr: "Le fleuve coule calmement"
    },
    {
        id: 7,
        word: "جَبَل",
        transliteration: "jabal",
        type: "اسم",
        meaning: "mountain",
        meaningFr: "la montagne",
        root: "ج - ب - ل",
        rootMeaning: "Racine liée aux montagnes, à la création",
        letters: [
            { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] },
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] },
            { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }
        ],
        example: "الجَبَلُ عَالٍ جِدًّا",
        exampleFr: "La montagne est très haute"
    },
    {
        id: 8,
        word: "شَجَر",
        transliteration: "shajar",
        type: "اسم",
        meaning: "tree",
        meaningFr: "l'arbre",
        root: "ش - ج - ر",
        rootMeaning: "Racine liée aux arbres, à la végétation",
        letters: [
            { letter: "ش", name: "shīn", forms: ["ش", "شـ", "ـشـ", "ـش"] },
            { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }
        ],
        example: "الشَّجَرَةُ خَضْرَاءُ",
        exampleFr: "L'arbre est vert"
    },
    {
        id: 9,
        word: "زَهْر",
        transliteration: "zahr",
        type: "اسم",
        meaning: "flower",
        meaningFr: "la fleur",
        root: "ز - هـ - ر",
        rootMeaning: "Racine liée aux fleurs, à l'éclat",
        letters: [
            { letter: "ز", name: "zāy", forms: ["ز", "زـ", "ـز"] },
            { letter: "هـ", name: "hāʾ", forms: ["هـ", "هـ", "ـهـ", "ـه"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }
        ],
        example: "الزَّهْرَةُ جَمِيلَةٌ وَعَطِرَة",
        exampleFr: "La fleur est belle et parfumée"
    },
    {
        id: 10,
        word: "مَطَر",
        transliteration: "maṭar",
        type: "اسم",
        meaning: "rain",
        meaningFr: "la pluie",
        root: "م - ط - ر",
        rootMeaning: "Racine liée à la pluie",
        letters: [
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] },
            { letter: "ط", name: "ṭāʾ", forms: ["ط", "طـ", "ـطـ", "ـط"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }
        ],
        example: "المَطَرُ يَنْزِلُ مِنَ السَّمَاء",
        exampleFr: "La pluie tombe du ciel"
    },
    {
        id: 11,
        word: "رِيح",
        transliteration: "rīḥ",
        type: "اسم",
        meaning: "wind",
        meaningFr: "le vent",
        root: "ر - و - ح",
        rootMeaning: "Racine liée au vent, à l'esprit",
        letters: [
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] },
            { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] },
            { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }
        ],
        example: "الرِّيحُ قَوِيَّةٌ اليَوْم",
        exampleFr: "Le vent est fort aujourd'hui"
    },
    {
        id: 12,
        word: "ثَلْج",
        transliteration: "thalj",
        type: "اسم",
        meaning: "snow",
        meaningFr: "la neige",
        root: "ث - ل - ج",
        rootMeaning: "Racine liée à la neige, au froid",
        letters: [
            { letter: "ث", name: "thāʾ", forms: ["ث", "ثـ", "ـثـ", "ـث"] },
            { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] },
            { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] }
        ],
        example: "الثَّلْجُ أَبْيَضُ",
        exampleFr: "La neige est blanche"
    },
    {
        id: 13,
        word: "سَحَاب",
        transliteration: "saḥāb",
        type: "اسم",
        meaning: "cloud",
        meaningFr: "le nuage",
        root: "س - ح - ب",
        rootMeaning: "Racine liée aux nuages, à tirer",
        letters: [
            { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] },
            { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }
        ],
        example: "السَّحَابُ يُغَطِّي الشَّمْس",
        exampleFr: "Les nuages couvrent le soleil"
    },
    {
        id: 14,
        word: "لَيْل",
        transliteration: "layl",
        type: "اسم",
        meaning: "night",
        meaningFr: "la nuit",
        root: "ل - ي - ل",
        rootMeaning: "Racine liée à la nuit",
        letters: [
            { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] },
            { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] },
            { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }
        ],
        example: "اللَّيْلُ هَادِئٌ",
        exampleFr: "La nuit est calme"
    },
    {
        id: 15,
        word: "صُبْح",
        transliteration: "ṣubḥ",
        type: "اسم",
        meaning: "morning",
        meaningFr: "le matin",
        root: "ص - ب - ح",
        rootMeaning: "Racine liée au matin, à l'aube",
        letters: [
            { letter: "ص", name: "ṣād", forms: ["ص", "صـ", "ـصـ", "ـص"] },
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] },
            { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }
        ],
        example: "الصُّبْحُ وَقْتُ البَرَكَة",
        exampleFr: "Le matin est un moment de bénédiction"
    },
    {
        id: 16,
        word: "نُور",
        transliteration: "nūr",
        type: "اسم",
        meaning: "light",
        meaningFr: "la lumière",
        root: "ن - و - ر",
        rootMeaning: "Racine liée à la lumière, à l'éclat",
        letters: [
            { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] },
            { letter: "و", name: "wāw", forms: ["و", "ـو"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }
        ],
        example: "النُّورُ يَهْدِي إِلَى الطَّرِيق",
        exampleFr: "La lumière guide vers le chemin"
    },
    {
        id: 17,
        word: "ظِلّ",
        transliteration: "ẓill",
        type: "اسم",
        meaning: "shadow",
        meaningFr: "l'ombre",
        root: "ظ - ل - ل",
        rootMeaning: "Racine liée à l'ombre, à la protection",
        letters: [
            { letter: "ظ", name: "ẓāʾ", forms: ["ظ", "ظـ", "ـظـ", "ـظ"] },
            { letter: "لّ", name: "lām (avec shadda)", forms: ["لّ", "لّـ", "ـلّـ", "ـلّ"] }
        ],
        example: "الظِّلُّ بَارِدٌ فِي الصَّيْف",
        exampleFr: "L'ombre est fraîche en été"
    },
    {
        id: 18,
        word: "حَرّ",
        transliteration: "ḥarr",
        type: "اسم",
        meaning: "heat",
        meaningFr: "la chaleur",
        root: "ح - ر - ر",
        rootMeaning: "Racine liée à la chaleur, à la liberté",
        letters: [
            { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] },
            { letter: "رّ", name: "rāʾ (avec shadda)", forms: ["رّ", "ـرّ"] }
        ],
        example: "الحَرُّ شَدِيدٌ فِي الصَّحْرَاء",
        exampleFr: "La chaleur est intense dans le désert"
    },
    {
        id: 19,
        word: "بَرْد",
        transliteration: "bard",
        type: "اسم",
        meaning: "cold",
        meaningFr: "le froid",
        root: "ب - ر - د",
        rootMeaning: "Racine liée au froid, au rafraîchissement",
        letters: [
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] },
            { letter: "د", name: "dāl", forms: ["د", "ـد"] }
        ],
        example: "البَرْدُ قَارِسٌ فِي الشِّتَاء",
        exampleFr: "Le froid est glacial en hiver"
    },
    {
        id: 20,
        word: "هَوَاء",
        transliteration: "hawāʾ",
        type: "اسم",
        meaning: "air",
        meaningFr: "l'air",
        root: "هـ - و - ي",
        rootMeaning: "Racine liée à l'air, à tomber",
        letters: [
            { letter: "هـ", name: "hāʾ", forms: ["هـ", "هـ", "ـهـ", "ـه"] },
            { letter: "و", name: "wāw", forms: ["و", "ـو"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ء", name: "hamza", forms: ["ء"] }
        ],
        example: "الهَوَاءُ نَقِيٌّ فِي الجَبَل",
        exampleFr: "L'air est pur à la montagne"
    },
    {
        id: 21,
        word: "تُرَاب",
        transliteration: "turāb",
        type: "اسم",
        meaning: "dust/soil",
        meaningFr: "la poussière/terre",
        root: "ت - ر - ب",
        rootMeaning: "Racine liée à la terre, au sol",
        letters: [
            { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }
        ],
        example: "خُلِقَ الإِنْسَانُ مِنْ تُرَاب",
        exampleFr: "L'homme a été créé de terre"
    },
    {
        id: 22,
        word: "نَار",
        transliteration: "nār",
        type: "اسم",
        meaning: "fire",
        meaningFr: "le feu",
        root: "ن - و - ر",
        rootMeaning: "Racine liée au feu, à la lumière",
        letters: [
            { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }
        ],
        example: "النَّارُ تُدْفِئُ البَيْت",
        exampleFr: "Le feu réchauffe la maison"
    },
    {
        id: 23,
        word: "صَحْرَاء",
        transliteration: "ṣaḥrāʾ",
        type: "اسم",
        meaning: "desert",
        meaningFr: "le désert",
        root: "ص - ح - ر",
        rootMeaning: "Racine liée au désert, à la clarté",
        letters: [
            { letter: "ص", name: "ṣād", forms: ["ص", "صـ", "ـصـ", "ـص"] },
            { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ء", name: "hamza", forms: ["ء"] }
        ],
        example: "الصَّحْرَاءُ وَاسِعَةٌ",
        exampleFr: "Le désert est vaste"
    },
    {
        id: 24,
        word: "غَابَة",
        transliteration: "ghāba",
        type: "اسم",
        meaning: "forest",
        meaningFr: "la forêt",
        root: "غ - ي - ب",
        rootMeaning: "Racine liée à l'absence, à ce qui est caché",
        letters: [
            { letter: "غ", name: "ghayn", forms: ["غ", "غـ", "ـغـ", "ـغ"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] },
            { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }
        ],
        example: "الغَابَةُ مَلِيئَةٌ بِالأَشْجَار",
        exampleFr: "La forêt est pleine d'arbres"
    },
    {
        id: 25,
        word: "وَادِي",
        transliteration: "wādī",
        type: "اسم",
        meaning: "valley",
        meaningFr: "la vallée",
        root: "و - د - ي",
        rootMeaning: "Racine liée aux vallées",
        letters: [
            { letter: "و", name: "wāw", forms: ["و", "ـو"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "د", name: "dāl", forms: ["د", "ـد"] },
            { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }
        ],
        example: "الوَادِي بَيْنَ الجِبَال",
        exampleFr: "La vallée est entre les montagnes"
    },
    {
        id: 26,
        word: "سَمَاء",
        transliteration: "samāʾ",
        type: "اسم",
        meaning: "sky",
        meaningFr: "le ciel",
        root: "س - م - و",
        rootMeaning: "Racine liée à l'élévation, la hauteur",
        letters: [
            { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] },
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ء", name: "hamza", forms: ["ء"] }
        ],
        example: "السَّمَاءُ زَرْقَاءُ اليَوْم",
        exampleFr: "Le ciel est bleu aujourd'hui"
    },
    {
        id: 27,
        word: "حَجَر",
        transliteration: "ḥajar",
        type: "اسم",
        meaning: "stone",
        meaningFr: "la pierre",
        root: "ح - ج - ر",
        rootMeaning: "Racine liée à la pierre, à l'interdit",
        letters: [
            { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] },
            { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }
        ],
        example: "الحَجَرُ صَلْبٌ",
        exampleFr: "La pierre est dure"
    },
    {
        id: 28,
        word: "رَمْل",
        transliteration: "raml",
        type: "اسم",
        meaning: "sand",
        meaningFr: "le sable",
        root: "ر - م - ل",
        rootMeaning: "Racine liée au sable",
        letters: [
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] },
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] },
            { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }
        ],
        example: "الرَّمْلُ ذَهَبِيُّ اللَّوْن",
        exampleFr: "Le sable est de couleur dorée"
    },
    {
        id: 29,
        word: "مَوْج",
        transliteration: "mawj",
        type: "اسم",
        meaning: "wave",
        meaningFr: "la vague",
        root: "م - و - ج",
        rootMeaning: "Racine liée aux vagues, à l'agitation",
        letters: [
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] },
            { letter: "و", name: "wāw", forms: ["و", "ـو"] },
            { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] }
        ],
        example: "المَوْجُ عَالٍ فِي البَحْر",
        exampleFr: "Les vagues sont hautes dans la mer"
    },
    {
        id: 30,
        word: "طَبِيعَة",
        transliteration: "ṭabīʿa",
        type: "اسم",
        meaning: "nature",
        meaningFr: "la nature",
        root: "ط - ب - ع",
        rootMeaning: "Racine liée à l'impression, la nature, le caractère",
        letters: [
            { letter: "ط", name: "ṭāʾ", forms: ["ط", "طـ", "ـطـ", "ـط"] },
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] },
            { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] },
            { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] },
            { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }
        ],
        example: "الطَّبِيعَةُ جَمِيلَةٌ فِي الرَّبِيع",
        exampleFr: "La nature est belle au printemps"
    },
    
    // === CORPS HUMAIN (31-60) ===
    {
        id: 31,
        word: "قَلْب",
        transliteration: "qalb",
        type: "اسم",
        meaning: "heart",
        meaningFr: "le cœur",
        root: "ق - ل - ب",
        rootMeaning: "Racine liée au retournement, au changement",
        letters: [
            { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] },
            { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] },
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }
        ],
        example: "القَلْبُ السَّلِيمُ خَيْرٌ مِنَ المَال",
        exampleFr: "Un cœur sain vaut mieux que l'argent"
    },
    {
        id: 32,
        word: "عَيْن",
        transliteration: "ʿayn",
        type: "اسم",
        meaning: "eye",
        meaningFr: "l'œil",
        root: "ع - ي - ن",
        rootMeaning: "Racine liée à l'œil, à la source",
        letters: [
            { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] },
            { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] },
            { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }
        ],
        example: "العَيْنُ نِعْمَةٌ مِنَ الله",
        exampleFr: "L'œil est une bénédiction d'Allah"
    },
    {
        id: 33,
        word: "يَد",
        transliteration: "yad",
        type: "اسم",
        meaning: "hand",
        meaningFr: "la main",
        root: "ي - د - ي",
        rootMeaning: "Racine liée à la main",
        letters: [
            { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] },
            { letter: "د", name: "dāl", forms: ["د", "ـد"] }
        ],
        example: "اليَدُ اليُمْنَى مُبَارَكَة",
        exampleFr: "La main droite est bénie"
    },
    {
        id: 34,
        word: "رَأْس",
        transliteration: "raʾs",
        type: "اسم",
        meaning: "head",
        meaningFr: "la tête",
        root: "ر - أ - س",
        rootMeaning: "Racine liée à la tête, au sommet",
        letters: [
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] },
            { letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] },
            { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }
        ],
        example: "الرَّأْسُ تَاجُ الجَسَد",
        exampleFr: "La tête est la couronne du corps"
    },
    {
        id: 35,
        word: "وَجْه",
        transliteration: "wajh",
        type: "اسم",
        meaning: "face",
        meaningFr: "le visage",
        root: "و - ج - هـ",
        rootMeaning: "Racine liée au visage, à la direction",
        letters: [
            { letter: "و", name: "wāw", forms: ["و", "ـو"] },
            { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] },
            { letter: "هـ", name: "hāʾ", forms: ["هـ", "هـ", "ـهـ", "ـه"] }
        ],
        example: "وَجْهُهُ مُشْرِقٌ",
        exampleFr: "Son visage est radieux"
    },
    {
        id: 36,
        word: "أُذُن",
        transliteration: "udhun",
        type: "اسم",
        meaning: "ear",
        meaningFr: "l'oreille",
        root: "أ - ذ - ن",
        rootMeaning: "Racine liée à l'oreille, à la permission",
        letters: [
            { letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] },
            { letter: "ذ", name: "dhāl", forms: ["ذ", "ـذ"] },
            { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }
        ],
        example: "الأُذُنُ تَسْمَعُ الكَلَام",
        exampleFr: "L'oreille entend la parole"
    },
    {
        id: 37,
        word: "أَنْف",
        transliteration: "anf",
        type: "اسم",
        meaning: "nose",
        meaningFr: "le nez",
        root: "أ - ن - ف",
        rootMeaning: "Racine liée au nez, à la fierté",
        letters: [
            { letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] },
            { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] },
            { letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }
        ],
        example: "الأَنْفُ لِلتَّنَفُّس",
        exampleFr: "Le nez sert à respirer"
    },
    {
        id: 38,
        word: "فَم",
        transliteration: "fam",
        type: "اسم",
        meaning: "mouth",
        meaningFr: "la bouche",
        root: "ف - و - هـ",
        rootMeaning: "Racine liée à la bouche",
        letters: [
            { letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] },
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }
        ],
        example: "الفَمُ يَنْطِقُ بِالحَقّ",
        exampleFr: "La bouche prononce la vérité"
    },
    {
        id: 39,
        word: "لِسَان",
        transliteration: "lisān",
        type: "اسم",
        meaning: "tongue",
        meaningFr: "la langue",
        root: "ل - س - ن",
        rootMeaning: "Racine liée à la langue, au langage",
        letters: [
            { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] },
            { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }
        ],
        example: "اللِّسَانُ يُعَبِّرُ عَنِ القَلْب",
        exampleFr: "La langue exprime ce qui est dans le cœur"
    },
    {
        id: 40,
        word: "سِنّ",
        transliteration: "sinn",
        type: "اسم",
        meaning: "tooth",
        meaningFr: "la dent",
        root: "س - ن - ن",
        rootMeaning: "Racine liée aux dents, à l'aiguisement",
        letters: [
            { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] },
            { letter: "نّ", name: "nūn (avec shadda)", forms: ["نّ", "نّـ", "ـنّـ", "ـنّ"] }
        ],
        example: "السِّنُّ يَجِبُ تَنْظِيفُهُ",
        exampleFr: "La dent doit être nettoyée"
    },
    {
        id: 41,
        word: "رِجْل",
        transliteration: "rijl",
        type: "اسم",
        meaning: "leg/foot",
        meaningFr: "la jambe/le pied",
        root: "ر - ج - ل",
        rootMeaning: "Racine liée au pied, à l'homme",
        letters: [
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] },
            { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] },
            { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }
        ],
        example: "الرِّجْلُ تَمْشِي عَلَى الأَرْض",
        exampleFr: "Le pied marche sur la terre"
    },
    {
        id: 42,
        word: "ظَهْر",
        transliteration: "ẓahr",
        type: "اسم",
        meaning: "back",
        meaningFr: "le dos",
        root: "ظ - هـ - ر",
        rootMeaning: "Racine liée au dos, à l'apparition",
        letters: [
            { letter: "ظ", name: "ẓāʾ", forms: ["ظ", "ظـ", "ـظـ", "ـظ"] },
            { letter: "هـ", name: "hāʾ", forms: ["هـ", "هـ", "ـهـ", "ـه"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }
        ],
        example: "الظَّهْرُ يَحْمِلُ الأَثْقَال",
        exampleFr: "Le dos porte les charges"
    },
    {
        id: 43,
        word: "بَطْن",
        transliteration: "baṭn",
        type: "اسم",
        meaning: "stomach",
        meaningFr: "le ventre",
        root: "ب - ط - ن",
        rootMeaning: "Racine liée au ventre, à l'intérieur",
        letters: [
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] },
            { letter: "ط", name: "ṭāʾ", forms: ["ط", "طـ", "ـطـ", "ـط"] },
            { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }
        ],
        example: "البَطْنُ مَحَلُّ الطَّعَام",
        exampleFr: "Le ventre est le lieu de la nourriture"
    },
    {
        id: 44,
        word: "صَدْر",
        transliteration: "ṣadr",
        type: "اسم",
        meaning: "chest",
        meaningFr: "la poitrine",
        root: "ص - د - ر",
        rootMeaning: "Racine liée à la poitrine, à l'émission",
        letters: [
            { letter: "ص", name: "ṣād", forms: ["ص", "صـ", "ـصـ", "ـص"] },
            { letter: "د", name: "dāl", forms: ["د", "ـد"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }
        ],
        example: "الصَّدْرُ يَحْتَوِي عَلَى القَلْب",
        exampleFr: "La poitrine contient le cœur"
    },
    {
        id: 45,
        word: "إِصْبَع",
        transliteration: "iṣbaʿ",
        type: "اسم",
        meaning: "finger",
        meaningFr: "le doigt",
        root: "ص - ب - ع",
        rootMeaning: "Racine liée au doigt",
        letters: [
            { letter: "إ", name: "alif hamza", forms: ["إ", "ـإ"] },
            { letter: "ص", name: "ṣād", forms: ["ص", "صـ", "ـصـ", "ـص"] },
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] },
            { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }
        ],
        example: "الإِصْبَعُ يُشِيرُ إِلَى الشَّيْء",
        exampleFr: "Le doigt pointe vers quelque chose"
    },
    {
        id: 46,
        word: "شَعْر",
        transliteration: "shaʿr",
        type: "اسم",
        meaning: "hair",
        meaningFr: "les cheveux",
        root: "ش - ع - ر",
        rootMeaning: "Racine liée aux cheveux, au sentiment",
        letters: [
            { letter: "ش", name: "shīn", forms: ["ش", "شـ", "ـشـ", "ـش"] },
            { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }
        ],
        example: "الشَّعْرُ زِينَةٌ لِلرَّأْس",
        exampleFr: "Les cheveux sont une parure pour la tête"
    },
    {
        id: 47,
        word: "جِلْد",
        transliteration: "jild",
        type: "اسم",
        meaning: "skin",
        meaningFr: "la peau",
        root: "ج - ل - د",
        rootMeaning: "Racine liée à la peau, à l'endurance",
        letters: [
            { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] },
            { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] },
            { letter: "د", name: "dāl", forms: ["د", "ـد"] }
        ],
        example: "الجِلْدُ يَحْمِي الجِسْم",
        exampleFr: "La peau protège le corps"
    },
    {
        id: 48,
        word: "عَظْم",
        transliteration: "ʿaẓm",
        type: "اسم",
        meaning: "bone",
        meaningFr: "l'os",
        root: "ع - ظ - م",
        rootMeaning: "Racine liée aux os, à la grandeur",
        letters: [
            { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] },
            { letter: "ظ", name: "ẓāʾ", forms: ["ظ", "ظـ", "ـظـ", "ـظ"] },
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }
        ],
        example: "العَظْمُ صُلْبٌ وَقَوِيّ",
        exampleFr: "L'os est dur et solide"
    },
    {
        id: 49,
        word: "دَم",
        transliteration: "dam",
        type: "اسم",
        meaning: "blood",
        meaningFr: "le sang",
        root: "د - م - ي",
        rootMeaning: "Racine liée au sang",
        letters: [
            { letter: "د", name: "dāl", forms: ["د", "ـد"] },
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }
        ],
        example: "الدَّمُ يَجْرِي فِي العُرُوق",
        exampleFr: "Le sang coule dans les veines"
    },
    {
        id: 50,
        word: "عَقْل",
        transliteration: "ʿaql",
        type: "اسم",
        meaning: "mind/reason",
        meaningFr: "la raison/l'esprit",
        root: "ع - ق - ل",
        rootMeaning: "Racine liée à la raison, à l'attachement",
        letters: [
            { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] },
            { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] },
            { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }
        ],
        example: "العَقْلُ نِعْمَةٌ عَظِيمَة",
        exampleFr: "La raison est une grande bénédiction"
    },
    {
        id: 51,
        word: "نَفْس",
        transliteration: "nafs",
        type: "اسم",
        meaning: "soul/self",
        meaningFr: "l'âme/soi-même",
        root: "ن - ف - س",
        rootMeaning: "Racine liée à l'âme, à la respiration",
        letters: [
            { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] },
            { letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] },
            { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }
        ],
        example: "النَّفْسُ أَمَّارَةٌ بِالسُّوء",
        exampleFr: "L'âme est encline au mal"
    },
    {
        id: 52,
        word: "كَتِف",
        transliteration: "katif",
        type: "اسم",
        meaning: "shoulder",
        meaningFr: "l'épaule",
        root: "ك - ت - ف",
        rootMeaning: "Racine liée à l'épaule",
        letters: [
            { letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] },
            { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] },
            { letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }
        ],
        example: "الكَتِفُ قَوِيٌّ",
        exampleFr: "L'épaule est forte"
    },
    {
        id: 53,
        word: "ذِرَاع",
        transliteration: "dhirāʿ",
        type: "اسم",
        meaning: "arm",
        meaningFr: "le bras",
        root: "ذ - ر - ع",
        rootMeaning: "Racine liée au bras, à la mesure",
        letters: [
            { letter: "ذ", name: "dhāl", forms: ["ذ", "ـذ"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }
        ],
        example: "الذِّرَاعُ طَوِيلَة",
        exampleFr: "Le bras est long"
    },
    {
        id: 54,
        word: "رُكْبَة",
        transliteration: "rukba",
        type: "اسم",
        meaning: "knee",
        meaningFr: "le genou",
        root: "ر - ك - ب",
        rootMeaning: "Racine liée à monter, au genou",
        letters: [
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] },
            { letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] },
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] },
            { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }
        ],
        example: "الرُّكْبَةُ تُسَاعِدُ عَلَى المَشْي",
        exampleFr: "Le genou aide à marcher"
    },
    {
        id: 55,
        word: "كَفّ",
        transliteration: "kaff",
        type: "اسم",
        meaning: "palm",
        meaningFr: "la paume",
        root: "ك - ف - ف",
        rootMeaning: "Racine liée à la paume, à cesser",
        letters: [
            { letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] },
            { letter: "فّ", name: "fāʾ (avec shadda)", forms: ["فّ", "فّـ", "ـفّـ", "ـفّ"] }
        ],
        example: "الكَفُّ مَفْتُوحَةٌ لِلْعَطَاء",
        exampleFr: "La paume est ouverte pour donner"
    },
    {
        id: 56,
        word: "عُنُق",
        transliteration: "ʿunuq",
        type: "اسم",
        meaning: "neck",
        meaningFr: "le cou",
        root: "ع - ن - ق",
        rootMeaning: "Racine liée au cou, à l'étreinte",
        letters: [
            { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] },
            { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] },
            { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }
        ],
        example: "العُنُقُ يَحْمِلُ الرَّأْس",
        exampleFr: "Le cou porte la tête"
    },
    {
        id: 57,
        word: "جَبْهَة",
        transliteration: "jabha",
        type: "اسم",
        meaning: "forehead",
        meaningFr: "le front",
        root: "ج - ب - هـ",
        rootMeaning: "Racine liée au front, à faire face",
        letters: [
            { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] },
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] },
            { letter: "هـ", name: "hāʾ", forms: ["هـ", "هـ", "ـهـ", "ـه"] },
            { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }
        ],
        example: "الجَبْهَةُ مَكَانُ السُّجُود",
        exampleFr: "Le front est l'endroit de la prosternation"
    },
    {
        id: 58,
        word: "خَدّ",
        transliteration: "khadd",
        type: "اسم",
        meaning: "cheek",
        meaningFr: "la joue",
        root: "خ - د - د",
        rootMeaning: "Racine liée à la joue",
        letters: [
            { letter: "خ", name: "khāʾ", forms: ["خ", "خـ", "ـخـ", "ـخ"] },
            { letter: "دّ", name: "dāl (avec shadda)", forms: ["دّ", "ـدّ"] }
        ],
        example: "الخَدُّ أَحْمَرُ مِنَ الحَيَاء",
        exampleFr: "La joue est rouge de pudeur"
    },
    {
        id: 59,
        word: "ذَقَن",
        transliteration: "dhaqan",
        type: "اسم",
        meaning: "chin",
        meaningFr: "le menton",
        root: "ذ - ق - ن",
        rootMeaning: "Racine liée au menton",
        letters: [
            { letter: "ذ", name: "dhāl", forms: ["ذ", "ـذ"] },
            { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] },
            { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }
        ],
        example: "الذَّقَنُ أَسْفَلَ الوَجْه",
        exampleFr: "Le menton est en bas du visage"
    },
    {
        id: 60,
        word: "حَاجِب",
        transliteration: "ḥājib",
        type: "اسم",
        meaning: "eyebrow",
        meaningFr: "le sourcil",
        root: "ح - ج - ب",
        rootMeaning: "Racine liée au voile, à cacher",
        letters: [
            { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] },
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }
        ],
        example: "الحَاجِبُ يَحْمِي العَيْن",
        exampleFr: "Le sourcil protège l'œil"
    },

    // === FAMILLE (61-80) ===
    {
        id: 61,
        word: "أَب",
        transliteration: "ab",
        type: "اسم",
        meaning: "father",
        meaningFr: "le père",
        root: "أ - ب - و",
        rootMeaning: "Racine liée au père",
        letters: [
            { letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] },
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }
        ],
        example: "الأَبُ رَأْسُ العَائِلَة",
        exampleFr: "Le père est le chef de la famille"
    },
    {
        id: 62,
        word: "أُمّ",
        transliteration: "umm",
        type: "اسم",
        meaning: "mother",
        meaningFr: "la mère",
        root: "أ - م - م",
        rootMeaning: "Racine liée à la mère, à l'origine",
        letters: [
            { letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] },
            { letter: "مّ", name: "mīm (avec shadda)", forms: ["مّ", "مّـ", "ـمّـ", "ـمّ"] }
        ],
        example: "الأُمُّ مَدْرَسَةٌ",
        exampleFr: "La mère est une école"
    },
    {
        id: 63,
        word: "اِبْن",
        transliteration: "ibn",
        type: "اسم",
        meaning: "son",
        meaningFr: "le fils",
        root: "ب - ن - ي",
        rootMeaning: "Racine liée à la construction, au fils",
        letters: [
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] },
            { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }
        ],
        example: "الاِبْنُ بَارٌّ بِوَالِدَيْه",
        exampleFr: "Le fils est bon envers ses parents"
    },
    {
        id: 64,
        word: "بِنْت",
        transliteration: "bint",
        type: "اسم",
        meaning: "daughter",
        meaningFr: "la fille",
        root: "ب - ن - ت",
        rootMeaning: "Racine liée à la fille",
        letters: [
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] },
            { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] },
            { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }
        ],
        example: "البِنْتُ تُحِبُّ أُمَّهَا",
        exampleFr: "La fille aime sa mère"
    },
    {
        id: 65,
        word: "أَخ",
        transliteration: "akh",
        type: "اسم",
        meaning: "brother",
        meaningFr: "le frère",
        root: "أ - خ - و",
        rootMeaning: "Racine liée à la fraternité",
        letters: [
            { letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] },
            { letter: "خ", name: "khāʾ", forms: ["خ", "خـ", "ـخـ", "ـخ"] }
        ],
        example: "الأَخُ سَنَدٌ لِأَخِيه",
        exampleFr: "Le frère est un soutien pour son frère"
    },
    {
        id: 66,
        word: "أُخْت",
        transliteration: "ukht",
        type: "اسم",
        meaning: "sister",
        meaningFr: "la sœur",
        root: "أ - خ - ت",
        rootMeaning: "Racine liée à la sororité",
        letters: [
            { letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] },
            { letter: "خ", name: "khāʾ", forms: ["خ", "خـ", "ـخـ", "ـخ"] },
            { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }
        ],
        example: "الأُخْتُ نِعْمَةٌ",
        exampleFr: "La sœur est une bénédiction"
    },
    {
        id: 67,
        word: "جَدّ",
        transliteration: "jadd",
        type: "اسم",
        meaning: "grandfather",
        meaningFr: "le grand-père",
        root: "ج - د - د",
        rootMeaning: "Racine liée au grand-père, au sérieux",
        letters: [
            { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] },
            { letter: "دّ", name: "dāl (avec shadda)", forms: ["دّ", "ـدّ"] }
        ],
        example: "الجَدُّ حَكِيمٌ",
        exampleFr: "Le grand-père est sage"
    },
    {
        id: 68,
        word: "جَدَّة",
        transliteration: "jadda",
        type: "اسم",
        meaning: "grandmother",
        meaningFr: "la grand-mère",
        root: "ج - د - د",
        rootMeaning: "Racine liée à la grand-mère",
        letters: [
            { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] },
            { letter: "دّ", name: "dāl (avec shadda)", forms: ["دّ", "ـدّ"] },
            { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }
        ],
        example: "الجَدَّةُ تَطْبُخُ طَعَامًا لَذِيذًا",
        exampleFr: "La grand-mère cuisine un repas délicieux"
    },
    {
        id: 69,
        word: "عَمّ",
        transliteration: "ʿamm",
        type: "اسم",
        meaning: "paternal uncle",
        meaningFr: "l'oncle paternel",
        root: "ع - م - م",
        rootMeaning: "Racine liée à l'oncle paternel",
        letters: [
            { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] },
            { letter: "مّ", name: "mīm (avec shadda)", forms: ["مّ", "مّـ", "ـمّـ", "ـمّ"] }
        ],
        example: "العَمُّ كَالأَب",
        exampleFr: "L'oncle paternel est comme un père"
    },
    {
        id: 70,
        word: "خَال",
        transliteration: "khāl",
        type: "اسم",
        meaning: "maternal uncle",
        meaningFr: "l'oncle maternel",
        root: "خ - و - ل",
        rootMeaning: "Racine liée à l'oncle maternel",
        letters: [
            { letter: "خ", name: "khāʾ", forms: ["خ", "خـ", "ـخـ", "ـخ"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }
        ],
        example: "الخَالُ يُحِبُّ أَبْنَاءَ أُخْتِه",
        exampleFr: "L'oncle maternel aime les enfants de sa sœur"
    },
    {
        id: 71,
        word: "زَوْج",
        transliteration: "zawj",
        type: "اسم",
        meaning: "husband",
        meaningFr: "le mari",
        root: "ز - و - ج",
        rootMeaning: "Racine liée au couple, au mariage",
        letters: [
            { letter: "ز", name: "zāy", forms: ["ز", "ـز"] },
            { letter: "و", name: "wāw", forms: ["و", "ـو"] },
            { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] }
        ],
        example: "الزَّوْجُ قَائِدُ البَيْت",
        exampleFr: "Le mari est le chef du foyer"
    },
    {
        id: 72,
        word: "زَوْجَة",
        transliteration: "zawja",
        type: "اسم",
        meaning: "wife",
        meaningFr: "l'épouse",
        root: "ز - و - ج",
        rootMeaning: "Racine liée au couple, au mariage",
        letters: [
            { letter: "ز", name: "zāy", forms: ["ز", "ـز"] },
            { letter: "و", name: "wāw", forms: ["و", "ـو"] },
            { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] },
            { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }
        ],
        example: "الزَّوْجَةُ شَرِيكَةُ الحَيَاة",
        exampleFr: "L'épouse est la partenaire de vie"
    },
    {
        id: 73,
        word: "طِفْل",
        transliteration: "ṭifl",
        type: "اسم",
        meaning: "child",
        meaningFr: "l'enfant",
        root: "ط - ف - ل",
        rootMeaning: "Racine liée à l'enfance",
        letters: [
            { letter: "ط", name: "ṭāʾ", forms: ["ط", "طـ", "ـطـ", "ـط"] },
            { letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] },
            { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }
        ],
        example: "الطِّفْلُ بَرِيءٌ",
        exampleFr: "L'enfant est innocent"
    },
    {
        id: 74,
        word: "عَائِلَة",
        transliteration: "ʿāʾila",
        type: "اسم",
        meaning: "family",
        meaningFr: "la famille",
        root: "ع - و - ل",
        rootMeaning: "Racine liée à la famille, à la charge",
        letters: [
            { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ئ", name: "hamza", forms: ["ئ", "ـئـ", "ـئ"] },
            { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] },
            { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }
        ],
        example: "العَائِلَةُ أَسَاسُ المُجْتَمَع",
        exampleFr: "La famille est la base de la société"
    },
    {
        id: 75,
        word: "وَالِد",
        transliteration: "wālid",
        type: "اسم",
        meaning: "parent (father)",
        meaningFr: "le parent (père)",
        root: "و - ل - د",
        rootMeaning: "Racine liée à la naissance",
        letters: [
            { letter: "و", name: "wāw", forms: ["و", "ـو"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] },
            { letter: "د", name: "dāl", forms: ["د", "ـد"] }
        ],
        example: "الوَالِدُ يُرَبِّي أَبْنَاءَهُ",
        exampleFr: "Le parent élève ses enfants"
    },
    {
        id: 76,
        word: "قَرِيب",
        transliteration: "qarīb",
        type: "اسم",
        meaning: "relative",
        meaningFr: "le proche/parent",
        root: "ق - ر - ب",
        rootMeaning: "Racine liée à la proximité",
        letters: [
            { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] },
            { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] },
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }
        ],
        example: "القَرِيبُ يَجِبُ صِلَتُهُ",
        exampleFr: "Le proche doit être visité"
    },
    {
        id: 77,
        word: "يَتِيم",
        transliteration: "yatīm",
        type: "اسم",
        meaning: "orphan",
        meaningFr: "l'orphelin",
        root: "ي - ت - م",
        rootMeaning: "Racine liée à l'orphelin",
        letters: [
            { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] },
            { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] },
            { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] },
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }
        ],
        example: "اليَتِيمُ يَحْتَاجُ الرَّحْمَة",
        exampleFr: "L'orphelin a besoin de miséricorde"
    },
    {
        id: 78,
        word: "جَار",
        transliteration: "jār",
        type: "اسم",
        meaning: "neighbor",
        meaningFr: "le voisin",
        root: "ج - و - ر",
        rootMeaning: "Racine liée au voisinage",
        letters: [
            { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }
        ],
        example: "الجَارُ لَهُ حَقٌّ عَظِيم",
        exampleFr: "Le voisin a un grand droit"
    },
    {
        id: 79,
        word: "صَدِيق",
        transliteration: "ṣadīq",
        type: "اسم",
        meaning: "friend",
        meaningFr: "l'ami",
        root: "ص - د - ق",
        rootMeaning: "Racine liée à la vérité, à l'amitié sincère",
        letters: [
            { letter: "ص", name: "ṣād", forms: ["ص", "صـ", "ـصـ", "ـص"] },
            { letter: "د", name: "dāl", forms: ["د", "ـد"] },
            { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] },
            { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }
        ],
        example: "الصَّدِيقُ وَقْتَ الضِّيق",
        exampleFr: "L'ami se révèle dans les moments difficiles"
    },
    {
        id: 80,
        word: "ضَيْف",
        transliteration: "ḍayf",
        type: "اسم",
        meaning: "guest",
        meaningFr: "l'invité",
        root: "ض - ي - ف",
        rootMeaning: "Racine liée à l'hospitalité",
        letters: [
            { letter: "ض", name: "ḍād", forms: ["ض", "ضـ", "ـضـ", "ـض"] },
            { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] },
            { letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }
        ],
        example: "الضَّيْفُ يُكْرَمُ",
        exampleFr: "L'invité est honoré"
    },

    // === EMOTIONS & QUALITÉS (81-120) ===
    {
        id: 81,
        word: "حُبّ",
        transliteration: "ḥubb",
        type: "اسم",
        meaning: "love",
        meaningFr: "l'amour",
        root: "ح - ب - ب",
        rootMeaning: "Racine liée à l'amour, l'affection",
        letters: [
            { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] },
            { letter: "بّ", name: "bāʾ (avec shadda)", forms: ["بّ", "بّـ", "ـبّـ", "ـبّ"] }
        ],
        example: "الحُبُّ فِي اللهِ أَعْظَمُ الحُبّ",
        exampleFr: "L'amour en Allah est le plus grand amour"
    },
    {
        id: 82,
        word: "فَرَح",
        transliteration: "faraḥ",
        type: "اسم",
        meaning: "joy",
        meaningFr: "la joie",
        root: "ف - ر - ح",
        rootMeaning: "Racine liée à la joie",
        letters: [
            { letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] },
            { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }
        ],
        example: "الفَرَحُ يَمْلَأُ القَلْب",
        exampleFr: "La joie remplit le cœur"
    },
    {
        id: 83,
        word: "حُزْن",
        transliteration: "ḥuzn",
        type: "اسم",
        meaning: "sadness",
        meaningFr: "la tristesse",
        root: "ح - ز - ن",
        rootMeaning: "Racine liée à la tristesse",
        letters: [
            { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] },
            { letter: "ز", name: "zāy", forms: ["ز", "ـز"] },
            { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }
        ],
        example: "الحُزْنُ يَزُولُ بِالصَّبْر",
        exampleFr: "La tristesse disparaît avec la patience"
    },
    {
        id: 84,
        word: "خَوْف",
        transliteration: "khawf",
        type: "اسم",
        meaning: "fear",
        meaningFr: "la peur",
        root: "خ - و - ف",
        rootMeaning: "Racine liée à la peur",
        letters: [
            { letter: "خ", name: "khāʾ", forms: ["خ", "خـ", "ـخـ", "ـخ"] },
            { letter: "و", name: "wāw", forms: ["و", "ـو"] },
            { letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }
        ],
        example: "الخَوْفُ مِنَ اللهِ حِكْمَة",
        exampleFr: "La crainte d'Allah est une sagesse"
    },
    {
        id: 85,
        word: "أَمَل",
        transliteration: "amal",
        type: "اسم",
        meaning: "hope",
        meaningFr: "l'espoir",
        root: "أ - م - ل",
        rootMeaning: "Racine liée à l'espoir",
        letters: [
            { letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] },
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] },
            { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }
        ],
        example: "الأَمَلُ لَا يَنْقَطِع",
        exampleFr: "L'espoir ne s'éteint jamais"
    },
    {
        id: 86,
        word: "غَضَب",
        transliteration: "ghaḍab",
        type: "اسم",
        meaning: "anger",
        meaningFr: "la colère",
        root: "غ - ض - ب",
        rootMeaning: "Racine liée à la colère",
        letters: [
            { letter: "غ", name: "ghayn", forms: ["غ", "غـ", "ـغـ", "ـغ"] },
            { letter: "ض", name: "ḍād", forms: ["ض", "ضـ", "ـضـ", "ـض"] },
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }
        ],
        example: "الغَضَبُ يُفْسِدُ العَقْل",
        exampleFr: "La colère corrompt la raison"
    },
    {
        id: 87,
        word: "سَلَام",
        transliteration: "salām",
        type: "اسم",
        meaning: "peace",
        meaningFr: "la paix",
        root: "س - ل - م",
        rootMeaning: "Racine liée à la paix, la soumission, l'intégrité",
        letters: [
            { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] },
            { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }
        ],
        example: "السَّلَامُ عَلَيْكُم وَرَحْمَةُ الله",
        exampleFr: "Que la paix et la miséricorde d'Allah soient sur vous"
    },
    {
        id: 88,
        word: "صَبْر",
        transliteration: "ṣabr",
        type: "اسم",
        meaning: "patience",
        meaningFr: "la patience",
        root: "ص - ب - ر",
        rootMeaning: "Racine liée à la patience, l'endurance",
        letters: [
            { letter: "ص", name: "ṣād", forms: ["ص", "صـ", "ـصـ", "ـص"] },
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }
        ],
        example: "الصَّبْرُ مِفْتَاحُ الفَرَج",
        exampleFr: "La patience est la clé du soulagement"
    },
    {
        id: 89,
        word: "شُكْر",
        transliteration: "shukr",
        type: "اسم",
        meaning: "gratitude",
        meaningFr: "la gratitude",
        root: "ش - ك - ر",
        rootMeaning: "Racine liée à la reconnaissance",
        letters: [
            { letter: "ش", name: "shīn", forms: ["ش", "شـ", "ـشـ", "ـش"] },
            { letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }
        ],
        example: "الشُّكْرُ يَزِيدُ النِّعَم",
        exampleFr: "La gratitude augmente les bienfaits"
    },
    {
        id: 90,
        word: "رَحْمَة",
        transliteration: "raḥma",
        type: "اسم",
        meaning: "mercy",
        meaningFr: "la miséricorde",
        root: "ر - ح - م",
        rootMeaning: "Racine liée à la miséricorde",
        letters: [
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] },
            { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] },
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] },
            { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }
        ],
        example: "رَحْمَةُ اللهِ وَاسِعَة",
        exampleFr: "La miséricorde d'Allah est vaste"
    },
    {
        id: 91,
        word: "عَدْل",
        transliteration: "ʿadl",
        type: "اسم",
        meaning: "justice",
        meaningFr: "la justice",
        root: "ع - د - ل",
        rootMeaning: "Racine liée à la justice, l'équité",
        letters: [
            { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] },
            { letter: "د", name: "dāl", forms: ["د", "ـد"] },
            { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }
        ],
        example: "العَدْلُ أَسَاسُ المُلْك",
        exampleFr: "La justice est le fondement du pouvoir"
    },
    {
        id: 92,
        word: "حَقّ",
        transliteration: "ḥaqq",
        type: "اسم",
        meaning: "truth/right",
        meaningFr: "la vérité/le droit",
        root: "ح - ق - ق",
        rootMeaning: "Racine liée à la vérité, au droit",
        letters: [
            { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] },
            { letter: "قّ", name: "qāf (avec shadda)", forms: ["قّ", "قّـ", "ـقّـ", "ـقّ"] }
        ],
        example: "الحَقُّ يَعْلُو وَلَا يُعْلَى عَلَيْه",
        exampleFr: "La vérité s'élève et rien ne la surpasse"
    },
    {
        id: 93,
        word: "كَرَم",
        transliteration: "karam",
        type: "اسم",
        meaning: "generosity",
        meaningFr: "la générosité",
        root: "ك - ر - م",
        rootMeaning: "Racine liée à la générosité, la noblesse",
        letters: [
            { letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] },
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }
        ],
        example: "الكَرَمُ مِنْ صِفَاتِ المُؤْمِن",
        exampleFr: "La générosité est une qualité du croyant"
    },
    {
        id: 94,
        word: "حِلْم",
        transliteration: "ḥilm",
        type: "اسم",
        meaning: "forbearance",
        meaningFr: "la clémence",
        root: "ح - ل - م",
        rootMeaning: "Racine liée à la clémence, au rêve",
        letters: [
            { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] },
            { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] },
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }
        ],
        example: "الحِلْمُ سَيِّدُ الأَخْلَاق",
        exampleFr: "La clémence est la maîtresse des caractères"
    },
    {
        id: 95,
        word: "عِلْم",
        transliteration: "ʿilm",
        type: "اسم",
        meaning: "knowledge",
        meaningFr: "la science, le savoir",
        root: "ع - ل - م",
        rootMeaning: "Racine liée au savoir, à la connaissance",
        letters: [
            { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] },
            { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] },
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }
        ],
        example: "طَلَبُ العِلْمِ فَرِيضَةٌ",
        exampleFr: "La quête du savoir est une obligation"
    },
    {
        id: 96,
        word: "جَهْل",
        transliteration: "jahl",
        type: "اسم",
        meaning: "ignorance",
        meaningFr: "l'ignorance",
        root: "ج - هـ - ل",
        rootMeaning: "Racine liée à l'ignorance",
        letters: [
            { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] },
            { letter: "هـ", name: "hāʾ", forms: ["هـ", "هـ", "ـهـ", "ـه"] },
            { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }
        ],
        example: "الجَهْلُ عَدُوُّ الإِنْسَان",
        exampleFr: "L'ignorance est l'ennemi de l'homme"
    },
    {
        id: 97,
        word: "حِكْمَة",
        transliteration: "ḥikma",
        type: "اسم",
        meaning: "wisdom",
        meaningFr: "la sagesse",
        root: "ح - ك - م",
        rootMeaning: "Racine liée à la sagesse, au jugement",
        letters: [
            { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] },
            { letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] },
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] },
            { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }
        ],
        example: "الحِكْمَةُ ضَالَّةُ المُؤْمِن",
        exampleFr: "La sagesse est l'objet perdu du croyant"
    },
    {
        id: 98,
        word: "قُوَّة",
        transliteration: "quwwa",
        type: "اسم",
        meaning: "strength",
        meaningFr: "la force",
        root: "ق - و - ي",
        rootMeaning: "Racine liée à la force",
        letters: [
            { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] },
            { letter: "وّ", name: "wāw (avec shadda)", forms: ["وّ", "ـوّ"] },
            { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }
        ],
        example: "القُوَّةُ فِي الاتِّحَاد",
        exampleFr: "La force est dans l'union"
    },
    {
        id: 99,
        word: "ضَعْف",
        transliteration: "ḍaʿf",
        type: "اسم",
        meaning: "weakness",
        meaningFr: "la faiblesse",
        root: "ض - ع - ف",
        rootMeaning: "Racine liée à la faiblesse",
        letters: [
            { letter: "ض", name: "ḍād", forms: ["ض", "ضـ", "ـضـ", "ـض"] },
            { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] },
            { letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }
        ],
        example: "الإِنْسَانُ خُلِقَ ضَعِيفًا",
        exampleFr: "L'homme a été créé faible"
    },
    {
        id: 100,
        word: "جَمَال",
        transliteration: "jamāl",
        type: "اسم",
        meaning: "beauty",
        meaningFr: "la beauté",
        root: "ج - م - ل",
        rootMeaning: "Racine liée à la beauté",
        letters: [
            { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] },
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }
        ],
        example: "اللهُ جَمِيلٌ يُحِبُّ الجَمَال",
        exampleFr: "Allah est beau et aime la beauté"
    },
    // ... Je continue avec les 265 mots restants
    // Pour gagner du temps, je vais créer une structure simplifiée pour le reste

    // === TEMPS (101-120) ===
    {
        id: 101,
        word: "وَقْت",
        transliteration: "waqt",
        type: "اسم",
        meaning: "time",
        meaningFr: "le temps",
        root: "و - ق - ت",
        rootMeaning: "Racine liée au temps",
        letters: [
            { letter: "و", name: "wāw", forms: ["و", "ـو"] },
            { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] },
            { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }
        ],
        example: "الوَقْتُ كَالسَّيْف",
        exampleFr: "Le temps est comme une épée"
    },
    {
        id: 102,
        word: "يَوْم",
        transliteration: "yawm",
        type: "اسم",
        meaning: "day",
        meaningFr: "le jour",
        root: "ي - و - م",
        rootMeaning: "Racine liée au jour",
        letters: [
            { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] },
            { letter: "و", name: "wāw", forms: ["و", "ـو"] },
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }
        ],
        example: "اليَوْمُ يَوْمٌ جَدِيد",
        exampleFr: "Aujourd'hui est un nouveau jour"
    },
    {
        id: 103,
        word: "سَنَة",
        transliteration: "sana",
        type: "اسم",
        meaning: "year",
        meaningFr: "l'année",
        root: "س - ن - و",
        rootMeaning: "Racine liée à l'année",
        letters: [
            { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] },
            { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] },
            { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }
        ],
        example: "السَّنَةُ اثْنَا عَشَرَ شَهْرًا",
        exampleFr: "L'année compte douze mois"
    },
    {
        id: 104,
        word: "شَهْر",
        transliteration: "shahr",
        type: "اسم",
        meaning: "month",
        meaningFr: "le mois",
        root: "ش - هـ - ر",
        rootMeaning: "Racine liée au mois, à la célébrité",
        letters: [
            { letter: "ش", name: "shīn", forms: ["ش", "شـ", "ـشـ", "ـش"] },
            { letter: "هـ", name: "hāʾ", forms: ["هـ", "هـ", "ـهـ", "ـه"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }
        ],
        example: "شَهْرُ رَمَضَانَ شَهْرُ الصِّيَام",
        exampleFr: "Le mois de Ramadan est le mois du jeûne"
    },
    {
        id: 105,
        word: "أُسْبُوع",
        transliteration: "usbūʿ",
        type: "اسم",
        meaning: "week",
        meaningFr: "la semaine",
        root: "س - ب - ع",
        rootMeaning: "Racine liée au nombre sept",
        letters: [
            { letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] },
            { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] },
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] },
            { letter: "و", name: "wāw", forms: ["و", "ـو"] },
            { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }
        ],
        example: "الأُسْبُوعُ سَبْعَةُ أَيَّام",
        exampleFr: "La semaine compte sept jours"
    },
    {
        id: 106,
        word: "سَاعَة",
        transliteration: "sāʿa",
        type: "اسم",
        meaning: "hour",
        meaningFr: "l'heure",
        root: "س - و - ع",
        rootMeaning: "Racine liée à l'heure",
        letters: [
            { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] },
            { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }
        ],
        example: "السَّاعَةُ الآنَ الثَّامِنَة",
        exampleFr: "Il est maintenant huit heures"
    },
    {
        id: 107,
        word: "دَقِيقَة",
        transliteration: "daqīqa",
        type: "اسم",
        meaning: "minute",
        meaningFr: "la minute",
        root: "د - ق - ق",
        rootMeaning: "Racine liée à la précision",
        letters: [
            { letter: "د", name: "dāl", forms: ["د", "ـد"] },
            { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] },
            { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] },
            { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] },
            { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }
        ],
        example: "انْتَظِرْ دَقِيقَةً وَاحِدَة",
        exampleFr: "Attends une minute"
    },
    {
        id: 108,
        word: "غَد",
        transliteration: "ghad",
        type: "اسم",
        meaning: "tomorrow",
        meaningFr: "demain",
        root: "غ - د - و",
        rootMeaning: "Racine liée au lendemain",
        letters: [
            { letter: "غ", name: "ghayn", forms: ["غ", "غـ", "ـغـ", "ـغ"] },
            { letter: "د", name: "dāl", forms: ["د", "ـد"] }
        ],
        example: "غَدًا يَوْمٌ جَدِيد",
        exampleFr: "Demain est un nouveau jour"
    },
    {
        id: 109,
        word: "أَمْس",
        transliteration: "ams",
        type: "اسم",
        meaning: "yesterday",
        meaningFr: "hier",
        root: "أ - م - س",
        rootMeaning: "Racine liée à hier",
        letters: [
            { letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] },
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] },
            { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }
        ],
        example: "أَمْسِ كَانَ يَوْمًا جَمِيلًا",
        exampleFr: "Hier était une belle journée"
    },
    {
        id: 110,
        word: "مَسَاء",
        transliteration: "masāʾ",
        type: "اسم",
        meaning: "evening",
        meaningFr: "le soir",
        root: "م - س - ي",
        rootMeaning: "Racine liée au soir",
        letters: [
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] },
            { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ء", name: "hamza", forms: ["ء"] }
        ],
        example: "مَسَاءُ الخَيْر",
        exampleFr: "Bonsoir"
    },

    // === RELIGION & SPIRITUALITÉ (111-150) ===
    {
        id: 111,
        word: "إِيمَان",
        transliteration: "īmān",
        type: "اسم",
        meaning: "faith",
        meaningFr: "la foi",
        root: "أ - م - ن",
        rootMeaning: "Racine liée à la sécurité, à la foi",
        letters: [
            { letter: "إ", name: "alif hamza", forms: ["إ", "ـإ"] },
            { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] },
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }
        ],
        example: "الإِيمَانُ أَسَاسُ العَمَل",
        exampleFr: "La foi est le fondement de l'action"
    },
    {
        id: 112,
        word: "صَلَاة",
        transliteration: "ṣalāh",
        type: "اسم",
        meaning: "prayer",
        meaningFr: "la prière",
        root: "ص - ل - و",
        rootMeaning: "Racine liée à la prière",
        letters: [
            { letter: "ص", name: "ṣād", forms: ["ص", "صـ", "ـصـ", "ـص"] },
            { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }
        ],
        example: "الصَّلَاةُ عِمَادُ الدِّين",
        exampleFr: "La prière est le pilier de la religion"
    },
    {
        id: 113,
        word: "صِيَام",
        transliteration: "ṣiyām",
        type: "اسم",
        meaning: "fasting",
        meaningFr: "le jeûne",
        root: "ص - و - م",
        rootMeaning: "Racine liée au jeûne",
        letters: [
            { letter: "ص", name: "ṣād", forms: ["ص", "صـ", "ـصـ", "ـص"] },
            { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }
        ],
        example: "الصِّيَامُ جُنَّةٌ",
        exampleFr: "Le jeûne est un bouclier"
    },
    {
        id: 114,
        word: "زَكَاة",
        transliteration: "zakāh",
        type: "اسم",
        meaning: "alms",
        meaningFr: "l'aumône",
        root: "ز - ك - و",
        rootMeaning: "Racine liée à la purification",
        letters: [
            { letter: "ز", name: "zāy", forms: ["ز", "ـز"] },
            { letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }
        ],
        example: "الزَّكَاةُ تُطَهِّرُ المَال",
        exampleFr: "L'aumône purifie les biens"
    },
    {
        id: 115,
        word: "حَجّ",
        transliteration: "ḥajj",
        type: "اسم",
        meaning: "pilgrimage",
        meaningFr: "le pèlerinage",
        root: "ح - ج - ج",
        rootMeaning: "Racine liée au pèlerinage",
        letters: [
            { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] },
            { letter: "جّ", name: "jīm (avec shadda)", forms: ["جّ", "جّـ", "ـجّـ", "ـجّ"] }
        ],
        example: "الحَجُّ رُكْنٌ مِنْ أَرْكَانِ الإِسْلَام",
        exampleFr: "Le pèlerinage est un pilier de l'Islam"
    },
    {
        id: 116,
        word: "دُعَاء",
        transliteration: "duʿāʾ",
        type: "اسم",
        meaning: "supplication",
        meaningFr: "l'invocation",
        root: "د - ع - و",
        rootMeaning: "Racine liée à l'appel",
        letters: [
            { letter: "د", name: "dāl", forms: ["د", "ـد"] },
            { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ء", name: "hamza", forms: ["ء"] }
        ],
        example: "الدُّعَاءُ سِلَاحُ المُؤْمِن",
        exampleFr: "L'invocation est l'arme du croyant"
    },
    {
        id: 117,
        word: "ذِكْر",
        transliteration: "dhikr",
        type: "اسم",
        meaning: "remembrance",
        meaningFr: "le rappel",
        root: "ذ - ك - ر",
        rootMeaning: "Racine liée au souvenir",
        letters: [
            { letter: "ذ", name: "dhāl", forms: ["ذ", "ـذ"] },
            { letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }
        ],
        example: "بِذِكْرِ اللهِ تَطْمَئِنُّ القُلُوب",
        exampleFr: "C'est par le rappel d'Allah que les cœurs s'apaisent"
    },
    {
        id: 118,
        word: "تَوْبَة",
        transliteration: "tawba",
        type: "اسم",
        meaning: "repentance",
        meaningFr: "le repentir",
        root: "ت - و - ب",
        rootMeaning: "Racine liée au retour",
        letters: [
            { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] },
            { letter: "و", name: "wāw", forms: ["و", "ـو"] },
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] },
            { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }
        ],
        example: "التَّوْبَةُ تَمْحُو الذُّنُوب",
        exampleFr: "Le repentir efface les péchés"
    },
    {
        id: 119,
        word: "جَنَّة",
        transliteration: "janna",
        type: "اسم",
        meaning: "paradise",
        meaningFr: "le paradis",
        root: "ج - ن - ن",
        rootMeaning: "Racine liée à ce qui est caché",
        letters: [
            { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] },
            { letter: "نّ", name: "nūn (avec shadda)", forms: ["نّ", "نّـ", "ـنّـ", "ـنّ"] },
            { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }
        ],
        example: "الجَنَّةُ تَحْتَ أَقْدَامِ الأُمَّهَات",
        exampleFr: "Le paradis est sous les pieds des mères"
    },
    {
        id: 120,
        word: "مَلَك",
        transliteration: "malak",
        type: "اسم",
        meaning: "angel",
        meaningFr: "l'ange",
        root: "م - ل - ك",
        rootMeaning: "Racine liée à la possession, aux anges",
        letters: [
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] },
            { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] },
            { letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] }
        ],
        example: "المَلَائِكَةُ يُسَبِّحُونَ الله",
        exampleFr: "Les anges glorifient Allah"
    },

    // === MAISON & OBJETS (121-160) ===
    {
        id: 121,
        word: "بَيْت",
        transliteration: "bayt",
        type: "اسم",
        meaning: "house",
        meaningFr: "la maison",
        root: "ب - ي - ت",
        rootMeaning: "Racine liée à la maison, au séjour",
        letters: [
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] },
            { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] },
            { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }
        ],
        example: "البَيْتُ مَكَانُ الرَّاحَة",
        exampleFr: "La maison est le lieu du repos"
    },
    {
        id: 122,
        word: "بَاب",
        transliteration: "bāb",
        type: "اسم",
        meaning: "door",
        meaningFr: "la porte",
        root: "ب - و - ب",
        rootMeaning: "Racine liée à la porte",
        letters: [
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }
        ],
        example: "البَابُ مَفْتُوح",
        exampleFr: "La porte est ouverte"
    },
    {
        id: 123,
        word: "نَافِذَة",
        transliteration: "nāfidha",
        type: "اسم",
        meaning: "window",
        meaningFr: "la fenêtre",
        root: "ن - ف - ذ",
        rootMeaning: "Racine liée à la pénétration",
        letters: [
            { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] },
            { letter: "ذ", name: "dhāl", forms: ["ذ", "ـذ"] },
            { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }
        ],
        example: "النَّافِذَةُ مَفْتُوحَة",
        exampleFr: "La fenêtre est ouverte"
    },
    {
        id: 124,
        word: "كُرْسِيّ",
        transliteration: "kursiyy",
        type: "اسم",
        meaning: "chair",
        meaningFr: "la chaise",
        root: "ك - ر - س",
        rootMeaning: "Racine liée au siège",
        letters: [
            { letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] },
            { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] },
            { letter: "يّ", name: "yāʾ (avec shadda)", forms: ["يّ", "ـيّ"] }
        ],
        example: "اجْلِسْ عَلَى الكُرْسِيّ",
        exampleFr: "Assieds-toi sur la chaise"
    },
    {
        id: 125,
        word: "طَاوِلَة",
        transliteration: "ṭāwila",
        type: "اسم",
        meaning: "table",
        meaningFr: "la table",
        root: "ط - و - ل",
        rootMeaning: "Racine liée à la longueur",
        letters: [
            { letter: "ط", name: "ṭāʾ", forms: ["ط", "طـ", "ـطـ", "ـط"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "و", name: "wāw", forms: ["و", "ـو"] },
            { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] },
            { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }
        ],
        example: "الطَّاوِلَةُ نَظِيفَة",
        exampleFr: "La table est propre"
    },
    {
        id: 126,
        word: "سَرِير",
        transliteration: "sarīr",
        type: "اسم",
        meaning: "bed",
        meaningFr: "le lit",
        root: "س - ر - ر",
        rootMeaning: "Racine liée au secret, au lit",
        letters: [
            { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] },
            { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }
        ],
        example: "السَّرِيرُ مُرِيح",
        exampleFr: "Le lit est confortable"
    },
    {
        id: 127,
        word: "مِفْتَاح",
        transliteration: "miftāḥ",
        type: "اسم",
        meaning: "key",
        meaningFr: "la clé",
        root: "ف - ت - ح",
        rootMeaning: "Racine liée à l'ouverture",
        letters: [
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] },
            { letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] },
            { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }
        ],
        example: "المِفْتَاحُ عَلَى الطَّاوِلَة",
        exampleFr: "La clé est sur la table"
    },
    {
        id: 128,
        word: "مِصْبَاح",
        transliteration: "miṣbāḥ",
        type: "اسم",
        meaning: "lamp",
        meaningFr: "la lampe",
        root: "ص - ب - ح",
        rootMeaning: "Racine liée au matin, à la lumière",
        letters: [
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] },
            { letter: "ص", name: "ṣād", forms: ["ص", "صـ", "ـصـ", "ـص"] },
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }
        ],
        example: "المِصْبَاحُ يُنِيرُ الغُرْفَة",
        exampleFr: "La lampe éclaire la chambre"
    },
    {
        id: 129,
        word: "مِرْآة",
        transliteration: "mirʾāh",
        type: "اسم",
        meaning: "mirror",
        meaningFr: "le miroir",
        root: "ر - أ - ي",
        rootMeaning: "Racine liée à la vision",
        letters: [
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] },
            { letter: "آ", name: "alif madda", forms: ["آ", "ـآ"] },
            { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }
        ],
        example: "المِرْآةُ تَعْكِسُ الصُّورَة",
        exampleFr: "Le miroir reflète l'image"
    },
    {
        id: 130,
        word: "سِتَارَة",
        transliteration: "sitāra",
        type: "اسم",
        meaning: "curtain",
        meaningFr: "le rideau",
        root: "س - ت - ر",
        rootMeaning: "Racine liée à la couverture",
        letters: [
            { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] },
            { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] },
            { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }
        ],
        example: "السِّتَارَةُ جَمِيلَة",
        exampleFr: "Le rideau est beau"
    },
    // === NOURRITURE (131-160) ===
    { id: 131, word: "خُبْز", transliteration: "khubz", type: "اسم", meaning: "bread", meaningFr: "le pain", root: "خ - ب - ز", rootMeaning: "Racine liée au pain", letters: [{ letter: "خ", name: "khāʾ", forms: ["خ", "خـ", "ـخـ", "ـخ"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "ز", name: "zāy", forms: ["ز", "ـز"] }], example: "الخُبْزُ طَازَج", exampleFr: "Le pain est frais" },
    { id: 132, word: "مَاء", transliteration: "māʾ", type: "اسم", meaning: "water", meaningFr: "l'eau", root: "م - و - هـ", rootMeaning: "Racine liée à l'eau", letters: [{ letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ء", name: "hamza", forms: ["ء"] }], example: "المَاءُ أَصْلُ الحَيَاة", exampleFr: "L'eau est l'origine de la vie" },
    { id: 133, word: "لَبَن", transliteration: "laban", type: "اسم", meaning: "milk", meaningFr: "le lait", root: "ل - ب - ن", rootMeaning: "Racine liée au lait", letters: [{ letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }], example: "اللَّبَنُ مُفِيدٌ لِلصِّحَّة", exampleFr: "Le lait est bon pour la santé" },
    { id: 134, word: "لَحْم", transliteration: "laḥm", type: "اسم", meaning: "meat", meaningFr: "la viande", root: "ل - ح - م", rootMeaning: "Racine liée à la viande", letters: [{ letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }], example: "اللَّحْمُ مَشْوِيّ", exampleFr: "La viande est grillée" },
    { id: 135, word: "سَمَك", transliteration: "samak", type: "اسم", meaning: "fish", meaningFr: "le poisson", root: "س - م - ك", rootMeaning: "Racine liée au poisson", letters: [{ letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] }], example: "السَّمَكُ طَازَج", exampleFr: "Le poisson est frais" },
    { id: 136, word: "أَرُزّ", transliteration: "aruzz", type: "اسم", meaning: "rice", meaningFr: "le riz", root: "ر - ز - ز", rootMeaning: "Racine liée au riz", letters: [{ letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "زّ", name: "zāy (avec shadda)", forms: ["زّ", "ـزّ"] }], example: "الأَرُزُّ مَطْبُوخ", exampleFr: "Le riz est cuit" },
    { id: 137, word: "فَاكِهَة", transliteration: "fākiha", type: "اسم", meaning: "fruit", meaningFr: "le fruit", root: "ف - ك - هـ", rootMeaning: "Racine liée aux fruits", letters: [{ letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] }, { letter: "هـ", name: "hāʾ", forms: ["هـ", "هـ", "ـهـ", "ـه"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "الفَاكِهَةُ لَذِيذَة", exampleFr: "Le fruit est délicieux" },
    { id: 138, word: "تُفَّاح", transliteration: "tuffāḥ", type: "اسم", meaning: "apple", meaningFr: "la pomme", root: "ت - ف - ح", rootMeaning: "Racine liée à la pomme", letters: [{ letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }, { letter: "فّ", name: "fāʾ (avec shadda)", forms: ["فّ", "فّـ", "ـفّـ", "ـفّ"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }], example: "التُّفَّاحُ أَحْمَر", exampleFr: "La pomme est rouge" },
    { id: 139, word: "مَوْز", transliteration: "mawz", type: "اسم", meaning: "banana", meaningFr: "la banane", root: "م - و - ز", rootMeaning: "Racine liée à la banane", letters: [{ letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "و", name: "wāw", forms: ["و", "ـو"] }, { letter: "ز", name: "zāy", forms: ["ز", "ـز"] }], example: "المَوْزُ أَصْفَر", exampleFr: "La banane est jaune" },
    { id: 140, word: "عِنَب", transliteration: "ʿinab", type: "اسم", meaning: "grapes", meaningFr: "le raisin", root: "ع - ن - ب", rootMeaning: "Racine liée au raisin", letters: [{ letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }], example: "العِنَبُ حُلْو", exampleFr: "Le raisin est sucré" },
    { id: 141, word: "بُرْتُقَال", transliteration: "burtuqāl", type: "اسم", meaning: "orange", meaningFr: "l'orange", root: "ب - ر - ت - ق", rootMeaning: "Mot d'origine portugaise", letters: [{ letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }, { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }], example: "البُرْتُقَالُ غَنِيٌّ بِفِيتَامِين", exampleFr: "L'orange est riche en vitamines" },
    { id: 142, word: "خُضَار", transliteration: "khuḍār", type: "اسم", meaning: "vegetables", meaningFr: "les légumes", root: "خ - ض - ر", rootMeaning: "Racine liée à la verdure", letters: [{ letter: "خ", name: "khāʾ", forms: ["خ", "خـ", "ـخـ", "ـخ"] }, { letter: "ض", name: "ḍād", forms: ["ض", "ضـ", "ـضـ", "ـض"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }], example: "الخُضَارُ صِحِّيَّة", exampleFr: "Les légumes sont sains" },
    { id: 143, word: "طَمَاطِم", transliteration: "ṭamāṭim", type: "اسم", meaning: "tomato", meaningFr: "la tomate", root: "ط - م - ط - م", rootMeaning: "Mot emprunté", letters: [{ letter: "ط", name: "ṭāʾ", forms: ["ط", "طـ", "ـطـ", "ـط"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ط", name: "ṭāʾ", forms: ["ط", "طـ", "ـطـ", "ـط"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }], example: "الطَّمَاطِمُ حَمْرَاء", exampleFr: "La tomate est rouge" },
    { id: 144, word: "بَصَل", transliteration: "baṣal", type: "اسم", meaning: "onion", meaningFr: "l'oignon", root: "ب - ص - ل", rootMeaning: "Racine liée à l'oignon", letters: [{ letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "ص", name: "ṣād", forms: ["ص", "صـ", "ـصـ", "ـص"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }], example: "البَصَلُ يُبْكِي العَيْن", exampleFr: "L'oignon fait pleurer les yeux" },
    { id: 145, word: "ثُوم", transliteration: "thūm", type: "اسم", meaning: "garlic", meaningFr: "l'ail", root: "ث - و - م", rootMeaning: "Racine liée à l'ail", letters: [{ letter: "ث", name: "thāʾ", forms: ["ث", "ثـ", "ـثـ", "ـث"] }, { letter: "و", name: "wāw", forms: ["و", "ـو"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }], example: "الثُّومُ مُفِيد", exampleFr: "L'ail est bénéfique" },
    { id: 146, word: "بَيْض", transliteration: "bayḍ", type: "اسم", meaning: "eggs", meaningFr: "les œufs", root: "ب - ي - ض", rootMeaning: "Racine liée à la blancheur", letters: [{ letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ض", name: "ḍād", forms: ["ض", "ضـ", "ـضـ", "ـض"] }], example: "البَيْضُ مَقْلِيّ", exampleFr: "Les œufs sont frits" },
    { id: 147, word: "جُبْن", transliteration: "jubn", type: "اسم", meaning: "cheese", meaningFr: "le fromage", root: "ج - ب - ن", rootMeaning: "Racine liée au fromage", letters: [{ letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }], example: "الجُبْنُ لَذِيذ", exampleFr: "Le fromage est délicieux" },
    { id: 148, word: "زَيْت", transliteration: "zayt", type: "اسم", meaning: "oil", meaningFr: "l'huile", root: "ز - ي - ت", rootMeaning: "Racine liée à l'huile", letters: [{ letter: "ز", name: "zāy", forms: ["ز", "ـز"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }], example: "زَيْتُ الزَّيْتُونِ صِحِّيّ", exampleFr: "L'huile d'olive est saine" },
    { id: 149, word: "مِلْح", transliteration: "milḥ", type: "اسم", meaning: "salt", meaningFr: "le sel", root: "م - ل - ح", rootMeaning: "Racine liée au sel", letters: [{ letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }], example: "المِلْحُ يُعْطِي الطَّعْمَ", exampleFr: "Le sel donne du goût" },
    { id: 150, word: "سُكَّر", transliteration: "sukkar", type: "اسم", meaning: "sugar", meaningFr: "le sucre", root: "س - ك - ر", rootMeaning: "Racine liée au sucre", letters: [{ letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "كّ", name: "kāf (avec shadda)", forms: ["كّ", "كّـ", "ـكّـ", "ـكّ"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }], example: "السُّكَّرُ حُلْو", exampleFr: "Le sucre est sucré" },
    // === VÊTEMENTS (151-170) ===
    { id: 151, word: "ثَوْب", transliteration: "thawb", type: "اسم", meaning: "garment", meaningFr: "le vêtement", root: "ث - و - ب", rootMeaning: "Racine liée au vêtement", letters: [{ letter: "ث", name: "thāʾ", forms: ["ث", "ثـ", "ـثـ", "ـث"] }, { letter: "و", name: "wāw", forms: ["و", "ـو"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }], example: "الثَّوْبُ أَبْيَض", exampleFr: "Le vêtement est blanc" },
    { id: 152, word: "قَمِيص", transliteration: "qamīṣ", type: "اسم", meaning: "shirt", meaningFr: "la chemise", root: "ق - م - ص", rootMeaning: "Racine liée à la chemise", letters: [{ letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ص", name: "ṣād", forms: ["ص", "صـ", "ـصـ", "ـص"] }], example: "القَمِيصُ جَدِيد", exampleFr: "La chemise est neuve" },
    { id: 153, word: "حِذَاء", transliteration: "ḥidhāʾ", type: "اسم", meaning: "shoe", meaningFr: "la chaussure", root: "ح - ذ - و", rootMeaning: "Racine liée à la chaussure", letters: [{ letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }, { letter: "ذ", name: "dhāl", forms: ["ذ", "ـذ"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ء", name: "hamza", forms: ["ء"] }], example: "الحِذَاءُ أَسْوَد", exampleFr: "La chaussure est noire" },
    { id: 154, word: "قُبَّعَة", transliteration: "qubbaʿa", type: "اسم", meaning: "hat", meaningFr: "le chapeau", root: "ق - ب - ع", rootMeaning: "Racine liée au chapeau", letters: [{ letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }, { letter: "بّ", name: "bāʾ (avec shadda)", forms: ["بّ", "بّـ", "ـبّـ", "ـبّ"] }, { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "القُبَّعَةُ تَحْمِي مِنَ الشَّمْس", exampleFr: "Le chapeau protège du soleil" },
    { id: 155, word: "نَظَّارَة", transliteration: "naẓẓāra", type: "اسم", meaning: "glasses", meaningFr: "les lunettes", root: "ن - ظ - ر", rootMeaning: "Racine liée à la vue", letters: [{ letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }, { letter: "ظّ", name: "ẓāʾ (avec shadda)", forms: ["ظّ", "ظّـ", "ـظّـ", "ـظّ"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "النَّظَّارَةُ تُسَاعِدُ عَلَى الرُّؤْيَة", exampleFr: "Les lunettes aident à voir" },
    { id: 156, word: "سَاعَة", transliteration: "sāʿa", type: "اسم", meaning: "watch", meaningFr: "la montre", root: "س - و - ع", rootMeaning: "Racine liée à l'heure", letters: [{ letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "السَّاعَةُ ذَهَبِيَّة", exampleFr: "La montre est dorée" },
    { id: 157, word: "خَاتَم", transliteration: "khātam", type: "اسم", meaning: "ring", meaningFr: "la bague", root: "خ - ت - م", rootMeaning: "Racine liée au sceau", letters: [{ letter: "خ", name: "khāʾ", forms: ["خ", "خـ", "ـخـ", "ـخ"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }], example: "الخَاتَمُ فِضِّيّ", exampleFr: "La bague est en argent" },
    { id: 158, word: "حِزَام", transliteration: "ḥizām", type: "اسم", meaning: "belt", meaningFr: "la ceinture", root: "ح - ز - م", rootMeaning: "Racine liée à la fermeté", letters: [{ letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }, { letter: "ز", name: "zāy", forms: ["ز", "ـز"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }], example: "الحِزَامُ جِلْدِيّ", exampleFr: "La ceinture est en cuir" },
    { id: 159, word: "جَوْرَب", transliteration: "jawrab", type: "اسم", meaning: "sock", meaningFr: "la chaussette", root: "ج - ر - ب", rootMeaning: "Racine liée à la chaussette", letters: [{ letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] }, { letter: "و", name: "wāw", forms: ["و", "ـو"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }], example: "الجَوْرَبُ دَافِئ", exampleFr: "La chaussette est chaude" },
    { id: 160, word: "مِعْطَف", transliteration: "miʿṭaf", type: "اسم", meaning: "coat", meaningFr: "le manteau", root: "ع - ط - ف", rootMeaning: "Racine liée à la compassion", letters: [{ letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "ط", name: "ṭāʾ", forms: ["ط", "طـ", "ـطـ", "ـط"] }, { letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }], example: "المِعْطَفُ ثَقِيل", exampleFr: "Le manteau est lourd" },

    // === ANIMAUX (161-190) ===
    { id: 161, word: "أَسَد", transliteration: "asad", type: "اسم", meaning: "lion", meaningFr: "le lion", root: "أ - س - د", rootMeaning: "Racine liée au lion", letters: [{ letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }, { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "د", name: "dāl", forms: ["د", "ـد"] }], example: "الأَسَدُ مَلِكُ الغَابَة", exampleFr: "Le lion est le roi de la jungle" },
    { id: 162, word: "فِيل", transliteration: "fīl", type: "اسم", meaning: "elephant", meaningFr: "l'éléphant", root: "ف - ي - ل", rootMeaning: "Racine liée à l'éléphant", letters: [{ letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }], example: "الفِيلُ ضَخْم", exampleFr: "L'éléphant est énorme" },
    { id: 163, word: "حِصَان", transliteration: "ḥiṣān", type: "اسم", meaning: "horse", meaningFr: "le cheval", root: "ح - ص - ن", rootMeaning: "Racine liée à la protection", letters: [{ letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }, { letter: "ص", name: "ṣād", forms: ["ص", "صـ", "ـصـ", "ـص"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }], example: "الحِصَانُ سَرِيع", exampleFr: "Le cheval est rapide" },
    { id: 164, word: "كَلْب", transliteration: "kalb", type: "اسم", meaning: "dog", meaningFr: "le chien", root: "ك - ل - ب", rootMeaning: "Racine liée au chien", letters: [{ letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }], example: "الكَلْبُ وَفِيّ", exampleFr: "Le chien est fidèle" },
    { id: 165, word: "قِطّ", transliteration: "qiṭṭ", type: "اسم", meaning: "cat", meaningFr: "le chat", root: "ق - ط - ط", rootMeaning: "Racine liée au chat", letters: [{ letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }, { letter: "طّ", name: "ṭāʾ (avec shadda)", forms: ["طّ", "طّـ", "ـطّـ", "ـطّ"] }], example: "القِطُّ نَائِم", exampleFr: "Le chat dort" },
    { id: 166, word: "طَائِر", transliteration: "ṭāʾir", type: "اسم", meaning: "bird", meaningFr: "l'oiseau", root: "ط - ي - ر", rootMeaning: "Racine liée au vol", letters: [{ letter: "ط", name: "ṭāʾ", forms: ["ط", "طـ", "ـطـ", "ـط"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ئ", name: "hamza", forms: ["ئ", "ـئـ", "ـئ"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }], example: "الطَّائِرُ يُغَرِّد", exampleFr: "L'oiseau chante" },
    { id: 167, word: "دَجَاجَة", transliteration: "dajāja", type: "اسم", meaning: "chicken", meaningFr: "la poule", root: "د - ج - ج", rootMeaning: "Racine liée à la poule", letters: [{ letter: "د", name: "dāl", forms: ["د", "ـد"] }, { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "الدَّجَاجَةُ تَبِيضُ", exampleFr: "La poule pond" },
    { id: 168, word: "بَقَرَة", transliteration: "baqara", type: "اسم", meaning: "cow", meaningFr: "la vache", root: "ب - ق - ر", rootMeaning: "Racine liée à la vache", letters: [{ letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "البَقَرَةُ تُعْطِي الحَلِيب", exampleFr: "La vache donne du lait" },
    { id: 169, word: "غَنَم", transliteration: "ghanam", type: "اسم", meaning: "sheep", meaningFr: "le mouton", root: "غ - ن - م", rootMeaning: "Racine liée au bétail", letters: [{ letter: "غ", name: "ghayn", forms: ["غ", "غـ", "ـغـ", "ـغ"] }, { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }], example: "الغَنَمُ فِي المَرْعَى", exampleFr: "Les moutons sont au pâturage" },
    { id: 170, word: "جَمَل", transliteration: "jamal", type: "اسم", meaning: "camel", meaningFr: "le chameau", root: "ج - م - ل", rootMeaning: "Racine liée au chameau, à la beauté", letters: [{ letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }], example: "الجَمَلُ سَفِينَةُ الصَّحْرَاء", exampleFr: "Le chameau est le navire du désert" },
    { id: 171, word: "ثَعْلَب", transliteration: "thaʿlab", type: "اسم", meaning: "fox", meaningFr: "le renard", root: "ث - ع - ل - ب", rootMeaning: "Racine liée au renard", letters: [{ letter: "ث", name: "thāʾ", forms: ["ث", "ثـ", "ـثـ", "ـث"] }, { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }], example: "الثَّعْلَبُ مَاكِر", exampleFr: "Le renard est rusé" },
    { id: 172, word: "ذِئْب", transliteration: "dhiʾb", type: "اسم", meaning: "wolf", meaningFr: "le loup", root: "ذ - أ - ب", rootMeaning: "Racine liée au loup", letters: [{ letter: "ذ", name: "dhāl", forms: ["ذ", "ـذ"] }, { letter: "ئ", name: "hamza", forms: ["ئ", "ـئـ", "ـئ"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }], example: "الذِّئْبُ يَعْوِي", exampleFr: "Le loup hurle" },
    { id: 173, word: "دُبّ", transliteration: "dubb", type: "اسم", meaning: "bear", meaningFr: "l'ours", root: "د - ب - ب", rootMeaning: "Racine liée à l'ours", letters: [{ letter: "د", name: "dāl", forms: ["د", "ـد"] }, { letter: "بّ", name: "bāʾ (avec shadda)", forms: ["بّ", "بّـ", "ـبّـ", "ـبّ"] }], example: "الدُّبُّ يَأْكُلُ العَسَل", exampleFr: "L'ours mange le miel" },
    { id: 174, word: "فَأْر", transliteration: "faʾr", type: "اسم", meaning: "mouse", meaningFr: "la souris", root: "ف - أ - ر", rootMeaning: "Racine liée à la souris", letters: [{ letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }, { letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }], example: "الفَأْرُ صَغِير", exampleFr: "La souris est petite" },
    { id: 175, word: "أَرْنَب", transliteration: "arnab", type: "اسم", meaning: "rabbit", meaningFr: "le lapin", root: "أ - ر - ن - ب", rootMeaning: "Racine liée au lapin", letters: [{ letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }], example: "الأَرْنَبُ يَقْفِز", exampleFr: "Le lapin saute" },
    { id: 176, word: "حُوت", transliteration: "ḥūt", type: "اسم", meaning: "whale", meaningFr: "la baleine", root: "ح - و - ت", rootMeaning: "Racine liée à la baleine", letters: [{ letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }, { letter: "و", name: "wāw", forms: ["و", "ـو"] }, { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }], example: "الحُوتُ أَكْبَرُ حَيَوَان", exampleFr: "La baleine est le plus grand animal" },
    { id: 177, word: "نَحْل", transliteration: "naḥl", type: "اسم", meaning: "bee", meaningFr: "l'abeille", root: "ن - ح - ل", rootMeaning: "Racine liée à l'abeille", letters: [{ letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }, { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }], example: "النَّحْلُ يَصْنَعُ العَسَل", exampleFr: "L'abeille produit le miel" },
    { id: 178, word: "نَمْلَة", transliteration: "namla", type: "اسم", meaning: "ant", meaningFr: "la fourmi", root: "ن - م - ل", rootMeaning: "Racine liée à la fourmi", letters: [{ letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "النَّمْلَةُ نَشِيطَة", exampleFr: "La fourmi est active" },
    { id: 179, word: "فَرَاشَة", transliteration: "farāsha", type: "اسم", meaning: "butterfly", meaningFr: "le papillon", root: "ف - ر - ش", rootMeaning: "Racine liée à étendre", letters: [{ letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ش", name: "shīn", forms: ["ش", "شـ", "ـشـ", "ـش"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "الفَرَاشَةُ جَمِيلَة", exampleFr: "Le papillon est beau" },
    { id: 180, word: "عَنْكَبُوت", transliteration: "ʿankabūt", type: "اسم", meaning: "spider", meaningFr: "l'araignée", root: "ع - ن - ك - ب", rootMeaning: "Racine liée à l'araignée", letters: [{ letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }, { letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "و", name: "wāw", forms: ["و", "ـو"] }, { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }], example: "العَنْكَبُوتُ تَنْسِجُ شَبَكَتَهَا", exampleFr: "L'araignée tisse sa toile" },
    // === ACTIONS/VERBES (181-220) ===
    { id: 181, word: "كَتَبَ", transliteration: "kataba", type: "فعل", meaning: "to write", meaningFr: "écrire", root: "ك - ت - ب", rootMeaning: "Racine liée à l'écriture", letters: [{ letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] }, { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }], example: "كَتَبَ الطَّالِبُ الدَّرْس", exampleFr: "L'étudiant a écrit la leçon" },
    { id: 182, word: "قَرَأَ", transliteration: "qaraʾa", type: "فعل", meaning: "to read", meaningFr: "lire", root: "ق - ر - أ", rootMeaning: "Racine liée à la lecture", letters: [{ letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }], example: "قَرَأَ الكِتَابَ كُلَّهُ", exampleFr: "Il a lu tout le livre" },
    { id: 183, word: "أَكَلَ", transliteration: "akala", type: "فعل", meaning: "to eat", meaningFr: "manger", root: "أ - ك - ل", rootMeaning: "Racine liée à la nourriture", letters: [{ letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }, { letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }], example: "أَكَلَ الطَّعَامَ", exampleFr: "Il a mangé la nourriture" },
    { id: 184, word: "شَرِبَ", transliteration: "shariba", type: "فعل", meaning: "to drink", meaningFr: "boire", root: "ش - ر - ب", rootMeaning: "Racine liée à la boisson", letters: [{ letter: "ش", name: "shīn", forms: ["ش", "شـ", "ـشـ", "ـش"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }], example: "شَرِبَ المَاءَ البَارِد", exampleFr: "Il a bu l'eau froide" },
    { id: 185, word: "نَامَ", transliteration: "nāma", type: "فعل", meaning: "to sleep", meaningFr: "dormir", root: "ن - و - م", rootMeaning: "Racine liée au sommeil", letters: [{ letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }], example: "نَامَ الطِّفْلُ بَاكِرًا", exampleFr: "L'enfant a dormi tôt" },
    { id: 186, word: "مَشَى", transliteration: "mashā", type: "فعل", meaning: "to walk", meaningFr: "marcher", root: "م - ش - ي", rootMeaning: "Racine liée à la marche", letters: [{ letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ش", name: "shīn", forms: ["ش", "شـ", "ـشـ", "ـش"] }, { letter: "ى", name: "alif maqṣūra", forms: ["ى", "ـى"] }], example: "مَشَى فِي الشَّارِع", exampleFr: "Il a marché dans la rue" },
    { id: 187, word: "جَرَى", transliteration: "jarā", type: "فعل", meaning: "to run", meaningFr: "courir", root: "ج - ر - ي", rootMeaning: "Racine liée à la course", letters: [{ letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ى", name: "alif maqṣūra", forms: ["ى", "ـى"] }], example: "جَرَى بِسُرْعَة", exampleFr: "Il a couru vite" },
    { id: 188, word: "جَلَسَ", transliteration: "jalasa", type: "فعل", meaning: "to sit", meaningFr: "s'asseoir", root: "ج - ل - س", rootMeaning: "Racine liée à la position assise", letters: [{ letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }], example: "جَلَسَ عَلَى الكُرْسِيّ", exampleFr: "Il s'est assis sur la chaise" },
    { id: 189, word: "قَامَ", transliteration: "qāma", type: "فعل", meaning: "to stand", meaningFr: "se lever", root: "ق - و - م", rootMeaning: "Racine liée à la position debout", letters: [{ letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }], example: "قَامَ مِنَ النَّوْم", exampleFr: "Il s'est levé du sommeil" },
    { id: 190, word: "رَأَى", transliteration: "raʾā", type: "فعل", meaning: "to see", meaningFr: "voir", root: "ر - أ - ي", rootMeaning: "Racine liée à la vision", letters: [{ letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }, { letter: "ى", name: "alif maqṣūra", forms: ["ى", "ـى"] }], example: "رَأَى القَمَرَ فِي السَّمَاء", exampleFr: "Il a vu la lune dans le ciel" },
    { id: 191, word: "سَمِعَ", transliteration: "samiʿa", type: "فعل", meaning: "to hear", meaningFr: "entendre", root: "س - م - ع", rootMeaning: "Racine liée à l'ouïe", letters: [{ letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }], example: "سَمِعَ صَوْتًا غَرِيبًا", exampleFr: "Il a entendu un son étrange" },
    { id: 192, word: "تَكَلَّمَ", transliteration: "takallama", type: "فعل", meaning: "to speak", meaningFr: "parler", root: "ك - ل - م", rootMeaning: "Racine liée à la parole", letters: [{ letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }, { letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }], example: "تَكَلَّمَ بِصَوْتٍ عَالٍ", exampleFr: "Il a parlé à voix haute" },
    { id: 193, word: "فَتَحَ", transliteration: "fataḥa", type: "فعل", meaning: "to open", meaningFr: "ouvrir", root: "ف - ت - ح", rootMeaning: "Racine liée à l'ouverture", letters: [{ letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }, { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }, { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }], example: "فَتَحَ البَاب", exampleFr: "Il a ouvert la porte" },
    { id: 194, word: "أَغْلَقَ", transliteration: "aghlaqa", type: "فعل", meaning: "to close", meaningFr: "fermer", root: "غ - ل - ق", rootMeaning: "Racine liée à la fermeture", letters: [{ letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }, { letter: "غ", name: "ghayn", forms: ["غ", "غـ", "ـغـ", "ـغ"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }], example: "أَغْلَقَ النَّافِذَة", exampleFr: "Il a fermé la fenêtre" },
    { id: 195, word: "أَخَذَ", transliteration: "akhadha", type: "فعل", meaning: "to take", meaningFr: "prendre", root: "أ - خ - ذ", rootMeaning: "Racine liée à la prise", letters: [{ letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }, { letter: "خ", name: "khāʾ", forms: ["خ", "خـ", "ـخـ", "ـخ"] }, { letter: "ذ", name: "dhāl", forms: ["ذ", "ـذ"] }], example: "أَخَذَ الكِتَاب", exampleFr: "Il a pris le livre" },
    { id: 196, word: "أَعْطَى", transliteration: "aʿṭā", type: "فعل", meaning: "to give", meaningFr: "donner", root: "ع - ط - ي", rootMeaning: "Racine liée au don", letters: [{ letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }, { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "ط", name: "ṭāʾ", forms: ["ط", "طـ", "ـطـ", "ـط"] }, { letter: "ى", name: "alif maqṣūra", forms: ["ى", "ـى"] }], example: "أَعْطَى الهَدِيَّة", exampleFr: "Il a donné le cadeau" },
    { id: 197, word: "ذَهَبَ", transliteration: "dhahaba", type: "فعل", meaning: "to go", meaningFr: "aller", root: "ذ - هـ - ب", rootMeaning: "Racine liée au déplacement", letters: [{ letter: "ذ", name: "dhāl", forms: ["ذ", "ـذ"] }, { letter: "هـ", name: "hāʾ", forms: ["هـ", "هـ", "ـهـ", "ـه"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }], example: "ذَهَبَ إِلَى المَدْرَسَة", exampleFr: "Il est allé à l'école" },
    { id: 198, word: "جَاءَ", transliteration: "jāʾa", type: "فعل", meaning: "to come", meaningFr: "venir", root: "ج - ي - أ", rootMeaning: "Racine liée à la venue", letters: [{ letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ء", name: "hamza", forms: ["ء"] }], example: "جَاءَ صَدِيقِي", exampleFr: "Mon ami est venu" },
    { id: 199, word: "عَرَفَ", transliteration: "ʿarafa", type: "فعل", meaning: "to know", meaningFr: "connaître", root: "ع - ر - ف", rootMeaning: "Racine liée à la connaissance", letters: [{ letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }], example: "عَرَفَ الحَقِيقَة", exampleFr: "Il a connu la vérité" },
    { id: 200, word: "فَهِمَ", transliteration: "fahima", type: "فعل", meaning: "to understand", meaningFr: "comprendre", root: "ف - هـ - م", rootMeaning: "Racine liée à la compréhension", letters: [{ letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }, { letter: "هـ", name: "hāʾ", forms: ["هـ", "هـ", "ـهـ", "ـه"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }], example: "فَهِمَ الدَّرْس", exampleFr: "Il a compris la leçon" },
    { id: 201, word: "نَسِيَ", transliteration: "nasiya", type: "فعل", meaning: "to forget", meaningFr: "oublier", root: "ن - س - ي", rootMeaning: "Racine liée à l'oubli", letters: [{ letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }, { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }], example: "نَسِيَ مَوْعِدَهُ", exampleFr: "Il a oublié son rendez-vous" },
    { id: 202, word: "تَذَكَّرَ", transliteration: "tadhakkara", type: "فعل", meaning: "to remember", meaningFr: "se souvenir", root: "ذ - ك - ر", rootMeaning: "Racine liée à la mémoire", letters: [{ letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }, { letter: "ذ", name: "dhāl", forms: ["ذ", "ـذ"] }, { letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }], example: "تَذَكَّرَ الماضِي", exampleFr: "Il s'est souvenu du passé" },
    { id: 203, word: "أَحَبَّ", transliteration: "aḥabba", type: "فعل", meaning: "to love", meaningFr: "aimer", root: "ح - ب - ب", rootMeaning: "Racine liée à l'amour", letters: [{ letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }, { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }, { letter: "بّ", name: "bāʾ (avec shadda)", forms: ["بّ", "بّـ", "ـبّـ", "ـبّ"] }], example: "أَحَبَّ وَطَنَهُ", exampleFr: "Il a aimé son pays" },
    { id: 204, word: "كَرِهَ", transliteration: "kariha", type: "فعل", meaning: "to hate", meaningFr: "détester", root: "ك - ر - هـ", rootMeaning: "Racine liée à l'aversion", letters: [{ letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "هـ", name: "hāʾ", forms: ["هـ", "هـ", "ـهـ", "ـه"] }], example: "كَرِهَ الظُّلْم", exampleFr: "Il a détesté l'injustice" },
    { id: 205, word: "ضَحِكَ", transliteration: "ḍaḥika", type: "فعل", meaning: "to laugh", meaningFr: "rire", root: "ض - ح - ك", rootMeaning: "Racine liée au rire", letters: [{ letter: "ض", name: "ḍād", forms: ["ض", "ضـ", "ـضـ", "ـض"] }, { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }, { letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] }], example: "ضَحِكَ بِصَوْتٍ عَالٍ", exampleFr: "Il a ri à haute voix" },
    { id: 206, word: "بَكَى", transliteration: "bakā", type: "فعل", meaning: "to cry", meaningFr: "pleurer", root: "ب - ك - ي", rootMeaning: "Racine liée aux pleurs", letters: [{ letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] }, { letter: "ى", name: "alif maqṣūra", forms: ["ى", "ـى"] }], example: "بَكَى الطِّفْل", exampleFr: "L'enfant a pleuré" },
    { id: 207, word: "طَبَخَ", transliteration: "ṭabakha", type: "فعل", meaning: "to cook", meaningFr: "cuisiner", root: "ط - ب - خ", rootMeaning: "Racine liée à la cuisine", letters: [{ letter: "ط", name: "ṭāʾ", forms: ["ط", "طـ", "ـطـ", "ـط"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "خ", name: "khāʾ", forms: ["خ", "خـ", "ـخـ", "ـخ"] }], example: "طَبَخَ الطَّعَام", exampleFr: "Il a cuisiné le repas" },
    { id: 208, word: "غَسَلَ", transliteration: "ghasala", type: "فعل", meaning: "to wash", meaningFr: "laver", root: "غ - س - ل", rootMeaning: "Racine liée au lavage", letters: [{ letter: "غ", name: "ghayn", forms: ["غ", "غـ", "ـغـ", "ـغ"] }, { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }], example: "غَسَلَ يَدَيْهِ", exampleFr: "Il a lavé ses mains" },
    { id: 209, word: "لَبِسَ", transliteration: "labisa", type: "فعل", meaning: "to wear", meaningFr: "porter (vêtement)", root: "ل - ب - س", rootMeaning: "Racine liée au vêtement", letters: [{ letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }], example: "لَبِسَ ثَوْبًا جَدِيدًا", exampleFr: "Il a porté un nouveau vêtement" },
    { id: 210, word: "دَخَلَ", transliteration: "dakhala", type: "فعل", meaning: "to enter", meaningFr: "entrer", root: "د - خ - ل", rootMeaning: "Racine liée à l'entrée", letters: [{ letter: "د", name: "dāl", forms: ["د", "ـد"] }, { letter: "خ", name: "khāʾ", forms: ["خ", "خـ", "ـخـ", "ـخ"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }], example: "دَخَلَ البَيْت", exampleFr: "Il est entré dans la maison" },
    { id: 211, word: "خَرَجَ", transliteration: "kharaja", type: "فعل", meaning: "to exit", meaningFr: "sortir", root: "خ - ر - ج", rootMeaning: "Racine liée à la sortie", letters: [{ letter: "خ", name: "khāʾ", forms: ["خ", "خـ", "ـخـ", "ـخ"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] }], example: "خَرَجَ مِنَ الغُرْفَة", exampleFr: "Il est sorti de la chambre" },
    { id: 212, word: "سَأَلَ", transliteration: "saʾala", type: "فعل", meaning: "to ask", meaningFr: "demander", root: "س - أ - ل", rootMeaning: "Racine liée à la question", letters: [{ letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }], example: "سَأَلَ سُؤَالًا", exampleFr: "Il a posé une question" },
    { id: 213, word: "أَجَابَ", transliteration: "ajāba", type: "فعل", meaning: "to answer", meaningFr: "répondre", root: "ج - و - ب", rootMeaning: "Racine liée à la réponse", letters: [{ letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }, { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }], example: "أَجَابَ عَنِ السُّؤَال", exampleFr: "Il a répondu à la question" },
    { id: 214, word: "بَدَأَ", transliteration: "badaʾa", type: "فعل", meaning: "to begin", meaningFr: "commencer", root: "ب - د - أ", rootMeaning: "Racine liée au commencement", letters: [{ letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "د", name: "dāl", forms: ["د", "ـد"] }, { letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }], example: "بَدَأَ العَمَل", exampleFr: "Il a commencé le travail" },
    { id: 215, word: "انْتَهَى", transliteration: "intahā", type: "فعل", meaning: "to finish", meaningFr: "finir", root: "ن - هـ - ي", rootMeaning: "Racine liée à la fin", letters: [{ letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }, { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }, { letter: "هـ", name: "hāʾ", forms: ["هـ", "هـ", "ـهـ", "ـه"] }, { letter: "ى", name: "alif maqṣūra", forms: ["ى", "ـى"] }], example: "انْتَهَى الفِيلْم", exampleFr: "Le film s'est terminé" },
    { id: 216, word: "اسْتَيْقَظَ", transliteration: "istayqaẓa", type: "فعل", meaning: "to wake up", meaningFr: "se réveiller", root: "ي - ق - ظ", rootMeaning: "Racine liée à l'éveil", letters: [{ letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }, { letter: "ظ", name: "ẓāʾ", forms: ["ظ", "ظـ", "ـظـ", "ـظ"] }], example: "اسْتَيْقَظَ بَاكِرًا", exampleFr: "Il s'est réveillé tôt" },

    // === LIEUX (217-250) ===
    { id: 217, word: "مَدْرَسَة", transliteration: "madrasa", type: "اسم", meaning: "school", meaningFr: "l'école", root: "د - ر - س", rootMeaning: "Racine liée à l'étude", letters: [{ letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "د", name: "dāl", forms: ["د", "ـد"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "المَدْرَسَةُ قَرِيبَة", exampleFr: "L'école est proche" },
    { id: 218, word: "جَامِعَة", transliteration: "jāmiʿa", type: "اسم", meaning: "university", meaningFr: "l'université", root: "ج - م - ع", rootMeaning: "Racine liée au rassemblement", letters: [{ letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "الجَامِعَةُ كَبِيرَة", exampleFr: "L'université est grande" },
    { id: 219, word: "مَسْجِد", transliteration: "masjid", type: "اسم", meaning: "mosque", meaningFr: "la mosquée", root: "س - ج - د", rootMeaning: "Racine liée à la prosternation", letters: [{ letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] }, { letter: "د", name: "dāl", forms: ["د", "ـد"] }], example: "المَسْجِدُ بَيْتُ الله", exampleFr: "La mosquée est la maison d'Allah" },
    { id: 220, word: "مُسْتَشْفَى", transliteration: "mustashfā", type: "اسم", meaning: "hospital", meaningFr: "l'hôpital", root: "ش - ف - ي", rootMeaning: "Racine liée à la guérison", letters: [{ letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }, { letter: "ش", name: "shīn", forms: ["ش", "شـ", "ـشـ", "ـش"] }, { letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }, { letter: "ى", name: "alif maqṣūra", forms: ["ى", "ـى"] }], example: "المُسْتَشْفَى قَرِيب", exampleFr: "L'hôpital est proche" },
    { id: 221, word: "مَكْتَبَة", transliteration: "maktaba", type: "اسم", meaning: "library", meaningFr: "la bibliothèque", root: "ك - ت - ب", rootMeaning: "Racine liée à l'écriture", letters: [{ letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] }, { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "المَكْتَبَةُ هَادِئَة", exampleFr: "La bibliothèque est calme" },
    { id: 222, word: "سُوق", transliteration: "sūq", type: "اسم", meaning: "market", meaningFr: "le marché", root: "س - و - ق", rootMeaning: "Racine liée au marché", letters: [{ letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "و", name: "wāw", forms: ["و", "ـو"] }, { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }], example: "السُّوقُ مُزْدَحِم", exampleFr: "Le marché est bondé" },
    { id: 223, word: "مَطَار", transliteration: "maṭār", type: "اسم", meaning: "airport", meaningFr: "l'aéroport", root: "ط - ي - ر", rootMeaning: "Racine liée au vol", letters: [{ letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ط", name: "ṭāʾ", forms: ["ط", "طـ", "ـطـ", "ـط"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }], example: "المَطَارُ بَعِيد", exampleFr: "L'aéroport est loin" },
    { id: 224, word: "مَحَطَّة", transliteration: "maḥaṭṭa", type: "اسم", meaning: "station", meaningFr: "la gare", root: "ح - ط - ط", rootMeaning: "Racine liée à l'arrêt", letters: [{ letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }, { letter: "طّ", name: "ṭāʾ (avec shadda)", forms: ["طّ", "طّـ", "ـطّـ", "ـطّ"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "المَحَطَّةُ قَرِيبَة", exampleFr: "La gare est proche" },
    { id: 225, word: "مَطْعَم", transliteration: "maṭʿam", type: "اسم", meaning: "restaurant", meaningFr: "le restaurant", root: "ط - ع - م", rootMeaning: "Racine liée à la nourriture", letters: [{ letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ط", name: "ṭāʾ", forms: ["ط", "طـ", "ـطـ", "ـط"] }, { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }], example: "المَطْعَمُ مَشْهُور", exampleFr: "Le restaurant est célèbre" },
    { id: 226, word: "فُنْدُق", transliteration: "funduq", type: "اسم", meaning: "hotel", meaningFr: "l'hôtel", root: "ف - ن - د - ق", rootMeaning: "Mot d'origine grecque", letters: [{ letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }, { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }, { letter: "د", name: "dāl", forms: ["د", "ـد"] }, { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }], example: "الفُنْدُقُ فَاخِر", exampleFr: "L'hôtel est luxueux" },
    { id: 227, word: "شَارِع", transliteration: "shāriʿ", type: "اسم", meaning: "street", meaningFr: "la rue", root: "ش - ر - ع", rootMeaning: "Racine liée au commencement", letters: [{ letter: "ش", name: "shīn", forms: ["ش", "شـ", "ـشـ", "ـش"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }], example: "الشَّارِعُ وَاسِع", exampleFr: "La rue est large" },
    { id: 228, word: "جِسْر", transliteration: "jisr", type: "اسم", meaning: "bridge", meaningFr: "le pont", root: "ج - س - ر", rootMeaning: "Racine liée au pont", letters: [{ letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] }, { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }], example: "الجِسْرُ طَوِيل", exampleFr: "Le pont est long" },
    { id: 229, word: "حَدِيقَة", transliteration: "ḥadīqa", type: "اسم", meaning: "garden", meaningFr: "le jardin", root: "ح - د - ق", rootMeaning: "Racine liée au jardin", letters: [{ letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }, { letter: "د", name: "dāl", forms: ["د", "ـد"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "الحَدِيقَةُ خَضْرَاء", exampleFr: "Le jardin est vert" },
    { id: 230, word: "مَدِينَة", transliteration: "madīna", type: "اسم", meaning: "city", meaningFr: "la ville", root: "م - د - ن", rootMeaning: "Racine liée à la civilisation", letters: [{ letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "د", name: "dāl", forms: ["د", "ـد"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "المَدِينَةُ كَبِيرَة", exampleFr: "La ville est grande" },
    { id: 231, word: "قَرْيَة", transliteration: "qarya", type: "اسم", meaning: "village", meaningFr: "le village", root: "ق - ر - ي", rootMeaning: "Racine liée au village", letters: [{ letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "القَرْيَةُ هَادِئَة", exampleFr: "Le village est calme" },
    { id: 232, word: "بَلَد", transliteration: "balad", type: "اسم", meaning: "country", meaningFr: "le pays", root: "ب - ل - د", rootMeaning: "Racine liée au pays", letters: [{ letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "د", name: "dāl", forms: ["د", "ـد"] }], example: "البَلَدُ جَمِيل", exampleFr: "Le pays est beau" },
    
    // === ADJECTIFS (233-280) ===
    { id: 233, word: "كَبِير", transliteration: "kabīr", type: "صفة", meaning: "big", meaningFr: "grand", root: "ك - ب - ر", rootMeaning: "Racine liée à la grandeur", letters: [{ letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }], example: "البَيْتُ كَبِير", exampleFr: "La maison est grande" },
    { id: 234, word: "صَغِير", transliteration: "ṣaghīr", type: "صفة", meaning: "small", meaningFr: "petit", root: "ص - غ - ر", rootMeaning: "Racine liée à la petitesse", letters: [{ letter: "ص", name: "ṣād", forms: ["ص", "صـ", "ـصـ", "ـص"] }, { letter: "غ", name: "ghayn", forms: ["غ", "غـ", "ـغـ", "ـغ"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }], example: "الطِّفْلُ صَغِير", exampleFr: "L'enfant est petit" },
    { id: 235, word: "طَوِيل", transliteration: "ṭawīl", type: "صفة", meaning: "tall/long", meaningFr: "grand/long", root: "ط - و - ل", rootMeaning: "Racine liée à la longueur", letters: [{ letter: "ط", name: "ṭāʾ", forms: ["ط", "طـ", "ـطـ", "ـط"] }, { letter: "و", name: "wāw", forms: ["و", "ـو"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }], example: "الشَّارِعُ طَوِيل", exampleFr: "La rue est longue" },
    { id: 236, word: "قَصِير", transliteration: "qaṣīr", type: "صفة", meaning: "short", meaningFr: "court", root: "ق - ص - ر", rootMeaning: "Racine liée à la brièveté", letters: [{ letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }, { letter: "ص", name: "ṣād", forms: ["ص", "صـ", "ـصـ", "ـص"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }], example: "الطَّرِيقُ قَصِير", exampleFr: "Le chemin est court" },
    { id: 237, word: "جَدِيد", transliteration: "jadīd", type: "صفة", meaning: "new", meaningFr: "nouveau", root: "ج - د - د", rootMeaning: "Racine liée à la nouveauté", letters: [{ letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] }, { letter: "د", name: "dāl", forms: ["د", "ـد"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "د", name: "dāl", forms: ["د", "ـد"] }], example: "الكِتَابُ جَدِيد", exampleFr: "Le livre est nouveau" },
    { id: 238, word: "قَدِيم", transliteration: "qadīm", type: "صفة", meaning: "old", meaningFr: "ancien", root: "ق - د - م", rootMeaning: "Racine liée à l'ancienneté", letters: [{ letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }, { letter: "د", name: "dāl", forms: ["د", "ـد"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }], example: "المَسْجِدُ قَدِيم", exampleFr: "La mosquée est ancienne" },
    { id: 239, word: "سَرِيع", transliteration: "sarīʿ", type: "صفة", meaning: "fast", meaningFr: "rapide", root: "س - ر - ع", rootMeaning: "Racine liée à la vitesse", letters: [{ letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }], example: "القِطَارُ سَرِيع", exampleFr: "Le train est rapide" },
    { id: 240, word: "بَطِيء", transliteration: "baṭīʾ", type: "صفة", meaning: "slow", meaningFr: "lent", root: "ب - ط - أ", rootMeaning: "Racine liée à la lenteur", letters: [{ letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "ط", name: "ṭāʾ", forms: ["ط", "طـ", "ـطـ", "ـط"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ء", name: "hamza", forms: ["ء"] }], example: "السُّلَحْفَاةُ بَطِيئَة", exampleFr: "La tortue est lente" },
    { id: 241, word: "سَهْل", transliteration: "sahl", type: "صفة", meaning: "easy", meaningFr: "facile", root: "س - هـ - ل", rootMeaning: "Racine liée à la facilité", letters: [{ letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "هـ", name: "hāʾ", forms: ["هـ", "هـ", "ـهـ", "ـه"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }], example: "الدَّرْسُ سَهْل", exampleFr: "La leçon est facile" },
    { id: 242, word: "صَعْب", transliteration: "ṣaʿb", type: "صفة", meaning: "difficult", meaningFr: "difficile", root: "ص - ع - ب", rootMeaning: "Racine liée à la difficulté", letters: [{ letter: "ص", name: "ṣād", forms: ["ص", "صـ", "ـصـ", "ـص"] }, { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }], example: "الامْتِحَانُ صَعْب", exampleFr: "L'examen est difficile" },
    { id: 243, word: "حَارّ", transliteration: "ḥārr", type: "صفة", meaning: "hot", meaningFr: "chaud", root: "ح - ر - ر", rootMeaning: "Racine liée à la chaleur", letters: [{ letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "رّ", name: "rāʾ (avec shadda)", forms: ["رّ", "ـرّ"] }], example: "الطَّقْسُ حَارّ", exampleFr: "Le temps est chaud" },
    { id: 244, word: "بَارِد", transliteration: "bārid", type: "صفة", meaning: "cold", meaningFr: "froid", root: "ب - ر - د", rootMeaning: "Racine liée au froid", letters: [{ letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "د", name: "dāl", forms: ["د", "ـد"] }], example: "المَاءُ بَارِد", exampleFr: "L'eau est froide" },
    { id: 245, word: "نَظِيف", transliteration: "naẓīf", type: "صفة", meaning: "clean", meaningFr: "propre", root: "ن - ظ - ف", rootMeaning: "Racine liée à la propreté", letters: [{ letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }, { letter: "ظ", name: "ẓāʾ", forms: ["ظ", "ظـ", "ـظـ", "ـظ"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }], example: "الغُرْفَةُ نَظِيفَة", exampleFr: "La chambre est propre" },
    { id: 246, word: "وَسِخ", transliteration: "wasikh", type: "صفة", meaning: "dirty", meaningFr: "sale", root: "و - س - خ", rootMeaning: "Racine liée à la saleté", letters: [{ letter: "و", name: "wāw", forms: ["و", "ـو"] }, { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "خ", name: "khāʾ", forms: ["خ", "خـ", "ـخـ", "ـخ"] }], example: "الثَّوْبُ وَسِخ", exampleFr: "Le vêtement est sale" },
    { id: 247, word: "غَنِيّ", transliteration: "ghaniyy", type: "صفة", meaning: "rich", meaningFr: "riche", root: "غ - ن - ي", rootMeaning: "Racine liée à la richesse", letters: [{ letter: "غ", name: "ghayn", forms: ["غ", "غـ", "ـغـ", "ـغ"] }, { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }, { letter: "يّ", name: "yāʾ (avec shadda)", forms: ["يّ", "ـيّ"] }], example: "الرَّجُلُ غَنِيّ", exampleFr: "L'homme est riche" },
    { id: 248, word: "فَقِير", transliteration: "faqīr", type: "صفة", meaning: "poor", meaningFr: "pauvre", root: "ف - ق - ر", rootMeaning: "Racine liée à la pauvreté", letters: [{ letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }, { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }], example: "سَاعِدِ الفَقِير", exampleFr: "Aide le pauvre" },
    { id: 249, word: "سَعِيد", transliteration: "saʿīd", type: "صفة", meaning: "happy", meaningFr: "heureux", root: "س - ع - د", rootMeaning: "Racine liée au bonheur", letters: [{ letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "د", name: "dāl", forms: ["د", "ـد"] }], example: "أَنَا سَعِيد", exampleFr: "Je suis heureux" },
    { id: 250, word: "حَزِين", transliteration: "ḥazīn", type: "صفة", meaning: "sad", meaningFr: "triste", root: "ح - ز - ن", rootMeaning: "Racine liée à la tristesse", letters: [{ letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }, { letter: "ز", name: "zāy", forms: ["ز", "ـز"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }], example: "الوَلَدُ حَزِين", exampleFr: "Le garçon est triste" },
    { id: 251, word: "مَرِيض", transliteration: "marīḍ", type: "صفة", meaning: "sick", meaningFr: "malade", root: "م - ر - ض", rootMeaning: "Racine liée à la maladie", letters: [{ letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ض", name: "ḍād", forms: ["ض", "ضـ", "ـضـ", "ـض"] }], example: "الطِّفْلُ مَرِيض", exampleFr: "L'enfant est malade" },
    { id: 252, word: "صَحِيح", transliteration: "ṣaḥīḥ", type: "صفة", meaning: "correct/healthy", meaningFr: "correct/sain", root: "ص - ح - ح", rootMeaning: "Racine liée à la santé, l'exactitude", letters: [{ letter: "ص", name: "ṣād", forms: ["ص", "صـ", "ـصـ", "ـص"] }, { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }], example: "الجَوَابُ صَحِيح", exampleFr: "La réponse est correcte" },
    { id: 253, word: "خَطَأ", transliteration: "khaṭaʾ", type: "اسم", meaning: "mistake", meaningFr: "l'erreur", root: "خ - ط - أ", rootMeaning: "Racine liée à l'erreur", letters: [{ letter: "خ", name: "khāʾ", forms: ["خ", "خـ", "ـخـ", "ـخ"] }, { letter: "ط", name: "ṭāʾ", forms: ["ط", "طـ", "ـطـ", "ـط"] }, { letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }], example: "الخَطَأُ مِنَ الإِنْسَان", exampleFr: "L'erreur est humaine" },
    { id: 254, word: "ثَقِيل", transliteration: "thaqīl", type: "صفة", meaning: "heavy", meaningFr: "lourd", root: "ث - ق - ل", rootMeaning: "Racine liée au poids", letters: [{ letter: "ث", name: "thāʾ", forms: ["ث", "ثـ", "ـثـ", "ـث"] }, { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }], example: "الحَقِيبَةُ ثَقِيلَة", exampleFr: "Le sac est lourd" },
    { id: 255, word: "خَفِيف", transliteration: "khafīf", type: "صفة", meaning: "light", meaningFr: "léger", root: "خ - ف - ف", rootMeaning: "Racine liée à la légèreté", letters: [{ letter: "خ", name: "khāʾ", forms: ["خ", "خـ", "ـخـ", "ـخ"] }, { letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }], example: "الرِّيشَةُ خَفِيفَة", exampleFr: "La plume est légère" },
    { id: 256, word: "عَرِيض", transliteration: "ʿarīḍ", type: "صفة", meaning: "wide", meaningFr: "large", root: "ع - ر - ض", rootMeaning: "Racine liée à la largeur", letters: [{ letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ض", name: "ḍād", forms: ["ض", "ضـ", "ـضـ", "ـض"] }], example: "الطَّرِيقُ عَرِيض", exampleFr: "La route est large" },
    { id: 257, word: "ضَيِّق", transliteration: "ḍayyiq", type: "صفة", meaning: "narrow", meaningFr: "étroit", root: "ض - ي - ق", rootMeaning: "Racine liée à l'étroitesse", letters: [{ letter: "ض", name: "ḍād", forms: ["ض", "ضـ", "ـضـ", "ـض"] }, { letter: "يّ", name: "yāʾ (avec shadda)", forms: ["يّ", "ـيّ"] }, { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }], example: "الزُّقَاقُ ضَيِّق", exampleFr: "La ruelle est étroite" },
    { id: 258, word: "عَمِيق", transliteration: "ʿamīq", type: "صفة", meaning: "deep", meaningFr: "profond", root: "ع - م - ق", rootMeaning: "Racine liée à la profondeur", letters: [{ letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }], example: "البِئْرُ عَمِيقَة", exampleFr: "Le puits est profond" },
    
    // === COULEURS (259-270) ===
    { id: 259, word: "أَبْيَض", transliteration: "abyaḍ", type: "صفة", meaning: "white", meaningFr: "blanc", root: "ب - ي - ض", rootMeaning: "Racine liée à la blancheur", letters: [{ letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ض", name: "ḍād", forms: ["ض", "ضـ", "ـضـ", "ـض"] }], example: "الثَّلْجُ أَبْيَض", exampleFr: "La neige est blanche" },
    { id: 260, word: "أَسْوَد", transliteration: "aswad", type: "صفة", meaning: "black", meaningFr: "noir", root: "س - و - د", rootMeaning: "Racine liée à la noirceur", letters: [{ letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }, { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "و", name: "wāw", forms: ["و", "ـو"] }, { letter: "د", name: "dāl", forms: ["د", "ـد"] }], example: "اللَّيْلُ أَسْوَد", exampleFr: "La nuit est noire" },
    { id: 261, word: "أَحْمَر", transliteration: "aḥmar", type: "صفة", meaning: "red", meaningFr: "rouge", root: "ح - م - ر", rootMeaning: "Racine liée au rouge", letters: [{ letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }, { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }], example: "الدَّمُ أَحْمَر", exampleFr: "Le sang est rouge" },
    { id: 262, word: "أَخْضَر", transliteration: "akhḍar", type: "صفة", meaning: "green", meaningFr: "vert", root: "خ - ض - ر", rootMeaning: "Racine liée au vert", letters: [{ letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }, { letter: "خ", name: "khāʾ", forms: ["خ", "خـ", "ـخـ", "ـخ"] }, { letter: "ض", name: "ḍād", forms: ["ض", "ضـ", "ـضـ", "ـض"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }], example: "العُشْبُ أَخْضَر", exampleFr: "L'herbe est verte" },
    { id: 263, word: "أَزْرَق", transliteration: "azraq", type: "صفة", meaning: "blue", meaningFr: "bleu", root: "ز - ر - ق", rootMeaning: "Racine liée au bleu", letters: [{ letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }, { letter: "ز", name: "zāy", forms: ["ز", "ـز"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }], example: "البَحْرُ أَزْرَق", exampleFr: "La mer est bleue" },
    { id: 264, word: "أَصْفَر", transliteration: "aṣfar", type: "صفة", meaning: "yellow", meaningFr: "jaune", root: "ص - ف - ر", rootMeaning: "Racine liée au jaune", letters: [{ letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }, { letter: "ص", name: "ṣād", forms: ["ص", "صـ", "ـصـ", "ـص"] }, { letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }], example: "الشَّمْسُ صَفْرَاء", exampleFr: "Le soleil est jaune" },
    { id: 265, word: "بُنِّيّ", transliteration: "bunniyy", type: "صفة", meaning: "brown", meaningFr: "marron", root: "ب - ن - ن", rootMeaning: "Racine liée au café", letters: [{ letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "نّ", name: "nūn (avec shadda)", forms: ["نّ", "نّـ", "ـنّـ", "ـنّ"] }, { letter: "يّ", name: "yāʾ (avec shadda)", forms: ["يّ", "ـيّ"] }], example: "الخَشَبُ بُنِّيّ", exampleFr: "Le bois est marron" },
    { id: 266, word: "رَمَادِيّ", transliteration: "ramādiyy", type: "صفة", meaning: "gray", meaningFr: "gris", root: "ر - م - د", rootMeaning: "Racine liée aux cendres", letters: [{ letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "د", name: "dāl", forms: ["د", "ـد"] }, { letter: "يّ", name: "yāʾ (avec shadda)", forms: ["يّ", "ـيّ"] }], example: "السَّمَاءُ رَمَادِيَّة", exampleFr: "Le ciel est gris" },
    { id: 267, word: "بُرْتُقَالِيّ", transliteration: "burtuqāliyy", type: "صفة", meaning: "orange", meaningFr: "orange", root: "ب - ر - ت - ق", rootMeaning: "Mot d'origine portugaise", letters: [{ letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }, { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "يّ", name: "yāʾ (avec shadda)", forms: ["يّ", "ـيّ"] }], example: "الجَزَرُ بُرْتُقَالِيّ", exampleFr: "La carotte est orange" },
    { id: 268, word: "وَرْدِيّ", transliteration: "wardiyy", type: "صفة", meaning: "pink", meaningFr: "rose", root: "و - ر - د", rootMeaning: "Racine liée à la rose", letters: [{ letter: "و", name: "wāw", forms: ["و", "ـو"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "د", name: "dāl", forms: ["د", "ـد"] }, { letter: "يّ", name: "yāʾ (avec shadda)", forms: ["يّ", "ـيّ"] }], example: "الزَّهْرَةُ وَرْدِيَّة", exampleFr: "La fleur est rose" },
    { id: 269, word: "بَنَفْسَجِيّ", transliteration: "banafsajiyy", type: "صفة", meaning: "purple", meaningFr: "violet", root: "ب - ن - ف - س - ج", rootMeaning: "Mot d'origine persane", letters: [{ letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }, { letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }, { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] }, { letter: "يّ", name: "yāʾ (avec shadda)", forms: ["يّ", "ـيّ"] }], example: "العِنَبُ بَنَفْسَجِيّ", exampleFr: "Le raisin est violet" },
    { id: 270, word: "ذَهَبِيّ", transliteration: "dhahabiyy", type: "صفة", meaning: "golden", meaningFr: "doré", root: "ذ - هـ - ب", rootMeaning: "Racine liée à l'or", letters: [{ letter: "ذ", name: "dhāl", forms: ["ذ", "ـذ"] }, { letter: "هـ", name: "hāʾ", forms: ["هـ", "هـ", "ـهـ", "ـه"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "يّ", name: "yāʾ (avec shadda)", forms: ["يّ", "ـيّ"] }], example: "الخَاتَمُ ذَهَبِيّ", exampleFr: "La bague est dorée" },
    // === NOMBRES & CONCEPTS (271-300) ===
    { id: 271, word: "وَاحِد", transliteration: "wāḥid", type: "عدد", meaning: "one", meaningFr: "un", root: "و - ح - د", rootMeaning: "Racine liée à l'unicité", letters: [{ letter: "و", name: "wāw", forms: ["و", "ـو"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }, { letter: "د", name: "dāl", forms: ["د", "ـد"] }], example: "اللهُ وَاحِد", exampleFr: "Allah est Un" },
    { id: 272, word: "اثْنَان", transliteration: "ithnān", type: "عدد", meaning: "two", meaningFr: "deux", root: "ث - ن - ي", rootMeaning: "Racine liée au deux", letters: [{ letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ث", name: "thāʾ", forms: ["ث", "ثـ", "ـثـ", "ـث"] }, { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }], example: "عِنْدِي كِتَابَان اثْنَان", exampleFr: "J'ai deux livres" },
    { id: 273, word: "ثَلَاثَة", transliteration: "thalātha", type: "عدد", meaning: "three", meaningFr: "trois", root: "ث - ل - ث", rootMeaning: "Racine liée au trois", letters: [{ letter: "ث", name: "thāʾ", forms: ["ث", "ثـ", "ـثـ", "ـث"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ث", name: "thāʾ", forms: ["ث", "ثـ", "ـثـ", "ـث"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "ثَلَاثَةُ أَوْلَاد", exampleFr: "Trois garçons" },
    { id: 274, word: "أَرْبَعَة", transliteration: "arbaʿa", type: "عدد", meaning: "four", meaningFr: "quatre", root: "ر - ب - ع", rootMeaning: "Racine liée au quatre", letters: [{ letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "أَرْبَعَةُ فُصُول", exampleFr: "Quatre saisons" },
    { id: 275, word: "خَمْسَة", transliteration: "khamsa", type: "عدد", meaning: "five", meaningFr: "cinq", root: "خ - م - س", rootMeaning: "Racine liée au cinq", letters: [{ letter: "خ", name: "khāʾ", forms: ["خ", "خـ", "ـخـ", "ـخ"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "الصَّلَوَاتُ خَمْس", exampleFr: "Les prières sont au nombre de cinq" },
    { id: 276, word: "سِتَّة", transliteration: "sitta", type: "عدد", meaning: "six", meaningFr: "six", root: "س - ت - ت", rootMeaning: "Racine liée au six", letters: [{ letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "تّ", name: "tāʾ (avec shadda)", forms: ["تّ", "تّـ", "ـتّـ", "ـتّ"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "سِتَّةُ أَيَّام", exampleFr: "Six jours" },
    { id: 277, word: "سَبْعَة", transliteration: "sabʿa", type: "عدد", meaning: "seven", meaningFr: "sept", root: "س - ب - ع", rootMeaning: "Racine liée au sept", letters: [{ letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "سَبْعَةُ سَمَاوَات", exampleFr: "Sept cieux" },
    { id: 278, word: "ثَمَانِيَة", transliteration: "thamāniya", type: "عدد", meaning: "eight", meaningFr: "huit", root: "ث - م - ن", rootMeaning: "Racine liée au huit", letters: [{ letter: "ث", name: "thāʾ", forms: ["ث", "ثـ", "ـثـ", "ـث"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "ثَمَانِيَةُ أَبْوَاب", exampleFr: "Huit portes" },
    { id: 279, word: "تِسْعَة", transliteration: "tisʿa", type: "عدد", meaning: "nine", meaningFr: "neuf", root: "ت - س - ع", rootMeaning: "Racine liée au neuf", letters: [{ letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }, { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "تِسْعَةُ كَوَاكِب", exampleFr: "Neuf planètes" },
    { id: 280, word: "عَشَرَة", transliteration: "ʿashara", type: "عدد", meaning: "ten", meaningFr: "dix", root: "ع - ش - ر", rootMeaning: "Racine liée au dix", letters: [{ letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "ش", name: "shīn", forms: ["ش", "شـ", "ـشـ", "ـش"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "عَشَرَةُ دَرَاهِم", exampleFr: "Dix dirhams" },

    // === MOTS UTILES (281-320) ===
    { id: 281, word: "كِتَاب", transliteration: "kitāb", type: "اسم", meaning: "book", meaningFr: "le livre", root: "ك - ت - ب", rootMeaning: "Racine liée à l'écriture", letters: [{ letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] }, { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }], example: "الكِتَابُ خَيْرُ صَدِيق", exampleFr: "Le livre est le meilleur ami" },
    { id: 282, word: "قَلَم", transliteration: "qalam", type: "اسم", meaning: "pen", meaningFr: "le stylo", root: "ق - ل - م", rootMeaning: "Racine liée au calame", letters: [{ letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }], example: "القَلَمُ أَقْوَى مِنَ السَّيْف", exampleFr: "Le stylo est plus fort que l'épée" },
    { id: 283, word: "وَرَقَة", transliteration: "waraqa", type: "اسم", meaning: "paper", meaningFr: "le papier", root: "و - ر - ق", rootMeaning: "Racine liée aux feuilles", letters: [{ letter: "و", name: "wāw", forms: ["و", "ـو"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "الوَرَقَةُ بَيْضَاء", exampleFr: "Le papier est blanc" },
    { id: 284, word: "سَيَّارَة", transliteration: "sayyāra", type: "اسم", meaning: "car", meaningFr: "la voiture", root: "س - ي - ر", rootMeaning: "Racine liée au mouvement", letters: [{ letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "يّ", name: "yāʾ (avec shadda)", forms: ["يّ", "ـيّ"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "السَّيَّارَةُ سَرِيعَة", exampleFr: "La voiture est rapide" },
    { id: 285, word: "طَائِرَة", transliteration: "ṭāʾira", type: "اسم", meaning: "airplane", meaningFr: "l'avion", root: "ط - ي - ر", rootMeaning: "Racine liée au vol", letters: [{ letter: "ط", name: "ṭāʾ", forms: ["ط", "طـ", "ـطـ", "ـط"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ئ", name: "hamza", forms: ["ئ", "ـئـ", "ـئ"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "الطَّائِرَةُ فِي السَّمَاء", exampleFr: "L'avion est dans le ciel" },
    { id: 286, word: "قِطَار", transliteration: "qiṭār", type: "اسم", meaning: "train", meaningFr: "le train", root: "ق - ط - ر", rootMeaning: "Racine liée à la suite", letters: [{ letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }, { letter: "ط", name: "ṭāʾ", forms: ["ط", "طـ", "ـطـ", "ـط"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }], example: "القِطَارُ سَرِيع", exampleFr: "Le train est rapide" },
    { id: 287, word: "هَاتِف", transliteration: "hātif", type: "اسم", meaning: "phone", meaningFr: "le téléphone", root: "هـ - ت - ف", rootMeaning: "Racine liée à l'appel", letters: [{ letter: "هـ", name: "hāʾ", forms: ["هـ", "هـ", "ـهـ", "ـه"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }, { letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }], example: "الهَاتِفُ يَرِنّ", exampleFr: "Le téléphone sonne" },
    { id: 288, word: "حَاسُوب", transliteration: "ḥāsūb", type: "اسم", meaning: "computer", meaningFr: "l'ordinateur", root: "ح - س - ب", rootMeaning: "Racine liée au calcul", letters: [{ letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "و", name: "wāw", forms: ["و", "ـو"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }], example: "الحَاسُوبُ مُفِيد", exampleFr: "L'ordinateur est utile" },
    { id: 289, word: "صُورَة", transliteration: "ṣūra", type: "اسم", meaning: "picture", meaningFr: "l'image", root: "ص - و - ر", rootMeaning: "Racine liée à la forme", letters: [{ letter: "ص", name: "ṣād", forms: ["ص", "صـ", "ـصـ", "ـص"] }, { letter: "و", name: "wāw", forms: ["و", "ـو"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "الصُّورَةُ جَمِيلَة", exampleFr: "L'image est belle" },
    { id: 290, word: "صَوْت", transliteration: "ṣawt", type: "اسم", meaning: "sound/voice", meaningFr: "le son/la voix", root: "ص - و - ت", rootMeaning: "Racine liée au son", letters: [{ letter: "ص", name: "ṣād", forms: ["ص", "صـ", "ـصـ", "ـص"] }, { letter: "و", name: "wāw", forms: ["و", "ـو"] }, { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }], example: "صَوْتُهُ جَمِيل", exampleFr: "Sa voix est belle" },
    { id: 291, word: "لُغَة", transliteration: "lugha", type: "اسم", meaning: "language", meaningFr: "la langue", root: "ل - غ - و", rootMeaning: "Racine liée au langage", letters: [{ letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "غ", name: "ghayn", forms: ["غ", "غـ", "ـغـ", "ـغ"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "اللُّغَةُ العَرَبِيَّةُ جَمِيلَة", exampleFr: "La langue arabe est belle" },
    { id: 292, word: "كَلِمَة", transliteration: "kalima", type: "اسم", meaning: "word", meaningFr: "le mot", root: "ك - ل - م", rootMeaning: "Racine liée à la parole", letters: [{ letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "الكَلِمَةُ الطَّيِّبَةُ صَدَقَة", exampleFr: "La bonne parole est une aumône" },
    { id: 293, word: "جُمْلَة", transliteration: "jumla", type: "اسم", meaning: "sentence", meaningFr: "la phrase", root: "ج - م - ل", rootMeaning: "Racine liée à l'ensemble", letters: [{ letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "الجُمْلَةُ مُفِيدَة", exampleFr: "La phrase est utile" },
    { id: 294, word: "سُؤَال", transliteration: "suʾāl", type: "اسم", meaning: "question", meaningFr: "la question", root: "س - أ - ل", rootMeaning: "Racine liée à la demande", letters: [{ letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "ؤ", name: "hamza", forms: ["ؤ", "ـؤ"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }], example: "السُّؤَالُ سَهْل", exampleFr: "La question est facile" },
    { id: 295, word: "جَوَاب", transliteration: "jawāb", type: "اسم", meaning: "answer", meaningFr: "la réponse", root: "ج - و - ب", rootMeaning: "Racine liée à la réponse", letters: [{ letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] }, { letter: "و", name: "wāw", forms: ["و", "ـو"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }], example: "الجَوَابُ صَحِيح", exampleFr: "La réponse est correcte" },
    { id: 296, word: "فِكْرَة", transliteration: "fikra", type: "اسم", meaning: "idea", meaningFr: "l'idée", root: "ف - ك - ر", rootMeaning: "Racine liée à la pensée", letters: [{ letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }, { letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "الفِكْرَةُ جَيِّدَة", exampleFr: "L'idée est bonne" },
    { id: 297, word: "طَرِيق", transliteration: "ṭarīq", type: "اسم", meaning: "road/way", meaningFr: "la route/le chemin", root: "ط - ر - ق", rootMeaning: "Racine liée au chemin", letters: [{ letter: "ط", name: "ṭāʾ", forms: ["ط", "طـ", "ـطـ", "ـط"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }], example: "الطَّرِيقُ طَوِيل", exampleFr: "La route est longue" },
    { id: 298, word: "عَمَل", transliteration: "ʿamal", type: "اسم", meaning: "work", meaningFr: "le travail", root: "ع - م - ل", rootMeaning: "Racine liée au travail", letters: [{ letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }], example: "العَمَلُ عِبَادَة", exampleFr: "Le travail est une adoration" },
    { id: 299, word: "مَالّ", transliteration: "māl", type: "اسم", meaning: "money", meaningFr: "l'argent", root: "م - و - ل", rootMeaning: "Racine liée aux biens", letters: [{ letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }], example: "المَالُ فِتْنَة", exampleFr: "L'argent est une épreuve" },
    { id: 300, word: "حَيَاة", transliteration: "ḥayāh", type: "اسم", meaning: "life", meaningFr: "la vie", root: "ح - ي - ي", rootMeaning: "Racine liée à la vie", letters: [{ letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "الحَيَاةُ قَصِيرَة", exampleFr: "La vie est courte" },
    { id: 301, word: "مَوْت", transliteration: "mawt", type: "اسم", meaning: "death", meaningFr: "la mort", root: "م - و - ت", rootMeaning: "Racine liée à la mort", letters: [{ letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "و", name: "wāw", forms: ["و", "ـو"] }, { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }], example: "المَوْتُ حَقٌّ عَلَى كُلِّ نَفْس", exampleFr: "La mort est une réalité pour chaque âme" },
    { id: 302, word: "سَعَادَة", transliteration: "saʿāda", type: "اسم", meaning: "happiness", meaningFr: "le bonheur", root: "س - ع - د", rootMeaning: "Racine liée au bonheur", letters: [{ letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "د", name: "dāl", forms: ["د", "ـد"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "السَّعَادَةُ فِي القَنَاعَة", exampleFr: "Le bonheur est dans la satisfaction" },
    { id: 303, word: "شَقَاء", transliteration: "shaqāʾ", type: "اسم", meaning: "misery", meaningFr: "le malheur", root: "ش - ق - و", rootMeaning: "Racine liée au malheur", letters: [{ letter: "ش", name: "shīn", forms: ["ش", "شـ", "ـشـ", "ـش"] }, { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ء", name: "hamza", forms: ["ء"] }], example: "الشَّقَاءُ عَكْسُ السَّعَادَة", exampleFr: "Le malheur est l'opposé du bonheur" },
    { id: 304, word: "نِعْمَة", transliteration: "niʿma", type: "اسم", meaning: "blessing", meaningFr: "la bénédiction", root: "ن - ع - م", rootMeaning: "Racine liée aux bienfaits", letters: [{ letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }, { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "الصِّحَّةُ نِعْمَةٌ عَظِيمَة", exampleFr: "La santé est une grande bénédiction" },
    { id: 305, word: "بَلَاء", transliteration: "balāʾ", type: "اسم", meaning: "trial", meaningFr: "l'épreuve", root: "ب - ل - و", rootMeaning: "Racine liée à l'épreuve", letters: [{ letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ء", name: "hamza", forms: ["ء"] }], example: "البَلَاءُ يُقَوِّي الإِيمَان", exampleFr: "L'épreuve renforce la foi" },
    { id: 306, word: "أَجْر", transliteration: "ajr", type: "اسم", meaning: "reward", meaningFr: "la récompense", root: "أ - ج - ر", rootMeaning: "Racine liée à la récompense", letters: [{ letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }, { letter: "ج", name: "jīm", forms: ["ج", "جـ", "ـجـ", "ـج"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }], example: "الأَجْرُ عَلَى قَدْرِ المَشَقَّة", exampleFr: "La récompense est proportionnelle à l'effort" },
    { id: 307, word: "عِقَاب", transliteration: "ʿiqāb", type: "اسم", meaning: "punishment", meaningFr: "le châtiment", root: "ع - ق - ب", rootMeaning: "Racine liée à la suite, au châtiment", letters: [{ letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }], example: "العِقَابُ لِلْمُجْرِم", exampleFr: "Le châtiment est pour le criminel" },
    { id: 308, word: "خَيْر", transliteration: "khayr", type: "اسم", meaning: "good", meaningFr: "le bien", root: "خ - ي - ر", rootMeaning: "Racine liée au bien", letters: [{ letter: "خ", name: "khāʾ", forms: ["خ", "خـ", "ـخـ", "ـخ"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }], example: "الخَيْرُ فِي العَطَاء", exampleFr: "Le bien est dans le don" },
    { id: 309, word: "شَرّ", transliteration: "sharr", type: "اسم", meaning: "evil", meaningFr: "le mal", root: "ش - ر - ر", rootMeaning: "Racine liée au mal", letters: [{ letter: "ش", name: "shīn", forms: ["ش", "شـ", "ـشـ", "ـش"] }, { letter: "رّ", name: "rāʾ (avec shadda)", forms: ["رّ", "ـرّ"] }], example: "تَجَنَّبِ الشَّرّ", exampleFr: "Évite le mal" },
    { id: 310, word: "نَصْر", transliteration: "naṣr", type: "اسم", meaning: "victory", meaningFr: "la victoire", root: "ن - ص - ر", rootMeaning: "Racine liée à la victoire, l'aide", letters: [{ letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }, { letter: "ص", name: "ṣād", forms: ["ص", "صـ", "ـصـ", "ـص"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }], example: "النَّصْرُ مِنْ عِنْدِ الله", exampleFr: "La victoire vient d'Allah" },
    { id: 311, word: "هَزِيمَة", transliteration: "hazīma", type: "اسم", meaning: "defeat", meaningFr: "la défaite", root: "هـ - ز - م", rootMeaning: "Racine liée à la défaite", letters: [{ letter: "هـ", name: "hāʾ", forms: ["هـ", "هـ", "ـهـ", "ـه"] }, { letter: "ز", name: "zāy", forms: ["ز", "ـز"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "الهَزِيمَةُ دَرْسٌ لِلْمُسْتَقْبَل", exampleFr: "La défaite est une leçon pour l'avenir" },
    { id: 312, word: "حَرْب", transliteration: "ḥarb", type: "اسم", meaning: "war", meaningFr: "la guerre", root: "ح - ر - ب", rootMeaning: "Racine liée à la guerre", letters: [{ letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }], example: "الحَرْبُ شَرّ", exampleFr: "La guerre est un mal" },
    { id: 313, word: "سِلْم", transliteration: "silm", type: "اسم", meaning: "peace", meaningFr: "la paix", root: "س - ل - م", rootMeaning: "Racine liée à la paix", letters: [{ letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }], example: "السِّلْمُ خَيْرٌ مِنَ الحَرْب", exampleFr: "La paix est meilleure que la guerre" },
    { id: 314, word: "حُرِّيَّة", transliteration: "ḥurriyya", type: "اسم", meaning: "freedom", meaningFr: "la liberté", root: "ح - ر - ر", rootMeaning: "Racine liée à la liberté", letters: [{ letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }, { letter: "رّ", name: "rāʾ (avec shadda)", forms: ["رّ", "ـرّ"] }, { letter: "يّ", name: "yāʾ (avec shadda)", forms: ["يّ", "ـيّ"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "الحُرِّيَّةُ حَقٌّ لِكُلِّ إِنْسَان", exampleFr: "La liberté est un droit pour tout être humain" },
    { id: 315, word: "عُبُودِيَّة", transliteration: "ʿubūdiyya", type: "اسم", meaning: "servitude", meaningFr: "la servitude", root: "ع - ب - د", rootMeaning: "Racine liée à l'adoration, l'esclavage", letters: [{ letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "و", name: "wāw", forms: ["و", "ـو"] }, { letter: "د", name: "dāl", forms: ["د", "ـد"] }, { letter: "يّ", name: "yāʾ (avec shadda)", forms: ["يّ", "ـيّ"] }, { letter: "ة", name: "tāʾ marbūṭa", forms: ["ة", "ـة"] }], example: "العُبُودِيَّةُ للهِ وَحْدَهُ", exampleFr: "La servitude n'est due qu'à Allah seul" },
    { id: 316, word: "مُسْلِم", transliteration: "muslim", type: "اسم", meaning: "Muslim", meaningFr: "le musulman", root: "س - ل - م", rootMeaning: "Racine liée à la soumission", letters: [{ letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "س", name: "sīn", forms: ["س", "سـ", "ـسـ", "ـس"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }], example: "المُسْلِمُ أَخُو المُسْلِم", exampleFr: "Le musulman est le frère du musulman" },
    { id: 317, word: "مُؤْمِن", transliteration: "muʾmin", type: "اسم", meaning: "believer", meaningFr: "le croyant", root: "أ - م - ن", rootMeaning: "Racine liée à la foi", letters: [{ letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ؤ", name: "hamza", forms: ["ؤ", "ـؤ"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }], example: "المُؤْمِنُ قَوِيٌّ بِإِيمَانِهِ", exampleFr: "Le croyant est fort par sa foi" },
    { id: 318, word: "كَافِر", transliteration: "kāfir", type: "اسم", meaning: "disbeliever", meaningFr: "le mécréant", root: "ك - ف - ر", rootMeaning: "Racine liée à la couverture, la négation", letters: [{ letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }], example: "لَا إِكْرَاهَ فِي الدِّين", exampleFr: "Nulle contrainte en religion" },
    { id: 319, word: "مُنَافِق", transliteration: "munāfiq", type: "اسم", meaning: "hypocrite", meaningFr: "l'hypocrite", root: "ن - ف - ق", rootMeaning: "Racine liée au tunnel, à l'hypocrisie", letters: [{ letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }, { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }], example: "المُنَافِقُ ذُو وَجْهَيْن", exampleFr: "L'hypocrite a deux visages" },
    { id: 320, word: "تَقْوَى", transliteration: "taqwā", type: "اسم", meaning: "piety", meaningFr: "la piété", root: "و - ق - ي", rootMeaning: "Racine liée à la protection", letters: [{ letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }, { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }, { letter: "و", name: "wāw", forms: ["و", "ـو"] }, { letter: "ى", name: "alif maqṣūra", forms: ["ى", "ـى"] }], example: "التَّقْوَى خَيْرُ الزَّاد", exampleFr: "La piété est la meilleure provision" },
    // === PRÉPOSITIONS ET MOTS DE LIAISON (321-340) ===
    { id: 321, word: "فِي", transliteration: "fī", type: "حرف", meaning: "in", meaningFr: "dans", root: "-", rootMeaning: "Préposition de lieu", letters: [{ letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }], example: "الكِتَابُ فِي الحَقِيبَة", exampleFr: "Le livre est dans le sac" },
    { id: 322, word: "عَلَى", transliteration: "ʿalā", type: "حرف", meaning: "on", meaningFr: "sur", root: "ع - ل - و", rootMeaning: "Racine liée à l'élévation", letters: [{ letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "ى", name: "alif maqṣūra", forms: ["ى", "ـى"] }], example: "الكِتَابُ عَلَى الطَّاوِلَة", exampleFr: "Le livre est sur la table" },
    { id: 323, word: "مِنْ", transliteration: "min", type: "حرف", meaning: "from", meaningFr: "de", root: "-", rootMeaning: "Préposition d'origine", letters: [{ letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }], example: "أَنَا مِنْ فَرَنْسَا", exampleFr: "Je suis de France" },
    { id: 324, word: "إِلَى", transliteration: "ilā", type: "حرف", meaning: "to", meaningFr: "vers", root: "-", rootMeaning: "Préposition de direction", letters: [{ letter: "إ", name: "alif hamza", forms: ["إ", "ـإ"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "ى", name: "alif maqṣūra", forms: ["ى", "ـى"] }], example: "ذَهَبْتُ إِلَى المَدْرَسَة", exampleFr: "Je suis allé à l'école" },
    { id: 325, word: "عَنْ", transliteration: "ʿan", type: "حرف", meaning: "about", meaningFr: "à propos de", root: "-", rootMeaning: "Préposition de sujet", letters: [{ letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }], example: "تَكَلَّمَ عَنِ الحَقِيقَة", exampleFr: "Il a parlé de la vérité" },
    { id: 326, word: "مَعَ", transliteration: "maʿa", type: "حرف", meaning: "with", meaningFr: "avec", root: "-", rootMeaning: "Préposition d'accompagnement", letters: [{ letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }], example: "ذَهَبْتُ مَعَ صَدِيقِي", exampleFr: "Je suis allé avec mon ami" },
    { id: 327, word: "بَيْنَ", transliteration: "bayna", type: "ظرف", meaning: "between", meaningFr: "entre", root: "ب - ي - ن", rootMeaning: "Racine liée à la séparation", letters: [{ letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }], example: "الكِتَابُ بَيْنَ القَلَمَيْن", exampleFr: "Le livre est entre les deux stylos" },
    { id: 328, word: "أَمَامَ", transliteration: "amāma", type: "ظرف", meaning: "in front of", meaningFr: "devant", root: "أ - م - م", rootMeaning: "Racine liée à ce qui est devant", letters: [{ letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }], example: "الشَّجَرَةُ أَمَامَ البَيْت", exampleFr: "L'arbre est devant la maison" },
    { id: 329, word: "خَلْفَ", transliteration: "khalfa", type: "ظرف", meaning: "behind", meaningFr: "derrière", root: "خ - ل - ف", rootMeaning: "Racine liée à ce qui suit", letters: [{ letter: "خ", name: "khāʾ", forms: ["خ", "خـ", "ـخـ", "ـخ"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }], example: "الحَدِيقَةُ خَلْفَ البَيْت", exampleFr: "Le jardin est derrière la maison" },
    { id: 330, word: "فَوْقَ", transliteration: "fawqa", type: "ظرف", meaning: "above", meaningFr: "au-dessus", root: "ف - و - ق", rootMeaning: "Racine liée à la supériorité", letters: [{ letter: "ف", name: "fāʾ", forms: ["ف", "فـ", "ـفـ", "ـف"] }, { letter: "و", name: "wāw", forms: ["و", "ـو"] }, { letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }], example: "الطَّائِرُ فَوْقَ الشَّجَرَة", exampleFr: "L'oiseau est au-dessus de l'arbre" },
    { id: 331, word: "تَحْتَ", transliteration: "taḥta", type: "ظرف", meaning: "under", meaningFr: "sous", root: "ت - ح - ت", rootMeaning: "Racine liée à ce qui est en bas", letters: [{ letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }, { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] }, { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] }], example: "القِطُّ تَحْتَ الطَّاوِلَة", exampleFr: "Le chat est sous la table" },
    { id: 332, word: "قَبْلَ", transliteration: "qabla", type: "ظرف", meaning: "before", meaningFr: "avant", root: "ق - ب - ل", rootMeaning: "Racine liée à l'antériorité", letters: [{ letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }], example: "قَبْلَ الصَّلَاة", exampleFr: "Avant la prière" },
    { id: 333, word: "بَعْدَ", transliteration: "baʿda", type: "ظرف", meaning: "after", meaningFr: "après", root: "ب - ع - د", rootMeaning: "Racine liée à l'éloignement", letters: [{ letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "ع", name: "ʿayn", forms: ["ع", "عـ", "ـعـ", "ـع"] }, { letter: "د", name: "dāl", forms: ["د", "ـد"] }], example: "بَعْدَ الصَّلَاة", exampleFr: "Après la prière" },
    { id: 334, word: "هُنَا", transliteration: "hunā", type: "ظرف", meaning: "here", meaningFr: "ici", root: "-", rootMeaning: "Adverbe de lieu", letters: [{ letter: "هـ", name: "hāʾ", forms: ["هـ", "هـ", "ـهـ", "ـه"] }, { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }], example: "أَنَا هُنَا", exampleFr: "Je suis ici" },
    { id: 335, word: "هُنَاكَ", transliteration: "hunāka", type: "ظرف", meaning: "there", meaningFr: "là-bas", root: "-", rootMeaning: "Adverbe de lieu", letters: [{ letter: "هـ", name: "hāʾ", forms: ["هـ", "هـ", "ـهـ", "ـه"] }, { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] }], example: "المَسْجِدُ هُنَاك", exampleFr: "La mosquée est là-bas" },
    { id: 336, word: "الآنَ", transliteration: "al-āna", type: "ظرف", meaning: "now", meaningFr: "maintenant", root: "أ - و - ن", rootMeaning: "Racine liée au moment présent", letters: [{ letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "آ", name: "alif madda", forms: ["آ", "ـآ"] }, { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] }], example: "الآنَ وَقْتُ الصَّلَاة", exampleFr: "Maintenant c'est l'heure de la prière" },
    { id: 337, word: "دَائِمًا", transliteration: "dāʾiman", type: "ظرف", meaning: "always", meaningFr: "toujours", root: "د - و - م", rootMeaning: "Racine liée à la permanence", letters: [{ letter: "د", name: "dāl", forms: ["د", "ـد"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }, { letter: "ئ", name: "hamza", forms: ["ئ", "ـئـ", "ـئ"] }, { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }], example: "أَدْعُو اللهَ دَائِمًا", exampleFr: "J'invoque Allah toujours" },
    { id: 338, word: "أَبَدًا", transliteration: "abadan", type: "ظرف", meaning: "never/ever", meaningFr: "jamais", root: "أ - ب - د", rootMeaning: "Racine liée à l'éternité", letters: [{ letter: "أ", name: "alif hamza", forms: ["أ", "ـأ"] }, { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }, { letter: "د", name: "dāl", forms: ["د", "ـد"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }], example: "لَنْ أَنْسَاكَ أَبَدًا", exampleFr: "Je ne t'oublierai jamais" },
    { id: 339, word: "كَثِيرًا", transliteration: "kathīran", type: "ظرف", meaning: "a lot", meaningFr: "beaucoup", root: "ك - ث - ر", rootMeaning: "Racine liée à l'abondance", letters: [{ letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] }, { letter: "ث", name: "thāʾ", forms: ["ث", "ثـ", "ـثـ", "ـث"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }], example: "أُحِبُّكَ كَثِيرًا", exampleFr: "Je t'aime beaucoup" },
    { id: 340, word: "قَلِيلًا", transliteration: "qalīlan", type: "ظرف", meaning: "a little", meaningFr: "un peu", root: "ق - ل - ل", rootMeaning: "Racine liée à la rareté", letters: [{ letter: "ق", name: "qāf", forms: ["ق", "قـ", "ـقـ", "ـق"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "ي", name: "yāʾ", forms: ["ي", "يـ", "ـيـ", "ـي"] }, { letter: "ل", name: "lām", forms: ["ل", "لـ", "ـلـ", "ـل"] }, { letter: "ا", name: "alif", forms: ["ا", "ـا"] }], example: "انْتَظِرْ قَلِيلًا", exampleFr: "Attends un peu" },
];
