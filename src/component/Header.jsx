import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./Header.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const navigate = useNavigate();
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const moving = (link) => {
    scrollToTop();
    navigate(link);
    setExpanded(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, [scrolled]);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className={`${scrolled ? "scrolled-navbar" : "unscrolled-navbar"}`}
    >
      <Container>
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onClick={() => scrollToTop()}
        >
          <div className="logo">
            <img
              src="../logo.png"
              alt="logo"
              height="80px"
              onClick={() => moving("/")}
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarNavDropdown"
          className="border-white"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="navbar-toggler-icon navbar-dark" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav
            className={
              scrolled
                ? "scrolled-header-content ms-auto"
                : "header-content ms-auto"
            }
          >
            <Button
              onClick={() => moving("/")}
              className="nav-link"
              variant="none"
            >
              Beranda
            </Button>
            <Button
              onClick={() => moving("/about")}
              className="nav-link"
              variant="none"
            >
              Tentang
            </Button>
            <Button
              onClick={() => moving("/destinasi")}
              className="nav-link"
              variant="none"
            >
              Destinasi
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
