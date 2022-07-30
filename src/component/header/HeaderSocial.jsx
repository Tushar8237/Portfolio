import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaHackerrank } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a
        href="https://www.linkedin.com/in/tushar-suryawanshi-820a391b9/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      {/* <a href="https://github.com" target="_blank"> */}
      <a href="https://github.com/Tushar8237" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.hackerrank.com/domains/algorithms" target="_blank">
        <FaHackerrank />
      </a>
    </div>
  );
};

export default HeaderSocial;
