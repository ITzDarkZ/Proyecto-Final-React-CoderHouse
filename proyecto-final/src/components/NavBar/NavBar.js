import React, {useContext} from 'react';
import CartWidget from '../CartWidget/CartWidget'

import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Link} from 'react-router-dom'
import OrderWidget from '../OrderWidget/OrderWidget';

const NavBar = ({context}) => {
    const cartLength = useContext(context).Cart.length
    const orderLength = useContext(context).Orders.length

    return(
            <Navbar bg="dark" expand='lg' variant='dark'>
            <Navbar.Brand href="/" exact='true'>Alejo Sequione</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/" exact='true'>Productos</Nav.Link>
                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to='/category/0'>Libros</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to='/category/1'>Electronica</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to='/category/2'>Libreria</Link></NavDropdown.Item>
                </NavDropdown>
                </Nav>
                    {cartLength > 0 ? 
                    <Nav.Item><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to='/cart'><CartWidget /></Link></Nav.Item>
                    :
                    null
                    }
                    {
                    orderLength > 0 ? 
                    <Nav.Item><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to='/orders'><OrderWidget /></Link></Nav.Item>
                    :
                    null
                    }
            </Navbar.Collapse>
            </Navbar>
    );
}


export default NavBar;
