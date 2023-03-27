import React from 'react';
import img from '../assets/images/Avatar1.png';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-avatar">
        <img
          src={img}
          alt="Avatar of a bearded smiling bald guy wearing glasses and a purple hoody against a green checkard backgrond"
        />
      </div>
      <div className="about-text">
        <div className="card about-card">
          <div className="card-body">
            <p>
              Hello, my name is Kyle and I am excited to introduce myself as a
              passionate and dedicated individual with a diverse background in
              sales management, personal training, and now, full stack web
              development. I am currently enrolled in a full stack web
              development bootcamp, where I am gaining hands-on experience and
              building a strong foundation in programming languages such as
              JavaScript, HTML, CSS, and various frameworks such as React,
              Node.js, and Express.
            </p>
            <p>
              Throughout my professional career, I have honed valuable skills in
              leadership, project management, and customer service that have
              been transferable to my current journey in web development. I am
              constantly seeking new challenges and opportunities to grow both
              personally and professionally. I am eager to leverage my
              experience and newfound skills to contribute to an innovative team
              and be a part of shaping the future of technology. Thank you for
              considering my profile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them
