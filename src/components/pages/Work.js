import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import '../../styles/section.css';



export default function Blog() {
  return (
    <div>
 <Container >
      <Row>
        <Col className="codingskills" sm>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/01/01/01/56/yoga-3053488_960_720.jpg" />
  <Card.Body>
    <Card.Title>BeeStrong: Fitness App</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
</Card>
       </Col>
        <Col className="codingskills" sm>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/12/29/19/37/food-3048440_960_720.jpg" />
  <Card.Body>
    <Card.Title>ChopNChange: Recipe App</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
</Card>
    </Col>
        <Col className="codingskills" sm>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2019/01/17/19/11/registration-3938434_960_720.jpg" />
  <Card.Body>
    <Card.Title>Password Generator</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
</Card>
        </Col>
        
      </Row>
      
        
      <Row>
        <Col className="codingskills" sm>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1625813948790-936f256faea8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" />
  <Card.Body>
    <Card.Title>Note Taker</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
</Card>
       </Col>
        <Col className="codingskills" sm>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVkZ2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title>Budget Tracker</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
</Card>
    </Col>
        <Col className="codingskills" sm>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1576004275013-8dd7cfe3aaf2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBsYW5uZXIlMjBtb2JpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title>Day Scheduler</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
</Card>
        </Col>
        
      </Row>
      

     
  </Container>

      
    </div>
  );
}
