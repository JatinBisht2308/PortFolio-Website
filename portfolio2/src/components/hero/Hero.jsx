import React, { useState } from "react";
import HeroImage from "../../assets/front-avatar.svg";
import "./style.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import XIcon from "@mui/icons-material/X";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
const Hero = () => {
  const [isHovered, setIsHovered] = useState([false, false, false, false]);
  const onMouseOver = (icon) => {
    let tempHoverArray = [false, false, false, false];
    switch (icon) {
      case "linkedin":
        tempHoverArray[1] = true;
        break;
      case "github":
        tempHoverArray[0] = true;
        break;
      case "blog":
        tempHoverArray[2] = true;
        break;
      case "linktree":
        tempHoverArray[3] = true;
        break;
      default:
        break;
    }
    setIsHovered(tempHoverArray);
  };

  const onMouseLeave = () => {
    setIsHovered([false, false, false, false]); 
  };
  
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
        <div
          className="socials "
          style={{
            display: "flex",
            width: "35%",
            justifyContent: "space-between",
          }}
        >
          <div
            className="social-handle"
            onMouseEnter={() => onMouseOver('github')}
            onMouseLeave={onMouseLeave}
          >
            <GitHubIcon
              sx={{
                color: "black",
              }}
              style={{
                cursor: "pointer",
                width: "18px",
                color: isHovered[0] ? "white" : "black",
              }}
              onClick={() => {
                window.open("https://github.com/JatinBisht2308", "_blank");
              }}
            />
          </div>
          <div
            className="social-handle"
            onMouseEnter={() => onMouseOver('linkedin')}
            onMouseLeave={onMouseLeave}
          >
            <LinkedInIcon
              style={{
                cursor: "pointer",
                width: "18px",
                color: isHovered[1] ? "white" : "black",
              }}
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/jatinbisht2308/",
                  "_blank"
                );
              }}
            />
          </div>
          <div
            className="social-handle"
            onMouseEnter={() => onMouseOver('blog')}
            onMouseLeave={onMouseLeave}
          >
            <HistoryEduIcon
              style={{
                cursor: "pointer",
                width: "18px",
                color: isHovered[2] ? "white" : "black",
              }}
              onClick={() => {
                window.open(
                  "https://jatinonwebdevelopment.hashnode.dev/",
                  "_blank"
                );
              }}
            />
          </div>
          <div
            className="social-handle"
            onMouseEnter={() => onMouseOver('linktree')}
            onMouseLeave={onMouseLeave}
          >
            <BusinessCenterIcon
              style={{
                cursor: "pointer",
                width: "18px",
                color: isHovered[3] ? "white" : "black",
              }}
              onClick={() => {
                window.open("https://linktr.ee/jatin_bisht", "_blank");
              }}
            />
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
