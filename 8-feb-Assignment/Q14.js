let peli="OOO";

let arr=[];

let temp="";
arr=peli.toString().split('')
  
for(let i=0;i<1;i++){

 for(let j=arr.length-1;j>=0;j--){

  temp+=arr[j];

  }
 }


 if(temp===peli){

    console.log(`pelindrome string`)
  } else{

    console.log(`Not pelindrome string`)

  }

 