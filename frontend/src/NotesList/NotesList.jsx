import { useState, useEffect } from "react";
import { Note } from "./Note/Note";
import styles from "./NotesList.module.css";
import { NoNotesMessage } from "./NoNotesMessage";
import { AddNoteForm } from "./AddNoteForm";

export function NotesList(props) {
    const API_URL = (process.env.NODE_ENV === 'production')
                    ? window.location.origin
                    : process.env.REACT_APP_API_URL_DEV;
    const notesUrl = API_URL + "/notes";

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
            <div className={styles.NotesList}>
                {
                    notes.map(note =>
                        (note.is_archived === props.is_archived)
                        ?
                        <Note 
                        key={note._id} 
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
            {
                (props.is_archived === false)
                ? <AddNoteForm url={notesUrl} addNote={updateNotes} />
                : null
            }
        </div>
    );
}