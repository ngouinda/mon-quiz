// ICI ON INITIALISE NOS QUESTIONS AINSI QUE NOS REPONSES
const questions = [

    {
        question: "Quelle est la capitale de la France ?",
        answers: [
            {  text: "Marseille", correct: false },
            {  text: "Brazzaville", correct: false },
            {  text: "Paris", correct: true },
            {  text: "Milan", correct: false },
        ]

    },
    {
        question: "Que signifie CEMAC ?",
        answers: [
            {  text: "Communauté économique et mondiale de l'Afrique centrale", correct: false },
            {  text: "Communauté économique et monétaire de l'Afrique centrale", correct: true },
            {  text: "Comité économique et monétaire de l'Afrique centrale", correct: false },
            {  text: "Comité écologique et mondial de l'Afrique centrale", correct: false },
        ]

    },
    {
        question: "Quelle est la capitale  économique de la republique du Congo ?",
        answers: [
            {  text: "Paris", correct: false },
            {  text: "Pointe-Noire", correct: true },
            {  text: "Brazzaville", correct: false },
            {  text: "Ouésso", correct: false },
        ]

    },
    {
        question: "Quelle est la Hauteur de la tour Eiffel ?",
        answers: [
            {  text: "Environ 800 m", correct: false },
            {  text: "Environ 1 Km", correct: false },
            {  text: "Environ 300 m", correct: true },
            {  text: "Environ 500 m", correct: false },
        ]

    },
    {
        question: "Le perimètre du rectangele est égal à ?",
        answers: [
            {  text: "(L + l) / 2", correct: false },
            {  text: "(L + l).2", correct: true },
            {  text: "(L + l) ", correct: false },
            {  text: "(L - l).2", correct: false },
        ]

    },
    {
        question: "Où se trouve le siège actuel de l'ONU ?",
        answers: [
            {  text: "Berlin", correct: false },
            {  text: "New York", correct: true },
            {  text: "Jerusalem", correct: false },
            {  text: "Rio de janeiro", correct: false },
        ]

    }
];

// ///////////////////////////////////////////////////////////

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function starQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorect = selectedBtn.dataset.correct === "true";
    if (isCorect) {
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display ="block" ;
}

function showscore() {
    resetState();
    questionElement.innerHTML = `Ton score est de ${score} sur ${questions.length} !`;
    nextButton.innerHTML = "Rejouer";
    nextButton.style.display = "block";
}   


function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showscore();
    }
}

nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }else{
        starQuiz();
    }
});

starQuiz();