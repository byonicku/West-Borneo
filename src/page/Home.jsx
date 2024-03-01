import { Container, Carousel, Row, Col } from "react-bootstrap";
import "./Home.css";
import { Card } from "react-bootstrap";

import "../dummy/DataDestinasi.js";
import destinations from "../dummy/DataDestinasi.js";
import foods from "../dummy/DataMakanan.js";
import ReactOwlCarousel from "react-owl-carousel";

export default function Home() {
  const options = {
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        nav: false,
        loop: true,
      },
    },
  };

  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center opening-bg">
        <Col xs={12} md={8}>
          <div className="opening-text w3-animate-left">
            <Card
              className="text-white border-0"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              }}>
              <Card.Body>
                <Card.Title>
                  <h1>
                    <strong>Welcome to West Kalimantan!</strong>
                  </h1>
                </Card.Title>
                <Card.Text>
                  Selamat datang! Kami akan membantu Anda untuk menemukan
                  tempat-tempat wisata yang menarik di Kalimantan.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={8}>
          <Container className="d-flex flex-column my-5">
            <h2 className="daftar">Daftar Tempat Wisata</h2>
            <Carousel>
              {destinations.map((destination) => {
                return (
                  <Carousel.Item key={destination.id}>
                    <img
                      className="d-block w-100"
                      src={destination.image.thumbnail}
                      alt={destination.name}
                      style={{
                        height: "500px",
                        objectFit: "cover",
                      }}
                    />
                    <Carousel.Caption
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        borderRadius: "10px",
                      }}
                      className="daftar-text">
                      <h3 style={{ fontWeight: "bold" }}>{destination.name}</h3>
                      <p>{destination.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>

            <h2 className="daftar mt-5">Daftar Makanan Khas</h2>
            <ReactOwlCarousel className="owl-theme" {...options}>
              {foods.map((food, index) => (
                <div key={index} className="item">
                  <Card style={{ width: "18rem", height: "20rem" }}>
                    <Card.Img
                      variant="top"
                      src={food.image}
                      style={{
                        height: "110px",
                        objectFit: "cover",
                      }}
                    />
                    <Card.Body className="food-text">
                      <Card.Title
                        style={{
                          fontWeight: "bold",
                          fontSize: "1em",
                          display: "flex",
                          justifyContent: "center",
                        }}>
                        {food.name}
                      </Card.Title>
                      <Card.Text
                        style={{ fontSize: "0.8em", padding: 0, margin: 0 }}>
                        {food.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </ReactOwlCarousel>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
