import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpeg";
import "animate.css";
import AOS from "aos";

const Portfolio = () => {
  AOS.init();
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article
          className="portfolio__item"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Lahar Events Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/JatinBisht2308/Task1-Koders"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://task1-byjatin-atkoders.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item"
        data-aos="fade-up" data-aos-delay="400">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Personal PortFolio Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/JatinBisht2308/PortFolio-Website/tree/main/portfolio1"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://task1-byjatin-atkoders.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item"
        data-aos="fade-up" data-aos-delay="600">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Virtual Health Care </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/JatinBisht2308/Trafalgar-Jatin.git"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://trafalgar-by-jatin.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item"
        data-aos="fade-up" data-aos-delay="200">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Ticketless Booking App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/JatinBisht2308/MonuMate-App.git"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://github.com/JatinBisht2308/MonuMate-App.git"
              className="btn btn-primary"
              target="_blank"
            >
              Not Live
            </a>
          </div>
        </article>
        <article className="portfolio__item"
        data-aos="fade-up" data-aos-delay="400">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Monumate Dashboard</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/JatinBisht2308/Monumate-Dashboard.git"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://monumate-dashboard.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item"
        data-aos="fade-up" data-aos-delay="600">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Koders Portfolio</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/JatinBisht2308/Koders-Portfolio.git"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://portfolio.koders.in/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
