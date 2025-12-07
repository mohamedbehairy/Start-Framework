import React, { use, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

// 31.067962646484375
// window.pageYOffset
// setScrolled(window.pageYOffset);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  function checkScrolled() {
    //& setScrolled(window.pageYOffset >= 31);

    window.pageYOffset >= 31 ? setScrolled(true) : setScrolled(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", checkScrolled);
    return () => {
      window.removeEventListener("scroll", checkScrolled);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar fixed-top navbar-expand-lg text-uppercase fw-bolder ${
          scrolled ? "p-2" : ""
        }`}
      >
        <div className="container">
          <NavLink className="navbar-brand text-white" to={"/"}>
            Start Framework
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to={"/about"}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to={"/portfolio"}
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to={"/contact"}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
