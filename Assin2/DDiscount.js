let p=400;
let c="Regular customer";
// prompt("enter the customer type");
// Number(prompt("enter the amount"))
let cust=(p,c)=>{
    let dis=0;

    if(p>=500&&c==="Regular customer"){
     dis=((p*10)/100);
        console.log("you are Regular customers discount 10% :",dis)
    }else if(p<500&&c==="Regular customer"){
        dis=((p*5)/100)
        console.log("you are Regular customers discount 5%:",dis)
    }else if(p>=500&&c==="Gold customer"){
        dis=((p*15)/100)
        console.log("you are Gold customers discount 15%:",dis)
    }else if(p<500&&c==="Gold customer"){
        dis=((p*10)/100)
        console.log("you are Gold customers discount 10%:",dis)
    }else if(p>=500&&c==="Platinam customers"){
        dis=((p*20)/100)
        console.log("you are Platinam customers discount 20%:",dis)
    }else if(p>500&&c==="Gold customer"){
        dis=((p*15)/100)
        console.log("you are Platinam customers discount :",dis)
    }

}

cust(p,c);