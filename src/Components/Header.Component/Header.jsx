import "./header.css";
import React from "react";
import logo from "./logo64.png";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoPlayOutline } from "react-icons/io5";
import { BiHomeSmile } from "react-icons/bi";
import { TbPlaylistAdd } from "react-icons/tb";
import { AuthIcon } from "../HeaderIcon.Component/AuthIcon";

const Header = () => {
  return (
    <>
      <header className="product-page-header">
        <nav className="navigation">
          <section className="nav-container-startsec">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <span className="nav-title">flashVideoLibrary</span>
          </section>

          <section className="nav-container-endsec">
            <Link to="/">
              <div className="badge-on-avatar navbar-icons">
                <div className="size">
                  <BiHomeSmile size="lg" />
                </div>
              </div>
            </Link>

            <Link to="/videos">
              <div className="badge-on-avatar navbar-icons">
                <div className="size">
                  <IoPlayOutline size="lg" />
                </div>
              </div>
            </Link>

            <Link to="/watchlater">
              <div className="badge-on-avatar navbar-icons">
                <div className="size">
                  <AiOutlineClockCircle size="lg" />
                </div>
              </div>
            </Link>

            <Link to="/playlist">
              <div className="badge-on-avatar navbar-icons">
                <div className="size">
                  <TbPlaylistAdd size="lg" />
                </div>
              </div>
            </Link>

            <div className="badge-on-avatar navbar-icons">
              <div className="size">
                <AuthIcon />
              </div>
            </div>
          </section>
        </nav>
      </header>
    </>
  );
};

export default Header;
