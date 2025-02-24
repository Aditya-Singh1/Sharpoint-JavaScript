class Mobile{

setData(Name,model,ram,storage,price,color,src){
    this.Name=Name;
     this.model=model
     this.ram=ram
     this.storage=storage;
     this.price=price
     this.color=color;
     this.src=src;
}

Company(){
//  img.................................................

let img1=document.getElementsByClassName('img')[0]

img1.innerHTML=`${this.src}`
    // text area start----------------------------------------

    let c=document.getElementsByClassName('detail')[0]
    
    let d1=document.createElement('h2');
    c.append(d1)

    let MobileName=`MobleName:${this.Name}`;
    d1.append(MobileName);

    let d2=document.createElement('h2')
    c.append(d2);

    let model=`Model:${this.model}`;
    d2.append(model)
    
    let d3=document.createElement('h2')
    c.append(d3);
     
    let RAM=`RAM:${this.ram}`;
    d3.append(RAM)

    let d4=document.createElement('h2')
    c.append(d4);
    d4.innerHTML=`Storage:${this.storage}`
     
    let d5=document.createElement('h2')
    c.append(d5);
    d5.innerHTML=`Price:${this.price}`

    let d6=document.createElement('h2')
    c.append(d6);
    d6.innerHTML=`Color:${this.color}`
     
     
    
    // document.write(`Name:${this.Name}`);

}
 

detail(){

    
}



}

let obj1=new Mobile()
obj1.setData("Realme","2 pro","4GB","64GB","14000","Black","<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7PUVjW4j7WuYow8ZWj65_Q9t6ayt3iI9mmw&s' >")
let data=obj1.Company()

 
