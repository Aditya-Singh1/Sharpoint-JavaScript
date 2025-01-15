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
let totalScore = 0;
let correctAnswers = 0;
let skippedQuestions = 0;
let wrongAnswers =+ 0;
let currentQuestionIndex = 0;
 
let score1=1000;
let score2=2000;
let score3=3000;
let score4=5000;
let score5=10000;
let count=1;


// Fun

function startGame() {
    let startResponse = prompt("Welcome to the Quiz Game! Would you like to start the game? (yes/no)");

    if (startResponse === "yes") {
        askQuestion();
    } else {
        document.write("Game has ended. Goodbye! <br>");
    }
}


function askQuestion() {
     

 if(currentQuestionIndex< 5){
    currentQuestionIndex++;
 
userAns=prompt(`${question1}<br>
  ${opt1}
    `)
    if(userAns===rightAns1){
      totalScore+=score1;
     correctAnswers++;
     
        document.write(`correct Ans ${score1} `);


        userAns=prompt(`${question2}<br>
            ${opt2}
              `)

        if(userAns===rightAns2){
            totalScore+=score2;
            correctAnswers++;
             
                document.write(`correct Ans ${score2} `);


                userAns=prompt(`${question3}<br>
                    ${opt3}
                      `)
                if(userAns===rightAns3){
                    totalScore+=score3;
                    correctAnswers++;
                     
                        document.write(`correct Ans ${score3} `);
        
        

                        userAns=prompt(`${question4}<br>
                            ${opt4}
                              `)
                        if(userAns===rightAns4){
                            totalScore+=score4;
                            correctAnswers++;
                             
                                document.write(`correct Ans ${score4} `);
                
                
                

                                userAns=prompt(`${question5}<br>
                                    ${opt5}
                                      `)
                                if(userAns===rightAns5){
                                    totalScore+=score5;
                                    correctAnswers++;
                                     
                                        document.write(`correct Ans ${score5} `);
                        
                        
                        
                                        
                                        endGame()
                                
                                    }else{
        
                                        wrongAnswers++;
                                        document.write(`wrong ans 5 ${wrongAnswers}`);
                                        endGame()
                                    }
                        

                                
                                
                        
                            }else{
                        
                                wrongAnswers++;
                                document.write(`wrong ans4 ${wrongAnswers}`);
                                
                            }
                
                    }else{
                
                        wrongAnswers++;
                        document.write(`wrong ans 3${wrongAnswers}`);
                        
                    }
        


                
        
            }else{
        
                wrongAnswers++;
                document.write(`wrong ans2 ${wrongAnswers}`);
                
            }


    }else{

        wrongAnswers++;

        
        document.write(`wrong ans 1${wrongAnswers}`);
        
    }

    
    


  }else{
endGame()

  }
} 





function endGame() {
    document.write(`Game Over!<br>
    Total Score: ${totalScore}<br>
    Correct Answers: ${correctAnswers}<br>
    Skipped Questions: ${skippedQuestions}<br>
    Wrong Answers: ${wrongAnswers}`);

    // Ask user to rate the game
    let rating = parseInt(prompt("Would you like to rate the game? (1-5)"), 10);

    if (rating >= 1 && rating <= 5) {
        document.write(`Thank you for rating the game ${rating} stars!<br> `);
    } else {
        document.write("Invalid rating. Please enter a number between 1 and 5. <br>");
    }
}

// Start the game when the script runs
startGame();