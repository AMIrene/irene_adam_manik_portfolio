import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import logo from '../components/img/iamlogo.png';

const styles = {
  navbar: {
    background: "#03071E",
 
  },
           
}
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar style={styles.navbar} variant="dark" expand="lg">

      <Navbar.Brand href="#home"
        onClick={() => handlePageChange('Home')}
        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}> <img src={logo}/>Irene Adam Manik</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

      <Navbar.Brand href="#about" onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</Navbar.Brand>
        
        <Navbar.Brand href="#work" onClick={() => handlePageChange('Work')}
          className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}>Work</Navbar.Brand>
        
        <Navbar.Brand href="#contact" onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</Navbar.Brand>
        
        <Navbar.Brand href="#contact" onClick={() => handlePageChange('CV')}
          className={currentPage === 'CV' ? 'nav-link active' : 'nav-link'}>Resume</Navbar.Brand>

      </Navbar.Collapse>
      </Navbar>
  );
}

export default NavTabs;