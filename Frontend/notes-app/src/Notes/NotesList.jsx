import { useState, useEffect } from "react";
import { Note } from "./Note";
import styles from "./NotesList.module.css";

export function NotesList() {
    let notesUrl = "http://localhost:3000/notes";

    const [notes, setNotes] = useState(null);
    useEffect(() => {
        fetch(notesUrl)
            .then(response => response.json())
            .then(setNotes);
    }, []);

    return (
        (notes.length > 0)
            ? (
                <div className={styles.NotesList}>
                    {notes.map(note =>
                        <Note key={note.id} title={note.title} content={note.content} />
                    )}
                </div>
            )
            : (<h2 className={styles.noNotesMessage}>(No notes to show)</h2>)
    );
}