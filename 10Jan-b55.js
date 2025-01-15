hello =()=>{
document.write(`<h1>This Java Script </h1>`);

}

let add=()=>{

    let n1=Number(prompt("Enter the Any num1"))
    let n2=Number(prompt("Enter the Any num2"))
    let n3=n1+n2;
    document.write(`<h1>sum::${n3}</h1>`)

}


let sub=()=>{

    let n1=Number(prompt("Enter the Any num1"))
    let n2=Number(prompt("Enter the Any num2"))
    let n3=n1-n2;
    document.write(`<h1>sub::${n3}</h1>`)

}
let multi=()=>{

    let n1=Number(prompt("Enter the Any num1"))
    let n2=Number(prompt("Enter the Any num2"))
    let n3=n1*n2;
    document.write(`<h1>Multi::${n3}</h1>`)

}

let devide=()=>{

    let n1=Number(prompt("Enter the Any num1"))
    let n2=Number(prompt("Enter the Any num2"))
    let n3=n1/n2;
    document.write(`<h1>devide::${n3}</h1>`)

}

let modul=()=>{

    let n1=Number(prompt("Enter the Any num1"))
    let n2=Number(prompt("Enter the Any num2"))
    let n3=n1%n2;
    document.write(`<h1>Modu::${n3}</h1>`)

}

let x=prompt("enter the name of fun","");

if(x=="sum"){

    document.write(`<h1>${add()}</h1>`);

}
else if(x=="sub"){

    document.write(`<h1>${sub()}</h1>`);

}
else if(x=="multi"){

    document.write(`<h1>${multi()}</h1>`);

}
else if(x=="devide"){

    document.write(`<h1>${devide()}</h1>`);

}
else if(x=="modu"){

    document.write(`<h1>${modul()}</h1>`);

}