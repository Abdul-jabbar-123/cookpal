import React from 'react';
import './Navbar.css'; // Import the CSS file
import pic1 from '../images/pic1.jpeg';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div>
      <header className="navbar-header">
        <div>
          <img src={pic1} alt="cookpal" />
        </div>
        <div className='search-Container'>
        <div className='search-bar'>
            <input type="serch" placeholder='search for racipy....'/><FaSearch className='icon' />
        </div>
        </div>
          <nav className='navbar'>
          <ul className="navbar-menu">
               <li><Link to="/">Home</Link></li>
               <li><Link to="/explore">Explore</Link></li>
               <li><Link to="/help">Help</Link></li>
               <li><Link to="/contact">Contact</Link></li>
          </ul>
          </nav>
      </header>
    </div>
  );
}

export default Navbar;
