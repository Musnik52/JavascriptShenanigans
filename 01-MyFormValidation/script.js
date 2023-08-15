const errorName = document.querySelector("#error-name");
const errorPhone = document.querySelector("#error-phone");
const errorMsg = document.querySelector("#error-msg");
const errorEmail = document.querySelector("#error-email");
const errorSubmit = document.querySelector("#error-submit");
const inputName = document.querySelector("#name");
const inputPhone = document.querySelector("#phone");
const inputEmail = document.querySelector("#email");
const inputMsg = document.querySelector("#msg");
const btnSubmit = document.querySelector("#btn-submit");
let formValid;

const clear = () => {
  inputName.value = "";
  inputPhone.value = "";
  inputEmail.value = "";
  inputMsg.value = "";
};

const showError = (error, msg, isValid = false) => {
  error.innerHTML = msg;
  formValid = isValid;
};

const validateName = () => {
  const fullNameRegex = /^[A-Za-z]*\s{1}[A-Za-z]*$/;
  if (!inputName.value.trim()) return showError(errorName, "Name Required");
  if (!inputName.value.match(fullNameRegex))
    return showError(errorName, "Enter FULL Name");
  return showError(errorName, '<i class="fa-solid fa-circle-check"></i>', true);
};

const validatePhone = () => {
  if (inputPhone.value.length < 10)
    return showError(errorPhone, "10-Digit Number");
  if (!inputPhone.value) return showError(errorPhone, "Phone Number Required");
  return showError(
    errorPhone,
    '<i class="fa-solid fa-circle-check"></i>',
    true
  );
};

const validateEmail = () => {
  const validEmailRegex = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][A-Za-z]{2,4}$/;
  if (!inputEmail.value.trim()) return showError(errorEmail, "Email Required");
  if (!inputEmail.value.match(validEmailRegex))
    return showError(errorEmail, "Enter VALID Email");
  return showError(
    errorEmail,
    '<i class="fa-solid fa-circle-check"></i>',
    true
  );
};

const validateMsg = () => {
  const reqMsgLength = 30;
  const remainingLength = reqMsgLength - inputMsg.value.length;
  if (remainingLength > 0)
    return showError(errorMsg, `${remainingLength} More Characters Required`);
  return showError(errorMsg, '<i class="fa-solid fa-circle-check"></i>', true);
};

const validateForm = () => {
  if (!formValid) {
    showError(errorSubmit, "Please Fill the Requirements");
    setTimeout(() => {
      errorSubmit.innerHTML = "";
    }, 3000);
  } else clear();
};

inputName.addEventListener("keyup", validateName);
inputPhone.addEventListener("keyup", validatePhone);
inputEmail.addEventListener("keyup", validateEmail);
inputMsg.addEventListener("keyup", validateMsg);
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  validateForm();
});
