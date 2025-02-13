
// ----------------- Objects.
// 1.Properties of Objects
// 2.Creation of Objects
// 3.Accessing of Objects
// 4.Modification of Objects
// 5.Traversing of Objects
// 6.In-builted of Objects

// ============== 1.Properties of Objects
// 1.Object are user-defined data structure which store data
// of different in the form key:value pair.
// 2.Object key must be unique.
// 3.Objects are mutable (changeable)
// 4.Indexed not allowed in object


// 2.Creation of Objects

// 1.using ({})
// let student_profile={
//     name:'Dev',
//     age:26,
//     roll:5890,
//     email:'ysdevn@gmail.com',
//     clg_name:"Manipal University",
//     phone:8989998653,
//     subjcet:['CS','MATH','COMMUNICATION','DL'],
//     address:'Noida delhi 110021'

// }
// console.log(student_profile)

// 2.Using new keyword
// let student_profile1=new Object()
// student_profile1.name="Aman";
// student_profile1.age=34;
// student_profile1.email="aman@gmail.com"
// student_profile1.mob=8798098723

// console.log(student_profile1.age)
// console.log(student_profile1.mob)

// ==============Accessing of object

let student_profile={
    name:'Dev',
    age:26,
    roll:5890,
    email:'ysdevn@gmail.com',
    clg_name:"Manipal University",
    phone:9989998653,
    subjcet:['CS','MATH','COMMUNICATION','DL'],
    marks:[45,89,90,79],
    address:'Noida delhi 110021',
    say_hello:function(){
        return `Student Name : ${this.name} Student Age : ${this.age}`
    },

//     detail:()=>{
//         console.log("THIS IS AROW")
    }

// }
// for (let i=0 ; i<student_profile.marks.length ; i++){
//     console.log(student_profile.marks[i])
// } 

// 4.Modification of Objects.
// student_profile.collage_code="clg-123"
// student_profile.clg_name="LPU"
// console.log(student_profile)

// 5.inbuilt-methods
// Object.freeze(student_profile)
// student_profile.collage_code="clg-123"
// student_profile.clg_name="LPU"
// console.log(student_profile)

// Object.seal(student_profile) // can update older data but not add new data.
// student_profile.collage_code="clg-123"
// student_profile.clg_name="LPU"
// console.log(student_profile)

// key()
// let key=Object.keys(student_profile)
// console.log(key)

// values()
//  let value=Object.values(student_profile)
// console.log(value)

// fromEntries()
// let data=[ ['name','ajay'], ['age',45] ]
// let obj=Object.fromEntries(data)
// console.log(obj);

// entries()
// let data=Object.entries(student_profile)
// console.log(data);

// 5.Traversing of Objects

// let key1=Object.keys(student_profile)
// for (let i of key1){
//     console.log(i)
// }

// let value=Object.values(student_profile)
 // let key1=Object.keys(student_profile)

for (let [v,k] of [value,key1]){
    console.log(v,k)
}

// Create an object of student profile by taking data from user.


// let student_profile={
//     name:'Dev',
//     age:26,
//     roll:5890,
//     email:'ysdevn@gmail.com',
//     clg_name:"Manipal University",
//     phone:8989998653,
//     subjcet:['CS','MATH','COMMUNICATION','DL'],
//     address:'Noida delhi 110021'

// }

// // Restricting particular data of object
// Object.defineProperty(student_profile,'name',{writable:false})

// console.log(student_profile)
// student_profile.name="ankit"
// console.log(student_profile)


// // Mergin two objects.
// let obj1={name:'aman'}
// let obj2={age:40,roll:989889}
// let obj3={age1:40,roll:98988911}

// Object.assign(obj1,obj2,obj3)
// console.log(obj1)

// // Prototypes:

// let person_prototypes={
//     namaste(){
//         return `NAMASTE ${this.name} `
//     }
// }

// let person1=Object.create(person_prototypes)
// person1.name="Dev"

// let person2=Object.create(person_prototypes)
// person2.name="Naman"

// let person3=Object.create(person_prototypes)
// person3.name="AMAN"

// console.log(person1.namaste())
// console.log(person2.namaste())
// console.log(person3.namaste())

// Lexical scoping : Lexical scope means that a function remembers the variables and function
// form the palce where it was define (parent scope) not from where it is called.

// function outer(){
//     let name1="Abhay"

    
//     function inner(){
//         console.log(name1)
//     }
//     inner()
// }

// outer()


// let student={
//     name:'Dev',
//     age:26,
//     roll:5890,
//     email:'ysdevn@gmail.com',
//     clg_name:"Manipal University",
//     phone:8989998653,
//     subjcet:['CS','MATH','COMMUNICATION','DL'],
//     address:'Noida delhi 110021',
//     show:function(){

//         let arr=()=>{
//             console.log(this.name)
//         }
//         arr()

//     }
    
// }

// student.show()



