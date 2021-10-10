import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/section.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';





export default function About() {
  return (
    <Container className="skills d-flex justify-content-center">
      <Row>
      <Col className="codingskills" sm>HTML</Col>
    <Col className="codingskills" sm>CSS</Col>
    <Col className="codingskills" sm>JavaScript</Col>
    </Row>
  </Container>
  );
}
