const scrollBox = document.querySelector(".gallery");
const btnNext = document.querySelector("#btn-next");
const btnBack = document.querySelector("#btn-back");

const changePhotos = (btn) => {
  const offsetValue = btn === btnNext ? 300 : -300;
  scrollBox.style.scrollBehavior = "smooth";
  scrollBox.scrollLeft += offsetValue;
};

scrollBox.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollBox.scrollLeft += e.deltaY;
  scrollBox.style.scrollBehavior = "auto";
});

[btnBack, btnNext].forEach((btn) =>
  btn.addEventListener("click", (e) => {
    changePhotos(e.target);
  })
);
