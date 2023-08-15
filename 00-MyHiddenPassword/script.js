const icon = document.querySelector("#icon");
const password = document.querySelector("#password");
const inputBox = document.querySelector(".input-box");
const msg = document.querySelector("#msg");
const strength = document.querySelector("#strength");

const passToggle = () => {
  password.type === "password"
    ? (password.type = "text") && (icon.src = "eye-open.png")
    : (password.type = "password") && (icon.src = "eye-close.png");
};

const passwordStrength = () => {
  msg.style.display = password.value.length ? "block" : "none";

  password.value.length < 4
    ? (strength.innerHTML = "Weak") &&
      (msg.style.color = inputBox.style.borderColor = "#ff5925")
    : password.value.length >= 4 && password.value.length < 8
    ? (strength.innerHTML = "Normal") &&
      (msg.style.color = inputBox.style.borderColor = "yellow")
    : (strength.innerHTML = "Strong") &&
      (msg.style.color = inputBox.style.borderColor = "#26d730");
};

icon.addEventListener("click", passToggle);
password.addEventListener("input", passwordStrength);
