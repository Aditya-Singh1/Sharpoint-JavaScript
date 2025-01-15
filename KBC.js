
let Q1="What is the capital of France?";
let Q2="Which planet is known as the Red Planet?";
let Q3="What is the chemical symbol for gold?";
let Q4="Which ocean is the largest?";
let Q5="Who wrote the play 'Romeo and Juliet";
 

const questions = [
    { question: "What is the capital of France?", options: ["A. Paris", "B. London", "C. Berlin", "D. Madrid"], correctAnswer: "A", points: 1000 },
    { question: "What is 2 + 2?", options: ["A. 3", "B. 4", "C. 5", "D. 6"], correctAnswer: "B", points: 2000 },
    { question: "Which planet is known as the Red Planet?", options: ["A. Venus", "B. Mars", "C. Earth", "D. Jupiter"], correctAnswer: "B", points: 3000 },
    { question: "Who wrote 'Hamlet'?", options: ["A. Charles Dickens", "B. William Shakespeare", "C. Mark Twain", "D. J.K. Rowling"], correctAnswer: "B", points: 5000 },
    { question: "What is the speed of light?", options: ["A. 300,000 km/s", "B. 150,000 km/s", "C. 100,000 km/s", "D. 500,000 km/s"], correctAnswer: "A", points: 10000 }
];

// Game State Variables
let totalScore = 0;
let correctAnswers = 0;
let skippedQuestions = 0;
let wrongAnswers = 0;
let currentQuestionIndex = 0;

// Function to start the game
function startGame() {
    let startResponse = prompt("Welcome to the Quiz Game! Would you like to start the game? (yes/no)");

    if (startResponse === "yes") {
        askQuestion();
    } else {
        document.write("Game has ended. Goodbye! <br>");
    }
}

// Function to ask a question
function askQuestion() {
    if (currentQuestionIndex < questions.length) {
        let question = questions[currentQuestionIndex];
        let options = question.options.join("\n");

        let userAnswer = prompt(`${question.question}\n${options}\n\nEnter your answer (A/B/C/D) or type 'skip' to skip:`).toUpperCase();

        if (userAnswer === "SKIP") {
            skippedQuestions++;
            document.write("You skipped this question.<br>");
        } else if (userAnswer === question.correctAnswer) {
            totalScore += question.points;
            correctAnswers++;
            document.write(`Correct! You've earned ${question.points} points.<br>`);
        } else {
            wrongAnswers++;
            document.write("Wrong answer. No points awarded.<br>");
        }

        currentQuestionIndex++;
        askQuestion(); // Proceed to the next question
    } else {
        endGame(); // End game when all questions are answered or skipped
    }
}

// Function to end the game and show statistics
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