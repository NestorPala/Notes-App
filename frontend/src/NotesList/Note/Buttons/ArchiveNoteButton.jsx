import { StyledButton } from "./Buttons";

function archiveNote(event, props) {
    event.preventDefault();
    const url = props.url + "/archive/" + props.note.id;
    const options = {
        method: "PATCH",
    };
    fetch(url, options)
        .then(res => res.json())
        .then(json => props.onArchiveNote(json));
};

export function ArchiveNoteButton(props) {
    return (
        <StyledButton onClick={e => archiveNote(e, props)}>
            Archive
        </StyledButton>
    );
}