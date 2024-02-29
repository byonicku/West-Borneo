import { Card, Col, Container, Row } from "react-bootstrap";
import './About.css';

export default function About() {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={8}>
          <div className="w3-animate-zoom about-text">
            <Card className="bg-transparent border-0 text-white">
              <Card.Body>
                <Card.Title>
                  <h1>
                    <strong>Tentang Kami ...</strong>
                  </h1>
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus rerum ullam perspiciatis consequatur facilis hic minus quidem vel molestiae, est ipsum dignissimos, corporis asperiores optio officia sed aspernatur odit reiciendis!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
