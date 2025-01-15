
let question1="what is 2+2?"
let question2="what is 2-2?"
let question3="what is 2*2?"
let question4="what is 2/2?"
let question5="what is 2%2?"

let opt1=`A.5,B.1,C.4,D.3,skip`
let opt2=`A.1,B.0,C.4,D.3,skip`
let opt3=`A.5,B.4,C.3,D.2,skip`
let opt4=`A.3,B.2,C.1,D.5,skip`
let opt5=`A.5,B.0,C.1,D.3,skip`

let rightAns1="c"
let rightAns2="b"
let rightAns3="b"
let rightAns4="c"
let rightAns5="b"

 // Game State Variables
let totalScore =+ 0;
let correctAnswers =+ 0;
let skippedQuestions = 0;
let wrongAnswers =+ 0;
let currentQuestionIndex =+ 0;


function strt(){

userInput=prompt("Are you strt the game yes || no")

if(userInput==="YES" ||userInput==="yes"){
gameproces();

}else{
    document.write("Exit good by ")
}

}


let count=+1;
function gameproces(){

if(currentQuestionIndex<count){

count++;

let userAns=prompt(`${question1}\n ${opt1} skip to skip`);
if(userAns==="skip"){

    skippedQuestions++;  
   document.write('skip question')


//    userAns=prompt(`${question1}<br>${opt1}`)
//    if(userAns==="c"||userAns==="c"){
//    correctAnswers++;
//    totalScore+=rightAns1=1000;
   
   
//    }else if(userAns==="skip"){
//    skippedQuestions++;
//    document.write(`skip question ?`);
//    }else{
   
//        wrongAnswers++;
//        document.write("wrong ans")
//    }   
   //---------2 Q
   
   userAns=prompt(`${question2}\n${opt2}`)
   if(userAns==="b"||userAns==="B"){
   correctAnswers++;
   totalScore+=rightAns2=2000;
   document.write("correct Ans")
   
   }else if(userAns==="skip"){
   skippedQuestions++;
   document.write(`skip question ?`);
   }else{
   
       wrongAnswers++;
       document.write("wrong ans <br>")
   }
   
   //-----------Q3
   
   userAns=prompt(`${question3}\n${opt3}`)
   if(userAns==="b"||userAns==="B"){
   correctAnswers++;
   totalScore+=rightAns3=3000;
   
   
   }else if(userAns==="skip"){
   skippedQuestions++;
   document.write(`skip question ?<br>`);
   }else{
   
   wrongAnswers++;
   document.write("wrong ans <br>")
   }
   
   
   //Q4----------------------------
   
   userAns=prompt(`${question4}\n${opt4}`)
   if(userAns==="c"||userAns==="C"){
   correctAnswers++;
   totalScore+=rightAns4=5000;
   
   
   }else if(userAns==="skip"){
   skippedQuestions++;
   document.write(`skip question ? <br>`);
   }else{
   
   wrongAnswers++;
   document.write("wrong ans <br>")
   }
   
   
   
   //--------Q5---
   
   
   userAns=prompt(`${question5}\n${opt5}`)
   if(userAns==="B"||userAns==="B"){
   correctAnswers++;
   totalScore+=rightAns3=10000;
   
   
   }else if(userAns==="skip"){
   skippedQuestions++;
   document.write(`skip question ? <br>`);
   }else{
   
   wrongAnswers++;
   document.write("wrong ans <br>")
   }
    endgame();
}else{

userAns=prompt(`${question1}\n${opt1}`)
if(userAns==="c"||userAns==="c"){
correctAnswers++;
totalScore+=rightAns1=1000;


}else if(userAns==="skip"){
skippedQuestions++;
document.write(`skip question ? <br>`);
}else{

    wrongAnswers++;
    document.write("wrong ans <br>")
}



//---------2 Q

userAns=prompt(`${question2}\n${opt2}`)
if(userAns==="b"||userAns==="B"){
correctAnswers++;
totalScore+=rightAns2=2000;
document.write("correct Ans")

}else if(userAns==="skip"){
skippedQuestions++;
document.write(`skip question ? <br>`);
}else{

    wrongAnswers++;
    document.write("wrong ans")
}

//-----------Q3

userAns=prompt(`${question3}\n${opt3}`)
if(userAns==="B"||userAns==="b"){
correctAnswers++;
totalScore+=rightAns3=3000;


}else if(userAns==="skip"){
skippedQuestions++;
document.write(`skip question ? <br>`);
}else{

wrongAnswers++;
document.write("wrong ans <br>")
}


//Q4----------------------------

userAns=prompt(`${question4}\n${opt4}`)
if(userAns==="c"||userAns==="C"){
correctAnswers++;
totalScore+=rightAns4=5000;


}else if(userAns==="skip"){
skippedQuestions++;
document.write(`skip question ?<br> `);
}else{

wrongAnswers++;
document.write("wrong ans <br>")
}



//--------Q5---


userAns=prompt(`${question5}\n${opt5}`)
if(userAns==="B"||userAns==="b"){
correctAnswers++;
totalScore+=rightAns3=10000;


}else if(userAns==="skip"){
skippedQuestions++;
document.write(`skip question ? <br>`);
}else{
wrongAnswers++;
document.write("wrong ans <br>")
}
endGame();
}

}else{


}
 
} 
function endgame(){

    let rating=parseInt(prompt("give your rating this game "))

if(rating>=0 && rating<=5){

document.write(`<h4>Skipped Question:${skippedQuestions}<br>
   correct Ans: ${correctAnswers}<br>
   wrong Ans:${wrongAnswers}<br>
   totalScore: ${totalScore}<br>
   rating: ${rating}<br>
  </h1>
    `)
}

}

strt();






