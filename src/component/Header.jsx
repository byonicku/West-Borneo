import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.css';

export default function Header() {
  return (
    <Navbar bg="transparent" expand="lg" fixed="top">
      <Container className="inner-navbar">
        <Navbar.Brand href="#">
          <svg
            width="45"
            height="35"
            viewBox="0 0 45 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto d-block align-text-top"
          >
            {/* Your SVG paths here */}
          </svg>
          <div className="logo">
            <h2>Pesona Indonesia</h2>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown">
          <div className="navbar-toggler-icon"/>
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