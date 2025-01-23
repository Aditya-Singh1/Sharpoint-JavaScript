let seat1="12A";
let seat2="14B";
let swap;

let modify=(seat1,seat2)=>{

 console.log(`Before Seat: ${seat1},${seat2}`)
swap=seat1;
seat1=seat2;
seat2=swap;
return `After Seat: ${seat1},${seat2}`;
}
swap=modify(seat1,seat2)

console.log(swap)


