import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/section.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';


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
  codingskills: {
    backgroundColor: '#03071E',
    color: 'white',
    justifyContent: 'center',
    borderRadius: '1em',
    padding: '10px',
    marginTop: '15px',
    marginBottom: '60px',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: '1.5em',
    marginBottom: '5px',

  },
  resume: {
    backgroundColor: '#03071E',
    color: 'white',
    justifyContent: 'center',
    borderRadius: '1em',
    padding: '10px',
    margin: '50px',
  
    textDecoration: 'none',

  }

};

export default function CV() {
  return (
    <div>
      
      <Container style={styles.wrapper}>
      
        <h2 style={styles.heading}>Skills</h2>
        <Row>
          
          <Col  sm>
            <div style={styles.codingskills} className="text-center">
       HTML <div><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> </div>
       </div>
       </Col>
          <Col  sm>
            <div style={styles.codingskills} className="text-center">
        CSS <div><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> </div>
        </div>
    </Col>
          <Col sm>
            <div style={styles.codingskills} className="text-center">
       Javascript <div><FaStar/> <FaStar/> <FaStar/>  </div> 
       </div>
          </Col>
          <Col sm>
            <div style={styles.codingskills} className="text-center">
       MERN <div><FaStar/> <FaStar/> <FaStar/>  </div>
       </div>
        </Col>
        
      </Row>
      
      <Button href = "https://drive.google.com/file/d/1NDnsX6YbbmL3mQOdK3uX9EHeiRnjM3Nq/view?usp=sharing"style={{backgroundColor:'#03071E', border: 'none'}} className="btn btn-primary btn-lg btn-block"variant="primary" type="submit">
          Download my resume
        </Button>
          
      


      
  </Container>
    </div>
  );
}
