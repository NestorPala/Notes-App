import { useState, useEffect } from "react";
import { Note } from "../Note/Note";
import styles from "./NotesList.module.css";
import { AddNoteForm } from "./AddNoteForm";

const API_URL = (process.env.NODE_ENV === 'production')
                    ? window.location.origin
                    : process.env.REACT_APP_API_URL_DEV;
const notesUrl = API_URL + "/notes";

export function NotesList(props) {
    const [notes, setNotes] = useState([]);
    useEffect(() => updateNotes());

    const updateNotes = (updateResponse = null) => {
        fetch(notesUrl)
            .then(response => response.json())
            .then(json => {
                setNotes(json);
                if (updateResponse != null) console.log(updateResponse);
            });
    };

    if (notes == null) {
        return <NoNotesMessage />
    }

    return (
        <div>
            <h2 className="note-list-type">
                {(props.is_archived === true) ? "Archived" : 'Active'} Notes
            </h2>

            <MyNotes 
            notes={notes} 
            is_archived={props.is_archived} 
            updateNotes={updateNotes} 
            />

            {(props.is_archived === false) 
                && <AddNoteForm url={notesUrl} addNote={updateNotes} />
            }
        </div>
    );
}

function MyNotes({notes, is_archived, updateNotes}) {
    const showedNotes = notes.filter(note => note.is_archived === is_archived);
    const renderNote = note => {
        return (note.is_archived === is_archived) &&
            <Note key={note._id} note={note} url={notesUrl} onUpdate={updateNotes} />;
    };

    return (
        <div id="notes-list">
            <div className={styles.NotesList}>
                { notes.map(note => renderNote(note)) }
            </div>
            {(showedNotes.length === 0) && <NoNotesMessage />}
        </div>
    )
}

function NoNotesMessage() {
    return <h2 className={styles.NoNotesMessage}>(No notes to show)</h2>
}