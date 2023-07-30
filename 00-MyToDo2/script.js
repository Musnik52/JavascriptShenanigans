const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const btnAdd = document.getElementById("btn-add");

const setData = () =>{
  localStorage.setItem('todo', listContainer.innerHTML)
}

const getData = () =>{
  listContainer.innerHTML = localStorage.getItem('todo')
}

const addTask = () => {
  if (inputBox.value.trim() === "") {
    alert("Write a task to add!");
  } else {
    let listItem = document.createElement("li");
    listItem.innerHTML = inputBox.value;
    listContainer.appendChild(listItem);

    let spanItem = document.createElement("span");
    spanItem.innerHTML = "\u00d7";
    listItem.appendChild(spanItem);
  }
  inputBox.value = "";
  setData()
};

btnAdd.addEventListener("click", addTask);
listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
  setData()
});

getData()
