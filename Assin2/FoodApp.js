
// ---------------Use Switch Case ---------------------------------------


let userName=prompt(` Welcome To Food Point \n
    what is your name`);
let foodlist=prompt(`enter the Any name witch is given same as \n 
1 Pizza rs.300/per  \n 
2 Burger  rs.100/per \n 
3 Chaumin  rs.50/per \n 
4 Momos rs.30/per \n 
5 Close
select and enter your food name      
`)
let feedBack  
let tip 
let t=0;
let total=0;
    switch(food){

        case "Pizza":
 feedBack=prompt(`Give your feedback `)
 tip=Number(prompt("you want give tip skip for 0 "))
 t=0;
 total=300;
if(tip>=0){
    t=+tip;
    document.write(`username: ${userName} <br>
       foodName:${foodlist}<br>  
       Price:${total}<br>
       feedback: ${feedBack} <br>
       Tip:${t}<br>
       Total:${total+t}
`);}else{

document.write(`username: ${userName} <br>
   foodName:${foodlist}<br>  
   Price:rs.${total}<br>
   feedback: ${feedBack} <br>
   Tip:${t} <br>
   Total :${total+t}

       `);    
}
        break;
        case "Burger":
             feedBack=prompt(`Give your feedback `)
             tip=Number(prompt("you want give tip skip for 0 "))
             t=0;
             total=300;
            if(tip>=0){
                t=+tip;
                document.write(`username: ${userName} <br>
                   foodName:${foodlist}<br>  
                   Price:${total}<br>
                   feedback: ${feedBack} <br>
                   Tip:${t}<br>
                   Total:${total+t}
            `);}else{
        
           document.write(`username: ${userName} <br>
               foodName:${foodlist}<br>  
               Price:rs.${total}<br>
               feedback: ${feedBack} <br>
               Tip:${t} <br>
               Total :${total+t}
           
                   `);    
           }
        break;

        case "Chaumin":
 feedBack=prompt(`Give your feedback `)
 tip=Number(prompt("you want give tip skip for 0 "))
 t=0;
 total=300;
            if(tip>=0){
                t=+tip;
                document.write(`username: ${userName} <br>
                   foodName:${foodlist}<br>  
                   Price:${total}<br>
                   feedback: ${feedBack} <br>
                   Tip:${t}<br>
                   Total:${total+t}
            `);}else{
        
           document.write(`username: ${userName} <br>
               foodName:${foodlist}<br>  
               Price:rs.${total}<br>
               feedback: ${feedBack} <br>
               Tip:${t} <br>
               Total :${total+t}
           
                   `);    
           }
            break;
        case "Momos":
     feedBack=prompt(`Give your feedback `)
     tip=Number(prompt("you want give tip skip for 0 "))
     t=0;
     total=300;
    if(tip>=0){
        t=+tip;
        document.write(`username: ${userName} <br>
           foodName:${foodlist}<br>  
           Price:${total}<br>
           feedback: ${feedBack} <br>
           Tip:${t}<br>
           Total:${total+t}
    `);}else{

   document.write(`username: ${userName} <br>
       foodName:${foodlist}<br>  
       Price:rs.${total}<br>
       feedback: ${feedBack} <br>
       Tip:${t} <br>
       Total :${total+t}
   
           `);    
   }
            break;
    
        case "close":
             feedBack=prompt(`Give your feedback `)
             tip=Number(prompt("you want give tip skip for 0 "))
             t=0;
             total=300;
            if(tip>=0){
                t=+tip;
                document.write(`username: ${userName} <br>
                   foodName:${foodlist}<br>  
                   Price:${total}<br>
                   feedback: ${feedBack} <br>
                   Tip:${t}<br>
                   Total:${total+t}
            `);}else{
        
           document.write(`username: ${userName} <br>
               foodName:${foodlist}<br>  
               Price:rs.${total}<br>
               feedback: ${feedBack} <br>
               Tip:${t} <br>
               Total :${total+t}
           
                   `);    
           }
            break;
            default:
                   
               document.write(`invalid choice`);
            break;
            

    }


 








//----------------------Use - IF - Else ----------------------------------------------



 
// let userName=prompt(` Welcome To Food Point \n
//                         what is your name`);
// let foodlist=prompt(`enter the Any name witch is given same as \n 
//                1 Pizza rs.300/per  \n 
//                2 Burger  rs.100/per \n 
//                3 Chaumin  rs.50/per \n 
//                4 Momos rs.30/per \n 
//                5 Close
//                 select and enter your food name      
//                `)

// if(foodlist=="Pizza"||foodlist=="pizza"){

//     let feedBack=prompt(`Give your feedback `)
//     let tip=Number(prompt("you want give tip skip for 0 "))
//     let t=0;
//     let total=300;
//     if(tip>=0){
//         t=+tip;
//         document.write(`username: ${userName} <br>
//            foodName:${foodlist}<br>  
//            Price:${total}<br>
//            feedback: ${feedBack} <br>
//            Tip:${t}<br>
//            Total:${total+t}
//     `);}else{

//    document.write(`username: ${userName} <br>
//        foodName:${foodlist}<br>  
//        Price:rs.${total}<br>
//        feedback: ${feedBack} <br>
//        Tip:${t} <br>
//        Total :${total+t}
   
//            `);    
//    }

// }else if(foodlist==="Burger"||foodlist==="burger"){

//     let feedBack=prompt(`Give your feedback `)
//     let tip=Number(prompt("you want give tip skip for 0 "))
//     let t=0;
//     let total=100;
//     if(tip>=0){
//         t=+tip;
//         document.write(`username: ${userName} <br>
//            foodName:${foodlist}<br>  
//            Price:rs.100<br>
//            feedback: ${feedBack} <br>
//            Tip:${t} <br>
//            Total:${total+t}
//     `);}else{

//    document.write(`username: ${userName} <br>
//        foodName:${foodlist}<br>  
//        Price:rs.100<br>
//        feedback: ${feedBack} <br>
//        Tip:${t}<br>
//        Total:${total+t}
//            `);    
//    }

// }else if(foodlist==="Chaumin"||foodlist==="chaumin"){
//     let feedBack=prompt(`Give your feedback `)
//     let tip=Number(prompt("you want give tip skip for 0 "))
//     let t=0;
//     let total=50;

//     if(tip>=0){
//         t=+tip;
//         document.write(`username: ${userName} <br>
//            foodName:${foodlist}<br>  
//            Price:rs.50<br>
//            feedback: ${feedBack} <br>
//            Tip:${t} <br>
//            Total:${total+t}
//     `);}else{

//    document.write(`username: ${userName} <br>
//        foodName:${foodlist}<br>  
//        Price:rs.50<br>
//        feedback: ${feedBack} <br>
//        Tip:${t}<br>
//        Total:${total+t}
   
//            `);    
//    }

// }else if(foodlist==="Momos"||foodlist==="momos"){
//     let feedBack=prompt(`Give your feedback `)
//     let tip=Number(prompt("you want give tip skip for 0 "))
//     let t=0;
//     let total=30;
//     if(tip>=0){
//          t=+tip;
//          document.write(`username: ${userName} <br>
//             foodName:${foodlist}<br>  
//             Price:rs.30<br>
//             feedback: ${feedBack} <br>
//             Tip:${t}<br>
//             Total:${total+t}
//      `);}else{

//     document.write(`username: ${userName} <br>
//         foodName:${foodlist}<br>  
//         Price:rs.30<br>
//         feedback: ${feedBack} <br>
//         Tip:${t}<br>
//         Total:${total+t}
    
//             `);    
//     }
// }else if(foodlist=="close"||foodlist=="Close"){
//     document.write(`thank you using the service.`)
// }else {
//     document.write(`invalid choice`)
  
// }
 