//5.Finding Products with the Letter ‘A’ in the Name 
// A supermarket wants to highlight products that contain the letter ‘a’ in their names. 

const products = ["Apple", "Banana", "Grapes", "Mango", "Kiwi", "Papaya"]; 
let data=products.filter(val=>val.startsWith('A'))
console.log(data);