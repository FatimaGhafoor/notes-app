# Notes App

A vanilla JavaScript Notes App built from scratch with modular architecture.
No frameworks, no libraries — pure JS, DOM, and localStorage.

🔗 **Live Demo:** [notes-app](https://fatimaghafoor.github.io/notes-app/)

---

## Features

- Add notes
- Edit notes
- Delete notes
- Delete confirmation via inline delete button
- Search notes by title or body
- Live notes counter (total notes)
- Input validation — empty title/body blocked
- Character limits enforced (title: 50, body: 300 chars)
- Data persists across page refresh (localStorage)

## Tech Stack

- HTML
- CSS
- JavaScript (vanilla)

## Project Structure

## Project Structure

- `storage.js` — getNotes, saveNotes, clearNotes (localStorage with error handling)
- `dom.js` — renderNote, renderAllNotes, renderNotesCount, showFormError, clearFormError (pure DOM rendering, no business logic)
- `events.js` — initEvents (click/input listeners, validation, builds note object, wires storage + dom)
- `app.js` — entry point, loads existing notes on page start

## How to Run

1. Clone the repository:
   `git clone https://github.com/FatimaGhafoor/notes-app.git`
2. Open `index.html` in your browser
3. Or visit the live demo directly

## What I Learned

- Modular JS architecture — 5 files, each with one responsibility
- Full CRUD — Create, Read, Update, Delete
- localStorage persistence — data survives page refresh
- Defensive error handling — app never crashes on bad data
- Event delegation — clean, scalable event handling
- Conventional commits — clean GitHub history
- No frameworks — pure vanilla JS throughout
