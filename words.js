// Base de vocabulaire arabe
const ARABIC_WORDS = [
    {
        id: 1,
        word: "طَبِيعَة",
        transliteration: "ṭabīʿa",
        type: "اسم",
        typeEn: "noun",
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
    {
        id: 2,
        word: "كِتَاب",
        transliteration: "kitāb",
        type: "اسم",
        typeEn: "noun",
        meaning: "book",
        meaningFr: "le livre",
        root: "ك - ت - ب",
        rootMeaning: "Racine liée à l'écriture",
        letters: [
            { letter: "ك", name: "kāf", forms: ["ك", "كـ", "ـكـ", "ـك"] },
            { letter: "ت", name: "tāʾ", forms: ["ت", "تـ", "ـتـ", "ـت"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] }
        ],
        example: "هَذَا الكِتَابُ مُفِيدٌ جِدًّا",
        exampleFr: "Ce livre est très utile"
    },
    {
        id: 3,
        word: "قَلْب",
        transliteration: "qalb",
        type: "اسم",
        typeEn: "noun",
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
        id: 4,
        word: "سَمَاء",
        transliteration: "samāʾ",
        type: "اسم",
        typeEn: "noun",
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
        id: 5,
        word: "نُور",
        transliteration: "nūr",
        type: "اسم",
        typeEn: "noun",
        meaning: "light",
        meaningFr: "la lumière",
        root: "ن - و - ر",
        rootMeaning: "Racine liée à la lumière, l'éclat",
        letters: [
            { letter: "ن", name: "nūn", forms: ["ن", "نـ", "ـنـ", "ـن"] },
            { letter: "و", name: "wāw", forms: ["و", "ـو"] },
            { letter: "ر", name: "rāʾ", forms: ["ر", "ـر"] }
        ],
        example: "النُّورُ يَهْدِي إِلَى الطَّرِيق",
        exampleFr: "La lumière guide vers le chemin"
    },
    {
        id: 6,
        word: "عِلْم",
        transliteration: "ʿilm",
        type: "اسم",
        typeEn: "noun",
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
        id: 7,
        word: "مَاء",
        transliteration: "māʾ",
        type: "اسم",
        typeEn: "noun",
        meaning: "water",
        meaningFr: "l'eau",
        root: "م - و - ه",
        rootMeaning: "Racine liée à l'eau",
        letters: [
            { letter: "م", name: "mīm", forms: ["م", "مـ", "ـمـ", "ـم"] },
            { letter: "ا", name: "alif", forms: ["ا", "ـا"] },
            { letter: "ء", name: "hamza", forms: ["ء"] }
        ],
        example: "المَاءُ أَصْلُ الحَيَاة",
        exampleFr: "L'eau est la source de la vie"
    },
    {
        id: 8,
        word: "صَبْر",
        transliteration: "ṣabr",
        type: "اسم",
        typeEn: "noun",
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
        id: 9,
        word: "حُبّ",
        transliteration: "ḥubb",
        type: "اسم",
        typeEn: "noun",
        meaning: "love",
        meaningFr: "l'amour",
        root: "ح - ب - ب",
        rootMeaning: "Racine liée à l'amour, l'affection",
        letters: [
            { letter: "ح", name: "ḥāʾ", forms: ["ح", "حـ", "ـحـ", "ـح"] },
            { letter: "ب", name: "bāʾ", forms: ["ب", "بـ", "ـبـ", "ـب"] },
            { letter: "ب", name: "bāʾ (shadda)", forms: ["بّ", "ـبّ"] }
        ],
        example: "الحُبُّ فِي اللهِ أَعْظَمُ الحُبّ",
        exampleFr: "L'amour en Allah est le plus grand amour"
    },
    {
        id: 10,
        word: "سَلَام",
        transliteration: "salām",
        type: "اسم",
        typeEn: "noun",
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
    }
];
