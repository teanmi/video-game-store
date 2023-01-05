/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = ({links}) => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__company">
          <VideogameAssetIcon fontSize="large" className="nav__logo" />
          <div className="nav__companyName">Game Mart</div>
        </div>
        <ul className="nav__links">
          {(links === "home" || links === "cart") && <li>
            <Link to="/" className="nav__link nav__linkHoverUnderline" href="#">
              Home
            </Link>
          </li>}
          { links === "home" && <li>
            <a className="nav__link nav__linkHoverUnderline" href="#deals">
              Deals
            </a>
          </li>}
          {links === "home" && <li>
            <a className="nav__link nav__linkHoverUnderline" href="#values">
              Values
            </a>
          </li>}
          <li className="nav__linkBtnHover">
            {links === "search" ? <Link className="nav__link nav__linkBtn"  to="/">
              Home
              </Link> : <Link className="nav__link nav__linkBtn"  to="/search">
              Search
              </Link>}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
