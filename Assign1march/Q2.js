// 2.Finding Short-Named Customers for a Loyalty Program 
//A shopping mall wants to send a personalized gift to customers whose names have fewer than 
//5 characters. Filter out such names. 

const customers = ["Amit", "Raj", "Vikas", "Sanjay", "Priya", "Rohan"];

let len =customers.filter((val)=>val.length==5)

console.log(len);
