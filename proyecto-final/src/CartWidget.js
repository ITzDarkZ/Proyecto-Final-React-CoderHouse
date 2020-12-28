import React from 'react';
import CarritoLogo from './carrito.png';

const CartWidget = () => {
    return (
        <img className="carrito-imagen" src={CarritoLogo} alt="carrito compras"/>
    );
}

export default CartWidget