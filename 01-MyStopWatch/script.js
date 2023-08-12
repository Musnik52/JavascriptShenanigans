const displayTime = document.querySelector("#display-time");
const btnStart = document.querySelector("#btn-start");
const btnStop = document.querySelector("#btn-stop");
const btnReset = document.querySelector("#btn-reset");
let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;
displayTime.innerHTML = 'Press The "Play" Button To Begin';

const stopwatch = () => {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  if (hours === 24) hours = 0;

  let hh = hours < 10 ? "0" + hours : hours;
  let mm = minutes < 10 ? "0" + minutes : minutes;
  let ss = seconds < 10 ? "0" + seconds : seconds;
  displayTime.innerHTML = `${hh}:${mm}:${ss}`;
};

const watchStart = () => {
  if (timer) clearInterval(timer);
  timer = setInterval(stopwatch, 1000);
};

const watchStop = () => {
  clearInterval(timer);
};

const watchReset = () => {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
};

btnStart.addEventListener("click", watchStart);
btnStop.addEventListener("click", watchStop);
btnReset.addEventListener("click", watchReset);
