import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

function editNote(event, props) {
    event.preventDefault();
    let newTitle = prompt("New title: ");
    
    if (newTitle === "" || newTitle == null) {
        newTitle = props.note.title;
        alert("Title has not changed");
    }

    const newContent = prompt("New content: ");

    if (newContent === "" || newContent == null) {
        if (window.confirm("Sure you want to erase content?") === false) {
            return;
        }
    }

    if (window.confirm("Sure you want to make this changes?") === false) {
        return;
    }

    const url = props.url + "/edit/" + props.note._id;
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
    const title = "Edit";
    return (
        <button 
        className="note-button" 
        onClick={e => editNote(e, props)} 
        onMouseEnter={e => props.onHover(title)} 
        onMouseLeave={e => props.onHover("")}>
            <FontAwesomeIcon icon={faPencil} />
        </button>
    );
}