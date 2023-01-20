import axios from "axios";

export function AddNoteForm(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const newNoteTitle = event.target.title.value;
        const newNoteContent = event.target.content.value;

        if (newNoteTitle === "" || newNoteTitle == null) {
            alert("Title cannot be empty");
            return;
        }

        if (newNoteContent === "" || newNoteContent == null) {
            if (window.confirm("Sure you want to have empty content?") === false) {
                return;
            }
        }

        const url = props.url + "/create";
        const data = {
            title: newNoteTitle,
            content: newNoteContent
        };
        const config = {
            headers : {
                'Content-Type': 'application/json'
            },
        }
        axios.post(url, data, config)
            .then(json => {
                event.target.title.value = "";
                event.target.content.value = "";
                console.log(json);
            });
    };
    return (
        <div className="add-note-section">
            <h3>Create a new note:</h3>
            <p className="add-note-warning">
                (Warning: notes will be deleted from server after 3 minutes)
            </p>
            <form onSubmit={handleSubmit}>
                <input style={{width: "30vw"}} name="title" type="text" placeholder="Note title"/>
                <br />
                <textarea 
                style={{
                    width: "30vw", 
                    height: "15vw", 
                    overflowY: "scroll",
                    resize: "none"
                }}
                name="content" 
                type="text" 
                placeholder="Note content"/>
                <br />
                <button type="submit">Add note!</button>
            </form>
        </div>
    );
}