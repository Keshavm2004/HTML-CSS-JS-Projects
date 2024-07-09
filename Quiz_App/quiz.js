const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: "false" },
            { text: "Blue Whale", correct: "true" },
            { text: "Giraffe", correct: "false" },
            { text: "Elephant", correct: "false" },
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: "true" },
            { text: "Bhutan", correct: "false" },
            { text: "Nepal", correct: "false" },
            { text: "Sri lanka", correct: "false" },
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: "false" },
            { text: "Gobi", correct: "false" },
            { text: "Sahara", correct: "false" },
            { text: "Antarctica", correct: "true" },
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: "false" },
            { text: "Australia", correct: "true" },
            { text: "Arctic", correct: "false" },
            { text: "Africa", correct: "false" },
        ]
    },
    {
        question: "Which is the largest continent in the world?",
        answers: [
            { text: "Asia", correct: "true" },
            { text: "Australia", correct: "false" },
            { text: "Arctic", correct: "false" },
            { text: "Africa", correct: "false" },
        ]
    },
    {

        question: "Which is the fastest animal in the wrold",
        answers: [
            {text: "Dog", correct: "false"},
            {text: "Tiger", correct: "false"},
            {text:"Cheetah", correct:"true"},
            {text: "Lion", correct:"false"}
        ]
    },
    
    {

        question: "Who is the youngest world chess player?",
        answers: [
            {text: "Vishvanthan Anand", correct: "false"},
            {text: "Magnus Carlsen", correct: "false"},
            {text:"Praggnandha", correct:"true"},
            {text: "Hikaru Mora", correct:"false"}
        ]
    },

];

const questionElement = document.getElementById("question");
const answerbuttons = document.getElementById("options");
const nextbutton = document.getElementById("next_btn");
let score = 0;
let currentquestionindex = 0;

function startQuiz() {
    console.log("Starting up the quiz");
    currentquestionindex = 0;
    score = 0;
    nextbutton.innerHtml = "Next";
    showquestion();
}

function showquestion() {
    reset();
    console.log(currentquestionindex);
    let currentquestion = questions[currentquestionindex];
    let questionnumber = currentquestionindex + 1;
    questionElement.innerHTML = questionnumber + ". " + currentquestion.question;

    currentquestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", checkanswer);
    });
}

function reset() {
    console.log("Inside reset");
    nextbutton.style.display = "none";
    while(answerbuttons.firstChild) {
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
    console.log("Getting out of reset");
}

function checkanswer(e) {
    console.log("checking answer");
    const selectedans = e.target;
    if (selectedans.dataset.correct === "true") {
        selectedans.classList.add("correct");
        score += 1;
        console.log("Correct answer");
    } else {
        selectedans.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextbutton.style.display = "block";
    console.log(currentquestionindex);

}

nextbutton.addEventListener("click", () => {
    if (currentquestionindex < questions.length) {
        console.log(currentquestionindex);
        currentquestionindex++;
        if (currentquestionindex < questions.length) {
            console.log("showing next question");
            showquestion();
        } else {
            console.log("showing score");
            showScore();
        }
    } else {
        startQuiz();
    }
})
startQuiz();

function showScore() {
    reset();
    questionElement.innerHTML = "You Scored " + score + " out of " + questions.length+ "!";
    nextbutton.innerHTML = "Play again";
    nextbutton.style.display = "block";
}