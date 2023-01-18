export function Year(props) {
    const yearValue = new Date().toISOString().slice(0, 10).split("-")[0];
    return <div className="year">{yearValue}</div>;
}