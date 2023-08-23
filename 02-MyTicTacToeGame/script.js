const selectBox = document.querySelector(".select-box");
const resultBox = document.querySelector(".result-box");
const winnerText = document.querySelector(".winner-text");
const playboard = document.querySelector(".playboard");
const playerX = document.querySelector(".player-x");
const playerO = document.querySelector(".player-o");
const players = document.querySelector(".players");
const btnReplay = document.querySelector(".btn");
const boxes = document.querySelectorAll("section span");
const delayTime = (Math.random() * 1000 + 200).toFixed();

const iconX = "fas fa-times";
const iconO = "far fa-circle";
let playerSign;

const togglePlayboard = () => {
  selectBox.classList.toggle("hide");
  playboard.classList.toggle("show");
};

const toggleResults = (draw = false) => {
  playboard.classList.remove("show");
  resultBox.classList.add("show");
  winnerText.innerHTML = draw
    ? "DRAW!"
    : `Player <p>${playerSign}</p> Won The Game!`;
};

const toggleActivePlayer = () => {
  players.classList.toggle("active");
  players.classList.toggle("player");
};

const play = (box) => {
  if (!winnerCheck()) {
    setTimeout(toggleResults, 700);
    return;
  }
  box.innerHTML = players.classList.contains("player")
    ? `<i class="${iconO}"></i>` && (playerSign = "O")
    : `<i class="${iconX}"></i>` && (playerSign = "X");
  toggleActivePlayer();
  box.id = playerSign;
  box.style.pointerEvents = "none";
};

const botPlay = () => {
  const emptySpaces = [];
  for (let i = 0; i < boxes.length; i++)
    !boxes[i].id ? emptySpaces.push(i) : "";
  const randomBoxNumber = Math.floor(Math.random() * emptySpaces.length);
  const randomBox = emptySpaces[randomBoxNumber];
  emptySpaces.length > 0 ? play(boxes[randomBox]) : toggleResults(true);
};

const getPlayerSign = (id) => document.querySelector(`.box-${id}`).id;

const checkPlayerSign = (val1, val2, val3) =>
  getPlayerSign(val1) === playerSign &&
  getPlayerSign(val2) === playerSign &&
  getPlayerSign(val3) === playerSign
    ? true
    : false;

const winnerCheck = () => {
  const res =
    checkPlayerSign(1, 2, 3) ||
    checkPlayerSign(4, 5, 6) ||
    checkPlayerSign(7, 8, 9) ||
    checkPlayerSign(1, 5, 9) ||
    checkPlayerSign(7, 5, 3) ||
    checkPlayerSign(1, 4, 7) ||
    checkPlayerSign(2, 5, 8) ||
    checkPlayerSign(3, 6, 9)
      ? false
      : true;

  return res;
};

window.addEventListener("load", () => {
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      play(box);
      setTimeout(() => {
        winnerCheck() ? botPlay() : toggleResults();
      }, delayTime);
    });
  });

  [playerX, playerO].forEach((player) => {
    player.addEventListener("click", () => {
      togglePlayboard();
      if (player === playerO) toggleActivePlayer();
    });
  });

  btnReplay.addEventListener("click", () => {
    window.location.reload();
  });
});
