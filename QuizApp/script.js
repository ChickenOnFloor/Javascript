const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Syntax"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HyperText Makeup Language",
      "HyperTransfer Markup Language",
      "Home Tool Markup Language"
    ],
    answer: "HyperText Markup Language"
  },
  {
    question: "What is the primary purpose of JavaScript?",
    options: [
      "To style the webpage",
      "To structure the webpage",
      "To make the webpage interactive",
      "To store data in a database"
    ],
    answer: "To make the webpage interactive"
  },
  {
    question: "Which of these is NOT a CSS property?",
    options: ["color", "font-size", "style", "border"],
    answer: "style"
  },
  {
    question: "Which HTML element is used for navigation?",
    options: ["<nav>", "<header>", "<footer>", "<section>"],
    answer: "<nav>"
  },
  {
    question: "Which property is used to change the font of a text in CSS?",
    options: ["font-size", "font-family", "font-style", "font-weight"],
    answer: "font-family"
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<css>", "<style>", "<script>", "<styles>"],
    answer: "<style>"
  },
  {
    question: "What is the purpose of the <head> tag in HTML?",
    options: [
      "To contain metadata about the page",
      "To display the main content",
      "To make the webpage interactive",
      "To display navigation links"
    ],
    answer: "To contain metadata about the page"
  }
];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 60;
const questionEl = document.getElementById("question");
const quizForm = document.getElementById("quiz-form");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreText = document.getElementById("score-text");
const restartBtn = document.getElementById("restart-btn");
const timerEl = document.getElementById("timer");

function showQuestion() {
  resetTimer();
  startTimer();

  nextBtn.disabled = true;
  quizForm.innerHTML = "";

  const q = questions[currentQuestionIndex];
  questionEl.textContent = q.question;

  q.options.forEach((option, index) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");

    radio.type = "radio";
    radio.name = "answer";
    radio.value = option;
    radio.addEventListener("change", () => {
      nextBtn.disabled = false;
    });

    label.appendChild(radio);
    label.append(option);
    quizForm.appendChild(label);
  });
}

function startTimer() {
  timeLeft = 60;
  timerEl.textContent = `Time Left: ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Time Left: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      handleNextQuestion();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 60;
}

function handleNextQuestion() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (selected && selected.value === questions[currentQuestionIndex].answer) {
    score++;
  }

  if (currentQuestionIndex >= questions.length - 1) {
    showResult();
  } else {
    currentQuestionIndex++;
    showQuestion();
  }
}


nextBtn.addEventListener("click", () => {
  clearInterval(timer);
  handleNextQuestion();
});

function showResult() {
  clearInterval(timer);
  questionEl.textContent = "";
  quizForm.innerHTML = "";
  questionEl.classList.add("hide");
  quizForm.classList.add("hide");
  nextBtn.classList.add("hide");
  timerEl.classList.add("hide");
  resultEl.classList.remove("hide");
  const percentage = Math.round((score / questions.length) * 100);
  scoreText.textContent = `You scored ${score} out of ${questions.length}!`;
  const fill = document.getElementById("fill");
  const percentageText = document.getElementById("percentage-text");
  fill.style.transform = `rotate(${(percentage / 100) * 180}deg)`;
  percentageText.textContent = `${percentage}%`;
  if (percentage > 50) {
    document.getElementById("maskFull").style.transform = `rotate(${(percentage - 50) * 3.6}deg)`;
  }
}



restartBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  resultEl.classList.add("hide");
  questionEl.classList.remove("hide");
  quizForm.classList.remove("hide");
  nextBtn.classList.remove("hide");
  timerEl.classList.remove("hide");
  showQuestion();
});

window.onload = showQuestion;
