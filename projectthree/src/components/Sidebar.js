import React from 'react';
import '../styles/sidebar.css';


function Sidebar({ setCurrentPage, currentPage }) {
  return (
    <div className="sidebar">


      {/* Profile Section */}
      <div className="profile-section">
        <img 
          src="/images/pfp.jpg" 
          alt="Profile" 
          className="profile-pic"
        />
        <h3 className="username">Edit</h3>
      </div>

      {/* Menu Items */}
      <div className="menu-items">
        <div 
          className={`menu-item ${currentPage === 'home' ? 'active' : ''}`} onClick={() => setCurrentPage('home')} >🏠 Home</div>
        <div className={`menu-item ${currentPage === 'explore' ? 'active' : ''}`} onClick={() => setCurrentPage('explore')} >🔍 Explore</div>
        <div className={`menu-item ${currentPage === 'messages' ? 'active' : ''}`} onClick={() => setCurrentPage('messages')} >💬 Messages</div>
        <div className={`menu-item ${currentPage === 'journal' ? 'active' : ''}`} onClick={() => setCurrentPage('journal')} >📔 Journal</div>
        <div className={`menu-item ${currentPage === 'quicklinks' ? 'active' : ''}`} onClick={() => setCurrentPage('quicklinks')} >🔗 Quick Links</div>
      </div>

      {/* Settings */}
      <div className="settings">⚙️ Settings</div>
    </div>
  );
}

export default Sidebar;
