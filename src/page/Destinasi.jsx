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
import { toast } from "sonner";
import FilterButton from "../component/FilterButton.jsx";
import PropTypes from "prop-types";

Destinasi.propTypes = {
  tags: PropTypes.string,
};

export default function Destinasi(props) {
  const { tags } = props;

  const [destinationFilter, setDestinationFilter] = useState(destinations);
  const [selectedTags, setSelectedTags] = useState("");
  const [inputValue, setinputValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setDestinationFilter(destinations);
    setTimeout(() => {
      setLoading(false);
    }, 1750);

    if (tags) {
      setSelectedTags(tags);
    }
  }, [tags]);

  const searchDestination = (value) => {
    const filtered = destinations.filter((destination) => {
      return (
        destination.name.toLowerCase().includes(value.toLowerCase()) &&
        (selectedTags === "" ||
          destination.tags.includes(selectedTags.toLowerCase()))
      );
    });
    setDestinationFilter(filtered);
  };

  const handleInputChange = (event) => {
    setinputValue(event.target.value);
    setLoading(true);
    if (timeoutId) clearTimeout(timeoutId);
    setTimeoutId(
      setTimeout(() => {
        searchDestination(event.target.value);
        setLoading(false);
      }, 1750)
    );
  };

  const filterByTags = (tags) => {
    if (tags === selectedTags) return;

    setLoading(true);
    setinputValue("");
    setSelectedTags(tags);

    if (timeoutId) clearTimeout(timeoutId);
    setTimeoutId(
      setTimeout(() => {
        setDestinationFilter(
          destinations.filter((destination) => {
            return tags === "" || destination.tags.includes(tags);
          })
        );
        setLoading(false);
      }, 1750)
    );
  };

  const searchButton = () => {
    if (inputValue === "") {
      toast.error("Masukkan kata kunci pencarian!");
      return;
    }

    setLoading(true);
    if (timeoutId) clearTimeout(timeoutId);
    setTimeoutId(
      setTimeout(() => {
        searchDestination(inputValue);
        setLoading(false);
      }, 1750)
    );
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
                <InputGroup className="mb-1">
                  <Form.Control
                    placeholder="Cari Destinasi"
                    aria-label="Cari Destinasi"
                    id="search-input"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  <Button
                    variant="secondary"
                    className="search-button"
                    onClick={() => searchButton()}
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Button>
                </InputGroup>
                <Col md={12} lg={6} className="text-start">
                  <FilterButton
                    currentTags={selectedTags}
                    selectedTags={""}
                    filterByTags={filterByTags}
                    text={"Semua"}
                  />
                  <FilterButton
                    currentTags={selectedTags}
                    selectedTags={"pantai"}
                    filterByTags={filterByTags}
                    text={"Pantai"}
                  />
                  <FilterButton
                    currentTags={selectedTags}
                    selectedTags={"religius"}
                    filterByTags={filterByTags}
                    text={"Religius"}
                  />
                  <FilterButton
                    currentTags={selectedTags}
                    selectedTags={"example"}
                    filterByTags={filterByTags}
                    text={"Example"}
                  />
                </Col>
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
                <Col
                  lg={4}
                  md={12}
                  key={destination.id}
                  className="container_foto"
                  onClick={() => {
                    goToDetail(`${destination.slug}`);
                  }}
                >
                  <img src={destination.image.thumbnail} alt="" />
                  <article
                    className="text-left"
                    style={{ position: "inherit" }}
                  >
                    <h2>{destination.name}</h2>
                    <h4>{destination.description}</h4>
                  </article>
                </Col>
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
