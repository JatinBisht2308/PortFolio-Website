import React from "react";
import "./Footer.css";
import JB from "../../assets/logo.png";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        <div>
        <img src={JB} alt="" />
        </div>
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/jatin-bisht-ba62111bb/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/JatinBisht2308">
          <FaGithub />
        </a>
        <a href="https://www.youtube.com/channel/UCGiZyF5cM8BlDv0pia4ZBPA">
          <FiYoutube />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jatin Bisht Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
