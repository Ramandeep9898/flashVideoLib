import "./header.css";
import React from "react";
import logo from "./logo64.png";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoPlayOutline } from "react-icons/io5";

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
            <Link to="/VideoListing">
              <div className="badge-on-avatar navbar-icons">
                <div className="size">
                  <IoPlayOutline size="lg" />
                </div>
              </div>
            </Link>

            <Link to="/WatchLater">
              <div className="badge-on-avatar navbar-icons">
                <div className="size">
                  <AiOutlineClockCircle size="lg" />
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
