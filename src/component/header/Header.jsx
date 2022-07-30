import React from "react";
import "./header.css";
import CTA from "./CTA";
// import profile from "../../assets/profile.jpg";
import img7 from "../../assets/img7.jpg";

import HeaderSocial from "./HeaderSocial";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tushar Suryawanshi</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img className="profile" src={img7} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
