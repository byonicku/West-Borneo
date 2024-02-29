import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import destinations from "../assets/DataDestinasi";
import "./DetailDestinasi.css";
import { IoLocation } from "react-icons/io5";

export const DetailDestinasi = () => {
  const { slug } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    const foundDestination = destinations.find(
      (destination) => destination.slug === slug
    );
    setDestination(foundDestination);
  }, [slug]);

  if (!destination) {
    // Render loading state or handle the case when the destination is not found
    return <p>Loading...</p>;
  }

  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={8}>
          <div className="w3-animate-zoom destination-desc">
            <Card className="card bg-transparent border-0 text-white">
              <Card.Header
                className="card-header text-start bg-transparent border-0 ps-0"
                style={{ fontWeight: "bold", fontSize: "1.24em" }}>
                {destination.name}
              </Card.Header>
              <div className="card-horizontal">
                <div className="img-square-wrapper pt-2">
                  <img
                    className=""
                    src={destination.image}
                    alt="Card image cap"
                    style={{
                      height: "376px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <Card.Body className="card-body pt-0">
                  <p className="text-start mb-0">
                    <IoLocation className="mb-1" /> {destination.location}
                  </p>
                  <p
                    className="card-text"
                    style={{ textAlign: "justify", textJustify: "inter-word" }}>
                    {destination.information}
                  </p>
                </Card.Body>
              </div>
            </Card>
          </div>
        </Col>
        <Col xs={12} md={8}>
          <Container fluid>
            <iframe
              width="100%"
              height="600"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              <a href="https://www.gps.ie/">gps devices</a>
            </iframe>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailDestinasi;
