import { useState } from 'react';
import './App.css';
import { NotesList } from "./NotesList/NotesList";
import { AddNoteForm } from "./AddNoteForm";

const API_URL = (process.env.NODE_ENV === 'production')
                    ? window.location.origin
                    : process.env.REACT_APP_API_URL_DEV;
const notesUrl = API_URL + "/notes";

function App() {
  const [archivedState, setArchivedState] = useState(false);
  const archivedStateText = (archivedState === true) ? "Active" : "Archived";

  return (
    <div>
      <h1>My Notes</h1>
      <Tab title="Notes">
        <button onClick={() => setArchivedState(!archivedState)}>
          Show {archivedStateText} Notes
        </button>
        <NotesList is_archived={archivedState} notesUrl={notesUrl}/>
      </Tab>
      <Tab title="Create a note">
        <AddNoteForm url={notesUrl} />
      </Tab>
    </div>
  );
}

function Tab(props) {
  return (
    <div id="content-tab">
        <h2>{ props.title }</h2>
        { props.children }
    </div>
  );
}

export default App;
