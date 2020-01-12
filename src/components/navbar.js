import React from "react";
import "../css/navbar.scss";
import { NavLink } from 'react-router-dom';

export const navbar = props => {
  return (
      <nav className="navbar navStyle">
      <h2 className="home">
        <a className="home_link" href="/">
        addaVerse
        </a>
      </h2>
      <div className="navLinkContainer">

    <NavLink
      exact
      activeClassName="navbar__link--active activeStars"
      className="navbar__link navMenu"
      to="/stars"
    >
      stars
    </NavLink>

    <NavLink
      exact
      activeClassName="navbar__link--active activeUniverses"
      className="navbar__link navMenu"
      to="/universes"
    >
      universes
    </NavLink>

    <NavLink
      exact
      activeClassName="navbar__link--active activeImprint"
      className="navbar__link navMenu"
      to="/imprint"
    >
      imprint
    </NavLink>

    </div>

    </nav>
  );
};

export default navbar;
