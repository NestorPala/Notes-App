import { StyledButton } from "./Buttons";

function deleteNote(event, props) {
    event.preventDefault();
    const url = props.url + "/delete/" + props.note.id;
    const options = {
        method: "DELETE",
    };
    fetch(url, options)
        .then(res => res.json())
        .then(json => props.onDeleteNote(json));
};

export function DeleteNoteButton(props) {
    return (
        <StyledButton onClick={e => deleteNote(e, props)}>
            Delete
        </StyledButton>
    );
}