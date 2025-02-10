 

let num=9;
let num1=0;
let num2=1;
let temp;
let arr=[0,1]

for(let i=1;i<num;i++){

     temp=num1+num2;
     num1=num2;
     num2=temp;
     arr+=','+num2;

}

console.log(`Fabonacci-:${arr}`);









