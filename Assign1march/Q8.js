//8.Filtering Out Multi-Promotion Products 
//A store wants to find products that are eligible for both seasonal and special discount 
//promotions (divisible by both 3 and 5). 
const productDiscounts = [10, 15, 20, 30, 45, 50, 60];
let data=productDiscounts.filter((val)=>val%3==0 && val%5==0)
console.log(data);