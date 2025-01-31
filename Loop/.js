
// let user="aditya Singh";
// for(us of user){

//     console.log(us);
// }

//----------------------------------------------

//push() add element in last and return new length of array
// let ar=[1,2,3,4,5,6,7,8];
// ar.push(90);
// console.log(ar);


//unsift add element in first of array and return length of arrray
// let ar=[1,2,3,4,5,6,7,8];
// ar.unshift(90);//add in first off array

// let length=ar.unshift()
// console.log(ar);// show array;
// console.log(length)//return length of array;


//shift() remove first element from array 
// let ar=[1,2,3,4,5,6,7,8];
// ar.shift();
// console.log(ar);

//pop() remove the data from last 
// let ar=[1,2,3,4,5,6,7,8];
// ar.pop();
// ar.pop();
// console.log(ar);


// concat() combine the two array data

// let ar=[1,2,3,4,5,6,7,8];
// let newdata=[9,10,11,12];
// let add= ar.concat(newdata);
// console.log(add);


//reverse() reverse the data of array
// let ar=[1,2,3,4,5,6,7,8];
// ar.reverse();
// console.log(ar);

//include() use for chck the data in this array is available and not available return true/false
// let ar=[1,2,3,4,5,6,7,8];
// let inc=ar.includes(90);//90 not available 
// console.log(inc);

// indexof(element,index) check the first element of array give index no.;
// let ar=["a","d","i","t","y","a"];
// let check=ar.indexOf("y");
// console.log(check);

//LastIndexOf() check the last value of Array give index no 

// let ar=["a","d","i","t","y","a"];
// let last=ar.lastIndexOf("a");
// console.log(last);

//slice(2,4) this run to index to index other data do remove ;
// let ar=[1,2,3,4,5,6,7];
// let last=ar.slice(2,4);
// console.log(last);

//splice() Removes elements from an array and, if necessary,
// inserts new elements in their place, returning the deleted elements.

// let ar=[1,2,3,4,5,6,7,8,9];
// let last=ar.splice(4,2,);
// console.log(last);
// console.log(ar)


// forEach() 
// let ar=[1,2,3,4,5,6,7,8,9];
// ar.forEach(()=>{console.log(ar)});



//flat() witch is provide the effyciency nested Array to simple array;

// let ar=[1,2,3,4,5,6,7,8,9,[10,12,13,14,[15,16,17,18,[19,20],[21]]]];

// console.log(ar.flat(Infinity))


//filter() use for the data filteration

//let ar=[1,2,3,4,5,6,7,8,59];

// let iterable=ar.filter((item) => {
//     return item >50
// })
// console.log(iterable)


// syntex 2

//   let data=ar.filter((f)=>f>50)
//   console.log(data)

// syntex 3

// let go=(c)=>{
// return c>50
// }
// let data=ar.filter(go)
// console.log(data)

//----- map()------

//let ar=[1,2,3,4,5,6,7,8,9];

// let data=(n)=>{
//     return n*2
// }

// let res=ar.map(data)
// console.log(res);
//type 2

// let data=ar.map((m)=>m*2)
// console.log(data)

//some()

//let data=ar.join((s)=".")
//console.log(data)


//find()

let ar=[1,2,3,4,6,7,8,9,5,"aditya"];

let data=ar.find((a)=>a=="aditya")
console.log(data)
