import React, { useState } from 'react';
import '../styles/journal.css';

function Journal({ journalEntries, setJournalEntries }) {
  const [showModal, setShowModal] = useState(false); //the modal for both showing and creating (didnt creatr diff for each for simplicity)
  const [currentEntry, setCurrentEntry] = useState(null); //entry that is being either edited or created

  const handleSaveEntry = () => { //to save entry
    if (currentEntry) {  //if current entry
      if (currentEntry.id) { //and if it has id
        setJournalEntries(journalEntries.map(entry =>  //then edit existing entry
          entry.id === currentEntry.id ? currentEntry : entry // if ids match, replace with current entry, else keep same
        ));
      } else { //but if no id already then create new entry
        const newEntry = { //new entry items created
          id: Date.now(), //again using timestamp as id since no backend
          title: currentEntry.title || 'Untitled', 
          content: currentEntry.content || 'No note added', 
          date: new Date().toLocaleDateString() 
        };      
        setJournalEntries([...journalEntries, newEntry]); //this entry added to our array
      }
      setShowModal(false); //when clicked on save, modal closes
      setCurrentEntry(null); //reset current entry
    }
  };

  return (
    <div className="journal-page">
      <div className="journal-header">
        <h1><span className='fake-heading'>Saved</span> <span className="real-heading">Journal entries</span></h1>
        <button className="add-btn" onClick={() => {
          setCurrentEntry(null); 
          setShowModal(true);
        }}>+ New Entry</button>
      </div>

      <div className="journal-grid">
        {journalEntries.map((entry) => (
          <div key={entry.id} className="journal-card" onClick={() => { //click on the entry to open modal
            setCurrentEntry(entry); //current enrty = what was clicked
            setShowModal(true); // modal true
          }}>
            <h3>{entry.title || 'Untitled'}</h3>
            <p>{(entry.content || '').substring(0, 100)}...</p> 
            <small>{entry.date}</small>
          </div>
        ))}
      </div>

      {/* create modal = edit modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <input 
              type="text" 
              placeholder="Title" 
              value={currentEntry?.title || ''} 
              onChange={(e) => setCurrentEntry({...currentEntry, title: e.target.value})} //title updates
            />
            <textarea 
              placeholder="what are you thinking about?"
              value={currentEntry?.content || ''} //content updates
              onChange={(e) => setCurrentEntry({...currentEntry, content: e.target.value})}
            />
            <button onClick={handleSaveEntry}>Save</button>
            <button onClick={() => setShowModal(false)}>Nevermind</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Journal;