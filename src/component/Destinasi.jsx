import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import "./Destinasi.css";
import destinations from "../assets/DataDestinasi.jsx";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Destinasi() {
  const [destinationFilter, setDestinationFilter] = useState(destinations);
  const [inputValue, setinputValue] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setDestinationFilter(destinations);
    setTimeout(() => {
      setLoading(false);
    }, 500);
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
    }, 750);
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
                    onClick={() => searchDestination(inputValue)}
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Button>
                </InputGroup>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
      <Container>
        {!loading ? (
          <Row className="justify-content-center">
            {
              destinationFilter.length > 0 ? (
            destinationFilter.map((destination) => (
              <Col
                key={destination.id}
                xs={12}
                md={4}
                className="pb-3 w3-animate-bottom"
              >
                <Card>
                  <Card.Img
                    variant="top"
                    src={destination.image}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body
                    style={{
                      backgroundColor: "rgba(203, 203, 203, 1)",
                    }}
                  >
                    <Card.Title className="destinasi-head-text">
                      {destination.name}
                    </Card.Title>
                    <Card.Text className="destinasi-desc-text">
                      {destination.description}
                    </Card.Text>
                    {/* Tamabahin tombol detail yes */}
                  </Card.Body>
                </Card>
              </Col>
            ))) : (
              <h1 className="text-white text-center w3-animate-zoom">404 Not Found</h1>
            )}
          </Row>
        ) : (
          <div className="d-flex justify-content-center w3-animate-opacity">
            <Spinner variant="light" animation="border" size="xl"/>
          </div>
        )}
      </Container>
    </Container>
  );
}
