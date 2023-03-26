import React from 'react';
import Rez from '../assets/images/rez.png'
function Resume() {
  return (
    <div>
      <a href={Rez} download>
        <img src={Rez} alt="A resume" />
      </a>
      <div>
        <h2>Computer Science Applied to JavaScript</h2>
        <ul>
          <li>Algorithms (searches, sorts)</li>
          <li>Performance</li>
          <li>Time complexity</li>
          <li>Big O notation</li>
          <li>Data structures</li>
          <li>Design patterns</li>
        </ul>

        <h2>API Design</h2>
        <ul>
          <li>Client-server model API</li>
          <li>REST</li>
          <li>JSON</li>
          <li>AJAX (Fetch API)</li>
          <li>HTTP request methods</li>
          <li>GraphQL</li>
        </ul>

        <h2>Databases</h2>
        <ul>
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>

        <h2>Browser-based Technologies</h2>
        <ul>
          <li>HTML, CSS</li>
          <li>JavaScript, React.js, jQuery</li>
          <li>Responsive design</li>
          <li>Bootstrap</li>
          <li>Progressive web applications (PWAs)</li>
          <li>LocalStorage, sessionStorage, IndexedDB</li>
        </ul>

        <h2>Deployment and Delivery</h2>
        <ul>
          <li>Heroku</li>
          <li>Git and GitHub Pages</li>
          <li>Shell scripting</li>
          <li>Unit testing</li>
          <li>Linting</li>
          <li>Continuous integration</li>
        </ul>

        <h2>Server Side Development</h2>
        <ul>
          <li>MERN stack (MongoDB, Express.js, React.js, Node.js)</li>
          <li>User authentication</li>
          <li>Template engines</li>
        </ul>
      </div>
    </div>
  );
}
export default Resume;

// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
