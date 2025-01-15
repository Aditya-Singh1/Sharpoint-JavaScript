
// Student Grading System

// let g= Number(prompt("Enter the Student Percent And Show Grade "));
// if(g>=90 && g<=100)
// {
//     document.write(`<h1>Grade:A</h1>`)
// }
// else if(g>=80 && g<=89)
// {
//     document.write(`<h1>Grade:B</h1>`)
// }
// else if(g>=70 && g<=79)
//     {
//         document.write(`<h1>Grade:C</h1>`)
//     }

// else if(g>=60 && g<=69)
//         {
//             document.write(`<h1>Grade:D</h1>`)
//         }
// else if(g>=50 && g<=59)
//             {
//                 document.write(`<h1>Grade:E</h1>`)
//             } 
// else if(g>=0 && g<=49)
//                 {
//                 document.write(`<h1>Fail</h1>`);
//                 } 

//---------------------------------------------------



//Q 2 Tax Calculation For car purchase   *******



// document.write(`<h1>Car Detail <br></h1>
    
//     <h2>Car:Mahindra <br>
//      Price:7L to 10L <br>
//      Tax:5% Enter The Price And Name  show for tax
  
//      <br><br>
//      Car:Audi: <br>
//      Price:10L to 15L <br>
//      Tax: 10% Enter The Price And Name show for tax

//      <br><br>
//      Car:Jaguar <br>
//      Price:15L to 20L<br>
//      Tax: 25% Enter The Price And Name show for tax
   
//      <br><br>
//      Car:Mercedes <br>
//      Price:20L to 25L<br>
//      Tax: 30% Enter The Price And Name show for tax
   
//      </h2>
//     `)

// let cname= "Mahindra";
// let price= 700000;
//  if(cname=="Mahindra" && price>=700000 && price<=1000000){

//     let tax=(price*5)/100;
//     document.write(`<h1>Mahindra Car tax: ${tax}</h1>`);

//  }
//  else if(cname=="Audi" && price>=1000000 && price<=1500000){
//     let tax=price*10/100;
//     document.write(`<h1>Audi Car tax: ${tax}</h1>`);

//  }
//  else if(cname=="Jaguar" && price>=1500000 && price<=2000000){
//     let tax=price*25/100;
//     document.write(`<h1>Jaguar Car tax: ${tax}</h1>`);

//  }
//  else if(cname=="Mercedes" && price>=2000000 && price<=2500000){
//     let tax=price*30/100;
//     document.write(`<h1>Mercedes Car tax: ${tax}</h1>`);

//  }
//  else {
//     document.write(`<h1>Not Valid Car !</h1>`);

//  }


// Q 3 Finding the middle num------------------------------

//  let num1=13;
//  let num2=12;
//  let num3=14;
//  let Mid;

  
//  if(num2>num1 && num1>num3 || num3>num1 && num1>num2){
//     Mid=num1;
//     console.log(Mid);
//   }
//   if(num1>num2 && num2>num3 || num3>num2 && num2>num1){
//     Mid=num2;
//     console.log(Mid);
//   }
//   if(num1>num3 && num3>num2 || num2>num3 && num3>num1){
//      Mid=num3;
//      console.log(Mid);
//   }

//--------------------- Greatest num ----------------------------

// let n1=45;
// let n2=89;
// let n3=90;
// let g;
// if(n1>n2&&n1>n3){
//     g=n1;
//     document.write(g);
// }
// else if(n2>n1&&n2>n3){
//     g=n2;
//     document.write(g);
// }
// else if(n3>n1&&n3>n2){
//     g=n3;
//     document.write(g)
// }

// Authentication System -------------------------------- 

// 

//6.Calculate Class Attendance Percentage-------------------------

// ○ Task: Write a program to calculate the percentage of classes attended by a
// student and determine their eligibility to sit in the exam.
// ○ Conditions:
// ■ Attendance percentage < 75%: Not eligible to sit in the exam.
// ■ Attendance percentage ≥ 75%: Eligible to sit in the exam.
// ○ Output: Display the attendance percentage and eligibility status.

// let A_per=74;
// if(A_per>=75 &&A_per<=100){
// document.write(" Eligible to sit in the exam");
// }else if(A_per<75){
//     document.write("Not eligible to sit in the exam");
// }


 //7.Library Charge Calculation----------------------------------------------------
// ○ Task: Write a program to calculate the library charges based on the number of
// days a book has been borrowed.
// ○ Charge Criteria:
// ■ Up to 5 days: ₹2/day.
// ■ 6 to 10 days: ₹3/day.
// ■ 11 to 15 days: ₹4/day.
// ■ More than 15 days: ₹5/day.
// ○ Output: Display the total charges.

// let day =16;

// if(day<=5&&day>0){
//     document.write("Book Charge rs:2/day");
// }else if(day>=6&&day<=10){
//     document.write("Book Charge rs:3/day");
// }else if(day>=11&&day<=15){
//     document.write("Book Charge rs:4/day");
// }else if(day>=15&&day<=30){
//     document.write("Book Charge rs:5/day");
// }

//8.UPSC Selection Process-----------------------------------------------
// ○ Task: Simulate the UPSC selection process with the following steps:
// 1. Eligibility Check
// ■ Criteria:
// ■ Age: 21–32 years.
// ■ Graduate status: Must be a graduate.
// ■ Nationality: Must be "Indian".
// ■ Output:
// ■ If eligible, proceed to Prelims.
// ■ If ineligible, display the reason for ineligibility.
// 2. Prelims Exam
// ■ Processing: Check if the candidate’s score ≥ cut-off.
// ■ Output:
// ■ If passed, proceed to Mains.
// ■ If failed, display "You failed the Prelims."
// 3. Mains Exam
// ■ Processing: Check if the candidate’s score ≥ cut-off.
// ■ Output:
// ■ If passed, proceed to Interview.
// ■ If failed, display "You failed the Mains."
// 4. Interview
// ■ Processing: Check if the candidate’s score ≥ cut-off.
// ■ Output:
// ■ If passed, display "Congratulations! You have cleared the
// UPSC."
// ■ If failed, display "You failed the Interview."
// ○ Final Output: Use nested conditional statements to simulate the entire process.
// _________________________________

 
// let age=21;
// let nation="Indian";
// let Gradu="Yes";
// //Pre cut off.............
// let Pre_score=89.99;
// let P_cutof=89.99;
// // main cutoff............
// let Main_score=80;
// let M_cutof=80;
// // MainScore..............
// let In_score=70;
// let In_cutof=70;

// document.write("1.Eliebility Check <br>")
// if(age>=21&& age<=32 && Gradu=="Yes"&& nation=="Indian"){
//     document.write("You eligible proceed to Prelims <br>")
   
//     document.write(" 2.Prelims..... <br>")

// if(Pre_score>=P_cutof){
//     document.write("You have Pass Pre proceed to Mains <br>")

//     document.write("3.Mains <br>")

// if(Main_score>=M_cutof)
// {
//     document.write("You have Pass main proceed to Interview <br>")

//     document.write("4. Interview <br>")

//     if(In_score>=In_cutof){

//         document.write("Congratulation you have passed UPSE")
//     }else{
//         document.write(" You have Failed Interview")
   
//     }

//  }else
// {
//     document.write("You have failed in main Exame ")

// }


// }else{
//     document.write("You Failed in Prelims Exam! ")
  
// }



// }else if(nation!="Indian"){
//     document.write("You have Not Indian <br>")

// }else if(Gradu!="Yes"){
//     document.write("You have Not Graduate <br>")

// }else if(!(age>=21&&age<=32)){
//     document.write("Your age must between 21 to 32 <br>")
// }

// else{
//     document.write("you not eligible")
// }


//9. Menu-Driven Login System...........................

//----- This is the Exit Function ---------------
// let exit=()=>{

//     document.write("Exiting the program. Have a nice day! ");
//  }
// //-------------------------------------------------


  

// let Phone_number="1234567890";
// let OTP="1234"
// let Email="user@example.com";
// let Password= "password123"


// document.write(`<h2> 
//     Phone_number="1234567890";<br>
//     OTP="1234"<br>
//     Email="user@example.com";<br>
//     Password= "password123"


    
//     </h2>`)

//     let inp =prompt(`Enter the Option 1 login to number & OTP <br>
//         Enter the Option 2 login with email & Password <br>
//         Enter the Option 3  to Exit
// `)
     
    
// switch(inp){

    
//     case "1" :
//   Phone_number=prompt("enter mob num ")
//   OTP=prompt("Enter the OTP")
  
//  if(Phone_number=="1234567890" && OTP=="1234"){

//     document.write("Display success")
// }else{
    
//     document.write("Error");
// }
// break;

// case "2":

// Email=prompt("Enter your email");
// Password=prompt("enter Your Password");

//     if(Email=="user@example.com" && Password=="password123" ){
        
//         document.write("Display success")
//     }else{
//         document.write("Error")
//     }
//     break;

//     case "3":
//         exit();
//     break;

//         default:
//         document.write(`<h1>Invali Option ! to Select a Valid Option ${validate()} </h1>`)
// }


//Q 10---------------------------------------------------------------------
// let question1="what is 2+2?"
// let question2="what is 2-2?"
// let question3="what is 2*2?"
// let question4="what is 2/2?"
// let question5="what is 2%2?"

// let opt1=`A.5,B.1,C.4,D.3,skip`
// let opt2=`A.1,B.0,C.4,D.3,skip`
// let opt3=`A.5,B.4,C.3,D.2,skip`
// let opt4=`A.3,B.2,C.1,D.5,skip`
// let opt5=`A.5,B.0,C.1,D.3,skip`

// let rightAns1="c"
// let rightAns2="b"
// let rightAns3="b"
// let rightAns4="c"
// let rightAns5="b"

// let score1=1000;
// let score2=2000;
// let score3=3000;
// let score4=5000;
// let score5=10000;

// // Game State Variables
// let totalScore =+ 0;
// let correctAnswers =+ 0;
// let skippedQuestions = 0;
// let wrongAnswers =+ 0;
// let currentQuestionIndex =+ 0;


// function strt(){

// userInput=prompt("Are you strt the game yes || no")

// if(userInput==="YES" ||userInput==="yes"){
// gameproces();

// }else{
//     document.write("Exit good by ")
// }

// }


 
// function gameproces(){

// // if(currentQuestionIndex<count){

// // count++;

// let userAns=prompt(`${question1}\n ${opt1} skip to skip`);
// if(userAns==="C"|| userAns==="c" ){

//  correctAnswers++;
//  totalScore+=score1=1000; 

// }else if(userAns==="skip") {
//     skippedQuestions++;
//    //document.write('skip question')
//    }else{
//     wrongAnswers++
//    }
//    //---------2 Q
   
//    userAns=prompt(`${question2}\n${opt2}`)
//    if(userAns==="b"||userAns==="B"){
//    correctAnswers++;
//    totalScore+=score2=2000;
//    //document.write("correct Ans")
   
//    }else if(userAns==="skip"){
//    skippedQuestions++;
//    //document.write(`skip question ?`);
//    }else{
   
//        wrongAnswers++;
//       // document.write("wrong ans <br>")
//    }
   
//    //-----------Q3
   
//    userAns=prompt(`${question3}\n${opt3}`)
//    if(userAns==="b"||userAns==="B"){
//    correctAnswers++;
//    totalScore+=score3=3000;
   
   
//    }else if(userAns==="skip"){
//    skippedQuestions++;
//    //document.write(`skip question ?<br>`);
//    }else{
   
//    wrongAnswers++;
//    //document.write("wrong ans <br>")
//    }
   
   
//    //Q4----------------------------
   
//    userAns=prompt(`${question4}\n${opt4}`)
//    if(userAns==="c"||userAns==="C"){
//    correctAnswers++;
//    totalScore+=score4=5000;
   
   
//    }else if(userAns==="skip"){
//    skippedQuestions++;
//    //document.write(`skip question ? <br>`);
//    }else{
   
//    wrongAnswers++;
//    //document.write("wrong ans <br>")
//    }
   
   
   
//    //--------Q5---
   
   
//    userAns=prompt(`${question5}\n${opt5}`)
//    if(userAns==="b"||userAns==="B"){
//    correctAnswers++;
//    totalScore+=score5=10000;
   
   
//    }else if(userAns==="skip"){
//    skippedQuestions++;
//    //document.write(`skip question ? <br>`);
//    }else{
   
//    wrongAnswers++;
//    //document.write("wrong ans <br>")
//    }
//     endgame();
// }
 



// function endgame(){

//     let rating=parseInt(prompt("give your rating this game "))

// if(rating>=0 && rating<=5){

// document.write(`<h4>Skipped Question:${skippedQuestions}<br>
//    correct Ans: ${correctAnswers}<br>
//    wrong Ans:${wrongAnswers}<br>
//    totalScore: ${totalScore}<br>
//    rating: ${rating}<br>
//   </h1>
//     `)
// }

// }

// strt();











