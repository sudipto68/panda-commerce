import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../logo.png";
import { FaCartPlus } from "react-icons/fa";

const Navbaar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link to="/home">Home</Nav.Link>
            <Nav.Link to="/product">Products</Nav.Link>
            <Nav.Link href="#link">Order Review</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
            <Nav.Link href="#link">
              <FaCartPlus style={{ fontSize: "18px" }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      ;
    </div>
  );
};

export default Navbaar;
