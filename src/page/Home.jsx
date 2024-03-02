import {
  Container,
  Carousel,
  Row,
  Col,
  InputGroup,
  Button,
} from "react-bootstrap";
import "./Home.css";
import { Card } from "react-bootstrap";

import "../dummy/DataDestinasi.js";
import destinations from "../dummy/DataDestinasi.js";
import foods from "../dummy/DataMakanan.js";
import ReactOwlCarousel from "react-owl-carousel";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useEffect } from "react";
import Aos from "aos";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 1000});
  }, []);

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

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    toast.success("Pesan berhasil terkirim!");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pesan").value = "";
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
              }}
            >
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
                <h2 className="daftar" data-aos="fade-up" >Explorasi Tempat Wisata</h2>
                <Carousel data-aos="fade-up">
                  {destinations.map((destination) => {
                    return (
                      <Carousel.Item
                        key={destination.id}
                        onClick={() => {
                          scrollToTop();
                          navigate(`/destinasi/${destination.slug}`);
                        }}
                      >
                        <div style={{ position: "relative" }}>
                          <img
                            className="d-block w-100"
                            src={destination.image.thumbnail}
                            alt={destination.name}
                            style={{
                              cursor: "pointer",
                              height: "500px",
                              objectFit: "cover",
                              transition: "filter 0.3s ease-in-out", 
                            }}
                            // Apply the filter on hover
                            onMouseOver={(e) =>
                              (e.currentTarget.style.filter = "brightness(70%)")
                            }
                            // Reset the filter on mouse leave
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.filter =
                                "brightness(100%)")
                            }
                          />
                          <div className="hover-carousel-effect" />
                        </div>
                        <Carousel.Caption
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            borderRadius: "10px",
                          }}
                          className="daftar-text"
                        >
                          <h3 style={{ fontWeight: "bold" }}>
                            {destination.name}
                          </h3>
                          <p>{destination.description}</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
            <h2 className="daftar mt-5" data-aos="fade-right">
              Explorasi Makanan Khas Kalimantan Barat
            </h2>
            <div data-aos="fade-right">
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
                        }}
                      >
                        {food.name}
                      </Card.Title>
                      <Card.Text
                        style={{
                          fontSize: "0.8em",
                          padding: 0,
                          margin: 0,
                          textAlign: "justify",
                          textJustify: "inter-word",
                        }}
                      >
                        {food.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </ReactOwlCarousel>
            </div>
            
            <h2 className="text-white mt-5 text-start apa-kata-mereka-header" data-aos="fade-left">
              Apa Kata Mereka ?
            </h2>
            <div className="d-flex" style={{ gap: "0.8em" }} data-aos="fade-left">
              <img src="https://placehold.co/320x240" className="rounded"></img>
              <Card className="w-100">
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <p
                    style={{
                      textAlign: "justify",
                      textJustify: "inter-word",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur iaculis sodales placerat. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Curabitur iaculis sodales
                    placerat.
                  </p>
                </Card.Body>
              </Card>
            </div>
          </Container>
          <Container data-aos="zoom-in">
            <h2 className="mb-3 kritik-saran-header text-white">
              Kami Terima Kritik & Saran Anda
            </h2>
            <p className="kritik-saran-text text-white">
              Berikan kritik dan saran Anda untuk membantu kami menjadi lebih
              baik
            </p>
            <div className="kritik-saran-text">
              <InputGroup className="mb-3 w-100">
                <InputGroup.Text id="namaGroup">Nama</InputGroup.Text>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Masukkan nama Anda"
                  aria-label="Nama"
                  aria-describedby="basic-addon1"
                  
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="emailGroup">Email</InputGroup.Text>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Masukkan email Anda"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  
                />
              </InputGroup>
              <InputGroup className="mb-3 w-100">
                <InputGroup.Text id="pesanGroup">Pesan</InputGroup.Text>
                <textarea
                  className="form-control"
                  id="pesan"
                  placeholder="Masukkan pesan Anda"
                  aria-label="Pesan"
                  aria-describedby="basic-addon1"
                  
                />
              </InputGroup>
              <div className="d-flex justify-content-center">
                <Button variant="secondary" onClick={handleFormSubmit}>
                  Kirim
                </Button>
              </div>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
