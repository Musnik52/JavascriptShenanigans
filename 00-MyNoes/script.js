const notesContainer = document.querySelector(".notes-container");
const btnCreate = document.querySelector(".btn");

const shownotes = () => {
  notesContainer.innerHTML = localStorage.getItem("notes");
};
shownotes();

const storeNotes = () => {
  localStorage.setItem("notes", notesContainer.innerHTML);
};

const addNote = () => {
  const markup = `
    <p contenteditable="true" class="input-box">
      <img src="images/delete.png" />
    </p>
  `;
  notesContainer.insertAdjacentHTML("afterbegin", markup);
};

const removeNote = (clickedEl) => {
  clickedEl.parentElement.remove();
  storeNotes();
};

const saveNote = () => {
  const notes = document.querySelectorAll(".input-box");
  notes.forEach((note) => {
    note.onkeyup = () => storeNotes();
  });
};

btnCreate.addEventListener("click", addNote);

notesContainer.addEventListener("click", (e) => {
  const clickedEl = e.target;
  if (clickedEl.tagName === "IMG") {
    removeNote(clickedEl);
  } else if (clickedEl.tagName === "P") {
    saveNote();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    document.execCommand("insertLineBreak");
  }
});
