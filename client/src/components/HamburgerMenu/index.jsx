import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './index.css';

const HamburgerMenu = () => {
  return (
    <Menu>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link> 
    </Menu>
  )
}

export default HamburgerMenu;