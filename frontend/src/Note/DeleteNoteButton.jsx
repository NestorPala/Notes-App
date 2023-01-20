import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function deleteNote(event, props) {
    event.preventDefault();
    if (window.confirm("Sure you want to delete this note?") === false) {
        return;
    }
    const url = props.url + "/delete/" + props.note._id;
    axios.delete(url).then(json => props.onDeleteNote(json));
};

export function DeleteNoteButton(props) {
    const title = "Delete";
    return (
        <button 
        className="note-button" 
        onClick={e => deleteNote(e, props)} 
        onMouseEnter={e => props.onHover(title)} 
        onMouseLeave={e => props.onHover("")}>
            <FontAwesomeIcon icon={faTrash} />
        </button>
    );
}