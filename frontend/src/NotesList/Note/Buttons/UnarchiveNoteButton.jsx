import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

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
        <button className="note-button" onClick={e => unarchiveNote(e, props)}>
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    );
}