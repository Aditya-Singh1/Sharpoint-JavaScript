//14.Filtering Current Year Transactions for Tax Reports 
//A financial institution needs to filter out transactions from 2024 for tax reporting. 
const transactions = [ 
{ id: 1, amount: 2000, date: "2024-01-10" }, 
{ id: 2, amount: 3000, date: "2023-05-15" }, 
{ id: 3, amount: 1500, date: "2024-02-20" } 
];


let data=transactions.filter((val)=>val.date.startsWith('2024'))
console.log(data);