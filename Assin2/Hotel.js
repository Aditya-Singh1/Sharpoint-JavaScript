let username=prompt("fill your name here")
let mobile=Number(prompt("fill your Mobile no. here"))
let age=Number(prompt("fill your age here"))
let address=prompt("fill your address here")
let roomNo=Number(prompt("fill your room no here"))

let selectRoom=prompt(`
    select your room \n
    1.standard
    2.delux
    3.suite
    `)

let no_of_night=Number(prompt("how many nights to stay for "))
 
let booking=(username,mobile,age,address,roomNo,selectRoom,no_of_night)=>{

    if(selectRoom=="standard"||selectRoom=="Standard"){
let roomrent=100;
        document.write(`<h3>RoomType:${selectRoom}</h3>`)
        document.write(`<h3>userName:${username}</h3>`)
        document.write(`<h3>MobileNo:${mobile}</h3>`)
        document.write(`<h3>Age:${age}</h3>`)
        document.write(`<h3>Address:${address}</h3>`)
        document.write(`<h3>roomNo:${roomNo}</h3>`)
        document.write(`<h3>No_of_night:${no_of_night}</h3>`);
let total=(no_of_night*roomrent);
        document.write(`<h3>TotalRent::$${total}</h3>`);
        

    }else if(selectRoom=="delux"||selectRoom=="Delux"){
        let roomrent=100;
        document.write(`<h3>RoomType:${selectRoom}</h3>`)
        document.write(`<h3>userName:${username}</h3>`)
        document.write(`<h3>MobileNo:${mobile}</h3>`)
        document.write(`<h3>Age:${age}</h3>`)
        document.write(`<h3>Address:${address}</h3>`)
        document.write(`<h3>roomNo:${roomNo}</h3>`)
        document.write(`<h3>No_of_night:${no_of_night}</h3>`);
let total=(no_of_night*roomrent);
        document.write(`<h3>TotalRent::$${total}</h3>`);

    }else if(selectRoom=="suite"||selectRoom=="Suite"){
        let roomrent=100;
        document.write(`<h3>RoomType:${selectRoom}</h3>`)
        document.write(`<h3>userName:${username}</h3>`)
        document.write(`<h3>MobileNo:${mobile}</h3>`)
        document.write(`<h3>Age:${age}</h3>`)
        document.write(`<h3>Address:${address}</h3>`)
        document.write(`<h3>roomNo:${roomNo}</h3>`)
        document.write(`<h3>No_of_night:${no_of_night}</h3>`);
let total=(no_of_night*roomrent);
        document.write(`<h3>TotalRent::$${total}</h3>`);

    }

    return `${username},${mobile},${age},${address},${roomNo},${selectRoom},${no_of_night}`

}

booking(username,mobile,age,address,roomNo,selectRoom,no_of_night);