import { getNotes, saveNotes } from "./storage.js";
import { renderAllNotes } from "./dom.js";

function initEvents() {
  const addBtn = document.querySelector("#add-note-btn");

  addBtn.addEventListener("click", () => {
    const titleInput = document.querySelector("#note-title");
    const bodyInput = document.querySelector("#note-body");
    const editId = addBtn.dataset.editId;

    if (editId) {
      const notes = getNotes();
      const noteToEdit = notes.find((note) => Number(editId) === note.id);

      const updatedNotes = notes.map((note) => {
        if (note.id === Number(editId)) {
          return { ...note, title: titleInput.value, body: bodyInput.value };
        }
        return note;
      });
      saveNotes(updatedNotes);
      renderAllNotes(updatedNotes);
      addBtn.textContent = "Add Note";

      delete addBtn.dataset.editId;

      titleInput.value = "";
      bodyInput.value = "";
    } else {
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
    }
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

    if (e.target.classList.contains("edit-btn")) {
      const id = Number(e.target.dataset.id);
      const notes = getNotes();
      const noteToEdit = notes.find((note) => note.id === id);
      const titleInput = document.querySelector("#note-title");
      const bodyInput = document.querySelector("#note-body");

      titleInput.value = noteToEdit.title;
      bodyInput.value = noteToEdit.body;

      const addBtn = document.querySelector("#add-note-btn");
      addBtn.textContent = "Save Changes";
      addBtn.dataset.editId = id;
    }
  });
}

export { initEvents };
