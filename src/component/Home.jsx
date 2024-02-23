import { Container, Carousel, Row, Col } from "react-bootstrap";
import "./Home.css";
import { Card } from "react-bootstrap";
export default function Home() {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center opening-bg">
        <Col xs={12} md={8}>
          <div className="opening-text w3-animate-left">
            <Card className="bg-transparent border-0 text-white">
              <Card.Body>
                <Card.Title>
                  <strong>Welcome to Indonesia!</strong>
                </Card.Title>
                <Card.Text>
                  Selamat datang di Pesona Indonesia. Kami akan membantu Anda
                  untuk menemukan tempat-tempat wisata yang menarik di
                  Indonesia.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={8}>
          <Container className="d-flex flex-column my-5">
            <h2>Daftar Tempat Wisata</h2>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/800x400?text=Borobudur"
                  alt="Borobudur"
                />
                <Carousel.Caption>
                  <h3>Borobudur</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/800x400?text=Pulau+Komodo"
                  alt="Pulau Komodo"
                />
                <Carousel.Caption>
                  <h3>Pulau Komodo</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/800x400?text=Taman+Mini+Indonesia+Indah"
                  alt="Taman Mini Indonesia Indah"
                />
                <Carousel.Caption>
                  <h3>Taman Mini Indonesia Indah</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/800x400?text=Pulau+Bali"
                  alt="Pulau Bali"
                />
                <Carousel.Caption>
                  <h3>Pulau Bali</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

            <h2>Daftar Makanan Khas</h2>
            {/* Add Carousel for Makanan Khas */}
            <h2>Daftar Event</h2>
            {/* Add Carousel for Event */}
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
