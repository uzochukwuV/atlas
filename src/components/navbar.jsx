import React from 'react'
import { Button,  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavbarComponent() {
  return (
    <div>
         <Navbar bg="dark" variant="dark" expand={"md"}>
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            AtLas
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">About</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-md`}
                  >
                    <NavDropdown.Item href="#action3">Join Us</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Register
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Login Now
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>


        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent
