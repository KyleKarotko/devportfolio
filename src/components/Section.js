import React from 'react';
import '../styles/Section.css';
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Portfolio from "../pages/Portfolio"
import Resume from "../pages/Resume"

const styles = {
  card: {
    margin: 20,
    background: '#FFFDD0',
  },
  heading: {
    background: '#000080',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};

function Section({currentPage}) {
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  return (
    <section style={styles.card}className="section">
      <h2 style={styles.heading}>{currentPage}</h2>
      {renderPage()}
      {/* <p style={styles.content}>
      </p> */}
    </section>
  );
}

export default Section;
