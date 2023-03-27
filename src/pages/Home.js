import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <div className="card">
        <h1 className="heading">Hi, I'm Kyle.</h1>
        <p className="subheading">I'm a web developer, and this is my portfolio. I specialize in full stack development using the MERN stack, and I have just completed the bootcamp at The Ohio State University. I'm passionate about learning, and I love using my skills to innovate and problem solve todays technology challenges.</p>
      </div>

      <div className="card">
        <h1 className="heading">Featured Work</h1>
        <ul className="project-list">
          <li className="project-li">
            <a className="project-link" href='https://desolate-thicket-86948.herokuapp.com/'>Text Editor</a> - A progressive web app that can be installed on any device.
          </li>
          <li className="project-li">
            <a className="project-link" href='https://travel-forum-p2.herokuapp.com/'>Travel Blog</a> - A platform for travelers to share their experiences and recommendations with other travelers.
          </li>
          <li className="project-li">
            <a className="project-link" href='https://naidiri1.github.io/Movie-Time/'>Movie Time</a> - A web app powered by server-side APIs, it presents movie information and trailers to users with a simple interface.
          </li>
        </ul>
      </div>

      <div className="card">
        <h1 className="heading">Get in Touch</h1>
        <ul className="contact-list">
          <li className="contact-li"><a className="contact-link" href="mailto:karotko.dev@gmail.com">Email</a></li>
          <li className="contact-li"><a className="contact-link" href="https://www.linkedin.com/in/kkarotko">LinkedIn</a></li>
        </ul>
      </div>
    </>
  );
}

export default Home;

