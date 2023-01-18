import { useState } from 'react';
import './App.css';
import { NotesList } from "./NotesList/NotesList";
import { AddNoteForm } from "./AddNoteForm";
import { Year } from "./Year";

const API_URL = (process.env.NODE_ENV === 'production')
                ? window.location.origin
                : process.env.REACT_APP_API_URL_DEV;
const notesUrl = API_URL + "/notes";

function App() {
    return (
        <div className='main-content'>
            <h1>My Notes</h1>
            <Tabs>
                <Tab title="Notes">
                    <br /><br />
                    <NotesList notesUrl={notesUrl} />
                </Tab>
                <Tab title="Create a note">
                    <AddNoteForm url={notesUrl} />
                </Tab>
            </Tabs>
            <footer>
                Nestor Fabian Palavecino Arnold
                <Year />
            </footer>
        </div>
    );
}

function Tabs(props) {
    const tabs = props.children;
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="content-tabs">
            {tabs.map(tab => {
                return (
                    <button key={tabs.indexOf(tab)} onClick={() => setActiveTab(tab)}>
                        {tab.props.title}
                    </button>
                );
            })}
            { activeTab.props.children }
        </div>
    );
}

function Tab(props) {
    return (
        <div className="content-tab">
            <h2>{props.title}</h2>
            {props.children}
        </div>
    );
}

export default App;
