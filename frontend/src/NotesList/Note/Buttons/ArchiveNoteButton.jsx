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
    const title = "Archive";
    return (
        <button 
        className="note-button" 
        onClick={e => archiveNote(e, props)} 
        onMouseEnter={e => props.onHover(title)} 
        onMouseLeave={e => props.onHover("")}>
            <FontAwesomeIcon icon={faArchive} />
        </button>
    );
}