import "./homepage-banner.css";
import React from "react";
import mainPageSvg from "./mainPageSvg.svg";
import { Link } from "react-router-dom";

const HomePageBanner = () => {
  return (
    <>
      <section className="main">
        <main className="main-first-half">
          <div className="aside-main-section text-left">
            <p className=" capitalize ">Lorem ipsum dolor sit</p>

            <p className=" fW-700 uppercase ">Lorem ipsum dolor</p>
            <span className="gray-color ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At autem
              nihil alias reiciendis atque voluptatibus soluta laudantium, aut
              labore maiores nulla facilis, tenetur sapiente rem laborum harum
              quod fugiat officiis?
            </span>
            <div className="mgT-20">
              <Link to="/VideoListing">
                <button className="btn solid-pri-btn">watch now</button>
              </Link>
            </div>
          </div>
        </main>
        <main className="hero-SVG">
          <img src={mainPageSvg} alt="" />
        </main>
      </section>
    </>
  );
};

export default HomePageBanner;
