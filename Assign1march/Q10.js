//10.Eliminating Duplicate Orders in an E-Commerce System 
//An e-commerce system has duplicate order IDs that need to be removed. 
const orderIDs = [1001, 1002, 1002, 1003, 1004, 1004, 1005]; 

let dup=orderIDs.filter((val,i,ar)=>ar.indexOf(val)==i)

console.log(dup);