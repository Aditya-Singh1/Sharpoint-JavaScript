let str="hello world a"
let char='w'
 

let  ar=[];
let i;
ar=str.toString().split('');

// console.log(ar);
for(i=0;i<=str.length-1;i++){

    if(ar[i]==char){

        console.log(`exists ${ar[i]}`)
        
    } 
    
}
 





 