const itemContainer = document.getElementById("items");
const itemTemplate = document.getElementById("itemTemplate");
const btnAdd = document.getElementById("add");
const btnClear = document.getElementById("clear");

const getItems = () => {
  const value = localStorage.getItem("todo") || "[]";
  return JSON.parse(value);
};

let items = getItems();

const setItems = (items) => {
  const itemsJson = JSON.stringify(items);
  localStorage.setItem("todo", itemsJson);
};

const addItem = () => {
  items.unshift({
    description: "",
    checked: false,
  });
  setItems(items);
  refreshList();
};

const updateItem = (item, key, value) => {
  item[key] = value;
  setItems(items);
  refreshList();
};

const refreshList = () => {
  // if (!items) return
  items.sort((a, b) => {
    if (a.checked) return 1;
    if (b.checked) return -1;
    return a.description < b.description ? -1 : 1;
  });

  itemContainer.innerHTML = "";
  for (const item of items) {
    const itemEl = itemTemplate.content.cloneNode(true);
    const descriptionInput = itemEl.querySelector(".item-description");
    const checkedInput = itemEl.querySelector(".item-checked");

    descriptionInput.value = item.description;
    checkedInput.checked = item.checked;

    descriptionInput.addEventListener("change", () => {
      updateItem(item, "description", descriptionInput.value);
    });

    checkedInput.addEventListener("change", () => {
      updateItem(item, "checked", checkedInput.checked);
    });

    itemContainer.append(itemEl);
  }
};

const clearItems = () => {
  localStorage.removeItem("todo");
};

btnAdd.addEventListener("click", addItem);
btnClear.addEventListener("click", ()=>{
  clearItems()
});

refreshList();
console.log(items);
