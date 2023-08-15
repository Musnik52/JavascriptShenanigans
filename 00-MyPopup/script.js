const btnSubmit = document.querySelector(".btn-submit");
const btnClose = document.querySelector(".btn-close");
const popup = document.querySelector("#popup");

const openClosePopup = () => {
  popup.classList.toggle("open-popup");
};

[btnSubmit, btnClose].forEach((btn) =>
  btn.addEventListener("click", openClosePopup)
);
