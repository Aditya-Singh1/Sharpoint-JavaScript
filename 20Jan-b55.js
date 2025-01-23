
let a=34;
let b=15;


let add=(a,b)=>{
return a+b;
 
}
 


let sub=(a,b)=>{
    return a-b;
    }
     

let multi=(a,b)=>{
        return a*b;
        
        }
         

        let devid=(a,b)=>{
            return a/b;
            }
    
 let input="/";           
switch(input){
case "+" :
   console.log( add(a,b));
break;
case "-" :
    console.log(sub(a,b));
break;
case "*" :
    console.log( multi(a,b));
break;
case "/" :
    console.log(devid(a,b));
break;
default:
console.log("not valid")

            }