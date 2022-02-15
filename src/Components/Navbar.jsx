import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <h1 className="navbar-brand">Note App</h1>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" extend='true' aria-current="page" to={"/"}>
              Home
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" aria-current="page" to={"/about"}>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
