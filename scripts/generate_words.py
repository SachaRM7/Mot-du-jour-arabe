#!/usr/bin/env python3
"""
Générateur automatique de words.js pour l'app Mot du Jour Arabe
Usage: python generate_words.py input.json > ../words.js
"""

import json
import sys
import re

# Mapping des lettres arabes vers leurs formes (isolée, initiale, médiane, finale)
# et leur nom en translittération
ARABIC_LETTERS = {
    'ا': {'name': 'alif', 'forms': ['ا', 'ا', 'ـا', 'ـا'], 'connects_left': False},
    'أ': {'name': 'alif hamza', 'forms': ['أ', 'أ', 'ـأ', 'ـأ'], 'connects_left': False},
    'إ': {'name': 'alif hamza', 'forms': ['إ', 'إ', 'ـإ', 'ـإ'], 'connects_left': False},
    'آ': {'name': 'alif madda', 'forms': ['آ', 'آ', 'ـآ', 'ـآ'], 'connects_left': False},
    'ب': {'name': 'bāʾ', 'forms': ['ب', 'بـ', 'ـبـ', 'ـب'], 'connects_left': True},
    'ت': {'name': 'tāʾ', 'forms': ['ت', 'تـ', 'ـتـ', 'ـت'], 'connects_left': True},
    'ث': {'name': 'thāʾ', 'forms': ['ث', 'ثـ', 'ـثـ', 'ـث'], 'connects_left': True},
    'ج': {'name': 'jīm', 'forms': ['ج', 'جـ', 'ـجـ', 'ـج'], 'connects_left': True},
    'ح': {'name': 'ḥāʾ', 'forms': ['ح', 'حـ', 'ـحـ', 'ـح'], 'connects_left': True},
    'خ': {'name': 'khāʾ', 'forms': ['خ', 'خـ', 'ـخـ', 'ـخ'], 'connects_left': True},
    'د': {'name': 'dāl', 'forms': ['د', 'د', 'ـد', 'ـد'], 'connects_left': False},
    'ذ': {'name': 'dhāl', 'forms': ['ذ', 'ذ', 'ـذ', 'ـذ'], 'connects_left': False},
    'ر': {'name': 'rāʾ', 'forms': ['ر', 'ر', 'ـر', 'ـر'], 'connects_left': False},
    'ز': {'name': 'zāy', 'forms': ['ز', 'ز', 'ـز', 'ـز'], 'connects_left': False},
    'س': {'name': 'sīn', 'forms': ['س', 'سـ', 'ـسـ', 'ـس'], 'connects_left': True},
    'ش': {'name': 'shīn', 'forms': ['ش', 'شـ', 'ـشـ', 'ـش'], 'connects_left': True},
    'ص': {'name': 'ṣād', 'forms': ['ص', 'صـ', 'ـصـ', 'ـص'], 'connects_left': True},
    'ض': {'name': 'ḍād', 'forms': ['ض', 'ضـ', 'ـضـ', 'ـض'], 'connects_left': True},
    'ط': {'name': 'ṭāʾ', 'forms': ['ط', 'طـ', 'ـطـ', 'ـط'], 'connects_left': True},
    'ظ': {'name': 'ẓāʾ', 'forms': ['ظ', 'ظـ', 'ـظـ', 'ـظ'], 'connects_left': True},
    'ع': {'name': 'ʿayn', 'forms': ['ع', 'عـ', 'ـعـ', 'ـع'], 'connects_left': True},
    'غ': {'name': 'ghayn', 'forms': ['غ', 'غـ', 'ـغـ', 'ـغ'], 'connects_left': True},
    'ف': {'name': 'fāʾ', 'forms': ['ف', 'فـ', 'ـفـ', 'ـف'], 'connects_left': True},
    'ق': {'name': 'qāf', 'forms': ['ق', 'قـ', 'ـقـ', 'ـق'], 'connects_left': True},
    'ك': {'name': 'kāf', 'forms': ['ك', 'كـ', 'ـكـ', 'ـك'], 'connects_left': True},
    'ل': {'name': 'lām', 'forms': ['ل', 'لـ', 'ـلـ', 'ـل'], 'connects_left': True},
    'م': {'name': 'mīm', 'forms': ['م', 'مـ', 'ـمـ', 'ـم'], 'connects_left': True},
    'ن': {'name': 'nūn', 'forms': ['ن', 'نـ', 'ـنـ', 'ـن'], 'connects_left': True},
    'ه': {'name': 'hāʾ', 'forms': ['ه', 'هـ', 'ـهـ', 'ـه'], 'connects_left': True},
    'هـ': {'name': 'hāʾ', 'forms': ['هـ', 'هـ', 'ـهـ', 'ـه'], 'connects_left': True},
    'و': {'name': 'wāw', 'forms': ['و', 'و', 'ـو', 'ـو'], 'connects_left': False},
    'ي': {'name': 'yāʾ', 'forms': ['ي', 'يـ', 'ـيـ', 'ـي'], 'connects_left': True},
    'ى': {'name': 'alif maqṣūra', 'forms': ['ى', 'ى', 'ـى', 'ـى'], 'connects_left': False},
    'ة': {'name': 'tāʾ marbūṭa', 'forms': ['ة', 'ة', 'ـة', 'ـة'], 'connects_left': False},
    'ء': {'name': 'hamza', 'forms': ['ء', 'ء', 'ء', 'ء'], 'connects_left': False},
    'ئ': {'name': 'hamza', 'forms': ['ئ', 'ئـ', 'ـئـ', 'ـئ'], 'connects_left': True},
    'ؤ': {'name': 'hamza', 'forms': ['ؤ', 'ؤ', 'ـؤ', 'ـؤ'], 'connects_left': False},
}

# Tashkil (diacritiques) à ignorer pour l'extraction des lettres
TASHKIL = re.compile(r'[\u064B-\u065F\u0670\u0640]')  # includes tatweel

def remove_tashkil(text):
    """Retire les voyelles/diacritiques arabes"""
    return TASHKIL.sub('', text)

def extract_letters(word):
    """Extrait les lettres d'un mot arabe avec leurs formes"""
    clean_word = remove_tashkil(word)
    letters = []
    
    for char in clean_word:
        if char in ARABIC_LETTERS:
            info = ARABIC_LETTERS[char]
            letters.append({
                'letter': char,
                'name': info['name'],
                'forms': info['forms']
            })
        elif char.strip():  # Lettre inconnue mais pas espace
            # Gérer les lettres avec shadda ou autres cas
            letters.append({
                'letter': char,
                'name': char,
                'forms': [char, char, char, char]
            })
    
    return letters

def extract_root_letters(word):
    """Tente d'extraire les lettres racines (3 consonnes principales)"""
    clean = remove_tashkil(word)
    
    # Retirer SEULEMENT l'article défini (ال)
    if clean.startswith('ال'):
        clean = clean[2:]
    
    # Retirer suffixes féminins/pluriels évidents
    if clean.endswith('ة') and len(clean) > 3:
        clean = clean[:-1]
    elif clean.endswith('ات') and len(clean) > 4:
        clean = clean[:-2]
    
    # Garder les consonnes principales (ignorer lettres faibles sauf si mot court)
    consonants = []
    for c in clean:
        if c in ARABIC_LETTERS and c not in 'اوي':
            consonants.append(c)
    
    # Si pas assez de consonnes, inclure les lettres faibles
    if len(consonants) < 3:
        consonants = [c for c in clean if c in ARABIC_LETTERS]
    
    # Retourner les 3 premières consonnes
    root = consonants[:3] if len(consonants) >= 3 else consonants
    return ' - '.join(root) if root else ''

def generate_word_entry(word_data, word_id):
    """Génère une entrée complète pour un mot"""
    word = word_data['word']
    
    entry = {
        'id': word_id,
        'word': word,
        'transliteration': word_data.get('transliteration', ''),
        'type': word_data.get('type', 'اسم'),
        'meaning': word_data.get('meaning', ''),
        'meaningFr': word_data.get('meaningFr', ''),
        'root': word_data.get('root') or extract_root_letters(word),
        'rootMeaning': word_data.get('rootMeaning', ''),
        'letters': extract_letters(word),
        'example': word_data.get('example', ''),
        'exampleFr': word_data.get('exampleFr', '')
    }
    
    return entry

def generate_words_js(words_data):
    """Génère le contenu complet de words.js"""
    entries = []
    seen_words = set()  # Pour détecter les doublons
    duplicates = []
    
    for i, word_data in enumerate(words_data, 1):
        word = remove_tashkil(word_data['word'])  # Normaliser sans voyelles
        
        if word in seen_words:
            duplicates.append(word_data['word'])
            continue  # Skip les doublons
        
        seen_words.add(word)
        entry = generate_word_entry(word_data, len(entries) + 1)
        entries.append(entry)
    
    # Avertir des doublons
    if duplicates:
        print(f"⚠️  {len(duplicates)} doublon(s) ignoré(s): {', '.join(duplicates)}", file=sys.stderr)
    
    print(f"✅ {len(entries)} mots générés", file=sys.stderr)
    
    # Générer le JS
    output = "// Base de vocabulaire arabe - Généré automatiquement\n"
    output += f"// {len(entries)} mots uniques\n"
    output += "const ARABIC_WORDS = "
    output += json.dumps(entries, ensure_ascii=False, indent=4)
    output += ";\n"
    
    return output

def main():
    if len(sys.argv) < 2:
        print("Usage: python generate_words.py input.json", file=sys.stderr)
        print("\nFormat input.json:", file=sys.stderr)
        print(json.dumps([{
            "word": "كِتَاب",
            "transliteration": "kitāb",
            "type": "اسم",
            "meaning": "book",
            "meaningFr": "le livre",
            "rootMeaning": "Racine liée à l'écriture",
            "example": "هَذَا كِتَابٌ جَمِيل",
            "exampleFr": "C'est un beau livre"
        }], ensure_ascii=False, indent=2), file=sys.stderr)
        sys.exit(1)
    
    input_file = sys.argv[1]
    
    with open(input_file, 'r', encoding='utf-8') as f:
        words_data = json.load(f)
    
    output = generate_words_js(words_data)
    print(output)

if __name__ == '__main__':
    main()
