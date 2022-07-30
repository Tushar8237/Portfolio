import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank">
          <BsFacebook />
        </a>
        <a href="https://instagram.com" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://twitter.com" target="_blank">
          <AiOutlineTwitter />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
