export function AddNoteForm(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const url = props.url + "/create";
        const options = {
            method: "POST",
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: event.target.title.value,
                content: event.target.content.value
            })
        };
        fetch(url, options)
            .then(res => res.json())
            .then(json => props.addNote(json));
    };
    return (
        <form onSubmit={handleSubmit}>
            <input name="title" type="text" placeholder="Note title"/>
            <input name="content" type="text" placeholder="Note content"/>
            <button type="submit">Add note!</button>
        </form>
    );
}