const icon = document.querySelector("#icon");
const password = document.querySelector("#password");

const passToggle = () => {
  password.type === "password"
    ? (password.type = "text") && (icon.src = 'eye-open.png')
    : (password.type = "password") && (icon.src = 'eye-close.png');
};

icon.addEventListener("click", passToggle);
