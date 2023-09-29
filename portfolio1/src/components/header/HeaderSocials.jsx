import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import "animate.css";
import AOS from "aos";
const HeaderSocials = () => {
  AOS.init();
  return (
    <div
      className="header__socials"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <a
        href="https://www.linkedin.com/in/jatinbisht2308/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/JatinBisht2308" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://www.youtube.com/channel/UCGiZyF5cM8BlDv0pia4ZBPA"
        target="_blank"
      >
        <FiYoutube />
      </a>
    </div>
  );
};

export default HeaderSocials;
