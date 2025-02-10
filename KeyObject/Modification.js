// Modification

 Object.freeze(userdata)//
Object.seal(userdata);//seal only used for update 

let value=Object.keys(userdata);
userdata.colname="Subharti";
userdata.name="ANAYA";
console.log(value);


let d=[['name',"adi"],['age',"23"]]
let obj=Object.fromEntries(d);
console.log(obj);