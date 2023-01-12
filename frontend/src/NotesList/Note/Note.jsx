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
        {
          (props.note.is_archived === false)
          ? (
            <div>
              <EditNoteButton note={props.note} url={props.url} onEditNote={props.onUpdate} />
              <ArchiveNoteButton note={props.note} url={props.url} onArchiveNote={props.onUpdate} />
              <DeleteNoteButton note={props.note} url={props.url} onDeleteNote={props.onUpdate} />
            </div>
          )
          : <UnarchiveNoteButton note={props.note} url={props.url} onUnarchiveNote={props.onUpdate} />
        }
      </div>
    </div>
  );
}