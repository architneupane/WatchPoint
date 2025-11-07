import React from 'react'
import "./Navbar.css"
import { FiSearch } from "react-icons/fi";
import { PiHandbagBold } from "react-icons/pi";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
 <div className="navbar">
      <ul className="nav-categories">
        <li><NavLink to="/men">Men</NavLink></li>
        <li><NavLink to="/women">Women</NavLink></li>
        <li><NavLink to="/kids">Kids</NavLink></li>
        <li><NavLink to="/">Home</NavLink></li>
      </ul>

      <div className="logo">
        <NavLink to="/"><h1 style={{ fontFamily: 'Tektur, sans-serif' }}>WATCHPOINT</h1></NavLink>
      </div>

      <ul className="loginPart">
        <li className="search-icon"><FiSearch /></li>
        <li className="cart-icon"><NavLink to="/cart"><PiHandbagBold /></NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar