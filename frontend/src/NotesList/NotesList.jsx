import axios from "axios";
import { useState, useEffect } from "react";
import { Note } from "../Note/Note";
import styles from "./NotesList.module.css";

export function NotesList(props) {
    const [archivedState, setArchivedState] = useState(false);
    const archivedStateText = (archivedState === true) ? "Active" : "Archived";

    const [notes, setNotes] = useState([]);
    useEffect(() => updateNotes());

    const updateNotes = () => {
        axios.get(props.notesUrl).then(response => setNotes(response.data));
    };

    if (notes == null) {
        return <NoNotesMessage />;
    }

    return (
        <div>
            <button onClick={() => setArchivedState(!archivedState)}>
                Show {archivedStateText} Notes
            </button>
            <h2 className="note-list-type">
                {(archivedState === true) ? "Archived" : 'Active'} Notes
            </h2>
            <MyNotes 
            notes={notes} 
            is_archived={archivedState} 
            updateNotes={updateNotes}
            notesUrl={props.notesUrl}
            />
        </div>
    );
}

function MyNotes({notes, is_archived, updateNotes, notesUrl}) {
    const showedNotes = notes.filter(note => note.is_archived === is_archived);
    const renderNote = note => {
        return note.is_archived === is_archived &&
                <Note key={note._id} note={note} url={notesUrl} onUpdate={updateNotes} />;
    };

    return (
        <div id="notes-list">
            <div className={styles.NotesList}>
                { notes.map(note => renderNote(note)) }
            </div>
            {(showedNotes.length === 0) && <NoNotesMessage />}
        </div>
    );
}

function NoNotesMessage() {
    return <h2 className={styles.NoNotesMessage}>(No notes to show)</h2>;
}