const gameContainer = document.querySelector(".container");
const playerResult = document.querySelector(".player-result img");
const botResult = document.querySelector(".bot-result img");
const msg = document.querySelector(".result-msg");
const options = document.querySelectorAll(".option-img");
const optionImg = [
  {
    name: "rock",
    beats: "scissors",
  },
  {
    name: "paper",
    beats: "rock",
  },
  {
    name: "scissors",
    beats: "paper",
  },
];

const makeChoice = (index = Math.floor(Math.random() * optionImg.length)) =>
  optionImg[index];

const isWinnwer = (selection, opponentSelection) =>
  selection.beats === opponentSelection.name;

options.forEach((option, i) => {
  option.addEventListener("click", () => {
    option.classList.add("active");
    options.forEach((optionOther, iOther) => {
      i !== iOther && optionOther.classList.remove("active");
    });
    gameContainer.classList.add("start");
    msg.innerHTML = "Rock, Paper, Scissors";
    playerResult.src = botResult.src = `images/rock.png`;

    const playerChoice = makeChoice(i);
    const botChoice = makeChoice();
    const playerWinner = isWinnwer(playerChoice, botChoice);
    const botWinner = isWinnwer(botChoice, playerChoice);

    setTimeout(() => {
      gameContainer.classList.remove("start");
      playerResult.src = `images/${playerChoice.name}.png`;
      botResult.src = `images/${botChoice.name}.png`;

      msg.innerHTML = playerWinner
        ? "Player Wins!"
        : botWinner
        ? "Bot Wins..."
        : "DRAW!";
    }, 2500);
  });
});
