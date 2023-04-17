import React from 'react';
import ProjectCard from '../components/ProjectCard';
import project1 from '../assets/images/Junk1.png';
import project2 from '../assets/images/image2.png';
import project3 from '../assets/images/JSQ3.png';
import project4 from '../assets/images/NT1.png';
import project5 from '../assets/images/TB1.png';
import project6 from '../assets/images/JATE2.png';
import '../styles/Portfolio.css';

function Portfolio() {
    const projects = [
        {
          id: 1,
          title: 'Junk Store',
          desc: 'A full stack application that allows users to create an account, login, view products and add products to their cart, as well as checkout',
          img: project1,
          depLink: 'https://quiet-depths-44401.herokuapp.com/',
          gitLink: 'https://github.com/KyleKarotko/online-store',
        },
        {
          id: 2,
          title: 'Movie Time',
          desc: 'Movie Time is a web app that allows users to browse and watch movies. Powered by server-side APIs, it presents movie information and trailers to users with a simple interface.',
          img: project2,
          depLink: 'https://naidiri1.github.io/Movie-Time/',
          gitLink: 'https://github.com/Naidiri1/Movie-Time',

        },
        {
          id: 3,
          title: 'JavaScript Quiz',
          desc: 'The JavaScript quiz app tests the user\'s knowledge of JavaScript. It features a timer that starts when the quiz begins and deducts time for incorrect answers. Users can save their initials and their score when the quiz ends.',
          img: project3,
          depLink: 'https://kylekarotko.github.io/JSQ/',
          gitLink: 'https://github.com/KyleKarotko/JSQ',

        },
        {
          id: 4,
          title: 'Note Taker',
          desc: 'The Note Taker app is a useful tool for taking and saving notes. Built with Express.js, it stores note data in a JSON file and retrieves it when needed.',
          img: project4,
          depLink: 'https://fast-basin-86731.herokuapp.com/',
          gitLink: 'https://github.com/KyleKarotko/Note_Taker/',

        },
        {
          id: 5,
          title: 'Travel Forum',
          desc: 'The Travel Forum is a platform for travelers to share their experiences and recommendations with other travelers. It is designed to help users discover new travel destinations and make informed decisions about their trips.',
          img: project5,
          depLink: 'https://travel-forum-p2.herokuapp.com/',
          gitLink: 'https://github.com/trudman/travel-forum'
        },
        {
          id: 6,
          title: 'Progressive Web App - Text Editor',
          desc: 'The Text Editor is a progressive web app that can be installed on any device. It features a client-server folder structure and uses webpack to bundle JS files. The editor uses Indexed DB for storage on the client and can function offline without losing any data.',
          img: project6,
          depLink: 'https://desolate-thicket-86948.herokuapp.com/',
          gitLink: 'https://github.com/KyleKarotko/pwa-textEditor/',

        },
      ];
      
  return (
    <div className="container">
      <div className="row justify-content-center">
        {projects.map((project) => (
          <div className="col-lg-4 col-md-6 mb-5" key={project.id}>
            <ProjectCard
              title={project.title}
              desc={project.desc}
              img={project.img}
              depLink={project.depLink}
              gitLink={project.gitLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
