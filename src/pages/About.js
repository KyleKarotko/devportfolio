import React from 'react';
import img from '../assets/images/Avatar1.png';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-avatar">
        <img src={img} alt="Avatar of a bearded smiling bald guy wearing glasses and a purple hoody against a green checkard backgrond" />
      </div>
      <div className="about-text">
        <div className="card about-card">
          <div className="card-body">
            <p>
              I am a career changer with a passion for technology and problem-solving,
              currently enrolled in a coding bootcamp to transition into a career as a
              Full Stack Developer. My previous roles as a Sales Manager and Personal
              Trainer have allowed me to develop a strong foundation in leadership,
              project management, and customer service. Through my experiences, I have
              learned the importance of adapting to new challenges and finding
              innovative solutions to complex problems.
            </p>
            <p>
              In addition to my work experience, I have also completed courses in web
              development, programming, and software engineering. I am eager to apply
              my newly acquired skills and knowledge to a career in software
              development. My dedication to self-improvement and commitment to
              learning will make me a valuable asset to any team.
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
