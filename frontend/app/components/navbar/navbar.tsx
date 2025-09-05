import { useState, useEffect } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap"
import { Link } from "react-router"
import { NavLink } from "~/routes/types"

interface CustomNavBarProps {
    navLinks: NavLink[];
}

export function CustomNavBar({ navLinks }: CustomNavBarProps) {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClose = () => setShowOffcanvas(false);
    const handleShow = () => setShowOffcanvas(true);

    return (
        <>
            <Navbar expand="md" className={`mb-3 ${scrolled ? "opacity-50" : ""}`} sticky="top">

                <Container fluid className="position-relative">
                    <Navbar.Brand
                        href="/"
                        className="d-none d-md-flex align-items-center position-absolute start-0"
                        style={{ minWidth: 0 }}
                    >
                        <img
                            src="/favicon.ico"
                            alt="Logo"
                            width={32}
                            height={32}
                            className="d-inline-block align-top"
                            style={{ marginRight: 8 }}
                        />
                        <span className="ms-2 d-none d-lg-inline" style={{ maxWidth: 250 }}>
                            Emilla & Viktors Bröllop
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} onClick={handleShow} className="custom-toggler" />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand`}
                        aria-labelledby={`offcanvasNavbarLabel-expand`}
                        placement="start"
                        show={showOffcanvas}
                        onHide={handleClose}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                                Emilla & Viktors Bröllop 2032 (33?)
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-center flex-grow-1 pe-3">
                                { navLinks.map((link) => (
                                    <Nav.Link as={Link} to={link.url} key={link.title} onClick={handleClose}>
                                        {link.title}
                                    </Nav.Link>
                                ))}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}