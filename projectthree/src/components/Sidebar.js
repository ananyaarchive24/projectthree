import React, {useState, useEffect} from 'react';
import '../styles/sidebar.css';


function Sidebar({ setCurrentPage, currentPage }) {

  const [username, setUsername] = useState("Edit"); 
  const [isEditing, setIsEditing] = useState(false);

  //building the settings modal here
  const [showSettings, setShowSettings] = useState(false);

  //was originally gonna be a big window, but z index was causing problems so made it a dropdown instead
const SettingsModal = () => (
  <div className="settings-dropdown">
    <div className="dropdown-content">
      <h3>Contact & Info</h3>
      
      <div className="contact-item">
        <strong>Email:</strong> ananya.archive.24@gmail.com
      </div>
      <div className="contact-item">
        <strong>GitHub:</strong> 
        <a href="https://github.com/ananyaarchive24" target="_blank" rel="noopener noreferrer">
          github.com/ananyaarchive24
        </a>
      </div>
      <div className="contact-item">
        <strong>Slack:</strong> 
        <a href="https://hackclub.slack.com/team/U09JC4QN747" target="_blank" rel="noopener noreferrer">
text me!
        </a>
      </div>
      
      <div className="dropdown-divider"></div>
      
      <div className="project-info">
        <p><strong>built for athena 2025 🫶 </strong></p>
        <p>Instagram-style personal dashboard</p>
      </div>
    </div>
  </div>
);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (showSettings && !event.target.closest('.settings-dropdown') && !event.target.closest('.settings')) {
      setShowSettings(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, [showSettings]);


  return (
    <div className="sidebar">


      {/* profile section - img and username */}
      <div className="profile-section">
        <img 
          src="/images/pfp.jpg" 
          alt="Profile" 
          className="profile-pic"
        />


      {isEditing ? (
        <input
          type="text"
          value={username} // current username
          onChange={(e) => setUsername(e.target.value)} // update username while the user is typing
          onBlur={() => setIsEditing(false)} //stop editing when user clicks somewhere else apart from input
          onKeyPress={(e) => e.key === 'Enter' && setIsEditing(false)} //and also stop editing when user presses enter
          className="username-input" //to style
          autoFocus //start editing when clicked on usernae
        />
      ) : (
        <h3 
          className="username" 
          onClick={() => setIsEditing(true)} //click on username to start editing
          style={{cursor: 'pointer'}} // show its clickable, so the cursor
        >
          {username} ✏️
        </h3>
      )}
      </div>

      {/* the sidebar - all the pages */}
      <div className="menu-items">
        <div 
          className={`menu-item ${currentPage === 'home' ? 'active' : ''}`} onClick={() => setCurrentPage('home')} >🏠 Home</div>
        <div className={`menu-item ${currentPage === 'explore' ? 'active' : ''}`} onClick={() => setCurrentPage('explore')} >🔍 Explore</div>
        <div className={`menu-item ${currentPage === 'messages' ? 'active' : ''}`} onClick={() => setCurrentPage('messages')} >💬 Direct Messages</div>
        <div className={`menu-item ${currentPage === 'journal' ? 'active' : ''}`} onClick={() => setCurrentPage('journal')} >📔 Saved</div>
        <div className={`menu-item ${currentPage === 'quicklinks' ? 'active' : ''}`} onClick={() => setCurrentPage('quicklinks')} >🎬 Reels</div>
      </div>

      {/* settings - not a page yet, just for the ui */}
<div className="settings" onClick={() => setShowSettings(true)}>
  ⚙️ Settings
</div>
      {showSettings && <SettingsModal />}

    </div>
  );
}

export default Sidebar;
