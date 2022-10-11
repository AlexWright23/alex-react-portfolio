import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/Aboutme';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import '../styles/app.css';


export default function Main() {
  const [currentPage, setCurrentPage] = useState('About');
  
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page); {

    return (
      <div>
        <header className="header">
        </header>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
  
        <footer className="footer">
          <a href="https://github.com/AlexWright23"><img alt="github logo" src={gitHub} width="50px" height="50px" className='logo'></img></a>
        </footer>
      </div>
    );

  }


