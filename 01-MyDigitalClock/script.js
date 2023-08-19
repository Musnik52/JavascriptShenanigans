const hours = document.querySelector("#hh");
const minutes = document.querySelector("#mm");
const seconds = document.querySelector("#ss");

setInterval(() => {
  let now = new Date();

  hours.innerHTML = now.getHours().toString().padStart(2, 0);
  minutes.innerHTML = now.getMinutes().toString().padStart(2, 0);
  seconds.innerHTML = now.getSeconds().toString().padStart(2, 0);
}, 1000);
