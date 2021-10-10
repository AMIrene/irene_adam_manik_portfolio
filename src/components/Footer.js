import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';


const styles = {
    footer: {
        position: 'fixed',
        padding: '10px 10px 0px 10px',
        bottom: '0',
        background: "#03071E",
        width: '100%',
       
        /* Height of the footer*/
        minHeight: 40,
       

    },

    nav: {
    color: 'white',
        
    },
           
};

function Footer() {
    return (
        // <section style={styles.footer}>
        //     <h1>Footer</h1>
        // </section>
  <Nav style={styles.footer} defaultActiveKey="/home" className="flex-column">
            <Nav.Link style={styles.nav} href="mailto: irene.webdev@gmail.com" target="_blank">Email</Nav.Link>
            
  <Nav.Link style={styles.nav} href="https://www.linkedin.com/in/irene-adam-manik-978a3750"  target="_blank">LinkedIn</Nav.Link>
  <Nav.Link style={styles.nav} href="https://github.com/AMIrene" target="_blank">Github</Nav.Link>
  
  </Nav>

        
    )
}

export default Footer;