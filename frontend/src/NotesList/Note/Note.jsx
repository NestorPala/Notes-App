import styles from "./Note.module.css";
import { EditNoteButton } from "./Buttons/EditNoteButton";
import { RemoveNoteButton } from "./Buttons/RemoveNoteButton";
import { ArchiveNoteButton } from "./Buttons/ArchiveNoteButton";
import { UnarchiveNoteButton } from "./Buttons/UnarchiveNoteButton";

export function Note(props) {
  return (
    <div className={styles.Note}>
      <h2>{props.note.title}</h2>
      <p>{props.note.content}</p>
      <div>
        <EditNoteButton note={props.note} url={props.url} onEdit={props.onUpdate} />
        <RemoveNoteButton note={props.note} url={props.url} onRemove={props.onUpdate} />
        {
          (props.note.is_archived === true) 
          ? <UnarchiveNoteButton note={props.note} url={props.url} onOnarchiveNote={props.onUpdate} /> 
          : <ArchiveNoteButton note={props.note} url={props.url} onArchiveNote={props.onUpdate} />
        }
      </div>
    </div>
  );
}