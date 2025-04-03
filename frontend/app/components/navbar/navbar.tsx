import { Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router"
import { NavLink } from "~/routes/types"

export function CustomNavBar(navLinks: NavLink[], homeLink: NavLink) {
    return (
        <Navbar bg='dark' variant='dark' expand="lg" sticky='top'>
            <Navbar.Brand as={Link} to={homeLink.url}>{homeLink.title}</Navbar.Brand>
            <Nav className="me-auto">
                {navLinks.map((link) => (
                    <Nav.Link as={Link} to={link.url} key={link.title} >{link.title}</Nav.Link>
                ))}
            </Nav>
        </Navbar>
    )
}