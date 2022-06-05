import React from "react";
import "./About.css";
import aboutImage from "../../assets/me2.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { TbStack3 } from "react-icons/tb";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutImage} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <TbStack3 className="about__icon" />
              <h5>Tech Stack</h5>
              <small>10+ Technologies</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>

          <p>
            Aiming to leverage proven planning and problem solving skills to
            successfully fill the Software Developer role at your
            company.I want to work with a company that deals in the development
            of new technology and advance my skills as a developer.Frequently
            praised as focused by my peers I can be relied to help your company
            achieve its goals.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
