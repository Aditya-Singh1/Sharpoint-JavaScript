//13.Identifying Weekend Travel Dates 
//A travel agency wants to list only weekend travel dates for customers. 

const travelDates = [ "2025-02-24", "2025-02-25","2025-02-26", "2025-02-27", "2025-02-28", 
"2025-03-02"];

 let data=travelDates.filter((val)=>{

    let day=new Date(val).getDay()

    // console.log(day)

    return day==0 || day==6


 })

console.log(data);