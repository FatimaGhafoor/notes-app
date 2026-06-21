# Learnings — Day 1-2 (12-18 June 2026)

## Concepts Covered

- Closures — private state using function scope (createCounter, createBankAccount)
- `this` keyword — behavior across global, function, method, and arrow function contexts
- ES Modules — import/export pattern across multiple files
- DOM manipulation — createElement, classList, textContent (avoided innerHTML for security)
- Event handling — addEventListener, reading input values
- Error handling — try/catch for defensive coding

## What I Built

Notes App (vanilla JS) — modular architecture across 4 files:

- `storage.js` — getNotes, saveNotes, clearNotes (localStorage with error handling)
- `dom.js` — renderNote, renderAllNotes (pure DOM rendering, no business logic)
- `events.js` — initEvents (click listener, builds note object, wires storage + dom together)
- `app.js` — entry point, loads existing notes on page start

Core flow working: Add note → save to localStorage → render to screen → persists across refresh.

## Bugs I Hit and Fixed

1. **Mismatched function name** — called `user.greet()` but had defined `isGreet()`.
   Lesson: JS won't guess intent; names must match exactly.

2. **Wrong data passed between functions** — called `renderAllNotes(saveNotes)` instead of
   `renderAllNotes(notes)`. Lesson: always check what a function actually returns before
   passing its result elsewhere.

3. **Corrupted localStorage crashed the app** — `JSON.parse("undefined")` threw a SyntaxError
   on page load, which silently broke the click listener too (since `app.js` crashed before
   reaching `initEvents()`). Fixed using try/catch in `getNotes()`, returning `[]` on failure
   instead of letting the error propagate.
   Lesson: one unhandled error early in a file can break unrelated code further down.

## Hardest Part

Realizing that the "button stopped working" bug wasn't actually in `events.js` at all —
it was a crash on page load in `app.js` that prevented `initEvents()` from ever running.
Taught me to always check the console for errors _before_ assuming the bug is where the
symptom shows up.

## Next (Day 3)

- Edit Note functionality — find note by id, update title/body
- Delete Note functionality — find note by id, remove from array
- Both must update localStorage and re-render
