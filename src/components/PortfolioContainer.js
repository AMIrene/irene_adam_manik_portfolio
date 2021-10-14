import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer'; 
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import CV from './pages/CV';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'CV') {
      return <CV />;
    }
    
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={{ marginBottom: "250px"} }>
 
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
 
 
      {renderPage()}
      <Footer/>
    </div>
  );
}