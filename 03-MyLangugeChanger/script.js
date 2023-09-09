import { engKeyCodes } from "./EngKeyCodes.js";

const textMixed = document.querySelector("#mixed");
const btn = document.querySelector("#btn");
const container = document.querySelector(".container");
let nextChar;
let changedText = "";

const texConvert = () => {
  const markup = `
  <span>${changedText}</span>
  `;
  container.insertAdjacentHTML("beforeend", markup);
};

const getText = () => {
  if (!textMixed.value.trim()) return;
  const input = textMixed.value;
  for (let i = 0; i < input.length; i++) {
    nextChar = engKeyCodes[input.charCodeAt(i)]
      ? engKeyCodes[input.charCodeAt(i)].heb
      : input[i];
    changedText += nextChar;
  }
  texConvert();
};

btn.addEventListener("click", getText);

/* EXAMPLE:
thzu ctxv!!! cygu, ran,h vfk ctbdkh,' ucfkk kt rth,h to vjkp,h apv///
nzk aha nnhr tu,hu,' ffv kt tmyrl knjue ukv,jhk v-f-k njsa! nzk' kt ffv?
nv ahpv azv do aunr gk vxsr go vxhnbho! nyur;' bfui?
*/
