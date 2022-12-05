import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';



const NavBarManu = () => {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink className="show-products-nav" to="/">Home</NavLink>
                    <NavLink className="add-products-nav" to="/addproduct">Add Product</NavLink>
                </Nav>
            </Container>
      </Navbar>
        </div>            
    )
};

export default NavBarManu;