import styles from "./Note.module.css";

export function Note({ title, content }) {
    return (
        <div className={styles.Note}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}