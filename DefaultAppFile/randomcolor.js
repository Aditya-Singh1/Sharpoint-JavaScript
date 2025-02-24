

let box=document.getElementsByClassName('btn')[0]

box.addEventListener('click',function(){

let random=[Math.floor(Math.random()*200)]
let random1=[Math.floor(Math.random()*150)]
let random2=[Math.floor(Math.random()*100)]

console.log(random);

document.body.style.backgroundColor=`rgb(${random},${random1},${random2})`;

})

 



  