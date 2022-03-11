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
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard" exact>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/posts" exact>
              Posts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/albums" exact>
              Album
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/todos" exact>
              To Do
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/users" exact>
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
