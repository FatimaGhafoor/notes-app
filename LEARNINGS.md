# Learnings — Notes App (16 June – 23 June 2026)

## Project Overview

Built a vanilla JavaScript Notes App from scratch with modular architecture.
No frameworks, no libraries — pure JS, DOM, and localStorage.

---

## Week 1 — JavaScript Mastery + DOM (16–18 June 2026)

### Concepts Covered

- Closures — private state using function scope (createCounter, createBankAccount)
- `this` keyword — behavior across global, function, method, and arrow function contexts
- ES Modules — import/export pattern across multiple files
- DOM manipulation — createElement, classList, textContent (avoided innerHTML for security)
- Event handling — addEventListener, reading input values
- Error handling — try/catch for defensive coding

### Architecture Built

Modular file structure — each file has one job:

- `storage.js` — getNotes, saveNotes, clearNotes (localStorage with error handling)
- `dom.js` — renderNote, renderAllNotes (pure DOM rendering, no business logic)
- `events.js` — initEvents (click listener, builds note object, wires storage + dom)
- `api.js` — placeholder for Week 5 when real backend connects
- `app.js` — entry point, loads existing notes on page start

### Core Flow Built

Add note → save to localStorage → render to screen → persists across refresh

### Bugs Hit and Fixed

1. **Mismatched function name** — called `user.greet()` but had defined `isGreet()`.
   Lesson: JS won't guess intent; names must match exactly.

2. **Wrong data passed between functions** — called `renderAllNotes(saveNotes)` instead of
   `renderAllNotes(notes)`.
   Lesson: always check what a function actually returns before passing its result elsewhere.

3. **Corrupted localStorage crashed the app** — `JSON.parse("undefined")` threw a
   SyntaxError on page load, which silently broke the click listener too, since `app.js`
   crashed before reaching `initEvents()`. Fixed using try/catch in `getNotes()`,
   returning `[]` on failure instead of letting the error propagate.
   Lesson: one unhandled error early in a file can break unrelated code further down.

### Hardest Part

Realizing the "button stopped working" bug wasn't in `events.js` at all — it was a crash
on page load in `app.js` that prevented `initEvents()` from ever running.
Taught me to always check the console for errors before assuming the bug is where
the symptom shows up.

---

## Week 1 Continued — Edit & Delete (19–23 June 2026)

### Concepts Used

- `filter()` — remove an item from array by id (Delete feature)
- `find()` — get a single matching object from array (Edit prefill)
- `map()` — update a specific item inside array without mutating original (Edit save)
- Spread operator `{...note}` — copy object with only specific fields updated
- `dataset` — store custom data directly on HTML elements (data-id attribute)
- Event delegation — one listener on parent handles clicks from all dynamic children

### What I Built

- Delete note — filters out deleted note by id, saves updated array, re-renders
- Edit note — prefills form with existing data, updates note on save using map()
- Edit mode awareness — button text changes to "Save Changes", resets after save
- Full CRUD working: Create, Read, Update, Delete — all persisted in localStorage

### Bugs Hit and Fixed

1. **`editId === id` — `id` didn't exist in scope** — Fixed using `Number(editId) === note.id`

2. **Passed object to `saveNotes()` instead of array** — Fixed using `map()` to build
   and return a full updated array

3. **`deleteId` variable created but never used** — Replaced with `delete addBtn.dataset.editId`
   to properly reset edit mode after save

4. **Re-setting form values inside save block** — Removed because user's edited values
   were already in the inputs; setting them again from old data would overwrite changes

### Key Lesson

Debug the flow, not the symptom. The bug is rarely where things break visibly —
trace back to where the data came from.

### Personal Note

Wrote code half asleep on the last night — 4 bugs appeared.
Fresh mind next morning fixed everything in 15 minutes.
Lesson: rest is not lost time. It is part of the process.

---

## Notes App v1 — Final Status (23 June 2026)

- ✅ Modular JS architecture — 5 files, each with one responsibility
- ✅ Full CRUD — Create, Read, Update, Delete
- ✅ localStorage persistence — data survives page refresh
- ✅ Defensive error handling — app never crashes on bad data
- ✅ Event delegation — clean, scalable event handling
- ✅ Conventional commits — clean GitHub history
- ✅ No frameworks — pure vanilla JS throughout

## Next

Week 2 — Git branching, feature PRs, basic DSA (Arrays, Hash Maps)
