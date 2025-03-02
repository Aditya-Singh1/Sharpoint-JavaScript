//9.Extracting Gmail Users for an Email Campaign 
//A company is sending promotional emails and needs to filter out customers using Gmail. 
const users = [ 
{ name: "Aryan", email: "aryan@gmail.com" }, 
{ name: "Suresh", email: "suresh@yahoo.com" }, 
{ name: "Meena", email: "meena@gmail.com" } 
]; 


let data=users.filter((val)=>/@gmail\.com$/.test(val.email))
console.log(data);

let data1=users.filter((val)=>val.email.endsWith('@gmail.com'))
 console.log("data1",data1);