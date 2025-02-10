let num=5;
let facto=1;
let arr=[];
let count;
for(let i=num;i>=1;i--){

facto= i * facto;
 arr+=i+'x';
  
}
 
console.log(`${arr}=${facto}`);
