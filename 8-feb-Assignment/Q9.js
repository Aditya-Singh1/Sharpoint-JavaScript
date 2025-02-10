let str="Dreamer infotech";

let store=[]

let data=""
let data1=""

for(let i=0;i<str.length;i++){

store=str.toString().split('');

if(store[i]=='i' ||store[i]=='m'){

       data+=store[i];
       
}else{

       data1+=store[i]
    
}


}
console.log(`differ:${data}`)

 console.log(`data:${data1}`);


