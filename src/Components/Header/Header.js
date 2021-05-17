import React from "react";
import './Header.css'
import {
    Nav,
    Navbar,
    NavDropdown,
  } from "react-bootstrap";
  import Jump from 'react-reveal/Jump';
  import { LinkContainer } from 'react-router-bootstrap';
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <Navbar className="header_nav" collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <img
            src="https://templatekit.jegtheme.com/syntra/wp-content/uploads/sites/7/2020/08/logo-header-1.png"
            alt=""
            className="header_leftLogo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="header_right" id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <NavDropdown
              className="drop"
              renderMenuOnMount={true}
              title="Home"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/">Home 1</NavDropdown.Item>
              <NavDropdown.Item href="/2">
                Home 2
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              renderMenuOnMount={true}
              title="Pages"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/aboutUs">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/ourTeam">
              Our Team
              </NavDropdown.Item>
              <NavDropdown.Item href="/pricing">Pricing</NavDropdown.Item>
              <NavDropdown.Item href="/error">404</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/services">Services</Nav.Link>
            <NavDropdown
              renderMenuOnMount={true}
              title="Blog"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/blogs">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="/singleBlog">Single Blog</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              renderMenuOnMount={true}
              title="Contact"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/contact1">Contact 1</NavDropdown.Item>
              <NavDropdown.Item href="/contact2">
              Contact 2
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {props.children}
    </div>
  );
}


export default Header;
