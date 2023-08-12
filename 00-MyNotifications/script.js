const notificationBox = document.querySelector("#notification-box");
const btnSuccess = document.querySelector(".btn-success");
const btnFailure = document.querySelector(".btn-failure");
const btnWarning = document.querySelector(".btn-warning");

const showNotification = (msg) => {
  let markup = `
    <div class="notification">
      ${msg}
    </div>
  `;
  notificationBox.insertAdjacentHTML("afterbegin", markup);
  const childEl = document.querySelector(`.notification`);
  if (msg.includes("Failure")) childEl.classList.add("failure");
  if (msg.includes("Warning")) childEl.classList.add("warning");

  setTimeout(() => {
    childEl.remove();
  }, 5000);
};

[btnSuccess, btnFailure, btnWarning].forEach((btn) =>
  btn.addEventListener("click", () => {
    const msg =
      btn === btnSuccess
        ? '<i class="fa-solid fa-circle-check"></i>Success'
        : btn === btnFailure
        ? '<i class="fa-solid fa-circle-xmark"></i>Failure'
        : '<i class="fa-solid fa-circle-exclamation"></i>Warning';
    showNotification(msg);
  })
);
