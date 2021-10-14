import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


const styles = {
  formLabel: {
    color: '#03071E',
    fontSize: '1.1em',
    fontWeight: 'bold',
    margin: '10px 0px 10px',
  },
  formWrapper: {
    marginTop: '60px',
    display: 'flex',
    justifyContent: 'center',
  }

};

export default function Contact() {
  return (
    
   <Container style={styles.formWrapper}>
     <div style={{ display: 'block', 
                  width: 700, 
      padding: 30,
    }}>
      <h4>Get in touch! Leave a message.</h4>
      <br />
 
      <Form>
      <Form.Group>
          <Form.Label style={styles.formLabel}>Enter your full name:</Form.Label>
          <Form.Control type="text" 
            placeholder="Enter your full name"
            required="required"/>
        </Form.Group>
        <Form.Group>
          <Form.Label style={styles.formLabel}>Enter your email address:</Form.Label>
          <Form.Control type="email" 
            placeholder="Enter your your email address"
            required="required"/>
        </Form.Group>
        <Form.Group>
          <Form.Label style={styles.formLabel}>Enter your message:</Form.Label>
          <Form.Control type="text" placeholder="Enter your message"
           required="required"/>
        </Form.Group>
        <br/>
        <Button style={{backgroundColor:'#03071E', border: 'none'}}variant="primary" type="submit">
           Click here to submit form
        </Button>
        </Form>
     
      </div>
      </Container>
  );
}

