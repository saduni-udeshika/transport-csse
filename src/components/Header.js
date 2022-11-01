import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

function Header() {
  const { user, logOut } = useUserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/home">Ticketing System 🚌 </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/home">Crowded Parts</Nav.Link>
          <Nav.Link href="/table">Time Tables</Nav.Link>
          <Nav.Link href="/home">Manage Finance</Nav.Link>
          <Nav.Link href="/home">Assign Inspectors</Nav.Link>
          <NavDropdown title="More" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/home">View Reports</NavDropdown.Item>
            <NavDropdown.Item href="/home">Feedbacks</NavDropdown.Item>
            <NavDropdown.Item href="/about">About us</NavDropdown.Item>
            <NavDropdown.Item href="/home">Contact Drivers</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link eventKey={4} href="/">
            👤
          </Nav.Link>
          <Nav.Link>{user && user.email}</Nav.Link>
          <Button variant="primary" onClick={handleLogOut}>
            Log Out
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
