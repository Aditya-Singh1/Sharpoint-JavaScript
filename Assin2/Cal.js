let num1=Number(prompt("enter the num1"));
let num2=Number(prompt("enter the num2"));
let res=0;

let add=(num1,num2)=>{
res=num1+num2;
return res;
}
let sub=(num1,num2)=>{
    res=num1-num2;
    return res;
}

let multi=(num1,num2)=>{
    res=num1*num2
    return res;
}

let devide=(num1,num2)=>{
 res=num1/num2;
 return res;
}

let exit=()=>{

    document.write(`<h1 className="">exit!</h1>`)

}

let data=Number((prompt(`
    if you want addition pres 1 \n
    if you want subtract press 2 \n
    if you want multiply pres 3 \n
    if you want devide pres 4 \n
    if you want exit pres 5 \n
    `)))
switch(data){

    case 1:
     document.write(add(num1,num2));
     break;

     case 2:
        document.write(sub(num1,num2));
     break;
     case 3:
        document.write(multi(num1,num2));
     break;
     case 4:
        document.write(devide(num1,num2));
     break;
     case 5:
        exit();
     break;
     default :
     document.write("invalid key!")
     break;

}
