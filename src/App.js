import React, { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Section currentPage={currentPage} />
      <Footer currentPage={currentPage} />
    </div>
  );
}

export default App;
