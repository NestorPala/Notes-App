import { EditNoteButton } from "./EditNoteButton";
import { DeleteNoteButton } from "./DeleteNoteButton";
import { ArchiveNoteButton } from "./ArchiveNoteButton";
import { UnarchiveNoteButton } from "./UnarchiveNoteButton";
import { useState } from "react";

export function Note(props) {
  const [buttonDesc, changeButtonDesc] = useState("");
  return (
    <div className="note">
      <h2 className="note-title">{props.note.title}</h2>
      <div className="note-content" style={{wordWrap: "break-word"}}>
        {props.note.content}
        {
          (props.note.content === "") 
          ? <p style={{fontStyle: "italic"}}>(Empty content)</p> 
          : null
        }
      </div>
      <div>
        <p>{ buttonDesc }&nbsp;</p> 
        {
          (props.note.is_archived === false)
          ? (
            <div>
              <EditNoteButton 
              note={props.note} 
              url={props.url} 
              onEditNote={props.onUpdate} 
              onHover={changeButtonDesc} />

              <ArchiveNoteButton 
              note={props.note} 
              url={props.url} 
              onArchiveNote={props.onUpdate} 
              onHover={changeButtonDesc} />

              <DeleteNoteButton 
              note={props.note} 
              url={props.url} 
              onDeleteNote={props.onUpdate} 
              onHover={changeButtonDesc} />
            </div>
          )
          : <UnarchiveNoteButton 
            note={props.note} 
            url={props.url} 
            onUnarchiveNote={props.onUpdate} 
            onHover={changeButtonDesc} />
        }
      </div>
    </div>
  );
}