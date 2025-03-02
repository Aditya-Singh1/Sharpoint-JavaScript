//11.Filtering Out High-Paid Engineering Employees 
//A company wants to analyze employees in the Engineering department earning more than 
//₹50,000. 
const employees = [ 
{ name: "Siddharth", salary: 60000, department: "Engineering" }, 
{ name: "Kavita", salary: 45000, department: "Marketing" }]

let data=employees.filter((val)=>val.salary>50000)
console.log(data);