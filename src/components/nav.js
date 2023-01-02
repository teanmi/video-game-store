/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__company">
        <div className="nav__logo">
          <VideogameAssetIcon />
        </div>
        <div className="nav__companyName">Game Mart</div>
      </div>
      <ul className="nav__links">
        <li className="nav__link">
          <a href="#">Home</a>
        </li>
        <li className="nav__link">
          <a href="#deals">Deals</a>
        </li>
        <li className="nav__link">
          <a href="#values">Values</a>
        </li>
        <li className="nav__link">
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
