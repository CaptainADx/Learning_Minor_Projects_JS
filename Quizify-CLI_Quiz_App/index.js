let readlineSync = require("readline-sync"); //Used for Taking the User Input
let kuler = require("kuler"); //Used for Adding the Colors in Print Statements. (Use Tailwind CSS colors for Hex codes)

let userName = readlineSync.question("Enter your UserName -->  ");

/**Creating Data Set */
const database = {
    data : [
        {
            question: `let a = {}, b ={} \n     console.log(a==b)\n     console.log(a===b)`,
 
                options: {
                    a: "false false",
                    b: "false true",
                    c: "true false",
                    d: "true true"
                },
                correctAnswer: "a"
        },

        {   
            question: "Object.assign(target, source) Creates which type of copy ?",

            options: {
                    a: "Deep copy",
                    b: "Shallow copy",
                    c: "Nested Copy",
                    d: "Creates a new reference"
                },
            correctAnswer : "b"
        },

    {
        question: "Is method chaining possible with forEach ?",
        options: {
            a: "Yes",
            b: "No"
        },
        correctAnswer: "b"
    }

    ]
}

// Creating the Leader Board
let leaderBoard = {
    data : [
        {
            name : "Priya",
            score : 2
        },
        {
            name : "Akash",
            score : 1
        },
        {
            name: "Jay",
            score: 2
        }
    ]
}

console.log(kuler(`\nHello ${userName}! Welcome to Quizify\n`, "#fcd34d"))

let score = 0;


function playGame(userAnswer, correctAnswer){
    if(userAnswer.toLowerCase() === correctAnswer){
            score++; 
            console.log(kuler("CORRECT ANSWER", "#16a34a"));
        } else{
            score--;
            console.log(kuler("WRONG ANSWER", "#c60808ff"));
            console.log(kuler(`The correct answer is --> ${correctAnswer}\n`, "#1d4ed8"));
        }
}


let highScore;

function highScorer(leaderBoard){
    // Step 1: Find highest score before adding current user
    let previousHighScore = Math.max(...leaderBoard.data.map(player => player.score));

    // Step 2: Push the Current Username and its Score in LeaderBoard
    leaderBoard.data.push({name : userName, score : score});

    // Step 3: Sorting the LeaderBoard Data in Descending order
    let scoreList = leaderBoard.data.sort((a,b) => b.score - a.score);

    // Step 4: Congratulate only if new score is strictly higher
    if(score > previousHighScore){
        console.log(kuler(`\n🎉 Congratulations ${userName}! You've just Set a New High Score 🎉\n`, "#fde047"));
    }

    // Step 5: Print the LeaderBoard Scorelist
    console.log(kuler("\n----------------------Leader Board----------------------\n", "#fde047"));

    for(let leader of scoreList){
        console.log(`Leader Name : ${leader.name}\tScore : ${leader.score}\n`);
    }
}



/** Function To Print Question and Options */
function showQuestionAndOptions(database){
    for(let i =0; i<database.data.length; i++){
        console.log(`\nQ${i+1} - ${database.data[i].question}\n`);
        for(let key in database.data[i].options){
            console.log(`(${key}) - ${database.data[i].options[key]}`);
        }

        let userAnswer = readlineSync.question("Enter Your Answer from the above Options  --> ");
        let correctAnswer = database.data[i].correctAnswer;

        playGame(userAnswer, correctAnswer);
    }
}


/* Execution of Codes */
showQuestionAndOptions(database);


console.log(kuler("----------------------Your Score----------------------\n", "#fcd34d"));
console.log(kuler(`Your Score is --> ${score}`, "#d946ef"));
highScorer(leaderBoard);