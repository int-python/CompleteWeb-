import React from "react";
import "./Header.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Jump from "react-reveal/Jump";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <Navbar className="header_nav" collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <img src="/Images/Logo/Logo.png" alt="" className="header_leftLogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="header_right" id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown
              renderMenuOnMount={true}
              title="Pages"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/aboutUs">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/ourTeam">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="/pricing">Pricing</NavDropdown.Item>
              <NavDropdown.Item href="/error">404</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="/contact1">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {props.children}
    </div>
  );
}

export default Header;
