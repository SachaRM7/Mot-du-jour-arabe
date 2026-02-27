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
    wordCounter: document.getElementById('wordCounter'),
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
        elements.exampleAr.textContent = word.example;
        elements.exampleFr.textContent = word.exampleFr;
        elements.wordCounter.textContent = index + 1;
        
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
}

// Event Listeners
function setupEventListeners() {
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
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
