import React, {useContext} from 'react';
import carritoLogo from '../../images/carrito.png';
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import {contextCart} from '../CartContext/CartContext'

const CartWidget = () => {
    const cart = useContext(contextCart).Cart
    return (
        <Button variant="dark">
            <img style={{padding: '.1rem .5rem', height: '2rem', cursor: 'pointer'}} src={carritoLogo} alt="carrito compras"/>
                <Badge pill variant="info">{cart.length}</Badge>
            <span className="sr-only">Items en el carrito</span>
        </Button>
    );
}

export default CartWidget