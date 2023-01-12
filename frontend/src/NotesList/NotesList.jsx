import { useState, useEffect } from "react";
import { Note } from "./Note/Note";
import styles from "./NotesList.module.css";
import { NoNotesMessage } from "./NoNotesMessage";
import { AddNoteForm } from "./AddNoteForm";

export function NotesList(props) {
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
            <h2>{(props.is_archived === true) ? "Archived" : 'Active'} Notes</h2>
            <div className={styles.NotesList}>
                {
                    notes.map(note =>
                        (note.is_archived === props.is_archived)
                        ?
                        <Note 
                        key={note.id} 
                        note={note} 
                        url={notesUrl} 
                        onUpdate={updateNotes} 
                        />
                        : null
                    )
                }
            </div>
            {
                (notes.filter(note => note.is_archived === props.is_archived).length === 0) 
                ? <NoNotesMessage /> 
                : null
            }
            <AddNoteForm url={notesUrl} addNote={updateNotes} />
        </div>
    );
}