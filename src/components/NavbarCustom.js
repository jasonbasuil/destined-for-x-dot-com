import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import { useAuth } from "./../util/auth.js";

function NavbarCustom(props) {
  const auth = useAuth();

  return (
    <Navbar bg={props.bg} variant={props.variant} expand={props.expand}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              className="d-inline-block align-top"
              src={props.logo}
              alt="Logo"
              height="50"
            ></img>
          </Navbar.Brand>
        </LinkContainer>
        <h2 style={{display: "inline-block", overflow: "none", whiteSpace: "nowrap", float:"left"}}>destined for x</h2>
    
        <Navbar.Toggle
          aria-controls="navbar-nav"
          className="border-0"
        ></Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            {auth.user && (
              <NavDropdown id="dropdown" title="Account" alignRight={true}>
                <LinkContainer to="/dashboard">
                  <NavDropdown.Item active={false}>Dashboard</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/settings">
                  <NavDropdown.Item active={false}>Settings</NavDropdown.Item>
                </LinkContainer>

                <Dropdown.Divider></Dropdown.Divider>

                <LinkContainer to="/auth/signout">
                  <NavDropdown.Item
                    active={false}
                    onClick={(e) => {
                      e.preventDefault();
                      auth.signout();
                    }}
                  >
                    Sign out
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}

            <Nav.Item>
              <LinkContainer to="/about">
                <Nav.Link active={false}>About</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/programs">
                <Nav.Link active={false}>Programs</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/testimonials">
                <Nav.Link active={false}>Testimonials</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/apply">
                <Nav.Link active={false}>Apply</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/Team">
                <Nav.Link active={false}>Team</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/volunteer">
                <Nav.Link active={false}>Volunteer</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/donate">
                <Nav.Link active={false}>Donate</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/faq">
                <Nav.Link active={false}>FAQ</Nav.Link>
              </LinkContainer>
            </Nav.Item>

            {!auth.user && (
              <Nav.Item>
                <LinkContainer to="/auth/login">
                  <Nav.Link active={false}>Student Login</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
