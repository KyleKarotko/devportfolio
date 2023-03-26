import React from 'react';
import '../styles/Header.css';
import Navbar from './Navbar';
const styles = {
  card: {
    margin: 20,
    background: '#FFFDD0',
    border: '1px solid #E6E6FA'
  },
  heading: {
    background: '#000080',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
};


function Header({currentPage, handlePageChange}) {

  return (
    <header style={styles.card} className="header">
      <h1 style={styles.heading}>Kyle K's Devlopment Portfolio</h1>
      <Navbar currentPage = {currentPage} handlePageChange = {handlePageChange}/>
    </header>
  );
}

export default Header;
