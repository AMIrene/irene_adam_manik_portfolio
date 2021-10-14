import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/section.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const styles = {
  wrapper: {
   
    color: '#03071E',
    fontSize: '1.3em',
    backgroundColor: '#E5989B',
    borderRadius: '10px',
    marginTop: '50px',
    marginBottom: '200px',
    padding: '20px',
       
  },


};




export default function About() {
  return (
    <Container style={styles.wrapper}>
     
          <Row>
        <Col className="codingskills" sm>
          <p> A budding web developer with a strong interest in <strong>creating user-friendly web applications</strong>.
            I currently work as a project coordinator for a social research company in the monitoring and evaluation space.
            I am new to coding and learning <strong>HTML, CSS and JavaScript as well as MERN Stack </strong>.
            The thrill of discovery when you figure out a solution to a problem keeps me motivated.
            <br />
            <br/>
            However, what I truly love is the design process and the creative aspect. My first foray into web development and UX/UI design was in my previous role, where I coordinated the upgrade of a data visualisation tool for a major census in Australia.
            My aim now is to be able to apply the skills gained through the Monash Bootcamp course and develop user-driven apps to support data collection and create engaging data visualisations.</p>
        </Col>
    
      </Row>
  </Container>
  );
}
