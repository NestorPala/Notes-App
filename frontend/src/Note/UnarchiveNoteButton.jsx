import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function unarchiveNote(event, props) {
    event.preventDefault();
    const url = props.url + "/unarchive/" + props.note._id;
    axios.patch(url).then(json => props.onUnarchiveNote(json));
};

export function UnarchiveNoteButton(props) {
    const title = "Unarchive";
    return (
        <button 
        className="note-button" 
        onClick={e => unarchiveNote(e, props)} 
        onMouseEnter={e => props.onHover(title)} 
        onMouseLeave={e => props.onHover("")}>
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    );
}