import React from "react";
import './style.css';
import Logo from "../../assets/mainLogo.svg";
import Download from "../../assets/download.svg";
import ResumeFile from "../../assets/Resume.pdf"; // Import the resume file

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="left-cont">
        <img src={Logo} alt="main logo at navbar" />
        <span>Jatin Bisht</span>
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
        {/* Wrap the button inside an anchor tag */}
        <a href={ResumeFile} download="Jatin_Bisht_Resume.pdf" className="resume-link">
          <button>
            Resume
            <img src={Download} alt="download icon" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
