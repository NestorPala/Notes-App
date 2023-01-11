export function AddNoteForm(props) {
    return (
        <form method="POST" action={props.url + "/create"}>
            <input name="title" type="text" placeholder="Note title"/>
            <input name="content" type="text" placeholder="Note content"/>
            <button type="submit">Add note!</button>
        </form>
    );
}