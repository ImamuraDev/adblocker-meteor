import React from 'react';
import { Navbar, Nav, NavDropdown, Image, Container } from 'react-bootstrap';

const Navigation = () => (
  <Navbar className="py-0">
    <Container>

      <Nav className="justify-content-start" style={{ marginLeft: 95 }}>
        <Navbar.Brand href="#">
          <Image src="https://adblockplus.org/img/adblockplus-logo-color.svg?3288789184" width="250.91" height="63" alt="" />
        </Navbar.Brand>
      </Nav>

      <Nav className="justify-content-end" style={{ marginLeft: 87 }}>
        <Nav.Link className="p-4" href="#" style={{ color: 'black' }}>Download</Nav.Link>
        <Nav.Link className="p-4" href="#" style={{ color: 'black' }}>About</Nav.Link>
        <Nav.Link className="p-4" href="#" style={{ color: 'black' }}>Premium</Nav.Link>
        <Nav.Link className="p-4" href="#" style={{ color: 'black' }}>Help</Nav.Link>

        <NavDropdown title="English (US)" className="p-3" style={{ color: 'black' }} id="drop">
          <NavDropdown.ItemText><Nav.Link href="#">Deutsch (DE)</Nav.Link></NavDropdown.ItemText>
          <NavDropdown.ItemText><Nav.Link href="#">English (US)</Nav.Link></NavDropdown.ItemText>
          <NavDropdown.ItemText><Nav.Link href="#">Espanol (Espana) (ES)</Nav.Link></NavDropdown.ItemText>
        </NavDropdown>

      </Nav>

    </Container>
  </Navbar>
);

export default Navigation;
