/* File: events.js
Responsibility: wire up all user interactions (add/edit/delete/search) and validation
*/

import { getNotes, saveNotes } from "./storage.js";
import {
  renderAllNotes,
  renderNotesCount,
  showFormError,
  clearFormError,
} from "./dom.js";

const MAX_TITLE_LENGTH = 50;
const MAX_BODY_LENGTH = 300;

function initEvents() {
  const addBtn = document.querySelector("#add-note-btn");

  addBtn.addEventListener("click", () => {
    const titleInput = document.querySelector("#note-title");
    const bodyInput = document.querySelector("#note-body");
    const editId = addBtn.dataset.editId;

    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();

    // 1. Block empty title/body
    if (!title || !body) {
      showFormError("Title and note cannot both be empty.");
      return;
    }

    // 2. Enforce character limits
    if (title.length > MAX_TITLE_LENGTH) {
      showFormError(`Title cannot exceed ${MAX_TITLE_LENGTH} characters.`);
      return;
    }
    if (body.length > MAX_BODY_LENGTH) {
      showFormError(`Note cannot exceed ${MAX_BODY_LENGTH} characters.`);
      return;
    }

    clearFormError();

    if (editId) {
      const notes = getNotes();
      const updatedNotes = notes.map((note) => {
        if (note.id === Number(editId)) {
          return { ...note, title, body };
        }
        return note;
      });

      saveNotes(updatedNotes);
      renderAllNotes(updatedNotes);
      renderNotesCount(updatedNotes.length);

      addBtn.textContent = "Add Note";
      delete addBtn.dataset.editId;
    } else {
      const newNote = {
        id: Date.now(),
        title,
        body,
      };

      const notes = getNotes();
      notes.push(newNote);

      saveNotes(notes);
      renderAllNotes(notes);
      renderNotesCount(notes.length);
    }

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
      renderNotesCount(updatedNotes.length);
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

      clearFormError();
    }
  });

  const searchInput = document.querySelector("#search-input");

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const notes = getNotes();

    const filteredNotes = notes.filter((note) => {
      return (
        note.title.toLowerCase().includes(searchTerm) ||
        note.body.toLowerCase().includes(searchTerm)
      );
    });

    renderAllNotes(filteredNotes);
    // Counter always reflects TOTAL notes, not search results
    renderNotesCount(notes.length);
  });
}

export { initEvents };
