import { getNotes, saveNotes } from "./storage.js";
import { renderAllNotes } from "./dom.js";

function initEvents() {
  const addBtn = document.querySelector("#add-note-btn");

  addBtn.addEventListener("click", () => {
    const titleInput = document.querySelector("#note-title");
    const bodyInput = document.querySelector("#note-body");

    const newNote = {
      id: Date.now(),
      title: titleInput.value,
      body: bodyInput.value,
    };

    const notes = getNotes();
    notes.push(newNote);

    saveNotes(notes);
    renderAllNotes(notes);

    titleInput.value = "";
    bodyInput.value = "";
  });

  const container = document.querySelector("#notes-container");

  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const id = Number(e.target.dataset.id);
      const notes = getNotes();
      const updatedNotes = notes.filter((note) => note.id !== id);
      saveNotes(updatedNotes);
      renderAllNotes(updatedNotes);
    }
  });
}

export { initEvents };
