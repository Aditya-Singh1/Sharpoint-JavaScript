//4.Cleaning Up a List of User Input Values 
//An online form collects user responses, but some values are missing or invalid (falsy). Remove 
//all falsy values before storing the data. 
const responses = [0, "Yes", "", undefined, null, "No", NaN, false, "Maybe"]; 

let data=responses.filter(Boolean)
console.log(data);

