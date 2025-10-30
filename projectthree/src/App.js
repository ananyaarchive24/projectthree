import Sidebar from "./components/Sidebar";
import Stories from "./components/Story";
import Grid from "./components/Grid";
import './app.css';
import { useState } from "react";

function App() {
const [currentPage, setCurrentPage] = useState('home');

  
  return (
    <div className="app">
      <Sidebar setCurrentPage={setCurrentPage} currentPage={currentPage}/>
<div className="main-content">
  {currentPage === 'home' && (
    <>
      <Stories />
      <Grid />
    </>
  )}
  {currentPage === 'messages' && <div>Tasks Dashboard Coming Soon</div>}
  {currentPage === 'journal' && <div>Journal Entries Coming Soon</div>}
  {currentPage === 'quicklinks' && <div>Quick Links Coming Soon</div>}
  {currentPage === 'explore' && <div>Goals & Inspiration Coming Soon</div>}
</div>

    </div>
  );
}

export default App;