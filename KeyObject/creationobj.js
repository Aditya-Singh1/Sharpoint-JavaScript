// 1 .creation of object
let userdata={
    name:"aditya",
    email:"adityasingh0400@gmail.com",
    contact:9087654321,
    marks:[97,79,78,89],
     
    Func:function(){
    return `name:${this.name},Email:${this.email},contact:${this.contact},Marks:${this.marks}`
    }

}

console.log(userdata.Func());
// userdata.map(i=>{console.log(i)})

for(let i=0;i<userdata.marks.length;i++){

    console.log(userdata.marks[i]);
};



// create new object let userD=new Object()

userD.name="aditya";
userD.email="adityasingh0400@gmail.com"
userD.contact=9087654321;
userD.address="barwala(baghpat)"

 
 console.log()

 let user ={a:"aditya",a:"Singh",a:90987654};
 console.log(Object.keys(userD))// use only show our keys;
 