import styles from "./Note.module.css";
import { EditNoteButton } from "./Buttons/EditNoteButton";
import { DeleteNoteButton } from "./Buttons/DeleteNoteButton";
import { ArchiveNoteButton } from "./Buttons/ArchiveNoteButton";
import { UnarchiveNoteButton } from "./Buttons/UnarchiveNoteButton";

export function Note(props) {
  return (
    <div className={styles.Note}>
      <h2>{props.note.title}</h2>
      <p>{props.note.content}</p>
      <div>
        {(props.note.content === "") ? <p style={{fontStyle: "italic"}}>(Empty content)</p> : null}
        <EditNoteButton note={props.note} url={props.url} onEditNote={props.onUpdate} />
        <DeleteNoteButton note={props.note} url={props.url} onDeleteNote={props.onUpdate} />
        {
          (props.note.is_archived === true) 
          ? <UnarchiveNoteButton note={props.note} url={props.url} onUnarchiveNote={props.onUpdate} /> 
          : <ArchiveNoteButton note={props.note} url={props.url} onArchiveNote={props.onUpdate} />
        }
      </div>
    </div>
  );
}