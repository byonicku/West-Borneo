import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import destinations from "../dummy/DataDestinasi";
import "./DetailDestinasi.css";
import { IoLocation } from "react-icons/io5";
import ImageGallery from "react-image-gallery";
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

export const DetailDestinasi = () => {
  const { slug } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

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

  useEffect(() => {
    const foundDestination = destinations.find(
      (destination) => destination.slug === slug
    );
    setDestination(foundDestination);
    setImages([...images, foundDestination.image]);
    setImages([...images, ...foundDestination.galery]);

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
                  style={{ fontWeight: "bold", fontSize: "1.24em" }}>
                  {destination.name}
                </Card.Header>
                {/* <div className="img-square-wrapper pt-2">
                  <img
                    className=""
                    src={destination.image.thumbnail}
                    alt="Card image cap"
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      aspectRatio: "16/9",
                    }}
                  />
                </div> */}
                <ImageGallery thumbnailPosition="right" items={images} />
                <div className="card-horizontal">
                  <Card.Body className="card-body pt-0 px-0">
                    <p className="py-3 mb-0">
                      <IoLocation className="mb-1" /> {destination.location}
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
            <div className="d-flex justify-content-center w3-animate-opacity">
              <iframe
                width="100%"
                height="300"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                <a href="https://www.gps.ie/">gps devices</a>
              </iframe>
            </div>
            {/* <ReactOwlCarousel className="owl-theme py-3" {...options}>
              {destination.galery.map((img, index) => (
                <div key={index} className="item">
                    <img
                      src={img}
                      style={{
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                </div>
              ))}
            </ReactOwlCarousel> */}
          </Col>
        </Row>
      ) : (
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
      )}
    </Container>
  );
};

export default DetailDestinasi;
