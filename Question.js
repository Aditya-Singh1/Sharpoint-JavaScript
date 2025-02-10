// let num=2
// let str="";
// let check="X"

// for(let i=1;i<=10;i++){

// let val=num*i

// let arr=[];

// arr.push(`${num} XXXX ${i} = ${val}` );
// // console.log(`${arr}`)
// str+=arr.toString().split(' ')+','


// }
// //  console.log(str);

// let count=1;

// for(let i=1;i<=str.length;i++){

//     if(check===str[i]){

//    console.log(str[i],`${count++}`);

//     }

// }



// let num=15;
// let c=0;
// for(i=1;i<=num;i++){

//     if(num%i==0){
 
//     console.log(`multiple of n${num} :${i} count:${c}`)
// c++;
//     }

// }

// let ch="";
// let arr=["aditya","anuj","ankur"].toString().split('');


// for(let ar of arr.toString().toLowerCase()){

//     if(ar==="a"|| ar==="e"||ar=="i"||ar=="o"||ar=="u"){

//      console.log(ar);

//  }

 
//   }
 
// create the pattern for validate usernam 
//  3 < char|| char < 15 kam
// alfabet,number caps 1 word  and small;

let pattern= /^[A-Za-z][A-Za-z0-9_]{3,15}/g;

let username="Adit";

  if(pattern.test(username)){
    console.log(`right way `)
  }else{
    console.log(`wrong way`);
  }

 
//   let date =/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/


let date=/(19|20)\d{2}(0[1-9]|1[0,1,2])(0[1-9]|[12][0-9]|3[01])/

let d= date.test( );

 console.log(d);

