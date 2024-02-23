    import { Navbar, Container, Nav } from 'react-bootstrap';
    import './Header.css';
    import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
            expand="lg"
            fixed="top"
            className={scrolled ? "scrolled-navbar pt-3" : "unscrolled-navbar pt-3"}
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
                <Nav className={scrolled ? "scrolled-header-content ms-auto" : "header-content ms-auto" }>
                <Link to="/" className='nav-link text-white'>Beranda</Link>
                <Link to="/about" className='nav-link text-white'>Tentang Kami</Link>
                <Link to="/destinasi" className='nav-link text-white'>Destinasi</Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        );
    }