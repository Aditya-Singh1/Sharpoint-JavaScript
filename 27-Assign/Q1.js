let value=[1,2,3,4,5,6,7,8,9,10];
 
let groupA=[];
let groupB=[];

let iq=(value)=>{
 
    for(let i=0;i<value.length;i++){

  if(value[i]%2==0){     
    groupA.push(value[i])
   }else{
    groupB.push(value[i]);
   }
 
}
}

 iq(value);

console.log(`GroupA:${groupA}`)
console.log(`GroupB:${groupB}`)
