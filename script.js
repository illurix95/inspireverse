import { quotes } from './quotes.js';

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
    displayRandomQuote();
});
