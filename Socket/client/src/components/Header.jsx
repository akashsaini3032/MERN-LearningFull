




import React, { useState } from 'react';


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="cybrom-navbar">
      <div className="nav-container">
        <div className="logo">💬 ChatApp</div>
        <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="menu-icon" onClick={() => setMobileOpen(!mobileOpen)}>
          ☰
        </div>
      </div>
    </div>
  );
};

export default Header;
