// function categorizeGroceryItems() {
//     // Prompt the user for the number of items
//     const itemCount = parseInt(prompt("How many items do you want to add to the grocery list?"));

//     if (isNaN(itemCount) || itemCount <= 0) {
//         alert("Please enter a valid number of items.");
//         return;
//     }

//     const threshold = 200; // Threshold price for categorization
//     const items = []; // Array to store items with their categories

//     // Loop to collect item details from the user
//     for (let i = 0; i < itemCount; i++) {

//         const itemName = prompt(`Enter the name of item ${i + 1}:`);
        
//         if (!itemName) {
//             alert("Item name cannot be empty. Please try again.");
//             i--;
//             continue;
//         }

//         const itemPrice = parseFloat(prompt(`Enter the price of ${itemName}:`));

//         if (isNaN(itemPrice) || itemPrice < 0) {
//             alert("Please enter a valid price for the item.");
//             i--;
//             continue;
//         }

//         // Categorize the item
//         const category = itemPrice < threshold ? "On Sale" : "Regular Price";

//         // Add item details to the list
//         items.push({ name: itemName, price: itemPrice, category });
//     }

//     // Display categorized items
//     let result = "Categorized Grocery Items:\n\n";
//     items.forEach(item => {
//         result += `Item: ${item.name}, Price: ${item.price}, Category: ${item.category}\n`;
//     });

//     alert(result);
// }

// // Run the grocery categorization system
// categorizeGroceryItems();


// find the Largest in array sentence;


let fun1=()=>{
    let ar1=["this a phone ","this is a mobile number","My name is aditya singh"];
    let large=[];
    for(ar of ar1){

   if(ar.length>ar1.length){
       large=ar;
   }

    }
    console.log(large);

}

fun1();


// type 2  find the largest sentence in array

 const fun2=()=>{
    
let ar1=["this a phone ","this is a mobile number","My name is aditya singh"];

let hold= ar1.sort((a,b)=>b.length - a.length)[0];

console.log(hold);

 }
 fun2();
 

 