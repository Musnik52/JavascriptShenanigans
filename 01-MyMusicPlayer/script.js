// TODO: Improve the code and built the rest of the bts

const progress = document.querySelector("#progress");
const music = document.querySelector("#music");
const btnPlay = document.querySelector("#btnPlay");
const iconPlay = document.querySelector("#play-icon");

music.onloadedmetadata = () => {
  progress.max = music.duration;
  progress.value = music.currentTime;
};

if (music.play) {
  setInterval(() => {
    progress.value = music.currentTime;
  }, 500);
}

const playPause = () => {
  if (iconPlay.classList.contains("fa-pause")) {
    music.pause();
    iconPlay.classList.remove("fa-pause");
    iconPlay.classList.add("fa-play");
  } else {
    music.play();
    iconPlay.classList.remove("fa-play");
    iconPlay.classList.add("fa-pause");
  }
};

progress.onchange = () => {
  music.play();
  music.currentTime = progress.value;
  iconPlay.classList.remove("fa-play");
  iconPlay.classList.add("fa-pause");
};

btnPlay.addEventListener("click", playPause);
