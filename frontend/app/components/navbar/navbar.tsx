import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router"
import { NavLink } from "~/routes/types"

export function CustomNavBar(navLinks: NavLink[]) {
    // todo: https://react-bootstrap.netlify.app/docs/components/navbar/#offcanvas
    return (
        <Navbar bg="transparent" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav">
                    <Nav>
                        {navLinks.map((link) => (
                            <Nav.Link as={Link} to={link.url} key={link.title} className="text-light">
                                {link.title}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}