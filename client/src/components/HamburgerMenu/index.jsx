import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./index.css";
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
        </Menu>
      ) : (
        <Menu>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </Menu>
      )}
    </>
  );
};

export default HamburgerMenu;
