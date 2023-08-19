const leftCont = document.querySelector("#left");
const rightCont = document.querySelector("#right");
const lists = document.querySelectorAll(".list");

lists.forEach((list) => {
  list.addEventListener("dragstart", (e) => {
    let selected = e.target;

    [rightCont, leftCont].forEach((cont) => {
      cont.addEventListener("dragover", (e) => {
        e.preventDefault();
      });
    });

    [rightCont, leftCont].forEach((cont) => {
      cont.addEventListener("drop", () => {
        cont.appendChild(selected);
        selected = null;
      });
    });
  });
});
