import { useState } from 'react';
import './App.css';
import { NotesList } from "./NotesList/NotesList"

function App() {
  const [archivedState, setArchivedState] = useState(false);

  return (
    <div>
      <h1>My Notes</h1>
      <button onClick={() => setArchivedState(!archivedState)}>
        { (archivedState === true) ? "Active" : "Archived"} Notes
      </button>
      <NotesList is_archived={archivedState}/>
    </div>
  );
}

export default App;
