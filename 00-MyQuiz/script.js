import { questions } from "./questions.js";

const questionEl = document.querySelector("#question");
const answerBtn = document.querySelector("#answer-btns");
const nextBtn = document.querySelector("#next-btn");

let questionIndex = 0;
let score = 0;

const quizInit = () => {
  questionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  displayQuestion();
};

const displayQuestion = () => {
  quizReset();
  let currQuestion = questions[questionIndex];
  let questionNum = questionIndex + 1;
  questionEl.innerHTML = `${questionNum}. ${currQuestion.question}`;

  currQuestion.answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.innerHTML = answer.answer;
    btn.classList.add("btn");
    answerBtn.appendChild(btn);
    if (answer.isCorrect) {
      btn.dataset.isCorrect = answer.isCorrect;
    }
    btn.addEventListener("click", answerSelect);
  });
};

const quizReset = () => {
  nextBtn.style.display = "none";
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
  }
};

const answerSelect = (e) => {
  const btnPress = e.target;
  const choice = btnPress.dataset.isCorrect ? "correct" : "incorrect";
  btnPress.classList.add(choice);
  if (choice === "correct") {
    score++;
  }
  Array.from(answerBtn.children).forEach((btn) => {
    if (btn.dataset.isCorrect) {
      btn.classList.add("correct");
    }
    btn.disabled = true;
  });
  nextBtn.style.display = "block";
};

const nextQuestion = () => {
  questionIndex++;
  questionIndex < questions.length ? displayQuestion() : displayScore();
};

const displayScore = () => {
  quizReset();
  questionEl.innerHTML = `You answered ${score} question(s) correctly.`;
  nextBtn.innerHTML = "Play again?";
  nextBtn.style.display = "block";
};

nextBtn.addEventListener("click", () => {
  questionIndex < questions.length ? nextQuestion() : quizInit();
});

quizInit();
