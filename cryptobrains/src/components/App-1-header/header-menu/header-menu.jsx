import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './header-menu.css';

const HeaderMenu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary header-menu">
      <Container className="header-menu">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Buttom - "Market" */}
            <NavDropdown title="Market" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Market_link_1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Market_link_2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Market_link_3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Market_link_4</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Market_link_5</NavDropdown.Item>
            </NavDropdown>
            {/* Buttom - "Trade" */}
            <NavDropdown title="Trade" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Trade_link_1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Trade_link_2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Trade_link_3</NavDropdown.Item>
            </NavDropdown>
            {/* Buttom - "Earn" */}
            <NavDropdown title="Earn" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Earn_link_1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Earn_link_2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Earn_link_3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Earn_link_4</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Earn_link_5</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            {/* Buttom - other */}
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Career</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderMenu;
