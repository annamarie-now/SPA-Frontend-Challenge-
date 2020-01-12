import React from "react";
import "../css/navbar.scss";
import { NavLink } from 'react-router-dom';

export const navbar = props => {
  return (
      <nav className="navbar navStyle">
      <h2 className="home">
        <a className="home_link" href="/">
        WIKIVERSE
        </a>
      </h2>
      <div className="navLinkContainer">

    <NavLink
      exact
      activeClassName="navbar__link--active activeStars"
      className="navbar__link navMenu"
      to="/stars"
    >
      Stars
    </NavLink>

    <NavLink
      exact
      activeClassName="navbar__link--active activeUniverses"
      className="navbar__link navMenu"
      to="/universes"
    >
      Universes
    </NavLink>

    <NavLink
      exact
      activeClassName="navbar__link--active activeImprint"
      className="navbar__link navMenu"
      to="/imprint"
    >
      Imprint
    </NavLink>

    </div>

    </nav>
  );
};

export default navbar;
