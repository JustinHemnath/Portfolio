import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../Styles/Navbar.css";
import { BsSunFill, BsToggleOff, BsToggleOn } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { DARK_MODE, LIGHT_MODE } from "../Features/themeSlice";

const Navbar = () => {
  const [light, setLight] = useState(true);
  const dispatch = useDispatch()

  const toggleTheme = () => {
    setLight(!light)

    if (!light) {
      dispatch(LIGHT_MODE())
    } else {
      dispatch(DARK_MODE())
    }
  }

  return (
    <div className="Nav">
      <div className="navbar">
        <NavLink to="/home" className="nav-link" activeClassName="active-link">
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

      <div className="toggle">
      <BsSunFill style={{ fontSize: '1.5em', marginRight: '0.5em', color: '#32373c' }} />
        {light ? (
          <BsToggleOff className="togglebtn" onClick={toggleTheme} />
        ) : (
          <BsToggleOn className="togglebtn" onClick={toggleTheme} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
