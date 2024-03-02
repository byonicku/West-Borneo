import { Container, Carousel, Row, Col } from "react-bootstrap";
import "./Home.css";
import { Card } from "react-bootstrap";

import "../dummy/DataDestinasi.js";
import destinations from "../dummy/DataDestinasi.js";
import foods from "../dummy/DataMakanan.js";
import ReactOwlCarousel from "react-owl-carousel";
import { useNavigate } from "react-router-dom";
import FoodCard from "../component/card/FoodCard";

export default function Home() {
  const navigate = useNavigate();
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
            <h2 className="daftar">Explorasi Tempat Wisata</h2>
            <Carousel>
              {destinations.map((destination) => {
                return (
                  <Carousel.Item
                    key={destination.id}
                    onClick={() => {
                      navigate(`/destinasi/${destination.slug}`);
                    }}>
                    <div style={{ position: "relative" }}>
                      <img
                        className="d-block w-100"
                        src={destination.image.thumbnail}
                        alt={destination.name}
                        style={{
                          cursor: "pointer",
                          height: "500px",
                          objectFit: "cover",
                          transition: "filter 0.3s ease-in-out", // Add a smooth transition
                        }}
                        // Apply the filter on hover
                        onMouseOver={(e) =>
                          (e.currentTarget.style.filter = "brightness(70%)")
                        }
                        // Reset the filter on mouse leave
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.filter = "brightness(100%)")
                        }
                      />
                      <div className="hover-carousel-effect" />
                    </div>
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

            <h2 className="daftar mt-5">
              Explorasi Makanan Khas Kalimantan Barat
            </h2>
            {/* CARD NYA SINI DLU YAK :V
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
                        style={{
                          fontSize: "0.8em",
                          padding: 0,
                          margin: 0,
                          textAlign: "justify",
                          textJustify: "inter-word",
                        }}>
                        {food.description}
                      </Card.Text>
                    </Card.Body>
                  </Card> */}
            <ReactOwlCarousel className="owl-theme h-100" {...options}>
              {foods.map((food, index) => (
                <div
                  class="card-flyer h-100"
                  key={index}
                  style={{ width: "18rem" }}>
                  <div class="text-box">
                    <div class="image-box">
                      <img src={food.image} alt="" />
                    </div>
                    <div class="text-container h-100">
                      <h6>{food.name}</h6>
                      <p>{food.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </ReactOwlCarousel>

            <h2 className="text-white mt-5 text-start apa-kata-mereka-header">
              Apa Kata Mereka ?
            </h2>
            <div className="d-flex" style={{ gap: "0.8em" }}>
              <img src="https://placehold.co/320x240" className="rounded"></img>
              <Card className="w-100">
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <p
                    style={{
                      textAlign: "justify",
                      textJustify: "inter-word",
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur iaculis sodales placerat. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Curabitur iaculis sodales
                    placerat.
                  </p>
                </Card.Body>
              </Card>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
