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
        <div className='body-content'>
            <div className="main-content">
                <h1>My Notes</h1>
                <Tabs>
                    <Tab title="Notes">
                        <NotesList notesUrl={notesUrl} />
                    </Tab>
                    <Tab title="Create a note">
                        <AddNoteForm url={notesUrl} />
                    </Tab>
                </Tabs>
            </div>
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
        <div>
            <div className="content-tabs">
                {tabs.map(tab => {
                    return (
                        <button 
                        className={ `tab ${(tab === activeTab) ? "active-tab" : ''}` } 
                        key={tabs.indexOf(tab)} 
                        onClick={() => setActiveTab(tab)}>
                            {tab.props.title}
                        </button>
                    );
                })}
            </div>
            <div className='content'>
                { activeTab.props.children }
            </div>
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
