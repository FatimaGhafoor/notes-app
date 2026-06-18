// 1. reads from localStorage, returns array
function getNotes() {
  const notes = localStorage.getItem("notes");
  return notes ? JSON.parse(notes) : [];
}

// 2. saves array to localStorage
function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// 3. removes notes from localStorage
function clearNotes() {
  localStorage.removeItem("notes");
}

export { getNotes, saveNotes, clearNotes };
