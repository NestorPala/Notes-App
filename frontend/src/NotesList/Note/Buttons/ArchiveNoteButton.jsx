import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive } from '@fortawesome/free-solid-svg-icons';

function archiveNote(event, props) {
    event.preventDefault();
    const url = props.url + "/archive/" + props.note._id;
    const options = {
        method: "PATCH",
    };
    fetch(url, options)
        .then(res => res.json())
        .then(json => props.onArchiveNote(json));
};

export function ArchiveNoteButton(props) {
    return (
        <button className="note-button" onClick={e => archiveNote(e, props)}>
            <FontAwesomeIcon icon={faArchive} />
        </button>
    );
}