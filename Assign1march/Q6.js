//6.Selecting High-Achieving Students for a Scholarship 
//A university wants to offer scholarships to students with a GPA higher than 3.5. 
const students = [ 
{ name: "Neha", gpa: 3.5 }, 
{ name: "Rahul", gpa: 2.8 }, 
{ name: "Anjali", gpa: 3.9 } 
];

let list=students.filter(val=>val.gpa>3.5)
console.log(list);