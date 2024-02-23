import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.css';
import { useEffect, useState } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
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
        bg={scrolled ? "light" : "transparent"}
        expand="lg"
        fixed="top"
        className={scrolled ? "scrolled-navbar pt-3" : "pt-3"}
      >
        <Container>
          <Navbar.Brand href="#">
            <div className="logo">
              <h2>Pesona Indonesia</h2>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavDropdown">
            <div className="navbar-toggler-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarNavDropdown">
            <Nav className="header-content ms-auto">
              <Nav.Link className="text-white">Beranda</Nav.Link>
              <Nav.Link className="text-white">Tentang Kami</Nav.Link>
              <Nav.Link className="text-white">Destinasi</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}