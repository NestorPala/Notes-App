import { useState, useEffect } from "react";
import { Note } from "./Note/Note";
import styles from "./NotesList.module.css";
import { NoNotesMessage } from "./NoNotesMessage";
import { AddNoteForm } from "./AddNoteForm";

export function NotesList() {
    let notesUrl = "http://localhost:3000/notes";

    const [notes, setNotes] = useState(null);
    useEffect(() => handleAddNote, []);

    const handleAddNote = () => {
        fetch(notesUrl)
            .then(response => response.json())
            .then(setNotes);
    };

    if (notes == null) {
        return <NoNotesMessage />
    }

    return (
        <div>
            <div className={styles.NotesList}>
                {notes.map(note =>
                    <Note key={note.id} title={note.title} content={note.content} />
                )}
            </div>
            {(notes.length === 0) ? <NoNotesMessage /> : null}
            <AddNoteForm url={notesUrl} addNote={handleAddNote} />
        </div>
    );
}