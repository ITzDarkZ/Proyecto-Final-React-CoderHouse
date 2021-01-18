import React from 'react';
import CartWidget from '../CartWidget/CartWidget'

import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = () => {
    return(
            <Navbar bg="dark" expand='lg' variant='dark'>
            <Navbar.Brand href="/" exact='true'>Alejo Sequione</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Productos</Nav.Link>
                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                    <NavDropdown.Item href='/category/MLA3025'>Libros</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/carrito"><CartWidget /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    );
}

export default NavBar;
