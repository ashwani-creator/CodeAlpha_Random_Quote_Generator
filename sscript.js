// Quotes Collection
const quotes = [
{
quote:"Success doesn't come from what you do occasionally. It comes from what you do consistently.",
author:"Marie Forleo"
},
{
quote:"Dream big and dare to fail.",
author:"Norman Vaughan"
},
{
quote:"Believe you can and you're halfway there.",
author:"Theodore Roosevelt"
},
{
quote:"Push yourself because no one else is going to do it for you.",
author:"Unknown"
},
{
quote:"Small steps every day lead to big results.",
author:"Anonymous"
},
{
quote:"Your only limit is your mind.",
author:"Unknown"
},
{
quote:"Learning never exhausts the mind.",
author:"Leonardo da Vinci"
}
];
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("newQuote");
function generateQuote(){
let random = Math.floor(Math.random()*quotes.length);
quote.innerHTML = `"${quotes[random].quote}"`;
author.innerHTML = "- " + quotes[random].author;
}
addBtn.addEventListener("click", generateQuote);
generateQuote();