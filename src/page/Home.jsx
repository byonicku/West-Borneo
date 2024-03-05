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
    Aos.init({ duration: 1000 });
  }, []);

  const options = {
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoWidth: true,
    center: true,
    pullDrag: true,
    animateIn: true,
    lazyLoad: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 750,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      280: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        nav: false,
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
          <Container className="d-flex flex-column my-5" fluid>
            <h2 className="daftar" data-aos="fade-up">
              Explorasi Tempat Wisata
            </h2>
            <Carousel data-aos="fade-up">
              {destinations.slice(0, 5).map((destination) => {
                return (
                  <Carousel.Item
                    key={destination.id}
                    onClick={() => {
                      scrollToTop();
                      navigate(`/destinasi/${destination.slug}`);
                    }}
                  >
                    <div>
                      <img
                        className="d-block w-100"
                        src={destination.image.thumbnail}
                        alt={destination.name}
                        style={{
                          cursor: "pointer",
                          objectFit: "cover",
                          transition: "filter 0.3s ease-in-out",
                          aspectRatio: "16/9",
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
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        borderRadius: "10px",
                      }}
                    >
                      <h3
                        style={{ fontWeight: "bold" }}
                        className="daftar-text"
                      >
                        {destination.name}
                      </h3>
                      <p className="daftar-text-desc">
                        {destination.description}
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
            <h2 className="daftar mt-5 mb-3" data-aos="fade-right">
              Explorasi Makanan Khas
            </h2>
            <div data-aos="fade-right">
              <ReactOwlCarousel className="owl-theme" {...options}>
                {foods.map((food, index) => (
                  <div
                    className="card-flyer h-100"
                    key={index}
                    style={{ width: "18rem" }}
                  >
                    <div className="text-box">
                      <div className="image-box">
                        <img src={food.image} alt="" style={{ aspectRatio: "4/3", objectFit:"cover" }} />
                      </div>
                      <div className="text-container">
                        <h6>{food.name}</h6>
                        <p>{food.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </ReactOwlCarousel>
            </div>

            <h2
              className="text-white mt-5 text-start apa-kata-mereka-header"
              data-aos="fade-left"
            >
              Apa Kata Mereka?
            </h2>
            <Row>
              <Col sm={12} md={6}>
                <img
                  src="/pulau.webp"
                  className="apa-kata-image w-100 h-100"
                  data-aos="fade-left"
                  style={{
                    objectFit: "cover",
                  }}
                ></img>
              </Col>
              <Col sm={12} md={6}>
                <div style={{ gap: "0.8rem" }} data-aos="fade-left">
                  <Card className="bg-transparent border-0 text-white">
                    <Card.Header
                      className="bg-transparent border-0 apa-kata-mereka-header px-0 py-0"
                      style={{ fontSize: "1.4rem", fontWeight: "500" }}
                    >
                      Kalimantan Barat? Sangat Memukau!
                    </Card.Header>
                    <Card.Body className="px-0 py-0">
                      <p className="apa-kata-mereka-text" style={{ 
                          textAlign: "justify",
                          textJustify: "inter-word",
                       }}>
                        Kalimantan Barat di Indonesia memukau dengan keindahan
                        alamnya, keberagaman budayanya, dan keramahan
                        penduduknya. Dari hutan-hutan yang hijau hingga
                        sungai-sungai yang mempesona, setiap sudutnya
                        menyiratkan keajaiban yang menghipnotis hati.
                      </p>
                    </Card.Body>
                    <Card.Footer className="bg-transparent hrs-kiri border-0 px-0 py-0 apa-kata-mereka-footer">
                      - Traveler, 2024
                    </Card.Footer>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
          <Container data-aos="zoom-in" className="">
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
