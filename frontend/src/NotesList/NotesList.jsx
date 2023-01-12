import { useState, useEffect } from "react";
import { Note } from "./Note/Note";
import styles from "./NotesList.module.css";
import { NoNotesMessage } from "./NoNotesMessage";
import { AddNoteForm } from "./AddNoteForm";

export function NotesList() {
    let notesUrl = "http://localhost:3000/notes";

    const [notes, setNotes] = useState(null);
    useEffect(() => updateNotes, []);

    const updateNotes = (updateResponse = {}) => {
        fetch(notesUrl)
            .then(response => response.json())
            .then(json => {
                setNotes(json);
                console.log(updateResponse);
            });
    };

    if (notes == null) {
        return <NoNotesMessage />
    }

    return (
        <div>
            <div className={styles.NotesList}>
                {notes.map(note => <Note note={note} url={notesUrl} onUpdate={updateNotes} />)}
            </div>
            {(notes.length === 0) ? <NoNotesMessage /> : null}
            <AddNoteForm url={notesUrl} addNote={updateNotes} />
        </div>
    );
}