/* File: dom.js
Responsibility: create and render DOM elements (note cards, counter, form errors)
*/

function renderNote(note) {
  const div = document.createElement("div");
  div.classList.add("note-card");

  const h3 = document.createElement("h3");
  h3.textContent = note.title;

  const p = document.createElement("p");
  p.textContent = note.body;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.dataset.id = note.id;
  deleteBtn.classList.add("delete-btn");

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.dataset.id = note.id;
  editBtn.classList.add("edit-btn");

  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(deleteBtn);
  div.appendChild(editBtn);

  return div;
}

function renderAllNotes(notes) {
  const container = document.querySelector("#notes-container");
  container.innerHTML = "";

  for (let note of notes) {
    if (note) {
      let render = renderNote(note);
      container.appendChild(render);
    }
  }
}

// Shows total note count. Pass the FULL notes array length,
// not a filtered/search result length.
function renderNotesCount(count) {
  const counterEl = document.querySelector("#notes-count");
  if (counterEl) {
    counterEl.textContent = `Total notes: ${count}`;
  }
}

function showFormError(message) {
  const errorEl = document.querySelector("#form-error");
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.style.display = "block";
  }
}

function clearFormError() {
  const errorEl = document.querySelector("#form-error");
  if (errorEl) {
    errorEl.textContent = "";
    errorEl.style.display = "none";
  }
}

export {
  renderNote,
  renderAllNotes,
  renderNotesCount,
  showFormError,
  clearFormError,
};
