/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect } from "react";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import { Link } from "react-router-dom";
import "./nav.css";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = ({ links }) => {
  const [mobileMenuActive, setmobileMenuActive] = useState(false);

  function mobileMenuClicked(event) {
    event.preventDefault();

    setmobileMenuActive(!mobileMenuActive);
  }

  const handleResize = () => {
    if (window.innerWidth > 728) {
      setmobileMenuActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__company">
          <VideogameAssetIcon fontSize="large" className="nav__logo" />
          <div className="nav__companyName">Game Mart</div>
        </div>
        <ul className="nav__links">
          {(links === "home" || links === "cart") && (
            <li>
              <Link
                to="/"
                className="nav__link nav__linkHoverUnderline"
                href="#"
              >
                Home
              </Link>
            </li>
          )}
          {links === "home" && (
            <li>
              <a className="nav__link nav__linkHoverUnderline" href="#games">
                Games
              </a>
            </li>
          )}
          {links === "home" && (
            <li>
              <a className="nav__link nav__linkHoverUnderline" href="#values">
                Values
              </a>
            </li>
          )}
          <li className="nav__linkBtnHover">
            {links === "search" ? (
              <Link className="nav__link nav__linkBtn" to="/">
                Home
              </Link>
            ) : (
              <Link className="nav__link nav__linkBtn" to="/search">
                Search
              </Link>
            )}
          </li>
        </ul>

        <div
          className="nav__mobileBtn"
          onClick={(event) => mobileMenuClicked(event)}
        >
          <MenuIcon fontSize="large" className="nav__mobileBtn--img" />
        </div>

        <div
          className={
            "nav__mobileMenu" +
            (mobileMenuActive ? " nav__mobileMenuActive" : "")
          }
        >
          <ul className="nav__mobileLinks">
            {(links === "home" || links === "cart") && (
              <li className="nav__mobileLinkContainer">
                <Link
                  to="/"
                  className="nav__link nav__mobileLink nav__mobileLinkHoverUnderline"
                  href="#"
                >
                  Home
                </Link>
              </li>
            )}
            {links === "home" && (
              <li className="nav__mobileLinkContainer">
                <a
                  className="nav__link nav__mobileLink nav__mobileLinkHoverUnderline"
                  href="#games"
                >
                  Games
                </a>
              </li>
            )}
            {links === "home" && (
              <li className="nav__mobileLinkContainer">
                <a
                  className="nav__link nav__mobileLink nav__mobileLinkHoverUnderline"
                  href="#values"
                >
                  Values
                </a>
              </li>
            )}
            <li className="nav__mobileLinkContainer">
              {links === "search" ? (
                <Link
                  className="nav__link nav__mobileLink nav__mobileLinkHoverUnderline"
                  to="/"
                >
                  Home
                </Link>
              ) : (
                <Link
                  className="nav__link nav__mobileLink nav__mobileLinkHoverUnderline"
                  to="/search"
                >
                  Search
                </Link>
              )}
            </li>
          </ul>

          <div className="nav__mobileMenuPointer" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
