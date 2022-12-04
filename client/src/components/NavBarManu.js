import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


const NavBarManu = () => {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="addproduct">Add Product</Nav.Link>
                </Nav>
            </Container>
      </Navbar>
        </div>            
    )
};

export default NavBarManu;