// App State
let currentWordIndex = 0;
let savedWords = JSON.parse(localStorage.getItem('savedWords') || '[]');
let currentTheme = localStorage.getItem('theme') || 'light';

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
    updateDate();
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

// Update date display
function updateDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    // French date format
    const dateFr = now.toLocaleDateString('fr-FR', options);
    elements.currentDate.textContent = dateFr;
}

// Get today's word based on date
function loadTodaysWord() {
    // Use day of year to cycle through words
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    currentWordIndex = dayOfYear % ARABIC_WORDS.length;
    displayWord(currentWordIndex);
}

// Display word
function displayWord(index) {
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
        
        // Highlight word in example (search with and without tashkil)
        const wordBase = word.word.replace(/[َُِْٰٓٔءّـًٌٍّ]/g, '');
        let highlightedExample = word.example;
        // Try to find and highlight the word
        if (word.example.includes(word.word)) {
            highlightedExample = word.example.replace(word.word, `<span class="highlight">${word.word}</span>`);
        }
        elements.exampleAr.innerHTML = highlightedExample;
        elements.exampleFr.textContent = word.exampleFr;
        
        // Update letters grid
        renderLettersGrid(word.letters);
        
        // Update navigation
        elements.prevBtn.disabled = index === 0;
        elements.nextBtn.disabled = index === ARABIC_WORDS.length - 1;
        
        // Update archive button
        updateArchiveButton(word.id);
        
        // Animate in
        document.querySelector('.word-card').style.opacity = '1';
    }, 150);
}

// Render letters breakdown
function renderLettersGrid(letters) {
    elements.lettersGrid.innerHTML = letters.map(l => `
        <div class="letter-card">
            <div class="letter-arabic">${l.letter}</div>
            <div class="letter-name">${l.name}</div>
            <div class="letter-forms">
                ${l.forms.slice(0, 4).map(f => `<span class="letter-form">${f}</span>`).join('')}
            </div>
        </div>
    `).join('');
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
        
        // Add click handlers
        list.querySelectorAll('.favorite-item').forEach(item => {
            item.addEventListener('click', () => {
                const index = parseInt(item.dataset.index);
                currentWordIndex = index;
                displayWord(index);
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
    
    // Favorites button
    document.getElementById('favoritesBtn').addEventListener('click', openFavoritesModal);
    document.getElementById('closeModal').addEventListener('click', closeFavoritesModal);
    document.getElementById('favoritesModal').addEventListener('click', (e) => {
        if (e.target.id === 'favoritesModal') closeFavoritesModal();
    });
    
    // Listen button
    elements.listenBtn.addEventListener('click', () => {
        const word = ARABIC_WORDS[currentWordIndex];
        speakArabic(word.word);
    });
    
    // Navigation
    elements.prevBtn.addEventListener('click', () => {
        if (currentWordIndex > 0) {
            currentWordIndex--;
            displayWord(currentWordIndex);
        }
    });
    
    elements.nextBtn.addEventListener('click', () => {
        if (currentWordIndex < ARABIC_WORDS.length - 1) {
            currentWordIndex++;
            displayWord(currentWordIndex);
        }
    });
    
    // Archive
    elements.archiveBtn.addEventListener('click', () => {
        const word = ARABIC_WORDS[currentWordIndex];
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
            if (diff > 0 && currentWordIndex < ARABIC_WORDS.length - 1) {
                // Swipe left (next) - but RTL so actually prev in visual
                currentWordIndex++;
                displayWord(currentWordIndex);
            } else if (diff < 0 && currentWordIndex > 0) {
                // Swipe right (prev)
                currentWordIndex--;
                displayWord(currentWordIndex);
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

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('SW registered'))
            .catch(err => console.log('SW registration failed:', err));
    });
}

// Start app
document.addEventListener('DOMContentLoaded', init);
