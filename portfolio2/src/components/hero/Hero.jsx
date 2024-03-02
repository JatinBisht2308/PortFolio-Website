import React from "react";
import HeroImage from "../../assets/front-avatar.svg";
import "./style.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import XIcon from "@mui/icons-material/X";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
const Hero = () => {
  return (
    <div className="Hero">
      <div className="left-hero">
        <div className="heading-text">
          <p>
            Hello I`am <span>Jatin Bisht.</span>
          </p>
          <p>
            Full Stack <span>Developer</span>
          </p>
          <p>
            Based in <span>India.</span>
          </p>
        </div>
        <div className="hero-desc">
          <p>
            I'm Jatin Bisht, a seasoned full-stack developer with extensive
            internship experience and a knack for crafting compelling user
            interfaces.I excel in creating elegant solutions that seamlessly
            blend form and functionality. From frontend design to backend
            development, I approach each project with meticulous attention to
            detail, delivering polished results that consistently exceed
            expectations.
          </p>
        </div>
        <div className="socials">
          <div>
            <GitHubIcon
              sx={{
                color: "black",
              }}
            />
          </div>
          <div>
            <LinkedInIcon />
          </div>
          <div>
            <XIcon />
          </div>
          <div>
            <HistoryEduIcon />
          </div>
          <div>
            <BusinessCenterIcon />
          </div>
        </div>
      </div>
      <div className="right-hero">
        <img src={HeroImage} alt="hero section a big person" />
      </div>
    </div>
  );
};

export default Hero;
