
let btn=document.getElementById('btn')
let set1=document.getElementById('set1')

function add(a,b){
set1.innerHTML=a+b;
}

function sub(a,b){
    set1.innerHTML=a-b;
}

btn.addEventListener('click',()=>add(34,34))
// btn.addEventListener('click',()=>sub(45,40))

