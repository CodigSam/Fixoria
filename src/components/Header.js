import React from "react";
import '../App.css';
import { FaSearch, FaBell, FaEnvelope } from "react-icons/fa";


const Header = () => {
  return (
    <header className="header">
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>
      <div className="header-icons">
        <FaBell className="icon" />
        <FaEnvelope className="icon" />
      </div>
    </header>
  );
};

export default Header;
