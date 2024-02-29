import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./Header.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const moving = (link) => {
    scrollToTop();
    navigate(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 650;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`pt-3 ${scrolled ? "scrolled-navbar" : "unscrolled-navbar"}`}>
      <Container>
        <Navbar.Brand style={{ cursor: "pointer" }} onClick={() => scrollToTop()}>
          <div className="logo">
            <h2>Pesona Indonesia</h2>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown">
          <div className="navbar-toggler-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav
            className={
              scrolled
                ? "scrolled-header-content ms-auto"
                : "header-content ms-auto"
            }>
            <Button onClick={() => moving("/")} className="nav-link text-white" variant="none">
              Beranda
            </Button>
            <Button
              onClick={() => moving("/about")}
              className="nav-link text-white" variant="none">
              Tentang Kami
            </Button>
            <Button
              onClick={() => moving("/destinasi")}
              className="nav-link text-white" variant="none">
              Destinasi
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
