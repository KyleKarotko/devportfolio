import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <div className="card">
        <h1 className="heading">Hi, I'm Kyle.</h1>
        <p className="subheading">
          I am a career changer with a passion for technology and
          problem-solving, currently enrolled in a coding bootcamp to transition
          into a career as a Full Stack Developer. My previous roles as a Sales
          Manager and Personal Trainer have allowed me to develop a strong
          foundation in leadership, project management, and customer service.
          Through my experiences, I have learned the importance of adapting to
          new challenges and finding innovative solutions to complex problems.
        </p>
      </div>

      <div className="card">
        <h1 className="heading">Featured Work</h1>
        <ul className="project-list">
          <li className="project-li">
            <a
              className="project-link"
              href='https://quiet-depths-44401.herokuapp.com/'
            >
              Junk Store
            </a>{' '}
            - A full stack application that allows users to create an account, login, view products and add products to their cart, as well as checkout.
          </li>
          <li className="project-li">
            <a
              className="project-link"
              href="https://travel-forum-p2.herokuapp.com/"
            >
              Travel Blog
            </a>{' '}
            - A platform for travelers to share their experiences and
            recommendations with other travelers.
          </li>
          <li className="project-li">
            <a
              className="project-link"
              href="https://naidiri1.github.io/Movie-Time/"
            >
              Movie Time
            </a>{' '}
            - A web app powered by server-side APIs, it presents movie
            information and trailers to users with a simple interface.
          </li>
        </ul>
      </div>

      <div className="card">
        <h1 className="heading">Get in Touch</h1>
        <ul className="contact-list">
          <li className="contact-li">
            <a className="contact-link" href="mailto:karotko.dev@gmail.com">
              Email
            </a>
          </li>
          <li className="contact-li">
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/kkarotko"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
