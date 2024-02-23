import { Card, Col, Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={8}>
          <div className="opening-text w3-animate-left">
            <Card className="bg-transparent border-0 text-white">
              <Card.Body>
                <Card.Title>
                  <h1>
                    <strong>Tentang Kami</strong>
                  </h1>
                </Card.Title>
                <Card.Text>
                  Pesona Indonesia adalah aplikasi yang membantu Anda untuk
                  menemukan tempat-tempat wisata yang menarik di Indonesia.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
