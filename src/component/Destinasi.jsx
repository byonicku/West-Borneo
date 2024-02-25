import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import "./Destinasi.css"; // Import your custom CSS if needed
import destinations from "../assets/DataDestinasi.jsx"; // Import your destinations data
import { useState } from "react";

export default function Destinasi() {
  const [inputValue, setinputValue] = useState("");
  const handleInputChange = (event) => {
    setinputValue(event.target.value);
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
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Cari Destinasi"
                    aria-label="Cari Destinasi"
                    aria-describedby="basic-addon2"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  <Button
                    variant="secondary"
                    className="search-button"
                    id="button-addon2">
                    cari
                  </Button>
                </InputGroup>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
      <Container>
        <Row className="justify-content-center">
          {destinations.map((destination) => (
            <Col
              key={destination.id}
              xs={12}
              md={4}
              className="pb-3 w3-animate-bottom">
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
                  }}>
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
          ))}
        </Row>
      </Container>
    </Container>
  );
}
