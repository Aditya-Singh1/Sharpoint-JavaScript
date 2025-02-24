let str="this is javascript programming place".toString().split('')
let char="i"
let count=0;

let hold=""

str.forEach(val=> { 

    if(val===char){
        hold=val
        // console.log("is in the sentence ",val);
        count++;
    }


 });

 console.log(count,"time",hold);