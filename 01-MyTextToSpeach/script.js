const btn = document.querySelector("#btn");
const speech = new SpeechSynthesisUtterance();
const inputText = document.querySelector("textarea");
const voiceSelect = document.querySelector("select");
let voices = [];

const changeVoice = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

const convertToSpeech = () => {
  speech.text = inputText.value;
  window.speechSynthesis.speak(speech);
};

window.speechSynthesis.addEventListener("voiceschanged", changeVoice);
btn.addEventListener("click", convertToSpeech);
voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});
