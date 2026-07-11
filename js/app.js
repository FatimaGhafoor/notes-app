/* File: app.js
Responsibility: entry point — load notes, render initial UI, wire up events
*/

import { initEvents } from "./events.js";
import { getNotes } from "./storage.js";
import { renderAllNotes, renderNotesCount } from "./dom.js";

const notes = getNotes();
renderAllNotes(notes);
renderNotesCount(notes.length);
initEvents();
