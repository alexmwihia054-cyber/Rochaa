const quotes = [
      { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
      { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
      { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
      { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
      { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
      { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
      { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
      { text: "Dream bigger. Do bigger.", author: "Unknown" },
      { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Unknown" },
      { text: "Little things make big days.", author: "Unknown" },
      { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
      { text: "Don’t wait for opportunity. Create it.", author: "Unknown" },
      { text: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", author: "Unknown" },
      { text: "The key to success is to focus on goals, not obstacles.", author: "Unknown" },
      { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
      { text: "Great things never come from comfort zones.", author: "Unknown" },
      { text: "Success is what happens after you have survived all your mistakes.", author: "Anora Lee" },
      { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
      { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
      { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
      { text: "Work hard in silence, let your success be your noise.", author: "Frank Ocean" },
      { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
      { text: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
      { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
      { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
      { text: "Dream it. Wish it. Do it.", author: "Unknown" },
      { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
      { text: "Hard work beats talent when talent doesn’t work hard.", author: "Tim Notke" }
    ];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
let charIndex = 0, currentQuote = '', typingSpeed = 50, pauseBetweenQuotes = 4000;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function typeQuote() {
  if (charIndex < currentQuote.length) {
    quoteElement.textContent += currentQuote.charAt(charIndex);
    charIndex++;
    setTimeout(typeQuote, typingSpeed);
  } else {
    setTimeout(eraseQuote, pauseBetweenQuotes);
  }
}
function eraseQuote() {
  if (charIndex > 0) {
    quoteElement.textContent = currentQuote.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseQuote, typingSpeed / 2);
  } else {
    displayNewQuote();
  }
}
function displayNewQuote() {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  currentQuote = `"${q.text}"`;
  authorElement.textContent = `\u2014 ${q.author}`;
  charIndex = 0;
  quoteElement.textContent = '';
  if (reduceMotion) {
    quoteElement.textContent = currentQuote;
    setTimeout(displayNewQuote, pauseBetweenQuotes);
  } else {
    typeQuote();
  }
}
function typeWelcomeText(text, elementId, speed = 120) {
  const el = document.getElementById(elementId);
  if (!el) return;
  if (reduceMotion) { el.textContent = text; el.style.borderRight = 'none'; return; }
  let i = 0;
  el.textContent = '';
  (function typeChar() {
    if (i < text.length) { el.textContent += text.charAt(i++); setTimeout(typeChar, speed); }
    else { el.style.borderRight = 'none'; }
  })();
}
window.onload = () => {
  displayNewQuote();
  typeWelcomeText('Welcome to My Portfolio', 'welcome', 120);
};
