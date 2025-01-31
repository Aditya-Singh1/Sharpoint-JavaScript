let transaction=[500,355,1200,451,900,1011,750];


let bank=(transaction)=>{

     transaction.forEach((amo,index)=>{  

       let Ttype=amo%2==0 ? "Even" :"ODD"
       let Status=amo%2==0 ? "Approved" :"Requires Manual Review"
    console.log(`Transaction${index+1}:${Ttype},${amo}- ${Status}`);
});
   
    
}       
bank(transaction);


 


