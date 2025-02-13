


let color=["yellow","palegreen","purple","blue","red","tomato"]

for(let i=1;i<=color.length;i++){
   
let doc=document.getElementsByClassName('btn')[0]

doc.addEventListener('click',function(){

    let differ= [Math.floor(Math.random()*color.length)]

    if(i==1){
    document.getElementsByClassName('h1')[0].style.color=color[differ]
    }
    if(i==2){
        document.getElementsByClassName('h2')[0].style.color=color[differ]
    }

    if(i==3){
        document.getElementsByClassName('h3')[0].style.color=color[differ]
    }

    if(i==4){
        document.getElementsByClassName('h4')[0].style.color=color[differ]
    }
    if(i==5){
        document.getElementsByClassName('h5')[0].style.color=color[differ]
    }
    if(i==6){
        document.getElementsByClassName('h6')[0].style.color=color[differ]
    }
})

    }



    
        
       




 





