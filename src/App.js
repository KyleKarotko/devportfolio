import React, {useState} from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  // const renderPage = () => {
  //   if (currentPage === 'Home') {
  //     return <Home />;
  //   }
  //   if (currentPage === 'About') {
  //     return <About />;
  //   }
  //   if (currentPage === 'Portfolio') {
  //     return <Portfolio />;
  //   }
  //   if (currentPage === 'Resume') {
  //     return <Resume />;
  //   }
  //   return <Contact />;
  // };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <Header currentPage = {currentPage} handlePageChange = {handlePageChange}/>
      <Section currentPage = {currentPage} />
      <Footer currentPage = {currentPage} />
    
    </div>
  );
}

export default App;
