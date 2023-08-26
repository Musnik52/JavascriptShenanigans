const hangmanImg = document.querySelector(".hangman-box img");
const keyboard = document.querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const gameModalImg = document.querySelector(".game-modal img");
const gameModalText = document.querySelector(".game-modal h4");
const gameModalMsg = document.querySelector(".game-modal p");
const guessesText = document.querySelector(".guesses-text b");
const api = "https://www.wordgamedb.com/api/v1/words/random";
const hint = document.querySelector(".hint-text b");
const wordDisplay = document.querySelector(".word-display");
const btnReplay = document.querySelector(".btn-replay");

let currWord,
  guessCounter = 0,
  correctLetters = [];
const guessLimit = 6;

const gameOver = (isWinner) => {
  setTimeout(() => {
    const modalText = isWinner ? "Correct!" : "Game Over!";
    const modalImg = isWinner ? "victory" : "lost";
    const modalMsg = isWinner ? "Well Done! You Guessed: " : "The answer was: ";
    gameModalImg.src = `images/${modalImg}.gif`;
    gameModalMsg.innerHTML = `${modalMsg} <b>${currWord}</b>`;
    gameModalText.innerHTML = `${modalText}`;
    gameModal.classList.toggle("show");
  }, 300);
};

const guess = (key) => {
  const listItem = document.querySelectorAll("li");
  currWord.includes(key.innerHTML)
    ? [...currWord].forEach((letter, i) => {
        letter === key.innerHTML
          ? correctLetters.push(letter) &&
            (listItem[i].innerHTML = letter) &&
            listItem[i].classList.toggle("guessed")
          : "";
      })
    : guessCounter++;
  key.disabled = true;
  hangmanImg.src = `images/hangman-${guessCounter}.svg`;
  guessesText.innerHTML = `${guessCounter} / ${guessLimit}`;

  guessCounter === guessLimit ? gameOver(false) : "";
  correctLetters.length === currWord.length ? gameOver(true) : "";
};

const randomWord = async () => {
  const res = await fetch(api).then((data) => data.json());
  const { word, category } = res;
  hint.innerHTML = category;
  wordDisplay.innerHTML = word
    .toUpperCase()
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join("");
  currWord = word.toUpperCase();
  // console.log(word, category);
};
randomWord();

for (let i = 97; i <= 122; i++) {
  const markup = `
  <button class="btn-key">${String.fromCharCode(i).toUpperCase()}</button>
  `;
  keyboard.insertAdjacentHTML("beforeend", markup);
}

const btnKey = document.querySelectorAll(".btn-key");
btnKey.forEach((key) => {
  key.addEventListener("click", (e) => guess(e.target));
});

btnReplay.addEventListener("click", () => window.location.reload());
