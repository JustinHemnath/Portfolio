import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {

  return (

    <div className="navbar">
      
        <NavLink to="/home" 
        className="nav-link"
        activeClassName="active-link">
          HOME
        </NavLink>

        <NavLink
          to="/projectspage"
          className="nav-link"
          activeClassName="active-link"
        >
          PROJECTS
        </NavLink>

        <NavLink
          to="/contact"
          className="nav-link"
          activeClassName="active-link"
        >
          CONTACT ME
        </NavLink>

    </div>

  );

};

export default Navbar;
