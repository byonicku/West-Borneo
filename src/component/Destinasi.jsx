import { Card, Col, Container, Row } from "react-bootstrap";

export default function Destinasi() {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={8}>
          <div className="opening-text w3-animate-left">
            <Card className="bg-transparent border-0 text-white">
              <Card.Body>
                <Card.Title>
                  <h1>
                    <strong>Destinasi Wisata</strong>
                  </h1>
                </Card.Title>
                <Card.Text>
                  Berikut adalah beberapa
                    destinasi wisata yang menarik di Indonesia.
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </Col>
        </Row>
    </Container>
  );
}
