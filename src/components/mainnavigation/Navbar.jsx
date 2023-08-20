import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-header'>
        <h1>Books App</h1>
      </div>
      <div className='nav-links'>
        <Link to='/Favorites' className='nav-link'>
          Your Favorites
        </Link>
        <Link to='/Login' className='nav-link'>
          Login/Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
