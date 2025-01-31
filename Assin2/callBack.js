

// Call back function

const  add=(a,b)=>{
return a+b;

}

const devide=(a,b)=>{

    return a/b;
}

const opration=(a,b,op)=>{
    return op(a,b)
}

console.log(opration(5,6,add));
console.log(opration(45,5,devide))


var ar=["aditya","Anaya","Mahi","Priya","Naveen"]
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// @param start — The zero-based location in the array from which to start removing elements.
// @param deleteCount — The number of elements to remove.
// @param items — Elements to insert into the array in place of the deleted elements.
// @returns — An array containing the elements that were deleted.



 ar=ar.splice(1,3)
console.log(ar)
