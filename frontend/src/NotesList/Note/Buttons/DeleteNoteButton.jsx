import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

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
        <button className="note-button" onClick={e => deleteNote(e, props)}>
            <FontAwesomeIcon icon={faTrash} />
        </button>
    );
}