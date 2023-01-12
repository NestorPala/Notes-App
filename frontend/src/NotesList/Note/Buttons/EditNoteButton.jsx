import { StyledButton } from "./Buttons";

function editNote(event, props) {
    event.preventDefault();
    const newTitle = prompt("New title: ");
    
    if (newTitle === "" || newTitle == null) {
        alert("Title cannot be empty");
        return;
    }

    const newContent = prompt("New content: ");

    if (newContent === "" || newContent == null) {
        if (window.confirm("Sure you want to erase content?") === false) {
            return;
        }
    }

    const url = props.url + "/edit/" + props.note.id;
    const options = {
        method: "PATCH",
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: newTitle,
            content: newContent
        })
    };
    fetch(url, options)
        .then(res => res.json())
        .then(json => props.onEditNote(json));
};

export function EditNoteButton(props) {
    return (
        <StyledButton onClick={e => editNote(e, props)}>
            Edit
        </StyledButton>
    );
}