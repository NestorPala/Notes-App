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
        const options = {
            method: "POST",
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: newNoteTitle,
                content: newNoteContent
            })
        };
        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                event.target.title.value = "";
                event.target.content.value = "";
                props.addNote(json);
            });
    };
    return (
        <form onSubmit={handleSubmit}>
            <input name="title" type="text" placeholder="Note title"/>
            <br />
            <textarea 
            style={{
                width: 200, 
                height: 100, 
                overflowY: "scroll",
                resize: "none"
            }}
            name="content" 
            type="text" 
            placeholder="Note content"/>
            <br />
            <button type="submit">Add note!</button>
        </form>
    );
}