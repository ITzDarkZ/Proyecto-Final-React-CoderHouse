import React, {useContext} from 'react';
import CarritoLogo from '../../images/carrito.png';
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import {contextCart} from '../CartContext/CartContext'
import './style.css'

const CartWidget = () => {
    const cart = useContext(contextCart).Cart
    return (
        <Button variant="dark">
            <img className="carrito-imagen" src={CarritoLogo} alt="carrito compras"/>
                <Badge pill variant="info">{cart.length}</Badge>
            <span className="sr-only">Items en el carrito</span>
        </Button>
    );
}

export default CartWidget