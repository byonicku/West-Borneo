import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import "./Destinasi.css";
import "../animation/loadingAnimation.css";
import destinations from "../dummy/DataDestinasi.js";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

export default function Destinasi() {
  const [destinationFilter, setDestinationFilter] = useState(destinations);
  const [inputValue, setinputValue] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setDestinationFilter(destinations);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  function searchDestination(value) {
    const filtered = destinations.filter((destination) => {
      return destination.name.toLowerCase().includes(value.toLowerCase());
    });
    setDestinationFilter(filtered);
  }

  const handleInputChange = (event) => {
    setinputValue(event.target.value);
    setLoading(true);
    setTimeout(() => {
      searchDestination(event.target.value);
      setLoading(false);
    }, 1750);
  };

  const goToDetail = (slug) => {
    navigate(slug);
  };

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
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Cari Destinasi"
                    aria-label="Cari Destinasi"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  <Button
                    variant="secondary"
                    className="search-button"
                    onClick={() => searchDestination(inputValue)}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Button>
                </InputGroup>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
      <Container className="contenedor text-center">
        {!loading ? (
          <Row className="justify-content-center">
            {destinationFilter.length > 0 ? (
              destinationFilter.map((destination) => (
                <div
                  key={destination.id}
                  className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto"
                  onClick={() => {
                    goToDetail(`${destination.slug}`);
                  }}>
                  <img src={destination.image.thumbnail} alt="" />
                  <article
                    className="text-left"
                    style={{ position: "inherit", paddingBottom: 0 }}>
                    <h2>{destination.name}</h2>
                    <h4>{destination.description}</h4>
                  </article>
                </div>
              ))
            ) : (
              <h1 className="text-white text-center w3-animate-zoom">
                404 Not Found
              </h1>
            )}
          </Row>
        ) : (
          <div className="d-flex justify-content-center w3-animate-opacity">
            <div className="loadingio-spinner-ellipsis-qssv9kk26qh">
              <div className="ldio-2iup310a73y">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Container>
  );
}
