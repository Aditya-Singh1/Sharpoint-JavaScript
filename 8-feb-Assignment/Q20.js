let str1="my name is aditya singh";

let str2="my name is i am from Baghpat";

let stor="";

let combine=(str1 +" "+ str2).split(" ").filter((val,i,ar)=>ar.indexOf(val)===i);

stor+=combine;

console.log(stor); 