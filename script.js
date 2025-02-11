const quotes = [
    "Believe you can and you're halfway there.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "You are never too old to set another goal or to dream a new dream.",
    "The only place where success comes before work is in the dictionary.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only way to achieve the impossible is to believe it is possible.",
    "Your time is limited, don't waste it living someone else's life.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Don't watch the clock; do what it does. Keep going."
];

let currentQuoteIndex = -1;
let quoteElement;
let button;

function getRandomIndex() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentQuoteIndex);
    return newIndex;
}

async function displayRandomQuote() {
    button.disabled = true;
    
    // Fade out current quote
    quoteElement.classList.add('fade-out');
    
    // Wait for fade-out animation
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Update quote content
    currentQuoteIndex = getRandomIndex();
    quoteElement.textContent = quotes[currentQuoteIndex];
    
    // Fade in new quote
    quoteElement.classList.remove('fade-out');
    
    // Wait for DOM update
    await new Promise(resolve => requestAnimationFrame(resolve));
    
    button.disabled = false;
}

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    quoteElement = document.getElementById('quote');
    button = document.getElementById('quoteBtn');

    // Add event listener to the button
    button.addEventListener('click', displayRandomQuote);

    // Display the first quote
    //displayRandomQuote();
});
