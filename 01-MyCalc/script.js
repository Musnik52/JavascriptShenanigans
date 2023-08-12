const display = document.querySelector(".display-box");
const btns = document.querySelectorAll(".btn");
const specialChars = [".", "/", "*", "-", "+", "="];
let output = "";

const calc = (input) => {
  if (output === "" && specialChars.includes(input)) return;
  if (input === "=" && output !== "") output = eval(output);
  else if (input === "AC") output = "";
  else if (input === "DEL") output = output.toString().slice(0, -1);
  else output += input;

  display.value = output;
};

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const pressedBtn = e.target.value;
    calc(pressedBtn);
  });
});
