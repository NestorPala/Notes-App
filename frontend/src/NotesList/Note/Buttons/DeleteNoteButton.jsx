import { StyledButton } from "./Buttons";

function deleteNote(event, props) {
    event.preventDefault();
    if (window.confirm("Sure you want to delete this note?") === false) {
        return;
    }
    const url = props.url + "/delete/" + props.note._id;
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