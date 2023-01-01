import React from "react";
import './App.css';
import { NewNoteForm } from './NewNoteForm';
import { useNotesStore } from './NotesContext';
import { useObserver } from "mobx-react";

function App() {
  const notesStore = useNotesStore();
  return useObserver (() => (
    <>
      <ul>
        {/* Iterate over notes */}
        {notesStore.notes.map(note => (
          <li key={note.id}>{note.text}</li>
        ))}
      </ul>
      <NewNoteForm/>
    </>
  ));
}
export default App;
