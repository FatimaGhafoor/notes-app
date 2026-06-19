function renderNote(note) {
  const div = document.createElement("div");
  div.classList.add("note-card");

  const h3 = document.createElement("h3");
  h3.textContent = note.title;

  const p = document.createElement("p");
  p.textContent = note.body;

  div.appendChild(h3);
  div.appendChild(p);

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

export { renderNote, renderAllNotes };
