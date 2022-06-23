import "./header.css";
import react from "react";
import React, { Component } from "react";
import logo from "./logo64.png";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <>
      <header className="product-page-header">
        <nav className="navigation">
          <section className="nav-container-startsec">
            {/* link to homepage */}
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <span className="nav-title">flashVideoLibrary</span>
          </section>

          {/* login button */}
          <section className="nav-container-endsec">
            <Link to="/login">
              <div className="badge-on-avatar navbar-icons">
                <div className="size">
                  <CgProfile size="lg" />
                </div>
              </div>
            </Link>
          </section>
        </nav>
      </header>
    </>
  );
};

export default Header;
