import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuClick, setMenuClick] = useState(false);

  const onMenuClick = () => setMenuClick(!menuClick);
  const closeMobileMenu = () => setMenuClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            {/* (주)에프엠 하우징 */}
            <img src="/images/logo.jpg" alt="logo" />
          </Link>
          <div className="menu-icon" onClick={onMenuClick}>
            <i className={menuClick ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={menuClick ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/company"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                회사소개
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/business"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                사업소개
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/board" className="nav-links" onClick={closeMobileMenu}>
                공실현황
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
