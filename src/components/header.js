import * as React from "react"
import { Link } from "gatsby"
import { Container, Nav, Navbar } from "react-bootstrap"

const links = [
  { text: "blog", to: "/blog" },
  { text: "projects", to: "/projects" },
  { text: "work", to: "/work" },
]

const Header = () => (
  <Navbar bg="dark" expand="lg" variant="dark">
    <Container fluid>
      <Navbar.Brand to="/" as={Link}>
        Timmehs
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {links.map(({ text, to }) => (
            <Link
              key={`header-link-${to}`}
              className="nav-link"
              activeClassName="active"
              to={to}
            >
              {text}
            </Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header
