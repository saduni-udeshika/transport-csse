import React from "react";
import {Navbar,Nav,NavDropdown} from "react-bootstrap";


function Header(){

    return( 
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/home">Ticketing System 🚌 </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link eventKey={4} href="/">
      👤 
    </Nav.Link>
      <Nav.Link href="/home">Crowded Parts</Nav.Link>
      <Nav.Link href="/table">Time Tables</Nav.Link>
      <Nav.Link href="/addtimetable">Manage Time Tables</Nav.Link>
      <Nav.Link href="/">Manage Finance</Nav.Link>
      <Nav.Link href="/asignInspectors">Assign Inspectors</Nav.Link>
      <NavDropdown title="More" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/home">View Reports</NavDropdown.Item>
        <NavDropdown.Item href="/home">Feedbacks</NavDropdown.Item>
        <NavDropdown.Item href="/about">About us</NavDropdown.Item>
        <NavDropdown.Item href="/home">Contact Drivers</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
    )

}

export default Header; 