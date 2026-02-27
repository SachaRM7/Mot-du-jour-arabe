// App State
let currentDayOffset = 0; // 0 = today, 1 = yesterday, 2 = day before, etc.
let savedWords = JSON.parse(localStorage.getItem('savedWords') || '[]');
// Get initial theme: saved preference > system preference > light
function getInitialTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}
let currentTheme = getInitialTheme();
let showLetterForms = false;

// Get day of year for a given date
function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

// Get word index for a specific day offset (0 = today)
function getWordIndexForDay(dayOffset) {
    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() - dayOffset);
    const dayOfYear = getDayOfYear(targetDate);
    return dayOfYear % ARABIC_WORDS.length;
}

// Get date for display
function getDateForOffset(dayOffset) {
    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() - dayOffset);
    return targetDate;
}

// Remove Arabic diacritics (tashkil) for comparison
function removeTashkil(text) {
    return text.replace(/[\u064B-\u065F\u0670]/g, '');
}

// Highlight word in example sentence
function highlightWordInExample(word, example) {
    const wordBase = removeTashkil(word);
    
    // Find the word in the example (ignoring tashkil)
    const exampleBase = removeTashkil(example);
    const index = exampleBase.indexOf(wordBase);
    
    if (index === -1) {
        // Try to find the root letters in sequence
        return example; // No match found
    }
    
    // Find the actual position in the original text with tashkil
    let actualStart = 0;
    let baseCount = 0;
    
    for (let i = 0; i < example.length; i++) {
        if (baseCount === index) {
            actualStart = i;
            break;
        }
        if (!/[\u064B-\u065F\u0670]/.test(example[i])) {
            baseCount++;
        }
    }
    
    // Find the end position
    let actualEnd = actualStart;
    let matchedBase = 0;
    
    for (let i = actualStart; i < example.length && matchedBase < wordBase.length; i++) {
        actualEnd = i + 1;
        if (!/[\u064B-\u065F\u0670]/.test(example[i])) {
            matchedBase++;
        }
    }
    
    // Build highlighted string
    const before = example.substring(0, actualStart);
    const match = example.substring(actualStart, actualEnd);
    const after = example.substring(actualEnd);
    
    return `${before}<span class="highlight">${match}</span>${after}`;
}

// DOM Elements
const elements = {
    currentDate: document.getElementById('currentDate'),
    wordType: document.getElementById('wordType'),
    arabicWord: document.getElementById('arabicWord'),
    transliteration: document.getElementById('transliteration'),
    listenBtn: document.getElementById('listenBtn'),
    meaning: document.getElementById('meaning'),
    meaningFr: document.getElementById('meaningFr'),
    lettersGrid: document.getElementById('lettersGrid'),
    rootLetters: document.getElementById('rootLetters'),
    rootMeaning: document.getElementById('rootMeaning'),
    exampleAr: document.getElementById('exampleAr'),
    exampleFr: document.getElementById('exampleFr'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    archiveBtn: document.getElementById('archiveBtn')
};

// Initialize
function init() {
    initTheme();
    loadTodaysWord();
    setupEventListeners();
    updateFavoritesCount();
}

// Theme Management
function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
}

// Update date display for current offset
function updateDate(dayOffset = 0) {
    const date = getDateForOffset(dayOffset);
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const dateFr = date.toLocaleDateString('fr-FR', options);
    elements.currentDate.textContent = dateFr;
}

// Load today's word
function loadTodaysWord() {
    currentDayOffset = 0;
    displayWordForDay(0);
}

// Display word for a specific day offset
function displayWordForDay(dayOffset) {
    currentDayOffset = dayOffset;
    const wordIndex = getWordIndexForDay(dayOffset);
    
    // Update date in header
    const date = getDateForOffset(dayOffset);
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    elements.currentDate.textContent = date.toLocaleDateString('fr-FR', options);
    
    displayWord(wordIndex, dayOffset);
}

// Display word
function displayWord(index, dayOffset = 0) {
    const word = ARABIC_WORDS[index];
    if (!word) return;
    
    // Animate out
    document.querySelector('.word-card').style.opacity = '0';
    
    setTimeout(() => {
        // Update content
        elements.wordType.textContent = word.type;
        elements.arabicWord.textContent = word.word;
        elements.transliteration.textContent = word.transliteration;
        elements.meaning.textContent = word.meaning;
        elements.meaningFr.textContent = word.meaningFr;
        elements.rootLetters.textContent = word.root;
        elements.rootMeaning.textContent = word.rootMeaning;
        
        // Highlight word in example (ignore tashkil for matching)
        elements.exampleAr.innerHTML = highlightWordInExample(word.word, word.example);
        elements.exampleFr.textContent = word.exampleFr;
        
        // Update letters grid
        renderLettersGrid(word.letters);
        
        // Update navigation buttons
        // Can't go to future (dayOffset can't be negative)
        elements.nextBtn.disabled = (dayOffset === 0);
        // Can go back in history (limit to ~30 days or word count)
        elements.prevBtn.disabled = (dayOffset >= Math.min(30, ARABIC_WORDS.length - 1));
        
        // Update archive button
        updateArchiveButton(word.id);
        
        // Animate in
        document.querySelector('.word-card').style.opacity = '1';
    }, 150);
}

// Render letters breakdown
function renderLettersGrid(letters) {
    const formClasses = ['isolated', 'initial', 'medial', 'final'];
    
    if (showLetterForms) {
        // Detailed view with all forms
        elements.lettersGrid.innerHTML = letters.map(l => `
            <div class="letter-card">
                <div class="letter-arabic">${l.letter}</div>
                <div class="letter-name">${l.name}</div>
                <div class="letter-forms">
                    ${l.forms.slice(0, 4).map((f, i) => `<span class="letter-form form-${formClasses[i] || 'isolated'}">${f}</span>`).join('')}
                </div>
            </div>
        `).join('');
        document.getElementById('letterIndicators').style.display = 'flex';
    } else {
        // Simple view - just the letters
        elements.lettersGrid.innerHTML = letters.map(l => `
            <div class="letter-card simple">
                <div class="letter-arabic">${l.letter}</div>
                <div class="letter-name">${l.name}</div>
            </div>
        `).join('');
        document.getElementById('letterIndicators').style.display = 'none';
    }
}

function toggleLetterForms() {
    showLetterForms = !showLetterForms;
    const btn = document.getElementById('toggleFormsBtn');
    btn.querySelector('.toggle-label').textContent = showLetterForms ? 'Masquer' : 'Voir formes';
    btn.classList.toggle('active', showLetterForms);
    
    // Re-render current word's letters
    const wordIndex = getWordIndexForDay(currentDayOffset);
    const word = ARABIC_WORDS[wordIndex];
    if (word) {
        renderLettersGrid(word.letters);
    }
}

// Text-to-Speech
function speakArabic(text) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    utterance.rate = 0.8;
    utterance.pitch = 1;
    
    // Try to find Arabic voice
    const voices = window.speechSynthesis.getVoices();
    const arabicVoice = voices.find(v => v.lang.startsWith('ar'));
    if (arabicVoice) {
        utterance.voice = arabicVoice;
    }
    
    // Visual feedback
    elements.listenBtn.style.transform = 'scale(0.95)';
    utterance.onend = () => {
        elements.listenBtn.style.transform = 'scale(1)';
    };
    
    window.speechSynthesis.speak(utterance);
}

// Archive functionality
function toggleSave(wordId) {
    const index = savedWords.indexOf(wordId);
    if (index > -1) {
        savedWords.splice(index, 1);
    } else {
        savedWords.push(wordId);
    }
    localStorage.setItem('savedWords', JSON.stringify(savedWords));
    updateArchiveButton(wordId);
}

function updateArchiveButton(wordId) {
    const isSaved = savedWords.includes(wordId);
    elements.archiveBtn.classList.toggle('saved', isSaved);
    updateFavoritesCount();
}

function updateFavoritesCount() {
    document.getElementById('favoritesCount').textContent = savedWords.length;
}

// Favorites Modal
function openFavoritesModal() {
    const modal = document.getElementById('favoritesModal');
    const list = document.getElementById('favoritesList');
    
    if (savedWords.length === 0) {
        list.innerHTML = `
            <div class="empty-favorites">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <p>Aucun favori pour l'instant.<br>Appuie sur le marque-page pour sauvegarder un mot.</p>
            </div>
        `;
    } else {
        const items = savedWords.map(id => {
            const word = ARABIC_WORDS.find(w => w.id === id);
            if (!word) return '';
            return `
                <div class="favorite-item" data-index="${ARABIC_WORDS.indexOf(word)}">
                    <span class="favorite-word">${word.word}</span>
                    <span class="favorite-meaning">${word.meaningFr}</span>
                </div>
            `;
        }).join('');
        list.innerHTML = items;
        
        // Add click handlers - just close modal, can't navigate to arbitrary words
        list.querySelectorAll('.favorite-item').forEach(item => {
            item.addEventListener('click', () => {
                closeFavoritesModal();
            });
        });
    }
    
    modal.classList.add('active');
}

function closeFavoritesModal() {
    document.getElementById('favoritesModal').classList.remove('active');
}

// Event Listeners
function setupEventListeners() {
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Letter forms toggle
    document.getElementById('toggleFormsBtn').addEventListener('click', toggleLetterForms);
    
    // Favorites button
    document.getElementById('favoritesBtn').addEventListener('click', openFavoritesModal);
    document.getElementById('closeModal').addEventListener('click', closeFavoritesModal);
    document.getElementById('favoritesModal').addEventListener('click', (e) => {
        if (e.target.id === 'favoritesModal') closeFavoritesModal();
    });
    
    // Listen button
    elements.listenBtn.addEventListener('click', () => {
        const wordIndex = getWordIndexForDay(currentDayOffset);
        const word = ARABIC_WORDS[wordIndex];
        speakArabic(word.word);
    });
    
    // Navigation (prev = go to past, next = go to future/today)
    elements.prevBtn.addEventListener('click', () => {
        // Go to previous day (further in the past)
        if (currentDayOffset < Math.min(30, ARABIC_WORDS.length - 1)) {
            currentDayOffset++;
            displayWordForDay(currentDayOffset);
        }
    });
    
    elements.nextBtn.addEventListener('click', () => {
        // Go to next day (closer to today)
        if (currentDayOffset > 0) {
            currentDayOffset--;
            displayWordForDay(currentDayOffset);
        }
    });
    
    // Archive
    elements.archiveBtn.addEventListener('click', () => {
        const wordIndex = getWordIndexForDay(currentDayOffset);
        const word = ARABIC_WORDS[wordIndex];
        toggleSave(word.id);
    });
    
    // Swipe gestures
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const diff = touchStartX - touchEndX;
        const threshold = 50;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0 && currentDayOffset < Math.min(30, ARABIC_WORDS.length - 1)) {
                // Swipe left = go to past (increase offset)
                currentDayOffset++;
                displayWordForDay(currentDayOffset);
            } else if (diff < 0 && currentDayOffset > 0) {
                // Swipe right = go to future/today (decrease offset)
                currentDayOffset--;
                displayWordForDay(currentDayOffset);
            }
        }
    }
    
    // Load voices
    if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = () => {
            // Voices loaded
        };
    }
}

// Unregister any existing Service Worker to avoid cache issues
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(reg => reg.unregister());
    });
}

// Start app
document.addEventListener('DOMContentLoaded', init);
