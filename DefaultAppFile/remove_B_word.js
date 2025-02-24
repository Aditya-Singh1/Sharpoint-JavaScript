let ar=["aditya","monu","tinku","arun","bhanu","bhura"] 
 
let data=ar.filter(f=>!f.includes('b'))

let box=document.getElementById('main')

let h1=document.createElement('h1')
h1.innerHTML=data;
box.append(h1);
