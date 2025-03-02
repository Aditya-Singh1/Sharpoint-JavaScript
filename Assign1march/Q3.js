//3.Filtering Out Defective Products 
//A warehouse stores product quality ratings, where negative numbers indicate defective 
//products. Remove all defective products. 
const productRatings = [-5, 8, -2, 10, 3, -7, 6];
 
let less=productRatings.filter((val)=>val>0);
console.log(less);