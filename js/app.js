import { initEvents } from "./events.js";
import { getNotes } from "./storage.js";
import { renderAllNotes } from "./dom.js";

const notes = getNotes();
renderAllNotes(notes);
initEvents();
