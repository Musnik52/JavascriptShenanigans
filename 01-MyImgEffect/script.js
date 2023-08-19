const imgBox = document.querySelector(".img-box");
const imgWrap = document.querySelector(".img-wrap");
const originalImg = document.querySelector("#original-img");
const line = document.querySelector("#line");
let spaceRemaining = imgBox.offsetLeft;

originalImg.style.width = `${imgBox.offsetWidth}px`;

imgBox.addEventListener("mousemove", (e) => {
  const boxWidth = `${e.pageX - spaceRemaining}px`;
  imgWrap.style.width = boxWidth;
  line.style.left = boxWidth;
});
