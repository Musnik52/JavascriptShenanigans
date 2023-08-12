const api_url =
  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const imgBox = document.querySelector("#imgBox");
const qrImg = document.querySelector("#qr-img");
const btn = document.querySelector("#btn");
const inputText = document.querySelector("#inputText");

const generateQR = () => {
  if (!inputText.value || inputText.value.trim() === "") return;
  qrImg.src = `${api_url}${inputText.value.trim()}`;
  imgBox.classList.add("show-img");
};

btn.addEventListener("click", generateQR);
