import React from 'react';
import ProjectCard from '../components/ProjectCard';
function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'First Portfolio',
      desc: 'When a potential employer wants to sample my previous work they load my portfolio. When they do, they are presented with my name, a recent photo, and links to sections about me, my work, and how to contact me.',
      img: '../assets/images/kkPrfloScreenshot1.png',
    },
    {
      id: 2,
      title: 'Movie Time',
      desc: 'Allow users to choose a movie to watch based on information about a movie and displaying its trailer. Achieving this functionality comes from the use of JavaScript, more specifically the server side API',
      img: '../assets/images/image2.png',
    },
    {
      id: 3,
      title: 'JavaScript Quiz',
      desc: 'JavaScript quiz app where the user takes a quiz, with a timer that starts when they click the start button, and are presented with a series of questions. If a question is answered incorrectly, time is deducted from the clock. When all questions are answered or the timer reaches zero, the game is over, and the user can save their initials and their score.',
      img: '../assets/images/JSQ3.png',
    },
    {
      id: 4,
      title: 'Note Taker',
      desc: 'An application that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.',
      img: '../assets/images/NT1.png',
    },
    {
      id: 5,
      title: 'READme Generator',
      desc: 'Using the Inquirer package, this is a command-line application that dynamically generates a professional README.md file from a users input',
      img: '../assets/images/RG1.png',
    },
    {
      id: 6,
      title: 'Travel Forum',
      desc: '  This application is used to enable travelers and vacation seekers to blog about locations they have visited. This application will also serve fellow travelers in learning about new locations they may want to visit.',
      img: '../assets/images/TB1.png',
    },
  ];
  return (
    <div>
      {projects.map((project) => {
        return (
          <ProjectCard
            key={project.id}
            title={project.title}
            desc={project.desc}
            img={project.img}
          />
        );
      })}
    </div>
  );
}

export default Portfolio;

// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to
// both the deployed applications and the corresponding GitHub repositories
