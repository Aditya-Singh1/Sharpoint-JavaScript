let count=1;
document.getElementById('form').addEventListener('submit',()=>{
event.preventDefault()
let input=document.getElementById('n').value;
// console.log(input)
let con=document.getElementsByClassName('con')[0]

let ar=["name1","name2","name3","name4"];
let img=["/photos/arnold.jpeg","/photos/arnold2.jpeg","/photos/arnold3.jpeg","/photos/aditya mirror.jpg","/photos/aditya.jpeg"]
let str="abcdefghijklmnopqrstuvwxyz".toString().split('')

for(let i=1;i<=input;i++){
 let num=Math.floor(Math.random()*11111111111);
 let id=str[Math.floor(Math.random()*27)]+num;
//  let ar=
 console.log(num,ar[Math.floor(Math.random()*ar.length)])
 con.innerHTML+=`
<div class="card" style="width: 18rem;">
  <img src="${img[Math.floor(Math.random()*img.length)]}" class="card-img-top " alt="...">
  <div class="card-body">
    <h5 class="card-title">UserName;${ar[Math.floor(Math.random()*ar.length)]}</h5>
    <h5 class="card-title">UserID;${id}</h5>
    <h5 class="card-title">UserContact;${num}</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

 
 `
{/* <div class="card">
<h1>cardNo:${count++}</h1> 
<h1>Id:${id}</h1> 
<h1>Name:${ar[Math.floor(Math.random()*ar.length)]}</h1>
<h1>Contact:${num}</h1>
</div>; */}
 
//  let con=document.getElementsByClassName('con')[0];

}
})
