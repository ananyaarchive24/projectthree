import Sidebar from "./components/Sidebar";
import Stories from "./components/Stories";
import Grid from "./components/Grid";
import Journal from "./components/Journal";
import Reel from "./components/Reels";
import Messages from "./components/Messages";
import News from "./components/News";
import './app.css';
import { useState, useEffect} from "react";

function App() {
  const [currentPage, setCurrentPage] = useState('home'); //to track which page we're using rn

//this is also added to app.js bec two components are using common data (stories and journals)
  const [journalEntries, setJournalEntries] = useState(
  JSON.parse(localStorage.getItem('journalEntries')) || []
);

useEffect(() => {
  localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
}, [journalEntries]);

  
  return (
    <div className="app">
      <Sidebar setCurrentPage={setCurrentPage} currentPage={currentPage}/>

{/* this is the current main page - will show stories, grid and sidebar is already showing above */}
    <div className="main-content">
      {currentPage === 'home' && (
        <>
          <Stories setJournalEntries={setJournalEntries} />
          <Grid />
        </>
    )}

    {/* if the current page is __, then show these components */}
    {/* our pages are - dms as task lists, saved as journal entries, reels as motivational quotes (it was originally going to be quick links towards websites,) and explore as news using the api  */}
  {currentPage === 'messages' && <Messages />}
  {currentPage === 'journal' && (
    <Journal journalEntries={journalEntries} setJournalEntries={setJournalEntries} />)}
  {currentPage === 'quicklinks' && <Reel />}
  {currentPage === 'explore' && <News/>}
</div>

    </div>
  );
}

export default App;