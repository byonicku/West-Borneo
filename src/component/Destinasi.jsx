import { Card, Col, Container, Row } from "react-bootstrap";
import './Destinasi.css'; // Import your custom CSS if needed
import destinations from '../assets/DataDestinasi.jsx'; // Import your destinations data

export default function Destinasi() {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={8}>
          <div className="destinasi-text w3-animate-top">
            <Card className="bg-transparent border-0 text-white">
              <Card.Body>
                <Card.Title>
                  <h1>
                    <strong>Destinasi Wisata</strong>
                  </h1>
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
      <Container>
      <Row className="justify-content-center">        
          {destinations.map(destination => (
            <Col key={destination.id} xs={12} md={4} className="pb-3 w3-animate-bottom">
              <Card>
                <Card.Img variant="top" src={destination.image} style={{ 
                  height: "200px", 
                  objectFit: "cover"
                 }}/>
                <Card.Body className="destinasi-desc-text" style={{ 
                  backgroundColor: "rgba(203, 203, 203, 1)"
                 }}>
                  <Card.Title>{destination.name}</Card.Title>
                  <Card.Text>{destination.description}</Card.Text>
                  <Card.Text>{destination.location}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      </Container>
      
    </Container>
  );
}
