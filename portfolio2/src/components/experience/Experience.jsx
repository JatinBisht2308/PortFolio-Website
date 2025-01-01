import React from "react";
import "./style.css";

const Experience = () => {
  return (
    <div className="experience-container">
      <p className="experience-title">
        My <span className="highlight">Experience</span>
      </p>
      <div className="experience-card">
        <div className="experience-header">
          <img
            src="https://lh3.googleusercontent.com/QohSB6h16Y29IfINA1T1AzLA0ZTdHdJnYt6JIoNLOv6A0atSfrsFRudOs9oom3PEV55N0AA=s85"
            alt="Google Logo"
            className="company-logo"
          />
          <h2>Full Stack Developer at Kiikan Analytics</h2>
          <span className="experience-date">Aug 2024 - Present</span>
        </div>
        <p className="experience-description">
          As a full stack developer at Kiikan I haveEngineered meeting and event
          scheduling features using Google Calendar APIs in Waply, a
          productivity tool, leveraging prompt engineering to extract user
          intent from WhatsApp messages for seamless scheduling and integration.
          Integrated Stripe payment gateway to implement a tiered pricing model,
          managing free message limits and enabling monetization strategies for
          enhanced user engagement and retention. Designed and developed dynamic
          UI components using Next.js, performed database operations with
          MongoDB, and led the creation of a robust PostgreSQL database schema
          for a fintech product to ensure scalability and security.
        </p>
      </div>
      <div className="experience-card">
        <div className="experience-header">
          <img
            src="data:image/jpeg;base64,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"
            alt="YouTube Logo"
            className="company-logo"
          />
          <h2>Software Engineer at Spur Fit</h2>
          <span className="experience-date">Nov 2023 - April 2024</span>
        </div>
        <p className="experience-description">
          At Spur Fit, I implemented full-stack features, including creating
          custom APIs and database table creation and migration. Collaborated on
          UI/UX design with Figma, delivering innovative web solutions.
          Contributed to a large-scale MERN codebase, developing client-demand
          features and deploying them in real-time.
        </p>
      </div>
      <div className="experience-card">
        <div className="experience-header">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbolWkUsNU4opDhIrjQDlOfdgqKoIbD0Q0QA&s"
            alt="Koders-logo"
            className="company-logo"
          />
          <h2>Software Engineering Intern at Koders</h2>
          <span className="experience-date">May 2022 - Sep 2022</span>
        </div>
        <p className="experience-description">
          During my tenure at Koders, I developed commercial e-commerce and
          portfolio websites in a team using React, JavaScript, and Firebase.
          Designed customized components like, hero sections, testimonials, etc
          using Figma for clients’ business apps. Worked on version control for
          continuous deployment of the codebase to the repository.
        </p>
      </div>
    </div>
  );
};

export default Experience;
