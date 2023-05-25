import React, { useState } from 'react'
import LogoNav from "../assets/img/logos/logo.png"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={LogoNav} alt="" className="logo-nav"/>
        <span>Alexander Mena</span>
      </div>
        <ul className={`navbar-menu ${showMenu && 'active'}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutme">About me</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact me</a></li>
          <li><a href="#">CV</a></li>
        </ul>
        <div className="navbar-toggle" onClick={() => setShowMenu(!showMenu)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
    </div>
  </nav>
  )
}

export default Navbar