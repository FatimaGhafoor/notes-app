/* File: storage.js
Responsibility: read/write notes to localStorage (getNotes, saveNotes, clearNotes) with error handling
*/

// 1. reads from localStorage, returns array
function getNotes() {
  try {
    const notes = localStorage.getItem("notes");
    return notes ? JSON.parse(notes) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
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
