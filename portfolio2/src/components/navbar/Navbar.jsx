import React from "react";
import './style.css';
import Logo from "../../assets/mainLogo.svg";
import Download from "../../assets/download.svg";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="left-cont">
        <img src={Logo} alt="main logo at navbar" />
        <span>Personal</span>
      </div>
      <div className="mid-cont">
        <ul className="list-mid-cont">
          <li>About Me</li>
          <li>Skills</li>
          <li>Project</li>
          <li>Contact Me</li>
        </ul>
      </div>
      <div className="right-cont">
        <button>
          Resume
          <img src={Download} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
