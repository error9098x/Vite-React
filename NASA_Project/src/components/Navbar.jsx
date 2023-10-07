import React from "react";
import { FaHome, FaImage, FaCompass, FaInfoCircle } from "react-icons/fa";

const Navbar = () => {

  return (
    <header>
      <div className="navigation-links" >
        <a href="/home" target="_blank" rel="noopener noreferrer" className="icon" style={{ color: 'white' }} onMouseOver={e => e.currentTarget.style.color = '#1389fd'} onMouseOut={e => e.currentTarget.style.color = 'white'}>
          <FaHome />
        </a>
        <a href="/image-of-the-day" target="_blank" rel="noopener noreferrer" className="icon" style={{ color: 'white' }} onMouseOver={e => e.currentTarget.style.color = '#1389fd'} onMouseOut={e => e.currentTarget.style.color = 'white'}>
          <FaImage />
        </a>
        <a href="/explore" target="_blank" rel="noopener noreferrer" className="icon" style={{ color: 'white' }} onMouseOver={e => e.currentTarget.style.color = '#1389fd'} onMouseOut={e => e.currentTarget.style.color = 'white'}>
          <FaCompass />
        </a>
        <a href="/about" target="_blank" rel="noopener noreferrer" className="icon" style={{ color: 'white' }} onMouseOver={e => e.currentTarget.style.color = '#1389fd'} onMouseOut={e => e.currentTarget.style.color = 'white'}>
          <FaInfoCircle />
        </a>
      </div>
      
    </header>
  );
};

export default Navbar;