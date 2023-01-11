import styles from "./Note.module.css";
import { EditNoteButton } from "./Buttons/EditNoteButton";
import { RemoveNoteButton } from "./Buttons/RemoveNoteButton";
import { ArchiveNoteButton } from "./Buttons/ArchiveNoteButton";
import { UnarchiveNoteButton } from "./Buttons/UnarchiveNoteButton";

export function Note({ title, content, isArchived }) {
  return (
    <div className={styles.Note}>
      <h2>{title}</h2>
      <p>{content}</p>
      <div>
        <EditNoteButton />
        <RemoveNoteButton />
        {(isArchived === true) ? <UnarchiveNoteButton /> : <ArchiveNoteButton />}
      </div>
    </div>
  );
}