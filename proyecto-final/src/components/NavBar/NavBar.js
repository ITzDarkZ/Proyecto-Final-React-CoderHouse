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


/*
const NavBar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-header">
                    <a href="/index" className="navbar-brand"><p>Alejo Sequione</p></a>
                </div>
                <ul className="navbar-list">
                    <li className="active"><a href="/index">Inicio</a></li>
                    <li><a href="/info">Info</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                    <CartWidget/>
                </ul>
            </div>
        </nav>
    );
}
*/

export default NavBar;
