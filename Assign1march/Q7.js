//7.Finding In-Stock Grocery Items 
//A grocery store wants to show only available items on its website. 
const groceries = [ 
{ name: "Milk", stock: 10 }, 
{ name: "Eggs", stock: 0 }, 
{ name: "Bread", stock: 5 } 
];

let data=groceries.filter((val)=>{
    
    
    // document.write(`<h1>name:${val.name},Stock:${val.stock}</h1>`)
    console.log('Name:',val.name,"stock:",val.stock);

})
 

