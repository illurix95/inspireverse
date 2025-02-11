import { quotes } from '/quotes.js';

let currentQuoteIndex = -1;
const quoteElement = document.getElementById('quote');
const button = document.getElementById('quoteBtn');

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

// Event listeners
button.addEventListener('click', displayRandomQuote);
// if you want to give a random quote on loadof website
/*window.addEventListener('DOMContentLoaded', displayRandomQuote);*/