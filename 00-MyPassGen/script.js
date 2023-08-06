const passBox = document.getElementById("password");
const btn = document.getElementById("gen-btn");
const copy = document.getElementById("copy-btn");
const passLength = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const specialSymbols = "@#$%^&*()_+-=~[]{}<>/";
const allChars = `${upperCase}${lowerCase}${numbers}${specialSymbols}`;

const createPass = () => {
  let password = "";

  while (password.length < passLength) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passBox.value = password;
};

const copyPass = () => {
  passBox.select();
  document.execCommand("copy");
};

btn.addEventListener("click", createPass);
copy.addEventListener("click", copyPass);
