//12.Finding Best-Selling Books After 2000 
//A bookstore wants to recommend books published after 2000 with a rating of at least 4.0. 
const books = [ 
{ title: "Ramayana", year: 1999, rating: 4.5 }, 
{ title: "Mahabharata", year: 2005, rating: 3.8 }, 
{ title: "Bhagavad Gita", year: 2010, rating: 4.2 } 
];

let after=books.filter((val)=>val.year>2000)
console.log(after);