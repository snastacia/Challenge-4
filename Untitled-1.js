//TO DO: create variables here
var questions = [
  { question: "Question 1: Which of the following are capabilities of functions in JavaScript?", answers: ["A. Return a value", "B. Accept parameters and Return a value", "C. Accept parameters", "D. None of the above"], correct: "C. Accept parameters" },

  { question: "Question 2: What is a JavaScript variable used for?", answers: ["A. Storing numbers, dates, or other values", "B. Varying randomly", "C. Causing high-school algebra flashbacks", "D. None of the above"], correct: "A. Storing numbers, dates, or other values" },

  { question: "Question 3: How do you create a function in JavaScript?", answers: ["A. function = myFunction()", "B. function myFunction()", "C. function:myFunction()", "D. None of the above"], correct: "A. function = myFunction()" },

  { question: "Question 4: Which of the following attribute can hold the JavaScript version?", answers: ["A. LANGUAGE", "B. SCRIPT", "C. VERSION", "D. None of the above"], correct: "A. LANGUAGE" },

];

var questionLog = 0;
var timer, counter = 60;
var quizTracker = 0;
var playerScore = 0;
const finalEl = document.querySelector("#final-score");
let initialsInput = document.querySelector("#initials");
const highscoresEl = document.querySelector("#highScores");
let scoreListEl = document.querySelector(".scoreList");
let scoreList = [];
let submitScrBtn = document.querySelector("#submitScore");
let clearScrBtn = document.querySelector("#clearScores");
let viewScrBtn = document.querySelector("#view-high-scores");
let goBackBtn = document.querySelector("#goBack");



//Displays questions
function displayQuestion() {
  document.getElementById("question").innerHTML =
    questions[questionLog].question;
  document.getElementById("answer1").innerHTML =
    questions[questionLog].answers[0];
  document.getElementById("answer2").innerHTML =
    questions[questionLog].answers[1];
  document.getElementById("answer3").innerHTML =
    questions[questionLog].answers[2];
  document.getElementById("answer4").innerHTML =
    questions[questionLog].answers[3];
}

//Timer that starts from 60 and counts down to 0
function countdown() {
  document.getElementById("counter").innerHTML = counter;
  timer = setInterval(function () {
    counter--;
    document.getElementById("counter").innerHTML = counter;
    if (counter === 0 && quizTracker === 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

//Function to start quiz
function startQuiz() {
  var quizSection = document.getElementById("quiz");
  var starterScreen = document.getElementById("div");
  var timerTime =  document.getElementById("quizTimer");
  timerTime.classList.remove("invisible");
  starterScreen.classList.add("invisible");
  quizSection.classList.remove("invisible");
  //quizSection.classList.add("startScreen");
  displayQuestion();
}

//click events for questions 1-4
document.getElementById("answer1").addEventListener("click", function () {
  if (this.textContent === questions[questionLog].correct) {
    console.log("correct");
    document.getElementById("result").innerHTML ="Correct!"
  } else {
    console.log("incorrect");
    document.getElementById("result").innerHTML ="Incorrect!"
    counter = counter - 10;
  }
  questionLog++;
  if (questionLog === questions.length) {
    endQuiz();
  } else {
    displayQuestion();
  }
});


document.getElementById("answer2").addEventListener("click", function () {
  if (this.textContent === questions[questionLog].correct) {
    console.log("correct");
    document.getElementById("result").innerHTML ="Correct!"
  } else {
    console.log("incorrect");
    document.getElementById("result").innerHTML ="Incorrect!"
    counter = counter - 10;
  }
  questionLog++;
  if (questionLog === questions.length) {
    endQuiz();
  } else {
    displayQuestion();
  }
});


document.getElementById("answer3").addEventListener("click", function () {
  if (this.textContent === questions[questionLog].correct) {
    console.log("correct");
    document.getElementById("result").innerHTML ="Correct!"
  } else {
    console.log("incorrect");
    document.getElementById("result").innerHTML ="Incorrect!"
    counter = counter - 10;
  }
  questionLog++;
  if (questionLog === questions.length) {
    endQuiz();
  } else {
    displayQuestion();
  }
});


document.getElementById("answer4").addEventListener("click", function () {
  if (this.textContent === questions[questionLog].correct) {
    console.log("correct");
    document.getElementById("result").innerHTML ="Correct!"
  } else {
    console.log("incorrect");
    document.getElementById("result").innerHTML ="Incorrect!"
    counter = counter - 10;
  }
  questionLog++;
  if (questionLog === questions.length) {
    endQuiz();
  } else {
    displayQuestion();
  }
});

//Function to end quiz
function endQuiz() {
  var quizSection = document.getElementById("quiz");
  var starterScreen = document.getElementById("div");
  var timeLeft = document.getElementById("quizTimer");
  trackEndGame = 1;
  playerScore = counter;
  document.getElementsByClassName("quizTimer");
  starterScreen.classList.add("invisible");
  quizSection.classList.add("invisible");
  document.getElementById("result").innerHTML = ("You scored " + playerScore + "points!");
  timeLeft.classList.add("invisible");
}

//Function to get score
function getScore(event) {
    event.preventDefault();

    finalEl.style.display = "none";
    highscoresEl.style.display = "block";

    let init = initialsInput.value.toUpperCase();
    scoreList.push({ initials: init, score: secondsLeft });

//List to sort high score
    scoreList = scoreList.sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        } else {
          return -1;
        }
      });
    
    scoreListEl.innerHTML="";
    for (let i = 0; i < scoreList.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
        scoreListEl.append(li);
    }

//Store score in local storage 
    storeScores();
    displayScores();
}

function storeScores() {
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
}

function displayScores() {
    let storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

    if (storedScoreList !== null) {
        scoreList = storedScoreList;
    }
}

function clearScores() {
    localStorage.clear();
    scoreListEl.innerHTML="";
}

//event listener for buttons to start quiz + timer
document.getElementById("startQuiz").addEventListener("click", startQuiz);
document.getElementById("startQuiz").addEventListener("click", countdown);
submitScrBtn.addEventListener("click", addScore);


//event listener function to go back
goBackBtn.addEventListener("click", function () {
  highscoresEl.style.display = "none";
  codersIntro.style.display = "block";
  secondsLeft = 60;
  time.textContent = `Time:${secondsLeft}s`;
});

//event listener to clear scores
clearScrBtn.addEventListener("click", clearScores);

//view high scor button event listener
viewScrBtn.addEventListener("click", function () {
  if (highscoresEl.style.display === "none") {
      highscoresEl.style.display = "block";
  } 
  else if (highscoresEl.style.display === "block") {
      highscoresEl.style.display = "none";
  } 
});

//event listener for buttons to start quiz + timer
document.getElementById("startQuiz").addEventListener("click", startQuiz);
document.getElementById("startQuiz").addEventListener("click", countdown);
submitScrBtn.addEventListener("click", addScore);

