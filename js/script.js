const quotes = [
  {
    quote: 'Life is like a mop. Sometimes life gets full of dirt and crud and hairballs and things and you gotta clean it out',
    source: 'Stanley Spadowski',
    tag: 'Comedy'
  },
  {
    quote: 'Don\'t worry Bob. It\'s just like working in a fish-market. Except you don\'t have to clean and gut fish all day',
    source: 'George Newman',
    citation: 'UHF'
  },
  {
    quote: 'For those of you just joining us, today we\'re teaching poodles how to fly.',
    source: 'Raul Hernandez',
    year: 1989
  },
  {
    quote: 'This is a TV studio, not a home for irresponsible pus-brains!',
    source: 'RJ Fletcher'
  },
  {
    quote: 'If nobody comes down here and buys a car in the next hour, I\'m gonna club this baby seal.',
    source: 'Crazy Ernie'
  }
]

/* Get quote data, join the quote properties together and display it on the DOM */

const printQuote = () => {
    let getQuote = getRandomQuote(quotes);
    let stringOfQuoteProperties = stringQuote(getQuote);
    document.querySelector('#quote-box').innerHTML = `${stringOfQuoteProperties}</p>`;

    // Randomly change background color
    let colors = ['black', 'blue', 'yellow', 'red', 'pink', 'orange'];
    document.body.style.backgroundColor = colors[Math.ceil(Math.random() * colors.length -1)]
 };

 
/* Return a random quote from array of quotes */

const getRandomQuote = (array) => {
  let randomNum = Math.ceil(Math.random() * array.length - 1);
  return array[randomNum];
};


/* Join string together and return the concatenated string */

const stringQuote = (quote) =>{
  let newString = '';
  newString = `<p class="quote">${quote.quote}</p>`;
  newString += `<p class="source">${quote.source}`;
 
 /* Check to see if quotes contain special properties */
  newString += quote.citation ? `<span class="citation">${quote.citation}</span>` : ``;
  newString += quote.year ? `<span class="year">${quote.year}</span>` : ``;
  newString += quote.tag ? `<span class="tag">${quote.tag}</span>` : ``;
  return newString;
};


/* Start 30 second timer for random quotes */

let timer = setInterval(printQuote, 30000);


/* Load random quotes on click and reset timer*/

document.getElementById('loadQuote').addEventListener("click", () => {
  clearInterval(timer)
  printQuote()
  timer = setInterval(printQuote, 30000)

});
