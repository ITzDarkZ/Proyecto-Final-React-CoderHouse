import React from 'react';
import CarritoLogo from '../../images/carrito.png';

const CartWidget = () => {
    return (
        <img className="carrito-imagen" src={CarritoLogo} alt="carrito compras"/>
    );
}

export default CartWidget