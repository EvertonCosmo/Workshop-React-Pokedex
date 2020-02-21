import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
  <nav
    className="navbar header "
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <span className="pokeball"></span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link className="navbar-item" to="/">
        <h1 className="title has-text-white">Pokédex</h1>
      </Link>
    </div>
  </nav>
);
export default Header;
