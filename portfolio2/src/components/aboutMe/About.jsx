import React from "react";
import "./style.css";
import ProfileImage from "../../assets/big-avatar.svg"; // Placeholder for your image path

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img src={ProfileImage} alt="Profile Illustration" />
        </div>
        <div className="about-text">
          <h2>
            About <span className="highlight">Me</span>
          </h2>
          <p>
            I'm a dedicated full-stack developer specializing in modern web
            technologies like React.js, Node.js, and Next.js. With a strong
            foundation in problem-solving, database management, and user-focused
            design, I aim to craft digital products that deliver seamless user
            experiences. I bring expertise in building scalable applications,
            integrating APIs, and implementing features like scheduling systems
            and payment gateways.
          </p>
          <p>

            I began my journey as a developer during my time at DIT University,
            where I earned a Bachelor's degree in Computer Science and
            Engineering. My professional experience includes working at Kiikan
            Analytics, where I engineered productivity tools like Waply,
            integrating Google Calendar APIs, and implementing Stripe-based
            monetization strategies. Previously, as a Software Engineer at Spur
            Fit, I contributed to full-stack development, collaborating on UI/UX
            design and deploying real-time features for a large-scale MERN
            codebase. I also interned at Koders, where I developed e-commerce
            and portfolio websites using React, Firebase, and JavaScript
          </p>
          <p>
        
            Beyond coding, I take pride in my achievements, such as earning
            recognition as a contributor to GirlScript Summer of Code and
            securing a top position in the Vihaan 6.0 Hackathon. I also enjoy
            exploring cutting-edge technologies and engaging with tech
            communities on platforms like GitHub and LinkedIn. When I’m not
            working, you’ll find me designing innovative solutions or sharing
            insights about modern web development and problem-solving.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
