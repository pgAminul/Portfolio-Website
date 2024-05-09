import React, { useState } from 'react';
import '../Style/Navbar/Navbar.css';
import { NavLink } from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav">
      <div className="Container">
        <div className="logo">
          <img className="MainLogo" src="./Images/logo.png" alt="" />
          <span className={`resoinsiveIcon ${showMenu ? 'close' : ''}`} onClick={toggleMenu}>
            {showMenu ? <IoMdClose /> : <FaBarsStaggered />}
          </span>
        </div>
        <div className={`navLink ${showMenu ? 'show' : ''}`}>
          <div className="bgnav">
          <NavLink className="Link" to="/">Home</NavLink>
          <NavLink className="Link" to="/Contact">Contact</NavLink>
          <NavLink className="Link" to="/Services">Services</NavLink>
          <NavLink className="Link" to="/About">About</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
