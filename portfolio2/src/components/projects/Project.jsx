import React from 'react';
import './style.css';

const Project = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My <span>Projects</span></h1>
      <div className="projects-grid">
        <div className="project-card">
          <img
            src="crypto-screener.png" 
            alt="Crypto Screener Application"
            className="project-image"
          />
          <div className="project-content">
            <h2>01</h2>
            <h3>Crypto Screener Application</h3>
            <p>
              I'm Evern Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>
        <div className="project-card">
          <img
            src="euphoria-ecommerce.png" 
            alt="Euphoria - Ecommerce Website"
            className="project-image"
          />
          <div className="project-content">
            <h2>02</h2>
            <h3>Euphoria - Ecommerce (Apparels) Website Template</h3>
            <p>
              I'm Evern Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>
        <div className="project-card">
          <img
            src="design-blog.png" 
            alt="Design Blog Website"
            className="project-image"
          />
          <div className="project-content">
            <h2>03</h2>
            <h3>Blog Website Template</h3>
            <p>
              I'm Evern Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
