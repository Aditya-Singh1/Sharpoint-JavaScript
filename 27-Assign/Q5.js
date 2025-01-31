
let student=["aditya","Raman","raju","Naveen","Nitin","Prerna","Priya","Anaya","Riya"]

const fun=(v1,v2)=>{

    return v1.filter(x=>x.toLowerCase().startsWith(v2.toLowerCase()));
}

console.log(fun(student,"r"));

