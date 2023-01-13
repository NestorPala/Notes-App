import { StyledButton } from "./Buttons";

function unarchiveNote(event, props) {
    event.preventDefault();
    const url = props.url + "/unarchive/" + props.note._id;
    const options = {
        method: "PATCH",
    };
    fetch(url, options)
        .then(res => res.json())
        .then(json => props.onUnarchiveNote(json));
};

export function UnarchiveNoteButton(props) {
    return (
        <StyledButton onClick={e => unarchiveNote(e, props)}>
            Unarchive
        </StyledButton>
    );
}