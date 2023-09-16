const api = "http://api.quotable.io/random";
const quoteDisplay = document.querySelector(".quote-display");
const quoteInput = document.querySelector(".quote-input");
const timer = document.querySelector(".timer");
let startTime;

const getTimerTime = () => Math.floor((new Date() - startTime) / 1000);

const startTimer = () => {
  timer.innerText = 0;
  startTime = new Date();
  setInterval(() => {
    timer.innerText = getTimerTime();
  }, 1000);
};

const getQuote = async () =>
  fetch(api)
    .then((res) => res.json())
    .then((data) => data.content);

const renderNextQuote = async () => {
  const quote = await getQuote();
  quoteDisplay.innerHTML = "";
  quote.split("").forEach((char) => {
    const charSpan = document.createElement("span");
    charSpan.innerText = char;
    quoteDisplay.appendChild(charSpan);
  });
  quoteInput.value = null;
  startTimer();
};

const playLogic = () => {
  const quoteArr = quoteDisplay.querySelectorAll("span");
  const valueArr = quoteInput.value.split("");
  let correct = true;
  quoteArr.forEach((charSpan, i) => {
    const char = valueArr[i];
    if (char == null) {
      charSpan.classList.remove("correct");
      charSpan.classList.remove("incorrect");
      correct = false;
    } else if (char === charSpan.innerText) {
      charSpan.classList.add("correct");
      charSpan.classList.remove("incorrect");
    } else {
      charSpan.classList.remove("correct");
      charSpan.classList.add("incorrect");
      correct = false;
    }
  });
  if (correct) renderNextQuote();
};

quoteInput.addEventListener("input", playLogic);

renderNextQuote();
