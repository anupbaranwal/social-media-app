import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ml-2">
          <img
            src="logo512.png"
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
            alt=""
          />
          Social Media App
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
