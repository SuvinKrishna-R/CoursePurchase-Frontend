import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Row >
        <Navbar expand="md" className="bg-body-tertiary" style={{height:"100px"}}>
      <Container fluid>
        <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Navbar.Brand href="#">MyCourse</Navbar.Brand>
        </Col>
        <Navbar.Toggle aria-controls="navbarScroll"  />
        <Navbar.Collapse id="navbarScroll">
            <Col >
          <Nav
            className="me-auto  my-2 my-md-0"
            style={{ maxHeight: '100px', display:'flex',justifyContent:'center',alignItems:'center'}} 
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Courses</Nav.Link>
            <Nav.Link href="#action3">LogIn</Nav.Link>
            <Nav.Link href="#action4">LogOut</Nav.Link>


           
          </Nav>
          </Col> 
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  )
}

export default Header