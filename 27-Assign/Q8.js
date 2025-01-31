
let arr=["Aditya","arjun","Naveen","Priya","Neha","Prerna","Anaya"]
   
const fun=(value1,value2)=>{
    
    return value1.filter((item) =>item.toLowerCase().startsWith(value2.toLowerCase()))

}

console.log(fun(arr,"A"));