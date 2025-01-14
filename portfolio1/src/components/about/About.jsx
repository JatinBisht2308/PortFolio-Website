import React from "react";
import "./About.css";
import aboutImage from "../../assets/me2.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { TbStack3 } from "react-icons/tb";
import "animate.css";
// import AOS from 'aos';
import AOS from "aos";
const About = () => {
  AOS.init({
    duration: 1000,
  });
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me" data-aos="fade-left">
          <div className="about__me-image" data-aos="fade-right" data-aos-delay="200">
            <img src={aboutImage} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article
              className="about__card"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ years working </small>
            </article>
            <article
              className="about__card"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <TbStack3 className="about__icon" />
              <h5>Tech Stack</h5>
              <small>10+ Technologies</small>
            </article>
            <article
              className="about__card"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>

          <p data-aos="fade-down">
            Aiming to leverage proven planning and problem solving skills to
            successfully fill the Software Developer role at your company.I want
            to work with a company that deals in the development of new
            technology and advance my skills as a developer.Frequently praised
            as focused by my peers I can be relied to help your company achieve
            its goals.
          </p>

          <a href="#contact" className="btn btn-primary" data-aos="fade-down">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
