import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import AuthService from "../../utils/auth";

const HamburgerMenu = () => {
  const logout = (event) => {
    event.preventDefault();
    AuthService.logout();
  };

  return (
    <>
      {AuthService.loggedIn() ? (
        <Menu>
          <a href="/" onClick={logout}>
            Logout
          </a>
          <Link to="/" className="sm:hidden md:block text-black">Home</Link>
          <Link to="/calendar" className="sm:hidden md:block text-black">Calendar</Link>
        </Menu>
      ) : (
        <Menu>
          <Link to="/login" className="text-black">Login</Link>
          <Link to="/signup" className="text-black">Signup</Link>
          <Link to="/" className="sm:hidden md:block text-black">Home</Link>
          <Link to="/calendar" className="sm:hidden md:block text-black">Calendar</Link>
        </Menu>
      )}
    </>
  );
};

export default HamburgerMenu;
