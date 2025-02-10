let rev="my name is Adit";
let hold=[]
let str="";

hold=rev.toString().split(' ')

for(let i=0;i<1;i++){
     
   for(let j=hold.length-1;j>=0;j--){

    str+=hold[j]+' '

     
   }

}
console.log(str);