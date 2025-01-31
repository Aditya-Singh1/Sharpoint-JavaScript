 
 
 let store=()=>{
 
  
  let itemnumber=Number(prompt("enter the add item no"))

 if(isNaN(itemnumber) || itemnumber<=0){

    document.write("this is not valid try again")

    return;
 }

 let additem=[];
  let theresold=200;

 for(let i=0;i < itemnumber;i++){

 let itemname=prompt(`enter the name of item::${i+1}`);

 if(!itemname){

    document.write(`this is cant be empty try again`);
    i--;
   continue;
 }



let itemprice=parseFloat(prompt(`enter the price of item `));

if(isNaN(itemprice)||itemprice < 0){

 document.write(`your price not valid this try again`)

 i--;
 continue;

}

let categories = itemprice < theresold ? "on sale" : "regular price";

additem.push({name:itemname,price:itemprice,categories})

}

let res ="";
additem.forEach(itm => { 
    res += `<br>ItemName:${itm.name}<br>ItemPrice::${itm.price}<br>ItemCatagories:${itm.categories}<br>`
 });

document.write(`List:${res}`);
 

}

 store();