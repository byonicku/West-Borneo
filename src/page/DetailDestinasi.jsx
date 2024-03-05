import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import destinations from "../dummy/DataDestinasi";
import "./DetailDestinasi.css";
import { IoLocation, IoTime } from "react-icons/io5";
import ImageGallery from "react-image-gallery";
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

export const DetailDestinasi = () => {
  const { slug } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const foundDestination = destinations.find(
      (destination) => destination.slug === slug
    );
    setDestination(foundDestination);
    setImages([foundDestination.image, ...foundDestination.galery]);

    setTimeout(() => {
      setLoading(false);
    }, 1250);
  }, [slug]);

  if (!destination) {
    return <p>Loading...</p>;
  }

  return (
    <Container fluid>
      {!loading ? (
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={8}>
            <div className="w3-animate-zoom destination-desc">
              <Card className="card bg-transparent border-0 text-white">
                <Card.Header
                  className="card-header text-start bg-transparent border-0 ps-0"
                  style={{ fontWeight: "bold", fontSize: "1.6rem" }}>
                  {destination.name}
                </Card.Header>
                <ImageGallery
                  thumbnailPosition="right"
                  items={images}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  slideDuration={500}
                  slideInterval={5000}
                  autoPlay={true}
                  showNav={false}
                  loading="eager"
                />
                <div className="card-horizontal">
                  <Card.Body className="card-body pt-0 px-0">
                    <p className="py-2 mb-0">
                      <IoLocation className="mb-1" /> {destination.location} |{" "}
                      <IoTime className="mb-1" /> {destination.openingHours}
                    </p>
                    <p
                      className="card-text"
                      style={{
                        textAlign: "justify",
                        textJustify: "inter-word",
                      }}>
                      {destination.information}
                    </p>
                  </Card.Body>
                </div>
              </Card>
            </div>
            <div className="d-flex justify-content-center w3-animate-opacity mb-3">
              <iframe width="100%" height="300" src={destination.maps}>
                <a href="https://www.gps.ie/">gps devices</a>
              </iframe>
            </div>
          </Col>
        </Row>
      ) : (
        <>
          <div
            className="d-flex justify-content-center w3-animate-opacity"
            style={{ paddingTop: "100px" }}>
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
          <div style={{ height: "1000px" }}></div>
        </>
      )}
      <div style={{ height:'10vh' }}></div>
    </Container>
  );
};

export default DetailDestinasi;
