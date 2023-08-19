const btnReset = document.querySelector(".btn-reset");
const gameBox = document.querySelector(".game");
const symbols = [
  "🏆",
  "🏆",
  "💀",
  "💀",
  "❤️",
  "❤️",
  "🤢",
  "🤢",
  "🐼",
  "🐼",
  "🩲",
  "🩲",
  "🥩",
  "🥩",
  "🥗",
  "🥗",
].sort(() => (Math.random() > 0.5 ? 2 : -1));

const resetGame = () => {
  window.location.reload();
};

const gameFlow = () => {
  let openBoxes = document.querySelectorAll(".box-open");
  if (openBoxes.length > 1) {
    if (openBoxes[0].innerHTML === openBoxes[1].innerHTML)
      [openBoxes[0], openBoxes[1]].forEach((openbox) => {
        openbox.classList.add("box-match");
        openbox.classList.remove("box-open");
      });

    let openMatchs = document.querySelectorAll(".box-match");
    if (openMatchs.length === symbols.length) alert("WINNER!");
    else {
      [openBoxes[0], openBoxes[1]].forEach((openbox) => {
        openbox.classList.remove("box-open");
      });
    }
  }
};

symbols.forEach((symbol) => {
  const markup = `<div class="item">${symbol}</div>`;
  gameBox.insertAdjacentHTML("afterbegin", markup);
  const box = document.querySelector(".item");
  box.addEventListener("click", () => {
    box.classList.add("box-open");
    setTimeout(gameFlow, 700);
  });
});

btnReset.addEventListener("click", resetGame);

