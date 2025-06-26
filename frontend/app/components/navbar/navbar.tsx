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
            <Navbar expand="md" className={`bg-body-tertiary mb-3 ${scrolled ? "opacity-50" : ""}`} sticky="top">
                <Container fluid>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} onClick={handleShow} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand`}
                        aria-labelledby={`offcanvasNavbarLabel-expand`}
                        placement="start"
                        show={showOffcanvas}
                        onHide={handleClose}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                                What to put here?
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