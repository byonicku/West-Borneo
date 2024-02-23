import { Container, Carousel } from "react-bootstrap";
import './Home.css';

export default function Home() {
  return (
    <Container className="d-flex flex-column my-5">
      <div className="opening-text">
        <h1><strong>Welcome to Indonesia!</strong></h1>
        <p>
          Selamat datang di Pesona Indonesia. Kami akan membantu Anda untuk
          menemukan tempat-tempat wisata yang menarik di Indonesia.
        </p>
      </div>

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
  );
}
