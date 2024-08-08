import React from "react";
import "./Footer.css";
import JB from "../../assets/logo.png";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "animate.css";
import AOS from "aos";
const Footer = () => {
  AOS.init();
  return (
    <footer>
      <a
        href="#"
        className="footer__logo"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <div>
          <img src={JB} alt="" />
        </div>
      </a>

      <ul className="permalinks">
        <li data-aos="fade-down" data-aos-delay="300">
          <a href="#">Home</a>
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <a href="#about">About</a>
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <a href="#experience">Experience</a>
        </li>
        <li data-aos="fade-down" data-aos-delay="300">
          <a href="#services">Services</a>
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li data-aos="fade-down" data-aos-delay="300">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/jatinbisht2308/">
          <BsLinkedin data-aos="fade-up" data-aos-delay="500" />
        </a>
        <a href="https://github.com/JatinBisht2308">
          <FaGithub data-aos="fade-up" data-aos-delay="600" />
        </a>
        <a href="https://leetcode.com/u/Jatin_Bisht">
          <SiLeetcode  data-aos="fade-up" data-aos-delay="700" />
        </a>
        <a href="https://medium.com/@jatinbisht2308">
          <FaMediumM  data-aos="fade-up" data-aos-delay="700" />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jatin Bisht Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
