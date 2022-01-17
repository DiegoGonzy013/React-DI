import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { MenuItems } from '../data/MenuItems';

class BootstrapHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              className="logo-image"
              src="https://eu01.edcwb.com/buscador/img/centros/logogrande/7348-a9c730d6b2b644f5b9910364ba6af277.jpg"
            />
            <i className="fas fa-user-graduate" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {MenuItems.map((item) => {
                return <Nav.Link as={Link} to={item.path}>
                  {item.title}</Nav.Link>
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default BootstrapHeader;

<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
  <NavDropdown.Divider />
  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
</NavDropdown>;
