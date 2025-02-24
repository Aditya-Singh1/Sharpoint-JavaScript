 
   
  function submit(evt){
    
    let user=document.getElementById("n").value;
    let adres=document.getElementById("a").value;
    
    let container=document.getElementsByClassName('container')[0];

    let div=document.createElement('div');
    div.className="card"
    container.append(div);

    let img=document.createElement('img')
    img.id="pic"
    div.append(img);
 
    img.src=URL.createObjectURL(evt.target.files[0]);
   

    let left=document.createElement('div');
    let right=document.createElement('div');

    div.append(left)
    div.append(right)
    left.className="left"
    right.className="right"

    let left_h1=document.createElement('h3')
    let left_h2=document.createElement('h3')
    let right_h1=document.createElement('h3')
    let right_h2=document.createElement('h3')
    left_h1.innerHTML="UserName :"
    left.append(left_h1)

    left_h2.innerHTML="UserAddress :"

    left.append(left_h2)

right_h1.innerHTML=` ${user} `;
right_h2.innerHTML=` ${adres}`;

    right.append(right_h1)
    right.append(right_h2)

    

    



 }

 
