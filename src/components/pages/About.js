import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/section.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';






export default function About() {
  return (
    <Container >
      <Row>
        <Col className="codingskills" sm>
       HTML
       </Col>
        <Col className="codingskills" sm>
        CSS
    </Col>
        <Col className="codingskills" sm>
       Javascript
        </Col>
        
      </Row>
      

      <Row>
        <Col className="codingskills" sm>
          <p> A budding web developer with a strong interest in creating user-friendly web applications. I currently work as a project coordinator for a social research company in the monitoring and evaluation space. I am new to coding and learning HTML, CSS and JavaScript. The thrill of discovery when you figure out a solution to a problem keeps me motivated. However, what I truly love is the design process and the creative aspect. My first foray into web development and UX/UI design was in my previous role, where I coordinated the upgrade of a data visualisation tool for a major census in Australia. My aim now is to be able to apply the skills gained through the Monash Bootcamp course and develop user-driven apps to support data collection and create engaging data visualisations.</p>
        </Col>
    
      </Row>
  </Container>
  );
}
